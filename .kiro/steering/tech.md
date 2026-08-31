# Tech Stack

## Architecture

- **No-build static site** — open `app/index.html` directly in a browser, no server needed.
- **Vanilla JavaScript** with ES Modules (`type="module"` in script tags).
- **No framework** — plain DOM manipulation for rendering pages.
- **CSS custom properties** for theming.

## Key Patterns

- **Hash-based SPA router** (`js/router.js`) — navigation via `#hash` fragments.
- **Modular data files** (`js/data/`) — game content stored as importable JS modules. Easy to extend with custom content.
- **localStorage** for character persistence.
- **JSON export/import** for sharing characters between browsers/people.

## How to Run

1. Open `app/index.html` in any modern browser (Chrome, Firefox, Edge).
2. That's it — no build step, no server, no dependencies.

For local development with live reload, you can optionally use any static server:
```bash
# Python
python3 -m http.server 8000 --directory app

# Node (if npx available)
npx serve app
```

## Conventions

- All JS uses ES module imports/exports.
- Page modules export a `render` function that takes ownership of `#app`.
- Data files export constants (arrays/objects) and are the single source of truth for game content.
- Character state shape is defined in `character-model.js`.
- No external dependencies — everything is self-contained.
