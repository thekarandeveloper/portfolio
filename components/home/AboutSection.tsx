const html = `<section class="about" id="about">
  <div class="about-2col reveal">
    <div class="about-photo-grid">
      <div class="about-photo ap-1">
        <div class="ap-placeholder">📸</div>
      </div>
      <div class="about-photo ap-2 ap-rotated">
        <div class="ap-placeholder">☕</div>
      </div>
      <div class="about-photo ap-3">
        <div class="ap-placeholder">🎯</div>
      </div>
      <div class="about-photo ap-4">
        <div class="ap-placeholder">✈️</div>
      </div>
    </div>
    <div class="about-text">
      <p class="about-sublabel">ABOUT ME</p>
      <h2 class="about-heading">Engineer by training.<br>Designer by choice.</h2>
      <div class="about-letter">
        <p class="letter-greeting">Hey there,</p>
        <p class="letter-body">I started out in engineering, where I learned how systems think. Then I discovered something more interesting — how people think. That shift changed everything.</p>
        <p class="letter-body">Now I design at the intersection of research and systems, building products that feel effortless to use because I spent a long time understanding why they're hard. Currently doing that at Air IQ.</p>
        <p class="letter-body">When I'm not designing, I'm probably in a café with a cold brew, exploring a city I've never been to, or deep in a rabbit hole about something no one asked me to care about.</p>
        <div class="letter-sign">
          <span class="letter-closing">Warmly,</span>
          <span class="letter-name">Nikunj</span>
        </div>
      </div>
      <a href="/about" class="about-cta">Know More <span class="about-cta-arrow">→</span></a>
    </div>
  </div>
</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
