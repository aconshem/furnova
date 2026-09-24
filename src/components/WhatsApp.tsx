import {MessageCircle} from 'lucide-react';
import {site} from '../config/site';

export default function WhatsApp() {
    return <a
        href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent('Hello, I would like to make an enquiry.')}`}
        target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-xl transition hover:scale-105"><MessageCircle/></a>
}
