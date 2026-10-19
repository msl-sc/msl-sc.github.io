# Personal site

Static personal page for Mingsong Liu (刘明松), served by GitHub Pages at
<https://msl-sc.github.io>.

Plain HTML / CSS / vanilla JS — no build step, no framework.

## Files

```
index.html          page markup; English is the inline default
assets/style.css    styling
assets/i18n.js      EN / 中文 dictionary + language switch (remembers choice in localStorage)
MingsongLiu_CV.pdf  CV
.nojekyll           skip Jekyll processing on GitHub Pages
```

## Editing content

Text lives in two places and must be kept in sync:

1. `index.html` — the visible English text, inside elements tagged `data-i18n="key"`.
2. `assets/i18n.js` — `DICT.en` and `DICT.zh`, both keyed by the same `data-i18n` keys.

To add a line: put the English text in `index.html` with a new `data-i18n` key,
then add that key to **both** `DICT.en` and `DICT.zh`. A missing key simply
leaves the inline English in place.

## Deploy

Push to `main`; GitHub Pages serves the branch root.

```sh
git add -A && git commit -m "update site" && git push origin main
```
