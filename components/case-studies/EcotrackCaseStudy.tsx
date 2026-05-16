"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";
import {
  ecoCompetitors,
  ecoEmpathy1,
  ecoEmpathy2,
  ecoFeatures,
  ecoLearnings,
  ecoMeta,
  ecoProcess,
  ecoResearchStats,
  ecoTestHelped,
  ecoTestInsights,
} from "./ecotrackData";

/* ─────────────────────────────────────────────────────────────────────
   TOC + META
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"               },
  { id: "problem",     label: "The Problem"            },
  { id: "process",     label: "Design Process"         },
  { id: "research",    label: "User Research"          },
  { id: "competitive", label: "Competitive Analysis"   },
  { id: "empathy",     label: "Empathy Mapping"        },
  { id: "personas",    label: "User Personas"          },
  { id: "wireframes",  label: "Wireframes"             },
  { id: "design",      label: "Visual Design"          },
  { id: "testing",     label: "User Testing"           },
  { id: "constraints", label: "Constraints & Tradeoffs"},
  { id: "iterations",  label: "Iterations"             },
  { id: "outcomes",    label: "Outcomes"               },
  { id: "learnings",   label: "Learnings"              },
];

const META_ROWS = [
  { label: "Role",     value: "UX Designer"     },
  { label: "Duration", value: "4-Week Sprint"   },
  { label: "Platform", value: "iOS App"         },
  { label: "Tools",    value: "Figma"           },
  { label: "Type",     value: "Personal Project"},
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
        {/* FAB */}
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
            EcoTrack —<br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.65)" }}>Making the Planet</em>
            <br />Count.
          </h1>
          <p className="csl-hero-desc">
            People who genuinely care about climate change often feel paralysed by it — not indifferent. I spent 4 weeks researching why motivated users abandon eco apps, then designing the experience I wish already existed.
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
      {/* Problematic tab bar with buried center + */}
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", padding: "8px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: i === 0 ? 1 : 0.4 }}>
            <div style={{ width: 14, height: 14, background: i === 0 ? "#2D7D43" : "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: i === 0 ? "#2D7D43" : "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
        {/* The buried + — center tab, easily missed */}
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
        {/* FAB — unmissable, pinned to home screen */}
        <div style={{ position: "absolute", bottom: 12, right: 10, width: 36, height: 36, borderRadius: "50%", background: "#2D7D43", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(45,125,67,0.55)" }}>
          <span style={{ color: "#fff", fontSize: "1.1rem", lineHeight: 1, fontWeight: 300 }}>+</span>
        </div>
      </div>
      {/* Clean 4-tab bar, no center button */}
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
    <div style={{ background: "#fff", borderRadius: 16, padding: "16px", border: "1px solid #E5E7EB", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
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
    </div>
  );
}

function ClearChartCard() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "16px", border: "1px solid #E5E7EB", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
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
        <p style={{ fontSize: "0.54rem", color: "#2D7D43", fontWeight: 700 }}>Good day — below your weekly average</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   COLOR SWATCHES
───────────────────────────────────────────────────────────────────── */
function EcoColorSwatches() {
  const swatches = [
    { hex: "#2D7D43", name: "Primary",        role: "Accent · CTA · Icons" },
    { hex: "#48A362", name: "Secondary",      role: "Charts · Progress bars" },
    { hex: "#E8F7EC", name: "Surface",        role: "Card tints · Tags" },
    { hex: "#0A1F0F", name: "Dark BG",        role: "Hero · Deep surfaces" },
    { hex: "#111827", name: "Text Primary",   role: "Headings · Emphasis" },
    { hex: "#6B7280", name: "Text Secondary", role: "Body copy · Captions" },
  ];
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E5E7EB", marginBottom: 24 }}>
      <div style={{ display: "flex" }}>
        {swatches.map((s) => (
          <div key={s.hex} style={{ flex: 1, height: 80, background: s.hex }} />
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", background: "#fff" }}>
        {swatches.map((s, i) => (
          <div key={s.hex} style={{ padding: "10px 8px", borderRight: i < swatches.length - 1 ? "1px solid #F3F4F6" : "none" }}>
            <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "#111827", marginBottom: 2 }}>{s.name}</p>
            <p style={{ fontSize: "0.52rem", color: "#9CA3AF", fontFamily: "ui-monospace, monospace", marginBottom: 3 }}>{s.hex}</p>
            <p style={{ fontSize: "0.52rem", color: "#6B7280" }}>{s.role}</p>
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
  return (
    <CsSection id="overview">
      <CsSectionHeader
        label="Project Overview"
        title={<>End-to-end solo — research to <em style={{ fontStyle: "italic" }}>tested prototype.</em></>}
        sub="I owned everything on this project: screener survey, user interviews, information architecture, wireframes, visual design, and two rounds of usability testing. This isn't a feature spec — it's the account of what I learned, what I got wrong, and what I changed."
      />

      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <CsImg label="App overview — final hi-fi screens across all 5 views" height={400} icon="📱" sub="Dashboard · Log · Impact · Learn · Progress" />
      </div>

      <div className="csl-card-grid csl-reveal rd1">
        {ecoFeatures.map((f) => (
          <div key={f.title} style={{ background: "#fff", borderRadius: 16, padding: "22px 18px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{f.title}</p>
            <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
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
      <CsSectionHeader label="The Problem" title="Why motivated users still quit eco apps." />

      <p style={{ fontSize: "0.84rem", color: "#374151", lineHeight: 1.8, marginBottom: 24 }} className="csl-reveal">
        In every interview I ran, users described the same moment: they opened an existing eco app, saw a number, felt bad, and eventually stopped opening it. The apps weren&apos;t missing features. They were missing a reason to come back tomorrow.
      </p>

      <div className="csl-callout csl-reveal rd1" style={{ marginBottom: 28, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        Motivated users abandon tracking not because they don&apos;t care — but because existing apps optimise for <strong>data completeness over daily usability</strong>, making the act of tracking feel worse than not tracking at all.
      </div>

      <div className="csl-reveal rd2" style={{ marginBottom: 28 }}>
        <CsImg label="Problem space — user pain point mapping from interviews" height={300} icon="🌡️" sub="Key friction moments · Abandonment patterns" />
      </div>

      {/* Constraints block */}
      <p className="csl-section-eyebrow csl-reveal rd3">Project Constraints</p>
      <div className="csl-card-grid csl-reveal rd3">
        {[
          { icon: "📱", label: "iOS concept only", desc: "No backend, no live data sync. All carbon estimates are averaged — deliberately approximate over precisely complex." },
          { icon: "✂️", label: "Scope: daily habits only", desc: "Carbon offset purchasing, social features, and leaderboards were explicitly cut. The core loop had to work first." },
          { icon: "⏱️", label: "4-week sprint", desc: "Self-imposed deadline forced real prioritisation. Not every edge case could be designed — so I chose which ones mattered most." },
          { icon: "🔬", label: "No longitudinal data", desc: "All insights come from 45-minute sessions, not observed behaviour over time. A real limitation I address honestly in Outcomes." },
        ].map((c) => (
          <div key={c.label} style={{ background: "#fff", borderRadius: 16, padding: "20px 18px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: "1.3rem", display: "block", marginBottom: 10 }}>{c.icon}</span>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{c.label}</p>
            <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{c.desc}</p>
          </div>
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
        title={<>Five phases — <em style={{ fontStyle: "italic" }}>only one went as planned.</em></>}
        sub="I followed a double-diamond structure, but the Define phase upended my assumptions entirely. What I thought the problem was turned out to be wrong."
      />

      <div className="csl-process-grid csl-reveal">
        {ecoProcess.map((step) => (
          <div key={step.name} className="csl-process-step" style={step.active ? { borderTopColor: "#2D7D43" } : {}}>
            <div style={{ fontSize: "1.2rem", marginBottom: 8 }}>{step.icon}</div>
            <div className="csl-process-num">{step.phase}</div>
            <div className="csl-process-title">{step.name}</div>
            <p className="csl-process-text">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="csl-img-2up csl-reveal rd1" style={{ marginTop: 28 }}>
        <CsImg label="Design thinking process — phase overview" height={240} icon="🗺️" sub="Double-diamond adapted for solo sprint" />
        <CsImg label="4-week sprint timeline — week-by-week breakdown" height={240} icon="📅" sub="Research · Define · Design · Test · Iterate" />
      </div>
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
        title={<>What I expected to find — <em style={{ fontStyle: "italic" }}>and what I actually found.</em></>}
        sub="I recruited people who described themselves as 'environmentally conscious but inconsistent' — not existing eco-app users. That distinction mattered."
      />

      {/* Methodology note */}
      <div className="csl-callout csl-reveal" style={{ marginBottom: 28, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>🔬</span>
        <strong>Methodology:</strong> 5 semi-structured interviews (30 min each via Zoom) + a 12-person screener survey. Participants were screened for environmental intent, not eco-app experience. I wanted to understand motivation and abandonment — not feature preferences.
      </div>

      <div className="csl-reveal rd1" style={{ marginBottom: 28 }}>
        <CsImg label="Research synthesis — interview insights mapped by theme" height={300} icon="🔍" sub="Affinity map · 30+ raw findings grouped into 6 themes" />
      </div>

      {/* Animated stats */}
      <div
        ref={rootRef as React.RefObject<HTMLDivElement>}
        className="csl-metrics csl-reveal rd2"
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

      {/* What surprised me */}
      <div style={{ marginTop: 32 }} className="csl-reveal rd3">
        <p className="csl-section-eyebrow">What Surprised Me</p>
        <p style={{ fontSize: "0.84rem", color: "#374151", lineHeight: 1.8, marginBottom: 20 }}>
          I went in expecting to find that users were frustrated by confusing interfaces. What I actually found was an emotional pattern: users weren&apos;t confused — they were <em>discouraged</em>. Three of five interviewees had uninstalled an eco app within 10 days of downloading it. None of them cited missing features. They cited feeling judged by their own data.
        </p>

        {/* Pull quote */}
        <div style={{ borderLeft: "3px solid #2D7D43", padding: "16px 24px", background: "#E8F7EC", borderRadius: "0 14px 14px 0", marginBottom: 24 }}>
          <p style={{ fontSize: "1.05rem", fontStyle: "italic", color: "#0D2312", lineHeight: 1.7, marginBottom: 8 }}>
            &ldquo;I opened Joro once, saw my score, felt terrible, and deleted it. I wasn&apos;t looking for a report card.&rdquo;
          </p>
          <p style={{ fontSize: "0.68rem", color: "#3B6B45", fontWeight: 600 }}>— Interview participant, 26, product manager</p>
        </div>

        {/* Research → Decision chain */}
        <p className="csl-section-eyebrow">Research → Design Decision</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { finding: "Users felt judged, not helped by their data", decision: "Every metric shows a positive comparison (today vs yesterday), never a score against an abstract goal" },
            { finding: "3/5 had quit an app within the first 10 days", decision: "The first-time logging flow became the primary design problem — not the dashboard" },
            { finding: "No one wanted to manually log food in detail", decision: "Quick-select category cards replace free-form input for the most common logging scenarios" },
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "center" }}>
              <div style={{ background: "#FEF2F2", borderRadius: 12, padding: "12px 14px" }}>
                <p style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.6 }}>🔍 <strong style={{ color: "#111827" }}>Finding:</strong> {row.finding}</p>
              </div>
              <span style={{ fontSize: "1rem", color: "#9CA3AF" }}>→</span>
              <div style={{ background: "#E8F7EC", borderRadius: 12, padding: "12px 14px" }}>
                <p style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.6 }}>✓ <strong style={{ color: "#2D7D43" }}>Decision:</strong> {row.decision}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  COMPETITIVE ANALYSIS
───────────────────────────────────────────────────────────────────── */
function CompetitiveSection() {
  return (
    <CsSection id="competitive">
      <CsSectionHeader
        label="Competitor Analysis"
        title={<>What each app taught me — <em style={{ fontStyle: "italic" }}>and what decision it changed.</em></>}
        sub="I didn't audit these apps to list their features. I used them like a user would, for 2–3 days each, and paid attention to the moment I stopped wanting to open them."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="csl-reveal">
        {ecoCompetitors.map((comp) => (
          <div key={comp.name} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.4fr", borderBottom: "1px solid #F3F4F6" }}>
              <div style={{ padding: "14px 16px", borderRight: "1px solid #F3F4F6" }}>
                <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 10 }}>{comp.name}</p>
                <p style={{ fontSize: "0.64rem", fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Pros</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.pros.map((p) => (
                    <li key={p} style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6, marginBottom: 3, display: "flex", gap: 5 }}>
                      <span style={{ color: "#10B981", flexShrink: 0 }}>+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "14px 16px", borderRight: "1px solid #F3F4F6" }}>
                <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "transparent", marginBottom: 10, userSelect: "none" }}>·</p>
                <p style={{ fontSize: "0.64rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Cons</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.cons.map((c) => (
                    <li key={c} style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6, marginBottom: 3, display: "flex", gap: 5 }}>
                      <span style={{ color: "#EF4444", flexShrink: 0 }}>–</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "14px 16px", background: "#F9FAFB" }}>
                <p style={{ fontSize: "0.64rem", fontWeight: 700, color: "#2D7D43", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>What it changed for me</p>
                <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.65 }}>{comp.decision}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd1" style={{ borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>💡</span>
        The pattern across all four: <strong>no single app was bad</strong>. Each was good at one thing and weak on everything adjacent to it. EcoTrack&apos;s design brief became: make the one thing (daily logging) so frictionless that users don&apos;t need anything else to build a habit.
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  EMPATHY MAPPING
───────────────────────────────────────────────────────────────────── */
function EmpathySection() {
  return (
    <CsSection id="empathy">
      <CsSectionHeader
        label="User Empathy Mapping"
        title={<>Stepping into the shoes <em style={{ fontStyle: "italic" }}>of our users.</em></>}
        sub="Empathy maps helped me move from 'users find eco apps complex' to understanding the specific emotional texture of that complexity — which shaped every tone and framing decision in the visual design."
      />

      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <CsImg label="Empathy map canvas — Think · See · Say · Feel · Pain · Gain" height={280} icon="🧠" sub="Full empathy analysis from interviews" />
      </div>

      <div className="csl-card-2col csl-reveal rd1">
        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ background: "#E8F7EC", padding: "18px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: "1.8rem" }}>👩</div>
            <div>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0D2312" }}>Priya, 22</p>
              <p style={{ fontSize: "0.7rem", color: "#3B6B45" }}>College student · Eco-curious beginner</p>
            </div>
          </div>
          <div style={{ padding: "16px 20px" }}>
            {ecoEmpathy1.map((row) => (
              <div key={row.cat} style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: 10, marginBottom: 10 }}>
                <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 3 }}>{row.cat}</p>
                <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.55 }}>{row.insight}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ background: "#D0EAD4", padding: "18px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: "1.8rem" }}>👨</div>
            <div>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0D2312" }}>Arjun, 28</p>
              <p style={{ fontSize: "0.7rem", color: "#3B6B45" }}>Working professional · Active eco-enthusiast</p>
            </div>
          </div>
          <div style={{ padding: "16px 20px" }}>
            {ecoEmpathy2.map((row) => (
              <div key={row.cat} style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: 10, marginBottom: 10 }}>
                <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 3 }}>{row.cat}</p>
                <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.55 }}>{row.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  USER PERSONAS
───────────────────────────────────────────────────────────────────── */
function PersonasSection() {
  return (
    <CsSection id="personas">
      <CsSectionHeader
        label="User Personas"
        title={<>Fictional representations, <em style={{ fontStyle: "italic" }}>built from real research.</em></>}
        sub="These personas guided every feature decision from information architecture to how I framed carbon data on screen. Priya needed simplicity; Arjun needed proof."
      />

      <div className="csl-persona-grid csl-reveal">
        <div className="csl-persona-card">
          <div className="csl-persona-img" style={{ background: "#E8F7EC" }}>
            <span className="csl-persona-img-icon">👩‍🎓</span>
            <span className="csl-persona-img-label">Persona photo placeholder</span>
          </div>
          <div className="csl-persona-body">
            <p className="csl-persona-name">Priya Sharma</p>
            <p className="csl-persona-tag">22 · College Student · Mumbai</p>
            <p className="csl-persona-detail">
              Eco-curious beginner who cares about the planet but doesn&apos;t know where to start. Needs a friendly, visual app that guides her through sustainable choices without overwhelming her with data she doesn&apos;t yet have the vocabulary to interpret.
            </p>
          </div>
        </div>
        <div className="csl-persona-card">
          <div className="csl-persona-img" style={{ background: "#D0EAD4" }}>
            <span className="csl-persona-img-icon">👨‍💼</span>
            <span className="csl-persona-img-label">Persona photo placeholder</span>
          </div>
          <div className="csl-persona-body">
            <p className="csl-persona-name">Arjun Mehta</p>
            <p className="csl-persona-tag">28 · Product Manager · Bangalore</p>
            <p className="csl-persona-detail">
              Active eco-enthusiast who has built green habits but needs data-driven proof that they matter. Looking for a sleek, efficient app that gives meaningful feedback — without the information overload that caused him to quit his last three attempts.
            </p>
          </div>
        </div>
      </div>

      <div className="csl-reveal rd1" style={{ marginTop: 28 }}>
        <CsImg label="Full persona documents — detailed sheets from Figma" height={240} icon="👤" sub="Goals · Pain points · Motivations · Behaviours" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  WIREFRAMES
───────────────────────────────────────────────────────────────────── */
function WireframesSection() {
  return (
    <CsSection id="wireframes">
      <CsSectionHeader
        label="Mid-Fidelity Wireframes"
        title={<>IA first — <em style={{ fontStyle: "italic" }}>screens second.</em></>}
        sub="Before opening Figma, I listed every feature I'd heard users mention and every capability the research suggested. I ended up with 23 potential screens."
      />

      {/* IA rationale */}
      <div className="csl-callout csl-reveal" style={{ marginBottom: 28, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>✂️</span>
        <strong>How I got from 23 screens to 5:</strong> I applied one filter — can a first-time user complete this on day one, without guidance, without a tutorial? Social sharing, streak mechanics, carbon offset purchasing, and detailed lifecycle analysis all failed this test. What remained: home dashboard, activity log, impact breakdown, learning hub, progress history.
      </div>

      <div style={{ marginBottom: 20 }} className="csl-reveal rd1">
        <p style={{ fontSize: "0.84rem", color: "#374151", lineHeight: 1.8 }}>
          I chose a standard bottom tab bar — not because it&apos;s exciting, but because it&apos;s familiar. Every tester I interviewed uses 2–3 apps with tab-based navigation daily (Instagram, Health, Duolingo). I didn&apos;t want the navigation model to require learning. The cognitive load budget had to go toward understanding carbon data, not understanding the app.
        </p>
      </div>

      <div className="csl-reveal rd2" style={{ marginBottom: 28 }}>
        <CsImg label="Mid-fidelity wireframes — 6 key screens" height={380} icon="📐" sub="Wireframe flow · Layout explorations · IA validation" />
      </div>

      <p className="csl-section-eyebrow csl-reveal rd3">
        High-Fidelity Wireframes
      </p>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: 16, letterSpacing: "-0.01em" }} className="csl-reveal rd3">
        Bringing the app to life with colour, depth, and detail.
      </h3>

      <div className="csl-img-3up csl-reveal">
        <CsImg label="Dashboard Screen" aspect="9/16" icon="🏠" sub="Home · Daily tracker · FAB" />
        <CsImg label="Carbon Details Screen" aspect="9/16" icon="📊" sub="Comparative framing · Plain language" />
        <CsImg label="Learning Hub Screen" aspect="9/16" icon="💡" sub="Integrated tips · Context-aware" />
      </div>
      <div className="csl-img-3up csl-reveal rd1" style={{ marginTop: 16 }}>
        <CsImg label="Add Activity Screen" aspect="9/16" icon="➕" sub="Quick-select cards · Minimal input" />
        <CsImg label="Progress Screen" aspect="9/16" icon="📈" sub="Weekly · Monthly comparisons" />
        <CsImg label="Profile Screen" aspect="9/16" icon="👤" sub="Goals · History" />
      </div>

      <div className="csl-reveal" style={{ marginTop: 24 }}>
        <CsImg label="Full app flow — all screens connected" height={260} icon="🔗" sub="Prototype connections · Complete user flow" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  VISUAL DESIGN
───────────────────────────────────────────────────────────────────── */
function DesignSection() {
  return (
    <CsSection id="design">
      <CsSectionHeader
        label="Typography & Visual Design"
        title={<>Every decision had an alternative <em style={{ fontStyle: "italic" }}>I chose not to use.</em></>}
        sub="Visual design choices are easier to evaluate when you know what was rejected and why. Here's the reasoning behind the two most visible decisions: typeface and colour."
      />

      {/* Type decision */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 24 }}>
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 16 }}>Typeface decision</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
          {[
            { name: "DM Sans", verdict: "Rejected", reason: "Too friendly — felt like a consumer wellness app, not a credible data tool.", chosen: false },
            { name: "Nunito", verdict: "Rejected", reason: "Rounded terminals looked playful at small sizes — wrong register for environmental data.", chosen: false },
            { name: "Inter", verdict: "Chosen", reason: "Trustworthy, data-appropriate, excellent on screen at every weight. Not exciting — intentionally.", chosen: true },
          ].map((t) => (
            <div key={t.name} style={{ padding: "14px 16px", borderRadius: 12, background: t.chosen ? "#E8F7EC" : "#F9FAFB", border: `1px solid ${t.chosen ? "#2D7D43" : "#E5E7EB"}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <p style={{ fontSize: "0.88rem", fontWeight: 700, color: t.chosen ? "#2D7D43" : "#6B7280" }}>{t.name}</p>
                <span style={{ fontSize: "0.56rem", fontWeight: 700, padding: "2px 8px", borderRadius: 100, background: t.chosen ? "#2D7D43" : "#E5E7EB", color: t.chosen ? "#fff" : "#9CA3AF" }}>{t.verdict}</span>
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
              <p style={{ fontSize: "0.62rem", color: "#9CA3AF", fontFamily: "ui-monospace, monospace" }}>{t.meta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Colour swatches */}
      <div className="csl-reveal rd1">
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 12 }}>Colour decision</p>
        <p style={{ fontSize: "0.84rem", color: "#374151", lineHeight: 1.75, marginBottom: 16 }}>
          I tested three green values. A vibrant lime-green felt too optimistic — celebrating before the user had done anything. A deep forest green felt heavy and preachy. <strong style={{ color: "#111827" }}>#2D7D43 sits between them: calm, credible, and grown-up</strong> — the register of a tool that takes the problem seriously.
        </p>
        <EcoColorSwatches />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  USER TESTING
───────────────────────────────────────────────────────────────────── */
function TestingSection() {
  return (
    <CsSection id="testing">
      <CsSectionHeader
        label="User Testing — Round 1"
        title={<>Four tasks, five people — <em style={{ fontStyle: "italic" }}>two things broke immediately.</em></>}
      />

      <div className="csl-callout csl-reveal" style={{ marginBottom: 28, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>🎯</span>
        <strong>Tasks given:</strong> (1) Log this morning&apos;s bus commute, 12km. (2) Find out how your week compared to last week. (3) Learn something actionable about reducing food emissions. (4) Add a new weekly goal.
      </div>

      <div className="csl-card-2col csl-reveal rd1">
        <div style={{ background: "#fff", borderRadius: 16, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
          <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 14 }}>What I Observed</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {ecoTestInsights.map((insight) => (
              <li key={insight} style={{ display: "flex", gap: 8, marginBottom: 12, fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>
                <span style={{ color: "#EF4444", flexShrink: 0, marginTop: 1 }}>→</span>{insight}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: "#fff", borderRadius: 16, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
          <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: 6 }}>Task completion — Round 1</p>
          <div style={{ marginBottom: 16 }}>
            {[
              { task: "Log a commute",       score: "3/5", pct: "60%" },
              { task: "Compare weeks",        score: "5/5", pct: "100%" },
              { task: "Find a tip",           score: "4/5", pct: "80%" },
              { task: "Add a weekly goal",    score: "2/5", pct: "40%" },
            ].map((row) => (
              <div key={row.task} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <p style={{ fontSize: "0.72rem", color: "#374151" }}>{row.task}</p>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: parseFloat(row.pct) < 70 ? "#EF4444" : "#2D7D43" }}>{row.score}</p>
                </div>
                <div style={{ height: 5, background: "#F3F4F6", borderRadius: 3 }}>
                  <div style={{ width: row.pct, height: "100%", background: parseFloat(row.pct) < 70 ? "#FCA5A5" : "#48A362", borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.6 }}>Tasks 1 and 4 had the highest failure rates. Both were caused by navigation decisions, not content — which meant the fix was structural, not cosmetic.</p>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §11  CONSTRAINTS & TRADEOFFS
───────────────────────────────────────────────────────────────────── */
function ConstraintsSection() {
  const tradeoffs = [
    {
      chose: "Approximate CO₂ estimates",
      gaveUp: "Precise lifecycle calculations",
      why: "Real carbon math is genuinely complex — food emissions alone vary by supply chain, season, and cooking method. I used verified industry averages because a user who tracks an approximate number daily will do more good than one who abandoned tracking because the input form asked too much.",
    },
    {
      chose: "Frictionless first log",
      gaveUp: "Feature completeness (offsets, social, streaks)",
      why: "Every person I interviewed had quit a previous eco app. None of them quit because the app was missing features. They quit because daily logging felt like homework. V1 had one job: make opening the app and recording something feel effortless.",
    },
    {
      chose: "Directional insights from 5 interviews",
      gaveUp: "Longitudinal behavioural data",
      why: "A 4-week sprint meant I couldn't observe actual behaviour change over time. All insights come from self-reported patterns and 45-minute sessions. This is a real limitation. Taking this to production would require 30-day diary studies, which this project can't generate.",
    },
  ];

  return (
    <CsSection id="constraints">
      <CsSectionHeader
        label="Constraints & Tradeoffs"
        title={<>Three decisions I made — <em style={{ fontStyle: "italic" }}>and what I gave up to make them.</em></>}
        sub="Design without tradeoffs is either a trivial problem or an incomplete answer. These are the three moments where I made an explicit choice about what to prioritise."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="csl-reveal">
        {tradeoffs.map((t, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ padding: "14px 18px", background: "#E8F7EC", borderRight: "1px solid #D1FAE5" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 6 }}>✓ Chose</p>
                <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0D2312" }}>{t.chose}</p>
              </div>
              <div style={{ padding: "14px 18px", background: "#FEF2F2" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#EF4444", marginBottom: 6 }}>✕ Gave up</p>
                <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#7F1D1D" }}>{t.gaveUp}</p>
              </div>
            </div>
            <div style={{ padding: "14px 18px", borderTop: "1px solid #F3F4F6" }}>
              <p style={{ fontSize: "0.78rem", color: "#374151", lineHeight: 1.7 }}>{t.why}</p>
            </div>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §12  ITERATIONS
───────────────────────────────────────────────────────────────────── */
function IterationsSection() {
  return (
    <CsSection id="iterations">
      <CsSectionHeader
        label="Before → After Iterations"
        title={<>Two hypotheses that failed — <em style={{ fontStyle: "italic" }}>and what replaced them.</em></>}
        sub="I documented both iterations as hypothesis-test-update cycles, not as corrections to obvious mistakes. The original design decisions had reasoning behind them — and that reasoning was wrong."
      />

      {/* Iteration 01 */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, background: "#E8F7EC", color: "#2D7D43", padding: "4px 12px", borderRadius: 100 }}>Iteration 01</span>
        </div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 12 }}>The Add Button — From Hidden to Front and Centre</h3>

        <div className="csl-callout" style={{ borderLeftColor: "#9CA3AF", background: "#F9FAFB", marginBottom: 20 }}>
          <strong>My hypothesis:</strong> A tab bar with a centered add button — standard iOS pattern, mirrors Instagram and Spotify — would be immediately discoverable. I was wrong. 4 of 5 testers couldn&apos;t find it within 90 seconds.
        </div>

        <div className="csl-ba-grid">
          <div>
            <p className="csl-ba-label before">✕ Hypothesis (V1)</p>
            <TabBarPhone />
            <p className="csl-ba-desc">Centered tab bar button. Reasoning: familiar iOS pattern, users know this convention. Reality: the add action is the primary action on home — it belongs on the home screen, not in navigation chrome.</p>
          </div>
          <div>
            <p className="csl-ba-label after">✓ Updated Design (V2)</p>
            <FABPhone />
            <p className="csl-ba-desc">Floating action button pinned to the home screen. Round 2 result: all 5 testers found it immediately. The FAB signals primacy — it&apos;s not a navigation item, it&apos;s an invitation to act.</p>
          </div>
        </div>
      </div>

      {/* Iteration 02 */}
      <div className="csl-reveal rd1">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, background: "#E8F7EC", color: "#2D7D43", padding: "4px 12px", borderRadius: 100 }}>Iteration 02</span>
        </div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 12 }}>Carbon Charts — From Technical to Human</h3>

        <div className="csl-callout" style={{ borderLeftColor: "#9CA3AF", background: "#F9FAFB", marginBottom: 20 }}>
          <strong>My hypothesis:</strong> Showing exact CO₂ values with category breakdowns would give users the understanding they said they wanted. Testing revealed I&apos;d solved the wrong problem. Users could read the numbers — they just felt worse after reading them.
        </div>

        <div className="csl-ba-grid">
          <div>
            <p className="csl-ba-label before">✕ Hypothesis (V1)</p>
            <TechnicalChartCard />
            <p className="csl-ba-desc">Raw CO₂e values with technical sub-labels. Three testers described the data as &quot;meaningless&quot; or &quot;like seeing calories on a menu — just guilt.&quot; The problem wasn&apos;t the design — it was the frame.</p>
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
        title={<>What actually changed — <em style={{ fontStyle: "italic" }}>and what I can honestly claim.</em></>}
      />

      {/* Task completion table */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 28 }}>
        <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 16 }}>
          Usability test results — Round 1 vs Round 2 (n=5 each)
        </p>
        <div style={{ border: "1px solid #F3F4F6", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px", background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
            {["Task", "Round 1", "Round 2", "Change"].map((h) => (
              <div key={h} style={{ padding: "8px 12px" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</p>
              </div>
            ))}
          </div>
          {tasks.map((t, i) => (
            <div key={t.task} style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px", borderBottom: i < tasks.length - 1 ? "1px solid #F3F4F6" : "none", alignItems: "center" }}>
              <div style={{ padding: "11px 12px" }}>
                <p style={{ fontSize: "0.76rem", color: "#374151" }}>{t.task}</p>
              </div>
              <div style={{ padding: "11px 12px", textAlign: "center" }}>
                <p style={{ fontSize: "0.76rem", color: "#6B7280" }}>{t.r1}</p>
              </div>
              <div style={{ padding: "11px 12px", textAlign: "center" }}>
                <p style={{ fontSize: "0.76rem", fontWeight: 700, color: "#2D7D43" }}>{t.r2}</p>
              </div>
              <div style={{ padding: "11px 12px", textAlign: "center" }}>
                {t.up
                  ? <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#10B981", background: "#D1FAE5", padding: "2px 8px", borderRadius: 100 }}>↑ improved</span>
                  : <span style={{ fontSize: "0.68rem", color: "#9CA3AF" }}>—</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Qualitative shift */}
      <div className="csl-card-2col csl-reveal rd1" style={{ marginBottom: 28 }}>
        <div style={{ background: "#FEF2F2", borderRadius: 16, padding: "22px 20px" }}>
          <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#EF4444", marginBottom: 12 }}>Most common word — Round 1</p>
          <p style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", marginBottom: 8 }}>&ldquo;complicated&rdquo;</p>
          <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>The data was present — but so was everything else. No single element was broken; the whole screen competed for attention.</p>
        </div>
        <div style={{ background: "#E8F7EC", borderRadius: 16, padding: "22px 20px" }}>
          <p style={{ fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 12 }}>Most common word — Round 2</p>
          <p style={{ fontSize: "2rem", fontWeight: 800, color: "#2D7D43", letterSpacing: "-0.03em", marginBottom: 8 }}>&ldquo;simple&rdquo;</p>
          <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.6 }}>Same data, better frame. Not less information — prioritised information. That shift validated the core hypothesis behind Iteration 02.</p>
        </div>
      </div>

      <div className="csl-callout csl-reveal rd2" style={{ borderLeftColor: "#9CA3AF", background: "#F9FAFB" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>📌</span>
        <strong>Honest caveat:</strong> This is a concept project tested with 5 participants per round. These results validate the design direction — they don&apos;t prove production readiness. The test that would actually matter is 30-day retention data, which this sprint can&apos;t generate. I&apos;d want to see whether the behavioural shift I observed in session translates to real daily habit formation before making any stronger claim.
      </div>
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
        title={<>What this project taught me — <em style={{ fontStyle: "italic" }}>including what I got wrong.</em></>}
        sub="These aren't general UX principles. They're specific things I didn't know before this project, or things I thought I knew and found out I didn't."
      />

      <div className="csl-card-grid csl-reveal">
        {ecoLearnings.map((l) => (
          <div key={l.title} style={{ background: "#fff", borderRadius: 16, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 12 }}>{l.icon}</span>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>{l.title}</p>
            <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{l.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/projects/biblofi" className="csl-next csl-reveal" style={{ marginTop: 56 }}>
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
      <CompetitiveSection />
      <EmpathySection />
      <PersonasSection />
      <WireframesSection />
      <DesignSection />
      <TestingSection />
      <ConstraintsSection />
      <IterationsSection />
      <OutcomesSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
