import { timeline } from "./homeData";

export function JourneySection() {
  return (
    <section className="bg-bg px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-label">Journey so far</p>
          <h2 className="section-title">
            From building
            <br />
            to <em>designing</em>
            <br />
            the thing.
          </h2>
        </div>
        <div className="relative space-y-8 before:absolute before:bottom-0 before:left-3 before:top-2 before:w-px before:bg-[rgba(180,140,130,0.28)]">
          {timeline.map((item, index) => (
            <article key={item.company} className="relative pl-10">
              <span className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-bg ${index === 0 ? "bg-pink" : "bg-bg4"}`} />
              <p className="mb-1 text-[0.65rem] uppercase tracking-[0.14em] text-pink">{item.date}</p>
              <h3 className="font-serif text-2xl font-normal text-ink">{item.role}</h3>
              <p className="mb-2 text-sm text-ink4">{item.company}</p>
              <p className="body-copy">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
