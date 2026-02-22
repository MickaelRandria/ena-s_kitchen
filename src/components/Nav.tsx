import { useState, useEffect } from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const { openSheet, totalQty } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 inset-x-0 z-[900] transition-all duration-500 flex justify-center p-4 md:p-6 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
            <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-black/5' : 'bg-transparent'}`}>
                {/* Brand */}
                <div className="flex flex-col items-center justify-center">
                    <span className={`font-script text-3xl leading-none -mb-2 transition-colors ${scrolled ? 'text-black' : 'text-[#043222]'}`}>
                        Ena's
                    </span>
                    <span className={`font-cormorant text-xl tracking-[0.2em] font-medium leading-none transition-colors ${scrolled ? 'text-black' : 'text-[#043222]'}`}>
                        KITCHEN
                    </span>
                </div>

                {/* Links - Desktop */}
                <div className="hidden md:flex items-center gap-10">
                    {['Menu', 'Gallery', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`font-inter text-xs uppercase tracking-widest font-semibold hover:text-ena-accent transition-colors ${scrolled ? 'text-black/60' : 'text-ena-green/70'}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={openSheet}
                        className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-105 active:scale-95 ${scrolled ? 'bg-ena-green text-white shadow-md' : 'bg-white text-ena-green shadow-xl border border-white/50'}`}
                    >
                        <ShoppingCart size={20} />
                        {totalQty > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-ena-accent text-white text-[10px] rounded-full flex items-center justify-center border-2 border-white font-bold">
                                {totalQty}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
