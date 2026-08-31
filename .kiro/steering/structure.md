# Project Structure

```
CAIN Companion/
├── .kiro/
│   └── steering/             # AI steering rules and project documentation
├── app/                      # The companion web application
│   ├── index.html            # Entry point — open this in a browser
│   ├── css/
│   │   └── style.css         # All styles (dark occult theme, CSS custom props)
│   └── js/
│       ├── bundle.js         # Single bundled app file (works from file://)
│       ├── app.js            # Main entry (ES module version, not used directly)
│       ├── router.js         # Hash-based SPA router
│       ├── storage.js        # localStorage + JSON import/export
│       ├── character-model.js # Character data shape, validation, factory
│       ├── i18n/             # Internationalization locale files
│       │   ├── en.js         # English strings
│       │   └── pt-br.js      # Portuguese (Brazil) strings
│       ├── data/             # Game content (modular, expandable)
│       │   ├── skills.js     # 10 basic skills + Psyche
│       │   ├── agendas.js    # 12 agendas with abilities
│       │   └── blasphemies.js # 12 blasphemies with powers
│       └── pages/            # Page renderers (one per route)
│           ├── home.js       # Character list, import/export actions
│           ├── create.js     # Multi-step character creation wizard
│           ├── view.js       # Read-only character sheet display
│           └── edit.js       # Edit character state (in-play changes)
└── Referencias/              # Reference materials (rulebooks, translations)
    ├── CAIN_1.4.txt          # Plain text rulebook EN (machine-readable)
    ├── CAIN 1.3 Tradução PTBR.txt # PT-BR fan translation (terminology reference)
    ├── CAIN_1.4_spreads.pdf  # PDF rulebook (not machine-readable)
    └── GFF1.txt              # Additional reference material
```

## Architecture Notes

- **Pages** are simple render functions that take ownership of the `#app` div.
- **Data files** are the single source of truth for game content. To add custom content (e.g. homebrew blasphemies), add new entries to these files.
- **Storage** is browser-local (localStorage). Characters can be exported/imported as JSON files for portability.
- **No build step** — the app runs directly from the filesystem.

## Expanding Content

To add new game content:
1. Add entries to the relevant data file in `app/js/data/`.
2. Follow the existing object shape (id, name, description, etc.).
3. The UI will pick up new entries automatically.
