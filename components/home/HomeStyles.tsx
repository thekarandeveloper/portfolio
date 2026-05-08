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
html{scroll-behavior:smooth;scroll-snap-type:y proximity;scroll-padding-top:58px;}
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

/* ── NAV ── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:58px;
  padding:0 clamp(50px,5.5vw,80px);
  background:rgba(255,255,255,0.78);
  backdrop-filter:blur(32px) saturate(1.8);
  border-bottom:1px solid transparent;
  box-shadow:0 1px 0 rgba(0,0,0,0);
  transition:border-color 0.3s,box-shadow 0.3s,background 0.3s;
}
nav.scrolled{border-color:rgba(0,0,0,0.06);box-shadow:0 1px 24px rgba(0,0,0,0.05);background:rgba(255,255,255,0.88);}
.nav-logo{font-family:var(--serif);font-size:1.05rem;font-weight:400;color:var(--ink);text-decoration:none;letter-spacing:0.02em;justify-self:start;}
.nav-links{display:flex;gap:0;list-style:none;background:var(--bg3);border:1px solid var(--border);border-radius:99px;padding:3px;}
.nav-links a{font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);text-decoration:none;padding:0.38rem 1rem;border-radius:99px;transition:background 0.2s,color 0.2s;white-space:nowrap;}
.nav-links a:hover{color:var(--ink);background:var(--bg4);}
.nav-links a.active{background:var(--pink);color:#fff;}
.nav-resume{justify-self:end;display:inline-flex;align-items:center;gap:0.4rem;font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;padding:0.42rem 1rem;border-radius:99px;background:transparent;color:var(--ink3);border:1px solid var(--border2);text-decoration:none;font-family:var(--sans);transition:background 0.2s,color 0.2s,border-color 0.2s,transform 0.15s;}
.nav-resume:hover{background:var(--pink);color:#fff;border-color:var(--pink);transform:translateY(-1px);}

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
.hero-hi{
  font-family:var(--sans);font-size:clamp(0.75rem,1.3vw,0.95rem);font-weight:400;
  color:var(--ink4);letter-spacing:0.14em;text-transform:uppercase;
  margin-bottom:0.6rem;display:block;
}
/* single-line Nico Moji name */
.hero-name{
  font-family:'Nico Moji',var(--sans);
  font-weight:400;
  font-size:clamp(3.2rem,7.5vw,6.8rem);
  line-height:1;
  letter-spacing:0.01em;
  white-space:nowrap;
  display:block;
  background:linear-gradient(130deg,#0B1E3D 0%,#1076BC 50%,#34AADC 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}
.hero-role{display:flex;align-items:center;justify-content:center;gap:1rem;margin-top:1.75rem;position:relative;z-index:2;}
.role-line{width:28px;height:1px;background:var(--ink4);}
.typing-wrap{display:flex;align-items:center;gap:0;height:24px;}
.typing-text{font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink3);font-weight:500;}
.typing-cursor{width:2px;height:13px;background:var(--ink3);margin-left:2px;animation:blink 0.8s step-end infinite;}
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

/* ── WORK ── */
.work{
  background:linear-gradient(170deg,var(--bg) 0%,var(--bg2) 100%);
  padding:7rem clamp(60px,7vw,100px);
}
.work-grid{display:flex;flex-direction:column;gap:1.25rem;}
/* work tabs */
.work-tabs{
  display:flex;gap:6px;margin-bottom:2.5rem;padding:5px;
  background:rgba(255,255,255,0.7);
  backdrop-filter:blur(20px) saturate(1.4);
  border:1px solid rgba(255,255,255,0.7);
  border-radius:99px;width:fit-content;
  box-shadow:0 2px 12px rgba(0,0,0,0.05);
}
.work-tab{font-size:0.7rem;letter-spacing:0.06em;font-weight:500;padding:0.45rem 1.1rem;border-radius:99px;border:none;background:transparent;color:var(--ink3);cursor:pointer;font-family:var(--sans);transition:background 0.2s,color 0.2s;white-space:nowrap;}
.work-tab.active{background:rgba(255,255,255,0.95);color:var(--ink);box-shadow:0 1px 8px rgba(0,0,0,0.07);}
.work-tab:hover:not(.active){color:var(--ink);}
.work-cat-pane{display:none;}.work-cat-pane.active{display:block;}
.work-empty{text-align:center;padding:5rem 2rem;color:var(--ink4);font-family:var(--serif);font-style:italic;font-size:1.1rem;border:1px dashed var(--border2);border-radius:24px;}

/* ── PROJECT CARDS — 1 per row, text left, image right ── */
.project-card,.project-card-sm{
  background:rgba(255,255,255,0.78);
  backdrop-filter:blur(28px) saturate(1.6);
  border:1px solid rgba(255,255,255,0.72);
  box-shadow:0 4px 28px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9);
  border-radius:24px;
  display:flex;flex-direction:row;
  height:390px;
  text-decoration:none;color:inherit;position:relative;overflow:hidden;
  opacity:0;transform:translateY(28px);
  transition:opacity 0.7s ease,transform 0.7s ease,border-color 0.3s,box-shadow 0.35s,transform 0.35s;
}
.project-card.in-view,.project-card-sm.in-view{opacity:1;transform:translateY(0);}
.project-card:hover,.project-card-sm:hover{
  border-color:rgba(255,255,255,0.9);
  box-shadow:0 20px 60px rgba(0,0,0,0.09),inset 0 1px 0 rgba(255,255,255,1);
  transform:translateY(-3px);
}
/* info — left pane */
.proj-info{
  flex:0 0 42%;
  padding:2.4rem 2.75rem;
  display:flex;flex-direction:column;
  border-right:1px solid rgba(0,0,0,0.06);
  position:relative;z-index:1;
}
/* visual — right pane, large */
.proj-visual,.proj-visual-sm{
  flex:1;
  height:100%;width:auto;
  background:var(--bg3);
  display:flex;align-items:center;justify-content:center;overflow:hidden;
  border-radius:0 24px 24px 0;
  border:none;
  position:relative;
  transition:background 0.3s;
}
/* inner mock content zooms on card hover */
.proj-visual>*,.proj-visual-sm>*{transition:transform 0.55s cubic-bezier(0.34,1.2,0.64,1);}
.project-card:hover .proj-visual>*,.project-card:hover .proj-visual-sm>*,
.project-card-sm:hover .proj-visual>*,.project-card-sm:hover .proj-visual-sm>*{transform:scale(1.06);}

.proj-num{position:absolute;bottom:1rem;right:1.5rem;font-family:var(--serif);font-size:5rem;font-weight:300;color:rgba(0,0,0,0.04);line-height:1;pointer-events:none;user-select:none;z-index:0;}
.proj-company{font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink4);margin-bottom:0.5rem;font-weight:500;}
.proj-title,.proj-title-sm{font-family:var(--serif);font-size:clamp(1.15rem,1.6vw,1.5rem);font-weight:400;line-height:1.25;color:var(--ink);margin-bottom:0.85rem;}
.proj-tag{font-size:0.58rem;letter-spacing:0.04em;padding:0.2rem 0.65rem;border:1px solid var(--border2);color:var(--ink4);border-radius:99px;background:rgba(255,255,255,0.6);}
.proj-tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:auto;}
.proj-cta{display:inline-flex;align-items:center;gap:0.4rem;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink3);border-bottom:1px solid var(--border);padding-bottom:2px;transition:gap 0.2s,color 0.2s,border-color 0.2s;margin-top:1.25rem;}
.project-card:hover .proj-cta,.project-card-sm:hover .proj-cta{gap:0.65rem;color:var(--ink);border-color:var(--ink);}

/* mock UI elements inside visuals */
.mock-screen{width:82%;height:80%;background:rgba(255,255,255,0.9);border-radius:10px;border:1px solid var(--border);overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.08);}
.mock-bar{height:24px;background:var(--bg3);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 10px;gap:5px;}
.mock-dot{width:6px;height:6px;border-radius:50%;}
.mock-body{padding:12px;display:flex;flex-direction:column;gap:7px;}
.mock-row{height:8px;background:var(--bg4);border-radius:2px;}
.mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px;}
.mock-card-sm2{background:var(--bg4);border-radius:4px;height:40px;}
.mock-phone{background:#fff;border-radius:18px;border:1px solid var(--border2);overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.1);}
.mock-phone-bar{height:18px;background:var(--bg3);display:flex;align-items:center;justify-content:center;}
.mock-phone-notch{width:24px;height:4px;background:var(--border2);border-radius:3px;}
.mock-phone-body{padding:7px;display:flex;flex-direction:column;gap:5px;}

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

/* ── PROCESS ── */
.process-section{padding:7rem clamp(50px,5.5vw,80px);background:linear-gradient(170deg,var(--bg2) 0%,var(--bg) 100%);}
.process-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:1rem;}
.process-card{
  background:rgba(255,255,255,0.72);
  backdrop-filter:blur(24px) saturate(1.5);
  border:1px solid rgba(255,255,255,0.75);
  box-shadow:0 4px 24px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9);
  border-radius:24px;padding:0;height:280px;position:relative;cursor:pointer;perspective:1000px;opacity:0;transform:translateY(30px);transition:opacity 0.6s ease,transform 0.6s ease;
}
.process-card.in-view{opacity:1;transform:translateY(0);}
.process-card-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);}
.process-card.flipped .process-card-inner{transform:rotateY(180deg);}
.process-front,.process-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:24px;padding:2rem;}
.process-front{display:flex;flex-direction:column;justify-content:space-between;background:rgba(255,255,255,0.75);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.7);}
.process-back{background:linear-gradient(135deg,rgba(245,245,245,0.9),rgba(255,255,255,0.95));backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.7);transform:rotateY(180deg);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;}
.process-step-num{font-family:var(--serif);font-size:3.5rem;font-weight:300;color:rgba(26,18,16,0.06);line-height:1;margin-bottom:0.5rem;}
.process-step-name{font-family:var(--serif);font-size:1.4rem;font-weight:400;color:var(--ink);margin-bottom:0.5rem;}
.process-step-desc{font-size:0.82rem;color:var(--ink3);line-height:1.6;}
.process-flip-hint{font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink4);display:flex;align-items:center;gap:0.4rem;margin-top:1rem;}
.process-tools-label{font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);margin-bottom:0.75rem;}
.process-tools{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1rem;}
.process-tool-pill{font-size:0.7rem;padding:0.25rem 0.65rem;border:1px solid rgba(17,17,17,0.2);border-radius:99px;color:var(--pink);background:rgba(17,17,17,0.06);}
.process-back-desc{font-size:0.8rem;color:var(--ink3);line-height:1.65;}
.process-back-num{font-family:var(--serif);font-size:5rem;font-weight:300;color:rgba(17,17,17,0.06);position:absolute;bottom:-0.5rem;right:1rem;line-height:1;}
.process-connector{display:flex;align-items:center;justify-content:center;padding:0.5rem 0;}
.process-arrow-line{width:2px;height:32px;background:linear-gradient(to bottom,var(--pink),transparent);}

/* ── ABOUT BENTO ── */
.about{background:var(--bg2);padding:7rem clamp(50px,5.5vw,80px);}
.about-header{margin-bottom:3rem;}
.about-intro{font-family:var(--serif);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:300;line-height:1.2;color:var(--ink);max-width:700px;}
.about-intro em{font-style:italic;color:var(--pink);}
/* 5-card bento — photo 40% width, 3 rows */
.bento{
  display:grid;
  grid-template-columns:2fr 1.5fr 1.5fr;
  grid-template-rows:210px 170px 130px;
  gap:12px;
}
.bento-card{
  background:rgba(255,255,255,0.76);
  backdrop-filter:blur(24px) saturate(1.5);
  border:1px solid rgba(255,255,255,0.72);
  box-shadow:0 4px 20px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9);
  border-radius:18px;overflow:hidden;
  display:flex;flex-direction:column;justify-content:flex-end;padding:1.25rem;position:relative;
  transition:transform 0.3s,border-color 0.25s,box-shadow 0.3s;
}
.bento-card:hover{transform:translateY(-3px);border-color:rgba(255,255,255,0.9);box-shadow:0 12px 36px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,1);}
/* col 1 — tall portrait spanning all 3 rows = 40% width */
.b-photo{grid-column:1/2;grid-row:1/4;padding:0;justify-content:stretch;}
/* col 2-3 row 1 — wide bio */
.b-hello{grid-column:2/4;grid-row:1/2;background:var(--ink);}
/* col 2 row 2 — sticky note */
.b-note:not(.b-note2){grid-column:2/3;grid-row:2/3;}
/* col 3 row 2 — café doodle */
.b-doodle{grid-column:3/4;grid-row:2/3;align-items:center;justify-content:center;background:var(--bg3);}
/* col 2-3 row 3 — currently, full width */
.b-currently{grid-column:2/4;grid-row:3/4;background:var(--pink5);border:1px solid rgba(0,0,0,0.06);flex-direction:row;align-items:center;gap:1.75rem;padding:1.25rem 1.5rem;}
/* hide all other cards */
.b-coffee,.b-hp,.b-design,.b-camera,.b-music,.b-spidey,.b-travel,.b-shop,.b-note2,.b-travel2,.b-chaos{display:none;}
.bento-tag{font-size:0.6rem;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:0.35rem;}
.bento-title{font-family:var(--serif);font-weight:400;line-height:1.2;color:var(--ink);}
.bento-sub{font-size:0.74rem;color:var(--ink3);margin-top:0.2rem;line-height:1.4;}
.b-photo .photo-placeholder{width:100%;height:100%;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-style:italic;font-size:0.85rem;color:var(--ink4);text-align:center;padding:1rem;}
.b-photo .photo-overlay{position:absolute;bottom:0;left:0;right:0;padding:0.85rem 1rem;background:linear-gradient(transparent,rgba(26,18,16,0.45));}
.b-photo .photo-name{font-family:var(--serif);font-size:1rem;font-weight:400;color:#fff;}
.b-photo .photo-role{font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.55);}
.b-hello .bento-tag{color:rgba(255,255,255,0.35);}
.b-hello .bento-title{font-size:1.15rem;color:#fff;}
.b-hello .bento-sub{color:rgba(255,255,255,0.4);}
.b-currently .curr-label2{font-size:0.58rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);margin-bottom:0.35rem;}
.b-currently .curr-title2{font-family:var(--serif);font-size:1.15rem;font-weight:400;color:var(--ink);line-height:1.2;}
.b-currently .current-divider{width:1px;height:48px;background:rgba(17,17,17,0.12);flex-shrink:0;}
.b-currently .curr-items{display:flex;flex-direction:column;gap:0.35rem;}
.b-currently .curr-item{font-size:0.74rem;color:var(--ink3);display:flex;align-items:center;gap:0.45rem;}
.curr-dot2{width:4px;height:4px;border-radius:50%;background:var(--pink);flex-shrink:0;}
.doodle-wrap{text-align:center;}
.doodle-caption{font-family:var(--serif);font-style:italic;font-size:0.8rem;color:var(--ink3);}

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
.proj-visual,
.proj-visual-sm,
.hero-blob,
.hero-blob2,
.contact-glow,
.spectrum-title,
.about-intro { will-change: translate; }

/* Smooth parallax — no janky jumps */
.hero-blob, .hero-blob2 {
  transition: none;
}

/* Section titles get a gentle depth feel */
.work .section-title,
.process-section .section-title,
.gallery-section .section-title,
.testimonials-section .section-title,
.about .about-intro {
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

/* bento sticky note */
.b-note{background:#FFFDE7;border:1px solid rgba(200,180,0,0.12);}
.b-note:hover{transform:translateY(-3px) rotate(0deg)!important;box-shadow:0 10px 28px rgba(0,0,0,0.08);}
.note-text{font-family:var(--hand);font-size:1.05rem;color:rgba(60,50,0,0.8);line-height:1.4;margin-bottom:0.5rem;}
.note-pin{font-size:0.75rem;color:rgba(60,50,0,0.35);letter-spacing:0.04em;}

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
  .project-card,.project-card-sm{flex-direction:column;height:auto;}
  .proj-info{flex:none;padding:1.75rem;border-right:none;border-bottom:1px solid rgba(0,0,0,0.06);}
  .proj-visual,.proj-visual-sm{flex:none;width:100%;height:220px;border-radius:0 0 24px 24px;}
  .journey-inner{grid-template-columns:1fr;}.journey-left{position:static;}
  .float-el{display:none;}
  .bento{grid-template-columns:1fr 1fr;grid-template-rows:180px 140px auto;}
  .b-photo{grid-column:1/2;grid-row:1/3;}
  .b-hello{grid-column:2/3;grid-row:1/2;}
  .b-note:not(.b-note2){grid-column:2/3;grid-row:2/3;}
  .b-doodle{grid-column:1/2;grid-row:3/4;}
  .b-currently{grid-column:2/3;grid-row:3/4;flex-direction:column;align-items:flex-start;gap:0.75rem;}
  .b-currently .current-divider{display:none;}
  .process-grid{grid-template-columns:1fr 1fr;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:100px;}
  .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10{grid-column:auto;grid-row:auto;}
  .hero-cards{gap:8px;}.hero-card{width:76px;height:60px;}.hero-card:hover{width:130px;height:100px;}
  .contact-flex{flex-direction:column;gap:2rem;}.contact-left{width:100%;}
  .work-tabs{flex-wrap:wrap;}
}`;

export function HomeStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
