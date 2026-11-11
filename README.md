# Hae Young Lee · Portfolio

English-first, bilingual portfolio prototype for AI systems engineering, retrieval, and hypergraph research. Select **EN / KOR** to change the full page. No framework or build step is required.

## Preview locally

```bash
cd /workspace/Portfolio
python3 -m http.server 4173 --bind 127.0.0.1
```

Use a local HTTP request or browser to inspect port 4173. ES modules require an HTTP server; opening `index.html` as a `file://` document is not supported. The onboarding chat does not provide localhost preview links.

## Structure

- `index.html`, `styles.css`, `editorial.css`, `showcase.css`, `script.js`: layout, typography, visual showcase, and routing.
- `visuals.js`, `motion.js`: original project covers, preview selection, pointer tilt, touch/keyboard navigation, and page/reveal motion.
- `assets/fonts`: self-hosted display fonts with OFL licenses; no runtime external font requests.
- `assets/images`: local licensed cover photography, with sources and usage notes.
- `presentation.js`: concise English/Korean slide-style summaries.
- `content.js`: expanded methods, workstreams, projects, and publications.
- [Design direction](docs/design-direction.md): visual decisions and Behance research status.
- [Reviewed references](docs/design-references.md): the X video and developer portfolios actually inspected; hiring evidence and access limitations.
- [English presentation](docs/presentation-en.md) / [Korean presentation](docs/presentation-ko.md): the short default copy.
- [English full notes](docs/content-en.md) / [Korean full notes](docs/content-ko.md): expanded implementation and validation copy.
- [Source and editorial decisions](docs/source-notes.md): source priority, measurement conditions, and unresolved facts.

The home screen introduces the person and three large section links: **Experience**, **Projects**, and **Papers**. Each section opens its own screen; projects and papers have dedicated detail views. `#projects/article`, `#papers/thesis`, and `#experience/search` are shareable deep links. The newer PDF resume’s first page (cover letter) was excluded.

Body text is 18–20px on desktop and 17–18px on mobile. All visible text is at least 17px. Default views show an overview, two contributions, and a result; longer methods and measurement details are expandable.

## Validation

```bash
node --check script.js
node --check content.js
node --check presentation.js
node --check motion.js
node --check visuals.js
node scripts/export-content.mjs
python3 scripts/smoke.py
```

The browser smoke check requires Python Playwright and `/usr/bin/chromium`, available in the current cloud environment. Start the local server first. It checks 144 route/viewport/language layouts, reading size, language/detail/history state, preview artwork and destinations, keyboard selection, pointer tilt, mobile tap/swipe, reduced motion, loading errors, and overflow. Screenshots go to ignored `artifacts/`. To use another local port, set `PORTFOLIO_BASE_URL`, for example `PORTFOLIO_BASE_URL=http://127.0.0.1:4180 python3 scripts/smoke.py`.

## Record an interaction preview

The application itself needs no video tools. For an optional recording in this cloud environment, install Playwright's official capture helper into a writable temporary cache, then run the recorder. System `ffmpeg` is used to export MP4.

```bash
PLAYWRIGHT_BROWSERS_PATH=/tmp/portfolio-browser-tools NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt python3 -m playwright install ffmpeg
PLAYWRIGHT_BROWSERS_PATH=/tmp/portfolio-browser-tools python3 scripts/record-demo.py
```

Set `PORTFOLIO_BASE_URL` if the server uses another port. The output is `artifacts/v4-interactions.mp4`; it records real browser actions, not a simulated video mockup.

## Deployment direction

Use GitHub for source backup and Vercel for deployment. This static prototype can use Vercel’s **Other** preset with no build command and the repository root as the output directory. GitHub Pages can also serve these files. Vercel account connection and public deployment have not been performed.

The design uses a large interactive project-cover preview, image-led project/paper lists, and the existing home/section/detail hierarchy. The supplied X post and public developer sources were inspected; individual Behance works remain unverified because the site returned challenge/error responses. Cover images are original compositions using licensed stock photography and authored vector illustrations, not company screenshots or benchmark plots. See the reference review for precise evidence.

Original private technical reports, the Word resume, and the PDF are deliberately kept outside this repository. Public copy uses the supplied material without internal addresses, customer data, or vulnerability reproduction details.
