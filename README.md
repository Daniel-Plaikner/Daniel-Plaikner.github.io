# Daniel-Plaikner.github.io

Homepage of Daniel Plaikner: **<https://daniel-plaikner.github.io/>**

A static profile page in English, German and Italian, with a one-page CV as PDF in each language:
[English](https://daniel-plaikner.github.io/cv/Daniel-Plaikner-CV-en.pdf) ·
[Deutsch](https://daniel-plaikner.github.io/cv/Daniel-Plaikner-CV-de.pdf) ·
[Italiano](https://daniel-plaikner.github.io/cv/Daniel-Plaikner-CV-it.pdf)

## How it works

No build step and no dependencies: plain HTML, CSS and JavaScript, served by GitHub Pages from `main`.

| File | Purpose |
|---|---|
| `content.js` | All text in the three languages. Both pages read from it. |
| `index.html`, `app.js`, `style.css`, `bg.js` | The profile page and its animated background. |
| `cv.html` | The CV as an A4 one-pager (`cv.html?lang=en`, `de` or `it`). |
| `fonts/` | Inter and JetBrains Mono (SIL Open Font License), served from here instead of Google Fonts. |
| `build-cv.ps1` | Prints `cv.html` to the PDFs in `cv/` with headless Chrome or Edge. |

## Updating the content

1. Edit `content.js`.
2. Run `.\build-cv.ps1` to regenerate the PDFs.
3. Check that each PDF still fits on one page, then commit and push.

To preview locally, open `index.html` in a browser.
