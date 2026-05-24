const css = `
.mcs-gate {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #FDFAF8;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  text-align: center;
}
@media (max-width: 768px) {
  .mcs-gate { display: flex; }
}
.mcs-mono {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(30,144,255,0.10);
  border: 1.5px solid rgba(30,144,255,0.18);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Lato', sans-serif;
  font-size: 15px; font-weight: 700;
  letter-spacing: 0.06em;
  color: #1E90FF;
  margin-bottom: 2rem;
}
.mcs-icon {
  font-size: 2.6rem;
  margin-bottom: 1.25rem;
  line-height: 1;
}
.mcs-title {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #1A1210;
  line-height: 1.3;
  margin-bottom: 0.85rem;
}
.mcs-sub {
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  color: #7A6058;
  line-height: 1.7;
  max-width: 290px;
  margin-bottom: 2.25rem;
}
.mcs-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #1E90FF;
  text-decoration: none;
  background: rgba(30,144,255,0.08);
  border: 1px solid rgba(30,144,255,0.18);
  border-radius: 99px;
  padding: 10px 22px;
}
.mcs-note {
  margin-top: 1.5rem;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: #B09A90;
  font-style: italic;
}
`;

export function MobileCaseStudyGate() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="mcs-gate">
        <div className="mcs-mono">NT</div>
        <div className="mcs-icon">🖥️</div>
        <h1 className="mcs-title">Built for a bigger screen</h1>
        <p className="mcs-sub">
          This case study has detailed visuals, interactions, and layouts that
          are best experienced on a desktop or laptop.
        </p>
        <a href="/" className="mcs-back">← Back to portfolio</a>
        <p className="mcs-note">or rotate to landscape for a peek</p>
      </div>
    </>
  );
}
