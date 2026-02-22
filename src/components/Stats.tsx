import { useEffect, useState } from 'react';

const stats = [
    { label: 'Créations', value: 100, suffix: '+' },
    { label: 'Satisfaction', value: 98, suffix: '%' },
    { label: 'Expérience', value: 5, suffix: ' ans' },
    { label: 'Délai', value: 48, suffix: 'h' }
];

export default function Stats() {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const intervals = stats.map((stat, i) => {
            const step = Math.max(1, Math.floor(stat.value / 40));
            return setInterval(() => {
                setCounts(prev => {
                    const next = [...prev];
                    if (next[i] < stat.value) next[i] = Math.min(stat.value, next[i] + step);
                    return next;
                });
            }, 10);
        });
        return () => intervals.forEach(clearInterval);
    }, []);

    return (
        <div className="rounded-[2.5rem] bg-white/40 p-6 text-[#043222] reveal-on-scroll border border-white/60 shadow-[4px_4px_10px_rgba(4, 50, 34,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)]">
            <div className="grid grid-cols-2 gap-4 items-center">
                {stats.map((stat, i) => (
                    <div key={i} className="space-y-1 text-center bg-white rounded-full py-4 shadow-inner border border-white/30">
                        <p className="font-cormorant text-3xl font-bold">
                            {counts[i]}{stat.suffix}
                        </p>
                        <p className="font-inter text-[9px] uppercase tracking-widest text-[#043222]/60 font-bold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
