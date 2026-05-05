import { stackDots } from "./homeData";

export function ToolkitSection() {
  return (
    <section className="bg-bg2 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">My stack</p>
            <h2 className="section-title mb-0">
              Human intuition.
              <br />
              <em>AI velocity.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-ink3">Every tool sits somewhere between pure craft and AI. I use both ends intentionally.</p>
        </div>
        <div className="relative h-40 overflow-x-auto">
          <div className="absolute left-0 right-0 top-16 h-2 rounded-full bg-gradient-to-r from-ink via-pink to-pink2" />
          {stackDots.map(([label, left]) => (
            <div key={label} className="absolute top-[54px]" style={{ left }}>
              <div className="h-6 w-6 rounded-full border-4 border-bg bg-pink shadow-[0_0_0_1px_rgba(180,140,130,0.28)]" />
              <div className="mt-4 h-8 w-px bg-ink4" />
              <span className="block -translate-x-1/2 whitespace-nowrap text-xs text-ink3">{label}</span>
            </div>
          ))}
        </div>
        <div className="portfolio-card mt-8 flex flex-wrap items-center gap-3 p-6">
          {["Discover", "Define", "Ideate", "Design", "Test", "Ship"].map((step, index) => (
            <span key={step} className="text-sm text-ink3">
              {step}
              {index < 5 && <span className="px-3 text-pink">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
