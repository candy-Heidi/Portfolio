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
- `content.js`: shared English/Korean content, workstreams, projects, and publications.
- [Design direction](docs/design-direction.md): visual decisions and Behance research status.
- [English content](docs/content-en.md) / [Korean content](docs/content-ko.md): complete, readable section copy.
- [Source and editorial decisions](docs/source-notes.md): source priority, measurement conditions, and unresolved facts.

The page separates **Experience**, **Projects**, **Papers**, **About/Education**, and **Contact**. Experience is one connected workflow with five contribution areas. The newer PDF resume’s first page (cover letter) was excluded.

## Validation

```bash
node --check script.js
node --check content.js
node scripts/export-content.mjs
python3 scripts/smoke.py
```

The browser smoke check requires Python Playwright and `/usr/bin/chromium`, available in the current cloud environment. Start the local server first. It checks language behavior, interactions, mobile navigation, internal links, loading errors, and horizontal overflow. Screenshots are written to ignored `artifacts/`.

## Deployment direction

Use GitHub for source backup and Vercel for deployment. This static prototype can use Vercel’s **Other** preset with no build command and the repository root as the output directory. GitHub Pages can also serve these files. Vercel account connection and public deployment have not been performed.

The design is an original editorial/system-map direction. Behance could not be accessed under the current network policy; no specific work or verified hiring outcome has been selected. Access requirements were saved as a configuration draft, not applied to the running network.

Original private technical reports, the Word resume, and the PDF are deliberately kept outside this repository. Public copy uses the supplied material without internal addresses, customer data, or vulnerability reproduction details.
