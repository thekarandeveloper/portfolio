const html = `
<section class="dsz-section" id="ds-zoom">

  <div class="dsz-sticky">
    <div class="dsz-stage">

      <!-- LEFT annotation column — flush to left edge of card -->
      <div class="dsz-ann-col dsz-ann-left">
        <div class="dsz-float dsz-fl-2">&#128204; Token architecture<br/>from scratch <span class="dsz-float-arrow">&#8594;</span></div>
        <div class="dsz-float dsz-fl-3">7 core components,<br/>all states mapped <span class="dsz-float-arrow">&#8594;</span></div>
        <div class="dsz-float dsz-fl-4">Built while<br/>shipping product &#128640; <span class="dsz-float-arrow">&#8594;</span></div>
      </div>

      <!-- heading + card stacked together -->
      <div class="dsz-card-wrap">

        <div class="dsz-heading-wrap reveal">
          <h2 class="dsz-title-main">I built a</h2>
          <span class="dsz-title-script">design system.</span>
        </div>

        <!-- the card -->
        <div class="dsz-card">

          <!-- Header row -->
          <div class="dsz-card-header">
            <div class="dsz-logomark">
              <div class="dsz-dot dsz-dot-blue"></div>
              <div class="dsz-dot dsz-dot-coral"></div>
              <div class="dsz-dot dsz-dot-blue-muted"></div>
            </div>
            <div class="dsz-tags-row">
              <span class="dsz-pill">Design Systems</span>
              <span class="dsz-pill">Token-first</span>
            </div>
          </div>

          <!-- Title -->
          <h3 class="dsz-title">A single system powering four products</h3>

          <!-- Subtitle -->
          <p class="dsz-desc">Modular components and a token system built to scale, without slowing the team down.</p>

          <!-- Hero image — edge-to-edge at bottom of card -->
          <img
            src="/Image/Airiq/design-system.png"
            alt="Design System overview"
            class="dsz-hero-img"
          />

        </div>

        <!-- Outside the card, inside dsz-card-wrap: meta + CTA -->
        <div class="dsz-card-below">
          <div class="dsz-below-left">
            <p class="dsz-below-meta">Design Systems &middot; AirIQ &middot; Nov 2025</p>
            <div class="dsz-below-tags">
              <span class="dsz-below-tag">0&rarr;1</span>
              <span class="dsz-below-tag">Token-first</span>
              <span class="dsz-below-tag">4 Products</span>
              <span class="dsz-below-tag">3 Weeks</span>
            </div>
          </div>
          <a href="/projects/project-5" class="dsz-below-cta">View Case Study &rarr;</a>
        </div>

      </div>

      <!-- RIGHT annotation column — flush to right edge of card -->
      <div class="dsz-ann-col dsz-ann-right">
        <div class="dsz-float dsz-fr-2"><span class="dsz-float-arrow">&#8592;</span> Zero dedicated<br/>systems team &#128161;</div>
        <div class="dsz-float dsz-fr-3"><span class="dsz-float-arrow">&#8592;</span> Design debt: 0<br/>after rollout &#10003;</div>
        <div class="dsz-float dsz-fr-4"><span class="dsz-float-arrow">&#8592;</span> 3-week sprint<br/>to v1</div>
      </div>

    </div>
  </div>

</section>
`;

export function DesignSystemZoom() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
