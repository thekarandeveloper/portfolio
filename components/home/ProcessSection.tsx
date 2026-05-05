import { processSteps } from "./homeData";

export function ProcessSection() {
  return (
    <section id="process" className="bg-bg2 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Process</p>
        <h2 className="section-title">
          Human intuition.
          <br />
          <em>AI velocity.</em>
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map(([number, title, copy]) => (
            <article key={title} className="portfolio-card p-7">
              <p className="mb-5 font-serif text-5xl font-light text-[rgba(26,18,16,0.06)]">{number}</p>
              <h3 className="mb-3 font-serif text-2xl font-normal text-ink">{title}</h3>
              <p className="text-sm leading-7 text-ink3">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
