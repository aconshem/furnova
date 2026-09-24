# Furnova — Frontend Furniture E-commerce

A production-quality frontend-only React + Vite + TypeScript + Tailwind furniture store concept. Inspired by simple furniture-shopping flows, but with an original brand, layout and visual identity.

## Scope
- No backend, database, authentication, admin or online payments.
- Cart and wishlist persist in `localStorage`.
- Orders are generated as URL-encoded WhatsApp messages.
- External image URLs are centralized and include a fallback image.

## Run
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Rebranding
Edit `src/config/site.ts` for:
- brand name / tagline
- phone, WhatsApp, email, address
- currency and opening hours
- social links
- primary / secondary / accent colors
- announcement bar

Edit `src/data/products.ts` to add/remove products, prices, descriptions, specifications, tags and image galleries.

Edit `src/data/categories.ts` for categories and subcategories.

Edit `src/data/images.ts` for lifestyle and image URLs.

Edit `src/data/reviews.ts` for genuine customer reviews.

Edit `src/data/faqs.ts` for FAQ content.

Delivery, returns, privacy and terms placeholders are in `src/pages/InfoPages.tsx` and must be replaced/reviewed before launch.

## WhatsApp
Set `whatsappNumber` in `src/config/site.ts` using international digits without `+`, e.g. `2547XXXXXXXX`. Product enquiries and cart orders use this single configuration value.

## Architecture
Reusable UI lives in `src/components`; state is in `src/context`; product/category/content data is centralized in `src/data`; business configuration is in `src/config`.
