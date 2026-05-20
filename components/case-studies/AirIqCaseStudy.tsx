"use client";

import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";
import {
  airFigmaLinks,
  airStoryCards,
  airProcessSteps,
  airDecisionBlocks,
  airJourneyBlocks,
  airEdgeCases,
} from "./airIqData";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",       label: "Overview"        },
  { id: "problem",        label: "The Problem"     },
  { id: "approach",       label: "Research"        },
  { id: "process",        label: "How I Worked"    },
  { id: "insights",       label: "Core Flow Fixes" },
  { id: "product",        label: "Product Flow"    },
  { id: "mobile",         label: "Mobile"          },
  { id: "design-system",  label: "Design System"   },
  { id: "results",        label: "Impact"          },
  { id: "learnings",      label: "Learnings"       },
];

const META_ROWS = [
  { label: "Role",      value: "UI/UX Designer" },
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
  { code: "6E-241", name: "IndiGo",    abbr: "6E", logoColor: "#fff", logoBg: "#4B1FBF", dep: "06:15", arr: "08:20", dur: "2h 05m", price: "3,180", tag: "Cheapest",   tagColor: "#1E90FF", tagBg: "#EFF6FF" },
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
        justifyContent: "center", fontSize: "15px", fontWeight: 600, color: f.logoColor,
        letterSpacing: "-0.01em",
      }}>{f.abbr}</div>

      {/* Airline + code */}
      <div style={{ minWidth: 72 }}>
        <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827", lineHeight: 1.2 }}>{f.name}</div>
        <div style={{ fontSize: "15px", color: "#9CA3AF" }}>{f.code}</div>
      </div>

      {/* Times */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827", letterSpacing: "-0.02em" }}>{f.dep}</span>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <span style={{ fontSize: "15px", color: "#9CA3AF" }}>{f.dur}</span>
          <div style={{ width: "100%", height: 1, background: "#E5E7EB", position: "relative" }}>
            <span style={{ position: "absolute", right: -4, top: "50%", transform: "translateY(-50%)", fontSize: "15px", color: "#6B7280" }}>✈</span>
          </div>
          <span style={{ fontSize: "15px", color: "#1E90FF", fontWeight: 600, letterSpacing: "0.05em" }}>NON-STOP</span>
        </div>
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827", letterSpacing: "-0.02em" }}>{f.arr}</span>
      </div>

      {/* Price + tag */}
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827", letterSpacing: "-0.02em" }}>₹{f.price}</div>
        {f.tag ? (
          <span style={{ fontSize: "15px", fontWeight: 600, color: f.tagColor, background: f.tagBg, borderRadius: 4, padding: "1px 5px" }}>{f.tag}</span>
        ) : (
          <button style={{ fontSize: "15px", fontWeight: 600, color: "#1E90FF", background: "#EFF6FF", border: "none", borderRadius: 4, padding: "2px 7px", cursor: "pointer" }}>Book</button>
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
              padding: "0 14px", fontSize: "15px", fontWeight: 600, color: "#111827",
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
              fontSize: "15px", fontWeight: 600, color: "#fff",
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
                fontSize: "15px", fontWeight: 600, color: "#374151",
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
              <div style={{ fontSize: "15px", color: "#6B7280", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
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
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#6B7280", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  4 flights found · DEL → BOM
                </span>
                <span style={{ fontSize: "15px", color: "#1E90FF", fontWeight: 600}}>Sort: Price ↑</span>
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
              <span style={{ fontSize: "15px", color: "#9CA3AF", fontWeight: 600}}>
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
      {/* Dark line grid matching homepage */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
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
            <span>Simplifying complex flight booking system</span>
          </h1>
          <p className="csl-hero-desc">
            A live product losing market share. A business mandate to redesign. One designer, six months, and a full redesign that cut booking time by 30–40%.
          </p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 460, margin: "0 0 32px" }}>
            No design system. No prior UI. One designer. Six months.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">UI/UX Designer</span>
            <span className="csl-hero-chip">6 Months</span>
            <span className="csl-hero-chip">Systems Design · B2B</span>
            <span className="csl-hero-chip">Full Redesign</span>
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
          { label: "Role",     val: "UI/UX Designer"                           },
          { label: "Team",     val: "3 Product Manager · 2 Engineering Manager" },
        ].map((s) => (
          <div className="csl-hero-stat" key={s.label}>
            <div className="csl-hero-stat-label" style={{ marginBottom: 7 }}>{s.label}</div>
            <div className="csl-hero-stat-val" style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.35 }}>{s.val}</div>
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
      <div className="air-overview csl-reveal">
        <h2 className="air-overview-title">
          <span>A live B2B flight portal </span>
          <span className="muted">
            <Typed text="used by 25,000+ agents" delay={200} />
          </span>
          <span> was </span>
          <span className="muted">
            <Typed text="ground to the market." delay={900} />
          </span>
        </h2>

        <div className="air-overview-copy">
          <p>
            Air IQ was a <strong>live B2B flight booking portal</strong> used by travel agencies across India. Over <strong>25,000 agents</strong> depended on it daily to search fares, manage passengers, and confirm bookings for clients.
          </p>
          <p>
            But the product was aging. Agent feedback was consistent: the system was slowing them down. Competitors were catching up. A platform agents find frustrating gets replaced by one they don&apos;t.
          </p>
          <p>
            The mandate was not a visual refresh. It was a <strong>complete redesign</strong> from search to confirmation, with new features built in alongside. A business problem that needed to be solved at the design level.
          </p>
        </div>
      </div>

      {/* Stakes at a glance */}
      <div className="csl-reveal" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#F3F4F6", borderRadius: 16, overflow: "hidden" }}>
        {[
          { num: "25,000+", label: "Active agents in India",  sub: "Real users, real stakes"          },
          { num: "12+ min", label: "Average booking time",    sub: "Agents were leaking hours"         },
          { num: "0",       label: "Unified portal existed",  sub: "3 disconnected tools per booking" },
        ].map((s) => (
          <div key={s.num} style={{ background: "#fff", padding: "28px 24px" }}>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#1E90FF", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
            <div style={{ fontSize: "15px", color: "#9CA3AF", marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
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
          fontSize: "15px", fontWeight: 600, textTransform: "uppercase",
          letterSpacing: "0.16em", color, background: bg,
          padding: "4px 12px", borderRadius: 100, border: `1px solid ${border}`,
        }}>{label}</span>
        <span style={{ fontSize: "15px", fontWeight: 600, color: timeColor }}>{time}</span>
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
                fontSize: "15px", flexShrink: 0,
                ...stepIn(i, offset),
              }}>{step.icon}</div>
              <div style={{ marginTop: 8, opacity: vis ? 1 : 0, transition: `opacity 0.4s ${(offset + i) * 0.07 + 0.18}s ease` }}>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#374151", marginBottom: 2 }}>{step.label}</div>
                <div style={{ fontSize: "15px", color: "#9CA3AF" }}>{step.sub}</div>
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
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
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
    title: "Fare listings overwhelmed agents",
    scene: "Each airline offered 3 to 5+ fare tiers with different refund, meal, and baggage rules, all at equal visual weight. Agents had to read every row before making a single comparison. A high-frequency scan became a slow, exhausting read.",
    tag: "Visual overload on every search",
    solvedBy: "Fare Listing Card",
  },
  {
    title: "Prices changed with no warning",
    scene: "Fares move in real time. A price at ₹3,180 when the agent searched could be ₹3,890 by the time the client said yes. The old system showed no alert, no highlight. Agents found out only when the booking failed.",
    tag: "Silent price changes caused booking failures",
    solvedBy: "Fare Listing Card",
  },
  {
    title: "The interface fought how agents work",
    scene: "Travel agents are keyboard-first. They navigate by shortcut and type without looking. The portal required mouse clicks for actions that should take one keystroke. Every forced click broke flow.",
    tag: "Mouse-dependent UI in a keyboard-native job",
    solvedBy: "Broader Design Decisions",
  },
  {
    title: "The same problems, every week",
    scene: "It wasn't one complaint. Agents, operations, and support all flagged the same friction repeatedly. The business reached a threshold: this wasn't a feature gap, it was a product-level problem that needed a full redesign.",
    tag: "Business mandate, not a UX cleanup",
    solvedBy: "End-to-end redesign",
  },
];

function ProblemSection() {
  return (
    <CsSection id="problem">
      <CsSectionHeader
        title="The portal was slowing agents down. The business knew it."
        sub="25,000 agents. Consistent feedback. Growing competitive pressure. Not a UI problem. A business problem that lived in the interface."
      />

      <div className="csl-reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {PAIN_MOMENTS.map((m) => (
          <div key={m.title} style={{
            borderLeft: "3px solid #1E90FF",
            paddingLeft: 18,
          }}>
            <p className="csl-h3" style={{ marginBottom: 6 }}>{m.title}</p>
            <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.75, margin: "0 0 10px" }}>
              {m.scene}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "15px", color: "#9CA3AF", fontWeight: 600}}>Fixed by</span>
              <span style={{
                fontSize: "15px", fontWeight: 600, color: "#1E90FF",
                background: "#EFF6FF", borderRadius: 6, padding: "3px 10px",
              }}>{m.solvedBy}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Agent quote — inline pull quote */}
      <div className="csl-reveal" style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid #F3F4F6" }}>
        <span className="csl-eyebrow">In their own words</span>
        <div style={{
          borderLeft: "3px solid #1E90FF",
          paddingLeft: 20,
          marginTop: 16,
          background: "#F9FAFB",
          borderRadius: "0 10px 10px 0",
          padding: "18px 20px 18px 20px",
          borderLeftWidth: 3,
          borderLeftStyle: "solid",
          borderLeftColor: "#1E90FF",
        }}>
          <p style={{
            fontSize: "0.95rem",
            fontStyle: "italic",
            color: "#374151",
            lineHeight: 1.8,
            margin: "0 0 12px",
            fontFamily: "inherit",
          }}>
            &ldquo;I open three windows just to check one fare. GDS for availability, the airline site for the rules, and a spreadsheet to track what I&apos;ve already told the client.&rdquo;
          </p>
          <span style={{ fontSize: "0.85rem", color: "#9CA3AF", fontWeight: 600 }}>
            Senior travel agent · Pre-launch interview
          </span>
        </div>
      </div>

      <ConstraintsBlock />


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
  "Fare listing is a constant problem across every portal. Some handle it partially, none handle it well. **All decisions start here.**",
  "Price dominates every scan, but **fare rules are never inline**. Refundability is always one extra click away across all 4 platforms.",
  "Agents need to filter and compare simultaneously. Every portal hides filters behind a modal, **breaking the compare loop**.",
  "TripJack had the right data, wrong **visual hierarchy**. Refundability and seat count were buried every time.",
  "**80% of B2B bookings** leave add-ons empty, yet every portal shows those empty rows, creating confusion at review.",
];

function HighlightLine({ text, active }: { text: string; active: boolean }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{
            color: active ? "#1E90FF" : "inherit",
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
  /* single static embed — first competitor as reference */
  const c = COMPETITORS[0];
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/D6XwtXxLfGueNa2O4fwkHy/AirIQ-Case-Study?node-id=${c.nodeId}`;

  return (
    <div>
      {/* ── 2×2 platform grid (no tabs — simultaneous display) ── */}
      <span className="csl-eyebrow">Platforms studied</span>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
        {COMPETITORS.map((comp) => (
          <div
            key={comp.slug}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 12,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              padding: "12px 16px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/Image/Airiq/research/logo-${comp.slug}.png`}
              alt={comp.name}
              style={{ maxWidth: 80, maxHeight: 32, objectFit: "contain", display: "block", flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{comp.name}</div>
              <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: 2 }}>{comp.type}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Single Figma embed (reference design) ── */}
      <div style={{
        borderRadius: 16, overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        background: "#F9FAFB",
      }}>
        <div style={{
          height: 40, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)",
          display: "flex", alignItems: "center", padding: "0 16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
            </svg>
            <span style={{ fontSize: "15px", fontWeight: 600, color: "#374151" }}>AirIQ: Competitive Research</span>
          </div>
        </div>
        <iframe
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
                  fontSize: "15px", fontWeight: 600, color: "#1E90FF",
                  flexShrink: 0, marginTop: 1,
                }}>0{i + 1}</span>
                <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.75, margin: 0 }}>
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
   RESEARCH SCOPE PILLS
───────────────────────────────────────────────────────────────────── */
function ResearchScopePills({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
      {items.map((item) => (
        <span key={item} style={{
          fontSize: "15px", fontWeight: 600, color: "#374151",
          background: "#F3F4F6", border: "1px solid #E5E7EB",
          borderRadius: 100, padding: "5px 14px",
        }}>{item}</span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   RESEARCH INSIGHT CARDS  (warm 2×2 light grid)
───────────────────────────────────────────────────────────────────── */
const AGENT_INSIGHTS = [
  {
    label: "Insight 01",
    heading: "Fare data overload on every search",
    text: "3 to 5+ fare tiers per airline, each with different refund, meal, and baggage rules, all at equal visual weight.",
    dataText: "Agents re-read every row before answering a client's simplest question.",
    statNum: 5,
    statSuffix: "+",
    statUnit: "fare tiers per airline",
  },
  {
    label: "Insight 02",
    heading: "Fare rules were always hidden",
    text: "No inline refund summary. Agents guessed refundability from fine print and sometimes got it wrong in front of a client.",
    dataText: "All 4 competitor platforms hid refundability behind extra clicks.",
    statNum: 100,
    statSuffix: "%",
    statUnit: "of competitors did it",
  },
  {
    label: "Insight 03",
    heading: "Keyboard-first agents, mouse-dependent portal",
    text: "Agents navigate by shortcut and muscle memory. Every forced click added seconds. At 25,000 agents, it compounds.",
    dataText: "The portal required clicks for actions agents expected in a single keystroke.",
    statNum: 0,
    statSuffix: "",
    statUnit: "keyboard shortcuts designed for",
  },
  {
    label: "Insight 04",
    heading: "80% of bookings have empty SSR tables",
    text: "Add-ons are blank in most B2B bookings, yet the review page showed every empty row, creating confusion before confirmation.",
    dataText: "Agents assumed empty rows meant missing data, not unapplied options.",
    statNum: 80,
    statSuffix: "%",
    statUnit: "of bookings with empty SSR",
  },
];

function ResearchInsightCards() {
  return (
    <div className="csl-reveal" style={{ marginBottom: 40 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {AGENT_INSIGHTS.map((ins) => (
          <div key={ins.label} style={{
            background: "linear-gradient(135deg, rgba(173,216,255,0.15), rgba(255,236,153,0.12))",
            backdropFilter: "blur(12px) saturate(1.4)",
            WebkitBackdropFilter: "blur(12px) saturate(1.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
          }}>
            {/* Label */}
            <div style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: "15px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#9CA3AF", marginBottom: 12,
            }}>
              {ins.label}
            </div>

            {/* Title */}
            <div style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: "15px", fontWeight: 600,
              color: "#111827", lineHeight: 1.4, marginBottom: 10,
            }}>
              {ins.heading}
            </div>

            {/* Stat */}
            <div style={{
              marginTop: "auto",
              paddingTop: 20,
              borderTop: "1px solid #F3F4F6",
            }}>
              <div style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontSize: "clamp(2.2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "#111827",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {ins.statNum > 0 ? <CountUp to={ins.statNum} /> : "0"}{ins.statSuffix}
              </div>
              <div style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontSize: "15px", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#9CA3AF", marginTop: 5,
              }}>
                {ins.statUnit}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Attribution */}
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <div style={{ width: 32, height: 1, background: "#E5E7EB", margin: "0 auto 10px" }} />
        <span style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontSize: "15px", color: "#9CA3AF",
        }}>
          Source: Agent Interviews
        </span>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────────
   STANDALONE METRIC CALLOUT  (big number + progress bar + source)
───────────────────────────────────────────────────────────────────── */
function MetricCallout({ stat, text, source, pct, last = false }: {
  stat: string; text: React.ReactNode; source: string;
  pct: number; last?: boolean;
}) {
  return (
    <div style={{
      padding: "32px 0",
      borderBottom: last ? "none" : "1px solid #F3F4F6",
    }}>
      {/* Big number */}
      <div style={{
        fontSize: "clamp(3rem, 7vw, 4.8rem)", fontWeight: 800,
        color: "#1E90FF", lineHeight: 1, letterSpacing: "-0.04em",
        marginBottom: 14,
      }}>{stat}</div>

      {/* Progress bar */}
      <div style={{
        height: 5, background: "#F3F4F6",
        borderRadius: 100, overflow: "hidden",
        marginBottom: 18, maxWidth: 500,
      }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: "linear-gradient(90deg, #1E90FF 0%, #60B4FF 100%)",
          borderRadius: 100,
          transition: "width 1s ease",
        }} />
      </div>

      {/* Finding text */}
      <p style={{
        fontSize: "1rem", color: "#374151", lineHeight: 1.75,
        margin: "0 0 12px", maxWidth: 500,
      }}>{text}</p>

      {/* Source */}
      <div style={{
        fontSize: "15px", fontWeight: 600,
        color: "#9CA3AF",
        textTransform: "uppercase", letterSpacing: "0.12em",
      }}>Source: {source}</div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────────
   WAFFLE CHART METRIC  (10×10 terracotta dots + count-up + left border)
───────────────────────────────────────────────────────────────────── */
const WAFFLE_METRICS = [
  {
    filled: 72,
    target: 72,
    suffix: "%",
    desc: "Booking time lost to context-switching, not the booking itself.",
    source: "Agent Interviews · Pre-launch",
  },
  {
    filled: 75,
    target: 75,
    suffix: "%",
    desc: "Agents juggling 3+ tools every session.",
    source: "User Interviews · 4 Sessions",
  },
  {
    filled: 100,
    target: 100,
    suffix: "%",
    desc: "Competitors buried refundability. Never shown inline.",
    source: "Competitive Analysis · 4 Platforms",
  },
];

function WaffleCol({ filled, target, suffix, desc, source }: typeof WAFFLE_METRICS[0]) {
  const [dots, setDots]   = useState<boolean[]>(Array(100).fill(false));
  const [count, setCount] = useState(0);
  const ref   = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return;
      fired.current = true;
      io.disconnect();

      /* dot fill — one dot every 12 ms */
      for (let i = 0; i < filled; i++) {
        setTimeout(() => {
          setDots(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 12);
      }

      /* count-up over 800 ms ease-out */
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 800, 1);
        const eased = 1 - Math.pow(1 - p, 2);
        setCount(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [filled, target]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
      {/* 10×10 waffle */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 8px)",
        gap: 4,
        width: 116,
      }}>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: "50%",
            background: i < filled
              ? (dots[i] ? "#1E90FF" : "rgba(30,144,255,0.15)")
              : "rgba(30,144,255,0.15)",
            transition: dots[i] ? "background 80ms ease" : "none",
          }} />
        ))}
      </div>

      {/* Stat number */}
      <div style={{
        fontFamily: "var(--font-lato), sans-serif",
        fontSize: "clamp(2.2rem, 3.5vw, 2.8rem)",
        fontWeight: 400,
        color: "#111827",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        marginTop: 18,
        marginBottom: 14,
      }}>
        {count}{suffix}
      </div>

      {/* Description with left border */}
      <p style={{
        fontFamily: "var(--font-lato), sans-serif",
        fontSize: "15px",
        color: "#374151",
        lineHeight: 1.65,
        borderLeft: "2px solid #1E90FF",
        paddingLeft: 12,
        margin: "0 0 10px",
      }}>
        {desc}
      </p>

      {/* Source */}
      <p style={{
        fontFamily: "var(--font-lato), sans-serif",
        fontSize: "15px",
        color: "#9CA3AF",
        paddingLeft: 14,
        margin: 0,
      }}>
        <strong style={{ fontWeight: 600 }}>Source:</strong> {source}
      </p>
    </div>
  );
}

function DotMetricRow() {
  return (
    <div className="csl-reveal">
      <p style={{
        fontFamily: "var(--font-lato), sans-serif",
        fontSize: "15px", color: "#6B7280",
        lineHeight: 1.7, margin: "0 0 36px", maxWidth: 480,
      }}>
        Numbers that shaped the design direction.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
        {WAFFLE_METRICS.map((m) => (
          <WaffleCol key={m.target + m.source} {...m} />
        ))}
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

      {/* Insight cards */}
      <div className="csl-reveal" style={{ marginBottom: 8 }}>
        <ResearchInsightCards />
      </div>


    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  CORE COMPONENTS
───────────────────────────────────────────────────────────────────── */

/* ── Fare Listing Card: timeline stage data ── */
const TIMELINE_STAGES = [
  {
    vLabel: "V1",
    eyebrow: "The Old Design",
    statusText: "Outdated",
    statusColor: "#EF4444",
    statusBg: "#FEF2F2",
    img: "/Image/Airiq/first%20core/old-design.png",
    heading: "No visual hierarchy",
    annotation: "Multiple fare classes, baggage rules, and airline policies at equal visual weight. Nothing prioritised. Agents had to read every row before making a single comparison. A high-frequency scan became a slow, exhausting read.",
  },
  {
    vLabel: "V2",
    eyebrow: "Approach 1",
    statusText: "Didn't land",
    statusColor: "#EF4444",
    statusBg: "#FEF2F2",
    img: "/Image/Airiq/first%20core/first-approch.png",
    heading: "All data, equal weight",
    annotation: "Every field competed for attention. Fare class, baggage, and refundability at equal visual weight. Agents read every row top-to-bottom before comparing. A fast scan became an exhausting read.",
  },
  {
    vLabel: "V3",
    eyebrow: "Approach 2",
    statusText: "Getting closer",
    statusColor: "#D97706",
    statusBg: "#FFFBEB",
    img: "/Image/Airiq/first%20core/second-approch.png",
    heading: "Grouping added, labels still ambiguous",
    annotation: "Visual grouping helped, but fare class labels like SME, SAVER, and FLEX meant nothing without explanation. Agents were still guessing which class to book. Refundability remained secondary, not an upfront signal.",
  },
] as const;

const WHERE_IT_LIVES_DATA = [
  { label: "One Way",       sub: "Domestic single-leg",  img: "/Image/Airiq/first%20core/one-way.png"     },
  { label: "International", sub: "Cross-border search",  img: "/Image/Airiq/first%20core/one-way-int.png" },
  { label: "Round Trip",    sub: "Outbound + return",    img: "/Image/Airiq/first%20core/round-trip.png"  },
];

/* ─────────────────────────────────────────────────────────────────────
   TIMELINE STAGE CARD  (V1 / V2 / V3)
───────────────────────────────────────────────────────────────────── */
type StageData = typeof TIMELINE_STAGES[number];

function StageCard({ stage, idx }: { stage: StageData; idx: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 400ms cubic-bezier(0.22,1,0.36,1) ${idx * 80}ms, transform 400ms cubic-bezier(0.22,1,0.36,1) ${idx * 80}ms`,
        position: "relative",
        paddingLeft: 56,
        marginBottom: 40,
      }}
    >
      {/* Spine dot */}
      <div style={{
        position: "absolute", left: 20, top: 26,
        width: 12, height: 12, borderRadius: "50%",
        background: "#fff", border: "2px solid #D1D5DB", zIndex: 1,
      }} />

      {/* Card */}
      <div style={{
        position: "relative", background: "#fff",
        border: "1px solid #E5E7EB", borderRadius: 18, overflow: "hidden",
      }}>
        {/* Watermark version label */}
        <div style={{
          position: "absolute", bottom: -10, left: 8,
          fontSize: 96, fontWeight: 800, color: "#1E90FF",
          opacity: 0.05, lineHeight: 1, letterSpacing: "-0.06em",
          userSelect: "none", pointerEvents: "none", zIndex: 0,
        }}>{stage.vLabel}</div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header row */}
          <div style={{
            padding: "16px 20px 12px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span className="csl-eyebrow" style={{ margin: 0 }}>{stage.eyebrow}</span>
            <span style={{
              fontSize: "12px", fontWeight: 700,
              color: stage.statusColor, background: stage.statusBg,
              borderRadius: 100, padding: "3px 10px",
            }}>{stage.statusText}</span>
          </div>

          {/* Chrome bar + image */}
          <div style={{ borderTop: "1px solid #E5E7EB" }}>
            <div style={{
              height: 32, background: "#F3F4F6", borderBottom: "1px solid #E5E7EB",
              display: "flex", alignItems: "center", padding: "0 12px", gap: 6,
            }}>
              {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, flexShrink: 0 }} />
              ))}
              <div style={{ flex: 1, height: 12, background: "rgba(0,0,0,0.07)", borderRadius: 20, marginLeft: 6 }} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={stage.img} alt={stage.heading} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* Annotation */}
          <div style={{ padding: "16px 20px 20px" }}>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 6px", lineHeight: 1.3 }}>
              {stage.heading}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
              {stage.annotation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FINAL DESIGN CARD  (elevated, with tab switcher + where it lives)
───────────────────────────────────────────────────────────────────── */
function FinalDesignCard({ idx }: { idx: number }) {
  const [activeTab, setActiveTab] = useState<"oneway" | "roundtrip">("oneway");
  const [tabContentVis, setTabContentVis] = useState(true);
  const [vis, setVis] = useState(false);
  const [thumbVis, setThumbVis] = useState<boolean[]>([false, false, false]);
  const ref = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cardObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); cardObs.disconnect(); } },
      { threshold: 0.05 }
    );
    cardObs.observe(el);

    thumbRefs.current.forEach((thumb, i) => {
      if (!thumb) return;
      const tObs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              setThumbVis((prev) => { const n = [...prev]; n[i] = true; return n; });
            }, 200 + i * 80);
            tObs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      tObs.observe(thumb);
    });

    return () => { cardObs.disconnect(); };
  }, []);

  const switchTab = (tab: "oneway" | "roundtrip") => {
    if (tab === activeTab) return;
    setTabContentVis(false);
    setTimeout(() => { setActiveTab(tab); setTabContentVis(true); }, 200);
  };

  const tabImg = activeTab === "oneway"
    ? "/Image/Airiq/first%20core/final.png"
    : "/Image/Airiq/first%20core/round-trip.png";

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 400ms cubic-bezier(0.22,1,0.36,1) ${idx * 80}ms, transform 400ms cubic-bezier(0.22,1,0.36,1) ${idx * 80}ms`,
        position: "relative",
        paddingLeft: 56,
      }}
    >
      {/* Spine dot — accent */}
      <div style={{
        position: "absolute", left: 18, top: 26,
        width: 16, height: 16, borderRadius: "50%",
        background: "#1E90FF",
        boxShadow: "0 0 0 4px rgba(30,144,255,0.18)",
        zIndex: 1,
      }} />

      {/* Elevated card */}
      <div style={{
        position: "relative",
        background: "#0B1E3D",
        border: "1px solid rgba(30,144,255,0.35)",
        borderRadius: 20, overflow: "hidden",
        boxShadow: "0 0 40px rgba(30,144,255,0.12), 0 8px 32px rgba(0,0,0,0.18)",
      }}>
        {/* Watermark "Final" */}
        <div style={{
          position: "absolute", bottom: -10, left: 8,
          fontSize: 96, fontWeight: 800, color: "#fff",
          opacity: 0.04, lineHeight: 1, letterSpacing: "-0.05em",
          userSelect: "none", pointerEvents: "none", zIndex: 0,
        }}>Final</div>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{
            padding: "20px 24px 0",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{
              fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const,
              letterSpacing: "0.12em", color: "#9CA3AF",
            }}>Final Design</span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const,
              letterSpacing: "0.14em", color: "#1E90FF",
              background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)",
              borderRadius: 100, padding: "4px 12px",
            }}>✦ Shipped</span>
          </div>

          {/* Tab switcher — One Way / Round Trip */}
          <div role="tablist" style={{
            display: "flex", justifyContent: "center", gap: 8,
            padding: "16px 24px",
          }}>
            {(["oneway", "roundtrip"] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                tabIndex={0}
                onClick={() => switchTab(tab)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchTab(tab); } }}
                style={{
                  padding: "6px 20px", borderRadius: 100,
                  border: activeTab === tab ? "none" : "1px solid rgba(30,144,255,0.3)",
                  background: activeTab === tab ? "#1E90FF" : "transparent",
                  color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
                  fontSize: "14px", fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: activeTab === tab ? "0 2px 12px rgba(30,144,255,0.4)" : "none",
                  outline: "none",
                }}
              >
                {tab === "oneway" ? "One Way" : "Round Trip"}
              </button>
            ))}
          </div>

          {/* Image with crossfade — no chrome bar */}
          <div style={{
            borderTop: "1px solid rgba(30,144,255,0.15)",
            opacity: tabContentVis ? 1 : 0,
            transition: "opacity 200ms ease",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tabImg}
              alt={activeTab === "oneway" ? "One Way fare listing" : "Round Trip fare listing"}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Why + Impact */}
          <div style={{ padding: "24px 24px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", margin: "0 0 8px", lineHeight: 1.4 }}>
                Price hierarchy first. Everything else at a glance.
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
                Price and time dominate the scan path. Refundability, baggage allowance, and seat count visible without expanding. Fare class icons map to symbols agents already recognise.
              </p>
            </div>
            <div>
              <span style={{
                fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const,
                letterSpacing: "0.14em", color: "#9CA3AF", display: "block", marginBottom: 10,
              }}>Impact</span>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
                Became the template for every fare listing in the platform, extended across one-way, international, and round-trip searches.
              </p>
            </div>
          </div>

          {/* Where else it lives */}
          <div style={{ padding: "0 24px 28px" }}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, marginBottom: 20 }}>
              <p style={{
                fontSize: "1rem", fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                margin: 0, letterSpacing: "-0.01em",
              }}>Where else it lives</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                This card extends across all search types
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {WHERE_IT_LIVES_DATA.map((item, i) => (
                <div
                  key={item.label}
                  ref={(el) => { thumbRefs.current[i] = el; }}
                  style={{
                    opacity: thumbVis[i] ? 1 : 0,
                    transform: thumbVis[i] ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div style={{
                    borderRadius: 10, overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.label} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <div style={{ marginTop: 8, textAlign: "center" as const }}>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FARE LISTING BLOCK  (component 1 — vertical storyboard timeline)
───────────────────────────────────────────────────────────────────── */
function FareListingBlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spineH, setSpineH] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSpineH(100); obs.disconnect(); } },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="csl-reveal" style={{ marginBottom: 64 }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: 36 }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111827", margin: "0 0 8px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          Fare Listing Card
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#6B7280", margin: 0, lineHeight: 1.75 }}>
          The card agents see most often. Search results page, every booking starts here.
        </p>
      </div>

      {/* ── Vertical storyboard timeline ── */}
      <div ref={containerRef} style={{ position: "relative" }}>
        {/* Spine */}
        <div style={{
          position: "absolute", left: 26, top: 30, bottom: 30,
          width: 2, background: "#F3F4F6", borderRadius: 2, overflow: "hidden",
        }}>
          <div style={{
            width: "100%", height: `${spineH}%`,
            background: "linear-gradient(to bottom, rgba(30,144,255,0.35) 0%, rgba(30,144,255,0.1) 100%)",
            transition: "height 1.4s cubic-bezier(0.22,1,0.36,1)", borderRadius: 2,
          }} />
        </div>

        {/* Stage cards V1 / V2 / V3 */}
        {TIMELINE_STAGES.map((stage, i) => (
          <StageCard key={stage.vLabel} stage={stage} idx={i} />
        ))}

        {/* Final design card */}
        <FinalDesignCard idx={TIMELINE_STAGES.length} />
      </div>
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
          fontSize: "15px", fontWeight: 600, letterSpacing: "0.1em",
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
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111827", margin: "0 0 8px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          Itinerary Card
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#6B7280", margin: 0, lineHeight: 1.75 }}>
          The card agents read aloud to clients on a call. Every second saved is trust gained.
        </p>
      </div>

      {/* ── What I Tried — Approach 01 (old design) ── */}
      <div style={{ marginBottom: 28 }}>
        <span className="csl-eyebrow" style={{ marginBottom: 20 }}>What I tried</span>

        <div style={{ position: "relative", paddingLeft: 44 }}>
          <div style={{
            position: "absolute", left: 13, top: 14, bottom: 14,
            width: 2,
            background: "linear-gradient(to bottom, #E5E7EB 0%, #E5E7EB 88%, transparent 100%)",
          }} />

          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: -44, top: 6,
              width: 12, height: 12, borderRadius: "50%",
              background: "#D1D5DB", zIndex: 1,
            }} />
            <span className="csl-eyebrow" style={{ marginBottom: 8 }}>Approach 01</span>
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E5E7EB", marginBottom: 12 }}>
              <Bar />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Image/Airiq/Second%20core/old.png" alt="Original itinerary design" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                Scattered layout, no clear reading path
              </p>
              <p style={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
                Journey details were spread across multiple sections. Agents had to assemble the full picture themselves mid-call. Confusion was almost guaranteed, especially with international itineraries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Final Design — dark full-width ── */}
      <div style={{ marginTop: 32 }}>
        <span className="csl-eyebrow">Final Design</span>
        <div style={{
          background: "#111827", borderRadius: 20, overflow: "hidden",
          marginTop: 12,
        }}>
          <div style={{ padding: "28px 28px 0" }}>
            <Bar tint />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Airiq/Second%20core/new.png" alt="Redesigned itinerary card" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div style={{ padding: "28px 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em",
                color: "#1E90FF", background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)",
                borderRadius: 100, padding: "4px 12px", marginBottom: 14,
              }}>✦ Why this was selected</span>
              {[
                { label: "Segment at a glance",     detail: "Origin → destination in one clear row. No scrolling to find the route." },
                { label: "Dates + times grouped",    detail: "Departure and arrival side-by-side, not buried across sections." },
                { label: "Flat, single-card format", detail: "Everything an agent needs on a call is visible in one frame. Nothing collapsed." },
              ].map((item) => (
                <p key={item.label} style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: "0 0 8px" }}>
                  <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>{item.label}:</strong> {item.detail}
                </p>
              ))}
            </div>
            <div>
              <span style={{
                display: "inline-block",
                fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em",
                color: "#9CA3AF", marginBottom: 14,
              }}>Impact</span>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>
                Agents stopped fumbling mid-call. Route, class, and times confirmed in under 5 seconds.
              </p>
            </div>
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
          fontSize: "15px", fontWeight: 600, letterSpacing: "0.1em",
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
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111827", margin: "0 0 8px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          Review Table View
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#6B7280", margin: 0, lineHeight: 1.75 }}>
          Final review screen. The last checkpoint before a ticket is issued.
        </p>
      </div>

      {/* ── What I Tried — Approach 01 ── */}
      <div style={{ marginBottom: 28 }}>
        <span className="csl-eyebrow" style={{ marginBottom: 20 }}>What I tried</span>

        <div style={{ position: "relative", paddingLeft: 44 }}>
          <div style={{
            position: "absolute", left: 13, top: 14, bottom: 14,
            width: 2,
            background: "linear-gradient(to bottom, #E5E7EB 0%, #E5E7EB 88%, transparent 100%)",
          }} />

          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: -44, top: 6,
              width: 12, height: 12, borderRadius: "50%",
              background: "#D1D5DB", zIndex: 1,
            }} />
            <span className="csl-eyebrow" style={{ marginBottom: 8 }}>Approach 01</span>
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E5E7EB", marginBottom: 12 }}>
              <Bar />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Image/Airiq/third%20core/old.png" alt="Original review table design" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                Too many empty cells, broken trust
              </p>
              <p style={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
                The table showed every row including blank SSR fields. Agents couldn&apos;t tell whether empty cells meant missing data or unapplied options. A screen meant to confirm a booking was creating doubt before submission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Final Design — dark full-width ── */}
      <div style={{ marginTop: 32 }}>
        <span className="csl-eyebrow">Final Design</span>
        <div style={{
          background: "#111827", borderRadius: 20, overflow: "hidden",
          marginTop: 12,
        }}>
          <div style={{ padding: "28px 28px 0" }}>
            <Bar tint />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Airiq/third%20core/new.png" alt="Redesigned review table" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div style={{ padding: "28px 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em",
                color: "#1E90FF", background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)",
                borderRadius: 100, padding: "4px 12px", marginBottom: 14,
              }}>✦ Why this was selected</span>
              {[
                { label: "Optimised data density",     detail: "Every cell earns its place. Redundant columns removed, key fields promoted to primary visibility." },
                { label: "Explicit empty states",       detail: "No blank cells. Missing data shows a clear dash so agents know it's intentional, not broken." },
                { label: "Grouped headers + hierarchy", detail: "Related fields cluster under shared headers. Agents scan by section, not row by row." },
              ].map((item) => (
                <p key={item.label} style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: "0 0 8px" }}>
                  <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>{item.label}:</strong> {item.detail}
                </p>
              ))}
            </div>
            <div>
              <span style={{
                display: "inline-block",
                fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em",
                color: "#9CA3AF", marginBottom: 14,
              }}>Impact</span>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>
                Agents stopped second-guessing. Review became one confident scan. Operations reported a visible drop in error queries post-launch.
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
      {/* Sticky progress label — activates the instant 1px enters viewport */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "9px 0",
        marginBottom: 0,
      }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" as const }}>
          <span style={{
            fontSize: "11px", fontWeight: 700, color: "#9CA3AF",
            textTransform: "uppercase" as const, letterSpacing: "0.12em",
          }}>Core Components</span>
          <span style={{ color: "#D1D5DB", fontSize: "11px" }}>·</span>
          {["Fare Listing Card", "Itinerary Card", "Review Table"].map((name, i) => (
            <span key={name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {i > 0 && <span style={{ color: "#D1D5DB", fontSize: "11px" }}>·</span>}
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#374151" }}>{name}</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: 32 }}>
        <CsSectionHeader
          title="3 Core Flow Fixes"
          sub="Fixing the listing, the share card, and the review table unblocked every other screen. Here's what I tried, what I scrapped, and what shipped."
        />

        {/* Component 1 — Fare Listing Card */}
        <FareListingBlock />

        {/* Component 2 — Itinerary Card */}
        <ItineraryCardBlock />

        {/* Component 3 — Review Table */}
        <ReviewTableBlock />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FIGMA ICON (reusable)
───────────────────────────────────────────────────────────────────── */
function FigmaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function FigmaEmbed({ url, label, height = 600 }: { url: string; label: string; height?: number }) {
  return (
    <div style={{
      borderRadius: 18, overflow: "hidden",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
    }}>
      <div style={{
        height: 40, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)",
        display: "flex", alignItems: "center", padding: "0 16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <FigmaIcon />
          <span style={{ fontSize: "15px", fontWeight: 600, color: "#374151" }}>{label}</span>
        </div>
      </div>
      <iframe
        src={url}
        allowFullScreen
        style={{ width: "100%", height, border: "none", display: "block" }}
        loading="lazy"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  PRODUCT FLOW WALKTHROUGH
───────────────────────────────────────────────────────────────────── */
function ProductFlowSection() {
  return (
    <CsSection id="product">
      <CsSectionHeader
        title="Complete Product Flow"
        sub="Every screen, every decision, in sequence. Here's how the full booking journey was designed — from the first search to the final confirmation."
      />
      <div style={{
        width: "calc(100% + 80px)",
        marginLeft: -40,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
      }}>
        <iframe
          src="/Image/Airiq/presentation/flow-presentation.html"
          style={{ width: "100%", height: 1300, border: "none", display: "block" }}
          title="AIR iQ Product Flow"
          loading="lazy"
        />
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
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#374151", marginLeft: 6 }}>
                Air IQ: Design System
              </span>
            </div>
          </div>
          <iframe
            src={systemEmbedUrl}
            allowFullScreen
            style={{ width: "100%", height: 520, border: "none", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  RESULTS
───────────────────────────────────────────────────────────────────── */
function ResultsSection() {
  const outcomes = [
    {
      stat: <><span>~</span><CountUp to={7} /><span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#6B7280", marginLeft: 4 }}>min</span></>,
      statColor: "#111827",
      label: "Average booking time",
      sub: "down from ~12 min per booking",
      source: "Agent Feedback",
      tag: "Faster",
      desc: "A 5-minute drop per booking sounds small. At 25,000 agents making multiple bookings a day, it compounds into real revenue recovered at scale. This was the metric the business was watching.",
    },
    {
      stat: "30–40%",
      statColor: "#1E90FF",
      label: "Faster booking completion",
      sub: "vs. pre-launch baseline",
      source: "Operations Data",
      tag: "Much Fewer Mistakes",
      desc: "Hierarchy-first fare cards and consolidated review screens meant agents stopped misreading information. Fewer mistakes per booking equals fewer escalations, refunds, and support tickets.",
    },
    {
      stat: "25–35%",
      statColor: "#1E90FF",
      label: "Fewer UI confusion tickets",
      sub: "support drop post-launch",
      source: "Support Team · Post-launch",
      tag: "Clearer",
      desc: "Support tickets flagging UI confusion dropped in the first weeks. The design resolved the ambiguity agents had been reporting for months — empty cells, unclear fare rules, no error states.",
    },
    {
      stat: <><CountUp to={25} />K<span style={{ fontSize: "2rem", fontWeight: 800, color: "#9CA3AF" }}>+</span></>,
      statColor: "#111827",
      label: "Active agents onboarded",
      sub: "live across India post-launch",
      source: "Product Analytics",
      tag: "Adopted",
      desc: "The product shipped to all existing agents without a retraining mandate. Adoption was near-instant because the interface respected existing workflows rather than replacing them.",
    },
  ];

  return (
    <CsSection id="results">
      <CsSectionHeader title="The Impact" sub="Design decisions measured by what they changed in the real world, not what they looked like on a slide." />

      {/* Outcomes — 2-col grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 40 }}>
        {outcomes.map((o, i) => (
          <div key={i} className="csl-reveal" style={{
            display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, alignItems: "start",
            paddingTop: i === 0 ? 0 : 32,
            paddingBottom: 32,
            borderBottom: i < outcomes.length - 1 ? "1px solid #F3F4F6" : "none",
          }}>
            {/* Left: stat */}
            <div>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: o.statColor, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 10 }}>
                {o.stat}
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 600, color: "#374151", marginBottom: 4, lineHeight: 1.4 }}>{o.label}</div>
              <div style={{ fontSize: "15px", color: "#9CA3AF", marginBottom: 10 }}>{o.sub}</div>
              {/* Light outcome tag */}
              <span style={{
                display: "inline-block",
                fontSize: "13px", fontWeight: 600,
                color: "#1E90FF",
                background: "#EFF6FF",
                border: "1px solid rgba(30,144,255,0.2)",
                borderRadius: 100,
                padding: "3px 10px",
                letterSpacing: "0.04em",
              }}>{o.tag}</span>
            </div>
            {/* Right: description */}
            <div style={{ paddingTop: 8 }}>
              <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.8, margin: "0 0 14px" }}>
                {o.desc}
              </p>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#C4C9D4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Source: {o.source}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote — dark pull quote */}
      <div className="csl-reveal rd1" style={{ marginBottom: 24 }}>
        <div style={{
          background: "#111827", borderRadius: 16, padding: "32px 32px 28px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -30, right: -30,
            width: 160, height: 160, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,144,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <span style={{
            position: "absolute", top: 4, left: 20,
            fontSize: "6rem", color: "#1E90FF", lineHeight: 1,
            userSelect: "none", opacity: 0.5,
          }}>&ldquo;</span>
          <p style={{
            fontSize: "1.2rem", fontWeight: 600, color: "rgba(255,255,255,0.9)",
            lineHeight: 1.75, margin: "28px 0 20px", paddingLeft: 4,
          }}>
            Much faster and fewer mistakes than before.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(30,144,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "15px", fontWeight: 600, color: "#1E90FF",
            }}>TA</div>
            <div>
              <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>Anonymized travel agent</div>
              <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", fontWeight: 600, marginTop: 2 }}>Post-launch feedback</div>
            </div>
          </div>
        </div>
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
      title: "The design system paid for itself",
      text: "Screens 10–20 were built 4× faster than screens 1–5. One token change updated every screen simultaneously.",
    },
    {
      n: "02",
      title: "B2B is not B2C with a logo",
      text: "The goal wasn't simplicity. It was the right kind of density: always present when needed, invisible when not.",
    },
    {
      n: "03",
      title: "More agent time upfront would have changed the brief",
      text: "Four interviews wasn't enough. GDS fare logic and multi-pax edge cases surfaced during design, not before.",
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
              fontSize: "15px", fontWeight: 600, color: "#1E90FF",
              flexShrink: 0, marginTop: 2,
            }}>{item.n}</span>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: 5 }}>{item.title}</div>
              <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   STORY CARDS GRID
───────────────────────────────────────────────────────────────────── */
function StoryCardsGrid() {
  const toneColors: Record<string, { bg: string; accent: string }> = {
    "sc-blue":   { bg: "#EFF6FF", accent: "#1E90FF" },
    "sc-green":  { bg: "#DBEAFE", accent: "#1076BC" },
    "sc-accent": { bg: "#EFF6FF", accent: "#1076BC" },
    "sc-amber":  { bg: "#FFFBEB", accent: "#D97706" },
  };
  return (
    <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
      {airStoryCards.map((card) => {
        const col = toneColors[card.tone] ?? toneColors["sc-blue"];
        return (
          <div key={card.kicker} style={{
            background: "#fff", borderRadius: 14, padding: "20px 20px 18px",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <span style={{
              display: "inline-block", fontSize: "15px", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.14em",
              color: col.accent, background: col.bg,
              borderRadius: 100, padding: "3px 10px", marginBottom: 10,
            }}>{card.kicker}</span>
            <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", margin: "0 0 8px", lineHeight: 1.3 }}>{card.title}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{card.text}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CONSTRAINTS BLOCK
───────────────────────────────────────────────────────────────────── */
function ConstraintsBlock() {
  const items = [
    {
      icon: "⚡",
      label: "GDS API complexity",
      text: "Live data with latency and inconsistent formats per carrier. Every design decision had to account for fields that might not exist.",
    },
    {
      icon: "📋",
      label: "Regulatory surface area",
      text: "GST, RAF levies, and PAN verification are mandatory. Fare summaries had to surface regulatory data, not just price.",
    },
    {
      icon: "🧠",
      label: "Legacy mental models",
      text: "Agents trained on command-line GDS for years. Adoption depended on how little had to be relearned.",
    },
    {
      icon: "🏗",
      label: "Solo designer, live sprint",
      text: "No design system, no prior UI. Every component built from scratch alongside an active engineering sprint.",
    },
  ];
  return (
    <div className="csl-reveal" style={{ marginTop: 32 }}>
      <span className="csl-eyebrow">What made this hard</span>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {items.map((item) => (
          <div key={item.label} style={{
            background: "#F9FAFB", borderRadius: 12, padding: "16px 18px",
            border: "1px solid #F3F4F6",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: "1rem" }}>{item.icon}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>{item.label}</span>
            </div>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────────
   PROCESS SECTION
───────────────────────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <CsSection id="process">
      <CsSectionHeader
        title="How I Worked"
        sub="AI-assisted process, not AI-generated design. Every tool saved synthesis time so I could spend it on craft."
      />
      <StoryCardsGrid />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MOBILE SECTION
───────────────────────────────────────────────────────────────────── */
function MobileSection() {
  const mobileEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(airFigmaLinks.mobile)}`;
  const edgeCasesEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(airFigmaLinks.edgeCases)}`;

  const items = [
    {
      num: "01",
      title: "Sidebar becomes bottom sheet",
      text: "The 274px filter sidebar consumes the full viewport at 375px. On mobile, filters become a sticky button opening a full-screen bottom sheet. Last selection persists. Same mental model, adapted form factor. Agents don't need to relearn — they just reach down instead of to the side.",
    },
    {
      num: "02",
      title: "Same fare card, compressed density",
      text: "The fare listing card reflows to single column. Price and refund status stay primary. Baggage and meal details move to a tap-to-expand row: present when needed, not competing for the first scan. The hierarchy decision made in desktop paid off immediately here.",
    },
    {
      num: "03",
      title: "Touch targets and keyboard parity",
      text: "Inputs, date pickers, and passenger forms re-evaluated for touch. 44px minimum hit areas throughout. No information removed for mobile, only reorganised. Form length was reduced by grouping related fields, reducing scroll depth without cutting data.",
    },
    {
      num: "04",
      title: "Full journey, login to confirmation",
      text: "Every flow works end-to-end at 375px. Search, select, passenger details, review, confirm. Agents in the field needed the same capability as agents at a desk. Nothing cut. Edge cases like +1 day arrival and sold-out states were equally important on mobile — the flight doesn't care what screen you're on.",
    },
  ];

  const mobileEdgeCases = [
    { icon: "◒", title: "Bottom sheet filters", desc: "Filter panel adapts to full-screen sheet. Agent selections persist across open/close cycles." },
    { icon: "↕", title: "Scroll depth management", desc: "Long passenger forms grouped by section. Visible progress reduces perceived length." },
    { icon: "⟳", title: "Network retry state", desc: "GDS timeouts on mobile networks. Retry UI surfaces without losing form state." },
    { icon: "✓", title: "Thumb-zone confirmation", desc: "Primary CTAs placed in the lower 60% of screen. Reachable with one hand on 375px." },
  ];

  return (
    <CsSection id="mobile">
      <CsSectionHeader
        title="Mobile Adaptability"
        sub="Same platform, same data, different form factor. Nothing simplified for mobile, everything adapted."
      />

      {/* Story flow */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 40 }}>
        {items.map((item, i) => (
          <div key={item.num} className="csl-reveal" style={{
            display: "grid", gridTemplateColumns: "40px 1fr",
            gap: "0 16px",
            paddingTop: i === 0 ? 0 : 28,
            paddingBottom: 28,
            borderBottom: i < items.length - 1 ? "1px solid #F3F4F6" : "none",
          }}>
            <span style={{
              width: 36, height: 36, borderRadius: 10,
              background: "#EFF6FF", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "15px", fontWeight: 600, color: "#1E90FF",
              flexShrink: 0, marginTop: 2,
            }}>{item.num}</span>
            <div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 8, lineHeight: 1.3 }}>{item.title}</div>
              <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Figma embed */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <FigmaEmbed
          url={mobileEmbedUrl}
          label="Air IQ: Mobile · 375px"
          height={520}
        />
      </div>

      {/* Mobile edge cases */}
      <div className="csl-reveal" style={{ paddingTop: 32, borderTop: "1px solid #F3F4F6", marginBottom: 28 }}>
        <span className="csl-eyebrow">Mobile edge cases</span>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.8, margin: "0 0 20px" }}>
          The same care applied to desktop edge cases carried over to mobile — with additional constraints around connectivity, viewport, and one-handed use.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {mobileEdgeCases.map((ec) => (
            <div key={ec.title} style={{
              background: "#fff", borderRadius: 12, padding: "16px 18px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0, color: "#1E90FF" }}>{ec.icon}</span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>{ec.title}</span>
              </div>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{ec.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile edge cases Figma embed */}
      <div className="csl-reveal">
        <FigmaEmbed
          url={edgeCasesEmbedUrl}
          label="Air IQ: Mobile Edge Cases"
          height={480}
        />
      </div>
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
      <ProcessSection />
      <CoreComponentsSection />
      <ProductFlowSection />
      <MobileSection />
      <DesignSystemSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
