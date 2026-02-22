import React, { createContext, useContext, useState, useCallback } from 'react';
import { MenuItem, CartEntry, Toast } from '../types';

const PROMO_CODES: Record<string, number> = {
    '1stOrder': 0.15,
};

interface CartContextValue {
    cart: CartEntry[];
    addToCart: (item: MenuItem) => void;
    updateQty: (id: number, delta: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    totalQty: number;
    totalPrice: number;
    discountedPrice: number;
    promoCode: string;
    promoDiscount: number;
    promoError: string;
    applyPromo: (code: string) => void;
    removePromo: () => void;
    toasts: Toast[];
    dismissToast: (id: number) => void;
    isSheetOpen: boolean;
    openSheet: () => void;
    closeSheet: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

let toastCounter = 0;

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartEntry[]>([]);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [promoDiscount, setPromoDiscount] = useState(0);
    const [promoError, setPromoError] = useState('');

    const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
        const id = ++toastCounter;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.map(t => t.id === id ? { ...t, leaving: true } : t));
            setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 400);
        }, 2500);
    }, []);

    const addToCart = useCallback((item: MenuItem) => {
        setCart(prev => {
            const existing = prev.find(e => e.item.id === item.id);
            if (existing) {
                showToast(`+1 ${item.name}`, 'info');
                return prev.map(e => e.item.id === item.id ? { ...e, qty: e.qty + 1 } : e);
            }
            showToast(`🌿 ${item.name} ajouté !`, 'success');
            return [...prev, { item, qty: 1 }];
        });
    }, [showToast]);

    const updateQty = useCallback((id: number, delta: number) => {
        setCart(prev => {
            const updated = prev.map(e => e.item.id === id ? { ...e, qty: e.qty + delta } : e);
            return updated.filter(e => e.qty > 0);
        });
    }, []);

    const removeFromCart = useCallback((id: number) => {
        setCart(prev => prev.filter(e => e.item.id !== id));
        showToast('Article retiré', 'error');
    }, [showToast]);

    const clearCart = useCallback(() => setCart([]), []);

    const applyPromo = useCallback((code: string) => {
        const trimmed = code.trim();
        if (PROMO_CODES[trimmed] !== undefined) {
            setPromoCode(trimmed);
            setPromoDiscount(PROMO_CODES[trimmed]);
            setPromoError('');
            showToast(`🎉 Code promo appliqué : -${Math.round(PROMO_CODES[trimmed] * 100)}% !`, 'success');
        } else {
            setPromoError('Code invalide');
            showToast('❌ Code promo invalide', 'error');
        }
    }, [showToast]);

    const removePromo = useCallback(() => {
        setPromoCode('');
        setPromoDiscount(0);
        setPromoError('');
    }, []);

    const totalQty = cart.reduce((s, e) => s + e.qty, 0);
    const totalPrice = cart.reduce((s, e) => s + e.item.price * e.qty, 0);
    const discountedPrice = promoDiscount > 0 ? totalPrice * (1 - promoDiscount) : totalPrice;

    const dismissToast = useCallback((id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <CartContext.Provider value={{
            cart, addToCart, updateQty, removeFromCart, clearCart,
            totalQty, totalPrice, discountedPrice,
            promoCode, promoDiscount, promoError, applyPromo, removePromo,
            toasts, dismissToast,
            isSheetOpen, openSheet: () => setIsSheetOpen(true), closeSheet: () => setIsSheetOpen(false),
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
