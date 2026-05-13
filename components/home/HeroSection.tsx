const html = `<section class="hero" id="home">

  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- LEFT: intro text -->
  <div class="hi-left reveal from-left">
    <span class="hi-hello">hi there, i&rsquo;m 👋</span>
    <h1 class="hi-headline">
      Nikunj<br><em>Tyagi.</em>
    </h1>
    <p class="hi-bio-line">A product designer turning messy problems into clean, human experiences.</p>
    <p class="hi-bio-line">Currently designing B2B &amp; healthcare products that actually feel good to use.</p>
    <p class="hi-bio-line">Cold coffee. Late nights. Great design. ☕</p>
  </div>

  <!-- RIGHT: scrapbook collage -->
  <div class="hi-right reveal from-right reveal-delay-1">
    <div class="hi-scrapbook">

      <!-- music is therapy sticker — top left -->
      <img src="/Image/hero/music-tag.png" class="hi-asset hi-music" alt="music is therapy" />

      <!-- blue washi tape — top right corner -->
      <img src="/Image/hero/tape.png" class="hi-asset hi-tape-img" alt="" aria-hidden="true" />

      <!-- polaroid frame (CSS) with photo -->
      <div class="hi-polaroid-css">
        <img src="/Image/hero/mai.png" class="hi-mai" alt="Nikunj Tyagi" />
      </div>

      <!-- BTS CD — bottom left, spinning -->
      <img src="/Image/hero/cd-tag.png" class="hi-asset hi-cd" alt="" aria-hidden="true" />

      <!-- think outside the box sticker — bottom right -->
      <img src="/Image/hero/caption.png" class="hi-asset hi-caption-sticker" alt="think outside the box" />

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
