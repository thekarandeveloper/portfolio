const html = `<section class="hero" id="home">

  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- LEFT: intro text -->
  <div class="hi-left reveal from-left">
    <span class="hi-hello">hi there, i&rsquo;m 👋</span>
    <h1 class="hi-headline">
      Nikunj<br><em>Tyagi.</em>
    </h1>
    <p class="hi-bio">
      A <strong>product designer</strong> who makes things look intentional
      even when they&rsquo;re 10 minutes before the deadline ✨<br><br>
      I design B2B products, healthcare platforms, and occasionally
      my own sleep schedule &mdash; <em>still in beta 🐛</em><br><br>
      Professionally, I turn messy problems into clean experiences.
      Personally, I turn cold coffee into design decisions. ☕
    </p>
    <div class="hi-chips">
      <span class="hi-chip">she / her</span>
      <span class="hi-chip">India 🇮🇳</span>
      <span class="hi-chip hi-chip-blue">3+ yrs designing</span>
      <span class="hi-chip">3am designer 🌙</span>
    </div>
  </div>

  <!-- RIGHT: polaroid -->
  <div class="hi-right reveal from-right reveal-delay-1">
    <div class="hi-polaroid-wrap">
      <div class="hi-polaroid">
        <div class="hi-tape"></div>
        <div class="hi-tape2"></div>
        <img src="/nikunj.png" alt="Nikunj Tyagi" class="hi-photo" />
        <span class="hi-caption">caffeinated &amp; designing ☕</span>
      </div>
    </div>
  </div>

  <!-- floating decoratives -->
  <div class="hi-pill" style="top:22%;left:5%;animation:hiDrift 5s ease-in-out infinite;">coffee first ☕</div>
  <div class="hi-pill" style="bottom:22%;right:7%;animation:hiDrift 6.2s ease-in-out infinite 1.6s;">pixels &gt; sleep ✦</div>
  <span class="hi-star" style="top:17%;right:14%;font-size:1.5rem;animation:hiDrift 4.5s ease-in-out infinite 0.4s;">✦</span>
  <span class="hi-star" style="bottom:38%;left:2%;font-size:1.1rem;animation:hiDrift 5.8s ease-in-out infinite 1s;">✦</span>

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
