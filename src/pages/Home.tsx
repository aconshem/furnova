import { ArrowRight, Check, Truck, MessageCircle, Headphones, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import ProductCard from '../components/ProductCard';
import Image from '../components/Image';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image src={images.hero} alt="Elegant contemporary living room" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="container relative flex min-h-[70vh] items-center">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[.2em]">Furnova Furniture</p>
            <h1 className="serif text-5xl leading-[1.05] sm:text-6xl">Furniture That Makes Your Space Feel Like Home</h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">Discover stylish, comfortable furniture designed for modern living.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="rounded-full bg-white px-6 py-3 font-semibold text-[#2f2924]">Shop Furniture</Link>
              <a href="#collections" className="rounded-full border border-white/50 px-6 py-3 font-semibold">Explore Collections</a>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="container py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">Explore</p>
            <h2 className="serif mt-2 text-4xl">Shop By Category</h2>
          </div>
          <Link to="/shop" className="hidden items-center gap-2 text-sm font-semibold sm:flex">View all <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {categories.map(c => (
            <Link key={c.id} to={`/category/${c.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={c.image} alt={c.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-3 font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs text-gray-500">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f0e9e0] py-20">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[.2em] text-[#9a7449]">Curated for you</p>
              <h2 className="serif mt-2 text-4xl">Featured Furniture</h2>
            </div>
            <Link to="/shop" className="flex items-center gap-2 text-sm font-semibold">Shop all <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {products.filter(p => p.isFeatured).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ['Living Room', images.living, 'Comfortable pieces for slow mornings and good conversations.'],
            ['Bedroom', images.bedroom, 'Create a restful retreat that feels entirely yours.'],
            ['Dining Room', images.dining, 'Gather around furniture built for everyday moments.'],
            ['Home Office', images.office, 'Make focused work feel considered and comfortable.']
          ].map(([n, img, d]) => (
            <div key={n as string} className="relative min-h-[330px] overflow-hidden rounded-3xl">
              <Image src={img as string} alt={n as string} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="serif text-2xl">{n as string}</h3>
                <p className="mt-2 text-sm text-white/80">{d as string}</p>
                <Link to="/shop" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Explore Collection <ArrowRight size={16} /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#2f2924] py-20 text-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[.2em] text-[#d6b789]">Fresh arrivals</p>
            <h2 className="serif mt-2 text-4xl">New Arrivals</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {products.filter(p => p.isNew).slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="serif text-center text-4xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Check, 'Quality Furniture'],
            [Truck, 'Delivery Available'],
            [MessageCircle, 'Easy WhatsApp Ordering'],
            [Headphones, 'Customer Support']
          ].map(([Icon, title]) => (
            <div key={title as string} className="rounded-2xl border border-black/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eee5da]">
                <Icon size={21} />
              </div>
              <h3 className="mt-5 font-semibold">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">Thoughtful service from browsing to delivery.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="overflow-hidden rounded-3xl bg-[#e7ddd0] p-8 sm:p-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[.2em] text-[#80603f]">Make it yours</p>
            <h2 className="serif mt-2 text-4xl">Transform Your Space</h2>
            <p className="mt-4 text-gray-600">Furniture that brings comfort and character into your home.</p>
            <Link to="/shop" className="mt-7 inline-flex rounded-full bg-[#2f2924] px-6 py-3 font-semibold text-white">Shop Now</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0ea] py-20">
        <div className="container">
          <h2 className="serif text-center text-4xl">What Customers Say</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-500">
            Placeholder testimonials for the frontend demonstration — replace with genuine customer feedback before launch.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map(r => (
              <div key={r.name} className="rounded-2xl bg-white p-6">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6">“{r.review}”</p>
                <p className="mt-5 text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-gray-500">{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="serif text-4xl">Designed For Real Spaces</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.inspiration.map((x, i) => (
            <Image key={x} src={x} alt={`Furniture inspiration ${i + 1}`} className="aspect-square w-full rounded-2xl object-cover" />
          ))}
        </div>
      </section>

      <section className="border-y bg-white py-14">
        <div className="container flex flex-col items-center text-center">
          <h2 className="serif text-3xl">Stay Inspired</h2>
          <p className="mt-2 text-sm text-gray-500">Get new arrivals, furniture inspiration and special offers.</p>
          <form onSubmit={e => { e.preventDefault(); alert('Thanks for subscribing!') }} className="mt-6 flex w-full max-w-md gap-2">
            <input required type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full border px-5 py-3 outline-none focus:ring-2 focus:ring-[#9a7449]" />
            <button className="rounded-full bg-[#2f2924] px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}