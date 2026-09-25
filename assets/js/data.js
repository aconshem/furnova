/* ============================================================
   FURNOVA — static site data
   Plain JS, no build step. Loaded before store.js / layout.js.
   ============================================================ */

const SITE = {
  brandName: 'FURNOVA',
  tagline: 'Furniture That Makes Your Space Feel Like Home',
  phone: '+254 743 581 860',
  whatsappNumber: '254743581860',
  email: 'hello@furnova.co.ke',
  address: 'Nairobi, Kenya',
  currency: 'KSh',
  openingHours: 'Mon–Sat, 8:00 AM–6:00 PM',
  announcement: 'Quality Furniture • Easy Ordering • Delivery Available',
  socialLinks: { instagram: '#', facebook: '#', tiktok: '#', youtube: '#' }
};

// Replace these URLs with your own hosted product/lifestyle photography later.
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85',
  living: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
  bedroom: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  dining: 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  outdoor: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  inspiration: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80'
  ]
};

const CATEGORIES = [
  { id: 'living-room', name: 'Living Room', description: 'Comfortable pieces for everyday living.', image: IMAGES.living },
  { id: 'bedroom', name: 'Bedroom', description: 'Restful furniture made for better nights.', image: IMAGES.bedroom },
  { id: 'dining', name: 'Dining', description: 'Gather, host and make every meal memorable.', image: IMAGES.dining },
  { id: 'office', name: 'Office', description: 'Focused workspaces with a refined feel.', image: IMAGES.office },
  { id: 'outdoor', name: 'Outdoor', description: 'Relaxed pieces for open-air spaces.', image: IMAGES.outdoor },
  { id: 'storage', name: 'Storage', description: 'Beautiful ways to keep your space organised.', image: IMAGES.living },
  { id: 'decor', name: 'Decor', description: 'Finishing touches that bring a room together.', image: IMAGES.inspiration[1] }
];

const PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=80'
];

const RAW_PRODUCTS = [
  ['Modern 3-Seater Sofa', 'Living Room', 'Sofas', 85000, 99000],
  ['L-Shaped Sectional Sofa', 'Living Room', 'Sofas', 145000, 165000],
  ['Luxury Accent Chair', 'Living Room', 'Armchairs', 42000],
  ['Modern Coffee Table', 'Living Room', 'Coffee Tables', 28000, 33000],
  ['Oak TV Console', 'Living Room', 'TV Consoles', 52000],
  ['King Size Bed', 'Bedroom', 'Beds', 98000, 115000],
  ['Queen Size Bed', 'Bedroom', 'Beds', 82000],
  ['Bedside Table', 'Bedroom', 'Bedside Tables', 18000],
  ['Modern Wardrobe', 'Bedroom', 'Wardrobes', 110000, 125000],
  ['Chest of Drawers', 'Bedroom', 'Chest of Drawers', 45000],
  ['6-Seater Dining Table', 'Dining', 'Dining Tables', 76000, 89000],
  ['Dining Chair', 'Dining', 'Dining Chairs', 12500],
  ['6-Seater Dining Set', 'Dining', 'Dining Sets', 128000, 145000],
  ['Executive Office Desk', 'Office', 'Office Desks', 68000],
  ['Ergonomic Office Chair', 'Office', 'Office Chairs', 32000, 38000],
  ['Tall Bookshelf', 'Office', 'Bookshelves', 39000],
  ['Filing Cabinet', 'Office', 'Filing Cabinets', 24000],
  ['Outdoor Lounge Chair', 'Outdoor', 'Outdoor Chairs', 29500],
  ['Outdoor Dining Set', 'Outdoor', 'Outdoor Sets', 135000, 155000],
  ['Outdoor Coffee Table', 'Outdoor', 'Outdoor Tables', 35000],
  ['Rattan Side Table', 'Decor', 'Side Tables', 18000],
  ['Console Table', 'Decor', 'Side Tables', 41000],
  ['Full-Length Mirror', 'Decor', 'Mirrors', 27000],
  ['Decorative Cabinet', 'Storage', 'Cabinets', 62000],
  ['Open Storage Shelf', 'Storage', 'Shelves', 36000],
  ['Two-Door Cabinet', 'Storage', 'Cabinets', 48000],
  ['Upholstered Bench', 'Living Room', 'Armchairs', 26000],
  ['Minimalist Study Desk', 'Office', 'Office Desks', 44000],
  ['Round Dining Table', 'Dining', 'Dining Tables', 59000],
  ['Platform Queen Bed', 'Bedroom', 'Beds', 76000]
];

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const PRODUCTS = RAW_PRODUCTS.map((p, i) => ({
  id: String(i + 1),
  name: p[0],
  slug: slugify(p[0]),
  category: p[1],
  subcategory: p[2],
  price: p[3],
  oldPrice: p[4],
  description: `A refined ${String(p[0]).toLowerCase()} designed for contemporary Kenyan homes. Thoughtful proportions, durable construction and a warm finish make it easy to style with the rest of your space.`,
  shortDescription: 'Modern, comfortable and made for everyday living.',
  images: [PRODUCT_IMAGES[i % PRODUCT_IMAGES.length], PRODUCT_IMAGES[(i + 2) % PRODUCT_IMAGES.length], PRODUCT_IMAGES[(i + 4) % PRODUCT_IMAGES.length]],
  material: i % 3 === 0 ? 'Solid wood' : 'Engineered wood & premium upholstery',
  colour: i % 2 === 0 ? 'Warm walnut' : 'Natural beige',
  dimensions: i % 2 === 0 ? 'W 180 × D 85 × H 80 cm' : 'W 120 × D 60 × H 75 cm',
  stockStatus: 'Available',
  isNew: i > 23,
  isFeatured: i < 8,
  tags: [String(p[1]).toLowerCase(), String(p[2]).toLowerCase(), 'furniture', 'kenya']
}));

const FAQS = [
  ['Do you deliver?', 'Yes. Delivery availability and fees depend on your location.'],
  ['How long does delivery take?', 'Delivery timelines will be confirmed when your order is placed.'],
  ['How do I place an order?', 'Add your furniture to the cart, enter your details and send the order through WhatsApp.'],
  ['Can I order through WhatsApp?', 'Yes. WhatsApp is the primary ordering channel for this frontend version.'],
  ['What payment methods are available?', 'Payment arrangements are confirmed directly with the business after ordering.'],
  ['Can I request custom furniture?', 'Contact the team on WhatsApp to discuss custom requirements.'],
  ['Can I visit the showroom?', 'Contact the business for current showroom details and opening hours.'],
  ['What is your return policy?', 'See the Returns page for the business policy.']
];

const REVIEWS = [
  { name: 'Amina K.', rating: 5, review: 'Placeholder review for demonstration. Replace with a genuine customer review before launch.', location: 'Nairobi' },
  { name: 'Brian M.', rating: 5, review: 'Placeholder review for demonstration. Replace with a genuine customer review before launch.', location: 'Kiambu' },
  { name: 'Wanjiku N.', rating: 4, review: 'Placeholder review for demonstration. Replace with a genuine customer review before launch.', location: 'Nairobi' },
  { name: 'David O.', rating: 5, review: 'Placeholder review for demonstration. Replace with a genuine customer review before launch.', location: 'Nairobi' }
];
