import { Home, Utensils, Image, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MobileTabBar({ activeSection }: { activeSection: string }) {
    const { openSheet, totalQty } = useCart();

    const navItems = [
        { id: 'hero', icon: Home, label: 'Accueil' },
        { id: 'menu', icon: Utensils, label: 'La Carte' },
        { id: 'gallery', icon: Image, label: 'Galerie' },
        { id: 'about', icon: User, label: 'Aïna' },
    ];

    return (
        <div className="fixed bottom-6 inset-x-4 z-[900] md:hidden">
            <div className="bg-white/90 backdrop-blur-2xl rounded-full p-2 shadow-[6px_6px_15px_rgba(4, 50, 34,0.5),-6px_-6px_15px_rgba(255,255,255,0.8)] border border-white/60 flex items-center justify-around">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex flex-col items-center gap-1 p-3 rounded-full transition-all ${activeSection === item.id ? 'bg-[#043222] text-white shadow-inner' : 'text-[#043222]/50'
                            }`}
                    >
                        <item.icon size={20} strokeWidth={activeSection === item.id ? 2.5 : 2} />
                        <span className="text-[10px] font-bold uppercase tracking-wider scale-90">{item.label}</span>
                    </a>
                ))}

                <div className="w-px h-8 bg-[#043222]/10 mx-1" />

                <button
                    onClick={openSheet}
                    className="relative flex flex-col items-center gap-1 p-3 rounded-full text-[#043222]"
                >
                    <ShoppingBag size={20} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider scale-90">Panier</span>
                    {totalQty > 0 && (
                        <span className="absolute top-2 right-2 w-4 h-4 bg-[#043222] text-white text-[9px] rounded-full flex items-center justify-center border-2 border-[#F6E9D9] font-bold">
                            {totalQty}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}
