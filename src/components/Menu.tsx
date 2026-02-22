import { useState } from 'react';
import { LayoutGrid, List, Plus, Info } from 'lucide-react';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

const MIN_PIECES = 15;

const categories = [
    { id: 'signature', label: 'Signature' },
    { id: 'salees', label: 'Salées' },
    { id: 'sucrees', label: 'Sucrées' },
    { id: 'formules', label: 'Formules' }
];

export default function Menu() {
    const [activeCat, setActiveCat] = useState('signature');
    const { addToCart, totalQty } = useCart();

    const filteredItems = menuItems.filter(item => item.category === activeCat);

    return (
        <section id="menu" className="reveal-on-scroll px-2 py-4">
            <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-1">
                    <h2 className="text-3xl font-cormorant text-[#043222]">La Carte</h2>
                    <p className="font-inter text-xs text-[#043222] uppercase tracking-widest font-bold">Choisissez une catégorie</p>
                </div>

                {/* Minimum order notice */}
                <div className="flex items-center gap-3 bg-white/60 border border-[#043222]/10 px-5 py-3 rounded-full mx-2">
                    <Info size={14} className="text-[#043222]/50 flex-shrink-0" />
                    <p className="font-inter text-[11px] text-[#043222]/60 leading-snug">
                        <span className="font-bold text-[#043222]">Minimum {MIN_PIECES} pièces</span> par commande.&nbsp;
                        {totalQty > 0
                            ? <span className="text-[#043222] font-semibold">({totalQty}/{MIN_PIECES} dans votre panier)</span>
                            : <span className="text-[#043222]/50">Vous pouvez mixer les catégories.</span>
                        }
                    </p>
                </div>

                {/* Categories */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-2 snap-x">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCat(cat.id)}
                            className={`whitespace-nowrap px-6 py-3 rounded-full font-inter text-xs font-bold transition-all snap-center shadow-[4px_4px_10px_rgba(4,50,34,0.3),-4px_-4px_10px_rgba(255,255,255,0.7)] ${activeCat === cat.id ? 'bg-[#043222] text-white border-transparent' : 'bg-white text-[#043222] border border-white/50'}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Items List */}
                <div className="space-y-4 px-2">
                    {filteredItems.map(item => (
                        <div key={item.id} className="animate-fade-up">
                            <MenuCard item={item} onAdd={() => addToCart(item)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MenuCard({ item, onAdd }: { item: MenuItem; onAdd: () => void }) {
    const [popped, setPopped] = useState(false);
    const [popped15, setPopped15] = useState(false);
    const { cart, addToCartQty } = useCart();
    const qtyInCart = cart.find(e => e.item.id === item.id)?.qty ?? 0;

    function handleAdd() {
        onAdd();
        setPopped(true);
        setTimeout(() => setPopped(false), 400);
    }

    function handleAdd15() {
        addToCartQty(item, 15);
        setPopped15(true);
        setTimeout(() => setPopped15(false), 400);
    }

    return (
        <div className="flex items-center gap-3 p-3 rounded-[2rem] bg-white border border-white/60 shadow-[4px_4px_10px_rgba(4,50,34,0.2),-4px_-4px_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_15px_rgba(4,50,34,0.25),-6px_-6px_15px_rgba(255,255,255,1)] active:scale-[0.98]">
            <div className="relative flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover shadow-inner border-2 border-white/50" />
                {qtyInCart > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#043222] text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-md">
                        {qtyInCart}
                    </span>
                )}
            </div>
            <div className="flex-1 min-w-0 py-1">
                <h3 className="font-cormorant text-base font-bold text-[#043222] leading-tight">{item.name}</h3>
                <p className="font-inter text-[10px] text-[#043222]/60 line-clamp-1">{item.desc}</p>
                <p className="font-inter font-bold text-xs text-[#043222] mt-0.5">{item.price.toFixed(2)}€</p>
            </div>
            {/* Two-button group */}
            <div className="flex flex-col gap-1.5 pr-2 flex-shrink-0">
                {/* +1 button */}
                <button
                    onClick={handleAdd}
                    className={`w-9 h-9 rounded-full bg-[#043222] text-white flex items-center justify-center shadow-[2px_2px_6px_rgba(4,50,34,0.4)] transition-all duration-200 ${popped ? 'animate-scale-pop scale-90' : 'hover:scale-110 active:scale-90'}`}
                    title="Ajouter 1"
                >
                    <Plus size={16} />
                </button>
                {/* +15 button */}
                <button
                    onClick={handleAdd15}
                    className={`h-6 px-2 rounded-full bg-[#043222]/10 border border-[#043222]/20 text-[#043222] font-inter font-bold text-[9px] tracking-wide flex items-center justify-center transition-all duration-200 ${popped15 ? 'animate-scale-pop scale-90' : 'hover:bg-[#043222]/20 active:scale-90'}`}
                    title="Ajouter 15 d'un coup"
                >
                    ×15
                </button>
            </div>
        </div>
    );
}
