import { useState } from 'react';
import { X, Search } from 'lucide-react';
import { galleryItems } from '../data/menu';

export default function Gallery() {
    const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

    return (
        <div id="gallery" className="rounded-[2.5rem] bg-white/40 p-6 space-y-6 reveal-on-scroll border border-white/60 shadow-[4px_4px_10px_rgba(4, 50, 34,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] mx-2">
            <div className="text-center space-y-1">
                <h2 className="text-3xl font-cormorant text-[#043222]">Galerie</h2>
                <p className="font-inter text-xs text-[#043222] uppercase tracking-widest font-bold">Les créations d'Aïna</p>
            </div>

            <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[500px] scrollbar-hide pr-2">
                {galleryItems.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setLightboxItem(item)}
                        className="relative aspect-square rounded-[2rem] overflow-hidden group cursor-pointer shadow-inner border-2 border-white/50"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-[#043222]/30 transition-colors flex items-center justify-center">
                            <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </div>
                    </div>
                ))}
            </div>

            {lightboxItem && (
                <div
                    className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
                    onClick={() => setLightboxItem(null)}
                >
                    <button className="absolute top-8 right-8 text-white bg-[#043222]/50 p-3 rounded-full"><X size={24} /></button>
                    <img
                        src={lightboxItem.image}
                        alt={lightboxItem.label}
                        className="max-w-full max-h-full rounded-[2rem] object-contain shadow-2xl animate-spring-in border-4 border-white/50"
                    />
                </div>
            )}
        </div>
    );
}
