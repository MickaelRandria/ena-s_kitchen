import { useState, useRef } from 'react';
import { X, Trash2, Send, ShoppingBag, Tag, CheckCircle, XCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WA_NUMBER = '33617960640';
const MIN_PIECES = 15;

export default function OrderSheet() {
    const {
        cart, removeFromCart, updateQty, totalPrice, discountedPrice,
        promoCode, promoDiscount, promoError, applyPromo, removePromo,
        totalQty, isSheetOpen, closeSheet
    } = useCart();

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [promoInput, setPromoInput] = useState('');

    // Swipe-to-delete state
    const swipeRef = useRef<Record<number, number>>({});
    const [swipeX, setSwipeX] = useState<Record<number, number>>({});

    function handleTouchStart(id: number, e: React.TouchEvent) {
        swipeRef.current[id] = e.touches[0].clientX;
    }
    function handleTouchMove(id: number, e: React.TouchEvent) {
        const dx = Math.min(0, e.touches[0].clientX - (swipeRef.current[id] ?? 0));
        setSwipeX(prev => ({ ...prev, [id]: dx }));
    }
    function handleTouchEnd(id: number) {
        const dx = swipeX[id] ?? 0;
        if (dx < -60) removeFromCart(id);
        setSwipeX(prev => ({ ...prev, [id]: 0 }));
    }

    const canOrder = name.trim() !== '' && tel.trim() !== '' && totalQty >= MIN_PIECES;
    const progressPercent = Math.min(100, (totalQty / MIN_PIECES) * 100);
    const remaining = MIN_PIECES - totalQty;

    function handleApplyPromo() {
        if (promoCode) {
            removePromo();
            setPromoInput('');
        } else {
            applyPromo(promoInput);
        }
    }

    function sendWhatsApp() {
        let text = `🍃 *Nouvelle commande Ena's Kitchen*\n\n`;
        text += `👤 Nom : ${name}\n📞 Tél : ${tel}\n\n`;
        text += `🛒 *Articles :*\n`;
        cart.forEach(({ item, qty }) => {
            text += `• ${qty}× ${item.name} — ${(item.price * qty).toFixed(2)} €\n`;
        });
        text += `\n💰 *Sous-total : ${totalPrice.toFixed(2)} €*`;
        if (promoDiscount > 0) {
            text += `\n🏷️ Code promo (${promoCode}) : -${Math.round(promoDiscount * 100)}%`;
            text += `\n✅ *Total après réduction : ${discountedPrice.toFixed(2)} €*`;
        }
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    }

    return (
        <>
            {isSheetOpen && (
                <div className="fixed inset-0 z-[1000] bg-black/20 backdrop-blur-sm animate-fade-in" onClick={closeSheet} />
            )}

            <div
                className={`fixed right-0 top-0 bottom-0 z-[1100] w-full max-w-md bg-[#F6E9D9] shadow-2xl transition-transform duration-500 ease-out border-l border-white/50 ${isSheetOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full text-[#043222]">
                    {/* Header */}
                    <div className="p-6 flex items-center justify-between border-b border-[#043222]/5">
                        <div className="flex items-center gap-3">
                            <ShoppingBag className="text-[#043222]" size={24} />
                            <h2 className="font-cormorant text-2xl font-bold">Mon Panier</h2>
                        </div>
                        <button
                            onClick={closeSheet}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-[2px_2px_5px_rgba(4,50,34,0.3),-2px_-2px_5px_rgba(255,255,255,0.8)] text-[#043222]/50 hover:text-[#043222] transition-all hover:scale-105 active:scale-95"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto sheet-scroll p-6 space-y-5">
                        {cart.length === 0 ? (
                            <div className="h-40 flex flex-col items-center justify-center text-[#043222]/30 space-y-3">
                                <ShoppingBag size={48} strokeWidth={1} />
                                <p className="font-inter text-sm font-medium uppercase tracking-widest">Le panier est vide</p>
                            </div>
                        ) : (
                            <>
                                {/* Min pieces progress */}
                                <div className={`p-5 rounded-[2rem] border space-y-3 transition-all duration-500 ${totalQty >= MIN_PIECES ? 'bg-[#043222]/5 border-[#043222]/20' : 'bg-white/40 border-white/50'}`}>
                                    <div className="flex justify-between items-center">
                                        <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-[#043222]/50">
                                            Minimum de commande
                                        </p>
                                        <p className={`font-inter text-xs font-bold transition-colors ${totalQty >= MIN_PIECES ? 'text-[#043222]' : 'text-[#043222]/60'}`}>
                                            {totalQty}/{MIN_PIECES} pièces
                                        </p>
                                    </div>
                                    <div className="h-2 w-full bg-white rounded-full overflow-hidden shadow-inner">
                                        <div
                                            className={`h-full transition-all duration-700 rounded-full ${totalQty >= MIN_PIECES ? 'bg-[#043222]' : 'bg-[#043222]/40'}`}
                                            style={{ width: `${progressPercent}%` }}
                                        />
                                    </div>
                                    {totalQty < MIN_PIECES ? (
                                        <p className="font-inter text-[10px] text-[#043222]/50 italic text-center">
                                            ✦ Ajoutez encore <strong>{remaining}</strong> pièce{remaining > 1 ? 's' : ''} pour commander.
                                        </p>
                                    ) : (
                                        <p className="font-inter text-[10px] text-[#043222] font-bold text-center">
                                            ✓ Minimum atteint — vous pouvez commander !
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {cart.map(({ item, qty }) => (
                                        <div
                                            key={item.id}
                                            className="relative overflow-hidden group rounded-[2rem] shadow-[4px_4px_10px_rgba(4,50,34,0.2),-4px_-4px_10px_rgba(255,255,255,0.8)]"
                                            onTouchStart={e => handleTouchStart(item.id, e)}
                                            onTouchMove={e => handleTouchMove(item.id, e)}
                                            onTouchEnd={() => handleTouchEnd(item.id)}
                                        >
                                            {/* Swipe delete bg */}
                                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-red-400 flex items-center justify-center rounded-r-[2rem]">
                                                <Trash2 className="text-white" size={18} />
                                            </div>

                                            {/* Item Content */}
                                            <div
                                                className="relative z-10 bg-white p-3 rounded-[2rem] border border-white/50 flex items-center gap-3 transition-transform"
                                                style={{ transform: `translateX(${(swipeX[item.id] || 0)}px)` }}
                                            >
                                                <img src={item.image} className="w-14 h-14 rounded-full object-cover border-2 border-white/50 flex-shrink-0" alt={item.name} />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-cormorant text-base font-bold truncate">{item.name}</h3>
                                                    <p className="font-inter text-xs font-bold text-[#043222]">{(item.price * qty).toFixed(2)}€</p>
                                                </div>
                                                <div className="flex items-center gap-2 bg-[#F6E9D9] px-3 py-1.5 rounded-full shadow-inner flex-shrink-0">
                                                    <button
                                                        onClick={() => updateQty(item.id, -1)}
                                                        className="w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-sm text-[#043222] font-bold text-lg leading-none hover:scale-110 active:scale-95 transition-transform"
                                                    >−</button>
                                                    <span className="font-inter text-sm font-bold w-5 text-center">{qty}</span>
                                                    <button
                                                        onClick={() => updateQty(item.id, 1)}
                                                        className="w-6 h-6 rounded-full flex items-center justify-center bg-[#043222] text-white shadow-sm font-bold text-lg leading-none hover:scale-110 active:scale-95 transition-transform"
                                                    >+</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Checkout Footer */}
                    {cart.length > 0 && (
                        <div className="p-6 border-t border-[#043222]/5 bg-white/60 space-y-4 shadow-[0_-10px_20px_rgba(4,50,34,0.1)] rounded-t-[2.5rem] backdrop-blur-sm">

                            {/* Promo code */}
                            <div className="space-y-2">
                                {promoCode ? (
                                    <div className="flex items-center justify-between bg-[#043222]/5 border border-[#043222]/20 px-4 py-3 rounded-full">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-[#043222]" />
                                            <span className="font-inter text-xs font-bold text-[#043222]">{promoCode}</span>
                                            <span className="font-inter text-xs text-[#043222]/60">— -{Math.round(promoDiscount * 100)}%</span>
                                        </div>
                                        <button
                                            onClick={handleApplyPromo}
                                            className="text-[#043222]/40 hover:text-[#043222] transition-colors"
                                        >
                                            <XCircle size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <div className="flex-1 flex items-center gap-2 bg-white px-4 rounded-full shadow-inner border border-white/50">
                                            <Tag size={14} className="text-[#043222]/40 flex-shrink-0" />
                                            <input
                                                type="text"
                                                placeholder="Code promo"
                                                value={promoInput}
                                                onChange={e => setPromoInput(e.target.value)}
                                                onKeyDown={e => e.key === 'Enter' && handleApplyPromo()}
                                                className="flex-1 py-3 bg-transparent text-sm font-inter outline-none placeholder-[#043222]/30"
                                            />
                                        </div>
                                        <button
                                            onClick={handleApplyPromo}
                                            className="bg-[#043222] text-white px-4 py-3 rounded-full font-inter text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                                        >
                                            Appliquer
                                        </button>
                                    </div>
                                )}
                                {promoError && !promoCode && (
                                    <p className="font-inter text-[10px] text-red-500 pl-4">{promoError}</p>
                                )}
                            </div>

                            {/* Totals */}
                            <div className="space-y-1">
                                {promoDiscount > 0 && (
                                    <div className="flex justify-between items-center">
                                        <span className="font-inter text-xs text-[#043222]/40 uppercase tracking-widest">Sous-total</span>
                                        <span className="font-inter text-sm text-[#043222]/40 line-through">{totalPrice.toFixed(2)}€</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-end">
                                    <span className="font-inter text-xs font-bold uppercase tracking-widest text-[#043222]/50">Total</span>
                                    <div className="flex items-center gap-2">
                                        {promoDiscount > 0 && (
                                            <span className="font-inter text-xs font-bold text-[#043222] bg-[#043222]/10 px-2 py-0.5 rounded-full">
                                                -{Math.round(promoDiscount * 100)}%
                                            </span>
                                        )}
                                        <span className="font-cormorant text-3xl font-bold text-[#043222]">{discountedPrice.toFixed(2)}€</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact fields */}
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Votre Nom"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full px-5 py-4 rounded-full bg-white border-none text-sm font-inter outline-none focus:ring-2 focus:ring-[#043222]/30 shadow-inner placeholder-[#043222]/40 transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Téléphone"
                                    value={tel}
                                    onChange={e => setTel(e.target.value)}
                                    className="w-full px-5 py-4 rounded-full bg-white border-none text-sm font-inter outline-none focus:ring-2 focus:ring-[#043222]/30 shadow-inner placeholder-[#043222]/40 transition-all"
                                />
                            </div>

                            <button
                                onClick={sendWhatsApp}
                                disabled={!canOrder}
                                className={`w-full py-5 rounded-full flex items-center justify-center gap-3 font-inter text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 ${canOrder
                                    ? 'bg-[#043222] text-white shadow-[4px_4px_10px_rgba(4,50,34,0.4)] hover:shadow-[6px_6px_15px_rgba(4,50,34,0.5)] hover:scale-[1.02] active:scale-95'
                                    : 'bg-white text-[#043222]/25 cursor-not-allowed shadow-inner'
                                    }`}
                            >
                                <Send size={16} />
                                {!canOrder && totalQty < MIN_PIECES
                                    ? `Minimum ${MIN_PIECES} pièces`
                                    : !canOrder
                                        ? 'Remplissez vos coordonnées'
                                        : 'Commander via WhatsApp'
                                }
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
