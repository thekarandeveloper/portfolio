export function TestimonialsSection() {
  const quotes = [
    ["Air IQ", "Designed key flows for itinerary search, booking, and confirmation."],
    ["Care Autor", "Translated healthcare requirements into user-centered modules and interaction flows."],
    ["Infosys", "Converted SRS requirements into structured user flows and interface designs."]
  ];

  return (
    <section className="bg-bg2 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Kind words</p>
        <h2 className="section-title">
          What people
          <br />
          <em>say about working with me.</em>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {quotes.map(([name, quote]) => (
            <article key={name} className="portfolio-card p-7">
              <p className="mb-4 font-serif text-6xl leading-none text-pink/20">&quot;</p>
              <p className="mb-8 text-sm leading-7 text-ink3">{quote}</p>
              <p className="font-serif text-xl text-ink">{name}</p>
              <p className="text-xs text-ink4">Project reference</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
