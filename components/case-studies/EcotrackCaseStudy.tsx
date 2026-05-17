"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";
import {
  ecoCompetitors,
  ecoEmpathy1,
  ecoEmpathy2,
  ecoLearnings,
  ecoMeta,
  ecoProcess,
  ecoResearchStats,
  ecoTestInsights,
} from "./ecotrackData";

/* ─────────────────────────────────────────────────────────────────────
   FONT SHORTHAND
───────────────────────────────────────────────────────────────────── */
const HAND = "var(--font-caveat,'Caveat',cursive)";

/* ─────────────────────────────────────────────────────────────────────
   TOC + META
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"        },
  { id: "problem",     label: "The Problem"     },
  { id: "process",     label: "Design Process"  },
  { id: "research",    label: "User Research"   },
  { id: "audience",    label: "Target Audience" },
  { id: "personas",    label: "User Personas"   },
  { id: "competitive", label: "Competitive"     },
  { id: "design",      label: "Visual Design"   },
  { id: "wireframes",  label: "Wireframes"      },
  { id: "onboarding",  label: "OnBoarding"      },
  { id: "screens",     label: "App Screens"     },
  { id: "iterations",  label: "Iterations"      },
  { id: "outcomes",    label: "Outcomes"        },
  { id: "learnings",   label: "Learnings"       },
];

const META_ROWS = [
  { label: "Role",     value: "UX Designer"      },
  { label: "Duration", value: "4 Weeks"          },
  { label: "Platform", value: "iOS App"          },
  { label: "Tools",    value: "Figma"            },
  { label: "Type",     value: "Personal Project" },
];

/* ─────────────────────────────────────────────────────────────────────
   COUNT ANIMATION HOOK
───────────────────────────────────────────────────────────────────── */
function useCountAnimation(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0");
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = target / (1200 / 16);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, 16);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    root.querySelectorAll(".eco-count").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [rootRef]);
}

/* ─────────────────────────────────────────────────────────────────────
   SHARED IMAGE COMPONENT
───────────────────────────────────────────────────────────────────── */
function EcoImg({ src, alt, style = {} }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block", ...style }} />
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HAND ANNOTATION — cursive note + curved SVG arrow
   Matches the home page's cswk-annot aesthetic
───────────────────────────────────────────────────────────────────── */
type HandNoteDir = "down" | "right" | "up-right" | "left";

function HandNote({
  text,
  dir = "down",
  style = {},
}: {
  text: string;
  dir?: HandNoteDir;
  style?: React.CSSProperties;
}) {
  const label = (
    <span style={{ fontFamily: HAND, fontSize: "1rem", color: "#2D7D43", lineHeight: 1.25, display: "block" }}>
      {text}
    </span>
  );

  const arrowDown = (
    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" style={{ flexShrink: 0 }}>
      <path d="M8 2 Q8 11 8 18" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
      <path d="M5 15 L8 18 L11 15" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const arrowRight = (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 7 Q12 3 22 7" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M19 4 L22 7 L19 10" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const arrowUpRight = (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 14 Q6 7 14 4" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M11 2 L14 4 L12 7" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const arrowLeft = (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M26 7 Q16 3 6 7" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M9 4 L6 7 L9 10" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const containerBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    pointerEvents: "none",
    ...style,
  };

  if (dir === "down") return (
    <div style={{ ...containerBase, flexDirection: "column", alignItems: "center", gap: 6 }}>
      {label}
      {arrowDown}
    </div>
  );
  if (dir === "right") return (
    <div style={containerBase}>
      {label}
      {arrowRight}
    </div>
  );
  if (dir === "up-right") return (
    <div style={{ ...containerBase, flexDirection: "column", alignItems: "flex-start" }}>
      {arrowUpRight}
      {label}
    </div>
  );
  return (
    <div style={containerBase}>
      {arrowLeft}
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SCRIPT EM — cursive accent for section titles
───────────────────────────────────────────────────────────────────── */
function Script({ children }: { children: React.ReactNode }) {
  return (
    <em style={{ fontStyle: "normal", fontFamily: HAND, color: "#2D7D43", fontSize: "1.05em" }}>
      {children}
    </em>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CALLOUT — clean Apple-finish version
───────────────────────────────────────────────────────────────────── */
function EcoCallout({ children, style = {}, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={className} style={{
      borderLeft: "3px solid #2D7D43",
      borderRadius: "0 16px 16px 0",
      background: "#fff",
      padding: "18px 22px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)",
      fontSize: "0.82rem",
      color: "#374151",
      lineHeight: 1.75,
      marginBottom: 28,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CARD — clean Apple-finish
───────────────────────────────────────────────────────────────────── */
function EcoCard({ children, style = {}, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={className} style={{
      background: "#fff",
      borderRadius: 20,
      padding: "22px 20px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO COMPONENTS
───────────────────────────────────────────────────────────────────── */
function EcoCO2Ring() {
  return (
    <div style={{ position: "relative", width: 60, height: 60, margin: "0 auto 8px" }}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <defs>
          <clipPath id="eco-liquid-clip">
            <circle cx="30" cy="30" r="26" />
          </clipPath>
        </defs>
        <circle cx="30" cy="30" r="26" fill="#E8F7EC" />
        <g clipPath="url(#eco-liquid-clip)">
          <g style={{ animation: "eco-liquid-rise 1.6s cubic-bezier(0.4,0,0.2,1) 0.4s both" }}>
            <g style={{ animation: "eco-wave-scroll 2s linear infinite" }}>
              <path d="M-60,25 C-45,19 -15,31 0,25 C15,19 45,31 60,25 C75,19 105,31 120,25 L120,60 L-60,60 Z" fill="#2D7D43" />
              <path d="M-60,29 C-45,23 -15,35 0,29 C15,23 45,35 60,29 C75,23 105,35 120,29 L120,60 L-60,60 Z" fill="#48A362" opacity="0.35" />
            </g>
          </g>
        </g>
        <circle cx="30" cy="30" r="26" fill="none" stroke="#2D7D43" strokeWidth="2" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", lineHeight: 1, textShadow: "0 1px 3px rgba(0,30,15,0.7)" }}>2.4</p>
        <p style={{ fontSize: "0.52rem", color: "rgba(255,255,255,0.9)", textShadow: "0 1px 2px rgba(0,30,15,0.5)" }}>kg CO₂</p>
      </div>
    </div>
  );
}

function EcoPhoneMockup() {
  return (
    <div style={{ width: "min(220px, 100%)", background: "#0A1F0F", borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(45,125,67,0.4)", boxShadow: "0 24px 60px rgba(45,125,67,0.25)" }}>
      <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 40, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#F2FAF3", padding: "16px 12px", minHeight: 220 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ fontSize: "0.72rem", color: "#0D2312", fontWeight: 600 }}>Good morning 🌱</p>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#D0EAD4" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px 12px", textAlign: "center", marginBottom: 10 }}>
          <EcoCO2Ring />
          <p style={{ fontSize: "0.62rem", color: "#3B6B45" }}>Today&apos;s footprint</p>
          <p style={{ fontSize: "0.6rem", color: "#48A362" }}>↓ 18% vs yesterday</p>
        </div>
        {[
          { icon: "🚗", w: "72%", val: "0.8" },
          { icon: "⚡", w: "45%", val: "1.1" },
          { icon: "🍽️", w: "30%", val: "0.5" },
        ].map((row) => (
          <div key={row.icon} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: "0.7rem" }}>{row.icon}</span>
            <div style={{ flex: 1, height: 5, background: "#D0EAD4", borderRadius: 3 }}>
              <div style={{ width: row.w, height: "100%", background: "#2D7D43", borderRadius: 3 }} />
            </div>
            <span style={{ fontSize: "0.6rem", color: "#3B6B45", width: 20 }}>{row.val}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2D7D43", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(45,125,67,0.5)" }}>
            <span style={{ color: "#fff", fontSize: "1.1rem", lineHeight: 1, fontWeight: 300 }}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcoHero() {
  return (
    <div className="csl-hero">
      <div className="csl-hero-grid" />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">🌱 Personal Project · iOS App</div>
          <h1 className="csl-hero-title">
            EcoTrack.<br />
            <em style={{ fontStyle: "normal", fontFamily: HAND, color: "rgba(255,255,255,0.65)", fontSize: "0.85em" }}>Making the Planet Count.</em>
          </h1>
          <p className="csl-hero-desc">
            People who genuinely care about climate change often feel paralysed by it. Not indifferent. I spent 4 weeks researching why motivated users abandon eco apps, then designing the experience I wish already existed.
          </p>
          <div className="csl-hero-chips">
            {ecoMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        </div>
        <div className="csl-hero-right">
          <EcoPhoneMockup />
        </div>
      </div>
      <div className="csl-hero-stats">
        {[
          { val: "5",   label: "Users interviewed"  },
          { val: "3",   label: "Competitors audited" },
          { val: "2",   label: "Iteration rounds"   },
          { val: "4wk", label: "Sprint duration"    },
        ].map((s) => (
          <div className="csl-hero-stat" key={s.label}>
            <div className="csl-hero-stat-val">{s.val}</div>
            <div className="csl-hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ITERATION PHONE MOCKUPS
───────────────────────────────────────────────────────────────────── */
function TabBarPhone() {
  return (
    <div style={{ width: "100%", maxWidth: 190, margin: "0 auto", background: "#0A1F0F", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(255,100,100,0.3)", boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}>
      <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 36, height: 3, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#F2FAF3", padding: "12px 10px 8px", minHeight: 190 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <p style={{ fontSize: "0.62rem", fontWeight: 600, color: "#0D2312" }}>Good morning 🌱</p>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#D0EAD4" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 10, height: 80, marginBottom: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E8F7EC", border: "2px solid #2D7D43" }} />
          <p style={{ fontSize: "0.52rem", color: "#3B6B45" }}>Today&apos;s footprint</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 8, height: 52 }} />
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", padding: "8px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: i === 0 ? 1 : 0.4 }}>
            <div style={{ width: 14, height: 14, background: i === 0 ? "#2D7D43" : "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: i === 0 ? "#2D7D43" : "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#D1D5DB", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -10 }}>
          <span style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1 }}>+</span>
        </div>
        {[2, 3].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: 0.4 }}>
            <div style={{ width: 14, height: 14, background: "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FABPhone() {
  return (
    <div style={{ width: "100%", maxWidth: 190, margin: "0 auto", background: "#0A1F0F", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(45,125,67,0.4)", boxShadow: "0 12px 32px rgba(45,125,67,0.2)" }}>
      <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 36, height: 3, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#F2FAF3", padding: "12px 10px 8px", minHeight: 190, position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <p style={{ fontSize: "0.62rem", fontWeight: 600, color: "#0D2312" }}>Good morning 🌱</p>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#D0EAD4" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 10, height: 80, marginBottom: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E8F7EC", border: "2px solid #2D7D43" }} />
          <p style={{ fontSize: "0.52rem", color: "#3B6B45" }}>Today&apos;s footprint</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 8, height: 52 }} />
        <div style={{ position: "absolute", bottom: 12, right: 10, width: 36, height: 36, borderRadius: "50%", background: "#2D7D43", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(45,125,67,0.55)" }}>
          <span style={{ color: "#fff", fontSize: "1.1rem", lineHeight: 1, fontWeight: 300 }}>+</span>
        </div>
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", padding: "8px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        {[true, false, false, false].map((active, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: active ? 1 : 0.4 }}>
            <div style={{ width: 14, height: 14, background: active ? "#2D7D43" : "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: active ? "#2D7D43" : "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalChartCard() {
  return (
    <EcoCard>
      <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "#111827", marginBottom: 12 }}>Carbon Metrics — Today</p>
      {[
        { label: "Transport CO₂e", val: "0.8 kg", sub: "CH4 equiv: 0.03", pct: "35%" },
        { label: "Electricity kWh", val: "1.1 kg", sub: "Scope 2: indirect", pct: "47%" },
        { label: "Food LCA",        val: "0.5 kg", sub: "Land use: 0.2",    pct: "18%" },
      ].map((row) => (
        <div key={row.label} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <p style={{ fontSize: "0.56rem", color: "#374151" }}>{row.label}</p>
            <p style={{ fontSize: "0.56rem", fontWeight: 700, color: "#111827" }}>{row.val}</p>
          </div>
          <div style={{ height: 5, background: "#F3F4F6", borderRadius: 3, marginBottom: 2 }}>
            <div style={{ width: row.pct, height: "100%", background: "#9CA3AF", borderRadius: 3 }} />
          </div>
          <p style={{ fontSize: "0.48rem", color: "#9CA3AF" }}>{row.sub}</p>
        </div>
      ))}
      <div style={{ marginTop: 10, padding: "6px 10px", background: "#FEF2F2", borderRadius: 8 }}>
        <p style={{ fontSize: "0.54rem", color: "#EF4444", fontWeight: 700 }}>Total: 2.4 kg CO₂e · Scope 1+2</p>
      </div>
    </EcoCard>
  );
}

function ClearChartCard() {
  return (
    <EcoCard>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "#111827" }}>Today&apos;s impact</p>
        <span style={{ fontSize: "0.56rem", color: "#10B981", fontWeight: 700 }}>↓ 18% vs yesterday</span>
      </div>
      {[
        { icon: "🚗", label: "Transport", bar: "72%", note: "≈ 8km drive"   },
        { icon: "⚡", label: "Energy",    bar: "45%", note: "≈ 2hrs AC"     },
        { icon: "🍽️", label: "Food",     bar: "30%", note: "≈ 1 meat meal" },
      ].map((row) => (
        <div key={row.label} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: "0.7rem" }}>{row.icon}</span>
            <p style={{ fontSize: "0.58rem", fontWeight: 600, color: "#374151", flex: 1 }}>{row.label}</p>
            <p style={{ fontSize: "0.52rem", color: "#9CA3AF" }}>{row.note}</p>
          </div>
          <div style={{ height: 6, background: "#E8F7EC", borderRadius: 3 }}>
            <div style={{ width: row.bar, height: "100%", background: "#2D7D43", borderRadius: 3 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 10, padding: "6px 10px", background: "#E8F7EC", borderRadius: 8 }}>
        <p style={{ fontSize: "0.54rem", color: "#2D7D43", fontWeight: 700 }}>Good day. Below your weekly average.</p>
      </div>
    </EcoCard>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §01  OVERVIEW
───────────────────────────────────────────────────────────────────── */
function OverviewSection() {
  return (
    <CsSection id="overview">
      <CsSectionHeader
        label="Project Overview"
        title={<>End-to-end solo. Research to <Script>tested prototype.</Script></>}
        sub="I owned everything: screener survey, user interviews, information architecture, wireframes, visual design, and two rounds of usability testing. This is the account of what I learned, what I got wrong, and what I changed."
      />

      {/* Cover image with hand annotation */}
      <div className="csl-reveal" style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, boxShadow: "0 20px 60px rgba(45,125,67,0.12)" }}>
        <EcoImg src="/Image/Ecotrack/ecotrack/cover.png" alt="EcoTrack app cover" />
        <div style={{ position: "absolute", bottom: 24, right: 24 }}>
          <HandNote text="4 weeks. one prototype." dir="up-right" />
        </div>
      </div>

      {/* Bento feature grid */}
      <div className="csl-reveal rd1" style={{
        display: "grid",
        gridTemplate: `"a a b" auto "c d b" auto / 1fr 1fr 1fr`,
        gap: 14,
      }}>
        <EcoCard style={{ gridArea: "a", display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: "1.6rem" }}>📊</span>
          <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827" }}>Daily Footprint Tracking</p>
          <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.65 }}>Quick-log from the home screen. Designed so users never need to navigate away to record an activity. Every extra tap was a reason to quit.</p>
        </EcoCard>

        <EcoCard style={{ gridArea: "b", background: "#0A1F0F", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 10, minHeight: 200 }}>
          <span style={{ fontSize: "1.6rem" }}>🌍</span>
          <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>Impact Visualization</p>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>Raw CO₂ numbers mean nothing to most people. Every metric reframed as a plain-language comparison.</p>
        </EcoCard>

        <EcoCard style={{ gridArea: "c", background: "#E8F7EC" }}>
          <span style={{ fontSize: "1.4rem", marginBottom: 8, display: "block" }}>💡</span>
          <p style={{ fontSize: "0.86rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>Learning Hub</p>
          <p style={{ fontSize: "0.76rem", color: "#3B6B45", lineHeight: 1.6 }}>Content and tracking on the same screen. Education is context, not a destination.</p>
        </EcoCard>

        <EcoCard style={{ gridArea: "d" }}>
          <span style={{ fontSize: "1.4rem", marginBottom: 8, display: "block" }}>📈</span>
          <p style={{ fontSize: "0.86rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>Progress Profile</p>
          <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>Added after every tester asked "am I actually getting better?" The original dashboard didn&apos;t answer that.</p>
        </EcoCard>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  THE PROBLEM
───────────────────────────────────────────────────────────────────── */
function ProblemSection() {
  return (
    <CsSection id="problem">
      <CsSectionHeader label="The Problem" title={<>Why motivated users <Script>still quit</Script> eco apps.</>} />

      <p style={{ fontSize: "0.86rem", color: "#374151", lineHeight: 1.85, marginBottom: 24 }} className="csl-reveal">
        In every interview I ran, users described the same moment. They opened an existing eco app, saw a number, felt bad, and eventually stopped opening it. The apps weren&apos;t missing features. They were missing a reason to come back tomorrow.
      </p>

      <EcoCallout style={{ marginBottom: 28 }}>
        Motivated users abandon tracking not because they don&apos;t care. Existing apps optimise for <strong>data completeness over daily usability</strong>, making the act of tracking feel worse than not tracking at all.
      </EcoCallout>

      {/* Pull quote */}
      <div className="csl-reveal rd2" style={{ borderLeft: "3px solid #2D7D43", padding: "22px 28px", background: "#fff", borderRadius: "0 20px 20px 0", marginBottom: 36, boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)" }}>
        <p style={{ fontFamily: HAND, fontSize: "1.4rem", color: "#0D2312", lineHeight: 1.55, marginBottom: 10 }}>
          &ldquo;I opened Joro once, saw my score, felt terrible, and deleted it. I wasn&apos;t looking for a report card.&rdquo;
        </p>
        <p style={{ fontSize: "0.68rem", color: "#3B6B45", fontWeight: 600 }}>Interview participant, 26, product manager</p>
      </div>

      {/* Constraints */}
      <p className="csl-section-eyebrow csl-reveal rd3">Project Constraints</p>
      <div className="csl-card-grid csl-reveal rd3">
        {[
          { icon: "📱", label: "iOS concept only", desc: "No backend, no live data sync. All carbon estimates are averaged. Deliberately approximate over precisely complex." },
          { icon: "✂️", label: "Scope: daily habits", desc: "Carbon offset purchasing, social features, and leaderboards were explicitly cut. The core loop had to work first." },
          { icon: "⏱️", label: "4-week sprint", desc: "Self-imposed deadline forced real prioritisation. Not every edge case could be designed, so I chose which ones mattered most." },
          { icon: "🔬", label: "No longitudinal data", desc: "All insights come from 45-minute sessions, not observed behaviour over time. A real limitation I address honestly in Outcomes." },
        ].map((c) => (
          <EcoCard key={c.label}>
            <span style={{ fontSize: "1.3rem", display: "block", marginBottom: 10 }}>{c.icon}</span>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{c.label}</p>
            <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{c.desc}</p>
          </EcoCard>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  DESIGN PROCESS
───────────────────────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <CsSection id="process">
      <CsSectionHeader
        label="Design Thinking Process"
        title={<>Five phases.</>}
        sub="I followed a double-diamond structure, but the Define phase upended my assumptions entirely. What I thought the problem was turned out to be wrong."
      />

      {/* Cursive subline */}
      <p className="csl-reveal" style={{ fontFamily: HAND, fontSize: "1.6rem", color: "#2D7D43", marginBottom: 28, marginTop: -12 }}>
        only one went as planned.
      </p>

      {/* Visual process timeline */}
      <div className="csl-reveal rd1" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", gap: 0, position: "relative" }}>
          <div style={{ position: "absolute", top: 28, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, #2D7D43, #48A362, #2D7D43)", borderRadius: 2, zIndex: 0 }} />
          {ecoProcess.map((step) => (
            <div key={step.name} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: step.active ? "#2D7D43" : "#fff",
                border: `2px solid ${step.active ? "#2D7D43" : "#E5E7EB"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", marginBottom: 12,
                boxShadow: step.active ? "0 4px 16px rgba(45,125,67,0.3)" : "0 2px 8px rgba(0,0,0,0.05)",
              }}>
                {step.icon}
              </div>
              <p style={{ fontSize: "0.56rem", fontWeight: 700, color: "#2D7D43", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4, textAlign: "center" }}>
                {step.phase}
              </p>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827", textAlign: "center" }}>{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="csl-process-grid csl-reveal rd2">
        {ecoProcess.map((step) => (
          <div key={step.name} className="csl-process-step" style={step.active ? { borderTopColor: "#2D7D43" } : {}}>
            <div className="csl-process-num">{step.phase}</div>
            <div className="csl-process-title">{step.name}</div>
            <p className="csl-process-text">{step.desc}</p>
          </div>
        ))}
      </div>

      <EcoCallout style={{ marginTop: 24 }}>
        <strong>4-week sprint:</strong> Week 1 — Research &amp; Interviews · Week 2 — Synthesis &amp; Define · Week 3 — Wireframes &amp; Prototype · Week 4 — Testing &amp; Iterations
      </EcoCallout>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  USER RESEARCH
───────────────────────────────────────────────────────────────────── */
function ResearchSection() {
  const rootRef = useRef<HTMLElement>(null);
  useCountAnimation(rootRef as React.RefObject<HTMLElement | null>);

  return (
    <CsSection id="research">
      <CsSectionHeader
        label="User Research"
        title={<>What I expected to find. <Script>What I actually found.</Script></>}
        sub="I recruited people who described themselves as environmentally conscious but inconsistent. Not existing eco-app users. That distinction mattered."
      />

      <EcoCallout style={{ marginBottom: 28 }}>
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>🔬</span>
        <strong>Methodology:</strong> 5 semi-structured interviews (30 min each via Zoom) plus a 12-person screener survey. Participants were screened for environmental intent, not eco-app experience. I wanted to understand motivation and abandonment. Not feature preferences.
      </EcoCallout>

      <div
        ref={rootRef as React.RefObject<HTMLDivElement>}
        className="csl-metrics csl-reveal rd1"
      >
        {ecoResearchStats.map((stat) => (
          <div key={stat.label} className="csl-metric">
            <p className="eco-count csl-metric-val" data-target={stat.value} data-suffix={stat.suffix}>
              0{stat.suffix}
            </p>
            <p className="csl-metric-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Research findings with hand annotation */}
      <div style={{ marginTop: 36, position: "relative" }} className="csl-reveal rd2">
        <p className="csl-section-eyebrow">Research → Design Decisions</p>

        {/* Floating hand note beside the chain */}
        <div style={{ position: "absolute", right: -8, top: 40, transform: "translateX(100%)" }}>
          <HandNote text="users didn't need more data. they needed less guilt." dir="left" style={{ maxWidth: 160, textAlign: "right" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { finding: "Users felt judged, not helped by their data", decision: "Every metric shows a positive comparison (today vs yesterday), never a score against an abstract goal" },
            { finding: "3/5 had quit an app within the first 10 days", decision: "The first-time logging flow became the primary design problem. Not the dashboard." },
            { finding: "No one wanted to manually log food in detail", decision: "Quick-select category cards replace free-form input for the most common logging scenarios" },
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "center" }}>
              <div style={{ background: "#FEF2F2", borderRadius: 14, padding: "14px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <p style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.65 }}>🔍 <strong style={{ color: "#111827" }}>Finding:</strong> {row.finding}</p>
              </div>
              <span style={{ fontSize: "0.9rem", color: "#D1D5DB" }}>→</span>
              <div style={{ background: "#E8F7EC", borderRadius: 14, padding: "14px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <p style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.65 }}>✓ <strong style={{ color: "#2D7D43" }}>Decision:</strong> {row.decision}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  TARGET AUDIENCE
───────────────────────────────────────────────────────────────────── */
function AudienceSection() {
  return (
    <CsSection id="audience">
      <CsSectionHeader
        label="Target Audience"
        title={<>Designing for people who <Script>already care.</Script></>}
        sub="The target user isn't someone who needs to be convinced climate change is real. They already believe. The design challenge is habit. Not awareness."
      />

      <div className="csl-reveal" style={{ borderRadius: 20, overflow: "hidden", marginBottom: 28, boxShadow: "0 8px 40px rgba(45,125,67,0.1)" }}>
        <EcoImg src="/Image/Ecotrack/target-audience.png" alt="Target audience overview" />
      </div>

      <div className="csl-card-grid csl-reveal rd1">
        {[
          { label: "Eco-Curious Beginners", desc: "They care but don't know where to start. Need gentle guidance and visible progress to build confidence.", bg: "#E8F7EC" },
          { label: "Active Eco-Enthusiasts", desc: "They've built green habits but crave data-driven proof that their choices matter. Want insight, not instruction.", bg: "#D0EAD4" },
          { label: "Lapsed Eco-App Users", desc: "They tried other apps and quit. Trust is broken. The design has to earn their return. Not demand it.", bg: "#F9FAFB" },
        ].map((seg) => (
          <EcoCard key={seg.label} style={{ background: seg.bg }}>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>{seg.label}</p>
            <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.6 }}>{seg.desc}</p>
          </EcoCard>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  USER PERSONAS
───────────────────────────────────────────────────────────────────── */
function PersonasSection() {
  return (
    <CsSection id="personas">
      <CsSectionHeader
        label="User Personas"
        title={<>Fictional representations, <Script>built from real research.</Script></>}
        sub="These personas guided every feature decision from information architecture to how I framed carbon data on screen. Priya needed simplicity. Arjun needed proof."
      />

      <div className="csl-card-2col csl-reveal">
        {[
          { photo: "user-persona.png", name: "Priya Sharma", tag: "22 · College Student · Mumbai", bg: "#E8F7EC", desc: "Eco-curious beginner who cares about the planet but doesn't know where to start. Needs a friendly, visual app that guides her through sustainable choices without overwhelming her.", empathy: ecoEmpathy1 },
          { photo: "user-persona2.png", name: "Arjun Mehta", tag: "28 · Product Manager · Bangalore", bg: "#D0EAD4", desc: "Active eco-enthusiast who has built green habits but needs data-driven proof that they matter. Looking for a sleek, efficient app that gives meaningful feedback without information overload.", empathy: ecoEmpathy2 },
        ].map((p) => (
          <div key={p.name} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.05)" }}>
            <div style={{ height: 220, overflow: "hidden", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <EcoImg src={`/Image/Ecotrack/${p.photo}`} alt={p.name} style={{ height: "100%", width: "auto", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "22px" }}>
              <p style={{ fontSize: "0.96rem", fontWeight: 700, color: "#111827", marginBottom: 2 }}>{p.name}</p>
              <p style={{ fontSize: "0.72rem", color: "#9CA3AF", marginBottom: 14 }}>{p.tag}</p>
              <p style={{ fontSize: "0.78rem", color: "#374151", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
              {p.empathy.map((row) => (
                <div key={row.cat} style={{ borderTop: "1px solid #F3F4F6", paddingTop: 10, marginTop: 10 }}>
                  <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 3 }}>{row.cat}</p>
                  <p style={{ fontSize: "0.75rem", color: "#374151", lineHeight: 1.55 }}>{row.insight}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  COMPETITIVE ANALYSIS
───────────────────────────────────────────────────────────────────── */
function CompetitiveSection() {
  return (
    <CsSection id="competitive">
      <CsSectionHeader
        label="Competitor Analysis"
        title={<>What each app taught me. <Script>And what decision it changed.</Script></>}
        sub="I didn't audit these apps to list their features. I used them like a user would, for 2 to 3 days each, paying attention to the moment I stopped wanting to open them."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }} className="csl-reveal">
        {ecoCompetitors.map((comp) => (
          <EcoCard key={comp.name} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.4fr" }}>
              <div style={{ padding: "16px 18px", borderRight: "1px solid #F3F4F6" }}>
                <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 10 }}>{comp.name}</p>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Pros</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.pros.map((p) => (
                    <li key={p} style={{ fontSize: "0.74rem", color: "#6B7280", lineHeight: 1.6, marginBottom: 3, display: "flex", gap: 5 }}>
                      <span style={{ color: "#10B981", flexShrink: 0 }}>+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "16px 18px", borderRight: "1px solid #F3F4F6" }}>
                <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "transparent", marginBottom: 10, userSelect: "none" }}>·</p>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Cons</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.cons.map((c) => (
                    <li key={c} style={{ fontSize: "0.74rem", color: "#6B7280", lineHeight: 1.6, marginBottom: 3, display: "flex", gap: 5 }}>
                      <span style={{ color: "#EF4444", flexShrink: 0 }}>–</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "16px 18px", background: "#F9FAFB" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "#2D7D43", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Design decision</p>
                <p style={{ fontSize: "0.74rem", color: "#374151", lineHeight: 1.65 }}>{comp.decision}</p>
              </div>
            </div>
          </EcoCard>
        ))}
      </div>

      <EcoCallout style={{ marginTop: 24 }}>
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>💡</span>
        The pattern across all four: <strong>no single app was bad</strong>. Each was good at one thing and weak on everything adjacent to it. EcoTrack&apos;s brief became: make daily logging so frictionless that users don&apos;t need anything else to build a habit.
      </EcoCallout>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  VISUAL DESIGN
───────────────────────────────────────────────────────────────────── */
function DesignSection() {
  return (
    <CsSection id="design">
      <CsSectionHeader
        label="Colors & Typography"
        title={<>Every decision had an alternative <Script>I chose not to use.</Script></>}
        sub="Visual design choices are easier to evaluate when you know what was rejected and why. Here's the reasoning behind typeface and colour."
      />

      <div className="csl-reveal" style={{ borderRadius: 20, overflow: "hidden", marginBottom: 32, boxShadow: "0 8px 40px rgba(45,125,67,0.08)" }}>
        <EcoImg src="/Image/Ecotrack/colors.png" alt="EcoTrack color system" />
      </div>

      <EcoCard style={{ marginBottom: 20 }} className="csl-reveal rd1">
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 12 }}>Colour decision</p>
        <p style={{ fontSize: "0.84rem", color: "#374151", lineHeight: 1.75, marginBottom: 20 }}>
          I tested three green values. A vibrant lime-green felt too optimistic — celebrating before the user had done anything. A deep forest green felt heavy and preachy. <strong style={{ color: "#111827" }}>#2D7D43 sits between them: calm, credible, and grown-up.</strong> The register of a tool that takes the problem seriously.
        </p>
        <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
          {[
            { hex: "#2D7D43" }, { hex: "#48A362" }, { hex: "#E8F7EC" },
            { hex: "#0A1F0F" }, { hex: "#111827" }, { hex: "#6B7280" },
          ].map((s) => (
            <div key={s.hex} style={{ flex: 1, height: 52, background: s.hex }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {[
            { hex: "#2D7D43", name: "Primary",   role: "Accent · CTA" },
            { hex: "#48A362", name: "Secondary",  role: "Charts" },
            { hex: "#E8F7EC", name: "Surface",    role: "Card tints" },
            { hex: "#0A1F0F", name: "Dark BG",    role: "Hero" },
            { hex: "#111827", name: "Ink",        role: "Headings" },
            { hex: "#6B7280", name: "Muted",      role: "Body copy" },
          ].map((s, i) => (
            <div key={s.hex} style={{ padding: "8px 6px", borderRight: i < 5 ? "1px solid #F3F4F6" : "none" }}>
              <p style={{ fontSize: "0.58rem", fontWeight: 700, color: "#111827", marginBottom: 1 }}>{s.name}</p>
              <p style={{ fontSize: "0.5rem", color: "#9CA3AF", fontFamily: "ui-monospace, monospace", marginBottom: 2 }}>{s.hex}</p>
              <p style={{ fontSize: "0.5rem", color: "#6B7280" }}>{s.role}</p>
            </div>
          ))}
        </div>
      </EcoCard>

      <EcoCard className="csl-reveal rd2">
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 16 }}>Typeface decision</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
          {[
            { name: "DM Sans", verdict: "Rejected", reason: "Too friendly. Felt like a consumer wellness app, not a credible data tool.", chosen: false },
            { name: "Nunito",  verdict: "Rejected", reason: "Rounded terminals looked playful at small sizes. Wrong register for environmental data.", chosen: false },
            { name: "Inter",   verdict: "Chosen",   reason: "Trustworthy, data-appropriate, excellent on screen at every weight. Intentionally not exciting.", chosen: true },
          ].map((t) => (
            <div key={t.name} style={{ padding: "14px 16px", borderRadius: 14, background: t.chosen ? "#E8F7EC" : "#F9FAFB", border: `1.5px solid ${t.chosen ? "#2D7D43" : "transparent"}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <p style={{ fontSize: "0.88rem", fontWeight: 700, color: t.chosen ? "#2D7D43" : "#6B7280" }}>{t.name}</p>
                <span style={{ fontSize: "0.54rem", fontWeight: 700, padding: "2px 8px", borderRadius: 100, background: t.chosen ? "#2D7D43" : "#E5E7EB", color: t.chosen ? "#fff" : "#9CA3AF" }}>{t.verdict}</span>
              </div>
              <p style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.55 }}>{t.reason}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { w: 700, label: "Bold",    meta: "700 · Headings" },
            { w: 500, label: "Medium",  meta: "500 · Labels"   },
            { w: 400, label: "Regular", meta: "400 · Body"     },
            { w: 300, label: "Light",   meta: "300 · Captions" },
          ].map((t) => (
            <div key={t.label}>
              <p style={{ fontSize: "1rem", fontWeight: t.w, color: "#111827", marginBottom: 4 }}>{t.label}</p>
              <p style={{ fontSize: "0.6rem", color: "#9CA3AF", fontFamily: "ui-monospace, monospace" }}>{t.meta}</p>
            </div>
          ))}
        </div>
      </EcoCard>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  WIREFRAMES
───────────────────────────────────────────────────────────────────── */
function WireframesSection() {
  const wfNotes: Record<string, string> = {
    "w1.png":  "Home Dashboard",
    "w2.png":  "Activity Log",
    "w3.png":  "Carbon Detail",
    "w4.png":  "Add Activity",
    "w5.png":  "Quick Log",
    "w6.png":  "Learning Hub",
    "w7.png":  "Learn Detail",
    "w8.png":  "Progress View",
    "w9.png":  "Weekly Chart",
    "w10.png": "Profile & Goals",
    "w11.png": "Onboarding",
    "w12.png": "Permissions",
  };

  return (
    <CsSection id="wireframes">
      <CsSectionHeader
        label="Mid-Fidelity Wireframes"
        title={<>IA first. <Script>Screens second.</Script></>}
        sub="Before opening Figma I listed every feature the research suggested. I ended up with 23 potential screens, then applied one filter: can a first-time user complete this on day one, without guidance? What survived: 12 screens, 5 views."
      />

      <EcoCallout style={{ marginBottom: 28 }}>
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>✂️</span>
        <strong>From 23 screens to 5 views:</strong> Social sharing, streak mechanics, carbon offset purchasing, and detailed lifecycle analysis all failed the day-one filter. What remained: home dashboard, activity log, impact breakdown, learning hub, progress history.
      </EcoCallout>

      <div className="csl-reveal rd1" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
        {Object.entries(wfNotes).map(([file, label]) => (
          <div key={file} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ borderRadius: 14, overflow: "hidden", background: "#F9FAFB", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)" }}>
              <EcoImg src={`/Image/Ecotrack/${file}`} alt={label} />
            </div>
            <p style={{ fontSize: "0.62rem", color: "#6B7280", textAlign: "center", fontWeight: 500 }}>{label}</p>
          </div>
        ))}
      </div>

      <EcoCallout>
        I chose a standard bottom tab bar. Not because it&apos;s exciting, but because it&apos;s familiar. Every tester I interviewed uses 2 to 3 apps with tab-based navigation daily. I didn&apos;t want the navigation model to require learning. The cognitive load budget had to go toward understanding carbon data.
      </EcoCallout>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  ONBOARDING SHOWCASE
───────────────────────────────────────────────────────────────────── */
function OnboardingSection() {
  const row1 = [
    { file: "onboarding1.png", label: "Splash",               sub: "EcoTrack logo" },
    { file: "onboarding2.png", label: "Track What Matters",   sub: "See your footprint grow or shrink in real time" },
    { file: "onboarding3.png", label: "Small Steps, Big Change", sub: "Log daily actions, get eco tips, stay on track" },
    { file: "onabording6.png", label: "Join the Eco Journey", sub: "Earn badges, build habits, make impact fun" },
    { file: "onboarding5.png", label: "Welcome",              sub: "Sign In / Sign Up" },
    { file: "onboarding4.png", label: "Sign Up",              sub: "Full Name · Email · Password · Google · Facebook" },
  ];
  const row2 = [
    { file: "onboarding7.png", label: "Sign In",              sub: "\"Let's continue your journey to a greener, more sustainable future.\"" },
    { file: "onboarding8.png", label: "Your Travel Habits",   sub: "Primary Mode of Transport: Car · Flights · Walking · Public Transport · Bicycle · Bike" },
    { file: "onboarding9.png", label: "Your Home Energy Use", sub: "Type of Home: Apartment · House · Shared. Monthly Electricity Usage in kWh" },
  ];

  return (
    <CsSection id="onboarding">
      <CsSectionHeader
        label="High Fidelity — OnBoarding"
        title={<>Nine screens. <Script>One commitment at a time.</Script></>}
        sub="V1 onboarding asked for too much before showing any value. Two testers dropped off before setup was complete. The revised flow earns trust in steps: inspire first, then ask."
      />

      {/* Flow breadcrumb */}
      <div className="csl-reveal" style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {["Splash", "Track What Matters", "Small Steps", "Join the Journey", "Welcome", "Sign Up / Sign In", "Travel Habits", "Home Energy", "Dashboard"].map((step, i, arr) => (
          <div key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "0.68rem", color: "#374151", background: "#F9FAFB", padding: "4px 10px", borderRadius: 100, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", whiteSpace: "nowrap" }}>{step}</span>
            {i < arr.length - 1 && <span style={{ fontSize: "0.7rem", color: "#D1D5DB" }}>→</span>}
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, marginBottom: 20 }}>
        {row1.map(({ file, label, sub }) => (
          <div key={file} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(45,125,67,0.12)" }}>
              <EcoImg src={`/Image/Ecotrack/${file}`} alt={label} />
            </div>
            <p style={{ fontSize: "0.62rem", color: "#111827", textAlign: "center", fontWeight: 700, lineHeight: 1.3 }}>{label}</p>
            <p style={{ fontSize: "0.56rem", color: "#9CA3AF", textAlign: "center", lineHeight: 1.4 }}>{sub}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd2" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 28 }}>
        {row2.map(({ file, label, sub }) => (
          <div key={file} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 28px rgba(45,125,67,0.1)" }}>
              <EcoImg src={`/Image/Ecotrack/${file}`} alt={label} />
            </div>
            <p style={{ fontSize: "0.72rem", color: "#111827", textAlign: "center", fontWeight: 700 }}>{label}</p>
            <p style={{ fontSize: "0.62rem", color: "#6B7280", textAlign: "center", lineHeight: 1.5 }}>{sub}</p>
          </div>
        ))}
      </div>

      <div className="csl-card-2col csl-reveal rd3">
        <EcoCard style={{ background: "#E8F7EC" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0D2312", marginBottom: 10 }}>What changed in V2</p>
          {[
            "Value-first: three inspiration screens before any form",
            "Sign Up deferred until after the user understands the app",
            "Travel Habits and Home Energy asked as quick-select tiles. No free text.",
            "Get Started lands directly on the home dashboard",
          ].map((item) => (
            <div key={item} style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.6, marginBottom: 7, display: "flex", gap: 7 }}>
              <span style={{ color: "#2D7D43", flexShrink: 0 }}>✓</span>{item}
            </div>
          ))}
        </EcoCard>
        <EcoCard style={{ background: "#FEF2F2" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#7F1D1D", marginBottom: 10 }}>What V1 got wrong</p>
          {[
            "Sign Up form appeared on screen 2, before any context",
            "Free-text fields for travel distance and energy usage",
            "Two testers abandoned before completing setup",
            "No indication of what the app would feel like once open",
          ].map((item) => (
            <div key={item} style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.6, marginBottom: 7, display: "flex", gap: 7 }}>
              <span style={{ color: "#EF4444", flexShrink: 0 }}>✕</span>{item}
            </div>
          ))}
        </EcoCard>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §11  APP SCREENS SHOWCASE
───────────────────────────────────────────────────────────────────── */
function ScreensSection() {
  return (
    <CsSection id="screens">
      <CsSectionHeader
        label="High Fidelity — Core App Screens"
        title={<>Five views. <Script>One coherent system.</Script></>}
        sub="Each screen was designed to answer one question without requiring the user to navigate to another. The data has to make sense in context. Not just be present."
      />

      {/* Home Screen */}
      <div className="csl-reveal" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Home Screen</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: HAND, fontSize: "1.5rem", color: "#111827", marginBottom: 14, lineHeight: 1.3 }}>
              &ldquo;Good Morning David. You&apos;ve emitted 6.1 kg CO₂ today.&rdquo;
            </p>
            <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.8, marginBottom: 22 }}>
              The greeting leads with your name and today&apos;s number — immediately followed by a positive reinforcement pill: <strong style={{ color: "#2D7D43" }}>&ldquo;You&apos;re 15% below average. Great job!&rdquo;</strong> Good news before data. The 65% ring and &ldquo;Below daily average&rdquo; label frame the number as progress, not accusation.
            </p>
            {[
              { label: "Your Emission Insights", detail: "Travel 52% · Diet 15% · Energy 24% · Purchases 9%. Each with one specific swap, e.g. Switch 1 car trip to metro = save 1.8 kg CO₂." },
              { label: "Eco Tip of the Day", detail: "Set your AC to 24°C – Save 1.5 kg CO₂/day. Contextual, single-action tip pinned below the breakdown." },
              { label: "Explore accordion", detail: "What is a Carbon Footprint? · How is my carbon footprint calculated? · What is a low-impact diet? Inline education, no tab switch needed." },
            ].map((item) => (
              <EcoCard key={item.label} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#111827", marginBottom: 5 }}>{item.label}</p>
                <p style={{ fontSize: "0.7rem", color: "#6B7280", lineHeight: 1.6 }}>{item.detail}</p>
              </EcoCard>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(45,125,67,0.16)" }}>
              <EcoImg src="/Image/Ecotrack/home-screen.png" alt="EcoTrack home screen" />
            </div>
            <div style={{ position: "absolute", top: -20, left: -60 }}>
              <HandNote text="good morning, David 🌿" dir="right" />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Screen */}
      <div className="csl-reveal rd1" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Impact Screen</p>
        <p style={{ fontFamily: HAND, fontSize: "1.4rem", color: "#111827", marginBottom: 14 }}>Badges · Emission Graph · Carbon Sources</p>
        <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.8, marginBottom: 24 }}>
          The Impact screen answers &ldquo;am I getting better?&rdquo; through three lenses. <strong style={{ color: "#111827" }}>Badges</strong> (Eco Starter, Green Commuter) celebrate milestones without a points race. The <strong style={{ color: "#111827" }}>Emission Reduction Graph</strong> shows a Month/Week line chart. Actual CO₂ reduction over time, not a projected score. <strong style={{ color: "#111827" }}>Carbon Sources</strong> shows the donut of where emissions come from, so the user can identify which category to work on next.
        </p>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(45,125,67,0.1)" }}>
          <EcoImg src="/Image/Ecotrack/impact%20screen.png" alt="EcoTrack impact screen" />
          <div style={{ position: "absolute", bottom: 28, right: 28 }}>
            <HandNote text="progress, not punishment." dir="up-right" />
          </div>
        </div>
      </div>

      {/* Learn Screen */}
      <div className="csl-reveal rd2" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Learn Screen</p>
        <p style={{ fontFamily: HAND, fontSize: "1.4rem", color: "#111827", marginBottom: 14 }}>Eco Quiz · Knowledge Bites · Watch & Learn</p>
        <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.8, marginBottom: 24 }}>
          Research showed a standalone &ldquo;Learn&rdquo; tab doesn&apos;t get opened. So this screen mixes formats to create pull: an <strong style={{ color: "#111827" }}>Eco Quiz</strong> for engagement, <strong style={{ color: "#111827" }}>Knowledge Bites</strong> in card format for quick reads, and a <strong style={{ color: "#111827" }}>Watch &amp; Learn</strong> section for video. The accompanying tracking panel (&ldquo;Your Travel — Primary Mode&rdquo;) shows that learn and log share the same screen. Education is context, not a destination.
        </p>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(45,125,67,0.1)" }}>
          <EcoImg src="/Image/Ecotrack/learn-screen.png" alt="EcoTrack learn screen" />
          <div style={{ position: "absolute", top: 28, right: 28 }}>
            <HandNote text="learn while you log." dir="down" />
          </div>
        </div>
      </div>

      {/* Profile Screen */}
      <div className="csl-reveal rd3">
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Profile Screen</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.1)" }}>
              <EcoImg src="/Image/Ecotrack/profile-screen.png" alt="EcoTrack profile screen" />
            </div>
            <div style={{ position: "absolute", bottom: -20, right: -60 }}>
              <HandNote text="35.8 kg saved. quietly." dir="left" />
            </div>
          </div>
          <div>
            <p style={{ fontFamily: HAND, fontSize: "1.5rem", color: "#111827", marginBottom: 14, lineHeight: 1.3 }}>
              David · 35.8 kg CO₂ Saved · Member since February 2024
            </p>
            <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.8, marginBottom: 22 }}>
              Three stats sit directly below the avatar: <strong style={{ color: "#111827" }}>CO₂ Saved</strong> (total reduction since joining), <strong style={{ color: "#111827" }}>Member Since</strong> (February 2024), and <strong style={{ color: "#111827" }}>+5% Weekly Trend</strong>. These answer &ldquo;am I actually getting better?&rdquo; without a leaderboard or streak counter. No competitive pressure. Just personal progress.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Edit Profile", "Preference", "Support", "Log out"].map((item) => (
                <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", background: "#F9FAFB", borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <p style={{ fontSize: "0.78rem", color: "#374151", fontWeight: 500 }}>{item}</p>
                  <span style={{ fontSize: "0.8rem", color: "#C4C9D4" }}>›</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.68rem", color: "#9CA3AF", marginTop: 14, lineHeight: 1.65 }}>
              Settings are minimal by design: Preference, Support, Log out. The screen&apos;s job is one thing. Show you your own story.
            </p>
          </div>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §12  USER TESTING + ITERATIONS
───────────────────────────────────────────────────────────────────── */
function IterationsSection() {
  return (
    <CsSection id="iterations">
      <CsSectionHeader
        label="User Testing & Before After"
        title={<>Two hypotheses that failed. <Script>And what replaced them.</Script></>}
        sub="I documented both iterations as hypothesis-test-update cycles, not corrections to obvious mistakes. The original design decisions had reasoning behind them. And that reasoning was wrong."
      />

      <EcoCallout style={{ marginBottom: 28 }}>
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>🎯</span>
        <strong>Tasks given:</strong> (1) Log this morning&apos;s bus commute, 12km. (2) Find out how your week compared to last week. (3) Learn something actionable about reducing food emissions. (4) Add a new weekly goal.
      </EcoCallout>

      <EcoCard style={{ marginBottom: 32 }} className="csl-reveal rd1">
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 14 }}>Round 1 Task Completion (n=5)</p>
        {[
          { task: "Log a commute",    score: "3/5", pct: "60%" },
          { task: "Compare weeks",     score: "5/5", pct: "100%" },
          { task: "Find a tip",        score: "4/5", pct: "80%" },
          { task: "Add a weekly goal", score: "2/5", pct: "40%" },
        ].map((row) => (
          <div key={row.task} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <p style={{ fontSize: "0.76rem", color: "#374151" }}>{row.task}</p>
              <p style={{ fontSize: "0.76rem", fontWeight: 700, color: parseFloat(row.pct) < 70 ? "#EF4444" : "#2D7D43" }}>{row.score}</p>
            </div>
            <div style={{ height: 6, background: "#F3F4F6", borderRadius: 3 }}>
              <div style={{ width: row.pct, height: "100%", background: parseFloat(row.pct) < 70 ? "#FCA5A5" : "#48A362", borderRadius: 3 }} />
            </div>
          </div>
        ))}
        <p style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.65, marginTop: 14 }}>Tasks 1 and 4 had the highest failure rates. Both caused by navigation decisions, not content. The fix was structural, not cosmetic.</p>
      </EcoCard>

      <EcoCard style={{ marginBottom: 36 }} className="csl-reveal rd2">
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 14 }}>What I Observed</p>
        {ecoTestInsights.map((insight) => (
          <div key={insight} style={{ display: "flex", gap: 10, marginBottom: 13, fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.65 }}>
            <span style={{ color: "#EF4444", flexShrink: 0, marginTop: 1 }}>→</span>{insight}
          </div>
        ))}
      </EcoCard>

      {/* Iteration 01 */}
      <div className="csl-reveal" style={{ marginBottom: 44 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, background: "#E8F7EC", color: "#2D7D43", padding: "4px 14px", borderRadius: 100 }}>Iteration 01</span>
        </div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 14 }}>The Add Button. From Hidden to Front and Centre.</h3>
        <EcoCallout style={{ marginBottom: 20, borderLeftColor: "#9CA3AF", background: "#F9FAFB" }}>
          <strong>My hypothesis:</strong> A tab bar with a centered add button — standard iOS pattern, mirrors Instagram and Spotify — would be immediately discoverable. I was wrong. 4 of 5 testers couldn&apos;t find it within 90 seconds.
        </EcoCallout>
        <div className="csl-ba-grid">
          <div>
            <p className="csl-ba-label before">✕ Hypothesis (V1)</p>
            <TabBarPhone />
            <p className="csl-ba-desc">Centered tab bar button. Reasoning: familiar iOS pattern, users know this convention. Reality: the add action is the primary action on home. It belongs on the home screen, not in navigation chrome.</p>
          </div>
          <div>
            <p className="csl-ba-label after">✓ Updated Design (V2)</p>
            <FABPhone />
            <p className="csl-ba-desc">Floating action button pinned to the home screen. Round 2 result: all 5 testers found it immediately. The FAB signals primacy. It&apos;s not a navigation item, it&apos;s an invitation to act.</p>
          </div>
        </div>
      </div>

      {/* Iteration 02 */}
      <div className="csl-reveal rd1">
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, background: "#E8F7EC", color: "#2D7D43", padding: "4px 14px", borderRadius: 100 }}>Iteration 02</span>
        </div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 14 }}>Carbon Charts. From Technical to Human.</h3>
        <EcoCallout style={{ marginBottom: 20, borderLeftColor: "#9CA3AF", background: "#F9FAFB" }}>
          <strong>My hypothesis:</strong> Showing exact CO₂ values with category breakdowns would give users the understanding they said they wanted. Testing revealed I&apos;d solved the wrong problem. Users could read the numbers. They just felt worse after reading them.
        </EcoCallout>
        <div className="csl-ba-grid">
          <div>
            <p className="csl-ba-label before">✕ Hypothesis (V1)</p>
            <TechnicalChartCard />
            <p className="csl-ba-desc">Raw CO₂e values with technical sub-labels. Three testers described the data as &quot;meaningless&quot; or &quot;like seeing calories on a menu — just guilt.&quot; The problem wasn&apos;t the design. It was the frame.</p>
          </div>
          <div>
            <p className="csl-ba-label after">✓ Updated Design (V2)</p>
            <ClearChartCard />
            <p className="csl-ba-desc">Comparative framing (↓ 18% vs yesterday) with plain-language equivalents (≈ 8km drive). Same data, different register. After the change, users described it as &quot;motivating&quot; rather than &quot;depressing.&quot;</p>
          </div>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §13  OUTCOMES
───────────────────────────────────────────────────────────────────── */
function OutcomesSection() {
  const tasks = [
    { task: "Log a morning commute (bus, 12km)", r1: "3/5", r2: "5/5", up: true },
    { task: "Compare this week vs last week",    r1: "5/5", r2: "5/5", up: false },
    { task: "Find an actionable food tip",       r1: "4/5", r2: "5/5", up: true },
    { task: "Add a new weekly goal",             r1: "2/5", r2: "4/5", up: true },
  ];

  return (
    <CsSection id="outcomes">
      <CsSectionHeader
        label="Outcomes"
        title={<>What actually changed. <Script>What I can honestly claim.</Script></>}
      />

      <EcoCard style={{ marginBottom: 28 }} className="csl-reveal">
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 16 }}>
          Usability test results — Round 1 vs Round 2 (n=5 each)
        </p>
        <div style={{ border: "1px solid #F3F4F6", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px", background: "#F9FAFB", borderBottom: "1px solid #F3F4F6" }}>
            {["Task", "Round 1", "Round 2", "Change"].map((h) => (
              <div key={h} style={{ padding: "10px 14px" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</p>
              </div>
            ))}
          </div>
          {tasks.map((t, i) => (
            <div key={t.task} style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px", borderBottom: i < tasks.length - 1 ? "1px solid #F3F4F6" : "none", alignItems: "center" }}>
              <div style={{ padding: "13px 14px" }}>
                <p style={{ fontSize: "0.76rem", color: "#374151" }}>{t.task}</p>
              </div>
              <div style={{ padding: "13px 14px", textAlign: "center" }}>
                <p style={{ fontSize: "0.76rem", color: "#9CA3AF" }}>{t.r1}</p>
              </div>
              <div style={{ padding: "13px 14px", textAlign: "center" }}>
                <p style={{ fontSize: "0.76rem", fontWeight: 700, color: "#2D7D43" }}>{t.r2}</p>
              </div>
              <div style={{ padding: "13px 14px", textAlign: "center" }}>
                {t.up
                  ? <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#10B981", background: "#D1FAE5", padding: "3px 9px", borderRadius: 100 }}>↑ improved</span>
                  : <span style={{ fontSize: "0.68rem", color: "#9CA3AF" }}>–</span>
                }
              </div>
            </div>
          ))}
        </div>
      </EcoCard>

      <div className="csl-card-2col csl-reveal rd1" style={{ marginBottom: 28 }}>
        <EcoCard style={{ background: "#FEF2F2" }}>
          <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#EF4444", marginBottom: 12 }}>Most common word after Round 1</p>
          <p style={{ fontFamily: HAND, fontSize: "2rem", color: "#111827", marginBottom: 8 }}>&ldquo;complicated&rdquo;</p>
          <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.65 }}>The data was present. But so was everything else. No single element was broken. The whole screen competed for attention.</p>
        </EcoCard>
        <EcoCard style={{ background: "#E8F7EC" }}>
          <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 12 }}>Most common word after Round 2</p>
          <p style={{ fontFamily: HAND, fontSize: "2rem", color: "#2D7D43", marginBottom: 8 }}>&ldquo;simple&rdquo;</p>
          <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.65 }}>Same data, better frame. Not less information. Prioritised information. That shift validated the core hypothesis behind Iteration 02.</p>
        </EcoCard>
      </div>

      <EcoCallout className="csl-reveal rd2">
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>📌</span>
        <strong>Honest caveat:</strong> This is a concept project tested with 5 participants per round. These results validate the design direction. They don&apos;t prove production readiness. The test that would actually matter is 30-day retention data, which this sprint can&apos;t generate.
      </EcoCallout>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §14  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Key Learnings"
        title={<>What this project taught me. <Script>Including what I got wrong.</Script></>}
        sub="These aren't general UX principles. They're specific things I didn't know before this project, or things I thought I knew and found out I didn't."
      />

      <div className="csl-card-grid csl-reveal">
        {ecoLearnings.map((l) => (
          <EcoCard key={l.title}>
            <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 12 }}>{l.icon}</span>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>{l.title}</p>
            <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.65 }}>{l.desc}</p>
          </EcoCard>
        ))}
      </div>

      {/* Handwritten closing */}
      <div className="csl-reveal rd1" style={{ textAlign: "center", padding: "60px 0 32px", position: "relative" }}>
        <p style={{ fontFamily: HAND, fontSize: "2.4rem", color: "#2D7D43", marginBottom: 10 }}>
          thanks for reading.
        </p>
        <p style={{ fontFamily: HAND, fontSize: "1.2rem", color: "#9CA3AF" }}>
          if this project made you think, it did its job.
        </p>
        {/* Decorative underline squiggle */}
        <svg width="160" height="12" viewBox="0 0 160 12" fill="none" style={{ margin: "16px auto 0", display: "block" }}>
          <path d="M4 8 Q20 2 40 8 Q60 14 80 8 Q100 2 120 8 Q140 14 156 8" stroke="#2D7D43" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      <Link href="/projects/biblofi" className="csl-next csl-reveal rd2" style={{ marginTop: 8 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">BibloFi — Library Management System</p>
        </div>
        <span className="csl-next-arrow">→</span>
      </Link>
    </CsSection>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════════════════ */
export function EcotrackCaseStudy() {
  return (
    <CaseStudyPage
      theme="eco"
      title="EcoTrack"
      tag="iOS App · Sustainability"
      tocItems={TOC_ITEMS}
      metaRows={META_ROWS}
      hero={<EcoHero />}
    >
      <OverviewSection />
      <ProblemSection />
      <ProcessSection />
      <ResearchSection />
      <AudienceSection />
      <PersonasSection />
      <CompetitiveSection />
      <DesignSection />
      <WireframesSection />
      <OnboardingSection />
      <ScreensSection />
      <IterationsSection />
      <OutcomesSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
