const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-illustration"><div class="illus-placeholder"><span class="illus-icon">🎨</span><span class="illus-label">your self-portrait<br>illustration here</span></div></div>
  <div class="contact-inner">
    <p class="contact-eyebrow reveal">Get in touch</p>
    <h2 class="contact-title reveal reveal-delay-1">Let's grab<br>a <span class="coffee">coffee</span> ☕</h2>
    <p class="contact-sub reveal reveal-delay-2">Whether it's a role, a collab, or just a good conversation about design — I'm always up for it.</p>
    <div class="contact-links reveal reveal-delay-3">
      <a href="mailto:tyaginikunj26@gmail.com" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Email</span><span class="contact-link-value">tyaginikunj26@gmail.com</span></div><span class="contact-link-arrow">↗</span></a>
      <a href="https://linkedin.com/in/nikunj-tyagi" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">LinkedIn</span><span class="contact-link-value">nikunj-tyagi</span></div><span class="contact-link-arrow">↗</span></a>
      <a href="https://instagram.com" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Instagram</span><span class="contact-link-value">@nikunj</span></div><span class="contact-link-arrow">↗</span></a>
    </div>
    <div class="contact-footer reveal reveal-delay-4">
      <span class="contact-footer-name">Nikunj Tyagi · Product Designer</span>
      <span class="contact-footer-hand">made with ☕ & obsession</span>
      <span class="contact-footer-copy">© 2025</span>
    </div>
  </div>
</section>`;

export function ContactSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
