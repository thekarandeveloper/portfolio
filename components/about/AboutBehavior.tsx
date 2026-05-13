"use client";

import { useEffect } from "react";

const script = `
// CURSOR
var abCursor = document.getElementById('ab-cursor');
document.addEventListener('mousemove', function(e) {
  if (abCursor) { abCursor.style.left = e.clientX + 'px'; abCursor.style.top = e.clientY + 'px'; }
});
document.querySelectorAll('a, button, .ab-love-card, .ab-frame, .ab-polaroid').forEach(function(el) {
  el.addEventListener('mouseenter', function() { if (abCursor) abCursor.classList.add('ab-cursor-big'); });
  el.addEventListener('mouseleave', function() { if (abCursor) abCursor.classList.remove('ab-cursor-big'); });
});

// NAV CLOCK
(function() {
  var el = document.getElementById('ab-clock');
  if (!el) return;
  function tick() {
    var n = new Date();
    el.textContent = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);
})();

// NAV SCROLL STYLE
(function() {
  var nav = document.getElementById('ab-nav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.style.background = window.scrollY > 40
      ? 'rgba(255,255,255,0.7)'
      : 'rgba(255,255,255,0.45)';
    nav.style.boxShadow = window.scrollY > 40
      ? '0 6px 32px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.04)'
      : '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)';
  }, { passive: true });
})();

// SCROLL REVEAL
(function() {
  var els = document.querySelectorAll('.ab-reveal');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('ab-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -4% 0px' });
  els.forEach(function(el) { obs.observe(el); });
})();

// DRAGGABLE FILM SCROLL
(function() {
  var wrap = document.getElementById('ab-frames');
  if (!wrap) return;
  var isDragging = false, startX = 0, scrollLeft = 0;
  wrap.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.pageX - wrap.offsetLeft;
    scrollLeft = wrap.scrollLeft;
    wrap.style.cursor = 'grabbing';
  });
  document.addEventListener('mouseup', function() {
    isDragging = false;
    if (wrap) wrap.style.cursor = 'grab';
  });
  wrap.addEventListener('mouseleave', function() { isDragging = false; });
  wrap.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    e.preventDefault();
    var x = e.pageX - wrap.offsetLeft;
    var walk = (x - startX) * 1.6;
    wrap.scrollLeft = scrollLeft - walk;
  });

  // momentum on touch
  var touchStartX = 0, touchScrollLeft = 0;
  wrap.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchScrollLeft = wrap.scrollLeft;
  }, { passive: true });
  wrap.addEventListener('touchmove', function(e) {
    var dx = touchStartX - e.touches[0].clientX;
    wrap.scrollLeft = touchScrollLeft + dx;
  }, { passive: true });
})();

// POLAROID TILT ON MOVE
(function() {
  var pol = document.querySelector('.ab-polaroid');
  if (!pol) return;
  pol.addEventListener('mousemove', function(e) {
    var rect = pol.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var rx = (e.clientY - cy) / rect.height * 8;
    var ry = (cx - e.clientX) / rect.width * 8;
    pol.style.transform = 'rotate(0deg) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.03)';
  });
  pol.addEventListener('mouseleave', function() {
    pol.style.transform = 'rotate(3.5deg)';
    pol.style.transition = 'transform 0.6s cubic-bezier(0.34,1.4,0.64,1)';
    setTimeout(function() { pol.style.transition = ''; }, 600);
  });
})();
`;

export function AboutBehavior() {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.textContent = `(function(){
      if (window.__aboutBehaviorReady) return;
      window.__aboutBehaviorReady = true;
      ${script}
    })();`;
    document.body.appendChild(tag);
    return () => {
      tag.remove();
      (window as any).__aboutBehaviorReady = false;
    };
  }, []);
  return null;
}
