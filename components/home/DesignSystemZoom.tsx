const html = `
<section class="dsz-section" id="ds-zoom">

  <div class="dsz-heading-wrap reveal">
    <h2 class="dsz-title-main">I built a</h2>
    <span class="dsz-title-script">design system.</span>
  </div>

  <div class="dsz-sticky">
    <div class="dsz-card">

      <div class="dsz-card-header">
        <div class="bento-icon-badge" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.10);font-size:18px;">&#127912;</div>
        <div class="bento-tags">
          <span class="bento-tag" style="background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.55);">Design Systems</span>
          <span class="bento-tag" style="background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.45);">Components</span>
          <span class="bento-tag" style="background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.45);">Tokens</span>
          <span class="bento-tag dsz-wip-tag">&#9679; In Progress</span>
        </div>
      </div>

      <h3 class="dsz-title">A single system powering four products</h3>
      <p class="dsz-desc">A modular component library and token system built to scale with the team&mdash;without slowing it down. No dedicated systems team. Shipped alongside product.</p>

      <div class="dsz-visual">

        <!-- monochrome token swatches -->
        <div class="dsz-tokens">
          <div class="dsz-swatch" style="background:rgba(255,255,255,0.90);"></div>
          <div class="dsz-swatch" style="background:rgba(255,255,255,0.40);"></div>
          <div class="dsz-swatch" style="background:rgba(255,255,255,0.14);"></div>
          <div class="dsz-swatch" style="background:rgba(255,255,255,0.06);"></div>
          <div class="dsz-swatch" style="background:#1E90FF;"></div>
          <div class="dsz-swatch" style="background:rgba(30,144,255,0.28);"></div>
        </div>

        <!-- progress bars -->
        <div class="dsz-bars">
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Typography</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:90%;background:rgba(255,255,255,0.55);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Components</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:74%;background:rgba(30,144,255,0.70);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Tokens</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:62%;background:rgba(255,255,255,0.35);"></div></div>
          </div>
          <div class="dsz-bar-row">
            <div class="dsz-bar-label">Documentation</div>
            <div class="dsz-bar-track"><div class="dsz-bar-fill" style="width:38%;background:rgba(255,255,255,0.18);"></div></div>
          </div>
        </div>

        <!-- mock UI components -->
        <div class="dsz-mocks">
          <div class="dsz-mock-btn" style="background:#1E90FF;opacity:0.85;"></div>
          <div class="dsz-mock-btn" style="background:transparent;width:80px;"></div>
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
