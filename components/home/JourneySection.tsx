const html = `<section class="journey" id="journey">
  <div class="journey-inner">
    <div class="journey-left">
      <p class="section-label reveal">Journey so far</p>
      <h2 class="section-title reveal reveal-delay-1" style="font-size:clamp(1.8rem,3vw,2.5rem);margin-bottom:1rem;">From building<br>to <em>designing</em><br>the thing.</h2>
      <p class="reveal reveal-delay-2" style="font-size:0.83rem;color:var(--ink3);line-height:1.8;margin-top:1rem;">A path that started with code, found its heart in design, and lives at the intersection of both.</p>
    </div>
    <div>
      <div class="timeline-item" data-tl-delay="0"><div class="timeline-dot-wrap"><div class="timeline-dot active"></div></div><div><p class="timeline-date">Oct 2023 – Present</p><p class="timeline-role">UX / Product Designer</p><p class="timeline-company">Air IQ Online Pvt. Ltd.</p><p class="timeline-detail">Designed the complete B2B flight booking experience for 25,000+ travel agents. Currently leading hotel design. Converted from trainee to full-time after 4 months.</p></div></div>
      <div class="timeline-item" data-tl-delay="100"><div class="timeline-dot-wrap"><div class="timeline-dot"></div></div><div><p class="timeline-date">Mar 2025 – Aug 2025</p><p class="timeline-role">Freelance Product Designer</p><p class="timeline-company">Care Autor</p><p class="timeline-detail">Led UX research and design for a B2C healthcare platform combining Alzheimer's, Autism, and Fitness into one cohesive product.</p></div></div>
      <div class="timeline-item" data-tl-delay="200"><div class="timeline-dot-wrap"><div class="timeline-dot"></div></div><div><p class="timeline-date">Jun 2024 – Jul 2024</p><p class="timeline-role">UX Design Intern</p><p class="timeline-company">Infosys</p><p class="timeline-detail">Designed BibloFi — an iOS Library Management System. Led a team of 10 developers, translating SRS requirements into structured flows and interfaces.</p></div></div>
      <div class="timeline-item" data-tl-delay="300"><div class="timeline-dot-wrap"><div class="timeline-dot"></div></div><div><p class="timeline-date">2023 · College</p><p class="timeline-role">iOS Developer → Designer</p><p class="timeline-company">ISDP — Apple & Infosys Program</p><p class="timeline-detail">Selected for a 6-month Apple & Infosys iOS Student Development Program. Built my first app — and discovered that design was my real calling.</p></div></div>
    </div>
  </div>
</section>`;

export function JourneySection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
