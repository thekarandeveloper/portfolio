const html = `<section class="process-section" id="process">

  <div class="process-heading reveal">
    <h2 class="process-main-title">How I actually</h2>
    <span class="process-title-script">work.</span>
  </div>

  <div class="conv-stage reveal" id="convStage">

    <div class="q-panel" id="qPanel">
      <p class="q-eyebrow">your turn</p>
      <p class="q-prompt">Got a question?</p>
      <div class="q-chips" id="qChips">
        <button class="q-chip" data-q="0">How fast can you move?</button>
        <button class="q-chip" data-q="1">What if I have no brief?</button>
        <button class="q-chip" data-q="2">Do you work with devs?</button>
        <button class="q-chip" data-q="3">What tools do you use?</button>
      </div>
      <a class="q-connect" id="qConnect" href="#contact">Let&rsquo;s see if we click &rarr;</a>
    </div>

    <div class="conv-panel-wrap" id="convPanelWrap">
      <div class="conv-window" id="convWindow">
        <div class="conv-body" id="convBody">
          <div class="conv-empty" id="convEmptyState">
            <div class="conv-empty-bubbles">
              <div class="conv-empty-bubble eb-pm"></div>
              <div class="conv-empty-bubble eb-nik"></div>
              <div class="conv-empty-bubble eb-pm eb-short"></div>
            </div>
            <span class="conv-empty-label">loading</span>
          </div>
        </div>
        <div class="conv-foot">
          <button class="conv-replay" id="convReplay">&#8635; replay</button>
        </div>
      </div>
    </div>

  </div>

</section>`;

export function ProcessSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
