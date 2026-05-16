"use client";

import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"        },
  { id: "discovery",   label: "Discovery"       },
  { id: "approach",    label: "Approach"        },
  { id: "color",       label: "Color System"    },
  { id: "typography",  label: "Typography"      },
  { id: "iconography", label: "Iconography"     },
  { id: "components",  label: "Components"      },
  { id: "grid",        label: "Layout & Grid"   },
  { id: "results",     label: "Results & Impact"},
  { id: "learnings",   label: "Learnings"       },
];

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function DSHero() {
  return (
    <div className="csl-hero">
      <div className="csl-hero-grid" />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Design System · AirIQ</div>
          <h1 className="csl-hero-title">
            One system.<br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>Built for scale.</em>
          </h1>
          <p className="csl-hero-desc">
            As Lead Product Designer, I planned, designed, and scaled a unified design system across multiple products. One Figma library that gave design and engineering a shared language — and ended the inconsistency for good.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead Product Designer</span>
            <span className="csl-hero-chip">Jan – Aug 2023</span>
            <span className="csl-hero-chip">Figma · Lato</span>
            <span className="csl-hero-chip">0 → 1 System</span>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1076BC", color: "#fff", borderRadius: 8,
              padding: "10px 20px", fontSize: "0.76rem", fontWeight: 600,
              textDecoration: "none", marginTop: 8, width: "fit-content",
            }}
          >
            View on Figma ↗
          </a>
        </div>
        <div className="csl-hero-right">
          <DSHeroVisual />
        </div>
      </div>
      <div className="csl-hero-stats">
        {[
          { val: "62",   label: "Custom icons"       },
          { val: "30+",  label: "Color tokens"      },
          { val: "3",    label: "Grid systems"      },
          { val: "0 → 1",label: "Complete system"   },
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

function DSHeroVisual() {
  return (
    <div style={{
      background: "#0D1829", borderRadius: 16, padding: "20px",
      border: "1.5px solid rgba(16,118,188,0.35)",
      boxShadow: "0 24px 60px rgba(16,118,188,0.2)",
      width: "100%", maxWidth: 400,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }} />
        <div style={{ flex: 1, height: 18, background: "rgba(255,255,255,0.06)", borderRadius: 4, marginLeft: 6 }} />
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {[
          { c: "#1076BC", label: "Tech Blue" },
          { c: "#F2616E", label: "Coral" },
          { c: "#E3F3FF", label: "Lt Blue" },
          { c: "#F9FAFC", label: "BG" },
        ].map(({ c, label }, i) => (
          <div key={label} style={{ flex: 1 }}>
            <div style={{ height: 32, borderRadius: 6, background: c, border: i > 1 ? "1px solid rgba(255,255,255,0.12)" : "none", marginBottom: 4 }} />
            <p style={{ fontSize: "0.44rem", color: "rgba(255,255,255,0.3)", textAlign: "center", fontFamily: "ui-monospace,monospace" }}>{label}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 7, marginBottom: 14, alignItems: "center" }}>
        <div style={{ background: "#1076BC", borderRadius: 6, padding: "7px 14px" }}>
          <span style={{ fontSize: "0.58rem", color: "#fff", fontWeight: 600 }}>Button ↗</span>
        </div>
        <div style={{ background: "#F2616E", borderRadius: 6, padding: "7px 14px" }}>
          <span style={{ fontSize: "0.58rem", color: "#fff", fontWeight: 600 }}>Button</span>
        </div>
        <div style={{ border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "7px 14px" }}>
          <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Button</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 5, marginBottom: 14 }}>
        {["✉","✕","⌕","⊞","≡","⬇","⚠","⊙","✓","+","—","!","⊗","⌃","↕","⊖"].map((icon, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 5, padding: "5px", textAlign: "center" }}>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>{icon}</span>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(16,118,188,0.18)", borderRadius: 8, padding: "7px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.62rem", color: "#60BDFF" }}>AirIQ Design System</span>
        <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.35)" }}>v1.0</span>
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
        title="One system. Every product. Zero inconsistency."
      />

      {/* Meta block */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#E0E6EC", borderRadius: 14, overflow: "hidden", marginBottom: 32 }}>
        {[
          { label: "Role",             value: "Lead Product Designer"                    },
          { label: "Duration",         value: "Jan – August 2023"                        },
          { label: "Team",             value: "1 Developer"                              },
          { label: "Responsibilities", value: "Architecture · Components"               },
        ].map((item) => (
          <div key={item.label} style={{ background: "#fff", padding: "18px 22px" }}>
            <p style={{ fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", marginBottom: 6 }}>{item.label}</p>
            <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{item.value}</p>
          </div>
        ))}
      </div>

      <p className="csl-text csl-reveal">
        Design systems at my previous two organizations were among my first and most foundational projects as a designer. As Lead Product Designer, I planned, designed, and scaled a unified design system across multiple products within the organization&rsquo;s ecosystem.
      </p>
      <p className="csl-text csl-reveal rd1">
        At the time, the organization had several products — each evolving independently. This resulted in visual inconsistency, fragmented user experiences, and mounting inefficiencies across both design and development. The goal was clear: create a single source of truth that aligned the brand, streamlined workflows, and scaled with the platform.
      </p>

      <div className="csl-role-strip csl-reveal rd2">
        {[
          { icon: "🎯", head: "Single source of truth",  body: "One Figma library, one token set, one icon grid. Design and engineering finally speaking the same visual language across every product."  },
          { icon: "⚡", head: "Speed at scale",          body: "New features assembled from the library in hours, not days. Designers stopped rebuilding the same buttons every sprint."               },
          { icon: "🔄", head: "Living system",           body: "Not a locked spec doc — every color, icon, and component is documented and versioned so the system evolves with the product."         },
        ].map((r) => (
          <div className="csl-role-chip" key={r.head}>
            <div className="csl-role-icon">{r.icon}</div>
            <div className="csl-role-head">{r.head}</div>
            <p className="csl-role-body">{r.body}</p>
          </div>
        ))}
      </div>

      {/* NDA note */}
      <div className="csl-callout csl-reveal rd3" style={{ marginTop: 8, borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        <strong>NDA Note —</strong> This design system was designed and built from scratch for a production organization and later scaled across products. To comply with NDA, certain components and visuals have been edited or replaced.
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  DISCOVERY
───────────────────────────────────────────────────────────────────── */
function DiscoverySection() {
  return (
    <CsSection id="discovery">
      <CsSectionHeader
        label="Discovery Phase"
        title="The reality check: inconsistency everywhere."
        sub="Before designing anything new, I conducted a full audit of every existing product across the organization. The goal was to understand what already existed — and where things were breaking down."
      />

      <div className="csl-callout csl-reveal" style={{ borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        The product looked different on every page. Not dramatically — subtly. Different border radii, slightly different shades of the same blue, icons that mixed outlined and filled styles in the same flow. Small things that compound into a product that never feels fully finished.
      </div>

      <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111827", marginBottom: 14 }} className="csl-reveal rd1">What I found:</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }} className="csl-reveal rd2">
        {[
          { title: "Multiple component versions",   body: "Buttons, tables, and form fields had 2–3 different versions each. No shared base component, no shared rules."               },
          { title: "3 shades of the same blue",     body: "Tech Blue had three different hex values in production — all intended to be 'the primary blue'."                              },
          { title: "No shared spacing or type rules",body: "Font sizes and spacing values were eyeballed per feature. No tokens, no scale, no documentation."                          },
          { title: "Figma files impossible to reuse",body: "Files were organized per-feature with no shared styles or components. Onboarding a new designer meant learning 12 files."  },
        ].map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderLeft: "3px solid #E3F3FF" }}>
            <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#1076BC", marginBottom: 8 }}>{item.title}</div>
            <div style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{item.body}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, margin: "28px 0" }} className="csl-reveal rd3">
        {[
          { n: "40+",  t: "Screens audited",            d: "Every page of every product mapped before a single new component was drawn." },
          { n: "3×",   t: "Same components built",      d: "The average component existed in 3 slightly different versions across the product." },
          { n: "2 wk", t: "Audit duration",             d: "Two weeks of mapping prevented months of rework. The audit revealed the true scope." },
          { n: "4",    t: "Teams interviewed",          d: "Design, engineering, product, and QA each had a different definition of 'consistent'." },
        ].map((s) => (
          <div className="csl-process-step" key={s.n}>
            <div className="csl-process-num" style={{ fontSize: "1rem", letterSpacing: 0 }}>{s.n}</div>
            <div className="csl-process-title">{s.t}</div>
            <p className="csl-process-text">{s.d}</p>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  APPROACH
───────────────────────────────────────────────────────────────────── */
function ApproachSection() {
  return (
    <CsSection id="approach">
      <CsSectionHeader
        label="Approach & Strategy"
        title="Structure first. Components second."
        sub="Rather than immediately designing components, I focused on process. How would work be tracked? How would developers be involved? What principles would guide every decision? These were answered before Figma was opened."
      />

      <div className="csl-card csl-reveal" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 20 }}>Key decisions made at the start</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { icon: "⬇", decision: "Top-down approach",       reason: "Start with high-impact, high-frequency components. Deliver value to teams fast — don't get lost building atoms for weeks."              },
            { icon: "⚛", decision: "Atomic Design principles", reason: "Every component is composed of tokens → atoms → molecules → organisms. Scalability is structural, not cosmetic."                        },
            { icon: "🤝", decision: "Dev partnership from day 1",reason: "Partnered with the frontend developer before designing components. Named properties, constraints, and behaviors aligned from the start." },
            { icon: "📋", decision: "Kanban board in Figma",   reason: "Built a component tracking board directly inside the Figma file — status, feedback, and iteration all in one place, accessible to all."  },
          ].map((item, i, arr) => (
            <div key={item.decision} style={{ display: "flex", gap: 16, padding: "18px 0", borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none", alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "#E3F3FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1rem" }}>{item.icon}</div>
              <div>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#111827", marginBottom: 4 }}>{item.decision}</p>
                <p style={{ fontSize: "0.74rem", color: "#6B7280", lineHeight: 1.6 }}>{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Figma foundations */}
      <div className="csl-card-3col csl-reveal rd1" style={{ marginBottom: 20 }}>
        {[
          { icon: "⚙", title: "Auto Layout",        desc: "Every component uses auto layout — so it stretches, wraps, and adapts to content without ever needing manual resizing."    },
          { icon: "🔀", title: "Variants",           desc: "Component variants encode all states (default, hover, focus, disabled) in one master component. No duplicate files."        },
          { icon: "🪆", title: "Nested components",  desc: "Icons, badges, and labels are nested inside cards and inputs. Change the nested atom — every organism that uses it updates." },
        ].map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px 18px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "#E3F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: 14 }}>{item.icon}</div>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>{item.title}</p>
            <p style={{ fontSize: "0.74rem", color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  COLOR SYSTEM
───────────────────────────────────────────────────────────────────── */
function ColorSection() {
  const mainColors = [
    { name: "Tech Blue",       hex: "#1076BC", border: false },
    { name: "Coral",           hex: "#F2616E", border: false },
    { name: "White",           hex: "#FFFFFF", border: true  },
    { name: "Light Tech Blue", hex: "#E3F3FF", border: true  },
    { name: "Light Coral",     hex: "#FFD6DA", border: true  },
  ];

  const neutrals = [
    { name: "Background",   hex: "#F9FAFC" },
    { name: "Background 2", hex: "#E8EFF5" },
    { name: "Border",       hex: "#E0E6EC" },
    { name: "Disability",   hex: "#B0B8C0" },
    { name: "Placeholder",  hex: "#A3A3A3" },
    { name: "Grey Text",    hex: "#6B7280" },
    { name: "Grey Text 2",  hex: "#4D4D4D" },
    { name: "Body Text",    hex: "#333333" },
    { name: "Dark Text",    hex: "#1C1C1C" },
  ];

  const signals = [
    { name: "Green",    hex: "#059669" },
    { name: "Teal",     hex: "#0FBCAC" },
    { name: "Blue",     hex: "#2D9EED" },
    { name: "Violet",   hex: "#606EF2" },
    { name: "Red",      hex: "#EC1A2E" },
    { name: "Burgundy", hex: "#BC1176" },
    { name: "Pink",     hex: "#E561F2" },
    { name: "Orange",   hex: "#FF8934" },
    { name: "Brown",    hex: "#A75B00" },
    { name: "Yellow",   hex: "#EDD916" },
  ];

  return (
    <CsSection id="color">
      <CsSectionHeader
        label="Color System"
        title="A color language every team speaks."
        sub="Three tiers: brand primaries that define the product's identity, a nine-step neutral scale for hierarchy and structure, and a ten-color semantic signal palette for status and feedback. Every value documented as a token."
      />

      <div className="csl-card csl-reveal" style={{ marginBottom: 14 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Main Colors — Brand Primaries</p>
        <div style={{ display: "flex", gap: 14 }}>
          {mainColors.map((c) => (
            <div key={c.hex} style={{ flex: 1 }}>
              <div style={{ height: 72, borderRadius: 10, background: c.hex, border: c.border ? "1px solid #E0E6EC" : "none", marginBottom: 10 }} />
              <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#111827", marginBottom: 3, lineHeight: 1.3 }}>{c.name}</p>
              <p style={{ fontSize: "0.6rem", color: "#9CA3AF", fontFamily: "ui-monospace,monospace" }}>{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="csl-card csl-reveal rd1" style={{ marginBottom: 14 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Neutral Scale — Background to Dark Text</p>
        <div style={{ display: "flex", gap: 8 }}>
          {neutrals.map((c, i) => (
            <div key={c.hex} style={{ flex: 1 }}>
              <div style={{ height: 52, borderRadius: 8, background: c.hex, border: "1px solid #E0E6EC", marginBottom: 7 }} />
              <p style={{ fontSize: "0.56rem", fontWeight: 600, color: "#374151", marginBottom: 2, lineHeight: 1.2 }}>{c.name}</p>
              <p style={{ fontSize: "0.5rem", color: "#9CA3AF", fontFamily: "ui-monospace,monospace" }}>{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="csl-card csl-reveal rd2" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Signal Colors — Status & Feedback</p>
        <div style={{ display: "flex", gap: 8 }}>
          {signals.map((c) => (
            <div key={c.hex} style={{ flex: 1 }}>
              <div style={{ height: 44, borderRadius: 8, background: c.hex, marginBottom: 7 }} />
              <p style={{ fontSize: "0.58rem", fontWeight: 600, color: "#111827", marginBottom: 2, lineHeight: 1.2 }}>{c.name}</p>
              <p style={{ fontSize: "0.5rem", color: "#9CA3AF", fontFamily: "ui-monospace,monospace" }}>{c.hex}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.68rem", color: "#6B7280", marginTop: 14, lineHeight: 1.6 }}>
          Each signal color ships with a light tint variant used for alert and badge backgrounds. Hover states are defined for the three primary interactive colors. All text-on-color combinations were verified for WCAG AA contrast.
        </p>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  TYPOGRAPHY
───────────────────────────────────────────────────────────────────── */
function TypographySection() {
  const bodyRows = [
    { size: "19pt", weights: "400 · 500 · 600 · 700 · 900", use: "Lead text · Hero descriptions", px: 19 },
    { size: "17pt", weights: "400 · 500 · 600 · 700 · 900", use: "Primary body copy",             px: 17 },
    { size: "15pt", weights: "400 · 500 · 600 · 700 · 900", use: "Secondary body · Descriptions", px: 15 },
    { size: "13pt", weights: "400 · 500 · 600 · 700",       use: "Labels · Form fields",          px: 13 },
    { size: "11pt", weights: "400 · 500 · 600",             use: "Legal text · Helper text",       px: 11 },
  ];

  return (
    <CsSection id="typography">
      <CsSectionHeader
        label="Typography"
        title={<>Lato. Clean, <em style={{ fontStyle: "italic" }}>human, readable.</em></>}
        sub="Lato was chosen for its humanist warmth, geometric precision, and excellent legibility at all sizes. A consistent 140% line height and −0.5% letter spacing run across every size — giving the type scale a calm, unified rhythm."
      />

      <div className="csl-card csl-reveal" style={{ marginBottom: 14, display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div>
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 10 }}>Typeface</p>
          <p style={{ fontSize: "2.6rem", fontWeight: 700, color: "#111827", lineHeight: 1, marginBottom: 4 }}>Lato</p>
          <p style={{ fontSize: "0.72rem", color: "#6B7280" }}>Google Fonts · Open Source · Humanist sans-serif</p>
        </div>
        <div style={{ borderLeft: "1px solid #F3F4F6", paddingLeft: 40 }}>
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 14 }}>Weights in use</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { w: 400, n: "Regular" },
              { w: 500, n: "Medium" },
              { w: 600, n: "Semi-Bold" },
              { w: 700, n: "Bold" },
              { w: 900, n: "Black" },
            ].map(({ w, n }) => (
              <div key={w} style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ fontWeight: w, fontSize: "0.88rem", color: "#111827", minWidth: 110 }}>Lato {n}</span>
                <span style={{ fontSize: "0.6rem", color: "#9CA3AF", fontFamily: "ui-monospace,monospace" }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderLeft: "1px solid #F3F4F6", paddingLeft: 40 }}>
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 14 }}>Global settings</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { k: "Line height",    v: "140%"  },
              { k: "Letter spacing", v: "−0.5%" },
            ].map(({ k, v }) => (
              <div key={k}>
                <p style={{ fontSize: "0.6rem", color: "#9CA3AF", marginBottom: 2 }}>{k}</p>
                <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1076BC", fontFamily: "ui-monospace,monospace" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="csl-card-2col csl-reveal rd1" style={{ marginBottom: 14 }}>
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Heading Scale</p>
          {[
            { label: "Heading 1", desktop: "28pt", mobile: "20pt", w: 700 },
            { label: "Heading 2", desktop: "25pt", mobile: "16pt", w: 700 },
          ].map((h, i, arr) => (
            <div key={h.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none" }}>
              <span style={{ fontSize: `${i === 0 ? 1.7 : 1.35}rem`, fontWeight: h.w, color: "#111827" }}>{h.label}</span>
              <div style={{ display: "flex", gap: 20, flexShrink: 0 }}>
                {[{ k: "Desktop", v: h.desktop }, { k: "Mobile", v: h.mobile }, { k: "LH", v: "140%" }].map(({ k, v }) => (
                  <div key={k} style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "0.55rem", color: "#9CA3AF" }}>{k}</p>
                    <p style={{ fontSize: "0.74rem", fontWeight: 700, color: "#111827", fontFamily: "ui-monospace,monospace" }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Body Scale — 5 sizes · 5 weights</p>
          {bodyRows.map((row, i) => (
            <div key={row.size} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 0", borderBottom: i < bodyRows.length - 1 ? "1px solid #F3F4F6" : "none" }}>
              <span style={{ fontSize: `${row.px * 0.7}px`, color: "#111827", minWidth: 60, flexShrink: 0 }}>Body</span>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#111827", fontFamily: "ui-monospace,monospace", minWidth: 32 }}>{row.size}</span>
              <span style={{ fontSize: "0.58rem", color: "#9CA3AF", flex: 1 }}>{row.use}</span>
            </div>
          ))}
        </div>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  ICONOGRAPHY
───────────────────────────────────────────────────────────────────── */
function IconographySection() {
  const categories = [
    { icon: "✉",  name: "Communication",   count: "Mail · Chat · Alert · Notification · 12 icons"  },
    { icon: "✕",  name: "Actions",          count: "Close · Add · Delete · Edit · Filter · 18 icons" },
    { icon: "⌕",  name: "Search & Nav",     count: "Search · Sort · Navigate · Expand · 14 icons"   },
    { icon: "⊞",  name: "Layout",           count: "Grid · Split · Columns · Stack · 10 icons"      },
    { icon: "👤", name: "User & Identity",  count: "User · Group · Lock · Settings · 12 icons"      },
    { icon: "📅", name: "Time & Date",      count: "Calendar · Clock · Timer · History · 10 icons"  },
    { icon: "🏠", name: "Travel",            count: "Home · Luggage · Restaurant · Star · 16 icons" },
    { icon: "📊", name: "Data",              count: "Filter · Hash · Table · Badge · 12 icons"      },
    { icon: "↕",  name: "Direction",        count: "Up · Down · Left · Right · Diagonal · 10 icons" },
    { icon: "⚠",  name: "Status",           count: "Warning · Error · Success · Info · 8 icons"     },
    { icon: "☀",  name: "Modes",            count: "Light · Dark · Dawn · Moon · Refresh · 10 icons"},
    { icon: "✏",  name: "Editing",          count: "Pen · Pencil · Sliders · Write · Tune · 8 icons"},
  ];

  return (
    <CsSection id="iconography">
      <CsSectionHeader
        label="Iconography"
        title={<>62 custom icons. <em style={{ fontStyle: "italic" }}>One grid. Three sizes.</em></>}
        sub="Every icon is drawn on a 24×24px keyline grid with a consistent 2px stroke weight and 2px corner radius. Each ships in three sizes — 24px, 20px, and 16px — with identical proportions and optical centre across all three."
      />

      <div className="csl-card-2col csl-reveal" style={{ marginBottom: 20 }}>
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Keyline construction grid</p>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{ position: "relative", width: 88, height: 88, border: "2px solid #1076BC", borderRadius: 14 }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }} viewBox="0 0 88 88">
                {[22,44,66].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="88" stroke="#1076BC" strokeWidth="0.5"/>)}
                {[22,44,66].map(y => <line key={`h${y}`} x1="0" y1={y} x2="88" y2={y} stroke="#1076BC" strokeWidth="0.5"/>)}
              </svg>
              <div style={{ position: "absolute", inset: 10, border: "1.5px solid #1076BC", borderRadius: "50%", opacity: 0.4 }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", width: 6, height: 6, background: "#1076BC", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
            </div>
          </div>
          {[
            { k: "Canvas",        v: "24 × 24 px" },
            { k: "Live area",     v: "20 × 20 px" },
            { k: "Stroke weight", v: "2 px"        },
            { k: "Corner radius", v: "2 px"        },
            { k: "Sizes",         v: "24 · 20 · 16 px" },
            { k: "Export",        v: "SVG"         },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "0.68rem", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#111827", fontFamily: "ui-monospace,monospace" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Three sizes · same proportions</p>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-end", justifyContent: "center", marginBottom: 24 }}>
            {[{ size: 56, px: "24px" }, { size: 46, px: "20px" }, { size: 36, px: "16px" }].map(({ size, px }) => (
              <div key={px} style={{ textAlign: "center" }}>
                <div style={{ width: size, height: size, border: "2px solid #1076BC", borderRadius: Math.round(size * 0.33), margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: size * 0.3, height: size * 0.3, borderRadius: "50%", background: "rgba(16,118,188,0.25)" }} />
                </div>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "#111827", fontFamily: "ui-monospace,monospace" }}>{px}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.7 }}>
            Icons are exported as SVG for production. All three sizes share the same stroke weight and optical centre — they look consistent whether used in a top navigation or as a small inline indicator inside a table cell.
          </p>
          <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Outlined style", "2px stroke", "SVG export", "Optical centre"].map((tag) => (
              <span key={tag} style={{ fontSize: "0.6rem", fontWeight: 600, background: "#E3F3FF", color: "#1076BC", borderRadius: 20, padding: "3px 10px" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="csl-reveal rd1">
        {categories.map((cat) => (
          <div key={cat.name} style={{ background: "#fff", borderRadius: 14, padding: "16px 14px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", borderTop: "3px solid #E3F3FF" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: 8 }}>{cat.icon}</div>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827", marginBottom: 5 }}>{cat.name}</div>
            <div style={{ fontSize: "0.62rem", color: "#9CA3AF", lineHeight: 1.5 }}>{cat.count}</div>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd2" style={{ marginTop: 20, borderRadius: 16, overflow: "hidden" }}>
        <img
          src="/Design System/icons.png"
          alt="Full icon library — all 62 custom icons across 12 categories at 3 sizes"
          style={{ width: "100%", display: "block", borderRadius: 16 }}
        />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  COMPONENTS
───────────────────────────────────────────────────────────────────── */
function ComponentsSection() {
  const buttonTypes = [
    { type: "Primary",    bg: "#1076BC",     color: "#fff",     border: "none",                   note: "Main CTA — search, book, confirm"   },
    { type: "Secondary",  bg: "#F2616E",     color: "#fff",     border: "none",                   note: "Destructive · Alerts · Promotions"   },
    { type: "Tertiary",   bg: "transparent", color: "#1C1C1C",  border: "1.5px solid #E0E6EC",   note: "Secondary actions · Cancel · Filters" },
    { type: "Borderless", bg: "transparent", color: "#1076BC",  border: "none",                   note: "Inline links · Low-emphasis actions"  },
  ];

  const states = [
    { label: "Default",  bgs: ["#1076BC","#F2616E","transparent","transparent"], disabled: false, focused: false },
    { label: "Hover",    bgs: ["#0F71B5","#E95D6A","#F5F5F5","transparent"],    disabled: false, focused: false },
    { label: "Focus",    bgs: ["#1076BC","#F2616E","transparent","transparent"], disabled: false, focused: true  },
    { label: "Disabled", bgs: ["#B0B8C0","#B0B8C0","transparent","transparent"], disabled: true, focused: false },
  ];

  const fieldStates = [
    { label: "Empty",    border: "#E0E6EC", labelCol: "#9CA3AF", value: "",                  bg: "#fff",    hint: "Placeholder text"  },
    { label: "Focus",    border: "#1076BC", labelCol: "#1076BC", value: "",                  bg: "#fff",    hint: "User is typing..."  },
    { label: "Filled",   border: "#E0E6EC", labelCol: "#6B7280", value: "New Delhi",         bg: "#fff",    hint: ""                  },
    { label: "Error",    border: "#EC1A2E", labelCol: "#EC1A2E", value: "invalid@",          bg: "#FFF5F5", hint: "Enter a valid email"},
    { label: "Disabled", border: "#E0E6EC", labelCol: "#B0B8C0", value: "Read-only",         bg: "#F9FAFC", hint: ""                  },
  ];

  return (
    <CsSection id="components">
      <CsSectionHeader
        label="Components"
        title="Built from scratch. Every state documented."
        sub="Every component in the library was designed from first principles — buttons, text fields, cards, and more. Each ships with all interactive states so developers never have to guess what a focused input or a disabled button should look like."
      />

      {/* ── Button system ── */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 20 }}>Button System — 4 types · 4 states</p>
        <div style={{ display: "grid", gridTemplateColumns: "72px repeat(4, 1fr)", gap: 12, marginBottom: 12, alignItems: "end" }}>
          <div />
          {buttonTypes.map((b) => (
            <div key={b.type}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "#111827", marginBottom: 3 }}>{b.type}</p>
              <p style={{ fontSize: "0.58rem", color: "#9CA3AF", lineHeight: 1.4 }}>{b.note}</p>
            </div>
          ))}
        </div>
        {states.map(({ label, bgs, disabled, focused }) => (
          <div key={label} style={{ display: "grid", gridTemplateColumns: "72px repeat(4, 1fr)", gap: 12, marginBottom: 10, alignItems: "center" }}>
            <p style={{ fontSize: "0.65rem", color: "#6B7280", fontWeight: 500 }}>{label}</p>
            {buttonTypes.map((b, i) => (
              <div key={b.type}>
                <div style={{
                  background: disabled ? "#B0B8C0" : bgs[i],
                  color: disabled ? "#F9FAFC" : b.color,
                  border: b.border,
                  outline: focused ? "2px solid #1076BC" : "none",
                  outlineOffset: 2,
                  borderRadius: 8, padding: "8px 14px",
                  fontSize: "0.68rem", fontWeight: 600,
                  opacity: disabled ? 0.7 : 1,
                  display: "inline-flex", alignItems: "center", gap: 4,
                  whiteSpace: "nowrap",
                }}>
                  {b.type === "Primary" ? "Button ↗" : "Button"}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #F3F4F6" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#6B7280", marginBottom: 12 }}>Icon Button</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ background: "#1076BC", borderRadius: 8, padding: "9px 18px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "0.72rem", color: "#fff", fontWeight: 600 }}>Find Flights</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)" }}>⌕</span>
            </div>
            <p style={{ fontSize: "0.7rem", color: "#6B7280", maxWidth: 280, lineHeight: 1.6 }}>Icon buttons pair a label with a trailing icon. Used for primary search CTAs and key conversion actions.</p>
          </div>
        </div>
      </div>

      <div className="csl-card-2col csl-reveal rd1" style={{ marginBottom: 32 }}>
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 14 }}>Desktop specs</p>
          {[
            { k: "Height",        v: "36 px" },
            { k: "Padding H",     v: "16 px" },
            { k: "Corner radius", v: "8 px"  },
            { k: "Font",          v: "Lato · 13pt · 600" },
            { k: "Icon gap",      v: "6 px"  },
            { k: "Focus ring",    v: "2px offset, accent" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "0.68rem", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#111827", fontFamily: "ui-monospace,monospace" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 14 }}>Mobile specs</p>
          {[
            { k: "Height",       v: "44 px (min touch)" },
            { k: "Padding H",    v: "20 px" },
            { k: "Corner radius",v: "8 px"  },
            { k: "Font",         v: "Lato · 15pt · 600" },
            { k: "Full-width",   v: "Yes — fills container" },
            { k: "Focus ring",   v: "2px offset, accent" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "0.68rem", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#111827", fontFamily: "ui-monospace,monospace" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Text field system ── */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 20 }}>Text Field System — 5 states</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 20 }}>
          {fieldStates.map((f) => (
            <div key={f.label}>
              <p style={{ fontSize: "0.6rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{f.label}</p>
              <div style={{
                border: `1.5px solid ${f.border}`,
                borderRadius: 8,
                background: f.bg,
                padding: "10px 12px",
                position: "relative",
                opacity: f.label === "Disabled" ? 0.6 : 1,
              }}>
                <p style={{ fontSize: "0.54rem", color: f.labelCol, marginBottom: 3, fontWeight: 600 }}>From</p>
                <p style={{ fontSize: "0.72rem", color: f.value ? "#1C1C1C" : "#B0B8C0", fontWeight: f.value ? 500 : 400, minHeight: 18 }}>
                  {f.value || "City or airport"}
                </p>
                {f.hint && (
                  <p style={{ fontSize: "0.52rem", color: f.border === "#EC1A2E" ? "#EC1A2E" : "#9CA3AF", marginTop: 6 }}>{f.hint}</p>
                )}
                {f.label === "Focus" && (
                  <div style={{ position: "absolute", inset: -3, border: "2px solid rgba(16,118,188,0.25)", borderRadius: 10, pointerEvents: "none" }} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, paddingTop: 16, borderTop: "1px solid #F3F4F6" }}>
          {[
            { k: "Height",        v: "48 px (desktop) · 52 px (mobile)" },
            { k: "Corner radius", v: "8 px" },
            { k: "Label",         v: "Lato · 11pt · 600 · uppercase" },
            { k: "Input text",    v: "Lato · 13pt · 500" },
            { k: "Border",        v: "1.5 px — changes per state" },
            { k: "Error text",    v: "Lato · 11pt · 400 · Coral" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontSize: "0.58rem", color: "#9CA3AF" }}>{k}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#111827", fontFamily: "ui-monospace,monospace" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Itinerary card ── */}
      <div className="csl-card csl-reveal rd1" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 20 }}>Itinerary Card — The most complex component</p>
        <div className="csl-card-2col" style={{ alignItems: "start" }}>
          {/* Card mockup */}
          <div style={{ border: "1.5px solid #E0E6EC", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            {/* Card header */}
            <div style={{ background: "#F9FAFC", borderBottom: "1px solid #E0E6EC", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: "#1076BC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.55rem", color: "#fff", fontWeight: 700 }}>6E</span>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#374151" }}>IndiGo</span>
                <span style={{ fontSize: "0.6rem", color: "#9CA3AF" }}>6E-234</span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ fontSize: "0.58rem", fontWeight: 600, background: "#E3F3FF", color: "#1076BC", borderRadius: 20, padding: "2px 8px" }}>Economy</span>
                <span style={{ fontSize: "0.58rem", fontWeight: 600, background: "#DCFFEA", color: "#059669", borderRadius: 20, padding: "2px 8px" }}>Direct</span>
              </div>
            </div>
            {/* Flight route */}
            <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ textAlign: "center", minWidth: 60 }}>
                <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111827", lineHeight: 1, marginBottom: 2 }}>06:00</p>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "#1076BC" }}>DEL</p>
                <p style={{ fontSize: "0.56rem", color: "#9CA3AF" }}>Terminal 3</p>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <p style={{ fontSize: "0.58rem", color: "#6B7280" }}>2h 15m</p>
                <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", border: "1.5px solid #1076BC", background: "#fff", flexShrink: 0 }} />
                  <div style={{ flex: 1, height: 1.5, background: "#E0E6EC" }} />
                  <span style={{ fontSize: "0.8rem", color: "#1076BC" }}>✈</span>
                  <div style={{ flex: 1, height: 1.5, background: "#E0E6EC" }} />
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1076BC", flexShrink: 0 }} />
                </div>
              </div>
              <div style={{ textAlign: "center", minWidth: 60 }}>
                <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111827", lineHeight: 1, marginBottom: 2 }}>08:15</p>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "#1076BC" }}>BOM</p>
                <p style={{ fontSize: "0.56rem", color: "#9CA3AF" }}>Terminal 1</p>
              </div>
            </div>
            {/* Footer */}
            <div style={{ borderTop: "1px solid #E0E6EC", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F9FAFC" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: "0.6rem", color: "#6B7280" }}>🧳 23 kg</span>
                <span style={{ fontSize: "0.6rem", color: "#6B7280" }}>🍽 Meal</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div>
                  <p style={{ fontSize: "0.56rem", color: "#9CA3AF", textAlign: "right" }}>from</p>
                  <p style={{ fontSize: "1rem", fontWeight: 800, color: "#111827", lineHeight: 1 }}>₹3,450</p>
                </div>
                <div style={{ background: "#1076BC", borderRadius: 8, padding: "8px 14px", cursor: "pointer" }}>
                  <span style={{ fontSize: "0.68rem", color: "#fff", fontWeight: 600 }}>Book →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Anatomy breakdown */}
          <div>
            <p style={{ fontSize: "0.74rem", fontWeight: 700, color: "#111827", marginBottom: 16 }}>Component anatomy</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { zone: "Header bar",    desc: "Airline identity · flight number · class + stop badges",   color: "#1076BC" },
                { zone: "Route block",   desc: "Departure/arrival times · airport codes · duration line",   color: "#059669" },
                { zone: "Route line",    desc: "SVG connector with stop indicators — scales for layovers",  color: "#606EF2" },
                { zone: "Amenity strip", desc: "Baggage allowance · meal · seat type — token-sized icons",  color: "#F2616E" },
                { zone: "Price + CTA",   desc: "Starting fare always visible · primary Book button right-aligned", color: "#EDD916" },
              ].map((a, i, arr) => (
                <div key={a.zone} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none", alignItems: "flex-start" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: a.color, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#111827", marginBottom: 2 }}>{a.zone}</p>
                    <p style={{ fontSize: "0.66rem", color: "#6B7280", lineHeight: 1.5 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, background: "#E3F3FF", borderRadius: 10, padding: "10px 14px" }}>
              <p style={{ fontSize: "0.68rem", color: "#1076BC", lineHeight: 1.6 }}>
                The itinerary card was the most-used component across all products. Getting its structure right — especially the route line scaling for layovers — unlocked consistency across all search result views.
              </p>
            </div>
          </div>
        </div>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  GRID
───────────────────────────────────────────────────────────────────── */
function GridSection() {
  const grids = [
    { name: "General Grid",  cols: 12, margin: "12 px", gutter: "12 px", context: "Desktop — all standard pages",      note: "Homepage, listing, profile, settings — every general layout uses this grid."                                         },
    { name: "Search Grid",   cols: 5,  margin: "12 px", gutter: "12 px", context: "Desktop — search results",          note: "Sidebar takes 1 column; results take 4. No arbitrary pixel overrides needed."                                     },
    { name: "Mobile Grid",   cols: 4,  margin: "12 px", gutter: "8 px",  context: "All mobile screens",                note: "Tighter 8px gutter maximises usable width on small screens while preserving breathing room between elements."       },
  ];

  return (
    <CsSection id="grid">
      <CsSectionHeader
        label="Layout & Grid"
        title="Three grids. Every context covered."
        sub="The layout system defines how content flows across all contexts. A 12-column general grid, a specialised 5-column search layout for the results page, and a compact mobile grid with tighter gutters."
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="csl-reveal">
        {grids.map((g) => (
          <div key={g.name} style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 3, marginBottom: 16, height: 44 }}>
              {Array(g.cols).fill(0).map((_, i) => (
                <div key={i} style={{ flex: 1, background: "#E3F3FF", borderRadius: 2 }} />
              ))}
            </div>
            <p style={{ fontSize: "0.84rem", fontWeight: 700, color: "#111827", marginBottom: 14 }}>{g.name}</p>
            {[
              { k: "Columns", v: String(g.cols) },
              { k: "Margin",  v: g.margin },
              { k: "Gutter",  v: g.gutter },
            ].map(({ k, v }) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 7, marginBottom: 7, borderBottom: "1px solid #F3F4F6" }}>
                <span style={{ fontSize: "0.68rem", color: "#6B7280" }}>{k}</span>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#1076BC", fontFamily: "ui-monospace,monospace" }}>{v}</span>
              </div>
            ))}
            <p style={{ fontSize: "0.62rem", fontWeight: 600, color: "#9CA3AF", marginBottom: 8 }}>{g.context}</p>
            <p style={{ fontSize: "0.68rem", color: "#6B7280", lineHeight: 1.6, marginTop: "auto" }}>{g.note}</p>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd2" style={{ marginTop: 20, borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        <strong>Why a separate search grid?</strong> The results page has a persistent filter sidebar. A 5-column grid maps the sidebar to exactly 1 column and the results panel to 4 — the layout is intentional, not improvised.
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  RESULTS
───────────────────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <CsSection id="results">
      <CsSectionHeader
        label="Final Output & Impact"
        title="A complete system, actively in use."
        sub="By the end of the project, a complete, scalable design system was in place — all core components documented, all tokens defined, and the system actively adopted across products."
      />

      <div className="csl-metrics csl-reveal">
        {[
          { val: "62",      label: "Custom icons drawn"          },
          { val: "1 file",  label: "Replaces 12+ Figma files"    },
          { val: "0 → 1",   label: "Component library built"     },
          { val: "3 grids", label: "Layout systems documented"   },
        ].map((m) => (
          <div className="csl-metric" key={m.label}>
            <div className="csl-metric-val">{m.val}</div>
            <div className="csl-metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24 }} className="csl-reveal rd1">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px 16px", background: "#F3F4F6", borderRadius: "8px 0 0 0", textAlign: "left", color: "#6B7280", fontWeight: 600 }}>Before</th>
              <th style={{ padding: "10px 16px", background: "#E3F3FF", borderRadius: "0 8px 0 0", textAlign: "left", color: "#1076BC", fontWeight: 600 }}>After</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["3 different 'primary blue' hex values in production",   "One Tech Blue token — #1076BC — used everywhere"],
              ["Icon style mixed outlined and filled in the same flow",  "62 custom icons — one grid, one stroke weight, one style"],
              ["Designers rebuilding components from scratch every sprint", "New screens assembled from the library in hours"],
              ["Developers reverse-engineering spacing from screenshots",  "Token names match exactly between Figma and code"],
              ["Difficult Figma files, hard to navigate and reuse",       "One organized library file, accessible and well-documented"],
              ["Slow onboarding for new designers",                       "Shared system means new designers are productive faster"],
            ].map(([b, a], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{b}</td>
                <td style={{ padding: "10px 16px", color: "#1076BC", fontWeight: 500 }}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  const learnings = [
    {
      category: "Process",
      assumption: "I thought building the components was the hard part.",
      reality: "The real work was everything around them — the Kanban tracking, developer alignment, naming conventions, and communication cadence. The Figma file was 50% of the job.",
      color: "#1076BC",
      bg: "#E3F3FF",
    },
    {
      category: "Foundation",
      assumption: "I thought I could skip the audit and jump straight into designing.",
      reality: "Two weeks of mapping the existing product revealed the true scope of the problem — and prevented me from building components that already existed in slightly different forms.",
      color: "#059669",
      bg: "#DCFFEA",
    },
    {
      category: "Scale",
      assumption: "I thought 'done' meant all components were built.",
      reality: "A design system is never done. Publishing the library was day one of adoption, not the finish line. Systems evolve — the governance around them is what keeps them alive.",
      color: "#606EF2",
      bg: "#EDEDFF",
    },
    {
      category: "Collaboration",
      assumption: "I thought design decisions could be made in isolation, then handed off.",
      reality: "Partnering with the developer from day one — on naming, component properties, and constraints — meant zero translation overhead. What was named in Figma was named in code.",
      color: "#F2616E",
      bg: "#FFF0F1",
    },
  ];

  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Learnings"
        title="What I thought going in — and what actually happened."
        sub="The most valuable lessons from this project weren't about design craft. They were about process, systems thinking, and working cross-functionally at scale."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {learnings.map((item, i) => (
          <div
            key={item.category}
            className="csl-reveal"
            style={{ background: "#fff", borderRadius: 18, padding: "28px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderLeft: `4px solid ${item.color}` }}
          >
            <span style={{ fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: item.color, background: item.bg, borderRadius: 20, padding: "3px 10px", display: "inline-block", marginBottom: 16 }}>
              {item.category}
            </span>
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "#9CA3AF", marginBottom: 12, lineHeight: 1.6 }}>
              &ldquo;{item.assumption}&rdquo;
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: item.color, fontWeight: 700, fontSize: "1.1rem", flexShrink: 0, lineHeight: 1.4 }}>→</span>
              <p style={{ fontSize: "0.84rem", fontWeight: 600, color: "#111827", lineHeight: 1.65 }}>{item.reality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mentorship note */}
      <div className="csl-callout csl-reveal" style={{ marginTop: 32, borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        <strong>Beyond the system itself —</strong> as part of this work I also mentored junior designers on component usage and design system thinking. Helping others understand the system revealed gaps in the documentation that I wouldn&apos;t have found on my own.
      </div>

      <a href="/projects/care-autor" className="csl-next csl-reveal" style={{ marginTop: 56 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">Care Autor — Healthcare Support Platform</p>
        </div>
        <span className="csl-next-arrow">→</span>
      </a>
    </CsSection>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════════════════ */
export function DesignSystemCaseStudy() {
  return (
    <CaseStudyPage
      theme="ds"
      title="Design System"
      tag="AirIQ · Design Systems"
      tocItems={TOC_ITEMS}
      hero={<DSHero />}
    >
      <OverviewSection />
      <DiscoverySection />
      <ApproachSection />
      <ColorSection />
      <TypographySection />
      <IconographySection />
      <ComponentsSection />
      <GridSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
