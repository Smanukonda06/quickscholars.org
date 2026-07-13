# QuickScholars Design System

Reference for keeping the site visually consistent as it grows. The single
source of truth for these values is `css/styles.css` (the `:root` block) —
if the two ever disagree, the CSS wins and this doc should be updated.

## Colors

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0B1F3A` | Navy — primary dark: headings, dark sections (stats bar, pricing card), logo mark |
| `--blue` | `#1B4B8F` | Primary accent: buttons, links on hover, AI chat bubbles, eyebrows |
| `--blue-light` | `#3569B3` | Lighter blue for gradients/hover states |
| `--amber` | `#E8A33D` | Secondary accent: logo dot, stat numbers, eyebrows on dark backgrounds. Use sparingly — it's the highlight, not a theme color |
| `--steel` | `#4B5870` | Muted blue-gray for body/secondary text |
| `--paper` | `#F6F7FA` | Page background (light gray) |
| `--white` | `#FFFFFF` | Cards and alternating sections |
| `--line` | `#DCE1E8` | Borders, dividers, dashed ticket lines |
| `--green` | `#1E8E5A` | Success/live states only (booked status, LIVE pill) |

Rule of thumb: navy + white carry the layout, blue carries the actions,
amber highlights a handful of moments per page, green means "success/live."

## Typography

| Font | Where | Loaded weights |
|---|---|---|
| **Archivo** | All headings (`h1`–`h4`), logo | 500 / 700 / 800 / 900 |
| **Inter** | Body text, buttons, nav | 400 / 500 / 600 / 700 |
| **IBM Plex Mono** | Stats, labels, eyebrows, ticket metadata — anything meant to feel like a dispatch log / technical readout. Apply via the `.mono` class or the `.eyebrow` pattern | 400 / 500 |

All three load from Google Fonts in the `<head>` of `index.html`. If you add
a weight, add it to that URL too.

## Spacing & layout conventions

- Content column: `.wrap` — max-width **1160px**, `0 24px` side padding.
- Sections: `88px` vertical padding (`section` rule); the hero and footer
  are the intentional exceptions.
- Corner radii: `10px` default (`--radius`), `14px` for cards/tickets,
  `18px` for the big pricing/CTA banners, `8px` for buttons.
- Cards: white background + `1px solid var(--line)` border; the "main offer"
  card gets a subtle blue-tinted border and gradient to stand out.
- Mobile breakpoint: single `@media(max-width:880px)` block at the bottom of
  `styles.css` — put any new responsive overrides there.

## Voice / content rules

- Niche is **HVAC, plumbing, electrical, roofing only** — copy should name
  these trades, never generic "small businesses."
- CTA is always **"Book a Free Discovery Call"** (agency model). No signup,
  no free trial, no self-serve language.
- No fabricated testimonials, reviews, or client logos. Trust is built with
  specifics (capabilities, process, trade focus) until real client quotes exist.
- Tool integrations are referenced as **plain text wordmarks only** — never
  recreate third-party logos.
