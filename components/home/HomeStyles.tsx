const css = `:root {
  --bg:#FFFFFF; --bg2:#F8F8F8; --bg3:#F0F0F0; --bg4:#E5E5E5; --surface:#D5D5D5;
  --border:rgba(0,0,0,0.08); --border2:rgba(0,0,0,0.14);
  --ink:#111111; --ink2:#222222; --ink3:#555555; --ink4:#999999;
  --pink:#1E90FF; --pink2:#0066FF; --pink3:rgba(30,144,255,0.08); --pink5:#EEF6FF;
  --serif:'DM Serif Display',Georgia,serif;
  --sans:'Instrument Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --hand:'Caveat',cursive;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;scroll-snap-type:y proximity;scroll-padding-top:76px;}
.hero,.work,.dsz-section,.process-section,.about,.gallery-section,.scrapbook-section,.shelf-section,.testimonials-section,.journey,.home-loves,.home-xp,.signoff,.contact{scroll-snap-align:start;}
body{
  background:#ffffff;
  background-image:radial-gradient(circle,rgba(0,0,0,0.055) 1.5px,transparent 1.5px);
  background-size:28px 28px;
  color:var(--ink);
  font-family:var(--sans);
  font-weight:300;
  line-height:1.6;
  overflow-x:hidden;
}
.home-page-shell{
  opacity:0;
  animation:homePageFadeIn 900ms ease 240ms forwards;
}
body.home-loading .home-page-shell{
  opacity:0;
  animation:none;
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
  color:rgba(31,41,55,0.66);
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
@media (hover:hover) and (pointer:fine){
  body,
  body a,
  body button,
  .hero-card,
  .pw-row,
  .gallery-item,
  .obsession-card,
  .sc-card,
  .testimonial-card,
  .contact-link,
  .q-chip,
  .conv-replay,
  .signoff{cursor:none;}
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


/* ── NAV — floating pill: brand | links | cta ── */
nav{
  position:fixed;top:20px;left:50%;transform:translateX(-50%);
  z-index:100;
  display:flex;align-items:center;gap:4px;
  padding:5px 5px 5px 5px;
  background:rgba(255,255,255,0.45);
  backdrop-filter:blur(20px) saturate(160%);
  -webkit-backdrop-filter:blur(20px) saturate(160%);
  border:1px solid rgba(255,255,255,0.55);
  border-radius:99px;
  box-shadow:0 4px 24px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.04),inset 0 1px 0 rgba(255,255,255,0.8);
  transition:background 0.3s,box-shadow 0.3s;
  white-space:nowrap;
}
nav.scrolled{
  background:rgba(255,255,255,0.55);
  box-shadow:0 6px 32px rgba(0,0,0,0.08),0 2px 6px rgba(0,0,0,0.04),inset 0 1px 0 rgba(255,255,255,0.9);
}
.nav-brand{
  display:flex;align-items:center;gap:8px;
  padding:0.45rem 0.9rem 0.45rem 0.6rem;
  border-right:1px solid rgba(0,0,0,0.07);
  margin-right:2px;
}
.nav-initials{
  font-size:0.72rem;font-weight:700;letter-spacing:0.06em;
  color:#111;font-family:var(--sans);
  background:rgba(0,0,0,0.06);
  padding:2px 7px;border-radius:6px;
}
.nav-clock{
  font-size:0.74rem;font-variant-numeric:tabular-nums;
  color:rgba(30,30,40,0.45);font-family:var(--sans);font-weight:500;
  letter-spacing:0.03em;
}
.nav-links-wrap{
  position:relative;display:flex;align-items:center;gap:2px;
}
.nav-active-indicator{
  position:absolute;top:0;left:0;
  width:0;height:100%;
  border-radius:99px;
  background:var(--pink);
  transform:translateX(0);
  transition:transform 0.32s cubic-bezier(0.22,1,0.36,1),width 0.32s cubic-bezier(0.22,1,0.36,1);
  pointer-events:none;
}
.nav-link-item{
  position:relative;z-index:1;
  display:inline-flex;align-items:center;gap:6px;
  font-size:0.76rem;letter-spacing:0.02em;
  color:rgba(30,30,40,0.60);text-decoration:none;
  padding:0.55rem 1.1rem;border-radius:99px;
  transition:color 0.18s;
  font-family:var(--sans);font-weight:500;
}
.nav-link-item:hover{background:rgba(0,0,0,0.06);color:#111;}
.nav-link-item.active{color:#fff;}
.nav-link-item.active:hover{background:transparent;color:#fff;}
.nav-cta{
  display:inline-flex;align-items:center;
  font-size:0.76rem;letter-spacing:0.02em;font-weight:600;
  color:#fff;text-decoration:none;
  padding:0.55rem 1.2rem;border-radius:99px;
  background:#111;
  transition:background 0.18s;
  font-family:var(--sans);
  margin-left:2px;
}
.nav-cta:hover{background:#333;}

/* ── HERO ── */
.hero{min-height:100vh;display:grid;grid-template-columns:55% 45%;align-items:center;padding:9rem 220px 5rem;gap:40px;position:relative;overflow:hidden;cursor:none;}

/* about-style intro hero */
.hi-left{position:relative;z-index:2;text-align:left;}
.hi-right{display:flex;align-items:center;justify-content:center;position:relative;z-index:2;}
.hi-hello{font-family:var(--hand);font-size:clamp(1.5rem,2.5vw,2rem);color:var(--pink);display:block;margin-bottom:0.15rem;}
.hi-headline{font-family:var(--serif);font-size:clamp(3.5rem,6.5vw,5.8rem);font-weight:400;color:var(--ink);line-height:1.0;letter-spacing:-0.025em;margin-bottom:1.8rem;}
.hi-headline em{font-style:italic;background:linear-gradient(90deg,#1E90FF,#00BFFF,#0066FF,#1E90FF);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradientShift 4s ease infinite;}
.hi-bio{font-size:clamp(0.9rem,1.3vw,1rem);color:var(--ink3);line-height:1.85;max-width:440px;margin-bottom:2rem;}
.hi-bio strong{color:var(--ink);font-weight:600;}
.hi-bio em{font-style:italic;-webkit-text-fill-color:var(--pink);color:var(--pink);}
.hi-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:1.5rem;}
.hi-chip{display:inline-flex;align-items:center;gap:5px;font-size:0.72rem;font-weight:600;letter-spacing:0.03em;color:var(--ink3);background:rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.08);padding:5px 12px;border-radius:99px;}
.hi-chip-blue{background:rgba(30,144,255,0.08);border-color:rgba(30,144,255,0.2);color:var(--pink);}
.hi-polaroid-wrap{position:relative;}
.hi-polaroid{background:#fff;padding:14px 14px 60px;box-shadow:0 18px 60px rgba(0,0,0,0.14),0 4px 16px rgba(0,0,0,0.07);border-radius:3px;transform:rotate(3.5deg);transition:transform 0.5s cubic-bezier(0.34,1.4,0.64,1),box-shadow 0.4s ease;width:275px;position:relative;}
.hi-polaroid:hover{transform:rotate(0deg) scale(1.04);box-shadow:0 28px 80px rgba(0,0,0,0.18);}
.hi-photo{width:100%;aspect-ratio:1/1.1;object-fit:cover;object-position:top center;display:block;border-radius:1px;}
.hi-caption{position:absolute;bottom:0;left:0;right:0;height:60px;display:flex;align-items:center;justify-content:center;font-family:var(--hand);font-size:1.05rem;color:#777;}
.hi-tape{position:absolute;width:68px;height:22px;background:rgba(255,220,100,0.55);border-radius:2px;top:-10px;left:50%;transform:translateX(-50%) rotate(-1.5deg);z-index:3;}
.hi-tape::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,0.06) 0px,rgba(0,0,0,0.06) 2px,transparent 2px,transparent 6px);border-radius:2px;}
.hi-tape2{position:absolute;width:46px;height:18px;background:rgba(180,210,255,0.55);border-radius:2px;bottom:38px;right:-16px;transform:rotate(10deg);z-index:3;}
.hi-tape2::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,0.05) 0px,rgba(0,0,0,0.05) 2px,transparent 2px,transparent 6px);border-radius:2px;}
.hi-pill{position:absolute;background:rgba(255,255,255,0.78);backdrop-filter:blur(8px);border:1px solid rgba(0,0,0,0.07);border-radius:99px;padding:5px 14px;font-family:var(--hand);font-size:1rem;color:var(--ink3);box-shadow:0 2px 8px rgba(0,0,0,0.05);pointer-events:none;white-space:nowrap;z-index:1;}
.hi-star{position:absolute;pointer-events:none;opacity:0.22;z-index:1;}
@keyframes hiDrift{0%,100%{transform:translateY(0);}50%{transform:translateY(-11px);}}

.cursor-glow{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,0.03) 0%,transparent 70%);pointer-events:none;transform:translate(-50%,-50%);transition:left 0.08s ease,top 0.08s ease;z-index:0;}
.custom-cursor{
  position:fixed;width:33px;height:33px;
  background:url('/pixel-cursor.svg') no-repeat top left;
  background-size:33px 33px;
  border-radius:0;box-shadow:none;
  pointer-events:none;
  transform:translate(-6px,0px);
  z-index:9998;
  transition:opacity 0.22s ease,width 0.18s ease,height 0.18s ease;
}
.custom-cursor::before{content:none;}
.custom-cursor.big{
  width:39px;height:39px;
  background-size:39px 39px;
  transform:translate(-7px,0px);
}

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
.hc-label{position:absolute;bottom:0;left:0;right:0;padding:5px 9px;font-size:0.58rem;letter-spacing:0.06em;font-weight:600;color:var(--ink2);background:rgba(255,255,255,0.92);backdrop-filter:blur(6px);text-transform:uppercase;font-family:var(--sans);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;transform:translateY(4px);transition:opacity 0.25s ease,transform 0.25s ease;}
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
.hero-line3{margin-top:18px;display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:500;color:#374151;background:rgba(255,255,255,0.85);border:1px solid rgba(0,0,0,0.08);border-radius:100px;padding:6px 16px;backdrop-filter:blur(4px);box-shadow:0 2px 8px rgba(0,0,0,0.06);}
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
.section-label{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--pink);margin-bottom:0.85rem;}
.section-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:3.5rem;}
.section-title em{font-style:italic;color:var(--pink);}
.reveal{opacity:0;transition:opacity 0.9s cubic-bezier(0.22,1,0.36,1),transform 0.9s cubic-bezier(0.22,1,0.36,1),filter 0.9s ease;filter:blur(5px);}
.reveal:not(.from-left):not(.from-right):not(.scale-up){transform:translateY(48px);}
.reveal.from-left{transform:translateX(-52px);}
.reveal.from-right{transform:translateX(52px);}
.reveal.scale-up{transform:scale(0.90) translateY(22px);}
.reveal.visible{opacity:1;transform:none;filter:blur(0);}
.reveal-delay-1{transition-delay:0.08s;}.reveal-delay-2{transition-delay:0.16s;}.reveal-delay-3{transition-delay:0.25s;}.reveal-delay-4{transition-delay:0.35s;}.reveal-delay-5{transition-delay:0.46s;}.reveal-delay-6{transition-delay:0.58s;}

/* ── WORK ROWS ── */
.work{background:transparent;padding:5rem 250px;}
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
.pw-annotation{font-family:var(--hand);font-size:0.82rem;color:var(--ink4);opacity:0.65;}
/* project number */
.pw-num{font-family:'DM Mono',ui-monospace,monospace;font-size:0.65rem;font-weight:400;color:var(--ink4);letter-spacing:0.12em;margin-bottom:0.75rem;display:block;}
/* title + desc */
.pw-title{font-family:'Rethink Sans',var(--sans);font-size:clamp(1.1rem,1.8vw,1.45rem);font-weight:800;color:#111827;line-height:1.25;margin-bottom:0.6rem;}
.pw-desc{font-size:0.88rem;color:#6B7280;line-height:1.72;margin-bottom:0.9rem;}
/* tags */
.pw-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:1rem;}
.pw-tag{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:0.02em;padding:3px 10px;border-radius:99px;background:#fff;border:1px solid rgba(0,0,0,0.09);white-space:nowrap;}
/* sticky note */
.pw-sticky{background:#FFF9C4;border-radius:3px;padding:10px 14px 12px;box-shadow:2px 4px 14px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.05);font-family:var(--hand);font-size:0.88rem;line-height:1.45;color:#5a4a00;transform:rotate(-1.5deg);width:fit-content;max-width:240px;margin-bottom:1.25rem;position:relative;transition:transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94);}
.pw-sticky::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:rgba(0,0,0,0.06);border-radius:3px 3px 0 0;}
.pw-sticky.blue{background:#E8F4FF;color:#1a4080;}
.pw-sticky.green{background:#E8F8EE;color:#1a4a28;}
.pw-sticky.purple{background:#EDE9F8;color:#3d2f7a;}
.pw-sticky.orange{background:#FFF3E0;color:#5a3800;}
.pw-row:hover .pw-sticky{transform:rotate(0deg)!important;}
/* CTA pill */
.pw-cta{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:#111827;padding:9px 18px;background:#fff;border-radius:99px;box-shadow:0 2px 12px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.04);text-decoration:none;transition:all 0.22s cubic-bezier(0.25,0.46,0.45,0.94);width:fit-content;margin-top:0.35rem;}
.pw-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(0,0,0,0.11);}
.pw-cta-arrow{display:inline-block;transition:transform 0.2s;}
.pw-cta:hover .pw-cta-arrow{transform:translateX(3px);}
/* row divider */
.pw-divider{width:100%;height:1px;background:linear-gradient(to right,transparent 0%,rgba(0,0,0,0.07) 30%,rgba(0,0,0,0.07) 70%,transparent 100%);}
/* ── kept for DesignSystemZoom ── */
.bento-icon-badge{width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,0.8);border:1px solid rgba(255,255,255,1);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;box-shadow:0 1px 4px rgba(0,0,0,0.08);}
.bento-tags{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-start;align-items:flex-start;margin-top:0.75rem;}
.bento-tag{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:0.02em;padding:3px 9px;border-radius:99px;white-space:nowrap;background:#ffffff!important;border:1px solid rgba(0,0,0,0.09);}

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
  padding:0 0 4.5rem 0;
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
  font-size:15px;
  line-height:1.55;
  color:rgba(0,0,0,0.58);
  max-width:148px;
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
/* ── light card ── */
.dsz-card{
  position:relative;z-index:1;
  width:100%;
  background:#ffffff;
  border:1px solid rgba(0,0,0,0.07);
  border-radius:24px;
  padding:44px;
  box-shadow:0 2px 8px rgba(0,0,0,0.04),0 16px 48px rgba(0,0,0,0.09);
  display:flex;flex-direction:column;gap:20px;
}
.dsz-card-header{
  display:flex;align-items:flex-start;
  justify-content:space-between;
}
.dsz-wip-tag{
  background:rgba(30,144,255,0.10);
  color:#1565C0;
  display:inline-flex;align-items:center;gap:4px;
}
.dsz-title{
  font-family:var(--serif);
  font-size:clamp(1.1rem,2vw,1.5rem);
  font-weight:500;color:var(--ink);
  line-height:1.25;margin:0;
}
.dsz-desc{
  font-family:var(--serif);font-style:italic;
  font-size:13.5px;color:var(--ink3);
  line-height:1.8;margin:0;
}
.dsz-visual{
  display:grid;
  grid-template-columns:auto 1fr auto;
  gap:20px;align-items:start;
  margin-top:4px;
}
.dsz-tokens{
  display:grid;grid-template-columns:1fr 1fr;gap:6px;
}
.dsz-swatch{width:26px;height:26px;border-radius:7px;}
.dsz-bars{
  display:flex;flex-direction:column;gap:9px;
}
.dsz-bar-row{display:flex;flex-direction:column;gap:3px;}
.dsz-bar-label{
  font-family:var(--sans);font-size:9.5px;
  font-weight:600;letter-spacing:0.05em;
  color:var(--ink4);text-transform:uppercase;
}
.dsz-bar-track{
  height:4px;background:rgba(0,0,0,0.06);
  border-radius:3px;overflow:hidden;
}
.dsz-bar-fill{height:100%;border-radius:3px;}
.dsz-mocks{
  display:flex;flex-direction:column;gap:8px;
}
.dsz-mock-btn{
  height:22px;width:96px;border-radius:6px;
}
.dsz-mock-input{
  height:22px;width:96px;border-radius:6px;
  border:1px solid rgba(0,0,0,0.10);
  background:transparent;
}
.dsz-mock-card{
  height:38px;width:96px;border-radius:8px;
  border:0.5px solid rgba(0,0,0,0.08);
  background:rgba(0,0,0,0.03);
}
.dsz-cta{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--serif);font-size:13px;font-weight:600;
  color:#111827;padding:9px 18px;
  background:#ffffff;
  border-radius:99px;
  box-shadow:0 2px 10px rgba(0,0,0,0.10);
  text-decoration:none;width:fit-content;
  margin-top:4px;
  transition:box-shadow 0.2s ease,transform 0.2s ease;
}
.dsz-cta:hover{box-shadow:0 4px 18px rgba(0,0,0,0.14);transform:translateY(-1px);}
@media(max-width:1024px){
  .dsz-float{display:none;}
  .dsz-card-wrap{width:min(680px,88vw);}
}
@media(max-width:767px){
  .dsz-card-wrap{width:92vw;}
  .dsz-heading-wrap{padding:0 0 1rem 0;}
  .dsz-visual{grid-template-columns:1fr;gap:14px;}
  .dsz-card{padding:24px;gap:14px;}
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
.process-section{padding:5.5rem 250px 7.5rem;background:#0c0e14;position:relative;overflow:hidden;}
.process-section::before{content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(30,144,255,0.14) 0%,transparent 65%);top:-180px;right:-120px;pointer-events:none;}
.process-section::after{content:'';position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(110,80,220,0.08) 0%,transparent 65%);bottom:-80px;left:-60px;pointer-events:none;}
.process-heading{margin-bottom:3.5rem;text-align:center;position:relative;z-index:1;}
.process-main-title{font-family:'Rethink Sans',var(--sans);font-size:clamp(24px,5vw,40px);font-weight:800;color:rgba(255,255,255,0.88);line-height:1.3;margin:0;}
.process-title-script{font-family:var(--hand);font-size:calc(clamp(24px,5vw,40px) * 1.35);font-weight:700;color:#1E90FF;display:block;line-height:1.2;}
.anno-stage{max-width:860px;margin:0 auto;position:relative;z-index:1;}
.anno-canvas-wrap{position:relative;border-radius:14px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);overflow:visible;box-shadow:0 40px 80px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.05);}
.anno-wireframe{width:100%;display:block;border-radius:13px;}
.anno-pin{position:absolute;width:26px;height:26px;border-radius:50%;background:rgba(30,144,255,0.14);border:1.5px solid rgba(30,144,255,0.45);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s,border-color 0.2s,box-shadow 0.25s,transform 0.2s;z-index:20;transform:translate(-50%,-50%);padding:0;}
.anno-pin:hover,.anno-pin.pinned{background:rgba(30,144,255,0.3);border-color:#1E90FF;box-shadow:0 0 0 6px rgba(30,144,255,0.16),0 0 0 12px rgba(30,144,255,0.07);transform:translate(-50%,-50%) scale(1.12);}
.anno-pin-num{font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;font-weight:700;color:#1E90FF;line-height:1;user-select:none;pointer-events:none;}
@keyframes pinPulse{0%,100%{box-shadow:0 0 0 0 rgba(30,144,255,0.4),0 0 0 0 rgba(30,144,255,0);}60%{box-shadow:0 0 0 7px rgba(30,144,255,0.1),0 0 0 14px rgba(30,144,255,0);}}
.anno-pin-pulse{animation:pinPulse 1.8s ease-out;}
.anno-pop{position:absolute;background:rgba(10,12,18,0.96);border:1px solid rgba(30,144,255,0.28);border-radius:12px;padding:14px 16px;width:210px;pointer-events:none;opacity:0;transition:opacity 0.2s ease,transform 0.22s cubic-bezier(0.22,1,0.36,1);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 20px 48px rgba(0,0,0,0.55),inset 0 1px 0 rgba(255,255,255,0.05);z-index:30;}
.anno-pin:hover .anno-pop,.anno-pin.pinned .anno-pop{opacity:1;}
.anno-pop-step{font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:0.18em;color:#1E90FF;text-transform:uppercase;margin-bottom:5px;font-weight:700;}
.anno-pop-name{font-family:'Rethink Sans',var(--sans);font-size:0.9rem;font-weight:700;color:rgba(255,255,255,0.92);margin-bottom:6px;line-height:1.25;}
.anno-pop-desc{font-family:var(--sans);font-size:0.77rem;color:rgba(255,255,255,0.54);line-height:1.55;margin:0;}
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
.anno-leg-num{font-family:'DM Mono',ui-monospace,monospace;font-size:8px;color:rgba(30,144,255,0.65);font-weight:700;flex-shrink:0;letter-spacing:0.05em;}
.anno-leg-name{font-family:var(--sans);font-size:0.7rem;color:rgba(255,255,255,0.38);font-weight:500;white-space:nowrap;}
.anno-legend-step:hover .anno-leg-name,.anno-legend-step.leg-active .anno-leg-name{color:rgba(255,255,255,0.78);}
.anno-legend-step.leg-active .anno-leg-num{color:#1E90FF;}
@media(max-width:860px){
  .anno-stage{padding:0 4px;}
  .anno-pop{width:170px;}
  .anno-legend{flex-wrap:wrap;}
  .anno-legend-step{flex:0 0 33.33%;border-bottom:1px solid rgba(255,255,255,0.06);}
}

/* ── ABOUT — SCRAPBOOK BOOK ── */
.about{background:transparent;padding:5rem 250px;overflow:hidden;position:relative;}
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
.about-cover-label{font-family:'DM Mono',ui-monospace,monospace;font-size:0.58rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.3);}
.about-cover-name{font-family:var(--font-serif, var(--serif));font-size:clamp(1.1rem,2.2vw,1.8rem);font-weight:300;font-style:italic;line-height:1.1;color:rgba(255,255,255,0.88);margin:0.2rem 0;}
.about-cover-rule{width:28px;height:1px;background:rgba(255,255,255,0.18);margin:0.15rem 0;}
.about-cover-role{font-family:var(--hand);font-size:clamp(0.6rem,1vw,0.82rem);color:rgba(255,255,255,0.38);letter-spacing:0.05em;}
.about-cover-hint{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-family:'DM Mono',ui-monospace,monospace;font-size:0.46rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.2);white-space:nowrap;transition:color 0.2s ease;}
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
.about-photo-box span{position:absolute;left:10px;right:10px;bottom:8px;padding:4px 8px;background:rgba(255,255,255,0.86);border-radius:99px;color:#475569;font-size:0.72rem;line-height:1.2;}
.about-photo-box.empty{background:repeating-linear-gradient(0deg,rgba(148,163,184,0.12) 0 1px,transparent 1px 18px),rgba(255,255,255,0.52);padding:1rem;}
.about-lined-page{padding:3% 5.5% 3% 1%;background:repeating-linear-gradient(0deg,transparent 0 30px,rgba(116,139,170,0.14) 31px 32px);color:#1f2937;}
.about-page-num{font-family:'DM Mono',ui-monospace,monospace;font-size:0.62rem;letter-spacing:0.16em;color:#94a3b8;margin:0 0 0.55rem;}
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
.about-turn-hint{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:#fff;color:#374151;font-size:0.78rem;padding:5px 13px;border-radius:99px;box-shadow:0 3px 14px rgba(17,24,39,0.13);white-space:nowrap;opacity:0;transition:opacity 230ms ease;pointer-events:none;letter-spacing:0.01em;}
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
.spiral-topbar-label,.spiral-topbar-mode,.spiral-hint,.spiral-counter{font-family:'DM Mono',ui-monospace,monospace;font-size:0.6rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.2);}
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
.gallery-section{padding:5rem 250px;background:transparent;}
.gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:120px;gap:10px;margin-top:2rem;}
.gallery-item{border-radius:12px;overflow:hidden;background:var(--bg3);border:1px solid var(--border);position:relative;display:flex;align-items:center;justify-content:center;transition:transform 0.3s,box-shadow 0.3s;cursor:pointer;}
.gallery-item:hover{transform:scale(1.02);box-shadow:0 12px 36px rgba(17,17,17,0.1);z-index:2;}
.gallery-item.tall{grid-row:span 2;}
.gallery-item.wide{grid-column:span 2;}
.gallery-item.feature{grid-column:span 3;grid-row:span 2;}
.g1{grid-column:1/4;}.g2{grid-column:4/7;}.g3{grid-column:7/10;}.g4{grid-column:10/13;}
.g5{grid-column:1/5;grid-row:span 2;}.g6{grid-column:5/8;}.g7{grid-column:8/10;}.g8{grid-column:10/13;grid-row:span 2;}
.g9{grid-column:5/8;}.g10{grid-column:8/10;}
.gallery-placeholder{font-family:var(--hand);font-style:italic;font-size:0.82rem;color:var(--ink4);text-align:center;padding:1rem;}
.gallery-label{position:absolute;bottom:0.6rem;left:0.75rem;font-size:0.6rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink4);background:rgba(253,250,248,0.85);padding:2px 8px;border-radius:99px;}

/* ── OBSESSIONS SHELF ── */
.shelf-section{padding:5rem 250px;background:transparent;}
.shelf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem;}
.obsession-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:1.5rem;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;cursor:default;}
.obsession-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(17,17,17,0.08);border-color:rgba(17,17,17,0.2);}
.obs-category{font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);margin-bottom:0.75rem;}
.obs-icon{font-size:2.2rem;margin-bottom:0.75rem;display:block;}
.obs-title{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:0.3rem;line-height:1.2;}
.obs-sub{font-size:0.78rem;color:var(--ink3);line-height:1.5;}
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

.scrapbook-section{padding:5rem 250px;background:transparent;overflow:hidden;}
.scrapbook-title-line{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;color:var(--ink);line-height:1.1;}
.scrapbook-title-line em{font-style:italic;color:var(--pink);}
.scrapbook-sub{font-size:0.9rem;color:var(--ink3);margin-top:0.5rem;margin-bottom:5rem;font-family:var(--serif);font-style:italic;}
.scrapbook-canvas{position:relative;min-height:700px;width:100%;}
.sc-card{position:absolute;background:#fff;border:1px solid rgba(180,140,130,0.2);border-radius:14px;padding:1.5rem 1.4rem 1.3rem;box-shadow:0 4px 20px rgba(26,18,16,0.07),0 1px 4px rgba(26,18,16,0.04);cursor:default;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;transform-origin:center center;user-select:none;}
.sc-card:hover{box-shadow:0 20px 50px rgba(17,17,17,0.13),0 4px 12px rgba(26,18,16,0.05);z-index:20;}
.sc-card::after{content:'';position:absolute;top:-11px;left:50%;transform:translateX(-50%);width:44px;height:16px;background:rgba(17,17,17,0.1);border-radius:3px;border:1px solid rgba(17,17,17,0.12);}
.sc-card.pin::after{content:'';width:10px;height:10px;border-radius:50%;background:var(--pink);top:-5px;border:none;box-shadow:0 2px 6px rgba(17,17,17,0.5);}
.sc-label{font-family:var(--hand);font-size:1.15rem;font-weight:700;color:var(--pink);margin-bottom:1rem;line-height:1.2;}
.sc-illus{display:flex;align-items:center;justify-content:center;margin-bottom:0.75rem;}
.sc-desc{font-size:0.72rem;color:var(--ink3);line-height:1.55;border-top:1px dashed rgba(180,140,130,0.25);padding-top:0.65rem;margin-top:0.5rem;font-family:var(--hand);font-size:0.88rem;color:var(--ink4);}
/* positions */
.sc-coffee{width:190px;top:0;left:0%;transform:rotate(-4deg);}.sc-coffee:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}
.sc-spidey{width:175px;top:40px;left:19%;transform:rotate(5deg);}.sc-spidey:hover{transform:rotate(0deg) translateY(-10px) scale(1.05);}
.sc-hp{width:185px;top:15px;left:36%;transform:rotate(-3deg);}.sc-hp:hover{transform:rotate(1deg) translateY(-10px) scale(1.04);}
.sc-music{width:180px;top:30px;left:54%;transform:rotate(4deg);}.sc-music:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}
.sc-travel{width:205px;top:5px;left:72%;transform:rotate(-5deg);}.sc-travel:hover{transform:rotate(0deg) translateY(-10px) scale(1.03);}
.sc-photo{width:195px;top:330px;left:10%;transform:rotate(3deg);}.sc-photo:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}
.sc-shop{width:185px;top:320px;left:52%;transform:rotate(-4deg);}.sc-shop:hover{transform:rotate(0deg) translateY(-10px) scale(1.04);}


/* ── TESTIMONIALS ── */
.testimonials-section{padding:5rem 250px;background:transparent;}
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
.testimonial-name{font-size:0.82rem;font-weight:500;color:var(--ink);margin-bottom:0.1rem;}
.testimonial-role{font-size:0.72rem;color:var(--ink4);}

/* ── CONTACT ── */
.contact{background:transparent;padding:5rem 250px;overflow:hidden;position:relative;}
.contact-glow{position:absolute;top:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(17,17,17,0.05) 0%,transparent 70%);pointer-events:none;}
.contact-illustration{position:absolute;top:0;right:0;width:280px;height:300px;display:flex;align-items:flex-start;justify-content:flex-end;}
.illus-placeholder{width:210px;height:250px;border:1px dashed var(--border2);border-radius:12px;margin:2rem 2rem 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(17,17,17,0.02);}
.illus-icon{font-size:2rem;opacity:0.2;}
.illus-label{font-family:var(--hand);font-size:0.82rem;color:var(--ink4);text-align:center;line-height:1.4;}
.contact-inner,.contact-right{position:relative;z-index:1;max-width:600px;}
.contact-eyebrow{font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--pink);margin-bottom:1.1rem;display:flex;align-items:center;gap:0.75rem;}
.contact-eyebrow::after{content:'';width:28px;height:1px;background:var(--pink);}
.contact-title{font-family:var(--hand);font-size:clamp(3.2rem,7vw,5.5rem);font-weight:700;color:var(--ink);line-height:0.95;margin-bottom:1.25rem;}
.contact-title .coffee{color:var(--pink);}
.contact-sub{font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--ink3);line-height:1.65;margin-bottom:2.75rem;max-width:400px;}
.contact-links{display:flex;flex-direction:column;margin-bottom:3.5rem;max-width:400px;}
.contact-link{display:flex;align-items:center;justify-content:space-between;padding:1rem 0;border-bottom:1px solid var(--border);text-decoration:none;color:var(--ink);transition:padding-left 0.25s;}
.contact-link:first-child{border-top:1px solid var(--border);}
.contact-link:hover{padding-left:0.75rem;}
.contact-link-left{display:flex;align-items:center;gap:1rem;}
.contact-link-platform{font-size:0.62rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink4);width:68px;}
.contact-link-value{font-family:var(--serif);font-size:1rem;color:var(--ink3);transition:color 0.2s;}
.contact-link:hover .contact-link-value{color:var(--pink);}
.contact-link-arrow{font-size:0.85rem;color:var(--ink4);transition:transform 0.2s,color 0.2s;}
.contact-link:hover .contact-link-arrow{transform:translate(3px,-3px);color:var(--pink);}
.contact-footer{display:flex;justify-content:space-between;align-items:center;padding-top:2rem;border-top:1px solid var(--border);flex-wrap:wrap;gap:1rem;}
.contact-footer-name{font-family:var(--serif);font-size:0.88rem;color:var(--ink3);}
.contact-footer-hand{font-family:var(--hand);font-size:0.95rem;color:var(--ink3);}
.contact-footer-copy{font-size:0.7rem;letter-spacing:0.06em;color:var(--ink4);}

/* ── JOURNEY ── */
.journey{background:transparent;padding:5rem 250px;position:relative;}
.journey-inner{display:grid;grid-template-columns:1fr 2fr;gap:6rem;align-items:start;position:relative;z-index:1;}
.journey-left{position:sticky;top:8rem;}
.journey-title{font-family:'Rethink Sans',var(--sans);font-size:clamp(22px,4vw,38px);font-weight:800;color:var(--ink);line-height:1.25;margin-bottom:1rem;}
.journey-title em{font-family:var(--hand);font-style:italic;color:var(--pink);font-size:1.15em;}
.journey-sub{font-size:0.83rem;color:var(--ink3);line-height:1.8;margin-top:1rem;}
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
.timeline-date{font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink4);margin-bottom:0.4rem;}
.timeline-role{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:0.2rem;}
.timeline-company{font-size:0.78rem;color:var(--pink);font-weight:500;margin-bottom:0.55rem;letter-spacing:0.02em;}
.timeline-detail{font-size:0.83rem;color:var(--ink3);line-height:1.7;}

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
.contact-flex{display:flex;align-items:center;gap:5rem;position:relative;z-index:1;}
.contact-left{flex-shrink:0;width:370px;}
.contact-right{flex:1;max-width:480px;margin-left:auto;text-align:right;}
.contact-right .contact-title{text-align:right;}
.contact-right .contact-sub{text-align:right;margin-left:auto;}
.contact-right .contact-links{margin-left:auto;}
.contact-right .contact-link{text-align:left;}
.contact-right .contact-footer{justify-content:flex-end;text-align:right;}
/* ── GOOGLE SEARCH MOCK ── */
.gsearch-bar{display:flex;align-items:center;background:transparent;border:none;border-bottom:1.5px solid rgba(30,144,255,0.2);padding:10px 4px 12px;gap:10px;margin-bottom:20px;width:100%;}
.gsearch-icon{width:18px;height:18px;flex-shrink:0;opacity:0.45;}
.gsearch-query-text{flex:1;font-family:var(--sans);font-size:0.92rem;color:var(--ink2);letter-spacing:0.01em;min-height:1.2em;}
.gsearch-caret{color:var(--pink);font-weight:300;animation:gsCaret 1.1s step-end infinite;font-size:1rem;line-height:1;}
@keyframes gsCaret{0%,100%{opacity:1;}50%{opacity:0;}}
.gsearch-results{display:flex;flex-direction:column;gap:10px;}
.gsearch-item{display:flex;align-items:center;gap:12px;padding:13px 16px;background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:0 2px 10px rgba(0,0,0,0.05);opacity:0;transform:translateY(8px);transition:opacity 0.38s ease,transform 0.38s ease,box-shadow 0.2s,border-color 0.2s;}
.gsearch-item.gs-visible{opacity:1;transform:translateY(0);}
.gsearch-item:hover{box-shadow:0 4px 18px rgba(30,100,200,0.11);border-color:rgba(30,144,255,0.22);}
.gsearch-item-icon{width:30px;height:30px;border-radius:50%;background:rgba(30,144,255,0.08);display:flex;align-items:center;justify-content:center;font-size:0.75rem;color:var(--pink);flex-shrink:0;}
.gsearch-item>span:nth-child(2){flex:1;font-family:var(--sans);font-size:0.88rem;color:var(--ink2);font-weight:400;}
.gsearch-item-tag{font-size:0.62rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink4);background:rgba(30,144,255,0.07);padding:2px 8px;border-radius:10px;white-space:nowrap;}



@media(max-width:900px){
  nav{padding:4px;}.nav-clock{display:none;}.nav-brand{padding:0.4rem 0.7rem 0.4rem 0.5rem;}.nav-cta{display:none;}
  .work,.journey,.about,.contact,.process-section,.gallery-section,.shelf-section,.testimonials-section{padding:3rem clamp(24px,4vw,50px);}
  .spectrum-section{padding:4rem clamp(24px,4vw,50px);}
  .journey-inner{grid-template-columns:1fr;}.journey-left{position:static;}
  .float-el{display:none;}
  .about-title{margin-bottom:2.6rem;}
  .about-book-stage{width:min(100%,790px);aspect-ratio:1.68;}
  .about-page-content{left:6.5%;right:6.5%;top:11%;bottom:10%;}
  .about-page-spread{gap:6.5%;}
  .about-lined-page p{line-height:1.55;margin-bottom:0.55rem;}
  .pendulum-bob{width:66px;height:66px;}.pendulum-string{height:90px;}.ball-label{font-size:10px;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:100px;}
  .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10{grid-column:auto;grid-row:auto;}
  .hero-cards{gap:8px;}.hero-card{width:76px;height:60px;}.hero-card:hover{width:130px;height:100px;}
  .contact-flex{flex-direction:column;gap:2rem;}.contact-left{width:100%;}
  .pendulum-canvas{height:280px;}
  .pw-rows{gap:3.5rem;}
  .pw-row,.pw-row.pw-reversed{grid-template-columns:1fr;grid-template-areas:"visual" "details";gap:1.75rem;padding:1.5rem 0;}
  .pw-row .pw-visual,.pw-row.pw-reversed .pw-visual{align-items:flex-start!important;}
}
@media(max-width:640px){
  .hero{padding:5rem 20px 4rem;cursor:auto;}
  .hero-line1{font-size:clamp(20px,5.5vw,34px);flex-wrap:wrap;white-space:normal;gap:0 6px;}
  .hero-line2{font-size:13px;padding:0 4px;}
  .hero-line3{font-size:12px;padding:5px 13px;}
  .hero-cards{gap:6px;height:90px;}
  .hero-card{width:64px;height:52px;border-radius:12px;}
  .hero-card:hover{width:110px;height:84px;}
  .hero-text{padding:0 8px;max-width:100%;}
  .hero-scroll-hint{bottom:1.5rem;}
}
@media(max-width:580px){
  .pw-rows{gap:2.5rem;}
  .pw-row{padding:1rem 0;}
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
  padding:6rem 2rem 7rem;
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
  font-size:0.68rem;
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
  font-size:0.72rem;
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
  font-size:0.82rem;
  font-weight:600;
  color:var(--ink2);
}
.ew-sep{
  font-size:0.72rem;
  color:var(--ink4);
}
.ew-desc{
  font-size:0.82rem;
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
  font-size:0.68rem;
  color:var(--ink4);
  text-transform:uppercase;
  letter-spacing:0.07em;
}
.ew-constraints{
  font-size:0.67rem;
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
  font-size:0.68rem;
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
  font-size:13px;
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
  font-size:13.5px;
  font-style:italic;
  color:var(--ink3);
  line-height:1.8;
  margin:0;
}
.wr-constraints{
  font-family:var(--hand);
  font-size:12px;
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
  font-size:13px;
  color:var(--ink3);
  border:0.5px solid var(--border2);
  border-radius:20px;
  padding:4px 12px;
  display:inline-block;
}
.wr-cta{
  font-family:var(--serif);
  font-size:13px;
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
  .wr-desc{font-size:13px;}
}
/* ── WHITE BG + GRAY DOT PATTERN ── */
.hero,.work,.zoom-sticky,.dsz-sticky,.about,.gallery-section,.shelf-section,.scrapbook-section,.testimonials-section,.home-loves,.home-xp,.contact{
  background-color:#ffffff;
  background-image:radial-gradient(circle,rgba(0,0,0,0.07) 1.5px,transparent 1.5px);
  background-size:28px 28px;
}

/* ── THINGS I LOVE SECTION ── */
.home-loves{padding:6rem 220px 5rem;}
.home-loves-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:3rem;}
.home-loves-title em{font-style:italic;color:var(--pink);}
.home-loves-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.home-love-card{background:#fff;border-radius:20px;padding:36px 28px 32px;box-shadow:0 1px 4px rgba(0,0,0,0.04),0 4px 22px rgba(0,0,0,0.05);transition:transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94),box-shadow 0.3s ease;overflow:hidden;position:relative;}
.home-love-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,0.10),0 2px 10px rgba(0,0,0,0.05);}
.home-love-icon{font-size:2.8rem;margin-bottom:1.2rem;display:block;line-height:1;transition:transform 0.38s cubic-bezier(0.34,1.4,0.64,1);}
.home-love-card:hover .home-love-icon{transform:scale(1.22) rotate(-8deg);}
.home-love-name{font-family:var(--serif);font-size:1.55rem;font-weight:400;color:var(--ink);margin-bottom:0.5rem;line-height:1.2;}
.home-love-desc{font-size:0.875rem;color:var(--ink3);line-height:1.75;}
.home-love-whisper{margin-top:1.2rem;padding-top:1rem;border-top:1px solid rgba(0,0,0,0.06);font-family:var(--hand);font-size:0.95rem;color:#bbb;}

/* ── GOOD EXPERIENCES (POLAROID GRID) ── */
.home-xp{padding:4rem 220px 6rem;overflow:hidden;}
.home-xp-inner{}
.home-xp-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:2.5rem;}
.home-xp-title em{font-style:italic;color:var(--pink);}
.home-xp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px 22px;position:relative;}
.home-xp-pol{background:#fff;padding:10px 10px 46px;box-shadow:0 4px 20px rgba(0,0,0,0.10),0 1px 5px rgba(0,0,0,0.06);border-radius:2px;cursor:pointer;position:relative;transition:transform 0.44s cubic-bezier(0.34,1.4,0.64,1),box-shadow 0.35s ease;transform:rotate(var(--r,0deg));z-index:1;}
.home-xp-pol:hover{transform:rotate(0deg) scale(1.10) translateY(-12px)!important;box-shadow:0 28px 64px rgba(0,0,0,0.18),0 6px 20px rgba(0,0,0,0.09);z-index:20;}
.home-xp-photo{width:100%;aspect-ratio:1/1;display:block;border-radius:1px;position:relative;overflow:hidden;}
.home-xp-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;transition:transform 0.5s ease;}
.home-xp-pol:hover .home-xp-photo img{transform:scale(1.06);}
.home-xp-over{position:absolute;inset:0;background:rgba(0,0,0,0.52);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.28s ease;border-radius:1px;padding:12px;text-align:center;}
.home-xp-pol:hover .home-xp-over{opacity:1;}
.home-xp-mem{font-family:var(--hand);font-size:1rem;color:#fff;line-height:1.45;}
.home-xp-caption{position:absolute;bottom:0;left:0;right:0;height:46px;display:flex;align-items:center;justify-content:center;font-family:var(--hand);font-size:0.92rem;color:#888;padding:0 8px;text-align:center;line-height:1.3;}
.home-xp-tape{position:absolute;height:18px;border-radius:2px;z-index:3;}
.home-xp-tape::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,0.06) 0,rgba(0,0,0,0.06) 2px,transparent 2px,transparent 6px);border-radius:2px;}
.home-xp-tape.hxt{width:54px;top:-9px;left:50%;transform:translateX(-50%) rotate(-1.5deg);background:rgba(255,220,100,0.55);}
.home-xp-tape.hxl{width:44px;top:-8px;left:8px;transform:rotate(-4deg);background:rgba(255,220,100,0.50);}
.home-xp-tape.hxr{width:44px;top:-8px;right:8px;transform:rotate(5deg);background:rgba(160,200,255,0.58);}

/* ── RESPONSIVE NEW SECTIONS ── */
@media(max-width:1200px){
  .hero{padding:9rem 100px 5rem;}
  .home-loves{padding:5rem 100px;}
  .home-xp{padding:4rem 100px 5rem;}
}
@media(max-width:1100px){.home-xp-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:900px){
  .hero{padding:8rem 48px 4rem;gap:32px;}
  .hi-polaroid{width:240px;}
  .home-loves{padding:4rem 48px;}
  .home-xp{padding:4rem 48px 5rem;}
}
@media(max-width:700px){
  .hero{grid-template-columns:1fr;padding:7rem 24px 4rem;text-align:center;}
  .hi-right{order:-1;}
  .hi-bio{margin:0 auto 2rem;}
  .hi-chips{justify-content:center;}
  .hi-pill{display:none;}
  .home-loves{padding:4rem 20px;}
  .home-loves-grid{grid-template-columns:1fr;gap:14px;}
  .home-xp{padding:4rem 20px 5rem;}
  .home-xp-grid{grid-template-columns:repeat(2,1fr);gap:22px 14px;}
}`;

export function HomeStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
