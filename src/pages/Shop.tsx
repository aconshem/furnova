import {useMemo, useState} from 'react';
import {useSearchParams, Link} from 'react-router-dom';
import {products} from '../data/products';
import ProductCard from '../components/ProductCard';
import {SlidersHorizontal, X} from 'lucide-react';

export default function Shop() {
    const [params] = useSearchParams();
    const [search, setSearch] = useState(params.get('search') || '');
    const [cat, setCat] = useState(params.get('category') || 'All');
    const [sort, setSort] = useState('Featured');
    const [max, setMax] = useState(200000);
    const [open, setOpen] = useState(false);
    const cats = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Storage', 'Decor'];
    const filtered = useMemo(() => {
        let a = products.filter(p => (cat === 'All' || p.category === cat) && p.price <= max && `${p.name} ${p.category} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(search.toLowerCase()));
        return [...a].sort((x, y) => sort === 'Price: Low to High' ? x.price - y.price : sort === 'Price: High to Low' ? y.price - x.price : sort === 'Name A-Z' ? x.name.localeCompare(y.name) : sort === 'Newest' ? Number(y.isNew) - Number(x.isNew) : Number(y.isFeatured) - Number(x.isFeatured))
    }, [search, cat, max, sort]);
    return <main className="container py-14">
        <div className="flex flex-col gap-5 border-b pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">Collection</p><h1
                className="serif mt-2 text-5xl">Shop Furniture</h1><p className="mt-3 max-w-xl text-gray-500">Browse
                pieces for every room, with simple WhatsApp ordering at checkout.</p></div>
            <button onClick={() => setOpen(!open)}
                    className="flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm lg:hidden">
                <SlidersHorizontal size={16}/> Filters
            </button>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
            <aside className={`${open ? 'block' : 'hidden'} lg:block`}>
                <div className="sticky top-28 space-y-8">
                    <div><h3 className="font-semibold">Category</h3>
                        <div className="mt-3 grid gap-2">{cats.map(c => <button key={c} onClick={() => setCat(c)}
                                                                                className={`text-left text-sm ${cat === c ? 'font-semibold text-[#9a7449]' : ''}`}>{c}</button>)}</div>
                    </div>
                    <div><h3 className="font-semibold">Maximum price</h3><input className="mt-4 w-full accent-[#9a7449]"
                                                                                type="range" min="10000" max="200000"
                                                                                step="5000" value={max}
                                                                                onChange={e => setMax(Number(e.target.value))}/>
                        <p className="mt-2 text-sm text-gray-500">Up to KSh {max.toLocaleString()}</p></div>
                </div>
            </aside>
            <div>
                <div className="mb-5 flex flex-col gap-3 sm:flex-row"><input value={search}
                                                                             onChange={e => setSearch(e.target.value)}
                                                                             placeholder="Search furniture..."
                                                                             className="min-w-0 flex-1 rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9a7449]"/><select
                    value={sort} onChange={e => setSort(e.target.value)}
                    className="rounded-xl border bg-white px-4 py-3">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name A-Z</option>
                </select></div>
                {filtered.length ?
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">{filtered.map(p =>
                        <ProductCard key={p.id} product={p}/>)}</div> :
                    <div className="rounded-2xl border border-dashed p-16 text-center"><h2 className="font-semibold">No
                        products found</h2><p className="mt-2 text-sm text-gray-500">Try another search or clear your
                        filters.</p>
                        <button onClick={() => {
                            setSearch('');
                            setCat('All');
                            setMax(200000)
                        }} className="mt-5 rounded-full bg-[#2f2924] px-5 py-2 text-sm text-white">Clear filters
                        </button>
                    </div>}</div>
        </div>
    </main>
}
