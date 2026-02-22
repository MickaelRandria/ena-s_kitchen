import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
    // SECTION: SIGNATURE
    {
        id: 1,
        name: 'Citron Meringué',
        category: 'signature',
        price: 1.5,
        desc: 'Palais breton, crème citron, meringue fondante',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800',
    },
    {
        id: 2,
        name: 'PistachioBerry',
        category: 'signature',
        price: 6.0,
        desc: 'Génoise nature, praliné pistache, insert framboise, chantilly pistache',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
        featured: true,
    },
    {
        id: 3,
        name: 'Fraisier Basilic',
        category: 'signature',
        price: 1.5,
        desc: 'Mini génoise, compotée fraise-basilic, crème diplomate',
        image: 'https://images.unsplash.com/photo-1464305795204-6f5bdf7f8141?w=800',
        featured: true,
    },

    // SECTION: SALÉES
    {
        id: 10,
        name: 'Tomate Mozza',
        category: 'salees',
        price: 1.5,
        desc: 'Roquette, tomate cerise, billes de mozzarella, pesto verde',
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800',
    },
    {
        id: 11,
        name: 'Salmon Fresh',
        category: 'salees',
        price: 1.5,
        desc: 'Mousse de fromage frais, saumon fumé de qualité',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800',
    },
    {
        id: 12,
        name: 'Tsatziky Concombre',
        category: 'salees',
        price: 1.5,
        desc: 'Tsatziky, dés de concombre, aneth, mini falafel',
        image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?w=800',
    },
    {
        id: 13,
        name: 'Poulet Dynamite',
        category: 'salees',
        price: 1.5,
        desc: 'Poulet, panure maison, sauce dynamite (mayo japonaise & sriracha)',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800',
    },
    {
        id: 14,
        name: 'Crevette Dynamite',
        category: 'salees',
        price: 1.5,
        desc: 'Crevettes, panure maison, sauce dynamite iconique',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800',
    },

    // SECTION: SUCRÉES
    {
        id: 20,
        name: 'Exotique Mango',
        category: 'sucrees',
        price: 1.5,
        desc: 'Palet breton, coulis de mangue-passion, chantilly aérienne',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
    },
    {
        id: 21,
        name: 'Caramel Speculos',
        category: 'sucrees',
        price: 1.5,
        desc: 'Brisures de spéculos, chantilly, caramel beurre salé maison',
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800',
    },
    {
        id: 22,
        name: 'Pavlova Saison',
        category: 'sucrees',
        price: 1.4,
        desc: 'Meringue artisanale, chantilly vanille, fruits de saison',
        image: 'https://images.unsplash.com/photo-1516739638060-619f79883652?w=800',
    },
    {
        id: 23,
        name: 'Éclair Chocolat',
        category: 'sucrees',
        price: 1.4,
        desc: 'Ganache intense chocolat & grué de cacao',
        image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800',
    },
    {
        id: 24,
        name: 'Brownie Pécan',
        category: 'sucrees',
        price: 1.4,
        desc: 'Chocolat noir Valrhona, caramel beurre salé, éclats de noix de pécan',
        image: 'https://images.unsplash.com/photo-1534353456722-1320fa39e55a?w=800',
    },

    // SECTION: FORMULES
    {
        id: 30,
        name: 'Poire Vanille (Part)',
        category: 'formules',
        price: 5.5,
        desc: 'Génoise vanille, compotée de poire infusée, chantilly ultra vanillée',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab752?w=800',
    },
    {
        id: 31,
        name: 'Nocciolata (Part)',
        category: 'formules',
        price: 5.5,
        desc: 'Génoise vanille, croustillant chocolat, chantilly nocciolata',
        image: 'https://images.unsplash.com/photo-1586788680434-30d324631ffc?w=800',
    },
    {
        id: 32,
        name: 'Snickers (Part)',
        category: 'formules',
        price: 5.5,
        desc: 'Génoise au chocolat, ganache montée chocolat, cacahuètes grillées & caramel beurre salé',
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8ed563ad?w=800',
    },
    {
        id: 33,
        name: 'Red Velvet (Part)',
        category: 'formules',
        price: 5.5,
        desc: 'Génoise rouge au chocolat, crème cream cheese onctueuse',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800',
    },
    {
        id: 34,
        name: 'Forêt Noire (Part)',
        category: 'formules',
        price: 5.5,
        desc: 'Génoise chocolat, purée de cerise, cerises griottes, chantilly ultra vanillée',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800',
    }
];

export const galleryItems = [
    { image: '/buche.PNG', label: 'Bûche' },
    { image: '/choux.PNG', label: 'Choux' },
    { image: '/foretnoire.PNG', label: 'Forêt Noire' },
    { image: '/Gateau.PNG', label: 'Gâteau' },
    { image: '/gateau-polenta.PNG', label: 'Gâteau Polenta' },
    { image: '/miniburger.PNG', label: 'Mini Burger' },
];
