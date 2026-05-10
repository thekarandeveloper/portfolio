const html = `<section class="about" id="about">
  <div class="about-letter-wrap reveal">

    <div class="about-postcard-col">
      <div class="postcard-scene">
        <div class="postcard-backing"></div>
        <div class="postcard-main">
          <img src="/nikunj.png" alt="Nikunj" />
        </div>
        <div class="postcard-stamp">
          <img src="/nikunj.png" alt="" />
          <span class="stamp-year">97</span>
        </div>
      </div>
    </div>

    <div class="about-letter-col">
      <div class="letter-paper">
        <p class="letter-greeting">Hey there,</p>
        <p class="letter-body">I'm Nikunj — a designer who started out as an engineer and somewhere along the way fell completely in love with making things feel effortless.</p>
        <p class="letter-body">I care deeply about the details most people never notice but always <em>feel</em>. The micro-interactions, the rhythm of a layout, the moment a product just clicks.</p>
        <p class="letter-body">When I'm not designing, you'll find me brewing the perfect cup of coffee, obsessing over type specimens, or deep in a rabbit hole of cognitive psychology.</p>
        <p class="letter-body">I believe good design is really just good empathy — and I'm always looking for the next problem worth solving.</p>
        <p class="letter-sign">Nikunj 🌸</p>
        <a href="/about" class="about-cta">
          Know More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>

  </div>
</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
