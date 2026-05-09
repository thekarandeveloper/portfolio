const html = `<section class="process-section" id="process">

  <div class="process-heading reveal">
    <h2 class="process-main-title"><em>How I actually work.</em></h2>
  </div>

  <div class="conv-wrap reveal">
    <div class="conv-window" id="convWindow">

      <!-- Glass chat header -->
      <div class="conv-titlebar">
        <div class="conv-gchat-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        </div>
        <div class="conv-group-info">
          <span class="conv-group-name">new-feature-discussion 💬</span>
          <span class="conv-group-sub">Nikunj Tyagi &amp; PM &middot; 2 members</span>
        </div>
        <div class="conv-header-avatars">
          <div class="conv-hdr-av pm-hdr">PM</div>
          <div class="conv-hdr-av nik-hdr">NT</div>
        </div>
      </div>

      <!-- Messages area — starts with cute empty state -->
      <div class="conv-body" id="convBody">
        <div class="conv-empty" id="convEmptyState">
          <div class="conv-empty-bubbles">
            <div class="conv-empty-bubble eb-pm"></div>
            <div class="conv-empty-bubble eb-nik"></div>
            <div class="conv-empty-bubble eb-pm eb-short"></div>
          </div>
          <span class="conv-empty-label">✦ conversation loading</span>
        </div>
      </div>

    </div>

    <!-- End state — only replay, no CTA -->
    <div class="conv-end" id="convEnd">
      <p class="conv-end-quote"><em>&ldquo;Every project starts with a conversation.&rdquo;</em></p>
      <button class="conv-replay" id="convReplay">&#8635; replay</button>
    </div>
  </div>

</section>`;

export function ProcessSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
