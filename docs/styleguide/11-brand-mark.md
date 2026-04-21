# 11 — Brand Mark

## Overview

The BaseWeight brand mark consists of two elements: the **icon mark** (the mountain) and the **wordmark** (the logotype). They can be used together as a lockup or independently depending on context.

---

## Icon mark

The icon is a mountain silhouette — an outer triangle outline with an inner filled amber triangle representing the peak. A thin horizon line grounds the composition. The outer outline recedes into the background; the amber peak carries the visual weight.

### Concept

The two-triangle system does double duty: it reads as a mountain to anyone, and to the ultralight community specifically it evokes the "peak" — the summit you're working toward by shaving grams. The amber fill on the inner triangle echoes the accent color used throughout the UI for active states and CTAs, creating a coherent system.

### Construction

The icon lives inside a rounded square container (`rx="13"` on a 56×56 viewBox). All coordinates below are in that 56×56 space.

| Element        | Shape            | Coordinates                      |
| -------------- | ---------------- | -------------------------------- |
| Outer mountain | Triangle outline | `M8 40 L28 10 L48 40 Z`          |
| Inner peak     | Filled triangle  | `M21 40 L28 21 L35 40 Z`         |
| Horizon line   | Line             | `x1="4" y1="40" x2="52" y2="40"` |

Stroke width on the outer outline: `1.5px`, `stroke-linejoin="round"`, `stroke-linecap="round"`.
Horizon line stroke width: `1px`.

### SVG source — dark variant (primary)

```svg
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="13" fill="#2f2f2c"/>
  <path d="M8 40 L28 10 L48 40 Z" fill="none" stroke="#c8c6bc" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M21 40 L28 21 L35 40 Z" fill="#E8A220"/>
  <line x1="4" y1="40" x2="52" y2="40" stroke="#5a5954" stroke-width="1" stroke-linecap="round"/>
</svg>
```

### SVG source — light variant

```svg
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="13" fill="#E8E7E2"/>
  <path d="M8 40 L28 10 L48 40 Z" fill="none" stroke="#5a5954" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M21 40 L28 21 L35 40 Z" fill="#C07A0A"/>
  <line x1="4" y1="40" x2="52" y2="40" stroke="#D0CFC9" stroke-width="1" stroke-linecap="round"/>
</svg>
```

### SVG source — app icon variants

```svg
<!-- Amber background — preferred for iOS/Android home screen -->
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="13" fill="#E8A220"/>
  <path d="M8 40 L28 10 L48 40 Z" fill="none" stroke="#252523" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M21 40 L28 21 L35 40 Z" fill="#252523" opacity="0.25"/>
  <line x1="4" y1="40" x2="52" y2="40" stroke="#252523" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
</svg>

<!-- Pure dark — for dark OS contexts -->
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="13" fill="#1e1e1c"/>
  <path d="M8 40 L28 10 L48 40 Z" fill="none" stroke="#E8A220" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M21 40 L28 21 L35 40 Z" fill="#E8A220" opacity="0.9"/>
  <line x1="4" y1="40" x2="52" y2="40" stroke="#3b3b37" stroke-width="1" stroke-linecap="round"/>
</svg>

<!-- White background — for light OS contexts -->
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="13" fill="#FAFAF7"/>
  <path d="M8 40 L28 10 L48 40 Z" fill="none" stroke="#252523" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M21 40 L28 21 L35 40 Z" fill="#C07A0A"/>
  <line x1="4" y1="40" x2="52" y2="40" stroke="#D0CFC9" stroke-width="1" stroke-linecap="round"/>
</svg>
```

### Sizing

The icon scales cleanly because the amber peak stays readable even when the outer outline becomes very thin.

| Size   | Context                                                      |
| ------ | ------------------------------------------------------------ |
| `72px` | Marketing, landing page hero                                 |
| `56px` | App icon (standard)                                          |
| `48px` | Large UI contexts                                            |
| `40px` | Lockup with wordmark                                         |
| `32px` | Mid-size UI                                                  |
| `20px` | Small UI, tab bar                                            |
| `16px` | Favicon — outer outline may thin to ~0.5px, peak still reads |

At 16px, drop the horizon line if it becomes indistinct.

---

## Wordmark

The wordmark is set in **DM Serif Display**, regular weight (400). "Base" is rendered in the amber accent color; "Weight" is rendered in the primary text color for the given background.

The two-tone split is the only stylistic treatment. Never add bold, italic, tracking changes, or any other modification.

### Color by context

| Context                         | "Base" color          | "Weight" color           |
| ------------------------------- | --------------------- | ------------------------ |
| On dark (`#252523`)             | `#E8A220` (amber-400) | `#c8c6bc` (charcoal-100) |
| On light (`#FAFAF7`, `#F3F2EE`) | `#C07A0A` (amber-600) | `#252523` (charcoal-950) |
| On amber (`#E8A220`)            | `#252523`             | `#252523`                |

On dark backgrounds, `#E8A220` is used for "Base" — it has sufficient contrast against charcoal. On light backgrounds, shift to `#C07A0A` to maintain contrast against the pale background.

### Sizing

| Size   | Context                   |
| ------ | ------------------------- |
| `32px` | Hero / marketing          |
| `22px` | Lockup with icon, sidebar |
| `17px` | Nav bar, compact header   |

### HTML implementation

```html
<!-- Dark background -->
<span style="font-family:'DM Serif Display',serif;font-weight:400;font-size:22px;letter-spacing:-0.02em;line-height:1">
    <span style="color:#E8A220">Base</span><span style="color:#c8c6bc">Weight</span>
</span>

<!-- Light background -->
<span style="font-family:'DM Serif Display',serif;font-weight:400;font-size:22px;letter-spacing:-0.02em;line-height:1">
    <span style="color:#C07A0A">Base</span><span style="color:#252523">Weight</span>
</span>
```

### CSS classes

```css
.bw-wordmark {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1;
}

.bw-wordmark-base {
    color: var(--amber-400);
} /* on dark */
.bw-wordmark-weight {
    color: var(--charcoal-100);
} /* on dark */

/* on light backgrounds */
.bw-wordmark.on-light .bw-wordmark-base {
    color: var(--amber-600);
}
.bw-wordmark.on-light .bw-wordmark-weight {
    color: var(--charcoal-950);
}
```

---

## Lockup — icon + wordmark

The standard lockup places the icon to the left of the wordmark, vertically centered. An optional tagline ("gear list tracker") appears below the wordmark in `Figtree` 10px, uppercase, wide tracking, muted.

```
[icon 40px]  BaseWeight
             gear list tracker
```

Gap between icon and text block: `12px`.
Gap between wordmark and tagline: `3px`.

```html
<div style="display:flex;align-items:center;gap:12px">
    <!-- icon SVG at 40px -->
    <div style="display:flex;flex-direction:column;gap:3px">
        <span class="bw-wordmark" style="font-size:22px">
            <span class="bw-wordmark-base">Base</span>
            <span class="bw-wordmark-weight">Weight</span>
        </span>
        <span
            style="font-family:'Figtree',sans-serif;font-size:10px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--charcoal-500)"
        >
            gear list tracker
        </span>
    </div>
</div>
```

The tagline is optional — omit it in tight spaces like the sidebar or nav bar.

---

## Usage rules

**Do**

- Use the dark variant on `--charcoal-900` and `--charcoal-950` backgrounds
- Use the light variant on `--stone-50`, `--stone-100`, and white backgrounds
- Use the amber app icon on mobile home screens
- Scale the icon proportionally — never stretch or squash
- Maintain the icon's `rx="13"` corner radius at all sizes (scales proportionally with the viewBox)

**Don't**

- Use the icon without its rounded-rect container
- Recolor the amber peak with any color other than `--amber-400` or `--amber-600`
- Use the wordmark in all caps, bold, or italic
- Place the wordmark without the two-tone color split — it must always be "Base" + "Weight" in two colors
- Add a drop shadow, glow, or any filter to the mark
- Use the icon mark at sizes below 16px
- Rotate or tilt the mark in any direction
- Add a tagline other than "gear list tracker" without design review
