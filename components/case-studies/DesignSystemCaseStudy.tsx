"use client";

import { useEffect, useRef, useState } from "react";
import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   COUNT-UP HOOK
───────────────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setValue(Math.round(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { value, ref };
}

/* ─────────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"     },
  { id: "foundations", label: "Foundations"  },
  { id: "components",  label: "Components"   },
  { id: "in-wild",     label: "In the Wild"  },
  { id: "impact",      label: "Impact"       },
];

const ACCENT = "#1076BC";
const font   = "Lato, sans-serif";
const display = "'Rethink Sans', 'Syne', Lato, sans-serif";

/* ─────────────────────────────────────────────────────────────────────
   FIGMA EMBED
───────────────────────────────────────────────────────────────────── */
const FIGMA_BASE =
  "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/iwqDFTjLmGMWGnM79LOMUB/Design-System-nik%3Fnode-id%3D";

function FigmaEmbed({ nodeId, title, height = 480 }: { nodeId: string; title: string; height?: number }) {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(16,118,188,0.12)", background: "#f8fafc" }}>
      <iframe
        src={`${FIGMA_BASE}${nodeId}&hide-ui=1`}
        title={title}
        width="100%"
        height={height}
        style={{ display: "block", border: "none" }}
        allowFullScreen
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CATEGORY PILL
───────────────────────────────────────────────────────────────────── */
function CategoryPill({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 19 }}>
      <span style={{
        display: "inline-block", padding: "5px 17px", borderRadius: 999,
        border: "1.5px solid rgba(0,0,0,0.12)", fontFamily: font,
        fontSize: 13, fontWeight: 600, color: "#374151", letterSpacing: "0.03em",
      }}>
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   BLADE-INSPIRED WHAT I BUILT / IMPACT CARD
───────────────────────────────────────────────────────────────────── */
function ImpactCard({
  did,
  impact,
}: {
  did: { text: string }[];
  impact: { text: string; highlight?: boolean }[];
}) {
  return (
    <div className="csl-reveal" style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
      border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16,
      overflow: "hidden", margin: "32px 0",
    }}>
      <div style={{ padding: "27px 25px", borderRight: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
        <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 17 }}>
          What I built
        </p>
        {did.map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: "#D1D5DB", flexShrink: 0, marginTop: 7 }} />
            <p style={{ fontFamily: font, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{d.text}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: "27px 25px", background: "rgba(16,118,188,0.02)" }}>
        <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 17 }}>
          Impact created
        </p>
        {impact.map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: ACCENT, opacity: 0.4, flexShrink: 0, marginTop: 7 }} />
            <p style={{ fontFamily: font, fontSize: 13, color: d.highlight ? ACCENT : "#374151", fontWeight: d.highlight ? 700 : 400, lineHeight: 1.65 }}>
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   THREE CHALLENGES (icon card grid)
───────────────────────────────────────────────────────────────────── */
function ThreeChallenges() {
  const challenges = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* three shapes at different sizes — visual inconsistency */}
          <rect x="3" y="22" width="10" height="14" rx="2" fill="#1076BC" opacity="0.35"/>
          <rect x="15" y="16" width="10" height="20" rx="5" fill="#1076BC" opacity="0.22"/>
          <rect x="27" y="10" width="10" height="26" rx="3" fill="#1076BC" opacity="0.50"/>
          <line x1="3" y1="36" x2="37" y2="36" stroke="#1076BC" strokeWidth="1.5" opacity="0.18" strokeLinecap="round"/>
        </svg>
      ),
      title: "Consistency",
      body: "Products started looking inconsistent — five different button radii, three interpretations of the same status badge.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* two-way arrows = back-and-forth */}
          <circle cx="8"  cy="20" r="5" fill="#1076BC" opacity="0.35"/>
          <circle cx="32" cy="20" r="5" fill="#1076BC" opacity="0.35"/>
          <path d="M13 16 L27 16" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M25 13 L28 16 L25 19" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M27 24 L13 24" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 21 L12 24 L15 27" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: "Collaboration",
      body: "Constant back-and-forth between designers and developers. No single source of truth meant every handoff needed renegotiating.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* modular blocks = reusable but being rebuilt custom */}
          <rect x="4"  y="24" width="13" height="11" rx="3" fill="#1076BC" opacity="0.35"/>
          <rect x="23" y="24" width="13" height="11" rx="3" fill="#1076BC" opacity="0.35"/>
          <rect x="13" y="8"  width="14" height="11" rx="3" fill="#1076BC" opacity="0.55"/>
          <line x1="10" y1="24" x2="16" y2="19" stroke="#1076BC" strokeWidth="1.5" opacity="0.30" strokeLinecap="round"/>
          <line x1="30" y1="24" x2="24" y2="19" stroke="#1076BC" strokeWidth="1.5" opacity="0.30" strokeLinecap="round"/>
        </svg>
      ),
      title: "Ease of Use",
      body: "Teams built custom solutions for patterns that should have been reusable. Effort spent reinventing, not building.",
    },
  ];

  return (
    <div style={{ margin: "37px 0" }}>
      <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>
        Three challenges that forced the system
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 13 }}>
        {challenges.map((c, i) => (
          <div key={c.title} className="csl-reveal" style={{
            background: "#f9fafb", borderRadius: 15,
            padding: "23px 19px 19px",
            border: "1px solid rgba(0,0,0,0.06)",
            transitionDelay: `${i * 60}ms`,
          }}>
            <div style={{ marginBottom: 15 }}>{c.icon}</div>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{c.title}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.65 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO — no floating cards
───────────────────────────────────────────────────────────────────── */
function DSHero() {
  return (
    <div className="csl-hero csl-hero--light ds-hero-override" style={{ position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(16,118,188,0.16) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        maskImage: "linear-gradient(to right, black 0%, black 35%, transparent 60%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, black 35%, transparent 60%)",
      }} />

      <div className="csl-hero-inner" style={{ position: "relative", zIndex: 2, alignItems: "center" }}>
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Design System · AirIQ</div>
          <h1 className="csl-hero-title">
            One system.<br />
            <em style={{ fontStyle: "italic" }}>Four products.</em>
          </h1>
          <p className="csl-hero-desc">
            A token-first design system built from scratch alongside shipping product. No dedicated systems team — just ruthless prioritisation, a shared Figma library, and the discipline to treat consistency as a feature.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead Designer</span>
            <span className="csl-hero-chip">Nov 2025 – Jan 2026</span>
            <span className="csl-hero-chip">Tokens · Components</span>
            <span className="csl-hero-chip">0 → 1</span>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
            <a href="https://www.figma.com/design/iwqDFTjLmGMWGnM79LOMUB/Design-System-nik"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ACCENT, color: "#fff", borderRadius: 8, padding: "10px 21px", fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: font }}>
              View in Figma ↗
            </a>
            <a href="#overview"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: ACCENT, border: "1px solid rgba(16,118,188,0.35)", borderRadius: 8, padding: "10px 21px", fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: font }}>
              Read case study ↓
            </a>
          </div>
        </div>

        <div className="csl-hero-right ds-hero-img-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/design-system.png" alt="Design System overview"
            style={{ width: "128%", height: "auto", display: "block", marginLeft: "-14%",
              filter: "drop-shadow(0 28px 56px rgba(16,118,188,0.18))" }} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   OPENING STATEMENT
───────────────────────────────────────────────────────────────────── */
function OpeningStatement() {
  return (
    <div className="csl-reveal" style={{
      textAlign: "center", padding: "67px 0 59px",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
    }}>
      <p style={{
        fontFamily: display,
        fontSize: "clamp(1.3rem, 3vw, 1.85rem)",
        fontWeight: 700, color: "#111827",
        lineHeight: 1.45, maxWidth: 640, margin: "0 auto",
      }}>
        Design systems start with{" "}
        <span style={{ color: "#9CA3AF" }}>strong foundations.</span>
        <br />
        They define how components look, behave, and scale across the entire product.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   WHAT'S INSIDE GRID
───────────────────────────────────────────────────────────────────── */
function WhatInsideGrid() {
  const items = [
    {
      title: "Color System",
      desc: "Semantic tokens and palettes for scalable themes and clear visual hierarchy.",
      preview: (
        <div style={{ display: "flex", gap: 4, marginBottom: 13 }}>
          {["#EFF8FF","#7EC6FF","#1076BC","#0A5A8F","#022847"].map(c => (
            <div key={c} style={{ flex: 1, height: 27, borderRadius: 4, background: c }} />
          ))}
        </div>
      ),
    },
    {
      title: "Typography",
      desc: "A flexible type system with predefined roles and scales for readable interfaces.",
      preview: (
        <div style={{ marginBottom: 13 }}>
          <p style={{ fontFamily: font, fontSize: 21, fontWeight: 700, color: "#111827", lineHeight: 1, marginBottom: 3 }}>Lato</p>
          <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.05em" }}>Bold · Semi Bold · Regular</p>
        </div>
      ),
    },
    {
      title: "Spacing & Radius",
      desc: "Structured spacing and corner rules that keep layouts balanced and predictable.",
      preview: (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 35, marginBottom: 13 }}>
          {[6,8,11,15,19,25,32,41].map((h, i) => (
            <div key={i} style={{ width: 13, height: h, borderRadius: 2, background: `rgba(16,118,188,${0.25 + i * 0.09})` }} />
          ))}
        </div>
      ),
    },
    {
      title: "Icons",
      desc: "A unified icon set at a single stroke weight. Every icon at 20×20 dp.",
      preview: (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/Design System/icons.png" alt="Icon set preview"
          style={{ width: "100%", height: 35, objectFit: "cover", objectPosition: "left top", borderRadius: 4, marginBottom: 13, display: "block" }} />
      ),
    },
    {
      title: "Grid System",
      desc: "Responsive grids for consistent layouts across screen sizes and breakpoints.",
      preview: (
        <div style={{ display: "flex", gap: 3, marginBottom: 13, alignItems: "stretch", height: 33 }}>
          {[1,2,1,2,1,2,1,2,1,2,1,2].map((w, i) => (
            <div key={i} style={{ flex: w, background: i % 2 === 0 ? "rgba(16,118,188,0.12)" : "rgba(16,118,188,0.05)", borderRadius: 2 }} />
          ))}
        </div>
      ),
    },
    {
      title: "Shadows & Blurs",
      desc: "Depth and elevation styles that add clarity, focus, and visual rhythm.",
      preview: (
        <div style={{ display: "flex", gap: 9, marginBottom: 13, alignItems: "center" }}>
          {[
            { s: "0 1px 3px rgba(0,0,0,0.10)", label: "sm" },
            { s: "0 4px 12px rgba(0,0,0,0.10)", label: "md" },
            { s: "0 10px 28px rgba(0,0,0,0.14)", label: "lg" },
          ].map(sh => (
            <div key={sh.label} style={{ width: 35, height: 27, background: "#fff", borderRadius: 6, boxShadow: sh.s, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontFamily: font, fontSize: 9, color: "#9CA3AF", fontWeight: 600 }}>{sh.label}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "59px 0 51px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginBottom: 17 }}>
        What&rsquo;s inside
      </p>
      <p style={{
        fontFamily: display,
        fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)",
        fontWeight: 700, color: "#111827", lineHeight: 1.4,
        textAlign: "center", maxWidth: 520, margin: "0 auto 43px",
      }}>
        A unified system of reusable foundations and components that brings clarity, consistency, and structure to every interface.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 13 }}>
        {items.map((item, i) => (
          <div key={item.title} className="csl-reveal" style={{
            background: "#f9fafb", borderRadius: 15,
            padding: "19px 19px 15px",
            border: "1px solid rgba(0,0,0,0.06)",
            transitionDelay: `${i * 60}ms`,
          }}>
            {item.preview}
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 5 }}>{item.title}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ATOMIC DESIGN PRINCIPLES
───────────────────────────────────────────────────────────────────── */
function AtomicDesignSection() {
  const principles = [
    {
      icon: (
        <svg width="43" height="43" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="10" fill="#1076BC" opacity="0.13"/>
          <circle cx="22" cy="22" r="5" fill="#1076BC" opacity="0.45"/>
          <circle cx="22" cy="22" r="2" fill="#1076BC"/>
        </svg>
      ),
      title: "Design Tokens",
      desc: "Core variables that define colours, typography, spacing.",
    },
    {
      icon: (
        <svg width="43" height="43" viewBox="0 0 44 44" fill="none">
          <circle cx="16" cy="22" r="8" fill="#1076BC" opacity="0.13" stroke="#1076BC" strokeWidth="1.5"/>
          <circle cx="28" cy="22" r="5" fill="#1076BC" opacity="0.28" stroke="#1076BC" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Atoms",
      desc: "The smallest UI parts: icons, buttons, and input fields.",
    },
    {
      icon: (
        <svg width="43" height="43" viewBox="0 0 44 44" fill="none">
          <circle cx="14" cy="22" r="5" fill="#1076BC" opacity="0.38"/>
          <circle cx="22" cy="16" r="4" fill="#1076BC" opacity="0.28"/>
          <circle cx="30" cy="22" r="5" fill="#1076BC" opacity="0.38"/>
          <circle cx="22" cy="28" r="4" fill="#1076BC" opacity="0.28"/>
          <line x1="14" y1="22" x2="22" y2="16" stroke="#1076BC" strokeWidth="1" opacity="0.35"/>
          <line x1="22" y1="16" x2="30" y2="22" stroke="#1076BC" strokeWidth="1" opacity="0.35"/>
          <line x1="30" y1="22" x2="22" y2="28" stroke="#1076BC" strokeWidth="1" opacity="0.35"/>
        </svg>
      ),
      title: "Molecules",
      desc: "Groups of atoms forming simple components.",
    },
    {
      icon: (
        <svg width="43" height="43" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="10" width="14" height="10" rx="3" fill="#1076BC" opacity="0.28"/>
          <rect x="24" y="10" width="14" height="10" rx="3" fill="#1076BC" opacity="0.18"/>
          <rect x="6" y="24" width="14" height="10" rx="3" fill="#1076BC" opacity="0.18"/>
          <rect x="24" y="24" width="14" height="10" rx="3" fill="#1076BC" opacity="0.28"/>
          <circle cx="22" cy="22" r="3" fill="#1076BC"/>
        </svg>
      ),
      title: "Organisms",
      desc: "Larger components made of molecules and atoms.",
    },
    {
      icon: (
        <svg width="43" height="43" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="6" width="32" height="32" rx="4" stroke="#1076BC" strokeWidth="1.5" fill="none" opacity="0.38"/>
          <rect x="10" y="10" width="24" height="6" rx="2" fill="#1076BC" opacity="0.18"/>
          <rect x="10" y="20" width="14" height="14" rx="2" fill="#1076BC" opacity="0.28"/>
          <rect x="27" y="20" width="7" height="14" rx="2" fill="#1076BC" opacity="0.13"/>
        </svg>
      ),
      title: "Templates",
      desc: "Layouts showing how components connect within a structure.",
    },
    {
      icon: (
        <svg width="43" height="43" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="6" width="32" height="32" rx="4" fill="#1076BC" opacity="0.07" stroke="#1076BC" strokeWidth="1.5" strokeOpacity="0.38"/>
          <rect x="10" y="10" width="24" height="6" rx="2" fill="#1076BC" opacity="0.32"/>
          <rect x="10" y="20" width="10" height="14" rx="2" fill="#1076BC" opacity="0.22"/>
          <rect x="23" y="20" width="11" height="6" rx="2" fill="#1076BC" opacity="0.15"/>
          <rect x="23" y="28" width="11" height="6" rx="2" fill="#1076BC" opacity="0.15"/>
        </svg>
      ),
      title: "Screens",
      desc: "Final screens assembled from components with real content.",
    },
  ];

  return (
    <div style={{ padding: "59px 0 51px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <CategoryPill label="Atomic Design" />
      <h2 style={{
        fontFamily: display,
        fontSize: "clamp(1.55rem, 3.5vw, 2.35rem)",
        fontWeight: 700, color: "#111827",
        textAlign: "center", lineHeight: 1.15, marginBottom: 11,
      }}>
        Atomic Design Principles
      </h2>
      <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 475, margin: "0 auto 43px", lineHeight: 1.65 }}>
        A modular approach that breaks interfaces into reusable pieces, making their structure clear and connected.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 13 }}>
        {principles.map((p, i) => (
          <div key={p.title} className="csl-reveal" style={{
            background: "#f9fafb", borderRadius: 15,
            padding: "23px 19px 19px",
            border: "1px solid rgba(0,0,0,0.06)",
            transitionDelay: `${i * 55}ms`,
          }}>
            <div style={{ marginBottom: 13 }}>{p.icon}</div>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 5 }}>{p.title}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §01  OVERVIEW
───────────────────────────────────────────────────────────────────── */
function OverviewSection() {
  const c1 = useCountUp(4);
  const c2 = useCountUp(7);
  const c3 = useCountUp(3);

  return (
    <CsSection id="overview">
      <CsSectionHeader
        num="01"
        title="Why the system had to exist"
        sub="Every product team was solving the same visual problem from scratch. Buttons with five different border radii. Three interpretations of the same status badge. Design inconsistency was slowing shipping velocity and eroding user trust."
      />

      {/* stats */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 15, marginBottom: 40 }}>
        {[
          { ref: c1.ref, val: c1.value, suffix: "", label: "Products sharing one Figma library" },
          { ref: c2.ref, val: c2.value, suffix: "", label: "Core components, all states documented" },
          { ref: c3.ref, val: c3.value, suffix: " wks", label: "From zero to v1, while shipping product" },
        ].map((s, i) => (
          <div key={s.label} style={{
            background: "#F8FAFC", border: "1px solid rgba(16,118,188,0.09)",
            borderRadius: 13, padding: "27px 19px", textAlign: "center",
            transitionDelay: `${i * 60}ms`,
          }}>
            <p style={{ fontFamily: font, fontSize: 43, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1 }}>
              <span ref={s.ref}>{s.val}</span>{s.suffix}
            </p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", marginTop: 9, lineHeight: 1.5 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* 3 challenges */}
      <ThreeChallenges />

      {/* callout */}
      <div className="csl-reveal" style={{ borderLeft: "3px solid #1076BC", paddingLeft: 19, margin: "32px 0" }}>
        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "#374151", lineHeight: 1.75, margin: 0 }}>
          The constraint was the brief: no dedicated systems team, no runway to pause product work. The system had to be designed in the gaps, documented enough to survive handoff, opinionated enough to actually reduce decisions.
        </p>
      </div>

      {/* approach grid */}
      <div className="csl-reveal" style={{ marginTop: 32 }}>
        <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>Approach</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 13 }}>
          {[
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="7" fill="#1076BC" opacity="0.13"/>
                  <circle cx="18" cy="18" r="3" fill="#1076BC" opacity="0.5"/>
                  <line x1="18" y1="4"  x2="18" y2="10" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="26" x2="18" y2="32" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="4"  y1="18" x2="10" y2="18" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="26" y1="18" x2="32" y2="18" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Token-first",
              body: "Every colour, spacing step and shadow is a named token. Swap the token, update every instance.",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="5" width="28" height="26" rx="4" stroke="#1076BC" strokeWidth="1.5" fill="none" opacity="0.35"/>
                  <line x1="4" y1="13" x2="32" y2="13" stroke="#1076BC" strokeWidth="1.2" opacity="0.25"/>
                  <line x1="11" y1="19" x2="25" y2="19" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
                  <line x1="11" y1="24" x2="21" y2="24" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
                </svg>
              ),
              title: "Component contracts",
              body: "Each component ships with defined props, states and usage rules. No ambiguity in handoff.",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="11" stroke="#1076BC" strokeWidth="1.5" fill="none" opacity="0.25"/>
                  <circle cx="18" cy="18" r="6"  fill="#1076BC" opacity="0.18"/>
                  <path d="M18 12 L18 18 L22 21" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8 L10 11" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
                  <path d="M26 8 L29 5" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
                </svg>
              ),
              title: "Built while shipping",
              body: "Tokens and components introduced incrementally alongside real features — not in a silo.",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="5" width="20" height="26" rx="3" fill="#1076BC" opacity="0.10" stroke="#1076BC" strokeWidth="1.5" strokeOpacity="0.35"/>
                  <line x1="8"  y1="12" x2="20" y2="12" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  <line x1="8"  y1="17" x2="20" y2="17" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
                  <line x1="8"  y1="22" x2="16" y2="22" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
                  <circle cx="28" cy="26" r="6" fill="#1076BC" opacity="0.15" stroke="#1076BC" strokeWidth="1.5" strokeOpacity="0.45"/>
                  <path d="M25 26 L27 28 L31 24" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Documentation as design",
              body: "The Figma file is the doc. Annotations live inside frames, not in a Notion page nobody reads.",
            },
          ].map((step, i) => (
            <div key={step.title} style={{
              background: "#f9fafb", border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 15, padding: "21px 19px 19px",
              transitionDelay: `${i * 55}ms`,
            }}>
              <div style={{ marginBottom: 13 }}>{step.icon}</div>
              <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{step.title}</p>
              <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <OpeningStatement />
      <WhatInsideGrid />
      <AtomicDesignSection />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   LIVE COLOR PALETTE
───────────────────────────────────────────────────────────────────── */
function LiveColorPalette() {
  const palettes = [
    {
      name: "Neutral",
      sub: "Backgrounds, text, surfaces, separators.",
      swatches: [
        { hex: "#F9FAFB", label: "50" }, { hex: "#F3F4F6", label: "100" },
        { hex: "#E5E7EB", label: "200" }, { hex: "#9CA3AF", label: "400" },
        { hex: "#6B7280", label: "500" }, { hex: "#374151", label: "700" },
        { hex: "#1F2937", label: "800" }, { hex: "#111827", label: "900" },
      ],
    },
    {
      name: "Brand",
      sub: "Primary interactive elements: CTAs, links, active states.",
      swatches: [
        { hex: "#EFF8FF", label: "50" }, { hex: "#BFDFFF", label: "100" },
        { hex: "#7EC6FF", label: "200" }, { hex: "#3DA8FF", label: "300" },
        { hex: "#1076BC", label: "600" }, { hex: "#0A5A8F", label: "700" },
        { hex: "#064272", label: "800" }, { hex: "#022847", label: "900" },
      ],
    },
    {
      name: "Error",
      sub: "Negative states, destructive actions, validation errors.",
      swatches: [
        { hex: "#FEF2F2", label: "50" }, { hex: "#FEE2E2", label: "100" },
        { hex: "#FECACA", label: "200" }, { hex: "#FCA5A5", label: "300" },
        { hex: "#EF4444", label: "500" }, { hex: "#DC2626", label: "600" },
        { hex: "#991B1B", label: "800" }, { hex: "#7F1D1D", label: "900" },
      ],
    },
    {
      name: "Success",
      sub: "Positive confirmation, completed states, available status.",
      swatches: [
        { hex: "#F0FDF4", label: "50" }, { hex: "#DCFCE7", label: "100" },
        { hex: "#BBF7D0", label: "200" }, { hex: "#86EFAC", label: "300" },
        { hex: "#22C55E", label: "500" }, { hex: "#16A34A", label: "600" },
        { hex: "#166534", label: "800" }, { hex: "#14532D", label: "900" },
      ],
    },
    {
      name: "Warning",
      sub: "Cautionary states, pending actions, time-sensitive alerts.",
      swatches: [
        { hex: "#FFFBEB", label: "50" }, { hex: "#FEF3C7", label: "100" },
        { hex: "#FDE68A", label: "200" }, { hex: "#FCD34D", label: "300" },
        { hex: "#F59E0B", label: "500" }, { hex: "#D97706", label: "600" },
        { hex: "#92400E", label: "800" }, { hex: "#78350F", label: "900" },
      ],
    },
  ];

  return (
    <div className="csl-reveal" style={{ marginBottom: 43 }}>
      {palettes.map(p => (
        <div key={p.name} style={{ marginBottom: 29 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 9, marginBottom: 7 }}>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827" }}>{p.name}</p>
            <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF" }}>{p.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 4 }}>
            {p.swatches.map(s => (
              <div key={s.hex} style={{ borderRadius: 7, overflow: "hidden" }}>
                <div style={{ height: 51, background: s.hex }} />
                <div style={{ padding: "5px 2px" }}>
                  <p style={{ fontFamily: font, fontSize: 9, fontWeight: 600, color: "#374151" }}>{s.label}</p>
                  <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: "#9CA3AF" }}>{s.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   TOKEN LAYER DEMO
───────────────────────────────────────────────────────────────────── */
function TokenLayerDemo() {
  const [active, setActive] = useState<"primitive" | "semantic" | "component">("primitive");
  const layers: { key: "primitive" | "semantic" | "component"; label: string; content: React.ReactNode }[] = [
    {
      key: "primitive", label: "Primitive",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 19, height: 19, borderRadius: 4, background: "#1076BC" }} />
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#111827" }}>#1076BC</span>
        </div>
      ),
    },
    {
      key: "semantic", label: "Semantic",
      content: <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: ACCENT }}>color.action.primary</span>,
    },
    {
      key: "component", label: "Component",
      content: (
        <div style={{ background: ACCENT, color: "#fff", borderRadius: 5, padding: "3px 13px", fontFamily: font, fontSize: 13, fontWeight: 600, display: "inline-block" }}>
          Button.bg
        </div>
      ),
    },
  ];

  return (
    <div className="csl-reveal" style={{ background: "#F8FAFC", border: "1px solid rgba(16,118,188,0.09)", borderRadius: 11, padding: "19px 21px", margin: "19px 0 29px" }}>
      <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 13 }}>
        Token flow — tap a layer to trace the chain
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
        {layers.map((layer, i) => (
          <div key={layer.key} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <button onClick={() => setActive(layer.key)} style={{
              padding: "9px 15px", borderRadius: 9,
              border: active === layer.key ? `1.5px solid ${ACCENT}` : "1.5px solid rgba(0,0,0,0.08)",
              background: active === layer.key ? "#fff" : "transparent",
              boxShadow: active === layer.key ? "0 2px 7px rgba(16,118,188,0.11)" : "none",
              cursor: "pointer", transition: "all 0.2s ease",
              display: "flex", flexDirection: "column" as const, gap: 5, minWidth: 125,
            }}>
              <span style={{ fontFamily: font, fontSize: 9, fontWeight: 700, color: active === layer.key ? ACCENT : "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.10em", textAlign: "left" as const }}>
                {layer.label}
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>{layer.content}</span>
            </button>
            {i < layers.length - 1 && <span style={{ color: "#D1D5DB", fontSize: 17 }}>→</span>}
          </div>
        ))}
      </div>
      <p style={{ fontFamily: font, fontSize: 13, color: "#9CA3AF", marginTop: 13, lineHeight: 1.55 }}>
        {active === "primitive" && "Raw hex values live in the primitive layer. They are never used directly in components."}
        {active === "semantic" && "Semantic tokens name the intent. color.action.primary means \"the primary action colour\" regardless of what hex it resolves to."}
        {active === "component" && "Component tokens bind to semantic tokens. Button.bg references color.action.primary, so updating the brand colour cascades automatically."}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   LIVE TYPE SCALE — Lato, odd sizes
───────────────────────────────────────────────────────────────────── */
function LiveTypeScale() {
  const scale = [
    { name: "H1 Desktop", size: 47, weight: 700, ls: "-2%" },
    { name: "H2 Desktop", size: 37, weight: 700, ls: "-2%" },
    { name: "H3",         size: 29, weight: 600, ls: "-1%" },
    { name: "H4",         size: 21, weight: 600, ls: "-0.5%" },
    { name: "Body Large", size: 17, weight: 400, ls: "0" },
    { name: "Body",       size: 15, weight: 400, ls: "0" },
    { name: "Caption",    size: 13, weight: 400, ls: "0" },
    { name: "Label",      size: 11, weight: 500, ls: "0.08em" },
  ];

  return (
    <div className="csl-reveal" style={{ marginBottom: 43 }}>
      {scale.map((s, i) => (
        <div key={s.name} style={{
          display: "flex", alignItems: "baseline", gap: 19,
          padding: "13px 0",
          borderBottom: i < scale.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}>
          <div style={{ minWidth: 95, flexShrink: 0 }}>
            <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF", marginBottom: 1 }}>{s.name}</p>
            <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: "#D1D5DB" }}>
              {s.size}px · {s.weight === 700 ? "Bold" : s.weight === 600 ? "SemiBold" : s.weight === 500 ? "Medium" : "Regular"}
            </p>
          </div>
          <p style={{
            fontFamily: font,
            fontSize: s.size,
            fontWeight: s.weight,
            color: "#111827",
            letterSpacing: s.ls,
            margin: 0, flex: 1,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SPACING SCALE BAR CHART
───────────────────────────────────────────────────────────────────── */
function SpacingScale() {
  const steps = [
    { token: "spacing-2",  val: 2  }, { token: "spacing-4",  val: 4  },
    { token: "spacing-6",  val: 6  }, { token: "spacing-8",  val: 8  },
    { token: "spacing-12", val: 12 }, { token: "spacing-16", val: 16 },
    { token: "spacing-20", val: 20 }, { token: "spacing-24", val: 24 },
    { token: "spacing-32", val: 32 }, { token: "spacing-40", val: 40 },
    { token: "spacing-48", val: 48 }, { token: "spacing-64", val: 64 },
  ];

  return (
    <div className="csl-reveal" style={{ marginBottom: 43 }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 9, height: 155, marginBottom: 15 }}>
        {steps.map((s, i) => {
          const h = (s.val / 64) * 135;
          return (
            <div key={s.token} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 5 }}>
              <p style={{ fontFamily: font, fontSize: 9, color: "#9CA3AF", fontWeight: 600 }}>{s.val}px</p>
              <div style={{ width: "100%", height: h, background: `rgba(16,118,188,${0.19 + i * 0.065})`, borderRadius: 3 }} />
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "13px 15px", background: "#f9fafb", borderRadius: 9, border: "1px solid rgba(0,0,0,0.06)" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: ACCENT, fontWeight: 700, background: "rgba(16,118,188,0.08)", padding: "2px 7px", borderRadius: 5 }}>#4</span>
        <span style={{ color: "#9CA3AF", fontSize: 13 }}>→</span>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "#374151", fontWeight: 600 }}>#spacing-4</span>
        <span style={{ color: "#9CA3AF", fontSize: 13 }}>→</span>
        <span style={{ fontFamily: font, fontSize: 13, color: "#374151" }}>4 px</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  FOUNDATIONS
───────────────────────────────────────────────────────────────────── */
function FoundationsSection() {
  return (
    <CsSection id="foundations">

      {/* ── COLOR ── */}
      <div className="csl-reveal" style={{ marginBottom: 67 }}>
        <CategoryPill label="Foundations" />
        <h2 style={{ fontFamily: display, fontSize: "clamp(2.1rem, 6vw, 3.7rem)", fontWeight: 700, color: "#111827", textAlign: "center", lineHeight: 1.1, marginBottom: 15 }}>
          Color System
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 475, margin: "0 auto 43px", lineHeight: 1.65 }}>
          A flexible palette of semantic and functional colours that keeps interfaces consistent, clear, and expressive across the entire product.
        </p>

        <LiveColorPalette />
        <TokenLayerDemo />

        <ImpactCard
          did={[
            { text: "Split colour tokens into three tiers: primitive, semantic, component" },
            { text: "Named every intent explicitly — color.action.primary, not #1076BC" },
            { text: "Built a single-source palette supporting all four products" },
          ]}
          impact={[
            { text: "Full brand theme can be swapped by updating one primitive token", highlight: true },
            { text: "Eliminated colour inconsistency across 4 products" },
            { text: "Developers write zero manual colour overrides in components" },
          ]}
        />
      </div>

      {/* ── TYPOGRAPHY ── */}
      <div className="csl-reveal" style={{ marginBottom: 67 }}>
        <CategoryPill label="Foundations" />
        <div style={{ position: "relative", textAlign: "center", marginBottom: 43 }}>
          {/* ghost background text */}
          <p style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: font,
            fontSize: "clamp(5rem, 14vw, 11rem)",
            fontWeight: 700, color: "rgba(0,0,0,0.04)",
            letterSpacing: "-0.04em", margin: 0, whiteSpace: "nowrap",
            pointerEvents: "none", userSelect: "none", zIndex: 0,
          }}>
            Lato
          </p>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: display, fontSize: "clamp(2.1rem, 6vw, 3.7rem)", fontWeight: 700, color: "#111827", lineHeight: 1.1, marginBottom: 11 }}>
              Typography
            </h2>
            <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", maxWidth: 455, margin: "0 auto", lineHeight: 1.65 }}>
              The typographic system defines text styles as design tokens and explains how titles and body text should be applied.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 13, marginBottom: 29 }}>
          {["Bold", "Semi Bold", "Regular"].map(w => (
            <div key={w} style={{ flex: 1, textAlign: "center", padding: "19px 13px", background: "#f9fafb", borderRadius: 11, border: "1px solid rgba(0,0,0,0.06)" }}>
              <p style={{
                fontFamily: font, fontSize: 27,
                fontWeight: w === "Bold" ? 700 : w === "Semi Bold" ? 600 : 400,
                color: "#111827", margin: "0 0 5px",
              }}>Ag</p>
              <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF", fontWeight: 600 }}>{w}</p>
            </div>
          ))}
        </div>

        <LiveTypeScale />
      </div>

      {/* ── SPACING ── */}
      <div className="csl-reveal" style={{ marginBottom: 51 }}>
        <CategoryPill label="Foundations" />
        <h2 style={{ fontFamily: display, fontSize: "clamp(2.1rem, 6vw, 3.7rem)", fontWeight: 700, color: "#111827", textAlign: "center", lineHeight: 1.1, marginBottom: 15 }}>
          Spacing & Radius
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 475, margin: "0 auto 43px", lineHeight: 1.65 }}>
          A consistent spacing and radius scale creates visual rhythm and predictable layouts. Each value exists as a reusable token.
        </p>

        <SpacingScale />

        <div style={{ marginTop: 29 }}>
          <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>Border Radius Scale</p>
          <div style={{ display: "flex", gap: 13, alignItems: "flex-end" }}>
            {[
              { label: "sm", r: 4 }, { label: "md", r: 8 }, { label: "lg", r: 12 },
              { label: "xl", r: 16 }, { label: "2xl", r: 24 }, { label: "full", r: 999 },
            ].map(({ label, r }) => (
              <div key={label} style={{ flex: 1, textAlign: "center" }}>
                <div style={{
                  width: "100%", aspectRatio: "1", maxWidth: 51, margin: "0 auto 7px",
                  background: "rgba(16,118,188,0.09)",
                  border: "1.5px solid rgba(16,118,188,0.24)",
                  borderRadius: r === 999 ? "50%" : r,
                }} />
                <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: "#9CA3AF" }}>{label}</p>
                <p style={{ fontFamily: font, fontSize: 9, color: "#D1D5DB" }}>{r === 999 ? "999px" : `${r}px`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ICONOGRAPHY ── */}
      <div className="csl-reveal" style={{ marginBottom: 51 }}>
        <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>Iconography</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Design System/icons.png" alt="Icon library"
          style={{ width: "100%", height: "auto", borderRadius: 15, border: "1px solid rgba(0,0,0,0.06)", display: "block", marginBottom: 11 }} />
        <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.65 }}>
          A unified icon library at a single stroke weight. Every icon exports at 20×20 dp. Mixing icon styles is the fastest way to make a UI feel cheap.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  COMPONENTS
───────────────────────────────────────────────────────────────────── */
function ComponentsSection() {
  const components = [
    { nodeId: "14005-2", title: "Buttons", note: "Four variants: primary, secondary, tertiary, ghost. Every state documented. No one-off styles." },
    { nodeId: "14006-2", title: "Input Fields", note: "Seven states, three sizes. Error and helper text are baked in — not detached text layers." },
    { nodeId: "14007-2", title: "Checkbox, Radio & Toggle", note: "Indeterminate state explicitly handled — a gap most teams discover in production." },
    { nodeId: "14008-134", title: "Dropdown & Select", note: "Multi-select, single-select, searchable. Inherits input anatomy: same tokens, same spacing." },
    { nodeId: "14007-153", title: "Tabs & Navigation", note: "Line and pill variants. Active state uses the accent token — swap the theme and every tab updates." },
    { nodeId: "14030-2", title: "Date & Time Picker", note: "Travel-critical. Range selection, blocked-date states, time picker — the most-requested in v1." },
  ];

  return (
    <CsSection id="components">
      <div style={{ marginBottom: 35 }}>
        <CategoryPill label="Smart Components" />
        <h2 style={{ fontFamily: display, fontSize: "clamp(2.1rem, 6vw, 3.7rem)", fontWeight: 700, color: "#111827", textAlign: "center", lineHeight: 1.1, marginBottom: 15 }}>
          Components
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 495, margin: "0 auto", lineHeight: 1.65 }}>
          Smart components adapt automatically to states, themes, and content — reducing manual work and maintaining consistency across every screen.
        </p>
      </div>

      <div className="csl-reveal" style={{ borderLeft: "3px solid #1076BC", paddingLeft: 19, margin: "0 0 35px" }}>
        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "#374151", lineHeight: 1.75, margin: 0 }}>
          Handoff gaps live in the unstated. If hover is not designed, engineering invents it. If loading is not specified, it gets cut. Documenting every state per component upfront costs hours. Fixing state inconsistencies in production costs weeks.
        </p>
      </div>

      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 29 }}>
        {components.map((c, i) => (
          <div key={c.nodeId} style={{ transitionDelay: `${(i % 2) * 75}ms` }}>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 11 }}>{c.title}</p>
            <FigmaEmbed nodeId={c.nodeId} title={c.title} height={335} />
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", marginTop: 9, lineHeight: 1.65 }}>{c.note}</p>
          </div>
        ))}
      </div>

      <ImpactCard
        did={[
          { text: "7 components with all states: default, hover, active, loading, disabled, error" },
          { text: "Date picker built for travel — range selection, blocked dates, time picker" },
          { text: "Token-bound variants: every component updates from a single theme change" },
        ]}
        impact={[
          { text: "40% increase in overall component coverage", highlight: true },
          { text: "Zero one-off component builds across all 4 products in the first quarter" },
          { text: "Engineers stopped asking \"what does the hover look like?\"" },
        ]}
      />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  IN THE WILD
───────────────────────────────────────────────────────────────────── */
function InTheWildSection() {
  const screens = [
    {
      src: "/Image/Airiq/presentation/homepage.png",
      label: "Search",
      components: ["DatePicker", "Autocomplete", "PassengerSelector"],
      desc: "Date picker, passenger selector, airport autocomplete — all system components. The booking entry point assembles in half the time it used to.",
      side: "right",
    },
    {
      src: "/Image/Airiq/presentation/search-result.png",
      label: "Results",
      components: ["Badge", "Dropdown", "Pagination"],
      desc: "Status badges (Direct / Economy / Delayed) are tokens. Grid rhythm is the layout system. Sorting controls use Dropdown. Zero custom overrides.",
      side: "left",
    },
    {
      src: "/Image/Airiq/presentation/details.png",
      label: "Booking",
      components: ["Input", "Dropdown", "Checkbox"],
      desc: "The traveller detail form is Input, Dropdown and Checkbox in sequence. One component library, one form, consistent across every device width.",
      side: "right",
    },
    {
      src: "/Image/Airiq/presentation/confirmation.png",
      label: "Confirmation",
      components: ["Typography", "Badge", "Color tokens"],
      desc: "Typography scale and colour tokens carry the hierarchy. The success state reuses the Badge component — semantic colour, different meaning.",
      side: "left",
    },
  ];

  return (
    <CsSection id="in-wild">
      <div style={{ marginBottom: 51 }}>
        <CategoryPill label="In the Wild" />
        <h2 style={{ fontFamily: display, fontSize: "clamp(2.1rem, 6vw, 3.7rem)", fontWeight: 700, color: "#111827", textAlign: "center", lineHeight: 1.1, marginBottom: 15 }}>
          System in Production
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 475, margin: "0 auto", lineHeight: 1.65 }}>
          The system only matters if it shows up in production. Here&rsquo;s how foundations and components assemble into the AirIQ booking flow.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 59 }}>
        {screens.map((s, idx) => (
          <div key={s.label} className="csl-reveal" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 29, alignItems: "center",
            transitionDelay: `${idx * 40}ms`,
          }}>
            <div style={{
              order: s.side === "right" ? 0 : 1,
              marginLeft: s.side === "right" ? -43 : 0,
              marginRight: s.side === "left" ? -43 : 0,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.label}
                style={{ width: "100%", height: "auto", borderRadius: 15, boxShadow: "0 19px 55px rgba(0,0,0,0.11)", display: "block" }} />
            </div>

            <div style={{ order: s.side === "right" ? 1 : 0 }}>
              <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 9 }}>
                {s.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 15 }}>
                {s.components.map(c => (
                  <span key={c} style={{
                    fontFamily: "ui-monospace, monospace", fontSize: 11, fontWeight: 600,
                    color: ACCENT, background: "rgba(16,118,188,0.07)",
                    borderRadius: 5, padding: "3px 7px",
                  }}>{c}</span>
                ))}
              </div>
              <p style={{ fontFamily: font, fontSize: 15, color: "#374151", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="csl-reveal" style={{ borderLeft: "3px solid #1076BC", paddingLeft: 19, margin: "51px 0 0" }}>
        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "#374151", lineHeight: 1.75, margin: 0 }}>
          The question I asked for every AirIQ screen: &ldquo;Is this a component or a custom?&rdquo; If it needed to be custom, that was a signal the system had a gap. I plugged it.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CUTE THANKS
───────────────────────────────────────────────────────────────────── */
function ThanksSection() {
  return (
    <div className="csl-reveal" style={{
      textAlign: "center",
      padding: "67px 0 51px",
      borderTop: "1px solid rgba(0,0,0,0.07)",
      marginTop: 51,
    }}>
      {/* NT monogram */}
      <div style={{
        width: 47, height: 47, borderRadius: 13,
        background: "rgba(16,118,188,0.08)",
        border: "1.5px solid rgba(16,118,188,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 21px",
      }}>
        <span style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: ACCENT }}>NT</span>
      </div>

      <p style={{
        fontFamily: display,
        fontSize: "clamp(1.55rem, 3.5vw, 2.35rem)",
        fontWeight: 700, color: "#111827",
        lineHeight: 1.3, marginBottom: 13,
      }}>
        Thanks for sticking around ✌️
      </p>
      <p style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "1.05rem", fontStyle: "italic",
        color: "#6B7280", lineHeight: 1.7,
        maxWidth: 400, margin: "0 auto 29px",
      }}>
        Building a design system is mostly invisible work — until it isn&rsquo;t. Hope this gave you a glimpse of what goes into making consistency feel effortless.
      </p>
      <a href="mailto:tyaginikunj26@gmail.com" style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        fontFamily: font, fontSize: 13, fontWeight: 600,
        color: ACCENT, textDecoration: "none",
        border: "1px solid rgba(16,118,188,0.25)",
        borderRadius: 8, padding: "9px 19px",
      }}>
        Say hi ↗
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  IMPACT
───────────────────────────────────────────────────────────────────── */
function ImpactSection() {
  const c1 = useCountUp(40);
  const c2 = useCountUp(3);

  const before = [
    "5+ button styles across product screens",
    "Ad hoc spacing — every designer eyeballed it",
    "Icon library split across three Figma files",
    "No documented component states",
    "Onboarding new designers took 2+ weeks",
  ];
  const after = [
    "4 button variants, every state documented",
    "8pt grid enforced via auto-layout",
    "Unified icon library, one stroke weight",
    "States and usage rules live inside components",
    "New designers contribute by day 3",
  ];

  return (
    <CsSection id="impact" last>
      <div style={{ marginBottom: 43 }}>
        <CategoryPill label="Results" />
        <h2 style={{ fontFamily: display, fontSize: "clamp(2.1rem, 6vw, 3.7rem)", fontWeight: 700, color: "#111827", textAlign: "center", lineHeight: 1.1, marginBottom: 15 }}>
          Impact
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 435, margin: "0 auto", lineHeight: 1.65 }}>
          A design system is not a deliverable — it&rsquo;s a multiplier. These are the results after three months in production.
        </p>
      </div>

      {/* before / after */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 19, marginBottom: 35 }}>
        <div style={{ background: "#FEF3F2", border: "1px solid rgba(242,97,110,0.17)", borderRadius: 13, padding: "23px 21px" }}>
          <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#F2616E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>Before</p>
          {before.map(b => (
            <p key={b} style={{ fontFamily: font, fontSize: 13, color: "#374151", lineHeight: 1.65, marginBottom: 7, paddingLeft: 13, borderLeft: "2px solid rgba(242,97,110,0.28)" }}>{b}</p>
          ))}
        </div>
        <div style={{ background: "#EAF9F1", border: "1px solid rgba(5,150,105,0.17)", borderRadius: 13, padding: "23px 21px" }}>
          <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#059669", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>After</p>
          {after.map(a => (
            <p key={a} style={{ fontFamily: font, fontSize: 13, color: "#374151", lineHeight: 1.65, marginBottom: 7, paddingLeft: 13, borderLeft: "2px solid rgba(5,150,105,0.28)" }}>{a}</p>
          ))}
        </div>
      </div>

      {/* metrics */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 19, marginBottom: 43 }}>
        {[
          { ref: c1.ref, val: c1.value, suffix: "%", label: "Faster screen assembly", sub: "for screens built entirely from library components" },
          { ref: c2.ref, val: c2.value, suffix: " wks", label: "From 0 to v1", sub: "while simultaneously shipping product" },
        ].map((s, i) => (
          <div key={s.label} style={{ textAlign: "center", background: "#F8FAFC", border: "1px solid rgba(16,118,188,0.09)", borderRadius: 13, padding: "33px 19px", transitionDelay: `${i * 80}ms` }}>
            <p style={{ fontFamily: font, fontSize: 51, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1 }}>
              <span ref={s.ref}>{s.val}</span>{s.suffix}
            </p>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#374151", margin: "13px 0 5px" }}>{s.label}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* learnings */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13, marginBottom: 43 }}>
        {[
          { title: "Adoption beats perfection", body: "A system no one uses is a system that does not exist. Ship an imperfect v1 fast, iterate based on real usage — not theoretical completeness." },
          { title: "Tokens are the real leverage", body: "Components can be rebuilt. Tokens are load-bearing. Getting naming conventions right early saved weeks of migration work later." },
        ].map(l => (
          <div key={l.title} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 11, padding: "21px" }}>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 9 }}>{l.title}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>{l.body}</p>
          </div>
        ))}
      </div>

      {/* next case study */}
      <div className="csl-reveal" style={{ textAlign: "center", paddingTop: 15, borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 15 }}>Next case study</p>
        <a href="/projects/airiq" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: font, fontSize: 17, fontWeight: 700, color: "#111827", textDecoration: "none" }}>
          Air IQ: B2B Flight Booking
          <span style={{ color: ACCENT, fontSize: 21 }}>→</span>
        </a>
      </div>

      <ThanksSection />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────────────────────────────── */
export function DesignSystemCaseStudy() {
  return (
    <CaseStudyPage
      theme="ds"
      title="Design System"
      tag="Systems Design"
      tocItems={TOC_ITEMS}
      metaRows={[
        { label: "Role",     value: "Lead Product Designer" },
        { label: "Duration", value: "Nov 2025 – Jan 2026"   },
        { label: "Scope",    value: "0 → 1 System"          },
        { label: "Tools",    value: "Figma"                  },
      ]}
      hero={<DSHero />}
    >
      <OverviewSection />
      <FoundationsSection />
      <ComponentsSection />
      <InTheWildSection />
      <ImpactSection />
    </CaseStudyPage>
  );
}
