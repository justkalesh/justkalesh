---
name: Neo-Pop Claydesk
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d5e3fd'
  on-surface: '#0d1c2f'
  on-surface-variant: '#584140'
  inverse-surface: '#233144'
  inverse-on-surface: '#ebf1ff'
  outline: '#8c706f'
  outline-variant: '#e0bfbd'
  surface-tint: '#ae2f34'
  primary: '#ae2f34'
  on-primary: '#ffffff'
  primary-container: '#ff6b6b'
  on-primary-container: '#6d0010'
  inverse-primary: '#ffb3b0'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#62fae3'
  on-secondary-container: '#007165'
  tertiary: '#795900'
  on-tertiary: '#ffffff'
  tertiary-container: '#c59300'
  on-tertiary-container: '#433000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#8c1520'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f8f9ff'
  on-background: '#0d1c2f'
  surface-variant: '#d5e3fd'
  background-cream: '#FDFBF7'
  dot-grid: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Nunito Sans
    fontSize: 56px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.6'
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 96px
---

## Brand & Style
The design system embodies a **Playful Neo-Pop Soft UI** aesthetic, transforming the digital interface into a tactile, interactive designer's desk. The personality is energetic, approachable, and unapologetically bold, favoring the "toy-like" feel of smooth clay and puffy stickers over traditional flat design.

The style is defined by **Tactile Minimalism** mixed with **Neo-Brutalist** shadows. It utilizes high-saturation accents against a warm, organic base to evoke a sense of creative optimism. The UI is layered over a persistent light-gray dot-grid sketchbook pattern, reinforcing the concept of a physical workspace where elements feel like solid, grab-able objects.

## Colors
The palette is built on a foundation of "Warm Cream" to provide a soft, non-clinical environment.

- **Primary (Energetic Coral):** Reserved for the most important interactive elements and primary brand expressions.
- **Secondary (Cheerful Teal):** Used for secondary actions, success states, and variety in decorative elements.
- **Tertiary (Sunny Yellow):** A high-visibility accent for highlights, alerts, or "delight" moments.
- **Soft Charcoal:** Used for all text and structural borders to ensure high legibility without the harshness of pure black.

A light-gray dot grid (#E2E8F0) should be applied as a fixed background overlay with 40% opacity to create the "sketchbook" texture.

## Typography
The system uses **Nunito Sans** exclusively to maintain a consistent, rounded, and friendly geometric rhythm across all levels. 

Headlines utilize "Black" (900) or "ExtraBold" (800) weights to create a "heavy" visual presence that complements the thick borders and hard shadows. Body text is set in "Medium" or "SemiBold" weights; avoid "Regular" weights to ensure the type feels substantial enough to match the chunky UI elements. For an expressive touch, larger display headings can be slightly rotated (1-2 degrees) to mimic hand-placed lettering on a desk.

## Layout & Spacing
The layout follows a **Fluid Grid** with exaggerated white space. Elements are treated as "objects" on a surface rather than slices of a page.

- **Grid Model:** 12-column system with 24px gutters.
- **Rhythm:** Use an 8px base unit for all padding and margins.
- **Sectioning:** Use large vertical gaps (96px+) to emphasize the "item on a desk" feel.
- **Safe Zones:** Containers should have generous internal padding (at least 32px) to ensure content never feels cramped within the heavy borders.

## Elevation & Depth
Depth is created through **Hard Offset Shadows** and **Thick Borders**, rejecting all forms of soft blurs.

- **The Pop Shadow:** Interactive elements feature a hard-edged shadow offset by 4px or 8px (bottom-right). The shadow color should be a darker version of the element's background color or the Soft Charcoal neutral.
- **Sticker Stroke:** All cards, buttons, and inputs must have a 3px "Soft Charcoal" border to provide definition against the cream background.
- **Active State (Press):** When clicked, elements should shift 2px or 4px towards the shadow (translation) while the shadow shrinks, simulating a physical button being pressed into the surface.

## Shapes
The shape language is defined by **Extreme Roundness**. 

- **Containers & Cards:** Use `rounded-3xl` (1.5rem) to create a soft, clay-like appearance.
- **Interactive Elements:** Buttons, chips, and input fields should be **Pill-Shaped** (fully rounded) to maximize the "puffy" tactile feel.
- **Icons:** Use thick, rounded-cap strokes (3px+) to match the weight of the typography and borders.

## Components
- **Buttons:** Pill-shaped with a 3px Charcoal border and an 8px hard offset shadow in a matching accent color. Text is ExtraBold `label-lg`.
- **Sticker Chips:** Small, fully rounded badges with a 2px border. Apply a random rotation between -3deg and +3deg to reinforce the "hand-placed" aesthetic.
- **Clay Cards:** Large `rounded-3xl` containers with a 3px border. Images inside must have `rounded-2xl` corners to fit the container's inner radius.
- **Input Fields:** Soft Cream background with a 3px Charcoal border. On focus, the background changes to a very pale version of the Coral primary, and the border remains thick and sharp.
- **Checkbox & Radio:** Exaggerated size (24px+) with thick borders. Checkmarks should use a heavy "marker" stroke style.
- **Project Lists:** Items should appear as stacked "slabs" with vertical margins to allow their hard shadows to be fully visible without overlapping.