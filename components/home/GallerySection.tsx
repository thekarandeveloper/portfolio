export function GallerySection() {
  const items = ["Cafe", "Travel", "Architecture", "Aesthetic", "Nature", "Journey"];

  return (
    <section className="bg-bg2 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Through my lens</p>
        <h2 className="section-title">
          Life outside
          <br />
          <em>the pixels.</em>
        </h2>
        <div className="grid auto-rows-[180px] gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <div key={item} className={`portfolio-card flex items-end overflow-hidden bg-bg3 p-5 ${index === 0 || index === 3 ? "md:row-span-2" : ""}`}>
              <div>
                <p className="mb-2 text-3xl">{["☕", "🌆", "🏛", "📸", "🌸", "✈"][index]}</p>
                <p className="font-serif text-2xl text-ink">{item}</p>
                <p className="text-xs text-ink4">drop your photo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
