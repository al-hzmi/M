# سوق ميم — Meem Market Storefront Prototype

High-fidelity Arabic-first RTL e-commerce storefront prototype for Meem Market.

## Scope
- Next.js App Router + TypeScript + Tailwind CSS
- Arabic-first RTL responsive experience
- 16 departments and 128 realistic mock products
- Homepage, categories, category detail, product detail, search, cart, 404/error/loading states
- Interactive mobile drawer, mega navigation, search suggestions, favorites, cart, quantity controls, filters, sorting, product galleries and localStorage persistence
- Front-end prototype only: no real backend, ERP integration, payments, shipping, or live inventory

## Deployment branch
This branch is isolated from `main` so the existing repository content remains untouched.

The storefront source payload is stored in four Brotli/base64 parts because the connected GitHub integration cannot create a new repository. `bootstrap.mjs` reconstructs the normal Next.js source tree before development/build.

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
