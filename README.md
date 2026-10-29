# Hyderabad Properties Management

Marketing website for **Hyderabad Properties Management**, a property management firm in Mehdipatnam, Hyderabad. It presents the firm's services, service areas, office location and enquiry options.

The site is a static-first Next.js app. There is no backend, database or form provider: enquiries are handed off to WhatsApp or the visitor's email app, so nothing is stored on a server.

## Tech stack

- Next.js 16 (App Router, Cache Components, Turbopack)
- React 19 + TypeScript
- Tailwind CSS 4
- GSAP for scroll and hero animation (disabled when the visitor prefers reduced motion)
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Environment variables

Both are optional; the site works without them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID. Analytics scripts are only injected when this is set. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token, emitted as a meta tag. |

Set them in `.env.local` for development and in the Vercel project settings for production.

## Editing content

Business details live in one place: [`src/site-config.ts`](src/site-config.ts).

- `brand`: name, tagline, description, founding year, canonical URL
- `contact`: phone, WhatsApp number, email, office address, working hours
- `localities`: service areas used in the home page coverage section and structured data

Changing the phone number, email or address there updates the navbar, footer, contact page, WhatsApp links and JSON-LD.

Page copy lives in the route folders under `src/app`. Service pages share the layout in `src/components/ExpandedServicePage.tsx` and pass their content from each page file.

## Contact form

`src/app/contact/ContactClient.tsx` validates the form in the browser, then opens:

1. **WhatsApp** with the enquiry pre-filled (`wa.me`), and
2. a **mailto** fallback if the visitor prefers email.

The visitor presses send inside WhatsApp or their mail app. The site never claims a message was delivered when it was not. If a server-side form provider is added later, replace the submit handler and keep the validation and consent fields.

## Images

Photographs are stored in `public/images` and pre-compressed (max 1600 px wide, JPEG quality 80). Hero images use `next/image` with priority; below-the-fold images are lazy-loaded. Keep new uploads under roughly 250 KB and add descriptive `alt` text.

The social share image is `public/og-image.jpg` (1200 × 630). App icons are `public/apple-touch-icon.png`, `public/icon-192.png` and `public/icon-512.png`.

## SEO and legal

- Per-page metadata is built with `src/lib/metadata.ts` (canonical URL, Open Graph, Twitter card).
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- `src/app/layout.tsx` emits LocalBusiness/RealEstateAgent JSON-LD with address, geo coordinates, opening hours and service areas.
- `/privacy` and `/terms` describe the actual data handling of the site. Update them if the form or analytics setup changes.

## Security headers

`next.config.ts` sets `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`. The CSP allows Google Maps embeds (`frame-src https://www.google.com`) and Google Analytics when enabled. If you add another third-party script or embed, update the matching CSP directive.

## Deployment

The production site is deployed on Vercel at https://www.hyderabadpropertiesmanagement.com (the apex domain redirects to `www`). Pushing to the connected branch triggers a deployment. After deploying, check:

- `/contact` loads both the map and Street View embeds
- the enquiry buttons open WhatsApp with the message filled in
- `/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest` respond
- security headers appear in the response (`curl -I https://www.hyderabadpropertiesmanagement.com/`)
