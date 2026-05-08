const html = `<section class="work" id="work">
  <!-- Tab bar -->
  <div class="work-tabs" id="workTabs">
    <button class="work-tab active" data-filter="all">All</button>
    <button class="work-tab" data-filter="case-study">Case Studies</button>
    <button class="work-tab" data-filter="design-system">Design System</button>
    <button class="work-tab" data-filter="artwork">Artwork</button>
  </div>

  <!-- All / Case Studies pane -->
  <div class="work-cat-pane active" id="pane-all">
    <div class="work-grid">

      <a class="project-card" href="/projects/airiq" data-delay="0" data-category="case-study">
        <span class="proj-num">01</span>
        <div class="proj-info">
          <p class="proj-company">Air IQ · Full-time</p>
          <h3 class="proj-title">Simplifying B2B flight booking for 25,000+ travel agents</h3>
          <div class="proj-tags"><span class="proj-tag">B2B / Travel Tech</span><span class="proj-tag">End-to-end</span></div>
          <span class="proj-cta">View case study →</span>
        </div>
        <div class="proj-visual">
          <div class="mock-screen"><div class="mock-bar"><div class="mock-dot" style="background:#ddd;"></div><div class="mock-dot" style="background:#e5e5e5;"></div><div class="mock-dot" style="background:#e0e0e0;"></div></div><div class="mock-body"><div class="mock-row" style="width:80%;"></div><div class="mock-row" style="width:60%;"></div><div style="height:5px;"></div><div class="mock-grid"><div class="mock-card-sm2"></div><div class="mock-card-sm2"></div><div class="mock-card-sm2"></div><div class="mock-card-sm2"></div></div></div></div>
        </div>
      </a>

      <a class="project-card" href="/projects/care-autor" data-delay="80" data-category="case-study">
        <span class="proj-num">02</span>
        <div class="proj-info">
          <p class="proj-company">Freelance · Care Autor</p>
          <h3 class="proj-title">One platform, three care journeys — Alzheimer's, Autism &amp; Fitness</h3>
          <div class="proj-tags"><span class="proj-tag">Healthcare</span><span class="proj-tag">Accessibility</span></div>
          <span class="proj-cta">View case study →</span>
        </div>
        <div class="proj-visual" style="background:var(--bg4);">
          <div style="display:flex;gap:14px;align-items:flex-end;"><div class="mock-phone" style="width:90px;height:150px;"><div class="mock-phone-bar"><div class="mock-phone-notch"></div></div><div class="mock-phone-body"><div style="height:7px;width:70%;background:var(--surface);border-radius:2px;"></div><div style="height:28px;background:var(--surface);border-radius:4px;margin-top:4px;"></div></div></div><div class="mock-phone" style="width:90px;height:150px;transform:translateY(-10px);opacity:0.45;"><div class="mock-phone-bar"><div class="mock-phone-notch"></div></div><div class="mock-phone-body"><div style="height:40px;background:var(--surface);border-radius:4px;margin-top:4px;"></div></div></div></div>
        </div>
      </a>

      <a class="project-card" href="/projects/biblofi" data-delay="160" data-category="case-study">
        <span class="proj-num">03</span>
        <div class="proj-info">
          <p class="proj-company">Infosys · Internship</p>
          <h3 class="proj-title">BibloFi — Library Management System</h3>
          <div class="proj-tags"><span class="proj-tag">Mobile App</span><span class="proj-tag">Team Lead</span></div>
          <span class="proj-cta">View case study →</span>
        </div>
        <div class="proj-visual">
          <div class="mock-phone" style="width:80px;height:110px;border-radius:12px;"><div class="mock-phone-bar" style="height:14px;"><div class="mock-phone-notch" style="width:18px;height:3px;"></div></div><div class="mock-phone-body" style="gap:4px;"><div style="height:24px;background:var(--surface);border-radius:3px;"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:2px;"><div style="height:20px;background:var(--surface);border-radius:3px;"></div><div style="height:20px;background:var(--surface);border-radius:3px;"></div></div></div></div>
        </div>
      </a>

      <a class="project-card" href="/projects/ecotrack" data-delay="240" data-category="case-study">
        <span class="proj-num">04</span>
        <div class="proj-info">
          <p class="proj-company">Personal Project</p>
          <h3 class="proj-title">EcoTrack — Carbon Footprint Tracker</h3>
          <div class="proj-tags"><span class="proj-tag">Mobile App</span><span class="proj-tag">Sustainability</span></div>
          <span class="proj-cta">View case study →</span>
        </div>
        <div class="proj-visual" style="background:linear-gradient(135deg,#f2f2f2,#e8e8e8);">
          <div style="text-align:center;"><div style="font-size:2.8rem;margin-bottom:0.3rem;">🌱</div><p style="font-family:var(--hand);font-style:italic;font-size:0.8rem;color:rgba(0,0,0,0.3);">EcoTrack</p></div>
        </div>
      </a>

    </div>
  </div>

  <!-- Design System pane -->
  <div class="work-cat-pane" id="pane-design-system">
    <div class="work-empty">Design system work coming soon — currently refining the documentation.</div>
  </div>

  <!-- Artwork pane -->
  <div class="work-cat-pane" id="pane-artwork">
    <div class="work-empty">Artwork &amp; visual explorations dropping soon.</div>
  </div>
</section>`;

export function WorkSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
