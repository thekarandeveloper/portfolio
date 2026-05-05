"use client";

import { useMemo, useState } from "react";
import type { ContentItem, ContentType } from "@/lib/mdx";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

export function TagFilter({ items, type }: { items: ContentItem[]; type: ContentType }) {
  const [active, setActive] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(items.flatMap((item) => item.tags)))], [items]);
  const filtered = active === "All" ? items : items.filter((item) => item.tags.includes(active));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button key={tag} type="button" onClick={() => setActive(tag)} className={`pill ${active === tag ? "border-pink bg-pink text-white" : ""}`}>
            {tag}
          </button>
        ))}
      </div>
      {type === "projects" ? (
        <div className="grid gap-5">
          {filtered.map((item, index) => (
            <ProjectCard key={item.slug} project={item} index={index} compact={index > 0} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <Link key={item.slug} href={`/blogs/${item.slug}`} className="portfolio-card p-8">
              <p className="mb-4 text-[0.65rem] uppercase tracking-[0.16em] text-pink">{new Date(item.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</p>
              <h3 className="mb-3 font-serif text-2xl font-normal leading-tight text-ink dark:text-bg">{item.title}</h3>
              <p className="mb-5 text-[0.88rem] leading-[1.75] text-ink3 dark:text-bg4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[rgba(180,140,130,0.28)] bg-bg2 px-3 py-1 text-[0.65rem] text-ink3 dark:bg-ink2 dark:text-bg4">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
