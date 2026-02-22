export interface MenuItem {
    id: number;
    name: string;
    category: string;
    price: number;
    desc: string;
    image: string;
    featured?: boolean;
}

export interface CartEntry {
    item: MenuItem;
    qty: number;
}

export interface Toast {
    id: number;
    message: string;
    type?: 'success' | 'error' | 'info';
    leaving?: boolean;
}
