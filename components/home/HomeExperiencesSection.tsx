const html = `<section class="home-xp" id="experiences">
  <div class="home-xp-inner">
    <h2 class="home-xp-title reveal">
      Good <em>experiences.</em>
    </h2>
    <div class="home-xp-grid">

      <div class="home-xp-pol reveal" style="--r:-4deg;transition-delay:0s;">
        <div class="home-xp-tape hxt"></div>
        <div class="home-xp-photo">
          <img src="/about/portrait.jpg" alt="Nikunj" />
          <div class="home-xp-over"><p class="home-xp-mem">me, on a good hair day 🌟</p></div>
        </div>
        <span class="home-xp-caption">the designer herself</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:3deg;transition-delay:0.07s;">
        <div class="home-xp-tape hxr"></div>
        <div class="home-xp-photo">
          <img src="/about/sky.jpg" alt="sky" />
          <div class="home-xp-over"><p class="home-xp-mem">headspace loading... ☁️</p></div>
        </div>
        <span class="home-xp-caption">somewhere up there</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:-2deg;transition-delay:0.14s;">
        <div class="home-xp-tape hxt"></div>
        <div class="home-xp-photo">
          <img src="/about/sky.png" alt="sky" />
          <div class="home-xp-over"><p class="home-xp-mem">same sky, different mood</p></div>
        </div>
        <span class="home-xp-caption">blue hour</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:5deg;transition-delay:0.21s;">
        <div class="home-xp-tape hxt"></div>
        <div class="home-xp-photo">
          <img src="/about/stuff.png" alt="stuff" />
          <div class="home-xp-over"><p class="home-xp-mem">bits &amp; pieces of my world</p></div>
        </div>
        <span class="home-xp-caption">the good stuff</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:-5deg;transition-delay:0.28s;">
        <div class="home-xp-tape hxt"></div>
        <div class="home-xp-photo">
          <img src="/about/work.jpg" alt="work" />
          <div class="home-xp-over"><p class="home-xp-mem">in the zone, do not disturb ☕</p></div>
        </div>
        <span class="home-xp-caption">deep work mode</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:4deg;transition-delay:0.35s;">
        <div class="home-xp-tape hxl"></div>
        <div class="home-xp-photo">
          <img src="/Image/hero/Cafe.png" alt="cafe" />
          <div class="home-xp-over"><p class="home-xp-mem">my unofficial office ☕</p></div>
        </div>
        <span class="home-xp-caption">corner seat, always</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:-3deg;transition-delay:0.42s;">
        <div class="home-xp-tape hxr"></div>
        <div class="home-xp-photo">
          <img src="/Image/hero/Book.png" alt="book" />
          <div class="home-xp-over"><p class="home-xp-mem">just one more chapter 📖</p></div>
        </div>
        <span class="home-xp-caption">always reading</span>
      </div>

      <div class="home-xp-pol reveal" style="--r:6deg;transition-delay:0.49s;">
        <div class="home-xp-tape hxt"></div>
        <div class="home-xp-photo">
          <img src="/Image/hero/flower.png" alt="flower" />
          <div class="home-xp-over"><p class="home-xp-mem">little joys &gt; everything else 🌸</p></div>
        </div>
        <span class="home-xp-caption">small things matter</span>
      </div>

    </div>
  </div>
</section>`;

export function HomeExperiencesSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
