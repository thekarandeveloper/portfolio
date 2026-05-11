"use client";

import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",     label: "Overview"           },
  { id: "problem",      label: "The Problem"        },
  { id: "audit",        label: "Design Audit"       },
  { id: "foundations",  label: "Foundations"        },
  { id: "components",   label: "Components"         },
  { id: "tokens",       label: "Design Tokens"      },
  { id: "documentation",label: "Documentation"      },
  { id: "governance",   label: "Governance"         },
  { id: "results",      label: "Results & Impact"   },
  { id: "learnings",    label: "Learnings"          },
];

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

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
          <div className="csl-hero-eyebrow">Design System · Foundations for Scale</div>
          <h1 className="csl-hero-title">
            Building a Design System<br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>From the Ground Up.</em>
          </h1>
          <p className="csl-hero-desc">
            A comprehensive design system built from scratch — tokens, components, documentation, and governance — creating a single source of truth that scaled across an entire product.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead Designer</span>
            <span className="csl-hero-chip">3 Months</span>
            <span className="csl-hero-chip">Figma · Storybook</span>
            <span className="csl-hero-chip">0 → 1 System</span>
          </div>
        </div>
        <div className="csl-hero-right">
          <DSHeroVisual />
        </div>
      </div>
      <div className="csl-hero-stats">
        {[
          { val: "120+", label: "Components built"      },
          { val: "40%",  label: "Design time saved"     },
          { val: "60%",  label: "Dev handoff faster"    },
          { val: "0 → 1",label: "Complete system"       },
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
  const comps = ["Button", "Input", "Card", "Badge", "Modal", "Nav", "Toast", "Table"];
  return (
    <div style={{
      background: "#1C1C2E", borderRadius: 16, padding: "20px",
      border: "1.5px solid rgba(124,58,237,0.3)",
      boxShadow: "0 24px 60px rgba(124,58,237,0.2)",
      width: "100%", maxWidth: 400,
    }}>
      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }} />
        <div style={{ flex: 1, height: 18, background: "rgba(255,255,255,0.06)", borderRadius: 4, marginLeft: 6 }} />
      </div>
      {/* Token row */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {["#7C3AED","#A78BFA","#EDE9FE","#F9FAFB"].map((c, i) => (
          <div key={i} style={{ flex: 1, height: 28, borderRadius: 6, background: c, border: i > 1 ? "1px solid rgba(0,0,0,0.1)" : "none" }} />
        ))}
      </div>
      {/* Component grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {comps.map((comp) => (
          <div key={comp} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 4px", textAlign: "center" }}>
            <div style={{ height: 24, background: "rgba(124,58,237,0.3)", borderRadius: 4, marginBottom: 5 }} />
            <p style={{ fontSize: "0.52rem", color: "rgba(255,255,255,0.5)" }}>{comp}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, background: "rgba(124,58,237,0.15)", borderRadius: 8, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.62rem", color: "#A78BFA" }}>Design Tokens</span>
        <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.4)" }}>v2.1.0</span>
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
        sub="Before this design system existed, the product had 14 different button styles, 6 shades of the same primary blue, and no single component that looked the same twice."
      />

      <div className="csl-role-strip csl-reveal">
        {[
          { icon: "🎯", head: "Single source of truth",  body: "One Figma library, one token set, one component API. Designers and developers finally speaking the same language."  },
          { icon: "⚡", head: "Speed at scale",          body: "New features ship 40% faster. Designers stopped rebuilding the same button. Developers stopped guessing font sizes." },
          { icon: "🔄", head: "Living system",           body: "Not a locked spec doc — a living system. Change a token, every component updates. Publish once, everywhere."       },
        ].map((r) => (
          <div className="csl-role-chip" key={r.head}>
            <div className="csl-role-icon">{r.icon}</div>
            <div className="csl-role-head">{r.head}</div>
            <p className="csl-role-body">{r.body}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ marginTop: 32 }}>
        <CsImg label="Design system overview — full library view in Figma" height={400} icon="🧩" sub="Place design system overview screenshot here" />
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
        label="The Problem"
        title="Inconsistency is a tax on every team."
      />

      <div className="csl-callout csl-reveal" style={{ borderLeftColor: "#7C3AED", background: "#F5F3FF" }}>
        Every new feature required designers to rebuild the same components. Every sprint, developers asked what the right padding value was. Every QA cycle caught the same inconsistencies. The product looked different on every page.
      </div>

      <div className="csl-img-2up csl-reveal rd1" style={{ marginTop: 28 }}>
        <CsImg label="Before — 14 button variants across the product" aspect="16/9" icon="😰" sub="Inconsistent components audit" />
        <CsImg label="After — one button, 6 states, consistent everywhere" aspect="16/9" icon="✨" sub="Unified design system" />
      </div>

      <div className="csl-card-grid csl-reveal rd2" style={{ marginTop: 24 }}>
        {[
          { title: "14 button styles",       body: "Across a single product. No shared base component or style rule."    },
          { title: "6 shades of primary",    body: "The same 'blue' had 6 different hex values in production."           },
          { title: "No component reuse",     body: "Designers rebuilt components from scratch on every new feature."     },
          { title: "Slow handoff",           body: "Developers reverse-engineered spacing and type from screenshots."    },
        ].map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", borderLeft: "3px solid #EDE9FE" }}>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#7C3AED", marginBottom: 8 }}>{item.title}</div>
            <div style={{ fontSize: "0.76rem", color: "#6B7280", lineHeight: 1.6 }}>{item.body}</div>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  DESIGN AUDIT
───────────────────────────────────────────────────────────────────── */
function AuditSection() {
  return (
    <CsSection id="audit">
      <CsSectionHeader
        label="Design Audit"
        title="You can't fix what you haven't mapped."
        sub="Before building anything, I audited every screen in the product — cataloguing every color, font size, spacing value, and component pattern in use."
      />

      <p className="csl-text csl-reveal">{LOREM}</p>

      {/* Audit spreadsheet / visual */}
      <div className="csl-reveal rd1" style={{ marginBottom: 24, marginTop: 20 }}>
        <CsImg label="Component audit — full inventory of existing UI patterns" height={360} icon="📊" sub="Catalogued 200+ UI elements · Identified 47 unique patterns to consolidate" />
      </div>

      <div className="csl-process-grid csl-reveal rd2">
        {[
          { n: "200+", t: "UI elements catalogued",     d: "Every button, input, card, and label inventoried before touching Figma."    },
          { n: "47",   t: "Patterns to consolidate",    d: "The audit revealed the true scope: 47 duplicate patterns across 8 product areas." },
          { n: "3",    t: "Teams interviewed",           d: "Design, engineering, and product — each had a different definition of 'consistent'." },
          { n: "2wk",  t: "Audit duration",             d: "Spent 2 weeks mapping before building. Saved months of rework later."             },
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
   §04  FOUNDATIONS
───────────────────────────────────────────────────────────────────── */
function FoundationsSection() {
  const colorGroups = [
    { label: "Primary",   colors: ["#7C3AED","#8B5CF6","#A78BFA","#C4B5FD","#EDE9FE"] },
    { label: "Neutral",   colors: ["#111827","#374151","#6B7280","#D1D5DB","#F9FAFB"] },
    { label: "Semantic",  colors: ["#059669","#F59E0B","#EF4444","#3B82F6","#8B5CF6"] },
  ];

  return (
    <CsSection id="foundations">
      <CsSectionHeader
        label="Foundations"
        title="Tokens first. Everything else flows from here."
        sub="The design system starts at the atomic level — color, typography, spacing, and elevation. Every component is built from these building blocks."
      />

      {/* Color scales */}
      <div className="csl-card csl-reveal" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 16 }}>Color scales</p>
        {colorGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: 14 }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: 8 }}>{group.label}</p>
            <div style={{ display: "flex", gap: 6 }}>
              {group.colors.map((c, i) => (
                <div key={i} style={{ flex: 1, height: 36, borderRadius: 6, background: c, border: i > 2 ? "1px solid rgba(0,0,0,0.08)" : "none" }} title={c} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="csl-card-2col csl-reveal rd1">
        {/* Spacing scale */}
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 14 }}>Spacing scale</p>
          {[
            { token: "--space-1", val: "4px",  name: "xs"  },
            { token: "--space-2", val: "8px",  name: "sm"  },
            { token: "--space-3", val: "12px", name: "md"  },
            { token: "--space-4", val: "16px", name: "base"},
            { token: "--space-6", val: "24px", name: "lg"  },
            { token: "--space-8", val: "32px", name: "xl"  },
          ].map((s) => (
            <div key={s.token} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: parseInt(s.val) * 1.5, height: 16, background: "#EDE9FE", borderRadius: 2, flexShrink: 0 }} />
              <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
                <span style={{ fontSize: "0.68rem", color: "#111827", fontFamily: "ui-monospace,monospace" }}>{s.val}</span>
                <span style={{ fontSize: "0.62rem", color: "#9CA3AF" }}>{s.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Type scale */}
        <div className="csl-card">
          <p style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "ui-monospace,monospace", marginBottom: 14 }}>Type scale</p>
          {[
            { name: "Display",  px: "48px", lh: "1.0" },
            { name: "H1",       px: "36px", lh: "1.1" },
            { name: "H2",       px: "28px", lh: "1.2" },
            { name: "H3",       px: "22px", lh: "1.3" },
            { name: "Body",     px: "16px", lh: "1.6" },
            { name: "Caption",  px: "12px", lh: "1.5" },
          ].map((t) => (
            <div key={t.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: `${parseInt(t.px) * 0.32}px`, fontWeight: 700, color: "#111827", minWidth: 60 }}>{t.name}</span>
              <span style={{ fontSize: "0.6rem", color: "#9CA3AF", fontFamily: "ui-monospace,monospace" }}>{t.px} / {t.lh}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Foundation image */}
      <div className="csl-reveal rd2" style={{ marginTop: 20 }}>
        <CsImg label="Foundations reference sheet — all tokens documented" aspect="16/6" icon="📐" sub="Color · Typography · Spacing · Elevation · Border radius" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  COMPONENTS
───────────────────────────────────────────────────────────────────── */
function ComponentsSection() {
  const categories = [
    { icon: "🔘", name: "Buttons",    count: "8 variants · 5 states · 3 sizes"      },
    { icon: "📝", name: "Inputs",     count: "12 types · 6 states · Error handling"  },
    { icon: "🃏", name: "Cards",      count: "6 layouts · Hover · Loading states"    },
    { icon: "📊", name: "Data tables",count: "Sort · Filter · Pagination built-in"   },
    { icon: "🏷️", name: "Badges",    count: "10 semantic variants · Icon support"   },
    { icon: "💬", name: "Modals",     count: "4 sizes · Drawer variant · Overlay"    },
    { icon: "🍞", name: "Toasts",     count: "5 types · Auto-dismiss · Queue"        },
    { icon: "🧭", name: "Navigation", count: "Sidebar · Topnav · Breadcrumb · Tabs" },
    { icon: "📋", name: "Forms",      count: "Field groups · Validation · Layouts"   },
    { icon: "📈", name: "Charts",     count: "Line · Bar · Donut · Sparkline"        },
    { icon: "🖼️", name: "Media",     count: "Avatar · Image · Video · Skeleton"     },
    { icon: "🔔", name: "Feedback",   count: "Alert · Progress · Spinner · Empty"   },
  ];

  return (
    <CsSection id="components">
      <CsSectionHeader
        label="Components"
        title={<>120+ components. <em style={{ fontStyle: "italic" }}>Every state documented.</em></>}
        sub="Built in Figma with variant properties for every state, size, and theme. Each component mirrors the engineering API exactly — no translation needed."
      />

      {/* Component library image */}
      <div className="csl-reveal" style={{ marginBottom: 24 }}>
        <CsImg label="Full component library — all 120+ components in Figma" aspect="16/7" icon="🧩" sub="All states · All variants · All sizes" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="csl-reveal rd1">
        {categories.map((cat) => (
          <div key={cat.name} style={{ background: "#fff", borderRadius: 14, padding: "16px 14px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: 8 }}>{cat.icon}</div>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827", marginBottom: 5 }}>{cat.name}</div>
            <div style={{ fontSize: "0.62rem", color: "#9CA3AF", lineHeight: 1.5 }}>{cat.count}</div>
          </div>
        ))}
      </div>

      {/* Deep-dive component image */}
      <div className="csl-reveal rd2" style={{ marginTop: 20 }}>
        <CsImg label="Button component — all 8 variants across 5 states at 3 sizes" aspect="16/6" icon="🔘" sub="Hover · Focus · Disabled · Loading · Active" />
      </div>

      <div className="csl-reveal rd3" style={{ marginTop: 14 }}>
        <CsImg label="Form components — inputs, selects, checkboxes, radio buttons" aspect="16/7" icon="📝" sub="All field types · All validation states · Inline errors" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  DESIGN TOKENS
───────────────────────────────────────────────────────────────────── */
function TokensSection() {
  return (
    <CsSection id="tokens">
      <CsSectionHeader
        label="Design Tokens"
        title="Change once. Update everywhere."
        sub="Semantic tokens sit on top of primitive tokens. Designers and developers use the same token names — --color-primary, --space-4, --radius-card. Update the primitive, everything inherits."
      />

      <div className="csl-card csl-reveal" style={{ fontFamily: "ui-monospace, monospace", background: "#18181B", color: "#A78BFA", fontSize: "0.75rem", lineHeight: 2 }}>
        <div style={{ marginBottom: 6, color: "rgba(255,255,255,0.4)", fontSize: "0.62rem" }}>tokens/base.json</div>
        {[
          ['  "color-primary":    ', '"#7C3AED"'],
          ['  "color-primary-dark":', '"#5B21B6"'],
          ['  "color-surface":    ', '"#F9FAFB"'],
          ['  "space-4":          ', '"16px"'   ],
          ['  "radius-card":      ', '"16px"'   ],
          ['  "shadow-card":      ', '"0 4px 20px rgba(0,0,0,0.05)"'],
        ].map(([key, val], i) => (
          <div key={i}>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>{key}</span>
            <span style={{ color: "#34D399" }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="csl-img-2up csl-reveal rd1" style={{ marginTop: 24 }}>
        <CsImg label="Token architecture — primitive → semantic → component" aspect="4/3" icon="🏗️" sub="Three-tier token system" />
        <CsImg label="Token usage in Figma variables panel" aspect="4/3" icon="🔧" sub="Figma variables · Auto-theming" />
      </div>

      <p className="csl-text csl-reveal rd2" style={{ marginTop: 20 }}>{LOREM}</p>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  DOCUMENTATION
───────────────────────────────────────────────────────────────────── */
function DocumentationSection() {
  return (
    <CsSection id="documentation">
      <CsSectionHeader
        label="Documentation"
        title="A design system without docs is just a Figma file."
        sub="Every component has a dedicated documentation page with: when to use it, when not to, all variants, accessibility notes, and the exact Figma component path."
      />

      <p className="csl-text csl-reveal">{LOREM}</p>

      <div className="csl-reveal rd1" style={{ marginBottom: 24, marginTop: 20 }}>
        <CsImg label="Documentation site — component reference pages" height={380} icon="📚" sub="Storybook · Usage guidelines · Code examples" />
      </div>

      <div className="csl-card-3col csl-reveal rd2">
        {[
          { icon: "📖", title: "Usage guidelines",    desc: "Do/don't examples for every component with real product screenshots."  },
          { icon: "♿", title: "Accessibility notes",  desc: "ARIA requirements, keyboard nav patterns, screen reader behavior."      },
          { icon: "💻", title: "Code snippets",       desc: "Copy-paste React props with all required and optional parameters shown." },
        ].map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px 18px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>{item.icon}</div>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>{item.title}</p>
            <p style={{ fontSize: "0.75rem", color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  GOVERNANCE
───────────────────────────────────────────────────────────────────── */
function GovernanceSection() {
  return (
    <CsSection id="governance">
      <CsSectionHeader
        label="Governance"
        title="A system that teams actually maintain."
        sub="A design system dies when nobody owns it. I established a governance model: who can propose changes, how they're reviewed, how they're versioned, and how they're communicated."
      />

      <div className="csl-process-grid csl-reveal">
        {[
          { n: "Propose",  t: "RFC process",       d: "Any designer or developer can propose a new component or token change via a lightweight RFC template."           },
          { n: "Review",   t: "Weekly sync",        d: "A 30-minute weekly review with design and engineering leads. No RFC ships without cross-functional sign-off."   },
          { n: "Version",  t: "Semantic versioning", d: "Breaking changes = major version. New components = minor. Bug fixes = patch. Changelog auto-generated."        },
          { n: "Communicate", t: "Changelog + Slack", d: "Every publish triggers a Slack notification with what changed, what to update, and where to find docs."       },
        ].map((s) => (
          <div className="csl-process-step" key={s.n}>
            <div className="csl-process-num">{s.n}</div>
            <div className="csl-process-title">{s.t}</div>
            <p className="csl-process-text">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ marginTop: 24 }}>
        <CsImg label="Governance workflow diagram — proposal to publish" height={260} icon="🔄" sub="RFC → Review → Version → Publish → Communicate" />
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
        label="Results & Impact"
        title="The numbers told the story."
      />

      <div className="csl-metrics csl-reveal">
        {[
          { val: "40%", label: "Design time saved"         },
          { val: "60%", label: "Faster dev handoff"        },
          { val: "120+",label: "Components in library"     },
          { val: "0",   label: "Duplicate components left" },
        ].map((m) => (
          <div className="csl-metric" key={m.label}>
            <div className="csl-metric-val">{m.val}</div>
            <div className="csl-metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd1">
        <strong>Before:</strong> designers spent 30% of sprint time rebuilding components. <strong>After:</strong> new features are composed from existing building blocks. The design system paid for itself in the first month.
      </div>

      <div style={{ marginTop: 24 }} className="csl-reveal rd2">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px 16px", background: "#F3F4F6", borderRadius: "8px 0 0 0", textAlign: "left", color: "#6B7280", fontWeight: 600 }}>Before</th>
              <th style={{ padding: "10px 16px", background: "#F5F3FF", borderRadius: "0 8px 0 0", textAlign: "left", color: "#7C3AED", fontWeight: 600 }}>After</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["14 button variants across the product",     "1 button component, 8 variants, consistent everywhere"],
              ["Designers rebuilding the same components",  "New features built from the library in hours not days"],
              ["Developers guessing spacing values",        "Tokens in code match tokens in Figma exactly"],
              ["No shared language between design & eng",   "Same terminology, same variable names, zero translation"],
              ["Design drift on every new feature",         "Consistent, on-brand output by default"],
            ].map(([b, a], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{b}</td>
                <td style={{ padding: "10px 16px", color: "#7C3AED", fontWeight: 500 }}>{a}</td>
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
  const items = [
    {
      n: "01",
      title: "Audit before you build",
      text: "Two weeks mapping the existing UI was the best investment. It prevented building new components that replicated existing ones, and gave stakeholders a visceral sense of the problem scale.",
    },
    {
      n: "02",
      title: "Semantic tokens beat primitives",
      text: "Naming tokens by their role (--color-primary) rather than their value (#7C3AED) means themes, dark mode, and rebranding require no component changes at all.",
    },
    {
      n: "03",
      title: "Governance is half the system",
      text: "A design system without clear ownership becomes stale within 6 months. The RFC process felt bureaucratic at first — but it's why the system is still being used and maintained.",
    },
    {
      n: "04",
      title: "Engineers are your best allies",
      text: "Involving engineering in component API decisions early meant zero translation layer. What the component was named in Figma was exactly what it was named in code.",
    },
  ];

  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Learnings"
        title="A design system is a product. Treat it like one."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((item) => (
          <div key={item.n} className="csl-reveal" style={{ display: "flex", gap: 20, background: "#fff", borderRadius: 18, padding: "22px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#7C3AED", fontFamily: "ui-monospace,monospace", flexShrink: 0, marginTop: 2 }}>{item.n}</span>
            <div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
            </div>
          </div>
        ))}
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
      tag="Design Systems · Foundations"
      tocItems={TOC_ITEMS}
      hero={<DSHero />}
    >
      <OverviewSection />
      <ProblemSection />
      <AuditSection />
      <FoundationsSection />
      <ComponentsSection />
      <TokensSection />
      <DocumentationSection />
      <GovernanceSection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
