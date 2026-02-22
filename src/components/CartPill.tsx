import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPill() {
    const { totalQty, totalPrice, discountedPrice, promoDiscount, openSheet } = useCart();

    if (totalQty === 0) return null;

    return (
        <div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[800] hidden md:block animate-fade-up"
            onClick={openSheet}
        >
            <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[6px_6px_15px_rgba(4,50,34,0.5),-6px_-6px_15px_rgba(255,255,255,0.8)] border border-white/60 hover:scale-105 transition-all group active:scale-95">
                <div className="w-10 h-10 rounded-full bg-[#043222] text-white flex items-center justify-center shadow-inner transition-colors">
                    <ShoppingCart size={18} />
                </div>
                <div className="text-left text-[#043222]">
                    <p className="font-inter text-[10px] uppercase font-extrabold tracking-widest text-[#043222]">Panier</p>
                    <div className="flex items-center gap-2">
                        {promoDiscount > 0 && (
                            <span className="font-inter text-xs text-[#043222]/40 line-through">{totalPrice.toFixed(2)}€</span>
                        )}
                        <span className="font-cormorant text-xl font-bold">{discountedPrice.toFixed(2)}€</span>
                        <span className="w-1 h-1 rounded-full bg-[#043222]/20" />
                        <span className="font-inter text-xs text-[#043222]/60">{totalQty} articles</span>
                    </div>
                </div>
            </button>
        </div>
    );
}
