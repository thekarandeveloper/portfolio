const html = `<section class="hero" id="home">

  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- LEFT: intro text -->
  <div class="hi-left reveal from-left">
    <span class="hi-hello">hi there, i&rsquo;m</span>
    <h1 class="hi-headline">
      <span id="hiTypewriter"></span><span class="hi-tw-cursor" id="hiTwCursor">|</span><br><em>Tyagi.</em>
    </h1>

    <p class="hi-sub-line">and you can call me <strong>nik</strong> <span class="hi-aside">(if we become good friends)</span></p>

    <p class="hi-bio-line" style="animation-delay:1.65s"><span class="hi-pill-pastel">chill girl</span> in the streets, design enthusiast in the <span class="hi-figma-chip"><svg class="hi-figma-logo" width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="5.5" height="5.5" rx="2.75" fill="#A259FF"/><rect x="5.5" y="0" width="5.5" height="5.5" rx="2.75" fill="#F24E1E"/><rect x="0" y="5.5" width="5.5" height="5.5" rx="2.75" fill="#A259FF"/><circle cx="8.25" cy="8.25" r="2.75" fill="#1ABCFE"/><rect x="0" y="11" width="5.5" height="5" rx="2.5" fill="#0ACF83"/></svg>figma</span>.</p>

    <p class="hi-bio-line" style="animation-delay:1.9s">i&rsquo;ll <span class="hi-strike-word">delay</span> everything except a <span class="hi-ul-draw">good layout</span>.</p>

    <div class="hi-sticky-coffee">currently: on my <span id="hiCoffeeNum">third</span> coffee ☕</div>

    <p class="hi-bio-line" style="animation-delay:2.5s">probably redesigning something <span class="hi-footnote">nobody asked me to.</span></p>
  </div>

  <!-- RIGHT: photo -->
  <div class="hi-right reveal from-right reveal-delay-1">
    <div class="hi-scrapbook">
      <div class="hi-polaroid-css">
        <img src="/Image/hero/second.png" class="hi-mai" alt="Nikunj Tyagi" />
      </div>
    </div>
  </div>

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
