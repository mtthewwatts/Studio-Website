# Matthew Watts — Personal Site

Built with Next.js 15 (App Router) + TypeScript. No external UI libraries.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  globals.css     ← all design tokens + styles (single stylesheet)
  layout.tsx      ← root layout, metadata
  page.tsx        ← homepage (hero + footer)

components/
  Topbar.tsx      ← fixed top bar: logo, theme toggle, menu trigger
  MenuOverlay.tsx ← full-screen slide-down menu (image 2 in Figma)
  Footer.tsx      ← two-column nav + networking footer
```

## Adding your image

Drop `hands.png` (the stippled hands illustration) into `/public/` — it loads automatically.

## Deploying

Push `main` to GitHub and connect to [Vercel](https://vercel.com).
Vercel auto-deploys on every push to `main`.
Work on a `redesign` branch to stay off prod until ready.

## Adding pages

Create `app/about/page.tsx`, `app/projects/page.tsx`, etc. following the same pattern as `app/page.tsx`.
