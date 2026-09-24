import {images} from './images';

export const categories = [
    {
        id: 'living-room',
        name: 'Living Room',
        description: 'Comfortable pieces for everyday living.',
        image: images.living,
        subcategories: ['Sofas', 'Armchairs', 'Coffee Tables', 'TV Consoles']
    },
    {
        id: 'bedroom',
        name: 'Bedroom',
        description: 'Restful furniture made for better nights.',
        image: images.bedroom,
        subcategories: ['Beds', 'Bedside Tables', 'Wardrobes', 'Chest of Drawers']
    },
    {
        id: 'dining',
        name: 'Dining',
        description: 'Gather, host and make every meal memorable.',
        image: images.dining,
        subcategories: ['Dining Tables', 'Dining Chairs', 'Dining Sets']
    },
    {
        id: 'office',
        name: 'Office',
        description: 'Focused workspaces with a refined feel.',
        image: images.office,
        subcategories: ['Office Desks', 'Office Chairs', 'Bookshelves', 'Filing Cabinets']
    },
    {
        id: 'outdoor',
        name: 'Outdoor',
        description: 'Relaxed pieces for open-air spaces.',
        image: images.outdoor,
        subcategories: ['Outdoor Chairs', 'Outdoor Tables', 'Outdoor Sets']
    },
    {
        id: 'storage',
        name: 'Storage',
        description: 'Beautiful ways to keep your space organised.',
        image: images.living,
        subcategories: ['Wardrobes', 'Cabinets', 'Shelves']
    },
    {
        id: 'decor',
        name: 'Decor',
        description: 'Finishing touches that bring a room together.',
        image: images.inspiration[1],
        subcategories: ['Mirrors', 'Side Tables', 'Decorative Pieces']
    }
];
