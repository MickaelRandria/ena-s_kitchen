import { useState, useEffect, useRef } from 'react';

export function useCountUp(target: number, duration = 1500, active: boolean = false) {
    const [value, setValue] = useState(0);
    const startRef = useRef<number | null>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (!active) return;
        const step = (ts: number) => {
            if (!startRef.current) startRef.current = ts;
            const progress = Math.min((ts - startRef.current) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setValue(Math.floor(eased * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(step);
            else setValue(target);
        };
        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [active, target, duration]);

    return value;
}

export function useIntersection(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [intersected, setIntersected] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIntersected(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, intersected };
}
