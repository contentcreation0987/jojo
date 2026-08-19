# JOJO International — website

Static site. Two pages, no build step, no dependencies to install.

| File | Page |
|---|---|
| `index.html` | JOJO International — Home, How It Works, Featured Cars, About, Contact |
| `logistics.html` | MI Logistics — quote tool, coverage map, FAQ |

## Run it locally

Open `index.html` in a browser. That's it — but the two pages fetch each other's
files, so a few browsers block them from `file://`. If a page comes up blank, serve
the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

### Netlify

Drag this whole folder onto <https://app.netlify.com/drop>. Done — you'll get a live
URL immediately.

Or connect the GitHub repo: Netlify reads `netlify.toml`, and there is nothing to
build, so leave the build command empty and set the publish directory to `/`.

### Vercel

```bash
npm i -g vercel
vercel
```

Accept the defaults. `vercel.json` already tells it this is a static site with no
framework and no build step.

Or import the repo at <https://vercel.com/new> — pick **Other** as the framework,
leave the build command blank, and set the output directory to `.`.

### GitHub Pages

Push to GitHub, then Settings → Pages → deploy from branch `main`, folder `/ (root)`.
The `.nojekyll` file is already here so Pages serves every file as-is.

## What's real and what isn't

**Real** — read from the live sites in August 2026:

- WhatsApp `+92 316 830 1723`, email `info@jojo-international.com`, office address,
  opening hours, founder name, Facebook and LinkedIn links, and the vision / mission /
  CEO message copy — all from jojo-international.com
- Every Featured Cars listing: reference numbers, FOB prices, mileage, engine, stock
  location and photography come from BeForward's live stock list
- The MI Logistics coverage map is real Natural Earth border geometry, not a drawing

**Still placeholder** — replace before this goes public:

- The four stat figures on the home page (cars delivered, countries served, quote
  turnaround). Only "since 2016" is confirmed.
- All three testimonials.
- MI Logistics' own phone and city list. (Its email is deliberately absent — the
  `milogistics.co` domain has expired, so no mail address is shown anywhere.)
- Fleet photography.

**Hot-linked, not owned:** the office / team / CEO photos and the JOJO Techzone logo
load from `jojo-international.com`, and the car photos from BeForward's CDN. They work,
but they'll break when those hosts change or the cars sell. Download them into
`assets/` and update the paths in `app/data.js`, `app/Home.jsx` and `app/About.jsx`.

## How it's put together

- `styles.css` + `tokens/` — the JOJO design system: colours, type scale, spacing,
  shadows, motion. Every value on the site comes from a token.
- `_ds_bundle.js` — 25 compiled UI components (buttons, cards, forms, nav, stats).
- `app/` and `mi/` — the page code, in JSX compiled in the browser by Babel. Filenames are
  kebab-case here; each file still defines PascalCase components internally.
- `responsive.css` — breakpoints at 1080 / 820 / 560px.
- `intro.css` + `motion.js` — the logo intro and the scroll-reveal animations.
- `mi/pakistan-map-3d.js` — the draggable 3D map.

One note for whoever picks this up in a code editor: JSX is transpiled in the browser
here, which is perfect for a demo but slower than it needs to be for production. If
this becomes the real site, move it to a build step (Vite) and precompile.

## Fonts

Archivo, Manrope and JetBrains Mono load from Google Fonts. These are stand-ins for
Clash Display, General Sans and Satoshi — if you buy those licences, swap the
`@import` at the top of `tokens/fonts.css` for local `@font-face` rules. Nothing else
in the site names a font directly.
