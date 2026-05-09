const html = `<section class="spectrum-section" id="toolkit">
  <div class="spectrum-top reveal">
    <div><p class="spectrum-eyebrow">My stack</p><h2 class="spectrum-title">Human intuition.<br><em>AI velocity.</em></h2></div>
    <p class="spectrum-note">Every tool sits somewhere between pure craft and AI. I use both ends, intentionally.</p>
  </div>
  <div class="reveal reveal-delay-1">
    <div class="spectrum-ends"><span class="spectrum-end-label human">← Human craft</span><span class="spectrum-end-label ai">AI powered →</span></div>
    <div class="spectrum-bar"></div>
    <div class="spectrum-dots">
      <div class="s-dot" style="left:4%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">FigJam</span></div>
      <div class="s-dot" style="left:15%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">Maze</span></div>
      <div class="s-dot" style="left:27%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">Figma</span></div>
      <div class="s-dot" style="left:39%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">Notion</span></div>
      <div class="s-dot" style="left:52%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">Midjourney</span></div>
      <div class="s-dot" style="left:64%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">ChatGPT</span></div>
      <div class="s-dot is-ai" style="left:75%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">Claude</span></div>
      <div class="s-dot is-ai" style="left:86%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">Figma Make</span></div>
      <div class="s-dot is-ai" style="left:96%;"><div class="s-dot-circle"></div><div class="s-dot-line"></div><span class="s-dot-label">v0</span></div>
    </div>
  </div>
  <div class="spectrum-process reveal reveal-delay-2">
    <div style="flex-shrink:0;"><span class="process-label-s">Discover</span></div><span class="process-arrow-s">→</span>
    <div style="flex-shrink:0;"><span class="process-label-s">Define</span></div><span class="process-arrow-s">→</span>
    <div style="flex-shrink:0;"><span class="process-label-s">Ideate</span></div><span class="process-arrow-s">→</span>
    <div style="flex-shrink:0;"><span class="process-label-s">Design</span></div><span class="process-arrow-s">→</span>
    <div style="flex-shrink:0;"><span class="process-label-s">Test</span></div><span class="process-arrow-s">→</span>
    <div style="flex-shrink:0;"><span class="process-label-s">Ship</span></div>
  </div>
</section>`;

export function ToolkitSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
