# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public website for RevolutionConf, a (now-dormant) software development conference held in Virginia Beach, VA. The site is currently a single landing page announcing that no further conferences are planned, with a contact address (`team@revolutionva.org`) and a link to [@revconf](https://twitter.com/revconf).

Astro 5 static site, styled with Tailwind, deployed to Azure Static Web Apps.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run astro check` | Type-check `.astro` files against `astro/tsconfigs/strict` |

There is no test suite, linter, or formatter configured. `astro check` is the only verification step beyond a successful build.

## Architecture

- `src/pages/` — file-based routing; `index.astro` is the only page and holds all page copy inline.
- `src/layouts/Layout.astro` — the sole layout. Owns `<head>` (favicons, webmanifest, Google Fonts link for Exo/Open Sans), takes a `title` prop, and sets `bg-revconf-base` on `<body>`.
- `src/assets/` — images imported through `astro:assets` (`<Image>`), so they get hashed and optimized at build. `public/` holds files that must keep a fixed URL (favicons, `site.webmanifest`).
- `src/components/Card.astro` — leftover from the Astro starter template; unused by any page.

Tailwind is wired in via the `@astrojs/tailwind` integration in `astro.config.mjs` (no manual CSS import). `tailwind.config.cjs` defines the two project-specific tokens: the `revconf.base` red (`#EA262D`) and `Exo` as the default sans stack — the font itself is loaded by the `<link>` in `Layout.astro`, so changing one without the other breaks typography.

## Deployment

`.github/workflows/azure-static-web-apps-red-cliff-0a88f5e0f.yml` builds and deploys on every push to `main`, and creates a preview environment for each PR (torn down when the PR closes). `output_location` is `dist`; the SWA build detects and runs the Astro build itself. `staticwebapp.config.json` only pins the API runtime — there is no API directory in this repo.

Renovate (`config:base`) opens dependency-update PRs; most repo history is these updates.

## Notes

- `README.md` is still the unmodified Astro starter-kit readme and does not describe this project. Treat this file as the source of truth.
- `Layout.astro` still carries the placeholder `<meta name="description" content="Astro description">` — worth fixing if touching that file for any SEO reason.
