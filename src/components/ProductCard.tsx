import {Heart, ShoppingBag, ArrowUpRight} from 'lucide-react';
import {Product} from '../data/products';
import {useStore} from '../context/StoreContext';
import Image from './Image';
import {Link} from 'react-router-dom';

export default function ProductCard({product}: { product: Product }) {
    const {addToCart, toggleWishlist, isWishlisted} = useStore();
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    return <article className="group">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eee8e1]"><Link
            to={`/product/${product.slug}`}><Image src={product.images[0]} alt={product.name}
                                                   className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/></Link>{product.isNew &&
            <span
                className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold">NEW</span>}{discount > 0 &&
            <span
                className="absolute left-3 top-11 rounded-full bg-[#2f2924] px-3 py-1 text-xs font-semibold text-white">SAVE {discount}%</span>}
            <button aria-label="Wishlist" onClick={() => toggleWishlist(product.id)}
                    className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5"><Heart size={17}
                                                                                             fill={isWishlisted(product.id) ? 'currentColor' : 'none'}/>
            </button>
            <button onClick={() => addToCart(product)}
                    className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-xl bg-white/95 py-3 text-sm font-semibold opacity-0 shadow-lg transition group-hover:opacity-100">
                <ShoppingBag size={16}/> Add to Cart
            </button>
        </div>
        <div className="pt-4"><p className="text-xs uppercase tracking-[.15em] text-[#8a7c6e]">{product.category}</p>
            <Link to={`/product/${product.slug}`}
                  className="mt-1 flex items-center justify-between gap-2 font-medium hover:underline"><span>{product.name}</span><ArrowUpRight
                size={16}/></Link>
            <div className="mt-2 flex items-center gap-2"><span
                className="font-semibold">KSh {product.price.toLocaleString()}</span>{product.oldPrice &&
                <del className="text-sm text-gray-400">KSh {product.oldPrice.toLocaleString()}</del>}</div>
        </div>
    </article>
}
