# justkalesh — Portfolio Website

Kalash's personal portfolio website for college — a bold, tactile **Neo-Pop Claydesk** showcase of projects and skills.

## Tech Stack

- **Vite** — Fast build tool & dev server
- **TailwindCSS v4** — Utility-first CSS (via `@tailwindcss/vite` plugin)
- **Vanilla JS** — No framework, just clean JavaScript
- **Google Fonts** — Nunito Sans (all typography)
- **Material Symbols** — Icon set

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This site is designed for **GitHub Pages** (static hosting).

```bash
# Build and deploy the dist/ folder to GitHub Pages
npm run build
# Then push the dist/ folder to the gh-pages branch
```

## Project Structure

```
justkalesh/
├── index.html          # Home page
├── projects.html       # Projects page
├── src/
│   ├── style.css       # Design system + Tailwind imports
│   ├── main.js         # Home page JS (cat cursor, mobile menu)
│   └── projects.js     # Projects page JS (mobile menu)
├── public/             # Static assets (favicon, etc.)
├── vite.config.js      # Vite + Tailwind config
├── CONTEXT.md          # Project context & decisions
├── DESIGN.md           # Design system reference
└── README.md           # This file
```

## Pages

| Page | Status | Description |
|------|--------|-------------|
| Home (`index.html`) | ✅ Done | Neo-pop hero, bento grid, "Available for work" chip |
| Projects (`projects.html`) | ✅ Done | 3 clay project cards with colored hard shadows |
| About Me | 🔜 Planned | Coming soon |
| Resume | 🔜 Planned | Coming soon |
| Certifications | 🔜 Planned | Coming soon |
| Contact | 🔜 Planned | Coming soon |

## Design System

See [DESIGN.md](DESIGN.md) for the full "Neo-Pop Claydesk" design system reference.
