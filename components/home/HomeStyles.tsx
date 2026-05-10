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
.hero,.work,.process-section,.about,.gallery-section,.scrapbook-section,.shelf-section,.testimonials-section,.journey,.signoff,.contact{scroll-snap-align:start;}
body{
  background:var(--bg);
  color:var(--ink);
  font-family:var(--sans);
  font-weight:300;
  line-height:1.6;
  overflow-x:hidden;
  background-image:
    radial-gradient(ellipse at 15% 10%, rgba(180,210,255,0.07) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 85%, rgba(200,185,255,0.05) 0%, transparent 50%);
}
@media (hover:hover) and (pointer:fine){
  body,
  body a,
  body button,
  .hero-card,
  .bento-work-card,
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
.nav-resume.water-surface{isolation:auto;}
.nav-link-item.water-surface::before,
.nav-link-item.water-surface::after,
.nav-resume.water-surface::before,
.nav-resume.water-surface::after{z-index:-1;}
@keyframes waterRing{
  0%{opacity:0.55;transform:translate(-50%,-50%) scale(0.25);}
  72%{opacity:0.22;}
  100%{opacity:0;transform:translate(-50%,-50%) scale(8);}
}
@keyframes waterSurface{
  0%{opacity:0.42;transform:translate(-50%,-50%) scale(0.45) rotate(0deg);}
  100%{opacity:0;transform:translate(-50%,-50%) scale(9) rotate(18deg);}
}


/* ── NAV — floating centered pill ── */
nav{
  position:fixed;top:28px;left:50%;transform:translateX(-50%);
  z-index:100;
  display:flex;align-items:center;gap:3px;
  padding:6px 8px;
  background:#fff;
  backdrop-filter:blur(24px);
  -webkit-backdrop-filter:blur(24px);
  border:1px solid rgba(0,0,0,0.06);
  border-radius:99px;
  box-shadow:0 2px 18px rgba(0,0,0,0.07),0 1px 3px rgba(0,0,0,0.04),inset 0 1.5px 0 rgba(255,255,255,1),inset 0 -1px 0 rgba(255,255,255,0.5);
  transition:background 0.3s,box-shadow 0.3s;
  white-space:nowrap;
}
nav.scrolled{
  background:#fff;
  box-shadow:0 4px 28px rgba(0,0,0,0.09),0 2px 6px rgba(0,0,0,0.04),inset 0 1.5px 0 rgba(255,255,255,1);
}
.nav-active-indicator{
  position:absolute;top:6px;left:0;
  width:0;height:calc(100% - 12px);
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
.nav-link-item svg{flex-shrink:0;opacity:0.55;transition:opacity 0.18s;}
.nav-link-item:hover{background:rgba(0,0,0,0.06);color:#111;}
.nav-link-item:hover svg{opacity:0.85;}
.nav-link-item.active{color:#fff;}
.nav-link-item.active:hover{background:transparent;color:#fff;}
.nav-link-item.active svg{opacity:1;color:#fff;}
.nav-divider{width:1px;height:16px;background:rgba(0,0,0,0.09);flex-shrink:0;margin:0 2px;}
.nav-resume{
  display:inline-flex;align-items:center;gap:6px;
  font-size:0.76rem;letter-spacing:0.02em;
  color:rgba(30,30,40,0.60);text-decoration:none;
  padding:0.55rem 1.1rem;border-radius:99px;
  transition:background 0.18s,color 0.18s;
  font-family:var(--sans);font-weight:500;
}
.nav-resume svg{flex-shrink:0;opacity:0.55;transition:opacity 0.18s;}
.nav-resume:hover{background:rgba(0,0,0,0.06);color:#111;}
.nav-resume:hover svg{opacity:0.85;}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:7rem 250px 5rem;position:relative;overflow:hidden;cursor:none;}
.cursor-glow{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,0.03) 0%,transparent 70%);pointer-events:none;transform:translate(-50%,-50%);transition:left 0.08s ease,top 0.08s ease;z-index:0;}
.custom-cursor{
  position:fixed;width:10px;height:10px;border-radius:50%;
  background:var(--pink);
  pointer-events:none;
  transform:translate(-50%,-50%);
  z-index:9998;
  box-shadow:0 0 0 5px rgba(30,144,255,0.10),0 0 20px rgba(30,144,255,0.28);
  transition:width 0.22s ease,height 0.22s ease,opacity 0.22s ease,background 0.22s ease,box-shadow 0.22s ease,border-radius 0.6s ease;
}
.custom-cursor.big{
  width:14px;height:14px;
  background:var(--pink);
  box-shadow:0 0 0 7px rgba(30,144,255,0.10),0 0 24px rgba(30,144,255,0.34);
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
.scroll-glass-orb{
  width:38px;height:38px;border-radius:50%;
  background:rgba(255,255,255,0.55);
  backdrop-filter:blur(12px) saturate(1.5);
  border:1px solid rgba(255,255,255,0.8);
  box-shadow:0 4px 16px rgba(30,144,255,0.10),0 1px 4px rgba(0,0,0,0.06);
  display:flex;align-items:center;justify-content:center;
  animation:scrollBounce 2.2s ease-in-out infinite;
}
@keyframes scrollBounce{0%,100%{transform:translateY(0);}50%{transform:translateY(6px);}}
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
.reveal{opacity:0;transition:opacity 0.75s cubic-bezier(0.22,1,0.36,1),transform 0.75s cubic-bezier(0.22,1,0.36,1);}
.reveal:not(.from-left):not(.from-right):not(.scale-up){transform:translateY(30px);}
.reveal.from-left{transform:translateX(-40px);}
.reveal.from-right{transform:translateX(40px);}
.reveal.scale-up{transform:scale(0.92) translateY(16px);}
.reveal.visible{opacity:1;transform:none;}
.reveal-delay-1{transition-delay:0.08s;}.reveal-delay-2{transition-delay:0.16s;}.reveal-delay-3{transition-delay:0.25s;}.reveal-delay-4{transition-delay:0.35s;}.reveal-delay-5{transition-delay:0.46s;}.reveal-delay-6{transition-delay:0.58s;}

/* ── WORK BENTO ── */
.work{background:#F5F5F8;padding:4.5rem 250px 7rem;}
.work-heading-wrap{margin-bottom:3rem;}
.work-title-main{font-family:'Rethink Sans',var(--sans);font-size:clamp(24px,5vw,40px);font-weight:800;color:#1a1a1a;line-height:1.3;margin:0;}
.work-title-script{font-family:var(--hand);font-size:calc(clamp(24px,5vw,40px) * 1.3);font-weight:700;color:#1E90FF;display:block;line-height:1.2;}
.bento-work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.bento-work-card{border-radius:20px;padding:0;box-shadow:0px 1px 4px rgba(0,0,0,0.04),0px 4px 18px rgba(0,0,0,0.05);border:none;overflow:hidden;position:relative;text-decoration:none;color:inherit;display:flex;flex-direction:column;min-height:320px;transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94);}
.bento-work-card:hover{transform:translateY(-4px);box-shadow:0px 6px 28px rgba(0,0,0,0.08),0px 2px 8px rgba(0,0,0,0.04);}
.bento-work-card.wide{grid-column:span 2;}
.bento-card-inner{position:relative;z-index:1;display:flex;flex-direction:column;flex:1;padding:28px;}
.bento-card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:0.9rem;}
.bento-icon-badge{width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,0.8);border:1px solid rgba(255,255,255,1);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;box-shadow:0 1px 4px rgba(0,0,0,0.08);}
.bento-tag-pill{display:inline-flex;align-items:center;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:600;width:fit-content;}
.bento-proj-title{font-size:clamp(1.25rem,1.7vw,1.45rem);font-weight:700;color:#111827;line-height:1.2;margin-bottom:0.3rem;}
.bento-proj-desc{font-size:13px;color:#6B7280;line-height:1.55;}
.bento-proj-visual{margin-top:1rem;flex:1;display:flex;align-items:flex-end;justify-content:flex-end;position:relative;transition:transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94);}
.bento-work-card:hover .bento-proj-visual{transform:scale(1.02);}
/* CTA hidden by default — white pill appears on hover */
.bento-cta{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#111827;margin-top:1.1rem;padding:8px 16px;background:#ffffff;border-radius:99px;box-shadow:0 2px 10px rgba(0,0,0,0.10);opacity:0;transform:translateY(5px);transition:opacity 0.22s ease,transform 0.22s ease;width:fit-content;flex-shrink:0;}
.bento-work-card:hover .bento-cta{opacity:1;transform:translateY(0);}
.bento-mock{background:rgba(255,255,255,0.9);border-radius:10px;border:1px solid rgba(0,0,0,0.06);box-shadow:0px 8px 28px rgba(0,0,0,0.10),0px 2px 6px rgba(0,0,0,0.06);overflow:hidden;}
.bento-mock-bar{height:16px;background:rgba(0,0,0,0.04);border-bottom:1px solid rgba(0,0,0,0.05);display:flex;align-items:center;padding:0 7px;gap:4px;}
.bento-mock-dot{width:5px;height:5px;border-radius:50%;}
.bento-mock-body{padding:7px;display:flex;flex-direction:column;gap:5px;}
.bento-mock-row{height:6px;border-radius:2px;}
.bento-mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;}
.bento-mock-block{border-radius:3px;height:26px;}


/* ── ZOOM INTERLUDE ── */
.zoom-section{position:relative;height:350vh;z-index:2;}
.zoom-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#ffffff;}
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

/* ── ABOUT — LETTER ── */
.about{background:#F5F5F0;padding:7rem 250px;}
.about-letter-wrap{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;max-width:1100px;margin:0 auto;}
.about-postcard-col{display:flex;justify-content:center;align-items:center;}
.postcard-scene{position:relative;width:320px;height:400px;}
.postcard-backing{position:absolute;width:260px;height:340px;background:#E8E4D0;border-radius:3px;right:0;bottom:0;transform:rotate(5deg);box-shadow:0 8px 28px rgba(0,0,0,0.10);}
.postcard-main{position:absolute;width:250px;height:320px;background:#fff;padding:10px 10px 40px;border-radius:2px;box-shadow:0 14px 44px rgba(0,0,0,0.15);transform:rotate(-4deg);left:0;top:24px;}
.postcard-main img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;}
.postcard-stamp{position:absolute;top:4px;right:6px;width:78px;height:92px;background:#fff;padding:4px;transform:rotate(7deg);box-shadow:0 4px 14px rgba(0,0,0,0.14);border:2px solid #ddd;outline:2px dashed rgba(0,0,0,0.15);outline-offset:-5px;}
.postcard-stamp img{width:100%;height:78%;object-fit:cover;object-position:center top;display:block;}
.stamp-year{display:block;font-size:9px;font-family:var(--sans);color:#888;font-weight:600;text-align:center;padding-top:3px;letter-spacing:0.05em;}
.about-letter-col{}
.letter-paper{background:#FFFEF9;border-radius:4px;padding:2.5rem 2.75rem 2rem;box-shadow:0 4px 28px rgba(0,0,0,0.06);font-family:var(--hand);position:relative;overflow:hidden;}
.letter-paper::before{content:'';position:absolute;left:46px;top:0;bottom:0;width:1px;background:rgba(220,80,80,0.18);}
.letter-greeting{font-size:1.45rem;color:#2a2a2a;margin-bottom:1.1rem;font-weight:600;line-height:1.3;}
.letter-body{font-size:1.13rem;color:#3a3a3a;line-height:1.9;margin-bottom:0.9rem;}
.letter-body em{color:#1E90FF;font-style:italic;font-weight:600;}
.letter-sign{font-size:2rem;font-weight:700;color:#1a1a1a;margin-top:1.5rem;line-height:1;}

/* ── PHOTO GALLERY ── */
.gallery-section{padding:7rem 250px;background:var(--bg);}
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
.shelf-section{padding:7rem 250px;background:var(--bg2);border-top:1px solid var(--border);}
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
.bento-work-card,
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

.scrapbook-section{padding:7rem 250px 9rem;background:var(--bg2);border-top:1px solid var(--border);overflow:hidden;}
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
.testimonials-section{padding:7rem 250px;background:linear-gradient(170deg,var(--bg) 0%,var(--bg2) 100%);}
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
.contact{background:var(--bg2);padding:7rem 250px 4rem;border-top:1px solid var(--border);overflow:hidden;position:relative;}
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
.journey{background:#f8fbff;padding:7rem 250px;border-top:1px solid rgba(30,144,255,0.1);position:relative;}
.journey::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(30,144,255,0.05) 1.5px,transparent 1.5px);background-size:28px 28px;pointer-events:none;}
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

/* ── GRAVITY PLAYGROUND ── */
.contact-gravity-wrap{position:relative;height:440px;border-radius:28px;background:radial-gradient(ellipse at 48% 42%,rgba(30,144,255,0.04) 0%,transparent 68%);border:1px solid rgba(30,144,255,0.07);overflow:hidden;}
.grav-hint{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);font-family:var(--hand);font-size:0.8rem;color:var(--ink4);letter-spacing:0.04em;opacity:0.45;pointer-events:none;white-space:nowrap;user-select:none;}
@keyframes gsFloat{to{translate:var(--fx,0px) var(--fy,-5px);}}
.grav-shape{position:absolute;pointer-events:none;will-change:transform;animation:gsFloat var(--fd,4.5s) ease-in-out infinite alternate;animation-delay:var(--fdel,0s);}
.gs1{width:88px;height:88px;border-radius:50%;top:6%;left:5%;background:rgba(30,144,255,0.09);border:1px solid rgba(30,144,255,0.22);box-shadow:0 8px 28px rgba(30,144,255,0.07),inset 0 1px 0 rgba(255,255,255,0.55);backdrop-filter:blur(12px) saturate(1.4);-webkit-backdrop-filter:blur(12px) saturate(1.4);--fd:5.5s;--fdel:0s;--fx:3px;--fy:-7px;}
.gs2{width:40px;height:40px;border-radius:50%;top:4%;left:62%;background:rgba(255,255,255,0.38);border:1px solid rgba(255,255,255,0.72);box-shadow:0 4px 14px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);--fd:4.2s;--fdel:-1.2s;--fx:-2px;--fy:-5px;}
.gs3{width:118px;height:118px;border-radius:50%;top:36%;left:46%;background:transparent;border:1.5px solid rgba(30,144,255,0.18);box-shadow:0 0 24px rgba(30,144,255,0.05);--fd:7s;--fdel:-2.5s;--fx:4px;--fy:5px;}
.gs4{width:50px;height:50px;top:20%;left:34%;background:rgba(30,144,255,0.11);border:1px solid rgba(30,144,255,0.25);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);--fd:3.8s;--fdel:-0.6s;--fx:-3px;--fy:-6px;}
.gs5{width:72px;height:72px;top:64%;left:4%;background:rgba(30,144,255,0.08);border:1px solid rgba(30,144,255,0.16);border-radius:60% 40% 30% 70%/60% 30% 70% 40%;box-shadow:0 6px 22px rgba(30,144,255,0.07);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);--fd:5.2s;--fdel:-1.8s;--fx:4px;--fy:-4px;}
.gs6{width:56px;height:56px;border-radius:50%;top:50%;left:18%;background:rgba(255,255,255,0.34);border:1px solid rgba(255,255,255,0.68);box-shadow:0 4px 18px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);--fd:4.8s;--fdel:-0.4s;--fx:-2px;--fy:-5px;}
.gs7{width:38px;height:38px;border-radius:50%;top:20%;left:70%;background:transparent;border:1.5px solid rgba(255,255,255,0.55);--fd:3.5s;--fdel:-2s;--fx:3px;--fy:-3px;}
.gs8{width:46px;height:46px;border-radius:14px;top:42%;left:8%;background:rgba(30,144,255,0.07);border:1px solid rgba(30,144,255,0.18);box-shadow:0 4px 14px rgba(30,144,255,0.05);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);--fd:6s;--fdel:-1s;--fx:-4px;--fy:-6px;}
.gs9{width:24px;height:24px;border-radius:50%;top:28%;left:54%;background:transparent;border:1px solid rgba(30,144,255,0.28);--fd:3.2s;--fdel:-0.8s;--fx:2px;--fy:-4px;}
.gs10{width:10px;height:10px;border-radius:50%;top:36%;left:68%;background:rgba(30,144,255,0.45);--fd:2.8s;--fdel:-1.5s;--fx:-1px;--fy:-3px;}
.gs11{width:8px;height:8px;border-radius:50%;top:76%;left:53%;background:rgba(255,255,255,0.65);border:1px solid rgba(255,255,255,0.8);--fd:3.6s;--fdel:-0.3s;--fx:2px;--fy:-2px;}
.gs12{width:12px;height:12px;border-radius:50%;top:58%;left:80%;background:rgba(30,144,255,0.38);--fd:4.4s;--fdel:-2.2s;--fx:-2px;--fy:-4px;}
.gs13{width:30px;height:30px;top:70%;left:36%;background:rgba(255,255,255,0.36);border:1px solid rgba(255,255,255,0.65);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);--fd:5.8s;--fdel:-0.9s;--fx:3px;--fy:-5px;}
.gs14{width:54px;height:54px;top:8%;left:80%;background:rgba(30,144,255,0.07);border:1px solid rgba(30,144,255,0.16);border-radius:30% 70% 70% 30%/30% 30% 70% 70%;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);--fd:4.6s;--fdel:-1.7s;--fx:-3px;--fy:-4px;}
.gs15{width:40px;height:40px;top:80%;left:68%;background:rgba(255,255,255,0.32);border:1px solid rgba(255,255,255,0.62);clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);--fd:6.2s;--fdel:-0.5s;--fx:2px;--fy:-6px;}

@media(max-width:900px){
  nav{padding:0 1.5rem;grid-template-columns:1fr auto;}.nav-resume{display:none;}
  .work,.journey,.about,.contact,.process-section,.gallery-section,.shelf-section,.testimonials-section{padding:5rem clamp(24px,4vw,50px);}
  .spectrum-section{padding:4rem clamp(24px,4vw,50px);}
  .journey-inner{grid-template-columns:1fr;}.journey-left{position:static;}
  .float-el{display:none;}
  .about-letter-wrap{grid-template-columns:1fr;gap:3.5rem;}
  .postcard-scene{width:280px;height:350px;}
  .pendulum-bob{width:66px;height:66px;}.pendulum-string{height:90px;}.ball-label{font-size:10px;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:100px;}
  .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10{grid-column:auto;grid-row:auto;}
  .hero-cards{gap:8px;}.hero-card{width:76px;height:60px;}.hero-card:hover{width:130px;height:100px;}
  .contact-flex{flex-direction:column;gap:2rem;}.contact-left{width:100%;}
  .contact-gravity-wrap{height:300px;}.grav-hint{display:none;}
  .bento-work-grid{grid-template-columns:1fr 1fr;}
  .bento-work-card.wide{grid-column:span 2;}
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
  .bento-work-grid{grid-template-columns:1fr;}
  .bento-work-card.wide{grid-column:span 1;}
  .postcard-scene{width:240px;height:300px;}
  .postcard-main{width:210px;height:268px;}
  .postcard-backing{width:220px;height:290px;}
  .letter-paper{padding:2rem 1.75rem 1.75rem;}
  .hero-line1{font-size:clamp(18px,5vw,28px);}
  .hero-cards{gap:5px;height:80px;}
  .hero-card{width:56px;height:46px;border-radius:10px;}
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
}`;

export function HomeStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
