"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   COUNT-UP HOOK (viewport-triggered)
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
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"     },
  { id: "foundations", label: "Foundations"  },
  { id: "components",  label: "Components"   },
  { id: "in-wild",     label: "In the Wild"  },
  { id: "impact",      label: "Impact"       },
];

/* ─────────────────────────────────────────────────────────────────────
   FOUNDATION ICONS (inline SVG, consistent 22×22)
───────────────────────────────────────────────────────────────────── */
const FoundationIcons = {
  color: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="8" cy="13" r="6" fill="#1076BC" opacity="0.8"/>
      <circle cx="14" cy="13" r="6" fill="#F2616E" opacity="0.8"/>
      <circle cx="11" cy="8" r="6" fill="#F59E0B" opacity="0.8"/>
    </svg>
  ),
  type: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <line x1="3" y1="5" x2="19" y2="5" stroke="#1076BC" strokeWidth="2" strokeLinecap="round"/>
      <line x1="11" y1="5" x2="11" y2="18" stroke="#1076BC" strokeWidth="2" strokeLinecap="round"/>
      <line x1="7" y1="18" x2="15" y2="18" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1.5"/>
    </svg>
  ),
  spacing: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <line x1="3" y1="4" x2="3" y2="18" stroke="#1076BC" strokeWidth="2" strokeLinecap="round"/>
      <line x1="19" y1="4" x2="19" y2="18" stroke="#1076BC" strokeWidth="2" strokeLinecap="round"/>
      <line x1="3" y1="11" x2="19" y2="11" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <line x1="3" y1="4" x2="6" y2="4" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3" y1="18" x2="6" y2="18" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="4" x2="16" y2="4" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="18" x2="16" y2="18" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="3" width="7" height="7" rx="1.5" fill="#1076BC" opacity="0.5"/>
      <rect x="11" y="3" width="4" height="7" rx="1" fill="#1076BC" opacity="0.3"/>
      <rect x="17" y="3" width="3" height="7" rx="1" fill="#1076BC" opacity="0.18"/>
      <rect x="2" y="13" width="18" height="6" rx="1.5" fill="#1076BC" opacity="0.12" stroke="#1076BC" strokeWidth="1" strokeOpacity="0.3"/>
    </svg>
  ),
  icons: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="5.5" cy="5.5" r="3" stroke="#1076BC" strokeWidth="1.5"/>
      <rect x="13.5" y="2.5" width="6" height="6" rx="1.5" stroke="#1076BC" strokeWidth="1.5"/>
      <path d="M2.5 19 L5.5 14 L8.5 19 Z" stroke="#1076BC" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M14 14 L16.5 17 L19 14" stroke="#1076BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  component: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="3" width="18" height="5" rx="2" stroke="#1076BC" strokeWidth="1.5"/>
      <rect x="2" y="11" width="8" height="8" rx="2" stroke="#1076BC" strokeWidth="1.5"/>
      <rect x="12" y="11" width="8" height="8" rx="2" fill="#1076BC" opacity="0.15" stroke="#1076BC" strokeWidth="1.5"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────────────────
   FIGMA EMBED
───────────────────────────────────────────────────────────────────── */
const FIGMA_BASE =
  "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/iwqDFTjLmGMWGnM79LOMUB/Design-System-nik%3Fnode-id%3D";

function FigmaEmbed({
  nodeId,
  title,
  height = 480,
}: {
  nodeId: string;
  title: string;
  height?: number;
}) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(16,118,188,0.12)",
        background: "#f8fafc",
        marginBottom: 8,
      }}
    >
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
   HERO
───────────────────────────────────────────────────────────────────── */
function DSHero() {
  return (
    <div className="csl-hero csl-hero--light ds-hero-override" style={{ position: "relative" }}>
      {/* dot grid — fades out before image area */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(16,118,188,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to right, black 0%, black 38%, transparent 58%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 38%, transparent 58%)",
        }}
      />

      <div className="csl-hero-inner" style={{ position: "relative", zIndex: 1, alignItems: "center" }}>
        {/* LEFT */}
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Design System · AirIQ</div>

          <h1 className="csl-hero-title">
            One system.<br />
            <em style={{ fontStyle: "italic" }}>Four products.</em>
          </h1>

          <p className="csl-hero-desc">
            A token-first design system built from scratch alongside shipping product. No dedicated systems team. Just ruthless prioritisation, a shared Figma library, and the discipline to treat consistency as a feature.
          </p>

          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead Designer</span>
            <span className="csl-hero-chip">Nov 2025 – Jan 2026</span>
            <span className="csl-hero-chip">Tokens · Components</span>
            <span className="csl-hero-chip">0 → 1</span>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
            <a
              href="https://www.figma.com/design/iwqDFTjLmGMWGnM79LOMUB/Design-System-nik"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#1076BC", color: "#fff", borderRadius: 8,
                padding: "10px 20px", fontSize: "14px", fontWeight: 600,
                textDecoration: "none", fontFamily: "Lato, sans-serif",
              }}
            >
              View in Figma ↗
            </a>
            <a
              href="#overview"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "#1076BC",
                border: "1px solid rgba(16,118,188,0.35)",
                borderRadius: 8, padding: "10px 20px",
                fontSize: "14px", fontWeight: 600,
                textDecoration: "none", fontFamily: "Lato, sans-serif",
              }}
            >
              Read case study ↓
            </a>
          </div>
        </div>

        {/* RIGHT — image centered in column, symmetric overflow */}
        <div className="csl-hero-right ds-hero-img-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Image/Airiq/design-system.png"
            alt="Design System overview"
            style={{
              width: "128%",
              height: "auto",
              display: "block",
              marginLeft: "-14%",
              filter: "drop-shadow(0 28px 56px rgba(16,118,188,0.16))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HELPER: caption below a Figma embed
───────────────────────────────────────────────────────────────────── */
function EmbedCaption({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 15, color: "#6B7280", fontFamily: "Lato, sans-serif",
        marginTop: 8, marginBottom: 32, lineHeight: 1.6,
      }}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HELPER: left-border callout
───────────────────────────────────────────────────────────────────── */
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="csl-reveal"
      style={{
        borderLeft: "3px solid var(--csl-accent, #1076BC)",
        paddingLeft: 20,
        margin: "32px 0",
        color: "#374151",
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "1.1rem",
        lineHeight: 1.7,
        fontStyle: "italic",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HELPER: "Why this decision" callout card
───────────────────────────────────────────────────────────────────── */
function WhyCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div
      className="csl-reveal"
      style={{
        background: "rgba(16,118,188,0.035)",
        border: "1px solid rgba(16,118,188,0.14)",
        borderRadius: 12,
        padding: "20px 24px",
        margin: "24px 0 8px",
      }}
    >
      <p style={{
        fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700,
        color: "#1076BC", letterSpacing: "0.14em", textTransform: "uppercase",
        marginBottom: 8,
      }}>
        Why this decision
      </p>
      <p style={{
        fontFamily: "Lato, sans-serif", fontSize: 16, fontWeight: 700,
        color: "#111827", marginBottom: 8, lineHeight: 1.3,
      }}>
        {question}
      </p>
      <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
        {answer}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   INTERACTIVE: Token layer demo — shows how a hex maps through layers
───────────────────────────────────────────────────────────────────── */
function TokenLayerDemo() {
  const [active, setActive] = useState<"primitive" | "semantic" | "component">("primitive");

  const layers: { key: "primitive" | "semantic" | "component"; label: string; content: React.ReactNode }[] = [
    {
      key: "primitive",
      label: "Primitive",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: "#1076BC", flexShrink: 0 }} />
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#111827" }}>#1076BC</span>
        </div>
      ),
    },
    {
      key: "semantic",
      label: "Semantic",
      content: (
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#1076BC" }}>
          color.action.primary
        </span>
      ),
    },
    {
      key: "component",
      label: "Component",
      content: (
        <div
          style={{
            background: "#1076BC", color: "#fff",
            borderRadius: 6, padding: "4px 14px",
            fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 600,
            display: "inline-block",
          }}
        >
          Button.bg
        </div>
      ),
    },
  ];

  return (
    <div
      className="csl-reveal"
      style={{
        background: "#F8FAFC",
        border: "1px solid rgba(16,118,188,0.10)",
        borderRadius: 12,
        padding: "20px 22px",
        margin: "20px 0 32px",
      }}
    >
      <p style={{
        fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700,
        color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase",
        marginBottom: 14,
      }}>
        Token flow — tap a layer to trace the chain
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {layers.map((layer, i) => (
          <div key={layer.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => setActive(layer.key)}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: active === layer.key
                  ? "1.5px solid #1076BC"
                  : "1.5px solid rgba(0,0,0,0.08)",
                background: active === layer.key ? "#fff" : "transparent",
                boxShadow: active === layer.key ? "0 2px 8px rgba(16,118,188,0.12)" : "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column" as const,
                gap: 6,
                minWidth: 130,
              }}
            >
              <span style={{
                fontFamily: "Lato, sans-serif", fontSize: 10, fontWeight: 700,
                color: active === layer.key ? "#1076BC" : "#9CA3AF",
                textTransform: "uppercase" as const, letterSpacing: "0.10em",
                textAlign: "left" as const,
              }}>
                {layer.label}
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                {layer.content}
              </span>
            </button>
            {i < layers.length - 1 && (
              <span style={{ color: "#D1D5DB", fontSize: 20, fontWeight: 300 }}>→</span>
            )}
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: "Lato, sans-serif", fontSize: 13, color: "#9CA3AF",
        marginTop: 14, lineHeight: 1.5,
      }}>
        {active === "primitive" && "Raw hex values live in the primitive layer. They are never used directly in components."}
        {active === "semantic" && "Semantic tokens name the intent. color.action.primary means \"the primary action colour\" regardless of what hex it resolves to."}
        {active === "component" && "Component tokens bind to semantic tokens. Button.bg references color.action.primary, so updating the brand colour cascades automatically."}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SYSTEM ARCHITECTURE DIAGRAM — layered foundation visual
───────────────────────────────────────────────────────────────────── */
function SystemArchitecture() {
  const layers = [
    {
      label: "Screens",
      items: ["Search", "Results", "Booking", "Confirm"],
      color: "#1076BC",
      opacity: 0.9,
      bg: "rgba(16,118,188,0.08)",
    },
    {
      label: "Components",
      items: ["Button", "Input", "Toggle", "Date", "Tabs", "Pagination"],
      color: "#1076BC",
      opacity: 0.7,
      bg: "rgba(16,118,188,0.05)",
    },
    {
      label: "Foundation",
      items: ["Color", "Typography", "Spacing", "Grid", "Icons"],
      color: "#1076BC",
      opacity: 0.5,
      bg: "rgba(16,118,188,0.03)",
    },
  ];

  return (
    <div
      className="csl-reveal"
      style={{ margin: "32px 0", display: "flex", flexDirection: "column", gap: 4 }}
    >
      <p style={{
        fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700,
        color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase",
        marginBottom: 12,
      }}>
        System architecture
      </p>
      {layers.map((layer) => (
        <div
          key={layer.label}
          style={{
            background: layer.bg,
            border: `1px solid rgba(16,118,188,${layer.opacity * 0.15})`,
            borderRadius: 10,
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span style={{
            fontFamily: "ui-monospace, monospace", fontSize: 10, fontWeight: 700,
            color: `rgba(16,118,188,${layer.opacity})`,
            letterSpacing: "0.12em", textTransform: "uppercase",
            width: 90, flexShrink: 0,
          }}>
            {layer.label}
          </span>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {layer.items.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 500,
                  color: `rgba(16,118,188,${layer.opacity})`,
                  background: `rgba(16,118,188,${layer.opacity * 0.08})`,
                  borderRadius: 6, padding: "3px 10px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
      <p style={{
        fontFamily: "Lato, sans-serif", fontSize: 13, color: "#9CA3AF",
        marginTop: 8, lineHeight: 1.5,
      }}>
        Every screen assembles from components. Every component is built from foundation tokens. Change a token and the entire stack updates.
      </p>
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

      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 40 }}>
        {[
          { ref: c1.ref, val: c1.value, suffix: "", label: "Products sharing one Figma library" },
          { ref: c2.ref, val: c2.value, suffix: "", label: "Core components, all states documented" },
          { ref: c3.ref, val: c3.value, suffix: " weeks", label: "From zero to v1, while shipping product" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "#F8FAFC",
              border: "1px solid rgba(16,118,188,0.10)",
              borderRadius: 12, padding: "24px 20px", textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 40, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1 }}>
              <span ref={s.ref}>{s.val}</span>{s.suffix}
            </p>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#6B7280", marginTop: 8, lineHeight: 1.5 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <Callout>
        The constraint was the brief: no dedicated systems team, no runway to pause product work. The system had to be designed in the gaps, documented enough to survive handoff, opinionated enough to actually reduce decisions.
      </Callout>

      <SystemArchitecture />

      <div className="csl-reveal" style={{ marginTop: 32 }}>
        <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>Approach</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
          {[
            { num: "01", title: "Token-first", body: "Every colour, spacing step and shadow is a named token, not a hardcoded value. Swap the token, update every instance." },
            { num: "02", title: "Component contracts", body: "Each component ships with defined props, states and usage rules. No ambiguity in handoff." },
            { num: "03", title: "Built while shipping", body: "Tokens and components were introduced incrementally alongside real features, not in a silo." },
            { num: "04", title: "Documentation as design", body: "The Figma file is the doc. Annotations live inside the frames, not in a separate Notion page nobody reads." },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 10, padding: "18px 20px",
              }}
            >
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 11, color: "#1076BC", fontWeight: 700, letterSpacing: "0.10em", marginBottom: 6 }}>
                {step.num}
              </p>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
                {step.title}
              </p>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  FOUNDATIONS
───────────────────────────────────────────────────────────────────── */
function FoundationsSection() {
  const foundations = [
    {
      nodeId: "14004-2",
      title: "Color System",
      icon: FoundationIcons.color,
      decision: "Colour tokens are split into three tiers: primitive (raw hex), semantic (intent-based), and component-specific. A single theme swap changes every surface without touching a component.",
      whyQ: "Why three token tiers instead of two?",
      whyA: "One tier (primitives only) scatters raw hex values everywhere. Two tiers help intent but leave a gap at the component level. Three tiers mean a button's background is Button.bg, not #1076BC. When the brand updates, you update one primitive. Everything else follows automatically.",
      showDemo: true,
      height: 520,
    },
    {
      nodeId: "14009-2",
      title: "Typography",
      icon: FoundationIcons.type,
      decision: "Two typefaces, one purpose each. Inter for UI density and readability, Lato for marketing weight. Nine named steps in the scale. Nothing ad hoc.",
      whyQ: "Why two typefaces instead of one?",
      whyA: "Inter handles density. Long tables, dropdowns, small labels — it reads cleanly at 12px. Lato carries marketing weight. Headings, hero copy, onboarding — it adds warmth without softness. One typeface would either feel sterile in the UI or informal in the marketing layer.",
      showDemo: false,
      height: 460,
    },
    {
      nodeId: "14008-2",
      title: "Spacing & Shadow",
      icon: FoundationIcons.spacing,
      decision: "An 8pt grid governs all spacing. Three shadow levels (resting, elevated, floating) map directly to depth intent, no decorative shadows.",
      showDemo: false,
      height: 460,
    },
    {
      nodeId: "14016-2",
      title: "Layout & Grid",
      icon: FoundationIcons.grid,
      decision: "12-column fluid grid with defined breakpoints. Component-level responsive rules live inside components, not as page-level overrides.",
      showDemo: false,
      height: 460,
    },
    {
      nodeId: "14032-225",
      title: "Iconography",
      icon: FoundationIcons.icons,
      decision: "A unified icon library at a single stroke weight. Every icon exports at 20 x 20 dp. Mixing icon styles is the fastest way to make a UI feel cheap. We did not.",
      showDemo: false,
      height: 520,
    },
  ];

  return (
    <CsSection id="foundations">
      <CsSectionHeader
        num="02"
        title="Foundations"
        sub="The pieces everything else is built on. Colour, type, spacing, grid, icons. Each defined once, referenced everywhere."
      />

      {foundations.map((f) => (
        <div key={f.nodeId} className="csl-reveal" style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(16,118,188,0.08)",
              flexShrink: 0,
            }}>
              {f.icon}
            </span>
            <h3 style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#111827",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}>
              {f.title}
            </h3>
          </div>
          <FigmaEmbed nodeId={f.nodeId} title={f.title} height={f.height} />
          <EmbedCaption>
            <span style={{ color: "#1076BC", fontWeight: 600 }}>Decision: </span>{f.decision}
          </EmbedCaption>
          {f.showDemo && <TokenLayerDemo />}
          {"whyQ" in f && f.whyQ && (
            <WhyCard question={f.whyQ} answer={f.whyA!} />
          )}
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  COMPONENTS
───────────────────────────────────────────────────────────────────── */
function ComponentsSection() {
  const components = [
    {
      nodeId: "14005-2",
      title: "Buttons",
      note: "Four variants: primary, secondary, tertiary, ghost. Every state (hover, active, loading, disabled) is documented. No one-off button styles.",
    },
    {
      nodeId: "14006-2",
      title: "Input Fields",
      note: "Seven states, three sizes. Error and helper text are part of the component, not added as detached text layers in handoff.",
    },
    {
      nodeId: "14007-2",
      title: "Checkbox, Radio & Toggle",
      note: "Selection controls share a consistent spatial rhythm. Indeterminate state is explicitly handled, a gap most teams discover in production.",
    },
    {
      nodeId: "14008-134",
      title: "Dropdown & Select",
      note: "Multi-select, single-select, searchable variants. The dropdown inherits the input field anatomy: same tokens, same spacing.",
    },
    {
      nodeId: "14007-153",
      title: "Tabs & Navigation",
      note: "Line and pill variants. Active state uses the accent token. Swap the theme and every tab updates.",
    },
    {
      nodeId: "14007-210",
      title: "Pagination",
      note: "Compact pagination with explicit page controls and item-count feedback. Sized to sit quietly inside dense data tables.",
    },
    {
      nodeId: "14030-2",
      title: "Date & Time Picker",
      note: "Travel-critical component. Ships with range selection, blocked-date states, and a time picker, the most-requested component in v1.",
    },
  ];

  return (
    <CsSection id="components">
      <CsSectionHeader
        num="03"
        title="Components"
        sub="Every component is a decision made once. States, variants, and usage rules live in the Figma file, not in a separate doc that goes stale."
      />

      <WhyCard
        question="Why document every state in Figma, not just the default?"
        answer="Handoff gaps live in the unstated. If hover is not designed, engineering invents it. If loading is not specified, it gets cut. Documenting every state per component upfront costs hours. Fixing state inconsistencies in production costs weeks."
      />

      <div
        className="csl-reveal"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 36, marginTop: 32 }}
      >
        {components.map((c) => (
          <div key={c.nodeId}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 8,
                background: "rgba(16,118,188,0.08)",
                flexShrink: 0,
              }}>
                {FoundationIcons.component}
              </span>
              <h3 style={{
                fontFamily: "Lato, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#111827",
                margin: 0,
                letterSpacing: "-0.01em",
              }}>
                {c.title}
              </h3>
            </div>
            <FigmaEmbed nodeId={c.nodeId} title={c.title} height={360} />
            <EmbedCaption>{c.note}</EmbedCaption>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  IN THE WILD
───────────────────────────────────────────────────────────────────── */
function InTheWildSection() {
  const flows = [
    {
      label: "Search",
      desc: "Date picker, passenger selector, airport autocomplete, all system components. The booking entry point assembles in half the time it used to.",
    },
    {
      label: "Results",
      desc: "Status badges (Direct / Economy / Delayed) are tokens. Grid rhythm is the layout system. Sorting controls use Dropdown. Zero custom overrides.",
    },
    {
      label: "Booking",
      desc: "The traveller detail form is Input, Dropdown and Checkbox in sequence. One component library, one form, consistent across every device width.",
    },
    {
      label: "Confirmation",
      desc: "Typography scale and colour tokens carry the hierarchy. The success state reuses the same Badge component as elsewhere. Semantic colour, different meaning.",
    },
  ];

  const principles = [
    {
      title: "Consistency as trust",
      body: "Agents booking 25k tickets a day cannot afford to re-learn a UI pattern. Every familiar component reduces cognitive load.",
    },
    {
      title: "Speed through reuse",
      body: "The entire booking confirmation screen was assembled from existing components in under two hours. That speed compounds.",
    },
    {
      title: "System as culture",
      body: "A design system is only as strong as the habit of using it. Annotations inside Figma frames made adoption frictionless.",
    },
  ];

  return (
    <CsSection id="in-wild">
      <CsSectionHeader
        num="04"
        title="In the wild"
        sub="The system only matters if it shows up in production. Here is how foundations and components assemble into the AirIQ booking flow."
      />

      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginBottom: 40 }}>
        {flows.map((f) => (
          <div
            key={f.label}
            style={{
              background: "#F8FAFC",
              border: "1px solid rgba(16,118,188,0.10)",
              borderRadius: 12, padding: "22px 20px",
            }}
          >
            <p
              style={{
                fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700,
                color: "#1076BC", letterSpacing: "0.12em", textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {f.label}
            </p>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#374151", lineHeight: 1.7 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      <Callout>
        The question I asked for every AirIQ screen: "Is this a component or a custom?" If it needed to be custom, that was a signal the system had a gap. I plugged it.
      </Callout>

      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 32 }}>
        {principles.map((p) => (
          <div
            key={p.title}
            style={{
              background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 10, padding: "20px 18px",
            }}
          >
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 10 }}>
              {p.title}
            </p>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </CsSection>
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
    "Ad hoc spacing. Every designer eyeballed it.",
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
      <CsSectionHeader
        num="05"
        title="Impact"
        sub="A design system is not just a deliverable. It is a multiplier. These are the results after three months in production."
      />

      {/* before / after — vivid contrast */}
      <div className="csl-reveal" style={{ marginBottom: 12 }}>
        <p style={{
          fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700,
          color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase",
          marginBottom: 14,
        }}>
          Without the system vs. with the system
        </p>
      </div>
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
        <div style={{ background: "#FEF3F2", border: "1px solid rgba(242,97,110,0.18)", borderRadius: 12, padding: "24px 22px" }}>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, color: "#F2616E", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>
            Before
          </p>
          {before.map((b) => (
            <p key={b} style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#374151", lineHeight: 1.65, marginBottom: 8, paddingLeft: 14, borderLeft: "2px solid rgba(242,97,110,0.30)" }}>
              {b}
            </p>
          ))}
        </div>
        <div style={{ background: "#EAF9F1", border: "1px solid rgba(5,150,105,0.18)", borderRadius: 12, padding: "24px 22px" }}>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, color: "#059669", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>
            After
          </p>
          {after.map((a) => (
            <p key={a} style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#374151", lineHeight: 1.65, marginBottom: 8, paddingLeft: 14, borderLeft: "2px solid rgba(5,150,105,0.30)" }}>
              {a}
            </p>
          ))}
        </div>
      </div>

      {/* metrics */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginBottom: 48 }}>
        {[
          { ref: c1.ref, val: c1.value, suffix: "%", label: "Faster screen assembly", sub: "for screens built entirely from library components" },
          { ref: c2.ref, val: c2.value, suffix: " weeks", label: "From 0 to v1", sub: "while simultaneously shipping product" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              textAlign: "center", background: "#F8FAFC",
              border: "1px solid rgba(16,118,188,0.10)",
              borderRadius: 12, padding: "32px 20px",
            }}
          >
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 48, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1 }}>
              <span ref={s.ref}>{s.val}</span>{s.suffix}
            </p>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 700, color: "#374151", margin: "12px 0 6px" }}>
              {s.label}
            </p>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      {/* learnings */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
        {[
          {
            title: "Adoption beats perfection",
            body: "A system no one uses is a system that does not exist. I shipped an imperfect v1 fast, then iterated based on real usage, not theoretical completeness.",
          },
          {
            title: "Tokens are the real leverage",
            body: "Components can be rebuilt. Tokens are load-bearing. Getting naming conventions and tier structure right early saved weeks of migration work later.",
          },
        ].map((l) => (
          <div key={l.title} style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 10, padding: "22px 22px" }}>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 10 }}>
              {l.title}
            </p>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>
              {l.body}
            </p>
          </div>
        ))}
      </div>

      {/* next case study */}
      <div className="csl-reveal" style={{ textAlign: "center", paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>
          Next case study
        </p>
        <a
          href="/projects/airiq"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "Lato, sans-serif", fontSize: 18, fontWeight: 700,
            color: "#111827", textDecoration: "none",
          }}
        >
          Air IQ: B2B Flight Booking
          <span style={{ color: "#1076BC", fontSize: 22 }}>→</span>
        </a>
      </div>
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
