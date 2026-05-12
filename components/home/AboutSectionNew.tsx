const css = `
  .about-v2 {
    background: #faf9f6;
    padding: 8rem 2rem 6rem;
    overflow: hidden;
    position: relative;
    scroll-snap-align: start;
  }

  .about-v2-inner {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  /* ── Left column: polaroid stack ── */
  .about-v2-left {
    position: relative;
    height: 360px;
  }

  .pv2-floral {
    position: absolute;
    font-size: 72px;
    opacity: 0.13;
    pointer-events: none;
    z-index: 0;
    color: #888;
    line-height: 1;
    user-select: none;
  }
  .pv2-floral-1 { top: 6px;   left: -6px; }
  .pv2-floral-2 { bottom: 18px; right: 0;  }

  .pv2-card {
    position: absolute;
    background: #ffffff;
    padding: 10px 10px 34px 10px;
    box-shadow: 0 2px 14px rgba(0,0,0,0.10);
    z-index: 2;
    transition: box-shadow 0.3s ease;
    will-change: transform;
  }
  .pv2-card:hover {
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
    z-index: 10;
  }

  .pv2-card-1 {
    width: 178px;
    top: 0;
    left: 20px;
    animation:
      pv2-drop-1 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.1s  both,
      pv2-float-1 5s   ease-in-out                   0.9s  infinite;
  }
  .pv2-card-2 {
    width: 195px;
    top: 40px;
    left: 84px;
    animation:
      pv2-drop-2 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.35s both,
      pv2-float-2 6s   ease-in-out                   1.15s infinite;
  }
  .pv2-card-3 {
    width: 178px;
    top: 118px;
    left: 52px;
    animation:
      pv2-drop-3 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.6s  both,
      pv2-float-3 4.5s ease-in-out                   1.4s  infinite;
  }

  .pv2-photo {
    display: block;
    width: 100%;
    overflow: hidden;
    background: #e2ddd6;
  }
  .pv2-card-1 .pv2-photo { height: 130px; }
  .pv2-card-2 .pv2-photo { height: 148px; }
  .pv2-card-3 .pv2-photo { height: 130px; }

  .pv2-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pv2-caption {
    font-family: var(--font-caveat), 'Caveat', cursive;
    font-size: 13px;
    color: #999;
    text-align: center;
    margin: 0;
    padding-top: 7px;
    line-height: 1.35;
  }

  /* entrance: opposite rotation → final rotation, with bounce */
  @keyframes pv2-drop-1 {
    0%   { opacity: 0; transform: rotate(4deg)    translateY(-40px); }
    65%  { opacity: 1; transform: rotate(-4deg)   translateY(4px);  }
    82%  {             transform: rotate(-4deg)   translateY(-2px); }
    100% { opacity: 1; transform: rotate(-4deg)   translateY(0);    }
  }
  @keyframes pv2-float-1 {
    0%, 100% { transform: rotate(-4deg)  translateY(0px);  }
    50%      { transform: rotate(-4deg)  translateY(-7px); }
  }

  @keyframes pv2-drop-2 {
    0%   { opacity: 0; transform: rotate(-2.5deg) translateY(-40px); }
    65%  { opacity: 1; transform: rotate(2.5deg)  translateY(4px);  }
    82%  {             transform: rotate(2.5deg)  translateY(-2px); }
    100% { opacity: 1; transform: rotate(2.5deg)  translateY(0);    }
  }
  @keyframes pv2-float-2 {
    0%, 100% { transform: rotate(2.5deg)  translateY(0px);  }
    50%      { transform: rotate(2.5deg)  translateY(-8px); }
  }

  @keyframes pv2-drop-3 {
    0%   { opacity: 0; transform: rotate(1.5deg)  translateY(-40px); }
    65%  { opacity: 1; transform: rotate(-1.5deg) translateY(4px);  }
    82%  {             transform: rotate(-1.5deg) translateY(-2px); }
    100% { opacity: 1; transform: rotate(-1.5deg) translateY(0);    }
  }
  @keyframes pv2-float-3 {
    0%, 100% { transform: rotate(-1.5deg) translateY(0px);  }
    50%      { transform: rotate(-1.5deg) translateY(-5px); }
  }

  /* ── Right column: notebook ── */
  .about-v2-right {
    animation: pv2-slide-up 0.6s ease 0.8s both;
  }

  @keyframes pv2-slide-up {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  .pv2-heading {
    font-family: var(--font-caveat), 'Caveat', cursive;
    font-size: 27px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 1.25rem;
    line-height: 1.2;
  }

  .pv2-notebook {
    display: flex;
    flex-direction: column;
  }

  .pv2-line {
    font-family: var(--font-caveat), 'Caveat', cursive;
    font-size: 15.5px;
    color: #555;
    line-height: 2;
    border-bottom: 1px solid #e8e4dd;
    padding: 0 2px;
    min-height: calc(15.5px * 2);
  }
  .pv2-line:first-child {
    border-top: 1px solid #e8e4dd;
  }

  /* ── Comparison headline ── */
  .about-v2-headline {
    max-width: 900px;
    margin: 5rem auto 0;
    text-align: center;
  }
  .about-v2-headline p {
    margin: 0;
    font-family: 'Lora', Georgia, serif;
    font-size: 36px;
    font-weight: 400;
    color: #1a1a1a;
    line-height: 1.2;
  }
  .pv2-pixel-word {
    font-family: var(--font-caveat), 'Caveat', cursive;
    font-size: 42px;
    font-weight: 400;
    font-style: normal;
    color: #4a7fa5;
  }
`;

export function AboutSectionNew() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <section className="about-v2" id="about-new">
        <div className="about-v2-inner">

          {/* ── Left: polaroid stack ── */}
          <div className="about-v2-left">
            <span className="pv2-floral pv2-floral-1" aria-hidden="true">✿</span>
            <span className="pv2-floral pv2-floral-2" aria-hidden="true">❀</span>

            <div className="pv2-card pv2-card-1">
              <div className="pv2-photo">
                <img src="/about/portrait.jpg" alt="Nikunj, somewhere between work and wonder" />
              </div>
              <p className="pv2-caption">me, somewhere between work and wonder</p>
            </div>

            <div className="pv2-card pv2-card-2">
              <div className="pv2-photo">
                <img src="/about/work.jpg" alt="Where ideas happen" />
              </div>
              <p className="pv2-caption">where ideas happen</p>
            </div>

            <div className="pv2-card pv2-card-3">
              <div className="pv2-photo">
                <img src="/thumbnails/airiq.jpg" alt="The mess behind the magic" />
              </div>
              <p className="pv2-caption">the mess behind the magic</p>
            </div>
          </div>

          {/* ── Right: handwritten notebook ── */}
          <div className="about-v2-right">
            <h3 className="pv2-heading">Designer with an engineer&apos;s muscle memory.</h3>
            <div className="pv2-notebook">
              <div className="pv2-line">I am Nikunj, a product designer who enjoys</div>
              <div className="pv2-line">turning complex workflows into calm, usable</div>
              <div className="pv2-line">experiences.</div>
              <div className="pv2-line">&nbsp;</div>
              <div className="pv2-line">I listen closely, sketch quickly, and care about</div>
              <div className="pv2-line">the tiny moments where a product starts</div>
              <div className="pv2-line">feeling human.</div>
            </div>
          </div>

        </div>

        {/* ── Comparison headline ── */}
        <div className="about-v2-headline">
          <p>
            Person behind{' '}
            <span className="pv2-pixel-word">the pixels.</span>
          </p>
        </div>
      </section>
    </>
  );
}
