"use client";

import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";
import { airFigmaLinks } from "./airIqData";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",   label: "Overview"          },
  { id: "problem",    label: "The Problem"        },
  { id: "approach",   label: "Research & Approach"},
  { id: "insights",   label: "Key Insights"       },
  { id: "wireframes", label: "Wireframes"         },
  { id: "screens",    label: "Final Screens"      },
  { id: "system",     label: "Design System"      },
  { id: "results",    label: "Results"            },
  { id: "learnings",  label: "Learnings"          },
];

const META_ROWS = [
  { label: "Role",      value: "Lead UX Designer" },
  { label: "Duration",  value: "6 Months"         },
  { label: "Platform",  value: "Web · Mobile"     },
  { label: "Tools",     value: "Figma · v0 · AI"  },
  { label: "Industry",  value: "B2B SaaS · Travel"},
];

/* ─────────────────────────────────────────────────────────────────────
   TYPED animation (kept from original)
───────────────────────────────────────────────────────────────────── */
import { useEffect, useRef, useState } from "react";

function Typed({ text, delay = 0 }: { text: string; delay?: number }) {
  const [shown, setShown]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { obs.disconnect(); setTimeout(() => setStarted(true), delay); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started || shown >= text.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 36);
    return () => clearTimeout(t);
  }, [started, shown, text]);

  return (
    <span ref={ref} style={{ fontFamily: "inherit" }}>
      {text.slice(0, shown)}
      <span style={{
        display: "inline-block", width: 2, height: "1em",
        background: "#1E90FF", marginLeft: 2, verticalAlign: "text-bottom",
        opacity: shown >= text.length ? 0 : 1,
      }} />
    </span>
  );
}

function Hi({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: "#111827", fontWeight: 700 }}>{children}</strong>;
}

/* ─────────────────────────────────────────────────────────────────────
   WIREFRAME SKELETON (placeholder frame component)
───────────────────────────────────────────────────────────────────── */
type FrameKind = "ui" | "table" | "form" | "mobile";

function SkeletonFrame({
  label,
  caption,
  aspect = "16/9",
  kind = "ui",
}: {
  label?: string;
  caption?: string;
  aspect?: string;
  kind?: FrameKind;
}) {
  const rows = kind === "table"
    ? ["100%","100%","100%","100%"]
    : kind === "form"
    ? ["100%","100%","60%","100%","100%","60%"]
    : ["92%","68%","84%","55%","78%","62%"];

  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        aspectRatio: aspect, background: "#F3F4F6", borderRadius: 12,
        border: "1.5px solid #E5E7EB", overflow: "hidden", display: "flex",
        flexDirection: "column",
      }}>
        {/* Chrome bar */}
        <div style={{ height: 28, background: "#E9ECEF", display: "flex", alignItems: "center", padding: "0 10px", gap: 6, flexShrink: 0 }}>
          {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
            <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
          ))}
          <div style={{ flex: 1, height: 14, background: "rgba(0,0,0,0.08)", borderRadius: 4, marginLeft: 6 }} />
        </div>
        {/* Body skeleton */}
        <div style={{ flex: 1, display: "flex", padding: 10, gap: 8 }}>
          {kind !== "mobile" && kind !== "form" && (
            <div style={{ width: 48, background: "rgba(0,0,0,0.06)", borderRadius: 6, flexShrink: 0 }} />
          )}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ height: 14, background: "rgba(0,0,0,0.1)", borderRadius: 4, width: "60%" }} />
            {rows.map((w, i) => (
              <div key={i} style={{ height: 8, background: "rgba(0,0,0,0.06)", borderRadius: 4, width: w }} />
            ))}
          </div>
        </div>
      </div>
      {label && (
        <div style={{ fontSize: "0.7rem", color: "#9CA3AF", marginTop: 6, textAlign: "center", letterSpacing: "0.02em" }}>
          {label}
        </div>
      )}
      {caption && (
        <figcaption style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: 4, textAlign: "center" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function AirHero() {
  return (
    <div className="csl-hero">
      <div className="csl-hero-grid" />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        {/* Left */}
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E90FF", display: "inline-block", animation: "pulse 2s infinite" }} />
            Live in Production &nbsp;·&nbsp; B2B SaaS &nbsp;·&nbsp; Travel
          </div>
          <h1 className="csl-hero-title">
            <span style={{ color: "rgba(255,255,255,0.92)" }}>AIR</span>
            <span style={{ color: "#378ADD" }}> iQ</span>
          </h1>
          <p className="csl-hero-desc">
            Simplifying complex flight booking for 25,000+ travel agents across India. A 0→1 B2B SaaS platform that cut booking time by 30–40%.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead UX Designer</span>
            <span className="csl-hero-chip">6 Months</span>
            <span className="csl-hero-chip">Figma · v0 · AI</span>
            <span className="csl-hero-chip">0 → 1 Product</span>
          </div>
          <div className="csl-hero-ctas">
            <a className="csl-btn-primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
              Desktop Design ↗
            </a>
            <a className="csl-btn-ghost" href={airFigmaLinks.mobile} target="_blank" rel="noreferrer">
              Mobile Design ↗
            </a>
          </div>
        </div>
        {/* Right — hero image */}
        <div className="csl-hero-right">
          <div className="csl-hero-browser">
            <div className="csl-hero-browser-chrome">
              <div className="csl-hb-dots">
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FFBD2E" }} />
                <span style={{ background: "#28CA41" }} />
              </div>
              <div className="csl-hb-url">airiq.app / search</div>
            </div>
            <div className="csl-hero-browser-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Image/Airiq/thumbnail.png"
                alt="Air IQ flight search interface"
                style={{ width: "100%", display: "block", opacity: 0.92 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Stats strip */}
      <div className="csl-hero-stats">
        {[
          { val: "30–40%", label: "Faster booking"       },
          { val: "80+",    label: "Components built"     },
          { val: "20+",    label: "Screens shipped"      },
          { val: "0 → 1",  label: "Design system"        },
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
   §01  OVERVIEW
───────────────────────────────────────────────────────────────────── */
function OverviewSection() {
  return (
    <CsSection id="overview">
      <div className="csl-reveal" style={{
        background: "#fff", borderRadius: 20, padding: "32px 36px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        borderTop: "3px solid #1E90FF", marginBottom: 40,
      }}>
        <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(0,0,0,0.3)", fontFamily: "ui-monospace, monospace", marginBottom: 16 }}>
          The Objective
        </p>
        <div style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20, minHeight: "1.4em" }}>
          <Typed text="One platform. Every flight. Every agent." delay={200} />
        </div>
        <p className="csl-text">
          Travel agencies across India were booking flights on <Hi>3+ disconnected tools</Hi>, with no unified view, no error prevention, and no system backing them up. Each booking took <Hi>12+ minutes</Hi> on average — full of manual re-entry and guesswork.
        </p>
        <p className="csl-text">
          The goal: design a <Hi>single B2B portal</Hi> that gives travel agents and back-office admins everything they need — fast search, clean data, passenger management, and a confirmation flow that actually prevents errors.
        </p>
        <div className="csl-tags" style={{ marginTop: 20 }}>
          {["B2B SaaS", "Travel Technology", "0 → 1 Product", "25,000+ Agents"].map((t) => (
            <span className="csl-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* Role strip */}
      <div className="csl-role-strip csl-reveal rd1">
        {[
          { icon: "◎", head: "Full ownership",   body: "Research → wireframes → design system → hi-fi → dev handoff" },
          { icon: "⬡", head: "Cross-functional", body: "Engineering manager, 4 devs, business stakeholders"          },
          { icon: "◈", head: "0 → 1",             body: "No existing library, no prior product, no precedent"         },
        ].map((r) => (
          <div className="csl-role-chip" key={r.head}>
            <div className="csl-role-icon">{r.icon}</div>
            <div className="csl-role-head">{r.head}</div>
            <p className="csl-role-body">{r.body}</p>
          </div>
        ))}
      </div>

      {/* Before/After image placement */}
      <div className="csl-img-2up csl-reveal rd2" style={{ marginTop: 32 }}>
        <div>
          <CsImg label="Legacy system — before" aspect="4/3" icon="💻" sub="Blurred for confidentiality" />
          <p className="csl-img-caption">Before</p>
        </div>
        <div>
          <CsImg label="Air IQ dashboard — designed from scratch" aspect="4/3" icon="✨" sub="Final hi-fi screens" />
          <p className="csl-img-caption">After</p>
        </div>
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
      <CsSectionHeader
        num="02"
        title="Booking a flight shouldn't feel like solving a puzzle."
        sub="Yet in the existing system, that was the reality. Agents were spending 12+ minutes per booking — not because the task was complex, but because the interface made it complex."
      />

      <div className="csl-problem-grid csl-reveal">
        {/* What users had to do */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderTop: "3px solid #FEE2E2" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>⚠</div>
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827" }}>What Users Had To Do</div>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#EF4444", marginTop: 2 }}>User Effort Level: High</div>
            </div>
          </div>
          {[
            { main: "Decode cluttered layouts",               sub: "Manual parsing of non-essential data points."              },
            { main: "Search across scattered information",     sub: "Context-switching between 4 screens for a single task."   },
            { main: "Re-check critical details multiple times",sub: "Zero trust in system-generated summaries."                },
            { main: "Understand inconsistent patterns",        sub: "Re-learning interaction models in different modules."     },
          ].map((item) => (
            <div key={item.main} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <span style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: 1, flexShrink: 0 }}>✕</span>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#111827" }}>{item.main}</div>
                <div style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* What the system failed to do */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderTop: "3px solid #DBEAFE" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#DBEAFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>ℹ</div>
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827" }}>What the System Failed to Do</div>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#3B82F6", marginTop: 2 }}>System Responsibility: Low</div>
            </div>
          </div>
          {[
            { main: "Lack of clear visual hierarchy",       sub: "Primary content competing with secondary materials."   },
            { main: "Poor information grouping",             sub: "Data clusters lacked semantic relevance."              },
            { main: "No validation or feedback clarity",     sub: "Silent errors causing broken fare and date workflows." },
            { main: "Inconsistent components and patterns",  sub: "Fragmented UI library across high-impact views."       },
          ].map((item) => (
            <div key={item.main} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <span style={{ color: "#3B82F6", fontSize: "0.75rem", marginTop: 1, flexShrink: 0 }}>ℹ</span>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#111827" }}>{item.main}</div>
                <div style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Problem visualization image */}
      <div className="csl-reveal rd2" style={{ marginTop: 32 }}>
        <CsImg label="Problem visualization — pain point mapping" height={280} icon="🗺️" sub="User journey · Key friction points identified in research" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  RESEARCH & APPROACH
───────────────────────────────────────────────────────────────────── */
function ApproachSection() {
  return (
    <CsSection id="approach">
      <CsSectionHeader
        num="03"
        title="Research & Approach"
        sub="Five competitor platforms studied before a single wireframe was drawn."
      />

      {/* Research methodology image */}
      <div className="csl-reveal" style={{ marginBottom: 32 }}>
        <CsImg label="Research methodology overview" height={300} icon="🔍" sub="Competitive audit · Stakeholder interviews · Contextual observation" />
      </div>

      <div className="csl-process-grid csl-reveal rd1">
        {[
          { n: "01", t: "Competitive audit",   d: "Studied 5 platforms — B2C and GDS — before opening Figma. The gap between them was the opportunity." },
          { n: "02", t: "Business alignment",  d: "Sat in requirement discussions with stakeholders. Every decision had to be commercially defensible."   },
          { n: "03", t: "Prototype fast",       d: "Used v0 to validate the filter approach in 48h. Caught a critical mistake before weeks were lost."     },
          { n: "04", t: "System + screens",     d: "Built components and hi-fi in parallel. Change a token — every screen updates."                        },
        ].map((s) => (
          <div className="csl-process-step" key={s.n}>
            <div className="csl-process-num">{s.n}</div>
            <div className="csl-process-title">{s.t}</div>
            <p className="csl-process-text">{s.d}</p>
          </div>
        ))}
      </div>

      {/* Decision killed early */}
      <div className="csl-reveal rd2" style={{
        marginTop: 28, background: "#FFFBEB", borderRadius: 16,
        padding: "22px 24px", border: "1px solid #FCD34D",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", background: "#FCD34D", color: "#92400E", padding: "3px 10px", borderRadius: 100 }}>
            Killed on Day 2
          </span>
        </div>
        <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>Modal filter — looked clean, broke the workflow</div>
        <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.7 }}>
          First version put all 15 filters in a modal. One stakeholder walkthrough revealed the obvious problem: agents need results and filters visible at the same time. Rebuilt as a persistent 274px sidebar. The prototype caught this before days were spent in Figma.
        </p>
      </div>

      {/* Research findings image */}
      <div className="csl-reveal rd3" style={{ marginTop: 28 }}>
        <CsImg label="Competitive analysis matrix — 5 platforms compared" height={260} icon="📊" sub="GDS platforms · B2C tools · Gap analysis" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  KEY INSIGHTS
───────────────────────────────────────────────────────────────────── */
function InsightsSection() {
  const challenges = [
    {
      num: "01",
      title: "Complex data tables",
      problem: "Agents couldn't find key booking info across 15+ columns with no visual hierarchy.",
      fix: "Sticky headers · Inline actions · Progressive disclosure",
    },
    {
      num: "02",
      title: "Multi-pax itinerary edits",
      problem: "Changing one passenger's flight cascaded errors to all others with no safeguards.",
      fix: "Isolated passenger cards · Per-traveller scope · Clear warnings",
    },
    {
      num: "03",
      title: "Confirmation blindness",
      problem: "Agents missed passenger detail mismatches during review — leading to rework.",
      fix: "Highlighted mismatch warnings · Inline resolution · Unambiguous final screen",
    },
  ];

  return (
    <CsSection id="insights">
      <CsSectionHeader num="04" title="Three Hard Problems" />

      {challenges.map((c) => (
        <div key={c.num} className="csl-reveal" style={{
          background: "#fff", borderRadius: 18, padding: "24px 22px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.04)", marginBottom: 20,
        }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 14 }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#1E90FF", fontFamily: "ui-monospace, monospace", marginTop: 3 }}>{c.num}</span>
            <div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#111827", marginBottom: 4 }}>{c.title}</div>
              <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.6 }}>{c.problem}</p>
            </div>
          </div>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981", background: "#ECFDF5", padding: "6px 12px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 6 }}>
            ✓ {c.fix}
          </div>
          <div className="csl-img-2up" style={{ marginTop: 16 }}>
            <div>
              <SkeletonFrame label={`Before — ${c.title.toLowerCase()}`} aspect="16/9" kind="ui" />
              <p className="csl-img-caption">Before</p>
            </div>
            <div>
              <SkeletonFrame label={`After — ${c.title.toLowerCase()}`} aspect="16/9" kind="ui" />
              <p className="csl-img-caption">After</p>
            </div>
          </div>
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  WIREFRAMES
───────────────────────────────────────────────────────────────────── */
function WireframesSection() {
  return (
    <CsSection id="wireframes">
      <CsSectionHeader
        num="05"
        title="Wireframes & Iterations"
        sub="What I tried, what I scrapped, and why every dead end made the final solution better."
      />

      {/* Lo-fi wireframes image */}
      <div className="csl-reveal" style={{ marginBottom: 24 }}>
        <CsImg label="Lo-fi wireframes — early exploration" height={320} icon="📐" sub="Sketch → FigJam → Figma low-fidelity" />
      </div>

      {/* Iteration pairs */}
      {[
        {
          scrapped: "Mega dropdown — cabin class",
          why: "Decision paralysis. Agents overwhelmed on every booking.",
          shipped: "Progressive disclosure + defaults",
        },
        {
          scrapped: "Vertical stepper — itinerary",
          why: "Broke on tablet. Too much cognitive load for multi-leg trips.",
          shipped: "Horizontal condensed timeline",
        },
        {
          scrapped: "Floating action button — edits",
          why: "Zero discoverability in a data-dense screen.",
          shipped: "Inline edit with contextual highlight",
        },
      ].map((r, i) => (
        <div key={i} className="csl-reveal" style={{
          background: "#fff", borderRadius: 18, padding: "20px 22px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.04)", marginBottom: 16,
        }}>
          <div className="csl-ba-grid">
            <div>
              <p className="csl-ba-label before">✕ Scrapped — {r.scrapped}</p>
              <SkeletonFrame label={r.scrapped} aspect="4/3" kind="ui" />
            </div>
            <div>
              <p className="csl-ba-label after">✓ Shipped — {r.shipped}</p>
              <SkeletonFrame label={r.shipped} aspect="4/3" kind="ui" />
            </div>
          </div>
          <p style={{ fontSize: "0.76rem", color: "#6B7280", marginTop: 12, lineHeight: 1.6 }}>
            <strong style={{ color: "#111827" }}>Why it failed:</strong> {r.why}
          </p>
        </div>
      ))}

      {/* Mid-fi wireframes placeholder */}
      <div className="csl-reveal rd2" style={{ marginTop: 24 }}>
        <CsImg label="Mid-fidelity wireframes — key flows" height={300} icon="📋" sub="Search flow · Booking flow · Confirmation flow" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  FINAL SCREENS
───────────────────────────────────────────────────────────────────── */
function ScreensSection() {
  const flows = [
    {
      num: "Flow 01",
      title: "Search → Results",
      body: "Real-time search with 15+ filters and 4 trip variants. Price is largest. Filters persist. 6 data points visible without a single click.",
    },
    {
      num: "Flow 02",
      title: "Itinerary → Passenger Details",
      body: "Multi-pax, infants, wheelchair, special meals — all handled per-passenger. Edge cases designed explicitly, not assumed away.",
    },
    {
      num: "Flow 03",
      title: "Review → Confirmation",
      body: "Mismatches surface inline. Agents resolve without leaving the screen. Final confirmation is unambiguous. Error rate dropped.",
    },
  ];

  return (
    <CsSection id="screens">
      <CsSectionHeader
        num="06"
        title="Screen by Screen"
        sub="20+ screens across 5 core flows. Three are shown here."
      />

      {flows.map((f, fi) => (
        <div key={f.num} className="csl-reveal" style={{ marginBottom: fi < flows.length - 1 ? 48 : 0 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 }}>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#1E90FF", fontFamily: "ui-monospace, monospace", marginTop: 2 }}>{f.num}</span>
            <div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#111827", marginBottom: 4 }}>{f.title}</div>
              <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.6 }}>{f.body}</p>
            </div>
          </div>
          {/* Full-width screen */}
          <CsImg label={`${f.title} — full screen view`} aspect="16/9" icon="🖥️" sub="Final hi-fi design" className="csl-reveal" />
          {/* 2-up detail shots */}
          <div className="csl-img-2up" style={{ marginTop: 12 }}>
            <CsImg label={`${f.title} — detail A`} aspect="4/3" icon="🔍" sub="Component closeup" />
            <CsImg label={`${f.title} — detail B`} aspect="4/3" icon="🔍" sub="Edge case state" />
          </div>
        </div>
      ))}

      <div className="csl-callout csl-reveal" style={{ marginTop: 32 }}>
        <strong>Dashboard deep-dive available</strong> — 20+ screens across 5 flows: analytics, agent management, inventory, booking history, and more. Happy to walk through in interview.
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  DESIGN SYSTEM
───────────────────────────────────────────────────────────────────── */
function DesignSystemSection() {
  const colors = [
    { name: "Primary",  hex: "#1076BC" },
    { name: "Navy",     hex: "#0B1E3D" },
    { name: "Blue Mid", hex: "#378ADD" },
    { name: "Success",  hex: "#0D9E75" },
    { name: "Error",    hex: "#E53E3E" },
    { name: "Warning",  hex: "#D97706" },
    { name: "Surface",  hex: "#F9FAFC", border: true },
    { name: "Border",   hex: "#E0E6EC", border: true },
  ];

  const comps = [
    ["⬜","Buttons","8 variants"],["📋","Inputs","12 states"],
    ["🔲","Cards","6 types"],["📊","Tables","4 variants"],
    ["🏷️","Badges","10 states"],["💬","Toasts","5 types"],
    ["📑","Modals","4 layouts"],["🗂️","Nav","3 patterns"],
  ];

  return (
    <CsSection id="system">
      <CsSectionHeader
        num="07"
        title="The Design System"
        sub="No existing library. Every token, component, and icon drawn in Figma."
      />

      <div className="csl-card-2col csl-reveal">
        {/* Color system */}
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(0,0,0,0.35)", fontFamily: "ui-monospace, monospace", marginBottom: 14 }}>Color system</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {colors.map((c) => (
              <div key={c.name} style={{ textAlign: "center" }}>
                <div style={{ height: 40, borderRadius: 8, background: c.hex, border: c.border ? "1px solid rgba(0,0,0,0.1)" : "none", marginBottom: 4 }} />
                <div style={{ fontSize: "0.62rem", color: "#6B7280" }}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(0,0,0,0.35)", fontFamily: "ui-monospace, monospace", marginBottom: 14 }}>Typography — Lato</p>
          {[
            { sample: "Display",    px: 48, w: 900 },
            { sample: "Heading",    px: 28, w: 700 },
            { sample: "Subheading", px: 20, w: 600 },
            { sample: "Body text",  px: 14, w: 400 },
            { sample: "Caption",    px: 12, w: 500 },
          ].map((t) => (
            <div key={t.sample} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: Math.max(11, t.px * 0.36), fontWeight: t.w, color: "#111827" }}>{t.sample}</span>
              <span style={{ fontSize: "0.62rem", color: "#9CA3AF", fontFamily: "ui-monospace, monospace" }}>{t.px}px / {t.w}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Component library image */}
      <div className="csl-reveal rd1" style={{ marginTop: 20 }}>
        <CsImg label="Component library — 80+ components across 8 categories" aspect="16/6" icon="🧩" sub="All states documented · Token-driven" />
      </div>

      {/* Component grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 16 }} className="csl-reveal rd2">
        {comps.map(([icon, name, count]) => (
          <div key={name} style={{ background: "#F9FAFB", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: 6 }}>{icon}</div>
            <div style={{ fontSize: "0.74rem", fontWeight: 600, color: "#111827" }}>{name}</div>
            <div style={{ fontSize: "0.64rem", color: "#9CA3AF" }}>{count}</div>
          </div>
        ))}
      </div>

      {/* Icon system image */}
      <div className="csl-reveal rd3" style={{ marginTop: 16 }}>
        <CsImg label="Custom icon system — 3 sizes, drawn from scratch, zero libraries" aspect="16/5" icon="🎨" sub="Line icons · Filled variants · Illustrated set" />
      </div>

      <div style={{ marginTop: 20 }} className="csl-reveal">
        <a className="csl-btn-primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
          View full design system in Figma ↗
        </a>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  RESULTS
───────────────────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <CsSection id="results">
      <CsSectionHeader num="08" title="The Impact" />

      {/* Big metric callout */}
      <div className="csl-reveal" style={{
        background: "linear-gradient(135deg, #0B1E3D 0%, #1A3258 100%)",
        borderRadius: 20, padding: "32px 36px",
        display: "flex", gap: 32, alignItems: "center",
        marginBottom: 28, flexWrap: "wrap",
      }}>
        <div>
          <div style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
            ~7<span style={{ fontSize: "1.4rem" }}>min</span>
          </div>
          <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
            Average booking time<br /><em>down from ~12 min</em>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, flex: 1, minWidth: 240 }}>
          {[
            { val: "30–40%", label: "Faster completion"         },
            { val: "80+",    label: "Components from zero"      },
            { val: "20+",    label: "Screens shipped"           },
            { val: "2×",     label: "Data clarity on cards"     },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1E90FF" }}>{m.val}</div>
              <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="csl-callout csl-reveal rd1">
        &ldquo;Much faster and fewer mistakes than before.&rdquo;
        <div className="csl-quote-credit">— Anonymized travel agent · Post-launch feedback</div>
      </div>

      {/* Before/After table */}
      <div className="csl-reveal rd2" style={{ marginTop: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px 16px", background: "#F3F4F6", borderRadius: "8px 0 0 0", textAlign: "left", color: "#6B7280", fontWeight: 600 }}>Before</th>
              <th style={{ padding: "10px 16px", background: "#ECFDF5", borderRadius: "0 8px 0 0", textAlign: "left", color: "#059669", fontWeight: 600 }}>After</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Agents juggled 3+ tools",      "Single unified platform"],
              ["Manual entry errors frequent", "Validation + inline warnings"],
              ["No dashboard visibility",       "20+ screens, 5 core flows live"],
              ["~12 min per booking",           "~7 min (agent feedback)"],
              ["No design system",              "80+ token-driven components"],
            ].map(([b, a], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{b}</td>
                <td style={{ padding: "10px 16px", color: "#059669", fontWeight: 500 }}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  const items = [
    {
      n: "01",
      title: "Prototype before you design",
      text: "Using v0 to validate the filter concept in 48 hours saved weeks of high-fidelity rework. The fastest way to kill a bad idea is to make it real.",
    },
    {
      n: "02",
      title: "Business context shapes every decision",
      text: "Sitting in stakeholder discussions early meant I understood the commercial reality. Design decisions that ignored business constraints never survived review.",
    },
    {
      n: "03",
      title: "Edge cases are features, not bugs",
      text: "Multi-pax editing, infant seats, fare mismatches — explicitly designing for these earned trust with agents who had been burned by systems that ignored them.",
    },
    {
      n: "04",
      title: "A design system is a force multiplier",
      text: "Building 80+ components upfront felt slow. But when requirements changed, updating a single token updated every screen simultaneously.",
    },
  ];

  return (
    <CsSection id="learnings" last>
      <CsSectionHeader num="09" title="Learnings" sub="What this project taught me about designing for real-world, complex B2B workflows." />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((item) => (
          <div key={item.n} className="csl-reveal" style={{ display: "flex", gap: 20, background: "#fff", borderRadius: 18, padding: "22px 22px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#1E90FF", fontFamily: "ui-monospace, monospace", marginTop: 2, flexShrink: 0 }}>{item.n}</span>
            <div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Next project */}
      <a href="/projects/biblofi" className="csl-next csl-reveal" style={{ marginTop: 56 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">BibloFi — Library Management App</p>
        </div>
        <span className="csl-next-arrow">→</span>
      </a>
    </CsSection>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════════════════ */
export function AirIqCaseStudy() {
  return (
    <CaseStudyPage
      theme="air"
      title="Air iQ"
      tag="B2B SaaS · Travel"
      tocItems={TOC_ITEMS}
      metaRows={META_ROWS}
      hero={<AirHero />}
    >
      <OverviewSection />
      <ProblemSection />
      <ApproachSection />
      <InsightsSection />
      <WireframesSection />
      <ScreensSection />
      <DesignSystemSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
