import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import OrderSheet from './components/OrderSheet';
import CartPill from './components/CartPill';
import MobileTabBar from './components/MobileTabBar';
import Toasts from './components/Toasts';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // 1. Observe all reveal-on-scroll elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Observe specific sections for active state in nav/tabbar
    const sections = ['hero', 'menu', 'gallery', 'about', 'cta'];
    const sectionObservers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      revealObserver.disconnect();
      sectionObservers.forEach(o => o?.disconnect());
    };
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen font-inter bg-[#F6E9D9] flex justify-center text-[#043222]">
        <div className="w-full max-w-md bg-[#F6E9D9] min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
          <Nav />

          <main className="flex-1 overflow-y-auto px-4 pb-32 space-y-6 sheet-scroll">
            <Hero />
            <Stats />
            <Menu />
            <About />
            <Gallery />
            <CTA />
            <Footer />
          </main>

          <OrderSheet />
          <CartPill />
          <MobileTabBar activeSection={activeSection} />
          <Toasts />
        </div>
      </div>
    </CartProvider>
  );
}
