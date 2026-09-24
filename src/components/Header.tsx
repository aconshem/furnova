import {Menu, Search, ShoppingBag, Heart, X} from 'lucide-react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {site} from '../config/site';
import {useStore} from '../context/StoreContext';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [q, setQ] = useState('');
    const nav = useNavigate();
    const {count, wishlist} = useStore();
    const go = (e: any) => {
        e.preventDefault();
        if (q.trim()) nav(`/shop?search=${encodeURIComponent(q)}`);
    };
    return <>
        <div className="bg-[#2f2924] py-2 text-center text-xs tracking-wide text-white">{site.announcement}</div>
        <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fbf9f6]/95 backdrop-blur">
            <div className="container flex h-20 items-center justify-between gap-6"><Link to="/"
                                                                                          className="text-xl font-black tracking-[.18em]">{site.brandName}</Link>
                <nav
                    className="hidden items-center gap-5 text-sm lg:flex">{['Shop', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Decor', 'About', 'Contact'].map(x =>
                    <Link key={x}
                          to={x === 'Shop' ? '/shop' : x === 'About' ? '/about' : x === 'Contact' ? '/contact' : `/category/${x.toLowerCase().replace(' ', '-')}`}
                          className="hover:text-[#9a7449]">{x}</Link>)}</nav>
                <div className="flex items-center gap-2">
                    <form onSubmit={go}
                          className="hidden items-center rounded-full border border-black/10 bg-white px-3 md:flex">
                        <Search size={16}/><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search"
                                                  className="w-28 bg-transparent px-2 py-2 text-sm outline-none"/>
                    </form>
                    <Link to="/wishlist" className="relative rounded-full p-2" aria-label="Wishlist"><Heart
                        size={20}/>{wishlist.length > 0 &&
                        <b className="absolute -right-0.5 -top-0.5 rounded-full bg-[#9a7449] px-1.5 text-[10px] text-white">{wishlist.length}</b>}
                    </Link><Link to="/cart" className="relative rounded-full p-2" aria-label="Cart"><ShoppingBag
                    size={20}/>{count > 0 &&
                    <b className="absolute -right-0.5 -top-0.5 rounded-full bg-[#2f2924] px-1.5 text-[10px] text-white">{count}</b>}
                </Link>
                    <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)}
                            aria-label="Menu">{open ? <X/> : <Menu/>}</button>
                </div>
            </div>
            {open && <div className="border-t bg-[#fbf9f6] p-5 lg:hidden">
                <div
                    className="grid gap-4 text-lg">{['Shop', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Decor', 'About', 'Contact'].map(x =>
                    <Link onClick={() => setOpen(false)} key={x}
                          to={x === 'Shop' ? '/shop' : x === 'About' ? '/about' : x === 'Contact' ? '/contact' : `/category/${x.toLowerCase().replace(' ', '-')}`}>{x}</Link>)}</div>
            </div>}</header>
    </>
}
