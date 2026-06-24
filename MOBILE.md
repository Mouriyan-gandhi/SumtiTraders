# Mobile Handoff — Sumti Traders Website

Companion to `README.md`. This file documents the **mobile (< 768px) experience only** — every screen, exact scale, spacing, and behaviour change versus desktop. The production breakpoint is **`< 768px` = mobile**.

> In the prototype the mobile view is driven by an `isMobile` boolean and a `.is-mobile` class on the site root. In production, replace this with a `max-width: 767px` media query / Tailwind `max-md:` variant. All `.is-mobile` rules live at the bottom of `reference/styles.css`.

---

## 0. Mobile frame reference

- Design device width: **360 px** (small Android / iPhone SE class — the tightest realistic target).
- Design viewport height in the prototype: **720 px** scrollable.
- Everything is single-column. There are **no** side-by-side layouts on mobile.
- Test specifically at **360px** and **390px** (iPhone 14/15) widths.

---

## 1. Global mobile rules

These apply on every page (from `.is-mobile` in `styles.css`):

| Element | Desktop | **Mobile** |
|---|---|---|
| Section padding | `110px 60px` | **`60px 22px`** |
| Hero padding | `70px 60px 90px` | **`40px 22px 50px`** |
| Card padding | `36px` | **`28px`** (service/brand: `24px`) |
| Card grid gap | `22px` | **`18px`** (catalogue: `10px`) |
| Site header padding | `18px 36px` | **`14px 18px`** |
| Header logo size | 22px | **18px**, gap 6px |
| Footer padding | `60px 36px 28px` | **`36px 22px 22px`** |
| Footer columns | 4 | **1** (stacked) |
| Footer legal row | space-between row | **column, left-aligned, gap 12px** |
| Buttons | `14px 22px`, 11px | **`12px 18px`, 10px**, tracking 0.22em |
| Chips | 10px / `6px 12px` | **9px / `5px 10px`** |
| Marquee text | 38px | **26px** |
| Marquee padding | `22px 0` | **`14px 0`** |
| Section head | row, baseline | **column, flex-start, gap 12px, mb 24px** |
| Section head H2 | 56–64px | **36px** |
| Section head right col | max 320px | **max 100%** |

### Navigation (mobile)
- Desktop inline nav is **hidden** (`display:none`).
- A **hamburger button** (three 22×1px ink bars, 4px gap) appears on the right of the header.
- Tapping it drops a **vertical menu panel** absolutely positioned below the header: cream-paper background, bottom gold border, `12px 22px 20px` padding, links stacked with 10px gap.
- Each link: Manrope 12px caps, 0.22em tracking, 8px vertical padding, 1px gold-15% bottom hairline. Active link is full ink colour.
- Below the links: a full-width **"Wholesale enquiry →"** solid button.
- Tapping any link closes the menu (`setMenuOpen(false)`) and navigates.
- Header stays **sticky** (`position: sticky; top: 0`) with blurred cream background.

### Hover → tap
There is no hover on touch. Every hover-reveal becomes **always-visible** on mobile:
- **Jewel cards**: meta strip (name/type/code) is permanently visible (`transform: translateY(0)`), not revealed on hover.
- **Brand cards**: wash sits at its mid opacity; no hover intensify.
- Buttons keep their tap/active invert via `:active`.

---

## 2. Home (`/`) — mobile

Order of stacked sections (all full-width, single column):

### 2.1 Hero
- Chips row wraps; the third chip ("Wholesale Atelier") is **hidden** on mobile (only "Since 1970" + "Chennai · 3 Branches" show).
- H1 "Sumti / *Traders*" at **54px**, line-height 0.88. The desktop inline script "since 1970" is removed from the headline and instead rendered **below** as a standalone Pinyon Script line at **36px** gold.
- Subtitle (Italiana italic) **18px**.
- Buttons stack/wrap full-width-ish; "View Collection" + "Our Legacy".
- The big background mandala is pushed mostly off-canvas (`right: -50%`, 500px) at low opacity; paisley bottom-left at 300px. Keep them `pointer-events: none`.
- Bottom hairline + meta row: only "Scroll · Begin the journey" + "↓" show ("N° 01 — Couverture" hidden on mobile).

### 2.2 Marquee
Categories at 26px, 14px vertical padding. Same 40s scroll.

### 2.3 Legacy band ("Since 1970")
- **Stacks to single column** (grid → 1fr). "Since / 1970" block on top, then the headline + body.
- "Since" label **24px**, "1970" number **96px** (was 180px desktop) — critical: at 360px the desktop 220px overflowed, so it is capped at 96px.
- Headline "A heritage in *gold covering jewellery.*" at 28px.
- **Stats become a 2×2 grid** (`grid-template-columns: 1fr 1fr`, gap 18px): 1970 · 10,000+ · 3,000+ · 3. Each stat number 30px, label 11px. Each has a top hairline.
- Background seal pushed to `right: -40%`, 240px, opacity 0.35.

### 2.4 Three Houses
- Section head stacks (eyebrow + H2 38px, then description below).
- Brand grid → **single column** (`1fr`), 18px gap. Each brand card min-height **380px**, padding 24px, name 36px.
- "Explore the brands →" button centred below.

### 2.5 Who We Serve (N° 03)
- Section head stacks.
- Service cards → **single column**. Each card keeps its horizontal layout (84×84 icon tile left + copy right) — this works fine at 360px because the icon is fixed-width and copy flexes.
- Card N° 03 (3,000+ Women) is the dark ink variant; icon tile stays cream.
- "Open a wholesale account →" solid button centred.

### 2.6 Recent Pieces (N° 04)
- Catalogue preview grid → **2 columns** (`repeat(2, 1fr)`), gap 10px.
- Jewel cards show meta permanently (name 16px, row 9px, label 8px).
- "View full catalogue →" solid button centred.

### 2.7 Quote band (dark)
- Quote text **26px** (was 42px). Centred. Mandala wash at 8%.

### 2.8 Wholesale CTA strip
- The flex row **stacks** (`display:block`): heading first (32px), then description + "Contact us →" button below with 22px top margin.

---

## 3. Houses (`/houses`) — mobile

### 3.1 Hero
- H1 "Three *brands.* / Three customers." at **44px** (capped down from 56 to avoid overflow), line-height 0.92.
- Subtitle 17px. Mandala wash pushed to `right: -30%`, 400px.

### 3.2 Three brand sections
Each house (First Touch, Swarnika, FT):
- Grid collapses to **single column** (`1fr`); the logo panel always renders **first** (order 0), copy panel second (order 1) — the desktop left/right alternation is dropped on mobile so it always reads logo-then-copy.
- Logo panel: 4:5 aspect, padding 28px, corner ornaments 70px. Logo max-height **200px** (was 320).
- Copy: brand wordmark **60px** (was 96), body 14px, pillar chips wrap, stats row wraps (min-width 100px each), pull-quote with brand left-border, "Inside the house →" button.
- Background corner mandala at 380px, opacity 0.25.

### 3.3 Cross-brand CTA (dark)
- Headline 32px, subtitle 16px, centred.

### 3.4 Brand lightbox
- Opens full-screen. Inside, the sample 6-piece grid stays `repeat(3, 1fr)` but within the 90%-width panel — fine at 360px. Heading 36px.

---

## 4. Catalogue (`/catalogue`) — mobile

### 4.1 Hero
- H1 "The *Couverture* / catalogue." at **48px**. Subtitle 17px.

### 4.2 Filter bar (sticky)
- The two filter groups (Category, House) **stack vertically** (`flex-direction: column`, align-items flex-start).
- Each group: small caps label on top, then wrapping pill row below.
- The "{n} pieces" counter sits at the end.
- Bar remains `position: sticky; top: 0; z-index: 5` with the cream-warm background and gold hairline borders. **Note:** because the site header is also sticky, in production make sure the filter bar's `top` accounts for header height (offset by ~52px) or the two will overlap. In the prototype the frame scrolls independently so it isn't visible — **fix this in production.**

### 4.3 Grid
- **2 columns** (`repeat(2, 1fr)`), gap 10px. Jewel cards with always-on meta.
- Empty state (no matches): centred ornament + italic message.

### 4.4 Detail lightbox
- Two-column inner layout **collapses to single column** (`1fr`): jewellery image on top, details below. Name 44px, "Enquire wholesale →" solid button.

### 4.5 Request CTA
- Divider + "Request the *full catalogue*" 30px + body + solid button, all centred.

---

## 5. About (`/about`) — mobile

### 5.1 Hero
- H1 "A heritage / of *trust.*" at **54px**, line-height 0.88. Paisley wash at 18%.

### 5.2 Intro + seal
- Grid **stacks to single column**: intro paragraphs first, seal below.
- Lead paragraph (Italiana italic) 20px. Body 14px.
- Seal renders at **260px** (was 360) centred, with mandala wash behind.

### 5.3 The process (3 stages)
- Section head stacks.
- Three stage cards → **single column**, 22px gap. Each: stage label, title 32px, divider, body.

### 5.4 Timeline
- Each entry is a **2-column grid** on mobile (`64px 1fr`) — year on the left (26px gold italic), title+body on the right. The desktop center-diamond column is **hidden** on mobile.
- Entry title 20px, body 13px. Entries separated by gold-25% top hairlines.
- "Today" is the final entry (no hard year, so it never needs updating).

### 5.5 Reseller programme (N° 04)
- Grid **stacks**: the giant "3,000+" headline block first, supporting copy below.
- "3,000+" number at **84px** (was 160), gold. Headline "women, *their own* businesses." at 44px.
- Supporting paragraph 18px italic + body + 4 chips wrap.
- Paisley wash pushed to `right: -50%`, 360px.

### 5.6 Values strip (dark)
- 4 values become a **2×2 grid** (`1fr 1fr`), gap 28px. Each: title 22px cream, body-sm.

---

## 6. Contact (`/contact`) — mobile

### 6.1 Hero
- H1 "Three branches. / *One* Chennai." at **50px**. Subtitle 17px. Mandala wash at `right: -40%`, 400px.

### 6.2 Branch cards
- Grid **stacks to single column**, 18px gap.
- Each card: padding 28px, min-height 320px, corner ornament 60px top-right.
- Branch name 36px, sub-label italic 16px, divider, then Address / Telephone / Hours blocks stacked with 16px gap. Phone shown in Cormorant italic 18px.
- Note block (cream-warm, gold left border) + footer row (Est chip + "Directions →").

### 6.3 Map
- The abstract SVG map switches to **1:1 aspect ratio** on mobile (`aspectRatio: '1/1'`, was 21:9) so the three pins stay legible.
- It is a bespoke SVG — no real map provider. Pins: Sowcarpet (1970), T. Nagar (1995), Anna Nagar (2015).

### 6.4 Wholesale form
- The two-column layout (intro left / form right) **stacks**: intro + wholesale desk contact first, then the form card below (30px gap).
- Inside the form, the 4 short fields (name, store, city, phone) collapse from 2-col to **single column** (`1fr`). Email full-width. Checkbox pills wrap. Textarea full-width.
- Submit row: helper text + solid "Submit enquiry →" button, wraps with 14px gap.
- On submit → thank-you state with ornament, "Thank *you*." 36px, and "Send another" button.

---

## 7. Mobile QA checklist

- [ ] Test at **360px** and **390px** widths.
- [ ] No horizontal scroll anywhere — decorative pattern layers must be `overflow: hidden` on their section and `pointer-events: none`.
- [ ] Hamburger menu opens, links navigate, menu closes on tap.
- [ ] Sticky catalogue filter bar does **not** overlap the sticky header (offset its `top` by header height in production — see §4.2).
- [ ] Hero headings (54/50/48/44px) don't overflow or clip at 360px.
- [ ] Big numbers ("1970" 96px, "3,000+" 84px) fit without overflow.
- [ ] All hover-only content (jewel meta) is visible without interaction.
- [ ] Tap targets ≥ 44px (buttons, nav links, filter pills, hamburger).
- [ ] Form inputs don't trigger iOS zoom — set input `font-size ≥ 16px` in production (the prototype uses 18px Cormorant, which is fine).
- [ ] Footer collapses to single column; legal stacks.
- [ ] Marquee animation runs but doesn't cause layout shift / overflow.
- [ ] Lightboxes are scrollable within `max-height: 85vh` on short screens.

---

## 8. Mobile-specific CSS (verbatim from styles.css)

```css
.is-mobile .site-header{ padding: 14px 18px; }
.is-mobile .site-header nav{ display:none; }
.is-mobile .site-header .logo{ font-size: 18px; gap: 6px; }
.is-mobile .sect-head{ flex-direction: column; align-items: flex-start; gap: 12px; margin-bottom: 24px; }
.is-mobile .sect-head .left h2{ font-size: 36px; }
.is-mobile .sect-head .right{ max-width: 100%; }
.is-mobile .site-footer{ padding: 36px 22px 22px; }
.is-mobile .site-footer .grid{ grid-template-columns: 1fr; gap: 28px; }
.is-mobile .site-footer .legal{ flex-direction: column; gap: 12px; text-align: left; }
.is-mobile .marquee{ padding: 14px 0; }
.is-mobile .btn{ padding: 12px 18px; font-size: 10px; letter-spacing: .22em; }
.is-mobile .chip{ font-size: 9px; padding: 5px 10px; }
.is-mobile .brand-card{ min-height: 380px; padding: 24px; }
.is-mobile .brand-card h3{ font-size: 36px; }
.is-mobile .jewel-card .meta{ transform: translateY(0); }
.is-mobile .jewel-card .meta h4{ font-size: 16px; }
.is-mobile .jewel-card .meta .row{ font-size: 9px; }
.is-mobile .jewel-card .label{ font-size: 8px; padding: 4px 7px; }
```

Everything else (per-component inline style switches like `isMobile ? 54 : 156`) is inside each page's `.jsx` file — search for `isMobile ?` to find every responsive value.
