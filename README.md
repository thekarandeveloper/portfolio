# Nikunj Portfolio

Modern static-first portfolio built with Next.js App Router, TypeScript, Tailwind CSS, MDX, and Cloudinary image delivery.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

If `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is not set, the Cloudinary helper falls back to the public demo cloud for sample images.

## Content

All content lives in `content`.

- `content/projects/*.mdx`
- `content/blogs/*.mdx`

Every MDX file supports:

```mdx
---
title: "Title"
description: "Short summary"
date: "2026-04-22"
tags:
  - Tag
coverImage: "cloudinary-public-id"
featured: true
palette: "portfolio"
---
```

Routes are generated statically:

- `/projects`
- `/projects/[slug]`
- `/blogs`
- `/blogs/[slug]`

## Design System

The design system is derived only from the three reference files in this workspace:

- `nikunj-portfolio-ultimate_17.html`
- `airiq-casestudy-v2_1.html`
- `biblofi-case-study.html`

Do not introduce new colors, type styles, spacing scales, card shapes, or page patterns without documenting them in `AI/Guidelines.md` first.

## Commands

```bash
npm run dev
npm run build
npm run typecheck
```

## Git Practice

Every code change — no matter how small — must be committed and pushed to `origin/main` immediately after the edit. No staging branches, no PRs, no waiting to be asked.

```bash
git add <specific files>   # never add tsconfig.tsbuildinfo or build artifacts
git commit -m "clear message"
git push origin main
```

This applies to all sessions and all files in this repo.
