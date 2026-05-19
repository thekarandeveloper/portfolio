"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const THEME_FOOTER: Record<string, { bg: string; grid: string }> = {
  "/projects/airiq":    { bg: "#f6f8fb", grid: "rgba(30,144,255,0.07)" },
  "/projects/biblofi":  { bg: "#FFFDF8", grid: "rgba(0,0,0,0.045)" },
  "/projects/ecotrack": { bg: "#F2FAF3", grid: "rgba(45,125,67,0.07)" },
  "/projects/care-autor":{ bg: "#f4f8ff", grid: "rgba(0,119,182,0.07)" },
  "/projects/project-5":{ bg: "#f4f8ff", grid: "rgba(16,118,188,0.07)" },
};

const EMAIL = "tyaginikunj26@gmail.com";

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
.gf-link{display:flex;align-items:center;justify-content:space-between;padding:1rem 0;border-bottom:1px solid rgba(0,0,0,0.08);text-decoration:none;color:#111111;transition:padding-left 0.25s;cursor:pointer;background:none;border-left:none;border-right:none;border-top:none;width:100%;font-family:inherit;}
.gf-link:first-child{border-top:1px solid rgba(0,0,0,0.08);}
.gf-link:hover{padding-left:0.75rem;}
.gf-link-left{display:flex;align-items:center;gap:1rem;}
.gf-link-icon{width:34px;height:34px;border-radius:10px;background:rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.07);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.2s,border-color 0.2s;}
.gf-link:hover .gf-link-icon{background:rgba(30,144,255,0.08);border-color:rgba(30,144,255,0.2);}
.gf-link-icon svg{display:block;}
.gf-link-platform{font-family:Lato,sans-serif;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#b0a89f;min-width:90px;flex-shrink:0;}
.gf-link-value{font-family:'DM Serif Display',Georgia,serif;font-size:1rem;color:#7a7069;transition:color 0.2s;}
.gf-link:hover .gf-link-value{color:#1E90FF;}
.gf-link-arrow{font-size:15px;color:#b0a89f;transition:transform 0.2s,color 0.2s;}
.gf-link:hover .gf-link-arrow{transform:translate(3px,-3px);color:#1E90FF;}

/* Email copy interaction */
.gf-email-link{position:relative;}
.gf-email-copied{
  position:absolute;
  right:0;top:50%;transform:translateY(-50%);
  background:#111;color:#fff;
  font-family:Lato,sans-serif;font-size:12px;letter-spacing:0.08em;
  padding:4px 10px;border-radius:99px;
  opacity:0;pointer-events:none;
  transition:opacity 0.25s ease,transform 0.25s ease;
  white-space:nowrap;
}
.gf-email-link.gf-copied .gf-email-copied{opacity:1;transform:translateY(-50%) translateX(-4px);}
.gf-email-link.gf-copied .gf-link-arrow{color:#22c55e;}
.gf-email-link.gf-copied .gf-link-value{color:#22c55e;}

.gf-footer-bar{display:flex;justify-content:flex-end;align-items:center;padding-top:2rem;border-top:1px solid rgba(0,0,0,0.08);flex-wrap:wrap;gap:1rem;}
.gf-footer-name{font-family:Lato,sans-serif;font-size:13px;color:#7a7069;}
.gf-footer-hand{font-family:var(--font-caveat,'Caveat',cursive);font-size:0.95rem;color:#7a7069;}
.gf-footer-copy{font-size:13px;letter-spacing:0.06em;color:#b0a89f;}

/* ── Interactive search ── */
.gf-chat-wrap{width:100%;}
.gf-chat-input-row{
  display:flex;align-items:center;
  background:#fff;
  border:1.5px solid rgba(0,0,0,0.09);
  border-radius:14px;
  padding:10px 14px;
  gap:10px;
  transition:border-color 0.2s,box-shadow 0.2s;
  box-shadow:0 2px 10px rgba(0,0,0,0.04);
  margin-bottom:14px;
}
.gf-chat-input-row:focus-within{
  border-color:rgba(30,144,255,0.45);
  box-shadow:0 2px 18px rgba(30,144,255,0.10);
}
.gf-chat-search-icon{width:18px;height:18px;flex-shrink:0;opacity:0.35;}
.gf-chat-input{
  flex:1;border:none;outline:none;background:transparent;
  font-family:Lato,sans-serif;font-size:15px;color:#222;
  letter-spacing:0.01em;
}
.gf-chat-input::placeholder{color:#b0a89f;}
.gf-chat-send{
  width:28px;height:28px;border-radius:8px;
  background:#1E90FF;border:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  opacity:0;transition:opacity 0.2s,transform 0.15s;
  flex-shrink:0;
}
.gf-chat-send.visible{opacity:1;}
.gf-chat-send:hover{transform:scale(1.08);}
.gf-chat-send svg{display:block;}

/* Response bubble */
.gf-chat-response{
  display:none;
  background:#fff;
  border:1px solid rgba(0,0,0,0.08);
  border-radius:14px;
  padding:14px 16px;
  box-shadow:0 2px 12px rgba(0,0,0,0.06);
  opacity:0;
  transform:translateY(8px);
  transition:opacity 0.38s ease,transform 0.38s ease;
}
.gf-chat-response.gf-chat-visible{
  display:block;
  opacity:1;
  transform:translateY(0);
}
.gf-chat-resp-meta{
  display:flex;align-items:center;gap:8px;
  margin-bottom:8px;
}
.gf-chat-resp-avatar{
  width:24px;height:24px;border-radius:50%;
  background:#1E90FF;
  display:flex;align-items:center;justify-content:center;
  font-size:11px;font-weight:700;color:#fff;
  font-family:Lato,sans-serif;letter-spacing:0.04em;
  flex-shrink:0;
}
.gf-chat-resp-name{
  font-family:Lato,sans-serif;font-size:12px;
  font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
  color:#1E90FF;
}
.gf-chat-resp-text{
  font-family:'DM Serif Display',Georgia,serif;
  font-size:1rem;font-style:italic;
  color:#3d2e28;line-height:1.6;
}
.gf-chat-resp-hint{
  margin-top:8px;
  font-family:Lato,sans-serif;font-size:12px;
  color:#b0a89f;
  display:flex;align-items:center;gap:6px;
}
.gf-chat-suggestions{
  display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;
}
.gf-chat-suggest{
  font-family:Lato,sans-serif;font-size:12px;
  color:#555;background:rgba(0,0,0,0.04);
  border:1px solid rgba(0,0,0,0.07);
  border-radius:99px;padding:4px 12px;cursor:pointer;
  transition:background 0.15s,border-color 0.15s,color 0.15s;
}
.gf-chat-suggest:hover{
  background:rgba(30,144,255,0.08);
  border-color:rgba(30,144,255,0.2);
  color:#1E90FF;
}
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
.dark .gf-link-icon{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.08);}
.dark .gf-link-platform{color:rgba(237,232,227,0.28);}
.dark .gf-link-value{color:rgba(237,232,227,0.52);}
.dark .gf-link:hover .gf-link-value{color:#1E90FF;}
.dark .gf-link-arrow{color:rgba(237,232,227,0.25);}
.dark .gf-link:hover .gf-link-arrow{color:#1E90FF;}
.dark .gf-footer-bar{border-top-color:rgba(255,255,255,0.07);}
.dark .gf-footer-name{color:rgba(237,232,227,0.32);}
.dark .gf-footer-hand{color:rgba(237,232,227,0.32);}
.dark .gf-footer-copy{color:rgba(237,232,227,0.20);}
.dark .gf-chat-input-row{background:#1c1917;border-color:rgba(255,255,255,0.08);}
.dark .gf-chat-input{color:rgba(237,232,227,0.7);}
.dark .gf-chat-response{background:#1c1917;border-color:rgba(255,255,255,0.07);}
.dark .gf-chat-resp-text{color:rgba(237,232,227,0.75);}
.dark .gf-chat-suggest{color:rgba(237,232,227,0.5);background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.07);}
`;

const LINKEDIN_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="9" width="4" height="12" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="4" r="2" stroke="#7a7069" stroke-width="1.7"/></svg>`;
const INSTAGRAM_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round"/></svg>`;
const EMAIL_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22,6 12,13 2,6" stroke="#7a7069" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const footerHTML = `
<div class="gf-root">
  <div class="gf-glow"></div>
  <div class="gf-flex">

    <!-- LEFT: interactive chat -->
    <div class="gf-left">
      <div class="gf-chat-wrap">
        <div class="gf-chat-input-row">
          <svg class="gf-chat-search-icon" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9aa0a6" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="#9aa0a6" stroke-width="2" stroke-linecap="round"/></svg>
          <input class="gf-chat-input" id="gfChatInput" placeholder="Ask me anything about Nikunj…" autocomplete="off" spellcheck="false" />
          <button class="gf-chat-send" id="gfChatSend" aria-label="Send">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" fill="none"/></svg>
          </button>
        </div>
        <div class="gf-chat-response" id="gfChatResponse">
          <div class="gf-chat-resp-meta">
            <div class="gf-chat-resp-avatar">NT</div>
            <span class="gf-chat-resp-name">Nikunj</span>
          </div>
          <p class="gf-chat-resp-text" id="gfChatRespText"></p>
          <div class="gf-chat-suggestions" id="gfChatSuggestions"></div>
        </div>
        <div class="gf-chat-suggestions" id="gfChatInitSuggestions" style="margin-top:0;">
          <span class="gf-chat-suggest" data-q="Who is Nikunj?">Who is Nikunj?</span>
          <span class="gf-chat-suggest" data-q="What coffee?">What coffee?</span>
          <span class="gf-chat-suggest" data-q="How to reach her?">How to reach her?</span>
        </div>
      </div>
    </div>

    <!-- RIGHT: contact links -->
    <div class="gf-right">
      <h2 class="gf-title">Let&rsquo;s grab<br>a <span class="gf-coffee">coffee</span> ☕</h2>
      <p class="gf-sub">Whether it&rsquo;s a role, a collab, or just a good conversation about design, I&rsquo;m always up for it.</p>
      <div class="gf-links">
        <button class="gf-link gf-email-link" id="gfEmailBtn" data-email="${EMAIL}">
          <div class="gf-link-left">
            <div class="gf-link-icon">${EMAIL_ICON}</div>
            <span class="gf-link-platform">Email</span>
            <span class="gf-link-value">${EMAIL}</span>
          </div>
          <span class="gf-link-arrow">↗</span>
          <span class="gf-email-copied">Copied!</span>
        </button>
        <a href="https://www.linkedin.com/in/nikunj-tyagi26/" target="_blank" rel="noopener noreferrer" class="gf-link">
          <div class="gf-link-left">
            <div class="gf-link-icon">${LINKEDIN_ICON}</div>
            <span class="gf-link-platform">LinkedIn</span>
            <span class="gf-link-value">nikunj-tyagi26</span>
          </div>
          <span class="gf-link-arrow">↗</span>
        </a>
        <a href="https://www.instagram.com/nikunjtyagi_/" target="_blank" rel="noopener noreferrer" class="gf-link">
          <div class="gf-link-left">
            <div class="gf-link-icon">${INSTAGRAM_ICON}</div>
            <span class="gf-link-platform">Instagram</span>
            <span class="gf-link-value">@nikunjtyagi_</span>
          </div>
          <span class="gf-link-arrow">↗</span>
        </a>
      </div>
      <div class="gf-footer-bar">
        <span class="gf-footer-name">Nikunj Tyagi, Product Designer</span>
        <span class="gf-footer-hand">made with ☕ &amp; obsession</span>
        <span class="gf-footer-copy">© 2026</span>
      </div>
    </div>

  </div>
</div>
`;

const RESPONSES: { match: string[]; text: string; followUps: string[] }[] = [
  {
    match: ["who", "nikunj", "she", "her", "about"],
    text: "A product designer who loves design, music, and cold coffee. She turns complex, messy problems into experiences that feel obvious — the kind you forget took any effort at all.",
    followUps: ["What does she design?", "What coffee?", "How to reach her?"],
  },
  {
    match: ["design", "work", "do", "projects", "ux", "ui"],
    text: "B2B SaaS, healthcare, and iOS — from 0→1 products to full design systems. She works closest to the gap between what users expect and what they actually get.",
    followUps: ["Any case studies?", "What coffee?", "Who is Nikunj?"],
  },
  {
    match: ["coffee", "drink", "fuel", "iced", "cold"],
    text: "Cold. Always cold. Iced americano, extra ice. Hot coffee is a dealbreaker. This is a firm, non-negotiable stance.",
    followUps: ["Where does she work?", "Who is Nikunj?", "How to reach her?"],
  },
  {
    match: ["contact", "reach", "email", "hire", "job", "collab", "talk", "connect"],
    text: "Drop a line at tyaginikunj26@gmail.com — she actually reads every one. LinkedIn works too if that feels more natural.",
    followUps: ["What does she design?", "Who is Nikunj?", "What coffee?"],
  },
  {
    match: ["where", "location", "based", "india", "city"],
    text: "Based in India, building products used by real people. Usually found deep in Figma, at a corner café seat, or in the middle of a playlist that definitely helps her focus.",
    followUps: ["What does she design?", "How to reach her?", "What coffee?"],
  },
  {
    match: ["figma", "tools", "stack", "skill", "software"],
    text: "Figma is home base. Paired with research instincts, systems thinking, and a strong opinion on what 'done' actually means.",
    followUps: ["Who is Nikunj?", "What does she design?", "How to reach her?"],
  },
  {
    match: ["music", "listen", "playlist", "song"],
    text: "Lo-fi while designing. Something cinematic when thinking. Anything with a good baseline on a good day. Music is essentially a second tool.",
    followUps: ["What coffee?", "Who is Nikunj?", "What does she design?"],
  },
];

const DEFAULT_RESPONSE = {
  text: "That's a great question for a coffee chat. Reach out at tyaginikunj26@gmail.com and she'll get back to you.",
  followUps: ["Who is Nikunj?", "What coffee?", "How to reach her?"],
};

function getResponse(query: string) {
  const q = query.toLowerCase();
  for (const r of RESPONSES) {
    if (r.match.some((kw) => q.includes(kw))) return r;
  }
  return DEFAULT_RESPONSE;
}

export function GlobalFooter() {
  const pathname = usePathname();
  const theme = THEME_FOOTER[pathname] ?? { bg: "#ffffff", grid: "rgba(0,0,0,0.038)" };
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const input = document.getElementById("gfChatInput") as HTMLInputElement | null;
    const sendBtn = document.getElementById("gfChatSend");
    const responseEl = document.getElementById("gfChatResponse");
    const responseText = document.getElementById("gfChatRespText");
    const suggestionsEl = document.getElementById("gfChatSuggestions");
    const initSuggestions = document.getElementById("gfChatInitSuggestions");
    const emailBtn = document.getElementById("gfEmailBtn");

    function showResponse(query: string) {
      if (!input || !responseEl || !responseText || !suggestionsEl) return;

      const resp = getResponse(query);

      responseEl.style.display = "block";
      responseEl.classList.remove("gf-chat-visible");

      responseText!.textContent = resp.text;

      suggestionsEl.innerHTML = "";
      resp.followUps.forEach((q) => {
        const chip = document.createElement("span");
        chip.className = "gf-chat-suggest";
        chip.textContent = q;
        chip.addEventListener("click", () => {
          input!.value = q;
          showResponse(q);
        });
        suggestionsEl.appendChild(chip);
      });

      if (initSuggestions) initSuggestions.style.display = "none";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          responseEl.classList.add("gf-chat-visible");
        });
      });
    }

    if (input && sendBtn) {
      input.addEventListener("input", () => {
        const hasText = input.value.trim().length > 0;
        sendBtn.classList.toggle("visible", hasText);
      });

      function submit() {
        const q = input!.value.trim();
        if (!q) return;
        showResponse(q);
      }

      sendBtn.addEventListener("click", submit);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") submit();
      });
    }

    // Initial suggestion chips
    document.querySelectorAll("#gfChatInitSuggestions .gf-chat-suggest").forEach((el) => {
      el.addEventListener("click", () => {
        const q = (el as HTMLElement).dataset.q ?? "";
        if (input) input.value = q;
        showResponse(q);
      });
    });

    // Email copy interaction
    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
          emailBtn.classList.add("gf-copied");
          if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
          copiedTimerRef.current = setTimeout(() => {
            emailBtn.classList.remove("gf-copied");
          }, 2000);
        });
      });
    }

    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    };
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
