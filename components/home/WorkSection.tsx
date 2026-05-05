import Link from "next/link";
import { projects } from "./homeData";

export function WorkSection() {
  return (
    <section id="work" className="bg-bg px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">
          Things I&apos;ve built
          <br />
          <em>& shaped.</em>
        </h2>
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <Link key={project.href} href={project.href} className={`portfolio-card group grid gap-8 p-8 no-underline md:p-10 ${index === 0 ? "md:grid-cols-[1.05fr_0.95fr]" : "md:grid-cols-[0.85fr_1.15fr]"}`}>
              <div className="relative min-h-52 overflow-hidden rounded-[20px] border border-[rgba(180,140,130,0.15)] bg-bg3">
                <div className="absolute inset-6 rounded-[16px] border border-[rgba(180,140,130,0.15)] bg-white p-5">
                  <p className="mb-8 text-[0.65rem] uppercase tracking-[0.16em] text-pink">{project.accent}</p>
                  <div className="space-y-3">
                    <div className="h-3 w-4/5 rounded bg-bg4" />
                    <div className="h-3 w-2/3 rounded bg-bg4" />
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="h-16 rounded bg-pink/10" />
                      <div className="h-16 rounded bg-bg4" />
                      <div className="h-16 rounded bg-pink/10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-3 text-[0.65rem] uppercase tracking-[0.16em] text-pink">{project.eyebrow}</p>
                <h3 className="mb-4 font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-normal leading-tight text-ink">{project.title}</h3>
                <p className="mb-5 max-w-md text-[0.9rem] leading-[1.8] text-ink3">{project.description}</p>
                <span className="mb-6 inline-flex w-fit rounded-full border border-[rgba(180,140,130,0.28)] bg-bg2 px-3 py-1 text-[0.65rem] text-ink3">{project.metric}</span>
                <span className="w-fit border-b border-[rgba(180,140,130,0.28)] pb-1 text-[0.68rem] uppercase tracking-[0.1em] text-ink transition group-hover:text-pink">View case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
