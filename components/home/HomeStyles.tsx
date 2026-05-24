const css = `:root {
  --bg:#FFFFFF; --bg2:#F8F8F8; --bg3:#F0F0F0; --bg4:#E5E5E5; --surface:#D5D5D5;
  --border:rgba(0,0,0,0.08); --border2:rgba(0,0,0,0.14);
  --ink:#111111; --ink2:#222222; --ink3:#555555; --ink4:#999999;
  --pink:#1E90FF; --pink2:#0066FF; --pink3:rgba(30,144,255,0.08); --pink5:#EEF6FF;
  --serif:'DM Serif Display',Georgia,serif;
  --sans:'Instrument Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --hand:var(--font-caveat,'Caveat',cursive);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;scroll-snap-type:y proximity;scroll-padding-top:76px;}
.hero,.work,.dsz-section,.process-section,.about,.gallery-section,.scrapbook-section,.shelf-section,.testimonials-section,.journey,.home-loves,.home-xp,.signoff,.contact{scroll-snap-align:start;}
body{
  background:#ffffff;
  background-image:linear-gradient(rgba(0,0,0,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.045) 1px,transparent 1px);
  background-size:28px 28px;
  color:var(--ink);
  font-family:var(--sans);
  font-weight:300;
  line-height:1.6;
  overflow-x:hidden;
}
::selection{background:rgba(30,144,255,0.22);color:#0a1a2e;}
.home-page-shell{
  opacity:1;
  overflow-x:hidden;
}
body.home-loading .home-page-shell{
  opacity:0;
}
.section-fade{
  opacity:0;
  filter:blur(5px);
  transition:opacity 760ms ease,filter 760ms ease;
}
.section-fade.section-visible{
  opacity:1;
  filter:blur(0);
}
@keyframes homePageFadeIn{
  from{opacity:0;}
  to{opacity:1;}
}
body.home-loading{overflow:hidden;}
.home-loader{
  position:fixed;
  inset:0;
  z-index:99999;
  display:flex;
  align-items:center;
  justify-content:center;
  background:
    radial-gradient(circle at 50% 45%,rgba(220,242,255,0.95) 0%,rgba(245,250,255,0.96) 34%,#f8fbff 72%),
    linear-gradient(180deg,#ffffff 0%,#f2f8ff 100%);
  color:#111827;
  overflow:hidden;
  animation:none;
}
.home-loader::before{
  content:'';
  position:absolute;
  left:50%;
  top:50%;
  width:220px;
  height:220px;
  border-radius:46% 54% 58% 42%/48% 42% 58% 52%;
  background:
    radial-gradient(circle at 32% 30%,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.18) 36%,transparent 58%),
    radial-gradient(circle at 64% 66%,rgba(92,187,255,0.28) 0%,transparent 54%),
    rgba(182,226,255,0.28);
  filter:blur(0.2px);
  transform:translate(-50%,-50%);
  box-shadow:inset 0 1px 5px rgba(255,255,255,0.86),0 18px 70px rgba(105,184,255,0.20);
  animation:loaderLiquid 5.8s ease-in-out infinite;
}
.home-loader.is-exit{animation:loaderExit 920ms ease forwards;}
.home-loader-num{
  font-family:'DM Mono',ui-monospace,monospace;
  font-size:clamp(1.1rem,3vw,2.25rem);
  font-weight:500;
  letter-spacing:0;
  line-height:1;
  color:#1a1a1a;
  transition:opacity 180ms ease,transform 180ms ease;
  position:relative;
  z-index:2;
}
.home-loader.is-exit .home-loader-num{opacity:0;transform:scale(0.98);}
@keyframes loaderLiquid{
  0%,100%{border-radius:46% 54% 58% 42%/48% 42% 58% 52%;transform:translate(-50%,-50%) translateY(0) rotate(0deg) scale(1);}
  25%{border-radius:54% 46% 44% 56%/42% 58% 46% 54%;transform:translate(-50%,-50%) translateY(-18px) rotate(8deg) scale(1.035);}
  50%{border-radius:58% 42% 45% 55%/40% 56% 44% 60%;transform:translate(-50%,-50%) translateY(10px) rotate(12deg) scale(1.06);}
  75%{border-radius:40% 60% 55% 45%/58% 44% 56% 42%;transform:translate(-50%,-50%) translateY(-8px) rotate(-9deg) scale(0.98);}
}
@keyframes loaderExit{
  0%,28%{opacity:1;background:#fff;}
  100%{opacity:0;visibility:hidden;}
}
.water-surface{
  position:relative;
  overflow:hidden;
  isolation:isolate;
  --water-x:50%;
  --water-y:50%;
}
.water-surface::before,
.water-surface::after{
  content:'';
  position:absolute;
  left:var(--water-x);
  top:var(--water-y);
  width:18px;
  height:18px;
  border-radius:50%;
  transform:translate(-50%,-50%) scale(0);
  pointer-events:none;
  z-index:0;
  opacity:0;
}
.water-surface::before{
  border:1px solid rgba(30,144,255,0.34);
  box-shadow:
    0 0 0 10px rgba(30,144,255,0.05),
    0 0 0 24px rgba(30,144,255,0.035),
    inset 0 0 18px rgba(255,255,255,0.72);
}
.water-surface::after{
  background:
    radial-gradient(circle,rgba(255,255,255,0.72) 0 12%,rgba(30,144,255,0.18) 13% 20%,transparent 21%),
    repeating-radial-gradient(circle,rgba(30,144,255,0.23) 0 1px,transparent 2px 10px);
  filter:blur(0.2px);
  mix-blend-mode:multiply;
}
.water-surface:hover::before{animation:waterRing 1.2s ease-out infinite;}
.water-surface:hover::after{animation:waterSurface 1.2s ease-out infinite;}
.water-surface > *{position:relative;z-index:1;}
.nav-link-item.water-surface,
.nav-cta.water-surface{isolation:auto;}
.nav-link-item.water-surface::before,
.nav-link-item.water-surface::after,
.nav-cta.water-surface::before,
.nav-cta.water-surface::after{z-index:-1;}
@keyframes waterRing{
  0%{opacity:0.55;transform:translate(-50%,-50%) scale(0.25);}
  72%{opacity:0.22;}
  100%{opacity:0;transform:translate(-50%,-50%) scale(8);}
}
@keyframes waterSurface{
  0%{opacity:0.42;transform:translate(-50%,-50%) scale(0.45) rotate(0deg);}
  100%{opacity:0;transform:translate(-50%,-50%) scale(9) rotate(18deg);}
}


/* ── NAV — compact floating pill ── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;justify-content:center;
  padding:16px 24px;
  box-sizing:border-box;
  pointer-events:none;
}
.nav-pill{
  display:inline-flex;align-items:center;
  height:48px;padding:0 14px;
  border-radius:99px;
  background:#ffffff;
  border:0.5px solid rgba(0,0,0,0.10);
  border-bottom:1px solid rgba(0,0,0,0.08);
  transition:background 0.25s ease,border-color 0.25s ease,box-shadow 0.25s ease;
  pointer-events:all;
  white-space:nowrap;
  box-shadow:0 2px 12px rgba(0,0,0,0.06);
}
nav.scrolled .nav-pill{
  background:#ffffff;
  border-color:rgba(0,0,0,0.12);
  box-shadow:0 4px 20px rgba(0,0,0,0.08);
}
.nav-monogram{
  width:32px;height:32px;border-radius:50%;
  background:#1a1a1a;color:#fff;
  font-size: 15px;font-weight: 600;letter-spacing:0.05em;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--sans);flex-shrink:0;
  margin-right:20px;
  text-decoration:none;
}
.nav-monogram-link{
  cursor:pointer;
  transition:background 0.2s ease,transform 0.22s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.2s ease;
}
.nav-monogram-link:hover{
  background:#1E90FF;
  transform:scale(1.1);
  box-shadow:0 4px 14px rgba(30,144,255,0.35);
}
.nav-divider{width:1px;height:18px;background:rgba(0,0,0,0.08);margin:0 28px;flex-shrink:0;}
.nav-link-item{
  display:inline-flex;align-items:center;gap:3px;
  font-size: 15px;color:rgba(0,0,0,0.45);text-decoration:none;
  padding:6px 22px;border-radius:99px;
  transition:background 0.15s,color 0.15s;
  font-family:var(--sans);font-weight:400;
}
.nav-link-item:hover{background:rgba(0,0,0,0.05);color:rgba(0,0,0,0.85);}
.nav-link-item.active{color:rgba(0,0,0,0.45);}
.nav-link-resume{font-weight:500;}
.nav-resume-arrow{font-size: 15px;}
.nav-clock-group{display:flex;align-items:center;gap:6px;margin-right:6px;}
.nav-dot{
  width:5px;height:5px;border-radius:50%;
  background:#22c55e;flex-shrink:0;position:relative;
}
.nav-dot::after{
  content:'';position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%) scale(0.6);
  width:100%;height:100%;
  border:1.5px solid #22c55e;border-radius:50%;
  opacity:0.6;animation:navDotPulse 2s ease-out infinite;
}
@keyframes navDotPulse{
  from{transform:translate(-50%,-50%) scale(0.6);opacity:0.6;}
  to{transform:translate(-50%,-50%) scale(1.8);opacity:0;}
}
.nav-time{
  font-size: 15px;color:rgba(0,0,0,0.35);
  font-variant-numeric:tabular-nums;
  font-family:var(--sans);font-weight:400;
}
.nav-city{
  font-size: 15px;text-transform:uppercase;letter-spacing:0.08em;
  color:rgba(0,0,0,0.25);font-family:var(--sans);
  margin-left:4px;
}
.nav-cta{
  display:inline-flex;align-items:center;gap:5px;
  font-size: 15px;font-weight: 600;
  padding:5px 12px;border-radius:99px;
  background:#1a1a1a;color:#fff;text-decoration:none;
  font-family:var(--sans);
  transition:background 0.15s;
}
.nav-cta:hover{background:#333;}

/* ── HERO ── */
.hero{min-height:100vh;display:grid;grid-template-columns:50% 50%;align-items:start;padding:12rem 200px 4rem 200px;gap:40px;position:relative;overflow:visible;}

/* about-style intro hero */
.hi-left{position:relative;z-index:2;text-align:left;padding-top:1.5rem;}
.hi-right{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;position:relative;z-index:2;}
.hi-hello{font-family:var(--hand);font-size:clamp(1.9rem,2.9vw,2.5rem);color:var(--pink);display:block;margin-bottom:0.1rem;font-weight:700;}
.hi-headline{font-family:var(--serif);font-size:clamp(3.5rem,6.5vw,5.8rem);font-weight:400;color:var(--ink);line-height:1.0;letter-spacing:-0.025em;margin-bottom:1.2rem;}
.hi-headline em{font-style:italic;background:linear-gradient(90deg,#1E90FF,#00BFFF,#0066FF,#1E90FF);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradientShift 4s ease infinite;}
.hi-bio-line{font-size:clamp(1.02rem,1.55vw,1.14rem);color:var(--ink2);font-weight:500;line-height:1.75;max-width:520px;margin-bottom:0.65rem;opacity:0;animation:hiLineIn 0.55s cubic-bezier(0.22,1,0.36,1) both;}
@keyframes hiLineIn{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
.hi-bio-line:last-of-type{margin-bottom:0;}

/* ── TYPEWRITER CURSOR ── */
.hi-tw-cursor{display:inline-block;color:#1E90FF;font-weight:300;animation:twBlink 0.6s step-end infinite;line-height:1;margin-left:1px;}
@keyframes twBlink{0%,100%{opacity:1;}50%{opacity:0;}}

/* ── SUB-LINE (nik / good friends) ── */
.hi-sub-line{font-size:clamp(0.95rem,1.35vw,1.05rem);color:var(--ink3);font-style:italic;max-width:520px;margin-bottom:1.1rem;opacity:0;animation:hiSubFadeIn 0.55s cubic-bezier(0.22,1,0.36,1) 1.4s forwards;}
@keyframes hiSubFadeIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.hi-sub-line strong{font-style:normal;font-weight:700;color:var(--ink2);}
.hi-aside{font-size:0.84em;color:var(--ink4);font-style:italic;}

/* ── PASTEL PILL (chill girl) ── */
.hi-pill-pastel{display:inline-flex;align-items:center;background:rgba(255,182,193,0.18);border:1px solid rgba(255,150,170,0.3);border-radius:99px;padding:2px 12px 3px;color:#b5466b;font-weight:600;font-size:0.97em;cursor:default;transition:background 0.2s,transform 0.25s cubic-bezier(0.34,1.56,0.64,1);}
.hi-pill-pastel:hover{background:rgba(255,182,193,0.35);transform:translateY(-2px) rotate(-1.5deg);}

/* ── FIGMA INLINE CHIP ── */
.hi-figma-chip{display:inline-flex;align-items:center;gap:5px;background:rgba(162,89,255,0.07);border:1px solid rgba(162,89,255,0.18);border-radius:6px;padding:2px 9px 3px 6px;font-weight:700;color:#7c3fc0;vertical-align:middle;position:relative;top:-1px;font-size:0.9em;font-style:normal;cursor:default;transition:background 0.2s,transform 0.25s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.25s;}
.hi-figma-chip:hover{background:rgba(162,89,255,0.14);transform:translateY(-2px) scale(1.05);box-shadow:0 4px 12px rgba(162,89,255,0.18);}
.hi-figma-logo{flex-shrink:0;display:block;}

/* ── STRIKETHROUGH (delay) ── */
.hi-strike-word{position:relative;display:inline-block;cursor:default;}
.hi-strike-word::after{content:'';position:absolute;left:0;top:54%;width:100%;height:2px;background:#c94040;transform:scaleX(0);transform-origin:left;transition:transform 0.45s cubic-bezier(0.22,1,0.36,1);border-radius:2px;}
.hi-strike-word.strike-drawn::after{transform:scaleX(1);}
.hi-strike-word.strike-drawn:hover::after{transform:scaleX(0);transform-origin:right;transition:transform 0.3s ease;}

/* ── UNDERLINE DRAW (good layout) ── */
.hi-ul-draw{position:relative;display:inline-block;}
.hi-ul-draw::after{content:'';position:absolute;left:0;bottom:-3px;width:100%;height:2px;background:#1E90FF;border-radius:99px;transform:scaleX(0);transform-origin:left;transition:transform 0.6s cubic-bezier(0.22,1,0.36,1);}
.hi-ul-draw.ul-active::after{transform:scaleX(1);animation:ulGlow 2.5s ease-in-out 0.65s infinite;}
@keyframes ulGlow{0%,100%{box-shadow:none;opacity:1;}50%{box-shadow:0 0 10px rgba(30,144,255,0.55);opacity:0.8;}}

/* ── STICKY COFFEE NOTE ── */
.hi-sticky-coffee{display:inline-block;background:#FFF9C4;border-radius:3px;padding:8px 16px 10px;box-shadow:2px 4px 16px rgba(0,0,0,0.12),0 1px 3px rgba(0,0,0,0.06);font-family:var(--hand);font-size:1.05rem;line-height:1.4;color:#4a3a00;font-weight:600;opacity:0;margin:0.75rem 0 0.9rem;width:fit-content;animation:stickyPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 2.1s both;}
.hi-sticky-coffee.float-on{opacity:1;animation:stickyFloat 5s ease-in-out infinite;}
@keyframes stickyPop{0%{opacity:0;transform:rotate(-6deg) scale(0.78) translateY(16px);}65%{opacity:1;transform:rotate(-0.5deg) scale(1.08) translateY(-5px);}82%{transform:rotate(-2deg) scale(0.97) translateY(2px);}100%{opacity:1;transform:rotate(-1.5deg) scale(1) translateY(0);}}
@keyframes stickyFloat{0%,100%{transform:rotate(-1.5deg) translateY(0);}50%{transform:rotate(-1.5deg) translateY(-5px);}}

/* ── FOOTNOTE (nobody asked me to) ── */
.hi-footnote{font-size:0.84em;color:var(--ink4);font-style:italic;opacity:0.78;}

/* ── PHOTO (right side hero) ── */
.hi-scrapbook{position:relative;width:340px;height:420px;flex-shrink:0;}

/* polaroid CSS frame */
.hi-polaroid-css{
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border:1px solid #e0e0e0;
  padding:10px 10px 56px;
  box-shadow:0 6px 28px rgba(0,0,0,0.10),0 1px 5px rgba(0,0,0,0.05);
  border-radius:2px;
  width:300px;
  z-index:3;
}
.hi-mai{
  width:100%;
  height:280px;
  object-fit:cover;
  object-position:top center;
  display:block;
  border-radius:1px;
}
.hi-pill{position:absolute;background:rgba(255,255,255,0.78);backdrop-filter:blur(8px);border:1px solid rgba(0,0,0,0.07);border-radius:99px;padding:5px 14px;font-family:var(--hand);font-size:1rem;color:var(--ink3);box-shadow:0 2px 8px rgba(0,0,0,0.05);pointer-events:none;white-space:nowrap;z-index:1;}
.hi-star{position:absolute;pointer-events:none;opacity:0.22;z-index:1;}
@keyframes hiDrift{0%,100%{transform:translateY(0);}50%{transform:translateY(-11px);}}

/* ── PAPER CLIP CARD STACK ── */
.hi-cs-wrap{position:relative;width:400px;height:430px;cursor:pointer;flex-shrink:0;}

/* Blue structural back cards — muted, peek only 12-16px beyond front card */
.hi-cs-back,.hi-cs-mid{position:absolute;width:340px;height:340px;left:30px;top:65px;border-radius:16px;}
.hi-cs-back{background:#D0DDE6;z-index:1;transform:rotate(-4deg) translate(-7px,6px);}
.hi-cs-mid{background:#C4D4DF;z-index:2;transform:rotate(3deg) translate(7px,4px);}

/* Photo cards — all anchored at same base position */
.hi-cs-card{
  position:absolute;
  width:340px;height:340px;
  left:30px;top:65px;
  border-radius:12px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.15);
  box-shadow:0 10px 40px rgba(0,0,0,0.16),0 2px 10px rgba(0,0,0,0.08);
}

/* Card states */
.hi-cs-active{z-index:4;opacity:1;transform:translate(0,0) scale(1);}
.hi-cs-behind{z-index:2;opacity:0;transform:scale(0.93);pointer-events:none;}

/* Exit: slides bottom-left + rotates slightly + fades */
@keyframes hiCsExit{
  from{opacity:1;transform:translate(0,0) scale(1) rotate(0deg);}
  to  {opacity:0;transform:translate(-40px,40px) scale(0.9) rotate(-5deg);}
}
/* Enter: grows from behind + fades in */
@keyframes hiCsEnter{
  from{opacity:0;transform:scale(0.90);}
  to  {opacity:1;transform:scale(1);}
}
.hi-cs-exiting{animation:hiCsExit 0.28s ease-in forwards;z-index:5;pointer-events:none;}
.hi-cs-entering{animation:hiCsEnter 0.28s ease-out forwards;z-index:4;}

/* Photo fills entire card */
.hi-cs-img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}

/* Bottom gradient — 35% height, 50% black at very bottom edge */
.hi-cs-grad{
  position:absolute;bottom:0;left:0;right:0;height:35%;
  background:linear-gradient(to top,rgba(0,0,0,0.50) 0%,transparent 100%);
  pointer-events:none;z-index:1;
}

/* Caption — Caveat, white, inside gradient zone, explicit weight */
.hi-cs-cap{
  position:absolute;bottom:22px;left:0;right:0;
  text-align:center;
  font-family:var(--hand);font-size:16px;font-weight:400;color:#fff;
  letter-spacing:0.01em;pointer-events:none;z-index:2;
}

/* Hover label — frosted pill, upper-middle of photo */
.hi-cs-label{
  position:absolute;top:40%;left:50%;
  transform:translate(-50%,-50%);
  background:rgba(0,0,0,0.50);color:#fff;
  font-size: 15px;font-weight: 600;letter-spacing:0.05em;
  padding:4px 10px;border-radius:99px;
  pointer-events:none;opacity:0;
  transition:opacity 0.2s ease;
  white-space:nowrap;font-family:var(--sans);z-index:5;
}
.hi-cs-wrap:hover .hi-cs-active .hi-cs-label{opacity:1;}

/* Paper clip — centered on front card top edge, smaller */
.hi-cs-clip{
  position:absolute;
  left:50%;top:22px;
  transform:translateX(-50%);
  z-index:10;pointer-events:none;
}

.cursor-glow{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,0.03) 0%,transparent 70%);pointer-events:none;transform:translate(-50%,-50%);transition:left 0.08s ease,top 0.08s ease;z-index:0;}

/* canvas wave injected by HomeBehavior — no static CSS needed */
#heroWaveCanvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;}

/* hero photo cards */
.hero-cards{display:flex;align-items:flex-end;justify-content:center;gap:12px;margin-bottom:2.5rem;position:relative;z-index:2;height:110px;}
.hero-card{width:96px;height:78px;border-radius:16px;background:#fff;border:1px solid rgba(0,0,0,0.07);box-shadow:0 4px 18px rgba(0,0,0,0.08),0 1px 4px rgba(0,0,0,0.04);overflow:hidden;cursor:pointer;position:relative;flex-shrink:0;transition:width 0.45s cubic-bezier(0.34,1.4,0.64,1),height 0.45s cubic-bezier(0.34,1.4,0.64,1),transform 0.45s cubic-bezier(0.34,1.4,0.64,1),box-shadow 0.35s ease,z-index 0s;}
.hc-1{transform:rotate(-9deg) translateY(10px);}.hc-2{transform:rotate(-3deg) translateY(4px);}.hc-3{transform:rotate(4deg) translateY(6px);}.hc-4{transform:rotate(9deg) translateY(12px);}
.hero-card:hover{width:168px;height:126px;transform:rotate(0deg) translateY(-18px) scale(1.02)!important;box-shadow:0 28px 64px rgba(0,0,0,0.15),0 6px 20px rgba(0,0,0,0.07);z-index:10;border-radius:20px;}
.hero-cards:has(.hc-1:hover) .hc-2{transform:rotate(-1deg) translateX(10px) translateY(2px);}
.hero-cards:has(.hc-2:hover) .hc-1{transform:rotate(-10deg) translateX(-8px) translateY(12px);}
.hero-cards:has(.hc-2:hover) .hc-3{transform:rotate(1deg) translateX(10px) translateY(3px);}
.hero-cards:has(.hc-3:hover) .hc-2{transform:rotate(-4deg) translateX(-8px) translateY(6px);}
.hero-cards:has(.hc-3:hover) .hc-4{transform:rotate(5deg) translateX(8px) translateY(6px);}
.hero-cards:has(.hc-4:hover) .hc-3{transform:rotate(5deg) translateX(-8px) translateY(8px);}
.hc-photo{width:100%;height:74%;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.hc-emoji{font-size:1.5rem;transition:font-size 0.3s ease;}
.hero-card:hover .hc-emoji{font-size:2.2rem;}
.hc-label{position:absolute;bottom:0;left:0;right:0;padding:5px 9px;font-size: 15px;letter-spacing:0.06em;font-weight: 600;color:var(--ink2);background:rgba(255,255,255,0.92);backdrop-filter:blur(6px);text-transform:uppercase;font-family: Lato, sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;transform:translateY(4px);transition:opacity 0.25s ease,transform 0.25s ease;}
.hero-card:hover .hc-label{opacity:1;transform:translateY(0);}

/* hero name */
.hero-name-wrap{text-align:center;position:relative;z-index:2;opacity:0;}
.hero-name-wrap.enter{opacity:1;}
.hero-name-wrap.enter .hero-line1{animation:linePresent 0.7s cubic-bezier(0.34,1.2,0.64,1) 0s both;}
.hero-name-wrap.enter .hero-line2{animation:linePresent 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.13s both;}
.hero-name-wrap.enter .hero-line3{animation:linePresent 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.26s both;}
@keyframes linePresent{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
.hero-text{text-align:center;max-width:700px;padding:0 24px;}
.hero-line1{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(26px,4vw,46px);color:#111827;line-height:1.2;letter-spacing:-0.02em;display:flex;flex-wrap:nowrap;align-items:baseline;justify-content:center;gap:0 8px;margin:0;white-space:nowrap;}
.typed-role{font-family:'DM Serif Display',serif;font-style:italic;background:linear-gradient(90deg,#1E90FF,#00BFFF,#0066FF,#1E90FF);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradientShift 4s ease infinite;}
.hero-cursor{display:inline-block;width:3px;height:0.82em;background:#1E90FF;margin-left:2px;vertical-align:middle;border-radius:1px;animation:blink 1s step-start infinite;}
.hero-line2{margin-top:14px;font-size:clamp(13px,1.6vw,16px);font-weight:400;color:#6B7280;line-height:1.7;letter-spacing:-0.01em;}
.hero-line3{margin-top:18px;display:inline-flex;align-items:center;gap:7px;font-size: 15px;font-weight: 600;color:#374151;background:rgba(255,255,255,0.85);border:1px solid rgba(0,0,0,0.08);border-radius:100px;padding:6px 16px;backdrop-filter:blur(4px);box-shadow:0 2px 8px rgba(0,0,0,0.06);}
.work-icon{font-size:15px;display:inline-block;animation:briefcase 3s ease-in-out infinite;}
@keyframes briefcase{0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-3px) scale(1.1);}}
/* scroll down arrow */
.hero-scroll-hint{position:absolute;bottom:2.2rem;left:50%;transform:translateX(-50%);z-index:2;}
.scroll-arrow{
  display:flex;flex-direction:column;align-items:center;gap:3px;
  color:rgba(0,0,0,0.28);
  animation:scrollBounce 2.2s ease-in-out infinite;
}
.scroll-arrow-line{width:1px;height:22px;background:rgba(0,0,0,0.22);border-radius:1px;}
.scroll-arrow-chevron{width:10px;height:10px;border-right:1.5px solid rgba(0,0,0,0.28);border-bottom:1.5px solid rgba(0,0,0,0.28);transform:rotate(45deg);margin-top:-6px;}
@keyframes scrollBounce{0%,100%{transform:translateY(0);}50%{transform:translateY(7px);}}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
@keyframes gradientShift{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}

/* ── GLASS ORB (liquid water) ── */
.glass-orb{
  display:none;
  position:fixed;width:110px;height:110px;
  border-radius:47% 53% 63% 37%/38% 48% 52% 62%;
  background:
    radial-gradient(circle at 28% 22%, rgba(220,240,255,0.72) 0%, transparent 42%),
    radial-gradient(circle at 68% 72%, rgba(160,210,255,0.30) 0%, transparent 45%),
    radial-gradient(ellipse at 50% 50%, rgba(200,230,255,0.14) 0%, transparent 68%);
  border:1px solid rgba(200,230,255,0.55);
  box-shadow:
    inset 0 3px 8px rgba(240,250,255,0.90),
    inset 0 -2px 8px rgba(100,170,240,0.14),
    inset 1px 0 6px rgba(200,230,255,0.35),
    0 6px 28px rgba(100,160,255,0.07),
    0 2px 8px rgba(80,140,220,0.04);
  backdrop-filter:blur(3px) saturate(1.15) brightness(1.04);
  -webkit-backdrop-filter:blur(3px) saturate(1.15) brightness(1.04);
  pointer-events:none;
  transform:translate(-50%,-50%);
  z-index:9996;
  opacity:0;
  animation:liquidBlob 7s ease-in-out infinite;
  transition:opacity 0.30s ease,left 0.10s cubic-bezier(0.22,0.44,0.44,0.95),top 0.10s cubic-bezier(0.22,0.44,0.44,0.95);
}
@keyframes liquidBlob{
  0%,100%{border-radius:47% 53% 63% 37%/38% 48% 52% 62%;}
  16%{border-radius:56% 44% 38% 62%/54% 36% 64% 46%;}
  32%{border-radius:36% 64% 58% 42%/62% 42% 58% 38%;}
  50%{border-radius:62% 38% 44% 56%/42% 60% 40% 58%;}
  68%{border-radius:44% 56% 66% 34%/50% 44% 56% 50%;}
  84%{border-radius:52% 48% 40% 60%/38% 54% 46% 62%;}
}


/* ── SCROLL TUBE ── */
.scroll-tube{
  position:fixed;right:22px;top:50%;transform:translateY(-50%);
  width:7px;height:186px;border-radius:99px;
  background:rgba(240,248,255,0.28);
  backdrop-filter:blur(18px) saturate(1.5);
  -webkit-backdrop-filter:blur(18px) saturate(1.5);
  border:1px solid rgba(200,228,255,0.48);
  box-shadow:
    inset 2px 0 0 rgba(255,255,255,0.68),
    inset 0 0 10px rgba(200,228,255,0.18),
    0 4px 20px rgba(30,144,255,0.05);
  z-index:90;overflow:hidden;
  display:flex;align-items:flex-end;
}
.scroll-tube-fill{
  width:100%;height:0%;min-height:0;
  background:linear-gradient(to top,rgba(0,80,220,0.88) 0%,rgba(30,144,255,0.82) 50%,rgba(110,200,255,0.78) 100%);
  border-radius:99px;
  transition:height 0.24s cubic-bezier(0.25,0.46,0.45,0.94);
  position:relative;
  box-shadow:inset 2px 0 3px rgba(255,255,255,0.42);
}
.scroll-tube-fill::before{
  content:'';position:absolute;top:-5px;left:-3px;right:-3px;height:10px;
  background:radial-gradient(ellipse at 50% 15%,rgba(215,240,255,0.98) 0%,rgba(140,205,255,0.55) 42%,transparent 72%);
  border-radius:50%;
  animation:tubeSurface 2.2s ease-in-out infinite;
}
.scroll-tube-fill::after{
  content:'';position:absolute;inset:0;border-radius:99px;
  background:linear-gradient(90deg,rgba(255,255,255,0.18) 0%,transparent 60%);
}
@keyframes tubeSurface{
  0%,100%{transform:scaleX(0.72) scaleY(1.0);opacity:0.95;}
  50%{transform:scaleX(1.08) scaleY(0.75);opacity:0.55;}
}
@media(max-width:900px){.scroll-tube{display:none;}}

/* ── SECTION COMMONS ── */
.section-label{font-size: 15px;letter-spacing:0.2em;text-transform:uppercase;color:var(--pink);margin-bottom:0.85rem;}
.section-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:4rem;}
.section-title em{font-style:italic;color:var(--pink);}
.reveal{opacity:0;transition:opacity 0.9s cubic-bezier(0.22,1,0.36,1),transform 0.9s cubic-bezier(0.22,1,0.36,1),filter 0.9s ease;filter:blur(5px);}
.reveal:not(.from-left):not(.from-right):not(.scale-up){transform:translateY(48px);}
.reveal.from-left{transform:translateX(-52px);}
.reveal.from-right{transform:translateX(52px);}
.reveal.scale-up{transform:scale(0.90) translateY(22px);}
.reveal.visible{opacity:1;transform:none;filter:blur(0);}
.reveal-delay-1{transition-delay:0.08s;}.reveal-delay-2{transition-delay:0.16s;}.reveal-delay-3{transition-delay:0.25s;}.reveal-delay-4{transition-delay:0.35s;}.reveal-delay-5{transition-delay:0.46s;}.reveal-delay-6{transition-delay:0.58s;}

/* ── WORK ROWS ── */
.work{background:transparent;padding:5rem 200px;}
.work-heading-wrap{margin-bottom:3rem;}
.work-title-main{font-family:'Rethink Sans',var(--sans);font-size:clamp(24px,5vw,40px);font-weight:800;color:#1a1a1a;line-height:1.3;margin:0;}
.work-title-script{font-family:var(--hand);font-size:calc(clamp(24px,5vw,40px) * 1.3);font-weight:700;color:#1E90FF;display:block;line-height:1.2;}
/* project rows */
.pw-rows{display:flex;flex-direction:column;gap:5rem;}
.pw-row{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"visual details";gap:clamp(2rem,5vw,4.5rem);align-items:center;position:relative;text-decoration:none;color:inherit;padding:2rem 0;}
.pw-row.pw-reversed{grid-template-areas:"details visual";}
.pw-visual{grid-area:visual;display:flex;flex-direction:column;}
.pw-details{grid-area:details;display:flex;flex-direction:column;}
/* image wrap with CSS-var tilt */
.pw-img-wrap{transform:rotate(var(--tilt,0deg));transition:transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94);position:relative;width:100%;}
.pw-row:hover .pw-img-wrap{transform:rotate(0deg) scale(1.025);}
.pw-thumb{width:100%;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.10),0 2px 8px rgba(0,0,0,0.05);display:block;object-fit:cover;}
.pw-mockup{width:100%;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.10),0 2px 8px rgba(0,0,0,0.05);display:flex;align-items:center;justify-content:center;overflow:hidden;}
/* tape */
.pw-tape{position:absolute;width:50px;height:20px;border-radius:2px;z-index:2;pointer-events:none;}
.pw-tape-tl{top:-10px;left:20px;transform:rotate(-4deg);}
.pw-tape-tr{top:-10px;right:20px;transform:rotate(4deg);}
.pw-tape-br{bottom:-10px;right:28px;transform:rotate(-3deg);}
.pw-tape-warm{background:rgba(255,220,90,0.55);}
.pw-tape-cool{background:rgba(160,200,255,0.55);}
.pw-tape-pink{background:rgba(255,180,200,0.52);}
/* handwritten annotation */
.pw-annotation-wrap{margin-top:0.7rem;display:flex;align-items:center;gap:0.4rem;}
.pw-annotation{font-family: Lato, sans-serif;font-size: 15px;color:var(--ink4);opacity:0.65;}
/* project number */
.pw-num{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;color:var(--ink4);letter-spacing:0.12em;margin-bottom:0.75rem;display:block;}
/* title + desc */
.pw-title{font-family:'Rethink Sans',var(--sans);font-size:clamp(1.1rem,1.8vw,1.45rem);font-weight:800;color:#111827;line-height:1.25;margin-bottom:0.6rem;}
.pw-desc{font-size: 15px;color:#6B7280;line-height:1.72;margin-bottom:0.9rem;}
/* tags */
.pw-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:1rem;}
.pw-tag{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;letter-spacing:0.02em;padding:3px 10px;border-radius:99px;background:#fff;border:1px solid rgba(0,0,0,0.09);white-space:nowrap;}
/* sticky note */
.pw-sticky{background:#FFF9C4;border-radius:3px;padding:10px 14px 12px;box-shadow:2px 4px 14px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.05);font-family: Lato, sans-serif;font-size: 15px;line-height:1.45;color:#5a4a00;transform:rotate(-1.5deg);width:fit-content;max-width:240px;margin-bottom:1.25rem;position:relative;transition:transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94);}
.pw-sticky::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:rgba(0,0,0,0.06);border-radius:3px 3px 0 0;}
.pw-sticky.blue{background:#E8F4FF;color:#1a4080;}
.pw-sticky.green{background:#E8F8EE;color:#1a4a28;}
.pw-sticky.purple{background:#EDE9F8;color:#3d2f7a;}
.pw-sticky.orange{background:#FFF3E0;color:#5a3800;}
.pw-row:hover .pw-sticky{transform:rotate(0deg)!important;}
/* CTA pill */
.pw-cta{display:inline-flex;align-items:center;gap:7px;font-size: 15px;font-weight:600;color:#111827;padding:9px 18px;background:#fff;border-radius:99px;box-shadow:0 2px 12px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.04);text-decoration:none;transition:all 0.22s cubic-bezier(0.25,0.46,0.45,0.94);width:fit-content;margin-top:0.35rem;}
.pw-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(0,0,0,0.11);}
.pw-cta-arrow{display:inline-block;transition:transform 0.2s;}
.pw-cta:hover .pw-cta-arrow{transform:translateX(3px);}
/* row divider */
.pw-divider{width:100%;height:1px;background:linear-gradient(to right,transparent 0%,rgba(0,0,0,0.07) 30%,rgba(0,0,0,0.07) 70%,transparent 100%);}

/* ═══════════════════════════════════════════════════════════════
   CSWK — Editorial Case Study Showcase Section
   ═══════════════════════════════════════════════════════════════ */
.cswk{padding:5rem 200px;}
.cswk-head{margin-bottom:4rem;}
.cswk-eyebrow{display:block;font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink4);margin-bottom:1rem;}
.cswk-headline{font-family:var(--serif);font-size:clamp(2rem,4.2vw,3.2rem);font-weight:400;color:#111827;line-height:1.1;margin:0;letter-spacing:-0.01em;}
.cswk-script{font-family:var(--hand);font-size:1.22em;color:#1E90FF;display:block;line-height:1.15;font-weight:400;}
.cswk-subhead{font-family:var(--serif);font-style:italic;font-size:1rem;color:var(--ink3);margin:1rem 0 0;max-width:46ch;line-height:1.7;}
.cswk-rows{display:flex;flex-direction:column;gap:6rem;}
.cswk-row{display:grid;grid-template-columns:62fr 38fr;grid-template-areas:"visual content";gap:clamp(1.5rem,3.5vw,3rem);align-items:start;position:relative;text-decoration:none;color:inherit;}
.cswk-reversed{grid-template-areas:"content visual";grid-template-columns:38fr 62fr;}
.cswk-visual{grid-area:visual;display:flex;flex-direction:column;gap:0;}
.cswk-visual img{width:100%;aspect-ratio:16/10;object-fit:cover;object-position:center top;display:block;transition:transform 0.46s cubic-bezier(0.25,0.46,0.45,0.94);}
.cswk-row:hover .cswk-visual img{transform:scale(1.025);}
.cswk-frame{position:relative;transform:rotate(var(--frame-tilt,-1.5deg));transition:transform 0.46s cubic-bezier(0.25,0.46,0.45,0.94);}
.cswk-row:hover .cswk-frame{transform:rotate(0deg) scale(1.018);}
.cswk-frame-inner{border-radius:20px;overflow:hidden;border:1px solid rgba(0,0,0,0.06);box-shadow:0 6px 28px rgba(0,0,0,0.08),0 1px 4px rgba(0,0,0,0.04);position:relative;}
.cswk-frame-pad{display:flex;align-items:center;justify-content:center;padding:1rem;min-height:390px;}
.cswk-thumb{width:100%;display:block;object-fit:cover;}
.cswk-reel{position:relative;width:100%;aspect-ratio:3/2;overflow:hidden;border-radius:14px;}
.cswk-reel img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:0;animation:cswkCycle 16s cubic-bezier(0.4,0,0.2,1) infinite;}
.cswk-reel img:nth-child(1){animation-delay:0s;}
.cswk-reel img:nth-child(2){animation-delay:4s;}
.cswk-reel img:nth-child(3){animation-delay:8s;}
.cswk-reel img:nth-child(4){animation-delay:12s;}
@keyframes cswkCycle{0%{opacity:0;transform:scale(1.18);}6%{opacity:1;transform:scale(1.14);}22%{opacity:1;transform:scale(1.1);}28%{opacity:0;transform:scale(1.07);}100%{opacity:0;transform:scale(1.18);}}
.cswk-reel-dots{display:flex;align-items:center;justify-content:flex-start;gap:6px;margin-top:12px;}
.cswk-reel-dot{width:5px;height:5px;border-radius:99px;background:rgba(0,0,0,0.3);flex-shrink:0;animation:cswkDot 16s infinite;transition:all 0.3s ease;}
.cswk-reel-dot:nth-child(1){animation-delay:0s;}
.cswk-reel-dot:nth-child(2){animation-delay:4s;}
.cswk-reel-dot:nth-child(3){animation-delay:8s;}
.cswk-reel-dot:nth-child(4){animation-delay:12s;}
@keyframes cswkDot{0%,22%{width:18px;height:5px;background:#111;}27%,100%{width:5px;height:5px;background:rgba(0,0,0,0.3);}}
.cswk-tape{position:absolute;width:46px;height:17px;border-radius:2px;z-index:5;pointer-events:none;}
.cswk-tape-tl{top:-8px;left:22px;transform:rotate(-4deg);}
.cswk-tape-tr{top:-8px;right:22px;transform:rotate(4deg);}
.cswk-tape-br{bottom:-8px;right:28px;transform:rotate(-3deg);}
.cswk-corner{position:absolute;pointer-events:none;opacity:0.45;}
.cswk-corner-tl{top:12px;left:12px;}
.cswk-corner-br{bottom:12px;right:12px;}
.cswk-annot{display:flex;align-items:center;gap:0.45rem;padding-left:0;margin-top:8px;opacity:0.58;transition:opacity 0.25s;}
.cswk-row:hover .cswk-annot{opacity:1;}
.cswk-reversed .cswk-annot{padding-right:0;flex-direction:row-reverse;}
.cswk-handlabel{font-family:var(--hand);font-size:0.96rem;color:var(--ink3);}
.cswk-content{grid-area:content;display:flex;flex-direction:column;align-self:start;}
.cswk-meta{display:flex;align-items:center;gap:0.65rem;margin-bottom:8px;}
.cswk-num{font-family: Lato, sans-serif;font-size: 15px;color:var(--ink4);letter-spacing:0.12em;}
.cswk-sep{font-size: 15px;color:var(--ink4);opacity:0.35;}
.cswk-category{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;letter-spacing:0.07em;text-transform:uppercase;}
.cswk-title{font-family:var(--sans);font-size:clamp(1.28rem,2vw,1.65rem);font-weight:500;color:#111827;line-height:1.3;margin:0 0 12px;letter-spacing:-0.01em;}
.cswk-title-em{font-style:normal;font-weight:600;position:relative;display:inline;}
.cswk-title-em::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:2px;border-radius:2px;opacity:0.3;background:currentColor;}
.cswk-desc{font-size: 15px;color:#6B7280;line-height:1.72;margin-bottom:16px;max-width:40ch;}
.cswk-tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px;}
.cswk-tag{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;letter-spacing:0.03em;padding:4px 12px;border-radius:99px;white-space:nowrap;}
.cswk-note{display:inline-flex;align-items:center;gap:6px;padding:8px 14px 9px;border-radius:8px;font-family:var(--hand);font-size:0.97rem;line-height:1.4;margin-bottom:16px;width:fit-content;transform:rotate(-0.8deg);transition:transform 0.3s ease;}
.cswk-row:hover .cswk-note{transform:rotate(0deg);}
.cswk-cta{display:inline-flex;align-items:center;gap:7px;font-size: 15px;font-weight:600;letter-spacing:0.01em;color:#111827;padding:10px 20px;background:#fff;border-radius:99px;box-shadow:0 2px 12px rgba(0,0,0,0.07);text-decoration:none;transition:color 0.2s ease,background 0.2s ease,border-color 0.2s ease,transform 0.22s cubic-bezier(0.25,0.46,0.45,0.94),box-shadow 0.22s cubic-bezier(0.25,0.46,0.45,0.94);width:fit-content;border:1px solid rgba(0,0,0,0.07);}
.cswk-row:hover .cswk-cta{color:#fff;transform:translateY(-2px);}
.cswk-row[data-project="airiq"]:hover .cswk-cta{background:#1E90FF;border-color:#1E90FF;box-shadow:0 6px 22px rgba(30,144,255,0.32);}
.cswk-row[data-project="biblofi"]:hover .cswk-cta{background:#C8703A;border-color:#C8703A;box-shadow:0 6px 22px rgba(200,112,58,0.32);}
.cswk-row[data-project="ecotrack"]:hover .cswk-cta{background:#2D7D43;border-color:#2D7D43;box-shadow:0 6px 22px rgba(45,125,67,0.32);}
.cswk-cta-arrow{display:inline-block;transition:transform 0.2s ease;}
.cswk-row:hover .cswk-cta-arrow{transform:translateX(3px);}
.cswk-flat .cswk-visual img{aspect-ratio:auto;object-fit:contain;object-position:center top;box-shadow:none;}
.cswk-flat .cswk-note{transform:none;}
.cswk-flat:hover .cswk-note{transform:none;}
.cswk-flat:hover .cswk-cta{color:#fff;transform:none;}
.cswk-flat[data-project="biblofi"]:hover .cswk-cta{background:#C8703A;border-color:#C8703A;box-shadow:0 2px 12px rgba(200,112,58,0.25);}
.cswk-flat[data-project="ecotrack"]:hover .cswk-cta{background:#2D7D43;border-color:#2D7D43;box-shadow:0 2px 12px rgba(45,125,67,0.25);}
.cswk-flat:hover .cswk-cta-arrow{transform:none;}
.cswk-flat:hover .cswk-annot{opacity:0.58;}
.cswk-divider{width:100%;height:1px;background:linear-gradient(to right,transparent 0%,rgba(0,0,0,0.065) 25%,rgba(0,0,0,0.065) 75%,transparent 100%);}

/* ── kept for DesignSystemZoom ── */
.bento-icon-badge{width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,0.8);border:1px solid rgba(255,255,255,1);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;box-shadow:0 1px 4px rgba(0,0,0,0.08);}
.bento-tags{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-start;align-items:flex-start;margin-top:0.75rem;}
.bento-tag{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;letter-spacing:0.02em;padding:3px 9px;border-radius:99px;white-space:nowrap;background:#ffffff!important;border:1px solid rgba(0,0,0,0.09);}

/* ── DESIGN SYSTEM SECTION ── */
.dsz-section{position:relative;}
/* ── content shell ── */
.dsz-sticky{
  position:relative;
  min-height:100vh;
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  padding:5rem 0 5rem;
  overflow:visible;
}
/* ── stage: card + floats together ── */
.dsz-stage{
  position:relative;
  width:min(1060px,96vw);
  display:flex;
  align-items:center;
  justify-content:center;
}
/* ── heading + card stacked wrapper ── */
.dsz-card-wrap{
  width:min(740px,74vw);
  position:relative;
  z-index:1;
  display:flex;
  flex-direction:column;
  gap:0;
}
.dsz-heading-wrap{
  padding:0 0 4rem 0;
}
.dsz-title-main{
  font-family:'Rethink Sans',var(--sans);
  font-size:clamp(24px,5vw,40px);font-weight:800;
  color:#1a1a1a;line-height:1.3;margin:0;
}
.dsz-title-script{
  font-family:var(--hand);
  font-size:calc(clamp(24px,5vw,40px) * 1.3);
  font-weight:700;color:#1E90FF;
  display:block;line-height:1.2;
}
/* ── floating annotations ── */
.dsz-floats{
  position:absolute;inset:0;
  pointer-events:none;
  z-index:2;
}
@keyframes dszDrift{
  0%,100%{transform:translateY(0px) rotate(var(--rot,0deg));}
  50%{transform:translateY(-10px) rotate(var(--rot,0deg));}
}
.dsz-float{
  position:absolute;
  font-family:var(--hand);
  font-size:18px;
  line-height:1.55;
  color:rgba(0,0,0,0.58);
  max-width:158px;
  animation:dszDrift var(--dur,6s) ease-in-out infinite;
  animation-delay:var(--delay,0s);
}
.dsz-float-arrow{
  font-size:16px;
  display:inline-block;
  margin-right:2px;
}
/* left floats — just outside card's left edge */
.dsz-fl-1{top:8%; left:0;   --rot:-3deg; --dur:6.5s; --delay:0s;}
.dsz-fl-2{top:32%;left:1%;  --rot:2deg;  --dur:7.5s; --delay:-2.2s;}
.dsz-fl-3{top:58%;left:0;   --rot:-2deg; --dur:5.8s; --delay:-1.1s;}
.dsz-fl-4{top:78%;left:2%;  --rot:3deg;  --dur:8.2s; --delay:-3.4s;}
/* right floats — just outside card's right edge */
.dsz-fr-1{top:8%; right:0;  --rot:3deg;  --dur:7.2s; --delay:-1.6s; text-align:right;}
.dsz-fr-2{top:34%;right:1%; --rot:-2deg; --dur:6.2s; --delay:-2.8s; text-align:right;}
.dsz-fr-3{top:58%;right:0;  --rot:2deg;  --dur:5.4s; --delay:-0.6s; text-align:right;}
.dsz-fr-4{top:76%;right:2%; --rot:-3deg; --dur:8.8s; --delay:-4.1s; text-align:right;}
/* ── card ── */
.dsz-card{
  position:relative;z-index:1;
  width:100%;
  background:#ffffff;
  border:1px solid rgba(0,0,0,0.075);
  border-radius:20px;
  padding:28px 32px 24px;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
  display:flex;flex-direction:column;gap:0;
  overflow:hidden;
  transition:transform 0.28s ease,box-shadow 0.28s ease;
}
.dsz-card::before{
  content:'';position:absolute;top:0;left:48px;right:48px;height:1px;
  background:linear-gradient(90deg,transparent,rgba(16,118,188,0.3),transparent);
}
.dsz-card:hover{transform:translateY(-3px);box-shadow:0 16px 48px rgba(0,0,0,0.09);}
.dsz-card-header{
  display:flex;align-items:flex-start;
  justify-content:space-between;margin-bottom:18px;
}
/* logomark dots */
.dsz-logomark{display:flex;align-items:center;gap:5px;padding-top:2px;}
.dsz-dot{border-radius:50%;flex-shrink:0;}
.dsz-dot-blue{width:11px;height:11px;background:#1076BC;}
.dsz-dot-coral{width:11px;height:11px;background:#F2616E;}
.dsz-dot-blue-muted{width:7px;height:7px;background:rgba(16,118,188,0.35);align-self:flex-end;margin-bottom:1px;}
/* pill tags — subtler, secondary visual weight */
.dsz-tags-row{display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end;max-width:300px;}
.dsz-pill{
  font-family: Lato, sans-serif;font-size: 11px;font-weight: 500;
  border-radius:99px;padding:3px 9px;
  color:#9e9c97;background:#f5f4f0;letter-spacing:0.04em;
  border:1px solid rgba(0,0,0,0.06);
}
.dsz-wip-tag{background:#e3f3ff;color:#0a5a8a;display:inline-flex;align-items:center;gap:5px;}
.dsz-pulse-dot{
  width:6px;height:6px;border-radius:50%;background:#1076BC;
  animation:dszPulse 2s ease-in-out infinite;flex-shrink:0;
}
@keyframes dszPulse{
  0%,100%{transform:scale(1);opacity:1;}
  50%{transform:scale(1.5);opacity:0.5;}
}
/* project label */
.dsz-project-label{
  font-size: 15px;font-weight: 600;letter-spacing:0.1em;
  color:#b0aea8;text-transform:uppercase;margin-bottom:6px;
}
/* title + desc */
.dsz-title{
  font-family:var(--sans);
  font-size:20px;font-weight:700;color:#1a1a1a;
  letter-spacing:-0.025em;line-height:1.25;margin:0 0 8px;
}
.dsz-desc{
  font-family:var(--sans);font-style:italic;
  font-size: 15px;color:#7a7570;
  line-height:1.65;margin:0 0 20px;
}
/* stats grid */
.dsz-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:20px;}
.dsz-stat-chip{background:#f5f4f0;border-radius:10px;padding:10px 6px;text-align:center;}
.dsz-stat-number{font-size:17px;font-weight:700;color:#1076BC;line-height:1;margin-bottom:4px;}
.dsz-stat-label{font-size: 15px;font-weight: 600;color:#9e9c97;text-transform:uppercase;letter-spacing:0.06em;}
/* visual system preview */
.dsz-sys-preview{display:flex;flex-direction:column;gap:10px;margin-bottom:24px;}
.dsz-preview-row{display:flex;align-items:center;gap:10px;}
.dsz-preview-label{font-family:Lato,sans-serif;font-size:11px;font-weight:600;color:#b0aea8;text-transform:uppercase;letter-spacing:0.10em;width:82px;flex-shrink:0;}
.dsz-swatches{display:flex;gap:5px;flex-wrap:wrap;}
.dsz-swatch{width:20px;height:20px;border-radius:5px;flex-shrink:0;border:1px solid rgba(0,0,0,0.06);}
/* spacing scale — bars of increasing height AND width */
.dsz-spacing-scale{display:flex;align-items:flex-end;gap:5px;}
.dsz-space-bar{background:#1076BC;border-radius:3px;opacity:0.22;transition:opacity 0.2s;}
.dsz-space-bar:nth-child(1){opacity:0.10;}
.dsz-space-bar:nth-child(2){opacity:0.15;}
.dsz-space-bar:nth-child(3){opacity:0.22;}
.dsz-space-bar:nth-child(4){opacity:0.30;}
.dsz-space-bar:nth-child(5){opacity:0.42;}
.dsz-space-bar:nth-child(6){opacity:0.56;}
.dsz-space-bar:nth-child(7){opacity:0.72;}
/* component pills */
.dsz-comp-pills{display:flex;flex-wrap:wrap;gap:5px;}
.dsz-comp-pill{font-family:Lato,sans-serif;font-size:11px;font-weight:600;background:#f0f4f8;color:#4B5563;border-radius:99px;padding:3px 10px;letter-spacing:0.02em;border:1px solid rgba(0,0,0,0.06);}
.dsz-comp-more{background:#E3F3FF;color:#1076BC;border-color:rgba(16,118,188,0.15);}
/* card footer */
.dsz-card-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;}
.dsz-footer-solo{justify-content:flex-start;}
/* CTA - outlined style */
.dsz-cta{
  display:inline-flex;align-items:center;gap:6px;
  font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;
  color:#1a1a1a;
  border:1.5px solid rgba(0,0,0,0.18);
  border-radius:99px;padding:9px 20px;
  background:transparent;
  text-decoration:none;
  transition:background 0.2s ease,color 0.2s ease,border-color 0.2s ease;
}
.dsz-cta:hover{background:#1076BC;color:#ffffff;border-color:#1076BC;}
/* annotation columns */
.dsz-ann-col{position:absolute;top:0;bottom:0;width:160px;pointer-events:none;z-index:2;}
.dsz-ann-left{left:0;}
.dsz-ann-right{right:0;}
@media(max-width:1024px){
  .dsz-ann-col{display:none;}
  .dsz-float{display:none;}
  .dsz-card-wrap{width:min(680px,88vw);}
}
@media(max-width:767px){
  .dsz-card-wrap{width:92vw;}
  .dsz-heading-wrap{
    padding:0 0 2.5rem 0;
    position:relative;
    z-index:3;
    opacity:1 !important;
    transform:none !important;
    filter:none !important;
  }
  .dsz-stat-grid{grid-template-columns:repeat(2,1fr);}
  .dsz-card{padding:24px 20px 20px;}
  .dsz-sticky{padding:40px 0 60px;}
}


/* ── ZOOM INTERLUDE ── */
.zoom-section{position:relative;height:350vh;z-index:2;}
.zoom-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:transparent;}
.zoom-sticky::before{content:'';position:absolute;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(30,144,255,0.07) 0%,transparent 65%);top:-280px;right:-200px;pointer-events:none;}
.zoom-sticky::after{content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(110,80,220,0.05) 0%,transparent 65%);bottom:-180px;left:-140px;pointer-events:none;}
.zoom-content{position:relative;z-index:1;text-align:center;padding:0 clamp(24px,6vw,100px);display:flex;flex-direction:column;align-items:center;gap:0.15em;}
.zoom-line-1{font-family:'Rethink Sans',var(--sans);font-size:clamp(36px,6vw,72px);font-weight:800;line-height:1.1;opacity:0;transform-origin:center center;will-change:transform,opacity;margin:0;background:linear-gradient(125deg,#0a0a0a 0%,#1a1a2e 45%,#1E90FF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.zoom-line-2{font-family:'Rethink Sans',var(--sans);font-size:clamp(36px,6vw,72px);font-weight:800;line-height:1.1;opacity:0;will-change:opacity;margin:0;background:linear-gradient(125deg,#111111 0%,#0066d6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.zoom-line-3{font-family:var(--hand);font-size:clamp(44px,7vw,84px);font-weight:700;line-height:1.1;opacity:0;will-change:opacity;margin:0;background:linear-gradient(125deg,#1E90FF 0%,#6c63ff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.zoom-sub{font-family:var(--sans);font-size:clamp(13px,1.25vw,16px);color:rgba(0,0,0,0.36);line-height:1.8;opacity:0;will-change:opacity;margin-top:1.4rem;letter-spacing:0.01em;}

/* ── PROCESS — HOW I WORK ── */
.process-section{padding:5.5rem 200px 5.5rem;background:#0c0e14;position:relative;overflow:hidden;}
.process-section::before{content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(30,144,255,0.14) 0%,transparent 65%);top:-180px;right:-120px;pointer-events:none;}
.process-section::after{content:'';position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(110,80,220,0.08) 0%,transparent 65%);bottom:-80px;left:-60px;pointer-events:none;}
.process-heading{margin-bottom:3.5rem;text-align:center;position:relative;z-index:1;}
.process-main-title{font-family:'Rethink Sans',var(--sans);font-size:clamp(24px,5vw,40px);font-weight:800;color:rgba(255,255,255,0.88);line-height:1.3;margin:0;}
.process-title-script{font-family:var(--hand);font-size:calc(clamp(24px,5vw,40px) * 1.3);font-weight:700;color:#1E90FF;display:block;line-height:1.2;}
.anno-stage{max-width:860px;margin:0 auto;position:relative;z-index:1;}
.anno-canvas-wrap{position:relative;border-radius:14px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);overflow:visible;box-shadow:0 40px 80px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.05);}
.anno-wireframe{width:100%;display:block;border-radius:13px;}
.anno-pin{position:absolute;width:26px;height:26px;border-radius:50%;background:rgba(30,144,255,0.14);border:1.5px solid rgba(30,144,255,0.45);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s,border-color 0.2s,box-shadow 0.25s,transform 0.2s;z-index:20;transform:translate(-50%,-50%);padding:0;}
.anno-pin:hover,.anno-pin.pinned{background:rgba(30,144,255,0.3);border-color:#1E90FF;box-shadow:0 0 0 6px rgba(30,144,255,0.16),0 0 0 12px rgba(30,144,255,0.07);transform:translate(-50%,-50%) scale(1.12);}
.anno-pin-num{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;color:#1E90FF;line-height:1;user-select:none;pointer-events:none;}
@keyframes pinPulse{0%,100%{box-shadow:0 0 0 0 rgba(30,144,255,0.4),0 0 0 0 rgba(30,144,255,0);}60%{box-shadow:0 0 0 7px rgba(30,144,255,0.1),0 0 0 14px rgba(30,144,255,0);}}
.anno-pin-pulse{animation:pinPulse 1.8s ease-out;}
.anno-pop{position:absolute;background:rgba(10,12,18,0.96);border:1px solid rgba(30,144,255,0.28);border-radius:12px;padding:14px 16px;width:210px;pointer-events:none;opacity:0;transition:opacity 0.2s ease,transform 0.22s cubic-bezier(0.22,1,0.36,1);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 20px 48px rgba(0,0,0,0.55),inset 0 1px 0 rgba(255,255,255,0.05);z-index:30;}
.anno-pin:hover .anno-pop,.anno-pin.pinned .anno-pop{opacity:1;}
.anno-pop-step{font-family: Lato, sans-serif;font-size: 15px;letter-spacing:0.18em;color:#1E90FF;text-transform:uppercase;margin-bottom:5px;font-weight: 600;}
.anno-pop-name{font-family: Lato, sans-serif;font-size: 15px;font-weight: 600;color:rgba(255,255,255,0.92);margin-bottom:6px;line-height:1.25;}
.anno-pop-desc{font-family: Lato, sans-serif;font-size: 15px;color:rgba(255,255,255,0.54);line-height:1.55;margin:0;}
.anno-pin.pop-r .anno-pop{left:calc(100% + 12px);top:0;transform:translateX(-4px);}
.anno-pin.pop-r:hover .anno-pop,.anno-pin.pop-r.pinned .anno-pop{transform:translateX(0);}
.anno-pin.pop-l .anno-pop{right:calc(100% + 12px);top:0;transform:translateX(4px);}
.anno-pin.pop-l:hover .anno-pop,.anno-pin.pop-l.pinned .anno-pop{transform:translateX(0);}
.anno-pin.pop-u .anno-pop{top:auto;bottom:calc(100% + 12px);}
.anno-pin.pop-d .anno-pop{top:calc(100% + 12px);}
.anno-legend{display:flex;margin-top:20px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;}
.anno-legend-step{flex:1;padding:11px 10px;display:flex;align-items:center;gap:8px;cursor:pointer;transition:background 0.18s;border-right:1px solid rgba(255,255,255,0.06);}
.anno-legend-step:last-child{border-right:none;}
.anno-legend-step:hover,.anno-legend-step.leg-active{background:rgba(30,144,255,0.09);}
.anno-leg-num{font-family: Lato, sans-serif;font-size: 15px;color:rgba(30,144,255,0.65);font-weight: 600;flex-shrink:0;letter-spacing:0.05em;}
.anno-leg-name{font-family: Lato, sans-serif;font-size: 15px;color:rgba(255,255,255,0.38);font-weight: 600;white-space:nowrap;}
.anno-legend-step:hover .anno-leg-name,.anno-legend-step.leg-active .anno-leg-name{color:rgba(255,255,255,0.78);}
.anno-legend-step.leg-active .anno-leg-num{color:#1E90FF;}
@media(max-width:860px){
  .anno-stage{padding:0 4px;}
  .anno-pop{width:170px;}
  .anno-legend{flex-wrap:wrap;}
  .anno-legend-step{flex:0 0 33.33%;border-bottom:1px solid rgba(255,255,255,0.06);}
}

/* ── ABOUT — SCRAPBOOK BOOK ── */
.about{background:transparent;padding:5rem 200px;overflow:hidden;position:relative;}
.about-inner{max-width:1120px;margin:0 auto;}
.about-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;color:var(--ink);line-height:1.1;margin:0 0 4.5rem;text-align:center;}
.about-title em{font-style:italic;color:var(--pink);}
.about-book-wrapper{position:relative;width:min(100%,1040px);margin:0 auto;}.about-book-wrapper .about-book-stage{width:100%;margin:0;}
.about-book-stage{position:relative;width:min(100%,1040px);margin:0 auto;aspect-ratio:1.78;perspective:1800px;transition:opacity 0.65s ease,transform 0.65s cubic-bezier(0.34,1.2,0.64,1);}.about-book-stage.book-hidden{opacity:0;transform:scale(0.94);pointer-events:none;}
.about-closed-book{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;z-index:10;cursor:pointer;filter:drop-shadow(0 16px 40px rgba(0,0,0,0.3));transition:opacity 0.4s ease,transform 0.4s ease,filter 0.25s ease;}
.about-closed-book:hover{filter:drop-shadow(0 22px 52px rgba(0,0,0,0.4)) brightness(1.1);transform:translate(-50%,-52%);}
.about-closed-book.is-opening{opacity:0;transform:translate(-50%,-62%) scale(0.88);pointer-events:none;}
.about-cb-spine{width:20px;height:400px;background:linear-gradient(90deg,#0e0a07 0%,#201710 40%,#1a1209 100%);border-radius:4px 0 0 4px;flex-shrink:0;box-shadow:inset -2px 0 6px rgba(0,0,0,0.4);}
.about-cb-cover{flex:1;height:400px;background:radial-gradient(circle at 40% 40%,#2e251e 0%,#1a1209 70%),repeating-linear-gradient(135deg,rgba(255,255,255,0.018) 0 1px,transparent 1px 18px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.6rem;padding:2rem;position:relative;}
.about-cb-cover::before{content:'';position:absolute;inset:10px;border:1px solid rgba(255,255,255,0.06);pointer-events:none;}
.about-cb-pages{width:7px;height:400px;background:repeating-linear-gradient(0deg,#cdc9c3 0 1px,#ede9e4 1px 3px);border-radius:0 3px 3px 0;flex-shrink:0;}
.about-cover-label{font-family: Lato, sans-serif;font-size: 15px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.3);}
.about-cover-name{font-family:var(--font-serif, var(--serif));font-size:clamp(1.1rem,2.2vw,1.8rem);font-weight:300;font-style:italic;line-height:1.1;color:rgba(255,255,255,0.88);margin:0.2rem 0;}
.about-cover-rule{width:28px;height:1px;background:rgba(255,255,255,0.18);margin:0.15rem 0;}
.about-cover-role{font-family:var(--hand);font-size:clamp(0.6rem,1vw,0.82rem);color:rgba(255,255,255,0.38);letter-spacing:0.05em;}
.about-cover-hint{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-family: Lato, sans-serif;font-size: 15px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.2);white-space:nowrap;transition:color 0.2s ease;}
.about-closed-book:hover .about-cover-hint{color:rgba(255,255,255,0.52);}
.about-book-shell{position:absolute;inset:0;z-index:1;filter:drop-shadow(0 22px 32px rgba(17,24,39,0.12));}
.about-book-page{position:absolute;top:2%;bottom:3%;width:49.7%;background:
  radial-gradient(circle at 18% 12%,rgba(255,255,255,0.98),transparent 30%),
  repeating-linear-gradient(0deg,transparent 0 30px,rgba(116,139,170,0.10) 31px 32px),
  linear-gradient(115deg,#ffffff 0%,#fbfdff 100%);
  border:1px solid rgba(17,24,39,0.10);box-shadow:inset 0 0 24px rgba(17,24,39,0.035);}
.about-book-page-left{left:0.5%;border-radius:20px 6px 8px 24px;transform:skewY(-0.7deg);}
.about-book-page-right{right:0.5%;border-radius:6px 20px 24px 8px;transform:skewY(0.7deg);}
.about-book-page::after{content:'';position:absolute;inset:10px;border:1px solid rgba(17,24,39,0.07);border-radius:inherit;pointer-events:none;}
.about-book-spine{position:absolute;left:49.35%;top:3.5%;bottom:4%;width:1.3%;border-radius:999px;background:linear-gradient(90deg,rgba(17,24,39,0.10),rgba(255,255,255,0.85),rgba(17,24,39,0.10));box-shadow:0 0 18px rgba(17,24,39,0.10);z-index:2;}
.about-turn-page{position:absolute;top:2.5%;bottom:3.5%;left:50%;width:48.8%;z-index:4;transform-origin:left center;transform:rotateY(0deg);opacity:0;pointer-events:none;border-radius:5px 20px 22px 6px;background:
  linear-gradient(90deg,rgba(17,24,39,0.08),rgba(255,255,255,0) 12%),
  repeating-linear-gradient(0deg,transparent 0 30px,rgba(116,139,170,0.08) 31px 32px),
  #ffffff;
  box-shadow:0 22px 36px rgba(17,24,39,0.16),inset 14px 0 22px rgba(17,24,39,0.06);backface-visibility:hidden;transform-style:preserve-3d;clip-path:polygon(0 0,100% 0,100% 100%,0 100%);}
.about-turn-page::before{content:'';position:absolute;right:0;top:0;width:28%;height:22%;background:linear-gradient(135deg,rgba(230,236,245,0.7),rgba(255,255,255,0.05) 58%,transparent 60%);clip-path:polygon(100% 0,0 0,100% 100%);opacity:0;transform-origin:100% 0;}
.about-turn-page::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,0.55),transparent 34%,rgba(17,24,39,0.08) 100%);opacity:0;}
.about-book-stage.turning-forward .about-turn-page{animation:aboutPageFlipForward 2400ms cubic-bezier(.25,.46,.45,.94) forwards;}
.about-book-stage.turning-forward .about-turn-page::before{animation:aboutPageCorner 2400ms cubic-bezier(.25,.46,.45,.94) forwards;}
.about-book-stage.turning-forward .about-turn-page::after{animation:aboutPageSheen 2400ms ease forwards;}
.about-book-stage.turning-back .about-turn-page{left:1.2%;transform-origin:right center;border-radius:20px 5px 6px 22px;animation:aboutPageFlipBack 2400ms cubic-bezier(.25,.46,.45,.94) forwards;}
.about-book-stage.turning-back .about-turn-page::before{left:0;right:auto;transform-origin:0 0;clip-path:polygon(0 0,100% 0,0 100%);animation:aboutPageCorner 2400ms cubic-bezier(.25,.46,.45,.94) forwards;}
.about-book-stage.turning-back .about-turn-page::after{animation:aboutPageSheen 2400ms ease forwards;}
.about-page-content{position:absolute;left:5.7%;right:5.7%;top:10%;bottom:9%;z-index:3;pointer-events:none;overflow:hidden;}
.about-page-spread{position:absolute;inset:0;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8%;opacity:0;transform:translateY(10px) scale(0.985);transition:opacity 320ms ease,transform 320ms ease;pointer-events:none;overflow:hidden;}
.about-page-spread.active{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}
.about-left-page,.about-right-page{min-width:0;max-height:100%;overflow:hidden;}
.about-left-page{display:flex;flex-direction:column;gap:4%;padding:1% 3% 3% 3.5%;}
.about-photo-row{display:grid;grid-template-columns:1fr 1fr;gap:5%;min-height:0;}
.about-photo-box{position:relative;overflow:hidden;background:rgba(255,255,255,0.82);border:1px solid rgba(17,24,39,0.10);box-shadow:0 6px 18px rgba(17,24,39,0.06);display:flex;align-items:center;justify-content:center;color:#64748b;font-family:var(--hand);font-size:clamp(0.78rem,1.25vw,1rem);text-align:center;}
.about-photo-box.large{height:44%;border-radius:4px;transform:rotate(-1.2deg);flex:0 0 44%;}
.about-photo-box.small{aspect-ratio:1.08;border-radius:3px;min-height:0;}
.about-photo-box img{width:100%;height:100%;object-fit:cover;display:block;}
.about-photo-box span{position:absolute;left:10px;right:10px;bottom:8px;padding:4px 8px;background:rgba(255,255,255,0.86);border-radius:99px;color:#475569;font-size: 15px;line-height:1.2;}
.about-photo-box.empty{background:repeating-linear-gradient(0deg,rgba(148,163,184,0.12) 0 1px,transparent 1px 18px),rgba(255,255,255,0.52);padding:1rem;}
.about-lined-page{padding:3% 5.5% 3% 1%;background:repeating-linear-gradient(0deg,transparent 0 30px,rgba(116,139,170,0.14) 31px 32px);color:#1f2937;}
.about-page-num{font-family: Lato, sans-serif;font-size: 15px;letter-spacing:0.16em;color:#94a3b8;margin:0 0 0.55rem;}
.about-lined-page h3,.about-lined-page p{opacity:0;clip-path:inset(0 100% 0 0);}
.about-page-spread.active .about-lined-page h3,.about-page-spread.active .about-lined-page p{animation:aboutWrite 900ms steps(28,end) forwards;}
.about-page-spread.active .about-lined-page p:nth-of-type(2){animation-delay:220ms;}
.about-page-spread.active .about-lined-page p:nth-of-type(3){animation-delay:520ms;}
.about-lined-page h3{font-family:var(--hand);font-size:clamp(1.3rem,2.35vw,2rem);line-height:1.05;color:#111827;margin:0 0 1rem;font-weight:700;}
.about-lined-page p{font-family:var(--hand);font-size:clamp(0.9rem,1.45vw,1.16rem);line-height:1.72;color:#374151;margin:0 0 0.85rem;}
.about-page-controls{position:absolute;left:50%;bottom:-44px;transform:translateX(-50%);z-index:5;display:flex;align-items:center;gap:10px;}
.about-page-dot{width:9px;height:9px;border-radius:50%;border:1px solid rgba(17,24,39,0.24);background:#fff;box-shadow:0 2px 8px rgba(17,24,39,0.08);padding:0;cursor:pointer;transition:transform 0.2s ease,background 0.2s ease,border-color 0.2s ease;}
.about-page-dot:hover,.about-page-dot.active{background:#111827;border-color:#111827;transform:scale(1.25);}
.about-page-grab{position:absolute;top:9%;bottom:9%;z-index:6;width:12%;border:0;background:transparent;padding:0;cursor:grab;touch-action:pan-y;}
.about-page-grab:active{cursor:grabbing;}
.about-page-grab-next{right:2.5%;}
.about-page-grab-prev{left:2.5%;}
.about-page-grab::before{content:'';position:absolute;top:50%;width:34px;height:88px;border-radius:999px;opacity:0;transform:translateY(-50%);transition:opacity 220ms ease,transform 220ms ease;background:linear-gradient(90deg,rgba(30,144,255,0.13),rgba(255,255,255,0));}
.about-page-grab-next::before{right:10%;border-right:1px solid rgba(30,144,255,0.24);}
.about-page-grab-prev::before{left:10%;border-left:1px solid rgba(30,144,255,0.24);background:linear-gradient(270deg,rgba(30,144,255,0.13),rgba(255,255,255,0));}
.about-page-grab:hover::before,.about-page-grab:focus-visible::before{opacity:1;transform:translateY(-50%) scaleY(1.08);}
.about-turn-hint{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:#fff;color:#374151;font-size: 15px;padding:5px 13px;border-radius:99px;box-shadow:0 3px 14px rgba(17,24,39,0.13);white-space:nowrap;opacity:0;transition:opacity 230ms ease;pointer-events:none;letter-spacing:0.01em;}
.about-page-grab:hover .about-turn-hint,.about-page-grab:focus-visible .about-turn-hint{opacity:1;}
.about-page-grab-prev .about-turn-hint{right:auto;left:16px;}
.about-page-grab.is-disabled{display:none;}

/* ── SPIRAL SECTION ── */
.spiral-section{height:380vh;position:relative;background:#0C0C0C;scroll-snap-align:start;}
.spiral-sticky{position:sticky;top:0;height:100vh;overflow:hidden;}
.spiral-vignette{position:absolute;inset:0;background:radial-gradient(ellipse 65% 65% at 50% 48%,transparent 28%,rgba(12,12,12,0.9) 100%);pointer-events:none;z-index:3;}
.spiral-perspective{width:100%;height:100%;perspective:860px;perspective-origin:50% 48%;display:flex;align-items:center;justify-content:center;}
.spiral-stage{position:relative;width:0;height:0;transform-style:preserve-3d;}
.spiral-card{position:absolute;border-radius:10px;background-size:cover;background-position:center;background-color:#1c1c1c;box-shadow:0 14px 44px rgba(0,0,0,0.72),inset 0 0 0 1px rgba(255,255,255,0.055);will-change:transform,opacity;backface-visibility:hidden;opacity:0;overflow:hidden;transform:translate3d(0,0,-2200px);}
.sc-sz-a{width:262px;height:176px;left:-131px;top:-88px;}
.sc-sz-b{width:220px;height:148px;left:-110px;top:-74px;}
.sc-sz-c{width:300px;height:200px;left:-150px;top:-100px;}
.spiral-card-shine{position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.08) 0%,transparent 52%);pointer-events:none;}
.spiral-topbar,.spiral-bottombar{position:absolute;left:0;right:0;z-index:10;padding:28px clamp(22px,5vw,52px);display:flex;justify-content:space-between;align-items:center;pointer-events:none;}
.spiral-topbar{top:0;}
.spiral-bottombar{bottom:0;}
.spiral-topbar-label,.spiral-topbar-mode,.spiral-hint,.spiral-counter{font-family: Lato, sans-serif;font-size: 15px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.2);}
.about-ribbon,.about-flower{position:absolute;display:block;pointer-events:none;user-select:none;z-index:2;will-change:transform;}
.about-ribbon{width:15%;left:-2.5%;top:-10%;transform-origin:48% 12%;filter:drop-shadow(0 10px 16px rgba(17,24,39,0.10));}
.about-flower-one{width:10%;right:0.5%;top:-7%;transform-origin:50% 92%;filter:drop-shadow(0 10px 18px rgba(17,24,39,0.12));}
.about-flower-two{width:13%;left:-0.5%;bottom:-2%;transform-origin:50% 92%;filter:drop-shadow(0 10px 18px rgba(17,24,39,0.12));}
.about-flower-three{width:22%;right:-1.5%;bottom:-7%;transform-origin:50% 82%;filter:drop-shadow(0 12px 18px rgba(17,24,39,0.13));}
.about-float{animation:aboutFloat 5.8s ease-in-out infinite;}
.about-float-reverse{animation:aboutFloatReverse 6.6s ease-in-out infinite;}
.about-float-soft{animation:aboutFloatSoft 7.2s ease-in-out infinite;}
.about-float-slow{animation:aboutRibbonFloat 7.8s ease-in-out infinite;}
@keyframes aboutFloat{
  0%,100%{transform:translateY(0) rotate(0deg);}
  50%{transform:translateY(-12px) rotate(2.5deg);}
}
@keyframes aboutFloatReverse{
  0%,100%{transform:translateY(0) rotate(0deg);}
  50%{transform:translateY(-10px) rotate(-2deg);}
}
@keyframes aboutFloatSoft{
  0%,100%{transform:translateY(0) rotate(0deg) scale(1);}
  50%{transform:translateY(-8px) rotate(1.4deg) scale(1.015);}
}
@keyframes aboutRibbonFloat{
  0%,100%{transform:translateY(0) rotate(-1deg);}
  50%{transform:translateY(-9px) rotate(2deg);}
}
@keyframes aboutWrite{
  0%{opacity:1;clip-path:inset(0 100% 0 0);}
  100%{opacity:1;clip-path:inset(0 0 0 0);}
}
@keyframes aboutPageFlipForward{
  0%{opacity:0;transform:rotateY(0deg) translateZ(0) rotateZ(0deg);clip-path:polygon(0 0,100% 0,100% 100%,0 100%);}
  5%{opacity:1;transform:rotateY(-5deg) translateX(8px) translateZ(20px) rotateZ(1.4deg);clip-path:polygon(0 0,93% 3%,100% 100%,0 100%);}
  18%{opacity:1;transform:rotateY(-28deg) translateX(20px) translateZ(60px) rotateZ(3.2deg);clip-path:polygon(0 0,100% 0,97% 100%,0 100%);}
  35%{opacity:1;transform:rotateY(-58deg) translateX(30px) translateZ(96px) rotateZ(4deg);}
  50%{opacity:1;transform:rotateY(-90deg) translateX(22px) translateZ(110px) rotateZ(2deg);}
  65%{opacity:1;transform:rotateY(-122deg) translateX(8px) translateZ(88px) rotateZ(-1.5deg);}
  80%{opacity:1;transform:rotateY(-155deg) translateX(-4px) translateZ(50px) rotateZ(-2.4deg);}
  92%{opacity:1;transform:rotateY(-174deg) translateX(-6px) translateZ(16px) rotateZ(-0.6deg);}
  100%{opacity:0;transform:rotateY(-182deg) translateZ(0) rotateZ(0deg);}
}
@keyframes aboutPageFlipBack{
  0%{opacity:0;transform:rotateY(0deg) translateZ(0) rotateZ(0deg);clip-path:polygon(0 0,100% 0,100% 100%,0 100%);}
  5%{opacity:1;transform:rotateY(5deg) translateX(-8px) translateZ(20px) rotateZ(-1.4deg);clip-path:polygon(7% 3%,100% 0,100% 100%,0 100%);}
  18%{opacity:1;transform:rotateY(28deg) translateX(-20px) translateZ(60px) rotateZ(-3.2deg);clip-path:polygon(0 0,100% 0,100% 100%,3% 100%);}
  35%{opacity:1;transform:rotateY(58deg) translateX(-30px) translateZ(96px) rotateZ(-4deg);}
  50%{opacity:1;transform:rotateY(90deg) translateX(-22px) translateZ(110px) rotateZ(-2deg);}
  65%{opacity:1;transform:rotateY(122deg) translateX(-8px) translateZ(88px) rotateZ(1.5deg);}
  80%{opacity:1;transform:rotateY(155deg) translateX(4px) translateZ(50px) rotateZ(2.4deg);}
  92%{opacity:1;transform:rotateY(174deg) translateX(6px) translateZ(16px) rotateZ(0.6deg);}
  100%{opacity:0;transform:rotateY(182deg) translateZ(0) rotateZ(0deg);}
}
@keyframes aboutPageCorner{
  0%,5%{opacity:0;transform:scale(0.6) rotate(0deg);}
  16%{opacity:0.95;transform:scale(1) rotate(-8deg);}
  45%{opacity:0.65;transform:scale(0.78) rotate(-16deg);}
  72%,100%{opacity:0;transform:scale(0.5) rotate(-20deg);}
}
@keyframes aboutPageSheen{
  0%,8%{opacity:0;}
  30%{opacity:0.6;}
  62%{opacity:0.28;}
  100%{opacity:0;}
}

/* ── PHOTO GALLERY ── */
.gallery-section{padding:5rem 200px;background:transparent;}
.gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:120px;gap:10px;margin-top:2rem;}
.gallery-item{border-radius:12px;overflow:hidden;background:var(--bg3);border:1px solid var(--border);position:relative;display:flex;align-items:center;justify-content:center;transition:transform 0.3s,box-shadow 0.3s;cursor:pointer;}
.gallery-item:hover{transform:scale(1.02);box-shadow:0 12px 36px rgba(17,17,17,0.1);z-index:2;}
.gallery-item.tall{grid-row:span 2;}
.gallery-item.wide{grid-column:span 2;}
.gallery-item.feature{grid-column:span 3;grid-row:span 2;}
.g1{grid-column:1/4;}.g2{grid-column:4/7;}.g3{grid-column:7/10;}.g4{grid-column:10/13;}
.g5{grid-column:1/5;grid-row:span 2;}.g6{grid-column:5/8;}.g7{grid-column:8/10;}.g8{grid-column:10/13;grid-row:span 2;}
.g9{grid-column:5/8;}.g10{grid-column:8/10;}
.gallery-placeholder{font-family: Lato, sans-serif;font-style:italic;font-size: 15px;color:var(--ink4);text-align:center;padding:1rem;}
.gallery-label{position:absolute;bottom:0.6rem;left:0.75rem;font-size: 15px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink4);background:rgba(253,250,248,0.85);padding:2px 8px;border-radius:99px;}

/* ── OBSESSIONS SHELF ── */
.shelf-section{padding:5rem 200px;background:transparent;}
.shelf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem;}
.obsession-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:1.5rem;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;cursor:default;}
.obsession-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(17,17,17,0.08);border-color:rgba(17,17,17,0.2);}
.obs-category{font-size: 15px;letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);margin-bottom:0.75rem;}
.obs-icon{font-size:2.2rem;margin-bottom:0.75rem;display:block;}
.obs-title{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:0.3rem;line-height:1.2;}
.obs-sub{font-size: 15px;color:var(--ink3);line-height:1.5;}
/* ── PARALLAX SUPPORT ── */
.float-el,
.hero-name-wrap,
.hero-tagline,
.sc-card,
.pw-row,
.hero-blob,
.hero-blob2,
.contact-glow,
.spectrum-title { will-change: translate; }

/* Smooth parallax — no janky jumps */
.hero-blob, .hero-blob2 {
  transition: none;
}

/* Section titles get a gentle depth feel */
.process-section .section-title,
.gallery-section .section-title,
.testimonials-section .section-title {
  transition: translate 0.1s linear;
}

/* Scrapbook cards — parallax layered on top of tilt */
.sc-card {
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.3s,
              translate 0.12s linear;
}

.scrapbook-section{padding:5rem 200px;background:transparent;overflow:hidden;}
.scrapbook-title-line{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;color:var(--ink);line-height:1.1;}
.scrapbook-title-line em{font-style:italic;color:var(--pink);}
.scrapbook-sub{font-size: 15px;color:var(--ink3);margin-top:0.5rem;margin-bottom:5rem;font-family: Lato, sans-serif;font-style:italic;}
.scrapbook-canvas{position:relative;min-height:700px;width:100%;}
.sc-card{position:absolute;background:#fff;border:1px solid rgba(180,140,130,0.2);border-radius:14px;padding:1.5rem 1.4rem 1.3rem;box-shadow:0 4px 20px rgba(26,18,16,0.07),0 1px 4px rgba(26,18,16,0.04);cursor:default;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;transform-origin:center center;user-select:none;}
.sc-card:hover{box-shadow:0 20px 50px rgba(17,17,17,0.13),0 4px 12px rgba(26,18,16,0.05);z-index:20;}
.sc-card::after{content:'';position:absolute;top:-11px;left:50%;transform:translateX(-50%);width:44px;height:16px;background:rgba(17,17,17,0.1);border-radius:3px;border:1px solid rgba(17,17,17,0.12);}
.sc-card.pin::after{content:'';width:10px;height:10px;border-radius:50%;background:var(--pink);top:-5px;border:none;box-shadow:0 2px 6px rgba(17,17,17,0.5);}
.sc-label{font-family:var(--hand);font-size:1.15rem;font-weight:700;color:var(--pink);margin-bottom:1rem;line-height:1.2;}
.sc-illus{display:flex;align-items:center;justify-content:center;margin-bottom:0.75rem;}
.sc-desc{font-size: 15px;color:var(--ink3);line-height:1.55;border-top:1px dashed rgba(180,140,130,0.25);padding-top:0.65rem;margin-top:0.5rem;font-family: Lato, sans-serif;font-size: 15px;color:var(--ink4);}
/* positions */
.sc-coffee{width:190px;top:0;left:0%;transform:rotate(-4deg);}.sc-coffee:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}
.sc-spidey{width:175px;top:40px;left:19%;transform:rotate(5deg);}.sc-spidey:hover{transform:rotate(0deg) translateY(-10px) scale(1.05);}
.sc-hp{width:185px;top:15px;left:36%;transform:rotate(-3deg);}.sc-hp:hover{transform:rotate(1deg) translateY(-10px) scale(1.04);}
.sc-music{width:180px;top:30px;left:54%;transform:rotate(4deg);}.sc-music:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}
.sc-travel{width:205px;top:5px;left:72%;transform:rotate(-5deg);}.sc-travel:hover{transform:rotate(0deg) translateY(-10px) scale(1.03);}
.sc-photo{width:195px;top:330px;left:10%;transform:rotate(3deg);}.sc-photo:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}
.sc-shop{width:185px;top:320px;left:52%;transform:rotate(-4deg);}.sc-shop:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}


/* ── TESTIMONIALS ── */
.testimonials-section{padding:5rem 200px;background:transparent;}
.testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;margin-top:2rem;}
.testimonial-card{
  background:rgba(255,255,255,0.78);
  backdrop-filter:blur(24px) saturate(1.5);
  border:1px solid rgba(255,255,255,0.72);
  box-shadow:0 4px 24px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9);
  border-radius:24px;padding:2rem;position:relative;
  transition:transform 0.3s,box-shadow 0.35s,border-color 0.3s;
}
.testimonial-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,1);border-color:rgba(255,255,255,0.9);}
.testimonial-quote{font-family:var(--serif);font-size:2.5rem;color:var(--pink);line-height:1;margin-bottom:0.75rem;opacity:0.4;}
.testimonial-text{font-family:var(--serif);font-size:1.05rem;font-style:italic;color:var(--ink2);line-height:1.7;margin-bottom:1.5rem;}
.testimonial-person{display:flex;align-items:center;gap:0.75rem;}
.testimonial-avatar{width:36px;height:36px;border-radius:50%;background:var(--bg3);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
.testimonial-name{font-size: 15px;font-weight: 600;color:var(--ink);margin-bottom:0.1rem;}
.testimonial-role{font-size: 15px;color:var(--ink4);}

/* ── CONTACT ── */
.contact{background:transparent;padding:5rem 200px;overflow:visible;position:relative;}
.contact-glow{position:absolute;top:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(17,17,17,0.05) 0%,transparent 70%);pointer-events:none;}
.contact-illustration{position:absolute;top:0;right:0;width:280px;height:300px;display:flex;align-items:flex-start;justify-content:flex-end;}
.illus-placeholder{width:210px;height:250px;border:1px dashed var(--border2);border-radius:12px;margin:2rem 2rem 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(17,17,17,0.02);}
.illus-icon{font-size:2rem;opacity:0.2;}
.illus-label{font-family: Lato, sans-serif;font-size: 15px;color:var(--ink4);text-align:center;line-height:1.4;}
.contact-inner,.contact-right{position:relative;z-index:1;max-width:600px;overflow:visible;}
.contact-eyebrow{font-size: 15px;letter-spacing:0.18em;text-transform:uppercase;color:var(--pink);margin-bottom:1.1rem;display:flex;align-items:center;gap:0.75rem;}
.contact-eyebrow::after{content:'';width:28px;height:1px;background:var(--pink);}
.contact-title{font-family:var(--hand);font-size:clamp(3.2rem,7vw,5.5rem);font-weight:700;color:var(--ink);line-height:1.25;margin-bottom:1.25rem;padding:0.2em 0.15em 0;overflow:visible;}
.contact-title .coffee{color:var(--pink);}
.contact-sub{font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--ink3);line-height:1.65;margin-bottom:2.75rem;max-width:400px;}
.contact-links{display:flex;flex-direction:column;margin-bottom:3.5rem;max-width:400px;overflow:visible;}
.contact-link{display:flex;align-items:center;justify-content:space-between;padding:1rem 0;padding-right:8px;border-bottom:1px solid var(--border);text-decoration:none;color:var(--ink);transition:padding-left 0.25s;overflow:visible;}
.contact-link:first-child{border-top:1px solid var(--border);}
.contact-link:hover{padding-left:0.75rem;}
.contact-link-left{display:flex;align-items:center;gap:1rem;}
.contact-link-platform{font-size: 15px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink4);min-width:90px;flex-shrink:0;}
.contact-link-value{font-family:var(--serif);font-size:1rem;color:var(--ink3);transition:color 0.2s;}
.contact-link:hover .contact-link-value{color:var(--pink);}
.contact-link-arrow{font-size: 15px;color:var(--ink4);transition:transform 0.25s cubic-bezier(0.34,1.56,0.64,1),color 0.2s;display:inline-block;}
.contact-link:hover .contact-link-arrow{transform:translate(6px,-4px);color:var(--pink);}
.contact-footer{display:flex;justify-content:space-between;align-items:center;padding-top:2rem;border-top:1px solid var(--border);flex-wrap:wrap;gap:1rem;}
.contact-footer-name{font-family: Lato, sans-serif;font-size: 15px;color:var(--ink3);}
.contact-footer-hand{font-family:var(--hand);font-size:0.95rem;color:var(--ink3);}
.contact-footer-copy{font-size: 15px;letter-spacing:0.06em;color:var(--ink4);}

/* ── JOURNEY ── */
.journey{background:transparent;padding:5rem 200px;position:relative;}
.journey-inner{display:grid;grid-template-columns:1fr 2fr;gap:6rem;align-items:start;position:relative;z-index:1;}
.journey-left{position:sticky;top:8rem;}
.journey-title{font-family:'Rethink Sans',var(--sans);font-size:clamp(24px,4.5vw,40px);font-weight:800;color:var(--ink);line-height:1.25;margin-bottom:1rem;}
.journey-title em{font-family:var(--hand);font-style:italic;color:var(--pink);font-size:1.15em;}
.journey-sub{font-size: 15px;color:var(--ink3);line-height:1.72;margin-top:1rem;}
.journey-timeline{display:flex;flex-direction:column;}
.timeline-item{display:grid;grid-template-columns:48px 1fr;gap:1.5rem;position:relative;opacity:0;transform:translateX(-24px);transition:opacity 0.55s cubic-bezier(0.22,1,0.36,1),transform 0.55s cubic-bezier(0.22,1,0.36,1);}
.timeline-item:nth-child(1){transition-delay:0ms;}.timeline-item:nth-child(2){transition-delay:80ms;}.timeline-item:nth-child(3){transition-delay:160ms;}.timeline-item:nth-child(4){transition-delay:240ms;}
.timeline-item.in-view{opacity:1;transform:translateX(0);}
.timeline-dot-wrap{display:flex;flex-direction:column;align-items:center;padding-top:3px;}
.timeline-dot{width:12px;height:12px;border-radius:50%;background:#fff;border:2px solid var(--border2);flex-shrink:0;position:relative;z-index:2;transition:background 0.35s,border-color 0.35s,box-shadow 0.35s;}
.timeline-item.in-view .timeline-dot{background:var(--pink);border-color:var(--pink);box-shadow:0 0 0 4px rgba(30,144,255,0.12);}
.timeline-dot.active{background:var(--pink);border-color:var(--pink);}
.tl-ring{position:absolute;inset:-6px;border-radius:50%;border:2px solid rgba(30,144,255,0.35);opacity:0;transform:scale(0.5);transition:opacity 0.4s 0.2s,transform 0.4s 0.2s;}
.timeline-item.in-view .tl-ring{opacity:1;transform:scale(1);animation:tlRingPulse 2.2s ease-in-out infinite 0.6s;}
@keyframes tlRingPulse{0%,100%{opacity:0.5;transform:scale(1);}50%{opacity:0;transform:scale(1.9);}}
.tl-line{flex:1;width:2px;background:linear-gradient(to bottom,var(--pink),rgba(30,144,255,0.1));margin:8px 0 0;transform:scaleY(0);transform-origin:top;transition:transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s;min-height:60px;}
.timeline-item.in-view .tl-line{transform:scaleY(1);}
.timeline-content{padding-bottom:3rem;}
.timeline-date{font-size: 15px;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink4);margin-bottom:0.4rem;}
.timeline-role{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:0.2rem;}
.timeline-company{font-size: 15px;color:var(--pink);font-weight: 600;margin-bottom:0.55rem;letter-spacing:0.02em;}
.timeline-detail{font-size: 15px;color:var(--ink3);line-height:1.72;}

/* ── ANIMATIONS ── */
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
@keyframes slideLine{from{left:-100%;}to{left:100%;}}
@keyframes musicPulse{from{height:8px;}to{height:24px;}}
@keyframes floatIn{from{opacity:0;transform:translateY(16px) scale(0.95);}to{opacity:1;transform:translateY(0) scale(1);}}
@keyframes gentleFloat{0%,100%{transform:translateY(0);}33%{transform:translateY(-8px);}66%{transform:translateY(4px);}}
@keyframes pulse-green{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(0.85);}}

/* ── SCROLL SHAPES ── */
.scroll-shapes{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0;}
.ss{position:absolute;border-radius:50%;border:1px solid rgba(0,0,0,0.06);opacity:0;transform:scale(0.4) rotate(-20deg);transition:opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94),transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);}
.ss.in{opacity:1;transform:scale(1) rotate(0deg);}
.ss-a{width:280px;height:280px;top:-80px;right:10%;border-color:rgba(0,0,0,0.05);}
.ss-b{width:180px;height:180px;bottom:-60px;left:8%;border-color:rgba(0,0,0,0.04);}
.ss-c{width:120px;height:120px;top:40%;left:-40px;border:2px solid rgba(0,0,0,0.05);}
.ss-line{position:absolute;background:rgba(0,0,0,0.05);opacity:0;transition:opacity 0.7s ease,transform 0.7s ease;transform:scaleX(0);transform-origin:left;}
.ss-line.in{opacity:1;transform:scaleX(1);}
.ss-line-h{height:1px;width:80px;}


/* contact flex layout */
.contact-flex{display:flex;align-items:center;gap:5rem;position:relative;z-index:1;overflow:visible;}
.contact-left{flex-shrink:0;width:370px;}
.contact-right{flex:1;max-width:480px;margin-left:auto;text-align:right;}
.contact-right .contact-title{text-align:right;}
.contact-right .contact-sub{text-align:right;margin-left:auto;}
.contact-right .contact-links{margin-left:auto;}
.contact-right .contact-link{text-align:left;}
.contact-right .contact-footer{justify-content:flex-end;text-align:right;}
/* ── ASK ME ANYTHING SEARCH ── */
.ama-label{font-family: Lato, sans-serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink4);margin-bottom:16px;display:block;}
.ama-bar-wrap{margin-bottom:16px;}
.ama-bar{display:flex;align-items:center;background:rgba(255,255,255,0.9);backdrop-filter:blur(12px);border:1.5px solid rgba(30,144,255,0.12);border-radius:16px;padding:12px 14px;gap:10px;box-shadow:0 4px 24px rgba(0,0,0,0.05),0 1px 3px rgba(0,0,0,0.03);transition:border-color 0.25s,box-shadow 0.25s;}
.ama-bar:focus-within{border-color:rgba(30,144,255,0.32);box-shadow:0 8px 32px rgba(30,144,255,0.09),0 1px 4px rgba(0,0,0,0.04);}
.ama-icon{width:16px;height:16px;flex-shrink:0;opacity:0.38;color:var(--ink3);}
.ama-input{flex:1;border:none;background:transparent;font-family: Lato, sans-serif;font-size:14px;color:var(--ink2);outline:none;letter-spacing:0.01em;min-width:0;}
.ama-input::placeholder{color:var(--ink4);font-style:italic;}
.ama-clear{display:none;width:22px;height:22px;border-radius:50%;border:none;background:rgba(0,0,0,0.06);color:var(--ink3);font-size:15px;cursor:pointer;flex-shrink:0;align-items:center;justify-content:center;transition:background 0.15s,color 0.15s;padding:0;line-height:1;}.ama-clear.visible{display:flex;}
.ama-clear:hover{background:rgba(0,0,0,0.11);color:var(--ink);}
.ama-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;transition:opacity 0.3s;}
.ama-chip{font-family: Lato, sans-serif;font-size:13px;color:var(--ink3);background:rgba(255,255,255,0.7);border:1px solid rgba(0,0,0,0.09);border-radius:100px;padding:6px 13px;cursor:pointer;transition:background 0.2s,border-color 0.2s,color 0.2s,transform 0.2s;white-space:nowrap;line-height:1.4;}
.ama-chip:hover{background:rgba(30,144,255,0.07);border-color:rgba(30,144,255,0.22);color:var(--ink);transform:translateY(-1px);}
.ama-answer{font-family: Lato, sans-serif;font-size:14px;color:var(--ink2);line-height:1.85;opacity:0;transform:translateY(10px);transition:opacity 0.5s cubic-bezier(0.22,1,0.36,1),transform 0.6s cubic-bezier(0.34,1.56,0.64,1);}
.ama-answer.visible{opacity:1;transform:translateY(0);}
.ama-answer em{font-style:italic;background:linear-gradient(120deg,#1E90FF,#00BFFF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.ama-head{display:block;font-weight:500;background:linear-gradient(130deg,var(--ink) 20%,#1E90FF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:0;}
@keyframes ama-emoji-pop{0%{transform:scale(0.4) rotate(-8deg);opacity:0;}65%{transform:scale(1.18) rotate(4deg);}100%{transform:scale(1) rotate(0deg);opacity:1;}}
.ama-emoji{display:inline-block;}
.ama-answer.visible .ama-emoji{animation:ama-emoji-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both;}
.ama-answer.visible .ama-emoji:nth-of-type(2){animation-delay:0.14s;}
.ama-answer.visible .ama-emoji:nth-of-type(3){animation-delay:0.28s;}
.contact-left{transition:background 0.6s ease;}
.contact-left.has-answer{background:rgba(30,144,255,0.025);border-radius:20px;}



@media(max-width:900px){
  nav{padding:8px 12px;}.nav-clock-group,.nav-divider:not(:first-of-type){display:none;}.nav-link-item{padding:4px 7px;font-size: 15px;}.nav-pill{height:40px;}
  .work,.journey,.about,.contact,.process-section,.gallery-section,.shelf-section,.testimonials-section{padding:3rem clamp(24px,4vw,50px);}
  .spectrum-section{padding:4rem clamp(24px,4vw,50px);}
  .journey-inner{grid-template-columns:1fr;}.journey-left{position:static;}
  .float-el{display:none;}
  .about-title{margin-bottom:2.6rem;}
  .about-book-stage{width:min(100%,790px);aspect-ratio:1.68;}
  .about-page-content{left:6.5%;right:6.5%;top:11%;bottom:10%;}
  .about-page-spread{gap:6.5%;}
  .about-lined-page p{line-height:1.55;margin-bottom:0.55rem;}
  .pendulum-bob{width:66px;height:66px;}.pendulum-string{height:90px;}.ball-label{font-size: 15px;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:100px;}
  .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10{grid-column:auto;grid-row:auto;}
  .hero-cards{gap:8px;}.hero-card{width:76px;height:60px;}.hero-card:hover{width:130px;height:100px;}
  .contact-flex{flex-direction:column;gap:2rem;}.contact-left{width:100%;}
  .pendulum-canvas{height:280px;}
  .pw-rows{gap:3.5rem;}
  .pw-row,.pw-row.pw-reversed{grid-template-columns:1fr;grid-template-areas:"visual" "details";gap:1.75rem;padding:1.5rem 0;}
  .pw-row .pw-visual,.pw-row.pw-reversed .pw-visual{align-items:flex-start!important;}
  .cswk{padding:3rem clamp(24px,4vw,50px);}
  .cswk-rows{gap:4rem;}
  .cswk-row,.cswk-reversed{grid-template-columns:1fr;grid-template-areas:"visual" "content";gap:1.75rem;padding:1.5rem 0;}
  .cswk-reversed{grid-template-areas:"visual" "content";}
  .cswk-reversed .cswk-annot{flex-direction:row;padding-right:0;padding-left:0.75rem;}
  .cswk-head{margin-bottom:3rem;}
}
@media(max-width:640px){
  .hero{padding:5rem 20px 4rem;cursor:auto;}
  .hero-line1{font-size:clamp(20px,5.5vw,34px);flex-wrap:wrap;white-space:normal;gap:0 6px;}
  .hero-line2{font-size: 15px;padding:0 4px;}
  .hero-line3{font-size: 15px;padding:5px 13px;}
  .hero-cards{gap:6px;height:90px;}
  .hero-card{width:64px;height:52px;border-radius:12px;}
  .hero-card:hover{width:110px;height:84px;}
  .hero-text{padding:0 8px;max-width:100%;}
  .hero-scroll-hint{bottom:1.5rem;}
}
@media(max-width:580px){
  .pw-rows{gap:2.5rem;}
  .pw-row{padding:1rem 0;}
  .cswk-rows{gap:2.75rem;}
  .cswk-row{padding:0;}
  .cswk-desc{max-width:none;}
  .about{padding-top:6.5rem;padding-bottom:3rem;}
  .about-title{font-size:clamp(2rem,9vw,2.7rem);margin-bottom:2.25rem;}
  .about-book-stage{width:110%;margin-left:-5%;aspect-ratio:1.18;}
  .about-book-page{top:1%;bottom:2%;}
  .about-book-page-left{left:1%;width:49%;border-radius:15px 5px 8px 17px;}
  .about-book-page-right{right:1%;width:49%;border-radius:5px 15px 17px 8px;}
  .about-book-spine{top:2%;bottom:3%;}
  .about-page-content{left:7.5%;right:7.5%;top:8.5%;bottom:8.5%;}
  .about-page-spread{gap:5%;}
  .about-left-page{padding:2% 2% 4% 4%;}
  .about-photo-box span{display:none;}
  .about-photo-box.large{height:46%;flex-basis:46%;}
  .about-lined-page{padding:2% 4% 2% 0;background:repeating-linear-gradient(0deg,transparent 0 24px,rgba(103,120,145,0.18) 25px 26px);}
  .about-page-num{display:none;}
  .about-lined-page h3{font-size:clamp(1.05rem,4.2vw,1.3rem);margin-bottom:0.5rem;}
  .about-lined-page p{font-size:clamp(0.78rem,3.2vw,0.94rem);line-height:1.4;margin-bottom:0.35rem;}
  .about-page-controls{bottom:-34px;}
  .about-ribbon{width:18%;left:-1%;top:-13%;}
  .about-flower-one{width:13%;right:1%;top:-9%;}
  .about-flower-two{width:16%;left:0;bottom:-4%;}
  .about-flower-three{width:27%;right:0;bottom:-9%;}
  .hero-line1{font-size:clamp(18px,5vw,28px);}
  .hero-cards{gap:5px;height:80px;}
  .hero-card{width:52px;height:70px;border-radius:12px;}
}

/* ── SIGNOFF ── */
.signoff{
  background:#0c0e14;
  min-height:100vh;
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  padding:6rem 200px 7rem;
  position:relative;overflow:hidden;
  cursor:pointer;
  border-top:1px solid rgba(30,144,255,0.07);
}
.signoff::before{
  content:'';position:absolute;
  width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(30,144,255,0.07) 0%,transparent 65%);
  top:50%;left:50%;transform:translate(-50%,-50%);
  pointer-events:none;
}
.signoff-eyebrow{
  font-family:var(--hand);
  font-size:1rem;color:rgba(255,255,255,0.22);
  letter-spacing:0.2em;
  margin-bottom:3.5rem;display:block;
  opacity:0;transform:translateY(8px);
  transition:opacity 0.7s ease 0.1s,transform 0.7s ease 0.1s;
}
.signoff.stage-entered .signoff-eyebrow{opacity:1;transform:translateY(0);}

/* Stage container */
.signoff-stage{
  position:relative;
  width:600px;height:360px;
  overflow:visible;
  flex-shrink:0;
}

/* ── BLOCK BASE ── */
.sb{
  position:absolute;
  opacity:0;
  border-radius:18px;
  transition:
    transform 0.8s cubic-bezier(0.34,1.12,0.64,1),
    opacity   0.5s ease,
    background 0.55s ease,
    border-color 0.55s ease,
    box-shadow 0.55s ease,
    color 0.45s ease;
  will-change:transform,opacity;
}

/* ── LETTER N — base position (fixed/correct spot) ── */
.sb-N{
  left:100px;top:90px;width:160px;height:160px;
  background:rgba(255,255,255,0.05);
  border:1.5px solid rgba(255,255,255,0.10);
  box-shadow:0 8px 32px rgba(0,0,0,0.35);
  font-family:var(--serif);font-size:106px;font-weight:400;
  color:rgba(255,255,255,0.5);
  display:flex;align-items:center;justify-content:center;
  line-height:1;letter-spacing:-0.04em;
  /* initial: off-screen top-left */
  transform:translate(-380px,-200px) rotate(-55deg) scale(0.65);
  transition-delay:0s;
}
/* Scattered (entered) */
.signoff.stage-entered .sb-N{
  opacity:1;
  transform:translate(-170px,-85px) rotate(-30deg) scale(1);
  transition-delay:0.28s;
}
/* Fixed (monogram) */
.signoff.stage-fixed .sb-N{
  opacity:1;
  transform:translate(0,0) rotate(0deg) scale(1);
  background:rgba(255,255,255,0.93);
  border-color:rgba(255,255,255,0.5);
  color:#0c0e14;
  box-shadow:0 20px 56px rgba(255,255,255,0.08),0 4px 16px rgba(0,0,0,0.3);
  transition-delay:0s;
}

/* ── LETTER T ── */
.sb-T{
  left:340px;top:90px;width:160px;height:160px;
  background:rgba(30,144,255,0.10);
  border:1.5px solid rgba(30,144,255,0.20);
  box-shadow:0 8px 32px rgba(30,144,255,0.08);
  font-family:var(--serif);font-size:106px;font-weight:400;
  color:rgba(30,144,255,0.55);
  display:flex;align-items:center;justify-content:center;
  line-height:1;letter-spacing:-0.04em;
  /* initial: off-screen top-right */
  transform:translate(360px,-200px) rotate(50deg) scale(0.65);
  transition-delay:0s;
}
.signoff.stage-entered .sb-T{
  opacity:1;
  transform:translate(150px,-65px) rotate(24deg) scale(1);
  transition-delay:0.38s;
}
.signoff.stage-fixed .sb-T{
  opacity:1;
  transform:translate(0,0) rotate(0deg) scale(1);
  background:#1E90FF;
  border-color:#1E90FF;
  color:#fff;
  box-shadow:0 20px 56px rgba(30,144,255,0.38),0 4px 16px rgba(30,144,255,0.22);
  transition-delay:0.06s;
}

/* ── CENTRE DIVIDER (d1) ── */
.sb-d1{
  left:296px;top:108px;width:4px;height:108px;
  background:rgba(30,144,255,0.18);border-radius:2px;border:none;
  transform:translate(0,320px) rotate(75deg) scale(0.3);transition-delay:0s;
}
.signoff.stage-entered .sb-d1{
  opacity:1;transform:translate(-80px,145px) rotate(82deg);transition-delay:0.10s;
}
.signoff.stage-fixed .sb-d1{
  opacity:1;transform:translate(0,0) rotate(0deg) scale(1);transition-delay:0.12s;
}

/* ── TOP LINE (d2) ── */
.sb-d2{
  left:90px;top:62px;width:420px;height:1.5px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),rgba(30,144,255,0.12),rgba(255,255,255,0.07),transparent);
  border-radius:1px;border:none;
  transform:translate(0,-200px) rotate(4deg) scaleX(0.2);transition-delay:0s;
}
.signoff.stage-entered .sb-d2{
  opacity:1;transform:translate(-35px,165px) rotate(7deg) scaleX(0.85);transition-delay:0.05s;
}
.signoff.stage-fixed .sb-d2{
  opacity:1;transform:translate(0,0) rotate(0deg) scaleX(1);transition-delay:0.18s;
}

/* ── BOTTOM LINE (d3) ── */
.sb-d3{
  left:90px;top:282px;width:420px;height:1.5px;
  background:linear-gradient(90deg,transparent,rgba(30,144,255,0.10),rgba(255,255,255,0.06),rgba(30,144,255,0.10),transparent);
  border-radius:1px;border:none;
  transform:translate(0,200px) rotate(-4deg) scaleX(0.2);transition-delay:0s;
}
.signoff.stage-entered .sb-d3{
  opacity:1;transform:translate(45px,-105px) rotate(-9deg) scaleX(0.85);transition-delay:0.08s;
}
.signoff.stage-fixed .sb-d3{
  opacity:1;transform:translate(0,0) rotate(0deg) scaleX(1);transition-delay:0.20s;
}

/* ── LEFT DOT (d4) ── */
.sb-d4{
  left:50px;top:147px;width:14px;height:14px;
  background:rgba(30,144,255,0.45);border:none;border-radius:50%;
  transform:translate(-350px,-150px) scale(0);transition-delay:0s;
}
.signoff.stage-entered .sb-d4{
  opacity:1;transform:translate(-230px,-85px) scale(1.3);transition-delay:0.15s;
}
.signoff.stage-fixed .sb-d4{
  opacity:1;transform:translate(0,0) scale(1);
  background:rgba(30,144,255,0.6);transition-delay:0.22s;
}

/* ── RIGHT DOT (d5) ── */
.sb-d5{
  left:536px;top:147px;width:14px;height:14px;
  background:rgba(255,255,255,0.18);border:none;border-radius:50%;
  transform:translate(350px,200px) scale(0);transition-delay:0s;
}
.signoff.stage-entered .sb-d5{
  opacity:1;transform:translate(195px,105px) scale(1.3);transition-delay:0.18s;
}
.signoff.stage-fixed .sb-d5{
  opacity:1;transform:translate(0,0) scale(1);
  background:rgba(255,255,255,0.28);transition-delay:0.25s;
}

/* ── HINT TEXT ── */
.signoff-hint{
  font-family:var(--hand);font-size:1rem;
  color:rgba(255,255,255,0.28);letter-spacing:0.08em;
  margin-top:3rem;
  opacity:0;transform:translateY(6px);
  transition:opacity 0.6s ease 0.95s,transform 0.6s ease 0.95s;
  pointer-events:none;text-align:center;
}
.signoff.stage-entered .signoff-hint{opacity:1;transform:translateY(0);}
.signoff.stage-fixed .signoff-hint{
  opacity:0!important;transform:translateY(-4px)!important;
  transition:opacity 0.25s ease 0s,transform 0.25s ease 0s!important;
}

/* ── REVEAL ── */
.signoff-reveal{
  display:flex;flex-direction:column;align-items:center;gap:0.1rem;
  margin-top:3rem;
  opacity:0;transform:translateY(14px);
  transition:opacity 0.65s ease 0.55s,transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
  pointer-events:none;text-align:center;
}
.signoff.stage-fixed .signoff-reveal{opacity:1;transform:translateY(0);}
.signoff-reveal-line1{
  font-family:var(--serif);
  font-size:clamp(1.55rem,2.8vw,2.3rem);
  font-style:italic;color:rgba(255,255,255,0.78);line-height:1.25;
}
.signoff-reveal-line2{
  font-family:var(--serif);
  font-size:clamp(1.55rem,2.8vw,2.3rem);
  font-style:italic;color:var(--pink);line-height:1.25;
}

/* ── SIGNOFF MOBILE ── */
@media(max-width:640px){
  .signoff-stage{width:320px;height:210px;}
  .sb-N{left:30px;top:35px;width:110px;height:110px;font-size:70px;}
  .sb-T{left:180px;top:35px;width:110px;height:110px;font-size:70px;}
  .sb-d1{left:162px;top:55px;height:78px;}
  .sb-d2{left:22px;top:22px;width:276px;}
  .sb-d3{left:22px;top:172px;width:276px;}
  .sb-d4{left:6px;top:78px;}
  .sb-d5{left:300px;top:78px;}
  /* re-tune scattered transforms for mobile */
  .signoff.stage-entered .sb-N{transform:translate(-100px,-55px) rotate(-28deg) scale(1);}
  .signoff.stage-entered .sb-T{transform:translate(95px,-45px) rotate(22deg) scale(1);}
  .signoff.stage-entered .sb-d1{transform:translate(-50px,95px) rotate(82deg);}
  .signoff.stage-entered .sb-d2{transform:translate(-18px,105px) rotate(7deg) scaleX(0.85);}
  .signoff.stage-entered .sb-d3{transform:translate(28px,-70px) rotate(-9deg) scaleX(0.85);}
  .signoff.stage-entered .sb-d4{transform:translate(-140px,-55px) scale(1.3);}
  .signoff.stage-entered .sb-d5{transform:translate(125px,65px) scale(1.3);}
}

/* ─── EDITORIAL WORK SECTION ─── */
.ew-section{
  padding:120px max(40px,8vw) 100px;
  border-top:1px solid var(--border);
}
.ew-header{
  margin-bottom:72px;
}
.ew-label{
  display:block;
  font-size: 15px;
  font-weight:600;
  text-transform:uppercase;
  letter-spacing:0.14em;
  color:var(--ink4);
  margin-bottom:20px;
}
.ew-manifesto{
  font-size:clamp(1.5rem,3.2vw,2.4rem);
  font-weight:700;
  line-height:1.18;
  letter-spacing:-0.025em;
  color:var(--ink);
  max-width:680px;
}
.ew-list{
  display:flex;
  flex-direction:column;
}
.ew-row{
  display:grid;
  grid-template-columns:52px 1fr auto 32px;
  align-items:center;
  gap:28px;
  padding:28px 20px 28px 0;
  border-top:1px solid var(--border);
  text-decoration:none;
  color:inherit;
  border-radius:0;
  transition:background 280ms ease, padding-left 280ms ease;
  background:transparent;
  position:relative;
}
.ew-row:last-child{
  border-bottom:1px solid var(--border);
}
.ew-row:hover{
  background:var(--ew-tint);
  padding-left:16px;
}
.ew-num{
  font-family:'DM Mono',ui-monospace,monospace;
  font-size: 15px;
  color:var(--ink4);
  font-weight:400;
  letter-spacing:0.06em;
  flex-shrink:0;
  transition:color 280ms;
}
.ew-row:hover .ew-num{
  color:var(--ew-accent);
}
.ew-body{
  display:flex;
  flex-direction:column;
  gap:5px;
  min-width:0;
}
.ew-outcome{
  font-size:clamp(1rem,1.9vw,1.35rem);
  font-weight:700;
  letter-spacing:-0.018em;
  color:var(--ink);
  line-height:1.2;
  transition:color 220ms;
}
.ew-row:hover .ew-outcome{
  color:var(--ew-accent);
}
.ew-meta{
  display:flex;
  align-items:center;
  gap:8px;
  flex-wrap:wrap;
}
.ew-name{
  font-size: 15px;
  font-weight:600;
  color:var(--ink2);
}
.ew-sep{
  font-size: 15px;
  color:var(--ink4);
}
.ew-desc{
  font-size: 15px;
  color:var(--ink3);
  font-weight:300;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.ew-bottom{
  display:flex;
  align-items:center;
  gap:18px;
  margin-top:2px;
  flex-wrap:wrap;
}
.ew-role{
  font-size: 15px;
  color:var(--ink4);
  text-transform:uppercase;
  letter-spacing:0.07em;
}
.ew-constraints{
  font-size: 15px;
  color:var(--ink4);
  font-style:italic;
  opacity:0.75;
}
.ew-thumb-wrap{
  width:88px;
  height:60px;
  flex-shrink:0;
  display:flex;
  align-items:center;
  justify-content:center;
}
.ew-thumb{
  width:88px;
  height:60px;
  border-radius:7px;
  overflow:hidden;
  opacity:0;
  transform:translateY(6px) scale(0.94);
  transition:opacity 280ms ease, transform 280ms ease;
  flex-shrink:0;
}
.ew-row:hover .ew-thumb{
  opacity:1;
  transform:translateY(0) scale(1);
}
.ew-thumb img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.ew-thumb-placeholder{
  background:var(--bg2);
}
.ew-thumb-eco{
  background:linear-gradient(135deg,#d4f0de 0%,#a8deb8 100%);
}
.ew-thumb-care{
  background:linear-gradient(135deg,#e8e4f8 0%,#c5bef0 100%);
}
.ew-thumb-ds{
  background:linear-gradient(135deg,#fce4ef 0%,#f5a8cd 100%);
}
.ew-arrow{
  font-size:1rem;
  color:var(--ink4);
  opacity:0;
  transform:translateX(-10px);
  transition:opacity 200ms ease, transform 200ms ease, color 200ms;
  flex-shrink:0;
}
.ew-row:hover .ew-arrow{
  opacity:1;
  transform:translateX(0);
  color:var(--ew-accent);
}
@media(max-width:640px){
  .ew-section{padding:80px 24px 72px;}
  .ew-row{
    grid-template-columns:40px 1fr 28px;
    gap:16px;
    padding:22px 0;
  }
  .ew-thumb-wrap{display:none;}
  .ew-desc{display:none;}
  .ew-constraints{display:none;}
  .ew-row:hover{padding-left:8px;}
}

/* ─── WORK ROW SECTION ─── */
.wr-section{
  padding:120px max(40px,8vw) 100px;
}
.wr-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-bottom:20px;
  border-bottom:1px solid var(--border);
  margin-bottom:0;
}
.wr-header-label{
  font-family:var(--sans);
  font-size: 15px;
  font-weight:600;
  text-transform:uppercase;
  letter-spacing:0.14em;
  color:var(--ink4);
}
.wr-header-count{
  font-family:var(--hand);
  font-size:1rem;
  color:var(--ink4);
}
.wr-list{
  display:flex;
  flex-direction:column;
}
.wr-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  border-bottom:1px solid var(--border);
  text-decoration:none;
  color:inherit;
  transition:background 0.2s ease;
  background:transparent;
  position:relative;
}
.wr-list .wr-row:first-child{
  border-top:1px solid var(--border);
}
.wr-row:hover{
  background:var(--bg2);
}
.wr-text{
  padding:36px 40px 36px 0;
  display:flex;
  flex-direction:column;
  gap:20px;
}
.wr-row.flip .wr-text{
  padding:36px 0 36px 40px;
}
.wr-meta-row{
  display:flex;
  align-items:center;
  font-family:var(--hand);
  font-size: 15px;
  color:var(--ink4);
  flex-wrap:nowrap;
  overflow:hidden;
}
.wr-dot{
  display:inline-block;
  width:3px;
  height:3px;
  border-radius:50%;
  background:var(--ink4);
  margin:0 7px;
  flex-shrink:0;
}
.wr-meta-year{
  margin-left:auto;
  flex-shrink:0;
  padding-left:12px;
}
.wr-identity{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.wr-name{
  font-family:var(--serif);
  font-size:28px;
  font-weight:500;
  line-height:1.2;
  letter-spacing:-0.3px;
  color:var(--ink);
  margin:0;
}
.wr-impact{
  font-family:var(--hand);
  font-size:17px;
  color:var(--pink);
  line-height:1.4;
  margin:0;
}
.wr-desc{
  font-family:var(--serif);
  font-size: 15px;
  font-style:italic;
  color:var(--ink3);
  line-height:1.8;
  margin:0;
}
.wr-constraints{
  font-family:var(--hand);
  font-size: 15px;
  color:var(--ink4);
  border-left:2px solid var(--border);
  padding-left:8px;
  margin:0;
}
.wr-bottom{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}
.wr-role-pill{
  font-family:var(--hand);
  font-size: 15px;
  color:var(--ink3);
  border:0.5px solid var(--border2);
  border-radius:20px;
  padding:4px 12px;
  display:inline-block;
}
.wr-cta{
  font-family:var(--serif);
  font-size: 15px;
  color:var(--ink4);
  display:inline-flex;
  align-items:center;
  gap:3px;
  transition:color 0.2s ease;
  white-space:nowrap;
}
.wr-arrow{
  display:inline-block;
  opacity:0;
  transform:translateX(-4px);
  transition:opacity 0.2s ease,transform 0.2s ease;
}
.wr-row:hover .wr-cta{
  color:var(--pink);
}
.wr-row:hover .wr-arrow{
  opacity:1;
  transform:translateX(0);
}
.wr-image-col{
  position:relative;
  overflow:hidden;
  min-height:260px;
  background:var(--wr-tint,transparent);
}
.wr-row.flip .wr-image-col{
  order:-1;
}
.wr-image-inner{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
}
.wr-card{
  width:72%;
  aspect-ratio:16/10;
  background:#fff;
  border:0.5px solid rgba(0,0,0,0.10);
  border-radius:8px;
  box-shadow:0 2px 12px rgba(0,0,0,0.08);
  overflow:hidden;
  transform:rotate(var(--wr-rot,0deg));
  transform-origin:center;
  transition:transform 0.4s ease;
}
.wr-row:hover .wr-card{
  transform:rotate(0deg) scale(1.02);
}
.wr-card img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.wr-ph-care{
  background:linear-gradient(145deg,#f0edfc 0%,#e4dff8 100%);
}
.wr-ph-ds{
  background:linear-gradient(145deg,#fce9f4 0%,#f8d8ec 100%);
}
.wr-ph-inner{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  padding:16px 18px;
}
.wr-ph-bar{
  height:8px;
  border-radius:4px;
  background:rgba(0,0,0,0.06);
  width:40%;
  margin-bottom:12px;
}
.wr-ph-body{
  display:flex;
  flex-direction:column;
  gap:7px;
}
.wr-ph-block{
  height:7px;
  border-radius:4px;
  width:100%;
}
.wr-ph-block-lg{
  height:28px;
  border-radius:6px;
  margin-bottom:4px;
}
.wr-ph-ds-swatches{
  display:flex;
  gap:6px;
  margin-bottom:4px;
}
.wr-ph-swatch{
  width:22px;
  height:22px;
  border-radius:6px;
}
@media(max-width:767px){
  .wr-section{padding:80px 24px 64px;}
  .wr-row{grid-template-columns:1fr;}
  .wr-image-col{order:-1;min-height:200px;}
  .wr-row.flip .wr-image-col{order:-1;}
  .wr-text{padding:24px 0;}
  .wr-row.flip .wr-text{padding:24px 0;}
  .wr-name{font-size:22px;}
  .wr-impact{font-size:15px;}
  .wr-desc{font-size: 15px;}
}
/* ── WHITE BG + GRAY DOT PATTERN ── */
.hero,.work,.zoom-sticky,.dsz-sticky,.about,.gallery-section,.shelf-section,.scrapbook-section,.testimonials-section,.home-loves,.home-xp,.contact{
  background-color:#ffffff;
  background-image:linear-gradient(rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px);
  background-size:28px 28px;
}

/* ── THINGS I LOVE SECTION ── */
.home-loves{padding:6rem 200px 5rem;}
.home-loves-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:4rem;}
.home-loves-title em{font-style:italic;color:var(--pink);}
.home-loves-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.home-love-card{background:#fff;border-radius:20px;padding:36px 28px 32px;box-shadow:0 1px 4px rgba(0,0,0,0.04),0 4px 22px rgba(0,0,0,0.05);transition:transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94),box-shadow 0.3s ease;overflow:hidden;position:relative;}
.home-love-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,0.10),0 2px 10px rgba(0,0,0,0.05);}
.home-love-icon{font-size:2.8rem;margin-bottom:1.2rem;display:block;line-height:1;transition:transform 0.38s cubic-bezier(0.34,1.4,0.64,1);}
.home-love-card:hover .home-love-icon{transform:scale(1.22) rotate(-8deg);}
.home-love-name{font-family:var(--serif);font-size:1.55rem;font-weight:400;color:var(--ink);margin-bottom:0.5rem;line-height:1.2;}
.home-love-desc{font-size: 15px;color:var(--ink3);line-height:1.72;}
.home-love-whisper{margin-top:1.2rem;padding-top:1rem;border-top:1px solid rgba(0,0,0,0.06);font-family:var(--hand);font-size:0.95rem;color:#bbb;}

/* ── GOOD EXPERIENCES (POLAROID GRID) ── */
.home-xp{padding:4rem 200px 6rem;overflow:hidden;}
.home-xp-inner{}
.home-xp-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:4rem;}
.home-xp-title em{font-style:italic;color:var(--pink);}
.home-xp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px 22px;position:relative;}
.home-xp-pol{background:#fff;padding:10px 10px 46px;box-shadow:0 4px 20px rgba(0,0,0,0.10),0 1px 5px rgba(0,0,0,0.06);border-radius:2px;overflow:hidden;cursor:pointer;position:relative;transform-origin:center center;transition:transform 0.3s ease,box-shadow 0.3s ease;transform:rotate(var(--r,0deg));z-index:1;}
.home-xp-pol:hover{transform:scale(1.04);box-shadow:0 28px 64px rgba(0,0,0,0.18),0 6px 20px rgba(0,0,0,0.09);z-index:10;}
.home-xp-photo{width:100%;aspect-ratio:1/1;display:block;border-radius:1px;position:relative;overflow:hidden;}
.home-xp-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;}
.home-xp-pol:hover .home-xp-photo img{transform:none;}
.home-xp-over{position:absolute;inset:0;background:rgba(0,0,0,0.52);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.28s ease;border-radius:1px;padding:12px;text-align:center;}
.home-xp-pol:hover .home-xp-over{opacity:1;}
.home-xp-mem{font-family:var(--hand);font-size:1rem;color:#fff;line-height:1.45;}
.home-xp-caption{position:absolute;bottom:0;left:0;right:0;height:46px;display:flex;align-items:center;justify-content:center;font-family: Lato, sans-serif;font-size: 15px;color:#888;padding:0 8px;text-align:center;line-height:1.3;}
.home-xp-tape{position:absolute;height:18px;border-radius:2px;z-index:3;}
.home-xp-tape::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,0.06) 0,rgba(0,0,0,0.06) 2px,transparent 2px,transparent 6px);border-radius:2px;}
.home-xp-tape.hxt{width:54px;top:-9px;left:50%;transform:translateX(-50%) rotate(-1.5deg);background:rgba(255,220,100,0.55);}
.home-xp-tape.hxl{width:44px;top:-8px;left:8px;transform:rotate(-4deg);background:rgba(255,220,100,0.50);}
.home-xp-tape.hxr{width:44px;top:-8px;right:8px;transform:rotate(5deg);background:rgba(160,200,255,0.58);}

/* ── RESPONSIVE NEW SECTIONS ── */
@media(max-width:1200px){
  .hero{padding:9rem 160px 5rem 160px;}
  .home-loves{padding:5rem 100px;}
  .home-xp{padding:4rem 100px 5rem;}
}
@media(max-width:1100px){.home-xp-grid{grid-template-columns:repeat(3,1fr);}}
/* ── POLAROID MEMORY COLLAGE (home hero right) ── */
.hi-pm-collage{position:relative;width:460px;height:640px;flex-shrink:0;}
.hi-pm-note{position:absolute;font-family:var(--hand);font-size:16px;color:rgba(60,40,20,0.44);pointer-events:none;line-height:1.55;z-index:0;}
.hi-pm-note--tl{top:16px;left:6px;transform:rotate(-6deg);}
.hi-pm-wrap{position:absolute;cursor:pointer;}
.hi-pm-frame{background:#fff;padding:12px 12px 42px;border-radius:2px;box-shadow:0 4px 16px rgba(0,0,0,0.09),0 10px 30px rgba(0,0,0,0.07);transition:transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94),box-shadow 0.45s ease;}
.hi-pm-tape{position:absolute;top:-13px;left:50%;transform:translateX(-50%) rotate(-3deg);width:54px;height:22px;background:rgba(252,224,165,0.72);border-radius:2px;z-index:5;box-shadow:0 1px 3px rgba(0,0,0,0.07);}
.hi-pm-tape--r{transform:translateX(-50%) rotate(5deg);}
.hi-pm-photo{display:block;width:100%;object-fit:cover;object-position:top center;filter:sepia(10%) brightness(0.97) contrast(0.96) saturate(0.92);border-radius:1px;}
.hi-pm-photo--1{height:185px;}
.hi-pm-photo--2{height:198px;}
.hi-pm-photo--3{height:190px;}
.hi-pm-photo--4{height:172px;}
.hi-pm-cap{display:block;padding-top:8px;text-align:center;font-family:var(--hand);font-size:15px;color:rgba(90,55,20,0.70);line-height:1.3;}
.hi-pm-1{left:8px;top:54px;z-index:2;width:215px;animation:hiPmFloat 7s ease-in-out 0s infinite;}
.hi-pm-2{left:205px;top:-12px;z-index:3;width:228px;animation:hiPmFloat 7s ease-in-out 1.4s infinite;}
.hi-pm-3{left:48px;top:196px;z-index:4;width:218px;animation:hiPmFloat 7s ease-in-out 0.7s infinite;}
.hi-pm-4{left:248px;top:210px;z-index:1;width:198px;animation:hiPmFloat 7s ease-in-out 2s infinite;}
.hi-pm-1 .hi-pm-frame{transform:rotate(-7deg);}
.hi-pm-2 .hi-pm-frame{transform:rotate(5deg);}
.hi-pm-3 .hi-pm-frame{transform:rotate(-3deg);}
.hi-pm-4 .hi-pm-frame{transform:rotate(9deg);}
.hi-pm-wrap:hover{z-index:20!important;}
.hi-pm-wrap:hover .hi-pm-frame{transform:rotate(-1deg) translateY(-8px) scale(1.04);box-shadow:0 20px 60px rgba(0,0,0,0.18),0 6px 18px rgba(0,0,0,0.10);}
@keyframes hiPmFloat{
  0%,100%{transform:translateY(0);}
  45%{transform:translateY(-5px);}
}
/* ── RIPPED PAPER NOTE ── */
.hi-ripped-note{
  position:absolute;
  top:462px;
  left:38px;
  right:38px;
  transform:rotate(-1.6deg);
  filter:drop-shadow(0 4px 14px rgba(0,0,0,0.13));
  animation:rippedFloat 6s ease-in-out 1.2s infinite;
  z-index:8;
}
@keyframes rippedFloat{
  0%,100%{transform:rotate(-1.6deg) translateY(0);}
  50%{transform:rotate(-1.6deg) translateY(-4px);}
}
.hi-ripped-edge--top,.hi-ripped-edge--bottom{display:block;width:100%;height:24px;}
.hi-ripped-edge--bottom{height:20px;}
.hi-ripped-body{
  background:#f7f3ee;
  padding:10px 20px 8px;
  position:relative;
}
.hi-ripped-body::before{
  content:'';
  position:absolute;
  top:0;left:14px;right:14px;bottom:0;
  background:repeating-linear-gradient(transparent,transparent 23px,rgba(180,160,140,0.18) 23px,rgba(180,160,140,0.18) 24px);
  pointer-events:none;
}
.hi-ripped-text{
  font-family:var(--hand);
  font-size:1.05rem;
  color:rgba(60,40,20,0.78);
  line-height:1.55;
  position:relative;
  z-index:1;
  font-weight:600;
  margin:0;
}
/* tape strip on the ripped note — slightly off-center for a casual hand-pinned look */
.hi-ripped-note::before{
  content:'';
  position:absolute;
  top:-7px;
  left:38%;
  transform:translateX(-50%) rotate(1.5deg);
  width:56px;height:15px;
  background:rgba(255,235,160,0.75);
  border-radius:2px;
  box-shadow:0 1px 4px rgba(0,0,0,0.10);
  z-index:5;
}
@media(max-width:900px){
  .hero{padding:8rem 48px 4rem;gap:16px;}
  .hi-scrapbook{width:240px;height:340px;}
  .hi-cs-wrap{width:300px;height:330px;}
  .hi-cs-back,.hi-cs-mid,.hi-cs-card{width:245px;height:245px;left:28px;top:52px;}
  .hi-cs-cap{font-size: 15px;bottom:18px;}
  .hi-polaroid-css{width:220px;padding:8px 8px 48px;}
  .hi-mai{height:220px;}
  .home-loves{padding:4rem 48px;}
  .home-xp{padding:4rem 48px 5rem;}
  .hi-pm-collage{width:360px;height:520px;transform:scale(0.88);transform-origin:center top;margin-bottom:-56px;}
}
@media(max-width:700px){
  .hero{grid-template-columns:1fr;padding:7rem 24px 4rem;text-align:center;}
  .hi-right{order:-1;}
  .hi-pm-collage{transform:scale(0.76);transform-origin:center top;width:320px;height:440px;margin-bottom:-104px;}
  .hi-bio{margin:0 auto 2rem;}
  .hi-chips{justify-content:center;}
  .hi-pill{display:none;}
  .home-loves{padding:4rem 20px;}
  .home-loves-grid{grid-template-columns:1fr;gap:14px;}
  .home-xp{padding:4rem 20px 5rem;}
  .home-xp-grid{grid-template-columns:repeat(2,1fr);gap:22px 14px;}
}

/* ═══════════════════════════════════════════════════════════════
   DARK MODE — Homepage
   Premium dark theme: warm charcoal, not flat black
   ═══════════════════════════════════════════════════════════════ */

/* ── CSS variable overrides in dark mode ── */
.dark{
  --bg:#0f0d0c;
  --bg2:#1a1816;
  --bg3:#232120;
  --bg4:#2c2826;
  --surface:#373330;
  --border:rgba(255,255,255,0.06);
  --border2:rgba(255,255,255,0.10);
  --ink:#ede8e3;
  --ink2:#d4cec8;
  --ink3:#a8a09a;
  --ink4:#8c847e;   /* was #6e6460 — too dark on #0f0d0c bg, now lighter */
  --pink3:rgba(30,144,255,0.10);
  --pink5:rgba(30,144,255,0.06);
}

/* ── Body & base ── */
.dark body{
  background:#0f0d0c;
  background-image:linear-gradient(rgba(255,255,255,0.020) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(255,255,255,0.020) 1px,transparent 1px);
  background-size:28px 28px;
  color:#ede8e3;
}

/* ── Smooth transitions ── */
.dark body,.dark nav,.dark .nav-pill,.dark .nav-monogram,.dark .nav-link-item,
.dark .nav-time,.dark .nav-divider,.dark .nav-toggle-divider,
.dark .hero-card,.dark .pw-img-wrap,.dark .pw-card,.dark section{
  transition:background-color 0.32s ease,color 0.28s ease,border-color 0.28s ease,box-shadow 0.28s ease;
}

/* ── Nav pill ── */
.dark .nav-pill{
  background:rgba(16,14,12,0.90);
  border-color:rgba(255,255,255,0.07);
  border-bottom-color:rgba(255,255,255,0.04);
  box-shadow:0 2px 24px rgba(0,0,0,0.55),0 1px 0 rgba(255,255,255,0.04) inset;
  backdrop-filter:blur(24px);
  -webkit-backdrop-filter:blur(24px);
}
.dark nav.scrolled .nav-pill{
  background:rgba(12,10,9,0.96);
  border-color:rgba(255,255,255,0.09);
  box-shadow:0 4px 32px rgba(0,0,0,0.65);
}
.dark .nav-monogram{background:rgba(255,255,255,0.09);color:#f0ebe5;}
.dark .nav-divider{background:rgba(255,255,255,0.07);}
.dark .nav-toggle-divider{background:rgba(255,255,255,0.07);width:1px;height:16px;margin:0 8px 0 10px;flex-shrink:0;}
.dark .nav-link-item{color:rgba(255,255,255,0.38);}
.dark .nav-link-item:hover{background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.84);}
.dark .nav-link-item.active{color:rgba(255,255,255,0.28);}
.dark .nav-time{color:rgba(255,255,255,0.28);}
.dark .nav-cta{background:rgba(255,255,255,0.09);color:#ede8e3;}
.dark .nav-cta:hover{background:rgba(255,255,255,0.14);}

/* ── Theme toggle (home page) ── */
.dark .theme-toggle{color:rgba(255,255,255,0.45);}
.dark .theme-toggle:hover{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.88);box-shadow:0 0 12px rgba(30,144,255,0.22);}

/* ── Hero section ── */
.dark .hero{background:transparent;}
.dark .hero-line1{color:#ede8e3;}
.dark .hero-line2{color:rgba(237,232,227,0.48);}
.dark .hero-line3{
  background:rgba(255,255,255,0.05);
  border-color:rgba(255,255,255,0.08);
  color:rgba(237,232,227,0.78);
  box-shadow:0 2px 8px rgba(0,0,0,0.25);
}
.dark .hero-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
  box-shadow:0 4px 20px rgba(0,0,0,0.38),0 1px 4px rgba(0,0,0,0.22);
}
.dark .hero-card:hover{
  box-shadow:0 28px 64px rgba(0,0,0,0.55),0 6px 20px rgba(0,0,0,0.32);
}
.dark .hc-label{color:rgba(255,255,255,0.68);}
.dark .hero-scroll-hint{color:rgba(255,255,255,0.28);}

/* Hero illustration cards */
.dark .hi-cs-card,.dark .hi-cs-back,.dark .hi-cs-mid{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
  box-shadow:0 6px 24px rgba(0,0,0,0.4);
}
.dark .hi-cs-cap{color:rgba(237,232,227,0.55);}
.dark .hi-polaroid-css{
  background:#1c1917;
  border-color:rgba(255,255,255,0.06);
}
.dark .hi-bio{color:rgba(237,232,227,0.55);}
.dark .hi-pill{
  background:rgba(255,255,255,0.05);
  border-color:rgba(255,255,255,0.07);
  color:rgba(237,232,227,0.55);
}
.dark .hi-chip{
  background:rgba(255,255,255,0.05);
  border-color:rgba(255,255,255,0.07);
  color:rgba(237,232,227,0.6);
}

/* ── Work section ── */
.dark .work{background:#0f0d0c;}
.dark .work-heading-wrap,.dark .work-title,.dark .work-title-en{color:#ede8e3;}
.dark .work-title-script{color:rgba(30,144,255,0.75);}
.dark .work-sub{color:rgba(237,232,227,0.42);}
.dark .pw-row{color:#ede8e3;}
.dark .pw-cat{color:rgba(237,232,227,0.3);text-transform:uppercase;}
.dark .pw-title{color:#ede8e3;}
.dark .pw-blurb{color:rgba(237,232,227,0.52);}
.dark .pw-chip{
  background:rgba(255,255,255,0.05);
  border-color:rgba(255,255,255,0.07);
  color:rgba(237,232,227,0.48);
}
.dark .pw-img-wrap{
  background:#1c1917;
  box-shadow:0 8px 40px rgba(0,0,0,0.45),0 2px 10px rgba(0,0,0,0.25);
}
.dark .pw-sticky{
  background:#1c1917 !important;
  color:rgba(255,255,255,0.55) !important;
  box-shadow:2px 3px 12px rgba(0,0,0,0.35) !important;
}
.dark .pw-cta{
  background:rgba(255,255,255,0.06);
  border-color:rgba(255,255,255,0.09);
  color:rgba(237,232,227,0.65);
}
.dark .pw-cta:hover{
  background:rgba(30,144,255,0.12);
  border-color:rgba(30,144,255,0.22);
  color:#ede8e3;
}

/* ── Bento / cards ── */
.dark .bento-item,.dark .bento-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
}
.dark .bento-icon-badge{
  background:rgba(255,255,255,0.06);
  border-color:rgba(255,255,255,0.05);
}
.dark .bento-label,.dark .bento-title{color:#ede8e3;}
.dark .bento-sub,.dark .bento-desc{color:rgba(237,232,227,0.48);}

/* ── Section headings ── */
.dark .sec-title,.dark .section-title-home{color:#ede8e3;}
.dark .sec-sub,.dark .section-sub{color:rgba(237,232,227,0.42);}
.dark .section-label-home{color:rgba(30,144,255,0.75);}

/* ── Design System Zoom section ── */
.dark .dsz-section{background:#0a0908;}
.dark .dsz-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
  box-shadow:0 4px 20px rgba(0,0,0,0.35);
}
.dark .dsz-card:hover{box-shadow:0 12px 40px rgba(0,0,0,0.5);}
.dark .dsz-label{color:rgba(237,232,227,0.35);}

/* ── Process section ── */
.dark .process-section,.dark .process-main{background:#0f0d0c;}
.dark .process-title,.dark .process-main-title{color:#ede8e3;}
.dark .process-step-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
}
.dark .process-step-num{color:rgba(237,232,227,0.2);}
.dark .process-step-title{color:#ede8e3;}
.dark .process-step-body{color:rgba(237,232,227,0.52);}

/* ── About / info ── */
.dark .about{background:#0f0d0c;}
.dark .about-intro,.dark .about-text{color:rgba(237,232,227,0.62);}
.dark .about-heading{color:#ede8e3;}

/* ── Gallery ── */
.dark .gallery-section{background:#0a0908;}
.dark .gallery-item{
  box-shadow:0 4px 20px rgba(0,0,0,0.4);
}

/* ── Scrapbook ── */
.dark .scrapbook-section{background:#0f0d0c;}
.dark .sc-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
  box-shadow:0 4px 18px rgba(0,0,0,0.4);
}
.dark .sc-label{color:rgba(237,232,227,0.4);}

/* ── Testimonials ── */
.dark .testimonials-section{background:#0a0908;}
.dark .testimonial-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
  box-shadow:0 4px 20px rgba(0,0,0,0.35);
}
.dark .testimonial-card:hover{box-shadow:0 12px 40px rgba(0,0,0,0.5);}
.dark .testimonial-quote,.dark .t-quote{color:rgba(237,232,227,0.72);}
.dark .testimonial-name,.dark .t-name{color:#ede8e3;}
.dark .testimonial-role,.dark .t-role{color:rgba(237,232,227,0.38);}
.dark .testimonial-avatar,.dark .t-avatar{
  border-color:rgba(255,255,255,0.08);
  box-shadow:0 2px 8px rgba(0,0,0,0.35);
}

/* ── Home Loves / Toolkit ── */
.dark .home-loves,.dark .shelf-section{background:#0f0d0c;}
.dark .home-loves-card,.dark .obsession-card{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
  box-shadow:0 3px 14px rgba(0,0,0,0.32);
}
.dark .home-loves-card:hover,.dark .obsession-card:hover{
  box-shadow:0 10px 36px rgba(0,0,0,0.5);
}
.dark .home-loves-title,.dark .obsession-name{color:#ede8e3;}
.dark .home-loves-sub,.dark .obsession-sub{color:rgba(237,232,227,0.42);}

/* ── Experiences ── */
.dark .home-xp,.dark .home-xp-section{background:#0a0908;}
.dark .xp-card,.dark .xp-item{
  background:#1c1917;
  border-color:rgba(255,255,255,0.07);
}
.dark .xp-role,.dark .xp-title{color:#ede8e3;}
.dark .xp-company,.dark .xp-org{color:rgba(237,232,227,0.5);}
.dark .xp-period,.dark .xp-date{color:rgba(237,232,227,0.32);}
.dark .xp-desc{color:rgba(237,232,227,0.55);}

/* ── Journey / Timeline ── */
.dark .journey{background:#0f0d0c;}
.dark .journey-title{color:#ede8e3;}
.dark .timeline-item::before{background:rgba(255,255,255,0.06);}
.dark .tl-dot{
  background:#1c1917;
  border-color:rgba(30,144,255,0.45);
  box-shadow:0 0 0 3px rgba(30,144,255,0.12);
}
.dark .tl-title{color:#ede8e3;}
.dark .tl-sub,.dark .tl-desc{color:rgba(237,232,227,0.48);}
.dark .tl-date{color:rgba(237,232,227,0.3);}

/* ── Signoff ── */
.dark .signoff{background:#0a0908;}
.dark .signoff-note,.dark .signoff-text{color:rgba(237,232,227,0.38);}
.dark .signoff-name{color:#ede8e3;}
.dark .signoff-img-wrap{
  border-color:rgba(255,255,255,0.08);
  box-shadow:0 4px 20px rgba(0,0,0,0.4);
}

/* ── Contact ── */
.dark .contact{background:#0a0908;}
.dark .contact-glow{opacity:0.35;}
.dark .contact-title{color:#ede8e3;}
.dark .contact-sub{color:rgba(237,232,227,0.45);}
.dark .contact-link{
  color:rgba(237,232,227,0.68);
  border-color:rgba(255,255,255,0.07);
}
.dark .contact-link:hover{
  color:#ede8e3;
  border-color:rgba(30,144,255,0.28);
  background:rgba(30,144,255,0.07);
}
.dark .ama-bar{background:rgba(28,25,23,0.88);border-color:rgba(255,255,255,0.07);}
.dark .ama-bar:focus-within{border-color:rgba(30,144,255,0.25);box-shadow:0 8px 32px rgba(30,144,255,0.08);}
.dark .ama-input{color:rgba(237,232,227,0.75);}
.dark .ama-input::placeholder{color:rgba(237,232,227,0.28);}
.dark .ama-clear{background:rgba(255,255,255,0.08);color:rgba(237,232,227,0.45);}
.dark .ama-clear:hover{background:rgba(255,255,255,0.14);color:rgba(237,232,227,0.9);}
.dark .ama-chip{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.08);color:rgba(237,232,227,0.55);}
.dark .ama-chip:hover{background:rgba(30,144,255,0.10);border-color:rgba(30,144,255,0.20);color:rgba(237,232,227,0.88);}
.dark .ama-answer{color:rgba(237,232,227,0.72);}
.dark .ama-head{background:linear-gradient(130deg,rgba(237,232,227,0.88) 20%,#1E90FF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.dark .contact-left.has-answer{background:rgba(30,144,255,0.045);}

/* ── Conversation replay ── */
.dark .conv-replay{background:#1c1917;border-color:rgba(255,255,255,0.07);}
.dark .conv-msg-me{background:rgba(30,144,255,0.14);color:rgba(237,232,227,0.82);}
.dark .conv-msg-them{background:rgba(255,255,255,0.06);color:rgba(237,232,227,0.72);}

/* ── Glass orb & scroll tube ── */
.dark .glass-orb{background:radial-gradient(circle,rgba(30,144,255,0.08) 0%,transparent 70%);}
.dark .scroll-tube{background:rgba(255,255,255,0.05);}
.dark .scroll-tube-fill{background:rgba(30,144,255,0.45);}

/* ── Footer ── */
.dark footer,.dark .global-footer{
  background:#0a0908;
  border-top-color:rgba(255,255,255,0.06);
  color:rgba(237,232,227,0.38);
}
.dark footer a,.dark .global-footer a{color:rgba(237,232,227,0.38);}
.dark footer a:hover,.dark .global-footer a:hover{color:rgba(237,232,227,0.80);}

/* ── Homepage loader ── */
.dark .home-loader{background:#0f0d0c;}
.dark .loader-bar{background:rgba(30,144,255,0.7);}

/* ── Images — subtle contrast balance in dark mode ── */
.dark img:not([data-no-dim]){filter:brightness(0.90) contrast(1.02);}

/* ── Work section tags + CTAs ── */
.dark .pw-tag{
  background:rgba(255,255,255,0.06);
  border-color:rgba(255,255,255,0.08);
  color:rgba(237,232,227,0.52);
}
.dark .cswk-cta{
  background:rgba(255,255,255,0.06);
  border-color:rgba(255,255,255,0.09);
  color:rgba(237,232,227,0.75);
  box-shadow:0 2px 12px rgba(0,0,0,0.3);
}

/* ── Bento tags (needs !important to beat existing !important) ── */
.dark .bento-tag{
  background:rgba(255,255,255,0.07)!important;
  border-color:rgba(255,255,255,0.09);
  color:rgba(237,232,227,0.52);
}

/* ── Home loves cards (correct singular class name) ── */
.dark .home-love-card{
  background:#1c1917;
  box-shadow:0 1px 4px rgba(0,0,0,0.22),0 4px 22px rgba(0,0,0,0.38);
}
.dark .home-love-card:hover{
  box-shadow:0 12px 40px rgba(0,0,0,0.52),0 2px 10px rgba(0,0,0,0.25);
}

/* ── Polaroid experience photos ── */
.dark .home-xp-pol{
  background:#1c1917;
  box-shadow:0 4px 20px rgba(0,0,0,0.42),0 1px 5px rgba(0,0,0,0.22);
}
.dark .home-xp-pol:hover{
  box-shadow:0 28px 64px rgba(0,0,0,0.58),0 6px 20px rgba(0,0,0,0.32);
}

/* ── Polaroid frames (hero section) ── */
.dark .hi-pm-frame{
  background:#1c1917;
  box-shadow:0 4px 16px rgba(0,0,0,0.38),0 10px 30px rgba(0,0,0,0.28);
}

/* ── Timeline dot ── */
.dark .timeline-dot{
  background:#1c1917;
  border-color:rgba(30,144,255,0.42);
  box-shadow:0 0 0 3px rgba(30,144,255,0.10);
}

/* ── Contact section AMA search ── (dark overrides above in the q-chip block) */

/* ── About nav dots + hint ── */
.dark .about-page-dot{
  background:#1c1917;
  border-color:rgba(255,255,255,0.12);
  box-shadow:0 2px 8px rgba(0,0,0,0.32);
}
.dark .about-page-dot.active{background:#1E90FF;border-color:#1E90FF;}
.dark .about-turn-hint{
  background:#1c1917;
  color:rgba(237,232,227,0.65);
  box-shadow:0 3px 14px rgba(0,0,0,0.38);
}

/* ── Hero line2 / line3 text (typed gradient) ── */
.dark .hero-line1 span,.dark .hero-name{color:#ede8e3;}
.dark .hero-line2{color:rgba(237,232,227,0.46);}

/* ── Section/work dividers ── */
.dark .pw-divider,.dark .sec-divider,.dark hr{border-color:rgba(255,255,255,0.07);}

/* ── HeroSection heading text overrides ── */
.dark .hi-name,.dark .hi-title,.dark .hi-role{color:#ede8e3;}
.dark .hi-year,.dark .hi-location{color:rgba(237,232,227,0.38);}

/* ── Scroll shapes ── */
.dark .ss{border-color:rgba(255,255,255,0.06);}
.dark .ss-line{background:rgba(255,255,255,0.06);}

/* ═══════════════════════════════════════════════════════
   DESIGN SYSTEM ZOOM — inner element dark overrides
   ═══════════════════════════════════════════════════════ */
.dark .dsz-title-main{color:#ede8e3;}
.dark .dsz-title-script{color:#1E90FF;}
.dark .dsz-float{color:rgba(237,232,227,0.52);}
.dark .dsz-float-arrow{opacity:0.5;}
.dark .dsz-cta{
  background:rgba(255,255,255,0.06);
  border-color:rgba(255,255,255,0.10);
  color:rgba(237,232,227,0.75);
}
.dark .dsz-cta:hover{background:#1076BC;color:#ffffff;border-color:#1076BC;}
/* card inner */
.dark .dsz-project-label{color:rgba(237,232,227,0.28);}
.dark .dsz-title{color:#ede8e3;}
.dark .dsz-desc{color:rgba(237,232,227,0.48);}
.dark .dsz-pill{
  background:rgba(255,255,255,0.07);
  color:rgba(237,232,227,0.62);
}
.dark .dsz-wip-tag{background:rgba(30,144,255,0.12);color:rgba(30,180,255,0.88);}
.dark .dsz-stat-chip{background:rgba(255,255,255,0.05);}
.dark .dsz-stat-number{color:#1E90FF;}
.dark .dsz-stat-label{color:rgba(237,232,227,0.30);}
.dark .dsz-inner-divider{background:rgba(255,255,255,0.06);}
.dark .dsz-bar-track{background:rgba(255,255,255,0.08);}
.dark .dsz-bar-label{color:rgba(237,232,227,0.42);}
.dark .dsz-bar-pct{color:rgba(237,232,227,0.38);}
.dark .dsz-footer-chip{background:rgba(255,255,255,0.06);color:rgba(237,232,227,0.55);}
.dark .dsz-card::before{background:linear-gradient(90deg,transparent,rgba(30,144,255,0.2),transparent);}

/* ═══════════════════════════════════════════════════════
   WORK SECTION (cswk) — dark text + divider overrides
   ═══════════════════════════════════════════════════════ */
.dark .cswk-title{color:#ede8e3;}
.dark .cswk-desc{color:rgba(237,232,227,0.52);}
.dark .cswk-category{color:rgba(237,232,227,0.32);}
.dark .cswk-num{color:rgba(237,232,227,0.26);}
.dark .cswk-sep{color:rgba(237,232,227,0.18);}
.dark .cswk-handlabel{color:rgba(237,232,227,0.40);}
.dark .cswk-annot{opacity:0.5;}
.dark .cswk-divider{
  background:linear-gradient(to right,transparent 0%,rgba(255,255,255,0.07) 25%,rgba(255,255,255,0.07) 75%,transparent 100%);
}
.dark .cswk-note{
  background:rgba(255,255,255,0.04);
  border-color:rgba(255,255,255,0.07);
  color:rgba(237,232,227,0.55);
}
/* reel dots */
.dark .cswk-reel-dot{background:rgba(255,255,255,0.25);}
@keyframes cswkDotDark{0%,22%{width:18px;height:5px;background:rgba(255,255,255,0.65);}27%,100%{width:5px;height:5px;background:rgba(255,255,255,0.2);}}
.dark .cswk-reel-dot{animation-name:cswkDotDark;}
/* tape corners */
.dark .cswk-tape{opacity:0.25;}
.dark .cswk-corner{opacity:0.18;}
/* cswk-tag colors — each project uses its own color via inline style,
   but base border should adapt */
.dark .cswk-tag{border-color:rgba(255,255,255,0.10);}
.dark .cswk-headline{color:#ede8e3;}
/* ── Polaroid caption text ── */
.dark .home-xp-caption{color:rgba(237,232,227,0.50);}
/* ── Override forced white section backgrounds in dark mode ── */
.dark .hero,.dark .work,.dark .zoom-sticky,.dark .dsz-sticky,.dark .about,
.dark .gallery-section,.dark .shelf-section,.dark .scrapbook-section,
.dark .testimonials-section,.dark .home-loves,.dark .home-xp,.dark .contact{
  background-color:#0f0d0c;
  background-image:linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px);
}

/* ══════════════════════════════════════════════════════════
   COMPREHENSIVE MOBILE POLISH — intentionally designed mobile
   ══════════════════════════════════════════════════════════ */

/* ── Disable scroll snap on mobile for better scroll UX ── */
@media(max-width:768px){html{scroll-snap-type:none;}}

/* ── Hero — proper single-column stacking at 768px ── */
@media(max-width:768px){
  .hero{
    grid-template-columns:1fr;
    padding:7.5rem 28px 3rem;
    gap:0;
    text-align:center;
    align-items:center;
    overflow-x:hidden;
  }
  .hi-left{text-align:center;order:2;padding-top:0;}
  .hi-right{order:1;display:flex;justify-content:center;margin-bottom:0.5rem;}
  .hi-bio-line,.hi-sub-line{max-width:100%;}
  .hi-sticky-coffee{margin:0.75rem auto 0.9rem;}
  .hi-pm-collage{
    width:440px;height:600px;
    transform:scale(0.80);
    transform-origin:center top;
    margin-bottom:-120px;
    flex-shrink:0;
  }
  .hi-sub-line{text-align:center;}
  .hero-scroll-hint{display:none;}
}

/* ── Nav — very small screens (< 480px) ── */
@media(max-width:480px){
  nav{padding:6px 10px;}
  .nav-pill{height:42px;padding:0 8px;}
  .nav-link-item{padding:3px 6px;font-size:13px;}
  .nav-monogram{margin-right:4px;}
  .nav-divider{margin:0 8px;}
}

/* ── Hero very small phones (< 480px) ── */
@media(max-width:480px){
  .hero{padding:6rem 16px 2.5rem;overflow-x:hidden;}
  .hi-headline{font-size:clamp(2.8rem,11vw,4.2rem);}
  .hi-bio-line{font-size:clamp(0.88rem,3.5vw,1rem);}
  .hi-pm-collage{
    width:380px;height:540px;
    transform:scale(0.65);
    transform-origin:center top;
    margin-bottom:-185px;
    flex-shrink:0;
  }
}

/* ── Scrapbook section — responsive grid replaces absolute positioning ── */
@media(max-width:900px){
  .scrapbook-section{padding:3rem clamp(24px,4vw,50px);}
  .scrapbook-canvas{
    position:relative;
    min-height:auto;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:14px;
  }
  .sc-card{
    position:relative!important;
    top:auto!important;
    left:auto!important;
    width:auto!important;
    transform:none!important;
    animation:none!important;
    will-change:auto;
  }
  .sc-coffee:hover,.sc-spidey:hover,.sc-hp:hover,.sc-music:hover,
  .sc-travel:hover,.sc-photo:hover,.sc-shop:hover{
    transform:translateY(-6px) scale(1.02)!important;
  }
  .sc-doodle-line{display:none;}
}
@media(max-width:640px){
  .scrapbook-section{padding:3rem 20px;}
  .scrapbook-canvas{grid-template-columns:repeat(2,1fr);gap:12px;}
}
@media(max-width:380px){
  .scrapbook-canvas{grid-template-columns:1fr;}
}

/* ── Contact section — left-align on stacked mobile layout ── */
@media(max-width:900px){
  .contact-right{text-align:left;margin-left:0;max-width:100%;}
  .contact-right .contact-title{text-align:left;}
  .contact-right .contact-sub{text-align:left;margin-left:0;}
  .contact-right .contact-links{margin-left:0;}
  .contact-right .contact-footer{justify-content:flex-start;}
}

/* ── Gallery section — tighten on very small screens ── */
@media(max-width:480px){
  .gallery-section{padding:3rem 20px;}
  .gallery-grid{grid-template-columns:1fr 1fr;grid-auto-rows:140px;}
}

/* ── Testimonials section ── */
@media(max-width:640px){
  .testimonials-section{padding:3rem 20px;}
  .testimonials-grid{grid-template-columns:1fr;}
}

/* ── Zoom section — reduce scroll height on mobile ── */
@media(max-width:768px){.zoom-section{height:280vh;}}
@media(max-width:480px){.zoom-section{height:220vh;}}

/* ── Spiral section — reduce scroll height on mobile ── */
@media(max-width:768px){.spiral-section{height:280vh;}}
@media(max-width:480px){.spiral-section{height:200vh;}}

/* ── Signoff section — padding tightening ── */
@media(max-width:640px){.signoff{padding:4.5rem 24px 5.5rem;}}
@media(max-width:480px){.signoff{padding:3.5rem 20px 4.5rem;}}

/* ── home-loves section — responsive grid ── */
@media(max-width:640px){
  .home-loves{padding:3rem 20px 3.5rem;}
  .home-loves-grid{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:480px){
  .home-loves-grid{grid-template-columns:1fr;}
}

/* ── home-xp polaroids ── */
@media(max-width:640px){
  .home-xp{padding:3rem 20px 4rem;}
  .home-xp-grid{grid-template-columns:repeat(2,1fr);gap:18px 10px;}
}
@media(max-width:400px){
  .home-xp-grid{grid-template-columns:1fr;}
}

/* ── Work rows — prevent overflow on small screens ── */
@media(max-width:640px){
  .pw-thumb,.pw-mockup{border-radius:12px;}
  .pw-img-wrap{transform:none!important;}
  .pw-row:hover .pw-img-wrap{transform:none;}
  .pw-sticky{transform:none!important;}
  .pw-row:hover .pw-sticky{transform:none;}
}

/* ── CSWK section on very small screens ── */
@media(max-width:480px){
  .cswk{padding:2.5rem 20px;}
  .cswk-head{margin-bottom:2rem;}
  .cswk-rows{gap:2.5rem;}
  .cswk-frame-pad{min-height:260px;}
  .cswk-note{transform:none;}
  .cswk-row:hover .cswk-note{transform:none;}
}

/* ── DSZ section on very small screens ── */
@media(max-width:480px){
  .dsz-heading-wrap{padding:0 0 2rem;}
  .dsz-sticky{padding:32px 0 48px;}
}

/* ── Process annotation popups — prevent off-screen on mobile ── */
@media(max-width:640px){
  .anno-pop{width:160px;}
}

/* ── About book — very small screens ── */
@media(max-width:380px){
  .about-book-stage{width:118%;margin-left:-9%;aspect-ratio:1.0;}
  .about-page-content{left:8%;right:8%;}
}

/* ── Touch-friendly interaction states ── */
@media(hover:none) and (pointer:coarse){
  .nav-link-item{min-height:44px;padding:10px 14px;}
  .pw-cta{padding:12px 22px;min-height:44px;}
  .cswk-cta{padding:12px 24px;min-height:44px;}
  .dsz-cta{padding:12px 24px;}
  .sc-card:hover{transform:none!important;}
}

/* ── Global padding fix at 480px ── */
@media(max-width:480px){
  .work{padding:3rem 20px;}
  .journey{padding:3rem 20px;}
  .about{padding:3rem 20px;}
  .contact{padding:3rem 20px;}
  .process-section{padding:3rem 20px;}
  .gallery-section{padding:3rem 20px;}
  .testimonials-section{padding:3rem 20px;}
  .shelf-section{padding:3rem 20px;}
}`;

export function HomeStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
