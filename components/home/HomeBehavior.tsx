"use client";

import { useEffect } from "react";

const script = `// ── HERO WAVE CANVAS ──
(function(){
  const hero = document.getElementById('home');
  if(!hero) return;
  const canvas = document.createElement('canvas');
  canvas.id = 'heroWaveCanvas';
  canvas.setAttribute('aria-hidden','true');
  hero.insertBefore(canvas, hero.firstChild);
  const ctx = canvas.getContext('2d');
  if(!ctx) return;
  function resize(){
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, {passive:true});
  // 5 wave layers — each has its own y position, amplitude, frequency, phase, and color
  const waves = [
    {yR:0.38, amp:52, freq:0.0055, spd:0.007,  ph:0,           r:0,   g:122, b:255, a:0.048},
    {yR:0.27, amp:68, freq:0.0040, spd:-0.005,  ph:1.05,        r:52,  g:170, b:220, a:0.042},
    {yR:0.50, amp:40, freq:0.0068, spd:0.010,  ph:1.57,        r:90,  g:200, b:250, a:0.036},
    {yR:0.18, amp:76, freq:0.0030, spd:-0.004,  ph:3.14,        r:175, g:210, b:255, a:0.044},
    {yR:0.62, amp:34, freq:0.0060, spd:0.008,  ph:4.71,        r:0,   g:150, b:255, a:0.030},
  ];
  let raf = null;
  function drawFrame(){
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    waves.forEach(function(w){
      w.ph += w.spd;
      var baseY = w.yR * H;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for(var x = 0; x <= W + 8; x += 6){
        var y = baseY + Math.sin(x * w.freq + w.ph) * w.amp;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, 0);
      ctx.closePath();
      var gr = ctx.createLinearGradient(0, 0, 0, baseY + w.amp + 20);
      gr.addColorStop(0, 'rgba('+w.r+','+w.g+','+w.b+','+(w.a * 1.8)+')');
      gr.addColorStop(0.55, 'rgba('+w.r+','+w.g+','+w.b+','+w.a+')');
      gr.addColorStop(1, 'rgba('+w.r+','+w.g+','+w.b+',0)');
      ctx.fillStyle = gr;
      ctx.fill();
    });
    raf = requestAnimationFrame(drawFrame);
  }
  drawFrame();
  // pause when hero scrolls out of view (battery-friendly)
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting && raf){ cancelAnimationFrame(raf); raf = null; }
      else if(e.isIntersecting && !raf){ drawFrame(); }
    });
  }, {threshold: 0});
  obs.observe(hero);
})();

// ── SESSION CHECK ──
const loaderSeen = sessionStorage.getItem('loader_seen');

// ── FIGMA FRAME INTRO (first visit only) ──
if (!loaderSeen) {
  sessionStorage.setItem('loader_seen', '1');
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

  function phase5(){
    figmaHint.classList.remove('show');
    loader.classList.add('zoom-out');
    figmaFrame.style.width = W + 'px';
    figmaFrame.style.height = H + 'px';
    figmaFrame.style.borderColor = 'transparent';
    setTimeout(()=>{
      loader.classList.add('final-fade');
      setTimeout(()=>{
        loader.classList.add('gone');
        document.body.classList.remove('loading');
        setTimeout(()=>{
          document.querySelector('.hero-name-wrap').classList.add('enter');
        }, 100);
        checkInView();
      }, 700);
    }, 950);
  }

  // Step 1 — cursor appears, moves to start corner
  setTimeout(()=>{
    fiCursorLabel.style.opacity = '1';
    setCursor(W*0.25, H*0.28);
  }, 300);

  // Step 2 — cursor drags, frame draws
  setTimeout(()=>{
    fiCursorLabel.style.opacity = '0';
    setCursor(W*0.25 + frameW, H*0.28 + frameH);
    figmaFrame.style.transition = \`width 0.75s cubic-bezier(0.25,1,0.5,1), height 0.75s cubic-bezier(0.25,1,0.5,1)\`;
    figmaFrame.style.width = frameW + 'px';
    figmaFrame.style.height = frameH + 'px';
  }, 900);

  // Step 3 — frame drawn, show label + handles + panel
  setTimeout(()=>{
    setCursor(W*0.25 + frameW + 30, H*0.28 - 20);
    figmaFrameTag.style.opacity = '1';
    handles.forEach(h => h.style.opacity = '1');
    figmaPanel.classList.add('show');
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
}

// ── CURSOR GLOW + GLASS ORB ──
const cursorGlow=document.getElementById('cursorGlow'),cursor=document.getElementById('cursor');
const glassOrb=document.getElementById('glassOrb');
let glassVisible=false;
document.addEventListener('mousemove',e=>{
  if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';}
  if(glassOrb){
    glassOrb.style.left=e.clientX+'px';
    glassOrb.style.top=e.clientY+'px';
    if(!glassVisible){glassVisible=true;glassOrb.style.opacity='1';}
  }
  const hero=document.getElementById('home');
  if(hero&&cursorGlow){const rect=hero.getBoundingClientRect();if(e.clientY>=rect.top&&e.clientY<=rect.bottom){cursorGlow.style.left=(e.clientX-rect.left)+'px';cursorGlow.style.top=(e.clientY-rect.top)+'px';}}
});
document.querySelectorAll('a,button,.process-card,.obsession-card').forEach(el=>{el.addEventListener('mouseenter',()=>{if(cursor)cursor.classList.add('big');});el.addEventListener('mouseleave',()=>{if(cursor)cursor.classList.remove('big');});});

// ── WORK TABS ──
const workTabs = document.querySelectorAll('.work-tab');
workTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    workTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.work-cat-pane').forEach(p => p.classList.remove('active'));
    const pane = document.getElementById(filter === 'all' ? 'pane-all' : \`pane-\${filter}\`);
    if (pane) pane.classList.add('active');
  });
});

// ── TYPING ANIMATION ──
const roles=['Product Designer','Problem Solver','Design Thinker','UX Researcher'];
let rIdx=0,cIdx=0,deleting=false;
const typingEl=document.getElementById('typingText');
function type(){if(!typingEl)return;const word=roles[rIdx];if(!deleting){typingEl.textContent=word.slice(0,cIdx+1);cIdx++;if(cIdx===word.length){setTimeout(()=>{deleting=true;typeLoop();},1800);return;}}else{typingEl.textContent=word.slice(0,cIdx-1);cIdx--;if(cIdx===0){deleting=false;rIdx=(rIdx+1)%roles.length;}}typeLoop();}
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

window.addEventListener('scroll',()=>{if(nav)nav.classList.toggle('scrolled',window.scrollY>40);updateNav();checkInView();runParallax();},{passive:true});

// ── SCROLL SHAPES ──
const scrollShapeEls = document.querySelectorAll('.ss, .ss-line');
const shapeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); }
    else { e.target.classList.remove('in'); }
  });
}, { threshold: 0.1 });
scrollShapeEls.forEach(el => shapeObserver.observe(el));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:0.08});
reveals.forEach(el=>observer.observe(el));

// ── SHOW CONTENT IMMEDIATELY (return visit) ──
if (loaderSeen) {
  const loaderEl = document.getElementById('loader');
  if (loaderEl) loaderEl.classList.add('gone');
  document.body.classList.remove('loading');
  const heroName = document.querySelector('.hero-name-wrap');
  if (heroName) heroName.classList.add('enter');
  checkInView();
}

// ── PARALLAX ──
const parallaxMap = [
  { sel: '.hero-name-wrap',     speed: -0.06 },
  { sel: '.hero-cards',         speed: -0.04 },
  { sel: '.about .about-intro', speed: -0.04 },
  { sel: '.about-header',       speed: -0.03 },
  { sel: '.work-tabs',          speed: -0.025 },
  { sel: '.project-card:nth-child(odd)  .proj-visual',  speed: -0.05 },
  { sel: '.project-card:nth-child(even) .proj-visual',  speed: -0.03 },
  { sel: '.process-section .section-title', speed: -0.05 },
  { sel: '.process-card:nth-child(1)',  speed: -0.04 },
  { sel: '.process-card:nth-child(3)',  speed: -0.06 },
  { sel: '.gallery-section .section-title', speed: -0.05 },
  { sel: '.testimonials-section .section-title', speed: -0.04 },
  { sel: '.testimonial-card:nth-child(1)', speed: -0.03 },
  { sel: '.testimonial-card:nth-child(2)', speed: -0.05 },
  { sel: '.testimonial-card:nth-child(3)', speed: -0.03 },
  { sel: '.bento',              speed: -0.02 },
  { sel: '.b-photo',            speed: -0.05 },
  { sel: '.sc-coffee',  speed: -0.07 },
  { sel: '.sc-spidey',  speed: -0.12 },
  { sel: '.sc-hp',      speed: -0.05 },
  { sel: '.sc-music',   speed: -0.09 },
  { sel: '.sc-travel',  speed: -0.06 },
  { sel: '.sc-photo',   speed: -0.10 },
  { sel: '.sc-shop',    speed: -0.08 },
  { sel: '.spectrum-section .spectrum-title', speed: -0.04 },
  { sel: '.contact-glow',       speed: -0.15 },
  { sel: '.contact-title',      speed: -0.04 },
  { sel: '.journey-left',       speed: -0.03 },
];

let parallaxEls = [];
function initParallax(){
  parallaxEls = [];
  parallaxMap.forEach(({ sel, speed }) => {
    document.querySelectorAll(sel).forEach(el => {
      parallaxEls.push({ el, speed });
    });
  });
}

let ticking = false;

function runParallax(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(()=>{
    parallaxEls.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const dist = elCenter - viewCenter;
      const offset = dist * speed;
      el.style.transform = el.style.transform.replace(/translateY\([^)]*\)/,'');
      el.style.setProperty('--px', \`\${offset}px\`);
      el.style.translate = \`0 \${offset}px\`;
    });
    ticking = false;
  });
}

const heroBlob = document.querySelector('.hero-blob');
const heroBlob2 = document.querySelector('.hero-blob2');
if(heroBlob) {
  window.addEventListener('scroll', ()=>{
    const s = window.scrollY;
    if(heroBlob)  heroBlob.style.translate  = \`0 \${s * 0.3}px\`;
    if(heroBlob2) heroBlob2.style.translate = \`0 \${s * 0.5}px\`;
  }, { passive: true });
}

document.querySelectorAll('.work, .journey, .about, .gallery-section, .testimonials-section').forEach(section => {
  window.addEventListener('scroll', ()=>{
    const rect = section.getBoundingClientRect();
    const pct = (rect.top / window.innerHeight);
    section.style.backgroundPositionY = \`\${pct * 20}px\`;
  }, { passive: true });
});

document.querySelectorAll('.proj-visual, .proj-visual-sm').forEach(visual => {
  window.addEventListener('scroll', ()=>{
    const rect = visual.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      const pct = (rect.top / window.innerHeight - 0.5);
      const inner = visual.querySelector('div');
      if(inner && !inner.matches(':hover')) inner.style.translate = \`0 \${pct * 18}px\`;
    }
  }, { passive: true });
});

initParallax();
runParallax();`;

export function HomeBehavior() {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.textContent = script;
    document.body.appendChild(tag);
    return () => {
      tag.remove();
    };
  }, []);

  return null;
}
