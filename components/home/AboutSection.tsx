const photoSet = `
  <div class="as-photo"><img src="/nikunj.png" alt="Nikunj" /></div>
  <div class="as-photo as-ph2"><div class="as-placeholder"></div></div>
  <div class="as-photo as-ph3"><div class="as-placeholder"></div></div>
  <div class="as-photo as-ph4"><div class="as-placeholder"></div></div>
  <div class="as-photo as-ph5"><div class="as-placeholder"></div></div>
  <div class="as-photo as-ph6"><div class="as-placeholder"></div></div>
  <div class="as-photo as-ph7"><div class="as-placeholder"></div></div>
  <div class="as-photo as-ph8"><div class="as-placeholder"></div></div>
`;

const html = `<section class="about" id="about">
  <div class="about-editorial reveal">
    <h2 class="about-ed-title">the person behind the pixels.</h2>

    <div class="about-strip-wrap">
      <div class="about-strip-track">
        ${photoSet}${photoSet}
      </div>
    </div>

    <div class="about-ed-text-wrap">
      <p class="about-ed-para">Engineer turned designer. I work at the intersection of research and systems — building things that feel effortless to use. Fuelled by cold brew and a healthy obsession with the details.</p>
      <a href="/about" class="about-ed-link">Know More <span class="about-ed-link-arrow">→</span></a>
    </div>
  </div>
</section>`;

export function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
