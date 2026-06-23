---
name: Bone & Bit
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002022'
  on-tertiary-container: '#00929b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '700'
    lineHeight: 12px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  overlap-offset: -32px
---

## Brand & Style
This design system occupies the intersection of high-frequency trading and high-fashion editorial. The brand personality is **Elite, Analytical, and Avant-Garde**. It targets an audience that demands the raw data density of a terminal with the aesthetic prestige of a luxury publication.

The visual style is a **Hyper-Structured Editorial** approach. It utilizes the "Broken Grid" of modern magazine design—where elements overlap and break margins—tempered by the absolute precision of technical software. The emotional response should be one of "Precision-Engineered Luxury": it feels expensive, exclusive, and intellectually rigorous.

Key brand identifiers include:
- **Technical Metadata:** Every screen features micro-labels like "ENCRYPTED" or "LQD.PPR" to ground the fashion aesthetic in a software context.
- **Tension:** The juxtaposition of massive, elegant serif type against microscopic, hyper-efficient monospace data.
- **Linearity:** Use of razor-thin (0.5pt - 1pt) ruled lines to separate "Editorial" content from "Terminal" data.

## Colors
The palette, **Bone & Bit**, is built on a high-contrast foundation to ensure maximum legibility and a sophisticated "Paper & Ink" feel.

- **Bone (#F9F7F2):** The primary background color. A warm, slightly textured off-white that prevents screen fatigue and evokes premium stationery.
- **Bit (#121212):** The deep carbon-black used for all primary typography and structural borders. It is not a true black, allowing for subtle depth.
- **Trading Cyan (#00F0FF):** A high-frequency neon used sparingly for "Active" states, data upticks, and interactive hardware-inspired accents.
- **Audit Magenta (#FF00FF):** A surgical accent used for "Critical" states, errors, or editorial highlights.

Use colors with clinical restraint. 95% of the UI should be Bone and Bit; the Cyan and Magenta should only appear as razor-thin lines or single-pixel indicators.

## Typography
The typographic system is the core of the hybrid aesthetic. It relies on extreme scale contrast.

1.  **Editorial Layer (Bodoni Moda):** Used for large-scale headlines and "Display" moments. It should often overlap other elements or be cropped by the viewport edge to create the "Broken Grid" effect.
2.  **Functional Layer (Hanken Grotesk):** A clean, contemporary sans-serif for standard body copy and descriptions, ensuring the UI remains usable as software.
3.  **Terminal Layer (JetBrains Mono):** Used for all data points, system status, and micro-labels. This should be styled to look like code or a ticker tape.

**Formatting Rules:**
- Use `label-micro` for metadata (e.g., "PAGE_01 // SEC.BLOCK").
- Headlines should use "Optical Sizing" where available to maintain the razor-thin serifs of Bodoni.

## Layout & Spacing
The design system employs an **Asymmetric Broken Grid**. While a 12-column underlying structure exists for alignment, elements are encouraged to break out of columns or "bleed" into margins.

- **The Overlap:** Key editorial images or large display type should use the `overlap-offset` to sit on top of data modules, creating visual depth without using shadows.
- **Rule Lines:** Use 1px Bit-colored lines to define sections. These lines should often extend to the very edge of the screen, mimicking a printing press sheet.
- **Data Density:** While editorial sections are airy with large margins, "Data Blocks" should be tightly packed using a 4px baseline grid to mimic a Bloomberg terminal’s efficiency.
- **Mobile Reflow:** On mobile, the overlap is reduced to maintain legibility, switching to a single-column stack while keeping the oversized display type (scaled to `headline-lg-mobile`).

## Elevation & Depth
This design system rejects shadows in favor of **Tonal Layering and Linework**.

- **Flat Depth:** Hierarchy is established by "stacking" elements. A card does not float; it sits on the Bone surface, defined by a 1px Bit border.
- **Transparency:** Use "Glassmorphism" sparingly, only for terminal overlays. Use a `10px` backdrop blur with a 90% opaque Bone tint to simulate tracing paper.
- **The "Ticker" Elevation:** Important status updates (Ticker Tapes) should be pinned to the top or bottom of the viewport, separated by a double-ruled line to indicate they exist on a "Global" hardware layer.

## Shapes
The shape language is strictly **Architectural and Sharp**. 

- **Corners:** All buttons, cards, and input fields must have **0px radius**. Curves are seen as too "friendly" for this aesthetic; right angles suggest precision and structural integrity.
- **Dividers:** Use vertical and horizontal 1px lines to create "cells" for data. 
- **Icons:** Use geometric, stroke-based icons with 1px or 2px weights. No filled or rounded icon sets.

## Components

- **Buttons:** Rectangular, 0px radius. Default state is a Bit background with Bone text. Hover state flips to a 1px Bit outline with a Trading Cyan "active" indicator in the corner.
- **Data Cards:** No background color (transparent). Defined by a 1px Bit border. The top-left corner must contain a `label-micro` tag identifying the data source.
- **Input Fields:** A simple 1px Bit bottom-border. The label should be in `label-micro` JetBrains Mono, positioned above the line.
- **Ticker Tape:** A continuous horizontal scroll of `data-mono` text at the bottom of the screen. Use Trading Cyan for positive deltas and Audit Magenta for negative deltas.
- **Chips/Status:** Small rectangular boxes with 1px borders. Text is all-caps mono. Use a single-pixel Cyan square to indicate "Live" status.
- **Editorial Callouts:** Large Bodoni quotes that break the container, styled like a magazine pull-quote, often set in Bit text with a 0.5pt Magenta rule line to the left.