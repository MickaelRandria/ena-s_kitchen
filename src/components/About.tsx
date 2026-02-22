import { ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <div id="about" className="rounded-[2.5rem] bg-white/40 p-8 space-y-8 flex flex-col justify-between reveal-on-scroll border border-white/50 shadow-inner mx-2 mt-4">
            <div className="space-y-8 text-center flex flex-col items-center">
                <div className="inline-block relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#F6E9D9] shadow-[4px_4px_10px_rgba(4, 50, 34,0.5)]">
                        <img
                            src="/aina-hero.PNG"
                            alt="Chef Aïna"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#043222] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-[#F6E9D9]">
                        Chef
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-cormorant text-[#043222] leading-tight flex items-center gap-2 justify-center">
                        <span className="text-[#043222]">"</span> Made with Heart <span className="text-[#043222]">"</span>
                    </h2>
                    <p className="font-inter text-sm text-[#043222]/70 leading-relaxed font-medium">
                        Aïna façonne chaque verrine à la main, avec des ingrédients sourcés localement. Elle refuse la standardisation — chaque commande est un moment unique.
                    </p>
                    <p className="font-inter text-[10px] text-[#043222] uppercase font-bold tracking-widest pt-2">
                        Artisanat depuis 2019
                    </p>
                </div>
            </div>

            <div className="pt-2 flex justify-center">
                <a
                    href="#menu"
                    className="group inline-flex items-center gap-3 bg-white px-6 border-white py-3 rounded-full text-[#043222] font-inter text-xs font-bold uppercase tracking-widest shadow-[2px_2px_5px_rgba(4,50,34,0.3),-2px_-2px_5px_rgba(255,255,255,0.8)] border border-white/60 transition-all active:scale-95 hover:scale-105"
                >
                    Notre philosophie
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
}
