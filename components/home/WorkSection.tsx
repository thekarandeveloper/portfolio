const html = `<section class="work" id="work">

  <div class="work-heading-wrap reveal">
    <h2 class="work-title-main">Here&rsquo;s where ideas</h2>
    <span class="work-title-script">got real.</span>
  </div>

  <div class="bento-work-grid">

    <!-- ROW 1: small LEFT (EcoTrack) | big RIGHT (Air IQ) -->

    <!-- EcoTrack — narrow (2/5), left -->
    <a class="bento-work-card narrow reveal reveal-delay-2" href="/projects/ecotrack" style="background:linear-gradient(180deg,#edf8f1 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">&#127807;</div>
          <div class="bento-tags">
            <span class="bento-tag" style="background:rgba(45,125,67,0.10);color:#14532D;">Mobile</span>
            <span class="bento-tag" style="background:rgba(45,125,67,0.07);color:#14532D;">Sustainability</span>
            <span class="bento-tag" style="background:rgba(45,125,67,0.07);color:#14532D;">Data Viz</span>
          </div>
        </div>
        <h3 class="bento-proj-title">Making sustainability feel personal and achievable</h3>
        <p class="bento-proj-desc">A personal carbon footprint tracker that turns abstract environmental data into daily, actionable habits people can actually stick to.</p>
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

    <!-- Air IQ — 2 cols, right (wide) -->
    <a class="bento-work-card wide reveal reveal-delay-3" href="/projects/airiq" style="background:linear-gradient(180deg,#eef6fc 0%,#ffffff 100%);">
      <div class="bento-plane-layer">
        <div class="bento-route-line" style="top:38%;"></div>
        <div class="bento-route-line" style="top:64%;opacity:0.55;"></div>
        <span class="bento-plane bento-plane-1">&#9992;</span>
        <span class="bento-plane bento-plane-2">&#9992;</span>
        <span class="bento-plane bento-plane-3">&#9992;</span>
        <div class="bento-waypoint" style="top:38%;left:22%;animation-delay:0s;"></div>
        <div class="bento-waypoint" style="top:38%;left:58%;animation-delay:-1.2s;"></div>
        <div class="bento-waypoint" style="top:64%;left:38%;animation-delay:-2.4s;"></div>
        <div class="bento-waypoint" style="top:64%;left:74%;animation-delay:-0.8s;"></div>
      </div>
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">&#9992;&#65039;</div>
          <div class="bento-tags">
            <span class="bento-tag" style="background:rgba(30,144,255,0.10);color:#1565C0;">0&rarr;1 Design</span>
            <span class="bento-tag" style="background:rgba(30,144,255,0.07);color:#1565C0;">B2B</span>
            <span class="bento-tag" style="background:rgba(30,144,255,0.07);color:#1565C0;">Web &amp; Mobile</span>
            <span class="bento-tag" style="background:rgba(30,144,255,0.07);color:#1565C0;">Travel</span>
          </div>
        </div>
        <h3 class="bento-proj-title">Simplifying complex flight booking systems</h3>
        <p class="bento-proj-desc">Designed a 0&rarr;1 booking experience across web and mobile for 25,000+ travel agents&mdash;improving speed, clarity, and decision-making in high-pressure workflows.</p>
        <div class="bento-proj-visual">
          <div class="bento-image-frame bento-image-frame-wide">
            <img src="/thumbnails/airiq.jpg" alt="Air IQ booking interface preview" loading="lazy" />
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

    <!-- ROW 2: big LEFT (Care Autor) | small RIGHT (BiblioFi) -->

    <!-- Care Autor — 2 cols, left (wide) -->
    <a class="bento-work-card wide reveal reveal-delay-2" href="/projects/care-autor" style="background:linear-gradient(180deg,#f2eeff 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">&#127973;&#65039;</div>
          <div class="bento-tags">
            <span class="bento-tag" style="background:rgba(123,107,224,0.10);color:#5B48C0;">0&rarr;1 Design</span>
            <span class="bento-tag" style="background:rgba(123,107,224,0.07);color:#5B48C0;">Healthcare</span>
            <span class="bento-tag" style="background:rgba(123,107,224,0.07);color:#5B48C0;">Multi-platform</span>
          </div>
        </div>
        <h3 class="bento-proj-title">One platform for three distinct care journeys</h3>
        <p class="bento-proj-desc">Unified Alzheimer&rsquo;s, Autism &amp; Fitness care into one calm, accessible interface for caregivers who are already overwhelmed.</p>
        <div class="bento-proj-visual">
          <div class="bento-mock" style="width:180px;border-radius:14px;transform:rotate(1.5deg);">
            <div class="bento-mock-bar" style="background:rgba(123,107,224,0.07);">
              <div class="bento-mock-dot" style="background:#ddd;"></div>
              <div class="bento-mock-dot" style="background:#e5e5e5;"></div>
            </div>
            <div class="bento-mock-body">
              <div style="height:40px;background:rgba(123,107,224,0.10);border-radius:6px;margin-bottom:6px;"></div>
              <div class="bento-mock-row" style="width:85%;background:rgba(0,0,0,0.05);"></div>
              <div class="bento-mock-row" style="width:65%;background:rgba(0,0,0,0.04);"></div>
              <div class="bento-mock-grid" style="margin-top:6px;">
                <div class="bento-mock-block" style="background:rgba(123,107,224,0.12);"></div>
                <div class="bento-mock-block" style="background:rgba(123,107,224,0.07);"></div>
              </div>
            </div>
          </div>
        </div>
        <span class="bento-cta">View Case Study &rarr;</span>
      </div>
    </a>

    <!-- BiblioFi — narrow (2/5), right -->
    <a class="bento-work-card narrow reveal reveal-delay-3" href="/projects/biblofi" style="background:linear-gradient(180deg,#fef8f0 0%,#ffffff 100%);">
      <div class="bento-card-inner">
        <div class="bento-card-header">
          <div class="bento-icon-badge">&#128218;</div>
          <div class="bento-tags">
            <span class="bento-tag" style="background:rgba(200,112,58,0.10);color:#92400E;">iOS</span>
            <span class="bento-tag" style="background:rgba(200,112,58,0.07);color:#92400E;">0&rarr;1</span>
            <span class="bento-tag" style="background:rgba(200,112,58,0.07);color:#92400E;">Solo</span>
            <span class="bento-tag" style="background:rgba(200,112,58,0.07);color:#92400E;">6 Weeks</span>
          </div>
        </div>
        <h3 class="bento-proj-title">Reimagining how readers discover &amp; borrow books</h3>
        <p class="bento-proj-desc">iOS library management shipped solo in 6 weeks, 0 to App Store&mdash;making the quiet joy of reading feel social without being loud about it.</p>
        <div class="bento-proj-visual" style="justify-content:center;">
          <div class="bento-image-frame bento-image-frame-phone">
            <img src="/thumbnails/biblofi.jpg" alt="BiblioFi iOS app preview" loading="lazy" />
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
