const html = `<section class="about" id="about">
  <div class="about-header reveal">
    <p class="section-label">About me</p>
    <h2 class="about-intro">Pixel-perfect by day.<br><em>Café-hopping, camera-clicking,</em><br>slightly shopaholic by nature.</h2>
  </div>
  <div class="bento reveal reveal-delay-1">

    <!-- col 1 — tall portrait (40% width, all 3 rows) -->
    <div class="bento-card b-photo">
      <div class="photo-placeholder">Add your best photo here ✦</div>
      <div class="photo-overlay"><p class="photo-name">Nikunj Tyagi</p><p class="photo-role">Product Designer · India</p></div>
    </div>

    <!-- col 2-3 row 1 — bio -->
    <div class="bento-card b-hello">
      <p class="bento-tag">Who I am</p>
      <p class="bento-title">I untangle messy systems and make them feel obvious.</p>
      <p class="bento-sub" style="margin-top:0.4rem;color:rgba(255,255,255,0.4);">Extrovert. Pixel-obsessed.</p>
    </div>

    <!-- col 2 row 2 — sticky note -->
    <div class="bento-card b-note" style="transform:rotate(1.2deg);">
      <p class="note-text">I&rsquo;ll redo the whole thing if it&rsquo;s 1px off.</p>
      <p class="note-pin">— me, 2am 📌</p>
    </div>

    <!-- col 3 row 2 — café photo -->
    <div class="bento-card b-doodle">
      <div class="doodle-wrap">
        <p style="font-size:2rem;margin-bottom:0.4rem;">🏙</p>
        <p class="doodle-caption">café shot here</p>
      </div>
    </div>

    <!-- col 2-3 row 3 — currently -->
    <div class="bento-card b-currently">
      <div><p class="curr-label2">Currently</p><p class="curr-title2">Leading hotel<br>design @ Air IQ</p></div>
      <div class="current-divider"></div>
      <div class="curr-items">
        <div class="curr-item"><div class="curr-dot2"></div>Learning motion design</div>
        <div class="curr-item"><div class="curr-dot2"></div>Building design systems</div>
        <div class="curr-item"><div class="curr-dot2"></div>Open to opportunities</div>
      </div>
    </div>

  </div>
</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
