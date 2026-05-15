"use client";

import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";
import { airFigmaLinks } from "./airIqData";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",       label: "Overview"          },
  { id: "problem",        label: "The Problem"        },
  { id: "approach",       label: "Research & Approach"},
  { id: "insights",       label: "Core Components"    },
  { id: "product",        label: "The Product"        },
  { id: "design-system",  label: "Design System"      },
  { id: "results",        label: "Results"            },
  { id: "learnings",      label: "Learnings"          },
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
   COUNT-UP — viewport-triggered number animation
───────────────────────────────────────────────────────────────────── */
function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val}</span>;
}

/* ─────────────────────────────────────────────────────────────────────
   FLIGHT SEARCH DEMO (hero right panel)
───────────────────────────────────────────────────────────────────── */
type FlightPhase = "typing" | "searching" | "result";

const AIRLINES = [
  { code: "6E-241", name: "IndiGo",    abbr: "6E", logoColor: "#fff", logoBg: "#4B1FBF", dep: "06:15", arr: "08:20", dur: "2h 05m", price: "3,180", tag: "Cheapest",   tagColor: "#059669", tagBg: "#ECFDF5" },
  { code: "AI-646", name: "Air India", abbr: "AI", logoColor: "#fff", logoBg: "#C41E3A", dep: "09:30", arr: "11:35", dur: "2h 05m", price: "4,210", tag: "",          tagColor: "",        tagBg: ""         },
  { code: "SG-816", name: "SpiceJet",  abbr: "SG", logoColor: "#fff", logoBg: "#E05A00", dep: "12:45", arr: "14:55", dur: "2h 10m", price: "3,459", tag: "",          tagColor: "",        tagBg: ""         },
  { code: "UK-917", name: "Vistara",   abbr: "UK", logoColor: "#fff", logoBg: "#5B21B6", dep: "17:00", arr: "19:10", dur: "2h 10m", price: "5,890", tag: "Top Rated", tagColor: "#7C3AED", tagBg: "#F5F3FF"  },
];

function FlightRow({ f, delay }: { f: typeof AIRLINES[0]; delay: number }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "9px 14px", borderBottom: "1px solid #F3F4F6",
      animation: `fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) ${delay}ms both`,
    }}>
      {/* Logo */}
      <div style={{
        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
        background: f.logoBg, display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: "0.58rem", fontWeight: 900, color: f.logoColor,
        letterSpacing: "-0.01em",
      }}>{f.abbr}</div>

      {/* Airline + code */}
      <div style={{ minWidth: 72 }}>
        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>{f.name}</div>
        <div style={{ fontSize: "0.58rem", color: "#9CA3AF" }}>{f.code}</div>
      </div>

      {/* Times */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>{f.dep}</span>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <span style={{ fontSize: "0.52rem", color: "#9CA3AF" }}>{f.dur}</span>
          <div style={{ width: "100%", height: 1, background: "#E5E7EB", position: "relative" }}>
            <span style={{ position: "absolute", right: -4, top: "50%", transform: "translateY(-50%)", fontSize: "0.58rem", color: "#6B7280" }}>✈</span>
          </div>
          <span style={{ fontSize: "0.48rem", color: "#10B981", fontWeight: 600, letterSpacing: "0.05em" }}>NON-STOP</span>
        </div>
        <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>{f.arr}</span>
      </div>

      {/* Price + tag */}
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>₹{f.price}</div>
        {f.tag ? (
          <span style={{ fontSize: "0.5rem", fontWeight: 700, color: f.tagColor, background: f.tagBg, borderRadius: 4, padding: "1px 5px" }}>{f.tag}</span>
        ) : (
          <button style={{ fontSize: "0.55rem", fontWeight: 700, color: "#1E90FF", background: "#EFF6FF", border: "none", borderRadius: 4, padding: "2px 7px", cursor: "pointer" }}>Book</button>
        )}
      </div>
    </div>
  );
}

function FlightSearchDemo() {
  const ROUTE = "Delhi → Mumbai";
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<FlightPhase>("typing");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (chars < ROUTE.length) {
        t = setTimeout(() => setChars((c) => c + 1), 60);
      } else {
        t = setTimeout(() => setPhase("searching"), 600);
      }
    } else if (phase === "searching") {
      t = setTimeout(() => setPhase("result"), 1600);
    } else {
      t = setTimeout(() => { setChars(0); setPhase("typing"); }, 7000);
    }
    return () => clearTimeout(t);
  }, [phase, chars]);

  const isActive = phase !== "typing" || chars >= ROUTE.length;

  return (
    <div style={{ width: "100%", fontFamily: "inherit" }}>
      <div style={{
        background: "#fff", border: "1.5px solid #E5E7EB",
        borderRadius: 18, overflow: "hidden",
      }}>

        {/* ── Header bar ── */}
        <div style={{ padding: "14px 14px 10px", borderBottom: "1px solid #F3F4F6" }}>

          {/* Route row */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
            <div style={{
              flex: 1, height: 42,
              background: "#F9FAFB",
              border: `1.5px solid ${phase === "typing" ? "#1E90FF" : "#E5E7EB"}`,
              borderRadius: 10, display: "flex", alignItems: "center",
              padding: "0 14px", fontSize: "0.9rem", fontWeight: 700, color: "#111827",
              letterSpacing: "-0.01em", transition: "border-color 0.3s",
            }}>
              {ROUTE.slice(0, chars)}
              {phase === "typing" && (
                <span style={{
                  display: "inline-block", width: 2, height: "1em",
                  background: "#1E90FF", marginLeft: 2, verticalAlign: "middle",
                  animation: "cslCursorBlink 0.9s ease infinite",
                }} />
              )}
              {phase !== "typing" && chars === 0 && (
                <span style={{ color: "#9CA3AF", fontWeight: 500 }}>Where do you want to fly?</span>
              )}
            </div>
            <button style={{
              height: 42, padding: "0 16px", border: "none", borderRadius: 10,
              background: isActive ? "#1E90FF" : "#BFDBFE",
              fontSize: "0.75rem", fontWeight: 700, color: "#fff",
              cursor: "pointer", transition: "background 0.4s", whiteSpace: "nowrap",
              display: "flex", alignItems: "center", gap: 5,
            }}>
              ✈ Search
            </button>
          </div>

          {/* Filter chips */}
          <div style={{ display: "flex", gap: 6 }}>
            {["31 Dec 2026", "1 Adult", "Economy"].map((c) => (
              <span key={c} style={{
                fontSize: "0.62rem", fontWeight: 600, color: "#374151",
                background: "#F3F4F6", border: "1px solid #E5E7EB",
                borderRadius: 6, padding: "3px 10px",
              }}>{c}</span>
            ))}
          </div>
        </div>

        {/* ── Results area (fixed height) ── */}
        <div style={{ height: 244, overflow: "hidden" }}>

          {/* Searching — skeleton */}
          {phase === "searching" && (
            <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontSize: "0.62rem", color: "#6B7280", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                Checking 3 GDS sources…
              </div>
              <div style={{ height: 3, background: "#F3F4F6", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", background: "linear-gradient(90deg,#1E90FF,#60B0FF)", animation: "cslLoadBar 1.5s ease-out forwards" }} />
              </div>
              {[1,2,3,4].map((i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F3F4F6", animation: "cslPulse 1.2s ease infinite", animationDelay: `${i * 0.1}s` }} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ height: 10, borderRadius: 4, background: "#F3F4F6", width: "60%", animation: "cslPulse 1.2s ease infinite", animationDelay: `${i * 0.12}s` }} />
                    <div style={{ height: 8, borderRadius: 4, background: "#F3F4F6", width: "35%", animation: "cslPulse 1.2s ease infinite", animationDelay: `${i * 0.14}s` }} />
                  </div>
                  <div style={{ width: 44, height: 18, borderRadius: 4, background: "#F3F4F6", animation: "cslPulse 1.2s ease infinite" }} />
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          {phase === "result" && (
            <div>
              <div style={{ padding: "8px 14px 4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  4 flights found · DEL → BOM
                </span>
                <span style={{ fontSize: "0.58rem", color: "#1E90FF", fontWeight: 600 }}>Sort: Price ↑</span>
              </div>
              {AIRLINES.map((f, i) => <FlightRow key={f.code} f={f} delay={i * 80} />)}
            </div>
          )}

          {/* Typing idle */}
          {phase === "typing" && (
            <div style={{
              height: "100%", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 8,
            }}>
              <span style={{ fontSize: "1.4rem" }}>✈</span>
              <span style={{ fontSize: "0.68rem", color: "#9CA3AF", fontWeight: 500 }}>
                Type a route to search flights
              </span>
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
    <div className="csl-hero csl-hero--light">
      {/* Blue dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(30,144,255,0.13) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }} />
      <div className="csl-hero-inner">
        {/* Left */}
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E90FF", display: "inline-block", animation: "pulse 2s infinite" }} />
            Live in Production &nbsp;·&nbsp; B2B SaaS &nbsp;·&nbsp; Travel
          </div>
          <h1 className="csl-hero-title">
            <span>AIR</span>
            <span style={{ color: "#1E90FF" }}> iQ</span>
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
        {/* Right — flight search demo */}
        <div className="csl-hero-right">
          <FlightSearchDemo />
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
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <div style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 24, minHeight: "1.4em" }}>
          <Typed text="One platform. Every flight. Every agent." delay={200} />
        </div>
        <p className="csl-text">
          Travel agencies across India were booking flights on <Hi>3+ disconnected tools</Hi>, with no unified view, no error prevention, and no system backing them up. Each booking took <Hi>12+ minutes</Hi> on average — full of manual re-entry and guesswork.
        </p>
        <p className="csl-text">
          The goal: design a <Hi>single B2B portal</Hi> that gives travel agents and back-office admins everything they need — fast search, clean data, passenger management, and a confirmation flow that actually prevents errors.
        </p>
      </div>

      <div className="csl-reveal" style={{ marginBottom: 8 }}>
        <JourneyTimeline />
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
    solvedBy: "Unified platform",
  },
  {
    title: "Fare rules you couldn't trust",
    scene: "Refundability lived in a wall of legal text — no summary, no highlights, no visual indicator. Agents guessed. Sometimes they guessed wrong and the client got incorrect information.",
    tag: "High error risk on every booking",
    solvedBy: "Fare Listing Card",
  },
  {
    title: "Sharing a fare: 4 steps minimum",
    scene: "Copy the price. Open email. Write the passenger's name. Attach a PDF. Send. Then answer the follow-up call because the client didn't understand the format. A 30-second task became a 5-minute one.",
    tag: "No quick share flow existed",
    solvedBy: "Itinerary Card",
  },
  {
    title: "Errors surfaced at payment",
    scene: "Name mismatch, wrong fare class, expired passport — none of it was caught until the final step. By then, re-booking fees applied and the agent had to start over with a frustrated client on hold.",
    tag: "Zero validation before confirmation",
    solvedBy: "Review Table View",
  },
];

function ProblemSection() {
  return (
    <CsSection id="problem">
      <CsSectionHeader
        title="Booking a flight shouldn't feel like solving a puzzle."
        sub="Yet in the existing system, that was the reality. Agents were spending 12+ minutes per booking — not because the task was complex, but because the interface made it complex."
      />

      <div className="csl-reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {PAIN_MOMENTS.map((m) => (
          <div key={m.title} style={{
            borderLeft: "3px solid #1E90FF",
            paddingLeft: 18,
          }}>
            <p className="csl-h3" style={{ marginBottom: 6 }}>{m.title}</p>
            <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.65, margin: "0 0 10px" }}>
              {m.scene}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "0.7rem", color: "#9CA3AF", fontWeight: 500 }}>Fixed by</span>
              <span style={{
                fontSize: "0.72rem", fontWeight: 700, color: "#1E90FF",
                background: "#EFF6FF", borderRadius: 6, padding: "3px 10px",
              }}>{m.solvedBy}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Agent quote — pull quote */}
      <div className="csl-reveal" style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid #F3F4F6" }}>
        <span className="csl-eyebrow">In their own words</span>
        <div style={{
          background: "#F8FAFF", borderRadius: 16, padding: "28px 28px 24px",
          position: "relative", marginTop: 12,
        }}>
          <span style={{
            position: "absolute", top: 8, left: 18,
            fontSize: "4.5rem", color: "#BFDBFE", lineHeight: 1,
            fontFamily: "Georgia, serif", userSelect: "none",
          }}>&ldquo;</span>
          <p style={{
            fontSize: "1.15rem", fontWeight: 600, color: "#111827",
            lineHeight: 1.7, margin: "20px 0 14px", paddingLeft: 4,
          }}>
            I open three windows just to check one fare. GDS for availability, the airline site for the rules, and a spreadsheet to track what I&apos;ve already told the client.
          </p>
          <span style={{ fontSize: "0.78rem", color: "#9CA3AF", fontWeight: 500 }}>
            Senior travel agent — pre-launch interview
          </span>
        </div>
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
      <span className="csl-eyebrow">Platforms studied</span>
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
      <div style={{ marginTop: 28 }}>
        <span className="csl-eyebrow">Key findings</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {KEY_FINDINGS.map((text, i) => {
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "28px 1fr",
                gap: "0 14px", alignItems: "start",
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: "#EFF6FF", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "0.68rem", fontWeight: 900, color: "#1E90FF",
                  flexShrink: 0, marginTop: 1,
                }}>0{i + 1}</span>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                  {parts.map((part, j) =>
                    j % 2 === 1
                      ? <strong key={j} style={{ color: "#111827", fontWeight: 700 }}>{part}</strong>
                      : <span key={j}>{part}</span>
                  )}
                </p>
              </div>
            );
          })}
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
        title="Research & Approach"
        sub="Four competitor platforms studied before a single wireframe was drawn."
      />

      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <CompetitiveCarousel />
      </div>

      {/* Research → Design bridge */}
      <div className="csl-reveal" style={{ marginBottom: 8 }}>
        <span className="csl-eyebrow">What research told us to design</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              insight: "Price and refundability must land in the same scan — not one click apart",
              decision: "Fare Listing Card: price hierarchy first, refund badge always visible inline",
            },
            {
              insight: "Agents confirm journey details verbally while the client waits on the other line",
              decision: "Itinerary Card: single-glance route, dates, and times — nothing collapsed or hidden",
            },
            {
              insight: "Errors found late cost re-booking fees and client trust — not just time",
              decision: "Review Table: dense, explicit, zero blank cells before the agent submits",
            },
          ].map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "28px 1fr",
              gap: "0 14px", alignItems: "start",
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: 8,
                background: "#EFF6FF", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "0.68rem", fontWeight: 900, color: "#1E90FF",
                flexShrink: 0, marginTop: 2,
              }}>0{i + 1}</span>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", margin: "0 0 4px", lineHeight: 1.5 }}>
                  {r.insight}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#1076BC", margin: 0 }}>
                  → {r.decision}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  CORE COMPONENTS
───────────────────────────────────────────────────────────────────── */

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
      <span className="csl-eyebrow">Works across all search types</span>

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
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", margin: "0 0 6px", lineHeight: 1.2 }}>
          Fare Listing Card
        </h3>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
          The card agents see most often — search results page, every booking starts here.
        </p>
      </div>

      {/* ── Old Design ── */}
      <div style={{ marginBottom: 36 }}>
        <span className="csl-eyebrow">The outdated design</span>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "1px solid #E5E7EB",
        }}>
          <ChromeBar />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Image/Airiq/first%20core/old-design.png"
            alt="Outdated fare listing design"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ marginTop: 12, fontSize: "1.05rem", color: "#374151", lineHeight: 1.75 }}>
          Multiple fare classes, baggage rules, airline policies — all competing at equal visual weight. Nothing prioritised. Agents had to read everything before making a single comparison.
        </p>
      </div>

      {/* ── What I Tried — vertical timeline ── */}
      <div>
        <span className="csl-eyebrow" style={{ marginBottom: 24 }}>What I tried</span>

        {/* Timeline container */}
        <div style={{ position: "relative", paddingLeft: 44 }}>
          {/* Vertical line — runs between first node and last node */}
          <div style={{
            position: "absolute", left: 13, top: 14, bottom: 14,
            width: 2,
            background: "linear-gradient(to bottom, #E5E7EB 0%, #E5E7EB 88%, transparent 100%)",
          }} />

          {FARE_APPROACHES.slice(0, 2).map((approach, i) => (
            <div
              key={approach.step}
              style={{
                position: "relative",
                marginBottom: i < 1 ? 40 : 0,
              }}
            >
              {/* Node dot */}
              <div style={{
                position: "absolute",
                left: -44, top: 6,
                width: 12, height: 12, borderRadius: "50%",
                background: "#D1D5DB",
                zIndex: 1,
              }} />

              {/* Step label */}
              <span className="csl-eyebrow" style={{ marginBottom: 8 }}>{approach.step}</span>

              {/* Image */}
              <div style={{
                borderRadius: 14, overflow: "hidden",
                border: "1px solid #E5E7EB",
                marginBottom: 12,
              }}>
                <ChromeBar />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={approach.img}
                  alt={approach.heading}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Annotation */}
              <div>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  {approach.heading}
                </p>
                <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
                  {approach.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Final Design — home-page grid row (image 65% | content 35%) ── */}
      <div style={{ marginTop: 32 }}>
        <span className="csl-eyebrow">Final Design</span>
        <div className="cs-imgrow">
          {/* Visual (65%) */}
          <div className="cs-imgrow__visual" style={{
            borderRadius: 14, overflow: "hidden",
            border: "1.5px solid rgba(30,144,255,0.3)",
            boxShadow: "0 8px 32px rgba(30,144,255,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}>
            <ChromeBar blue />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Airiq/first%20core/final.png" alt="Final fare listing design" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* Content (35%) */}
          <div className="cs-imgrow__content">
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em",
              color: "#059669", background: "#ECFDF5", border: "1px solid #6EE7B7",
              borderRadius: 100, padding: "4px 12px", marginBottom: 12,
            }}>✦ Shipped</span>
            <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", margin: "0 0 10px", lineHeight: 1.35 }}>
              Price hierarchy first. Everything else at a glance.
            </p>
            <p style={{ fontSize: "0.94rem", color: "#4B5563", lineHeight: 1.75, margin: "0 0 20px" }}>
              Price and time dominate the scan path. Refundability, baggage allowance, and seat count are visible without expanding or hovering. Fare class icons map to symbols agents already recognise. Scan once, compare, decide, book.
            </p>
            <div>
              <span className="csl-eyebrow">Impact</span>
              <p style={{ fontSize: "0.94rem", color: "#374151", lineHeight: 1.8, margin: 0 }}>
                This one card became the template for every fare listing in the platform — one pattern extended across one-way, international, and round-trip searches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Compatibility animated showcase ── */}
      <CompatibilityShowcase />

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
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", margin: "0 0 6px", lineHeight: 1.2 }}>
          Itinerary Card
        </h3>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
          One card saves everyone 5 mins per conversation — agents share this directly with clients on a call.
        </p>
      </div>

      {/* ── The Problem + Old Design ── */}
      <div style={{ marginBottom: 28 }}>
        <span className="csl-eyebrow">The outdated design</span>
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E5E7EB" }}>
          <Bar />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/Second%20core/old.png" alt="Old itinerary design" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ marginTop: 12, fontSize: "1.05rem", color: "#374151", lineHeight: 1.75 }}>
          Agents had to scan multiple scattered sections to understand journey details — leading to confusion and slower decision-making on calls with clients.
        </p>
      </div>

      {/* ── What I Learned ── */}
      <div style={{ marginBottom: 28 }}>
        <span className="csl-eyebrow">What I learned</span>
        <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "#111827", lineHeight: 1.7, margin: 0 }}>
          Agents read this card on a phone call with a client. They need to confirm route, dates, and time in under 5 seconds — not navigate through scattered sections. The card had to do one job, perfectly.
        </p>
      </div>

      {/* ── The New Design — reversed grid (content 35% | image 65%) ── */}
      <div>
        <span className="csl-eyebrow">The redesign</span>
        <div className="cs-imgrow cs-imgrow--rev">
          {/* Content (35% — left because reversed) */}
          <div className="cs-imgrow__content">
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em",
              color: "#1076BC", background: "#E8F2FB", border: "1px solid #BFDBFE",
              borderRadius: 100, padding: "4px 12px", marginBottom: 14,
            }}>◉ Redesigned</span>
            {[
              { label: "Segment at a glance",     detail: "Origin → destination in one clear row. No scrolling to find the route." },
              { label: "Dates + times grouped",    detail: "Departure and arrival sit side-by-side — not buried across separate sections." },
              { label: "Flat, single-card format", detail: "Everything an agent needs on a call is visible in one frame. Nothing collapsed." },
            ].map((item) => (
              <p key={item.label} style={{ fontSize: "0.94rem", color: "#374151", lineHeight: 1.75, margin: "0 0 10px" }}>
                <strong style={{ color: "#111827", fontWeight: 700 }}>{item.label}</strong> — {item.detail}
              </p>
            ))}
            <div style={{ marginTop: 8 }}>
              <span className="csl-eyebrow">Impact</span>
              <p style={{ fontSize: "0.94rem", color: "#374151", lineHeight: 1.8, margin: 0 }}>
                Agents stopped fumbling for details mid-call. Route, class, and times confirmed in under 5 seconds — down from navigating 3 scattered sections.
              </p>
            </div>
          </div>

          {/* Visual (65% — right because reversed) */}
          <div className="cs-imgrow__visual" style={{
            borderRadius: 16, overflow: "hidden",
            border: "1.5px solid rgba(30,144,255,0.3)",
            boxShadow: "0 8px 32px rgba(30,144,255,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}>
            <Bar tint />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Airiq/Second%20core/new.png" alt="Redesigned itinerary card" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </div>

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
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", margin: "0 0 6px", lineHeight: 1.2 }}>
          Review Table View
        </h3>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
          Final review screen — the last checkpoint before a ticket is issued.
        </p>
      </div>

      {/* ── The Problem + Old Design ── */}
      {/* ── The Problem + Old Design ── */}
      <div style={{ marginBottom: 28 }}>
        <span className="csl-eyebrow">The outdated design</span>
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E5E7EB" }}>
          <Bar />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/third%20core/old.png" alt="Old review table design" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ marginTop: 12, fontSize: "1.05rem", color: "#374151", lineHeight: 1.75 }}>
          The previous table had excessive empty states and poor data density — making it feel incomplete and harder for agents to review critical information before submitting.
        </p>
      </div>

      {/* ── What I Learned ── */}
      <div style={{ marginBottom: 28 }}>
        <span className="csl-eyebrow">What I learned</span>
        <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "#111827", lineHeight: 1.7, margin: 0 }}>
          Empty cells aren&apos;t neutral — they signal broken data to anyone reading the table. Agents were second-guessing information that was correct, just poorly presented. The fix wasn&apos;t adding data, it was removing the visual noise around it.
        </p>
      </div>

      {/* ── The New Design — grid (image 65% | content 35%) ── */}
      <div>
        <span className="csl-eyebrow">The redesign</span>
        <div className="cs-imgrow">
          {/* Visual (65%) */}
          <div className="cs-imgrow__visual" style={{
            borderRadius: 16, overflow: "hidden",
            border: "1.5px solid rgba(30,144,255,0.3)",
            boxShadow: "0 8px 32px rgba(30,144,255,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}>
            <Bar tint />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Airiq/third%20core/new.png" alt="Redesigned review table" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* Content (35%) */}
          <div className="cs-imgrow__content">
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em",
              color: "#1076BC", background: "#E8F2FB", border: "1px solid #BFDBFE",
              borderRadius: 100, padding: "4px 12px", marginBottom: 14,
            }}>◉ Redesigned</span>
            {[
              { label: "Optimised data density",     detail: "Every cell earns its place. Redundant columns removed, key fields promoted to primary visibility." },
              { label: "Explicit empty states",       detail: "No blank cells — missing data shows a clear dash so agents know it's intentional, not broken." },
              { label: "Grouped headers + hierarchy", detail: "Related fields cluster under shared headers — agents scan by section, not hunting across a full row." },
            ].map((item) => (
              <p key={item.label} style={{ fontSize: "0.94rem", color: "#374151", lineHeight: 1.75, margin: "0 0 10px" }}>
                <strong style={{ color: "#111827", fontWeight: 700 }}>{item.label}</strong> — {item.detail}
              </p>
            ))}
            <div style={{ marginTop: 8 }}>
              <span className="csl-eyebrow">Impact</span>
              <p style={{ fontSize: "0.94rem", color: "#374151", lineHeight: 1.8, margin: 0 }}>
                Agents stopped second-guessing the data. Pre-submission review went from triple-checking every row to a single confident scan. Operations reported a visible drop in error queries in the first weeks after launch.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function CoreComponentsSection() {
  return (
    <CsSection id="insights">
      {/* Section header */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <h2 style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900,
          color: "#111827", margin: 0, lineHeight: 1.15,
          letterSpacing: "-0.03em", marginBottom: 12,
        }}>
          3 Core Components<br />That Fixed The Flow
        </h2>
        <p style={{
          fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.7,
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
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  THE PRODUCT
───────────────────────────────────────────────────────────────────── */
function TheProductSection() {
  const flows = [
    {
      num: "Flow 01",
      label: "Search & Results",
      desc: "Real-time fare grid with 15+ filters. Price is the visual anchor. Refundability, baggage, and seat count visible without a single click.",
    },
    {
      num: "Flow 02",
      label: "Itinerary Builder",
      desc: "Multi-leg itinerary with per-passenger rules, date locks, and cabin class — all in one condensed, scannable card.",
    },
    {
      num: "Flow 03",
      label: "Review & Confirm",
      desc: "Inline mismatch warnings surface before payment. Name errors, expired passports, fare class conflicts — caught here, not at the airline.",
    },
    {
      num: "Flow 04",
      label: "Booking Dashboard",
      desc: "Status, agent performance, and booking history in a single pane. No more jumping between three tools to answer one client question.",
    },
  ];

  const desktopEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(airFigmaLinks.desktop)}`;
  const mobileEmbedUrl  = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(airFigmaLinks.mobile)}`;

  return (
    <CsSection id="product">
      <CsSectionHeader
        title="The Product"
        sub="20+ screens shipped across 5 flows. One platform, every booking."
      />

      {/* Figma embed — live product view */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <div style={{
          borderRadius: 18, overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
        }}>
          {/* Chrome bar */}
          <div style={{
            height: 40, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
              ))}
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#374151", marginLeft: 6 }}>
                Air IQ — Full Platform
              </span>
            </div>
            <a
              href={airFigmaLinks.desktop}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.62rem", fontWeight: 600, color: "#1076BC", textDecoration: "none" }}
            >
              Open in Figma ↗
            </a>
          </div>
          <iframe
            src={desktopEmbedUrl}
            allowFullScreen
            style={{ width: "100%", height: 520, border: "none", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile design embed */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <div style={{
          borderRadius: 18, overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
        }}>
          <div style={{
            height: 40, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
              ))}
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#374151", marginLeft: 6 }}>
                Air IQ — Mobile Design
              </span>
              <span style={{ fontSize: "0.65rem", color: "#9CA3AF", marginLeft: 6 }}>375px</span>
            </div>
            <a
              href={airFigmaLinks.mobile}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.62rem", fontWeight: 600, color: "#1076BC", textDecoration: "none" }}
            >
              Open in Figma ↗
            </a>
          </div>
          <iframe
            src={mobileEmbedUrl}
            allowFullScreen
            style={{ width: "100%", height: 520, border: "none", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Flow list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {flows.map((f, i) => (
          <div key={f.label} className={`csl-reveal rd${i}`}>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{f.label}</div>
            <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  DESIGN SYSTEM
───────────────────────────────────────────────────────────────────── */
function DesignSystemSection() {
  const systemEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(airFigmaLinks.designSystem)}`;

  const stats = [
    { val: "80+",  label: "Components",   sub: "buttons, inputs, cards, modals" },
    { val: "3",    label: "Icon sizes",   sub: "16 · 20 · 24px, drawn from scratch" },
    { val: "12",   label: "Color tokens", sub: "semantic, not just palette" },
    { val: "Zero", label: "Libraries used", sub: "everything built in-house" },
  ];

  return (
    <CsSection id="design-system">
      <CsSectionHeader
        title="Design System"
        sub="No library existed. Every token, component, icon, and spacing rule was built from zero in Figma."
      />

      {/* Figma embed */}
      <div className="csl-reveal" style={{ marginBottom: 24 }}>
        <div style={{
          borderRadius: 18, overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
        }}>
          <div style={{
            height: 40, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
              ))}
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#374151", marginLeft: 6 }}>
                Air IQ — Design System
              </span>
            </div>
            <a
              href={airFigmaLinks.designSystem}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.62rem", fontWeight: 600, color: "#1076BC", textDecoration: "none" }}
            >
              Open in Figma ↗
            </a>
          </div>
          <iframe
            src={systemEmbedUrl}
            allowFullScreen
            style={{ width: "100%", height: 520, border: "none", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="csl-reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {stats.map((s) => (
          <div key={s.val} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", flexShrink: 0 }}>{s.val}</span>
            <span style={{ fontSize: "1.05rem", color: "#374151", fontWeight: 600 }}>{s.label}</span>
            <span style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>— {s.sub}</span>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  RESULTS
───────────────────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <CsSection id="results">
      <CsSectionHeader title="The Impact" />

      {/* Big numbers grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, marginBottom: 40, background: "#F3F4F6", borderRadius: 20, overflow: "hidden" }}>
        {/* ~7 min */}
        <div className="csl-reveal" style={{ background: "#fff", padding: "36px 32px" }}>
          <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "#111827", lineHeight: 1, letterSpacing: "-0.03em" }}>
            ~<CountUp to={7} />
            <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#6B7280", marginLeft: 4 }}>min</span>
          </div>
          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginTop: 10, lineHeight: 1.5 }}>Average booking time</div>
          <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: 4 }}>down from ~12 min</div>
        </div>

        {/* 30–40% */}
        <div className="csl-reveal rd1" style={{ background: "#fff", padding: "36px 32px" }}>
          <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "#1E90FF", lineHeight: 1, letterSpacing: "-0.03em" }}>
            30–40%
          </div>
          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginTop: 10, lineHeight: 1.5 }}>Faster completion</div>
          <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: 4 }}>vs. pre-launch baseline</div>
        </div>

        {/* 80+ */}
        <div className="csl-reveal rd2" style={{ background: "#fff", padding: "36px 32px" }}>
          <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "#111827", lineHeight: 1, letterSpacing: "-0.03em" }}>
            <CountUp to={80} />
            <span style={{ fontSize: "2rem", fontWeight: 800, color: "#9CA3AF" }}>+</span>
          </div>
          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginTop: 10, lineHeight: 1.5 }}>Components built</div>
          <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: 4 }}>from zero, token-driven</div>
        </div>

        {/* 20+ */}
        <div className="csl-reveal rd3" style={{ background: "#fff", padding: "36px 32px" }}>
          <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "#111827", lineHeight: 1, letterSpacing: "-0.03em" }}>
            <CountUp to={20} />
            <span style={{ fontSize: "2rem", fontWeight: 800, color: "#9CA3AF" }}>+</span>
          </div>
          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginTop: 10, lineHeight: 1.5 }}>Screens shipped</div>
          <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: 4 }}>across 5 core flows</div>
        </div>
      </div>

      {/* Quote */}
      <div className="csl-reveal rd1" style={{ marginBottom: 24 }}>
        <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "#111827", lineHeight: 1.7, margin: "0 0 8px" }}>
          &ldquo;Much faster and fewer mistakes than before.&rdquo;
        </p>
        <span style={{ fontSize: "0.82rem", color: "#9CA3AF" }}>Anonymized travel agent · Post-launch feedback</span>
      </div>

      {/* Before/After table */}
      <div className="csl-reveal rd2" style={{ marginTop: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1rem" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #F3F4F6" }}>
              <th style={{ padding: "10px 0", textAlign: "left", color: "#9CA3AF", fontWeight: 600, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Before</th>
              <th style={{ padding: "10px 0", textAlign: "left", color: "#9CA3AF", fontWeight: 600, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>After</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Agents juggled 3+ tools",       "Single unified platform"],
              ["Manual entry errors frequent",   "Validation + inline warnings"],
              ["No dashboard visibility",        "20+ screens, 5 core flows live"],
              ["~12 min per booking",            "~7 min (agent feedback)"],
              ["No design system",               "80+ token-driven components"],
            ].map(([b, a], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={{ padding: "12px 0", color: "#6B7280", lineHeight: 1.5 }}>{b}</td>
                <td style={{ padding: "12px 0", color: "#111827", fontWeight: 600, lineHeight: 1.5 }}>{a}</td>
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
      <CsSectionHeader title="Learnings" sub="What this project taught me about designing for real-world, complex B2B workflows." />

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {items.map((item) => (
          <div key={item.n} className="csl-reveal" style={{
            display: "grid", gridTemplateColumns: "28px 1fr",
            gap: "0 16px", alignItems: "start",
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: 8,
              background: "#EFF6FF", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "0.68rem", fontWeight: 900, color: "#1E90FF",
              flexShrink: 0, marginTop: 2,
            }}>{item.n}</span>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: 5 }}>{item.title}</div>
              <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
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
      <DesignSystemSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
