# BioVeritas CRO — Website

Marketing website for **BioVeritas**, a full-service contract research organization (CRO) supporting non-clinical, bioanalytical, and clinical research, regulatory readiness, and new product development across pharmaceuticals, biotech, nutraceuticals, AYUSH, food, and cosmetics.

Static HTML/CSS/JS — no build step, no framework, no dependencies.

## Stack

- HTML5 (18 pages, shared header/footer injected via JS)
- CSS3 (single stylesheet, custom properties for theming)
- Vanilla JS (no libraries)
- Google Fonts: Figtree, JetBrains Mono

## Structure

```
.
├── index.html                     Home
├── about.html                     About
├── services.html                  Services overview
├── service-in-vitro.html          In vitro & cell-based studies
├── service-in-vivo.html           In vivo pharmacology & efficacy
├── service-detail.html            Toxicology & safety pharmacology
├── service-bioanalytical.html     Bioanalytical & biomarker testing
├── service-pk-adme.html           Pharmacokinetics & ADME
├── service-clinical.html          Clinical research (Phase I–IV)
├── service-regulatory.html        Regulatory & strategic consulting
├── service-discovery.html         Discovery & NPD screening
├── service-npd.html               New product development
├── projects.html                  Case studies index
├── project-detail.html            Case study detail
├── blog.html                      Insights index
├── blog-post.html                 Insights article
├── team.html                      Team
├── contact.html                   Contact
├── styles.css                     All site styles
├── chrome.js                      Injects shared header/footer + mobile nav
├── hero.js                        Canvas backgrounds (DNA-helix / molecular network)
└── assets/
    ├── bioveritas-logo.png
    └── bioveritas-logo.jpg
```

Every page loads `chrome.js` and `hero.js` and sets `<body data-page="...">` so the shared nav knows which item to highlight.

## Running locally

No build step — but serve it over HTTP rather than opening files directly, so relative paths and fonts behave the same as in production:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:3000` (or `:8000`).

## Deploying

The site uses only relative paths, so it works as-is on **GitHub Pages** — either at the repo root or under a project subpath:

Settings → Pages → Deploy from branch → `main` / `root`.

## Notes

- A couple of files from the original export were left out of this repo since they aren't part of the site itself: `app.jsx` / `tweaks-panel.jsx` (a live design-tweaking panel from the build process, not wired into any page), QA screenshots, a tool-generated `.thumbnail`, and an `uploads/` folder of reference material (client brief, feedback, a strategic-rationale deck, duplicate logo files). Happy to add any of these back in if you want them versioned too.
- The homepage hero's video background is stubbed out — drop a clip at `assets/hero-bg.mp4` and uncomment the `<source>` in `index.html` to enable it.
# bioveritas-cro-website
