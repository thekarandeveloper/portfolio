const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-flex">

    <!-- LEFT: receipt -->
    <div class="contact-left reveal from-left">
      <div class="receipt-scene">
        <div class="receipt">
          <div class="receipt-header">
            <div class="receipt-logo">NT</div>
            <div class="receipt-name">NIKUNJ TYAGI</div>
            <div class="receipt-role">PRODUCT DESIGNER</div>
          </div>
          <div class="receipt-dash"></div>
          <div class="receipt-meta">
            <span>ORDER #004</span><span>12 MAY 2025</span>
          </div>
          <div class="receipt-dash"></div>
          <div class="receipt-items">
            <div class="receipt-item"><span class="ri-name">Systems thinking</span><span class="ri-dots"></span><span class="ri-val">&#10003; included</span></div>
            <div class="receipt-item"><span class="ri-name">Obsessive detailing</span><span class="ri-dots"></span><span class="ri-val">&#8734;</span></div>
            <div class="receipt-item"><span class="ri-name">Ships before deadline</span><span class="ri-dots"></span><span class="ri-val">usually</span></div>
            <div class="receipt-item"><span class="ri-name">Engineers impressed</span><span class="ri-dots"></span><span class="ri-val">3&times;</span></div>
            <div class="receipt-item"><span class="ri-name">Coffee dependency</span><span class="ri-dots"></span><span class="ri-val">critical</span></div>
            <div class="receipt-item"><span class="ri-name">Dark mode opinions</span><span class="ri-dots"></span><span class="ri-val">strong</span></div>
          </div>
          <div class="receipt-dash"></div>
          <div class="receipt-total"><span class="rt-label">AVAILABILITY</span><span class="rt-val rt-open">&#9679; OPEN</span></div>
          <div class="receipt-total"><span class="rt-label">LOCATION</span><span class="rt-val">India &middot; UTC+5:30</span></div>
          <div class="receipt-equals"></div>
          <div class="receipt-quote">&ldquo;Simple is the hardest<br>thing to ship.&rdquo;</div>
          <div class="receipt-equals"></div>
          <div class="receipt-thanks">&#10022; &nbsp; THANK YOU &nbsp; &#10022;</div>
          <div class="receipt-barcode"></div>
          <div class="receipt-bc-num">2025 &middot; NT &middot; PRODUCT &middot; DESIGN</div>
        </div>
        <div class="receipt-tear"></div>
      </div>
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
