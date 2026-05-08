const BALLS = [
  { num:'01', name:'Discover',  tint:'rgba(186,230,253,0.30)' },
  { num:'02', name:'Define',    tint:'rgba(196,181,253,0.28)' },
  { num:'03', name:'Ideate',    tint:'rgba(252,211,77,0.22)'  },
  { num:'04', name:'Prototype', tint:'rgba(110,231,183,0.26)' },
  { num:'05', name:'Test',      tint:'rgba(248,113,113,0.24)' },
  { num:'06', name:'Iterate',   tint:'rgba(253,186,116,0.24)' },
  { num:'07', name:'Ship',      tint:'rgba(129,140,248,0.28)' },
];

const balls = BALLS.map((b, i) => `
  <div class="pendulum-unit" data-pidx="${i}" data-delay="${i * 80}">
    <div class="pendulum-arm-wrap">
      <div class="pendulum-arm">
        <div class="pendulum-string"></div>
        <div class="pendulum-bob" style="--tint:${b.tint}">
          <span class="bob-step-num">${b.num}</span>
          <span class="bob-name">${b.name}</span>
        </div>
      </div>
    </div>
  </div>`).join('');

const html = `<section class="process-section" id="process">
  <h2 class="section-title reveal">My Design Process</h2>
  <p class="process-sub reveal reveal-delay-1">Not a straight line. More like a controlled swing.</p>

  <div class="pendulum-scene">
    <div class="pendulum-rail"></div>
    <div class="pendulum-row">${balls}</div>
  </div>

  <div class="process-info">
    <h3 class="info-name" id="info-name">Discover</h3>
    <p class="info-desc" id="info-desc">I go deep before I design. User interviews, analytics dives, competitor audits — this phase is about surfacing hidden truths, not assumptions.</p>
  </div>
</section>`;

export function ProcessSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
