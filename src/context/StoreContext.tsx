import {createContext, useContext, useEffect, useMemo, useState, ReactNode} from 'react';
import {Product} from '../data/products';

type CartItem = Product & { quantity: number };
type Ctx = {
    cart: CartItem[];
    wishlist: string[];
    addToCart: (p: Product, q?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, q: number) => void;
    clearCart: () => void;
    toggleWishlist: (id: string) => void;
    isWishlisted: (id: string) => boolean;
    total: number;
    count: number
};
const C = createContext<Ctx | null>(null);

export function StoreProvider({children}: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => JSON.parse(localStorage.getItem('furnova-cart') || '[]'));
    const [wishlist, setWishlist] = useState<string[]>(() => JSON.parse(localStorage.getItem('furnova-wishlist') || '[]'));
    useEffect(() => localStorage.setItem('furnova-cart', JSON.stringify(cart)), [cart]);
    useEffect(() => localStorage.setItem('furnova-wishlist', JSON.stringify(wishlist)), [wishlist]);
    const addToCart = (p: Product, q = 1) => setCart(c => {
        const x = c.find(i => i.id === p.id);
        return x ? c.map(i => i.id === p.id ? {...i, quantity: i.quantity + q} : i) : [...c, {...p, quantity: q}]
    });
    const removeFromCart = (id: string) => setCart(c => c.filter(i => i.id !== id));
    const updateQuantity = (id: string, q: number) => setCart(c => c.map(i => i.id === id ? {
        ...i,
        quantity: Math.max(1, q)
    } : i));
    const clearCart = () => setCart([]);
    const toggleWishlist = (id: string) => setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);
    const value = useMemo(() => ({
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted: (id: string) => wishlist.includes(id),
        total: cart.reduce((s, i) => s + i.price * i.quantity, 0),
        count: cart.reduce((s, i) => s + i.quantity, 0)
    }), [cart, wishlist]);
    return <C.Provider value={value}>{children}</C.Provider>
}

export const useStore = () => {
    const v = useContext(C);
    if (!v) throw new Error('useStore must be inside StoreProvider');
    return v
};
