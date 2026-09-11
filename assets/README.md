# BioVeritas — media drop guide

Everything here is referenced by relative path, so dropping a correctly named file
into this folder makes it appear on the site with no code change.

## Hero background video (home page)

    assets/hero-bg.mp4        H.264 MP4, 1920×1080, 8–15 s seamless loop, no audio, < 6 MB
    assets/hero-bg.webm       (optional) same clip as WebM for smaller transfer

Then open `index.html` and uncomment the two <source> lines inside
`<video id="hero-video">`. Until a clip is dropped in, the hero runs the
generated DNA-helix animation in `hero.js` — original, licence-free, and
already tuned to the brand palette, so the site is launch-ready without a video.

Suggested footage: laboratory macro (pipetting, plate reader, chromatography
column), slow camera movement, cool/teal grade, nothing with faces or readable
third-party branding.

## Photography slots

Each striped placeholder on the site prints the exact filename it expects:

    assets/photos/lab-analytical.jpg          analytical bench, HPLC in frame
    assets/photos/lab-cellculture.jpg         biosafety cabinet / cell culture
    assets/photos/lab-lcms.jpg                LC–MS/MS instrument
    assets/photos/lab-sample-store.jpg        −80 °C storage / sample management
    assets/photos/lab-team.jpg                scientists at work, wide shot
    assets/photos/lab-stability.jpg           stability chambers
    assets/photos/quality-archive.jpg         QA documentation / archive room
    assets/photos/facility-model-room.jpg     animal facility / model room
    assets/photos/collaboration-meeting.jpg   sponsor or academic working session

Recommended: 1600×1200 or larger, JPEG, quality 80, colour-corrected cool.
To wire a photo in, replace the placeholder's `<figcaption>` with
`<img src="assets/photos/….jpg" alt="…" />` — the CSS already covers the crop.

## Open-graph / social share image

    assets/og-cover.jpg        1200×630, logo + one line of positioning

Currently the logo is used as the OG image on every page. Drop `og-cover.jpg`
here and replace the `og:image` / `twitter:image` paths to upgrade it.

## Logo

    assets/bioveritas-logo.png       primary, transparent (light backgrounds)
    assets/bioveritas-logo-dark.png  footer / dark backgrounds
