import { scrapbookCards } from "./homeData";

export function ScrapbookSection() {
  return (
    <section className="bg-bg px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">If you&apos;d like</p>
        <h2 className="section-title">
          Here&apos;s some
          <br />
          <em>personal stuff.</em>
        </h2>
        <div className="grid gap-4 md:grid-cols-7">
          {scrapbookCards.map(([title, copy, className, icon], index) => (
            <article key={title} className={`portfolio-card min-h-48 p-6 ${index % 3 === 0 ? "md:col-span-3" : "md:col-span-2"} ${className}`}>
              <p className="mb-5 text-3xl">{icon}</p>
              <h3 className="mb-3 font-hand text-3xl font-bold leading-none text-ink">{title}</h3>
              <p className="text-sm leading-7 text-ink3">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
