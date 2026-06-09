# Jerome Haynes — Portfolio

My personal portfolio — a single page, hand-built with custom motion.

## Features

- **Kinetic heading** — the headline assembles letter-by-letter on load and leans toward the cursor as you move across it.
- **Custom cursor** — a spring-following dot that grows over interactive elements.
- **Magnetic footer links** — pull toward the cursor, with an ink-fill sweep and a roll-up label swap on hover.
- **Cursor-trailing work previews** — hovering a project reveals a screenshot that drifts after the pointer with inertia.
- **Smooth scroll** — eased, weighted scrolling via Lenis.
- **Accessible & adaptive** — full `prefers-reduced-motion` support, visible keyboard focus states, and touch-aware behavior: pointer effects and smooth scroll are desktop-only, while entrance animations run everywhere.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) (formerly Framer Motion)
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scroll
- Deployed on [Netlify](https://netlify.com)

## Getting started

```bash
git clone https://github.com/dev-rome/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx         # fonts, metadata, providers
    page.tsx           # page composition + top bar
    globals.css        # design tokens, base styles, Lenis + cursor CSS
  components/
    SmoothScroll.tsx   # Lenis provider (desktop only)
    Cursor.tsx         # custom spring cursor
    Hero.tsx
    KineticHeading.tsx # split-letter reveal + cursor lean
    Experience.tsx
    Work.tsx           # work list + cursor-trailing preview
    MagneticLink.tsx   # magnetic + ink-fill + roll-up label
    Footer.tsx
  data/
    work.ts            # project list
  hooks/
    useMediaQuery.ts   # hover/pointer detection
public/
  work/                # project screenshots
```

## Accessibility & motion

Every animation respects `prefers-reduced-motion`: the smooth scroll is disabled, the cursor and previews are hidden, and the headline appears instantly without the reveal. On touch devices, pointer-driven effects are skipped in favor of native scrolling and tapable links.

## License

© 2026 Jerome Haynes. All rights reserved.
