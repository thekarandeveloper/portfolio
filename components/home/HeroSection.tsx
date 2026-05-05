const html = `<section class="hero" id="home">
  <div class="cursor-glow" id="cursorGlow"></div>

  <div class="hero-name-wrap">
    <span class="hero-name"><span class="name-accent">Nikunj</span> Tyagi</span>
    <div class="hero-role">
      <div class="role-line"></div>
      <div class="typing-wrap">
        <span class="typing-text" id="typingText"></span>
        <span class="typing-cursor"></span>
      </div>
      <div class="role-line"></div>
    </div>
  </div>

  <p class="hero-tagline">Turning complex systems into things that just feel <em style="font-style:normal;color:var(--pink);font-weight:500;">obvious.</em></p>

  <!-- Floating elements — staggered entrance via JS -->
  <div class="float-el float-photo" id="fe1"><div class="polaroid"><div class="polaroid-img">your photo ✦</div><p class="polaroid-caption">that's me :)</p></div></div>
  <div class="float-el float-sticky" id="fe2"><div class="sticky"><p class="sticky-label">fun fact</p><p class="sticky-text">I'll redo the whole thing if it's 1px off. Not sorry.</p></div></div>
  <div class="float-el float-coffee" id="fe3"><div class="coffee-tag"><span>☕</span><p>coffee powered</p></div></div>
  <div class="float-el float-spidey" id="fe4"><div class="spidey-badge"><span class="s-icon">🕷</span><span class="s-text">neighborhood fav</span></div></div>
  <div class="float-el float-currently" id="fe5"><div class="currently-tag"><p class="curr-label-t"><span class="curr-dot-live"></span> Currently</p><p class="curr-val">Designing @<br>Air IQ</p></div></div>
  <div class="float-el float-hp" id="fe6"><div class="hp-chip"><span class="hp-icon">⚡</span><span class="hp-text">always Hogwarts</span></div></div>
  <div class="float-el float-photo2" id="fe7"><div class="polaroid2"><div class="polaroid2-img">café shot ✦</div><p class="polaroid2-caption">café vibes ☕</p></div></div>
  <div class="hero-scroll-hint" id="heroScrollHint"><div class="scroll-line"></div> Scroll to explore</div>
</section>`;

export function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
