const css = `:root {
  --bg:#FDFAF8; --bg2:#F9F5F2; --bg3:#F3EDE8; --bg4:#EDE5DE; --surface:#E8DDD6;
  --border:rgba(180,140,130,0.15); --border2:rgba(180,140,130,0.28);
  --ink:#1A1210; --ink2:#3D2E28; --ink3:#7A6058; --ink4:#B09A90;
  --pink:#E8547A; --pink2:#F07A98; --pink3:rgba(232,84,122,0.08); --pink5:#FFF0F3;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'DM Sans',sans-serif;
  --hand:'Caveat',cursive;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);font-weight:300;line-height:1.6;overflow-x:hidden;}

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
  width:26px;height:26px;border-radius:50%;background:#E8547A;
  display:flex;align-items:center;justify-content:center;
  font-size:0.6rem;color:#fff;font-weight:600;font-family:'DM Sans',sans-serif;
}
.figma-tb-btn{
  font-size:0.68rem;color:rgba(255,255,255,0.4);
  padding:0.25rem 0.6rem;border-radius:4px;
  font-family:'DM Sans',sans-serif;letter-spacing:0.03em;
}
.figma-share-btn{
  font-size:0.68rem;background:#E8547A;color:#fff;
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
.figma-layer.selected{background:rgba(232,84,122,0.15);}
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
  border:2px solid #E8547A;
  border-radius:2px;
  position:relative;
  background:#FDFAF8;
  transition:none;
  display:flex;align-items:center;justify-content:center;
  overflow:hidden;
}
/* Frame label */
.figma-frame-tag{
  position:absolute;top:-22px;left:0;
  font-size:0.65rem;font-family:'DM Sans',sans-serif;
  color:#E8547A;letter-spacing:0.04em;font-weight:500;
  opacity:0;white-space:nowrap;
  transition:opacity 0.3s ease;
}
/* Corner handles */
.f-handle{
  position:absolute;width:8px;height:8px;
  background:#fff;border:1.5px solid #E8547A;border-radius:1px;
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
.fi-name .fi-accent{color:#E8547A;}
.fi-name-cursor{
  display:inline-block;width:3px;height:0.8em;
  background:#E8547A;vertical-align:middle;
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
  background:#E8547A;color:#fff;
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
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:58px;padding:0 2.5rem;background:rgba(253,250,248,0.92);backdrop-filter:blur(20px);border-bottom:1px solid transparent;transition:border-color 0.3s;}
nav.scrolled{border-color:var(--border);}
.nav-logo{font-family:var(--serif);font-size:1.05rem;font-weight:400;color:var(--ink);text-decoration:none;letter-spacing:0.02em;justify-self:start;}
.nav-links{display:flex;gap:0;list-style:none;background:var(--bg3);border:1px solid var(--border);border-radius:99px;padding:3px;}
.nav-links a{font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);text-decoration:none;padding:0.38rem 1rem;border-radius:99px;transition:background 0.2s,color 0.2s;white-space:nowrap;}
.nav-links a:hover{color:var(--ink);background:var(--bg4);}
.nav-links a.active{background:var(--pink);color:#fff;}
.nav-resume{justify-self:end;display:inline-flex;align-items:center;gap:0.4rem;font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;padding:0.42rem 1rem;border-radius:99px;background:transparent;color:var(--ink3);border:1px solid var(--border2);text-decoration:none;font-family:var(--sans);transition:background 0.2s,color 0.2s,border-color 0.2s,transform 0.15s;}
.nav-resume:hover{background:var(--pink);color:#fff;border-color:var(--pink);transform:translateY(-1px);}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6rem 2rem 4rem;position:relative;overflow:hidden;cursor:none;}
/* cursor glow */
.cursor-glow{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(232,84,122,0.1) 0%,rgba(232,84,122,0.04) 40%,transparent 70%);pointer-events:none;transform:translate(-50%,-50%);transition:left 0.08s ease,top 0.08s ease;z-index:0;}
.custom-cursor{position:fixed;width:12px;height:12px;border-radius:50%;background:var(--pink);pointer-events:none;transform:translate(-50%,-50%);z-index:9998;mix-blend-mode:multiply;transition:transform 0.15s ease,width 0.15s,height 0.15s;}
.custom-cursor.big{width:40px;height:40px;opacity:0.4;}

.hero-name-wrap{text-align:center;position:relative;z-index:2;opacity:0;transform:translateY(30px) scale(0.95);}
.hero-name-wrap.enter{animation:heroNameIn 1s cubic-bezier(0.34,1.56,0.64,1) forwards;}
@keyframes heroNameIn{
  0%  {opacity:0;transform:translateY(30px) scale(0.92);}
  70% {opacity:1;transform:translateY(-5px) scale(1.02);}
  100%{opacity:1;transform:translateY(0) scale(1);}
}
.hero-name{font-family:var(--hand);font-size:clamp(5rem,14vw,11rem);font-weight:700;color:var(--ink);line-height:0.88;letter-spacing:-0.01em;display:block;}
.hero-name .name-accent{color:var(--pink);}
.hero-role{display:flex;align-items:center;justify-content:center;gap:1rem;margin-top:1.25rem;}
.role-line{width:36px;height:1px;background:var(--ink4);}

/* typing animation */
.typing-wrap{display:flex;align-items:center;gap:0;height:24px;}
.typing-text{font-size:0.78rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--pink);font-weight:500;}
.typing-cursor{width:2px;height:16px;background:var(--pink);margin-left:2px;animation:blink 0.8s step-end infinite;}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}

.hero-tagline{font-family:var(--serif);font-size:clamp(1rem,2vw,1.4rem);font-weight:300;font-style:italic;color:var(--ink3);text-align:center;margin-top:1.5rem;max-width:480px;line-height:1.5;opacity:0;transform:translateY(16px);transition:opacity 0.7s ease,transform 0.7s ease;position:relative;z-index:2;}
.hero-tagline.enter{opacity:1;transform:translateY(0);}

/* floating elements — staggered entrance, bigger sizes */
.float-el{
  position:absolute;
  opacity:0;
  /* entrance animation handled by JS class toggle, not CSS animation-delay */
  /* gentle float runs after entrance */
}
.float-el.entered{
  animation:gentleFloat 6s ease-in-out infinite;
}

/* Entrance keyframe — spring pop from below */
@keyframes heroCardIn{
  0%  {opacity:0;transform:translateY(40px) scale(0.88);}
  60% {opacity:1;transform:translateY(-8px) scale(1.03);}
  80% {transform:translateY(4px) scale(0.99);}
  100%{opacity:1;transform:translateY(0) scale(1);}
}

/* POLAROID 1 — main photo, bigger */
.float-photo{top:11%;left:4%;}
.polaroid{
  background:#fff;padding:10px 10px 32px;
  border:1px solid var(--border2);
  box-shadow:0 8px 32px rgba(26,18,16,0.10);
  transform:rotate(-5deg);width:160px;
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
}
.polaroid:hover{transform:rotate(-1deg) scale(1.05);box-shadow:0 16px 40px rgba(232,84,122,0.15);}
.polaroid-img{width:100%;aspect-ratio:1;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:0.62rem;color:var(--ink4);text-align:center;overflow:hidden;}
.polaroid-caption{text-align:center;font-family:var(--hand);font-size:0.92rem;color:var(--ink3);margin-top:7px;}

/* POLAROID 2 — extra photo card, bottom right area */
.float-photo2{bottom:18%;right:3%;}
.polaroid2{
  background:#fff;padding:10px 10px 32px;
  border:1px solid var(--border2);
  box-shadow:0 8px 32px rgba(26,18,16,0.10);
  transform:rotate(6deg);width:148px;
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
}
.polaroid2:hover{transform:rotate(2deg) scale(1.05);box-shadow:0 16px 40px rgba(232,84,122,0.15);}
.polaroid2-img{width:100%;aspect-ratio:1;background:#EDE5DE;display:flex;align-items:center;justify-content:center;font-size:0.62rem;color:var(--ink4);text-align:center;overflow:hidden;}
.polaroid2-caption{text-align:center;font-family:var(--hand);font-size:0.88rem;color:var(--ink3);margin-top:7px;}

/* STICKY NOTE — bigger */
.float-sticky{top:9%;right:5%;}
.sticky{
  background:#FFFDE7;padding:16px 18px;width:180px;
  border:1px solid rgba(255,200,0,0.15);
  box-shadow:0 6px 20px rgba(26,18,16,0.08);
  transform:rotate(3deg);transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
  position:relative;
}
.sticky::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:rgba(255,200,0,0.3);}
.sticky:hover{transform:rotate(1deg) scale(1.04);}
.sticky-label{font-size:0.62rem;text-transform:uppercase;letter-spacing:0.1em;color:rgba(100,80,0,0.4);margin-bottom:5px;}
.sticky-text{font-family:var(--hand);font-size:1rem;color:rgba(80,60,0,0.75);line-height:1.5;}

/* COFFEE TAG — bigger */
.float-coffee{bottom:20%;left:3%;}
.coffee-tag{
  background:var(--pink);color:#fff;
  padding:10px 18px;border-radius:99px;
  display:flex;align-items:center;gap:8px;
  box-shadow:0 6px 24px rgba(232,84,122,0.3);
  transform:rotate(-2deg);white-space:nowrap;
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
}
.coffee-tag:hover{transform:rotate(0deg) scale(1.06);box-shadow:0 10px 32px rgba(232,84,122,0.4);}
.coffee-tag span{font-size:1.1rem;}
.coffee-tag p{font-size:0.82rem;letter-spacing:0.05em;font-weight:500;}

/* SPIDEY BADGE — bigger */
.float-spidey{bottom:22%;right:4%;}
.spidey-badge{
  width:88px;height:88px;background:#C0392B;border-radius:50%;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  box-shadow:0 6px 24px rgba(192,57,43,0.35);transform:rotate(8deg);
  border:2px solid rgba(255,100,100,0.2);
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
}
.spidey-badge:hover{transform:rotate(0deg) scale(1.1);box-shadow:0 12px 36px rgba(192,57,43,0.4);}
.spidey-badge .s-icon{font-size:2rem;line-height:1;}
.spidey-badge .s-text{font-family:var(--hand);font-size:0.6rem;color:rgba(255,200,200,0.8);margin-top:2px;}

/* CURRENTLY TAG — bigger */
.float-currently{top:46%;left:1.5%;}
.currently-tag{
  background:#fff;border:1px solid var(--border2);border-radius:12px;
  padding:12px 16px;width:162px;
  box-shadow:0 6px 20px rgba(26,18,16,0.08);
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
}
.currently-tag:hover{transform:scale(1.05);box-shadow:0 12px 32px rgba(232,84,122,0.1);}
.curr-dot-live{width:7px;height:7px;border-radius:50%;background:#4CAF50;display:inline-block;margin-right:5px;animation:pulse-green 1.5s ease-in-out infinite;}
.curr-label-t{font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink4);margin-bottom:5px;display:flex;align-items:center;}
.curr-val{font-family:var(--hand);font-size:1.05rem;color:var(--ink);line-height:1.3;}

/* HP CHIP — bigger */
.float-hp{bottom:26%;left:18%;}
.hp-chip{
  background:#fff;border:1px solid rgba(155,89,182,0.25);border-radius:8px;
  padding:9px 14px;display:flex;align-items:center;gap:6px;
  box-shadow:0 4px 16px rgba(26,18,16,0.07);
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
}
.hp-chip:hover{transform:scale(1.07);box-shadow:0 8px 24px rgba(155,89,182,0.15);}
.hp-chip .hp-icon{font-size:1.1rem;}
.hp-chip .hp-text{font-family:var(--hand);font-size:1rem;color:#9b59b6;}

.hero-scroll-hint{position:absolute;bottom:2.5rem;display:flex;align-items:center;gap:0.75rem;font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink4);opacity:0;transition:opacity 0.6s ease;z-index:2;}
.hero-scroll-hint.show{opacity:1;}
.scroll-line{width:36px;height:1px;background:var(--ink4);position:relative;overflow:hidden;}
.scroll-line::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:var(--pink);animation:slideLine 2s 2s infinite;}

/* ── SECTION COMMONS ── */
.section-label{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--pink);margin-bottom:0.85rem;}
.section-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:3.5rem;}
.section-title em{font-style:italic;color:var(--pink);}
.reveal{opacity:0;transform:translateY(24px);transition:opacity 0.7s ease,transform 0.7s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}
.reveal-delay-1{transition-delay:0.1s;}.reveal-delay-2{transition-delay:0.2s;}.reveal-delay-3{transition-delay:0.3s;}.reveal-delay-4{transition-delay:0.4s;}

/* ── WORK ── */
.work{background:var(--bg);padding:7rem 4rem;}
.work-grid{display:flex;flex-direction:column;gap:1.25rem;}
.project-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:2.75rem 3rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;text-decoration:none;color:inherit;position:relative;overflow:hidden;opacity:0;transform:translateY(40px);transition:opacity 0.7s ease,transform 0.7s ease,border-color 0.35s,box-shadow 0.35s;}
.project-card.in-view{opacity:1;transform:translateY(0);}
.project-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(to right,var(--pink),var(--pink2));transform:scaleX(0);transform-origin:left;transition:transform 0.4s ease;}
.project-card:hover{border-color:rgba(232,84,122,0.2);box-shadow:0 20px 60px rgba(232,84,122,0.07);}
.project-card:hover::before{transform:scaleX(1);}
.small-cards-row{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
.project-card-sm{background:#fff;border:1px solid var(--border);border-radius:20px;padding:2rem 2.25rem;display:flex;flex-direction:column;text-decoration:none;color:inherit;position:relative;overflow:hidden;opacity:0;transform:translateY(40px);transition:opacity 0.7s ease,transform 0.7s ease,border-color 0.3s,box-shadow 0.3s;}
.project-card-sm.in-view{opacity:1;transform:translateY(0);}
.project-card-sm::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(to right,var(--pink),var(--pink2));transform:scaleX(0);transform-origin:left;transition:transform 0.4s ease;}
.project-card-sm:hover{border-color:rgba(232,84,122,0.2);box-shadow:0 16px 48px rgba(232,84,122,0.07);}
.project-card-sm:hover::before{transform:scaleX(1);}
.proj-visual-sm{width:100%;height:140px;background:var(--bg3);border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--border);margin-bottom:1.4rem;}
.proj-num{position:absolute;top:1.75rem;right:2rem;font-family:var(--serif);font-size:4.5rem;font-weight:300;color:rgba(26,18,16,0.04);line-height:1;pointer-events:none;user-select:none;}
.proj-company{font-size:0.65rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--pink);margin-bottom:0.6rem;}
.proj-title{font-family:var(--serif);font-size:clamp(1.3rem,2.2vw,1.9rem);font-weight:400;line-height:1.2;color:var(--ink);margin-bottom:0.85rem;}
.proj-title-sm{font-family:var(--serif);font-size:1.15rem;font-weight:400;line-height:1.2;color:var(--ink);margin-bottom:0.5rem;}
.proj-desc{font-size:0.85rem;color:var(--ink3);line-height:1.75;margin-bottom:1.25rem;max-width:400px;}
.proj-desc-sm{font-size:0.8rem;color:var(--ink3);line-height:1.7;margin-bottom:1rem;}
.proj-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1.5rem;}
.proj-tag{font-size:0.65rem;letter-spacing:0.04em;padding:0.25rem 0.75rem;border:1px solid var(--border2);color:var(--ink3);border-radius:99px;background:var(--bg2);}
.proj-metrics{display:flex;gap:2rem;margin-bottom:1.5rem;}
.metric-val{font-family:var(--serif);font-size:1.8rem;font-weight:500;color:var(--pink);line-height:1;margin-bottom:0.15rem;}
.metric-label{font-size:0.7rem;color:var(--ink4);line-height:1.4;}
.proj-cta{display:inline-flex;align-items:center;gap:0.4rem;font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink);border-bottom:1px solid var(--border2);padding-bottom:2px;transition:gap 0.2s,color 0.2s,border-color 0.2s;margin-top:auto;}
.project-card:hover .proj-cta,.project-card-sm:hover .proj-cta{gap:0.75rem;color:var(--pink);border-color:var(--pink);}
.proj-visual{background:var(--bg3);border-radius:12px;height:268px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--border);}
.mock-screen{width:88%;height:84%;background:#fff;border-radius:8px;border:1px solid var(--border);overflow:hidden;box-shadow:0 6px 24px rgba(26,18,16,0.06);}
.mock-bar{height:24px;background:var(--bg3);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 10px;gap:5px;}
.mock-dot{width:6px;height:6px;border-radius:50%;}
.mock-body{padding:12px;display:flex;flex-direction:column;gap:7px;}
.mock-row{height:8px;background:var(--bg4);border-radius:2px;}
.mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px;}
.mock-card-sm2{background:var(--bg4);border-radius:4px;height:40px;}
.mock-phone{background:#fff;border-radius:16px;border:1px solid var(--border2);overflow:hidden;box-shadow:0 6px 24px rgba(26,18,16,0.07);}
.mock-phone-bar{height:18px;background:var(--bg3);display:flex;align-items:center;justify-content:center;}
.mock-phone-notch{width:24px;height:4px;background:var(--border2);border-radius:3px;}
.mock-phone-body{padding:7px;display:flex;flex-direction:column;gap:5px;}

/* ── UI SHOWCASE STRIP ── */
.showcase-strip{padding:5rem 0;background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden;}
.showcase-label{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--pink);text-align:center;margin-bottom:2rem;}
.marquee-track{display:flex;gap:16px;width:max-content;animation:marqueeScroll 30s linear infinite;}
.marquee-track:hover{animation-play-state:paused;}
.showcase-card{width:280px;height:180px;border-radius:14px;background:var(--bg3);border:1px solid var(--border2);flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center;position:relative;transition:transform 0.3s,box-shadow 0.3s;}
.showcase-card:hover{transform:translateY(-6px) scale(1.02);box-shadow:0 16px 40px rgba(232,84,122,0.1);}
.showcase-card-inner{width:90%;height:85%;background:#fff;border-radius:8px;border:1px solid var(--border);overflow:hidden;display:flex;flex-direction:column;}
.sc-bar{height:20px;background:var(--bg3);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 8px;gap:4px;}
.sc-dot{width:5px;height:5px;border-radius:50%;}
.sc-body{flex:1;padding:10px;display:flex;flex-direction:column;gap:6px;}
.sc-row{height:7px;background:var(--bg4);border-radius:2px;}
.sc-grid{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:3px;}
.sc-block{background:var(--bg4);border-radius:3px;height:32px;}
.sc-accent{background:rgba(232,84,122,0.15);border-radius:3px;}
@keyframes marqueeScroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* ── PROCESS ── */
.process-section{padding:7rem 4rem;background:var(--bg);}
.process-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:1rem;}
.process-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:0;height:280px;position:relative;cursor:pointer;perspective:1000px;opacity:0;transform:translateY(30px);transition:opacity 0.6s ease,transform 0.6s ease;}
.process-card.in-view{opacity:1;transform:translateY(0);}
.process-card-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);}
.process-card.flipped .process-card-inner{transform:rotateY(180deg);}
.process-front,.process-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:20px;padding:2rem;}
.process-front{display:flex;flex-direction:column;justify-content:space-between;background:#fff;border:1px solid var(--border);}
.process-back{background:linear-gradient(135deg,var(--pink5),#fff);border:1px solid rgba(232,84,122,0.15);transform:rotateY(180deg);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;}
.process-step-num{font-family:var(--serif);font-size:3.5rem;font-weight:300;color:rgba(26,18,16,0.06);line-height:1;margin-bottom:0.5rem;}
.process-step-name{font-family:var(--serif);font-size:1.4rem;font-weight:400;color:var(--ink);margin-bottom:0.5rem;}
.process-step-desc{font-size:0.82rem;color:var(--ink3);line-height:1.6;}
.process-flip-hint{font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink4);display:flex;align-items:center;gap:0.4rem;margin-top:1rem;}
.process-tools-label{font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);margin-bottom:0.75rem;}
.process-tools{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1rem;}
.process-tool-pill{font-size:0.7rem;padding:0.25rem 0.65rem;border:1px solid rgba(232,84,122,0.2);border-radius:99px;color:var(--pink);background:rgba(232,84,122,0.06);}
.process-back-desc{font-size:0.8rem;color:var(--ink3);line-height:1.65;}
.process-back-num{font-family:var(--serif);font-size:5rem;font-weight:300;color:rgba(232,84,122,0.06);position:absolute;bottom:-0.5rem;right:1rem;line-height:1;}
.process-connector{display:flex;align-items:center;justify-content:center;padding:0.5rem 0;}
.process-arrow-line{width:2px;height:32px;background:linear-gradient(to bottom,var(--pink),transparent);}

/* ── ABOUT BENTO ── */
.about{background:var(--bg2);padding:7rem 4rem;}
.about-header{margin-bottom:3rem;}
.about-intro{font-family:var(--serif);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:300;line-height:1.2;color:var(--ink);max-width:700px;}
.about-intro em{font-style:italic;color:var(--pink);}
.bento{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:80px;gap:10px;}
.bento-card{background:#fff;border:1px solid var(--border);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:1.1rem;position:relative;transition:transform 0.25s,border-color 0.2s,box-shadow 0.2s;}
.bento-card:hover{transform:translateY(-3px);border-color:rgba(232,84,122,0.2);box-shadow:0 8px 24px rgba(232,84,122,0.07);}
.b-photo{grid-column:1/5;grid-row:1/5;padding:0;justify-content:stretch;}
.b-hello{grid-column:5/9;grid-row:1/3;background:var(--ink);}
.b-coffee{grid-column:9/11;grid-row:1/2;background:var(--bg2);}
.b-hp{grid-column:11/13;grid-row:1/2;background:#1A0D2E;}
.b-design{grid-column:9/13;grid-row:2/3;background:linear-gradient(135deg,var(--pink),var(--pink2));}
.b-camera{grid-column:5/7;grid-row:3/5;background:var(--bg2);}
.b-music{grid-column:7/9;grid-row:3/4;background:var(--pink5);}
.b-spidey{grid-column:9/11;grid-row:3/5;background:#3D0A0A;}
.b-travel{grid-column:11/13;grid-row:3/4;background:var(--bg2);}
.b-chaos{grid-column:7/9;grid-row:4/5;background:var(--bg3);}
.b-travel2{grid-column:11/13;grid-row:4/5;}
.b-currently{grid-column:1/7;grid-row:5/7;background:var(--pink5);border:1px solid rgba(232,84,122,0.12);flex-direction:row;align-items:center;justify-content:flex-start;gap:2rem;padding:1.5rem 1.75rem;}
.b-doodle{grid-column:7/10;grid-row:5/7;align-items:center;justify-content:center;padding:1.5rem;}
.b-shop{grid-column:10/13;grid-row:5/6;background:var(--bg2);}
.b-pixel{grid-column:10/13;grid-row:6/7;background:var(--ink);}
.bento-tag{font-size:0.6rem;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:0.35rem;}
.bento-title{font-family:var(--serif);font-weight:400;line-height:1.2;color:var(--ink);}
.bento-sub{font-size:0.74rem;color:var(--ink3);margin-top:0.2rem;line-height:1.4;}
.b-photo .photo-placeholder{width:100%;height:100%;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-style:italic;font-size:0.85rem;color:var(--ink4);text-align:center;padding:1rem;}
.b-photo .photo-overlay{position:absolute;bottom:0;left:0;right:0;padding:0.85rem 1rem;background:linear-gradient(transparent,rgba(26,18,16,0.45));}
.b-photo .photo-name{font-family:var(--serif);font-size:1rem;font-weight:400;color:#fff;}
.b-photo .photo-role{font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.55);}
.b-hello .bento-tag{color:var(--pink2);}
.b-hello .bento-title{font-size:1.1rem;color:#fff;}
.b-hello .bento-sub{color:rgba(255,255,255,0.4);}
.b-hp .bento-tag{color:#9b59b6;}.b-hp .hp-ic{font-size:1.3rem;position:absolute;top:0.85rem;right:0.85rem;}
.b-design .bento-tag{color:rgba(255,255,255,0.65);}.b-design .bento-title{font-size:1rem;color:#fff;}
.b-camera .cam-icon{font-size:1.8rem;margin-bottom:0.4rem;}
.music-bars{display:flex;align-items:flex-end;gap:3px;height:26px;margin-bottom:0.65rem;}
.music-bar{width:4px;background:var(--pink);border-radius:2px;animation:musicPulse 1.2s ease-in-out infinite alternate;}
.music-bar:nth-child(2){animation-delay:0.2s;}.music-bar:nth-child(3){animation-delay:0.4s;}.music-bar:nth-child(4){animation-delay:0.1s;}.music-bar:nth-child(5){animation-delay:0.3s;}
.b-music .bento-tag{color:var(--pink);}
.b-spidey .bento-tag{color:rgba(255,150,150,0.6);}.b-spidey .bento-title{font-size:0.95rem;color:#fff;}.b-spidey .spider-web{position:absolute;top:0.75rem;right:0.75rem;font-size:1.4rem;opacity:0.35;}
.b-currently .curr-label2{font-size:0.62rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);margin-bottom:0.4rem;}
.b-currently .curr-title2{font-family:var(--serif);font-size:1.3rem;font-weight:400;color:var(--ink);line-height:1.2;}
.b-currently .current-divider{width:1px;height:56px;background:rgba(232,84,122,0.15);}
.b-currently .curr-items{display:flex;flex-direction:column;gap:0.4rem;}
.b-currently .curr-item{font-size:0.78rem;color:var(--ink3);display:flex;align-items:center;gap:0.5rem;}
.curr-dot2{width:4px;height:4px;border-radius:50%;background:var(--pink);flex-shrink:0;}
.doodle-wrap{text-align:center;}
.doodle-svg{width:72px;height:72px;margin:0 auto 0.5rem;}
.doodle-caption{font-family:var(--serif);font-style:italic;font-size:0.8rem;color:var(--ink3);}
.b-shop .bento-tag{color:var(--pink);}.b-shop .shop-icon{font-size:1.4rem;position:absolute;top:0.85rem;right:0.85rem;}
.b-pixel .bento-tag{color:rgba(255,255,255,0.4);}.b-pixel .bento-title{font-size:0.9rem;font-family:var(--serif);font-style:italic;color:#fff;}

/* ── PHOTO GALLERY ── */
.gallery-section{padding:7rem 4rem;background:var(--bg);}
.gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:120px;gap:10px;margin-top:2rem;}
.gallery-item{border-radius:12px;overflow:hidden;background:var(--bg3);border:1px solid var(--border);position:relative;display:flex;align-items:center;justify-content:center;transition:transform 0.3s,box-shadow 0.3s;cursor:pointer;}
.gallery-item:hover{transform:scale(1.02);box-shadow:0 12px 36px rgba(232,84,122,0.1);z-index:2;}
.gallery-item.tall{grid-row:span 2;}
.gallery-item.wide{grid-column:span 2;}
.gallery-item.feature{grid-column:span 3;grid-row:span 2;}
.g1{grid-column:1/4;}.g2{grid-column:4/7;}.g3{grid-column:7/10;}.g4{grid-column:10/13;}
.g5{grid-column:1/5;grid-row:span 2;}.g6{grid-column:5/8;}.g7{grid-column:8/10;}.g8{grid-column:10/13;grid-row:span 2;}
.g9{grid-column:5/8;}.g10{grid-column:8/10;}
.gallery-placeholder{font-family:var(--hand);font-style:italic;font-size:0.82rem;color:var(--ink4);text-align:center;padding:1rem;}
.gallery-label{position:absolute;bottom:0.6rem;left:0.75rem;font-size:0.6rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink4);background:rgba(253,250,248,0.85);padding:2px 8px;border-radius:99px;}

/* ── OBSESSIONS SHELF ── */
.shelf-section{padding:7rem 4rem;background:var(--bg2);border-top:1px solid var(--border);}
.shelf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem;}
.obsession-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:1.5rem;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;cursor:default;}
.obsession-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(232,84,122,0.08);border-color:rgba(232,84,122,0.2);}
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

.scrapbook-section{padding:7rem 4rem 9rem;background:var(--bg2);border-top:1px solid var(--border);overflow:hidden;}
.scrapbook-title-line{font-family:var(--serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;color:var(--ink);line-height:1.1;}
.scrapbook-title-line em{font-style:italic;color:var(--pink);}
.scrapbook-sub{font-size:0.9rem;color:var(--ink3);margin-top:0.5rem;margin-bottom:5rem;font-family:var(--serif);font-style:italic;}
.scrapbook-canvas{position:relative;min-height:700px;width:100%;}
.sc-card{position:absolute;background:#fff;border:1px solid rgba(180,140,130,0.2);border-radius:14px;padding:1.5rem 1.4rem 1.3rem;box-shadow:0 4px 20px rgba(26,18,16,0.07),0 1px 4px rgba(26,18,16,0.04);cursor:default;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;transform-origin:center center;user-select:none;}
.sc-card:hover{box-shadow:0 20px 50px rgba(232,84,122,0.13),0 4px 12px rgba(26,18,16,0.05);z-index:20;}
.sc-card::after{content:'';position:absolute;top:-11px;left:50%;transform:translateX(-50%);width:44px;height:16px;background:rgba(232,84,122,0.1);border-radius:3px;border:1px solid rgba(232,84,122,0.12);}
.sc-card.pin::after{content:'';width:10px;height:10px;border-radius:50%;background:var(--pink);top:-5px;border:none;box-shadow:0 2px 6px rgba(232,84,122,0.5);}
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
.spectrum-section{padding:6rem 4rem;background:var(--bg3);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
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
.s-dot.is-ai .s-dot-circle{background:var(--pink);border-color:rgba(232,84,122,0.3);}
.s-dot.is-ai .s-dot-label{color:var(--pink2);}
.spectrum-process{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow-x:auto;}
.process-label-s{font-size:0.72rem;color:var(--ink3);letter-spacing:0.06em;padding:0.35rem 0.9rem;border:1px solid var(--border2);border-radius:99px;transition:color 0.2s,border-color 0.2s,background 0.2s;white-space:nowrap;background:var(--bg);}
.process-label-s:hover{color:var(--pink);border-color:var(--pink);background:var(--pink5);}
.process-arrow-s{font-size:0.65rem;color:var(--border2);padding:0 0.4rem;flex-shrink:0;}

/* ── TESTIMONIALS ── */
.testimonials-section{padding:7rem 4rem;background:var(--bg);}
.testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;margin-top:2rem;}
.testimonial-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:2rem;position:relative;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;}
.testimonial-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(232,84,122,0.07);border-color:rgba(232,84,122,0.15);}
.testimonial-quote{font-family:var(--serif);font-size:2.5rem;color:var(--pink);line-height:1;margin-bottom:0.75rem;opacity:0.4;}
.testimonial-text{font-family:var(--serif);font-size:1.05rem;font-style:italic;color:var(--ink2);line-height:1.7;margin-bottom:1.5rem;}
.testimonial-person{display:flex;align-items:center;gap:0.75rem;}
.testimonial-avatar{width:36px;height:36px;border-radius:50%;background:var(--bg3);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
.testimonial-name{font-size:0.82rem;font-weight:500;color:var(--ink);margin-bottom:0.1rem;}
.testimonial-role{font-size:0.72rem;color:var(--ink4);}

/* ── CONTACT ── */
.contact{background:var(--bg2);padding:7rem 4rem 4rem;position:relative;overflow:hidden;border-top:1px solid var(--border);}
.contact-glow{position:absolute;top:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(232,84,122,0.05) 0%,transparent 70%);pointer-events:none;}
.contact-illustration{position:absolute;top:0;right:0;width:280px;height:300px;display:flex;align-items:flex-start;justify-content:flex-end;}
.illus-placeholder{width:210px;height:250px;border:1px dashed var(--border2);border-radius:12px;margin:2rem 2rem 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(232,84,122,0.02);}
.illus-icon{font-size:2rem;opacity:0.2;}
.illus-label{font-family:var(--hand);font-size:0.82rem;color:var(--ink4);text-align:center;line-height:1.4;}
.contact-inner{position:relative;z-index:1;max-width:600px;}
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
.journey{background:var(--bg3);padding:7rem 4rem;border-top:1px solid var(--border);}
.journey-inner{display:grid;grid-template-columns:1fr 2fr;gap:6rem;align-items:start;}
.journey-left{position:sticky;top:8rem;}
.timeline-item{display:grid;grid-template-columns:56px 1fr;gap:1.5rem;padding-bottom:3rem;position:relative;opacity:0;transform:translateX(-20px);transition:opacity 0.6s ease,transform 0.6s ease;}
.timeline-item.in-view{opacity:1;transform:translateX(0);}
.timeline-item:not(:last-child)::after{content:'';position:absolute;left:26px;top:12px;bottom:0;width:1px;background:var(--border2);}
.timeline-dot-wrap{display:flex;justify-content:center;padding-top:3px;}
.timeline-dot{width:10px;height:10px;border-radius:50%;background:var(--bg3);border:2px solid var(--ink4);flex-shrink:0;position:relative;z-index:1;}
.timeline-dot.active{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px rgba(232,84,122,0.3);}
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

@media(max-width:900px){
  nav{padding:0 1.5rem;grid-template-columns:1fr auto;}.nav-resume{display:none;}
  .work,.journey,.about,.contact,.process-section,.gallery-section,.shelf-section,.testimonials-section{padding:5rem 1.5rem;}
  .spectrum-section{padding:4rem 1.5rem;}
  .project-card,.small-cards-row{grid-template-columns:1fr;}
  .journey-inner{grid-template-columns:1fr;}.journey-left{position:static;}
  .float-el{display:none;}
  .bento{grid-template-columns:repeat(6,1fr);grid-auto-rows:90px;}
  .b-photo{grid-column:1/4;grid-row:1/4;}.b-hello{grid-column:4/7;grid-row:1/3;}.b-coffee{grid-column:4/6;grid-row:3/4;}.b-hp{grid-column:6/7;grid-row:3/4;}.b-design{grid-column:1/4;grid-row:4/5;}.b-camera{grid-column:4/7;grid-row:4/6;}.b-music{grid-column:1/3;grid-row:5/6;}.b-spidey{grid-column:3/5;grid-row:5/7;}.b-travel{grid-column:1/3;grid-row:6/7;}.b-chaos{grid-column:5/7;grid-row:6/7;}.b-travel2{display:none;}.b-currently{grid-column:1/5;grid-row:7/9;flex-direction:column;align-items:flex-start;gap:1rem;}.b-doodle{grid-column:5/7;grid-row:7/9;}.b-shop{grid-column:1/4;grid-row:9/10;}.b-pixel{grid-column:4/7;grid-row:9/10;}.b-currently .current-divider{display:none;}
  .process-grid{grid-template-columns:1fr 1fr;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:100px;}
  .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10{grid-column:auto;grid-row:auto;}
}`;

export function HomeStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
