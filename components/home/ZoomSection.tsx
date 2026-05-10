const html = `<section class="zoom-section" id="zoom-interlude">
  <div class="zoom-sticky">
    <div class="zoom-content">
      <p class="zoom-line-1">Sometimes,<br>I zoom out.</p>
      <p class="zoom-line-2">Then I bring it back down.</p>
      <p class="zoom-line-3">And keep it simple.</p>
      <p class="zoom-sub">Good solutions don't ask for attention.<br>They just work — quietly and effectively.</p>
    </div>
  </div>
</section>`;

export function ZoomSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
