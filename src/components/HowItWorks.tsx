import { Package, Clock, Phone, Star } from 'lucide-react';

const steps = [
    {
        icon: Star,
        title: 'Je choisis',
        desc: 'Je sélectionne mes créations parmi les différentes catégories. Minimum 15 pièces, librement mixables.',
    },
    {
        icon: Phone,
        title: 'Je commande',
        desc: "J'envoie ma commande directement à Aïna via WhatsApp avec mes coordonnées.",
    },
    {
        icon: Clock,
        title: 'Aïna prépare',
        desc: 'Aïna confirme ma commande et prépare tout avec soin. Délai de préparation : 48h.',
    },
    {
        icon: Package,
        title: 'Je reçois',
        desc: "Livraison fraîche dans toute la région bordelaise, dans un emballage soigné.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="reveal-on-scroll px-2 py-4">
            <div className="rounded-[2.5rem] bg-white/60 border border-white/60 shadow-[6px_6px_15px_rgba(4,50,34,0.15),-6px_-6px_15px_rgba(255,255,255,0.9)] p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-1">
                    <h2 className="text-3xl font-cormorant text-[#043222]">Comment ça marche ?</h2>
                    <p className="font-inter text-xs text-[#043222]/50 uppercase tracking-widest font-bold">Simple comme bonjour</p>
                </div>

                <div className="space-y-4">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div key={i} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#043222] flex items-center justify-center shadow-[3px_3px_8px_rgba(4,50,34,0.4)]">
                                    <Icon size={20} className="text-white" />
                                </div>
                                <div className="flex-1 pt-1">
                                    <p className="font-inter text-xs font-extrabold uppercase tracking-widest text-[#043222]/40 mb-0.5">
                                        Étape {i + 1}
                                    </p>
                                    <h3 className="font-cormorant text-xl font-bold text-[#043222] leading-none mb-1">{step.title}</h3>
                                    <p className="font-inter text-xs text-[#043222]/60 leading-relaxed">{step.desc}</p>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="absolute left-[3.75rem] h-4 w-px bg-[#043222]/10" style={{ marginTop: '3.5rem' }} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
