# Project Context — justkalesh Portfolio

## Overview
Personal portfolio website for Kalash (B.Tech CSE student & Full-Stack Developer). Built for college, showcasing projects and skills with a **Neo-Pop Claydesk** aesthetic — tactile, bold, and playful.

## Project Phase
**Phase 2 — Neo-Pop Redesign** (current)
- Home page and Projects page migrated from Stitch "Neo-Pop Claydesk" design
- Design system fully tokenized in Tailwind v4 @theme
- Mobile responsive with mobile menu overlay

## Key Decisions
| Decision | Choice | Reasoning |
|----------|--------|-----------|
| Build tool | Vite (vanilla template) | Fast, zero-config, builds to static HTML for GitHub Pages |
| CSS framework | TailwindCSS v4 (npm) | Stitch was built with Tailwind; v4 @theme for clean token mapping |
| Hosting | GitHub Pages | Free, simple static hosting for college portfolio |
| Framework | None (vanilla JS) | Portfolio doesn't need React/Vue complexity |
| Typography | Nunito Sans (exclusively) | Neo-Pop Claydesk uses single font for consistent chunky aesthetic |
| Design aesthetic | Neo-Pop Claydesk | Hard offset shadows, thick 3px borders, dot-grid sketchbook bg |

## Architecture
- **Multi-page** — Each HTML file is a Vite entry point (configured in `vite.config.js`)
- **Design tokens** — All colors, spacing, typography defined in `src/style.css` via `@theme`
- **No shared JS module** — Each page has its own JS entry importing the shared CSS
- **GitHub Pages compatible** — `base: './'` in Vite config for relative paths

## Design Origin
Design was generated using **Stitch** (Google's design-to-code tool). The Stitch files are in `stitch_kalash_s_vibrant_portfolio_portfolio/` with:
- `neo_pop_claydesk/DESIGN.md` — Design system specification
- `kalash_home_neo_pop/code.html` + `screen.png` — Home page
- `kalash_projects_neo_pop/code.html` + `screen.png` — Projects page

The stitch output (CDN-based Tailwind) was migrated to a proper Vite + Tailwind v4 project.

## Next Steps
- [ ] Add About Me page
- [ ] Add Resume page (inline content)
- [ ] Add Certifications page
- [ ] Add Contact page (with form)
- [ ] Replace placeholder images with real project screenshots
- [ ] Add real GitHub/LinkedIn/Dribbble links
- [ ] Set up GitHub Pages deployment
