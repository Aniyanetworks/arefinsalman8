# Campaign Website — Cambridge Regional Councillor 2026

A single-page campaign site built with React + Vite + TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
cd campaign-site
npm install
npm run dev          # http://localhost:5173
npm run build        # production output → dist/
npm run preview      # preview the production build
```

---

## Configuring the Candidate

**Everything you need to edit lives in one file:**

```
src/config/candidate.ts
```

Open it and update:

| Key | What it controls |
|-----|-----------------|
| `candidate.name` | Candidate's full name (also appears in the legal footer lines) |
| `candidate.title` | Role + location tagline in the hero |
| `candidate.tagline` | One-sentence hero value proposition |
| `candidate.bio` | About section paragraph |
| `candidate.whyRunning` | Pull-quote in the About section |
| `candidate.highlights` | Bullet points in the "Credibility Highlights" card |
| `election.*` | Date, municipality, region |
| `priorities[]` | Platform cards — `icon`, `title`, `description` |
| `vision.quote` | Full-width pull-quote |
| `contact.email` | Footer contact email |
| `contact.social.*` | Twitter/X, Instagram, Facebook URLs |
| `donation.url` | External donation page URL |
| `donation.note` | Contribution-limit disclaimer text |

### Priority card icons

Each priority card uses a [Lucide](https://lucide.dev/icons) icon name. To change an icon, pick any name from lucide.dev and update the `icon` field in the `priorities` array. Then add the corresponding import to `src/components/Priorities.tsx` and the `ICON_MAP` object.

### Candidate photo

In `src/components/Hero.tsx`, the portrait area is currently a styled placeholder. To add a real photo:

1. Drop the image in `public/` (e.g. `public/portrait.jpg`).
2. In `Hero.tsx`, replace the placeholder `<div>` with:
   ```tsx
   <img
     src="/portrait.jpg"
     alt="Salman Arefin, candidate for Regional Councillor"
     className="absolute inset-0 w-full h-full object-cover object-top"
   />
   ```

---

## Setting Up the Contact Form Webhook

The volunteer/contact form POSTs a JSON body to a configurable webhook URL.

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Set your webhook URL:
   ```
   VITE_FORM_WEBHOOK_URL=https://hooks.yourservice.com/your-id
   ```

Works with **Make (Integromat)**, **Zapier**, **n8n**, or any service that accepts an HTTP POST with JSON. The payload shape is:

```json
{
  "name":       "Jane Doe",
  "email":      "jane@example.com",
  "postalCode": "N3C 1A1",
  "message":    "I'd like to volunteer.",
  "source":     "campaign-site"
}
```

If `VITE_FORM_WEBHOOK_URL` is unset, the form silently simulates success so you can preview the UI without a live endpoint.

---

## Deployment

The site is a standard Vite SPA — `npm run build` outputs a `dist/` folder you can deploy to:

- **Netlify** — drag-and-drop `dist/`, or connect GitHub for CI/CD. Set `VITE_FORM_WEBHOOK_URL` in Netlify environment variables.
- **Vercel** — `vercel` CLI or GitHub integration. Add the env var in the Vercel dashboard.
- **GitHub Pages** — set `base` in `vite.config.ts` if not at root.

---

## Legal / Compliance Notes (Ontario Municipal Elections Act)

The following compliance requirements are **already implemented** and must not be removed:

1. **Authorization line** — "Authorized by the [Name] Campaign." in the footer.
2. **Non-affiliation disclaimer** — states the site is not affiliated with the City of Cambridge or Region of Waterloo.
3. **Privacy notice** — one-line notice on the contact form stating data is used only for campaign communication.
4. **No donation processing** — the site links out to an external donation URL; no payment info is collected on-site.
5. **Accessibility** — semantic HTML, ARIA labels, keyboard navigation, and sufficient colour contrast (WCAG 2.1 AA).

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Google Fonts — Playfair Display (headings), Inter (body) |
# arefinsalman8
