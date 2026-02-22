import { useCart } from '../context/CartContext';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function Toasts() {
    const { toasts, dismissToast } = useCart();

    return (
        <div className="fixed top-24 right-4 z-[2000] space-y-2 pointer-events-none">
            {toasts.map(toast => {
                const isError = toast.type === 'error';
                const isInfo = toast.type === 'info';
                const Icon = isError ? AlertCircle : isInfo ? Info : CheckCircle;

                return (
                    <div
                        key={toast.id}
                        onClick={() => dismissToast(toast.id)}
                        className={`
                            px-5 py-3 rounded-[2rem] shadow-xl border flex items-center gap-3 
                            pointer-events-auto cursor-pointer transition-all duration-300
                            ${toast.leaving ? 'opacity-0 translate-x-4 scale-90' : 'opacity-100 translate-x-0 scale-100'}
                            ${isError
                                ? 'bg-red-50 border-red-100 text-red-700'
                                : isInfo
                                    ? 'bg-[#043222]/5 border-[#043222]/10 text-[#043222]'
                                    : 'bg-white border-white text-[#043222]'
                            }
                            animate-slide-in-right
                        `}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isError ? 'bg-red-100' : isInfo ? 'bg-[#043222]/10' : 'bg-[#043222]/10'}`}>
                            <Icon size={16} />
                        </div>
                        <p className="font-inter text-xs font-semibold leading-tight">{toast.message}</p>
                    </div>
                );
            })}
        </div>
    );
}
