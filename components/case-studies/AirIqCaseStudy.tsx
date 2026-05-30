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
  { id: "overview",       label: "Overview"      },
  { id: "agent",          label: "The Agent"     },
  { id: "problem",        label: "Problem"       },
  { id: "approach",       label: "Research"      },
  { id: "journey",        label: "Journey Map"   },
  { id: "hypotheses",     label: "Hypotheses"    },
  { id: "principles",     label: "Principles"    },
  { id: "process",        label: "Process"       },
  { id: "insights",       label: "Decisions"     },
  { id: "product",        label: "Flow"          },
  { id: "design-system",  label: "Design System" },
  { id: "results",        label: "Impact"        },
  { id: "learnings",      label: "Learnings"     },
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
   PHOTO PLACEHOLDER
───────────────────────────────────────────────────────────────────── */
function PhotoPlaceholder({ label, description, aspectRatio = "16/7" }: {
  label: string; description: string; aspectRatio?: string;
}) {
  return (
    <div className="csl-reveal" style={{
      background: "linear-gradient(135deg, #F0F4F8 0%, #E8EFF5 100%)",
      borderRadius: 16,
      border: "2px dashed #CBD5E1",
      aspectRatio,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 10, padding: 24, marginBottom: 28,
      textAlign: "center",
    }}>
      <span style={{ fontSize: "2rem" }}>📷</span>
      <span style={{ fontSize: "14px", fontWeight: 700, color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
        {label}
      </span>
      <span style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.55, maxWidth: 480 }}>
        {description}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   OLD WORKFLOW DIAGRAM — 5-step chaos before Air IQ
───────────────────────────────────────────────────────────────────── */
function OldWorkflowDiagram() {
  const steps = [
    { icon: "⌨", tool: "GDS Terminal",    action: "Search availability",  pain: "Command-line only" },
    { icon: "🌐", tool: "Airline Website", action: "Check fare rules",      pain: "Different site per airline" },
    { icon: "📋", tool: "Spreadsheet",     action: "Compare & track",       pain: "Manual, error-prone" },
    { icon: "✍",  tool: "Portal Form",     action: "Re-enter all data",     pain: "No saved profiles" },
    { icon: "📧", tool: "Email / Print",   action: "Share with client",     pain: "3–4 extra steps" },
  ];
  return (
    <div style={{ background: "#FEF2F2", borderRadius: 16, padding: "22px 20px 18px", border: "1px solid #FECACA", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 0, overflowX: "auto" }}>
        {steps.map((s, i) => (
          <div key={s.tool} style={{ display: "flex", alignItems: "flex-start", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 108 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: "#FEE2E2", border: "1.5px solid #FCA5A5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginBottom: 8 }}>{s.icon}</div>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#EF4444", textAlign: "center" as const, marginBottom: 3 }}>{s.tool}</span>
              <span style={{ fontSize: "11px", color: "#374151", textAlign: "center" as const, lineHeight: 1.4, marginBottom: 3 }}>{s.action}</span>
              <span style={{ fontSize: "10px", color: "#EF4444", textAlign: "center" as const, fontStyle: "italic", lineHeight: 1.3 }}>{s.pain}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", paddingTop: 18, flexShrink: 0, margin: "0 4px" }}>
                <div style={{ width: 16, height: 1, background: "#FCA5A5" }} />
                <span style={{ fontSize: "10px", color: "#EF4444", lineHeight: 1 }}>→</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid #FECACA" }}>
        <p style={{ fontSize: "12px", color: "#991B1B", margin: 0, fontWeight: 600 }}>
          ~12 min per booking &nbsp;·&nbsp; 3–5 tabs open &nbsp;·&nbsp; Everything re-entered every session
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §01b  THE AGENT
───────────────────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────────────────
   PERSONA CARDS
───────────────────────────────────────────────────────────────────── */
const AGENT_PERSONAS = [
  {
    tag: "#SENIOR_AGENT", tagColor: "#1E90FF", tagBg: "#EFF6FF",
    name: "Rahul", age: 34, avatarBg: "#1E3A5F", avatarInitial: "RS",
    behaviors: ["20+ bookings per day, keyboard-first", "GDS commands as muscle memory", "Handles corporate & group accounts"],
    painPoints: ["Context-switches 3–4 tools per booking", "Silent fare changes damage client trust"],
    needs: ["Full keyboard navigation", "Saved client & passenger profiles"],
  },
  {
    tag: "#INDEPENDENT_AGENT", tagColor: "#22C55E", tagBg: "#F0FDF4",
    name: "Priya", age: 28, avatarBg: "#14532D", avatarInitial: "PM",
    behaviors: ["Phone-based client communication", "Tier-2 city routes, price-sensitive clients", "Shares fares via WhatsApp"],
    painPoints: ["No mobile portal in the old system", "3–4 steps to share a single fare"],
    needs: ["One-tap WhatsApp share", "Full mobile support"],
  },
  {
    tag: "#CORPORATE_BOOKER", tagColor: "#F97316", tagBg: "#FFF7ED",
    name: "Arjun", age: 40, avatarBg: "#7C2D12", avatarInitial: "AS",
    behaviors: ["4–6 passengers per group booking", "Manages company travel accounts", "Needs GST-compliant invoices"],
    painPoints: ["Re-enters the same 6 passengers weekly", "Tax totals unclear before confirmation"],
    needs: ["Saved multi-passenger profiles", "Full GST breakdown pre-payment"],
  },
];

function PersonaCard({ p }: { p: typeof AGENT_PERSONAS[0] }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "20px 20px 22px",
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      flexShrink: 0, width: 272,
    }}>
      {/* Tag */}
      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: p.tagColor, background: p.tagBg, borderRadius: 100, padding: "3px 10px", display: "inline-block", marginBottom: 16 }}>{p.tag}</div>
      {/* Name + Age + Polaroid */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <div style={{ fontSize: "9px", color: "#9CA3AF", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 2 }}>NAME</div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>{p.name}</div>
          </div>
          <div>
            <div style={{ fontSize: "9px", color: "#9CA3AF", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 2 }}>AGE</div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#111827" }}>{p.age}</div>
          </div>
        </div>
        {/* Polaroid avatar */}
        <div style={{ background: "#fff", padding: "5px 5px 14px", boxShadow: "0 3px 14px rgba(0,0,0,0.14)", borderRadius: 3, transform: "rotate(4deg)", flexShrink: 0 }}>
          <div style={{ width: 52, height: 52, borderRadius: 2, background: p.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}>{p.avatarInitial}</div>
        </div>
      </div>
      {/* Behavior */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: "9px", fontWeight: 700, color: p.tagColor, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6 }}>BEHAVIOR</div>
        <ul style={{ margin: 0, padding: "0 0 0 13px" }}>
          {p.behaviors.map((b, i) => <li key={i} style={{ fontSize: "11px", color: "#374151", lineHeight: 1.55, marginBottom: 3 }}>{b}</li>)}
        </ul>
      </div>
      {/* Pain + Needs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, borderTop: "1px solid #F3F4F6", paddingTop: 12 }}>
        <div>
          <div style={{ fontSize: "9px", fontWeight: 700, color: "#EF4444", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 5 }}>PAIN POINT</div>
          <ul style={{ margin: 0, padding: "0 0 0 12px" }}>
            {p.painPoints.map((pt, i) => <li key={i} style={{ fontSize: "10px", color: "#374151", lineHeight: 1.5, marginBottom: 3 }}>{pt}</li>)}
          </ul>
        </div>
        <div>
          <div style={{ fontSize: "9px", fontWeight: 700, color: "#22C55E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 5 }}>NEEDS</div>
          <ul style={{ margin: 0, padding: "0 0 0 12px" }}>
            {p.needs.map((n, i) => <li key={i} style={{ fontSize: "10px", color: "#374151", lineHeight: 1.5, marginBottom: 3 }}>{n}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   COMPETITIVE FIGMA TABS
───────────────────────────────────────────────────────────────────── */
function CompetitiveFigmaTabs() {
  const [active, setActive] = useState(0);
  const platforms = COMPETITORS.map((c) => ({
    ...c,
    embedUrl: `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/D6XwtXxLfGueNa2O4fwkHy/AirIQ-Case-Study?node-id=${c.nodeId}`,
  }));
  return (
    <div className="csl-reveal" style={{ marginTop: 20 }}>
      {/* Tab pills */}
      <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" as const }}>
        {platforms.map((p, i) => (
          <button key={p.slug} onClick={() => setActive(i)} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100, border: "none",
            background: i === active ? p.color : "#F3F4F6",
            color: i === active ? "#fff" : "#374151",
            fontSize: "12px", fontWeight: 700, cursor: "pointer",
            transition: "all 0.2s ease",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/Image/Airiq/research/logo-${p.slug}.png`} alt={p.name}
              style={{ maxHeight: 14, maxWidth: 50, objectFit: "contain", filter: i === active ? "brightness(10)" : "none" }} />
          </button>
        ))}
      </div>
      {/* Figma embed */}
      <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ height: 36, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", padding: "0 14px", gap: 8 }}>
          <FigmaIcon />
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#374151" }}>
            Competitive Analysis — {platforms[active].name}
          </span>
        </div>
        <iframe
          key={active}
          src={platforms[active].embedUrl}
          allowFullScreen
          style={{ width: "100%", height: 460, border: "none", display: "block" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   AGENT JOURNEY MAP
───────────────────────────────────────────────────────────────────── */
const JOURNEY_STAGES = [
  {
    label: "Fare Search",
    emoji: "😤", score: 2,
    behaviour: "Opens GDS terminal + airline site + spreadsheet simultaneously to answer one question",
    pain: "3 tools to answer what's available at what price — every search",
    response: "Unified fare listing with all tiers, baggage, and refundability inline",
  },
  {
    label: "Compare & Filter",
    emoji: "😕", score: 1,
    behaviour: "Opens filter modal, loses all comparison context, has to re-scan results from scratch",
    pain: "Every filter click destroys the comparison state just built up",
    response: "Persistent 274px sidebar — filter and compare simultaneously",
  },
  {
    label: "Select Flight",
    emoji: "😐", score: 3,
    behaviour: "Clicks out to airline site to verify fare rules and baggage before committing",
    pain: "Refundability is never shown inline — agents verify manually or guess",
    response: "Refundability + per-leg baggage always visible, no page change",
  },
  {
    label: "Passenger Entry",
    emoji: "😕", score: 2,
    behaviour: "Re-types passenger names, passport numbers, and FF numbers from memory or a notebook",
    pain: "Same 6 corporate travellers booked every week — entirely manual",
    response: "Saved profiles auto-fill FF numbers, passport, and meal preference",
  },
  {
    label: "Confirm & Share",
    emoji: "😤", score: 1,
    behaviour: "Downloads PDF, opens email, opens WhatsApp separately, re-types fare details",
    pain: "3–4 separate actions to share what should be one step",
    response: "PDF, WhatsApp, Email on one screen with per-passenger selection",
  },
];

function JourneyMapSection() {
  const scoreToTop = (s: number) => `${((5 - s) / 4) * 60 + 5}px`;
  const scoreToSvgY = (s: number) => ((5 - s) / 4) * 60 + 10;
  const svgPoints = JOURNEY_STAGES.map((s, i) => `${i * 25 + 12.5},${scoreToSvgY(s.score)}`).join(" ");

  const ROW_LABEL_STYLE: React.CSSProperties = {
    fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
    letterSpacing: "0.1em", lineHeight: 1.3,
  };
  const CELL_STYLE: React.CSSProperties = { padding: "14px 12px" };

  return (
    <CsSection id="journey">
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
        <span style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, color: "#F3F4F6", lineHeight: 1, letterSpacing: "-0.03em", userSelect: "none" as const }}>08</span>
        <h2 style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", fontWeight: 800, color: "#111827", margin: 0, letterSpacing: "-0.02em" }}>Agent journey map</h2>
      </div>
      <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 520 }}>
        How agents felt across a single booking on the old portal — before Air IQ. Every emotion is a design decision waiting to happen.
      </p>

      <div className="csl-reveal" style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #F3F4F6" }}>
        {/* Stage headers */}
        <div style={{ display: "grid", gridTemplateColumns: "130px repeat(5, 1fr)", gap: "0 1px", background: "#F3F4F6" }}>
          <div style={{ background: "#F9FAFB", padding: "12px 16px" }} />
          {JOURNEY_STAGES.map((s) => (
            <div key={s.label} style={{ background: "#fff", padding: "12px 12px" }}>
              <div style={{ ...ROW_LABEL_STYLE, color: "#9CA3AF" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Emotions row — SVG curve + emoji */}
        <div style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "0 1px", background: "#F3F4F6" }}>
          <div style={{ background: "#F9FAFB", padding: "16px", display: "flex", alignItems: "center" }}>
            <span style={{ ...ROW_LABEL_STYLE, color: "#9CA3AF" }}>EMOTIONS</span>
          </div>
          <div style={{ background: "#fff", position: "relative", height: 80 }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 100 80" preserveAspectRatio="none">
              <polyline points={svgPoints} stroke="#E5E7EB" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {JOURNEY_STAGES.map((s, i) => (
              <div key={i} style={{
                position: "absolute",
                left: `${i * 20 + 10}%`,
                top: scoreToTop(s.score),
                transform: "translate(-50%, -50%)",
                fontSize: "1.25rem",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.18))",
              }}>{s.emoji}</div>
            ))}
          </div>
        </div>

        {/* Behaviour row */}
        <div style={{ display: "grid", gridTemplateColumns: "130px repeat(5, 1fr)", gap: "0 1px", background: "#F3F4F6" }}>
          <div style={{ background: "#F9FAFB", padding: "16px", display: "flex", alignItems: "flex-start", paddingTop: 16 }}>
            <span style={{ ...ROW_LABEL_STYLE, color: "#9CA3AF" }}>BEHAVIOUR</span>
          </div>
          {JOURNEY_STAGES.map((s) => (
            <div key={s.label} style={{ background: "#fff", ...CELL_STYLE }}>
              <p style={{ fontSize: "11px", color: "#374151", lineHeight: 1.55, margin: 0 }}>{s.behaviour}</p>
            </div>
          ))}
        </div>

        {/* Pain points row */}
        <div style={{ display: "grid", gridTemplateColumns: "130px repeat(5, 1fr)", gap: "0 1px", background: "#F3F4F6" }}>
          <div style={{ background: "#FEF2F2", padding: "16px", display: "flex", alignItems: "flex-start", paddingTop: 16 }}>
            <span style={{ ...ROW_LABEL_STYLE, color: "#EF4444" }}>PAIN POINTS</span>
          </div>
          {JOURNEY_STAGES.map((s) => (
            <div key={s.label} style={{ background: "#FEF2F2", ...CELL_STYLE }}>
              <p style={{ fontSize: "11px", color: "#374151", lineHeight: 1.55, margin: 0 }}>{s.pain}</p>
            </div>
          ))}
        </div>

        {/* Air iQ response row */}
        <div style={{ display: "grid", gridTemplateColumns: "130px repeat(5, 1fr)", gap: "0 1px", background: "#F3F4F6" }}>
          <div style={{ background: "#EFF6FF", padding: "16px", display: "flex", alignItems: "flex-start", paddingTop: 16 }}>
            <span style={{ ...ROW_LABEL_STYLE, color: "#1E90FF" }}>AIR iQ RESPONSE</span>
          </div>
          {JOURNEY_STAGES.map((s) => (
            <div key={s.label} style={{ background: "#EFF6FF", ...CELL_STYLE }}>
              <p style={{ fontSize: "11px", color: "#1E3A8A", lineHeight: 1.55, margin: 0, fontWeight: 600 }}>{s.response}</p>
            </div>
          ))}
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HYPOTHESES BOARD
───────────────────────────────────────────────────────────────────── */
const HYPOTHESES = [
  { num: "01", problem: "Fare data overload at search results", hypothesis: "If we prioritise price + refundability visually, agents will scan and compare 2× faster without opening separate airline sites.", bg: "#FFF1F0", tape: "#FCA5A5", rot: -3 },
  { num: "02", problem: "Filter modal breaks comparison loop", hypothesis: "If we make the filter panel always visible, agents will filter and compare simultaneously — no context loss.", bg: "#FEFCE8", tape: "#FDE047", rot: 4 },
  { num: "03", problem: "Fare rules always one extra click away", hypothesis: "If we show refundability inline on every fare row, agents will stop cross-referencing airline websites mid-session.", bg: "#F0FDF4", tape: "#86EFAC", rot: -5 },
  { num: "04", problem: "Passenger data manually re-entered every session", hypothesis: "If we save passenger profiles with FF numbers and passport details, booking form time drops by up to 60%.", bg: "#EFF6FF", tape: "#7DD3FC", rot: 3 },
  { num: "05", problem: "Confirmation requires 3–4 extra steps to share", hypothesis: "If we surface PDF, WhatsApp, and Email on one confirmation screen, agents confirm and distribute in a single flow.", bg: "#FFF7ED", tape: "#FDB77B", rot: -4 },
];

function HypothesisNote({ h }: { h: typeof HYPOTHESES[0] }) {
  return (
    <div style={{
      transform: `rotate(${h.rot}deg)`,
      background: h.bg, borderRadius: 6,
      padding: "20px 16px 24px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
      position: "relative", transformOrigin: "center",
    }}>
      <div style={{ position: "absolute", top: -7, left: "50%", transform: "translateX(-50%)", width: 32, height: 13, borderRadius: 2, background: h.tape, opacity: 0.75 }} />
      <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(0,0,0,0.25)", letterSpacing: "0.1em", marginBottom: 8 }}>{h.num}</div>
      <p style={{ fontSize: "12px", fontWeight: 700, color: "#111827", lineHeight: 1.4, margin: "0 0 10px" }}>{h.problem}</p>
      <div style={{ height: 1, background: "rgba(0,0,0,0.08)", marginBottom: 10 }} />
      <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.6, margin: 0, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
        <span style={{ fontWeight: 700, fontStyle: "normal", color: "#1E90FF" }}>If we&hellip;&nbsp;</span>
        {h.hypothesis.replace(/^If we /, "")}
      </p>
    </div>
  );
}

function HypothesesSection() {
  return (
    <CsSection id="hypotheses">
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
        <span style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, color: "#F3F4F6", lineHeight: 1, letterSpacing: "-0.03em", userSelect: "none" as const }}>09</span>
        <h2 style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", fontWeight: 800, color: "#111827", margin: 0, letterSpacing: "-0.02em" }}>Hypotheses</h2>
      </div>
      <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 520 }}>
        Research surfaced the problems. These were the bets placed before a single wireframe was drawn — each one traceable to a specific finding.
      </p>
      {/* Row 1: 3 notes */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 24 }}>
        {HYPOTHESES.slice(0, 3).map((h) => <HypothesisNote key={h.num} h={h} />)}
      </div>
      {/* Row 2: 2 notes centered */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: "67%", margin: "0 auto" }}>
        {HYPOTHESES.slice(3).map((h) => <HypothesisNote key={h.num} h={h} />)}
      </div>
    </CsSection>
  );
}

const AGENT_PROFILE_ITEMS = [
  { icon: "⌨", label: "Keyboard-first", text: "Built their workflow around GDS commands over years. Muscle memory, not menus. A mouse-dependent portal felt like a demotion." },
  { icon: "📞", label: "Always on a call", text: "Agents confirm fares live with clients. Every extra second of searching is a client listening to silence. Speed is credibility." },
  { icon: "💼", label: "Commission-driven", text: "Speed is income. Saving 5 minutes per booking across 15 bookings a day is real money. Friction is not a UX problem — it is a financial one." },
  { icon: "🔄", label: "Repeat routes, repeat clients", text: "DEL→BOM, same 3 travellers, different dates. Agents work in patterns. A tool that doesn't recognise repetition forces them to start over every session." },
];

function TheAgentSection() {
  return (
    <CsSection id="agent">
      <CsSectionHeader
        title="Who is the agent?"
        sub="25,000 users. The kind of tool they needed couldn't be designed from assumptions."
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Image/Airiq/thumnail/agent-image.png"
        alt="Travel agent at work"
        className="csl-reveal"
        style={{ width: "100%", borderRadius: 16, marginBottom: 28, display: "block" }}
      />

      {/* Persona cards — horizontal scroll */}
      <div className="csl-reveal" style={{
        display: "flex", gap: 16, overflowX: "auto", paddingBottom: 12, marginBottom: 36,
        scrollbarWidth: "none" as React.CSSProperties["scrollbarWidth"],
      }}>
        {AGENT_PERSONAS.map((p) => <PersonaCard key={p.name} p={p} />)}
      </div>

      <div className="csl-reveal">
        <span className="csl-eyebrow">One booking. Five tools. Every time.</span>
        <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7, margin: "0 0 16px", maxWidth: 540 }}>
          Before Air IQ, a single booking meant switching between a GDS terminal, airline websites, a spreadsheet, the booking portal, and then a separate tool to share the fare. Not a workflow — a workaround that agents had built over years because nothing better existed.
        </p>
        <OldWorkflowDiagram />
      </div>
    </CsSection>
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
        sub="Feedback had been consistent for months. This wasn't a feature gap — it was a product-level failure that needed to be solved at the design level."
      />

      {/* Full-width agent quote — the single most important sentence in the whole problem */}
      <div className="csl-reveal" style={{ marginBottom: 44 }}>
        <div style={{
          background: "#0B1E3D", borderRadius: 20, padding: "44px 40px",
          border: "1px solid rgba(30,144,255,0.15)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,144,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
          <span style={{ fontSize: "clamp(4rem,8vw,6rem)", color: "#1E90FF", lineHeight: 1, position: "absolute", top: 8, left: 28, opacity: 0.15, userSelect: "none", fontFamily: "serif" }}>&ldquo;</span>
          <p style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", fontWeight: 600,
            color: "rgba(255,255,255,0.9)", lineHeight: 1.7,
            margin: "24px 0 24px", position: "relative", zIndex: 1, maxWidth: 600,
          }}>
            I open three windows just to check one fare. GDS for availability, the airline site for the rules, and a spreadsheet to track what I&apos;ve already told the client.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative", zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(30,144,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#60BFFF" }}>SA</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>Senior travel agent</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: 1 }}>8 years experience · Pre-launch interview</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain moments */}
      <div className="csl-reveal" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {PAIN_MOMENTS.map((m) => (
          <div key={m.title} style={{ borderLeft: "3px solid #1E90FF", paddingLeft: 20 }}>
            <p className="csl-h3" style={{ marginBottom: 6 }}>{m.title}</p>
            <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.75, margin: "0 0 10px" }}>{m.scene}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 600 }}>Fixed by</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#1E90FF", background: "#EFF6FF", borderRadius: 6, padding: "2px 10px" }}>{m.solvedBy}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo placeholder — old portal */}
      <div className="csl-reveal" style={{ marginTop: 36 }}>
        <span className="csl-eyebrow">What agents were working with</span>
        <PhotoPlaceholder
          label="Old portal screenshot"
          description="Screenshot: the original Air IQ portal — equal visual weight across all fare tiers, no hierarchy, dense data tables, no mobile support. The visual evidence of why this redesign was necessary."
          aspectRatio="16/8"
        />
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
  "Fare listing is a constant problem across every portal. Some handle it partially, none handle it well. **All decisions start here.**",
  "Price dominates every scan, but **fare rules are never inline**. Refundability is always one extra click away across all 4 platforms.",
  "Agents need to filter and compare simultaneously. Every portal hides filters behind a modal, **breaking the compare loop**.",
  "TripJack had the right data, wrong **visual hierarchy**. Refundability and seat count were buried every time.",
  "**80% of B2B bookings** leave add-ons empty, yet every portal shows those empty rows, creating confusion at review.",
];

/* ─────────────────────────────────────────────────────────────────────
   INTERVIEW PROCESS TIMELINE
───────────────────────────────────────────────────────────────────── */
const INTERVIEW_STEPS = [
  { num: 1, color: "#EF4444", bg: "#FEE2E2", label: "Recruit",    desc: "4 active agents across agency sizes" },
  { num: 2, color: "#F97316", bg: "#FED7AA", label: "Screen",     desc: "15-min pre-call to confirm tools & volume" },
  { num: 3, color: "#EAB308", bg: "#FEF9C3", label: "Observe",    desc: "Watched 1 live booking per agent" },
  { num: 4, color: "#22C55E", bg: "#DCFCE7", label: "Interview",  desc: "45 min · 7 structured questions" },
  { num: 5, color: "#1E90FF", bg: "#EFF6FF", label: "Synthesise", desc: "Mapped patterns to design decisions" },
];

function InterviewProcessTimeline() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: "#fff", borderRadius: 16, padding: "32px 24px 24px",
      border: "1px solid #F3F4F6",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
        {/* Connecting gradient line */}
        <div style={{
          position: "absolute", top: 19, left: 20, right: 20, height: 2,
          background: "linear-gradient(90deg, #EF4444 0%, #F97316 25%, #EAB308 50%, #22C55E 75%, #1E90FF 100%)",
          borderRadius: 2, zIndex: 0,
          opacity: vis ? 1 : 0, transition: "opacity 0.8s 0.1s ease",
        }} />
        {INTERVIEW_STEPS.map((s, i) => (
          <div key={s.label} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1,
            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(10px)",
            transition: `opacity 0.45s ${i * 0.08}s ease, transform 0.45s ${i * 0.08}s ease`,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: s.bg, border: `2.5px solid ${s.color}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 800, color: s.color,
              marginBottom: 12, boxShadow: `0 0 0 4px ${s.bg}`,
            }}>{s.num}</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginBottom: 4, textAlign: "center" as const }}>{s.label}</div>
            <div style={{ fontSize: "11px", color: "#9CA3AF", lineHeight: 1.4, textAlign: "center" as const, maxWidth: 88 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   INTERVIEW QUESTIONS BOARD — sticky notes around a video call
───────────────────────────────────────────────────────────────────── */
const STICKY_QUESTIONS = [
  { num: "01", q: "Walk me through your last booking. What tools did you open first?",                     bg: "#FFF1F0", tape: "#FCA5A5", rot: -8 },
  { num: "02", q: "What slows you down the most when comparing fares?",                                   bg: "#FEFCE8", tape: "#FDE047", rot: 5  },
  { num: "03", q: "When a price changes after you've told a client — what happens next?",                  bg: "#EFF6FF", tape: "#7DD3FC", rot: -6 },
  { num: "04", q: "How do you share fare options with clients right now?",                                 bg: "#F0FDF4", tape: "#86EFAC", rot: 7  },
  { num: "05", q: "Which information do you check on every booking before confirming?",                   bg: "#FFF7ED", tape: "#FDB77B", rot: -5 },
  { num: "06", q: "If you could remove one step from your current workflow, what would it be?",           bg: "#F5F3FF", tape: "#C4B5FD", rot: 6  },
];

function StickyNote({ num, q, bg, tape, rot }: typeof STICKY_QUESTIONS[0]) {
  return (
    <div style={{
      transform: `rotate(${rot}deg)`, background: bg,
      borderRadius: 4, padding: "18px 14px 22px",
      boxShadow: "0 4px 18px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
      position: "relative", transformOrigin: "center",
    }}>
      {/* Tape */}
      <div style={{
        position: "absolute", top: -7, left: "50%", transform: "translateX(-50%)",
        width: 30, height: 13, borderRadius: 2,
        background: tape, opacity: 0.7,
      }} />
      <div style={{
        fontSize: "10px", fontWeight: 800, color: "rgba(0,0,0,0.3)",
        letterSpacing: "0.1em", marginBottom: 8,
      }}>{num}</div>
      <p style={{
        fontSize: "12px", color: "#1F2937", lineHeight: 1.6,
        margin: 0, fontFamily: "Georgia, serif", fontStyle: "italic",
      }}>{q}</p>
    </div>
  );
}

function VideoCallMockup() {
  return (
    <div style={{
      background: "#111827", borderRadius: 22,
      border: "6px solid #1F2937",
      boxShadow: "0 20px 56px rgba(0,0,0,0.24)",
      overflow: "hidden", width: "100%",
    }}>
      {/* Status bar */}
      <div style={{ background: "#000", padding: "7px 14px 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "9px", fontWeight: 700, color: "#fff" }}>9:41</span>
        <div style={{ display: "flex", gap: 3, alignItems: "flex-end" }}>
          {[5, 7, 10].map((h, i) => <div key={i} style={{ width: 3, height: h, borderRadius: 1, background: "#fff" }} />)}
        </div>
      </div>
      {/* Screen */}
      <div style={{ background: "#0f172a", padding: "8px" }}>
        {/* Call header */}
        <div style={{ background: "#0f3460", borderRadius: 6, padding: "5px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: "8px", fontWeight: 700, color: "#60BFFF" }}>✦ AIR iQ · Interview</span>
          <span style={{ fontSize: "7px", background: "#EF4444", color: "#fff", borderRadius: 3, padding: "2px 5px", fontWeight: 700 }}>● REC</span>
        </div>
        {/* Main participant */}
        <div style={{ background: "#0f172a", borderRadius: 6, height: 88, marginBottom: 5, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>👤</div>
          <span style={{ position: "absolute", bottom: 5, left: 7, fontSize: "7px", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Travel Agent</span>
        </div>
        {/* Self view */}
        <div style={{ background: "#1e293b", borderRadius: 6, height: 44, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#1E4A8F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>👤</div>
          <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.35)" }}>Nikunj · UX Researcher</span>
        </div>
        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: 7, paddingBottom: 4 }}>
          {["🎤","📹","💬","✕"].map((icon, i) => (
            <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: i === 3 ? "#EF4444" : "#374151", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InterviewQuestionsBoard() {
  const left  = STICKY_QUESTIONS.slice(0, 3);
  const right = STICKY_QUESTIONS.slice(3, 6);
  return (
    <div style={{
      background: "linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%)",
      borderRadius: 20, padding: "40px 24px",
      border: "1px solid #E2E8F0",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 180px 1fr", gap: 20, alignItems: "center" }}>
        {/* Left notes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {left.map((n) => <StickyNote key={n.num} {...n} />)}
        </div>
        {/* Center phone */}
        <VideoCallMockup />
        {/* Right notes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {right.map((n) => <StickyNote key={n.num} {...n} />)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   COMPETITIVE MATRIX TABLE
───────────────────────────────────────────────────────────────────── */
const COMP_MATRIX_FEATURES = [
  "Fare tiers visible inline",
  "Refundability always shown (not on click)",
  "Persistent filters — never modal",
  "Mobile support",
  "Empty SSR / add-on rows hidden",
];

const COMP_MATRIX_DATA: ("yes" | "partial" | "no")[][] = [
  ["partial", "yes",     "yes",     "partial"],
  ["no",      "no",      "no",      "no"     ],
  ["no",      "no",      "no",      "no"     ],
  ["yes",     "no",      "no",      "yes"    ],
  ["no",      "no",      "no",      "no"     ],
];

function CompetitiveMatrix() {
  const Cell = ({ val }: { val: "yes" | "partial" | "no" }) => {
    if (val === "yes")     return <span style={{ color: "#22C55E", fontSize: "15px", fontWeight: 700 }}>✓</span>;
    if (val === "partial") return <span style={{ color: "#F97316", fontSize: "14px" }}>◐</span>;
    return <span style={{ color: "#EF4444", fontSize: "14px" }}>✕</span>;
  };
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #F3F4F6" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#F9FAFB" }}>
            <th style={{ padding: "12px 16px", textAlign: "left" as const, fontSize: "11px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.1em", width: "38%" }}>Feature</th>
            {COMPETITORS.map((p) => (
              <th key={p.slug} style={{ padding: "12px 10px", textAlign: "center" as const, fontSize: "12px", fontWeight: 700 }}>
                <div style={{ color: p.color }}>{p.name.split("My").join("My​")}</div>
                <div style={{ fontSize: "10px", color: "#9CA3AF", fontWeight: 400, marginTop: 1 }}>{p.type.split(" · ")[0]}</div>
              </th>
            ))}
            <th style={{ padding: "12px 10px", textAlign: "center" as const, background: "rgba(30,144,255,0.05)", borderLeft: "2px solid rgba(30,144,255,0.15)" }}>
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#1E90FF" }}>Air iQ</div>
              <div style={{ fontSize: "10px", color: "#1E90FF", opacity: 0.7, marginTop: 1 }}>Redesign</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMP_MATRIX_FEATURES.map((feat, i) => (
            <tr key={feat} style={{ borderTop: "1px solid #F3F4F6", background: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
              <td style={{ padding: "13px 16px", fontSize: "13px", color: "#374151", fontWeight: 500 }}>{feat}</td>
              {COMP_MATRIX_DATA[i].map((val, j) => (
                <td key={j} style={{ padding: "13px 10px", textAlign: "center" as const }}><Cell val={val} /></td>
              ))}
              <td style={{ padding: "13px 10px", textAlign: "center" as const, background: "rgba(30,144,255,0.04)", borderLeft: "2px solid rgba(30,144,255,0.1)" }}>
                <span style={{ color: "#1E90FF", fontSize: "16px", fontWeight: 800 }}>✓</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Legend */}
      <div style={{ padding: "10px 16px", borderTop: "1px solid #F3F4F6", display: "flex", gap: 20, background: "#F9FAFB" }}>
        {[["✓", "#22C55E", "Yes"], ["◐", "#F97316", "Partial"], ["✕", "#EF4444", "No"]].map(([sym, col, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ color: col, fontSize: "13px" }}>{sym}</span>
            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
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
   §03  RESEARCH & APPROACH
───────────────────────────────────────────────────────────────────── */

const RESEARCH_SYNTHESIS = [
  { insight: "Fare data overload on every search",       decision: "Fare listing card — explicit visual hierarchy, price first"   },
  { insight: "Filters break comparison loop",             decision: "Persistent 274px sidebar — never modal, always visible"       },
  { insight: "Fare rules hidden across all 4 platforms", decision: "Refundability inline by default — never one click away"       },
  { insight: "80% of bookings have empty SSR rows",      decision: "Conditional fields — only rendered when data is present"      },
];

function ApproachSection() {
  return (
    <CsSection id="approach">
      <CsSectionHeader
        title="Research"
        sub="One month of discovery. Four agent interviews. Four competitor platforms. No wireframes until the research was done."
      />

      {/* ── Interview process — horizontal timeline ── */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
          <span className="csl-eyebrow" style={{ margin: 0 }}>04 · In-depth interviews</span>
          <span style={{ fontSize: "12px", color: "#9CA3AF" }}>4 sessions · 45 min each</span>
        </div>
        <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7, margin: "0 0 20px", maxWidth: 520 }}>
          1-on-1 sessions with active travel agents — observed one live booking per agent before asking a single question.
        </p>
        <InterviewProcessTimeline />
      </div>

      {/* ── Sticky note board — interview questions ── */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <span className="csl-eyebrow">Questions asked in every session</span>
        <InterviewQuestionsBoard />
      </div>

      {/* ── Competitive analysis ── */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <span className="csl-eyebrow">Competitor landscape</span>
        {/* Logo row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 16 }}>
          {COMPETITORS.map((comp) => (
            <div key={comp.slug} style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 10, padding: "10px 14px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/Image/Airiq/research/logo-${comp.slug}.png`} alt={comp.name} style={{ maxWidth: 60, maxHeight: 24, objectFit: "contain", display: "block", flexShrink: 0 }} />
            </div>
          ))}
        </div>
        {/* Matrix table */}
        <CompetitiveMatrix />
      </div>

      {/* ── Insight cards ── */}
      <div className="csl-reveal" style={{ marginBottom: 40 }}>
        <span className="csl-eyebrow">What the research surfaced</span>
        <ResearchInsightCards />
      </div>

      {/* ── Research → Decisions synthesis bridge ── */}
      <div className="csl-reveal">
        <span className="csl-eyebrow">From research to decisions</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 14 }}>
          {RESEARCH_SYNTHESIS.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 28px 1fr",
              gap: 12, alignItems: "center",
              background: "#fff", borderRadius: 10, padding: "13px 16px",
              border: "1px solid #F3F4F6",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FCA5A5", flexShrink: 0, display: "block" }} />
                <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{row.insight}</span>
              </div>
              <span style={{ fontSize: "16px", color: "#1E90FF", textAlign: "center" as const, fontWeight: 700 }}>→</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1E90FF", flexShrink: 0, display: "block" }} />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827", lineHeight: 1.5 }}>{row.decision}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03b  DESIGN PRINCIPLES
───────────────────────────────────────────────────────────────────── */
const DESIGN_PRINCIPLES = [
  {
    num: "01",
    title: "Organised density, not consumer simplicity",
    body: "B2B professionals are trained to handle complexity. Fare tiers, baggage rules, GST splits — agents need all of it. The job is to organise information by priority, not strip it away. Hiding things is a consumer-app habit that breaks professional workflows.",
    contrast: "Consumer OTAs simplify by hiding. Air IQ simplifies by organising.",
  },
  {
    num: "02",
    title: "Always visible, never gated",
    body: "Refundability, seat count, price alerts — agents check these on every single booking. Making critical information \"available on demand\" is not enough when demand is constant. If it matters every time, it should be present every time.",
    contrast: "Every competitor platform: one click away. Air IQ: always on screen.",
  },
  {
    num: "03",
    title: "Zero dead ends",
    body: "An agent mid-booking with a sold-out seat, a GDS timeout, or an infant association error has a client on hold. Every failure state, every edge case has a designed path forward. Nothing leaves the agent stranded with a blank screen and no options.",
    contrast: "Most portals: vague error or blank screen. Air IQ: three designed failure states per scenario.",
  },
];

function DesignPrinciplesSection() {
  return (
    <CsSection id="principles">
      <CsSectionHeader
        title="Design Principles"
        sub="Research surfaces problems. Principles turn problems into a consistent direction. These three filtered every decision that followed."
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {DESIGN_PRINCIPLES.map((p, i) => (
          <div key={p.num} className="csl-reveal" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 28, padding: "36px 0",
            borderTop: i > 0 ? "1px solid #F3F4F6" : "none",
            alignItems: "center",
          }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#1E90FF", display: "block", marginBottom: 14 }}>
                Principle {p.num}
              </span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", margin: "0 0 14px", lineHeight: 1.25, letterSpacing: "-0.015em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.8, margin: 0 }}>{p.body}</p>
            </div>
            <div style={{
              background: "#0B1E3D", borderRadius: 14, padding: "22px 24px",
              border: "1px solid rgba(30,144,255,0.15)",
            }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.12em", display: "block", marginBottom: 10 }}>In practice</span>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{p.contrast}</p>
            </div>
          </div>
        ))}
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

      {/* Elevated outer card */}
      <div style={{
        position: "relative",
        background: "#0B1E3D",
        border: "1px solid rgba(30,144,255,0.35)",
        borderRadius: 20,
        boxShadow: "0 0 40px rgba(30,144,255,0.12), 0 8px 32px rgba(0,0,0,0.18)",
        padding: "20px 20px 24px",
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
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 16,
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
              borderRadius: 8, padding: "4px 12px",
            }}>✦ Shipped</span>
          </div>

          {/* Inner image card with generous padding */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(30,144,255,0.15)",
            borderRadius: 14,
            overflow: "hidden",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Image/Airiq/first%20core/final.png"
              alt="Final fare listing design"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Why + Impact */}
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
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
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{
              fontSize: "13px", fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              margin: "0 0 4px", letterSpacing: "-0.01em",
            }}>Where else it lives</p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
              This card extends across all search types
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
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
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.04)",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.label} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: 3 }}>{item.sub}</div>
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
    <div style={{ marginBottom: 64 }}>

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
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#fff",
          background: "#1E90FF", borderRadius: 6, padding: "3px 10px",
        }}>Shipped</span>
      )}
    </div>
  );

  return (
    <div style={{ marginBottom: 64 }}>

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
            <div style={{ borderRadius: 12, overflow: "hidden" }}>
              <Bar tint />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Image/Airiq/Second%20core/new.png" alt="Redesigned itinerary card" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
          <div style={{ padding: "28px 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                color: "#1E90FF", background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)",
                borderRadius: 6, padding: "4px 10px", marginBottom: 14,
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
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#fff",
          background: "#1E90FF", borderRadius: 6, padding: "3px 10px",
        }}>Shipped</span>
      )}
    </div>
  );

  return (
    <div style={{ marginBottom: 64 }}>

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
            <div style={{ borderRadius: 12, overflow: "hidden" }}>
              <Bar tint />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Image/Airiq/third%20core/new.png" alt="Redesigned review table" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
          <div style={{ padding: "28px 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                color: "#1E90FF", background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)",
                borderRadius: 6, padding: "4px 10px", marginBottom: 14,
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
      <div style={{ paddingTop: 0 }}>
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
   §05  ANNOTATED PRODUCT FLOW — data + components
───────────────────────────────────────────────────────────────────── */

interface FlowCalloutData {
  id: number;
  label: string;
  xPct: number;
  yPct: number;
  decision: string;
}

interface FlowStageData {
  step: string;
  heading: string;
  sub: string;
  narrative: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
  callouts: FlowCalloutData[];
  rejected?: { label: string; reason: string };
}

const FLOW_STAGES: FlowStageData[] = [
  {
    step: "01 / 08",
    heading: "Agent Authentication",
    sub: "Trust established before the first click",
    narrative: "Most B2B portals treat login as a formality. We treated it as a trust signal — brand proof on the left before the task begins on the right.",
    imageSrc: "/Image/Airiq/presentation/login.png",
    imageAlt: "AIR iQ login screen",
    url: "airiq.com/login",
    callouts: [
      { id: 1, xPct: 73, yPct: 38, label: "Role selector", decision: "Agent vs Distributor chosen before credentials. Each role loads a different dashboard — no disambiguation step after login." },
      { id: 2, xPct: 24, yPct: 54, label: "Brand half", decision: "Splitting the screen: brand left, form right. Users see who they're logging into before typing a single character. Anxiety at entry drops." },
    ],
  },
  {
    step: "02 / 08",
    heading: "The Command Centre",
    sub: "Every recurring action within one gesture",
    narrative: "Fare type selection surfaces before the route query — a deliberate B2B-first inversion. Every consumer OTA buries this. We surfaced it.",
    imageSrc: "/Image/Airiq/presentation/homepage.png",
    imageAlt: "AIR iQ home dashboard",
    url: "airiq.com/home",
    callouts: [
      { id: 1, xPct: 62, yPct: 22, label: "Fare type upfront", decision: "SME / NDC / SOTO visible before the route. Agents lock contract type before comparing prices — not after. B2B logic, not consumer logic." },
      { id: 2, xPct: 62, yPct: 74, label: "Recent searches strip", decision: "Last 3 routes surface below the search form. Agents re-book the same routes daily — re-entry friction eliminated in one decision." },
    ],
  },
  {
    step: "03 / 08",
    heading: "Flight Listing",
    sub: "19 filters. Zero cognitive overload.",
    narrative: "Every competitor studied uses a modal for filters. Which breaks the compare-filter-compare loop agents depend on. We rebuilt this from first principles.",
    imageSrc: "/Image/Airiq/presentation/search-result.png",
    imageAlt: "AIR iQ search results",
    url: "airiq.com/search",
    callouts: [
      { id: 1, xPct: 10, yPct: 55, label: "Persistent sidebar", decision: "Always visible — not modal. Agents apply a filter and see results change simultaneously. Every competitor modal destroys this comparison loop entirely." },
      { id: 2, xPct: 65, yPct: 55, label: "Fare tiers inline", decision: "SME, Sales, Corporate tiers stack inline per flight row. The comparison that matters most — without a single extra tap." },
      { id: 3, xPct: 52, yPct: 22, label: "Applied filter chips", decision: "Active filters shown as removable chips. Agents know their exact query state without scrolling back to the sidebar." },
    ],
    rejected: {
      label: "What I tried first: modal filter panel",
      reason: "Built a v0 prototype in 30 minutes. One walkthrough made it obvious — agents compare while filtering. The modal killed that loop entirely. Rebuilt as a 274px fixed sidebar the same week.",
    },
  },
  {
    step: "04 / 08",
    heading: "Flight Detail",
    sub: "Every question answered without leaving the list",
    narrative: "A drawer that keeps the results list visible underneath. Dismiss and you're back at your exact scroll position — zero navigation cost on the most-consulted screen.",
    imageSrc: "/Image/Airiq/presentation/see-details.png",
    imageAlt: "AIR iQ flight detail drawer",
    url: "airiq.com/search",
    callouts: [
      { id: 1, xPct: 58, yPct: 28, label: "Drawer overlay", decision: "Results stay visible under the open drawer. Dismiss = back to scroll position. No page navigation. No lost context. The list is always there." },
      { id: 2, xPct: 58, yPct: 65, label: "Per-leg baggage", decision: "Adult, child, infant weights per leg — without a page change. Critical before committing a group booking where details compound." },
    ],
  },
  {
    step: "05 / 08",
    heading: "Passengers & Add-ons",
    sub: "Four passengers, zero context switching",
    narrative: "Saved-profile lookup auto-fills frequent flyer numbers, passports, and meal preferences — cutting form completion time by up to 60%.",
    imageSrc: "/Image/Airiq/presentation/details.png",
    imageAlt: "AIR iQ passenger details form",
    url: "airiq.com/booking/details",
    callouts: [
      { id: 1, xPct: 55, yPct: 28, label: "Saved profiles", decision: "One tap fills FF number, passport, and meal preference. Agents book repeat travellers daily — the most error-prone manual step, eliminated." },
      { id: 2, xPct: 55, yPct: 68, label: "Inline seat map", decision: "Seat selection sits below each passenger tab. Switching passengers never resets your scroll position or your existing seat selection." },
    ],
  },
  {
    step: "06 / 08",
    heading: "Payment",
    sub: "Exact wallet deduction visible before commitment",
    narrative: "Agents see the precise wallet deduction split before hitting confirm. No surprise on a ₹2,21,000 booking — the last anxiety removed.",
    imageSrc: "/Image/Airiq/presentation/payment.png",
    imageAlt: "AIR iQ payment screen",
    url: "airiq.com/booking/payment",
    callouts: [
      { id: 1, xPct: 55, yPct: 30, label: "Wallet balance visible", decision: "Current balance shown before the payment action. Agents verify they have sufficient funds before reaching the confirm step — no failures mid-flow." },
      { id: 2, xPct: 55, yPct: 62, label: "Deduction split upfront", decision: "Exact wallet vs outstanding split displayed before the CTA. Removes the final uncertainty on high-value bookings before the agent commits." },
    ],
  },
  {
    step: "07 / 08",
    heading: "Final Review",
    sub: "Every detail verifiable. Nothing locked.",
    narrative: "Inline edit links on every section. Back-navigation eliminated at the highest-stakes step. The screen that kills most B2B conversion flows — redesigned.",
    imageSrc: "/Image/Airiq/presentation/review.png",
    imageAlt: "AIR iQ review screen",
    url: "airiq.com/booking/review",
    callouts: [
      { id: 1, xPct: 55, yPct: 35, label: "Inline edit links", decision: "Every section has an inline edit link. Fix a passenger name without going back a page and losing your review state. Eliminates the top drop-off trigger." },
      { id: 2, xPct: 55, yPct: 68, label: "Full GST breakdown", decision: "Fare + tax breakdown before the CTA. Agents need to see the total before committing — regulatory requirement and a trust signal." },
    ],
  },
  {
    step: "08 / 08",
    heading: "Booking Confirmed",
    sub: "Every channel. One screen. Done.",
    narrative: "PDF, ZIP, WhatsApp, and Email on a single screen. Per-passenger ticket distribution — a post-booking workflow most B2B platforms never design for.",
    imageSrc: "/Image/Airiq/presentation/confirmation.png",
    imageAlt: "AIR iQ booking confirmation",
    url: "airiq.com/booking/confirmed",
    callouts: [
      { id: 1, xPct: 55, yPct: 40, label: "Multi-channel share", decision: "PDF / ZIP / WhatsApp / Email — all on one screen. No separate share flow. Most B2B portals make agents navigate away just to send a ticket." },
      { id: 2, xPct: 55, yPct: 68, label: "Per-passenger select", decision: "Individual passenger checkboxes for group bookings. Agents distribute single tickets from a group booking. Not found in any competitor portal studied." },
    ],
  },
];

const FLOW_CHAPTER_BREAKS: Record<number, { eyebrow: string; statement: string; note: string }> = {
  2: {
    eyebrow: "The core workspace",
    statement: "Where agents spend 80% of their time.",
    note: "Search → detail → selection. The loop agents repeat across every working hour.",
  },
  4: {
    eyebrow: "The commitment path",
    statement: "Every screen from here is non-reversible.",
    note: "Passenger data, payment, review. Where errors compound and trust is everything.",
  },
  7: {
    eyebrow: "The finish line",
    statement: "Confirmation is not the end. It's the start of distribution.",
    note: "Most portals stop at a booking ID. Agents still need to reach clients across 4 channels.",
  },
};

/* ── Flow reel overview strip ── */
function FlowReelStrip() {
  return (
    <div style={{ marginBottom: 48 }}>
      <p style={{ fontSize: "0.9rem", color: "#9CA3AF", marginBottom: 20, letterSpacing: "0.04em" }}>
        8 screens · login to confirmation
      </p>
      <div style={{
        display: "flex", alignItems: "flex-start", overflowX: "auto",
        paddingBottom: 8, gap: 0,
        msOverflowStyle: "none", scrollbarWidth: "none" as React.CSSProperties["scrollbarWidth"],
      }}>
        {FLOW_STAGES.map((stage, i) => (
          <div key={stage.step} style={{ display: "flex", alignItems: "flex-start", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "#EFF6FF", border: "1.5px solid rgba(30,144,255,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 800, color: "#1E90FF",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <span style={{
                fontSize: "10px", fontWeight: 600, color: "#9CA3AF",
                textAlign: "center", maxWidth: 52, lineHeight: 1.3,
              }}>
                {stage.heading.split(" ").slice(0, 2).join(" ")}
              </span>
            </div>
            {i < FLOW_STAGES.length - 1 && (
              <div style={{ width: 24, height: 1, background: "#E5E7EB", marginTop: 19, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Editorial chapter break ── */
function FlowChapterBreak({ eyebrow, statement, note }: { eyebrow: string; statement: string; note: string }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      background: "linear-gradient(135deg, #0B1E3D 0%, #0f2750 60%, #0B1E3D 100%)",
      borderRadius: 20, padding: "52px 48px", margin: "20px 0 56px",
      border: "1px solid rgba(30,144,255,0.12)", position: "relative", overflow: "hidden",
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    }}>
      <div style={{ position: "absolute", top: -70, right: -70, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,144,255,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.2, backgroundImage: "linear-gradient(rgba(30,144,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.07) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#1E90FF", display: "block", marginBottom: 18 }}>{eyebrow}</span>
        <h3 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 14px", lineHeight: 1.2, letterSpacing: "-0.025em", maxWidth: 500 }}>{statement}</h3>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.7, margin: 0, maxWidth: 420 }}>{note}</p>
      </div>
    </div>
  );
}

/* ── Callout pin (positioned absolutely on screenshot) ── */
function FlowCalloutPin({ id, x, y }: { id: number; x: number; y: number }) {
  return (
    <div style={{ position: "absolute", left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", zIndex: 10, pointerEvents: "none" }}>
      <div style={{ position: "absolute", width: 38, height: 38, borderRadius: "50%", background: "rgba(30,144,255,0.22)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", animation: "pulse 2.2s ease-in-out infinite" }} />
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#1E90FF", border: "2.5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "#fff", boxShadow: "0 2px 18px rgba(30,144,255,0.65)", position: "relative", letterSpacing: "-0.01em" }}>
        {id}
      </div>
    </div>
  );
}

/* ── Single annotated screen stage ── */
function AnnotatedScreenStage({ stage, idx }: { stage: FlowStageData; idx: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.04 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const colCount = stage.callouts.length as 2 | 3;

  return (
    <div ref={ref} style={{ marginBottom: 72, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)" }}>

      {/* Step header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#1E90FF", whiteSpace: "nowrap" as const }}>
          Step {stage.step}
        </span>
        <div style={{ flex: 1, height: 1, background: "#F3F4F6" }} />
      </div>

      {/* Heading block */}
      <div style={{ marginBottom: 24, maxWidth: 620 }}>
        <h3 style={{ fontSize: "1.55rem", fontWeight: 800, color: "#111827", margin: "0 0 5px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{stage.heading}</h3>
        <p style={{ fontSize: "1rem", fontWeight: 600, color: "#1E90FF", margin: "0 0 10px", lineHeight: 1.4 }}>{stage.sub}</p>
        <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>{stage.narrative}</p>
      </div>

      {/* Dark screen card */}
      <div style={{
        background: "#0B1E3D", borderRadius: 20, padding: "18px 18px 0",
        border: "1px solid rgba(30,144,255,0.18)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.24), 0 0 0 1px rgba(30,144,255,0.06)",
        marginBottom: 14, overflow: "hidden",
      }}>
        {/* Browser chrome bar */}
        <div style={{
          background: "rgba(255,255,255,0.05)", borderRadius: "10px 10px 0 0",
          padding: "9px 16px", display: "flex", alignItems: "center", gap: 7,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, flexShrink: 0 }} />
          ))}
          <div style={{
            flex: 1, height: 22, background: "rgba(255,255,255,0.06)", borderRadius: 5, marginLeft: 8,
            display: "flex", alignItems: "center", padding: "0 12px", gap: 6,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,0.18)", flexShrink: 0 }} />
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.22)", fontFamily: "'SF Mono',monospace", letterSpacing: "0.01em" }}>
              {stage.url}
            </span>
          </div>
          {/* Live badge */}
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase" as const, color: "#1E90FF",
            background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)",
            borderRadius: 6, padding: "3px 10px", flexShrink: 0,
          }}>Live</span>
        </div>

        {/* Screenshot + pins */}
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stage.imageSrc} alt={stage.imageAlt} style={{ width: "100%", height: "auto", display: "block" }} />
          {stage.callouts.map((c) => (
            <FlowCalloutPin key={c.id} id={c.id} x={c.xPct} y={c.yPct} />
          ))}
        </div>
      </div>

      {/* Decision cards — numbered to match pins */}
      <div style={{
        display: "grid",
        gridTemplateColumns: colCount === 3 ? "1fr 1fr 1fr" : "1fr 1fr",
        gap: 10, marginBottom: stage.rejected ? 10 : 0,
      }}>
        {stage.callouts.map((c) => (
          <div key={c.id} style={{
            background: "#fff", border: "1px solid #F3F4F6",
            borderRadius: 12, padding: "14px 16px",
            display: "flex", gap: 11, alignItems: "flex-start",
          }}>
            <span style={{
              width: 24, height: 24, borderRadius: "50%",
              background: "#EFF6FF", border: "1.5px solid rgba(30,144,255,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", fontWeight: 800, color: "#1E90FF",
              flexShrink: 0, marginTop: 1,
            }}>{c.id}</span>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginBottom: 4, lineHeight: 1.3 }}>{c.label}</div>
              <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{c.decision}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Rejected approach pill */}
      {stage.rejected && (
        <div style={{
          background: "#FEF2F2", border: "1px solid #FECACA",
          borderRadius: 10, padding: "13px 16px",
          display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{
            fontSize: "10px", fontWeight: 800, color: "#EF4444",
            background: "#FEE2E2", borderRadius: 100, padding: "3px 9px",
            flexShrink: 0, marginTop: 2, whiteSpace: "nowrap" as const,
            textTransform: "uppercase" as const, letterSpacing: "0.08em",
          }}>Tried first</span>
          <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: "#111827" }}>{stage.rejected.label}:</strong>{" "}
            {stage.rejected.reason}
          </p>
        </div>
      )}
    </div>
  );
}

function ProductFlowSection() {
  return (
    <CsSection id="product">
      <CsSectionHeader
        title="Complete Booking Flow"
        sub="Eight screens. Every design decision annotated. Login to confirmation — the full journey with the reasoning behind it."
      />

      <FlowReelStrip />

      {FLOW_STAGES.map((stage, i) => (
        <div key={stage.step}>
          {FLOW_CHAPTER_BREAKS[i] && <FlowChapterBreak {...FLOW_CHAPTER_BREAKS[i]} />}
          <AnnotatedScreenStage stage={stage} idx={i} />
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  DESIGN SYSTEM
───────────────────────────────────────────────────────────────────── */
function DesignSystemSection() {
  return (
    <CsSection id="design-system">
      <CsSectionHeader
        title="Design System"
        sub="No library existed. Every token, component, icon, and spacing rule was built from zero in Figma."
      />

      {/* Preview card — links to the Figma file */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <a
          href={airFigmaLinks.designSystem}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", textDecoration: "none" }}
        >
          <div
            style={{
              position: "relative",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.075)",
              borderRadius: 20,
              padding: "28px 32px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              overflow: "hidden",
              transition: "transform 0.28s ease, box-shadow 0.28s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.09)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
            }}
          >
            {/* Top gradient accent line */}
            <div style={{
              position: "absolute", top: 0, left: 48, right: 48, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(16,118,188,0.3), transparent)",
            }} />

            {/* Header: dots logomark + pill tags */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, paddingTop: 2 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#1076BC", flexShrink: 0 }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#F2616E", flexShrink: 0 }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(16,118,188,0.35)", flexShrink: 0, alignSelf: "flex-end", marginBottom: 1 }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end", maxWidth: 300 }}>
                {["Design Systems", "Token-first"].map((tag) => (
                  <span key={tag} style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 500, borderRadius: 99, padding: "3px 9px", color: "#9e9c97", background: "#f5f4f0", letterSpacing: "0.04em", border: "1px solid rgba(0,0,0,0.06)" }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.025em", lineHeight: 1.25, margin: "0 0 8px" }}>
              A single system powering four products
            </h3>

            {/* Subtitle */}
            <p style={{ fontStyle: "italic", fontSize: 15, color: "#7a7570", lineHeight: 1.65, margin: "0 0 20px" }}>
              Modular components and a token system built to scale, without slowing the team down.
            </p>

            {/* Hero image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Image/Airiq/design-system.png"
              alt="Design System overview"
              style={{
                display: "block", width: "82%", margin: "0 auto",
                borderRadius: 10,
                filter: "drop-shadow(0 8px 22px rgba(16,118,188,0.13))",
              }}
            />
          </div>
        </a>
      </div>

      <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
        Have a look at the complete structure of the design system that I built —{" "}
        <a
          href="/projects/project-5"
          style={{ color: "#1E90FF", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          read the case study ↗
        </a>
      </p>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  RESULTS
───────────────────────────────────────────────────────────────────── */

const BEFORE_AFTER_ROWS = [
  { label: "Booking time",    before: "~12 min",  after: "~7 min"   },
  { label: "Tools per booking", before: "3 tools",  after: "1 platform" },
  { label: "UI confusion tickets", before: "Frequent", after: "−30%"    },
  { label: "Agents served",   before: "Fragmented", after: "25,000+"  },
];

function BeforeAfterTable() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="csl-reveal" style={{
      background: "#0B1E3D",
      borderRadius: 16,
      padding: "24px 28px",
      marginBottom: 32,
      border: "1px solid rgba(30,144,255,0.15)",
    }}>
      {/* Header */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: "0 16px", marginBottom: 16,
        paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Metric</span>
        <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Before</span>
        <span style={{ fontSize: "10px", fontWeight: 700, color: "#60BFFF",               textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>After AIR iQ</span>
      </div>
      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {BEFORE_AFTER_ROWS.map((row, i) => (
          <div key={row.label} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0 16px", alignItems: "center",
            padding: "11px 0",
            borderBottom: i < BEFORE_AFTER_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-8px)",
            transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
          }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>{row.label}</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>{row.before}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#60BFFF" }}>{row.after}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomeCard({ stat, label, sub, source, tag, barPct, delay }: {
  stat: React.ReactNode;
  label: string; sub: string; source: string; tag: string;
  barPct: number; delay: number;
}) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: "#fff",
      border: "1px solid #F3F4F6",
      borderRadius: 14,
      padding: "24px 22px 20px",
      display: "flex", flexDirection: "column",
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>
      {/* Stat */}
      <div style={{
        fontSize: "2.6rem", fontWeight: 800, color: "#111827",
        lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 6,
      }}>{stat}</div>

      {/* Label */}
      <div style={{ fontSize: "14px", fontWeight: 600, color: "#374151", marginBottom: 3, lineHeight: 1.35 }}>{label}</div>
      <div style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: 14 }}>{sub}</div>

      {/* Thin animated progress bar */}
      <div style={{
        height: 3, background: "#F3F4F6", borderRadius: 100,
        overflow: "hidden", marginBottom: 14, marginTop: "auto",
      }}>
        <div style={{
          height: "100%",
          width: vis ? `${barPct}%` : "0%",
          background: "linear-gradient(90deg, #1E90FF 0%, #60B4FF 100%)",
          borderRadius: 100,
          transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${delay + 0.1}s`,
        }} />
      </div>

      {/* Footer row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontSize: "11px", fontWeight: 700,
          color: "#1E90FF", background: "#EFF6FF",
          border: "1px solid rgba(30,144,255,0.2)",
          borderRadius: 100, padding: "3px 10px",
        }}>{tag}</span>
        <span style={{ fontSize: "11px", fontWeight: 600, color: "#C4C9D4", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
          {source}
        </span>
      </div>
    </div>
  );
}

function ResultsSection() {
  const outcomes: {
    stat: React.ReactNode;
    label: string; sub: string; source: string; tag: string; barPct: number;
  }[] = [
    {
      stat: <><span style={{ fontSize: "1.6rem", fontWeight: 700, color: "#6B7280" }}>~</span><CountUp to={7} /><span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#6B7280", marginLeft: 4 }}>min</span></>,
      label: "Average booking time",
      sub: "down from ~12 min per booking",
      source: "Agent Feedback",
      tag: "Faster",
      barPct: 42,
    },
    {
      stat: "30–40%",
      label: "Faster booking completion",
      sub: "vs. pre-launch baseline",
      source: "Operations Data",
      tag: "Much Fewer Mistakes",
      barPct: 35,
    },
    {
      stat: "25–35%",
      label: "Fewer UI confusion tickets",
      sub: "support drop post-launch",
      source: "Support Team",
      tag: "Clearer",
      barPct: 30,
    },
    {
      stat: <><CountUp to={25} /><span>K+</span></>,
      label: "Active agents onboarded",
      sub: "live across India post-launch",
      source: "Product Analytics",
      tag: "Adopted",
      barPct: 80,
    },
  ];

  return (
    <CsSection id="results">
      <CsSectionHeader title="The Impact" sub="Measured against the baseline that existed before launch. Every number has a source." />

      {/* Methodology note */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <div style={{ background: "#F9FAFB", borderRadius: 10, padding: "14px 16px", border: "1px solid #F3F4F6", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 2 }}>ℹ</span>
          <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>
            Booking time was measured by operations team via session logs before and after launch. Support ticket volume was tracked by the support team across a 60-day post-launch window. Agent adoption figures are from product analytics.
          </p>
        </div>
      </div>

      <BeforeAfterTable />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
        {outcomes.map((o, i) => (
          <OutcomeCard key={i} {...o} delay={i * 0.07} />
        ))}
      </div>

      {/* Photo placeholder — post-launch */}
      <div className="csl-reveal" style={{ marginBottom: 28 }}>
        <PhotoPlaceholder
          label="Post-launch"
          description="Photo: agents using the live Air IQ portal — or a screenshot of the live product in use. Visual proof that it shipped and is in production."
          aspectRatio="16/7"
        />
      </div>

      <div className="csl-reveal rd1" style={{ marginBottom: 24 }}>
        <div style={{ background: "#F9FAFB", borderRadius: 16, padding: "32px 32px 28px", position: "relative", overflow: "hidden", border: "1px solid #F3F4F6" }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,144,255,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          <span style={{ position: "absolute", top: 4, left: 20, fontSize: "6rem", color: "#1E90FF", lineHeight: 1, userSelect: "none" as const, opacity: 0.18 }}>&ldquo;</span>
          <p style={{ fontSize: "1.2rem", fontWeight: 600, color: "#111827", lineHeight: 1.75, margin: "28px 0 20px", paddingLeft: 4 }}>
            Much faster and fewer mistakes than before. I don&apos;t need to open three windows anymore.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#1E90FF" }}>SA</div>
            <div>
              <div style={{ fontSize: "14px", color: "#374151", fontWeight: 600 }}>Senior travel agent</div>
              <div style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 500, marginTop: 2 }}>Post-launch feedback · 60 days after go-live</div>
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
      text: "Screens 10–20 were built 4× faster than screens 1–5. One token change updated every screen simultaneously. Building the system felt like overhead at first — it became the biggest velocity multiplier in the project. If I did this again, I'd start the system on day one instead of week four.",
    },
    {
      n: "02",
      title: "B2B density is not a problem to solve — it's a constraint to design within",
      text: "My first instinct was to simplify: hide complexity, reduce options, streamline flows. That's the wrong lens for professional tools. Agents are paid to manage complexity. The goal was never simplicity — it was organised density. Every field earns its place by being needed every session, not just sometimes.",
    },
    {
      n: "03",
      title: "More agent time upfront would have changed the brief",
      text: "Four interviews surfaced critical patterns that weren't in any stakeholder document. GDS fare logic, multi-pax edge cases, infant-adult associations — these all appeared during design, not before. The brief was built from business requirements. What I needed was a brief built from observed behaviour. I'd spend the first two weeks doing nothing but watching agents work.",
    },
    {
      n: "04",
      title: "Working without a senior designer made every decision independently defensible",
      text: "There was no one to defer to. Every visual choice, every information architecture decision, every edge case had to be reasoned from first principles and presented to stakeholders with a clear rationale. That constraint built something that I don't think would have developed any other way — the habit of never making a decision I can't explain.",
    },
  ];

  return (
    <CsSection id="learnings" last>
      <CsSectionHeader title="Learnings" sub="Not a list of lessons. An honest account of what I'd do differently and what I'd do the same." />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {items.map((item, i) => (
          <div key={item.n} className="csl-reveal" style={{
            display: "grid", gridTemplateColumns: "28px 1fr",
            gap: "0 18px", alignItems: "start",
            padding: "28px 0",
            borderTop: i > 0 ? "1px solid #F3F4F6" : "none",
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: 8, background: "#EFF6FF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", fontWeight: 700, color: "#1E90FF",
              flexShrink: 0, marginTop: 3,
            }}>{item.n}</span>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: 8, lineHeight: 1.3 }}>{item.title}</div>
              <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
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
            background: "#fff", borderRadius: 4, padding: "20px 20px 18px",
            border: "1px solid rgba(0,0,0,0.06)",
          }}>
            <span style={{
              display: "inline-block", fontSize: "10px", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.12em",
              color: col.accent, background: col.bg,
              borderRadius: 4, padding: "2px 7px", marginBottom: 10,
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
            background: "linear-gradient(135deg, rgba(173,216,255,0.22), rgba(255,236,153,0.16))",
            borderRadius: 12, padding: "16px 18px",
            border: "1px solid rgba(173,216,255,0.3)",
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
const PROCESS_STEPS = [
  {
    num: "01",
    tag: "ChatGPT",
    tagColor: "#10A37F",
    tagBg: "#E6F4F1",
    title: "Requirements into user stories",
    text: "Stakeholder notes fed into ChatGPT to extract structured user stories and edge cases. What took 2 days of affinity mapping took 20 minutes. More time for craft.",
    saved: "3 days",
    icon: "📋",
  },
  {
    num: "02",
    tag: "v0.dev",
    tagColor: "#111827",
    tagBg: "#F3F4F6",
    title: "Layout exploration before Figma",
    text: "Used v0 to generate 4 layout directions for the search results page in 30 minutes. Showed stakeholders real-looking options, got direction validated before a single Figma frame was opened.",
    saved: "4 days",
    icon: "⚡",
  },
  {
    num: "03",
    tag: "ChatGPT",
    tagColor: "#10A37F",
    tagBg: "#E6F4F1",
    title: "Filter hierarchy by agent priority",
    text: "Fifteen filter types in the panel. Used ChatGPT to map filter priority by agent use frequency. The panel hierarchy matched how agents actually work, not how I assumed.",
    saved: "2 days",
    icon: "🎛",
  },
  {
    num: "04",
    tag: "ChatGPT",
    tagColor: "#10A37F",
    tagBg: "#E6F4F1",
    title: "Edge case discovery",
    text: "Prompted AI with the full user journey and asked it to attack the design. Find every scenario that breaks. Found 12 edge cases in 30 minutes that I then designed for explicitly.",
    saved: "2 days",
    icon: "🔍",
  },
  {
    num: "05",
    tag: "ChatGPT",
    tagColor: "#10A37F",
    tagBg: "#E6F4F1",
    title: "B2B microcopy and error states",
    text: "B2B copy must be precise and non-alarming. Generated 5 variants per error message, selected and refined the best. Covered all 3 error screens: no results, timeout, sold-out.",
    saved: "1 day",
    icon: "✏️",
  },
];

const DUAL_TIMELINE_DATA = [
  { task: "User stories",     oldH: 72, oldLabel: "3 days", aiLabel: "20 min" },
  { task: "Layout explore",   oldH: 96, oldLabel: "4 days", aiLabel: "30 min" },
  { task: "Filter hierarchy", oldH: 48, oldLabel: "2 days", aiLabel: "30 min" },
  { task: "Edge cases",       oldH: 48, oldLabel: "2 days", aiLabel: "30 min" },
  { task: "Microcopy",        oldH: 24, oldLabel: "1 day",  aiLabel: "10 min" },
];

const STEP_OUTPUTS = [
  {
    toolBg: "#064E3B", toolColor: "#34D399",
    lines: [
      { prefix: "US-01", text: "Agent searches DEL→BOM with filters" },
      { prefix: "US-02", text: "Agent applies fare class + airline filter" },
      { prefix: "US-03", text: "Agent shares fare via email/WhatsApp" },
      { prefix: "EC-01", text: "What if fare price changes mid-flow?" },
    ],
  },
  {
    toolBg: "#111827", toolColor: "#F9FAFB",
    isGrid: true,
  },
  {
    toolBg: "#064E3B", toolColor: "#34D399",
    lines: [
      { prefix: "01 ↑87%", text: "Price range" },
      { prefix: "02 ↑74%", text: "Airline" },
      { prefix: "03 ↑61%", text: "Departure time" },
      { prefix: "04 ↑38%", text: "Non-stop only" },
    ],
  },
  {
    toolBg: "#064E3B", toolColor: "#34D399",
    lines: [
      { prefix: "EC-01", text: "Seat sold between search → confirm" },
      { prefix: "EC-02", text: "Infant needs adult association" },
      { prefix: "EC-03", text: "GDS timeout mid-booking" },
      { prefix: "EC-04", text: "+1 arrival day unlabelled" },
    ],
  },
  {
    toolBg: "#064E3B", toolColor: "#34D399",
    lines: [
      { prefix: "✓ V1", text: '"No seats available for this date"' },
      { prefix: "  V2", text: '"This flight is fully booked"' },
      { prefix: "  V3", text: '"Unavailable — try nearby dates"' },
      { prefix: "  V4", text: '"Seats sold while searching — refresh"' },
    ],
  },
];

function DualTimeline() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="csl-reveal" style={{
      background: "#0B1E3D",
      borderRadius: 16,
      padding: "28px 28px 24px",
      marginBottom: 32,
      border: "1px solid rgba(30,144,255,0.15)",
    }}>
      {/* Legend + total */}
      <div style={{ display: "flex", gap: 20, marginBottom: 22, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Old process</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "#1E90FF" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#60BFFF", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>AI-assisted</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1E90FF", lineHeight: 1, letterSpacing: "-0.03em" }}>−12</span>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>days saved</span>
        </div>
      </div>

      {/* Bar rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {DUAL_TIMELINE_DATA.map((row, i) => (
          <div key={row.task} style={{
            display: "grid", gridTemplateColumns: "108px 1fr",
            gap: "0 16px", alignItems: "center",
          }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 600, lineHeight: 1.3 }}>
              {row.task}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {/* Old bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: vis ? `${(row.oldH / 96) * 100}%` : "0%",
                    background: "rgba(255,255,255,0.22)",
                    borderRadius: 100,
                    transition: `width 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
                  }} />
                </div>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 600, minWidth: 42, textAlign: "right" as const }}>
                  {row.oldLabel}
                </span>
              </div>
              {/* AI bar — tiny glowing sliver */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1, height: 8, background: "rgba(30,144,255,0.08)", borderRadius: 100, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: vis ? "7px" : "0px",
                    background: "#1E90FF",
                    borderRadius: 100,
                    boxShadow: "0 0 8px rgba(30,144,255,0.8)",
                    transition: `width 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.08 + 0.45}s`,
                  }} />
                </div>
                <span style={{ fontSize: "11px", color: "#60BFFF", fontWeight: 700, minWidth: 42, textAlign: "right" as const }}>
                  {row.aiLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepOutputCard({ output }: { output: typeof STEP_OUTPUTS[0] }) {
  if (output.isGrid) {
    return (
      <div style={{
        background: "#111827", borderRadius: 8, padding: "12px",
        border: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 8,
        }}>4 layouts generated</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {[
            { label: "A · Sidebar",    selected: true  },
            { label: "B · Top filter", selected: false },
            { label: "C · Full-width", selected: false },
            { label: "D · Split",      selected: false },
          ].map((opt) => (
            <div key={opt.label} style={{
              background: opt.selected ? "rgba(30,144,255,0.2)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${opt.selected ? "rgba(30,144,255,0.45)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 5, padding: "7px 9px",
            }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: opt.selected ? "#60BFFF" : "rgba(255,255,255,0.5)" }}>
                {opt.label}
              </div>
              {opt.selected && (
                <div style={{ fontSize: "9px", color: "#1E90FF", marginTop: 2, fontWeight: 700 }}>→ Selected</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: output.toolBg, borderRadius: 8, padding: "12px 14px",
      border: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "'SF Mono','Fira Code',monospace",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8 }}>
        {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
          <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
        ))}
        <span style={{
          fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase" as const, letterSpacing: "0.1em", marginLeft: 4,
        }}>Output</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {output.lines!.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
            <span style={{
              fontSize: "10px", fontWeight: 700, color: output.toolColor,
              minWidth: 52, flexShrink: 0,
            }}>{line.prefix}</span>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <CsSection id="process">
      <CsSectionHeader
        title="How I Worked"
        sub="AI-assisted synthesis, not AI-generated design. Every tool freed up time for the part that can't be automated — the decisions."
      />

      {/* Role summary — 3 facts, no cards */}
      <div className="csl-reveal" style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
        background: "#F3F4F6", borderRadius: 14, overflow: "hidden", marginBottom: 32,
      }}>
        {[
          { val: "Solo", label: "One designer end-to-end", sub: "Research to handoff" },
          { val: "6mo", label: "Full project duration", sub: "Alongside an active engineering sprint" },
          { val: "40+", label: "Screens shipped", sub: "Desktop and mobile" },
        ].map((s) => (
          <div key={s.val} style={{ background: "#fff", padding: "22px 20px" }}>
            <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "#1E90FF", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginTop: 6 }}>{s.label}</div>
            <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: 3 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Process steps */}
      <div className="csl-reveal" style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: 19, top: 28, bottom: 28,
          width: 2, background: "linear-gradient(to bottom, #1E90FF 0%, rgba(30,144,255,0.1) 100%)",
          borderRadius: 2,
        }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} style={{
              display: "grid", gridTemplateColumns: "40px 1fr",
              gap: "0 20px", paddingBottom: i < PROCESS_STEPS.length - 1 ? 24 : 0,
              position: "relative",
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff", border: "2px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, zIndex: 1, boxShadow: "0 0 0 4px #fff" }}>
                {step.icon}
              </div>
              <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #F3F4F6", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 200px" }}>
                <div style={{ padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#9CA3AF" }}>Step {step.num}</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: step.tagColor, background: step.tagBg, borderRadius: 100, padding: "2px 8px" }}>{step.tag}</span>
                    </div>
                    {step.saved && <span style={{ fontSize: "12px", fontWeight: 700, color: "#1E90FF", background: "#EFF6FF", borderRadius: 100, padding: "2px 10px" }}>−{step.saved}</span>}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827", lineHeight: 1.35, marginBottom: 4 }}>{step.title}</div>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{step.text}</p>
                </div>
                <div style={{ background: "#F9FAFB", borderLeft: "1px solid #F3F4F6", padding: "10px" }}>
                  <StepOutputCard output={STEP_OUTPUTS[i]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Constraints — what made this hard */}
      <div className="csl-reveal" style={{ marginTop: 40, paddingTop: 36, borderTop: "1px solid #F3F4F6" }}>
        <span className="csl-eyebrow">What made this hard</span>
        <ConstraintsBlock />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MOBILE SECTION — interactive left/right navigator
───────────────────────────────────────────────────────────────────── */
const MOBILE_FLOW = [
  {
    step: "01 / 05",
    heading: "Agent Login",
    description: "Split-screen design establishes brand credibility before the first input. Role selector (Agent / Distributor) immediately sets the B2B context. No generic email form.",
    decisions: [
      { label: "Brand left, form right", detail: "Anxiety drops when users see who they're logging into before they type." },
      { label: "Role selector upfront", detail: "Agents and distributors see different dashboards. Context set before credentials." },
    ],
    imageSrc: "/Image/Airiq/presentation/login.png",
  },
  {
    step: "02 / 05",
    heading: "Home Dashboard",
    description: "Search takes the primary zone with fare type exposed before the query. Recent searches and upcoming bookings eliminate re-entry friction for agents juggling multiple clients.",
    decisions: [
      { label: "Fare type first", detail: "SME, NDC, SOTO selection before the route — agents need this before comparing prices." },
      { label: "Quick access strip", detail: "Last 3 searches and pending bookings cut repetitive re-entry for frequent routes." },
    ],
    imageSrc: "/Image/Airiq/presentation/homepage.png",
  },
  {
    step: "03 / 05",
    heading: "Flight Listing",
    description: "The fare card reflows to single column. Price and refundability stay primary. Nineteen filters adapt to a bottom sheet that persists selection across open and close cycles.",
    decisions: [
      { label: "Hierarchy preserved", detail: "Price and refund status visible without expanding. Desktop decision paid off here." },
      { label: "Persistent filter sheet", detail: "Bottom sheet keeps last filter state. Agents compare results without resetting." },
    ],
    imageSrc: "/Image/Airiq/presentation/search-result.png",
  },
  {
    step: "04 / 05",
    heading: "Passenger Details",
    description: "Saved profiles auto-fill frequent flyer numbers and passport data. Minimum 44px touch targets throughout. Forms grouped by section so scroll depth feels manageable.",
    decisions: [
      { label: "44px hit areas", detail: "Every input, dropdown, and action meets minimum touch target guidelines for one-hand use." },
      { label: "Grouped sections", detail: "Fields clustered by purpose reduce perceived form length without removing any data." },
    ],
    imageSrc: "/Image/Airiq/presentation/details.png",
  },
  {
    step: "05 / 05",
    heading: "Review & Confirm",
    description: "Full GST breakdown and wallet deduction visible before the CTA. Inline edit links prevent back-navigation. Confirmation shares tickets per passenger via PDF, WhatsApp, or Email.",
    decisions: [
      { label: "Thumb-zone CTA", detail: "Primary confirm button sits in the lower 60% of screen, reachable with one hand." },
      { label: "Wallet deduction upfront", detail: "Agents confirm spend before committing. No surprises at the final step." },
    ],
    imageSrc: "/Image/Airiq/presentation/review.png",
  },
];

function MobileSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const current = MOBILE_FLOW[idx];

  const navigate = (direction: "next" | "prev") => {
    if (animating) return;
    const next = direction === "next"
      ? Math.min(idx + 1, MOBILE_FLOW.length - 1)
      : Math.max(idx - 1, 0);
    if (next === idx) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setIdx(next);
      setAnimating(false);
    }, 200);
  };

  return (
    <CsSection id="mobile">
      <CsSectionHeader
        title="Mobile Adaptability"
        sub="Same platform, same data, different form factor. Nothing simplified for mobile, everything adapted."
      />

      <div className="csl-reveal" style={{
        background: "linear-gradient(135deg, #EAF4FB 0%, #F5F2F0 60%, #FDFBF0 100%)",
        borderRadius: 20,
        padding: "40px 36px",
        marginBottom: 40,
      }}>
        {/* Step progress */}
        <div style={{
          display: "flex", gap: 6, marginBottom: 32, alignItems: "center",
        }}>
          {MOBILE_FLOW.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? "next" : "prev"); setAnimating(true); setTimeout(() => { setIdx(i); setAnimating(false); }, 200); }}
              style={{
                height: 3, flex: i === idx ? 2.5 : 1,
                borderRadius: 100, border: "none", cursor: "pointer",
                background: i === idx ? "#1E90FF" : "rgba(30,144,255,0.2)",
                transition: "flex 0.35s ease, background 0.25s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Main two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40, alignItems: "center" }}>

          {/* Left: mobile phone frame */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            {/* Phone mockup */}
            <div style={{
              background: "#111827",
              borderRadius: 28,
              padding: "10px 8px",
              boxShadow: "0 24px 56px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.06)",
              width: 200,
              position: "relative",
            }}>
              {/* Notch */}
              <div style={{
                width: 60, height: 18, background: "#111827",
                borderRadius: "0 0 12px 12px",
                margin: "0 auto 6px",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
                <div style={{ width: 28, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.1)" }} />
              </div>
              {/* Screen */}
              <div style={{
                borderRadius: 18,
                overflow: "hidden",
                height: 380,
                background: "#F3F4F6",
                opacity: animating ? 0 : 1,
                transform: animating ? (dir === "next" ? "translateX(12px)" : "translateX(-12px)") : "translateX(0)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.imageSrc}
                  alt={current.heading}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
              {/* Home indicator */}
              <div style={{ width: 60, height: 4, background: "rgba(255,255,255,0.18)", borderRadius: 100, margin: "8px auto 0" }} />
            </div>

            {/* Arrow nav */}
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => navigate("prev")}
                disabled={idx === 0}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  border: "1px solid rgba(30,144,255,0.25)",
                  background: idx === 0 ? "rgba(0,0,0,0.04)" : "rgba(30,144,255,0.08)",
                  color: idx === 0 ? "#C4C9D4" : "#1E90FF",
                  fontSize: "16px", cursor: idx === 0 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >←</button>
              <button
                onClick={() => navigate("next")}
                disabled={idx === MOBILE_FLOW.length - 1}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  border: "1px solid rgba(30,144,255,0.25)",
                  background: idx === MOBILE_FLOW.length - 1 ? "rgba(0,0,0,0.04)" : "#1E90FF",
                  color: idx === MOBILE_FLOW.length - 1 ? "#C4C9D4" : "#fff",
                  fontSize: "16px", cursor: idx === MOBILE_FLOW.length - 1 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >→</button>
            </div>
          </div>

          {/* Right: info panel */}
          <div style={{
            opacity: animating ? 0 : 1,
            transform: animating ? (dir === "next" ? "translateX(8px)" : "translateX(-8px)") : "translateX(0)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}>
            {/* Step counter */}
            <div style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#1E90FF",
              marginBottom: 12,
            }}>
              {current.step}
            </div>

            {/* Heading */}
            <h3 style={{
              fontSize: "1.5rem", fontWeight: 700, color: "#111827",
              margin: "0 0 12px", lineHeight: 1.25, letterSpacing: "-0.02em",
            }}>
              {current.heading}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: "1rem", color: "#374151", lineHeight: 1.8,
              margin: "0 0 24px",
            }}>
              {current.description}
            </p>

            {/* Decision cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {current.decisions.map((d, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 12, padding: "14px 16px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  display: "flex", gap: 12, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 7,
                    background: "#EFF6FF", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "10px", fontWeight: 700, color: "#1E90FF", marginTop: 1,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827", marginBottom: 3 }}>{d.label}</div>
                    <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.65 }}>{d.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile adaptations overview */}
      <div className="csl-reveal">
        <span className="csl-eyebrow">Key adaptations</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { icon: "◒", title: "Bottom sheet filters", desc: "Filter panel adapts to full-screen sheet. Agent selections persist across open and close cycles." },
            { icon: "↕", title: "Scroll depth management", desc: "Long passenger forms grouped by section. Visible progress reduces perceived length." },
            { icon: "⟳", title: "Network retry state", desc: "GDS timeouts on mobile networks. Retry UI surfaces without losing form state." },
            { icon: "✓", title: "Thumb-zone confirmation", desc: "Primary CTAs placed in the lower 60% of screen. Reachable with one hand on 375px." },
          ].map((ec) => (
            <div key={ec.title} style={{
              background: "#fff", borderRadius: 12, padding: "16px 18px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0, color: "#1E90FF" }}>{ec.icon}</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{ec.title}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{ec.desc}</p>
            </div>
          ))}
        </div>
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
      <TheAgentSection />
      <ProblemSection />
      <ApproachSection />
      <DesignPrinciplesSection />
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
