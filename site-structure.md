# Site Structure & Wiring

A reference for how the pages, components, and state fit together — and what's
still broken or unfinished.

---

## 1. How a page loads

Every route shares one layout:

```
app/layout.tsx
 └─ <SiteProvider>              ← lib/site-context.tsx (menu/search/theme state)
     ├─ <Topbar />               always visible
     ├─ <MenuOverlay />          hidden until opened
     ├─ <SearchOverlay />        hidden until opened
     └─ {children}               ← whichever page.tsx matched the URL
```

`SiteProvider` is a **Client Component** (`'use client'`) that holds three
pieces of state — menu open/closed, search open/closed, and theme — in React
`useState`, and exposes them through `useSite()`, a custom hook built on
`React.Context`. Any component that calls `useSite()` can read that state or
call its setters (`toggleMenu`, `openSearch`, `toggleTheme`, etc.) without
props being passed down manually.

This is why `Topbar`, `MenuOverlay`, and `SearchOverlay` can all react to the
same "menu open" flag despite being siblings, not parent/child — they all
pull from the same context instance created once in `layout.tsx`.

---

## 2. File map

```
app/
  layout.tsx          Root layout — mounts SiteProvider, Topbar, MenuOverlay, SearchOverlay
  globals.css          All design tokens (colors, fonts, spacing) + every component's styles
  page.tsx             Homepage — hero + footer
  biography/page.tsx   Bio text, portrait placeholder, photo grid
  cv/page.tsx          Education + experience, pulled from lib/content.ts
  projects/page.tsx    Static grid of ProjectCards
  blog/page.tsx        Filterable list of BlogPostRows (Client Component — has interactive state)

components/
  Topbar.tsx            Logo, theme toggle, search trigger, menu trigger
  MenuOverlay.tsx        Full-screen nav: links, bio, socials, recent posts
  SearchOverlay.tsx      Command-palette-style search over posts + projects
  Footer.tsx             Two-column nav + social links (bottom of every page)
  PageHero.tsx           Shared "title + description" block used by Biography/CV/Projects/Blog
  ProjectCard.tsx         One tile in the Projects grid
  BlogPostRow.tsx         One bordered row in the Blog list
  BlogFilterBar.tsx       Category chips + "More" dropdown + inline search (Blog page only)
  CVExperienceRow.tsx     One job entry in the CV's experience list
  icons.tsx               Every icon used across the site, hand-drawn as inline SVG

lib/
  site-context.tsx     SiteProvider + useSite() — menu/search/theme state
  site-data.ts          NAV_ITEMS and SOCIAL_LINKS — single source of truth for both
  content.ts             CV_EDUCATION, CV_EXPERIENCE, PROJECTS, BLOG_POSTS, BLOG_CATEGORIES
```

---

## 3. Where content actually lives

Nothing is hardcoded twice. Three files hold everything:

| File | Holds | Used by |
|---|---|---|
| `lib/site-data.ts` | Nav links (Main/Biography/Projects/Blog/CV), social links | `Topbar`, `MenuOverlay`, `Footer` |
| `lib/content.ts` | CV entries, project list, blog posts | `cv/page.tsx`, `projects/page.tsx`, `blog/page.tsx`, `MenuOverlay` (recent posts), `SearchOverlay` (search index) |
| `app/globals.css` | Colors, fonts, spacing — as CSS custom properties | Every component |

**To add a project or blog post**, edit the arrays in `lib/content.ts` — no
component code needs to change. **To rename a nav item or swap a social
link**, edit `lib/site-data.ts` once and it updates in three places
automatically.

---

## 4. Interactive pieces

- **Menu** — `Topbar`'s menu button calls `toggleMenu()`. `MenuOverlay` reads
  `isMenuOpen` and adds a CSS class (`is-open`) that slides it into view.
  Pressing `Escape` or clicking a nav link closes it.
- **Search** — same pattern with `isSearchOpen`. The search index is built
  once at module load from `BLOG_POSTS` and `PROJECTS` titles; typing filters
  it client-side with a plain substring match.
- **Blog filters** — `BlogFilterBar` is "dumb" (no data of its own); `blog/page.tsx`
  owns the actual filter/search state and passes it down as props, then
  filters `BLOG_POSTS` with `useMemo` before rendering `BlogPostRow`s.
- **Theme** — `toggleTheme()` flips `theme` between `'dark'` and `'light'` in
  context, which sets a `data-theme="light"` attribute on a wrapper `<div>`.
  CSS variables are redefined under `[data-theme="light"] { ... }` in
  `globals.css`. **This is currently broken — see below.**

---

## 5. Known issues / next steps

### Light/dark mode doesn't fully work
Found the actual bug: `SiteProvider` puts `data-theme="light"` on a `<div>`
*inside* `<body>`, but `body`'s own background/text color
(`body { background: var(--bg); color: var(--text); }`) is set outside that
div. CSS variables only cascade downward, so the div's light-mode override
never reaches `body` itself — you get a flash of mismatched color at the
edges, or it looks like toggling does nothing.

**Fix:** move the `data-theme` attribute onto `<html>` or `<body>` instead of
a nested div — e.g. set it with `useEffect` on `document.documentElement` —
so the whole page inherits from the same root the variables are redefined on.

### Font isn't right yet
Current stack is `EB Garamond` (headings) + `Inter` (body text), set as
`--font-display` / `--font-body` at the top of `globals.css`. Swapping fonts
is a one-line change per variable, plus updating the `@import` URL at the top
of the file — no component touches font names directly.

### Images still need to be filled in
Everything is a gray/dark placeholder box right now:
- `public/hands.png` (homepage hero) — referenced but not present
- Biography portrait + 3-photo gallery — empty placeholder `<div>`s
- All project thumbnails (`ProjectCard`) and blog post images (`BlogPostRow`)
  — render a plain color block until an `imageSrc` is added in `lib/content.ts`

### Hands image needs a light/dark variant
Right now the homepage hero fakes a theme-aware look with a CSS trick
(`mix-blend-mode: screen` in dark mode, `multiply` in light mode on the same
image) — it doesn't actually swap files. Once the theme bug above is fixed,
there are two real options:

1. **Two images, swapped by theme** — put `hands-dark.png` and
   `hands-light.png` in `public/`, make `app/page.tsx` a Client Component,
   read `theme` from `useSite()`, and pick the `src` conditionally.
2. **One image, CSS filter** — keep one file and rely on `filter`/`mix-blend-mode`
   tricks (what's there now) — less asset work, but won't look as intentional
   as a purpose-made light version.

Option 1 is the more reliable fix and worth doing once real artwork exists.

### Not built yet
- `/blog/[slug]` and `/projects/[slug]` detail pages — `SearchOverlay` and
  `BlogPostRow`/`ProjectCard` already link to these routes, so clicking
  through currently 404s.
- One CV entry (`lib/content.ts`) has a `TODO` — a job's company name was cut
  off in the original screenshot.
