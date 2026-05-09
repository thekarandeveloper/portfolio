"use client";

import { useEffect } from "react";

const script = `// ── WATER SURFACE HOVER EFFECT ──
(function(){
  var hoverSelector='a,button,.hero-card,.bento-work-card,.gallery-item,.obsession-card,.sc-card,.testimonial-card,.contact-link,.q-chip,.conv-replay';
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

// ── SESSION CHECK ──
const loaderSeen = sessionStorage.getItem('loader_seen');

// ── LIQUID GLASS INTRO (first visit only) ──
if (!loaderSeen) {
  sessionStorage.setItem('loader_seen', '1');
  document.body.classList.add('loading');

  var loader = document.getElementById('loader');
  var blob = document.getElementById('glassBlob');
  var arrow = document.getElementById('glassArrow');

  // Phase 1 — spring scale-in
  setTimeout(function(){
    blob.style.transition = 'transform 0.8s cubic-bezier(0.34,1.56,0.64,1)';
    blob.style.transform = 'translate(-50%,-50%) scale(1)';
    // Phase 2 — liquid morph begins once blob is open
    setTimeout(function(){
      blob.style.transition = '';
      blob.style.animation = 'liquidMorph 2.4s ease-in-out infinite, liquidPulse 2.8s ease-in-out infinite';
    }, 820);
  }, 100);

  // Phase 3 — contract to scroll-glass-orb size and position
  setTimeout(function(){
    blob.style.animation = '';

    // Switch from % positioning to exact pixels so CSS can transition top/left
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    blob.style.transition = 'none';
    blob.style.left = cx + 'px';
    blob.style.top = cy + 'px';
    blob.style.transform = 'translate(-50%,-50%) scale(1)';
    blob.getBoundingClientRect(); // force reflow

    // Target = center of the real scroll-glass-orb
    var tx = cx;
    var ty = window.innerHeight - parseFloat(getComputedStyle(document.documentElement).fontSize) * 2.2 - 19;
    var orbEl = document.querySelector('.scroll-glass-orb');
    if (orbEl) {
      var r = orbEl.getBoundingClientRect();
      tx = r.left + r.width / 2;
      ty = r.top + r.height / 2;
    }

    blob.style.transition = 'top 0.72s cubic-bezier(0.34,1.2,0.64,1),left 0.72s cubic-bezier(0.34,1.2,0.64,1),width 0.65s cubic-bezier(0.34,1.4,0.64,1),height 0.65s cubic-bezier(0.34,1.4,0.64,1),box-shadow 0.5s ease';
    blob.style.left = tx + 'px';
    blob.style.top = ty + 'px';
    blob.style.width = '38px';
    blob.style.height = '38px';

    // Phase 4 — arrow fades in inside the contracted orb
    setTimeout(function(){
      arrow.classList.add('show');

      // Fade out loader, then staggered hero entrance
      setTimeout(function(){
        loader.style.transition = 'opacity 0.55s ease';
        loader.style.opacity = '0';

        setTimeout(function(){
          loader.classList.add('gone');

          var navEl = document.getElementById('nav');
          var hcards = document.querySelectorAll('.hero-card');
          var scrollHint = document.querySelector('.hero-scroll-hint');
          if(navEl){ navEl.style.opacity='0'; navEl.style.transition='opacity 0.45s ease,transform 0.45s cubic-bezier(0.34,1.4,0.64,1)'; navEl.style.transform='translateX(-50%) translateY(-10px)'; }
          hcards.forEach(function(c){ c.style.opacity='0'; c.style.transform='translateY(20px)'; });
          if(scrollHint){ scrollHint.style.opacity='0'; }

          document.body.classList.remove('loading');

          requestAnimationFrame(function(){ requestAnimationFrame(function(){
            if(navEl){ navEl.style.opacity=''; navEl.style.transform=''; }
            hcards.forEach(function(c, i){
              c.style.transition='opacity 0.45s ease '+(0.07*i+0.08)+'s,transform 0.5s cubic-bezier(0.34,1.4,0.64,1) '+(0.07*i+0.08)+'s';
              c.style.opacity=''; c.style.transform='';
            });
            setTimeout(function(){
              var heroName = document.querySelector('.hero-name-wrap');
              if(heroName) heroName.classList.add('enter');
            }, 220);
            setTimeout(function(){
              if(scrollHint){ scrollHint.style.transition='opacity 0.5s ease'; scrollHint.style.opacity='1'; }
            }, 480);
          }); });

          checkInView();
        }, 620);
      }, 560);
    }, 760);
  }, 2100);
}


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
document.querySelectorAll('a,button,.hero-card,.bento-work-card,.gallery-item,.obsession-card,.sc-card,.testimonial-card,.contact-link,.q-chip,.conv-replay').forEach(el=>{el.addEventListener('mouseenter',()=>{if(cursor)cursor.classList.add('big');});el.addEventListener('mouseleave',()=>{if(cursor)cursor.classList.remove('big');});});

// ── TYPING ANIMATION ──
const ROLES=['product designer','ux researcher','storyteller'];
const TYPE_SPEED=80,DELETE_SPEED=45,PAUSE_AFTER=2000,PAUSE_BEFORE=400;
const typedEl=document.getElementById('typed-role');
let roleIdx=0,charIdx=0,isDeleting=false;
function type(){if(!typedEl)return;const word=ROLES[roleIdx];if(!isDeleting){typedEl.textContent=word.slice(0,charIdx+1);charIdx++;if(charIdx===word.length){isDeleting=true;setTimeout(type,PAUSE_AFTER);return;}setTimeout(type,TYPE_SPEED);}else{typedEl.textContent=word.slice(0,charIdx-1);charIdx--;if(charIdx===0){isDeleting=false;roleIdx=(roleIdx+1)%ROLES.length;setTimeout(type,PAUSE_BEFORE);return;}setTimeout(type,DELETE_SPEED);}}
setTimeout(type,1000);

// ── NAV ──
const nav=document.getElementById('nav'),navLinks=document.querySelectorAll('.nav-link-item');
const navIndicator=document.querySelector('.nav-active-indicator');
function positionNavIndicator(activeLink){
  if(!nav||!navIndicator||!activeLink)return;
  const navRect=nav.getBoundingClientRect();
  const linkRect=activeLink.getBoundingClientRect();
  navIndicator.style.width=linkRect.width+'px';
  navIndicator.style.transform='translateX('+(linkRect.left-navRect.left)+'px)';
}
function updateNav(){
  const about=document.getElementById('about');
  const current=about&&about.getBoundingClientRect().top<=120?'about':'work';
  let activeLink=null;
  navLinks.forEach(a=>{const isActive=a.getAttribute('href').replace('#','')===current;a.classList.toggle('active',isActive);if(isActive)activeLink=a;});
  positionNavIndicator(activeLink);
}

// ── SCROLL REVEAL ──
const reveals=document.querySelectorAll('.reveal');
const tlItems=document.querySelectorAll('.timeline-item');

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
  // Hero
  { sel: '.hero-name-wrap',     speed: -0.06 },
  { sel: '.hero-cards',         speed: -0.04 },
  { sel: '.hero-scroll-hint',   speed: -0.03 },

  // Work
  { sel: '.work-heading-wrap',  speed: -0.04 },
  { sel: '.work-title-script',  speed: -0.06 },
  { sel: '.bento-work-card:nth-child(odd)',  speed: -0.030 },
  { sel: '.bento-work-card:nth-child(even)', speed: -0.018 },

  // About
  { sel: '.about-ed-title',      speed: -0.04 },
  { sel: '.about-ed-text-wrap',  speed: -0.03 },

  // Process
  { sel: '.process-main-title',                              speed: -0.05 },
  { sel: '.process-phase:nth-child(1) .process-phase-left', speed: -0.03 },
  { sel: '.process-phase:nth-child(3) .process-phase-left', speed: -0.04 },
  { sel: '.process-phase:nth-child(5) .process-phase-left', speed: -0.03 },

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

// ── CONVERSATION ──
(function(){
  var EXCHANGES=[
    {pm:"Users are dropping off. Can you just redesign the UI?",nik:"What's the one assumption we might be most wrong about?"},
    {pm:"...that more features = better?",nik:"That's it. That's where I start. Not wireframes."},
    {pm:"So nothing in Figma yet?",nik:"First I find the cheapest way to be wrong."},
    {pm:"When does research end?",nik:"It doesn't. Discovery runs in every sprint."},
    {pm:"How do you know when it's working?",nik:"I set the metric before the first frame."}
  ];
  var QA=[
    {q:"How fast can you move?",a:"First frame in 48h if the brief is clear."},
    {q:"What if I have no brief?",a:"Good. We write it together — that's where real design starts."},
    {q:"Do you work with devs?",a:"Always in the same doc, same sprint."},
    {q:"What tools do you use?",a:"Figma, Claude, v0 — lenses. The thinking is mine."}
  ];
  var EMPTY_HTML='<div class="conv-empty" id="convEmptyState"><div class="conv-empty-bubbles"><div class="conv-empty-bubble eb-pm"></div><div class="conv-empty-bubble eb-nik"></div><div class="conv-empty-bubble eb-pm eb-short"></div></div><span class="conv-empty-label">loading</span></div>';
  var convBody=document.getElementById('convBody');
  var convWindow=document.getElementById('convWindow');
  var convStage=document.getElementById('convStage');
  var convReplay=document.getElementById('convReplay');
  var qChips=document.getElementById('qChips');
  var qConnect=document.getElementById('qConnect');
  if(!convBody)return;
  var step=0,playing=false,started=false,observer;
  function typingMs(t){var l=t.length;return l<40?900:l<70?1200:1500;}
  function scrollBottom(){convBody.scrollTop=convBody.scrollHeight;}
  function makeRow(isPM){
    var row=document.createElement('div');
    row.className='conv-msg '+(isPM?'pm':'nik');
    var av=document.createElement('div');
    av.className='conv-av '+(isPM?'pm-av':'nik-av');
    av.textContent=isPM?'PM':'NT';
    var bwrap=document.createElement('div');
    bwrap.className='conv-bubble-wrap';
    row.appendChild(av);
    row.appendChild(bwrap);
    return {row:row,av:av,bwrap:bwrap};
  }
  function addMsg(isPM,text){
    return new Promise(function(resolve){
      var parts=makeRow(isPM);
      var typ=document.createElement('div');
      typ.className='conv-typing';
      typ.innerHTML='<div class="conv-typing-dot"></div><div class="conv-typing-dot"></div><div class="conv-typing-dot"></div>';
      parts.bwrap.appendChild(typ);
      parts.av.classList.add('conv-av-pulse');
      convBody.appendChild(parts.row);
      scrollBottom();
      setTimeout(function(){
        parts.av.classList.remove('conv-av-pulse');
        var bub=document.createElement('div');
        bub.className='conv-bubble '+(isPM?'conv-msg-enter-pm':'conv-msg-enter-nik');
        bub.textContent=text;
        parts.bwrap.replaceChild(bub,typ);
        scrollBottom();
        resolve();
      },typingMs(text));
    });
  }
  function showSplit(){
    setTimeout(function(){
      if(convStage)convStage.classList.add('split');
      if(convReplay)convReplay.classList.add('show');
    },800);
  }
  function runNext(){
    if(playing||step>=EXCHANGES.length)return;
    playing=true;
    if(step===0){var es=document.getElementById('convEmptyState');if(es)es.remove();}
    var ex=EXCHANGES[step];
    addMsg(true,ex.pm).then(function(){
      return new Promise(function(r){setTimeout(r,500);});
    }).then(function(){
      return addMsg(false,ex.nik);
    }).then(function(){
      step++;playing=false;
      if(step<EXCHANGES.length){setTimeout(runNext,2200);}
      else{showSplit();}
    });
  }
  if(qChips){
    qChips.addEventListener('click',function(e){
      var chip=e.target.closest('.q-chip');
      if(!chip||chip.classList.contains('used'))return;
      var idx=parseInt(chip.getAttribute('data-q'),10);
      var qa=QA[idx];
      if(!qa)return;
      chip.classList.add('used');
      addMsg(true,qa.q).then(function(){
        return new Promise(function(r){setTimeout(r,400);});
      }).then(function(){
        return addMsg(false,qa.a);
      }).then(function(){
        setTimeout(function(){if(qConnect)qConnect.classList.add('show');},600);
      });
    });
  }
  function reset(){
    step=0;playing=false;started=false;
    if(convBody)convBody.innerHTML=EMPTY_HTML;
    if(convStage)convStage.classList.remove('split');
    if(qConnect)qConnect.classList.remove('show');
    if(convReplay)convReplay.classList.remove('show');
    document.querySelectorAll('.q-chip').forEach(function(c){c.classList.remove('used');});
    if(convWindow&&observer)observer.observe(convWindow);
  }
  observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting&&!started){
        started=true;
        observer.unobserve(entry.target);
        setTimeout(runNext,900);
      }
    });
  },{threshold:0.3});
  if(convWindow)observer.observe(convWindow);
  if(convReplay)convReplay.addEventListener('click',function(){reset();setTimeout(runNext,900);});
})();

var bgSections=Array.from(document.querySelectorAll('.work,.journey,.about,.gallery-section,.testimonials-section,.process-section,.contact,.scrapbook-section'));
window.addEventListener('scroll',function(){bgSections.forEach(function(section){var rect=section.getBoundingClientRect();section.style.backgroundPositionY=(rect.top/window.innerHeight*20)+'px';});},{passive:true});

initParallax();
runParallax();

// ── GRAVITY SHAPES ──
(function(){
  var section=document.getElementById('contact');
  var canvas=document.getElementById('gravCanvas');
  if(!section||!canvas)return;
  var shapes=Array.from(canvas.querySelectorAll('.grav-shape'));
  if(!shapes.length)return;

  var homes=[];
  function measureHomes(){
    homes=shapes.map(function(s){
      return{x:s.offsetLeft+s.offsetWidth/2,y:s.offsetTop+s.offsetHeight/2};
    });
  }
  requestAnimationFrame(function(){requestAnimationFrame(measureHomes);});
  window.addEventListener('resize',function(){requestAnimationFrame(measureHomes);},{passive:true});

  var cx=[],cy=[],tx=[],ty=[];
  shapes.forEach(function(){cx.push(0);cy.push(0);tx.push(0);ty.push(0);});

  var mx=-9999,my=-9999,inSection=false;
  var RADIUS=170,PULL=0.38,LERP=0.09;

  section.addEventListener('mousemove',function(e){
    var cr=canvas.getBoundingClientRect();
    mx=e.clientX-cr.left;my=e.clientY-cr.top;inSection=true;
  });
  section.addEventListener('mouseleave',function(){inSection=false;mx=-9999;my=-9999;});

  var running=false;
  function animate(){
    if(!running)return;
    shapes.forEach(function(shape,i){
      if(!homes[i])return;
      var hx=homes[i].x,hy=homes[i].y,ox=0,oy=0;
      if(inSection){
        var dx=mx-hx,dy=my-hy,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<RADIUS&&dist>1){var f=(1-dist/RADIUS)*PULL;ox=dx*f;oy=dy*f;}
      }
      tx[i]=ox;ty[i]=oy;
      cx[i]+=(tx[i]-cx[i])*LERP;
      cy[i]+=(ty[i]-cy[i])*LERP;
      shape.style.transform='translate('+cx[i].toFixed(2)+'px,'+cy[i].toFixed(2)+'px)';
    });
    requestAnimationFrame(animate);
  }

  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){running=true;animate();}
      else{running=false;}
    });
  },{threshold:0});
  obs.observe(section);
})();`;

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
