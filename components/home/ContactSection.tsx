const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-flex">



    <!-- LEFT: paint canvas -->
    <div class="contact-left reveal from-left">
      <div class="paint-wrap">
        <div class="paint-header">
          <span class="paint-hint">— draw something —</span>
          <button class="paint-clear" id="paintClear" title="Clear canvas">&#8635;</button>
        </div>
        <canvas id="paintCanvas" class="paint-canvas"></canvas>
        <div class="paint-toolbar">
          <div class="paint-colors">
            <button class="pc active" data-color="#1E90FF" style="--c:#1E90FF" title="Blue"></button>
            <button class="pc" data-color="#A78BFA" style="--c:#A78BFA" title="Purple"></button>
            <button class="pc" data-color="#F472B6" style="--c:#F472B6" title="Pink"></button>
            <button class="pc" data-color="#34D399" style="--c:#34D399" title="Mint"></button>
            <button class="pc" data-color="#FB923C" style="--c:#FB923C" title="Orange"></button>
            <button class="pc" data-color="#1a1a2e" style="--c:#1a1a2e" title="Dark"></button>
          </div>
          <div class="paint-sep"></div>
          <div class="paint-shapes">
            <button class="ps active" data-shape="round" title="Round">&#9679;</button>
            <button class="ps" data-shape="square" title="Square">&#9632;</button>
            <button class="ps" data-shape="star" title="Star">&#10022;</button>
          </div>
          <div class="paint-sep"></div>
          <div class="paint-sizes">
            <button class="pz active" data-size="4" title="Small">S</button>
            <button class="pz" data-size="12" title="Medium">M</button>
            <button class="pz" data-size="24" title="Large">L</button>
          </div>
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
