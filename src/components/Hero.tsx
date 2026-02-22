import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="reveal-on-scroll px-2 pt-24">
            <div className="rounded-[2.5rem] relative h-[500px] bg-white group overflow-hidden shadow-[6px_6px_15px_rgba(4, 50, 34,0.4),-6px_-6px_15px_rgba(255,255,255,0.8)] border border-white/60">
                {/* Main large image */}
                <div className="absolute inset-x-4 top-4 bottom-24 rounded-[2rem] overflow-hidden bg-white/40">
                    <img
                        src="/aina-hero.PNG"
                        alt="Ena's Kitchen Chef"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center bg-gradient-to-t from-white via-white/90 to-transparent pt-16">
                    <div className="flex flex-col items-center mb-6">
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

                    <a
                        href="#menu"
                        className="inline-flex items-center justify-center gap-2 bg-[#043222] text-white px-8 py-3 rounded-full font-inter font-bold text-sm shadow-[4px_4px_10px_rgba(4, 50, 34,0.3)] transition-all hover:bg-[#043222] active:scale-95"
                    >
                        Order Now <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
