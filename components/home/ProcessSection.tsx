const html = `<section class="process-section" id="process">

  <div class="process-heading reveal">
    <h2 class="process-main-title">How I actually</h2>
    <span class="process-title-script">work.</span>
  </div>

  <div class="anno-stage reveal">
    <div class="anno-canvas-wrap" id="annoCanvas">

      <svg class="anno-wireframe" viewBox="0 0 560 370" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <!-- browser chrome -->
        <rect x="0" y="0" width="560" height="33" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
        <circle cx="14" cy="16.5" r="4" fill="rgba(255,255,255,0.11)"/>
        <circle cx="26" cy="16.5" r="4" fill="rgba(255,255,255,0.08)"/>
        <circle cx="38" cy="16.5" r="4" fill="rgba(255,255,255,0.06)"/>
        <rect x="52" y="10" width="390" height="13" rx="6.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
        <rect x="460" y="11" width="20" height="11" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
        <rect x="488" y="11" width="20" height="11" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
        <rect x="516" y="11" width="32" height="11" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>

        <!-- app nav bar -->
        <rect x="0" y="33" width="560" height="48" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
        <rect x="18" y="47" width="58" height="11" rx="5" fill="rgba(255,255,255,0.18)"/>
        <rect x="88" y="50" width="34" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="132" y="50" width="30" height="8" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="172" y="50" width="44" height="8" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="226" y="50" width="34" height="8" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="428" y="44" width="76" height="24" rx="12" fill="rgba(30,144,255,0.2)" stroke="rgba(30,144,255,0.32)" stroke-width="0.75"/>
        <circle cx="524" cy="57" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.09)" stroke-width="0.75"/>

        <!-- hero left: heading + subtext + ctas -->
        <rect x="18" y="97" width="256" height="20" rx="4" fill="rgba(255,255,255,0.17)"/>
        <rect x="18" y="123" width="200" height="20" rx="4" fill="rgba(255,255,255,0.13)"/>
        <rect x="18" y="157" width="188" height="7" rx="3" fill="rgba(255,255,255,0.07)"/>
        <rect x="18" y="170" width="210" height="7" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="18" y="183" width="166" height="7" rx="3" fill="rgba(255,255,255,0.05)"/>
        <rect x="18" y="209" width="92" height="28" rx="14" fill="rgba(30,144,255,0.22)" stroke="rgba(30,144,255,0.38)" stroke-width="0.75"/>
        <rect x="122" y="209" width="92" height="28" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.75"/>

        <!-- hero right: media placeholder -->
        <rect x="308" y="87" width="234" height="198" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="0.75"/>
        <line x1="308" y1="87" x2="542" y2="285" stroke="rgba(255,255,255,0.04)" stroke-width="0.75"/>
        <line x1="542" y1="87" x2="308" y2="285" stroke="rgba(255,255,255,0.04)" stroke-width="0.75"/>
        <rect x="355" y="168" width="70" height="7" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="355" y="181" width="100" height="7" rx="3" fill="rgba(255,255,255,0.05)"/>

        <!-- section divider -->
        <line x1="18" y1="298" x2="542" y2="298" stroke="rgba(255,255,255,0.05)" stroke-width="0.75"/>

        <!-- bottom metric cards -->
        <rect x="18" y="310" width="120" height="52" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
        <rect x="150" y="310" width="120" height="52" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
        <rect x="282" y="310" width="120" height="52" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
        <rect x="414" y="310" width="128" height="52" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
        <rect x="28" y="318" width="44" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="28" y="332" width="60" height="14" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="160" y="318" width="44" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="160" y="332" width="50" height="14" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="292" y="318" width="44" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="292" y="332" width="66" height="14" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="424" y="318" width="48" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="424" y="332" width="58" height="14" rx="3" fill="rgba(255,255,255,0.08)"/>
      </svg>

      <!-- annotation pins -->
      <button class="anno-pin pop-l pop-d" data-idx="0" style="left:87.5%;top:9%" aria-label="Step 01 Discover">
        <span class="anno-pin-num">1</span>
        <div class="anno-pop">
          <div class="anno-pop-step">01 / Discover</div>
          <div class="anno-pop-name">Find the wrong assumption</div>
          <p class="anno-pop-desc">I ask what we're most wrong about, not what to build. Research before Figma, always.</p>
        </div>
      </button>

      <button class="anno-pin pop-r pop-d" data-idx="1" style="left:28.6%;top:15.4%" aria-label="Step 02 Architect">
        <span class="anno-pin-num">2</span>
        <div class="anno-pop">
          <div class="anno-pop-step">02 / Architect</div>
          <div class="anno-pop-name">IA before pixels</div>
          <p class="anno-pop-desc">Navigation and flows mapped on a whiteboard. No visual decisions made yet.</p>
        </div>
      </button>

      <button class="anno-pin pop-r" data-idx="2" style="left:22%;top:38.9%" aria-label="Step 03 Sketch">
        <span class="anno-pin-num">3</span>
        <div class="anno-pop">
          <div class="anno-pop-step">03 / Sketch</div>
          <div class="anno-pop-name">Right structure, not right look</div>
          <p class="anno-pop-desc">Low-fi wireframes to nail the layout. No color decisions, no font decisions.</p>
        </div>
      </button>

      <button class="anno-pin pop-l" data-idx="3" style="left:75.7%;top:49.5%" aria-label="Step 04 Design">
        <span class="anno-pin-num">4</span>
        <div class="anno-pop">
          <div class="anno-pop-step">04 / Design</div>
          <div class="anno-pop-name">High-fi with constraints</div>
          <p class="anno-pop-desc">Real content, real data, design tokens. Not magic numbers; the system decides.</p>
        </div>
      </button>

      <button class="anno-pin pop-r pop-u" data-idx="4" style="left:19.6%;top:88%" aria-label="Step 05 Test">
        <span class="anno-pin-num">5</span>
        <div class="anno-pop">
          <div class="anno-pop-step">05 / Test</div>
          <div class="anno-pop-name">Metric first, frame second</div>
          <p class="anno-pop-desc">I define success before the first frame. Then I'm wrong. Then I iterate better.</p>
        </div>
      </button>

      <button class="anno-pin pop-l pop-u" data-idx="5" style="left:86%;top:88%" aria-label="Step 06 Ship">
        <span class="anno-pin-num">6</span>
        <div class="anno-pop">
          <div class="anno-pop-step">06 / Ship</div>
          <div class="anno-pop-name">Same doc, same sprint</div>
          <p class="anno-pop-desc">Dev-ready specs live where the design lives. No Slack threads, no surprises.</p>
        </div>
      </button>

    </div>

    <!-- step legend -->
    <div class="anno-legend">
      <div class="anno-legend-step" data-leg="0"><span class="anno-leg-num">01</span><span class="anno-leg-name">Discover</span></div>
      <div class="anno-legend-step" data-leg="1"><span class="anno-leg-num">02</span><span class="anno-leg-name">Architect</span></div>
      <div class="anno-legend-step" data-leg="2"><span class="anno-leg-num">03</span><span class="anno-leg-name">Sketch</span></div>
      <div class="anno-legend-step" data-leg="3"><span class="anno-leg-num">04</span><span class="anno-leg-name">Design</span></div>
      <div class="anno-legend-step" data-leg="4"><span class="anno-leg-num">05</span><span class="anno-leg-name">Test</span></div>
      <div class="anno-legend-step" data-leg="5"><span class="anno-leg-num">06</span><span class="anno-leg-name">Ship</span></div>
    </div>

  </div>

</section>`;

export function ProcessSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
