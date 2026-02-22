import { useState } from 'react';
import { LayoutGrid, List, Plus } from 'lucide-react';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

const categories = [
    { id: 'signature', label: 'Signature' },
    { id: 'salees', label: 'Salées' },
    { id: 'sucrees', label: 'Sucrées' },
    { id: 'formules', label: 'Formules' }
];

export default function Menu() {
    const [activeCat, setActiveCat] = useState('signature');
    const { addToCart } = useCart();

    const filteredItems = menuItems.filter(item => item.category === activeCat);

    return (
        <section id="menu" className="reveal-on-scroll px-2 py-4">
            <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-1">
                    <h2 className="text-3xl font-cormorant text-[#043222]">Our Menu</h2>
                    <p className="font-inter text-xs text-[#043222] uppercase tracking-widest font-bold">Select Category</p>
                </div>

                {/* Categories */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-2 snap-x">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCat(cat.id)}
                            className={`whitespace-nowrap px-6 py-3 rounded-full font-inter text-xs font-bold transition-all snap-center shadow-[4px_4px_10px_rgba(4, 50, 34,0.3),-4px_-4px_10px_rgba(255,255,255,0.7)] ${activeCat === cat.id ? 'bg-[#043222] text-white border-transparent' : 'bg-white text-[#043222] border border-white/50'}`}
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

    function handleAdd() {
        onAdd();
        setPopped(true);
        setTimeout(() => setPopped(false), 400);
    }

    return (
        <div className="flex items-center gap-4 p-3 rounded-[2rem] bg-white border border-white/60 shadow-[4px_4px_10px_rgba(4,50,34,0.2),-4px_-4px_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_15px_rgba(4,50,34,0.25),-6px_-6px_15px_rgba(255,255,255,1)] active:scale-[0.98]">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full object-cover shadow-inner border-2 border-white/50 flex-shrink-0" />
            <div className="flex-1 min-w-0 py-1">
                <h3 className="font-cormorant text-lg font-bold text-[#043222]">{item.name}</h3>
                <p className="font-inter text-xs text-[#043222]/60 line-clamp-1">{item.desc}</p>
                <p className="font-inter font-bold text-sm text-[#043222] mt-1">{item.price.toFixed(2)}€</p>
            </div>
            <div className="pr-3">
                <button
                    onClick={handleAdd}
                    className={`w-11 h-11 rounded-full bg-[#043222] text-white flex items-center justify-center shadow-[2px_2px_6px_rgba(4,50,34,0.4)] transition-all duration-200 ${popped ? 'animate-scale-pop scale-90' : 'hover:scale-110 hover:shadow-[4px_4px_10px_rgba(4,50,34,0.5)] active:scale-90'}`}
                >
                    <Plus size={18} />
                </button>
            </div>
        </div>
    );
}
