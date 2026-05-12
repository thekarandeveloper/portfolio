const html = `
<section class="wr-section" id="selected-work">

  <div class="wr-header">
    <span class="wr-header-label">Selected work</span>
    <span class="wr-header-count">4 projects</span>
  </div>

  <div class="wr-list">

    <a class="wr-row reveal" href="/projects/airiq" style="--wr-rot:-1.5deg;--wr-tint:rgba(30,144,255,0.028);">
      <div class="wr-text">
        <div class="wr-meta-row">
          <span>B2B</span><span class="wr-dot"></span>
          <span>Travel</span><span class="wr-dot"></span>
          <span>0&rarr;1</span><span class="wr-dot"></span>
          <span>Solo designer</span>
          <span class="wr-meta-year">2024</span>
        </div>
        <div class="wr-identity">
          <h3 class="wr-name">Air IQ</h3>
          <p class="wr-impact">25,000+ agents. 40% fewer booking errors.</p>
          <p class="wr-desc">Simplifying B2B flight booking for travel agents across India &mdash; turning a chaotic legacy workflow into a calm, scannable experience.</p>
          <p class="wr-constraints">Constraints: legacy system, no design handoff, 3-week sprint</p>
        </div>
        <div class="wr-bottom">
          <span class="wr-role-pill">Led research + design</span>
          <span class="wr-cta">View case study <span class="wr-arrow">&rarr;</span></span>
        </div>
      </div>
      <div class="wr-image-col">
        <div class="wr-image-inner">
          <div class="wr-card">
            <img src="/thumbnails/airiq.jpg" alt="Air IQ booking interface" loading="lazy" />
          </div>
        </div>
      </div>
    </a>

    <a class="wr-row flip reveal reveal-delay-1" href="/projects/care-autor" style="--wr-rot:1.5deg;--wr-tint:rgba(123,107,224,0.028);">
      <div class="wr-text">
        <div class="wr-meta-row">
          <span>Health</span><span class="wr-dot"></span>
          <span>Multi-platform</span><span class="wr-dot"></span>
          <span>0&rarr;1 product</span>
          <span class="wr-meta-year">2024</span>
        </div>
        <div class="wr-identity">
          <h3 class="wr-name">Care Autor</h3>
          <p class="wr-impact">3 care journeys. 1 unified platform.</p>
          <p class="wr-desc">One platform for Alzheimer&rsquo;s, Autism &amp; Fitness &mdash; designing for caregivers who are already overwhelmed, making the interface invisible.</p>
          <p class="wr-constraints">Constraints: 3 distinct user groups, no existing research</p>
        </div>
        <div class="wr-bottom">
          <span class="wr-role-pill">End-to-end design</span>
          <span class="wr-cta">View case study <span class="wr-arrow">&rarr;</span></span>
        </div>
      </div>
      <div class="wr-image-col">
        <div class="wr-image-inner">
          <div class="wr-card wr-ph-care">
            <div class="wr-ph-inner">
              <div class="wr-ph-bar"></div>
              <div class="wr-ph-body">
                <div class="wr-ph-block wr-ph-block-lg" style="background:rgba(123,107,224,0.18);"></div>
                <div class="wr-ph-block" style="width:75%;background:rgba(0,0,0,0.06);"></div>
                <div class="wr-ph-block" style="width:55%;background:rgba(123,107,224,0.10);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a class="wr-row reveal reveal-delay-2" href="/projects/project-5" style="--wr-rot:-2deg;--wr-tint:rgba(219,39,119,0.022);">
      <div class="wr-text">
        <div class="wr-meta-row">
          <span>Design systems</span><span class="wr-dot"></span>
          <span>Component library</span>
          <span class="wr-meta-year">2023</span>
        </div>
        <div class="wr-identity">
          <h3 class="wr-name">Design System</h3>
          <p class="wr-impact">1 system. Used across 4 products.</p>
          <p class="wr-desc">A modular component library and token system for consistent product experiences &mdash; built to scale with the team, not against it.</p>
          <p class="wr-constraints">Constraints: No dedicated systems team, built alongside shipping</p>
        </div>
        <div class="wr-bottom">
          <span class="wr-role-pill">Systems thinking</span>
          <span class="wr-cta">View case study <span class="wr-arrow">&rarr;</span></span>
        </div>
      </div>
      <div class="wr-image-col">
        <div class="wr-image-inner">
          <div class="wr-card wr-ph-ds">
            <div class="wr-ph-inner">
              <div class="wr-ph-ds-swatches">
                <div class="wr-ph-swatch" style="background:rgba(219,39,119,0.50);"></div>
                <div class="wr-ph-swatch" style="background:rgba(26,18,16,0.60);"></div>
                <div class="wr-ph-swatch" style="background:rgba(122,96,88,0.40);"></div>
                <div class="wr-ph-swatch" style="background:rgba(219,39,119,0.18);"></div>
              </div>
              <div class="wr-ph-body" style="margin-top:10px;">
                <div class="wr-ph-block" style="width:100%;background:rgba(0,0,0,0.07);"></div>
                <div class="wr-ph-block" style="width:72%;background:rgba(219,39,119,0.12);"></div>
                <div class="wr-ph-block" style="width:88%;background:rgba(0,0,0,0.04);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a class="wr-row flip reveal reveal-delay-3" href="/projects/biblofi" style="--wr-rot:1deg;--wr-tint:rgba(200,112,58,0.025);">
      <div class="wr-text">
        <div class="wr-meta-row">
          <span>iOS</span><span class="wr-dot"></span>
          <span>Library</span><span class="wr-dot"></span>
          <span>Social</span><span class="wr-dot"></span>
          <span>Solo designer</span>
          <span class="wr-meta-year">2023</span>
        </div>
        <div class="wr-identity">
          <h3 class="wr-name">BiblioFi</h3>
          <p class="wr-impact">Shipped in 6 weeks. 0 to App Store.</p>
          <p class="wr-desc">iOS library management reimagining book discovery and borrowing &mdash; making the quiet joy of reading feel social without being loud about it.</p>
          <p class="wr-constraints">Constraints: Solo, 6-week timeline, no iOS design precedent</p>
        </div>
        <div class="wr-bottom">
          <span class="wr-role-pill">Solo designer</span>
          <span class="wr-cta">View case study <span class="wr-arrow">&rarr;</span></span>
        </div>
      </div>
      <div class="wr-image-col">
        <div class="wr-image-inner">
          <div class="wr-card">
            <img src="/thumbnails/biblofi.jpg" alt="BiblioFi iOS app" loading="lazy" />
          </div>
        </div>
      </div>
    </a>

  </div>
</section>
`;

export function WorkRowSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
