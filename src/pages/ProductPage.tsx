import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Heart, Minus, Plus, MessageCircle, ShoppingBag} from 'lucide-react';
import {products} from '../data/products';
import {useStore} from '../context/StoreContext';
import {site} from '../config/site';
import Image from '../components/Image';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
    const {slug} = useParams();
    const p = products.find(x => x.slug === slug);
    const [img, setImg] = useState(0);
    const [qty, setQty] = useState(1);
    const {addToCart, toggleWishlist, isWishlisted} = useStore();
    if (!p) return <div className="container py-24 text-center"><h1 className="serif text-4xl">Product not found</h1>
        <Link className="mt-5 inline-block underline" to="/shop">Back to shop</Link></div>;
    const msg = `Hello, I am interested in:\n\n${p.name}\nPrice: KSh ${p.price.toLocaleString()}\nProduct page: ${window.location.href}\n\nCould you please provide more information?`;
    return <main className="container py-12">
        <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col-reverse gap-4 sm:flex-row">
                <div className="flex gap-3 sm:w-24 sm:flex-col">{p.images.map((x, i) => <button key={x}
                                                                                                onClick={() => setImg(i)}
                                                                                                className={`aspect-square overflow-hidden rounded-xl border-2 ${img === i ? 'border-[#9a7449]' : 'border-transparent'}`}>
                    <Image src={x} alt={`${p.name} ${i + 1}`} className="h-full w-full object-cover"/></button>)}</div>
                <div className="min-w-0 flex-1 overflow-hidden rounded-3xl bg-[#eee8e1]"><Image src={p.images[img]}
                                                                                                alt={p.name}
                                                                                                className="aspect-[4/5] h-full w-full object-cover"/>
                </div>
            </div>
            <div><p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">{p.category} / {p.subcategory}</p><h1
                className="serif mt-3 text-4xl sm:text-5xl">{p.name}</h1>
                <div className="mt-5 flex items-center gap-3"><span
                    className="text-2xl font-semibold">KSh {p.price.toLocaleString()}</span>{p.oldPrice &&
                    <del className="text-gray-400">KSh {p.oldPrice.toLocaleString()}</del>}</div>
                <p className="mt-5 leading-7 text-gray-600">{p.description}</p>
                <div className="mt-7 grid gap-3 rounded-2xl bg-[#f5f0ea] p-5 text-sm sm:grid-cols-2">
                    <div><b>Material</b><p className="text-gray-500">{p.material}</p></div>
                    <div><b>Colour</b><p className="text-gray-500">{p.colour}</p></div>
                    <div><b>Dimensions</b><p className="text-gray-500">{p.dimensions}</p></div>
                    <div><b>Availability</b><p className="text-gray-500">{p.stockStatus}</p></div>
                </div>
                <div className="mt-7 flex items-center gap-3">
                    <div className="flex items-center rounded-xl border">
                        <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3"><Minus size={16}/></button>
                        <span className="w-10 text-center">{qty}</span>
                        <button onClick={() => setQty(qty + 1)} className="p-3"><Plus size={16}/></button>
                    </div>
                    <button onClick={() => addToCart(p, qty)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#2f2924] py-3 font-semibold text-white">
                        <ShoppingBag size={18}/> Add to Cart
                    </button>
                    <button onClick={() => toggleWishlist(p.id)} className="rounded-xl border p-3"
                            aria-label="Wishlist"><Heart fill={isWishlisted(p.id) ? 'currentColor' : 'none'}/></button>
                </div>
                <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`} target="_blank"
                   rel="noreferrer"
                   className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white"><MessageCircle
                    size={19}/> Ask About This Product on WhatsApp</a></div>
        </div>
        <section className="mt-20 grid gap-10 border-t pt-12 md:grid-cols-2">
            <div><h2 className="serif text-3xl">Product Details</h2>
                <div className="mt-6 grid gap-5 text-sm">
                    <div><b>Description</b><p className="mt-1 text-gray-500">{p.description}</p></div>
                    <div><b>Specifications</b><p
                        className="mt-1 text-gray-500">{p.material}, {p.colour}, {p.stockStatus}</p></div>
                    <div><b>Dimensions</b><p className="mt-1 text-gray-500">{p.dimensions}</p></div>
                </div>
            </div>
            <div><h2 className="serif text-3xl">Delivery & Returns</h2><p
                className="mt-6 text-sm leading-7 text-gray-500">Delivery information, scheduling, assembly and return
                conditions are confirmed with the customer after the WhatsApp order is received.</p></div>
        </section>
        <section className="mt-20"><h2 className="serif text-3xl">You May Also Like</h2>
            <div
                className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">{products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4).map(x =>
                <ProductCard key={x.id} product={x}/>)}</div>
        </section>
    </main>
}
