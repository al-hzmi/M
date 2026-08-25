# سوق ميم — Meem Market × DELTA Visual Convergence

High-fidelity Arabic-first RTL e-commerce storefront prototype for Meem Market, visually converged to the DELTA SPORT retail theme architecture while retaining Meem identity, categories, mock catalog and front-end interactions.

## Visual system
- Minimal two-level retail header with thin dividers
- Split editorial hero and category banners
- Horizontal category and product carousels
- DELTA-style flat product cards with large images, wishlist/view controls and full-width dark-red add-to-cart actions
- Warm light-gray canvas, white surfaces, restrained burgundy Meem accent and limited blue micro-accent
- Numbered blush trust accordion and restrained black footer
- 90% mobile drawer from the right with RTL category rows
- Local category/product/banner assets to avoid broken or black remote-image states

## Typography
The project is configured to use `PingAR LT` Regular / Medium / Bold as the sole primary UI family. Licensed PingAR LT webfont files are **not bundled** because they were not supplied. The CSS is ready for them; browsers that do not already have PingAR LT installed will use their own fallback until licensed font files are provided.

## Scope
- Next.js App Router + TypeScript + Tailwind CSS
- 16 departments and 128 realistic mock products
- Homepage, categories, category detail, product detail, search, cart, 404/error/loading states
- Search, favorites, cart, quantity controls, filters, sorting, product galleries and localStorage persistence
- Front-end prototype only: no real backend, ERP integration, payments, shipping, live inventory or checkout

## Deployment branch
This branch is isolated from `main`; existing `main` content remains untouched.

The full storefront source payload is stored in six Brotli/base64 v2 parts because the connected GitHub integration cannot create a separate repository. `bootstrap.mjs` reconstructs the normal project tree before development/build.

## Run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```
