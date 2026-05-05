# Learnings

[SETUP] Missing AI master file
FAILED: Attempted to read `AI/MASTER.md` because repo instructions required it.
WHY: The workspace did not contain an `AI/` folder yet.
CORRECT: Create `AI/MASTER.md`, `AI/Guidelines.md`, `AI/Instructions.md`, and `AI/Learnings.md` before continuing future portfolio work.
DATE: 2026-05-05

[REPLICA] Reference HTML runtime dependency
FAILED: Routed portfolio and case-study pages by reading the reference HTML files directly from disk.
WHY: The reference files are intended to be deletable, so runtime `fs.readFileSync` made the app depend on files outside the owned component tree.
CORRECT: Move replica HTML into app-owned modules under `components/replicas/` before wiring routes.
DATE: 2026-05-05

[HOME] Giant embedded HTML module
FAILED: Stored the full home reference as one large `homeReplicaHtml.ts` string.
WHY: It was not maintainable or aligned with the workspace's component-based Next/Tailwind structure.
CORRECT: Split home into modular React components under `components/home/` with shared data in `homeData.ts`.
DATE: 2026-05-05

[CASE_STUDY] HTML-string replicas
FAILED: Kept AIR iQ and BiblioFi as iframe/html-string replicas under `components/replicas/`.
WHY: Large embedded HTML files are hard to maintain and do not match the workspace's modular React/Tailwind practice.
CORRECT: Convert each case study into dedicated React/Tailwind modules under `components/case-studies/`, with separate data files and shared case-study primitives.
DATE: 2026-05-05

[CASE_STUDY] Root chrome on replica routes
FAILED: Let the global portfolio navbar and footer render around an exact case-study replica.
WHY: `app/layout.tsx` wraps every route, so route-level replica components still receive global chrome unless those components opt out.
CORRECT: Hide global chrome for exact replica routes such as `/projects/airiq`, then render the case study as the first visible pixel.
DATE: 2026-05-05

[CASE_STUDY] BibloFi reference scope
FAILED: Treated BibloFi as a short resume-supported project summary.
WHY: The source reference `biblofi-case-study.html` contains a full standalone case study with its own nav, progress bar, research, wireframes, accessibility, testing, mascot, learnings, and next-project CTA.
CORRECT: Preserve the full reference structure in modular case-study components and scope all replica CSS under `.biblofi-case-study`.
DATE: 2026-05-05
