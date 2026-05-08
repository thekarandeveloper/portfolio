const css = `:root {
  --bg:#FFFFFF; --bg2:#F8F8F8; --bg3:#F0F0F0; --bg4:#E5E5E5; --surface:#D5D5D5;
  --border:rgba(0,0,0,0.08); --border2:rgba(0,0,0,0.14);
  --ink:#111111; --ink2:#222222; --ink3:#555555; --ink4:#999999;
  --pink:#111111; --pink2:#444444; --pink3:rgba(17,17,17,0.08); --pink5:#F5F5F5;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Instrument Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --hand:'Caveat',cursive;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;scroll-snap-type:y proximity;scroll-padding-top:76px;}
.hero,.work,.showcase-strip,.process-section,.about,.gallery-section,.scrapbook-section,.shelf-section,.spectrum-section,.testimonials-section,.journey,.contact{scroll-snap-align:start;}
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

/* ── FIGMA INTRO LOADER ── */
#loader{
  position:fixed;inset:0;z-index:9999;
  background:#1E1E1E;
  overflow:hidden;
}
/* Dot grid canvas */
.figma-canvas-bg{
  position:absolute;inset:0;
  background-image:radial-gradient(circle,rgba(255,255,255,0.08) 1px,transparent 1px);
  background-size:24px 24px;
  background-position:0 0;
}
/* Top toolbar */
.figma-topbar{
  position:absolute;top:0;left:0;right:0;height:44px;
  background:#2C2C2C;
  border-bottom:1px solid rgba(255,255,255,0.06);
  display:flex;align-items:center;padding:0 1rem;gap:0;
  z-index:2;
}
.figma-tb-dots{display:flex;gap:6px;margin-right:1.5rem;}
.figma-tb-dot{width:11px;height:11px;border-radius:50%;}
.figma-tb-logo{
  width:28px;height:28px;display:flex;align-items:center;justify-content:center;
  margin-right:1rem;
}
.figma-tb-logo svg{width:20px;height:20px;}
.figma-tb-menu{display:flex;gap:0;}
.figma-tb-item{
  font-size:0.72rem;color:rgba(255,255,255,0.45);
  padding:0.3rem 0.75rem;border-radius:4px;letter-spacing:0.02em;
  font-family:'DM Sans',sans-serif;
  transition:background 0.15s,color 0.15s;
}
.figma-tb-item.active{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.9);}
.figma-tb-right{margin-left:auto;display:flex;align-items:center;gap:0.5rem;}
.figma-tb-avatar{
  width:26px;height:26px;border-radius:50%;background:#FFFFFF;
  display:flex;align-items:center;justify-content:center;
  font-size:0.6rem;color:#fff;font-weight:600;font-family:'DM Sans',sans-serif;
}
.figma-tb-btn{
  font-size:0.68rem;color:rgba(255,255,255,0.4);
  padding:0.25rem 0.6rem;border-radius:4px;
  font-family:'DM Sans',sans-serif;letter-spacing:0.03em;
}
.figma-share-btn{
  font-size:0.68rem;background:#FFFFFF;color:#111;
  padding:0.3rem 0.9rem;border-radius:5px;
  font-family:'DM Sans',sans-serif;font-weight:500;
}

/* Left panel */
.figma-left-panel{
  position:absolute;top:44px;left:0;bottom:0;width:220px;
  background:#2C2C2C;border-right:1px solid rgba(255,255,255,0.06);
  padding:0.75rem 0;z-index:2;
  opacity:0;transition:opacity 0.4s ease;
}
.figma-left-panel.show{opacity:1;}
.figma-panel-title{
  font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;
  color:rgba(255,255,255,0.3);padding:0 1rem 0.5rem;
  font-family:'DM Sans',sans-serif;
}
.figma-layer{
  display:flex;align-items:center;gap:0.5rem;
  padding:0.3rem 1rem;cursor:default;
  transition:background 0.15s;
  opacity:0;transform:translateX(-8px);
  transition:opacity 0.3s ease,transform 0.3s ease,background 0.15s;
}
.figma-layer.show{opacity:1;transform:translateX(0);}
.figma-layer:hover{background:rgba(255,255,255,0.05);}
.figma-layer.selected{background:rgba(17,17,17,0.15);}
.figma-layer-icon{font-size:0.7rem;width:14px;text-align:center;color:rgba(255,255,255,0.5);}
.figma-layer-name{font-size:0.72rem;color:rgba(255,255,255,0.65);font-family:'DM Sans',sans-serif;}
.figma-layer.selected .figma-layer-name{color:#fff;}
.layer-indent{padding-left:1.5rem;}
.layer-indent2{padding-left:2.5rem;}

/* Main canvas area */
.figma-main{
  position:absolute;top:44px;left:0;right:0;bottom:0;
  display:flex;align-items:center;justify-content:center;
}

/* The frame being drawn */
.figma-frame-wrap{
  position:relative;
  display:flex;align-items:center;justify-content:center;
}
.figma-frame-outline{
  width:0;height:0;
  border:2px solid #111111;
  border-radius:2px;
  position:relative;
  background:#FFFFFF;
  transition:none;
  display:flex;align-items:center;justify-content:center;
  overflow:hidden;
}
/* Frame label */
.figma-frame-tag{
  position:absolute;top:-22px;left:0;
  font-size:0.65rem;font-family:'DM Sans',sans-serif;
  color:#111111;letter-spacing:0.04em;font-weight:500;
  opacity:0;white-space:nowrap;
  transition:opacity 0.3s ease;
}
/* Corner handles */
.f-handle{
  position:absolute;width:8px;height:8px;
  background:#fff;border:1.5px solid #111111;border-radius:1px;
  opacity:0;transition:opacity 0.2s ease;
  z-index:3;
}
.fh-tl{top:-4px;left:-4px;} .fh-tr{top:-4px;right:-4px;}
.fh-bl{bottom:-4px;left:-4px;} .fh-br{bottom:-4px;right:-4px;}
.fh-tm{top:-4px;left:50%;transform:translateX(-50%);}
.fh-bm{bottom:-4px;left:50%;transform:translateX(-50%);}
.fh-lm{left:-4px;top:50%;transform:translateY(-50%);}
.fh-rm{right:-4px;top:50%;transform:translateY(-50%);}

/* Inside frame content */
.frame-inner{
  text-align:center;
  padding:1.5rem;
  opacity:0;
  transition:opacity 0.4s ease;
}
.fi-name{
  font-family:'Caveat',cursive;
  font-size:clamp(2.5rem,6vw,4.5rem);
  font-weight:700;color:#1A1210;
  line-height:0.9;white-space:nowrap;
}
.fi-name .fi-accent{color:#111111;}
.fi-name-cursor{
  display:inline-block;width:3px;height:0.8em;
  background:#111111;vertical-align:middle;
  margin-left:2px;
  animation:fiCursorBlink 0.6s step-end infinite;
}
@keyframes fiCursorBlink{0%,100%{opacity:1;}50%{opacity:0;}}
.fi-role{
  font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;
  color:#B09A90;margin-top:0.75rem;font-family:'DM Sans',sans-serif;
  opacity:0;transition:opacity 0.3s ease;
}
.fi-tagline{
  font-family:'Cormorant Garamond',serif;
  font-style:italic;font-size:1rem;
  color:#7A6058;margin-top:0.5rem;
  opacity:0;transition:opacity 0.3s ease;
}

/* Figma cursor */
.fi-cursor{
  position:absolute;z-index:10;pointer-events:none;
  transition:left 0.5s cubic-bezier(0.25,1,0.5,1),top 0.5s cubic-bezier(0.25,1,0.5,1);
}
.fi-cursor-label{
  background:#111111;color:#fff;
  font-size:0.6rem;padding:2px 7px;border-radius:3px;
  font-family:'DM Sans',sans-serif;white-space:nowrap;
  margin-top:2px;
  opacity:0;transition:opacity 0.3s ease;
  font-weight:500;
}

/* Tooltip-style hint */
.figma-hint{
  position:absolute;bottom:3rem;left:50%;transform:translateX(-50%);
  font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;
  color:rgba(255,255,255,0.2);font-family:'DM Sans',sans-serif;
  white-space:nowrap;
  opacity:0;transition:opacity 0.5s ease;
}
.figma-hint.show{opacity:1;}

/* Zoom out — frame expands, canvas fades */
#loader.zoom-out .figma-canvas-bg{opacity:0;transition:opacity 0.5s ease;}
#loader.zoom-out .figma-topbar{opacity:0;transition:opacity 0.3s ease;}
#loader.zoom-out .figma-left-panel{opacity:0;transition:opacity 0.3s ease;}
#loader.zoom-out .figma-frame-outline{
  border:none;
  border-radius:0;
  transition:
    width 0.9s cubic-bezier(0.76,0,0.24,1),
    height 0.9s cubic-bezier(0.76,0,0.24,1),
    border-radius 0.9s ease !important;
}
#loader.final-fade{opacity:0;transition:opacity 0.6s ease 0.3s;}
#loader.gone{display:none;}

body.loading{overflow:hidden;}
body.loading nav,body.loading .hero,body.loading section,
body.loading .spectrum-section,body.loading .showcase-strip,
body.loading .process-section,body.loading .gallery-section,
body.loading .scrapbook-section,body.loading .testimonials-section{opacity:0;}

/* ── NAV — floating centered pill ── */
nav{
  position:fixed;top:28px;left:50%;transform:translateX(-50%);
  z-index:100;
  display:flex;align-items:center;gap:3px;
  padding:6px 8px;
  background:rgba(235,235,238,0.78);
  backdrop-filter:blur(24px) saturate(1.6);
  border:1px solid rgba(200,200,210,0.55);
  border-radius:99px;
  box-shadow:0 4px 24px rgba(0,0,0,0.10),0 1px 4px rgba(0,0,0,0.06),inset 0 1px 0 rgba(255,255,255,0.75);
  transition:background 0.3s,box-shadow 0.3s;
  white-space:nowrap;
}
nav.scrolled{
  background:rgba(230,230,234,0.92);
  box-shadow:0 8px 32px rgba(0,0,0,0.13),0 2px 6px rgba(0,0,0,0.07),inset 0 1px 0 rgba(255,255,255,0.8);
}
.nav-link-item{
  display:inline-flex;align-items:center;gap:6px;
  font-size:0.76rem;letter-spacing:0.02em;
  color:rgba(30,30,40,0.65);text-decoration:none;
  padding:0.55rem 1.1rem;border-radius:99px;
  transition:background 0.18s,color 0.18s;
  font-family:var(--sans);font-weight:500;
}
.nav-link-item svg{flex-shrink:0;opacity:0.6;transition:opacity 0.18s;}
.nav-link-item:hover{background:rgba(0,0,0,0.07);color:#111;}
.nav-link-item:hover svg{opacity:0.9;}
.nav-link-item.active{background:rgba(0,0,0,0.07);color:#111;}
.nav-link-item.active svg{opacity:0.9;}
.nav-divider{width:1px;height:18px;background:rgba(0,0,0,0.12);flex-shrink:0;margin:0 2px;}
.nav-resume{
  display:inline-flex;align-items:center;gap:6px;
  font-size:0.76rem;letter-spacing:0.02em;
  padding:0.55rem 1.1rem;border-radius:99px;
  background:rgba(0,0,0,0.07);color:rgba(30,30,40,0.7);
  text-decoration:none;font-family:var(--sans);font-weight:500;
  transition:background 0.18s,color 0.18s;
}
.nav-resume:hover{background:rgba(0,0,0,0.12);color:#111;}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:7rem clamp(50px,5.5vw,80px) 5rem;position:relative;overflow:hidden;cursor:none;}
.cursor-glow{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,0.03) 0%,transparent 70%);pointer-events:none;transform:translate(-50%,-50%);transition:left 0.08s ease,top 0.08s ease;z-index:0;}
.custom-cursor{position:fixed;width:10px;height:10px;border-radius:50%;background:var(--ink);pointer-events:none;transform:translate(-50%,-50%);z-index:9998;transition:transform 0.15s ease,width 0.15s,height 0.15s;}
.custom-cursor.big{width:36px;height:36px;opacity:0.15;}

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
.hero-name-wrap{text-align:center;position:relative;z-index:2;opacity:0;transform:translateY(30px) scale(0.95);}
.hero-name-wrap.enter{animation:heroNameIn 1s cubic-bezier(0.34,1.56,0.64,1) forwards;}
@keyframes heroNameIn{0%{opacity:0;transform:translateY(30px) scale(0.92);}70%{opacity:1;transform:translateY(-4px) scale(1.01);}100%{opacity:1;transform:translateY(0) scale(1);}}
.hero-text{text-align:center;max-width:700px;padding:0 24px;}
.hero-line1{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(26px,4vw,46px);color:#111827;line-height:1.2;letter-spacing:-0.02em;display:flex;flex-wrap:wrap;align-items:baseline;justify-content:center;gap:0 8px;margin:0;}
.typed-role{font-family:'DM Serif Display',serif;font-style:italic;color:#1E90FF;}
.hero-cursor{display:inline-block;width:3px;height:0.82em;background:#1E90FF;margin-left:2px;vertical-align:middle;border-radius:1px;animation:blink 1s step-start infinite;}
.hero-line2{margin-top:14px;font-size:clamp(13px,1.6vw,16px);font-weight:400;color:#6B7280;line-height:1.7;letter-spacing:-0.01em;}
.hero-line3{margin-top:18px;display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:500;color:#374151;background:rgba(255,255,255,0.85);border:1px solid rgba(0,0,0,0.08);border-radius:100px;padding:6px 16px;backdrop-filter:blur(4px);box-shadow:0 2px 8px rgba(0,0,0,0.06);}
.plane-icon{font-size:15px;display:inline-block;animation:fly 3s ease-in-out infinite;}
@keyframes fly{0%,100%{transform:translateX(0) rotate(-5deg);}50%{transform:translateX(5px) rotate(5deg);}}
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

/* ── GLASS ORB (liquid blue) ── */
.glass-orb{
  position:fixed;width:160px;height:160px;
  border-radius:47% 53% 63% 37%/38% 48% 52% 62%;
  background:
    radial-gradient(circle at 32% 28%, rgba(130,190,255,0.45) 0%, transparent 55%),
    radial-gradient(circle at 70% 70%, rgba(100,160,240,0.18) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(180,220,255,0.08) 0%, transparent 70%);
  border:1px solid rgba(120,180,255,0.3);
  box-shadow:
    inset 0 2px 4px rgba(200,230,255,0.7),
    inset 0 -2px 6px rgba(80,140,220,0.08),
    0 8px 32px rgba(100,160,255,0.08),
    0 2px 8px rgba(80,140,220,0.05);
  backdrop-filter:blur(1px) saturate(1.08);
  pointer-events:none;
  transform:translate(-50%,-50%);
  z-index:9996;
  opacity:0;
  animation:liquidBlob 10s ease-in-out infinite;
  transition:opacity 0.4s ease,left 0.14s cubic-bezier(0.25,0.46,0.45,0.94),top 0.14s cubic-bezier(0.25,0.46,0.45,0.94);
}
@keyframes liquidBlob{
  0%,100%{border-radius:47% 53% 63% 37%/38% 48% 52% 62%;}
  20%{border-radius:55% 45% 40% 60%/52% 38% 62% 48%;}
  40%{border-radius:38% 62% 57% 43%/60% 44% 56% 40%;}
  60%{border-radius:60% 40% 46% 54%/44% 58% 42% 56%;}
  80%{border-radius:42% 58% 52% 48%/55% 42% 58% 45%;}
}


/* ── SECTION COMMONS ── */
.section-label{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--pink);margin-bottom:0.85rem;}
.section-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:3.5rem;}
.section-title em{font-style:italic;color:var(--pink);}
.reveal{opacity:0;transform:translateY(24px);transition:opacity 0.7s ease,transform 0.7s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}
.reveal-delay-1{transition-delay:0.1s;}.reveal-delay-2{transition-delay:0.2s;}.reveal-delay-3{transition-delay:0.3s;}.reveal-delay-4{transition-delay:0.4s;}

/* ── WORK BENTO ── */
.work{background:#F5F5F8;padding:7rem clamp(60px,7vw,100px);}
.work-heading-wrap{margin-bottom:3rem;}
.work-title-main{font-family:'Rethink Sans',var(--sans);font-size:clamp(24px,5vw,40px);font-weight:800;color:#1a1a1a;line-height:1.3;margin:0;}
.work-title-script{font-family:var(--hand);font-size:calc(clamp(24px,5vw,40px) * 1.3);font-weight:700;color:#00a3ff;display:block;line-height:1.2;}
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

/* ── UI SHOWCASE STRIP ── */
.showcase-strip{padding:5rem 0;background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden;}
.showcase-label{display:none;}
.marquee-track{display:flex;gap:16px;width:max-content;animation:marqueeScroll 30s linear infinite;}
.marquee-track:hover{animation-play-state:paused;}
.showcase-card{width:260px;height:180px;border-radius:16px;background:var(--bg3);border:1px solid var(--border2);flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center;position:relative;transition:transform 0.3s,box-shadow 0.3s;}
.showcase-card.tall{height:240px;}
.showcase-card.wide{width:340px;}
.showcase-card.sq{width:220px;height:220px;}
.sc-hover-label{position:absolute;inset:0;background:rgba(255,255,255,0.94);backdrop-filter:blur(8px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;opacity:0;transition:opacity 0.3s ease;padding:1.5rem;}
.showcase-card:hover .sc-hover-label{opacity:1;}
.showcase-card:hover{transform:translateY(-6px) scale(1.02);box-shadow:0 20px 48px rgba(0,0,0,0.1);}
.sc-hover-phase{font-size:0.6rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--ink4);font-weight:500;}
.sc-hover-title{font-family:var(--serif);font-size:1rem;font-style:italic;color:var(--ink);text-align:center;line-height:1.3;}
.showcase-card-inner{width:90%;height:85%;background:#fff;border-radius:8px;border:1px solid var(--border);overflow:hidden;display:flex;flex-direction:column;}
.sc-bar{height:20px;background:var(--bg3);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 8px;gap:4px;}
.sc-dot{width:5px;height:5px;border-radius:50%;}
.sc-body{flex:1;padding:10px;display:flex;flex-direction:column;gap:6px;}
.sc-row{height:7px;background:var(--bg4);border-radius:2px;}
.sc-grid{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:3px;}
.sc-block{background:var(--bg4);border-radius:3px;height:32px;}
.sc-accent{background:rgba(17,17,17,0.15);border-radius:3px;}
@keyframes marqueeScroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* ── PROCESS — PENDULUM ── */
.process-section{padding:7rem clamp(50px,5.5vw,80px);background:linear-gradient(160deg,var(--bg2) 0%,var(--bg) 55%,var(--bg2) 100%);}
.process-sub{font-size:1rem;color:var(--ink3);margin-top:-1.6rem;margin-bottom:4rem;font-style:italic;}
@keyframes ball-drop{from{opacity:0;transform:translateY(-44px);}to{opacity:1;transform:translateY(0);}}
.pendulum-scene{position:relative;max-width:1100px;margin:0 auto;}
.pendulum-rail{height:5px;background:rgba(0,0,0,0.07);border-radius:3px;}
.pendulum-row{display:flex;justify-content:space-between;align-items:flex-start;}
.pendulum-unit{display:flex;flex-direction:column;align-items:center;flex:1;cursor:pointer;transition:opacity 0.3s ease;}
.pendulum-row:has(.pendulum-unit:hover) .pendulum-unit:not(:hover){opacity:0.45;}
.pendulum-arm-wrap{opacity:0;transform:translateY(-44px);}
.pendulum-arm-wrap.dropped{animation:ball-drop 480ms cubic-bezier(0.34,1.56,0.64,1) forwards;}
.pendulum-arm{transform-origin:top center;display:flex;flex-direction:column;align-items:center;}
.pendulum-string{width:1.5px;height:120px;background:linear-gradient(to bottom,rgba(0,0,0,0.14),rgba(0,0,0,0.03));}
.pendulum-bob{width:86px;height:86px;border-radius:50%;background:radial-gradient(circle at 36% 28%,rgba(255,255,255,0.92) 0%,rgba(255,255,255,0.45) 42%,var(--tint,rgba(200,205,220,0.22)) 100%);border:1.5px solid rgba(255,255,255,0.80);box-shadow:0 8px 32px rgba(0,0,0,0.10),0 2px 8px rgba(0,0,0,0.06),inset 0 2px 6px rgba(255,255,255,0.65),inset 0 -1px 0 rgba(0,0,0,0.05);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;position:relative;transition:box-shadow 0.3s ease,transform 0.35s cubic-bezier(0.34,1.56,0.64,1);}
.pendulum-bob::before{content:'';position:absolute;top:9px;left:11px;width:20px;height:13px;border-radius:50%;background:rgba(255,255,255,0.42);filter:blur(4px);pointer-events:none;}
.pendulum-unit:hover .pendulum-bob{transform:scale(1.08);box-shadow:0 0 28px rgba(180,190,210,0.5),0 10px 40px rgba(0,0,0,0.14),inset 0 2px 6px rgba(255,255,255,0.8);}
.bob-step-num{font-size:8.5px;font-weight:700;letter-spacing:0.08em;color:rgba(30,20,10,0.35);line-height:1;}
.bob-name{font-size:10.5px;font-weight:700;color:rgba(20,15,10,0.72);letter-spacing:0.01em;line-height:1;text-align:center;}
.process-info{text-align:center;margin-top:4rem;min-height:80px;}
.info-name{font-family:var(--serif);font-size:clamp(1.8rem,3vw,2.4rem);font-weight:400;color:var(--ink);margin-bottom:0.7rem;line-height:1.2;transition:opacity 0.2s ease;}
.info-desc{font-size:0.9rem;color:var(--ink3);max-width:500px;margin:0 auto;line-height:1.75;transition:opacity 0.2s ease;}

/* ── ABOUT — 2 COLUMN ── */
.about{background:#F9F9FB;padding:7rem clamp(50px,5.5vw,80px);}
.about-2col{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
.about-photo-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:420px;border-radius:20px;overflow:hidden;}
.about-photo{border-radius:12px;aspect-ratio:1/1;overflow:hidden;background:var(--bg3);display:flex;align-items:center;justify-content:center;transition:transform 0.3s ease;}
.about-photo:hover{transform:scale(1.03);}
.ap-rotated{transform:rotate(-2deg);}
.ap-rotated:hover{transform:rotate(0deg) scale(1.03);}
.ap-placeholder{font-size:2.5rem;display:flex;align-items:center;justify-content:center;width:100%;height:100%;aspect-ratio:1/1;}
.about-sublabel{font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#9CA3AF;margin-bottom:1rem;font-family:var(--sans);}
.about-heading{font-family:var(--serif);font-size:clamp(1.8rem,3vw,2.6rem);font-weight:300;color:var(--ink);line-height:1.1;margin-bottom:1.5rem;}
.about-letter{margin-bottom:1.75rem;}
.letter-greeting{font-family:var(--hand);font-size:1.2rem;color:#374151;margin-bottom:0.65rem;line-height:1.6;}
.letter-body{font-family:var(--hand);font-size:1.1rem;line-height:1.9;color:#374151;margin-bottom:0.85rem;}
.letter-sign{display:flex;flex-direction:column;margin-top:1.1rem;}
.letter-closing{font-family:var(--hand);font-size:1.1rem;color:#6B7280;}
.letter-name{font-family:var(--hand);font-size:3rem;color:#111827;line-height:1;margin-top:0.15rem;}
.about-cta{display:inline-flex;align-items:center;gap:8px;background:#111827;color:#fff;border-radius:100px;padding:12px 28px;font-size:14px;font-weight:500;letter-spacing:-0.01em;text-decoration:none;transition:all 0.2s ease;font-family:var(--sans);}
.about-cta:hover{background:#374151;}
.about-cta:hover .about-cta-arrow{transform:translateX(3px);}
.about-cta-arrow{display:inline-block;transition:transform 0.2s ease;}

/* ── PHOTO GALLERY ── */
.gallery-section{padding:7rem clamp(50px,5.5vw,80px);background:var(--bg);}
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
.shelf-section{padding:7rem clamp(50px,5.5vw,80px);background:var(--bg2);border-top:1px solid var(--border);}
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

.scrapbook-section{padding:7rem clamp(50px,5.5vw,80px) 9rem;background:var(--bg2);border-top:1px solid var(--border);overflow:hidden;}
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

/* ── SPECTRUM ── */
.spectrum-section{padding:6rem clamp(50px,5.5vw,80px);background:var(--bg3);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.spectrum-top{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:3.5rem;gap:2rem;flex-wrap:wrap;}
.spectrum-eyebrow{font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--pink);margin-bottom:0.75rem;}
.spectrum-title{font-family:var(--serif);font-size:clamp(1.8rem,3vw,2.6rem);font-weight:300;color:var(--ink);line-height:1.1;}
.spectrum-title em{font-style:italic;color:var(--pink);}
.spectrum-note{font-size:0.82rem;color:var(--ink3);max-width:260px;line-height:1.6;text-align:right;}
.spectrum-ends{display:flex;justify-content:space-between;margin-bottom:0.75rem;}
.spectrum-end-label{font-size:0.62rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink3);}
.spectrum-end-label.ai{color:var(--pink);}
.spectrum-bar{height:1px;background:linear-gradient(to right,var(--ink4),var(--pink));margin-bottom:2.5rem;}
.spectrum-dots{position:relative;height:80px;}
.s-dot{position:absolute;top:0;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:5px;cursor:default;}
.s-dot-circle{width:8px;height:8px;border-radius:50%;background:var(--ink4);border:1px solid var(--border2);transition:transform 0.2s,background 0.2s;}
.s-dot:hover .s-dot-circle{transform:scale(1.6);background:var(--pink);}
.s-dot-line{width:1px;height:14px;background:var(--border2);}
.s-dot-label{font-size:0.68rem;color:var(--ink3);white-space:nowrap;transition:color 0.2s;}
.s-dot:hover .s-dot-label{color:var(--ink);}
.s-dot.is-ai .s-dot-circle{background:var(--pink);border-color:rgba(17,17,17,0.3);}
.s-dot.is-ai .s-dot-label{color:var(--pink2);}
.spectrum-process{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow-x:auto;}
.process-label-s{font-size:0.72rem;color:var(--ink3);letter-spacing:0.06em;padding:0.35rem 0.9rem;border:1px solid var(--border2);border-radius:99px;transition:color 0.2s,border-color 0.2s,background 0.2s;white-space:nowrap;background:var(--bg);}
.process-label-s:hover{color:var(--pink);border-color:var(--pink);background:var(--pink5);}
.process-arrow-s{font-size:0.65rem;color:var(--border2);padding:0 0.4rem;flex-shrink:0;}

/* ── TESTIMONIALS ── */
.testimonials-section{padding:7rem clamp(50px,5.5vw,80px);background:linear-gradient(170deg,var(--bg) 0%,var(--bg2) 100%);}
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
.contact{background:var(--bg2);padding:7rem clamp(50px,5.5vw,80px) 4rem;border-top:1px solid var(--border);overflow:hidden;position:relative;}
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
.journey{background:var(--bg3);padding:7rem clamp(50px,5.5vw,80px);border-top:1px solid var(--border);}
.journey-inner{display:grid;grid-template-columns:1fr 2fr;gap:6rem;align-items:start;}
.journey-left{position:sticky;top:8rem;}
.timeline-item{display:grid;grid-template-columns:56px 1fr;gap:1.5rem;padding-bottom:3rem;position:relative;opacity:0;transform:translateX(-20px);transition:opacity 0.6s ease,transform 0.6s ease;}
.timeline-item.in-view{opacity:1;transform:translateX(0);}
.timeline-item:not(:last-child)::after{content:'';position:absolute;left:26px;top:12px;bottom:0;width:1px;background:var(--border2);}
.timeline-dot-wrap{display:flex;justify-content:center;padding-top:3px;}
.timeline-dot{width:10px;height:10px;border-radius:50%;background:var(--bg3);border:2px solid var(--ink4);flex-shrink:0;position:relative;z-index:1;}
.timeline-dot.active{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px rgba(17,17,17,0.3);}
.timeline-date{font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink4);margin-bottom:0.35rem;}
.timeline-role{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:0.2rem;}
.timeline-company{font-size:0.78rem;color:var(--pink);margin-bottom:0.55rem;}
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
.contact-left{flex-shrink:0;width:240px;}
.contact-right{flex:1;max-width:480px;margin-left:auto;text-align:right;}
.contact-right .contact-title{text-align:right;}
.contact-right .contact-sub{text-align:right;margin-left:auto;}
.contact-right .contact-links{margin-left:auto;}
.contact-right .contact-link{text-align:left;}
.contact-right .contact-footer{justify-content:flex-end;text-align:right;}
.contact-art{width:100%;height:280px;border-radius:20px;background:var(--bg3);border:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;}
.contact-art-icon{font-size:3rem;opacity:0.3;}
.contact-art-label{font-family:var(--hand);font-size:1rem;color:var(--ink4);text-align:center;}

@media(max-width:900px){
  nav{padding:0 1.5rem;grid-template-columns:1fr auto;}.nav-resume{display:none;}
  .work,.journey,.about,.contact,.process-section,.gallery-section,.shelf-section,.testimonials-section{padding:5rem clamp(24px,4vw,50px);}
  .spectrum-section{padding:4rem clamp(24px,4vw,50px);}
  .journey-inner{grid-template-columns:1fr;}.journey-left{position:static;}
  .float-el{display:none;}
  .about-2col{grid-template-columns:1fr;gap:2.5rem;}
  .about-photo-grid{max-width:100%;}
  .pendulum-bob{width:66px;height:66px;}.pendulum-string{height:90px;}.ball-label{font-size:10px;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:100px;}
  .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10{grid-column:auto;grid-row:auto;}
  .hero-cards{gap:8px;}.hero-card{width:76px;height:60px;}.hero-card:hover{width:130px;height:100px;}
  .contact-flex{flex-direction:column;gap:2rem;}.contact-left{width:100%;}
  .bento-work-grid{grid-template-columns:1fr 1fr;}
  .bento-work-card.wide{grid-column:span 2;}
}
@media(max-width:580px){
  .bento-work-grid{grid-template-columns:1fr;}
  .bento-work-card.wide{grid-column:span 1;}
}`;

export function HomeStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
