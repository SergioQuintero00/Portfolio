# Sergio Quintero Mena - Portfolio

Full-stack web developer portfolio built with React, TypeScript and Tailwind
CSS on Vite. English is the default language, with a complete Spanish version.
Includes light and dark themes, professional experience, the restaurant ordering
and kitchen project, competitive programming, education, contact details and CVs.

Version 3.1.0 · 7 October 2026. Baseline before the next design and copy revisions.

## Development

Use Node.js 22.12 or a newer version compatible with Vite 8, plus npm.
Exact dependency versions are recorded in `package-lock.json`.

```sh
npm ci
npm run dev
```

Development: `http://127.0.0.1:5173/` (English) and
`http://127.0.0.1:5173/es/` (Spanish).

```sh
npm run build
npm run preview
npm run typecheck
```

`build` checks TypeScript and creates both pages in `dist/`. `preview` serves
the production build at `http://127.0.0.1:4173/` by default.

## Languages and content

| File                                               | Purpose                                                        |
| -------------------------------------------------- | -------------------------------------------------------------- |
| `src/content.ts`                                   | Shared contact/project assets and typed English/Spanish copy.  |
| `src/App.tsx`                                      | Sections, interactions, theme control and language navigation. |
| `src/styles.css`                                   | Tailwind, themes, responsive layout and print styles.          |
| `index.html`                                       | English entry, metadata and no-JavaScript fallback.            |
| `es/index.html`                                    | Spanish entry, metadata and no-JavaScript fallback.            |
| `public/documentos/Sergio_Quintero_Mena_CV_EN.pdf` | Current English CV.                                            |
| `public/documentos/Sergio_Quintero_Mena_CV.pdf`    | Current Spanish CV.                                            |

The root URL always opens in English. The language switch uses real links to
`/` and `/es/`, so the selected language survives a reload and can be shared.
The HTML `lang` attribute selects the matching content. No browser-language
redirect, translation service or additional routing dependency is needed.
Both copies must match the typed content structure. Update both when editing.

CV downloads follow the current page language. The project video and original
application screenshot remain in Spanish; the English case study identifies this.

Each HTML entry has its own title, description, canonical URL, Open Graph
metadata and language alternatives. `public/sitemap.xml` includes both pages.
If the domain changes, update both HTML files, the sitemap and `public/robots.txt`.
The old `contacto.html` URL redirects to the Spanish contact section.

## Assets and project demo

The original portrait and logo are in `public/imagenes/retrato-sergio.png` and
`public/imagenes/logo-sergio.png`. The portrait retains its original proportions.
The logo is also the favicon. Assets are configured in `sharedProfile`.

Set `project.demoUrl` in `src/content.ts` when the ordering app is publicly
available. Until then, only the existing video link appears. The portfolio does
not host the application backend or database.

Fonts are served locally. The video opens YouTube only when its link is followed.
There are no contact forms, analytics or backend services.

## Formatting

```sh
npm run format
npm run format:check
```

## Validation status

Both language entries compile. Local checks cover rendered copy in both initial
themes, section anchors, CV and language links, the optional demo, production
HTML and asset responses, and matching served PDF files. Each CV is one page and
under 2 MB. Browser interaction and responsive visual review remain pending:
the browser control service was unavailable during this revision.

## Deployment

`vercel.json` configures Vite, `npm run build` and the `dist` output directory.
Use this repository as the Vercel project root. Vite generates both the root
page and `es/index.html`, so a catch-all SPA rewrite is unnecessary.
If the existing Vercel project retains manual settings from the old static site,
check the build command and output directory before publishing.

The `v3.1.0` Git tag preserves this baseline before further design and copy
revisions. Pushing `main` may trigger the connected Vercel deployment; its status
is separate from the GitHub commit and tag.

## Previous version

The original HTML, CSS and JavaScript files are preserved in `legacy/`. The
original images remain in `imagenes/`, with Git history intact. Vite copies
only selected public assets into the build; legacy resources are not published.
