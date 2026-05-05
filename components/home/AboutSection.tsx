const html = `<section class="about" id="about">
  <div class="about-header reveal">
    <p class="section-label">About me</p>
    <h2 class="about-intro">Pixel-perfect by day.<br><em>Café-hopping, camera-clicking,</em><br>slightly shopaholic by nature.</h2>
  </div>
  <div class="bento reveal reveal-delay-1">
    <div class="bento-card b-photo"><div class="photo-placeholder">Add your best photo here ✦</div><div class="photo-overlay"><p class="photo-name">Nikunj Tyagi</p><p class="photo-role">Product Designer · India</p></div></div>
    <div class="bento-card b-hello"><p class="bento-tag">Who I am</p><p class="bento-title" style="font-size:1.1rem;">I untangle messy systems and make them feel obvious. I take this very seriously.</p><p class="bento-sub" style="margin-top:0.4rem;color:rgba(255,255,255,0.4);">Extrovert. Pixel-obsessed. Organized chaos.</p></div>
    <div class="bento-card b-coffee"><p style="font-size:1.6rem;margin-bottom:0.35rem;">☕</p><p class="bento-title" style="font-size:0.85rem;">Coffee, no debate</p><p class="bento-sub">Café explorer</p></div>
    <div class="bento-card b-hp"><p class="hp-ic">⚡</p><p class="bento-tag">Potterhead</p><p class="bento-title" style="font-size:0.85rem;color:#c39bd3;">Always Hogwarts</p></div>
    <div class="bento-card b-design"><p class="bento-tag" style="color:rgba(255,255,255,0.65);">Design take</p><p class="bento-title" style="font-size:0.95rem;color:#fff;">"Good design disappears. Bad design screams."</p></div>
    <div class="bento-card b-camera"><p class="cam-icon">📸</p><p class="bento-title" style="font-size:0.9rem;">Aesthetic clicks</p><p class="bento-sub">Light, shadows, café corners.</p></div>
    <div class="bento-card b-music"><div class="music-bars"><div class="music-bar" style="height:12px;"></div><div class="music-bar" style="height:20px;"></div><div class="music-bar" style="height:9px;"></div><div class="music-bar" style="height:17px;"></div><div class="music-bar" style="height:7px;"></div></div><p class="bento-tag" style="color:var(--pink);">Always on</p><p class="bento-title" style="font-size:0.85rem;">Music</p></div>
    <div class="bento-card b-spidey"><p class="spider-web">🕸</p><p class="bento-tag" style="color:rgba(255,150,150,0.6);">Fan since forever</p><p class="bento-title" style="font-size:0.9rem;color:#fff;">Spider-Man is the GOAT. No discussion.</p></div>
    <div class="bento-card b-travel"><p class="globe">🌍</p><p class="bento-title" style="font-size:0.85rem;">Explore first</p></div>
    <div class="bento-card b-chaos"><p class="bento-title" style="font-size:0.88rem;font-family:var(--serif);font-style:italic;">Organized chaos</p><p class="bento-sub">Figma files make sense. My brain, debatable.</p></div>
    <div class="bento-card b-travel2"><p class="bento-title" style="font-size:0.78rem;">New city = new café</p><p class="bento-sub" style="font-size:0.68rem;">That's the whole plan.</p></div>
    <div class="bento-card b-currently" style="flex-direction:row;align-items:center;justify-content:flex-start;gap:2rem;"><div><p class="curr-label2">Currently</p><p class="curr-title2">Leading hotel<br>design @ Air IQ</p></div><div class="current-divider"></div><div class="curr-items"><div class="curr-item"><div class="curr-dot2"></div>Learning motion design</div><div class="curr-item"><div class="curr-dot2"></div>Building design systems</div><div class="curr-item"><div class="curr-dot2"></div>Open to opportunities</div></div></div>
    <div class="bento-card b-doodle"><div class="doodle-wrap"><svg class="doodle-svg" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#E8B4C0" stroke-width="1" stroke-dasharray="4 3"/><path d="M25 40 C25 30,35 22,40 22 C45 22,55 30,55 40 C55 50,45 56,40 58 C35 56,25 50,25 40Z" stroke="#E8547A" stroke-width="1.2" fill="none"/><circle cx="40" cy="40" r="3.5" fill="#E8547A"/><line x1="40" y1="10" x2="40" y2="20" stroke="#E8B4C0" stroke-width="1" stroke-linecap="round"/><line x1="40" y1="60" x2="40" y2="70" stroke="#E8B4C0" stroke-width="1" stroke-linecap="round"/><line x1="10" y1="40" x2="20" y2="40" stroke="#E8B4C0" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="40" x2="70" y2="40" stroke="#E8B4C0" stroke-width="1" stroke-linecap="round"/></svg><p class="doodle-caption">random doodler</p></div></div>
    <div class="bento-card b-shop"><p class="shop-icon">🛍</p><p class="bento-tag" style="color:var(--pink);">Certified</p><p class="bento-title" style="font-size:0.9rem;">Shopaholic. I said what I said.</p></div>
    <div class="bento-card b-pixel"><p class="bento-tag" style="color:rgba(255,255,255,0.4);">Design sin</p><p class="bento-title" style="font-size:0.88rem;font-family:var(--serif);font-style:italic;color:#fff;">I will redo it if it's off by 1px.</p></div>
  </div>
</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
