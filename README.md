# Comotozze Social Links

A lightweight Next.js 15 site that gathers every official Comotozze channel—perfect for linking from bios or QR codes. The interface leans into a rose-tinted, blogger-inspired aesthetic crafted with Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the local dev server:
   ```bash
   pnpm dev
   ```
3. Open http://localhost:3000 to preview.

## Customisation

- Update the list of platforms in `app/components/social-links.ts`.
- Tune colours, typography, and reusable utilities in `tailwind.config.ts` and `app/globals.css`.
- Adjust layout copy or background flourishes directly within `app/page.tsx`.
- Replace `app/icon.svg` with a brand-approved asset before publishing.

## Production build

```bash
pnpm build
pnpm start
```

Linting is available with `pnpm lint`. This project uses the App Router, TypeScript, ESLint, and Tailwind CSS out of the box.
