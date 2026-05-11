"use client";

import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";
import { airFigmaLinks } from "./airIqData";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",  label: "Overview"          },
  { id: "problem",   label: "The Problem"        },
  { id: "approach",  label: "Research & Approach"},
  { id: "insights",  label: "Core Components"    },
  { id: "product",   label: "The Product"        },
  { id: "results",   label: "Results"            },
  { id: "learnings", label: "Learnings"          },
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
   LIVE SEARCH DEMO (hero right panel)
───────────────────────────────────────────────────────────────────── */
type SearchPhase = "typing" | "loading" | "result";

function LiveSearchDemo() {
  const QUERY = "Delhi  →  Mumbai";
  const [chars, setChars]   = useState(0);
  const [phase, setPhase]   = useState<SearchPhase>("typing");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (chars < QUERY.length) {
        t = setTimeout(() => setChars((c) => c + 1), 65);
      } else {
        t = setTimeout(() => setPhase("loading"), 700);
      }
    } else if (phase === "loading") {
      t = setTimeout(() => setPhase("result"), 1500);
    } else {
      t = setTimeout(() => { setChars(0); setPhase("typing"); }, 6000);
    }
    return () => clearTimeout(t);
  }, [phase, chars]);

  return (
    <div style={{ width: "100%", fontFamily: "inherit" }}>
      <div style={{
        background: "rgba(16,118,188,0.07)",
        border: "1px solid rgba(55,138,221,0.22)",
        borderRadius: 20,
        padding: 16,
        backdropFilter: "blur(24px)",
        boxShadow: "0 0 70px rgba(16,118,188,0.18), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}>

        {/* ── Search bar ── */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: 12, padding: "12px 14px", marginBottom: 12,
        }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <div style={{
              flex: 1, height: 44,
              background: "rgba(255,255,255,0.07)",
              border: `1px solid ${phase === "typing" ? "rgba(55,138,221,0.5)" : "rgba(255,255,255,0.1)"}`,
              borderRadius: 8, display: "flex", alignItems: "center",
              padding: "0 14px", fontSize: "0.95rem", fontWeight: 700, color: "#fff",
              letterSpacing: "0.02em", transition: "border-color 0.3s",
            }}>
              {QUERY.slice(0, chars)}
              {phase === "typing" && (
                <span style={{
                  display: "inline-block", width: 2, height: "1em",
                  background: "#378ADD", marginLeft: 2, verticalAlign: "middle",
                  animation: "cslCursorBlink 0.9s ease infinite",
                }} />
              )}
            </div>
            <button style={{
              height: 44, padding: "0 18px", border: "none", borderRadius: 8,
              background: chars >= QUERY.length ? "#1076BC" : "rgba(16,118,188,0.3)",
              fontSize: "0.78rem", fontWeight: 700, color: "#fff",
              cursor: "pointer", transition: "background 0.4s",
              display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
            }}>
              ✈ Search
            </button>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["31 Dec · 2026", "1 Adult", "Economy"].map((chip) => (
              <span key={chip} style={{
                fontSize: "0.63rem", fontWeight: 600, color: "rgba(255,255,255,0.42)",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 6, padding: "3px 10px",
              }}>{chip}</span>
            ))}
          </div>
        </div>

        {/* ── Fixed-height result slot — no height jump ── */}
        <div style={{ height: 192, overflow: "hidden" }}>

          {/* Idle placeholder */}
          {phase === "typing" && (
            <div style={{
              height: "100%", borderRadius: 12,
              border: "1px dashed rgba(255,255,255,0.07)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.16)", letterSpacing: "0.12em" }}>
                results appear here
              </span>
            </div>
          )}

          {/* Loading */}
          {phase === "loading" && (
            <div style={{
              height: "100%", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, gap: 14,
            }}>
              <div style={{ fontSize: "0.63rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Checking 3 GDS Systems…
              </div>
              <div style={{ width: "55%", height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", background: "linear-gradient(90deg,#1076BC,#378ADD)", animation: "cslLoadBar 1.4s ease-out forwards" }} />
              </div>
            </div>
          )}

          {/* Result — single fare card */}
          {phase === "result" && (
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12, overflow: "hidden", animation: "fadeUp 0.45s ease both",
            }}>
              {/* Flight header */}
              <div style={{ padding: "12px 16px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 7,
                      background: "linear-gradient(135deg,#C41E3A,#8B0000)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.52rem", fontWeight: 900, color: "#fff",
                    }}>AI</div>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Air India</div>
                      <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.38)" }}>AI-646 · Airbus A320</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: "0.53rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#0D9E75", background: "rgba(13,158,117,0.12)", border: "1px solid rgba(13,158,117,0.22)",
                    borderRadius: 100, padding: "3px 9px",
                  }}>Non-stop</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>09:30</div>
                    <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.38)", marginTop: 2 }}>DEL T1 · 31 Dec</div>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 14px" }}>
                    <span style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>1h 00m</span>
                    <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.12)", position: "relative" }}>
                      <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)" }}>✈</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>13:30</div>
                    <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.38)", marginTop: 2 }}>BOM T2 · 31 Dec</div>
                  </div>
                </div>
              </div>

              {/* Single fare row */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "9px 16px", background: "rgba(16,118,188,0.15)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 13, height: 13, borderRadius: "50%", flexShrink: 0,
                    border: "2px solid #378ADD", background: "#1076BC",
                    boxShadow: "0 0 8px rgba(55,138,221,0.55)",
                  }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>₹3,459</div>
                    <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.38)" }}>SME · Economy</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {["Refundable", "Meal"].map((tag) => (
                    <span key={tag} style={{
                      fontSize: "0.5rem", fontWeight: 600,
                      color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: "2px 6px",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{
                padding: "9px 16px", display: "flex", alignItems: "center",
                justifyContent: "space-between", background: "rgba(0,0,0,0.18)",
              }}>
                <span style={{ fontSize: "0.56rem", fontWeight: 700, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  8 Seats Left
                </span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>3 more fares ↓</span>
                  <button style={{
                    background: "#1076BC", color: "#fff", border: "none",
                    borderRadius: 6, padding: "6px 14px", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer",
                  }}>Book Now ↗</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
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
        {/* Right — live search demo */}
        <div className="csl-hero-right">
          <LiveSearchDemo />
        </div>
      </div>
      {/* Meta strip */}
      <div className="csl-hero-stats">
        {[
          { label: "Platform", val: "Desktop & Mobile Web"                    },
          { label: "Screens",  val: "40+ Screens · 4 Core Flows"              },
          { label: "Role",     val: "UI/UX Designer"                          },
          { label: "Team",     val: "3 Product Manager · 2 Engineering Manager" },
        ].map((s) => (
          <div className="csl-hero-stat" key={s.label}>
            <div className="csl-hero-stat-label" style={{ marginBottom: 7 }}>{s.label}</div>
            <div className="csl-hero-stat-val" style={{ fontSize: "0.88rem", fontWeight: 700, lineHeight: 1.35 }}>{s.val}</div>
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

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   JOURNEY TIMELINE (before / after animation)
───────────────────────────────────────────────────────────────────── */
function JourneyTimeline() {
  const ref  = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const before = [
    { icon: "⌨", label: "GDS terminal",  sub: "Command-line only"  },
    { icon: "📞", label: "Call airline",   sub: "No real-time data"  },
    { icon: "📝", label: "Manual entry",   sub: "Error-prone"        },
    { icon: "🖨",  label: "Print fare",    sub: "Paper-based"        },
    { icon: "📧", label: "Email client",   sub: "3–4 extra steps"    },
  ];

  const after = [
    { icon: "✦", label: "Search",  sub: "Live GDS results" },
    { icon: "◉", label: "Select",  sub: "Single screen"    },
    { icon: "↗", label: "Confirm", sub: "Done in one flow" },
  ];

  const stepIn = (i: number, offset = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0) scale(1)" : "translateY(10px) scale(0.9)",
    transition: `opacity 0.4s ${(offset + i) * 0.07}s ease, transform 0.4s ${(offset + i) * 0.07}s ease`,
  });

  const lineIn = (delay: number): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transition: `opacity 0.6s ${delay}s ease`,
  });

  const StepRow = ({
    steps, color, bg, border,
    label, time, timeColor, offset = 0,
    narrow = false,
  }: {
    steps: typeof before;
    color: string; bg: string; border: string;
    label: string; time: string; timeColor: string;
    offset?: number; narrow?: boolean;
  }) => (
    <div style={{ marginBottom: 0 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <span style={{
          fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.16em", color, background: bg,
          padding: "4px 12px", borderRadius: 100, border: `1px solid ${border}`,
        }}>{label}</span>
        <span style={{ fontSize: "0.78rem", fontWeight: 800, color: timeColor }}>{time}</span>
      </div>
      <div style={{ position: "relative", maxWidth: narrow ? "62%" : "100%" }}>
        <div style={{
          position: "absolute", top: 19,
          left: `calc(${40 / 2}px)`, right: `calc(${40 / 2}px)`,
          height: 1, background: bg,
          ...lineIn(offset * 0.07 + 0.1),
        }} />
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: 8, position: "relative", zIndex: 1,
        }}>
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: bg, border: `1.5px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.92rem", flexShrink: 0,
                ...stepIn(i, offset),
              }}>{step.icon}</div>
              <div style={{ marginTop: 8, opacity: vis ? 1 : 0, transition: `opacity 0.4s ${(offset + i) * 0.07 + 0.18}s ease` }}>
                <div style={{ fontSize: "0.63rem", fontWeight: 700, color: "#374151", marginBottom: 2 }}>{step.label}</div>
                <div style={{ fontSize: "0.55rem", color: "#9CA3AF" }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} style={{
      background: "#fff", borderRadius: 18, padding: "28px 24px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.05)",
    }}>
      <StepRow
        steps={before}
        color="#EF4444" bg="#FEF2F2" border="#FECACA"
        label="Before" time="~12 min · per booking" timeColor="#EF4444"
        offset={0}
      />

      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        margin: "24px 0",
        opacity: vis ? 1 : 0, transition: "opacity 0.5s 0.5s ease",
      }}>
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.07)" }} />
        <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          AIR iQ redesigned this
        </span>
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.07)" }} />
      </div>

      <StepRow
        steps={after}
        color="#1076BC" bg="#E8F2FB" border="#BFDBFE"
        label="Air iQ" time="~7 min · per booking" timeColor="#1076BC"
        offset={7}
        narrow
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  THE PROBLEM
───────────────────────────────────────────────────────────────────── */
const PAIN_MOMENTS = [
  {
    title: "3 tools for 1 booking",
    scene: "Every booking started with the same ritual — GDS terminal open, airline website in another tab, spreadsheet in a third. Three windows. One fare. Before anything was booked, the agent had already context-switched twice.",
    tag: "~3 min wasted before typing starts",
  },
  {
    title: "Fare rules you couldn't trust",
    scene: "Refundability lived in a wall of legal text — no summary, no highlights, no visual indicator. Agents guessed. Sometimes they guessed wrong and the client got incorrect information.",
    tag: "High error risk on every booking",
  },
  {
    title: "Sharing a fare: 4 steps minimum",
    scene: "Copy the price. Open email. Write the passenger's name. Attach a PDF. Send. Then answer the follow-up call because the client didn't understand the format. A 30-second task became a 5-minute one.",
    tag: "No quick share flow existed",
  },
  {
    title: "Errors surfaced at payment",
    scene: "Name mismatch, wrong fare class, expired passport — none of it was caught until the final step. By then, re-booking fees applied and the agent had to start over with a frustrated client on hold.",
    tag: "Zero validation before confirmation",
  },
];

function ProblemSection() {
  return (
    <CsSection id="problem">
      <CsSectionHeader
        num="02"
        title="Booking a flight shouldn't feel like solving a puzzle."
        sub="Yet in the existing system, that was the reality. Agents were spending 12+ minutes per booking — not because the task was complex, but because the interface made it complex."
      />

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 14, alignItems: "start",
      }} className="csl-reveal">
        {PAIN_MOMENTS.map((m, i) => (
          <div key={m.title} style={{ marginTop: i % 2 === 1 ? 22 : 0 }}>
            <div style={{
              background: "#fff", borderRadius: 16, padding: "22px 22px 18px",
              boxShadow: "0 3px 16px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "3px solid #EF4444",
            }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#111827", marginBottom: 10, lineHeight: 1.3 }}>
                {m.title}
              </div>
              <p style={{ fontSize: "0.75rem", color: "#4B5563", lineHeight: 1.75, fontStyle: "italic", marginBottom: 14 }}>
                {m.scene}
              </p>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "0.6rem", fontWeight: 700, color: "#EF4444",
                background: "#FEF2F2", border: "1px solid #FECACA",
                borderRadius: 100, padding: "3px 10px",
                fontFamily: "ui-monospace, monospace", letterSpacing: "0.04em",
              }}>
                {m.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   COMPETITIVE CAROUSEL
───────────────────────────────────────────────────────────────────── */
const COMPETITORS = [
  { slug: "mmt",      name: "MakeMyTrip", type: "B2C · Consumer OTA",   color: "#D84315", nodeId: "1-95"  },
  { slug: "tripjack", name: "TripJack",   type: "B2B · Travel Portal",  color: "#F57C00", nodeId: "1-2"   },
  { slug: "tbo",      name: "TBO.com",    type: "B2B · Travel Booking", color: "#1565C0", nodeId: "1-180" },
  { slug: "yatra",    name: "Yatra",      type: "B2C · OTA · Agent",    color: "#E91E63", nodeId: "1-153" },
];

const KEY_FINDINGS = [
  "Price dominates every scan — but **fare rules are never inline**. Refundability is always one extra click away.",
  "Open filters, lose results. Agents need **both visible at once** — sequencing compare and filter breaks the workflow.",
  "TripJack had the right data, wrong **visual hierarchy** — refundability and seat count were buried every time.",
  "TBO set the **industry floor**: no design system, no consistency, horizontal scroll on every screen.",
  "Yatra: polished **consumer side**, neglected **agent portal** — same company, two completely different standards.",
];

function HighlightLine({ text, active }: { text: string; active: boolean }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{
            color: active ? "#EF4444" : "inherit",
            fontWeight: active ? 700 : 600,
            transition: "color 0.22s ease",
          }}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function CompetitiveCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredFinding, setHoveredFinding] = useState<number | null>(null);
  const c = COMPETITORS[activeIdx];
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/D6XwtXxLfGueNa2O4fwkHy/AirIQ-Case-Study?node-id=${c.nodeId}`;
  const figmaLink = `https://www.figma.com/design/D6XwtXxLfGueNa2O4fwkHy/AirIQ-Case-Study?node-id=${c.nodeId}`;

  return (
    <div>
      {/* ── Logo tabs ── */}
      <div style={{
        fontSize: "0.56rem", fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.18em", color: "rgba(0,0,0,0.28)",
        fontFamily: "ui-monospace, monospace", marginBottom: 12,
      }}>
        Platforms studied
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
        {COMPETITORS.map((comp, i) => (
          <button
            key={comp.slug}
            onClick={() => setActiveIdx(i)}
            style={{
              borderRadius: 12, overflow: "hidden",
              background: activeIdx === i ? "rgba(16,118,188,0.06)" : "#fff",
              border: activeIdx === i ? "2px solid #1076BC" : "1px solid rgba(0,0,0,0.07)",
              boxShadow: activeIdx === i ? "0 2px 12px rgba(16,118,188,0.14)" : "0 1px 4px rgba(0,0,0,0.05)",
              height: 68,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0 14px", cursor: "pointer",
              transition: "border 0.2s, background 0.2s, box-shadow 0.2s",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/Image/Airiq/research/logo-${comp.slug}.png`}
              alt={comp.name}
              style={{ maxWidth: "100%", maxHeight: 40, objectFit: "contain", display: "block" }}
            />
          </button>
        ))}
      </div>

      {/* ── Figma embed — swaps on tab change ── */}
      <div style={{
        borderRadius: 16, overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        background: "#F9FAFB",
      }}>
        <div style={{
          height: 40, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
            </svg>
            <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#374151" }}>AirIQ — {c.name} Research</span>
          </div>
          <a
            href={figmaLink}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "0.62rem", fontWeight: 600, color: "#1076BC", textDecoration: "none" }}
          >
            Open in Figma ↗
          </a>
        </div>
        <iframe
          key={c.nodeId}
          src={embedUrl}
          allowFullScreen
          style={{ width: "100%", height: 520, border: "none", display: "block" }}
          loading="lazy"
        />
      </div>

      {/* ── Key findings ── */}
      <div style={{ marginTop: 20 }}>
        <div style={{
          fontSize: "0.56rem", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.18em", color: "rgba(0,0,0,0.25)",
          fontFamily: "ui-monospace, monospace", marginBottom: 12,
        }}>
          Key findings
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {KEY_FINDINGS.map((text, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredFinding(i)}
              onMouseLeave={() => setHoveredFinding(null)}
              style={{
                padding: "13px 16px",
                borderRadius: 10,
                background: hoveredFinding === i ? "#FFF5F5" : "#FAFAFA",
                border: hoveredFinding === i ? "1px solid rgba(239,68,68,0.2)" : "1px solid rgba(0,0,0,0.05)",
                fontSize: "0.95rem",
                color: "#374151",
                lineHeight: 1.7,
                cursor: "default",
                transition: "background 0.22s ease, border-color 0.22s ease",
              }}
            >
              <HighlightLine text={text} active={hoveredFinding === i} />
            </div>
          ))}
        </div>
      </div>
    </div>
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
        sub="Four competitor platforms studied before a single wireframe was drawn."
      />

      <div className="csl-reveal" style={{ marginBottom: 32 }}>
        <CompetitiveCarousel />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  CORE COMPONENTS
───────────────────────────────────────────────────────────────────── */

type ApproachCard = {
  label: string;
  caption: string;
  isFinal?: boolean;
};

type CoreComponent = {
  num: string;
  title: string;
  subtitle: string;
  where: string;
  problem: string;
  approaches: ApproachCard[];
  learned: string;
  impact: string;
  usedIn: string[];
};

/* ── Fare Listing Card: approach carousel data ── */
const FARE_APPROACHES = [
  {
    step: "Approach 01",
    img: "/Image/Airiq/first%20core/first-approch.png",
    statusText: "Didn't land",
    statusColor: "#EF4444",
    statusBg: "#FEF2F2",
    statusBorder: "#FECACA",
    heading: "All data, equal weight",
    reason: "Every field competed for attention — fare class, baggage, refundability all had the same visual weight. Agents had to read every row top-to-bottom before they could compare fares. A high-frequency scan became a slow, exhausting read.",
    isFinal: false,
  },
  {
    step: "Approach 02",
    img: "/Image/Airiq/first%20core/second-approch.png",
    statusText: "Getting closer",
    statusColor: "#D97706",
    statusBg: "#FFFBEB",
    statusBorder: "#FCD34D",
    heading: "Grouping added, labels still ambiguous",
    reason: "Visual grouping helped reduce noise, but fare class labels like SME, SAVER, and FLEX meant nothing without explanation. Agents were still guessing which class to book. Refundability remained a secondary thought rather than an upfront signal.",
    isFinal: false,
  },
  {
    step: "Final Design",
    img: "/Image/Airiq/first%20core/final.png",
    statusText: "Shipped",
    statusColor: "#059669",
    statusBg: "#ECFDF5",
    statusBorder: "#6EE7B7",
    heading: "Price hierarchy first. Everything else at a glance.",
    reason: "Price and time dominate the scan path. Refundability, baggage allowance, and seat count are visible without expanding or hovering. Fare class icons map to symbols agents already recognise. Scan once, compare, decide, book.",
    isFinal: true,
  },
];

const FARE_COMPAT = [
  { label: "One Way",               img: "/Image/Airiq/first%20core/one-way.png",     sub: "Domestic single-leg search"   },
  { label: "One Way International", img: "/Image/Airiq/first%20core/one-way-int.png", sub: "Cross-border single leg"       },
  { label: "Round Trip",            img: "/Image/Airiq/first%20core/round-trip.png",  sub: "Outbound + return in one view" },
];

const CORE_COMPONENTS: CoreComponent[] = [
  {
    num: "2",
    title: "Passenger Add-ons Panel",
    subtitle: "From scattered to seamless.",
    where: "Booking flow, step 2. Every agent touches this for every multi-pax booking.",
    problem: "Agents had to navigate across multiple steps to select passengers and apply actions — increasing time and cognitive load on high-frequency tasks.",
    approaches: [
      { label: "Approach 1", caption: "Separate page per passenger — too many context switches" },
      { label: "Approach 2", caption: "Modal per add-on — lost overview of full booking" },
      { label: "Approach 3", caption: "Inline rows, no grouping — visually noisy at 4+ pax" },
      { label: "Approach 4 — Final", caption: "Single guided panel with hierarchy + inline actions", isFinal: true },
    ],
    learned: "Consolidated passenger selection and actions into one screen. Clear hierarchy, inline interactions, zero page-switching.",
    impact: "Reduced navigation effort and made high-frequency tasks faster and easier to execute.",
    usedIn: ["Multi-Pax Booking", "Group Bookings", "Add-On Selection"],
  },
];

/* Image placeholder specifically sized for core component screens */
function ComponentImgSlot({
  label,
  aspect = "16/9",
  dark = false,
  minH,
}: {
  label: string;
  aspect?: string;
  dark?: boolean;
  minH?: number;
}) {
  return (
    <div style={{
      aspectRatio: aspect,
      minHeight: minH,
      borderRadius: 12,
      background: dark
        ? "linear-gradient(135deg, #0B1E3D 0%, #102A4C 100%)"
        : "#F3F4F6",
      border: dark
        ? "1px solid rgba(55,138,221,0.2)"
        : "1.5px dashed #D1D5DB",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: 16,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: dark ? "rgba(55,138,221,0.15)" : "rgba(0,0,0,0.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.9rem",
      }}>
        {dark ? "🖥" : "📷"}
      </div>
      <span style={{
        fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: dark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.28)",
        textAlign: "center",
      }}>
        {label}
      </span>
    </div>
  );
}

/* Approach card — single horizontally-scrollable card */
function ApproachCardItem({ card, index }: { card: ApproachCard; index: number }) {
  return (
    <div style={{
      minWidth: 200,
      maxWidth: 200,
      flexShrink: 0,
      borderRadius: 12,
      overflow: "hidden",
      border: card.isFinal
        ? "1.5px solid rgba(30,144,255,0.5)"
        : "1.5px solid #E5E7EB",
      background: card.isFinal
        ? "linear-gradient(160deg,#EBF5FF 0%,#F0F7FF 100%)"
        : "#FAFAFA",
      position: "relative",
    }}>
      {card.isFinal && (
        <div style={{
          position: "absolute", top: 8, right: 8,
          fontSize: "0.48rem", fontWeight: 800, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#fff",
          background: "#1E90FF", borderRadius: 100, padding: "2px 7px",
          zIndex: 1,
        }}>
          Final
        </div>
      )}

      {/* Mini image slot */}
      <div style={{
        height: 110,
        background: card.isFinal
          ? "linear-gradient(135deg,#1076BC18 0%,#1E90FF0A 100%)"
          : "rgba(0,0,0,0.04)",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderBottom: card.isFinal ? "1px solid rgba(30,144,255,0.15)" : "1px solid #EBEBEB",
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: card.isFinal ? "rgba(30,144,255,0.12)" : "rgba(0,0,0,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.75rem",
        }}>
          {card.isFinal ? "✓" : index + 1}
        </div>
      </div>

      <div style={{ padding: "10px 12px" }}>
        <div style={{
          fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.06em",
          color: card.isFinal ? "#1076BC" : "#374151",
          textTransform: "uppercase", marginBottom: 4,
        }}>
          {card.label}
        </div>
        <p style={{
          fontSize: "0.63rem", color: "#6B7280",
          lineHeight: 1.55, margin: 0,
        }}>
          {card.caption}
        </p>
      </div>
    </div>
  );
}

/* One full core component block */
function CoreComponentBlock({ comp, isLast }: { comp: CoreComponent; isLast: boolean }) {
  return (
    <div className="csl-reveal" style={{
      marginBottom: isLast ? 0 : 64,
      position: "relative",
    }}>
      {/* ── Number + Title ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 20 }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "#111827",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem", fontWeight: 900, color: "#fff",
          flexShrink: 0, marginTop: 2,
          boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        }}>
          {comp.num}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111827", margin: 0, lineHeight: 1.2 }}>
              {comp.title}
            </h3>
            <span style={{ fontSize: "0.7rem", color: "#9CA3AF", fontStyle: "italic" }}>{comp.subtitle}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
            <span style={{
              fontSize: "0.54rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#9CA3AF",
            }}>WHERE</span>
            <span style={{ fontSize: "0.7rem", color: "#4B5563", lineHeight: 1.5 }}>{comp.where}</span>
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <div style={{
        background: "#FFF5F5",
        border: "1px solid #FED7D7",
        borderRadius: 14,
        padding: "16px 18px",
        marginBottom: 20,
      }}>
        <div style={{
          fontSize: "0.54rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#E53E3E", marginBottom: 6,
        }}>
          PROBLEM
        </div>
        <p style={{ fontSize: "0.78rem", color: "#742A2A", lineHeight: 1.65, margin: 0 }}>
          {comp.problem}
        </p>
      </div>

      {/* ── BEFORE image placeholder ── */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontSize: "0.54rem", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#9CA3AF", marginBottom: 8,
        }}>
          BEFORE
        </div>
        <ComponentImgSlot label={`Before — ${comp.title}`} aspect="16/7" />
      </div>

      {/* ── WHAT I TRIED — horizontal scroll ── */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontSize: "0.54rem", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#9CA3AF", marginBottom: 10,
        }}>
          WHAT I TRIED &nbsp;
          <span style={{ fontWeight: 400, fontSize: "0.52rem", color: "#C4C4C4" }}>
            — scroll →
          </span>
        </div>
        {/* Scrollable row */}
        <div style={{
          display: "flex", gap: 12, overflowX: "auto",
          paddingBottom: 8,
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}>
          {comp.approaches.map((card, i) => (
            <ApproachCardItem key={card.label} card={card} index={i} />
          ))}
          {/* Fade hint at right edge — visual only */}
          <div style={{ minWidth: 1, flexShrink: 0 }} />
        </div>
      </div>

      {/* ── WHAT I LEARNED ── */}
      <div style={{
        background: "#F0FDF4",
        border: "1px solid #BBF7D0",
        borderRadius: 14,
        padding: "16px 18px",
        marginBottom: 20,
      }}>
        <div style={{
          fontSize: "0.54rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#16A34A", marginBottom: 6,
        }}>
          WHAT I LEARNED
        </div>
        <p style={{ fontSize: "0.78rem", color: "#14532D", lineHeight: 1.65, margin: 0 }}>
          {comp.learned}
        </p>
      </div>

      {/* ── FINAL DESIGN ── */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontSize: "0.54rem", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#1076BC", marginBottom: 8,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{
            display: "inline-block", width: 8, height: 8, borderRadius: "50%",
            background: "#1E90FF",
          }} />
          FINAL DESIGN
        </div>
        <ComponentImgSlot label={`Final design — ${comp.title}`} aspect="16/7" dark />
      </div>

      {/* ── IMPACT ── */}
      <div style={{
        display: "flex", alignItems: "flex-start", gap: 12,
        marginBottom: 16,
      }}>
        <div style={{
          width: 3, alignSelf: "stretch", background: "#1E90FF",
          borderRadius: 4, flexShrink: 0,
        }} />
        <div>
          <div style={{
            fontSize: "0.54rem", fontWeight: 800, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4,
          }}>
            IMPACT
          </div>
          <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#111827", lineHeight: 1.5, margin: 0 }}>
            {comp.impact}
          </p>
        </div>
      </div>

      {/* ── Used in ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span style={{
          fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#9CA3AF",
        }}>
          USED IN
        </span>
        {comp.usedIn.map((tag) => (
          <span key={tag} style={{
            fontSize: "0.62rem", fontWeight: 600, color: "#374151",
            background: "#F3F4F6", border: "1px solid #E5E7EB",
            borderRadius: 100, padding: "3px 10px",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Divider between blocks */}
      {!isLast && (
        <div style={{
          marginTop: 52, height: 1,
          background: "linear-gradient(90deg, transparent, #E5E7EB 30%, #E5E7EB 70%, transparent)",
        }} />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   COMPATIBILITY SHOWCASE  (auto-cycling animated reveal)
───────────────────────────────────────────────────────────────────── */
function CompatibilityShowcase() {
  const [idx,  setIdx]  = useState(0);
  const [show, setShow] = useState(true);

  const manualGo = (i: number) => {
    if (i === idx) return;
    setShow(false);
    setTimeout(() => { setIdx(i); setShow(true); }, 420);
  };

  const v = FARE_COMPAT[idx];

  return (
    <div style={{ marginTop: 28 }}>
      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ width: 3, height: 16, borderRadius: 2, background: "#1E90FF", flexShrink: 0 }} />
        <span style={{
          fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#374151",
          fontFamily: "ui-monospace, monospace",
        }}>Works across all search types</span>
      </div>

      {/* Stage */}
      <div style={{
        background: "linear-gradient(145deg, #EAF4FF 0%, #F0F8FF 60%, #E6F1FF 100%)",
        border: "1px solid rgba(30,144,255,0.18)",
        borderRadius: 20,
        padding: "24px 20px 20px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Ambient glow blob */}
        <div style={{
          position: "absolute", top: -40, left: "50%",
          transform: "translateX(-50%)",
          width: 320, height: 200,
          background: "radial-gradient(ellipse at center, rgba(30,144,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Tab pills */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 8,
          marginBottom: 20, position: "relative", zIndex: 1,
        }}>
          {FARE_COMPAT.map((item, i) => (
            <button
              key={item.label}
              onClick={() => manualGo(i)}
              style={{
                padding: "5px 14px",
                borderRadius: 100,
                border: i === idx ? "none" : "1px solid rgba(30,144,255,0.25)",
                background: i === idx ? "#1E90FF" : "rgba(255,255,255,0.6)",
                color: i === idx ? "#fff" : "#1076BC",
                fontSize: "0.6rem", fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: i === idx ? "0 2px 10px rgba(30,144,255,0.35)" : "none",
                backdropFilter: "blur(4px)",
              }}
            >{item.label}</button>
          ))}
        </div>

        {/* Animated image + caption */}
        <div style={{
          opacity: show ? 1 : 0,
          transform: show ? "scale(1) translateY(0px)" : "scale(0.97) translateY(10px)",
          filter: show ? "blur(0px)" : "blur(5px)",
          transition: show
            ? "opacity 0.48s cubic-bezier(.22,.68,0,1.2), transform 0.48s cubic-bezier(.22,.68,0,1.2), filter 0.48s ease"
            : "opacity 0.32s ease, transform 0.32s ease, filter 0.32s ease",
          position: "relative", zIndex: 1,
        }}>
          <div style={{
            borderRadius: 14, overflow: "hidden",
            boxShadow: "0 8px 40px rgba(30,144,255,0.22), 0 2px 8px rgba(0,0,0,0.07)",
            border: "1.5px solid rgba(30,144,255,0.22)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.img} alt={v.label} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* Caption row */}
          <div style={{
            marginTop: 14, display: "flex", alignItems: "center",
            justifyContent: "center", gap: 10,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#1E90FF",
              boxShadow: "0 0 8px rgba(30,144,255,0.7)",
              animation: "pulse 2s infinite",
            }} />
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827" }}>{v.label}</span>
              <span style={{ fontSize: "0.62rem", color: "#6B7280", marginLeft: 8 }}>{v.sub}</span>
            </div>
          </div>
        </div>

        {/* Step dots */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 6,
          marginTop: 16, position: "relative", zIndex: 1,
        }}>
          {FARE_COMPAT.map((_, i) => (
            <button
              key={i}
              onClick={() => manualGo(i)}
              style={{
                width: i === idx ? 20 : 6, height: 6,
                borderRadius: 100, border: "none", padding: 0,
                background: i === idx ? "#1E90FF" : "rgba(30,144,255,0.25)",
                cursor: "pointer",
                transition: "all 0.28s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FARE LISTING BLOCK  (component 1 — rich version with real images)
───────────────────────────────────────────────────────────────────── */
function FareListingBlock() {
  /* shared chrome bar — used by old design + each timeline entry */
  const ChromeBar = ({ blue = false }: { blue?: boolean }) => (
    <div style={{
      height: 34,
      background: blue ? "#DCE9F7" : "#F3F4F6",
      borderBottom: `1px solid ${blue ? "rgba(30,144,255,0.18)" : "#E5E7EB"}`,
      display: "flex", alignItems: "center", padding: "0 14px", gap: 6, flexShrink: 0,
    }}>
      {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
        <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
      ))}
      <div style={{ flex: 1, height: 14, background: "rgba(0,0,0,0.06)", borderRadius: 20, marginLeft: 8 }} />
      {blue && (
        <span style={{
          fontSize: "0.48rem", fontWeight: 800, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#fff",
          background: "#1E90FF", borderRadius: 100, padding: "2px 8px",
        }}>Shipped</span>
      )}
    </div>
  );

  return (
    <div className="csl-reveal" style={{ marginBottom: 64 }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 28 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", background: "#111827",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.25rem", fontWeight: 900, color: "#fff", flexShrink: 0,
          boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
        }}>1</div>
        <div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", margin: "0 0 4px", lineHeight: 1.2 }}>
            Fare Listing Card
          </h3>
          <p style={{ fontSize: "0.72rem", color: "#9CA3AF", margin: "0 0 8px", fontStyle: "italic" }}>
            The card agents see most often — every booking starts here.
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
            <span style={{
              fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#9CA3AF", marginTop: 2, whiteSpace: "nowrap",
            }}>WHERE</span>
            <span style={{ fontSize: "0.72rem", color: "#4B5563", lineHeight: 1.5 }}>
              Search results page. Every agent lands here. Every booking starts here.
            </span>
          </div>
        </div>
      </div>

      {/* ── Old Design ── */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#EF4444", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151",
            fontFamily: "ui-monospace, monospace",
          }}>The outdated design</span>
        </div>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "1.5px solid #E5E7EB",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}>
          <ChromeBar />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Image/Airiq/first%20core/old-design.png"
            alt="Outdated fare listing design"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div style={{
          marginTop: 10, padding: "11px 16px",
          background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 10,
          fontSize: "0.72rem", color: "#742A2A", lineHeight: 1.65,
        }}>
          <strong>Problem:</strong> Multiple fare classes, baggage rules, airline policies — all competing for attention at equal visual weight. Nothing prioritised. Agents had to read everything before they could make a single comparison.
        </div>
      </div>

      {/* ── What I Tried — vertical timeline ── */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#111827", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151",
            fontFamily: "ui-monospace, monospace",
          }}>What I Tried</span>
        </div>

        {/* Timeline container */}
        <div style={{ position: "relative", paddingLeft: 44 }}>
          {/* Vertical line — runs between first node and last node */}
          <div style={{
            position: "absolute", left: 13, top: 14, bottom: 14,
            width: 2,
            background: "linear-gradient(to bottom, #E5E7EB 0%, #E5E7EB 88%, transparent 100%)",
          }} />

          {FARE_APPROACHES.map((approach, i) => (
            <div
              key={approach.step}
              style={{
                position: "relative",
                marginBottom: i < FARE_APPROACHES.length - 1 ? 40 : 0,
              }}
            >
              {/* Node circle */}
              <div style={{
                position: "absolute",
                left: -44, top: 0,
                width: 28, height: 28, borderRadius: "50%",
                background: approach.statusBg,
                border: `2px solid ${approach.statusBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1,
                boxShadow: approach.isFinal ? "0 0 0 4px rgba(30,144,255,0.12)" : "none",
              }}>
                <span style={{
                  fontSize: approach.isFinal ? "0.75rem" : "0.62rem",
                  fontWeight: 800,
                  color: approach.statusColor,
                  lineHeight: 1,
                }}>
                  {approach.isFinal ? "✓" : i + 1}
                </span>
              </div>

              {/* Step label pill */}
              <div style={{ marginBottom: 12 }}>
                <span style={{
                  fontSize: "0.54rem", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: approach.statusColor,
                  background: approach.statusBg,
                  border: `1px solid ${approach.statusBorder}`,
                  borderRadius: 100, padding: "4px 12px",
                  display: "inline-block",
                }}>{approach.step}</span>
              </div>

              {/* Image */}
              <div style={{
                borderRadius: 14, overflow: "hidden",
                border: approach.isFinal
                  ? "2px solid rgba(30,144,255,0.48)"
                  : "1.5px solid #E5E7EB",
                boxShadow: approach.isFinal
                  ? "0 6px 32px rgba(30,144,255,0.16)"
                  : "0 3px 16px rgba(0,0,0,0.07)",
                marginBottom: 12,
              }}>
                <ChromeBar blue={approach.isFinal} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={approach.img}
                  alt={approach.heading}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Annotation */}
              <div style={{
                padding: "12px 14px",
                background: approach.isFinal ? "#F0FDF4" : "#FAFAFA",
                border: `1px solid ${approach.isFinal ? "#BBF7D0" : "#EBEBEB"}`,
                borderRadius: 10,
              }}>
                <div style={{
                  fontSize: "0.74rem", fontWeight: 700, color: "#111827", marginBottom: 4,
                }}>
                  {approach.heading}
                </div>
                <p style={{ fontSize: "0.72rem", color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
                  {approach.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Impact ── */}
      <div style={{
        marginTop: 24,
        display: "flex", alignItems: "flex-start", gap: 10,
        padding: "14px 16px",
        background: "#F9FAFB",
        border: "1px solid #E5E7EB",
        borderLeft: "3px solid #1E90FF",
        borderRadius: 10,
      }}>
        <div style={{
          fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#1E90FF",
          whiteSpace: "nowrap", marginTop: 1,
        }}>IMPACT</div>
        <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
          This one card became the template for every fare listing in the platform — one pattern extended across one-way, international, and round-trip searches.
        </p>
      </div>

      {/* ── Compatibility animated showcase ── */}
      <CompatibilityShowcase />

      {/* Divider */}
      <div style={{
        marginTop: 56, height: 1,
        background: "linear-gradient(90deg, transparent, #E5E7EB 30%, #E5E7EB 70%, transparent)",
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ITINERARY CARD BLOCK  (component 2 — old vs new, two images)
───────────────────────────────────────────────────────────────────── */
function ItineraryCardBlock() {
  const Bar = ({ tint = false }: { tint?: boolean }) => (
    <div style={{
      height: 34,
      background: tint ? "#DCE9F7" : "#F3F4F6",
      borderBottom: `1px solid ${tint ? "rgba(30,144,255,0.18)" : "#E5E7EB"}`,
      display: "flex", alignItems: "center", padding: "0 14px", gap: 6,
    }}>
      {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
        <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
      ))}
      <div style={{ flex: 1, height: 13, background: "rgba(0,0,0,0.06)", borderRadius: 20, marginLeft: 8 }} />
      {tint && (
        <span style={{
          fontSize: "0.48rem", fontWeight: 800, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#fff",
          background: "#1E90FF", borderRadius: 100, padding: "2px 8px",
        }}>Redesigned</span>
      )}
    </div>
  );

  return (
    <div className="csl-reveal" style={{ marginBottom: 64 }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 28 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", background: "#111827",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.25rem", fontWeight: 900, color: "#fff", flexShrink: 0,
          boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
        }}>2</div>
        <div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", margin: "0 0 4px", lineHeight: 1.2 }}>
            Itinerary Card
          </h3>
          <p style={{ fontSize: "0.72rem", color: "#9CA3AF", margin: "0 0 8px", fontStyle: "italic" }}>
            One card saves everyone 5 mins per conversation.
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
            <span style={{
              fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#9CA3AF", marginTop: 2, whiteSpace: "nowrap",
            }}>WHERE</span>
            <span style={{ fontSize: "0.72rem", color: "#4B5563", lineHeight: 1.5 }}>
              Booking confirmation flow. Agents share this directly with clients on a call.
            </span>
          </div>
        </div>
      </div>

      {/* ── The Problem + Old Design ── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#EF4444", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151", fontFamily: "ui-monospace, monospace",
          }}>The Problem</span>
        </div>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "1.5px solid #FED7D7",
          boxShadow: "0 4px 20px rgba(239,68,68,0.07)",
        }}>
          <Bar />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/Second%20core/old.png" alt="Old itinerary design" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <div style={{
          marginTop: 10, padding: "12px 16px",
          background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 10,
          fontSize: "0.72rem", color: "#742A2A", lineHeight: 1.65,
        }}>
          Agents had to scan multiple scattered sections to understand journey details — leading to confusion and slower decision-making on calls with clients.
        </div>
      </div>

      {/* ── Transition ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <div style={{ flex: 1, height: 1, background: "#F3F4F6" }} />
        <div style={{
          fontSize: "0.56rem", fontWeight: 700, color: "#9CA3AF",
          letterSpacing: "0.1em", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span>↓</span><span>Then I redesigned it</span><span>↓</span>
        </div>
        <div style={{ flex: 1, height: 1, background: "#F3F4F6" }} />
      </div>

      {/* ── What I Learned ── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#111827", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151", fontFamily: "ui-monospace, monospace",
          }}>What I Learned</span>
        </div>
        <div style={{
          background: "#F8F9FA", border: "1px solid #E9ECEF",
          borderRadius: 14, padding: "20px 20px 16px",
        }}>
          <div style={{
            fontSize: "2rem", color: "#D1D5DB", fontFamily: "Georgia, serif",
            lineHeight: 1, marginBottom: 6, marginTop: -6,
          }}>&ldquo;</div>
          <p style={{
            fontSize: "0.82rem", color: "#374151", lineHeight: 1.75,
            fontStyle: "italic", margin: "0 0 14px",
          }}>
            Agents read this card on a phone call with a client. They need to confirm route, dates, and time in under 5 seconds — not navigate through scattered sections. The card had to do one job, perfectly.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["Route at a glance", "Dates + times grouped", "Flat — nothing collapsed"].map((tag) => (
              <span key={tag} style={{
                fontSize: "0.6rem", fontWeight: 600, color: "#374151",
                background: "#fff", border: "1px solid #E5E7EB",
                borderRadius: 100, padding: "3px 10px",
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── The New Design ── */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#1E90FF", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151", fontFamily: "ui-monospace, monospace",
          }}>The New Design</span>
        </div>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "2px solid rgba(30,144,255,0.45)",
          boxShadow: "0 6px 32px rgba(30,144,255,0.15)",
          marginBottom: 14,
        }}>
          <Bar tint />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/Second%20core/new.png" alt="Redesigned itinerary card" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* How it works */}
        <div style={{
          background: "#F0FDF4", border: "1px solid #BBF7D0",
          borderRadius: 12, padding: "14px 16px",
        }}>
          <div style={{
            fontSize: "0.54rem", fontWeight: 800, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#16A34A", marginBottom: 12,
          }}>How it works</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Segment at a glance",      detail: "Origin → destination in one clear row. No scrolling to find the route."                              },
              { label: "Dates + times grouped",     detail: "Departure and arrival sit side-by-side — not buried across separate sections."                      },
              { label: "Flat, single-card format",  detail: "Everything an agent needs to confirm on a call is visible in one frame. Nothing collapsed."         },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: "#DCFCE7", border: "1.5px solid #86EFAC",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.55rem", flexShrink: 0, marginTop: 1,
                  color: "#16A34A", fontWeight: 800,
                }}>✓</div>
                <div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#111827" }}>{item.label} — </span>
                  <span style={{ fontSize: "0.72rem", color: "#4B5563", lineHeight: 1.6 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Impact ── */}
      <div style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        padding: "14px 16px",
        background: "#F9FAFB", border: "1px solid #E5E7EB",
        borderLeft: "3px solid #1E90FF", borderRadius: 10,
      }}>
        <div style={{
          fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#1E90FF", whiteSpace: "nowrap", marginTop: 1,
        }}>IMPACT</div>
        <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
          Enabled quick understanding of the journey at a glance — agents could confirm route, dates, and stopovers with clients in seconds, reducing effort and improving task speed on every booking call.
        </p>
      </div>

      {/* Divider */}
      <div style={{
        marginTop: 56, height: 1,
        background: "linear-gradient(90deg, transparent, #E5E7EB 30%, #E5E7EB 70%, transparent)",
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   REVIEW TABLE BLOCK  (component 3 — old vs new, two images)
───────────────────────────────────────────────────────────────────── */
function ReviewTableBlock() {
  const Bar = ({ tint = false }: { tint?: boolean }) => (
    <div style={{
      height: 34,
      background: tint ? "#DCE9F7" : "#F3F4F6",
      borderBottom: `1px solid ${tint ? "rgba(30,144,255,0.18)" : "#E5E7EB"}`,
      display: "flex", alignItems: "center", padding: "0 14px", gap: 6,
    }}>
      {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
        <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
      ))}
      <div style={{ flex: 1, height: 13, background: "rgba(0,0,0,0.06)", borderRadius: 20, marginLeft: 8 }} />
      {tint && (
        <span style={{
          fontSize: "0.48rem", fontWeight: 800, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#fff",
          background: "#1E90FF", borderRadius: 100, padding: "2px 8px",
        }}>Redesigned</span>
      )}
    </div>
  );

  return (
    <div className="csl-reveal" style={{ marginBottom: 64 }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 28 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", background: "#111827",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.25rem", fontWeight: 900, color: "#fff", flexShrink: 0,
          boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
        }}>3</div>
        <div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", margin: "0 0 4px", lineHeight: 1.2 }}>
            Review Table View
          </h3>
          <p style={{ fontSize: "0.72rem", color: "#9CA3AF", margin: "0 0 8px", fontStyle: "italic" }}>
            The 80% empty problem — solved.
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
            <span style={{
              fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#9CA3AF", marginTop: 2, whiteSpace: "nowrap",
            }}>WHERE</span>
            <span style={{ fontSize: "0.72rem", color: "#4B5563", lineHeight: 1.5 }}>
              Final review screen — the last checkpoint before a ticket is issued.
            </span>
          </div>
        </div>
      </div>

      {/* ── The Problem + Old Design ── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#EF4444", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151", fontFamily: "ui-monospace, monospace",
          }}>The Problem</span>
        </div>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "1.5px solid #FED7D7",
          boxShadow: "0 4px 20px rgba(239,68,68,0.07)",
        }}>
          <Bar />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/third%20core/old.png" alt="Old review table design" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <div style={{
          marginTop: 10, padding: "12px 16px",
          background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 10,
          fontSize: "0.72rem", color: "#742A2A", lineHeight: 1.65,
        }}>
          The previous table had excessive empty states and poor data density — making it feel incomplete and harder for agents to review critical information before submitting.
        </div>
      </div>

      {/* ── Transition ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <div style={{ flex: 1, height: 1, background: "#F3F4F6" }} />
        <div style={{
          fontSize: "0.56rem", fontWeight: 700, color: "#9CA3AF",
          letterSpacing: "0.1em", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span>↓</span><span>Then I redesigned it</span><span>↓</span>
        </div>
        <div style={{ flex: 1, height: 1, background: "#F3F4F6" }} />
      </div>

      {/* ── What I Learned ── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#111827", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151", fontFamily: "ui-monospace, monospace",
          }}>What I Learned</span>
        </div>
        <div style={{
          background: "#F8F9FA", border: "1px solid #E9ECEF",
          borderRadius: 14, padding: "20px 20px 16px",
        }}>
          <div style={{
            fontSize: "2rem", color: "#D1D5DB", fontFamily: "Georgia, serif",
            lineHeight: 1, marginBottom: 6, marginTop: -6,
          }}>&ldquo;</div>
          <p style={{
            fontSize: "0.82rem", color: "#374151", lineHeight: 1.75,
            fontStyle: "italic", margin: "0 0 14px",
          }}>
            Empty cells aren&apos;t neutral — they signal broken data to anyone reading the table. Agents were second-guessing information that was actually correct, just poorly presented. The fix wasn&apos;t adding data, it was removing the visual noise around it.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["Density over emptiness", "Explicit empty states", "Grouped hierarchy"].map((tag) => (
              <span key={tag} style={{
                fontSize: "0.6rem", fontWeight: 600, color: "#374151",
                background: "#fff", border: "1px solid #E5E7EB",
                borderRadius: 100, padding: "3px 10px",
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── The New Design ── */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#1E90FF", flexShrink: 0 }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151", fontFamily: "ui-monospace, monospace",
          }}>The New Design</span>
        </div>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "2px solid rgba(30,144,255,0.45)",
          boxShadow: "0 6px 32px rgba(30,144,255,0.15)",
          marginBottom: 14,
        }}>
          <Bar tint />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/third%20core/new.png" alt="Redesigned review table" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* How it works */}
        <div style={{
          background: "#F0FDF4", border: "1px solid #BBF7D0",
          borderRadius: 12, padding: "14px 16px",
        }}>
          <div style={{
            fontSize: "0.54rem", fontWeight: 800, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#16A34A", marginBottom: 12,
          }}>How it works</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Optimised data density",    detail: "Every cell earns its place. Redundant columns removed, key fields promoted to primary visibility."      },
              { label: "Explicit empty states",      detail: "No blank cells — missing data shows a clear dash or placeholder so agents know it&apos;s intentional, not broken." },
              { label: "Grouped headers + hierarchy",detail: "Related fields cluster under shared headers — agents scan by section, not by hunting across the full row."  },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: "#DCFCE7", border: "1.5px solid #86EFAC",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.55rem", flexShrink: 0, marginTop: 1,
                  color: "#16A34A", fontWeight: 800,
                }}>✓</div>
                <div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#111827" }}>{item.label} — </span>
                  <span style={{ fontSize: "0.72rem", color: "#4B5563", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Impact ── */}
      <div style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        padding: "14px 16px",
        background: "#F9FAFB", border: "1px solid #E5E7EB",
        borderLeft: "3px solid #1E90FF", borderRadius: 10,
      }}>
        <div style={{
          fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#1E90FF", whiteSpace: "nowrap", marginTop: 1,
        }}>IMPACT</div>
        <p style={{ fontSize: "0.76rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
          Improved scan efficiency and ensured agents could review all critical details quickly and confidently before submission — zero ambiguity at the most important step in the booking flow.
        </p>
      </div>

      {/* Divider */}
      <div style={{
        marginTop: 56, height: 1,
        background: "linear-gradient(90deg, transparent, #E5E7EB 30%, #E5E7EB 70%, transparent)",
      }} />
    </div>
  );
}

function CoreComponentsSection() {
  return (
    <CsSection id="insights">
      {/* Section header */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <div style={{
          fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "#1E90FF",
          fontFamily: "ui-monospace, monospace", marginBottom: 10,
        }}>
          04
        </div>
        <h2 style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900,
          color: "#111827", margin: 0, lineHeight: 1.15,
          letterSpacing: "-0.03em", marginBottom: 12,
        }}>
          4 Core Components<br />That Fixed The Flow
        </h2>
        <p style={{
          fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7,
          maxWidth: 520, margin: 0,
        }}>
          Every design went through multiple directions before landing. Here&apos;s what I tried, what I scrapped, and the component that shipped.
        </p>
      </div>

      {/* Component 1 — Fare Listing Card */}
      <FareListingBlock />

      {/* Component 2 — Itinerary Card */}
      <ItineraryCardBlock />

      {/* Component 3 — Review Table */}
      <ReviewTableBlock />

      {/* Component 4 — generic block (images to be added later) */}
      {CORE_COMPONENTS.map((comp, i) => (
        <CoreComponentBlock key={comp.num} comp={comp} isLast={i === CORE_COMPONENTS.length - 1} />
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  THE PRODUCT
───────────────────────────────────────────────────────────────────── */
function TheProductSection() {
  const flows = [
    {
      label: "Search & Results",
      desc: "Real-time fare grid with 15+ filters. Price hierarchy, multi-trip variants, and saved searches — all above the fold.",
    },
    {
      label: "Itinerary Builder",
      desc: "Multi-leg itinerary with per-passenger rules, date locks, and cabin class selection built into one condensed timeline.",
    },
    {
      label: "Review & Confirm",
      desc: "Inline mismatch warnings surface before payment. Agents resolve edge cases without leaving the screen.",
    },
    {
      label: "Booking Dashboard",
      desc: "Status, agent performance, and booking history in a single pane. No more jumping between tools.",
    },
  ];

  return (
    <CsSection id="product">
      <CsSectionHeader
        num="05"
        title="The Product"
        sub="20+ screens shipped across 5 flows. One platform, every booking."
      />

      {/* Wide hero strip */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <div style={{
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid #E5E7EB",
          boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
        }}>
          <div style={{
            height: 36,
            background: "#F3F4F6",
            borderBottom: "1px solid #E5E7EB",
            display: "flex", alignItems: "center", padding: "0 14px", gap: 6,
          }}>
            {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
              <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
            ))}
            <div style={{ flex: 1, height: 13, background: "rgba(0,0,0,0.06)", borderRadius: 20, marginLeft: 8 }} />
          </div>
          <CsImg
            label="Air IQ — full platform overview"
            aspect="16/7"
            icon="✈️"
            sub="Complete booking platform · 5 flows · 20+ screens"
          />
        </div>
      </div>

      {/* Flow grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 14,
      }}>
        {flows.map((f, i) => (
          <div key={f.label} className={`csl-reveal rd${i}`} style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
          }}>
            <CsImg label={f.label} aspect="16/9" icon="🖥️" sub="Hi-fi screen" />
            <div style={{ padding: "14px 16px" }}>
              <div style={{
                fontSize: "0.74rem", fontWeight: 700, color: "#111827", marginBottom: 4,
              }}>{f.label}</div>
              <p style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Figma CTA */}
      <div className="csl-reveal" style={{ marginTop: 24 }}>
        <a className="csl-btn-primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
          View full prototype in Figma ↗
        </a>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  RESULTS
───────────────────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <CsSection id="results">
      <CsSectionHeader num="06" title="The Impact" />

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
      <CsSectionHeader num="07" title="Learnings" sub="What this project taught me about designing for real-world, complex B2B workflows." />

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
      <CoreComponentsSection />
      <TheProductSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
