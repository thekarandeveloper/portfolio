const html = `<section class="process-section" id="process">
  <p class="section-label reveal">How I work</p>
  <h2 class="section-title reveal reveal-delay-1">My design process —<br><em>click to reveal the magic.</em></h2>
  <p class="reveal reveal-delay-2" style="font-size:0.85rem;color:var(--ink3);margin-top:-2rem;margin-bottom:2.5rem;">Each card flips to show exactly how I work at that stage — tools, mindset, and method.</p>

  <div class="process-grid">
    <!-- Step 1 -->
    <div class="process-card" data-delay="0" onclick="this.classList.toggle('flipped')">
      <div class="process-card-inner">
        <div class="process-front">
          <div><p class="process-step-num">01</p><p class="process-step-name">Discover</p><p class="process-step-desc">Understanding the real problem before jumping to solutions. I listen, observe and absorb everything.</p></div>
          <p class="process-flip-hint">✦ Click to see how →</p>
        </div>
        <div class="process-back">
          <div><p class="process-tools-label">Tools I use</p><div class="process-tools"><span class="process-tool-pill">User Interviews</span><span class="process-tool-pill">FigJam</span><span class="process-tool-pill">ChatGPT</span></div><p class="process-back-desc">I start with conversations — stakeholders, users, the brief. I map mental models and pain points in FigJam, and use AI to synthesize research fast.</p></div>
          <p class="process-back-num">01</p>
        </div>
      </div>
    </div>
    <!-- Step 2 -->
    <div class="process-card" data-delay="100" onclick="this.classList.toggle('flipped')">
      <div class="process-card-inner">
        <div class="process-front">
          <div><p class="process-step-num">02</p><p class="process-step-name">Define</p><p class="process-step-desc">Turning messy research into a clear problem statement. This is where clarity is born.</p></div>
          <p class="process-flip-hint">✦ Click to see how →</p>
        </div>
        <div class="process-back">
          <div><p class="process-tools-label">Tools I use</p><div class="process-tools"><span class="process-tool-pill">Notion</span><span class="process-tool-pill">FigJam</span><span class="process-tool-pill">Claude</span></div><p class="process-back-desc">HMW statements, user personas, and journey maps. I document everything in Notion and use Claude to pressure-test my problem framing before moving on.</p></div>
          <p class="process-back-num">02</p>
        </div>
      </div>
    </div>
    <!-- Step 3 -->
    <div class="process-card" data-delay="200" onclick="this.classList.toggle('flipped')">
      <div class="process-card-inner">
        <div class="process-front">
          <div><p class="process-step-num">03</p><p class="process-step-name">Ideate</p><p class="process-step-desc">Diverge before converging. I explore wildly before narrowing to the right solution.</p></div>
          <p class="process-flip-hint">✦ Click to see how →</p>
        </div>
        <div class="process-back">
          <div><p class="process-tools-label">Tools I use</p><div class="process-tools"><span class="process-tool-pill">Midjourney</span><span class="process-tool-pill">v0</span><span class="process-tool-pill">Figma Make</span><span class="process-tool-pill">FigJam</span></div><p class="process-back-desc">Crazy 8s on FigJam, visual moodboards with Midjourney, and rapid layout exploration with v0 and Figma Make. AI is my ideation superpower.</p></div>
          <p class="process-back-num">03</p>
        </div>
      </div>
    </div>
    <!-- Step 4 -->
    <div class="process-card" data-delay="300" onclick="this.classList.toggle('flipped')">
      <div class="process-card-inner">
        <div class="process-front">
          <div><p class="process-step-num">04</p><p class="process-step-name">Design</p><p class="process-step-desc">Where it all comes together. Wireframes to hi-fi, components to systems — pixel by pixel.</p></div>
          <p class="process-flip-hint">✦ Click to see how →</p>
        </div>
        <div class="process-back">
          <div><p class="process-tools-label">Tools I use</p><div class="process-tools"><span class="process-tool-pill">Figma</span><span class="process-tool-pill">Auto-layout</span><span class="process-tool-pill">Variables</span></div><p class="process-back-desc">Lo-fi first, always. I build with components and design tokens from day one. If it's off by 1px, I'll fix it. Every screen tells a story.</p></div>
          <p class="process-back-num">04</p>
        </div>
      </div>
    </div>
    <!-- Step 5 -->
    <div class="process-card" data-delay="400" onclick="this.classList.toggle('flipped')">
      <div class="process-card-inner">
        <div class="process-front">
          <div><p class="process-step-num">05</p><p class="process-step-name">Test</p><p class="process-step-desc">Real users break assumptions. I'd rather find problems now than after shipping.</p></div>
          <p class="process-flip-hint">✦ Click to see how →</p>
        </div>
        <div class="process-back">
          <div><p class="process-tools-label">Tools I use</p><div class="process-tools"><span class="process-tool-pill">Maze</span><span class="process-tool-pill">Figma Prototype</span><span class="process-tool-pill">Loom</span></div><p class="process-back-desc">Unmoderated tests via Maze for scale. Moderated sessions for depth. I record sessions, watch people struggle, and iterate fast. No ego, just data.</p></div>
          <p class="process-back-num">05</p>
        </div>
      </div>
    </div>
    <!-- Step 6 -->
    <div class="process-card" data-delay="500" onclick="this.classList.toggle('flipped')">
      <div class="process-card-inner">
        <div class="process-front">
          <div><p class="process-step-num">06</p><p class="process-step-name">Ship</p><p class="process-step-desc">Design doesn't end at handoff. I stay close to dev until it's exactly right in production.</p></div>
          <p class="process-flip-hint">✦ Click to see how →</p>
        </div>
        <div class="process-back">
          <div><p class="process-tools-label">Tools I use</p><div class="process-tools"><span class="process-tool-pill">Figma Dev Mode</span><span class="process-tool-pill">Notion</span><span class="process-tool-pill">Loom</span></div><p class="process-back-desc">Annotated specs, Loom walkthroughs for devs, and a red-lines doc. I do dev QA sessions and don't sign off until it matches the design exactly.</p></div>
          <p class="process-back-num">06</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

export function ProcessSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
