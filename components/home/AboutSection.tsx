export function AboutSection() {
  return (
    <section id="about" className="bg-bg px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">
            From building
            <br />
            to <em>designing</em>
            <br />
            the thing.
          </h2>
          <p className="body-copy max-w-xl">
            I started with computer science, then found the part of product work that felt most alive: understanding people, shaping flows, and making complex systems easier to use.
          </p>
          <p className="body-copy mt-5 max-w-xl">
            My work sits across B2B travel, healthcare, and iOS products, with a strong bias for information architecture, accessibility, and design systems that developers can actually build.
          </p>
        </div>
        <div className="grid gap-4">
          {["Figma", "FigJam", "Google Stitch", "Notion AI", "Accessibility", "Journey Mapping"].map((skill) => (
            <div key={skill} className="portfolio-card flex items-center justify-between p-5">
              <span className="font-serif text-xl text-ink">{skill}</span>
              <span className="text-pink">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
