const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-flex">



    <!-- LEFT: google search mock -->
    <div class="contact-left reveal from-left">
      <div class="gsearch-wrap">
        <div class="gsearch-logo"><span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span></div>
        <div class="gsearch-bar">
          <svg class="gsearch-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#9aa0a6" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="#9aa0a6" stroke-width="2" stroke-linecap="round"/></svg>
          <span class="gsearch-query-text" id="gsearchQuery"></span><span class="gsearch-caret" id="gsearchCaret">|</span>
        </div>
        <div class="gsearch-results">
          <div class="gsearch-item"><div class="gsearch-item-icon">✦</div><span>Product Designer</span><span class="gsearch-item-tag">role</span></div>
          <div class="gsearch-item"><div class="gsearch-item-icon">✦</div><span>UX Researcher</span><span class="gsearch-item-tag">role</span></div>
          <div class="gsearch-item"><div class="gsearch-item-icon">✦</div><span>Problem Solver</span><span class="gsearch-item-tag">trait</span></div>
          <div class="gsearch-item"><div class="gsearch-item-icon">✦</div><span>Systems Thinker</span><span class="gsearch-item-tag">trait</span></div>
          <div class="gsearch-item"><div class="gsearch-item-icon">☕</div><span>Coffee Enthusiast</span><span class="gsearch-item-tag">obviously</span></div>
        </div>
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
