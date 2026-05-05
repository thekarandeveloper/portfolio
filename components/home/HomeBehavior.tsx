"use client";

import { useEffect } from "react";

const script = `// ── FIGMA FRAME INTRO ──
document.body.classList.add('loading');
const loader = document.getElementById('loader');
const figmaFrame = document.getElementById('figmaFrame');
const figmaFrameTag = document.getElementById('figmaFrameTag');
const figmaFrameContent = document.getElementById('figmaFrameContent');
const fiCursor = document.getElementById('fiCursor');
const fiCursorLabel = document.getElementById('fiCursorLabel');
const fiNameText = document.getElementById('fiNameText');
const fiNameCursor = document.getElementById('fiNameCursor');
const fiRole = document.getElementById('fiRole');
const fiTagline = document.getElementById('fiTagline');
const figmaPanel = document.getElementById('figmaPanel');
const figmaHint = document.getElementById('figmaHint');
const handles = document.querySelectorAll('.f-handle');
const layers = document.querySelectorAll('.figma-layer');

const W = window.innerWidth, H = window.innerHeight;
const frameW = Math.min(W * 0.52, 580);
const frameH = Math.min(H * 0.48, 340);

function setCursor(x, y){
  fiCursor.style.left = x + 'px';
  fiCursor.style.top = y + 'px';
}

// Step 1 — cursor appears, moves to start corner
setTimeout(()=>{
  fiCursorLabel.style.opacity = '1';
  setCursor(W*0.25, H*0.28);
}, 300);

// Step 2 — cursor drags, frame draws
setTimeout(()=>{
  fiCursorLabel.style.opacity = '0';
  // Move to end corner while frame grows
  setCursor(W*0.25 + frameW, H*0.28 + frameH);
  figmaFrame.style.transition = \`width 0.75s cubic-bezier(0.25,1,0.5,1), height 0.75s cubic-bezier(0.25,1,0.5,1)\`;
  figmaFrame.style.width = frameW + 'px';
  figmaFrame.style.height = frameH + 'px';
}, 900);

// Step 3 — frame drawn, show label + handles + panel
setTimeout(()=>{
  setCursor(W*0.25 + frameW + 30, H*0.28 - 20); // cursor moves away
  figmaFrameTag.style.opacity = '1';
  handles.forEach(h => h.style.opacity = '1');
  figmaPanel.classList.add('show');
  // Layer items appear one by one
  layers.forEach((l, i) => setTimeout(()=> l.classList.add('show'), i * 80));
  figmaHint.classList.add('show');
}, 1750);

// Step 4 — name types inside frame
setTimeout(()=>{
  figmaFrameContent.style.opacity = '1';
  const fullName = 'Nikunj Tyagi';
  let i = 0;
  const typer = setInterval(()=>{
    fiNameText.textContent = fullName.slice(0, i+1);
    i++;
    if(i === fullName.length){
      clearInterval(typer);
      setTimeout(()=>{
        fiNameCursor.style.display = 'none';
        fiRole.style.opacity = '1';
        setTimeout(()=>{
          fiTagline.style.opacity = '1';
          setTimeout(phase5, 1000);
        }, 400);
      }, 500);
    }
  }, 80);
}, 2400);

// Step 5 — zoom frame to fill screen
function phase5(){
  figmaHint.classList.remove('show');
  loader.classList.add('zoom-out');

  // Frame expands to fill screen
  figmaFrame.style.width = W + 'px';
  figmaFrame.style.height = H + 'px';
  figmaFrame.style.borderColor = 'transparent';

  setTimeout(()=>{
    loader.classList.add('final-fade');
    setTimeout(()=>{
      loader.classList.add('gone');
      document.body.classList.remove('loading');
      // ── HERO ENTRANCE SEQUENCE ──
      // 1. Name springs in
      setTimeout(()=>{
        document.querySelector('.hero-name-wrap').classList.add('enter');
      }, 100);
      // 2. Tagline fades up
      setTimeout(()=>{
        document.querySelector('.hero-tagline').classList.add('enter');
      }, 500);
      // 3. Cards appear one by one with spring pop
      const floatCards = ['fe1','fe2','fe3','fe4','fe5','fe6','fe7'];
      const floatDelays = [700,900,1050,1180,1300,1420,1550];
      floatCards.forEach((id, i) => {
        setTimeout(()=>{
          const el = document.getElementById(id);
          if(!el) return;
          el.style.animation = 'heroCardIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards';
          setTimeout(()=>{
            el.classList.add('entered'); // start gentle float
          }, 700);
        }, floatDelays[i]);
      });
      // 4. Scroll hint
      setTimeout(()=>{
        const hint = document.getElementById('heroScrollHint');
        if(hint) hint.classList.add('show');
      }, 1800);
      checkInView();
    }, 700);
  }, 950);
}

// ── CURSOR GLOW ──
const cursorGlow=document.getElementById('cursorGlow'),cursor=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';const hero=document.getElementById('home');const rect=hero.getBoundingClientRect();if(e.clientY>=rect.top&&e.clientY<=rect.bottom){cursorGlow.style.left=(e.clientX-rect.left)+'px';cursorGlow.style.top=(e.clientY-rect.top)+'px';}});
document.querySelectorAll('a,button,.process-card,.obsession-card').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('big'));el.addEventListener('mouseleave',()=>cursor.classList.remove('big'));});

// ── TYPING ANIMATION ──
const roles=['Product Designer','Problem Solver','Design Thinker','UX Researcher'];
let rIdx=0,cIdx=0,deleting=false;
const typingEl=document.getElementById('typingText');
function type(){const word=roles[rIdx];if(!deleting){typingEl.textContent=word.slice(0,cIdx+1);cIdx++;if(cIdx===word.length){setTimeout(()=>{deleting=true;typeLoop();},1800);return;}}else{typingEl.textContent=word.slice(0,cIdx-1);cIdx--;if(cIdx===0){deleting=false;rIdx=(rIdx+1)%roles.length;}}typeLoop();}
function typeLoop(){setTimeout(type,deleting?60:90);}
setTimeout(typeLoop,1500);

// ── NAV ──
const nav=document.getElementById('nav'),navLinks=document.querySelectorAll('.nav-link-item');
const sections=['home','work','process','about','gallery','shelf','toolkit','journey','testimonials','contact'];
function updateNav(){let current='home';sections.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=80)current=id;});navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href').replace('#','')===current));}

// ── SCROLL REVEAL ──
const reveals=document.querySelectorAll('.reveal');
const cards=document.querySelectorAll('.project-card'),cardsSm=document.querySelectorAll('.project-card-sm');
const tlItems=document.querySelectorAll('.timeline-item'),procCards=document.querySelectorAll('.process-card');

function checkInView(){
  const vh=window.innerHeight;
  reveals.forEach(el=>{if(el.getBoundingClientRect().top<vh*0.92)el.classList.add('visible');});
  cards.forEach(c=>{if(c.getBoundingClientRect().top<vh*0.88)setTimeout(()=>c.classList.add('in-view'),parseInt(c.dataset.delay||0));});
  cardsSm.forEach(c=>{if(c.getBoundingClientRect().top<vh*0.88)setTimeout(()=>c.classList.add('in-view'),parseInt(c.dataset.delay||0));});
  tlItems.forEach(i=>{if(i.getBoundingClientRect().top<vh*0.88)setTimeout(()=>i.classList.add('in-view'),parseInt(i.dataset.tlDelay||0));});
  procCards.forEach(c=>{if(c.getBoundingClientRect().top<vh*0.88)setTimeout(()=>c.classList.add('in-view'),parseInt(c.dataset.delay||0));});
}

window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>40);updateNav();checkInView();runParallax();},{passive:true});
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:0.08});
reveals.forEach(el=>observer.observe(el));

// ── PARALLAX ──
// Each element has a speed multiplier — negative = moves up slower (depth behind)
// positive = moves faster than scroll (depth in front)
const parallaxMap = [
  // Hero floating elements — different speeds = depth layers
  { sel: '.float-photo',     speed: -0.18 },
  { sel: '.float-sticky',    speed: -0.28 },
  { sel: '.float-coffee',    speed: -0.12 },
  { sel: '.float-spidey',    speed: -0.22 },
  { sel: '.float-currently', speed: -0.08 },
  { sel: '.float-hp',        speed: -0.16 },
  // Hero name — very subtle, stays almost fixed
  { sel: '.hero-name-wrap',  speed: -0.06 },
  { sel: '.hero-tagline',    speed: -0.04 },
  // Section title text — slides up slightly slower than scroll
  { sel: '.work .section-title',         speed: -0.05 },
  { sel: '.process-section .section-title', speed: -0.05 },
  { sel: '.about .about-intro',          speed: -0.04 },
  { sel: '.gallery-section .section-title', speed: -0.05 },
  { sel: '.testimonials-section .section-title', speed: -0.04 },
  // Scrapbook cards — each moves slightly different
  { sel: '.sc-coffee',  speed: -0.07 },
  { sel: '.sc-spidey',  speed: -0.12 },
  { sel: '.sc-hp',      speed: -0.05 },
  { sel: '.sc-music',   speed: -0.09 },
  { sel: '.sc-travel',  speed: -0.06 },
  { sel: '.sc-photo',   speed: -0.10 },
  { sel: '.sc-shop',    speed: -0.08 },
  // Spectrum section
  { sel: '.spectrum-section .spectrum-title', speed: -0.04 },
  // Contact glow
  { sel: '.contact-glow', speed: -0.15 },
];

// Cache elements and their initial offsets
let parallaxEls = [];
function initParallax(){
  parallaxEls = [];
  parallaxMap.forEach(({ sel, speed }) => {
    document.querySelectorAll(sel).forEach(el => {
      parallaxEls.push({ el, speed });
    });
  });
}

let lastScrollY = 0;
let ticking = false;

function runParallax(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(()=>{
    const scrollY = window.scrollY;
    parallaxEls.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const dist = elCenter - viewCenter;
      const offset = dist * speed;
      el.style.transform = el.style.transform.replace(/translateY\([^)]*\)/,'');
      // For float elements preserve their existing float animation by using a CSS var trick
      el.style.setProperty('--px', \`\${offset}px\`);
      // Apply via willChange for GPU acceleration
      el.style.translate = \`0 \${offset}px\`;
    });
    ticking = false;
  });
}

// Hero background parallax — the glow blob tracks slower
const heroBlob = document.querySelector('.hero-blob');
const heroBlob2 = document.querySelector('.hero-blob2');
if(heroBlob) {
  window.addEventListener('scroll', ()=>{
    const s = window.scrollY;
    if(heroBlob)  heroBlob.style.translate  = \`0 \${s * 0.3}px\`;
    if(heroBlob2) heroBlob2.style.translate = \`0 \${s * 0.5}px\`;
  }, { passive: true });
}

// Section background parallax — alternating sections shift subtly
document.querySelectorAll('.work, .journey, .about, .gallery-section, .testimonials-section').forEach(section => {
  window.addEventListener('scroll', ()=>{
    const rect = section.getBoundingClientRect();
    const pct = (rect.top / window.innerHeight);
    section.style.backgroundPositionY = \`\${pct * 20}px\`;
  }, { passive: true });
});

// Project card inner parallax — image/visual moves slower than card
document.querySelectorAll('.proj-visual, .proj-visual-sm').forEach(visual => {
  window.addEventListener('scroll', ()=>{
    const rect = visual.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      const pct = (rect.top / window.innerHeight - 0.5);
      visual.style.backgroundPositionY = \`\${pct * 30}px\`;
    }
  }, { passive: true });
});

// Init on load
initParallax();
runParallax();`;

declare global {
  interface Window {
    __homeReplicaBooted?: boolean;
  }
}

export function HomeBehavior() {
  useEffect(() => {
    if (window.__homeReplicaBooted) return;
    window.__homeReplicaBooted = true;
    const tag = document.createElement("script");
    tag.textContent = script;
    document.body.appendChild(tag);
    return () => {
      tag.remove();
    };
  }, []);

  return null;
}
