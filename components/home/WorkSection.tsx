const html = `<section class="work" id="work">
  <p class="section-label reveal">Selected work</p>
  <h2 class="section-title reveal reveal-delay-1">Things I've built<br><em>& shaped.</em></h2>
  <div class="work-grid">
    <a class="project-card" href="/projects/airiq" data-delay="0">
      <span class="proj-num">01</span>
      <div>
        <p class="proj-company">Air IQ · Full-time</p>
        <h3 class="proj-title">Simplifying B2B flight booking for 25,000+ travel agents</h3>
        <p class="proj-desc">Designed the 0→1 booking experience across web and mobile — itinerary search, availability, issuing, and seat booking for high-pressure agent workflows.</p>
        <div class="proj-tags"><span class="proj-tag">B2B / Travel Tech</span><span class="proj-tag">Web & Mobile</span><span class="proj-tag">End-to-end</span></div>
        <div class="proj-metrics"><div><p class="metric-val">30–40%</p><p class="metric-label">Faster booking</p></div><div><p class="metric-val">2×</p><p class="metric-label">Clearer decisions</p></div></div>
        <span class="proj-cta">View case study →</span>
      </div>
      <div class="proj-visual">
        <div class="mock-screen"><div class="mock-bar"><div class="mock-dot" style="background:#F7C5D0;"></div><div class="mock-dot" style="background:#EDE5DE;"></div><div class="mock-dot" style="background:#E8DDD6;"></div></div><div class="mock-body"><div class="mock-row" style="width:80%;"></div><div class="mock-row" style="width:60%;"></div><div style="height:5px;"></div><div class="mock-grid"><div class="mock-card-sm2"></div><div class="mock-card-sm2"></div><div class="mock-card-sm2"></div><div class="mock-card-sm2"></div></div><div style="height:5px;"></div><div class="mock-row" style="width:75%;"></div></div></div>
      </div>
    </a>
    <a class="project-card" href="/projects/care-autor" data-delay="150">
      <span class="proj-num">02</span>
      <div>
        <p class="proj-company">Freelance · Care Autor</p>
        <h3 class="proj-title">One platform, three care journeys — Alzheimer's, Autism & Fitness</h3>
        <p class="proj-desc">Led UX research and design for a B2C healthcare platform — translating complex needs into empathetic, simple flows for caregivers and patients.</p>
        <div class="proj-tags"><span class="proj-tag">Healthcare</span><span class="proj-tag">Mobile App</span><span class="proj-tag">Accessibility</span></div>
        <div class="proj-metrics"><div><p class="metric-val">3</p><p class="metric-label">Modules unified</p></div></div>
        <span class="proj-cta">View case study →</span>
      </div>
      <div class="proj-visual" style="background:var(--bg4);"><div style="display:flex;gap:14px;align-items:flex-end;"><div class="mock-phone" style="width:100px;height:172px;"><div class="mock-phone-bar"><div class="mock-phone-notch"></div></div><div class="mock-phone-body"><div style="height:7px;width:70%;background:var(--surface);border-radius:2px;"></div><div style="height:28px;background:var(--surface);border-radius:4px;margin-top:4px;"></div><div style="height:28px;background:var(--surface);border-radius:4px;"></div></div></div><div class="mock-phone" style="width:100px;height:172px;transform:translateY(-12px);opacity:0.5;"><div class="mock-phone-bar"><div class="mock-phone-notch"></div></div><div class="mock-phone-body"><div style="height:44px;background:var(--surface);border-radius:4px;margin-top:4px;"></div></div></div></div></div>
    </a>
    <div class="small-cards-row">
      <a class="project-card-sm" href="/projects/biblofi" data-delay="0">
        <span class="proj-num" style="font-size:3rem;top:1.25rem;right:1.5rem;">03</span>
        <div class="proj-visual-sm"><div class="mock-phone" style="width:88px;height:118px;border-radius:12px;"><div class="mock-phone-bar" style="height:16px;"><div class="mock-phone-notch" style="width:20px;height:3px;"></div></div><div class="mock-phone-body" style="gap:4px;"><div style="height:26px;background:var(--surface);border-radius:3px;"></div><div style="height:6px;width:70%;background:var(--bg4);border-radius:2px;"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:2px;"><div style="height:22px;background:var(--surface);border-radius:3px;"></div><div style="height:22px;background:var(--surface);border-radius:3px;"></div></div></div></div></div>
        <p class="proj-company">Infosys · Internship</p>
        <h3 class="proj-title-sm">BibloFi — Library Management System</h3>
        <p class="proj-desc-sm">End-to-end mobile UX, led a team of 10 developers.</p>
        <div class="proj-tags" style="margin-bottom:0.85rem;"><span class="proj-tag">Mobile App</span><span class="proj-tag">Team Lead</span></div>
        <span class="proj-cta">View case study →</span>
      </a>
      <a class="project-card-sm" href="/projects/ecotrack" data-delay="150">
        <span class="proj-num" style="font-size:3rem;top:1.25rem;right:1.5rem;">04</span>
        <div class="proj-visual-sm" style="background:linear-gradient(135deg,#f0faf0,#d4efd4);"><div style="text-align:center;"><div style="font-size:2rem;margin-bottom:0.25rem;">🌱</div><p style="font-family:var(--hand);font-style:italic;font-size:0.78rem;color:rgba(40,120,40,0.6);">EcoTrack</p></div></div>
        <p class="proj-company">Personal Project</p>
        <h3 class="proj-title-sm">EcoTrack — Carbon Footprint Tracker</h3>
        <p class="proj-desc-sm">Sustainability app helping users track and reduce daily carbon footprint.</p>
        <div class="proj-tags" style="margin-bottom:0.85rem;"><span class="proj-tag">Mobile App</span><span class="proj-tag">Sustainability</span></div>
        <span class="proj-cta">View case study →</span>
      </a>
    </div>
  </div>
</section>`;

export function WorkSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
