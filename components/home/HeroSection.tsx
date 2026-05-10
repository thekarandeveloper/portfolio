const html = `<section class="hero" id="home">

  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- 4 Photo Cards above name -->
  <div class="hero-cards" id="heroCards">
    <div class="hero-card hc-1" id="hc1">
      <div class="hc-photo">
        <img src="/Image/hero/Nikunj.png" alt="Nikunj" style="width:100%;height:100%;object-fit:cover;object-position:center top;" />
      </div>
      <div class="hc-label">Hi There</div>
    </div>
    <div class="hero-card hc-2" id="hc2">
      <div class="hc-photo">
        <img src="/Image/hero/Cafe.png" alt="Cafe" style="width:100%;height:100%;object-fit:cover;object-position:center center;" />
      </div>
      <div class="hc-label">Brew Mode</div>
    </div>
    <div class="hero-card hc-3" id="hc3">
      <div class="hc-photo">
        <img src="/Image/hero/flower.png" alt="Flower" style="width:100%;height:100%;object-fit:cover;object-position:center center;" />
      </div>
      <div class="hc-label">Still Life</div>
    </div>
    <div class="hero-card hc-4" id="hc4">
      <div class="hc-photo">
        <img src="/Image/hero/ice-cream.png" alt="Ice cream" style="width:100%;height:100%;object-fit:cover;object-position:center center;" />
      </div>
      <div class="hc-label">Sweet Spot</div>
    </div>
  </div>

  <!-- Name block -->
  <div class="hero-name-wrap hero-text" id="heroNameWrap">
    <h1 class="hero-line1">
      <span>👋 Hi, I&rsquo;m Nikunj Tyagi,</span>
      <span>a&nbsp;<span class="typed-role" id="typed-role"></span><span class="hero-cursor" id="role-cursor"></span></span>
    </h1>
    <p class="hero-line2">who turns complex problems into clear, considered designs<br>one research insight at a time.</p>
    <p class="hero-line3"><span class="work-icon">💼</span> Currently designing @ Air IQ</p>
  </div>

  <!-- Scroll arrow with glass orb -->
  <div class="hero-scroll-hint">
    <div class="scroll-glass-orb">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E90FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
    </div>
  </div>

</section>`;

export function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
