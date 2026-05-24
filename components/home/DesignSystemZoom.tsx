const html = `
<section class="dsz-section" id="ds-zoom">

  <div class="dsz-sticky">
    <div class="dsz-stage">

      <!-- LEFT annotation column — flush to left edge of card -->
      <div class="dsz-ann-col dsz-ann-left">
        <div class="dsz-float dsz-fl-2">&#128204; Token architecture<br/>from scratch <span class="dsz-float-arrow">&#8594;</span></div>
        <div class="dsz-float dsz-fl-3">~200 components<br/>documented <span class="dsz-float-arrow">&#8594;</span></div>
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

          <!-- Project label -->
          <p class="dsz-project-label">AirIQ &middot; 2025&ndash;2026</p>

          <!-- Title -->
          <h3 class="dsz-title">A single system powering four products</h3>

          <!-- Subtitle -->
          <p class="dsz-desc">A modular component library &amp; token system built to scale with the team, without slowing it down. No dedicated systems team. Shipped alongside product.</p>

          <!-- Stats -->
          <div class="dsz-stat-grid">
            <div class="dsz-stat-chip"><div class="dsz-stat-number">150+</div><div class="dsz-stat-label">Icons</div></div>
            <div class="dsz-stat-chip"><div class="dsz-stat-number">30+</div><div class="dsz-stat-label">Tokens</div></div>
            <div class="dsz-stat-chip"><div class="dsz-stat-number">73%</div><div class="dsz-stat-label">Less drift</div></div>
            <div class="dsz-stat-chip"><div class="dsz-stat-number">0&rarr;1</div><div class="dsz-stat-label">Full system</div></div>
          </div>

          <!-- Divider -->
          <div class="dsz-inner-divider"></div>

          <!-- Delivered deliverables -->
          <div class="dsz-deliverables">
            <div class="dsz-deliverable">
              <span class="dsz-del-check">&#10003;</span>
              <span class="dsz-del-label">Typography system &mdash; 9 named scale steps</span>
            </div>
            <div class="dsz-deliverable">
              <span class="dsz-del-check">&#10003;</span>
              <span class="dsz-del-label">30+ components across 4 products</span>
            </div>
            <div class="dsz-deliverable">
              <span class="dsz-del-check">&#10003;</span>
              <span class="dsz-del-label">Color tokens &mdash; 3-tier semantic architecture</span>
            </div>
            <div class="dsz-deliverable">
              <span class="dsz-del-check">&#10003;</span>
              <span class="dsz-del-label">150+ icons, one unified stroke weight</span>
            </div>
          </div>

          <!-- Footer -->
          <div class="dsz-card-footer">
            <a href="/projects/project-5" class="dsz-cta">View Case Study &rarr;</a>
            <div class="dsz-footer-chips">
              <span class="dsz-footer-chip dsz-chip-blue">Lato &middot; Inter</span>
              <span class="dsz-footer-chip dsz-chip-red">Nov&ndash;Jan 2026</span>
            </div>
          </div>

        </div>

      </div>

      <!-- RIGHT annotation column — flush to right edge of card -->
      <div class="dsz-ann-col dsz-ann-right">
        <div class="dsz-float dsz-fr-2"><span class="dsz-float-arrow">&#8592;</span> Zero dedicated<br/>systems team &#128161;</div>
        <div class="dsz-float dsz-fr-3"><span class="dsz-float-arrow">&#8592;</span> Design debt: 0<br/>after rollout &#10003;</div>
        <div class="dsz-float dsz-fr-4"><span class="dsz-float-arrow">&#8592;</span> &#9992; 3-week sprint<br/>to v1</div>
      </div>

    </div>
  </div>

</section>
`;

export function DesignSystemZoom() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
