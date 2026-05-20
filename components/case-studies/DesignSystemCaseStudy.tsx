"use client";

import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"         },
  { id: "discovery",   label: "Discovery"        },
  { id: "approach",    label: "Approach"         },
  { id: "color",       label: "Color System"     },
  { id: "typography",  label: "Typography"       },
  { id: "spacing",     label: "Spacing & Shadow" },
  { id: "iconography", label: "Iconography"      },
  { id: "components",  label: "Components"       },
  { id: "grid",        label: "Layout & Grid"    },
  { id: "results",     label: "Results & Impact" },
  { id: "learnings",   label: "Learnings"        },
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
            A production-grade design system built from the ground up — token architecture, 80+ component variants, and a governance model. One shared Figma library replaced fragmented workflows across product teams, giving design and engineering a single source of truth.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead Product Designer</span>
            <span className="csl-hero-chip">Nov – Jan 2026</span>
            <span className="csl-hero-chip">Tokens · Components · Governance</span>
            <span className="csl-hero-chip">0 → 1 System</span>
          </div>
          <a
            href="https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(16,118,188,0.12)", color: "#60BDFF", borderRadius: 8,
              padding: "10px 20px", fontSize: "15px", fontWeight: 600,
              marginTop: 8, width: "fit-content", border: "1px solid rgba(16,118,188,0.25)",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "15px" }}>◈</span> View Figma Design System ↗
          </a>
        </div>
        <div className="csl-hero-right">
          <DSHeroVisual />
        </div>
      </div>
      <div className="csl-hero-stats">
        {[
          { val: "62",   label: "Custom icons"           },
          { val: "80+",  label: "Component variants"   },
          { val: "3",    label: "Grid breakpoints"     },
          { val: "0 → 1",label: "Built from scratch"  },
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
  const pages = [
    "Colors",
    "Typography",
    "Spacing & Shadow",
    "Grid System",
    "Icon System",
    "Button System",
    "Input Fields",
    "Checkbox · Radio · Toggle",
    "Dropdown",
    "Tabs",
    "Pagination",
    "Date & Time",
  ];
  const activeIdx = 5;
  return (
    <div style={{
      background: "#111827", borderRadius: 16, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
      width: "100%", maxWidth: 420,
    }}>
      {/* Figma title bar */}
      <div style={{ background: "#1F2937", padding: "9px 14px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28CA41" }} />
        <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.35)", marginLeft: 8, fontFamily: "Lato, sans-serif" }}>Design System.fig</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "148px 1fr" }}>
        {/* Pages sidebar */}
        <div style={{ background: "#1A2333", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "10px 0", maxHeight: 220, overflowY: "hidden" }}>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.12em", padding: "0 10px", marginBottom: 6 }}>Pages</p>
          {pages.map((pg, i) => (
            <div key={pg} style={{ padding: "3px 10px", background: i === activeIdx ? "rgba(16,118,188,0.2)" : "transparent", display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 3, height: 3, borderRadius: "50%", background: i === activeIdx ? "#1076BC" : "rgba(255,255,255,0.18)", flexShrink: 0 }} />
              <p style={{ fontSize: "11px", color: i === activeIdx ? "#60BDFF" : "rgba(255,255,255,0.38)", fontWeight: i === activeIdx ? 700 : 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pg}</p>
            </div>
          ))}
        </div>
        {/* Canvas preview — Button System */}
        <div style={{ padding: "12px", background: "#0F172A" }}>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Button System</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 6 }}>
            {/* Button types */}
            {[
              { label: "Primary",    bg: "#1076BC",     color: "#fff" },
              { label: "Secondary",  bg: "#F2616E",     color: "#fff" },
              { label: "Tertiary",   bg: "transparent", color: "#1C1C1C", border: "1px solid rgba(255,255,255,0.15)" },
              { label: "Borderless", bg: "transparent", color: "#60BDFF" },
            ].map(b => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", width: 56, flexShrink: 0 }}>{b.label}</p>
                <div style={{ background: b.bg, border: b.border, borderRadius: 4, padding: "3px 10px" }}>
                  <span style={{ fontSize: "11px", color: b.color, fontWeight: 600 }}>Button</span>
                </div>
                <div style={{ background: b.bg, border: b.border, borderRadius: 4, padding: "3px 10px", opacity: 0.5 }}>
                  <span style={{ fontSize: "11px", color: b.color, fontWeight: 600 }}>Hover</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(16,118,188,0.12)", borderRadius: 4, padding: "4px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "11px", color: "#60BDFF" }}>Design System</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontFamily: "Lato, sans-serif" }}>v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FIGMA EMBED
───────────────────────────────────────────────────────────────────── */

function FigmaEmbed({ src, title, height = 500 }: { src: string; title: string; height?: number }) {
  return (
    <div className="csl-reveal" style={{
      borderRadius: 16, overflow: "hidden",
      border: "1px solid #E0E6EC", marginBottom: 28,
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    }}>
      <div style={{
        padding: "10px 16px", background: "#F9FAFC",
        borderBottom: "1px solid #E0E6EC",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <svg width="11" height="16" viewBox="0 0 11 17" fill="none" style={{ flexShrink: 0 }}>
          <path d="M5.5 8.5C5.5 7.395 6.395 6.5 7.5 6.5C8.605 6.5 9.5 7.395 9.5 8.5C9.5 9.605 8.605 10.5 7.5 10.5C6.395 10.5 5.5 9.605 5.5 8.5Z" fill="#1ABCFE"/>
          <path d="M1.5 13.5C1.5 12.395 2.395 11.5 3.5 11.5H5.5V13.5C5.5 14.605 4.605 15.5 3.5 15.5C2.395 15.5 1.5 14.605 1.5 13.5Z" fill="#0ACF83"/>
          <path d="M5.5 1.5V6.5H7.5C8.605 6.5 9.5 5.605 9.5 4.5C9.5 3.395 8.605 2.5 7.5 2.5L5.5 1.5Z" fill="#FF7262"/>
          <path d="M1.5 4.5C1.5 5.605 2.395 6.5 3.5 6.5H5.5V1.5H3.5C2.395 1.5 1.5 2.395 1.5 3.5V4.5Z" fill="#F24E1E"/>
          <path d="M1.5 8.5C1.5 9.605 2.395 10.5 3.5 10.5H5.5V6.5H3.5C2.395 6.5 1.5 7.395 1.5 8.5Z" fill="#A259FF"/>
        </svg>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{title}</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "Lato, sans-serif" }}>Live Figma Preview</span>
      </div>
      <iframe
        src={src}
        style={{ width: "100%", height, border: "none", display: "block", background: "#F3F4F6" }}
        allowFullScreen
        title={title}
        loading="lazy"
      />
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
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#E0E6EC", borderRadius: 14, overflow: "hidden", marginBottom: 36 }}>
        {[
          { label: "Role",             value: "Lead Product Designer"              },
          { label: "Duration",         value: "8 Months"                           },
          { label: "Team",             value: "Design + Engineering"               },
          { label: "Scope",            value: "Tokens · Components · Governance"  },
        ].map((item) => (
          <div key={item.label} style={{ background: "#fff", padding: "18px 22px" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", marginBottom: 6 }}>{item.label}</p>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{item.value}</p>
          </div>
        ))}
      </div>

      <p className="csl-text csl-reveal" style={{ maxWidth: 620 }}>
        Multiple products. Each evolving independently. The result: three shades of the same blue, buttons rebuilt every sprint, and Figma files no one could navigate. The goal was one system: one source of truth for design and engineering.
      </p>

      <div className="csl-callout csl-reveal rd1" style={{ marginTop: 28, borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        <strong>NDA Note:</strong> Built from scratch for a production organization, later scaled across products. Certain components and visuals have been edited to comply with NDA.
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
        sub="Before designing anything new, I conducted a full audit of every existing product across the organization. The goal was to understand what already existed, and where things were breaking down."
      />

      {/* Pull quote — the most human moment, shown large */}
      <div className="csl-reveal" style={{ textAlign: "center", padding: "44px 0 52px", borderBottom: "1px solid #F3F4F6", marginBottom: 48 }}>
        <p style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", fontStyle: "italic", color: "#374151", lineHeight: 1.65, maxWidth: 640, margin: "0 auto", fontWeight: 400 }}>
          &ldquo;The product looked different on every page. Not dramatically, just subtly. Small inconsistencies that compound into something that never feels fully finished.&rdquo;
        </p>
      </div>

      {/* Before-state — visual proof */}
      <div className="csl-reveal rd1" style={{ borderRadius: 18, overflow: "hidden", border: "1px solid #FEE2E2", marginBottom: 36 }}>
        <div style={{ background: "#FEF2F2", padding: "11px 20px", borderBottom: "1px solid #FEE2E2", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#DC2626", flexShrink: 0 }} />
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#7F1D1D", textTransform: "uppercase", letterSpacing: "0.12em" }}>Audit finding: "the same blue" across three products</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#fff" }}>
          {[
            { product: "AirIQ Web",    hex: "#0F6FB4", radius: 4  },
            { product: "AirIQ Mobile", hex: "#1585CC", radius: 10 },
            { product: "AirIQ Admin",  hex: "#147ABF", radius: 2  },
          ].map(({ product, hex, radius }, i) => (
            <div key={product} style={{ padding: "20px 22px", borderRight: i < 2 ? "1px solid #F3F4F6" : "none" }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>{product}</p>
              <div style={{ height: 44, borderRadius: 8, background: hex, marginBottom: 8 }} />
              <p style={{ fontSize: "15px", fontFamily: "Lato, sans-serif", color: "#6B7280", fontWeight: 600, marginBottom: 16 }}>{hex}</p>
              <div style={{ background: hex, borderRadius: radius, padding: "8px 16px", display: "inline-flex" }}>
                <span style={{ fontSize: "15px", color: "#fff", fontWeight: 600}}>Book Now</span>
              </div>
              <p style={{ fontSize: "15px", color: "#B0B8C0", marginTop: 6, fontFamily: "Lato, sans-serif" }}>border-radius: {radius}px</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#FEF2F2", padding: "10px 20px", borderTop: "1px solid #FEE2E2", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "15px", color: "#DC2626", flexShrink: 0 }}>⚠</span>
          <p style={{ fontSize: "15px", color: "#991B1B", lineHeight: 1.5 }}>Three hex values for the same "primary blue." All three in production simultaneously; no one realised they had diverged.</p>
        </div>
      </div>

      <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16 }} className="csl-reveal rd2">What the audit found:</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }} className="csl-reveal rd2">
        {[
          { title: "Multiple component versions",   body: "Buttons, tables, and form fields had 2–3 different versions each. No shared base component, no shared rules."               },
          { title: "3 shades of the same blue",     body: "Tech Blue had three different hex values in production, all intended to be 'the primary blue'."                              },
          { title: "No shared spacing or type rules",body: "Font sizes and spacing values were eyeballed per feature. No tokens, no scale, no documentation."                          },
          { title: "Figma files impossible to reuse",body: "Files were organized per-feature with no shared styles or components. Onboarding a new designer meant learning 12 files."  },
        ].map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderLeft: "3px solid #E3F3FF" }}>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC", marginBottom: 8 }}>{item.title}</div>
            <div style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>{item.body}</div>
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
  const steps = [
    { num: "01", label: "Audit first",     detail: "40+ screens mapped before a single component was drawn. Understand what exists before building anything new." },
    { num: "02", label: "Top-down",        detail: "High-impact, high-frequency components first. Deliver value fast; don't spend weeks on atoms no one uses." },
    { num: "03", label: "Dev from day 1",  detail: "Partnered with engineering before opening Figma. Named properties and constraints agreed upfront." },
    { num: "04", label: "Track in Figma",  detail: "Kanban board inside the library file. Status, feedback, and iteration visible to every team member." },
  ];

  return (
    <CsSection id="approach">
      <CsSectionHeader
        label="Approach & Strategy"
        title="Structure first. Components second."
        sub="Before opening Figma, the process was defined: how work gets tracked, how developers stay involved, what principles guide every decision."
      />

      {/* 4-step horizontal process */}
      <div className="csl-reveal" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginBottom: 40 }}>
        {/* connecting line behind the steps */}
        <div style={{ position: "absolute", top: 27, left: "calc(12.5% + 4px)", right: "calc(12.5% + 4px)", height: 1.5, background: "#E0E6EC", zIndex: 0 }} />
        {steps.map((s, i) => (
          <div key={s.num} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 20px", position: "relative", zIndex: 1 }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%", marginBottom: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: i === 0 ? "#1076BC" : "#fff",
              border: i === 0 ? "none" : "1.5px solid #E0E6EC",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <span style={{ fontSize: "15px", fontWeight: 600, color: i === 0 ? "#fff" : "#1076BC", fontFamily: "Lato, sans-serif" }}>{s.num}</span>
            </div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 8, lineHeight: 1.3 }}>{s.label}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.65 }}>{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd1" style={{ borderLeftColor: "#1076BC", background: "#E3F3FF", marginBottom: 28 }}>
        Built on <strong>Atomic Design</strong>: tokens → atoms → molecules → organisms. Change a token, every component that uses it updates automatically. Scalability is structural, not cosmetic.
      </div>

      {/* Figma library — how the file was organized */}
      <div className="csl-reveal rd2" style={{ background: "#111827", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ background: "#1F2937", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28CA41" }} />
          <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", marginLeft: 8, fontFamily: "Lato, sans-serif" }}>Design System.fig: how the library was organized</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          {/* Pages sidebar */}
          <div style={{ background: "#1A2333", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.12em", padding: "0 14px", marginBottom: 8 }}>Pages</p>
            {[
              { name: "Colors",                  active: false, note: "Brand · Neutrals · Signals" },
              { name: "Typography",              active: false, note: "Scale · Weights · Settings"  },
              { name: "Spacing & Shadow",        active: false, note: "8pt grid · 4 elevations"     },
              { name: "Grid System",             active: false, note: "12-col · 8-col · 4-col"      },
              { name: "Icon System",             active: false, note: "62 icons · 3 sizes"          },
              { name: "Button System",           active: true,  note: "4 types · 4 states"          },
              { name: "Input Fields",            active: false, note: "5 states · desktop + mobile" },
              { name: "Checkbox · Radio · Toggle",active: false, note: "3-in-1 selection group"     },
              { name: "Dropdown",                active: false, note: "3 variants"                  },
              { name: "Tabs",                    active: false, note: "Underline + pill"             },
              { name: "Pagination",              active: false, note: "Number + icon variants"      },
              { name: "Date & Time Picker",      active: false, note: "Calendar + time input"       },
            ].map((pg) => (
              <div key={pg.name} style={{ padding: "5px 14px", background: pg.active ? "rgba(16,118,188,0.18)" : "transparent" }}>
                <p style={{ fontSize: "13px", color: pg.active ? "#60BDFF" : "rgba(255,255,255,0.45)", fontWeight: pg.active ? 700 : 400, marginBottom: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pg.name}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>{pg.note}</p>
              </div>
            ))}
          </div>
          {/* Canvas area */}
          <div style={{ padding: "20px 24px", background: "#0D1117" }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Button System: 4 types · 4 states</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {[
                { label: "Buttons",         count: "4 types · 4 states"  },
                { label: "Input Fields",    count: "5 states"             },
                { label: "Checkbox / Radio",count: "3 variants"           },
                { label: "Toggle",          count: "On / Off + disabled"  },
                { label: "Dropdown",        count: "3 variants"           },
                { label: "Tabs",            count: "Underline + pill"     },
                { label: "Pagination",      count: "Number + icon"        },
                { label: "Date & Time",     count: "Calendar + time"      },
              ].map((c) => (
                <div key={c.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ height: 20, borderRadius: 4, background: "rgba(16,118,188,0.2)", marginBottom: 8 }} />
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", fontWeight: 600, marginBottom: 2 }}>{c.label}</p>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.22)", fontFamily: "Lato, sans-serif" }}>{c.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   COLOR EDITORIAL BANNER (before color section)
───────────────────────────────────────────────────────────────────── */
function ColorEditorialBanner() {
  const swatches: { hex: string; name: string; blobColor: string; top?: string; bottom?: string; left?: string; right?: string }[] = [
    { hex: "#1076BC", name: "Tech Blue",  blobColor: "#1076BC", top: "7%",    right: "2%"   },
    { hex: "#F2616E", name: "Coral",      blobColor: "#F2616E", top: "5%",    left: "1%"    },
    { hex: "#059669", name: "Success",    blobColor: "#059669", bottom: "7%", left: "1%"    },
    { hex: "#1C1C1C", name: "Dark",       blobColor: "#555",    bottom: "6%", right: "1.5%" },
  ];

  return (
    <div className="csl-reveal" style={{
      position: "relative",
      padding: "96px 56px",
      background: "#FAFAFA",
      borderRadius: 24,
      border: "1px solid #F0F0F0",
      minHeight: 460,
      marginBottom: 0,
      overflow: "hidden",
    }}>
      {/* Subtle background noise texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.25, pointerEvents: "none" }} />

      {swatches.map((s) => (
        <div
          key={s.hex}
          style={{
            position: "absolute",
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            background: "#fff",
            borderRadius: 20,
            padding: "18px 18px 14px",
            boxShadow: "0 12px 36px rgba(0,0,0,0.09)",
            width: 148,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            zIndex: 2,
          }}
        >
          {/* Color blob */}
          <div style={{
            width: 86,
            height: 86,
            borderRadius: "50%",
            background: `radial-gradient(circle at 38% 35%, ${s.blobColor}d0 0%, ${s.blobColor}55 48%, ${s.blobColor}18 70%, transparent 88%)`,
            filter: "blur(8px)",
          }} />
          <div style={{ width: "100%" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#374151", marginBottom: 2 }}>{s.name}</p>
            <p style={{ fontSize: "15px", fontFamily: "Lato, sans-serif", color: "#9CA3AF" }}>{s.hex}</p>
          </div>
        </div>
      ))}

      {/* Editorial text */}
      <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "#4B5563", lineHeight: 1.7, fontWeight: 400, letterSpacing: "-0.01em" }}>
          When choosing{" "}
          <strong style={{ fontWeight: 800, color: "#111827" }}>a color system</strong>
          {" "}for AirIQ, we prioritised trust: calm blues that signal{" "}
          <strong style={{ fontWeight: 800, color: "#111827" }}>reliability</strong>
          {" "}and coral that drives urgency where it counts.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
          {["Trust", "Clarity", "Action", "Hierarchy"].map(tag => (
            <span key={tag} style={{ fontSize: "15px", fontWeight: 600, color: "#6B7280", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 20, padding: "4px 12px" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
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

      <FigmaEmbed
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14004-2"
        title="Design System — Color System"
        height={520}
      />

      {/* Brand primaries — large and dominant */}
      <div className="csl-reveal" style={{ marginBottom: 8 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 12 }}>Brand Primaries</p>
        <div style={{ display: "flex", gap: 8 }}>
          {mainColors.map((c, i) => (
            <div key={c.hex} style={{ flex: i < 2 ? 2 : 1 }}>
              <div style={{ height: i < 2 ? 110 : 72, borderRadius: 12, background: c.hex, border: c.border ? "1px solid #E0E6EC" : "none", marginBottom: 10 }} />
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 2, lineHeight: 1.3 }}>{c.name}</p>
              <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif" }}>{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral scale — continuous strip */}
      <div className="csl-reveal rd1" style={{ marginBottom: 8 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 12 }}>Neutral Scale</p>
        <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
          {neutrals.map((c) => (
            <div key={c.hex} style={{ flex: 1, height: 48, borderRadius: 6, background: c.hex, border: "1px solid #E0E6EC" }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {neutrals.map((c) => (
            <div key={c.hex} style={{ flex: 1 }}>
              <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", lineHeight: 1.4 }}>{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Signal colors — compact row */}
      <div className="csl-reveal rd2" style={{ marginBottom: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif" }}>Signal Colors: Status & Feedback</p>
          <span style={{ fontSize: "15px", fontWeight: 600, background: "#DCFFEA", color: "#059669", borderRadius: 20, padding: "2px 10px" }}>WCAG AA verified</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {signals.map((c) => (
            <div key={c.hex} style={{ flex: 1 }}>
              <div style={{ height: 36, borderRadius: 8, background: c.hex, marginBottom: 6 }} />
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#374151", lineHeight: 1.3 }}>{c.name}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "15px", color: "#6B7280", marginTop: 14, lineHeight: 1.6 }}>
          Each signal ships with a light tint for alert backgrounds. Change the token; every component that uses it updates.
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
        sub="One typeface, five weights, five sizes, with 140% line height and −0.5% letter spacing throughout. Readable at 11pt in a legal footnote, impactful at 28pt in a page heading."
      />

      <FigmaEmbed
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14009-2"
        title="Design System — Typography"
        height={480}
      />

      {/* Live type hierarchy — show it working, not specced */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 20, padding: "32px 36px" }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 28 }}>Type hierarchy: shown at scale</p>
        <div style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: 20, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 4 }}>
            <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "#111827", lineHeight: 1.2, flex: 1 }}>Book your next flight</p>
            <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", flexShrink: 0 }}>H1 · 28pt · 700</span>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: 16, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 4 }}>
            <p style={{ fontSize: "1.35rem", fontWeight: 700, color: "#111827", lineHeight: 1.3, flex: 1 }}>Search results for New Delhi → Mumbai</p>
            <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", flexShrink: 0 }}>H2 · 25pt · 700</span>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: 14, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <p style={{ fontSize: "1.0rem", fontWeight: 400, color: "#374151", lineHeight: 1.6, flex: 1 }}>247 flights found. Sorted by best value. Prices shown include all taxes and fees.</p>
            <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", flexShrink: 0 }}>Body · 17pt · 400</span>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#6B7280", lineHeight: 1.5, flex: 1 }}>Departure · Terminal 3 · IndiGo 6E-234</p>
            <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", flexShrink: 0 }}>Label · 13pt · 600</span>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", lineHeight: 1.5, flex: 1 }}>*Fare includes base price only. Baggage and seat fees may apply at check-in.</p>
            <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", flexShrink: 0 }}>Legal · 11pt · 400</span>
          </div>
        </div>
      </div>

      {/* Compact specs */}
      <div className="csl-card-2col csl-reveal rd1" style={{ marginBottom: 14 }}>
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Weights in use</p>
          {[{ w: 400, n: "Regular" }, { w: 500, n: "Medium" }, { w: 600, n: "Semi-Bold" }, { w: 700, n: "Bold" }, { w: 900, n: "Black" }].map(({ w, n }, i, arr) => (
            <div key={w} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "8px 0", borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none" }}>
              <span style={{ fontWeight: 600, fontSize: "15px", color: "#111827" }}>Lato {n}</span>
              <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif" }}>{w}</span>
            </div>
          ))}
        </div>
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Global settings</p>
          {[{ k: "Line height", v: "140%" }, { k: "Letter spacing", v: "−0.5%" }, { k: "H1 desktop", v: "28pt" }, { k: "H1 mobile", v: "20pt" }, { k: "H2 desktop", v: "25pt" }, { k: "H2 mobile", v: "16pt" }].map(({ k, v }, i, arr) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  SPACING & SHADOW
───────────────────────────────────────────────────────────────────── */
function SpacingSection() {
  const spacingTokens = [
    { token: "spacing-xs",  value: 4,  use: "Icon gaps · inline elements"        },
    { token: "spacing-sm",  value: 8,  use: "Tight padding · icon-to-label gaps" },
    { token: "spacing-md",  value: 12, use: "Default field padding · list items" },
    { token: "spacing-lg",  value: 16, use: "Card padding · component gaps"      },
    { token: "spacing-xl",  value: 20, use: "Panel padding · form row gaps"      },
    { token: "spacing-2xl", value: 24, use: "Section separation · major gaps"    },
    { token: "spacing-3xl", value: 32, use: "Feature section padding"            },
    { token: "spacing-4xl", value: 40, use: "Hero padding · page sections"       },
    { token: "spacing-5xl", value: 48, use: "Large layout blocks"                },
    { token: "spacing-6xl", value: 64, use: "Maximum desktop spacing"            },
  ];

  const shadows = [
    { name: "Shadow SM", css: "0 1px 4px rgba(0,0,0,0.06)",  use: "Cards · inline badges",    elevation: 1 },
    { name: "Shadow MD", css: "0 4px 14px rgba(0,0,0,0.08)", use: "Dropdowns · tooltips",     elevation: 2 },
    { name: "Shadow LG", css: "0 8px 28px rgba(0,0,0,0.10)", use: "Modals · side panels",     elevation: 3 },
    { name: "Shadow XL", css: "0 16px 48px rgba(0,0,0,0.14)",use: "Full-screen overlays",     elevation: 4 },
  ];

  const maxVal = 64;

  return (
    <CsSection id="spacing">
      <CsSectionHeader
        label="Spacing & Shadow"
        title={<>Consistent rhythm. <em style={{ fontStyle: "italic" }}>Predictable depth.</em></>}
        sub="An 8-point base grid drives every spacing decision — from icon gaps to page padding. Four shadow tokens encode elevation intent, giving every component a clear place in the spatial hierarchy."
      />

      <FigmaEmbed
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14008-2"
        title="Design System — Spacing & Shadow"
        height={500}
      />

      {/* Spacing scale */}
      <div className="csl-reveal" style={{ marginBottom: 32 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 20 }}>Spacing Scale · 8pt base grid</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {spacingTokens.map((t) => (
            <div key={t.token} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 88, flexShrink: 0 }}>
                <p style={{ fontSize: "13px", fontFamily: "Lato, sans-serif", fontWeight: 700, color: "#1076BC", marginBottom: 1 }}>{t.token}</p>
                <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "Lato, sans-serif" }}>{t.value}px</p>
              </div>
              <div style={{ flex: 1, height: 18, background: "#F3F4F6", borderRadius: 4, overflow: "hidden" }}>
                <div style={{
                  width: `${(t.value / maxVal) * 100}%`,
                  height: "100%",
                  background: `rgba(16,118,188,${0.15 + (t.value / maxVal) * 0.65})`,
                  borderRadius: 4,
                }} />
              </div>
              <p style={{ width: 220, fontSize: "13px", color: "#6B7280", lineHeight: 1.4, flexShrink: 0 }}>{t.use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shadow levels */}
      <div className="csl-reveal rd1">
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 20 }}>Shadow Tokens · 4 elevation levels</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 20 }}>
          {shadows.map((s) => (
            <div key={s.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <div style={{
                width: "100%", height: 88, borderRadius: 14,
                background: "#fff", boxShadow: s.css,
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `rgba(16,118,188,${0.08 + s.elevation * 0.09})`,
                }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#111827", marginBottom: 4 }}>{s.name}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.4 }}>{s.use}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="csl-callout" style={{ borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
          Shadow tokens encode <strong>elevation intent</strong>, not visual style. Shadow SM says &ldquo;slightly raised;&rdquo; Shadow XL says &ldquo;full-screen overlay.&rdquo; Designers choose a level — not an arbitrary drop-shadow value.
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  ICONOGRAPHY
───────────────────────────────────────────────────────────────────── */
function IconographySection() {
  return (
    <CsSection id="iconography">
      <CsSectionHeader
        label="Iconography"
        title={<>62 custom icons. <em style={{ fontStyle: "italic" }}>One grid. Three sizes.</em></>}
      />

      <FigmaEmbed
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14032-225"
        title="Design System — Icon System"
        height={500}
      />

      {/* Image first — full-width in dark panel */}
      <div className="csl-reveal" style={{ borderRadius: 20, overflow: "hidden", background: "#071E35", marginBottom: 28 }}>
        <img
          src="/Design System/icons.png"
          alt="Full icon library: all 62 custom icons across 12 categories at 3 sizes"
          style={{ width: "100%", display: "block" }}
        />
        <div style={{ padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", fontFamily: "Lato, sans-serif" }}>62 icons · 12 categories · 3 export sizes</p>
          <div style={{ display: "flex", gap: 8 }}>
            {["Outlined", "2px stroke", "SVG export", "Optical centre"].map((tag) => (
              <span key={tag} style={{ fontSize: "15px", fontWeight: 600, background: "rgba(16,118,188,0.22)", color: "#60BDFF", borderRadius: 20, padding: "3px 10px" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, maxWidth: 640, marginBottom: 28 }} className="csl-reveal rd1">
        Every icon is drawn on a 24×24px keyline grid, with consistent 2px stroke, 2px corner radius. Each ships in three sizes with identical proportions and optical centre, so they look right whether they're in a nav bar or inside a table cell.
      </p>

      {/* Compact keyline spec — 2-col */}
      <div className="csl-card-2col csl-reveal rd2">
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Keyline construction</p>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{ position: "relative", width: 80, height: 80, border: "2px solid #1076BC", borderRadius: 12 }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 80 80">
                {[20,40,60].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="80" stroke="#1076BC" strokeWidth="0.5"/>)}
                {[20,40,60].map(y => <line key={`h${y}`} x1="0" y1={y} x2="80" y2={y} stroke="#1076BC" strokeWidth="0.5"/>)}
              </svg>
              <div style={{ position: "absolute", inset: 8, border: "1.5px solid #1076BC", borderRadius: "50%", opacity: 0.4 }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", width: 6, height: 6, background: "#1076BC", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
            </div>
          </div>
          {[
            { k: "Canvas",        v: "24 × 24 px"   },
            { k: "Live area",     v: "20 × 20 px"   },
            { k: "Stroke weight", v: "2 px"          },
            { k: "Corner radius", v: "2 px"          },
            { k: "Sizes",         v: "24 · 20 · 16 px" },
            { k: "Export format", v: "SVG"           },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Three sizes · same proportions</p>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-end", justifyContent: "center", marginBottom: 28 }}>
            {[{ size: 56, px: "24px" }, { size: 46, px: "20px" }, { size: 36, px: "16px" }].map(({ size, px }) => (
              <div key={px} style={{ textAlign: "center" }}>
                <div style={{ width: size, height: size, border: "2px solid #1076BC", borderRadius: Math.round(size * 0.33), margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: size * 0.3, height: size * 0.3, borderRadius: "50%", background: "rgba(16,118,188,0.25)" }} />
                </div>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", fontFamily: "Lato, sans-serif" }}>{px}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
            All three sizes share the same stroke weight and optical centre; they look consistent whether used in a top nav or as a small inline indicator inside a table cell.
          </p>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  COMPONENTS
───────────────────────────────────────────────────────────────────── */
function ComponentsSection() {
  const buttonTypes = [
    { type: "Primary",    bg: "#1076BC",     color: "#fff",     border: "none",                   note: "Main CTA: search, book, confirm"   },
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
        title={<>80+ variants. <em style={{ fontStyle: "italic" }}>11 component groups.</em></>}
        sub="Every component ships with all interaction states, desktop and mobile specs, and named properties that match the engineering implementation exactly. No translation layer between Figma and code."
      />

      {/* ── Component Figma embeds ── */}
      <div className="csl-reveal" style={{ marginBottom: 8 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Live component pages from the Figma library</p>
      </div>

      <FigmaEmbed
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14005-2"
        title="Design System — Button System"
        height={480}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 0 }}>
        <FigmaEmbed
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14006-2"
          title="Design System — Input Fields"
          height={420}
        />
        <FigmaEmbed
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14007-2"
          title="Design System — Checkbox, Radio & Toggle"
          height={420}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 0 }}>
        <FigmaEmbed
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14008-134"
          title="Design System — Dropdown"
          height={420}
        />
        <FigmaEmbed
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14007-153"
          title="Design System — Tabs"
          height={420}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
        <FigmaEmbed
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14007-210"
          title="Design System — Pagination"
          height={420}
        />
        <FigmaEmbed
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14030-2"
          title="Design System — Date & Time Picker"
          height={420}
        />
      </div>

      {/* ── Component library — at a glance ── */}
      <div className="csl-reveal" style={{ marginBottom: 32 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Component library: 80+ variants across 11 groups</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>

          {/* Search Field */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Search Field</p>
            <div style={{ border: "1.5px solid #E0E6EC", borderRadius: 7, padding: "7px 10px", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: "15px", color: "#B0B8C0" }}>⌕</span>
              <p style={{ fontSize: "15px", color: "#B0B8C0" }}>From city...</p>
            </div>
          </div>

          {/* Dropdown */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Dropdown</p>
            <div style={{ border: "1.5px solid #1076BC", borderRadius: 7, padding: "7px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <p style={{ fontSize: "15px", color: "#111827" }}>Economy</p>
              <span style={{ fontSize: "15px", color: "#9CA3AF" }}>▾</span>
            </div>
            <div style={{ border: "1px solid #E0E6EC", borderRadius: 6, overflow: "hidden", boxShadow: "0 3px 10px rgba(0,0,0,0.06)" }}>
              {["Economy", "Business", "First"].map((opt, i) => (
                <div key={opt} style={{ padding: "5px 10px", background: i === 0 ? "#E3F3FF" : "#fff", borderBottom: i < 2 ? "1px solid #F3F4F6" : "none" }}>
                  <span style={{ fontSize: "15px", color: i === 0 ? "#1076BC" : "#374151", fontWeight: 600}}>{opt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Date Picker */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Date Picker</p>
            <div style={{ border: "1px solid #E0E6EC", borderRadius: 7, overflow: "hidden" }}>
              <div style={{ background: "#F9FAFC", padding: "5px 8px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E0E6EC" }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#374151" }}>May 2025</span>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ fontSize: "15px", color: "#9CA3AF" }}>‹</span>
                  <span style={{ fontSize: "15px", color: "#9CA3AF" }}>›</span>
                </div>
              </div>
              <div style={{ padding: "6px 8px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 4 }}>
                  {["S","M","T","W","T","F","S"].map((d, i) => (
                    <p key={i} style={{ fontSize: "15px", color: "#9CA3AF", textAlign: "center" }}>{d}</p>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1 }}>
                  {[12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((d) => (
                    <div key={d} style={{ width: 14, height: 14, borderRadius: "50%", background: d === 17 ? "#1076BC" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                      <p style={{ fontSize: "15px", color: d === 17 ? "#fff" : "#374151", fontWeight: 600}}>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Badges & Tags</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {[
                { t: "Direct",   bg: "#DCFFEA", c: "#059669" },
                { t: "Economy",  bg: "#E3F3FF", c: "#1076BC" },
                { t: "Delayed",  bg: "#FFF5F5", c: "#EC1A2E" },
                { t: "On Time",  bg: "#E0FFF8", c: "#0FBCAC" },
                { t: "₹3,450",   bg: "#F3F4F6", c: "#374151" },
              ].map(b => (
                <span key={b.t} style={{ fontSize: "15px", fontWeight: 600, background: b.bg, color: b.c, borderRadius: 20, padding: "3px 8px" }}>{b.t}</span>
              ))}
            </div>
          </div>

          {/* Alert */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Alerts</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                { c: "#059669", bg: "#DCFFEA", msg: "Booking confirmed" },
                { c: "#EC1A2E", bg: "#FFF0F0", msg: "Payment failed" },
                { c: "#EDD916", bg: "#FFFBE0", msg: "Flight delayed" },
              ].map(a => (
                <div key={a.msg} style={{ borderLeft: `3px solid ${a.c}`, background: a.bg, borderRadius: "0 6px 6px 0", padding: "5px 8px" }}>
                  <p style={{ fontSize: "15px", color: a.c, fontWeight: 600}}>{a.msg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Bar */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Tab Bar</p>
            <div style={{ borderBottom: "1px solid #E0E6EC" }}>
              <div style={{ display: "flex", gap: 0 }}>
                {["Flights", "Hotels", "Packages"].map((tab, i) => (
                  <div key={tab} style={{ padding: "6px 10px", borderBottom: i === 0 ? "2px solid #1076BC" : "2px solid transparent", marginBottom: -1 }}>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: i === 0 ? "#1076BC" : "#9CA3AF" }}>{tab}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "8px 0", display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ flex: 1, height: 8, borderRadius: 4, background: "#F3F4F6" }} />
              <div style={{ flex: 2, height: 8, borderRadius: 4, background: "#E3F3FF" }} />
              <div style={{ flex: 1, height: 8, borderRadius: 4, background: "#F3F4F6" }} />
            </div>
          </div>

          {/* Toggle */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Toggle</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Price alerts", on: true  },
                { label: "SMS updates",  on: false },
              ].map(t => (
                <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontSize: "15px", color: "#374151" }}>{t.label}</p>
                  <div style={{ width: 30, height: 16, borderRadius: 8, background: t.on ? "#1076BC" : "#E0E6EC", position: "relative" }}>
                    <div style={{ position: "absolute", top: 2, left: t.on ? 16 : 2, width: 12, height: 12, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}>
            <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 10 }}>Pagination</p>
            <div style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
              {["‹", "1", "2", "3", "4", "5", "›"].map((p, i) => (
                <div key={i} style={{ width: 22, height: 22, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", background: p === "3" ? "#1076BC" : p === "‹" || p === "›" ? "transparent" : "#F9FAFC", border: p === "3" ? "none" : p === "‹" || p === "›" ? "none" : "1px solid #E0E6EC" }}>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: p === "3" ? "#fff" : p === "‹" || p === "›" ? "#9CA3AF" : "#374151" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Itinerary card — LEADS ── */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 28 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 20 }}>Itinerary Card: The most complex component</p>
        <div className="csl-card-2col" style={{ alignItems: "start" }}>
          {/* Card mockup */}
          <div style={{ border: "1.5px solid #E0E6EC", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            {/* Card header */}
            <div style={{ background: "#F9FAFC", borderBottom: "1px solid #E0E6EC", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: "#1076BC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "15px", color: "#fff", fontWeight: 600}}>6E</span>
                </div>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#374151" }}>IndiGo</span>
                <span style={{ fontSize: "15px", color: "#9CA3AF" }}>6E-234</span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ fontSize: "15px", fontWeight: 600, background: "#E3F3FF", color: "#1076BC", borderRadius: 20, padding: "2px 8px" }}>Economy</span>
                <span style={{ fontSize: "15px", fontWeight: 600, background: "#DCFFEA", color: "#059669", borderRadius: 20, padding: "2px 8px" }}>Direct</span>
              </div>
            </div>
            {/* Flight route */}
            <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ textAlign: "center", minWidth: 60 }}>
                <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111827", lineHeight: 1, marginBottom: 2 }}>06:00</p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC" }}>DEL</p>
                <p style={{ fontSize: "15px", color: "#9CA3AF" }}>Terminal 3</p>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <p style={{ fontSize: "15px", color: "#6B7280" }}>2h 15m</p>
                <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", border: "1.5px solid #1076BC", background: "#fff", flexShrink: 0 }} />
                  <div style={{ flex: 1, height: 1.5, background: "#E0E6EC" }} />
                  <span style={{ fontSize: "15px", color: "#1076BC" }}>✈</span>
                  <div style={{ flex: 1, height: 1.5, background: "#E0E6EC" }} />
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1076BC", flexShrink: 0 }} />
                </div>
              </div>
              <div style={{ textAlign: "center", minWidth: 60 }}>
                <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111827", lineHeight: 1, marginBottom: 2 }}>08:15</p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC" }}>BOM</p>
                <p style={{ fontSize: "15px", color: "#9CA3AF" }}>Terminal 1</p>
              </div>
            </div>
            {/* Footer */}
            <div style={{ borderTop: "1px solid #E0E6EC", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F9FAFC" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: "15px", color: "#6B7280" }}>🧳 23 kg</span>
                <span style={{ fontSize: "15px", color: "#6B7280" }}>🍽 Meal</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div>
                  <p style={{ fontSize: "15px", color: "#9CA3AF", textAlign: "right" }}>from</p>
                  <p style={{ fontSize: "1rem", fontWeight: 800, color: "#111827", lineHeight: 1 }}>₹3,450</p>
                </div>
                <div style={{ background: "#1076BC", borderRadius: 8, padding: "8px 14px", cursor: "pointer" }}>
                  <span style={{ fontSize: "15px", color: "#fff", fontWeight: 600}}>Book →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Anatomy breakdown */}
          <div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 16 }}>Component anatomy</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { zone: "Header bar",    desc: "Airline identity · flight number · class + stop badges",   color: "#1076BC" },
                { zone: "Route block",   desc: "Departure/arrival times · airport codes · duration line",   color: "#059669" },
                { zone: "Route line",    desc: "SVG connector with stop indicators, scales for layovers",  color: "#606EF2" },
                { zone: "Amenity strip", desc: "Baggage allowance · meal · seat type, token-sized icons",  color: "#F2616E" },
                { zone: "Price + CTA",   desc: "Starting fare always visible · primary Book button right-aligned", color: "#EDD916" },
              ].map((a, i, arr) => (
                <div key={a.zone} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none", alignItems: "flex-start" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: a.color, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 2 }}>{a.zone}</p>
                    <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.5 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, background: "#E3F3FF", borderRadius: 10, padding: "10px 14px" }}>
              <p style={{ fontSize: "15px", color: "#1076BC", lineHeight: 1.6 }}>
                The itinerary card was the most-used component across all products. Getting its structure right, especially the route line scaling for layovers, unlocking consistency across all search result views.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Button system ── */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 20 }}>Button System: 4 types · 4 states</p>
        <div style={{ display: "grid", gridTemplateColumns: "72px repeat(4, 1fr)", gap: 12, marginBottom: 12, alignItems: "end" }}>
          <div />
          {buttonTypes.map((b) => (
            <div key={b.type}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 3 }}>{b.type}</p>
              <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: 1.4 }}>{b.note}</p>
            </div>
          ))}
        </div>
        {states.map(({ label, bgs, disabled, focused }) => (
          <div key={label} style={{ display: "grid", gridTemplateColumns: "72px repeat(4, 1fr)", gap: 12, marginBottom: 10, alignItems: "center" }}>
            <p style={{ fontSize: "15px", color: "#6B7280", fontWeight: 600}}>{label}</p>
            {buttonTypes.map((b, i) => (
              <div key={b.type}>
                <div style={{
                  background: disabled ? "#B0B8C0" : bgs[i],
                  color: disabled ? "#F9FAFC" : b.color,
                  border: b.border,
                  outline: focused ? "2px solid #1076BC" : "none",
                  outlineOffset: 2,
                  borderRadius: 8, padding: "8px 14px",
                  fontSize: "15px", fontWeight: 600,
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
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#6B7280", marginBottom: 12 }}>Icon Button</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ background: "#1076BC", borderRadius: 8, padding: "9px 18px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "15px", color: "#fff", fontWeight: 600}}>Find Flights</span>
              <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>⌕</span>
            </div>
            <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: 280, lineHeight: 1.6 }}>Icon buttons pair a label with a trailing icon. Used for primary search CTAs and key conversion actions.</p>
          </div>
        </div>
      </div>

      <div className="csl-card-2col csl-reveal rd1" style={{ marginBottom: 28 }}>
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 14 }}>Desktop specs</p>
          {[
            { k: "Height",        v: "36 px" },
            { k: "Padding H",     v: "16 px" },
            { k: "Corner radius", v: "8 px"  },
            { k: "Font",          v: "Lato · 13pt · 600" },
            { k: "Icon gap",      v: "6 px"  },
            { k: "Focus ring",    v: "2px offset, accent" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 14 }}>Mobile specs</p>
          {[
            { k: "Height",       v: "44 px (min touch)" },
            { k: "Padding H",    v: "20 px" },
            { k: "Corner radius",v: "8 px"  },
            { k: "Font",         v: "Lato · 15pt · 600" },
            { k: "Full-width",   v: "Yes, fills container" },
            { k: "Focus ring",   v: "2px offset, accent" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Text field system ── */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 20 }}>Text Field System: 5 states</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 20 }}>
          {fieldStates.map((f) => (
            <div key={f.label}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{f.label}</p>
              <div style={{
                border: `1.5px solid ${f.border}`,
                borderRadius: 8,
                background: f.bg,
                padding: "10px 12px",
                position: "relative",
                opacity: f.label === "Disabled" ? 0.6 : 1,
              }}>
                <p style={{ fontSize: "15px", color: f.labelCol, marginBottom: 3, fontWeight: 600}}>From</p>
                <p style={{ fontSize: "15px", color: f.value ? "#1C1C1C" : "#B0B8C0", fontWeight: 600, minHeight: 18 }}>
                  {f.value || "City or airport"}
                </p>
                {f.hint && (
                  <p style={{ fontSize: "15px", color: f.border === "#EC1A2E" ? "#EC1A2E" : "#9CA3AF", marginTop: 6 }}>{f.hint}</p>
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
            { k: "Border",        v: "1.5 px, changes per state" },
            { k: "Error text",    v: "Lato · 11pt · 400 · Coral" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontSize: "15px", color: "#9CA3AF" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   GRID EDITORIAL BANNER (before grid section)
───────────────────────────────────────────────────────────────────── */
function GridEditorialBanner() {
  const desktopCols = 12;
  const mobileCols  = 4;

  return (
    <div className="csl-reveal" style={{
      background: "#0D1117",
      borderRadius: 24,
      padding: "40px 40px 36px",
      marginBottom: 0,
    }}>
      {/* Title */}
      <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, color: "rgba(255,255,255,0.35)", marginBottom: 32, letterSpacing: "-0.02em" }}>
        Grid{" "}
        <span style={{ fontWeight: 800, color: "#fff" }}>System</span>
      </p>

      {/* Frames row */}
      <div style={{ display: "flex", gap: 14, alignItems: "flex-end" }}>

        {/* Desktop frame */}
        <div style={{ flex: "0 0 56%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            {["0", "12", "", "", "", "", "", "", "", "", "1428", "1440"].map((v, i) => (
              <span key={i} style={{ fontSize: "15px", color: "rgba(255,255,255,0.22)", fontFamily: "Lato, sans-serif" }}>{v}</span>
            ))}
          </div>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#1A2333", height: 220 }}>
            <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: `repeat(${desktopCols}, 1fr)`, gap: 10, padding: "0 12px", pointerEvents: "none" }}>
              {Array(desktopCols).fill(0).map((_, i) => (
                <div key={i} style={{ background: "rgba(96,189,255,0.07)", borderRadius: 2 }} />
              ))}
            </div>
            {/* Nav bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 32, background: "rgba(16,118,188,0.12)", borderBottom: "1px solid rgba(16,118,188,0.15)", display: "flex", alignItems: "center", padding: "0 20px", gap: 12, zIndex: 2 }}>
              <div style={{ width: 36, height: 10, borderRadius: 3, background: "rgba(255,255,255,0.2)" }} />
              <div style={{ flex: 1 }} />
              {["Flights","Hotels","Packages","Help"].map(t => (
                <p key={t} style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)" }}>{t}</p>
              ))}
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 1, padding: "40px 24px 16px" }}>
              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", textAlign: "center", lineHeight: 1.3, marginBottom: 6 }}>AirIQ Travel Platform</p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.24)", textAlign: "center", maxWidth: 220, lineHeight: 1.5, marginBottom: 12 }}>Find low-cost flights, manage bookings, and personalised travel AI.</p>
              <div style={{ background: "#1076BC", borderRadius: 6, padding: "6px 16px" }}>
                <span style={{ fontSize: "15px", color: "#fff", fontWeight: 600}}>Book a Flight</span>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", marginTop: 8, fontFamily: "Lato, sans-serif" }}>
            1440 Desktop &nbsp;·&nbsp; 12 Count &nbsp;·&nbsp; 12 Gutter &nbsp;·&nbsp; 12 Margin
          </p>
        </div>

        {/* Tablet frame */}
        <div style={{ flex: "0 0 25%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            {["0", "", "744", ""].map((v, i) => (
              <span key={i} style={{ fontSize: "15px", color: "rgba(255,255,255,0.22)", fontFamily: "Lato, sans-serif" }}>{v}</span>
            ))}
          </div>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#1A2333", height: 220 }}>
            <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8, padding: "0 10px", pointerEvents: "none" }}>
              {Array(8).fill(0).map((_, i) => (
                <div key={i} style={{ background: "rgba(96,189,255,0.07)", borderRadius: 2 }} />
              ))}
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 1, padding: 16 }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.5)", textAlign: "center", lineHeight: 1.3, marginBottom: 6 }}>AirIQ<br />Tablet</p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.22)", textAlign: "center", lineHeight: 1.5 }}>Optimised for iPad &amp; tablet views.</p>
            </div>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", marginTop: 8, fontFamily: "Lato, sans-serif" }}>
            744 Tablet &nbsp;·&nbsp; 8 Count &nbsp;·&nbsp; 10 Gutter
          </p>
        </div>

        {/* Mobile frame */}
        <div style={{ flex: "0 0 calc(19% - 28px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            {["16", "359", "375"].map((v, i) => (
              <span key={i} style={{ fontSize: "15px", color: "rgba(255,255,255,0.22)", fontFamily: "Lato, sans-serif" }}>{v}</span>
            ))}
          </div>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#1A2333", height: 220 }}>
            <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: `repeat(${mobileCols}, 1fr)`, gap: 6, padding: "0 12px", pointerEvents: "none" }}>
              {Array(mobileCols).fill(0).map((_, i) => (
                <div key={i} style={{ background: "rgba(96,189,255,0.07)", borderRadius: 2 }} />
              ))}
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 1, padding: 14 }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.5)", textAlign: "center", lineHeight: 1.35, marginBottom: 4 }}>AirIQ<br />Mobile</p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.22)", textAlign: "center", lineHeight: 1.5 }}>4-col mobile grid.</p>
            </div>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", marginTop: 8, fontFamily: "Lato, sans-serif" }}>
            375 Mobile &nbsp;·&nbsp; 4 Count &nbsp;·&nbsp; 8 Gutter
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  GRID
───────────────────────────────────────────────────────────────────── */
function GridSection() {
  const grids = [
    { name: "General Grid",  cols: 12, margin: "12 px", gutter: "12 px", context: "Desktop: all standard pages",      note: "Homepage, listing, profile, settings: every general layout uses this grid."                                         },
    { name: "Search Grid",   cols: 5,  margin: "12 px", gutter: "12 px", context: "Desktop: search results",          note: "Sidebar takes 1 column; results take 4. No arbitrary pixel overrides needed."                                     },
    { name: "Mobile Grid",   cols: 4,  margin: "12 px", gutter: "8 px",  context: "All mobile screens",                note: "Tighter 8px gutter maximises usable width on small screens while preserving breathing room between elements."       },
  ];

  return (
    <CsSection id="grid">
      <CsSectionHeader
        label="Layout & Grid"
        title="Three grids. Every context covered."
        sub="The layout system defines how content flows across all contexts. A 12-column general grid, a specialised 5-column search layout for the results page, and a compact mobile grid with tighter gutters."
      />

      <FigmaEmbed
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HvKCWPvJNgxJV8RZXT3PIl/Design-System?node-id=14016-2"
        title="Design System — Grid System"
        height={480}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="csl-reveal">
        {/* 12-col General Grid */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
          {/* Wireframe: nav bar + content area */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ height: 10, borderRadius: 4, background: "#E3F3FF", marginBottom: 5 }} />
            <div style={{ display: "flex", gap: 3, height: 48 }}>
              <div style={{ flex: 3, borderRadius: 3, background: "#E3F3FF" }} />
              <div style={{ flex: 9, display: "flex", gap: 3 }}>
                {[2,2,1,1,1,1,1].map((w, i) => <div key={i} style={{ flex: w, borderRadius: 3, background: i === 0 ? "rgba(16,118,188,0.15)" : "#F3F4F6" }} />)}
              </div>
            </div>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 14 }}>General Grid</p>
          {[{ k: "Columns", v: "12" }, { k: "Margin", v: "12 px" }, { k: "Gutter", v: "12 px" }].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 7, marginBottom: 7, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", marginBottom: 8 }}>Desktop: all standard pages</p>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6, marginTop: "auto" }}>Homepage, listing, profile, settings: every general layout uses this grid.</p>
        </div>

        {/* 5-col Search Grid */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
          {/* Wireframe: sidebar + result cards */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ height: 10, borderRadius: 4, background: "#E3F3FF", marginBottom: 5 }} />
            <div style={{ display: "flex", gap: 3, height: 48 }}>
              <div style={{ flex: 1, borderRadius: 3, background: "rgba(16,118,188,0.15)", display: "flex", flexDirection: "column", gap: 3, padding: 4 }}>
                {[1,1,1].map((_, i) => <div key={i} style={{ flex: 1, borderRadius: 2, background: "rgba(16,118,188,0.2)" }} />)}
              </div>
              <div style={{ flex: 4, display: "flex", flexDirection: "column", gap: 3 }}>
                {[1,1,1].map((_, i) => <div key={i} style={{ flex: 1, borderRadius: 3, background: "#F3F4F6" }} />)}
              </div>
            </div>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 14 }}>Search Grid</p>
          {[{ k: "Columns", v: "5" }, { k: "Margin", v: "12 px" }, { k: "Gutter", v: "12 px" }].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 7, marginBottom: 7, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", marginBottom: 8 }}>Desktop: search results</p>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6, marginTop: "auto" }}>Sidebar takes 1 column; results take 4. No arbitrary pixel overrides needed.</p>
        </div>

        {/* 4-col Mobile Grid */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
          {/* Wireframe: stacked mobile blocks */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ height: 10, borderRadius: 4, background: "#E3F3FF", marginBottom: 5 }} />
            <div style={{ display: "flex", gap: 3, height: 48 }}>
              <div style={{ flex: 4, display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ flex: 2, borderRadius: 3, background: "rgba(16,118,188,0.15)" }} />
                <div style={{ display: "flex", gap: 3, flex: 3 }}>
                  <div style={{ flex: 2, borderRadius: 3, background: "#F3F4F6" }} />
                  <div style={{ flex: 2, borderRadius: 3, background: "#F3F4F6" }} />
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 14 }}>Mobile Grid</p>
          {[{ k: "Columns", v: "4" }, { k: "Margin", v: "12 px" }, { k: "Gutter", v: "8 px" }].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 7, marginBottom: 7, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>{k}</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#1076BC", fontFamily: "Lato, sans-serif" }}>{v}</span>
            </div>
          ))}
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", marginBottom: 8 }}>All mobile screens</p>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6, marginTop: "auto" }}>Tighter 8px gutter maximises usable width on small screens while keeping breathing room between elements.</p>
        </div>
      </div>

      <div className="csl-callout csl-reveal rd2" style={{ marginTop: 20, borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        <strong>Why a separate search grid?</strong> The results page has a persistent filter sidebar. A 5-column grid maps the sidebar to exactly 1 column and the results panel to 4; the layout is intentional, not improvised.
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
        sub="By the end of the project, a complete, scalable design system was in place: all core components documented, all tokens defined, and the system actively adopted across products."
      />

      {/* Before / After — hero visual */}
      <div className="csl-reveal" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #E0E6EC", marginBottom: 28 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ background: "#F9FAFC", padding: "18px 24px 10px", borderBottom: "1px solid #E0E6EC" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF" }}>Before</p>
          </div>
          <div style={{ background: "#E3F3FF", padding: "18px 24px 10px", borderBottom: "1px solid #D0E6F5", borderLeft: "1px solid #D0E6F5" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#1076BC" }}>After</p>
          </div>
        </div>
        {[
          ["3 different 'primary blue' hex values in production",          "One Tech Blue token, #1076BC, everywhere"],
          ["Icon styles mixed outlined and filled in the same flow",        "62 custom icons: one grid, one stroke weight, one style"],
          ["Designers rebuilding components from scratch every sprint",     "New screens assembled from the library in hours"],
          ["Developers reverse-engineering spacing from screenshots",       "Token names match exactly between Figma and code"],
          ["12+ Figma files: impossible to navigate or reuse",            "One organised library file, well-documented and shared"],
          ["Slow onboarding: new designers needed to learn every file",   "Shared system means new designers are productive in days"],
        ].map(([b, a], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #F3F4F6" }}>
            <div style={{ padding: "14px 24px", background: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E0E6EC", flexShrink: 0 }} />
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.5 }}>{b}</p>
            </div>
            <div style={{ padding: "14px 24px", background: "rgba(227,243,255,0.3)", borderLeft: "1px solid #D0E6F5", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1076BC", flexShrink: 0 }} />
              <p style={{ fontSize: "15px", color: "#1076BC", fontWeight: 600, lineHeight: 1.5 }}>{a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Metrics — secondary */}
      <div className="csl-metrics csl-reveal rd1">
        {[
          { val: "73%",     label: "Drop in design inconsistency" },
          { val: "80+",     label: "Component variants shipped"   },
          { val: "62",      label: "Custom icons drawn"           },
          { val: "1 file",  label: "Replaces 12+ Figma sources"  },
        ].map((m) => (
          <div className="csl-metric" key={m.label}>
            <div className="csl-metric-val">{m.val}</div>
            <div className="csl-metric-label">{m.label}</div>
          </div>
        ))}
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
      reality: "The real work was everything around them: the Kanban tracking, developer alignment, naming conventions, and communication cadence. The Figma file was 50% of the job.",
      color: "#1076BC",
      bg: "#E3F3FF",
    },
    {
      category: "Foundation",
      assumption: "I thought I could skip the audit and jump straight into designing.",
      reality: "Two weeks of mapping the existing product revealed the true scope of the problem, preventing me from building components that already existed in slightly different forms.",
      color: "#059669",
      bg: "#DCFFEA",
    },
    {
      category: "Scale",
      assumption: "I thought 'done' meant all components were built.",
      reality: "A design system is never done. Publishing the library was day one of adoption, not the finish line. Systems evolve; the governance around them is what keeps them alive.",
      color: "#606EF2",
      bg: "#EDEDFF",
    },
    {
      category: "Collaboration",
      assumption: "I thought design decisions could be made in isolation, then handed off.",
      reality: "Partnering with the developer from day one, on naming, component properties, and constraints, meant zero translation overhead. What was named in Figma was named in code.",
      color: "#F2616E",
      bg: "#FFF0F1",
    },
  ];

  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Learnings"
        title="What I thought going in, and what actually happened."
        sub="The most valuable lessons from this project weren't about design craft. They were about process, systems thinking, and working cross-functionally at scale."
      />

      {/* First two — side by side */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {learnings.slice(0, 2).map((item) => (
          <div
            key={item.category}
            style={{ background: "#fff", borderRadius: 18, padding: "28px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderLeft: `4px solid ${item.color}` }}
          >
            <span style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: item.color, background: item.bg, borderRadius: 20, padding: "3px 10px", display: "inline-block", marginBottom: 16 }}>
              {item.category}
            </span>
            <p style={{ fontSize: "15px", fontStyle: "italic", color: "#9CA3AF", marginBottom: 12, lineHeight: 1.6 }}>
              &ldquo;{item.assumption}&rdquo;
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: item.color, fontWeight: 700, fontSize: "1.1rem", flexShrink: 0, lineHeight: 1.4 }}>→</span>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", lineHeight: 1.65 }}>{item.reality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Last two — full-width, different visual rhythm */}
      {learnings.slice(2).map((item) => (
        <div
          key={item.category}
          className="csl-reveal"
          style={{ background: item.bg, borderRadius: 18, padding: "32px", marginBottom: 16, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "center" }}
        >
          <div>
            <span style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: item.color, display: "inline-block", marginBottom: 14 }}>
              {item.category}
            </span>
            <p style={{ fontSize: "15px", fontStyle: "italic", color: "#6B7280", lineHeight: 1.6 }}>
              &ldquo;{item.assumption}&rdquo;
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingLeft: 32, borderLeft: `2px solid ${item.color}` }}>
            <span style={{ color: item.color, fontWeight: 700, fontSize: "1.2rem", flexShrink: 0, lineHeight: 1.3 }}>→</span>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", lineHeight: 1.65 }}>{item.reality}</p>
          </div>
        </div>
      ))}

      {/* Mentorship note */}
      <div className="csl-callout csl-reveal" style={{ marginTop: 32, borderLeftColor: "#1076BC", background: "#E3F3FF" }}>
        <strong>Beyond the system itself:</strong> as part of this work I also mentored junior designers on component usage and design system thinking. Helping others understand the system revealed gaps in the documentation that I wouldn&apos;t have found on my own.
      </div>

      <a href="/projects/care-autor" className="csl-next csl-reveal" style={{ marginTop: 56 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">Care Autor: Healthcare Support Platform</p>
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
      <ColorEditorialBanner />
      <ColorSection />
      <TypographySection />
      <SpacingSection />
      <IconographySection />
      <ComponentsSection />
      <GridEditorialBanner />
      <GridSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
