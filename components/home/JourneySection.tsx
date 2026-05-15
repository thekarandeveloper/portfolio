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
          <p class="timeline-role">UX Designer</p>
          <p class="timeline-company">Air IQ Online Pvt. Ltd.</p>
          <p class="timeline-detail">Created the end-to-end flight booking flow with responsive design across desktop and mobile. Currently leading hotel search and booking experience.</p>
        </div>
      </div>
      <div class="timeline-item" data-tl-delay="120">
        <div class="timeline-dot-wrap">
          <div class="timeline-dot"><div class="tl-ring"></div></div>
          <div class="tl-line"></div>
        </div>
        <div class="timeline-content">
          <p class="timeline-date">2025 &ndash; Present</p>
          <p class="timeline-role">Freelance Product Designer</p>
          <p class="timeline-company">Care Avatar Pvt. Limited</p>
          <p class="timeline-detail">Designed three distinct care experiences &mdash; an Alzheimer&rsquo;s support planner, an Autism companion with structured daily routines, and Memory Lane, a lessons platform for kids.</p>
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
          <p class="timeline-detail">Designed BiblioFi &mdash; a smart library management app that made discovering and borrowing books feel effortless. Led the end-to-end design from flows to final interface.</p>
        </div>
      </div>
      <div class="timeline-item" data-tl-delay="360">
        <div class="timeline-dot-wrap">
          <div class="timeline-dot"><div class="tl-ring"></div></div>
        </div>
        <div class="timeline-content">
          <p class="timeline-date">2023 &middot; College</p>
          <p class="timeline-role">The moment it clicked.</p>
          <p class="timeline-company">ISDP &mdash; Apple &amp; Infosys Program</p>
          <p class="timeline-detail">Selected for a 6-month Apple &amp; Infosys iOS development program. Wrote my first lines of code, shipped my first app &mdash; and somewhere in that process, realised I cared more about how it felt than how it worked. That was the shift.</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

export function JourneySection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
