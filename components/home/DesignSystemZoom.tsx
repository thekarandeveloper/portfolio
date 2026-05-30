const FIGMA_DS_LINK = "https://www.figma.com/design/D6XwtXxLfGueNa2O4fwkHy/AirIQ-Case-Study?node-id=1-264&t=2oaxYzmdtrjQjfOl-1";

const figmaSvg = `<svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
  <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
  <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
  <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
  <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
</svg>`;

const html = `
<section class="dsz-section" id="ds-zoom">

  <div class="dsz-sticky">
    <div class="dsz-stage">

      <!-- LEFT annotation column -->
      <div class="dsz-ann-col dsz-ann-left">
        <div class="dsz-float dsz-fl-2">&#128204; Token architecture<br/>from scratch <span class="dsz-float-arrow">&#8594;</span></div>
        <div class="dsz-float dsz-fl-3">7 core components,<br/>all states mapped <span class="dsz-float-arrow">&#8594;</span></div>
        <div class="dsz-float dsz-fl-4">Built while<br/>shipping product &#128640; <span class="dsz-float-arrow">&#8594;</span></div>
      </div>

      <!-- heading + card stacked together -->
      <div class="dsz-card-wrap">

        <div class="dsz-heading-wrap reveal">
          <h2 class="dsz-title-main">I built a</h2>
          <span class="dsz-title-script">design system.</span>
        </div>

        <!-- dark card linking to Figma -->
        <a
          href="${FIGMA_DS_LINK}"
          target="_blank"
          rel="noopener noreferrer"
          class="dsz-card dsz-card-dark"
          style="display:block;text-decoration:none;background:#0B1E3D;border:1px solid rgba(30,144,255,0.25);padding:0;box-shadow:0 8px 40px rgba(30,144,255,0.10),0 2px 12px rgba(0,0,0,0.14);"
        >
          <!-- Hero area -->
          <div style="padding:30px 30px 24px;">
            <!-- Top row: brand + explore button -->
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px;">
              <div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                  ${figmaSvg}
                  <span style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#9CA3AF;">Figma &middot; Design System</span>
                </div>
                <h3 style="font-size:1.35rem;font-weight:700;color:#fff;margin:0;line-height:1.25;letter-spacing:-0.02em;">AIR iQ Design System</h3>
                <p style="font-size:13px;color:rgba(255,255,255,0.45);margin:8px 0 0;line-height:1.65;">Tokens, components, icons, and spacing. Built from zero alongside engineering.</p>
              </div>
              <span style="display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#1E90FF;background:rgba(30,144,255,0.12);border:1px solid rgba(30,144,255,0.3);border-radius:8px;padding:6px 13px;flex-shrink:0;">
                Explore &#8599;
              </span>
            </div>

            <!-- Stats row -->
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;margin-bottom:14px;">
              <div style="padding:14px 16px;background:rgba(255,255,255,0.03);">
                <div style="font-size:1.35rem;font-weight:800;color:#1E90FF;line-height:1;letter-spacing:-0.03em;">80+</div>
                <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.7);margin-top:5px;">Components</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:3px;line-height:1.5;">Buttons, inputs, cards, modals</div>
              </div>
              <div style="padding:14px 16px;background:rgba(255,255,255,0.03);">
                <div style="font-size:1.35rem;font-weight:800;color:#1E90FF;line-height:1;letter-spacing:-0.03em;">12</div>
                <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.7);margin-top:5px;">Color tokens</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:3px;line-height:1.5;">Semantic, not just palette</div>
              </div>
              <div style="padding:14px 16px;background:rgba(255,255,255,0.03);">
                <div style="font-size:1.35rem;font-weight:800;color:#1E90FF;line-height:1;letter-spacing:-0.03em;">3</div>
                <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.7);margin-top:5px;">Icon sizes</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:3px;line-height:1.5;">16&middot;20&middot;24px, drawn from scratch</div>
              </div>
              <div style="padding:14px 16px;background:rgba(255,255,255,0.03);">
                <div style="font-size:1.35rem;font-weight:800;color:#1E90FF;line-height:1;letter-spacing:-0.03em;">Zero</div>
                <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.7);margin-top:5px;">Libraries used</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:3px;line-height:1.5;">Everything built in-house</div>
              </div>
            </div>

            <!-- System groups -->
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px;">
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:11px 13px;display:flex;align-items:center;gap:9px;">
                <span style="font-size:16px;flex-shrink:0;">&#127912;</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);">Color System</div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;">Navy, tech blue, semantic states</div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:11px 13px;display:flex;align-items:center;gap:9px;">
                <span style="font-size:16px;flex-shrink:0;">&#128208;</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);">Spacing Scale</div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;">4pt base grid, 8 token steps</div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:11px 13px;display:flex;align-items:center;gap:9px;">
                <span style="font-size:16px;flex-shrink:0;">&#9999;&#65039;</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);">Typography</div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;">5-level scale, weight + size</div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:11px 13px;display:flex;align-items:center;gap:9px;">
                <span style="font-size:16px;flex-shrink:0;">&#9898;</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);">Radius Tokens</div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;">sm&middot;md&middot;lg&middot;pill variants</div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:11px 13px;display:flex;align-items:center;gap:9px;">
                <span style="font-size:16px;flex-shrink:0;">&#9992;&#65039;</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);">Custom Icons</div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;">3 sizes, drawn from scratch</div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:11px 13px;display:flex;align-items:center;gap:9px;">
                <span style="font-size:16px;flex-shrink:0;">&#9881;&#65039;</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);">Component API</div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;">Props, states, variants in Figma</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer CTA -->
          <div style="padding:13px 30px;border-top:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:space-between;background:rgba(30,144,255,0.06);">
            <span style="font-size:13px;color:rgba(255,255,255,0.5);">Go through the complete design system I built &#8599;</span>
            <span style="font-size:15px;color:#1E90FF;">&#8599;</span>
          </div>
        </a>

        <!-- Below-card: meta + case study link -->
        <div class="dsz-card-below">
          <div class="dsz-below-left">
            <p class="dsz-below-meta">Design Systems &middot; AirIQ &middot; Nov 2025</p>
            <div class="dsz-below-tags">
              <span class="dsz-below-tag">0&rarr;1</span>
              <span class="dsz-below-tag">Token-first</span>
              <span class="dsz-below-tag">4 Products</span>
              <span class="dsz-below-tag">3 Weeks</span>
            </div>
          </div>
          <a href="/projects/project-5" class="dsz-below-cta">View Case Study &rarr;</a>
        </div>

      </div>

      <!-- RIGHT annotation column -->
      <div class="dsz-ann-col dsz-ann-right">
        <div class="dsz-float dsz-fr-2"><span class="dsz-float-arrow">&#8592;</span> Zero dedicated<br/>systems team &#128161;</div>
        <div class="dsz-float dsz-fr-3"><span class="dsz-float-arrow">&#8592;</span> Design debt: 0<br/>after rollout &#10003;</div>
        <div class="dsz-float dsz-fr-4"><span class="dsz-float-arrow">&#8592;</span> 3-week sprint<br/>to v1</div>
      </div>

    </div>
  </div>

</section>
`;

export function DesignSystemZoom() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
