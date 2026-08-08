# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm install       # install deps
npm run dev        # start dev server (localhost:3000)
npm run build       # production build
npm run start       # run production build
npm run lint        # next lint — currently BROKEN, see Known Issues
```

There is no test framework configured in this repo (no test runner, no test files).

## Architecture

Next.js 15 (App Router) + React 18 + TypeScript (strict). No UI kit, no CSS framework (no Tailwind), no animation library, no CMS, no state library — everything is hand-rolled.

**Styling is centralized in one file:** `app/globals.css`. There are no CSS Modules, no styled-components, no Tailwind classes. Every component's styles live in this single stylesheet using BEM-ish kebab-case class names (`.menu-overlay__nav-link`, `.chip--active`, `.page-hero__title--small`). When changing a component's look, edit `globals.css`, not inline styles (the only inline `style={}` usage is for two genuinely dynamic values: a placeholder background color in `BlogPostRow.tsx` and animated icon rotation in `icons.tsx`).

Design tokens are CSS custom properties on `:root`, with a light-mode override under `[data-theme="light"]`:
```
--bg, --bg-menu, --surface, --text, --text-muted, --text-dim, --border, --accent
--font-display: 'EB Garamond', Georgia, serif   (headings)
--font-body:    'Inter', system-ui, sans-serif   (body text)
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
```
Dark is the default palette; fonts are loaded via a Google Fonts `@import` at the top of `globals.css` and are explicitly called out in `site-structure.md` as not-yet-finalized (swap the `--font-*` vars + the `@import` URL together).

**Global client state** lives in `lib/site-context.tsx` (`SiteProvider` / `useSite()`) — tracks menu-open and theme. It wraps the whole app in `app/layout.tsx`, alongside `Particles` (canvas background), `Topbar`, and `MenuOverlay`, the latter **always mounted** (not conditionally rendered) so its open/close transition can animate via a CSS class toggle rather than mount/unmount. There is no site search and no page footer — both were removed; `MenuOverlay` (nav links, name/eyebrow, social icons) is the only global chrome besides `Topbar`.

**Content is separated from presentation**, treated as the single source of truth and imported wherever needed (pages, `MenuOverlay`'s nav/socials):
- `lib/site-data.ts` — `NAV_ITEMS`, `SOCIAL_LINKS`
- `lib/content.ts` — `CV_EDUCATION`, `CV_EXPERIENCE`, `BLOG_POSTS`, `BLOG_CATEGORIES`
- `content/projects/*.md` + `lib/projects.ts` — projects are markdown files (frontmatter: `title`, `year`, `order`, `excerpt`, optional `imageSrc`; body = the long-form write-up rendered via `react-markdown`). `lib/projects.ts` reads them with `gray-matter` and exposes `getAllProjects()` (sorted by `order`), `getProjectSlugs()`, and `getProjectBySlug()`. Add a new project by dropping a new `.md` file in `content/projects/` — no code changes needed.

Page components stay "dumb": e.g. `app/blog/page.tsx` owns filter/search/pagination state (`useState`/`useMemo`) and passes callbacks into presentational children like `BlogFilterBar`, which hold no data themselves.

**Component conventions:**
- Function declarations (not arrow consts), PascalCase filenames matching the export.
- `'use client'` is added only where a component actually needs hooks/browser APIs (`Topbar`, `MenuOverlay`, `Particles`, `BlogFilterBar`, `site-context.tsx`, `app/blog/page.tsx`). Everything else is a Server Component.
- Props are typed inline, or destructured directly against a shared type from `lib/content.ts` (e.g. `ProjectCard({ slug, title, ... }: Project)`).
- Class-name variants are composed with an array + `.filter(Boolean).join(' ')`, not a utility lib — see `components/PageHero.tsx` for the reference pattern (`headingFont`, `headingSize`, `descriptionEmphasis`, `descriptionCentered` props each toggle a modifier class). Reuse this pattern rather than introducing `clsx`/`classnames`.
- Icons are hand-drawn inline SVGs, all in `components/icons.tsx`, `Icon`-prefixed.
- Absolute imports use the `@/*` path alias (`@/lib/content`, `@/lib/projects`); same-folder imports are relative.

## Known issues / in-progress work

- `npm run lint` will fail: `eslint.config.mjs` references `eslint-config-next`, but neither `eslint` nor `eslint-config-next` is listed in `package.json` devDependencies or installed.
- **Theme toggle is broken**: `SiteProvider` sets `data-theme="light"` on a nested `<div>`, but `body`'s own background/color rules live outside that div, so the CSS var cascade never reaches `body`. Fix is to set `data-theme` on `document.documentElement` (or `<body>`) via `useEffect` instead.
- `hands.png` (homepage hero image) currently sits at `app/public/hands.png`, which Next never serves — it needs to be at `public/hands.png` to be reachable at `/hands.png`.
- `/blog/[slug]` and `/projects/[slug]` detail routes are linked to from list pages but don't exist yet (404).
- `README.md` is stale relative to the current structure (still describes a topbar logo that was removed, doesn't mention `biography/`, `cv/`, `blog/`, `lib/`, or `SearchOverlay`/`BlogFilterBar`). `site-structure.md` is the more current architecture doc.

## Working from Figma

This site was originally built from Figma mockups (see references in `README.md` and placeholder-copy comments in `lib/content.ts`). There is no live Figma API/token sync — translating a Figma frame into code is manual:

1. **Tokens** (colors, fonts, spacing) → update the CSS custom properties at the top of `app/globals.css`, not per-component values. Keep dark/light pairs in sync between `:root` and `[data-theme="light"]`.
2. **New/changed component visuals** → add or edit the relevant BEM block in `globals.css`; don't reach for inline styles or a new styling system.
3. **Per-page heading/description variations** (e.g. a page in Figma wants a different heading font/size/emphasis than the default) → prefer extending `PageHero`'s existing prop API (`headingFont`, `headingSize`, `descriptionEmphasis`, `descriptionCentered`) over forking a new hero component.
4. **New imagery** → real asset files belong in the root `public/` directory (not `app/public/`), referenced as `/filename.ext`.
5. **New copy content** (CV entries, projects, blog posts) → add to `lib/content.ts`/`lib/site-data.ts` rather than hardcoding into a page.

When the user shares a Figma screenshot, frame link, or exported spec, map it to the structures above and call out explicitly which CSS tokens or component props are changing.
