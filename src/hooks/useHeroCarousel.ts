import { useEffect, useRef } from 'react';

export function useHeroCarousel(slideCount: number, interval = 5000) {
    const currentRef = useRef(0);

    useEffect(() => {
        const slides = Array.from(document.querySelectorAll('.hero-slide')) as HTMLElement[];
        if (!slides.length) return;
        slides[0].classList.add('active');

        const timer = setInterval(() => {
            slides[currentRef.current].classList.remove('active');
            currentRef.current = (currentRef.current + 1) % slideCount;
            slides[currentRef.current].classList.add('active');
        }, interval);

        return () => clearInterval(timer);
    }, [slideCount, interval]);
}
