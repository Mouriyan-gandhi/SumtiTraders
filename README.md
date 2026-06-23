# Handoff — Sumti Traders Website

**Brand:** Sumti Traders — Gold Covering Jewellery Wholesalers, Chennai (Since 1970)
**Houses:** First Touch · Swarnika · FT
**Audience:** B2B (retailers, wholesalers, shopping-centre setups, women resellers) + end consumers

---

## 1. About this handoff

The files inside `reference/` are an **HTML / React-via-Babel design prototype**. They are **not production code to ship as-is**. Treat them as a pixel-level visual reference for recreating the website in the team's chosen production stack.

The prototype runs by loading React + ReactDOM + Babel Standalone from CDN and transpiling each `.jsx` file in-browser. This is intentionally non-production: a real implementation should compile JSX ahead-of-time, code-split, and serve optimized assets.

**Fidelity:** This is a **high-fidelity** design package. Colors, typography, spacing, copy, iconography, motion, brand asset placement, and brand voice are all final unless explicitly noted as a placeholder.

---

## 2. Recommended production stack

Any of the following can implement this faithfully:

- **Next.js (App Router) + Tailwind CSS** — recommended. Use Tailwind theme to mirror the design tokens, ship the static assets in `public/`, use `next/image` for jewellery photography when real shots arrive.
- **Astro + Tailwind** — also excellent; the site is content-heavy and benefits from per-page static rendering.
- **Vite + React + Tailwind** — if the team prefers an SPA.
- **WordPress / Webflow** — possible but tokens, custom SVG patterns, and the motion system would need a custom build; not recommended.

Recommendations referenced below assume **Next.js + Tailwind**, but every token is framework-agnostic.

---

## 3. Pages & routes

| Route | File in `reference/` | Purpose |
|---|---|---|
| `/` | `home.jsx` | Brand intro, legacy, three houses, who-we-serve, recent pieces, quote, wholesale CTA |
| `/houses` | `brands.jsx` | Long-form portfolio of all three brands (First Touch, Swarnika, FT) |
| `/catalogue` | `catalogue.jsx` | Filterable grid of pieces with type + brand filters and detail lightbox |
| `/about` | `about.jsx` | Heritage story, 3-stage process, timeline, reseller programme, values |
| `/contact` | `contact.jsx` | 3 Chennai branches, abstract Chennai map, wholesale enquiry form |

The prototype additionally provides a **side-by-side desktop + mobile preview frame** (`app.jsx`). This is a review affordance — do **not** ship the chrome/frame; ship the inner `<Site>` only.

---

## 4. Design tokens

All tokens are defined in `reference/styles.css` as CSS custom properties on `:root`. Use them verbatim.

### 4.1 Colour palette

The palette is **cream-layered with charcoal ink and gold-foil hairlines**. There are no rainbow accents. Each cream tone is meant to be used as a full surface and the layers stack to create rhythm across sections.

```css
/* Cream layer stack (lightest → deepest) */
--cream-paper:  #faf3e0;   /* primary content background */
--cream-base:   #f5ebd1;   /* secondary surface */
--cream-warm:   #efe1be;   /* tertiary surface, used for "warm" bands */
--cream-sand:   #e6d4a8;   /* deeper accent, decorative blocks */
--cream-deep:   #d4bd87;   /* footer label, eyebrow on dark */
--cream-shadow: #c7a866;   /* scrollbar, deepest cream */

/* Ink (text + dark surfaces) */
--ink:          #1a1612;   /* primary text, dark sections */
--ink-soft:     #3a322a;   /* secondary text */
--ink-muted:    #6b5e4f;   /* eyebrow body, captions */

/* Gold foil — hairlines only, never fills */
--gold:         #8a6d2a;
--gold-soft:    #a3863f;

/* Burgundy — used as a deep shadow tint behind hero */
--burgundy:     #3a1820;
```

### 4.2 Per-brand accent colours

Each of the three houses gets a brown-on-cream accent. These are used in `brands.jsx`. They come from the actual brand logos and must not be substituted.

| Brand | Accent | Cream wash |
|---|---|---|
| First Touch | `#7a3a2a` (warm rust) | `#f0dac7` |
| Swarnika | `#8a5028` (ochre brown) | `#ecdbb7` |
| FT | `#2c2520` (near-black warm) | `#e8d9b7` |

### 4.3 Typography

| Token | Family | Use | Google Fonts |
|---|---|---|---|
| `--f-display` | Cormorant Garamond | Headlines, brand wordmarks, hero | yes (`Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500`) |
| `--f-thin` | Italiana | Editorial pull text, decorative numbers | yes (`Italiana`) |
| `--f-script` | Pinyon Script | Script accents ("since 1970", calligraphic) | yes (`Pinyon+Script`) |
| `--f-body` | Manrope | All body, UI, chips | yes (`Manrope:wght@300;400;500;600;700`) |
| `--f-caps` | Manrope | Eyebrows, button text, nav (with tracking) | same as body |

Full preload tag:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Italiana&family=Pinyon+Script&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Type scale (desktop / mobile)

| Role | Family | Desktop | Mobile | Weight | Tracking | Line-height |
|---|---|---|---|---|---|---|
| Hero display H1 | Cormorant Garamond | 132–156 px | 44–60 px | 400 | -0.02em | 0.88–0.92 |
| Section H2 | Cormorant Garamond | 56–64 px | 36–44 px | 400 | -0.01em | 0.95 |
| Sub H3 | Cormorant Garamond | 28–48 px | 20–36 px | 400 | -0.01em | 1.0 |
| Editorial pull | Italiana / Cormorant italic | 22–28 px | 17–20 px | 400 | 0 | 1.35 |
| Body | Manrope | 14 px | 14 px | 400 | 0 | 1.7 |
| Body-sm | Manrope | 13 px | 12–13 px | 400 | 0 | 1.6 |
| Eyebrow / caps | Manrope | 11 px | 10–11 px | 500 | 0.22–0.28em | — |
| Button / chip | Manrope | 11 px / 10 px | 10 px / 9 px | 500 | 0.22–0.26em | — |
| Script accent | Pinyon Script | 64 px | 36 px | 400 | — | 1.0 |

**Italics matter.** Headlines mix roman + italic for rhythm (e.g. "A heritage of *trust.*", "Three *brands.* / Three customers."). Wrap the italic portion in `<em>` and style it as italic — do not italicize entire lines.

### 4.4 Spacing

This site uses **section-level padding**, not a tight 4/8 scale. The pattern is:

```
Section padding (desktop):  110px 60px       /* large content section */
Section padding (mobile):    60px 22px
Hero padding (desktop):      70px 60px 90px
Hero padding (mobile):       40px 22px 50px
Card padding (desktop):      36px
Card padding (mobile):       28px
Sticky header:               18px 36px (desktop) / 14px 18px (mobile)
```

Gap between cards in a grid: **22 px desktop / 18 px mobile**.
Inter-section flow: rely on solid background changes between cream tones rather than oversized margins.

### 4.5 Radii & strokes

| Token | Value | Use |
|---|---|---|
| Card / image radius | **0** (square) | Editorial flat surfaces — do not round |
| Button radius | **0** | Square corners |
| Chip radius | **999px** | Pills |
| Hairline (gold) | `linear-gradient(90deg, transparent, #8a6d2a 50%, transparent)` 1px | Section dividers |
| Border (cream surface) | `1px solid rgba(138, 109, 42, 0.18)` | Default card border |
| Border (brand-tinted) | `1px solid {brand.color}33` (~20% alpha) | Brand panels |

### 4.6 Shadows

Drop shadows are used **only on the preview frames** for the design canvas — the production site uses no card shadows. Texture is achieved with cream layers + 1px borders + the embossed inset shadow on cream surfaces:

```css
.bg-emboss {
  background: var(--cream-base);
  box-shadow:
    inset  6px  6px 18px rgba(58, 24, 32, 0.08),
    inset -6px -6px 18px rgba(255, 250, 235, 0.7);
}
```

---

## 5. Patterns & ornaments

All decorative SVGs live in `reference/patterns/` and are loaded as `url(...)` backgrounds. None are critical for SEO; ship them as static assets in `/public/patterns/`.

| File | Use | Notes |
|---|---|---|
| `patterns/paisley.svg` | Tiled paisley wash (280px tile, opacity 0.18–0.35) | Behind hero & section backgrounds |
| `patterns/mandala.svg` | Single large mandala (600px) | Often partially off-canvas, rotated, opacity 0.18–0.55 |
| `patterns/marble.svg` | Marble noise via SVG filters | Used as background-image on `.bg-marble` |
| `patterns/seal.svg` | Decorative wax seal | Available, but most usage now comes from the React `<Seal>` component |

Inline React ornaments (in `patterns.jsx`):
- `<Divider />` — gold dot + arrowheads + hairlines, used between sections
- `<Ornament size />` — 6-petal lotus glyph
- `<CornerOrnament size />` — corner flourish, used in 4-corner mirrored sets on brand panels
- `<Seal size label />` — circular text seal with "SUMTI TRADERS · CHENNAI · WHOLESALE · {label}"
- `<TinyDiamond size color />` — 6px gold diamond used in eyebrows + marquee
- `<Jewel kind />` — line illustrations of jewellery (necklace, earring, bangle, ring, bracelet, anklet, maang, nose); use as placeholders **until real product photography is supplied**.

Reuse pattern in production: render the SVG inline (or as a React component) so theme colours can be controlled — do **not** rasterize.

### Background animation
On the hero, the mandala slowly rotates:

```css
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
/* applied to the hero mandala layer */
animation: spin 240s linear infinite;
```

240 s rotation is intentional — barely perceptible. Do not speed up.

---

## 6. Components

### 6.1 Buttons

```html
<button class="btn">View Collection <span class="arr">→</span></button>
<button class="btn solid">Open a wholesale account <span class="arr">→</span></button>
```

- `.btn` — transparent fill, 1px ink border, ink text. On hover: invert (ink fill, cream text).
- `.btn.solid` — ink fill from the start; hover inverts to cream.
- Square corners, never rounded.
- Padding `14px 22px` desktop / `12px 18px` mobile.
- Font: Manrope 500, 11 px, letter-spacing `0.26em`, uppercase.
- The `<span class="arr">` is a Cormorant Garamond italic arrow.

### 6.2 Chip

```html
<span class="chip">Since 1970</span>
```

Pill, 1px ink-soft border, Manrope 500 caps. Used for tags, pillars, brand pillars on each house, and select inputs.

### 6.3 Site header

Sticky, blurred cream background, height ≈ 64 px (desktop) / 52 px (mobile).
Left: wordmark "Sumti *Traders* · SINCE 1970"
Center (desktop only): nav links — Home, Our Houses, Catalogue, About, Contact
Right: language toggle (EN · TA), Wholesale CTA button; mobile shows a hamburger that drops a vertical menu.

### 6.4 Site footer

Dark ink (`--ink`) background, faint mandala wash at 4% opacity, four columns (lockup, Houses, Visit, Atelier) on desktop, single column on mobile. Legal hairline + 3 small copy lines at the bottom in caps.

### 6.5 Jewel card (`.jewel-card`)

Aspect-ratio 3:4. Cream background with a 45° hatched line-pattern, the SVG jewellery sits centred at 60% width.
- Top-left: brand chip on cream-paper.
- Bottom: meta strip with name (Cormorant italic) + type + ref code — hidden on desktop, **revealed on hover** by sliding up from below; **permanently visible on mobile**.
- Border darkens to gold on hover.

### 6.6 Brand card (`.brand-card`)

Used on the home brand grid. Tall (480 px desktop / 380 px mobile), with a faded mandala/lotus in the corner and brand-tinted radial wash that intensifies on hover. Number (Italiana italic, gold), display name (Cormorant 48 px), tagline (Cormorant italic 16 px), description, "Discover the house →" CTA.

### 6.7 Service card

The home "Who We Serve" section uses a horizontal card layout — 84×84 cream icon tile on the left holding a `<Jewel />` line drawing, copy on the right (eyebrow N° / display title + italic suffix / body / chip). Card N° 03 (3,000+ Women) uses the dark variant: ink background, cream text. **The icon tile itself stays cream on the dark card** — do not invert it; the line drawing has to remain crisp.

### 6.8 Brand portfolio sections

Each of the three houses renders as a full-width alternating row (image left / right). The "image" is a stylised **logo panel**:
- 4:5 aspect ratio
- Brand-cream wash background
- 1px brand-tinted border
- Mirrored corner ornaments in all 4 corners
- Brand brown logo (PNG) centred, at ~80% width and max 320 px tall
- Drop-shadow on the logo: `drop-shadow(0 8px 22px rgba(58,24,32,0.12))`
- Footer divider + brand market label

Right column: eyebrow ("House i · {tagline}"), huge brand wordmark, body description, pillar chips, three stat columns, pull-quote with brand-colour left border, "Inside the house →" CTA that opens a lightbox.

### 6.9 Lightboxes

Full-screen `rgba(26,22,18,0.92)` overlay. Panel is cream-paper, 720 px max, 40 px padding, 1px gold border, fades + slides up on open. Close: large Cormorant `×` glyph top-right.

Two lightboxes exist:
- **Catalogue detail** — two columns: jewellery line drawing left, name + ref + type + enquire CTA right.
- **Brand detail** — logo + description + 6-piece sample grid + close button.

### 6.10 Filters (catalogue)

Pills (`.filter`), 10 px Manrope caps, 1px ink border. Active state: ink fill, cream text. Two filter rows: Category (9 options) + House (4 options).

### 6.11 Marquee

Categories scroll left-to-right at 40 s per loop (no pause on hover). Categories separated by `<TinyDiamond>` glyphs. Italic Cormorant 38 px (desktop) / 26 px (mobile).

### 6.12 Map (contact)

The Chennai map is a **bespoke SVG illustration**, not a Google Maps embed. Dotted background, abstract roads, a Bay of Bengal curve, and three ink-filled circular pins with "ST" monogram + branch label + est. year. Do not swap in a real map provider — the abstract treatment is part of the brand voice. If a real interactive map is needed later, build it as a separate Locations page and link out from here.

### 6.13 Contact form

`<form>` with:
- name, store/brand name, city/state, phone (2-column on desktop, 1-column on mobile)
- email (full-width)
- 4 checkbox pills — First Touch, Swarnika, FT, All houses (default checked)
- textarea (4 rows, cream-paper background)
- submit button (solid ink)
- On submit, swap to a thank-you state with the `<Ornament />` glyph and a "Send another" button.

Inputs are **underline-only** (`border-bottom: 1px solid rgba(26,22,18,0.4)`), Cormorant italic 18 px. No box borders.

---

## 7. Interactions & motion

| Where | What | Details |
|---|---|---|
| Hero | Slow mandala rotation | `animation: spin 240s linear infinite` |
| Marquee | Horizontal scroll | `animation: marquee 40s linear infinite`, no pause |
| Section reveal | Fade-up on enter | `.fadeup → .fadeup.in`, `opacity 0→1, translateY 20px→0, 0.8s ease`. Use IntersectionObserver to add `.in`. |
| Jewel card hover | Meta slide-up from bottom | `transform: translateY(100%) → 0`, 0.4s ease. Border darkens to gold. Mobile: meta is always visible (`transform: translateY(0)`). |
| Brand card hover | Bgwash opacity fade | `opacity: 0.5 → 0.9`, 0.4s ease |
| Button hover | Invert fill/text | 0.35s ease |
| Filter / chip hover | Border darkens | 0.25s ease |
| Lightbox open | Fade + slide | `opacity 0→1` on overlay (0.35s), `translateY(20px)→0` on panel (0.4s ease) |
| Mobile nav | Hamburger toggles vertical menu drop | simple React state, no slide animation needed |

Avoid scroll-jacking, parallax, page-load splash screens, and large GSAP animation timelines. The brand voice is restrained.

---

## 8. Brand assets

All in `reference/logos/`:

| File | Brand | Treatment |
|---|---|---|
| `firsttouch-brown.png` | First Touch | Use on cream surfaces — primary |
| `firsttouch-gold.png` | First Touch | Use on dark/ink surfaces only |
| `swarnika-brown.png` | Swarnika | Primary, on cream |
| `swarnika-cream.png` | Swarnika | Reverse-on-dark only |
| `ft-brown.png` | FT | Primary, on cream |
| `ft-cream.png` | FT | Reverse-on-dark only |

The "Sumti Traders" parent wordmark is rendered in HTML using Cormorant Garamond — there is **no logo PNG** for the parent brand. If the client supplies one later, replace the inline wordmark in `<SiteHeader>` and footer `<SiteFooter>`.

---

## 9. Content / copy

Real copy is **already in the prototype** — extract it directly from each `.jsx` file rather than re-writing. Particularly precious moments to preserve:

- **Tagline** (hero subtitle): "Gold covering jewellery from Chennai. Three houses, one trust — empowering 10,000+ retail partners across India."
- **Brand house headline** (`/houses` hero): "Three *brands.* Three customers."
- **Stats**: 1970 / 10,000+ / 3,000+ / 3 — these are facts; don't change without the client.
- **Quote** (home, dark band): "A bride does not know the difference between gold and craft. She only knows whether it feels *like hers.*" — attributed to "The Atelier Notebook · Sumti Traders".
- **Brand descriptions** — exact text in `BRANDS` array in `brands.jsx`. Do not rephrase.
- **Branches** — addresses, phones, hours in `BRANCHES` array in `contact.jsx`. **Verify with client before launch** — they are illustrative.
- **Catalogue piece names** — these are evocative placeholders (Aabha, Rohini, Meenakshi, Tara, etc.) and should be replaced with the client's actual SKU names once supplied.

---

## 10. Responsive behaviour

The prototype uses a hand-rolled `isMobile` boolean (set by the parent frame). In production, use standard breakpoints:

| Breakpoint | Layout |
|---|---|
| `< 768px` | Mobile — single column, hamburger nav, sticky filter rows wrap to vertical, all hover states become visible-by-default |
| `768 – 1024px` | Tablet — 2-column brand grid, 3-column catalogue grid |
| `≥ 1024px` | Desktop — full layout as shown in `desktop-frame` |

Recommended Tailwind: `md:` = 768, `lg:` = 1024, `xl:` = 1280.

Mobile-specific rules already encoded under `.is-mobile` in `styles.css` — port them to Tailwind utilities or to a `data-mobile` variant.

---

## 11. SEO & accessibility

- Page titles per route:
  - `/` → `Sumti Traders — Gold Covering Jewellery · Chennai · Since 1970`
  - `/houses` → `Our Houses — First Touch · Swarnika · FT`
  - `/catalogue` → `Catalogue — Couverture Collection`
  - `/about` → `Our Heritage — Sumti Traders since 1970`
  - `/contact` → `Contact — Three Chennai Branches`
- Add `<meta name="description">` per page (use the hero subtitle as a starting point).
- All decorative SVGs must have `aria-hidden="true"`.
- All brand logo PNGs must have `alt={brandName}`.
- Decorative `<em>` italics should not be wrapped in `<i>` (semantic emphasis is fine).
- Form labels are eyebrows; in production replace them with proper `<label for="...">` pairs (the prototype uses divs).
- Colour contrast: all primary text on cream surfaces meets WCAG AA. The gold (`#8a6d2a`) is **decorative only** — never use it for body text.

---

## 12. Performance notes

- **Fonts**: 4 families is on the upper edge; subset to `latin` and `font-display: swap`.
- **SVG patterns**: small (≤ 4 KB each). Inline if possible.
- **Logos**: convert PNGs to WebP and serve at 2× the rendered size (already brown-on-transparent).
- **Hero**: the rotating mandala is a CSS animation on a background image — GPU-cheap. No JS needed.
- **Lightboxes & filters**: client-side state only; no network calls.
- **Catalogue**: currently 16 items hard-coded — when the client supplies real SKUs, paginate or virtualize past 60 items.

---

## 13. Open items (need from client)

These were left as placeholders in the prototype and must be replaced before launch:

1. **Real product photography** for all houses (currently SVG line drawings). Crop spec: 3:4 portrait, cream backdrop, ~1200×1600.
2. **Verified branch addresses, phone numbers, hours.** Placeholders are illustrative.
3. **Wholesale form recipient email + backend** (the prototype only swaps to a thank-you state).
4. **Catalogue SKU data** — name, ref code, type, house, image, description.
5. **Tamil translation** (header shows EN · TA — but no Tamil strings yet).
6. **Reseller programme application flow** — currently only described; needs its own form or link.
7. **Press / about-team imagery and bios** — not in scope of this round, but the about page has a natural slot if needed later.
8. **Sumti Traders parent wordmark logo** — if the client wants a dedicated mark beyond the Cormorant wordmark.

---

## 14. Files in this bundle

```
design_handoff_sumti_traders/
├── README.md                          ← this file
├── DESIGN_TOKENS.md                   ← extracted tokens table (quick reference)
├── tailwind.config.js                 ← starter Tailwind theme
└── reference/
    ├── Sumti Traders Website.html     ← open this in a browser to preview
    ├── styles.css                     ← all CSS variables + base styles
    ├── app.jsx                        ← shell, frames, router (ignore the frames)
    ├── home.jsx                       ← / route
    ├── brands.jsx                     ← /houses route
    ├── about.jsx                      ← /about route
    ├── catalogue.jsx                  ← /catalogue route
    ├── contact.jsx                    ← /contact route
    ├── patterns.jsx                   ← ornaments + jewellery line drawings
    ├── patterns/
    │   ├── paisley.svg
    │   ├── mandala.svg
    │   ├── marble.svg
    │   └── seal.svg
    └── logos/
        ├── firsttouch-brown.png
        ├── firsttouch-gold.png
        ├── swarnika-brown.png
        ├── swarnika-cream.png
        ├── ft-brown.png
        └── ft-cream.png
```

**To preview locally:** open `reference/Sumti Traders Website.html` in any modern browser. No build step required (Babel transpiles in the browser).

---

*Questions during build — flag them on the design file; the prototype is the source of truth for anything not covered above.*
