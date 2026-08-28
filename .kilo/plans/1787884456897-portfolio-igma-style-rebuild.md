# Plan: Rebuild febryards.xyz portfolio in igma.im's character

## Goal
Transform `febryards.xyz` from a clean-but-generic single-page portfolio into a multi-route, character-forward portfolio in the spirit of `https://igma.im/`. Keep Febry's real content (Flutter/Next.js engineer, mobile apps, OSS) but express it through igma-style typography, marquees, scroll-reveal motion, persistent ambient UI, and code-generated SVG ornaments.

## Constraints (decided with user)
- **Stack**: keep Next.js 16.3.3 + React 19 + Tailwind v4 (already in `package.json`); add `motion` (Framer Motion successor) and `resend`
- **Pages**: Works grid (`/`), About (`/about`), Contact (`/contact`), per-project case studies (`/works/[slug]`). **No** Feedbook, **no** Pigeonbite/services page, **no** easter-egg nav screen
- **Visual assets**: code-generated SVG ornaments only (no commissions, no Igma art reuse). Original brand: **F monogram**, geometric shapes, typographic flourishes, sticker-style skill icons
- **Vibe**: creative-designer-leaning — bold display serif + clean sans, marquees, stickers, reveal-on-scroll
- **Motion**: Framer Motion + CSS marquees + IntersectionObserver reveals (no GSAP)
- **Status bar**: subtle availability ping ("Open to interesting collaborations ✦")
- **Case studies**: mid-depth (hero, problem/solution bullets, role, stack tags, 3–5 screenshots, results/impact, "Next Project")
- **Contact**: keep form, wire via Next.js Server Action → Resend → `febryardiansyah27@gmail.com`

## Reference patterns from igma.im (and our adaptations)
| Igma element | Febry adaptation |
|---|---|
| Massive serif marquee "Igor Mahr \* Designer \* Developer \*" | "Febry \* Engineer \* Builder \* Maker" looped display-serif marquee on `/` and on case studies |
| Hover-cycling 3-thumb project card | Cycle through 3 Cloudinary screenshots per project card (CSS `@keyframes` + `prefers-reduced-motion`) |
| Persistent top "Currently booking…" | Persistent top bar: "Open to interesting collaborations ✦" + "Based in Jakarta 🇮🇩" |
| Footer ".beat time" + status ticker | Footer: real-time clock + small "now shipping" line + social icons |
| Custom pixel-art sticker icons | Code-generated sticker icons for skills (Flutter 🐦, Next ▲, Dart ◆, TS 𝕊, Tailwind 〰️, Firebase 🔥 — but as inline SVG, not emoji) |
| Arcade-style ASCII decoration around sections | SVG dashed borders, brackets, monospaced section markers `[ 01 / SELECTED ]` |
| Big serif hero heading per section | Each page opens with oversized serif statement that scales from `clamp()` |
| Sticky CTA pill ("Get Started") | Sticky "Say hello →" pill in bottom-right on `/` and `/about` |
| Per-case-study awards block | Awards block on each case study (omit if no awards; show metrics instead) |

## File layout (proposed)
```
app/
  layout.tsx                       # fonts, <StatusBar />, <Footer />, <StickyHello />
  globals.css                      # design tokens, marquee keyframes, ornaments
  page.tsx                         # Works grid (home)
  about/page.tsx
  contact/page.tsx
  contact/actions.ts               # 'use server' → Resend send
  works/[slug]/page.tsx            # case study
  works/[slug]/not-found.tsx
  works/page.tsx                   # optional: redirect to /
components/
  chrome/StatusBar.tsx
  chrome/Footer.tsx
  chrome/StickyHello.tsx
  chrome/Nav.tsx
  motion/Marquee.tsx               # CSS-driven, accepts children, speed, direction
  motion/Reveal.tsx                # Framer Motion viewport reveal wrapper
  motion/CyclingThumb.tsx          # auto-cycle through N images
  ornament/Monogram.tsx            # SVG F-mark, configurable
  ornament/Sticker.tsx             # skill stickers (Flutter, Next, etc.) as SVG
  ornament/OrnamentBorders.tsx     # brackets, dashed frames, ASCII-ish frames
  works/ProjectCard.tsx
  works/ProjectGrid.tsx
  about/Timeline.tsx               # Experience timeline
  about/SkillBoard.tsx             # Igma-style skillset board
  contact/ContactForm.tsx          # client component, calls server action
data/
  projects.ts                      # all projects (slug, year, tags, thumb cycle, problem/solution, role, stack, gallery, links, role2)
  experience.ts                    # timeline items
  skills.ts                        # skill stickers
  github.ts                        # top OSS repos (server fetch helper)
  profile.ts                       # bio, location, socials
lib/
  markdown.ts                      # optional: render case study body from MDX
  env.ts                           # RESEND_API_KEY etc.
public/
  ornaments/                       # pre-baked SVGs that aren't worth generating at runtime (rare)
```

## Design tokens (in `globals.css`, Tailwind v4 `@theme inline`)
- Colors: `--color-bg`, `--color-fg`, `--color-accent` (warm yellow #f5d442), `--color-accent-2` (coral #ff7a59), `--color-muted`, `--color-ink` (deep navy #0b0d10)
- Fonts: `--font-display` (Instrument Serif or Fraunces), `--font-sans` (Inter or keep Geist), `--font-mono` (JetBrains Mono)
- Sizes: `--text-hero` = `clamp(3rem, 12vw, 12rem)`, `--text-section` = `clamp(2rem, 6vw, 5rem)`
- Spacing: generous, `--gutter: clamp(1rem, 4vw, 3rem)`
- Motion: `--marquee-duration: 28s`, `--reveal-duration: 600ms`

## Implementation order (incremental, shippable slices)

### Slice 0 — Foundation (do first)
1. Read `node_modules/next/dist/docs/` Next.js 16 guide before any code (per AGENTS.md)
2. Add deps: `npm install motion resend`
3. Update `app/layout.tsx`: add Instrument Serif + Inter via `next/font/google`, keep Geist as mono fallback
4. Replace `app/globals.css` with design tokens above
5. Build `<StatusBar />` (top), `<Footer />` (with live clock + now-shipping line), `<StickyHello />`
6. Add `<Nav />` with Works / About / Contact + Download CV
7. Verify `npm run build` + `npm run lint` pass

### Slice 1 — Works grid (`/`)
1. Create `data/projects.ts` with current 3 projects (BI Superapp, Cariilmu, Muatparts PLUS) plus at least 2 archive-style ones (open source: manga-api, manga_mint) so the grid feels full
2. Build `<Marquee />` component (CSS keyframes, `prefers-reduced-motion` honored)
3. Build `<ProjectCard />` with `<CyclingThumb />` (3-frame cycle)
4. Build `<ProjectGrid />` with "Selected" + "Archive" sections (mirrors Igma structure)
5. Hero: oversized serif "Febry ✦ Engineer ✦ Builder ✦ Maker" marquee + small "Selected Works" label + 1-line statement
6. Top of page: subtle status bar copy

### Slice 2 — About (`/about`)
1. Build hero (bio sentence with reveals)
2. Build `<SkillBoard />` mirroring Igma's skillset section: skill stickers grouped (Mobile, Frontend, Tooling, AI)
3. Build `<Timeline />` for experience (4 entries from current site, newest first)
4. "Approach" 5-step section (adapt Igma's approach template to engineer context: Understand → Architect → Build → Harden → Ship)
5. "Interests" section (analog of Igma's music/books/games/hobbies): reading, badminton, mobile games, open-source tinkering
6. Inline 3D-ish SVG avatar (placeholder: monogram frame, swap once Febry provides photo)

### Slice 3 — Contact (`/contact`)
1. Big serif "Let's build something" statement
2. `<ContactForm />` (name, email, subject, message) → server action
3. `app/contact/actions.ts`: `'use server'`, validates with zod, sends via Resend, returns `{ ok, error }`
4. Add `RESEND_API_KEY` to `.env.local` (do **not** commit)
5. Below form: direct mailto, LinkedIn, GitHub, X/Twitter buttons

### Slice 4 — Case studies (`/works/[slug]`)
1. Reusable template at `app/works/[slug]/page.tsx` using `data/projects.ts`
2. Sections: Hero (title, year, tags, role), Problem, Solution, Gallery (next/image with Cloudinary URLs, 3–5 images), Stack tags, Results/impact, "Next Project" link
3. Per-project `generateStaticParams` + `generateMetadata` for SEO
4. Sticky breadcrumb at top: "← Works / [Project]"

### Slice 5 — Polish & a11y
1. Honors `prefers-reduced-motion`: marquees freeze, cycling thumbs stop on first frame, reveals are instant
2. Keyboard focus rings visible everywhere; skip-link to `#main`
3. Open Graph image (per-page + default)
4. Lighthouse pass: ≤ 100KB JS beyond framework, LCP < 2s on `/`
5. Sitemap + robots.txt
6. Verify all external links (App Store, Play Store, GitHub, LinkedIn, X) resolve

## Data contract (`data/projects.ts`)
```ts
export type Project = {
  slug: string;
  title: string;
  year: number;
  emoji?: string;              // small personality accent (e.g. '🚀')
  category: string[];          // ['Mobile', 'Flutter', 'B2B']
  role: string;                // 'Lead Mobile Engineer'
  summary: string;             // 1-line headline
  problem: string;             // 2–4 bullets
  solution: string[];          // 3–6 bullets
  stack: string[];
  metrics?: { label: string; value: string }[]; // e.g. [{label:'Crash rate', value:'-72%'}]
  thumbs: [string, string, string];  // Cloudinary URLs
  gallery: string[];           // Cloudinary URLs, 3–5
  links: { live?: string; appStore?: string; playStore?: string; repo?: string };
  awards?: string[];
  selected?: boolean;
};
```

## Risks & mitigations
- **Next.js 16 has breaking changes** (per AGENTS.md): implementer must read `node_modules/next/dist/docs/` before writing routes, layouts, fonts, metadata, and Server Actions. Some patterns I have memorized will be wrong.
- **Tailwind v4 `@theme inline` syntax** differs from v3. Use `@theme inline { --color-…: …; }` blocks; do not use `tailwind.config.js`.
- **Framer Motion v12 → package is now `motion`** (`npm i motion`, imports from `motion/react`). Confirm import path during Slice 0.
- **Resend env var**: do not bake into client. Use `process.env.RESEND_API_KEY` only inside Server Action.
- **Marquee jank**: use CSS `transform: translateX` only; never animate `left`. Pause on hover.
- **Cloudinary URLs**: keep using the existing `res.cloudinary.com/febryar/...` paths; do not migrate to Next/Image loader unless bandwidth becomes an issue.
- **SVG ornament consistency**: define ornaments as React components with explicit `currentColor` and viewBox so they scale with text color.

## Validation checklist before "done"
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds (Next.js 16 strict)
- [ ] `npm run dev` boots; all four routes load without console errors
- [ ] Lighthouse a11y ≥ 95 on `/`, `/about`, `/contact`, one `/works/[slug]`
- [ ] Marquees pause / freeze under `prefers-reduced-motion`
- [ ] Contact form submits; Resend dashboard shows the email
- [ ] All Cloudinary thumbnails render (`next/image` allowed domains configured in `next.config.ts`)
- [ ] Open Graph preview renders correctly for each route
- [ ] Keyboard-only navigation works (tab order, focus rings, skip link)
- [ ] Mobile (375px) layout holds: marquee scales, project cards stack, status bar wraps
- [ ] No secrets in git (`grep -r RESEND_ .` → only `.env.local`)

## Out of scope (explicit)
- Feedbook / personal notes page
- Pigeonbite-style services & pricing page
- Konami-code easter egg / full-screen `/navigation`
- Custom illustrations / commissions (placeholders stay code-generated)
- CMS — content stays in `data/*.ts` TS modules
- i18n — site is English-only
- Analytics — can be added later via Vercel Analytics

## Open question (only one, can be deferred)
**Open Graph / case study cover image**: each case study needs a 1200×630 OG image. Two paths — (a) generate at build time with `@vercel/og` from project title + thumb, or (b) upload per-project OG PNGs to Cloudinary and reference them. Recommend (a) once Slice 4 lands; not blocking Slice 0–3.
