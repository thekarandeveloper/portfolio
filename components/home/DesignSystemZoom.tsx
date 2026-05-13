const html = `
<section class="dsz-section" id="ds-zoom">

  <div class="dsz-heading-wrap reveal">
    <h2 class="dsz-title-main">I built a</h2>
    <span class="dsz-title-script">design system.</span>
  </div>

  <div class="dsz-sticky">
    <div class="dsz-stage">

    <!-- floating annotations in the white space -->
    <div class="dsz-floats">

      <!-- LEFT side -->
      <div class="dsz-float dsz-fl-1">
        <span class="dsz-float-arrow">&#8594;</span>First component<br/>ever shipped
      </div>
      <div class="dsz-float dsz-fl-2">
        &#128204; Token architecture<br/>defined from scratch
      </div>
      <div class="dsz-float dsz-fl-3">
        <span class="dsz-float-arrow">&#8599;</span>~200 components<br/>documented
      </div>
      <div class="dsz-float dsz-fl-4">
        Built while<br/>shipping product &#128640;
      </div>

      <!-- RIGHT side -->
      <div class="dsz-float dsz-fr-1">
        Used across<br/>4 products &#8592;
      </div>
      <div class="dsz-float dsz-fr-2">
        Zero dedicated<br/>systems team &#128161;
      </div>
      <div class="dsz-float dsz-fr-3">
        Design debt: 0<br/>after rollout &#10003;
      </div>
      <div class="dsz-float dsz-fr-4">
        &#9992; 3-week sprint<br/>to v1
      </div>

    </div>

    <!-- the card -->
    <div class="dsz-card">
      <div class="dsz-card-header">
        <div class="bento-icon-badge">&#127912;</div>
        <div class="bento-tags">
          <span class="bento-tag" style="background:rgba(0,0,0,0.05);color:var(--ink3);">Design Systems</span>
          <span class="bento-tag" style="background:rgba(0,0,0,0.04);color:var(--ink3);">Components</span>
          <span class="bento-tag" style="background:rgba(0,0,0,0.04);color:var(--ink3);">Tokens</span>
          <span class="bento-tag dsz-wip-tag">&#9679; In Progress</span>
        </div>
      </div>

      <h3 class="dsz-title">A single system powering four products</h3>
      <p class="dsz-desc">A modular component library and token system built to scale with the team&mdash;without slowing it down. No dedicated systems team. Shipped alongside product.</p>

      <div class="dsz-visual">

        <!-- color token swatches -->
        <div class="dsz-tokens">
          <div class="dsz-swatch" style="background:#111827;"></div>
          <div class="dsz-swatch" style="background:#6B7280;"></div>
          <div class="dsz-swatch" style="background:#D1D5DB;"></div>
          <div class="dsz-swatch" style="background:#F9FAFB;border:1px solid rgba(0,0,0,0.08);"></div>
          <div class="dsz-swatch" style="background:#1E90FF;"></div>
          <div class="dsz-swatch" style="background:rgba(30,144,255,0.20);"></div>
        </div>

        <!-- completion bars -->
        <div class="dsz-bars">
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Typography</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:90%;background:rgba(17,24,39,0.55);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Components</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:74%;background:#1E90FF;"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Tokens</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:62%;background:rgba(17,24,39,0.35);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Documentation</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:38%;background:rgba(30,144,255,0.40);"></div></div>
          </div>
        </div>

        <!-- mock UI pieces -->
        <div class="dsz-mocks">
          <div class="dsz-mock-btn" style="background:rgba(17,24,39,0.80);"></div>
          <div class="dsz-mock-btn" style="background:transparent;border:1px solid rgba(0,0,0,0.14);"></div>
          <div class="dsz-mock-input"></div>
          <div class="dsz-mock-card"></div>
        </div>

      </div>

      <a class="dsz-cta" href="/projects/project-5">View Case Study &rarr;</a>
    </div>

    </div>
  </div>

</section>
`;

export function DesignSystemZoom() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
