"use client";

import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",     label: "Overview"          },
  { id: "problem",      label: "The Problem"       },
  { id: "research",     label: "UX Research"       },
  { id: "insights",     label: "Key Insights"      },
  { id: "userflow",     label: "User Flows"        },
  { id: "wireframes",   label: "Wireframes"        },
  { id: "visualdesign", label: "Visual Design"     },
  { id: "screens",      label: "Final Screens"     },
  { id: "accessibility",label: "Accessibility"     },
  { id: "results",      label: "Results"           },
  { id: "learnings",    label: "Learnings"         },
];

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function CareHero() {
  return (
    <div className="csl-hero">
      <div className="csl-hero-grid" />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0077B6", display: "inline-block" }} />
            Freelance · B2C · Healthcare
          </div>
          <h1 className="csl-hero-title">
            Care Autor<br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>Designing for Care,</em>
            <br />Not Complexity.
          </h1>
          <p className="csl-hero-desc">
            A B2C healthcare platform for Alzheimer&apos;s and Autism care support, shaped through deep UX research and role-centered product workflows.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">UX Designer</span>
            <span className="csl-hero-chip">Freelance</span>
            <span className="csl-hero-chip">Mobile App</span>
            <span className="csl-hero-chip">Healthcare</span>
          </div>
        </div>
        <div className="csl-hero-right">
          <CareHeroMockup />
        </div>
      </div>
      <div className="csl-hero-stats">
        {[
          { val: "3",    label: "User roles designed"     },
          { val: "12+",  label: "Core flows mapped"       },
          { val: "0→1",  label: "Product foundation"      },
          { val: "100%", label: "Accessibility-first"     },
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

function CareHeroMockup() {
  return (
    <div style={{
      width: "min(260px, 100%)", background: "#0A2540",
      borderRadius: 20, overflow: "hidden",
      border: "1.5px solid rgba(0,119,182,0.4)",
      boxShadow: "0 24px 60px rgba(0,119,182,0.25)",
    }}>
      <div style={{ height: 28, display: "flex", alignItems: "center", padding: "0 14px", gap: 6, background: "rgba(0,0,0,0.3)" }}>
        {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
          <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
        ))}
      </div>
      <div style={{ background: "#F0F9FF", padding: "18px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "15px", color: "#64748B", marginBottom: 2 }}>Welcome back</p>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#0A2540" }}>Sarah, Caregiver</p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#BAE6FD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>👩</div>
        </div>
        {/* Status card */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 10, boxShadow: "0 2px 8px rgba(0,119,182,0.08)" }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#0077B6", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>Patient Status</p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
            <p style={{ fontSize: "15px", color: "#1E3A5F" }}>James: Routine on track</p>
          </div>
        </div>
        {/* Task list */}
        {["Morning medication", "Therapy at 2PM", "Evening check-in"].map((task, i) => (
          <div key={task} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, border: `1.5px solid ${i === 0 ? "#10B981" : "#CBD5E1"}`, background: i === 0 ? "#ECFDF5" : "transparent", flexShrink: 0 }}>
              {i === 0 && <span style={{ fontSize: "15px", color: "#10B981", lineHeight: "14px", display: "block", textAlign: "center" }}>✓</span>}
            </div>
            <p style={{ fontSize: "15px", color: i === 0 ? "#9CA3AF" : "#374151", textDecoration: i === 0 ? "line-through" : "none" }}>{task}</p>
          </div>
        ))}
        <div style={{ background: "#0077B6", borderRadius: 8, padding: "8px 12px", textAlign: "center", marginTop: 12 }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>Add Task +</p>
        </div>
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
        title="Healthcare support, built around the people who give it."
        sub="Care Autor is a B2C healthcare platform for Alzheimer's and Autism care support. The challenge: translate deeply sensitive, high-stakes care requirements into intuitive modules that reduce caregiver burden."
      />

      <div className="csl-role-strip csl-reveal">
        {[
          { icon: "🏥", head: "B2C Healthcare",     body: "Freelance product design for a real healthcare startup entering a niche care market."       },
          { icon: "👥", head: "Three user roles",    body: "Caregiver, patient family, and care admin, each with distinct needs and permissions."       },
          { icon: "♿", head: "Accessibility first", body: "Every decision made with cognitive accessibility and emotional clarity as core constraints." },
        ].map((r) => (
          <div className="csl-role-chip" key={r.head}>
            <div className="csl-role-icon">{r.icon}</div>
            <div className="csl-role-head">{r.head}</div>
            <p className="csl-role-body">{r.body}</p>
          </div>
        ))}
      </div>

      {/* App overview image */}
      <div className="csl-reveal rd1" style={{ marginTop: 32 }}>
        <CsImg label="Care Autor: app overview and key screens" height={420} icon="📱" sub="Place full app overview screenshot here" />
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
        title="Caregivers are overwhelmed. The tools aren't helping."
        sub="People caring for Alzheimer's and Autism patients juggle medication schedules, therapy sessions, behavioral logs, and family updates, all across disconnected apps and paper notes."
      />

      <div className="csl-callout csl-reveal" style={{ borderLeftColor: "#0077B6", background: "#E0F2FE" }}>
        Families and caregivers are doing critical care work with consumer-grade apps designed for healthy people. The result: missed medications, communication breakdowns, and caregiver burnout.
      </div>

      <div className="csl-problem-grid csl-reveal rd1" style={{ marginTop: 28 }}>
        {[
          { title: "No unified care timeline",        body: "Medication logs, therapy notes, and behavioral records live in separate apps or on paper.",                       icon: "📋" },
          { title: "Communication gaps",              body: "Family members, caregivers, and clinicians had no shared view of the patient's current status.",                  icon: "💬" },
          { title: "Cognitive overload for caregivers",body: "Existing tools required too many steps for basic tasks, exhausting for people already under emotional strain.", icon: "🧠" },
          { title: "No role differentiation",         body: "Generic apps don't account for different levels of access needed by caregivers vs family vs administrators.",     icon: "🔐" },
        ].map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "1.3rem", marginBottom: 10 }}>{item.icon}</div>
            <div className="csl-problem-card-title">{item.title}</div>
            <div className="csl-problem-card-body">{item.body}</div>
          </div>
        ))}
      </div>

      {/* Problem visualization */}
      <div className="csl-reveal rd2" style={{ marginTop: 28 }}>
        <CsImg label="Problem space: caregiver pain point map" height={300} icon="🗺️" sub="Pain point mapping · Stakeholder journey" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  UX RESEARCH
───────────────────────────────────────────────────────────────────── */
function ResearchSection() {
  return (
    <CsSection id="research">
      <CsSectionHeader
        label="UX Research"
        title="Listening before designing, especially in healthcare."
        sub="I ran stakeholder workshops, caregiver interviews, and observed live care routines before sketching a single screen."
      />

      <p className="csl-text csl-reveal">{LOREM}</p>
      <p className="csl-text csl-reveal rd1">
        I worked with stakeholders on UX research and product workflows, then structured the experience around role-based needs, low-friction onboarding, and accessible interaction patterns. Understanding the emotional weight of caregiving shaped every design decision.
      </p>

      {/* Research methodology image */}
      <div className="csl-reveal rd2" style={{ marginBottom: 28, marginTop: 24 }}>
        <CsImg label="Research methodology: stakeholder interviews, observation, affinity mapping" height={340} icon="🔍" sub="5 caregiver interviews · 3 family interviews · 2 clinical observations" />
      </div>

      {/* Research stats */}
      <div className="csl-metrics csl-reveal rd2">
        {[
          { val: "10",   label: "Interviews conducted" },
          { val: "3",    label: "User role types"      },
          { val: "24+",  label: "Pain points identified"},
          { val: "6",    label: "Key themes emerged"   },
        ].map((m) => (
          <div className="csl-metric" key={m.label}>
            <div className="csl-metric-val">{m.val}</div>
            <div className="csl-metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Affinity diagram image */}
      <div className="csl-reveal rd3" style={{ marginTop: 24 }}>
        <CsImg label="Affinity diagram: synthesized research findings" height={280} icon="🧩" sub="FigJam affinity mapping session" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  KEY INSIGHTS
───────────────────────────────────────────────────────────────────── */
function InsightsSection() {
  const personas = [
    {
      icon: "👩‍⚕️",
      name: "Sarah, 34, Professional Caregiver",
      quote: "I spend more time updating records than being with the patient.",
      insights: ["Needs quick logging with minimal steps", "Wants real-time updates shared with family", "Frustrated by app-switching mid-task"],
    },
    {
      icon: "👨‍👩‍👦",
      name: "The Mehta Family, Patient's Family",
      quote: "We don't know what's happening unless we call every day.",
      insights: ["Wants a live view of care without micromanaging", "Needs clear medication and therapy schedules", "Overwhelmed by medical jargon in current tools"],
    },
    {
      icon: "🏢",
      name: "Dr. Kapoor, Care Administrator",
      quote: "We have no single system of record for patient care.",
      insights: ["Needs staff assignment and shift management", "Wants compliance reporting without manual entry", "Requires audit trails for regulatory purposes"],
    },
  ];

  return (
    <CsSection id="insights">
      <CsSectionHeader
        label="Key Insights & Personas"
        title="Three roles, one platform, zero compromise."
        sub="Research revealed three distinct user archetypes with fundamentally different needs, all of which had to coexist in a single, cohesive experience."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {personas.map((p) => (
          <div key={p.name} className="csl-reveal" style={{ background: "#fff", borderRadius: 20, padding: "24px 22px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ fontSize: "2rem", flexShrink: 0 }}>{p.icon}</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 6 }}>{p.name}</p>
              <p style={{ fontSize: "15px", fontStyle: "italic", color: "#6B7280", marginBottom: 14, lineHeight: 1.6 }}>&ldquo;{p.quote}&rdquo;</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.insights.map((ins) => (
                  <span key={ins} style={{ fontSize: "15px", background: "#E0F2FE", color: "#0077B6", padding: "4px 12px", borderRadius: 100, fontWeight: 600}}>{ins}</span>
                ))}
              </div>
            </div>
            <div style={{ width: 120, flexShrink: 0 }}>
              <CsImg label="Persona photo" aspect="1/1" icon="👤" />
            </div>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  USER FLOWS
───────────────────────────────────────────────────────────────────── */
function UserFlowSection() {
  return (
    <CsSection id="userflow">
      <CsSectionHeader
        label="User Flows"
        title="Mapping every path through the care experience."
        sub="12+ core flows designed: from onboarding and role assignment to medication logging, therapy scheduling, and family status updates."
      />

      {/* User flow diagram */}
      <div className="csl-reveal" style={{ marginBottom: 24 }}>
        <CsImg label="User flow: caregiver daily routine (main flow)" aspect="16/7" icon="🔀" sub="Onboarding → Dashboard → Task logging → Handoff" />
      </div>

      <div className="csl-img-2up csl-reveal rd1">
        <CsImg label="Family view: patient status flow" aspect="4/3" icon="👨‍👩‍👦" sub="Read-only family portal flow" />
        <CsImg label="Admin flow: staff & schedule management" aspect="4/3" icon="🏢" sub="Role management · Reporting flow" />
      </div>

      <p className="csl-text csl-reveal rd2" style={{ marginTop: 20 }}>{LOREM}</p>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  WIREFRAMES
───────────────────────────────────────────────────────────────────── */
function WireframesSection() {
  return (
    <CsSection id="wireframes">
      <CsSectionHeader
        label="Wireframes"
        title="Structure before style, especially in sensitive contexts."
        sub="Lo-fi and mid-fi wireframes were tested with real caregivers before any visual design. Clarity and cognitive ease were the primary success metrics."
      />

      <div className="csl-reveal" style={{ marginBottom: 20 }}>
        <CsImg label="Lo-fi wireframes: early sketches and FigJam flows" height={320} icon="📐" sub="Sketch → FigJam → Figma lo-fi" />
      </div>

      <div className="csl-img-3up csl-reveal rd1">
        <CsImg label="Dashboard wireframe" aspect="9/16" icon="📱" sub="Caregiver home" />
        <CsImg label="Task logging wireframe" aspect="9/16" icon="📱" sub="Quick log flow" />
        <CsImg label="Patient profile wireframe" aspect="9/16" icon="📱" sub="Patient detail view" />
      </div>

      <div className="csl-reveal rd2" style={{ marginTop: 16 }}>
        <CsImg label="Mid-fidelity wireframes: validated layout with caregivers" height={300} icon="🖼️" sub="3 rounds of feedback · 8 participants" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  VISUAL DESIGN
───────────────────────────────────────────────────────────────────── */
function VisualDesignSection() {
  const colors = [
    { name: "Trust Blue",  hex: "#0077B6", tag: "Primary"  },
    { name: "Calm Navy",   hex: "#0A2540", tag: "Deep"     },
    { name: "Sky",         hex: "#BAE6FD", tag: "Light"    },
    { name: "Success",     hex: "#10B981", tag: "Positive" },
    { name: "Alert",       hex: "#F59E0B", tag: "Warning"  },
    { name: "Surface",     hex: "#F0F9FF", tag: "BG",  border: true },
  ];

  return (
    <CsSection id="visualdesign">
      <CsSectionHeader
        label="Visual Design"
        title="Calm, clear, trustworthy, always."
        sub="Healthcare design requires restraint. Every visual decision was evaluated against: does this reduce or add to cognitive load?"
      />

      <div className="csl-card-2col csl-reveal">
        {/* Color system */}
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Color system</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {colors.map((c) => (
              <div key={c.name}>
                <div style={{ height: 44, borderRadius: 8, background: c.hex, border: c.border ? "1px solid rgba(0,0,0,0.1)" : "none", marginBottom: 5 }} />
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>{c.name}</p>
                <p style={{ fontSize: "15px", color: "#9CA3AF" }}>{c.tag}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="csl-card">
          <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 16 }}>Typography: Inter</p>
          {[
            { sample: "Display",   px: 36, w: 800 },
            { sample: "Heading",   px: 22, w: 700 },
            { sample: "Body text", px: 15, w: 400 },
            { sample: "Caption",   px: 12, w: 400 },
          ].map((t) => (
            <div key={t.sample} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: Math.max(11, t.px * 0.38), fontWeight: t.w, color: "#111827" }}>{t.sample}</span>
              <span style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif" }}>{t.px}px/{t.w}</span>
            </div>
          ))}
          <p style={{ fontSize: "15px", color: "#0077B6", marginTop: 6 }}>Accessible. 4.5:1 contrast minimum enforced throughout.</p>
        </div>
      </div>

      {/* Design tokens image */}
      <div className="csl-reveal rd1" style={{ marginTop: 20 }}>
        <CsImg label="Component library & design tokens" aspect="16/5" icon="🧩" sub="Cards · Forms · Navigation · Status indicators" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  FINAL SCREENS
───────────────────────────────────────────────────────────────────── */
function ScreensSection() {
  return (
    <CsSection id="screens">
      <CsSectionHeader
        label="Final Screens"
        title="Every screen in service of the caregiver."
        sub="Final hi-fidelity screens across the three user roles: caregiver, family, and admin. Gentle hierarchy, direct copy, repeatable card patterns."
      />

      {/* Full-width hero screen */}
      <div className="csl-reveal" style={{ marginBottom: 20 }}>
        <CsImg label="Caregiver dashboard: daily overview" aspect="16/9" icon="🖥️" sub="Main screen · Hi-fi final design" />
      </div>

      <div className="csl-img-3up csl-reveal rd1">
        <CsImg label="Patient profile screen" aspect="9/16" icon="📱" sub="Caregiver view" />
        <CsImg label="Medication log screen" aspect="9/16" icon="📱" sub="Quick-log flow" />
        <CsImg label="Task scheduler" aspect="9/16" icon="📱" sub="Therapy & routine" />
      </div>

      <div className="csl-img-3up csl-reveal rd2" style={{ marginTop: 16 }}>
        <CsImg label="Family status view" aspect="9/16" icon="📱" sub="Read-only family portal" />
        <CsImg label="Notification centre" aspect="9/16" icon="📱" sub="Alerts & reminders" />
        <CsImg label="Admin: staff dashboard" aspect="9/16" icon="📱" sub="Admin role screen" />
      </div>

      {/* Prototype flow image */}
      <div className="csl-reveal rd3" style={{ marginTop: 20 }}>
        <CsImg label="Full prototype: connected care flow" height={280} icon="🔗" sub="All screens · Complete user journey" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  ACCESSIBILITY
───────────────────────────────────────────────────────────────────── */
function AccessibilitySection() {
  const items = [
    { icon: "👁️", title: "WCAG AA Contrast",       desc: "Every text element maintains 4.5:1 minimum contrast ratio. Critical alerts use 7:1." },
    { icon: "🔤", title: "Readable Type Sizes",    desc: "Minimum 16px body text. Caregiver tasks use 18px for quick scanning under pressure." },
    { icon: "✋", title: "Large Touch Targets",    desc: "All interactive elements meet 44×44px minimum. Primary actions are 56px tall."         },
    { icon: "🗣️", title: "Screen Reader Support",  desc: "Semantic HTML, ARIA labels, and logical focus order across all flows."                  },
    { icon: "🎨", title: "No Color-Only Meaning",  desc: "Status indicators always pair color with an icon or text label."                        },
    { icon: "🧘", title: "Cognitive Simplicity",   desc: "One primary action per screen. No dead ends. Always a clear path forward."             },
  ];

  return (
    <CsSection id="accessibility">
      <CsSectionHeader
        label="Accessibility"
        title="In healthcare, accessibility isn't optional."
        sub="Designed for caregivers who may be fatigued, anxious, or working in poor lighting. Every interaction standard was treated as a minimum, not a ceiling."
      />

      <div className="csl-card-grid csl-reveal">
        {items.map((item) => (
          <div key={item.title} style={{ background: "#fff", borderRadius: 18, padding: "22px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{item.icon}</div>
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 8 }}>{item.title}</h3>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ marginTop: 24 }}>
        <CsImg label="Accessibility audit: contrast checks and ARIA validation" height={240} icon="♿" sub="WCAG 2.1 AA compliance · Focus flow testing" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  RESULTS
───────────────────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <CsSection id="results">
      <CsSectionHeader
        label="Results"
        title="A clear product foundation for a complex healthcare idea."
        sub="The project established the complete UX foundation for Care Autor, ready for engineering handoff and investor demonstration."
      />

      <div className="csl-metrics csl-reveal">
        {[
          { val: "12+",  label: "Core flows delivered"    },
          { val: "60+",  label: "Screens designed"        },
          { val: "3",    label: "Role-based experiences"  },
          { val: "100%", label: "WCAG AA compliant"       },
        ].map((m) => (
          <div className="csl-metric" key={m.label}>
            <div className="csl-metric-val">{m.val}</div>
            <div className="csl-metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd1">
        The project established a clear product foundation for a complex healthcare idea, with accessibility, emotional clarity, and user-centered decision-making treated as core requirements, not afterthoughts.
      </div>

      <div className="csl-reveal rd2" style={{ marginTop: 24 }}>
        <CsImg label="Final design handoff: dev-ready screens with annotations" height={300} icon="📦" sub="Figma handoff · Component documentation" />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §11  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  const items = [
    {
      n: "01",
      title: "Research depth matters more in high-stakes domains",
      text: "In healthcare, a wrong assumption isn't just a UX failure; it's a real-world risk. Spending more time in research than design was the right call.",
    },
    {
      n: "02",
      title: "Role-based design requires constant perspective-switching",
      text: "What's a clarity win for a caregiver might be confusing for a family member. I learned to design each role's experience separately, then check for system coherence.",
    },
    {
      n: "03",
      title: "Emotional context shapes interaction patterns",
      text: "Caregivers log tasks when they're tired, worried, and distracted. That context changed everything, from button sizes to confirmation dialogs to default states.",
    },
    {
      n: "04",
      title: "Simplicity is a feature, not a constraint",
      text: "Every screen had to do one thing well. The temptation to add 'just one more option' was always there, and almost always wrong.",
    },
  ];

  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Learnings"
        title="Designing for care taught me to design with care."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((item) => (
          <div key={item.n} className="csl-reveal" style={{ display: "flex", gap: 20, background: "#fff", borderRadius: 18, padding: "22px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: "15px", fontWeight: 600, color: "#0077B6", fontFamily: "Lato, sans-serif", flexShrink: 0, marginTop: 2 }}>{item.n}</span>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="/projects/airiq" className="csl-next csl-reveal" style={{ marginTop: 56 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">Air iQ: B2B Flight Booking Platform</p>
        </div>
        <span className="csl-next-arrow">→</span>
      </a>
    </CsSection>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════════════════ */
export function CareAutorCaseStudy() {
  return (
    <CaseStudyPage
      theme="care"
      title="Care Autor"
      tag="Healthcare · B2C"
      tocItems={TOC_ITEMS}
      hero={<CareHero />}
    >
      <OverviewSection />
      <ProblemSection />
      <ResearchSection />
      <InsightsSection />
      <UserFlowSection />
      <WireframesSection />
      <VisualDesignSection />
      <ScreensSection />
      <AccessibilitySection />
      <ResultsSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
