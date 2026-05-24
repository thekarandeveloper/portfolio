const html = `<section class="contact" id="contact">
  <div class="contact-glow"></div>
  <div class="contact-flex">



    <!-- LEFT: ask me anything -->
    <div class="contact-left reveal from-left">
      <p class="ama-label">ask me anything</p>
      <div class="ama-bar-wrap">
        <div class="ama-bar" id="amaBar">
          <svg class="ama-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.75"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
          <input class="ama-input" id="amaInput" type="text" placeholder="who is Nik?" autocomplete="off" spellcheck="false" />
          <button class="ama-clear" id="amaClear" aria-label="Clear">&#215;</button>
        </div>
      </div>
      <div class="ama-chips" id="amaChips">
        <button class="ama-chip" data-q="Who is Nik?">Who is Nik? 👤</button>
        <button class="ama-chip" data-q="What does Nik design?">What does Nik design? ✦</button>
        <button class="ama-chip" data-q="What coffee does Nik prefer?">What coffee? ☕</button>
        <button class="ama-chip" data-q="What is Nik looking for?">What is Nik looking for? 🔍</button>
        <button class="ama-chip" data-q="What does Nik love outside design?">Life outside design? 🎵</button>
        <button class="ama-chip" data-q="What makes Nik's process different?">What makes her process different? 🧩</button>
      </div>
      <div class="ama-answer" id="amaAnswer"></div>
    </div>

    <!-- RIGHT: contact links -->
    <div class="contact-right">
      <h2 class="contact-title reveal from-right">Let&rsquo;s grab<br>a <span class="coffee">coffee</span> ☕</h2>
      <p class="contact-sub reveal reveal-delay-1 from-right">Whether it&rsquo;s a role, a collab, or just a good conversation about design, I&rsquo;m always up for it.</p>
      <div class="contact-links reveal reveal-delay-2 from-right">
        <a href="mailto:tyaginikunj26@gmail.com" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Email</span><span class="contact-link-value">tyaginikunj26@gmail.com</span></div><span class="contact-link-arrow">↗</span></a>
        <a href="https://www.linkedin.com/in/nikunj-tyagi26/" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">LinkedIn</span><span class="contact-link-value">nikunj-tyagi26</span></div><span class="contact-link-arrow">↗</span></a>
        <a href="https://instagram.com" target="_blank" class="contact-link"><div class="contact-link-left"><span class="contact-link-platform">Instagram</span><span class="contact-link-value">@nikunj</span></div><span class="contact-link-arrow">↗</span></a>
      </div>
      <div class="contact-footer reveal reveal-delay-3">
        <span class="contact-footer-name">Nikunj Tyagi · Product Designer</span>
        <span class="contact-footer-hand">made with ☕ &amp; obsession</span>
        <span class="contact-footer-copy">© 2026</span>
      </div>
    </div>

  </div>
</section>`;

export function ContactSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
