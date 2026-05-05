# Portfolio UI Guidelines

LAST_UPDATED: 2026-05-05

## Rule

No invented colors, icons, fonts, spacing values, radii, or components. Use only the systems below, all derived from the three HTML references.

## Portfolio System

Source: `nikunj-portfolio-ultimate_17.html`

Fonts:

- Serif: Cormorant Garamond
- Sans: DM Sans
- Hand: Caveat

Colors:

- `bg`: `#FDFAF8`
- `bg2`: `#F9F5F2`
- `bg3`: `#F3EDE8`
- `bg4`: `#EDE5DE`
- `surface`: `#E8DDD6`
- `ink`: `#1A1210`
- `ink2`: `#3D2E28`
- `ink3`: `#7A6058`
- `ink4`: `#B09A90`
- `pink`: `#E8547A`
- `pink2`: `#F07A98`
- `pink5`: `#FFF0F3`
- `figma-dark`: `#1E1E1E`
- `figma-panel`: `#2C2C2C`
- `figma-red`: `#FF5F57`
- `figma-yellow`: `#FFBD2E`
- `figma-green`: `#28CA41`

Components:

- Fixed pill navbar, 58px high.
- Figma-style intro loader.
- Hero with large Caveat name and serif italic support copy.
- Project card: white surface, 20px radius, thin border, 3px pink top rule on hover.
- Contact links: stacked rows with subtle left shift on hover.

## AIR iQ Case Study System

Source: `airiq-casestudy-v2_1.html`

Fonts:

- AIR sans: Lato

Colors:

- `air-navy`: `#0B1E3D`
- `air-blue`: `#1076BC`
- `air-blue-mid`: `#378ADD`
- `air-blue-light`: `#E8F2FB`
- `air-off`: `#F6F8FB`
- `air-accent`: `#FF6B35`
- `air-dark-blue`: `#183057`
- `air-bg-swatch`: `#F9FAFC`
- `air-bg-2-swatch`: `#E8EFF5`
- `air-border-swatch`: `#E0E6EC`
- `air-body-swatch`: `#333333`
- `air-placeholder`: `#A3A3A3`
- `air-gray-100`: `#EDF0F5`
- `air-gray-200`: `#D6DCE8`
- `air-gray-400`: `#8A96AB`
- `air-gray-600`: `#4A5568`
- `air-gray-800`: `#1A2332`
- `air-green`: `#0D9E75`
- `air-red`: `#E53E3E`
- `air-amber`: `#D97706`
- `air-soft-red`: `#FC8181`
- `air-soft-amber`: `#FCD34D`
- `air-mint`: `#6EE7B7`

Use for AIR iQ project detail hero and case-study accents only.

## BibloFi Case Study System

Source: `biblofi-case-study.html`

Colors:

- `biblo-bg`: `#F8F7FC`
- `biblo-bg2`: `#F2F0F9`
- `biblo-bg3`: `#EAE6F5`
- `biblo-bg4`: `#DDD8EF`
- `biblo-surface`: `#CEC7E8`
- `biblo-ink`: `#12101F`
- `biblo-ink2`: `#2A2540`
- `biblo-ink3`: `#5A5275`
- `biblo-ink4`: `#9A94B8`
- `biblo-purple`: `#5B3FD4`
- `biblo-purple2`: `#7B6BE0`
- `biblo-purple3`: `rgba(91,63,212,0.08)`
- `biblo-purple5`: `#F4F2FF`
- `biblo-deep`: `#0D0B1F`
- `biblo-deep2`: `#1A1535`
- `biblo-deep3`: `#231A50`
- `biblo-danger`: `#C0392B`
- `biblo-success`: `#27AE60`
- `biblo-warning`: `#E67E22`
- `biblo-danger-soft`: `#FFE5E5`

Use for BibloFi project detail hero and case-study accents only.

## Spacing And Radius

Use the documented 4pt system from the references:

- `4`, `8`, `12`, `16`, `24`, `32`, `40`, `48`

Radii:

- Small: `4px`
- Medium: `8px`
- Large/card: `12px` to `20px`
- Pill: `999px`

## Content

All projects and blogs must be MDX in `content/`. Do not hardcode long-form content in route files.
