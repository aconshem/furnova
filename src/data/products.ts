export type Product = {
    id: string;
    name: string;
    slug: string;
    category: string;
    subcategory: string;
    price: number;
    oldPrice?: number;
    description: string;
    shortDescription: string;
    images: string[];
    material: string;
    colour: string;
    dimensions: string;
    stockStatus: string;
    isNew?: boolean;
    isFeatured?: boolean;
    tags: string[]
};
const imgs = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=80'];
const raw = [
    ['Modern 3-Seater Sofa', 'Living Room', 'Sofas', 85000, 99000], ['L-Shaped Sectional Sofa', 'Living Room', 'Sofas', 145000, 165000], ['Luxury Accent Chair', 'Living Room', 'Armchairs', 42000], ['Modern Coffee Table', 'Living Room', 'Coffee Tables', 28000, 33000], ['Oak TV Console', 'Living Room', 'TV Consoles', 52000], ['King Size Bed', 'Bedroom', 'Beds', 98000, 115000], ['Queen Size Bed', 'Bedroom', 'Beds', 82000], ['Bedside Table', 'Bedroom', 'Bedside Tables', 18000], ['Modern Wardrobe', 'Bedroom', 'Wardrobes', 110000, 125000], ['Chest of Drawers', 'Bedroom', 'Chest of Drawers', 45000], ['6-Seater Dining Table', 'Dining', 'Dining Tables', 76000, 89000], ['Dining Chair', 'Dining', 'Dining Chairs', 12500], ['6-Seater Dining Set', 'Dining', 'Dining Sets', 128000, 145000], ['Executive Office Desk', 'Office', 'Office Desks', 68000], ['Ergonomic Office Chair', 'Office', 'Office Chairs', 32000, 38000], ['Tall Bookshelf', 'Office', 'Bookshelves', 39000], ['Filing Cabinet', 'Office', 'Filing Cabinets', 24000], ['Outdoor Lounge Chair', 'Outdoor', 'Outdoor Chairs', 29500], ['Outdoor Dining Set', 'Outdoor', 'Outdoor Sets', 135000, 155000], ['Outdoor Coffee Table', 'Outdoor', 'Outdoor Tables', 35000], ['Rattan Side Table', 'Decor', 'Side Tables', 18000], ['Console Table', 'Decor', 'Side Tables', 41000], ['Full-Length Mirror', 'Decor', 'Mirrors', 27000], ['Decorative Cabinet', 'Storage', 'Cabinets', 62000], ['Open Storage Shelf', 'Storage', 'Shelves', 36000], ['Two-Door Cabinet', 'Storage', 'Cabinets', 48000], ['Upholstered Bench', 'Living Room', 'Armchairs', 26000], ['Minimalist Study Desk', 'Office', 'Office Desks', 44000], ['Round Dining Table', 'Dining', 'Dining Tables', 59000], ['Platform Queen Bed', 'Bedroom', 'Beds', 76000]];
export const products: Product[] = raw.map((p, i) => ({
    id: String(i + 1),
    name: p[0] as string,
    slug: (p[0] as string).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    category: p[1] as string,
    subcategory: p[2] as string,
    price: p[3] as number,
    oldPrice: p[4] as number | undefined,
    description: `A refined ${String(p[0]).toLowerCase()} designed for contemporary Kenyan homes. Thoughtful proportions, durable construction and a warm finish make it easy to style with the rest of your space.`,
    shortDescription: 'Modern, comfortable and made for everyday living.',
    images: [imgs[i % imgs.length], imgs[(i + 2) % imgs.length], imgs[(i + 4) % imgs.length]],
    material: i % 3 === 0 ? 'Solid wood' : 'Engineered wood & premium upholstery',
    colour: i % 2 === 0 ? 'Warm walnut' : 'Natural beige',
    dimensions: i % 2 === 0 ? 'W 180 × D 85 × H 80 cm' : 'W 120 × D 60 × H 75 cm',
    stockStatus: 'Available',
    isNew: i > 23,
    isFeatured: i < 8,
    tags: [String(p[1]).toLowerCase(), String(p[2]).toLowerCase(), 'furniture', 'kenya']
}));
