"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const THEME_FOOTER: Record<string, { bg: string; grid: string }> = {
  "/projects/airiq":    { bg: "#f6f8fb", grid: "rgba(30,144,255,0.07)" },
  "/projects/biblofi":  { bg: "#FFFDF8", grid: "rgba(0,0,0,0.045)" },
  "/projects/ecotrack": { bg: "#F2FAF3", grid: "rgba(45,125,67,0.07)" },
  "/projects/care-autor":{ bg: "#f4f8ff", grid: "rgba(0,119,182,0.07)" },
  "/projects/project-5":{ bg: "#f4f8ff", grid: "rgba(16,118,188,0.07)" },
};

const footerCSS = `
.gf-root{
  padding:5rem 200px;
  overflow:visible;
  position:relative;
}
.gf-glow{position:absolute;top:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(30,144,255,0.06) 0%,transparent 70%);pointer-events:none;}
.gf-flex{display:flex;align-items:center;gap:5rem;position:relative;z-index:1;overflow:visible;}
.gf-left{flex-shrink:0;width:370px;}
.gf-right{flex:1;max-width:480px;margin-left:auto;text-align:right;}
.gf-title{font-family:var(--font-caveat,'Caveat',cursive);font-size:clamp(3.2rem,7vw,5.5rem);font-weight:700;color:#111111;line-height:1.25;margin-bottom:1.25rem;padding:0.2em 0.15em 0;overflow:visible;text-align:right;}
.gf-title .gf-coffee{color:#1E90FF;}
.gf-sub{font-family:'DM Serif Display',Georgia,serif;font-size:1.1rem;font-style:italic;color:#7a7069;line-height:1.65;margin-bottom:2.75rem;max-width:400px;text-align:right;margin-left:auto;}
.gf-links{display:flex;flex-direction:column;margin-bottom:3.5rem;max-width:400px;margin-left:auto;}
.gf-link{display:flex;align-items:center;justify-content:space-between;padding:1rem 0;border-bottom:1px solid rgba(0,0,0,0.08);text-decoration:none;color:#111111;transition:padding-left 0.25s;}
.gf-link:first-child{border-top:1px solid rgba(0,0,0,0.08);}
.gf-link:hover{padding-left:0.75rem;}
.gf-link-left{display:flex;align-items:center;gap:1rem;}
.gf-link-platform{font-family:Lato,sans-serif;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#b0a89f;min-width:90px;flex-shrink:0;}
.gf-link-value{font-family:'DM Serif Display',Georgia,serif;font-size:1rem;color:#7a7069;transition:color 0.2s;}
.gf-link:hover .gf-link-value{color:#1E90FF;}
.gf-link-arrow{font-size:15px;color:#b0a89f;transition:transform 0.2s,color 0.2s;}
.gf-link:hover .gf-link-arrow{transform:translate(3px,-3px);color:#1E90FF;}
.gf-footer-bar{display:flex;justify-content:flex-end;align-items:center;padding-top:2rem;border-top:1px solid rgba(0,0,0,0.08);flex-wrap:wrap;gap:1rem;}
.gf-footer-name{font-family:Lato,sans-serif;font-size:13px;color:#7a7069;}
.gf-footer-hand{font-family:var(--font-caveat,'Caveat',cursive);font-size:0.95rem;color:#7a7069;}
.gf-footer-copy{font-size:13px;letter-spacing:0.06em;color:#b0a89f;}
/* google search mock */
.gf-gsearch-bar{display:flex;align-items:center;background:transparent;border:none;border-bottom:1.5px solid rgba(30,144,255,0.2);padding:10px 4px 12px;gap:10px;margin-bottom:20px;width:100%;}
.gf-gsearch-icon{width:18px;height:18px;flex-shrink:0;opacity:0.45;}
.gf-gsearch-query{flex:1;font-family:Lato,sans-serif;font-size:15px;color:#222222;letter-spacing:0.01em;min-height:1.2em;}
.gf-gsearch-caret{color:#1E90FF;font-weight:300;animation:gfCaret 1.1s step-end infinite;font-size:1rem;line-height:1;}
@keyframes gfCaret{0%,100%{opacity:1;}50%{opacity:0;}}
.gf-gsearch-results{display:flex;flex-direction:column;gap:10px;}
.gf-gsearch-item{display:flex;align-items:center;gap:12px;padding:13px 16px;background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:14px;box-shadow:0 2px 10px rgba(0,0,0,0.05);opacity:0;transform:translateY(8px);transition:opacity 0.38s ease,transform 0.38s ease,box-shadow 0.2s,border-color 0.2s;}
.gf-gsearch-item.gf-gs-visible{opacity:1;transform:translateY(0);}
.gf-gsearch-item:hover{box-shadow:0 4px 18px rgba(30,100,200,0.11);border-color:rgba(30,144,255,0.22);}
.gf-gsearch-item-icon{width:30px;height:30px;border-radius:50%;background:rgba(30,144,255,0.08);display:flex;align-items:center;justify-content:center;font-size:15px;color:#1E90FF;flex-shrink:0;}
.gf-gsearch-item-text{flex:1;font-family:Lato,sans-serif;font-size:15px;color:#222222;font-weight:600;}
.gf-gsearch-item-tag{font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#b0a89f;background:rgba(30,144,255,0.07);padding:2px 8px;border-radius:10px;white-space:nowrap;}
@media(max-width:768px){
  .gf-flex{flex-direction:column;gap:2rem;}
  .gf-left{width:100%;}
  .gf-right{max-width:100%;text-align:left;}
  .gf-title,.gf-sub{text-align:left;}
  .gf-links{margin-left:0;}
  .gf-footer-bar{justify-content:flex-start;}
}
/* ── Dark mode ── */
.dark .gf-title{color:#ede8e3;}
.dark .gf-sub{color:rgba(237,232,227,0.48);}
.dark .gf-link{color:#ede8e3;border-bottom-color:rgba(255,255,255,0.07);}
.dark .gf-link:first-child{border-top-color:rgba(255,255,255,0.07);}
.dark .gf-link:hover{padding-left:0.75rem;}
.dark .gf-link-platform{color:rgba(237,232,227,0.28);}
.dark .gf-link-value{color:rgba(237,232,227,0.52);}
.dark .gf-link:hover .gf-link-value{color:#1E90FF;}
.dark .gf-link-arrow{color:rgba(237,232,227,0.25);}
.dark .gf-link:hover .gf-link-arrow{color:#1E90FF;}
.dark .gf-footer-bar{border-top-color:rgba(255,255,255,0.07);}
.dark .gf-footer-name{color:rgba(237,232,227,0.32);}
.dark .gf-footer-hand{color:rgba(237,232,227,0.32);}
.dark .gf-footer-copy{color:rgba(237,232,227,0.20);}
.dark .gf-gsearch-bar{border-bottom-color:rgba(30,144,255,0.18);}
.dark .gf-gsearch-icon path,.dark .gf-gsearch-icon circle{stroke:rgba(237,232,227,0.25);}
.dark .gf-gsearch-query{color:rgba(237,232,227,0.65);}
.dark .gf-gsearch-item{background:#1c1917;border-color:rgba(255,255,255,0.07);box-shadow:0 2px 10px rgba(0,0,0,0.25);}
.dark .gf-gsearch-item:hover{box-shadow:0 4px 18px rgba(30,100,200,0.15);border-color:rgba(30,144,255,0.22);}
.dark .gf-gsearch-item-icon{background:rgba(30,144,255,0.10);}
.dark .gf-gsearch-item-text{color:rgba(237,232,227,0.70);}
.dark .gf-gsearch-item-tag{color:rgba(237,232,227,0.35);background:rgba(30,144,255,0.09);}
`;

const footerHTML = `
<div class="gf-root">
  <div class="gf-glow"></div>
  <div class="gf-flex">

    <!-- LEFT: google search mock -->
    <div class="gf-left">
      <div class="gf-gsearch-bar">
        <svg class="gf-gsearch-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#9aa0a6" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="#9aa0a6" stroke-width="2" stroke-linecap="round"/></svg>
        <span class="gf-gsearch-query" id="gfSearchQuery"></span><span class="gf-gsearch-caret">|</span>
      </div>
      <div class="gf-gsearch-results" id="gfSearchResults"></div>
    </div>

    <!-- RIGHT: contact links -->
    <div class="gf-right">
      <h2 class="gf-title">Let&rsquo;s grab<br>a <span class="gf-coffee">coffee</span> ☕</h2>
      <p class="gf-sub">Whether it&rsquo;s a role, a collab, or just a good conversation about design, I&rsquo;m always up for it.</p>
      <div class="gf-links">
        <a href="mailto:tyaginikunj26@gmail.com" class="gf-link">
          <div class="gf-link-left"><span class="gf-link-platform">Email</span><span class="gf-link-value">tyaginikunj26@gmail.com</span></div>
          <span class="gf-link-arrow">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/nikunj-tyagi26/" target="_blank" rel="noopener noreferrer" class="gf-link">
          <div class="gf-link-left"><span class="gf-link-platform">LinkedIn</span><span class="gf-link-value">nikunj-tyagi26</span></div>
          <span class="gf-link-arrow">↗</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="gf-link">
          <div class="gf-link-left"><span class="gf-link-platform">Instagram</span><span class="gf-link-value">@nikunj</span></div>
          <span class="gf-link-arrow">↗</span>
        </a>
      </div>
      <div class="gf-footer-bar">
        <span class="gf-footer-name">Nikunj Tyagi · Product Designer</span>
        <span class="gf-footer-hand">made with ☕ &amp; obsession</span>
        <span class="gf-footer-copy">© 2026</span>
      </div>
    </div>

  </div>
</div>
`;

export function GlobalFooter() {
  const pathname = usePathname();
  const theme = THEME_FOOTER[pathname] ?? { bg: "#ffffff", grid: "rgba(0,0,0,0.038)" };

  useEffect(() => {
    const queryEl = document.getElementById("gfSearchQuery");
    const resultsEl = document.getElementById("gfSearchResults");
    if (!queryEl || !resultsEl) return;

    const searches = [
      {
        q: "Who is Nikunj?",
        items: [
          { icon: "✦", text: "Product Designer", tag: "role" },
          { icon: "✦", text: "UX Researcher", tag: "role" },
          { icon: "✦", text: "Problem Solver", tag: "trait" },
          { icon: "✦", text: "Systems Thinker", tag: "trait" },
        ],
      },
      {
        q: "What does she love?",
        items: [
          { icon: "✦", text: "Obsessing over pixels", tag: "always" },
          { icon: "☕", text: "Cold coffee", tag: "fuel" },
          { icon: "✦", text: "Clean typography", tag: "passion" },
          { icon: "🎵", text: "Lo-fi while designing", tag: "vibe" },
        ],
      },
      {
        q: "Where can you find her?",
        items: [
          { icon: "☕", text: "Corner seat at a café", tag: "usually" },
          { icon: "✦", text: "Deep in Figma", tag: "obviously" },
          { icon: "✦", text: "Late nights, building", tag: "always" },
          { icon: "✦", text: "tyaginikunj26@gmail.com", tag: "reach out" },
        ],
      },
      {
        q: "Which coffee?",
        items: [
          { icon: "🧊", text: "Cold coffee", tag: "always" },
          { icon: "☕", text: "Extra ice, every time", tag: "non-negotiable" },
          { icon: "✦", text: "Never hot, ever", tag: "firm stance" },
          { icon: "✦", text: "Iced americano > life", tag: "truth" },
        ],
      },
    ];

    let cur = 0;
    let started = false;

    function build(items: { icon: string; text: string; tag: string }[]) {
      resultsEl!.innerHTML = "";
      items.forEach((it) => {
        const d = document.createElement("div");
        d.className = "gf-gsearch-item";
        d.innerHTML = `<div class="gf-gsearch-item-icon">${it.icon}</div><span class="gf-gsearch-item-text">${it.text}</span><span class="gf-gsearch-item-tag">${it.tag}</span>`;
        resultsEl!.appendChild(d);
      });
    }

    function showResults() {
      Array.from(resultsEl!.querySelectorAll(".gf-gsearch-item")).forEach(
        (el, i) => {
          setTimeout(() => el.classList.add("gf-gs-visible"), i * 120);
        }
      );
    }

    function hideResults(cb: () => void) {
      const els = Array.from(
        resultsEl!.querySelectorAll(".gf-gsearch-item")
      ).reverse();
      els.forEach((el, i) => {
        setTimeout(() => el.classList.remove("gf-gs-visible"), i * 70);
      });
      setTimeout(cb, els.length * 70 + 180);
    }

    function typeQ(q: string, cb: () => void) {
      let i = 0;
      (function step() {
        if (i < q.length) {
          queryEl!.textContent = q.slice(0, ++i);
          setTimeout(step, 55 + Math.random() * 35);
        } else {
          cb();
        }
      })();
    }

    function delQ(cb: () => void) {
      (function step() {
        const t = queryEl!.textContent ?? "";
        if (t.length) {
          queryEl!.textContent = t.slice(0, -1);
          setTimeout(step, 28);
        } else {
          cb();
        }
      })();
    }

    function run(idx: number) {
      const s = searches[idx];
      const isLast = idx === searches.length - 1;
      build(s.items);
      typeQ(s.q, () => {
        setTimeout(() => {
          showResults();
          if (isLast) return;
          setTimeout(() => {
            hideResults(() => {
              delQ(() => {
                setTimeout(() => run(idx + 1), 320);
              });
            });
          }, 2600);
        }, 380);
      });
    }

    const root = document.querySelector(".gf-root");
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            setTimeout(() => run(0), 400);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(root);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: footerCSS }} />
      <footer
        dangerouslySetInnerHTML={{ __html: footerHTML }}
        style={{
          backgroundColor: theme.bg,
          backgroundImage: `linear-gradient(${theme.grid} 1px,transparent 1px),linear-gradient(90deg,${theme.grid} 1px,transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </>
  );
}
