const html = `<section class="home-loves" id="loves">
  <div class="home-loves-inner">
    <p class="section-label reveal">things I love</p>
    <h2 class="home-loves-title reveal reveal-delay-1">
      Things I <em>love</em><br>a little too much.
    </h2>
    <div class="home-loves-grid">

      <div class="home-love-card reveal from-left">
        <span class="home-love-icon">☕</span>
        <h3 class="home-love-name">Cafés</h3>
        <p class="home-love-desc">
          Corner seat only. Lo-fi playlist. Cold drink. Zero eye contact.
          That&rsquo;s my office. I do my best thinking with bad wifi and good ambiance.
        </p>
        <p class="home-love-whisper">current ritual: 9am café, no exceptions</p>
      </div>

      <div class="home-love-card reveal reveal-delay-2">
        <span class="home-love-icon">🧊</span>
        <h3 class="home-love-name">Cold Coffee</h3>
        <p class="home-love-desc">
          Hot coffee is a compromise. Iced americano is a way of life.
          I take my coffee like I take my designs: cold, precise,
          and completely non-negotiable.
        </p>
        <p class="home-love-whisper">streak: same order, 47 days straight</p>
      </div>

      <div class="home-love-card reveal from-right reveal-delay-3">
        <span class="home-love-icon">✈️</span>
        <h3 class="home-love-name">Travel</h3>
        <p class="home-love-desc">
          New cities rewire my brain. Every trip comes back as a design
          reference, a rethought mental model, or at minimum, a really
          good story for interviews.
        </p>
        <p class="home-love-whisper">currently planning: everywhere</p>
      </div>

    </div>
  </div>
</section>`;

export function HomeLovesSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
