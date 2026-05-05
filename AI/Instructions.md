# Instructions

LAST_UPDATED: 2026-05-05

## Paths

- App Router pages: `app/`
- Shared components: `components/`
- MDX content: `content/projects`, `content/blogs`
- MDX loader: `lib/mdx.ts`
- Cloudinary helper: `lib/cloudinary.ts`
- Global Tailwind/theme: `app/globals.css`

## Static-First Rule

Keep everything static-first. Avoid unnecessary APIs or backend routes.

## MDX Rule

Use `gray-matter` for frontmatter extraction and `next-mdx-remote/rsc` for rendering.

## Case Study Replica Rule

`/` must render the modular home implementation from `components/home/`. Do not use a giant embedded HTML string for the home page.

`/projects/airiq` and `/projects/biblofi` must render modular React/Tailwind case-study implementations:

- `components/case-studies/AirIqCaseStudy.tsx`
- `components/case-studies/BiblofiCaseStudy.tsx`
- shared case-study data and shell files under `components/case-studies/`

Do not use iframe/html-string replicas for these pages. Do not read the three reference HTML files from routes/components. They may be deleted.
