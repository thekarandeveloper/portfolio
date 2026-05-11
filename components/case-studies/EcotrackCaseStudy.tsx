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
  { id: "overview",    label: "Overview"           },
  { id: "problem",     label: "The Problem"        },
  { id: "process",     label: "Design Process"     },
  { id: "research",    label: "User Research"      },
  { id: "competitive", label: "Competitive Analysis"},
  { id: "empathy",     label: "Empathy Mapping"    },
  { id: "personas",    label: "User Personas"      },
  { id: "wireframes",  label: "Wireframes"         },
  { id: "design",      label: "Visual Design"      },
  { id: "testing",     label: "User Testing"       },
  { id: "iterations",  label: "Iterations"         },
  { id: "learnings",   label: "Learnings"          },
];

const META_ROWS = [
  { label: "Role",     value: "UX Designer"         },
  { label: "Duration", value: "4-Week Sprint"        },
  { label: "Platform", value: "iOS App"              },
  { label: "Tools",    value: "Figma"                },
  { label: "Type",     value: "Personal Project"     },
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
   HERO
───────────────────────────────────────────────────────────────────── */
function EcoHero() {
  return (
    <div className="csl-hero">
      <div className="csl-hero-grid" />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        {/* Left */}
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">🌱 Personal Project · iOS App</div>
          <h1 className="csl-hero-title">
            EcoTrack —<br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.65)" }}>Making the Planet</em>
            <br />Count.
          </h1>
          <p className="csl-hero-desc">
            A clean, intuitive app that helps users track their carbon footprint, understand their daily impact, and grow sustainable habits with ease.
          </p>
          <div className="csl-hero-chips">
            {ecoMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        </div>
        {/* Right — phone mockup */}
        <div className="csl-hero-right">
          <EcoPhoneMockup />
        </div>
      </div>

      {/* Stats strip */}
      <div className="csl-hero-stats">
        {[
          { val: "5",   label: "Users interviewed"    },
          { val: "3",   label: "App competitors audited"},
          { val: "2",   label: "Iterations completed" },
          { val: "4wk", label: "Sprint duration"      },
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

function EcoCO2Ring() {
  return (
    <div style={{ position: "relative", width: 60, height: 60, margin: "0 auto 8px" }}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <defs>
          <clipPath id="eco-liquid-clip">
            <circle cx="30" cy="30" r="26" />
          </clipPath>
        </defs>

        {/* bg */}
        <circle cx="30" cy="30" r="26" fill="#E8F7EC" />

        {/* liquid — clip stays fixed, inner groups animate */}
        <g clipPath="url(#eco-liquid-clip)">
          <g style={{ animation: "eco-liquid-rise 1.6s cubic-bezier(0.4,0,0.2,1) 0.4s both" }}>
            <g style={{ animation: "eco-wave-scroll 2s linear infinite" }}>
              {/* main fill wave */}
              <path
                d="M-60,25 C-45,19 -15,31 0,25 C15,19 45,31 60,25 C75,19 105,31 120,25 L120,60 L-60,60 Z"
                fill="#2D7D43"
              />
              {/* second wave for depth */}
              <path
                d="M-60,29 C-45,23 -15,35 0,29 C15,23 45,35 60,29 C75,23 105,35 120,29 L120,60 L-60,60 Z"
                fill="#48A362"
                opacity="0.35"
              />
            </g>
          </g>
        </g>

        {/* border */}
        <circle cx="30" cy="30" r="26" fill="none" stroke="#2D7D43" strokeWidth="2" />
      </svg>

      {/* text over liquid */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", lineHeight: 1, textShadow: "0 1px 3px rgba(0,30,15,0.7)" }}>2.4</p>
        <p style={{ fontSize: "0.52rem", color: "rgba(255,255,255,0.9)", textShadow: "0 1px 2px rgba(0,30,15,0.5)" }}>kg CO₂</p>
      </div>
    </div>
  );
}

function EcoPhoneMockup() {
  return (
    <div style={{
      width: "min(220px, 100%)", background: "#0A1F0F",
      borderRadius: 36, overflow: "hidden",
      border: "1.5px solid rgba(45,125,67,0.4)",
      boxShadow: "0 24px 60px rgba(45,125,67,0.25)",
    }}>
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
        title={<>Helping people understand <em style={{ fontStyle: "italic" }}>their daily impact on Earth.</em></>}
        sub="EcoTrack empowers users to measure their carbon emissions from daily activities and provides actionable insights to help them live more sustainably."
      />

      {/* App overview image */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <CsImg label="App overview — final hi-fi screens" height={400} icon="📱" sub="Place app overview screenshot here" />
      </div>

      {/* Feature cards */}
      <div className="csl-card-grid csl-reveal rd1">
        {ecoFeatures.map((f) => (
          <div key={f.title} style={{ background: "#fff", borderRadius: 18, padding: "22px 18px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{f.title}</p>
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
      <CsSectionHeader label="The Problem" title="Why sustainable living feels out of reach." />

      <div className="csl-callout csl-reveal" style={{ fontSize: "1rem", marginBottom: 28 }}>
        People want to reduce their environmental impact but struggle to understand how daily actions affect their carbon footprint —{" "}
        <strong>most tools are too complex or unengaging, making sustainable living feel out of reach.</strong>
      </div>

      {/* Problem visualization */}
      <div className="csl-reveal rd1" style={{ marginBottom: 28 }}>
        <CsImg label="Problem space visualization — user pain points" height={300} icon="🌡️" sub="Research findings · User pain point mapping" />
      </div>

      {/* Potential solution */}
      <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#2D7D43", marginBottom: 12 }} className="csl-reveal rd2">
        Potential Solution
      </p>
      <div className="csl-callout csl-reveal rd2" style={{ borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>💡</span>
        A clean, intuitive app that helps users track their carbon footprint, understand their daily impact, and grow sustainable habits with ease.
      </div>

      {/* Solution overview image */}
      <div className="csl-reveal rd3" style={{ marginTop: 24 }}>
        <CsImg label="Solution overview — key interactions" height={300} icon="✅" sub="App concept · Core feature screens" />
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
        title={<>Five phases, one goal — <em style={{ fontStyle: "italic" }}>making sustainability approachable.</em></>}
      />

      <div className="csl-process-grid csl-reveal">
        {ecoProcess.map((step, i) => (
          <div key={step.name} className="csl-process-step" style={step.active ? { borderTopColor: "#2D7D43" } : {}}>
            <div style={{ fontSize: "1.2rem", marginBottom: 8 }}>{step.icon}</div>
            <div className="csl-process-num">{step.phase}</div>
            <div className="csl-process-title">{step.name}</div>
            <p className="csl-process-text">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="csl-img-2up csl-reveal rd1" style={{ marginTop: 28 }}>
        <CsImg label="Design thinking process diagram" height={240} icon="🗺️" sub="Five phases overview" />
        <CsImg label="Project timeline — 4-week sprint" height={240} icon="📅" sub="Week-by-week breakdown" />
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
        title={<>Understanding what users <em style={{ fontStyle: "italic" }}>actually need from an eco app.</em></>}
      />

      <div className="csl-callout csl-reveal" style={{ marginBottom: 28, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>🎯</span>
        To understand user awareness, challenges, and expectations around tracking their carbon footprint in daily life.
      </div>

      {/* Research findings image */}
      <div className="csl-reveal rd1" style={{ marginBottom: 28 }}>
        <CsImg label="User research findings — survey results & interview insights" height={300} icon="🔍" sub="Quantitative survey · 5 qualitative interviews" />
      </div>

      {/* Animated stats */}
      <div
        ref={rootRef as React.RefObject<HTMLDivElement>}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 14 }}
        className="csl-reveal rd2"
      >
        {ecoResearchStats.map((stat, i) => (
          <div key={stat.label} style={{ background: "#fff", borderRadius: 16, padding: "22px 16px", textAlign: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <p
              className="eco-count"
              data-target={stat.value}
              data-suffix={stat.suffix}
              style={{ fontSize: "1.8rem", fontWeight: 800, color: "#2D7D43", lineHeight: 1, marginBottom: 6 }}
            >
              0{stat.suffix}
            </p>
            <p style={{ fontSize: "0.68rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</p>
          </div>
        ))}
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
        title={<>What the market gets right — <em style={{ fontStyle: "italic" }}>and where EcoTrack fills the gap.</em></>}
      />

      <div className="csl-card-grid csl-reveal">
        {ecoCompetitors.map((comp) => (
          <div key={comp.name} style={{ background: "#fff", borderRadius: 18, padding: "22px 18px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111827", marginBottom: 14 }}>{comp.name}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Pros</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.pros.map((p) => (
                    <li key={p} style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.5, marginBottom: 4, display: "flex", gap: 6 }}>
                      <span style={{ color: "#10B981", flexShrink: 0 }}>+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Cons</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.cons.map((c) => (
                    <li key={c} style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.5, marginBottom: 4, display: "flex", gap: 6 }}>
                      <span style={{ color: "#EF4444", flexShrink: 0 }}>–</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd1" style={{ marginTop: 20, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>💡</span>
        While these apps offer great features individually, most lack <strong>simplicity</strong>, <strong>daily usability</strong>, or <strong>engagement</strong>. EcoTrack combines the best of all — making sustainability simple, interactive, and personally rewarding.
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
        sub="Empathy maps helped us design features that address true needs — not just actions, but how users think and feel about sustainable living."
      />

      {/* Empathy map overview image */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <CsImg label="Empathy map canvas — Think · See · Say · Feel · Pain · Gain" height={280} icon="🧠" sub="Full empathy analysis from interviews" />
      </div>

      <div className="csl-card-2col csl-reveal rd1">
        {/* Priya */}
        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
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
                <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 3 }}>{row.cat}</p>
                <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.55 }}>{row.insight}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Arjun */}
        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
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
                <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 3 }}>{row.cat}</p>
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
        sub="These personas guided every feature decision from information architecture to gamification mechanics."
      />

      <div className="csl-persona-grid csl-reveal">
        {/* Priya Sharma */}
        <div className="csl-persona-card">
          <div className="csl-persona-img" style={{ background: "#E8F7EC" }}>
            <span className="csl-persona-img-icon">👩‍🎓</span>
            <span className="csl-persona-img-label">Persona photo placeholder</span>
          </div>
          <div className="csl-persona-body">
            <p className="csl-persona-name">Priya Sharma</p>
            <p className="csl-persona-tag">22 · College Student · Mumbai</p>
            <p className="csl-persona-detail">
              Eco-curious beginner who cares about the planet but doesn&apos;t know where to start. Wants a friendly, visual app that guides her through sustainable choices without overwhelming her with data.
            </p>
          </div>
        </div>
        {/* Arjun Mehta */}
        <div className="csl-persona-card">
          <div className="csl-persona-img" style={{ background: "#D0EAD4" }}>
            <span className="csl-persona-img-icon">👨‍💼</span>
            <span className="csl-persona-img-label">Persona photo placeholder</span>
          </div>
          <div className="csl-persona-body">
            <p className="csl-persona-name">Arjun Mehta</p>
            <p className="csl-persona-tag">28 · Product Manager · Bangalore</p>
            <p className="csl-persona-detail">
              Active eco-enthusiast who has built green habits but wants data-driven proof of their impact. Looking for a sleek, efficient app that gives meaningful feedback without information overload.
            </p>
          </div>
        </div>
      </div>

      {/* Full persona documents image */}
      <div className="csl-reveal rd1" style={{ marginTop: 24 }}>
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
        title={<>Layout, structure, and flow — <em style={{ fontStyle: "italic" }}>without visual distraction.</em></>}
        sub="Mid-fidelity wireframes to refine layout, structure, and functionality — focusing on user experience without visual distractions."
      />

      {/* Mid-fi wireframes */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <CsImg label="Mid-fidelity wireframes — 6 key screens" height={380} icon="📐" sub="Wireframe flow · Layout explorations" />
      </div>

      {/* High-fi header */}
      <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#2D7D43", marginBottom: 12 }} className="csl-reveal rd1">
        High-Fidelity Wireframes
      </p>
      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111827", marginBottom: 12, letterSpacing: "-0.02em" }} className="csl-reveal rd1">
        Bringing the app to life with colour, depth, and detail.
      </h3>

      <div className="csl-img-3up csl-reveal rd2">
        <CsImg label="Dashboard Screen" aspect="9/16" icon="🏠" sub="Home · Daily tracker" />
        <CsImg label="Carbon Details Screen" aspect="9/16" icon="📊" sub="Impact breakdown · Charts" />
        <CsImg label="Learning Hub Screen" aspect="9/16" icon="💡" sub="Tips · Eco habits" />
      </div>
      <div className="csl-img-3up csl-reveal rd3" style={{ marginTop: 14 }}>
        <CsImg label="Add Activity Screen" aspect="9/16" icon="➕" sub="Log transport · Food · Energy" />
        <CsImg label="Progress Screen" aspect="9/16" icon="📈" sub="Weekly · Monthly charts" />
        <CsImg label="Profile Screen" aspect="9/16" icon="👤" sub="Achievements · Goals" />
      </div>

      <div className="csl-reveal" style={{ marginTop: 16 }}>
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
        title={<>Inter — clean, modern, <em style={{ fontStyle: "italic" }}>built for readability.</em></>}
        sub="Chosen for its clean look and excellent readability on screens. Its versatility helped create clear visual hierarchy across all app states."
      />

      {/* Type specimen */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 24 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", marginBottom: 16 }}>Primary typeface</p>
        <p style={{ fontSize: "2.5rem", fontWeight: 800, color: "#2D7D43", marginBottom: 20, letterSpacing: "-0.04em" }}>Inter</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { w: 700, label: "Bold", meta: "700 · Headings" },
            { w: 500, label: "Medium", meta: "500 · Labels" },
            { w: 400, label: "Regular", meta: "400 · Body" },
            { w: 300, label: "Light", meta: "300 · Captions" },
          ].map((t) => (
            <div key={t.label}>
              <p style={{ fontSize: "1rem", fontWeight: t.w, color: "#111827", marginBottom: 4 }}>{t.label}</p>
              <p style={{ fontSize: "0.62rem", color: "#9CA3AF", fontFamily: "ui-monospace, monospace" }}>{t.meta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Colour & typography image */}
      <div className="csl-reveal rd1">
        <CsImg label="Typography & Colour Palette specimen — full design system" height={220} icon="🎨" sub="Figma styles · Colour tokens · Type scale" />
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
        label="User Testing"
        title={<>Real users, real friction — <em style={{ fontStyle: "italic" }}>real improvements.</em></>}
      />

      <div className="csl-callout csl-reveal" style={{ marginBottom: 28, borderLeftColor: "#2D7D43", background: "#E8F7EC" }}>
        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>🎯</span>
        <strong>Test Goal:</strong> To evaluate the usability, clarity, and overall experience of the carbon tracking app with real users from the target audience.
      </div>

      <div className="csl-card-2col csl-reveal rd1">
        <div style={{ background: "#fff", borderRadius: 18, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 14 }}>Key Insights Gained</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {ecoTestInsights.map((insight) => (
              <li key={insight} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: "0.78rem", color: "#374151", lineHeight: 1.55 }}>
                <span style={{ color: "#2D7D43", flexShrink: 0 }}>→</span>{insight}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: "#fff", borderRadius: 18, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 14 }}>How It Helped</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {ecoTestHelped.map((item) => (
              <li key={item} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: "0.78rem", color: "#374151", lineHeight: 1.55 }}>
                <span style={{ color: "#10B981", flexShrink: 0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §11  ITERATIONS
───────────────────────────────────────────────────────────────────── */
function IterationsSection() {
  const iterations = [
    {
      label: "Iteration 01",
      title: "The Add Button — From Hidden to Front and Centre",
      before: { label: "Before: Tab bar with hidden add button", desc: "The add button was hidden in the centre of the tab bar, making it hard for users to notice and access quickly during daily logging." },
      after:  { label: "After: Floating action button on home screen", desc: "Replaced with a prominent floating action button on the home screen for better visibility and quicker daily input without extra navigation." },
    },
    {
      label: "Iteration 02",
      title: "Carbon Charts — From Technical to Intuitive",
      before: { label: "Before: Complex data visualisation", desc: "Carbon data visualizations were too technical, lacked contextual language, and overwhelmed users unfamiliar with CO₂ metrics." },
      after:  { label: "After: Simplified & contextual charts", desc: "Simplified visuals with plain-language labels, colour-coded context (good/bad days), and relative comparisons to yesterday." },
    },
  ];

  return (
    <CsSection id="iterations">
      <CsSectionHeader
        label="Before → After Iterations"
        title={<>Small changes, <em style={{ fontStyle: "italic" }}>significant impact.</em></>}
      />

      {iterations.map((iter, i) => (
        <div key={iter.label} className="csl-reveal" style={{ marginBottom: i < iterations.length - 1 ? 32 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, background: "#E8F7EC", color: "#2D7D43", padding: "4px 12px", borderRadius: 100 }}>{iter.label}</span>
          </div>
          <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#111827", marginBottom: 16 }}>{iter.title}</h3>
          <div className="csl-ba-grid">
            <div>
              <p className="csl-ba-label before">✕ Before</p>
              <CsImg label={iter.before.label} aspect="9/16" icon="📱" sub="Original design" />
              <p className="csl-ba-desc">{iter.before.desc}</p>
            </div>
            <div>
              <p className="csl-ba-label after">✓ After</p>
              <CsImg label={iter.after.label} aspect="9/16" icon="📱" sub="Revised design" />
              <p className="csl-ba-desc">{iter.after.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §12  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Key Learnings"
        title={<>Improvements & <em style={{ fontStyle: "italic" }}>what I took away.</em></>}
        sub="Throughout the design process, several iterations and testing phases led to meaningful improvements in both usability and user satisfaction."
      />

      <div className="csl-card-grid csl-reveal">
        {ecoLearnings.map((l, i) => (
          <div key={l.title} style={{ background: "#fff", borderRadius: 18, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 12 }}>{l.icon}</span>
            <p style={{ fontSize: "0.86rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>{l.title}</p>
            <p style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{l.desc}</p>
          </div>
        ))}
      </div>

      {/* Next project */}
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
      <IterationsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
