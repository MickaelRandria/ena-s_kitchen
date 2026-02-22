import { ArrowRight, MapPin } from 'lucide-react';

export default function CTA() {
    return (
        <section id="cta" className="reveal-on-scroll px-2 pb-4">
            <div className="rounded-[2.5rem] py-20 px-8 relative overflow-hidden bg-[#043222] group shadow-[6px_6px_15px_rgba(4,50,34,0.5),-6px_-6px_15px_rgba(255,255,255,0.8)] border border-white/60">
                {/* Decorative background image */}
                <img
                    src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=2000"
                    alt="Décoration culinaire"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-30 transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
                    <div className="space-y-2">
                        <span className="font-inter text-xs uppercase tracking-widest text-white/90 font-extrabold shadow-sm">
                            Prêt à vous régaler ?
                        </span>
                        <h2 className="text-4xl text-white font-cormorant leading-tight">
                            Commandez votre <span className="italic text-[#F6E9D9]">moment</span> de bonheur
                        </h2>
                    </div>

                    <p className="font-inter text-sm text-[#F6E9D9]/90 max-w-xl mx-auto leading-relaxed">
                        Livraison fraîche sous 48h. Emballage soigné et service client dédié.
                    </p>

                    {/* Delivery zone badge */}
                    <div className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full inline-flex mx-auto w-fit">
                        <MapPin size={14} className="text-[#F6E9D9]" />
                        <span className="font-inter text-xs text-[#F6E9D9] font-bold uppercase tracking-widest">
                            Livraison dans toute la région bordelaise
                        </span>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#043222] px-10 py-5 rounded-full font-inter font-bold uppercase tracking-widest text-xs transition-all shadow-[4px_4px_10px_rgba(4,50,34,0.3)] hover:shadow-2xl hover:scale-105 active:scale-95 group/btn"
                        >
                            Passer ma commande
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
