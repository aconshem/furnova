import {Link, useNavigate} from 'react-router-dom';
import {Minus, Plus, Trash2, MessageCircle} from 'lucide-react';
import {useStore} from '../context/StoreContext';
import Image from '../components/Image';
import {site} from '../config/site';
import {useState} from 'react';

export default function Cart() {
    const {cart, total, removeFromCart, updateQuantity} = useStore();
    const [details, setDetails] = useState(false);
    const [form, setForm] = useState({name: '', phone: '', location: '', notes: ''});
    const nav = useNavigate();
    const order = () => {
        if (!form.name || !form.phone || !form.location) {
            setDetails(true);
            return
        }
        let lines = `Hello, I would like to place an order.\n\nCustomer Name: ${form.name}\nPhone: ${form.phone}\nDelivery Location: ${form.location}\n\nORDER:\n\n`;
        cart.forEach((i, n) => lines += `${n + 1}. ${i.name}\nQuantity: ${i.quantity}\nUnit Price: KSh ${i.price.toLocaleString()}\nSubtotal: KSh ${(i.price * i.quantity).toLocaleString()}\n\n`);
        lines += `Subtotal:\nKSh ${total.toLocaleString()}\n\nDelivery: Calculated based on location\n\nAdditional Notes: ${form.notes || 'None'}\n\nThank you.`;
        window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines)}`, '_blank')
    };
    if (!cart.length) return <div className="container py-24 text-center"><h1 className="serif text-4xl">Your cart is
        empty</h1><p className="mt-3 text-gray-500">Find something beautiful for your space.</p><Link to="/shop"
                                                                                                      className="mt-6 inline-block rounded-full bg-[#2f2924] px-6 py-3 text-sm font-semibold text-white">Continue
        Shopping</Link></div>;
    return <main className="container py-14"><h1 className="serif text-5xl">Your Cart</h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">{cart.map(i => <div key={i.id}
                                                           className="flex gap-4 rounded-2xl border bg-white p-4"><Image
                src={i.images[0]} alt={i.name} className="h-28 w-24 rounded-xl object-cover"/>
                <div className="min-w-0 flex-1"><Link to={`/product/${i.slug}`}
                                                      className="font-semibold hover:underline">{i.name}</Link><p
                    className="mt-1 text-sm text-gray-500">KSh {i.price.toLocaleString()}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border">
                            <button onClick={() => updateQuantity(i.id, i.quantity - 1)} className="p-2"><Minus
                                size={14}/></button>
                            <span className="w-8 text-center text-sm">{i.quantity}</span>
                            <button onClick={() => updateQuantity(i.id, i.quantity + 1)} className="p-2"><Plus
                                size={14}/></button>
                        </div>
                        <button onClick={() => removeFromCart(i.id)} className="text-gray-400 hover:text-red-600">
                            <Trash2 size={18}/></button>
                    </div>
                </div>
            </div>)}</div>
            <aside className="h-fit rounded-2xl bg-[#f5f0ea] p-6"><h2 className="font-semibold">Order Summary</h2>
                <div className="mt-5 flex justify-between text-sm">
                    <span>Subtotal</span><span>KSh {total.toLocaleString()}</span></div>
                <div className="mt-3 flex justify-between text-sm"><span>Delivery</span><span>Calculated based on location</span>
                </div>
                <div className="mt-5 border-t pt-5 flex justify-between text-lg font-semibold">
                    <span>Total</span><span>KSh {total.toLocaleString()}</span></div>
                <button onClick={() => setDetails(true)}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white">
                    <MessageCircle size={18}/> Order Via WhatsApp
                </button>
                <Link to="/shop" className="mt-3 block text-center text-sm underline">Continue Shopping</Link></aside>
        </div>
        {details && <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-3xl bg-[#fbf9f6] p-6">
                <div className="flex justify-between"><h2 className="serif text-3xl">Customer Details</h2>
                    <button onClick={() => setDetails(false)}>✕</button>
                </div>
                <p className="mt-2 text-sm text-gray-500">Your order will open in WhatsApp after you submit these
                    details.</p>
                <div
                    className="mt-6 grid gap-3">{[['name', 'Full Name'], ['phone', 'Phone Number'], ['location', 'Delivery Location']].map(([k, l]) =>
                    <input key={k} required placeholder={l} value={(form as any)[k]}
                           onChange={e => setForm({...form, [k]: e.target.value})}
                           className="rounded-xl border bg-white px-4 py-3"/>)}<textarea placeholder="Additional Notes"
                                                                                         value={form.notes}
                                                                                         onChange={e => setForm({
                                                                                             ...form,
                                                                                             notes: e.target.value
                                                                                         })}
                                                                                         className="min-h-24 rounded-xl border bg-white px-4 py-3"/>
                    <button onClick={order} className="rounded-xl bg-[#25D366] py-3 font-semibold text-white">Open
                        WhatsApp
                    </button>
                </div>
            </div>
        </div>}</main>
}
