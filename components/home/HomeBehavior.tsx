"use client";

import { useEffect } from "react";

const script = `// ── WATER SURFACE HOVER EFFECT ──
(function(){
  var hoverSelector='a,button,.hero-card,.pw-row,.gallery-item,.obsession-card,.sc-card,.testimonial-card,.contact-link,.q-chip,.conv-replay';
  document.addEventListener('mousemove',function(e){
    var surface=e.target&&e.target.closest&&e.target.closest(hoverSelector);
    if(!surface)return;
    var rect=surface.getBoundingClientRect();
    surface.style.setProperty('--water-x',(e.clientX-rect.left)+'px');
    surface.style.setProperty('--water-y',(e.clientY-rect.top)+'px');
  });
  document.querySelectorAll(hoverSelector).forEach(function(el){
    el.classList.add('water-surface');
  });
})();

// ── HERO WAVE CANVAS ──
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




// ── CURSOR GLOW + GLASS ORB ──
const cursorGlow=document.getElementById('cursorGlow'),cursor=document.getElementById('cursor');
const glassOrb=document.getElementById('glassOrb');
let glassVisible=false,orbOverText=false;
function checkOrbOverText(el){
  let node=el;
  while(node&&node!==document.body){
    const tag=node.tagName?node.tagName.toLowerCase():'';
    if(['p','h1','h2','h3','h4','h5','h6','a','button','label','li','input','textarea','time','blockquote'].indexOf(tag)!==-1)return true;
    if(['span','strong','em','b','i'].indexOf(tag)!==-1){
      const kids=node.childNodes;
      for(let i=0;i<kids.length;i++){if(kids[i].nodeType===3&&kids[i].textContent.trim().length>0)return true;}
    }
    if(['div','section'].indexOf(tag)!==-1){
      const kids=node.childNodes;
      for(let i=0;i<kids.length;i++){if(kids[i].nodeType===3&&kids[i].textContent.trim().length>0)return true;}
    }
    node=node.parentElement;
  }
  return false;
}
document.addEventListener('mouseover',e=>{
  if(!glassOrb)return;
  const over=checkOrbOverText(e.target);
  if(orbOverText!==over){orbOverText=over;if(glassVisible)glassOrb.style.opacity=over?'0':'1';}
});
document.addEventListener('mousemove',e=>{
  if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';}
  if(glassOrb){
    glassOrb.style.left=e.clientX+'px';
    glassOrb.style.top=e.clientY+'px';
    if(!glassVisible){glassVisible=true;if(!orbOverText)glassOrb.style.opacity='1';}
  }
  const hero=document.getElementById('home');
  if(hero&&cursorGlow){const rect=hero.getBoundingClientRect();if(e.clientY>=rect.top&&e.clientY<=rect.bottom){cursorGlow.style.left=(e.clientX-rect.left)+'px';cursorGlow.style.top=(e.clientY-rect.top)+'px';}}
});
document.querySelectorAll('a,button,.hero-card,.pw-row,.gallery-item,.obsession-card,.sc-card,.testimonial-card,.contact-link,.q-chip,.conv-replay').forEach(el=>{el.addEventListener('mouseenter',()=>{if(cursor)cursor.classList.add('big');});el.addEventListener('mouseleave',()=>{if(cursor)cursor.classList.remove('big');});});


// ── NAV ──
const nav=document.getElementById('nav'),navLinks=document.querySelectorAll('.nav-link-item');
const navLinksWrap=document.querySelector('.nav-links-wrap');
const navIndicator=document.querySelector('.nav-active-indicator');
function positionNavIndicator(activeLink){
  if(!navLinksWrap||!navIndicator||!activeLink)return;
  const wrapRect=navLinksWrap.getBoundingClientRect();
  const linkRect=activeLink.getBoundingClientRect();
  navIndicator.style.width=linkRect.width+'px';
  navIndicator.style.transform='translateX('+(linkRect.left-wrapRect.left)+'px)';
}
function updateNav(){
  let activeLink=navLinks[0]||null;
  navLinks.forEach(a=>{const isActive=a.getAttribute('href')==='#work';a.classList.toggle('active',isActive);if(isActive)activeLink=a;});
  positionNavIndicator(activeLink);
}
// ── NAV CLOCK ──
(function(){
  var clockEl=document.getElementById('navClock');
  if(!clockEl)return;
  function tick(){var n=new Date();clockEl.textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');}
  tick();setInterval(tick,1000);
})();

// ── SCROLL REVEAL ──
const reveals=document.querySelectorAll('.reveal');
const tlItems=document.querySelectorAll('.timeline-item');
const fadeSections=document.querySelectorAll('.hero,.work,.journey,.home-loves,.home-xp,.contact');

const sectionFadeObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting)entry.target.classList.add('section-visible');
  });
},{threshold:0.12,rootMargin:'0px 0px -8% 0px'});

fadeSections.forEach(section=>{
  section.classList.add('section-fade');
  sectionFadeObserver.observe(section);
});

function checkInView(){
  const vh=window.innerHeight;
  reveals.forEach(el=>{if(el.getBoundingClientRect().top<vh*0.92)el.classList.add('visible');});
  tlItems.forEach(i=>{if(i.getBoundingClientRect().top<vh*0.88)setTimeout(()=>i.classList.add('in-view'),parseInt(i.dataset.tlDelay||0));});
}

// ── SCROLL TUBE ──
const scrollTubeFill=document.getElementById('scrollTubeFill');
function updateScrollTube(){
  if(!scrollTubeFill)return;
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const pct=max>0?Math.min(100,Math.round(window.scrollY/max*1000)/10):0;
  scrollTubeFill.style.height=pct+'%';
}
updateScrollTube();
updateNav();

window.addEventListener('scroll',()=>{if(nav)nav.classList.toggle('scrolled',window.scrollY>40);updateNav();checkInView();runParallax();updateScrollTube();},{passive:true});
window.addEventListener('resize',updateNav);

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

// ── HERO ENTRANCE ──
const heroName = document.querySelector('.hero-name-wrap');
if (heroName) heroName.classList.add('enter');
checkInView();

// ── PARALLAX ──
const parallaxMap = [
  // Hero
  { sel: '.hero-name-wrap',     speed: -0.06 },
  { sel: '.hero-cards',         speed: -0.04 },
  { sel: '.hero-scroll-hint',   speed: -0.03 },

  // Work
  { sel: '.work-heading-wrap',  speed: -0.04 },
  { sel: '.work-title-script',  speed: -0.06 },
  { sel: '.pw-row:nth-child(odd)',  speed: -0.030 },
  { sel: '.pw-row:nth-child(even)', speed: -0.018 },

  // Process
  { sel: '.process-main-title',  speed: -0.05 },
  { sel: '.anno-canvas-wrap',    speed: -0.03 },
  { sel: '.anno-legend',         speed: -0.02 },

  // Gallery
  { sel: '.gallery-section .section-title',   speed: -0.05 },
  { sel: '.gallery-section .section-label',   speed: -0.03 },
  { sel: '.gallery-item:nth-child(1)',         speed: -0.04 },
  { sel: '.gallery-item:nth-child(2)',         speed: -0.02 },
  { sel: '.gallery-item:nth-child(3)',         speed: -0.06 },
  { sel: '.gallery-item:nth-child(4)',         speed: -0.03 },
  { sel: '.gallery-item:nth-child(5)',         speed: -0.05 },
  { sel: '.gallery-item:nth-child(6)',         speed: -0.02 },

  // Scrapbook
  { sel: '.sc-coffee',  speed: -0.07 },
  { sel: '.sc-spidey',  speed: -0.12 },
  { sel: '.sc-hp',      speed: -0.05 },
  { sel: '.sc-music',   speed: -0.09 },
  { sel: '.sc-travel',  speed: -0.06 },
  { sel: '.sc-photo',   speed: -0.10 },
  { sel: '.sc-shop',    speed: -0.08 },

  // Journey
  { sel: '.journey-left',               speed: -0.04 },
  { sel: '.timeline-item:nth-child(1)', speed: -0.05 },
  { sel: '.timeline-item:nth-child(2)', speed: -0.03 },
  { sel: '.timeline-item:nth-child(3)', speed: -0.05 },
  { sel: '.timeline-item:nth-child(4)', speed: -0.03 },

  // Testimonials
  { sel: '.testimonials-section .section-title', speed: -0.04 },
  { sel: '.testimonial-card:nth-child(1)',        speed: -0.03 },
  { sel: '.testimonial-card:nth-child(2)',        speed: -0.06 },
  { sel: '.testimonial-card:nth-child(3)',        speed: -0.03 },

  // Contact
  { sel: '.contact-glow',  speed: -0.15 },
  { sel: '.contact-title', speed: -0.05 },
  { sel: '.contact-left',  speed: -0.04 },
  { sel: '.contact-sub',   speed: -0.03 },
  { sel: '.contact-links', speed: -0.02 },
];

let parallaxEls = [];
function initParallax(){
  parallaxEls = [];
  parallaxMap.forEach(({ sel, speed }) => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.willChange = 'transform, translate';
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

// ── ANNOTATION PINS ──
(function(){
  var pins=Array.from(document.querySelectorAll('.anno-pin'));
  var legs=Array.from(document.querySelectorAll('.anno-legend-step'));
  var active=-1;
  function setActive(idx){
    pins.forEach(function(p,i){p.classList.toggle('pinned',i===idx);});
    legs.forEach(function(l,i){l.classList.toggle('leg-active',i===idx);});
    active=idx;
  }
  function clear(){
    pins.forEach(function(p){p.classList.remove('pinned');});
    legs.forEach(function(l){l.classList.remove('leg-active');});
    active=-1;
  }
  pins.forEach(function(pin,i){
    pin.addEventListener('click',function(e){
      e.stopPropagation();
      active===i?clear():setActive(i);
    });
  });
  legs.forEach(function(leg,i){
    leg.addEventListener('click',function(){
      active===i?clear():setActive(i);
    });
  });
  document.addEventListener('click',function(){if(active!==-1)clear();});
  var annoObs=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        pins.forEach(function(pin,i){
          setTimeout(function(){
            pin.classList.add('anno-pin-pulse');
            setTimeout(function(){pin.classList.remove('anno-pin-pulse');},1900);
          },i*150+200);
        });
        annoObs.unobserve(entry.target);
      }
    });
  },{threshold:0.3});
  var stage=document.querySelector('.anno-stage');
  if(stage)annoObs.observe(stage);
})();


// ── ZOOM INTERLUDE ──
(function(){
  var section=document.getElementById('zoom-interlude');
  if(!section)return;
  var l1=section.querySelector('.zoom-line-1');
  var l2=section.querySelector('.zoom-line-2');
  var l3=section.querySelector('.zoom-line-3');
  var sub=section.querySelector('.zoom-sub');
  var ticking=false;
  function c(v){return v<0?0:v>1?1:v;}
  function mr(p,s,e){return c((p-s)/(e-s));}
  function eOut(t){return 1-(1-t)*(1-t)*(1-t);}
  function update(){
    var rect=section.getBoundingClientRect();
    var total=section.offsetHeight-window.innerHeight;
    var p=c(-rect.top/total);
    var l1o=p<0.06?mr(p,0,0.06):p>0.80?1-mr(p,0.80,0.90):1;
    var l1s=4-3*eOut(mr(p,0.06,0.42));
    l1.style.opacity=l1o;
    l1.style.transform='scale('+l1s+')';
    l2.style.opacity=p<0.42?0:p>0.80?1-mr(p,0.80,0.90):mr(p,0.42,0.54);
    l3.style.opacity=p<0.55?0:p>0.80?1-mr(p,0.80,0.90):mr(p,0.55,0.65);
    sub.style.opacity=p<0.66?0:p>0.80?1-mr(p,0.80,0.90):mr(p,0.66,0.74);
    ticking=false;
  }
  var inView=false;
  new IntersectionObserver(function(es){es.forEach(function(e){inView=e.isIntersecting;});},{threshold:0}).observe(section);
  window.addEventListener('scroll',function(){if(!inView||ticking)return;ticking=true;requestAnimationFrame(update);},{passive:true});
  update();
})();

// ── SIGNOFF SECTION ──
(function(){
  var section=document.getElementById('signoff');
  if(!section)return;
  var fixed=false;

  /* Trigger entrance animation when section scrolls into view */
  var enterObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting&&!fixed)section.classList.add('stage-entered');
    });
  },{threshold:0.3});
  enterObs.observe(section);

  /* Click anywhere in section → snap blocks to monogram */
  section.addEventListener('click',function(){
    if(fixed)return;
    fixed=true;
    section.classList.add('stage-fixed');
  });

  /* Custom cursor: big on hover (communicates clickability) */
  section.addEventListener('mouseenter',function(){
    var cur=document.getElementById('cursor');
    if(cur)cur.classList.add('big');
  });
  section.addEventListener('mouseleave',function(){
    var cur=document.getElementById('cursor');
    if(cur)cur.classList.remove('big');
  });
  /* After fix, restore normal cursor size */
  section.addEventListener('click',function(){
    var cur=document.getElementById('cursor');
    if(cur)cur.classList.remove('big');
  });
})();

var bgSections=Array.from(document.querySelectorAll('.work,.journey,.contact'));
window.addEventListener('scroll',function(){bgSections.forEach(function(section){var rect=section.getBoundingClientRect();section.style.backgroundPositionY=(rect.top/window.innerHeight*20)+'px';});},{passive:true});

initParallax();
runParallax();


// ── GOOGLE SEARCH CYCLING ANIMATION ──
(function(){
  var queryEl=document.getElementById('gsearchQuery');
  var resultsEl=document.getElementById('gsearchResults');
  if(!queryEl||!resultsEl)return;
  var searches=[
    {q:'Who is Nikunj?',items:[
      {icon:'✦',text:'Product Designer',tag:'role'},
      {icon:'✦',text:'UX Researcher',tag:'role'},
      {icon:'✦',text:'Problem Solver',tag:'trait'},
      {icon:'✦',text:'Systems Thinker',tag:'trait'}
    ]},
    {q:'What does she love?',items:[
      {icon:'✦',text:'Obsessing over pixels',tag:'always'},
      {icon:'☕',text:'Cold coffee',tag:'fuel'},
      {icon:'✦',text:'Clean typography',tag:'passion'},
      {icon:'🎵',text:'Lo-fi while designing',tag:'vibe'}
    ]},
    {q:'Where can you find her?',items:[
      {icon:'☕',text:'Corner seat at a café',tag:'usually'},
      {icon:'✦',text:'Deep in Figma',tag:'obviously'},
      {icon:'✦',text:'Late nights, building',tag:'always'},
      {icon:'✦',text:'tyaginikunj26@gmail.com',tag:'reach out'}
    ]},
    {q:'Which coffee?',items:[
      {icon:'🧊',text:'Cold coffee',tag:'always'},
      {icon:'☕',text:'Extra ice, every time',tag:'non-negotiable'},
      {icon:'✦',text:'Never hot, ever',tag:'firm stance'},
      {icon:'✦',text:'Iced americano > life',tag:'truth'}
    ]}
  ];
  var cur=0,started=false;
  function build(items){
    resultsEl.innerHTML='';
    items.forEach(function(it){
      var d=document.createElement('div');
      d.className='gsearch-item';
      d.innerHTML='<div class="gsearch-item-icon">'+it.icon+'</div><span>'+it.text+'</span><span class="gsearch-item-tag">'+it.tag+'</span>';
      resultsEl.appendChild(d);
    });
  }
  function showResults(){Array.from(resultsEl.querySelectorAll('.gsearch-item')).forEach(function(el,i){setTimeout(function(){el.classList.add('gs-visible');},i*120);});}
  function hideResults(cb){var els=Array.from(resultsEl.querySelectorAll('.gsearch-item')).reverse();els.forEach(function(el,i){setTimeout(function(){el.classList.remove('gs-visible');},i*70);});setTimeout(cb,els.length*70+180);}
  function typeQ(q,cb){var i=0;(function step(){if(i<q.length){queryEl.textContent=q.slice(0,++i);setTimeout(step,55+Math.random()*35);}else{cb();}})();}
  function delQ(cb){(function step(){var t=queryEl.textContent;if(t.length){queryEl.textContent=t.slice(0,-1);setTimeout(step,28);}else{cb();}})();}
  function run(idx){
    var s=searches[idx];
    var isLast=idx===searches.length-1;
    build(s.items);
    typeQ(s.q,function(){
      setTimeout(function(){
        showResults();
        if(isLast)return;
        setTimeout(function(){
          hideResults(function(){
            delQ(function(){
              setTimeout(function(){run(idx+1);},320);
            });
          });
        },2600);
      },380);
    });
  }
  var contact=document.querySelector('.contact');
  if(!contact)return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting&&!started){started=true;setTimeout(function(){run(0);},400);obs.disconnect();}
    });
  },{threshold:0.3});
  obs.observe(contact);
})();




`;

export function HomeBehavior() {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.textContent = `(function(){
      if(window.__homeBehaviorReady)return;
      window.__homeBehaviorReady=true;
      ${script}
    })();`;
    document.body.appendChild(tag);
    return () => {
      tag.remove();
    };
  }, []);

  return null;
}
