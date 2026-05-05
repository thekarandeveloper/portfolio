import Link from "next/link";
import type { ContentItem } from "@/lib/mdx";
import { CloudinaryImage } from "./CloudinaryImage";

export function ProjectCard({ project, index, compact = false }: { project: ContentItem; index: number; compact?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`portfolio-card block no-underline ${compact ? "p-8" : "grid gap-10 p-8 md:grid-cols-2 md:p-12"}`}
    >
      <span className="absolute right-8 top-6 select-none font-serif text-6xl font-light leading-none text-[rgba(26,18,16,0.04)] dark:text-white/5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className={compact ? "mb-6 h-40 overflow-hidden rounded-xl border border-[rgba(180,140,130,0.15)] bg-bg3" : "order-2 overflow-hidden rounded-xl border border-[rgba(180,140,130,0.15)] bg-bg3 md:order-none"}>
        <CloudinaryImage
          src={project.coverImage}
          alt={project.title}
          width={900}
          height={560}
          sizes={compact ? "(max-width: 768px) 100vw, 420px" : "(max-width: 768px) 100vw, 560px"}
          className="h-full min-h-40 w-full object-cover"
        />
      </div>
      <div>
        <p className="mb-3 text-[0.65rem] uppercase tracking-[0.16em] text-pink">{project.tags[0] || "Project"}</p>
        <h3 className={compact ? "mb-3 font-serif text-2xl font-normal leading-tight text-ink dark:text-bg" : "mb-4 font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal leading-tight text-ink dark:text-bg"}>
          {project.title}
        </h3>
        <p className="mb-5 max-w-md text-[0.88rem] leading-[1.75] text-ink3 dark:text-bg4">{project.description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-[rgba(180,140,130,0.28)] bg-bg2 px-3 py-1 text-[0.65rem] text-ink3 dark:bg-ink2 dark:text-bg4">
              {tag}
            </span>
          ))}
        </div>
        <span className="border-b border-[rgba(180,140,130,0.28)] pb-1 text-[0.68rem] uppercase tracking-[0.1em] text-ink transition group-hover:text-pink dark:text-bg">
          View case study →
        </span>
      </div>
    </Link>
  );
}
