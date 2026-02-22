import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="pb-28 pt-10 px-6">
            <div className="w-full">
                <div className="flex flex-col gap-8">
                    {/* Brand & Mission */}
                    <div className="space-y-6 text-center flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <span className="font-script text-6xl text-[#043222] leading-none -mb-4 z-10">
                                Ena's
                            </span>
                            <span className="font-cormorant text-[2.5rem] tracking-[0.1em] text-[#043222] font-semibold">
                                KITCHEN
                            </span>
                            <span className="font-inter text-[9px] tracking-[0.4em] text-[#043222] mt-2 font-bold uppercase">
                                Crafted with love
                            </span>
                        </div>
                        <p className="font-inter text-xs text-[#043222]/60 leading-relaxed max-w-xs mx-auto">
                            Artisanal moments crafted with love and seasonal products. A unique gourmet experience.
                        </p>
                        <div className="flex items-center justify-center gap-4 py-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/60 shadow-[4px_4px_10px_rgba(4, 50, 34,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all text-[#043222]">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/60 shadow-[4px_4px_10px_rgba(4, 50, 34,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all text-[#043222]">
                                <Phone size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/60 shadow-[4px_4px_10px_rgba(4, 50, 34,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all text-[#043222]">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="space-y-3 bg-white p-4 rounded-3xl shadow-inner border border-white/30">
                            <p className="font-inter text-[9px] uppercase tracking-widest text-[#043222]/50 font-bold">Explore</p>
                            <ul className="space-y-2">
                                {['Menu', 'Gallery', 'Story'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="font-inter text-xs font-bold text-[#043222] hover:text-[#043222] transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-3 bg-white p-4 rounded-3xl shadow-inner border border-white/30">
                            <p className="font-inter text-[9px] uppercase tracking-widest text-[#043222]/50 font-bold">Info</p>
                            <ul className="space-y-2">
                                {['Delivery', 'Terms', 'Privacy'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="font-inter text-xs font-bold text-[#043222] hover:text-[#043222] transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#043222]/10 flex flex-col justify-center items-center gap-2">
                    <p className="font-inter text-[9px] text-[#043222]/40 uppercase tracking-widest font-bold">
                        © 2026 Ena's Kitchen
                    </p>
                </div>
            </div>
        </footer>
    );
}
