import { AboutBehavior } from "./AboutBehavior";

const css = `
/* ── ABOUT PAGE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.ab-shell {
  background: #ffffff;
  background-image: radial-gradient(circle, rgba(0,0,0,0.055) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  color: #111;
  font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  overflow-x: hidden;
  opacity: 0;
  animation: abFadeIn 700ms ease 150ms forwards;
}
@keyframes abFadeIn { from { opacity: 0; } to { opacity: 1; } }

/* CURSOR */
@media (hover: hover) and (pointer: fine) {
  .ab-shell, .ab-shell a, .ab-shell button,
  .ab-love-card, .ab-frame, .ab-polaroid { cursor: none; }
}
#ab-cursor {
  position: fixed; width: 30px; height: 30px;
  pointer-events: none; transform: translate(-6px, -4px);
  z-index: 9998; font-size: 22px; line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.18));
}
#ab-cursor::before { content: '☝️'; display: block; }
#ab-cursor.ab-cursor-big { font-size: 26px; transform: translate(-7px, -5px); }
#ab-cursor.ab-cursor-big::before { content: '👆'; }

/* ── NAV ── */
.ab-nav {
  position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
  z-index: 100;
  display: flex; align-items: center; gap: 4px;
  padding: 5px;
  background: rgba(255,255,255,0.45);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255,255,255,0.55);
  border-radius: 99px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8);
  white-space: nowrap;
  transition: background 0.3s, box-shadow 0.3s;
}
.ab-nav-brand {
  display: flex; align-items: center; gap: 8px;
  padding: 0.45rem 0.9rem 0.45rem 0.6rem;
  border-right: 1px solid rgba(0,0,0,0.07);
  margin-right: 2px;
  text-decoration: none;
  color: inherit;
}
.ab-nav-initials {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; color: #111;
  background: rgba(0,0,0,0.06); padding: 2px 7px; border-radius: 6px;
}
.ab-nav-clock {
  font-size: 0.74rem; font-variant-numeric: tabular-nums;
  color: rgba(30,30,40,0.45); font-weight: 500; letter-spacing: 0.03em;
}
.ab-nav-links { display: flex; align-items: center; gap: 2px; }
.ab-nav-link {
  font-size: 0.76rem; letter-spacing: 0.02em; font-weight: 500;
  color: rgba(30,30,40,0.60); text-decoration: none;
  padding: 0.55rem 1.1rem; border-radius: 99px;
  transition: color 0.18s, background 0.18s;
}
.ab-nav-link:hover { background: rgba(0,0,0,0.06); color: #111; }
.ab-nav-link.ab-active { background: #1E90FF; color: #fff; }
.ab-nav-link.ab-active:hover { background: #0066FF; }
.ab-nav-cta {
  display: inline-flex; align-items: center;
  font-size: 0.76rem; letter-spacing: 0.02em; font-weight: 600;
  color: #fff; text-decoration: none;
  padding: 0.55rem 1.2rem; border-radius: 99px;
  background: #111; transition: background 0.18s;
  margin-left: 2px;
}
.ab-nav-cta:hover { background: #333; }

/* ── HERO ── */
.ab-hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
  padding: 9rem 220px 5rem;
  gap: 40px;
  position: relative;
  overflow: hidden;
}
.ab-hero-left { position: relative; z-index: 2; }

.ab-hello {
  font-family: 'Caveat', cursive;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #1E90FF;
  display: block;
  margin-bottom: 0.15rem;
}
.ab-headline {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: clamp(3.5rem, 6.5vw, 5.8rem);
  font-weight: 400;
  color: #111;
  line-height: 1.0;
  letter-spacing: -0.025em;
  margin-bottom: 1.8rem;
}
.ab-headline em {
  font-style: italic;
  background: linear-gradient(90deg, #1E90FF, #00BFFF, #0066FF, #1E90FF);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: abGrad 4s ease infinite;
}
@keyframes abGrad {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.ab-bio {
  font-size: clamp(0.9rem, 1.3vw, 1rem);
  color: #555;
  line-height: 1.85;
  max-width: 440px;
  margin-bottom: 2rem;
}
.ab-bio strong { color: #111; font-weight: 600; }
.ab-bio em { font-style: italic; color: #1E90FF; }
.ab-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1.5rem; }
.ab-chip {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.03em;
  color: #555;
  background: rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.08);
  padding: 5px 12px; border-radius: 99px;
}
.ab-chip-blue {
  background: rgba(30,144,255,0.08);
  border-color: rgba(30,144,255,0.2);
  color: #1E90FF;
}

/* POLAROID */
.ab-hero-right {
  display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 2;
  perspective: 800px;
}
.ab-polaroid-wrap { position: relative; }
.ab-polaroid {
  background: #fff;
  padding: 14px 14px 60px;
  box-shadow: 0 18px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.07);
  border-radius: 3px;
  transform: rotate(3.5deg);
  transition: transform 0.5s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.4s ease;
  width: 275px;
  position: relative;
  transform-style: preserve-3d;
}
.ab-polaroid-photo {
  width: 100%; aspect-ratio: 1 / 1.1;
  object-fit: cover; object-position: top center;
  display: block; border-radius: 1px;
  background: linear-gradient(135deg, #f0f4ff, #e8f0ff);
}
.ab-polaroid-caption {
  position: absolute; bottom: 0; left: 0; right: 0; height: 60px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Caveat', cursive;
  font-size: 1.05rem; color: #777;
}
.ab-tape {
  position: absolute;
  width: 68px; height: 22px;
  background: rgba(255,220,100,0.55);
  border-radius: 2px;
  top: -10px; left: 50%; transform: translateX(-50%) rotate(-1.5deg);
  z-index: 3;
}
.ab-tape::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(90deg,rgba(0,0,0,0.06) 0px,rgba(0,0,0,0.06) 2px,transparent 2px,transparent 6px);
  border-radius: 2px;
}
.ab-tape2 {
  position: absolute;
  width: 46px; height: 18px;
  background: rgba(180,210,255,0.55);
  border-radius: 2px;
  bottom: 38px; right: -16px; transform: rotate(10deg);
  z-index: 3;
}
.ab-tape2::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(90deg,rgba(0,0,0,0.05) 0px,rgba(0,0,0,0.05) 2px,transparent 2px,transparent 6px);
  border-radius: 2px;
}
/* subtle polaroid shadow on ground */
.ab-polaroid::after {
  content: '';
  position: absolute; bottom: -18px; left: 10%; right: 10%; height: 18px;
  background: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.12) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

/* FLOATING PILLS */
.ab-float-pill {
  position: absolute;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 99px;
  padding: 5px 14px;
  font-family: 'Caveat', cursive;
  font-size: 1rem; color: #555;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  pointer-events: none;
  white-space: nowrap;
  z-index: 1;
}
.ab-float-star {
  position: absolute; pointer-events: none; opacity: 0.22; z-index: 1;
}
@keyframes abDrift {
  0%,100% { transform: translateY(0) rotate(var(--r, 0deg)); }
  50% { transform: translateY(-11px) rotate(var(--r, 0deg)); }
}

/* ── LOVES SECTION ── */
.ab-loves {
  padding: 5rem 220px 4rem;
  position: relative;
}
.ab-section-label {
  font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: #1E90FF; margin-bottom: 0.85rem; display: block;
}
.ab-section-title {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300; line-height: 1.1;
  color: #111; margin-bottom: 3rem;
}
.ab-section-title em { font-style: italic; color: #1E90FF; }
.ab-loves-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.ab-love-card {
  background: #fff;
  border-radius: 20px;
  padding: 36px 28px 32px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04), 0 4px 22px rgba(0,0,0,0.05);
  transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}
.ab-love-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.10), 0 2px 10px rgba(0,0,0,0.05);
}
.ab-love-icon {
  font-size: 2.8rem; margin-bottom: 1.2rem; display: block;
  line-height: 1;
  transition: transform 0.38s cubic-bezier(0.34,1.4,0.64,1);
}
.ab-love-card:hover .ab-love-icon { transform: scale(1.22) rotate(-8deg); }
.ab-love-name {
  font-family: 'DM Serif Display', serif;
  font-size: 1.55rem; font-weight: 400; color: #111;
  margin-bottom: 0.5rem; line-height: 1.2;
}
.ab-love-desc {
  font-size: 0.875rem; color: #555; line-height: 1.75;
}
.ab-love-whisper {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.06);
  font-family: 'Caveat', cursive;
  font-size: 0.95rem; color: #bbb;
}
.ab-love-glow {
  position: absolute;
  width: 130px; height: 130px; border-radius: 50%;
  bottom: -35px; right: -35px;
  opacity: 0.06;
  transition: opacity 0.35s, transform 0.5s;
  pointer-events: none;
}
.ab-love-card:hover .ab-love-glow { opacity: 0.11; transform: scale(1.15); }

/* ── PLACES SECTION ── */
.ab-places {
  padding: 4rem 220px 6rem;
  overflow: hidden;
}
.ab-film { margin-top: 2.5rem; }

/* ── POLAROID GRID ── */
.ab-pol-wrap {
  position: relative;
  padding: 20px 0 60px;
}
.ab-pol-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 22px;
  position: relative;
}
/* individual polaroid */
.ab-pol {
  background: #fff;
  padding: 10px 10px 46px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10), 0 1px 5px rgba(0,0,0,0.06);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  transition: transform 0.44s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.35s ease;
  transform: rotate(var(--r, 0deg));
  z-index: 1;
}
.ab-pol:hover {
  transform: rotate(0deg) scale(1.10) translateY(-12px) !important;
  box-shadow: 0 28px 64px rgba(0,0,0,0.18), 0 6px 20px rgba(0,0,0,0.09);
  z-index: 20;
}
.ab-pol-photo {
  width: 100%; aspect-ratio: 1 / 1;
  display: block;
  border-radius: 1px;
  position: relative; overflow: hidden;
}
.ab-pol-photo img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  display: block;
  transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
}
.ab-pol:hover .ab-pol-photo img { transform: scale(1.06); }
.ab-pol-caption {
  position: absolute; bottom: 0; left: 0; right: 0; height: 46px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Caveat', cursive;
  font-size: 0.92rem; color: #888;
  padding: 0 8px; text-align: center; line-height: 1.3;
}
/* hover overlay */
.ab-pol-over {
  position: absolute; inset: 10px 10px 46px;
  background: rgba(0,0,0,0.52);
  backdrop-filter: blur(3px);
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 4px;
  opacity: 0;
  transition: opacity 0.28s ease;
  border-radius: 1px;
  padding: 12px;
  text-align: center;
}
.ab-pol:hover .ab-pol-over { opacity: 1; }
.ab-pol-mem {
  font-family: 'Caveat', cursive;
  font-size: 1.0rem; color: #fff; line-height: 1.45;
}
/* tape strips */
.ab-tape-pol {
  position: absolute;
  height: 18px; border-radius: 2px; z-index: 3;
}
.ab-tape-pol::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(90deg,rgba(0,0,0,0.06) 0,rgba(0,0,0,0.06) 2px,transparent 2px,transparent 6px);
  border-radius: 2px;
}
.ab-tape-pol.tt { width: 54px; top: -9px; left: 50%; transform: translateX(-50%) rotate(-1.5deg); background: rgba(255,220,100,0.55); }
.ab-tape-pol.tl { width: 44px; top: -8px; left: 8px; transform: rotate(-4deg); background: rgba(255,220,100,0.50); }
.ab-tape-pol.tr { width: 44px; top: -8px; right: 8px; transform: rotate(5deg); background: rgba(160,200,255,0.58); }
.ab-tape-pol.tb { width: 44px; top: -8px; right: 12px; transform: rotate(3deg); background: rgba(255,190,200,0.55); }
.ab-tape-pol.tg { width: 50px; top: -9px; left: 50%; transform: translateX(-50%) rotate(2deg); background: rgba(160,220,170,0.55); }

/* doodle annotations */
.ab-anno {
  position: absolute;
  pointer-events: none; z-index: 15;
}
.ab-anno-text {
  font-family: 'Caveat', cursive;
  font-size: 0.9rem; color: rgba(0,0,0,0.38); line-height: 1.35;
}
@media (max-width: 1100px) {
  .ab-pol-grid { grid-template-columns: repeat(3, 1fr); }
  .ab-anno { display: none; }
}
@media (max-width: 700px) {
  .ab-pol-grid { grid-template-columns: repeat(2, 1fr); gap: 22px 14px; }
}

/* ── REVEAL ANIMATION ── */
.ab-reveal {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(4px);
  transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.9s ease;
}
.ab-reveal.ab-visible { opacity: 1; transform: none; filter: blur(0); }
.ab-reveal.ab-from-left { transform: translateX(-52px); filter: blur(4px); }
.ab-reveal.ab-from-right { transform: translateX(52px); filter: blur(4px); }
.ab-reveal.ab-from-left.ab-visible,
.ab-reveal.ab-from-right.ab-visible { transform: none; }
.ab-d1 { transition-delay: 0.08s; }
.ab-d2 { transition-delay: 0.17s; }
.ab-d3 { transition-delay: 0.26s; }
.ab-d4 { transition-delay: 0.36s; }

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .ab-hero { padding: 9rem 100px 5rem; }
  .ab-loves { padding: 5rem 100px; }
  .ab-places { padding: 4rem 100px 5rem; }
}
@media (max-width: 900px) {
  .ab-hero { padding: 8rem 48px 4rem; gap: 32px; }
  .ab-loves { padding: 4rem 48px; }
  .ab-places { padding: 4rem 48px 5rem; }
  .ab-polaroid { width: 240px; }
}
@media (max-width: 700px) {
  .ab-hero {
    grid-template-columns: 1fr;
    padding: 7rem 24px 4rem;
    text-align: center;
  }
  .ab-hero-right { order: -1; }
  .ab-bio { margin: 0 auto 2rem; }
  .ab-chips { justify-content: center; }
  .ab-loves { padding: 4rem 20px; }
  .ab-loves-grid { grid-template-columns: 1fr; gap: 14px; }
  .ab-places { padding: 4rem 20px 5rem; }
  .ab-nav { display: none; }
  .ab-float-pill { display: none; }
}
`;

const navHtml = `
<nav class="ab-nav" id="ab-nav">
  <a href="/" class="ab-nav-brand">
    <span class="ab-nav-initials">NT</span>
    <time class="ab-nav-clock" id="ab-clock">--:--</time>
  </a>
  <div class="ab-nav-links">
    <a href="/#work" class="ab-nav-link">Work</a>
    <a href="/about" class="ab-nav-link ab-active">About</a>
    <a href="/#contact" class="ab-nav-link">Contact</a>
  </div>
  <a href="/#contact" class="ab-nav-cta">Get in Touch</a>
</nav>
`;

const heroHtml = `
<section class="ab-hero">

  <!-- ── LEFT: intro text ── -->
  <div class="ab-hero-left ab-reveal">
    <span class="ab-hello">hi there, i'm 👋</span>
    <h1 class="ab-headline">
      Nikunj<br><em>Tyagi.</em>
    </h1>
    <p class="ab-bio">
      A <strong>product designer</strong> who makes things look intentional
      even when they're 10 minutes before the deadline ✨<br><br>
      I design B2B products, healthcare platforms, and occasionally
      my own sleep schedule — <em>still in beta 🐛</em><br><br>
      Professionally, I turn messy problems into clean experiences.
      Personally, I turn cold coffee into design decisions. ☕
    </p>
    <div class="ab-chips">
      <span class="ab-chip">she / her</span>
      <span class="ab-chip">India 🇮🇳</span>
      <span class="ab-chip ab-chip-blue">3+ yrs designing</span>
      <span class="ab-chip">3am designer 🌙</span>
    </div>
  </div>

  <!-- ── RIGHT: polaroid ── -->
  <div class="ab-hero-right ab-reveal ab-d2">
    <div class="ab-polaroid-wrap">
      <div class="ab-polaroid">
        <div class="ab-tape"></div>
        <div class="ab-tape2"></div>
        <img src="/nikunj.png" alt="Nikunj Tyagi" class="ab-polaroid-photo" />
        <span class="ab-polaroid-caption">caffeinated &amp; designing ☕</span>
      </div>
    </div>
  </div>

  <!-- floating decoratives -->
  <div class="ab-float-pill" style="top:22%;left:5%;animation:abDrift 5s ease-in-out infinite;--r:-3deg;">coffee first ☕</div>
  <div class="ab-float-pill" style="bottom:22%;right:7%;animation:abDrift 6.2s ease-in-out infinite 1.6s;--r:2deg;">pixels &gt; sleep ✦</div>
  <span class="ab-float-star" style="top:17%;right:14%;animation:abDrift 4.5s ease-in-out infinite 0.4s;font-size:1.5rem;">✦</span>
  <span class="ab-float-star" style="bottom:38%;left:2%;animation:abDrift 5.8s ease-in-out infinite 1s;font-size:1.1rem;">✦</span>
  <span class="ab-float-star" style="top:52%;right:2%;animation:abDrift 7s ease-in-out infinite 2s;font-size:0.85rem;">✦</span>

</section>
`;

const lovesHtml = `
<section class="ab-loves" id="ab-loves">
  <h2 class="ab-section-title ab-reveal">
    Things I <em>love</em><br>a little too much.
  </h2>
  <div class="ab-loves-grid">

    <div class="ab-love-card ab-reveal ab-d1">
      <span class="ab-love-icon">☕</span>
      <h3 class="ab-love-name">Cafés</h3>
      <p class="ab-love-desc">
        Corner seat only. Lo-fi playlist. Cold drink. Zero eye contact.
        That's my office. I do my best thinking with bad wifi and good ambiance.
      </p>
      <p class="ab-love-whisper">current ritual: 9am café, no exceptions</p>
      <div class="ab-love-glow" style="background:#1E90FF;"></div>
    </div>

    <div class="ab-love-card ab-reveal ab-d2">
      <span class="ab-love-icon">🧊</span>
      <h3 class="ab-love-name">Cold Coffee</h3>
      <p class="ab-love-desc">
        Hot coffee is a compromise. Iced americano is a way of life.
        I take my coffee like I take my designs — cold, precise,
        and completely non-negotiable.
      </p>
      <p class="ab-love-whisper">streak: same order, 47 days straight</p>
      <div class="ab-love-glow" style="background:#00BFFF;"></div>
    </div>

    <div class="ab-love-card ab-reveal ab-d3">
      <span class="ab-love-icon">✈️</span>
      <h3 class="ab-love-name">Travel</h3>
      <p class="ab-love-desc">
        New cities rewire my brain. Every trip comes back as a design
        reference, a rethought mental model, or at minimum — a really
        good story for interviews.
      </p>
      <p class="ab-love-whisper">currently planning: everywhere</p>
      <div class="ab-love-glow" style="background:#1E90FF;"></div>
    </div>

  </div>
</section>
`;

const placesHtml = `
<section class="ab-places" id="ab-places">
  <h2 class="ab-section-title ab-reveal">
    Good <em>experiences.</em>
  </h2>

  <div class="ab-pol-wrap">

    <!-- doodle annotation 1 -->
    <div class="ab-anno" style="top:-10px;right:18%;">
      <span class="ab-anno-text">still living in my head rent-free 🧠</span>
      <svg width="58" height="44" viewBox="0 0 58 44" fill="none" style="margin-top:2px;">
        <path d="M 52 4 C 44 8, 28 18, 8 36" stroke="rgba(0,0,0,0.28)" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M 8 36 L 14 30 M 8 36 L 16 38" stroke="rgba(0,0,0,0.28)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>

    <!-- doodle annotation 2 -->
    <div class="ab-anno" style="top:42%;left:-20px;transform:translateY(-50%);">
      <svg width="64" height="48" viewBox="0 0 64 48" fill="none" style="margin-bottom:4px;">
        <path d="M 6 44 C 14 32, 38 20, 58 8" stroke="rgba(0,0,0,0.26)" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M 58 8 L 50 12 M 58 8 L 54 16" stroke="rgba(0,0,0,0.26)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span class="ab-anno-text">would return in<br>2 seconds flat</span>
    </div>

    <!-- doodle annotation 3 -->
    <div class="ab-anno" style="bottom:80px;right:-10px;">
      <span class="ab-anno-text">10/10 no notes ✦</span>
      <svg width="50" height="40" viewBox="0 0 50 40" fill="none" style="margin-top:3px;">
        <path d="M 44 6 C 36 14, 20 22, 6 32" stroke="rgba(0,0,0,0.26)" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M 6 32 L 12 26 M 6 32 L 14 34" stroke="rgba(0,0,0,0.26)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>

    <div class="ab-pol-grid">

      <!-- 01 portrait -->
      <div class="ab-pol ab-reveal" style="--r:-4deg;transition-delay:0s;">
        <div class="ab-tape-pol tt"></div>
        <div class="ab-pol-photo">
          <img src="/about/portrait.jpg" alt="Nikunj" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">me, on a good<br>hair day 🌟</p>
        </div>
        <span class="ab-pol-caption">the designer herself</span>
      </div>

      <!-- 02 sky -->
      <div class="ab-pol ab-reveal" style="--r:3deg;transition-delay:0.07s;">
        <div class="ab-tape-pol tr"></div>
        <div class="ab-pol-photo">
          <img src="/about/sky.jpg" alt="sky" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">headspace<br>loading... ☁️</p>
        </div>
        <span class="ab-pol-caption">somewhere up there</span>
      </div>

      <!-- 03 sky.png -->
      <div class="ab-pol ab-reveal" style="--r:-2deg;transition-delay:0.14s;">
        <div class="ab-tape-pol tl tg"></div>
        <div class="ab-pol-photo">
          <img src="/about/sky.png" alt="sky" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">same sky,<br>different mood</p>
        </div>
        <span class="ab-pol-caption">blue hour</span>
      </div>

      <!-- 04 stuff -->
      <div class="ab-pol ab-reveal" style="--r:5deg;transition-delay:0.21s;">
        <div class="ab-tape-pol tt tb"></div>
        <div class="ab-pol-photo">
          <img src="/about/stuff.png" alt="stuff" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">bits &amp; pieces<br>of my world</p>
        </div>
        <span class="ab-pol-caption">the good stuff</span>
      </div>

      <!-- 05 work -->
      <div class="ab-pol ab-reveal" style="--r:-5deg;transition-delay:0.28s;">
        <div class="ab-tape-pol tt"></div>
        <div class="ab-pol-photo">
          <img src="/about/work.jpg" alt="work" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">in the zone,<br>do not disturb ☕</p>
        </div>
        <span class="ab-pol-caption">deep work mode</span>
      </div>

      <!-- 06 Cafe -->
      <div class="ab-pol ab-reveal" style="--r:4deg;transition-delay:0.35s;">
        <div class="ab-tape-pol tl"></div>
        <div class="ab-pol-photo">
          <img src="/Image/hero/Cafe.png" alt="cafe" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">my unofficial<br>office ☕</p>
        </div>
        <span class="ab-pol-caption">corner seat, always</span>
      </div>

      <!-- 07 Book -->
      <div class="ab-pol ab-reveal" style="--r:-3deg;transition-delay:0.42s;">
        <div class="ab-tape-pol tr"></div>
        <div class="ab-pol-photo">
          <img src="/Image/hero/Book.png" alt="book" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">current obsession:<br>just one more chapter 📖</p>
        </div>
        <span class="ab-pol-caption">always reading</span>
      </div>

      <!-- 08 flower -->
      <div class="ab-pol ab-reveal" style="--r:6deg;transition-delay:0.49s;">
        <div class="ab-tape-pol tt tg"></div>
        <div class="ab-pol-photo">
          <img src="/Image/hero/flower.png" alt="flower" />
        </div>
        <div class="ab-pol-over">
          <p class="ab-pol-mem">little joys &gt;<br>everything else 🌸</p>
        </div>
        <span class="ab-pol-caption">small things matter</span>
      </div>

    </div>
  </div>
</section>
`;

export function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="ab-shell">
        <AboutBehavior />
        <div id="ab-cursor" aria-hidden="true"></div>
        <div dangerouslySetInnerHTML={{ __html: navHtml }} />
        <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
        <div dangerouslySetInnerHTML={{ __html: lovesHtml }} />
        <div dangerouslySetInnerHTML={{ __html: placesHtml }} />
      </div>
    </>
  );
}
