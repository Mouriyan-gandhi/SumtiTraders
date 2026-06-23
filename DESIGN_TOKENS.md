# Design Tokens — Quick Reference

Drop-in for Tailwind, CSS-in-JS, or design tools. Mirrors `reference/styles.css`.

## Colors

| Token | Value | Hex |
|---|---|---|
| `cream.paper`   | Primary surface       | `#faf3e0` |
| `cream.base`    | Secondary surface     | `#f5ebd1` |
| `cream.warm`    | Warm band             | `#efe1be` |
| `cream.sand`    | Decorative accent     | `#e6d4a8` |
| `cream.deep`    | Eyebrow-on-dark       | `#d4bd87` |
| `cream.shadow`  | Scrollbar / deepest   | `#c7a866` |
| `ink.DEFAULT`   | Body text, dark surfaces | `#1a1612` |
| `ink.soft`      | Secondary text        | `#3a322a` |
| `ink.muted`     | Captions              | `#6b5e4f` |
| `gold.DEFAULT`  | Hairlines only        | `#8a6d2a` |
| `gold.soft`     | Hairline-soft         | `#a3863f` |
| `burgundy`      | Deep tint behind hero | `#3a1820` |
| `brand.firsttouch` | Brand accent (rust)   | `#7a3a2a` |
| `brand.firsttouch.cream` | First Touch wash | `#f0dac7` |
| `brand.swarnika`   | Brand accent (ochre)  | `#8a5028` |
| `brand.swarnika.cream` | Swarnika wash    | `#ecdbb7` |
| `brand.ft`         | Brand accent (warm black) | `#2c2520` |
| `brand.ft.cream`   | FT wash               | `#e8d9b7` |

## Typography

| Token | Family | Weights |
|---|---|---|
| `display` | Cormorant Garamond | 400, 500, 600 (italic 400, 500) |
| `thin`    | Italiana | 400 |
| `script`  | Pinyon Script | 400 |
| `body`    | Manrope | 300, 400, 500, 600, 700 |
| `caps`    | Manrope | 500 (with `tracking-widest`) |

## Spacing

| Token | Value |
|---|---|
| `section.y-desktop`   | 110 px |
| `section.y-mobile`    | 60 px |
| `section.x-desktop`   | 60 px |
| `section.x-mobile`    | 22 px |
| `card.p-desktop`      | 36 px |
| `card.p-mobile`       | 28 px |
| `card.gap-desktop`    | 22 px |
| `card.gap-mobile`     | 18 px |
| `hero.pad-bottom`     | 90 px desktop / 50 px mobile |

## Radii

| Token | Value |
|---|---|
| `card`   | 0 |
| `button` | 0 |
| `chip`   | 9999 px (pill) |

## Borders

```
hairline-ink:  1px solid rgba(26, 22, 18, 0.12)
hairline-gold: linear-gradient(90deg, transparent, #8a6d2a 50%, transparent) 1px
card-border:   1px solid rgba(138, 109, 42, 0.18)
card-border-brand: 1px solid {brand}33     (~20% alpha)
input-underline: 1px solid rgba(26, 22, 18, 0.4)
```

## Shadows

```
preview-frame:
  0 30px 80px -30px rgba(58, 24, 32, 0.25),
  0 8px 22px -8px rgba(26, 22, 18, 0.12)

cream-emboss (inset):
  inset  6px  6px 18px rgba(58, 24, 32, 0.08),
  inset -6px -6px 18px rgba(255, 250, 235, 0.7)

logo-drop:
  drop-shadow(0 8px 22px rgba(58, 24, 32, 0.12))
```

## Motion

| Property | Duration | Easing |
|---|---|---|
| Mandala rotation | 240 s | linear |
| Marquee | 40 s | linear |
| Fade-up on scroll | 800 ms | ease |
| Jewel card meta slide | 400 ms | ease |
| Brand card wash | 400 ms | ease |
| Button hover invert | 350 ms | ease |
| Filter chip hover | 250 ms | ease |
| Lightbox open (overlay) | 350 ms | ease |
| Lightbox panel slide | 400 ms | ease |
