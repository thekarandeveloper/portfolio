const html = `<section class="journey" id="journey">
  <div class="journey-inner">
    <div class="journey-left">
      <h2 class="journey-title reveal reveal-delay-1">From building<br>to <em>designing</em><br>the thing.</h2>
      <p class="journey-sub reveal reveal-delay-2">A path that started with code, found its heart in design, and lives at the intersection of both.</p>
    </div>
    <div class="journey-timeline">
      <div class="timeline-item" data-tl-delay="0">
        <div class="timeline-dot-wrap">
          <div class="timeline-dot active"><div class="tl-ring"></div></div>
          <div class="tl-line"></div>
        </div>
        <div class="timeline-content">
          <p class="timeline-date">Oct 2023 &ndash; Present</p>
          <p class="timeline-role">UX / Product Designer</p>
          <p class="timeline-company">Air IQ Online Pvt. Ltd.</p>
          <p class="timeline-detail">Designed the complete B2B flight booking experience for 25,000+ travel agents. Currently leading hotel design. Converted from trainee to full-time after 4 months.</p>
        </div>
      </div>
      <div class="timeline-item" data-tl-delay="120">
        <div class="timeline-dot-wrap">
          <div class="timeline-dot"><div class="tl-ring"></div></div>
          <div class="tl-line"></div>
        </div>
        <div class="timeline-content">
          <p class="timeline-date">Mar 2025 &ndash; Aug 2025</p>
          <p class="timeline-role">Freelance Product Designer</p>
          <p class="timeline-company">Care Autor</p>
          <p class="timeline-detail">Led UX research and design for a B2C healthcare platform combining Alzheimer&rsquo;s, Autism, and Fitness into one cohesive product.</p>
        </div>
      </div>
      <div class="timeline-item" data-tl-delay="240">
        <div class="timeline-dot-wrap">
          <div class="timeline-dot"><div class="tl-ring"></div></div>
          <div class="tl-line"></div>
        </div>
        <div class="timeline-content">
          <p class="timeline-date">Jun 2024 &ndash; Jul 2024</p>
          <p class="timeline-role">UX Design Intern</p>
          <p class="timeline-company">Infosys</p>
          <p class="timeline-detail">Designed BibloFi &mdash; an iOS Library Management System. Led a team of 10 developers, translating SRS requirements into structured flows and interfaces.</p>
        </div>
      </div>
      <div class="timeline-item" data-tl-delay="360">
        <div class="timeline-dot-wrap">
          <div class="timeline-dot"><div class="tl-ring"></div></div>
        </div>
        <div class="timeline-content">
          <p class="timeline-date">2023 &middot; College</p>
          <p class="timeline-role">iOS Developer &rarr; Designer</p>
          <p class="timeline-company">ISDP &mdash; Apple &amp; Infosys Program</p>
          <p class="timeline-detail">Selected for a 6-month Apple &amp; Infosys iOS Student Development Program. Built my first app &mdash; and discovered that design was my real calling.</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

export function JourneySection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
