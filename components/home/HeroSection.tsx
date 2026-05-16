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

  </div>

  <!-- RIGHT: paper clip card stack -->
  <div class="hi-right reveal from-right reveal-delay-1">
    <div class="hi-cs-wrap" id="hiCsWrap">

      <!-- Blue structural back cards (fixed, never change) -->
      <div class="hi-cs-back"></div>
      <div class="hi-cs-mid"></div>

      <!-- Photo card 0 — "one day at a time" (starts active) -->
      <div class="hi-cs-card hi-cs-active" data-idx="0">
        <img src="/Image/hero/second.png" class="hi-cs-img" alt="one day at a time" />
        <div class="hi-cs-grad"></div>
        <span class="hi-cs-cap">one day at a time</span>
        <div class="hi-cs-label">click to change</div>
      </div>

      <!-- Photo card 1 — "food > everything" -->
      <div class="hi-cs-card hi-cs-behind" data-idx="1">
        <img src="/Image/hero/third.png" class="hi-cs-img" alt="food > everything" />
        <div class="hi-cs-grad"></div>
        <span class="hi-cs-cap">food &gt; everything</span>
        <div class="hi-cs-label">click to change</div>
      </div>

      <!-- Photo card 2 — "coffee first, always" -->
      <div class="hi-cs-card hi-cs-behind" data-idx="2">
        <img src="/about/portrait.jpg" class="hi-cs-img" alt="coffee first, always" />
        <div class="hi-cs-grad"></div>
        <span class="hi-cs-cap">coffee first, always</span>
        <div class="hi-cs-label">click to change</div>
      </div>

      <!-- Paper clip — fixed on top of everything -->
      <div class="hi-cs-clip">
        <svg width="25" height="49" viewBox="0 0 36 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6 C32 6 34 14 34 22 L34 52 C34 62 26 68 18 68 C10 68 2 62 2 52 L2 20 C2 10 10 4 18 4 C26 4 32 10 32 20 L32 52 C32 58 26 64 18 64 C12 64 8 58 8 52 L8 22 C8 14 12 10 18 10" stroke="#9AAAB8" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        </svg>
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
