# Personal site

Minimal personal page at <https://msl-sc.github.io>: one short intro and links
to GitHub projects that actually have a repository. Two controls only — theme
and EN/中文.

Plain HTML / CSS / vanilla JS — no build step, no framework.

## Files

```
index.html          markup; English is the inline default
assets/style.css    styling + light/dark tokens
assets/app.js       EN / 中文 dictionary, theme and language toggles
.nojekyll           skip Jekyll processing on GitHub Pages
```

## Editing content

Translatable text lives in two places and must be kept in sync:

1. `index.html` — the visible English text inside elements tagged `data-i18n="key"`.
2. `assets/app.js` — `DICT.en` and `DICT.zh`, both keyed by the same `data-i18n` keys.

To change the intro, edit the `intro` key in both dictionaries (and the inline
English text in `index.html`). Project links are plain `<a>` elements in
`index.html` — add only repositories that exist.

Both choices are stored in `localStorage`; the theme starts from the OS
preference and the language from the browser preference.

## Deploy

Push to `main`; GitHub Pages serves the branch root. Deploy can queue for
several minutes.

```sh
git add -A && git commit -m "update site" && git push origin main
```
