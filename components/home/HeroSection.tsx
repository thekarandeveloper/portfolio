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

  <!-- RIGHT: polaroid memory collage -->
  <div class="hi-right reveal from-right reveal-delay-1">
    <div class="hi-pm-collage">

      <!-- handwritten note — top -->
      <span class="hi-pm-note hi-pm-note--tl">designing my way →</span>

      <!-- polaroid 1 -->
      <div class="hi-pm-wrap hi-pm-1">
        <div class="hi-pm-tape"></div>
        <div class="hi-pm-frame">
          <img src="/Image/hero/second.png" class="hi-pm-photo hi-pm-photo--1" alt="one day at a time" />
          <span class="hi-pm-cap">one day at a time</span>
        </div>
      </div>

      <!-- polaroid 2 -->
      <div class="hi-pm-wrap hi-pm-2">
        <div class="hi-pm-frame">
          <img src="/about/portrait.jpg" class="hi-pm-photo hi-pm-photo--2" alt="coffee first, always" />
          <span class="hi-pm-cap">coffee first, always</span>
        </div>
      </div>

      <!-- polaroid 3 -->
      <div class="hi-pm-wrap hi-pm-3">
        <div class="hi-pm-tape hi-pm-tape--r"></div>
        <div class="hi-pm-frame">
          <img src="/Image/hero/third.png" class="hi-pm-photo hi-pm-photo--3" alt="food &gt; everything" />
          <span class="hi-pm-cap">food &gt; everything</span>
        </div>
      </div>

      <!-- polaroid 4 -->
      <div class="hi-pm-wrap hi-pm-4">
        <div class="hi-pm-frame">
          <img src="/Image/hero/first.png" class="hi-pm-photo hi-pm-photo--4" alt="somewhere in between" />
          <span class="hi-pm-cap">somewhere in between</span>
        </div>
      </div>

      <!-- ripped paper note — pinned below the polaroid cluster -->
      <div class="hi-ripped-note" aria-hidden="true">
        <svg class="hi-ripped-edge hi-ripped-edge--top" viewBox="0 0 400 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,20 C18,8 35,22 58,14 C78,7 96,20 118,15 C140,10 155,22 178,16 C200,10 220,22 242,14 C262,7 282,19 305,13 C326,8 344,21 368,15 C385,10 395,18 400,16 L400,24 L0,24 Z" fill="#f7f3ee"/></svg>
        <div class="hi-ripped-body">
          <p class="hi-ripped-text">collecting moments faster than I can organize them.</p>
        </div>
        <svg class="hi-ripped-edge hi-ripped-edge--bottom" viewBox="0 0 400 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 L400,0 L400,6 C380,14 360,4 338,10 C318,15 298,5 275,12 C254,18 234,6 210,11 C188,16 168,5 144,10 C122,15 102,4 78,9 C58,14 38,4 14,8 C8,9 3,6 0,5 Z" fill="#f7f3ee"/></svg>
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
