const html = `
<section class="dsz-section" id="ds-zoom">

  <!-- heading — same cadence as the work section heading -->
  <div class="dsz-heading-wrap reveal">
    <h2 class="dsz-title-main">Currently working on</h2>
    <span class="dsz-title-script">a design system.</span>
  </div>

  <!-- sticky scroll-zoom card -->
  <div class="dsz-sticky">
    <div class="dsz-card">
      <div class="dsz-card-header">
        <div class="bento-icon-badge" style="font-size:18px;">&#127912;</div>
        <div class="bento-tags">
          <span class="bento-tag" style="background:rgba(219,39,119,0.09);color:#9D174D;">Design Systems</span>
          <span class="bento-tag" style="background:rgba(219,39,119,0.07);color:#9D174D;">Components</span>
          <span class="bento-tag" style="background:rgba(219,39,119,0.07);color:#9D174D;">Tokens</span>
          <span class="bento-tag dsz-wip-tag">&#9679; In Progress</span>
        </div>
      </div>

      <h3 class="dsz-title">A single system powering four products</h3>
      <p class="dsz-desc">Built a modular component library and token system that scaled with the team&mdash;without slowing it down. No dedicated systems team. Built alongside shipping.</p>

      <div class="dsz-visual">
        <!-- token swatches -->
        <div class="dsz-tokens">
          <div class="dsz-swatch" style="background:rgba(219,39,119,0.55);"></div>
          <div class="dsz-swatch" style="background:rgba(26,18,16,0.65);"></div>
          <div class="dsz-swatch" style="background:rgba(122,96,88,0.45);"></div>
          <div class="dsz-swatch" style="background:rgba(219,39,119,0.20);"></div>
          <div class="dsz-swatch" style="background:rgba(30,144,255,0.55);"></div>
          <div class="dsz-swatch" style="background:rgba(45,125,67,0.45);"></div>
        </div>
        <!-- progress bars -->
        <div class="dsz-bars">
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Typography</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:88%;background:rgba(219,39,119,0.35);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Components</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:72%;background:rgba(219,39,119,0.25);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Tokens</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:60%;background:rgba(219,39,119,0.18);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Documentation</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:40%;background:rgba(219,39,119,0.12);"></div></div>
          </div>
        </div>
        <!-- mock UI pieces -->
        <div class="dsz-mocks">
          <div class="dsz-mock-btn" style="background:rgba(219,39,119,0.12);"></div>
          <div class="dsz-mock-btn" style="background:rgba(0,0,0,0.06);width:80px;"></div>
          <div class="dsz-mock-input"></div>
          <div class="dsz-mock-card"></div>
        </div>
      </div>

      <a class="dsz-cta" href="/projects/project-5">View Case Study &rarr;</a>
    </div>
  </div>

</section>
`;

export function DesignSystemZoom() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
