import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../config/site';

export default function Footer() {
    return (
        <footer className="mt-24 bg-[#2f2924] text-[#f7f1e9]">
            <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div className="text-2xl font-black tracking-[.18em]">{site.brandName}</div>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
                        Furniture for modern Kenyan living. Browse online and place your order conveniently through WhatsApp.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Shop</h3>
                    <div className="mt-4 grid gap-2 text-sm text-white/65">
                        {['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Decor'].map(x => (
                            <Link key={x} to={`/category/${x.toLowerCase().replace(' ', '-')}`}>{x}</Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold">Customer Service</h3>
                    <div className="mt-4 grid gap-2 text-sm text-white/65">
                        <Link to="/contact">Contact</Link>
                        <Link to="/delivery">Delivery</Link>
                        <Link to="/returns">Returns</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/privacy">Privacy</Link>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold">Contact</h3>
                    <div className="mt-4 grid gap-3 text-sm text-white/65">
                        <span className="flex gap-2"><Phone size={16} />{site.phone}</span>
                        <span className="flex gap-2"><Mail size={16} />{site.email}</span>
                        <span className="flex gap-2"><MapPin size={16} />{site.address}</span>
                        <div className="flex gap-5 pt-2 text-lg font-bold">
                            <a href={site.socialLinks.instagram} aria-label="Instagram" className="hover:text-[#9a7449]">IG</a>
                            <a href={site.socialLinks.facebook} aria-label="Facebook" className="hover:text-[#9a7449]">FB</a>
                            <a href={site.socialLinks.youtube} aria-label="YouTube" className="hover:text-[#9a7449]">YT</a>
                            <a href={site.socialLinks.tiktok} aria-label="TikTok" className="hover:text-[#9a7449]">TK</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
                © {new Date().getFullYear()} {site.brandName}. Frontend demonstration.
            </div>
        </footer>
    );
}