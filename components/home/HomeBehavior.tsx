"use client";

import { useEffect } from "react";

const script = `// ── WATER SURFACE HOVER EFFECT ──
(function(){
  var hoverSelector='a,button,.hero-card,.pw-row,.gallery-item,.obsession-card,.sc-card,.testimonial-card,.contact-link,.ama-chip';
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
const cursorGlow=document.getElementById('cursorGlow');
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
  if(glassOrb){
    glassOrb.style.left=e.clientX+'px';
    glassOrb.style.top=e.clientY+'px';
    if(!glassVisible){glassVisible=true;if(!orbOverText)glassOrb.style.opacity='1';}
  }
  const hero=document.getElementById('home');
  if(hero&&cursorGlow){const rect=hero.getBoundingClientRect();if(e.clientY>=rect.top&&e.clientY<=rect.bottom){cursorGlow.style.left=(e.clientX-rect.left)+'px';cursorGlow.style.top=(e.clientY-rect.top)+'px';}}
});


// ── NAV ──
const nav=document.getElementById('nav'),navLinks=document.querySelectorAll('.nav-link-item');
function updateNav(){}
// ── NAV CLOCK (IST) ──
(function(){
  var clockEl=document.getElementById('nav-clock');
  if(!clockEl)return;
  function getIST(){var ist=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));var h=ist.getHours(),m=ist.getMinutes();var ap=h>=12?'PM':'AM';h=h%12||12;return h+':'+String(m).padStart(2,'0')+' '+ap;}
  clockEl.textContent=getIST();setInterval(function(){clockEl.textContent=getIST();},1000);
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

window.addEventListener('scroll',()=>{if(nav)nav.classList.toggle('scrolled',window.scrollY>20);updateNav();checkInView();runParallax();updateScrollTube();},{passive:true});
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


// ── DESIGN SYSTEM PROGRESS BARS ──
(function(){
  var bars=Array.from(document.querySelectorAll('.dsz-bar-anim'));
  if(!bars.length)return;
  var section=document.getElementById('ds-zoom');
  if(!section)return;
  var fired=false;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting&&!fired){
        fired=true;
        bars.forEach(function(bar,i){
          setTimeout(function(){
            bar.style.width=(bar.dataset.width||'0')+'%';
          },300+i*120);
        });
        obs.disconnect();
      }
    });
  },{threshold:0.3});
  obs.observe(section);
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

})();

var bgSections=Array.from(document.querySelectorAll('.work,.journey,.contact'));
window.addEventListener('scroll',function(){bgSections.forEach(function(section){var rect=section.getBoundingClientRect();section.style.backgroundPositionY=(rect.top/window.innerHeight*20)+'px';});},{passive:true});

initParallax();
runParallax();


// ── ASK ME ANYTHING ──
(function(){
  var input=document.getElementById('amaInput');
  var clearBtn=document.getElementById('amaClear');
  var chipsEl=document.getElementById('amaChips');
  var answerEl=document.getElementById('amaAnswer');
  if(!input||!clearBtn||!chipsEl||!answerEl)return;

  var answers={
    'Who is Nik?':'<span class="ama-head">A product designer who obsesses over the details nobody notices but everybody feels</span> <span class="ama-emoji">✦</span><br><br>Currently building AIR iQ — a flight booking system that makes complex feel effortless <span class="ama-emoji">✈️</span><br><br>Based in India, always thinking in systems <span class="ama-emoji">🧩</span>',
    'What does Nik design?':'<span class="ama-head">Interfaces that don\'t just work — they <em>feel</em> right</span> <span class="ama-emoji">✦</span><br><br>From AI-powered tools to booking flows, the goal is always the same: make the complex feel inevitable <span class="ama-emoji">🎯</span><br><br>Typography, motion, spacing — the invisible details that make everything click',
    'What coffee does Nik prefer?':'<span class="ama-head">Cold coffee. Always cold</span> <span class="ama-emoji">☕</span><br><br>Hot coffee is a crime against iced americanos <span class="ama-emoji">🧊</span><br><br>Corner seat, headphones on, Figma open — the holy trinity of a good design day',
    'What is Nik looking for?':'<span class="ama-head">A team that ships things people actually love</span> <span class="ama-emoji">🚀</span><br><br>A role where design decisions matter — not just the UI, but the whole experience<br><br>Work that keeps Nik up at night (in a good way) <span class="ama-emoji">✦</span>',
    'What does Nik love outside design?':'<span class="ama-head">Lo-fi playlists at 2am</span> <span class="ama-emoji">🎵</span> · Harry Potter reruns · Cold coffee (yes, again ☕)<br><br>Film photography before it was trendy <span class="ama-emoji">📷</span><br><br>The kind of playlist that fits exactly how you feel — ask Nik, she\'ll deliver',
    "What makes Nik's process different?":'<span class="ama-head">Systems thinking from day one — not decoration, not afterthought</span> <span class="ama-emoji">🧩</span><br><br>The first question is always "why does this exist?" — not "how should this look?"<br><br>Prototype first. Argue later. Ship it clean <span class="ama-emoji">✦</span>'
  };

  function showAnswer(q){
    var answer=answers[q];
    if(!answer)return;
    chipsEl.style.opacity='0';
    chipsEl.style.pointerEvents='none';
    answerEl.classList.remove('visible');
    answerEl.innerHTML=answer;
    setTimeout(function(){answerEl.classList.add('visible');},50);
    clearBtn.classList.add('visible');
    var cl=document.querySelector('.contact-left');
    if(cl)cl.classList.add('has-answer');
  }

  function clearSearch(){
    input.value='';
    clearBtn.classList.remove('visible');
    answerEl.classList.remove('visible');
    chipsEl.style.opacity='1';
    chipsEl.style.pointerEvents='';
    setTimeout(function(){answerEl.innerHTML='';},450);
    var cl=document.querySelector('.contact-left');
    if(cl)cl.classList.remove('has-answer');
  }

  Array.from(chipsEl.querySelectorAll('.ama-chip')).forEach(function(chip){
    chip.addEventListener('click',function(){
      var q=chip.dataset.q;
      input.value=q;
      showAnswer(q);
    });
  });

  clearBtn.addEventListener('click',clearSearch);

  input.addEventListener('input',function(){
    var val=input.value.trim();
    if(val.length>0){
      clearBtn.classList.add('visible');
      var keys=Object.keys(answers);
      var match=keys.find(function(k){return k.toLowerCase().includes(val.toLowerCase());});
      if(!match)match=keys.find(function(k){return val.toLowerCase().split(' ').some(function(w){return w.length>3&&k.toLowerCase().includes(w);});});
      if(match)showAnswer(match);
    } else {
      clearSearch();
    }
  });

  input.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      var val=input.value.trim();
      if(!val)return;
      var match=Object.keys(answers).find(function(k){return k.toLowerCase().includes(val.toLowerCase());});
      if(match){showAnswer(match);}
      else{
        chipsEl.style.opacity='0';
        chipsEl.style.pointerEvents='none';
        answerEl.classList.remove('visible');
        answerEl.innerHTML='Try one of the chips below — Nik\'s answers are more interesting than Google\'s 😉';
        setTimeout(function(){answerEl.classList.add('visible');},50);
        clearBtn.classList.add('visible');
      }
    }
  });
})();

// ── HERO TYPEWRITER ──
(function(){
  var text='Nikunj';
  var tw=document.getElementById('hiTypewriter');
  var cursor=document.getElementById('hiTwCursor');
  if(!tw||!cursor)return;
  var i=0;
  function type(){
    tw.textContent=text.slice(0,i);
    if(i<=text.length){i++;setTimeout(type,105);}
    else{
      setTimeout(function(){
        cursor.style.animation='none';
        cursor.style.opacity='0';
      },1300);
    }
  }
  setTimeout(type,320);
})();

// ── COFFEE NUMBER RANDOMISER ──
(function(){
  var nums=['second','third','fourth','fifth','sixth'];
  var el=document.getElementById('hiCoffeeNum');
  if(!el)return;
  el.textContent=nums[Math.floor(Math.random()*nums.length)];
})();

// ── STRIKETHROUGH DRAW (delay) ──
(function(){
  var el=document.querySelector('.hi-strike-word');
  if(!el)return;
  setTimeout(function(){el.classList.add('strike-drawn');},2050);
})();

// ── STICKY NOTE: pop → float ──
(function(){
  var sc=document.querySelector('.hi-sticky-coffee');
  if(!sc)return;
  setTimeout(function(){sc.classList.add('float-on');},2850);
})();

// ── UNDERLINE DRAW ON SCROLL (good layout) ──
(function(){
  var el=document.querySelector('.hi-ul-draw');
  if(!el)return;
  var obs=new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){el.classList.add('ul-active');obs.disconnect();}
  },{threshold:0.8});
  obs.observe(el);
})();

// ── PAPER CLIP CARD STACK ──
(function(){
  var wrap=document.getElementById('hiCsWrap');
  if(!wrap)return;
  var cards=Array.from(wrap.querySelectorAll('.hi-cs-card'));
  var cur=0,busy=false;

  wrap.addEventListener('click',function(){
    if(busy)return;busy=true;
    var exitCard=cards[cur];
    var next=(cur+1)%cards.length;
    var enterCard=cards[next];

    // Kick off exit
    exitCard.classList.remove('hi-cs-active');
    exitCard.classList.add('hi-cs-exiting');

    // Kick off enter simultaneously
    enterCard.classList.remove('hi-cs-behind');
    enterCard.classList.add('hi-cs-entering');

    setTimeout(function(){
      exitCard.classList.remove('hi-cs-exiting');
      exitCard.classList.add('hi-cs-behind');
      enterCard.classList.remove('hi-cs-entering');
      enterCard.classList.add('hi-cs-active');
      cur=next;
      busy=false;
    },295);
  });
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
