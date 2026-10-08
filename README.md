# Trojan Trade

A peer-to-peer marketplace concept for USC students to buy, sell, and rent secondhand textbooks, furniture, electronics, and everyday essentials.

[Open the live demo](https://christinejeong.github.io/trojan-trade/dist/)

## Current version

The redesigned portfolio demo uses **HTML, CSS, and vanilla JavaScript**. The original React/Vite prototype remains available in Git history.

- Responsive cream-and-cardinal design with local assets and fonts
- Search, categories, buy/rent filters, and price sorting
- Saved items with rounded heart icons and a count badge
- Listing details and message previews
- Create and remove demo listings
- Browser-local persistence, with an in-memory fallback when storage is unavailable
- Keyboard-accessible dialogs and reduced-motion styling

## Development

No package installation is required. With Python 3, run `python3 -m http.server 5173` from this directory, then open http://localhost:5173. Alternatively, use `npm run dev`.

The root files are the editable source. `dist/` is a checked-in copy for the existing GitHub Pages URL. After editing, rebuild with Node.js:

```sh
npm run check
npm run build
```

Commit source changes and rebuilt `dist/` together. `npm run preview` serves the built version on port 4173 (requires Python 3). Both root and `/dist/` use relative asset paths compatible with GitHub Pages. The portfolio link returns to Christine's portfolio.

## Demo boundaries

Listings and student names are illustrative. New listings stay in the same browser and are not published to other users. Message previews send nothing. There is no backend, account system, student verification, payment processing, or reservation service.

Furniture photos were retained from the original project. Category illustrations are local SVG files. No external image or font service is required.
