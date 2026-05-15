const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-flex">

    <!-- LEFT: interactive search bar -->
    <div class="contact-left reveal from-left">
      <div class="sb-wrap">
        <div class="sb-input-row">
          <svg class="sb-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
          <input class="sb-input" id="sbInput" type="text" placeholder="What do I work on?" autocomplete="off" spellcheck="false" />
        </div>
        <p class="sb-filter-label">What do you want to know?</p>
        <div class="sb-pills" id="sbPills">
          <button class="sb-pill active" data-cat="work" data-color="blue">Work &amp; design</button>
          <button class="sb-pill" data-cat="personal" data-color="coral">Personal</button>
          <button class="sb-pill" data-cat="likes" data-color="amber">Likes &amp; dislikes</button>
          <button class="sb-pill" data-cat="funny" data-color="green">Funny things</button>
        </div>
        <div id="sbResults"></div>
      </div>
    </div>

    <!-- RIGHT: contact links -->
    <div class="contact-right">
      <h2 class="contact-title reveal from-right">Let&rsquo;s grab<br>a <span class="coffee">coffee</span> ☕</h2>
      <p class="contact-sub reveal reveal-delay-1 from-right">Whether it&rsquo;s a role, a collab, or just a good conversation about design — I&rsquo;m always up for it.</p>
      <div class="contact-links reveal reveal-delay-2 from-right">
        <a href="mailto:tyaginikunj26@gmail.com" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Email</span><span class="contact-link-value">tyaginikunj26@gmail.com</span></div><span class="contact-link-arrow">↗</span></a>
        <a href="https://www.linkedin.com/in/nikunj-tyagi26/" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">LinkedIn</span><span class="contact-link-value">nikunj-tyagi26</span></div><span class="contact-link-arrow">↗</span></a>
        <a href="https://instagram.com" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Instagram</span><span class="contact-link-value">@nikunj</span></div><span class="contact-link-arrow">↗</span></a>
      </div>
      <div class="contact-footer reveal reveal-delay-3">
        <span class="contact-footer-name">Nikunj Tyagi · Product Designer</span>
        <span class="contact-footer-hand">made with ☕ &amp; obsession</span>
        <span class="contact-footer-copy">© 2025</span>
      </div>
    </div>

  </div>
</section>`;

export function ContactSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
