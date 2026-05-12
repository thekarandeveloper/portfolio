const html = `<section class="spiral-section section-fade" id="spiralSection">
  <div class="spiral-topbar">
    <span class="spiral-topbar-label">— visual archive</span>
    <span class="spiral-topbar-mode">spiral</span>
  </div>

  <div class="spiral-sticky">
    <div class="spiral-vignette"></div>
    <div class="spiral-perspective">
      <div class="spiral-stage" id="spiralStage">

        <div class="spiral-card sc-sz-a" style="background-image:url('/thumbnails/airiq.jpg')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-b" style="background-image:url('/Image/hero/Nikunj.png')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-a" style="background-image:url('/thumbnails/biblofi.jpg')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-c" style="background-image:url('/Image/hero/Cafe.png')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-a" style="background-image:url('/about/portrait.jpg')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-b" style="background-image:url('/Image/Biblofi/hero1.png')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-a" style="background-image:url('/about/work.jpg')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-c" style="background-image:url('/Image/Biblofi/hero2.png')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-a" style="background-image:url('/Image/hero/Book.png')">
          <div class="spiral-card-shine"></div>
        </div>
        <div class="spiral-card sc-sz-b" style="background-image:url('/nikunj.png')">
          <div class="spiral-card-shine"></div>
        </div>

      </div>
    </div>
  </div>

  <div class="spiral-bottombar">
    <span class="spiral-hint">↓ scroll to fly through</span>
    <span class="spiral-counter" id="spiralCounter">01 / 10</span>
  </div>
</section>`;

export function SpiralSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
