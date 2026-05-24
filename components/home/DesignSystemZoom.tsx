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

          <!-- Visual system preview (replaces stat grid) -->
          <div class="dsz-sys-preview">
            <div class="dsz-preview-row">
              <span class="dsz-preview-label">Color</span>
              <div class="dsz-swatches">
                <div class="dsz-swatch" style="background:#1076BC;" title="Primary"></div>
                <div class="dsz-swatch" style="background:#E3F3FF;" title="Primary tint"></div>
                <div class="dsz-swatch" style="background:#F2616E;" title="Error"></div>
                <div class="dsz-swatch" style="background:#FFF0F0;" title="Error tint"></div>
                <div class="dsz-swatch" style="background:#059669;" title="Success"></div>
                <div class="dsz-swatch" style="background:#EAF9F1;" title="Success tint"></div>
                <div class="dsz-swatch" style="background:#111827;" title="Text primary"></div>
                <div class="dsz-swatch" style="background:#9CA3AF;" title="Text secondary"></div>
              </div>
            </div>
            <div class="dsz-preview-row">
              <span class="dsz-preview-label">Space</span>
              <div class="dsz-spacing-scale">
                <div class="dsz-space-bar" style="width:4px;height:8px;"></div>
                <div class="dsz-space-bar" style="width:8px;height:10px;"></div>
                <div class="dsz-space-bar" style="width:12px;height:12px;"></div>
                <div class="dsz-space-bar" style="width:16px;height:14px;"></div>
                <div class="dsz-space-bar" style="width:24px;height:16px;"></div>
                <div class="dsz-space-bar" style="width:32px;height:16px;"></div>
                <div class="dsz-space-bar" style="width:40px;height:16px;"></div>
              </div>
            </div>
            <div class="dsz-preview-row">
              <span class="dsz-preview-label">Components</span>
              <div class="dsz-comp-pills">
                <span class="dsz-comp-pill">Button</span>
                <span class="dsz-comp-pill">Input</span>
                <span class="dsz-comp-pill">Toggle</span>
                <span class="dsz-comp-pill">Date</span>
                <span class="dsz-comp-pill">Tabs</span>
                <span class="dsz-comp-pill dsz-comp-more">+more</span>
              </div>
            </div>
          </div>

          <!-- Footer — CTA only, no date chips -->
          <div class="dsz-card-footer dsz-footer-solo">
            <a href="/projects/project-5" class="dsz-cta">View Case Study &rarr;</a>
          </div>

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
