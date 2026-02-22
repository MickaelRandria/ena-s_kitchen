import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section id="cta" className="reveal-on-scroll px-2 pb-4">
            <div className="rounded-[2.5rem] py-20 px-8 relative overflow-hidden bg-[#043222] group shadow-[6px_6px_15px_rgba(4, 50, 34,0.5),-6px_-6px_15px_rgba(255,255,255,0.8)] border border-white/60">
                {/* Decorative background image */}
                <img
                    src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=2000"
                    alt="Coffee and dessert"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-30 transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
                    <div className="space-y-2">
                        <span className="font-inter text-xs uppercase tracking-widest text-white/90 font-extrabold shadow-sm">
                            Ready to Taste?
                        </span>
                        <h2 className="text-4xl text-white font-cormorant leading-tight">
                            Order your <span className="italic text-[#F6E9D9]">moment</span> of joy
                        </h2>
                    </div>

                    <p className="font-inter text-sm md:text-lg text-[#F6E9D9]/90 max-w-xl mx-auto leading-relaxed">
                        Delivered fresh in 48h. Premium packaging and dedicated customer service.
                    </p>

                    <div className="pt-4">
                        <button
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#043222] px-10 py-5 rounded-full font-inter font-bold uppercase tracking-widest text-xs transition-all shadow-[4px_4px_10px_rgba(4, 50, 34,0.3)] hover:bg-white hover:shadow-2xl active:scale-95"
                        >
                            Start my order <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
