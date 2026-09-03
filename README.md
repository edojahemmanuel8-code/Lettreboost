# LettreBoost Website (Version 1)

Official multi-page corporate/service website for **LettreBoost**
(`lettreboost.com.ng`) — a professional newsletter and email
communication service.

Built with **React + Vite + Tailwind CSS + React Router**, with lead
collection handled by **Google Apps Script + Google Sheets**.

## Getting started

```bash
npm install
cp .env.example .env      # then fill in your real values
npm run dev
```

Open the printed local URL in your browser.

## Environment variables

See `.env.example`:

- `VITE_APPS_SCRIPT_URL` — the deployed Google Apps Script Web App URL
  (see `google-apps-script/SETUP_INSTRUCTIONS.md`)
- `VITE_WHATSAPP_NUMBER` — WhatsApp number in international format,
  digits only
- `VITE_CONTACT_EMAIL` — the public contact email shown on the site

## Project structure

```
src/
├── components/     Reusable UI (Navbar, Footer, forms, cards, popup…)
├── pages/           One file per route
├── data/             Services, pricing, portfolio and FAQ content
├── config/           siteConfig.js — single source of truth for brand info
├── utils/             Form submission + validation helpers
public/                robots.txt, sitemap.xml, favicon, SPA redirects
google-apps-script/    Backend (Code.gs) + setup instructions
```

## Routes

`/`, `/services`, `/audience-distribution`, `/how-it-works`,
`/portfolio`, `/pricing`, `/about`, `/faq`, `/contact`,
`/privacy-policy`, `/terms`, `/cookie-policy`, `/acceptable-use`, plus
a catch-all 404 page.

## Lead collection flow

Contact form / Quick Request popup → Google Apps Script → validation →
Request ID generated → row saved to Google Sheets → branded internal
email → branded client confirmation email → success state shown on
the website.

Full setup steps: `google-apps-script/SETUP_INSTRUCTIONS.md`.

## Deployment

This is a static Vite build (`npm run build` → `dist/`), so it can be
deployed to any static host (Netlify, Vercel, Cloudflare Pages, etc.).
A `_redirects` file (Netlify) and `vercel.json` (Vercel) are included
so client-side routing works correctly on refresh/deep links.

## What's intentionally NOT in Version 1

User accounts, login, a client dashboard, payments, a drag-and-drop
newsletter editor, CRM, or an AI generation system. These are noted as
possible future features but are out of scope for this version.

## Placeholders to replace before launch

- `[LETTREBOOST EMAIL]` / `VITE_CONTACT_EMAIL`
- `[LETTREBOOST WHATSAPP NUMBER]` / `VITE_WHATSAPP_NUMBER`
- `BUSINESS_EMAIL` and `SHEET_URL` inside `google-apps-script/Code.gs`
- Social links in `src/config/siteConfig.js` (left empty until real
  URLs are supplied — the footer only shows a platform once a URL is
  set)
- Legal pages (`/privacy-policy`, `/terms`, `/cookie-policy`,
  `/acceptable-use`) are Version 1 drafts and are flagged in-page as
  needing review by a qualified professional before launch.
