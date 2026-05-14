const html = `<section class="hero" id="home">

  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- LEFT: intro text -->
  <div class="hi-left reveal from-left">
    <span class="hi-hello">hi there, i&rsquo;m 👋</span>
    <h1 class="hi-headline">
      Nikunj<br><em>Tyagi.</em>
    </h1>
    <p class="hi-bio-line">A <span class="hi-w-role">product designer</span> turning <span class="hi-w-messy">messy</span> problems into <span class="hi-w-clean">clean</span>, human experiences.</p>
    <p class="hi-bio-line">Currently designing <span class="hi-w-tag">🏢 B2B</span> &amp; <span class="hi-w-tag hi-w-tag-green">🩺 healthcare</span> products that actually <span class="hi-w-feel">feel good</span> to use.</p>
    <div class="hi-life-chips">
      <span class="hi-life-chip">☕ Cold coffee</span>
      <span class="hi-life-chip">🌙 Late nights</span>
      <span class="hi-life-chip hi-chip-star">✦ Great design</span>
    </div>
  </div>

  <!-- RIGHT: scrapbook collage -->
  <div class="hi-right reveal from-right reveal-delay-1">
    <div class="hi-scrapbook">

      <!-- "One day at a time." — top right -->
      <img src="/Image/hero/caps.png" class="hi-asset hi-caps" alt="One day at a time." />

      <!-- polaroid (CSS frame) with B&W photo -->
      <div class="hi-polaroid-css">
        <img src="/Image/hero/pic.png" class="hi-mai" alt="Nikunj Tyagi" />
      </div>

      <!-- butterfly CD — bottom left, spinning -->
      <img src="/Image/hero/cd2-tag.png" class="hi-asset hi-cd" alt="" aria-hidden="true" />

    </div>
  </div>

  <!-- floating decoratives -->
  <div class="hi-pill" style="top:22%;left:5%;animation:hiDrift 5s ease-in-out infinite;">coffee first ☕</div>
  <div class="hi-pill" style="bottom:22%;right:7%;animation:hiDrift 6.2s ease-in-out infinite 1.6s;">pixels &gt; sleep ✦</div>
  <span class="hi-star" style="top:17%;right:14%;font-size:1.5rem;animation:hiDrift 4.5s ease-in-out infinite 0.4s;">✦</span>

  <!-- scroll hint -->
  <div class="hero-scroll-hint">
    <div class="scroll-arrow">
      <div class="scroll-arrow-line"></div>
      <div class="scroll-arrow-chevron"></div>
    </div>
  </div>

</section>`;

export function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
