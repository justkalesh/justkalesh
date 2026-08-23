# Design System — Neo-Pop Claydesk

> **Personality**: Energetic, Approachable, and Unapologetically Bold  
> **Style**: Playful Neo-Pop Soft UI + Neo-Brutalist Shadows  
> **Feel**: Tactile clay objects on a sketchbook surface — "toy-like" smooth clay and puffy stickers

---

## Brand & Style
The design transforms the digital interface into a tactile, interactive designer's desk. High-saturation accents against a warm, organic base evoke creative optimism. The UI is layered over a persistent light-gray dot-grid sketchbook pattern, making elements feel like solid, grab-able objects.

---

## Color Palette

### Core Accents
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#ae2f34` | Primary brand, active states, most important interactions |
| `primary-container` | `#ff6b6b` | Primary CTA buttons, hero headline |
| `secondary` | `#006b5f` | Secondary actions, teal skill chips |
| `secondary-container` | `#62fae3` | Secondary CTA buttons, success elements |
| `tertiary-container` | `#c59300` | Gold/yellow accents, highlight moments |
| `background-cream` | `#FDFBF7` | Main page background (warm cream) |
| `on-surface` | `#0d1c2f` | All text and thick borders (soft charcoal) |
| `dot-grid` | `#E2E8F0` | Sketchbook dot pattern overlay |

### Surface System
| Token | Hex |
|-------|-----|
| `surface` | `#f8f9ff` |
| `surface-container-lowest` | `#ffffff` |
| `surface-container-low` | `#eff4ff` |
| `surface-container` | `#e6eeff` |
| `surface-container-high` | `#dde9ff` |
| `surface-container-highest` | `#d5e3fd` |

---

## Typography
**Single font family: Nunito Sans** throughout.

| Token | Size | Weight | Line Height |
|-------|------|--------|-------------|
| `display-lg` | 56px | 900 (Black) | 1.1 |
| `headline-lg` | 40px | 800 (ExtraBold) | 1.2 |
| `headline-lg-mobile` | 32px | 800 | 1.2 |
| `headline-md` | 28px | 800 | 1.3 |
| `body-lg` | 18px | 600 (SemiBold) | 1.6 |
| `body-md` | 16px | 500 (Medium) | 1.6 |
| `label-lg` | 14px | 800 | 1.2 |
| `label-sm` | 12px | 700 | 1.2 |

---

## Spacing & Layout

| Token | Value |
|-------|-------|
| `base` | 8px |
| `gutter` | 24px |
| `margin-mobile` | 16px |
| `margin-desktop` | 48px |
| `section-gap` | 96px |

---

## Elevation & Depth
Depth is created through **Hard Offset Shadows** and **Thick Borders** — no soft blurs.

### The Pop Shadow
```css
/* Interactive elements: 8px hard offset */
box-shadow: 8px 8px 0px 0px [color];

/* Sticker chips: 2px tiny offset */
box-shadow: 2px 2px 0px 0px rgba(13,28,47,1);

/* Project cards: 12px dramatic offset */
box-shadow: 12px 12px 0px 0px [accent-color];
```

### Press Animation
```css
/* Hover: lift up-left */
transform: translate(-2px, -2px);

/* Active: push down-right (towards shadow) */
transform: translate(4px, 4px);
box-shadow: 4px 4px 0px 0px [color]; /* shadow shrinks */
```

---

## Shapes
| Element | Radius |
|---------|--------|
| Nav bar | `rounded-full` (pill) |
| Cards & containers | `rounded-3xl` (1.5rem) |
| Inner images | `rounded-2xl` |
| Buttons & chips | `rounded-full` (pill) |
| Bento grid items | `rounded-2xl` |

All interactive elements have a **3px** `border-on-surface` (soft charcoal).

---

## Components

| Component | Description |
|-----------|-------------|
| **Neo-Pop Nav** | Pill-shaped, 3px border, 8px hard dark shadow, floating with `sticky top-base` |
| **Neo-Pop Buttons** | Pill, 3px border, 8px colored hard shadow, press-in animation on click |
| **Sticker Chips** | Small pills, 2px border, random rotation (-2°/3°/-1°), 2px tiny hard shadow |
| **Clay Cards** | `rounded-3xl`, 3px border, 12px colored hard shadow, bouncy scale on hover |
| **Bento Grid** | 2-col grid inside a tilted container, mixed card sizes with individual rotations |
| **Cat Cursor** | 🐈 emoji that follows mouse with easing (desktop only) |
| **Dot-Grid BG** | Fixed radial-gradient pattern (24px grid, 2px dots, 40% opacity feel) |
| **Footer** | Flat border-top (3px), brand + copyright + social links, no rounded top |
