import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { images } from '../data/images';
import Image from '../components/Image';
import { site } from '../config/site';

export function About() {
  return (
    <main>
      <section className="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">About {site.brandName}</p>
          <h1 className="serif mt-3 text-5xl">Thoughtful furniture for modern Kenyan spaces.</h1>
          <p className="mt-6 leading-7 text-gray-600">
            Furnova is a temporary brand concept created for this frontend demonstration. The copy is intentionally editable so the final business story can be added later.
          </p>
        </div>
        <Image src={images.living} alt="Furniture showroom" className="aspect-[4/3] rounded-3xl object-cover" />
      </section>

      <section className="bg-[#f5f0ea] py-16">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="serif text-3xl">Our Story</h2>
            <p className="mt-4 leading-7 text-gray-600">Replace this placeholder with the company's actual history, values and milestones.</p>
          </div>
          <div>
            <h2 className="serif text-3xl">Our Approach</h2>
            <p className="mt-4 leading-7 text-gray-600">Replace this placeholder with your sourcing, craftsmanship, service and customer experience story.</p>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 py-16 md:grid-cols-2">
        <div>
          <h2 className="serif text-3xl">Quality & Craftsmanship</h2>
          <p className="mt-4 leading-7 text-gray-600">Use this area to explain materials, construction standards, finishes and quality checks.</p>
        </div>
        <div>
          <h2 className="serif text-3xl">Our Customers</h2>
          <p className="mt-4 leading-7 text-gray-600">Use this section to describe the homeowners, professionals and businesses you serve.</p>
        </div>
      </section>
    </main>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="container py-16">
      <h1 className="serif text-5xl">Contact Us</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-[#f5f0ea] p-8">
          <h2 className="serif text-3xl">Let's talk furniture</h2>
          <div className="mt-7 grid gap-4 text-sm">
            <p><b>Phone</b><br />{site.phone}</p>
            <p><b>WhatsApp</b><br />{site.whatsappNumber}</p>
            <p><b>Email</b><br />{site.email}</p>
            <p><b>Location</b><br />{site.address}</p>
            <p><b>Opening hours</b><br />{site.openingHours}</p>
          </div>
        </div>
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="grid gap-4">
          {['Name', 'Email', 'Phone'].map(x => (
            <input key={x} required placeholder={x} className="rounded-xl border bg-white px-4 py-3" />
          ))}
          <textarea required placeholder="Message" className="min-h-40 rounded-xl border bg-white px-4 py-3" />
          <button className="rounded-xl bg-[#2f2924] py-3 font-semibold text-white">Send Message</button>
          {sent && (
            <p className="rounded-xl bg-[#e7f4e8] p-3 text-sm">
              Thanks — this demo form has recorded your submission locally. Connect it to a service later.
            </p>
          )}
        </form>
      </div>
      <div className="mt-10 grid h-72 place-items-center rounded-3xl bg-[#eee8e1] text-center">
        <div>
          <p className="font-semibold">Map Placeholder</p>
          <p className="mt-2 text-sm text-gray-500">Replace with Google Maps when the business location is final.</p>
        </div>
      </div>
    </main>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <main className="container max-w-3xl py-16">
      <p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">Help</p>
      <h1 className="serif mt-3 text-5xl">Frequently Asked Questions</h1>
      <div className="mt-10 divide-y rounded-2xl border bg-white">
        {faqs.map(([q, a], i) => (
          <div key={q}>
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left font-semibold">
              <span>{q}</span>
              <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="px-5 pb-5 text-sm leading-6 text-gray-600">{a}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}

const generic = {
  Delivery: ['Nairobi delivery', 'Outside Nairobi', 'Delivery timelines', 'Delivery fees', 'Assembly', 'Delivery scheduling'],
  Returns: ['Returns & Refunds', 'Placeholder policy content for business review. Replace this page with the final approved return and refund policy.'],
  Privacy: ['Privacy Policy', 'Placeholder content for business review. Replace with the approved privacy policy before launch.'],
  Terms: ['Terms & Conditions', 'Placeholder content for business review. This is not legal advice. Replace with the final reviewed terms before launch.']
};

export function Policy({ type }: { type: keyof typeof generic }) {
  const x = generic[type];
  return (
    <main className="container max-w-3xl py-16">
      <p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">Information</p>
      <h1 className="serif mt-3 text-5xl">{x[0]}</h1>
      <div className="mt-10 space-y-6 leading-7 text-gray-600">
        {x.slice(1).map((t, i) => (
          <section key={i}>
            <h2 className="font-semibold text-[#2f2924]">
              {typeof t === 'string' && t.length < 40 ? t : 'Business policy'}
            </h2>
            <p className="mt-2">
              {typeof t === 'string' && t.length >= 40 ? t : `Replace this placeholder with the final ${String(type).toLowerCase()} information.`}
            </p>
          </section>
        ))}
      </div>
      <Link to="/contact" className="mt-8 inline-block underline">Contact us</Link>
    </main>
  );
}

export function Wishlist() {
  return (
    <main className="container py-16">
      <h1 className="serif text-5xl">Wishlist</h1>
      <p className="mt-3 text-gray-500">Your saved furniture, stored in this browser.</p>
    </main>
  );
}