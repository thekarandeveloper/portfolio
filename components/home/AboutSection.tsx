const html = `<section class="sc-about" id="about">
  <div class="sc-about-dots"></div>

  <div class="sc-about-grid">

    <!-- TOP LEFT: bio card -->
    <div class="sc-card sc-bio reveal from-left">
      <span class="sc-tag">hey, i'm nikunj 👋</span>
      <p class="sc-bio-text">A product designer who turns messy problems into clean, human experiences. I believe great design is invisible; it just <em>feels right.</em></p>
      <div class="sc-bio-footer">
        <span>3+ yrs designing</span>
        <span class="sc-dot">·</span>
        <span>India 🇮🇳</span>
        <span class="sc-dot">·</span>
        <span>she/her</span>
      </div>
    </div>

    <!-- CENTER: photo + Aa. -->
    <div class="sc-about-center">
      <div class="sc-photo-frame reveal scale-up">
        <img src="/about/portrait.jpg" alt="Nikunj Tyagi" class="sc-photo" />
      </div>
      <div class="sc-deco-aa">Aa.</div>
    </div>

    <!-- TOP RIGHT: playlist -->
    <div class="sc-card sc-playlist reveal from-right">
      <div class="sc-playlist-head">
        <span class="sc-tag">on repeat rn</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.42c-.2.32-.6.42-.92.22-2.52-1.54-5.7-1.89-9.44-1.04-.36.08-.72-.14-.8-.5-.08-.36.14-.72.5-.8 4.1-.93 7.6-.53 10.43 1.2.32.2.42.6.23.92zm1.24-2.76c-.25.4-.77.52-1.17.27-2.88-1.77-7.27-2.28-10.68-1.25-.44.13-.9-.12-1.03-.56-.13-.44.12-.9.56-1.03 3.9-1.18 8.74-.6 12.05 1.4.4.24.53.77.27 1.17zm.11-2.88C14.57 8.8 8.68 8.58 5.23 9.62c-.53.16-1.09-.14-1.25-.67-.16-.53.14-1.09.67-1.25 3.98-1.2 10.6-.97 14.78 1.45.47.27.63.86.36 1.33-.27.47-.86.63-1.33.36z"/></svg>
      </div>
      <div class="sc-pl-item">
        <div class="sc-pl-cover" style="background:linear-gradient(135deg,#1a1a2e,#16213e)"></div>
        <div class="sc-pl-info"><span class="sc-pl-title">Golden Hour</span><span class="sc-pl-artist">JVKE</span></div>
        <span class="sc-pl-star">★</span>
      </div>
      <div class="sc-pl-item">
        <div class="sc-pl-cover" style="background:linear-gradient(135deg,#2d1b69,#11998e)"></div>
        <div class="sc-pl-info"><span class="sc-pl-title">Espresso</span><span class="sc-pl-artist">Sabrina Carpenter</span></div>
        <span class="sc-pl-star" style="opacity:0.3">★</span>
      </div>
      <div class="sc-pl-item">
        <div class="sc-pl-cover" style="background:linear-gradient(135deg,#373B44,#4286f4)"></div>
        <div class="sc-pl-info"><span class="sc-pl-title">Lavender Haze</span><span class="sc-pl-artist">Taylor Swift</span></div>
        <span class="sc-pl-star" style="opacity:0.3">★</span>
      </div>
    </div>

    <!-- BOTTOM LEFT: currently -->
    <div class="sc-card sc-currently reveal from-left reveal-delay-1">
      <span class="sc-tag">currently</span>
      <div class="sc-curr-list">
        <div class="sc-curr-item"><span class="sc-curr-icon">📖</span><span>The Design of Everyday Things</span></div>
        <div class="sc-curr-item"><span class="sc-curr-icon">🎬</span><span>Rewatching Suits</span></div>
        <div class="sc-curr-item"><span class="sc-curr-icon">✦</span><span>Building this portfolio</span></div>
        <div class="sc-curr-item"><span class="sc-curr-icon">☕</span><span>Cold coffee, obviously</span></div>
      </div>
    </div>

    <!-- BOTTOM RIGHT: pantone -->
    <div class="sc-card sc-palette reveal from-right reveal-delay-1">
      <span class="sc-tag">pantone feels</span>
      <div class="sc-swatches">
        <div class="sc-swatch"><div class="sc-swatch-fill" style="background:#1E90FF"></div><span>Electric Blue</span></div>
        <div class="sc-swatch"><div class="sc-swatch-fill" style="background:#111111"></div><span>Midnight</span></div>
        <div class="sc-swatch"><div class="sc-swatch-fill" style="background:#EFEFEF;border:1px solid #ddd"></div><span>Fog</span></div>
      </div>
      <span class="sc-palette-sub">my design palette</span>
    </div>

  </div>

  <!-- Floating decorative -->
  <div class="sc-float sc-float-star1">✦</div>
  <div class="sc-float sc-float-star2">✦</div>
  <div class="sc-float sc-float-pill">3am designer</div>
  <div class="sc-float sc-float-pill2">coffee first ☕</div>

</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
