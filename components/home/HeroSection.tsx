const html = `<section class="hero" id="home">

  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- 4 Photo Cards above name -->
  <div class="hero-cards" id="heroCards">
    <div class="hero-card hc-1" id="hc1">
      <div class="hc-photo" style="background:linear-gradient(135deg,#f5f5f5,#e8e8e8);">
        <span class="hc-emoji">🌅</span>
      </div>
      <div class="hc-label">golden hour</div>
    </div>
    <div class="hero-card hc-2" id="hc2">
      <div class="hc-photo" style="background:linear-gradient(135deg,#ebebeb,#ddd);">
        <span class="hc-emoji">☕</span>
      </div>
      <div class="hc-label">café shot</div>
    </div>
    <div class="hero-card hc-3" id="hc3">
      <div class="hc-photo" style="background:linear-gradient(135deg,#f0f0f0,#e2e2e2);">
        <img src="/nikunj.png" alt="Nikunj" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.nextSibling.style.display='flex'"/>
        <span class="hc-emoji" style="display:none;">✨</span>
      </div>
      <div class="hc-label">that&rsquo;s me</div>
    </div>
    <div class="hero-card hc-4" id="hc4">
      <div class="hc-photo" style="background:linear-gradient(135deg,#e8e8e8,#d5d5d5);">
        <span class="hc-emoji">📐</span>
      </div>
      <div class="hc-label">at work</div>
    </div>
  </div>

  <!-- Name — Nico Moji, one line -->
  <div class="hero-name-wrap" id="heroNameWrap">
    <span class="hero-hi">Hi, I&rsquo;m</span>
    <span class="hero-name">Nikunj Tyagi</span>
  </div>

  <!-- Typing role -->
  <div class="hero-role">
    <div class="role-line"></div>
    <div class="typing-wrap">
      <span class="typing-text" id="typingText"></span>
      <span class="typing-cursor"></span>
    </div>
    <div class="role-line"></div>
  </div>

</section>`;

export function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
