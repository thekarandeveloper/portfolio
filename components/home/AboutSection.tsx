const html = `<section class="about" id="about">
  <div class="about-inner reveal">
    <h2 class="about-title">Person behind <em>the pixels.</em></h2>
    <div class="about-book-wrapper">
      <div class="about-closed-book" role="button" aria-label="Open scrapbook about Nikunj" tabindex="0">
        <div class="about-cb-spine" aria-hidden="true"></div>
        <div class="about-cb-cover">
          <span class="about-cover-label">about</span>
          <p class="about-cover-name">Nikunj<br>Tyagi</p>
          <div class="about-cover-rule"></div>
          <span class="about-cover-role">product designer</span>
          <span class="about-cover-hint">tap to open</span>
        </div>
        <div class="about-cb-pages" aria-hidden="true"></div>
      </div>
      <div class="about-book-stage book-hidden" aria-label="Open scrapbook about Nikunj">
      <div class="about-book-shell" aria-hidden="true">
        <div class="about-book-page about-book-page-left"></div>
        <div class="about-book-page about-book-page-right"></div>
        <div class="about-book-spine"></div>
      </div>
      <div class="about-turn-page"></div>
      <div class="about-page-content">
        <div class="about-page-spread" data-about-page="0">
          <div class="about-left-page">
            <div class="about-photo-box large">
              <img src="/about/portrait.jpg" alt="Nikunj portrait" />
              <span>me, somewhere between work and wonder</span>
            </div>
            <div class="about-photo-row">
              <div class="about-photo-box small">
                <img src="/about/work.jpg" alt="Nikunj working" />
              </div>
              <div class="about-photo-box small">
                <img src="/thumbnails/airiq.jpg" alt="Design work snapshot" />
              </div>
            </div>
          </div>
          <div class="about-right-page about-lined-page">
            <p class="about-page-num">01</p>
            <h3>Designer with an engineer's muscle memory.</h3>
            <p>I am Nikunj, a product designer who enjoys turning complex workflows into calm, usable experiences.</p>
            <p>I listen closely, sketch quickly, and care about the tiny moments where a product starts feeling human.</p>
          </div>
        </div>

        <div class="about-page-spread" data-about-page="1">
          <div class="about-left-page">
            <div class="about-photo-box large">
              <img src="/Image/hero/Cafe.png" alt="Cafe tour memory" />
              <span>cafe corners, warm light, fresh ideas</span>
            </div>
            <div class="about-photo-row">
              <div class="about-photo-box small">
                <img src="/about/work.jpg" alt="Coffee and work moment" />
              </div>
              <div class="about-photo-box small">
                <img src="/Image/hero/ice-cream.png" alt="Sweet cafe detail" />
              </div>
            </div>
          </div>
          <div class="about-right-page about-lined-page">
            <p class="about-page-num">02</p>
            <h3>Cafe tours and coffee love.</h3>
            <p>I like finding quiet cafes, ordering coffee, and letting the place slowly become a little design studio.</p>
            <p>Good coffee, good light, and a notebook can fix almost any stuck thought.</p>
          </div>
        </div>

        <div class="about-page-spread" data-about-page="2">
          <div class="about-left-page">
            <div class="about-photo-box large">
              <img src="/thumbnails/airiq.jpg" alt="Travel product design snapshot" />
              <span>travel teaches me how people really move</span>
            </div>
            <div class="about-photo-row">
              <div class="about-photo-box small">
                <img src="/about/portrait.jpg" alt="Travel portrait" />
              </div>
              <div class="about-photo-box small">
                <img src="/thumbnails/biblofi.jpg" alt="Journey snapshot" />
              </div>
            </div>
          </div>
          <div class="about-right-page about-lined-page">
            <p class="about-page-num">03</p>
            <h3>Traveling keeps my eyes awake.</h3>
            <p>I love noticing stations, streets, signs, menus, and the small systems that help people move through new places.</p>
            <p>Every trip gives me references I quietly bring back into my design work.</p>
          </div>
        </div>
      </div>

      <div class="about-page-controls" aria-label="About pages">
        <button class="about-page-dot active" type="button" data-about-target="0" aria-label="Show about page 1"></button>
        <button class="about-page-dot" type="button" data-about-target="1" aria-label="Show about page 2"></button>
        <button class="about-page-dot" type="button" data-about-target="2" aria-label="Show about page 3"></button>
      </div>
      <button class="about-page-grab about-page-grab-next" type="button" aria-label="Turn to next page"><span class="about-turn-hint">tap to turn page →</span></button>
      <button class="about-page-grab about-page-grab-prev" type="button" aria-label="Turn to previous page"><span class="about-turn-hint">← tap to turn page</span></button>

      <img class="about-ribbon about-float-slow" src="/Image/hero/Ribbon.png" alt="" />
      <img class="about-flower about-flower-one about-float" src="/Image/hero/flower1.png" alt="" />
      <img class="about-flower about-flower-two about-float-reverse" src="/Image/hero/flower2.png" alt="" />
      <img class="about-flower about-flower-three about-float-soft" src="/Image/hero/flower3.png" alt="" />
    </div>
    </div>
  </div>
  <div class="about-know-more-wrap">
    <a href="/about" class="about-know-more">Know More ↗</a>
  </div>
</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
