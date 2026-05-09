const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-flex">

    <!-- LEFT: gravity playground -->
    <div class="contact-left contact-gravity-wrap reveal from-left" id="gravCanvas">
      <div class="grav-shape gs1"></div>
      <div class="grav-shape gs2"></div>
      <div class="grav-shape gs3"></div>
      <div class="grav-shape gs4"></div>
      <div class="grav-shape gs5"></div>
      <div class="grav-shape gs6"></div>
      <div class="grav-shape gs7"></div>
      <div class="grav-shape gs8"></div>
      <div class="grav-shape gs9"></div>
      <div class="grav-shape gs10"></div>
      <div class="grav-shape gs11"></div>
      <div class="grav-shape gs12"></div>
      <div class="grav-shape gs13"></div>
      <div class="grav-shape gs14"></div>
      <div class="grav-shape gs15"></div>
      <span class="grav-hint">— move your cursor —</span>
    </div>

    <!-- RIGHT: contact links -->
    <div class="contact-right">
      <h2 class="contact-title reveal from-right">Let&rsquo;s grab<br>a <span class="coffee">coffee</span> ☕</h2>
      <p class="contact-sub reveal reveal-delay-1 from-right">Whether it&rsquo;s a role, a collab, or just a good conversation about design — I&rsquo;m always up for it.</p>
      <div class="contact-links reveal reveal-delay-2 from-right">
        <a href="mailto:tyaginikunj26@gmail.com" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Email</span><span class="contact-link-value">tyaginikunj26@gmail.com</span></div><span class="contact-link-arrow">↗</span></a>
        <a href="https://linkedin.com/in/nikunj-tyagi" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">LinkedIn</span><span class="contact-link-value">nikunj-tyagi</span></div><span class="contact-link-arrow">↗</span></a>
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
