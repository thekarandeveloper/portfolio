const html = `<section class="work" id="work">

  <div class="work-heading-wrap reveal">
    <h2 class="work-title-main">Here&rsquo;s where ideas</h2>
    <span class="work-title-script">got real.</span>
  </div>

  <div class="bento-work-grid">

    <!-- Air IQ — wide (span 2), row 1 -->
    <a class="bento-work-card wide reveal reveal-delay-2" href="/projects/airiq" style="background:linear-gradient(180deg,#eef6fc 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">✈️</div>
        </div>
        <h3 class="bento-proj-title">Air IQ</h3>
        <p class="bento-proj-desc">Simplifying B2B flight booking for 25,000+ travel agents across India.</p>
        <div class="bento-proj-visual">
          <div class="bento-image-frame bento-image-frame-wide">
            <img src="/thumbnails/airiq.jpg" alt="Air IQ booking interface preview" loading="lazy" />
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

    <!-- Care Autor — span 1, row 1 -->
    <a class="bento-work-card reveal reveal-delay-3" href="/projects/care-autor" style="background:linear-gradient(180deg,#f2eeff 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">🏥</div>
        </div>
        <h3 class="bento-proj-title">Care Autor</h3>
        <p class="bento-proj-desc">One platform for three care journeys: Alzheimer&rsquo;s, Autism &amp; Fitness.</p>
        <div class="bento-proj-visual" style="justify-content:center;">
          <div class="bento-mock" style="width:105px;border-radius:14px;transform:rotate(2deg);">
            <div class="bento-mock-bar" style="background:rgba(123,107,224,0.07);">
              <div class="bento-mock-dot" style="background:#ddd;"></div>
            </div>
            <div class="bento-mock-body">
              <div style="height:32px;background:rgba(123,107,224,0.10);border-radius:4px;margin-bottom:4px;"></div>
              <div class="bento-mock-row" style="width:80%;background:rgba(0,0,0,0.05);"></div>
              <div class="bento-mock-row" style="width:60%;background:rgba(0,0,0,0.04);"></div>
            </div>
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

    <!-- Design System — span 1, row 2 -->
    <a class="bento-work-card reveal reveal-delay-2" href="#" style="background:linear-gradient(180deg,#fef0f7 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">🎨</div>
        </div>
        <h3 class="bento-proj-title">Design System</h3>
        <p class="bento-proj-desc">A modular component library and token system for consistent product experiences.</p>
        <div class="bento-proj-visual" style="justify-content:center;">
          <div style="display:flex;flex-direction:column;gap:7px;width:112px;">
            <div style="display:flex;gap:5px;">
              <div style="width:24px;height:24px;border-radius:6px;background:rgba(219,39,119,0.45);"></div>
              <div style="width:24px;height:24px;border-radius:6px;background:rgba(26,18,16,0.55);"></div>
              <div style="width:24px;height:24px;border-radius:6px;background:rgba(122,96,88,0.38);"></div>
              <div style="width:24px;height:24px;border-radius:6px;background:rgba(219,39,119,0.14);"></div>
            </div>
            <div style="height:6px;background:rgba(0,0,0,0.07);border-radius:3px;width:100%;"></div>
            <div style="height:6px;background:rgba(219,39,119,0.12);border-radius:3px;width:72%;"></div>
            <div style="height:6px;background:rgba(0,0,0,0.04);border-radius:3px;width:86%;"></div>
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

    <!-- BiblioFi — span 1, row 2 -->
    <a class="bento-work-card reveal reveal-delay-3" href="/projects/biblofi" style="background:linear-gradient(180deg,#fef8f0 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">📚</div>
        </div>
        <h3 class="bento-proj-title">BiblioFi</h3>
        <p class="bento-proj-desc">iOS library management reimagining book discovery and borrowing.</p>
        <div class="bento-proj-visual" style="justify-content:center;">
          <div class="bento-image-frame bento-image-frame-phone">
            <img src="/thumbnails/biblofi.jpg" alt="BiblioFi iOS app preview" loading="lazy" />
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

    <!-- EcoTrack — span 1, row 2 -->
    <a class="bento-work-card reveal reveal-delay-4" href="/projects/ecotrack" style="background:linear-gradient(180deg,#edf8f1 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">🌱</div>
        </div>
        <h3 class="bento-proj-title">EcoTrack</h3>
        <p class="bento-proj-desc">A personal carbon footprint tracker that makes sustainability feel achievable.</p>
        <div class="bento-proj-visual" style="justify-content:center;">
          <div class="bento-mock" style="width:90px;border-radius:14px;transform:rotate(-1deg);">
            <div class="bento-mock-bar" style="height:14px;background:rgba(45,125,67,0.06);justify-content:center;">
              <div style="width:16px;height:3px;background:rgba(0,0,0,0.09);border-radius:2px;"></div>
            </div>
            <div class="bento-mock-body">
              <div style="height:28px;background:rgba(45,125,67,0.14);border-radius:4px;display:flex;align-items:center;justify-content:center;">
                <div style="width:18px;height:18px;border-radius:50%;border:2px solid rgba(45,125,67,0.35);"></div>
              </div>
              <div class="bento-mock-row" style="width:70%;background:rgba(0,0,0,0.05);"></div>
              <div class="bento-mock-row" style="width:50%;background:rgba(45,125,67,0.10);"></div>
            </div>
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

  </div>
</section>`;

export function WorkSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
