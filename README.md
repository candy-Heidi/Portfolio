# Hae Young Lee · Portfolio

English-first, bilingual portfolio prototype for AI systems engineering, retrieval, and hypergraph research. Select **EN / KOR** to change the full page. No framework or build step is required.

## Preview locally

```bash
cd /workspace/Portfolio
python3 -m http.server 4173 --bind 127.0.0.1
```

Use a local HTTP request or browser to inspect port 4173. ES modules require an HTTP server; opening `index.html` as a `file://` document is not supported. The onboarding chat does not provide localhost preview links.

## Structure

- `index.html`, `styles.css`, `script.js`: responsive design and interaction.
- `presentation.js`: concise English/Korean slide-style summaries.
- `content.js`: expanded methods, workstreams, projects, and publications.
- [Design direction](docs/design-direction.md): visual decisions and Behance research status.
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
node scripts/export-content.mjs
python3 scripts/smoke.py
```

The browser smoke check requires Python Playwright and `/usr/bin/chromium`, available in the current cloud environment. Start the local server first. It checks 144 route/viewport/language layouts, actual text size, language state, details and browser history, deep links, mobile navigation, loading errors, and overflow. Screenshots are written to ignored `artifacts/`.

## Deployment direction

Use GitHub for source backup and Vercel for deployment. This static prototype can use Vercel’s **Other** preset with no build command and the repository root as the output directory. GitHub Pages can also serve these files. Vercel account connection and public deployment have not been performed.

The design is an original typography-led section index, based on the user's explicit requests for larger text, concise presentation copy, and a clear home/section/detail hierarchy. The supplied X and Behance links could not be accessed under the current network policy; no specific work or verified hiring outcome has been selected.

Original private technical reports, the Word resume, and the PDF are deliberately kept outside this repository. Public copy uses the supplied material without internal addresses, customer data, or vulnerability reproduction details.
