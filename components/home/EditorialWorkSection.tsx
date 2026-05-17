const html = `
<section class="ew-section" id="selected-work">

  <div class="ew-header reveal">
    <span class="ew-label">Selected Work</span>
    <p class="ew-manifesto">5 products shipped. 3 industries.<br>1 consistent belief: complexity is a design failure.</p>
  </div>

  <div class="ew-list">

    <a class="ew-row reveal" href="/projects/airiq" style="--ew-accent:#1E90FF;--ew-tint:rgba(30,144,255,0.035);">
      <span class="ew-num">01</span>
      <div class="ew-body">
        <p class="ew-outcome">Reduced booking time by 35%</p>
        <div class="ew-meta">
          <span class="ew-name">Air IQ</span>
          <span class="ew-sep">/</span>
          <span class="ew-desc">B2B flight booking for 25,000+ travel agents</span>
        </div>
        <div class="ew-bottom">
          <span class="ew-role">Lead Product Designer &middot; 2024</span>
          <span class="ew-constraints">3 months &middot; legacy CRS API &middot; zero mobile scope</span>
        </div>
      </div>
      <div class="ew-thumb-wrap">
        <div class="ew-thumb">
          <img src="/thumbnails/airiq.jpg" alt="Air IQ" loading="lazy" />
        </div>
      </div>
      <span class="ew-arrow">&rarr;</span>
    </a>

    <a class="ew-row reveal reveal-delay-1" href="/projects/biblofi" style="--ew-accent:#C8703A;--ew-tint:rgba(200,112,58,0.035);">
      <span class="ew-num">02</span>
      <div class="ew-body">
        <p class="ew-outcome">0 to shipped in 6 weeks</p>
        <div class="ew-meta">
          <span class="ew-name">BiblioFi</span>
          <span class="ew-sep">/</span>
          <span class="ew-desc">iOS library management reimagining book discovery</span>
        </div>
        <div class="ew-bottom">
          <span class="ew-role">Solo Designer &middot; 2024</span>
          <span class="ew-constraints">6 weeks &middot; solo designer &middot; iOS-first constraint</span>
        </div>
      </div>
      <div class="ew-thumb-wrap">
        <div class="ew-thumb">
          <img src="/thumbnails/biblofi.jpg" alt="BiblioFi" loading="lazy" />
        </div>
      </div>
      <span class="ew-arrow">&rarr;</span>
    </a>

    <a class="ew-row reveal reveal-delay-2" href="/projects/ecotrack" style="--ew-accent:#2D7D43;--ew-tint:rgba(45,125,67,0.035);">
      <span class="ew-num">03</span>
      <div class="ew-body">
        <p class="ew-outcome">Made sustainability feel like self-care</p>
        <div class="ew-meta">
          <span class="ew-name">EcoTrack</span>
          <span class="ew-sep">/</span>
          <span class="ew-desc">Personal carbon footprint tracker for daily habits</span>
        </div>
        <div class="ew-bottom">
          <span class="ew-role">Product Designer &middot; 2024</span>
          <span class="ew-constraints">4 weeks &middot; no research budget &middot; greenfield product</span>
        </div>
      </div>
      <div class="ew-thumb-wrap">
        <div class="ew-thumb ew-thumb-placeholder ew-thumb-eco"></div>
      </div>
      <span class="ew-arrow">&rarr;</span>
    </a>

    <a class="ew-row reveal reveal-delay-3" href="/projects/care-autor" style="--ew-accent:#7B6BE0;--ew-tint:rgba(123,107,224,0.035);">
      <span class="ew-num">04</span>
      <div class="ew-body">
        <p class="ew-outcome">One platform, three care journeys unified</p>
        <div class="ew-meta">
          <span class="ew-name">Care Autor</span>
          <span class="ew-sep">/</span>
          <span class="ew-desc">Healthcare app spanning Alzheimer&rsquo;s, Autism &amp; Fitness</span>
        </div>
        <div class="ew-bottom">
          <span class="ew-role">Lead Product Designer &middot; 2023</span>
          <span class="ew-constraints">8 weeks &middot; 3 user groups &middot; accessibility-first mandate</span>
        </div>
      </div>
      <div class="ew-thumb-wrap">
        <div class="ew-thumb ew-thumb-placeholder ew-thumb-care"></div>
      </div>
      <span class="ew-arrow">&rarr;</span>
    </a>

    <a class="ew-row reveal reveal-delay-4" href="/projects/project-5" style="--ew-accent:#DB2777;--ew-tint:rgba(219,39,119,0.035);">
      <span class="ew-num">05</span>
      <div class="ew-body">
        <p class="ew-outcome">100+ components. Zero inconsistencies.</p>
        <div class="ew-meta">
          <span class="ew-name">Design System</span>
          <span class="ew-sep">/</span>
          <span class="ew-desc">Token-based component library for cross-team consistency</span>
        </div>
        <div class="ew-bottom">
          <span class="ew-role">Design Systems Lead &middot; Ongoing</span>
          <span class="ew-constraints">Ongoing &middot; cross-functional &middot; token-first architecture</span>
        </div>
      </div>
      <div class="ew-thumb-wrap">
        <div class="ew-thumb ew-thumb-placeholder ew-thumb-ds"></div>
      </div>
      <span class="ew-arrow">&rarr;</span>
    </a>

  </div>
</section>`;

export function EditorialWorkSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
