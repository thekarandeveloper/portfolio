"use client";

import React from "react";
import Image from "next/image";
import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";
import {
  accessibilityCards,
  bibloFeatures,
  bibloMeta,
  bibloRoleChips,
  bibloTeam,
  diamondSteps,
  learnings,
  personas,
  researchStats,
  testResults,
} from "./biblofiData";

/* ─────────────────────────────────────────────────────────────────────
   PALETTE (warm orange-brown)
───────────────────────────────────────────────────────────────────── */
const A    = "#C8703A";
const A5   = "#FEF4E8";
const A2   = "#FDE8CC";
const AMut = "#AA7845";
const ADrk = "#3D2010";
const AMed = "#8B5A35";

/* ─────────────────────────────────────────────────────────────────────
   TOC + META
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",      label: "Overview"            },
  { id: "process",       label: "Design Process"      },
  { id: "research",      label: "Research"            },
  { id: "insights",      label: "Personas"            },
  { id: "wireframes",    label: "Rough Sketches"      },
  { id: "lofi",          label: "Wireframes"          },
  { id: "constraints",   label: "Constraints"         },
  { id: "screens",       label: "Key Features"        },
  { id: "final",         label: "Final Screens"       },
  { id: "edgestates",    label: "Edge States"         },
  { id: "accessibility", label: "Accessibility"       },
  { id: "testing",       label: "Usability Testing"   },
  { id: "learnings",     label: "Learnings"           },
];

const META_ROWS = [
  { label: "Role",     value: "Lead UX Designer"   },
  { label: "Duration", value: "1 Month"            },
  { label: "Platform", value: "iOS App"            },
  { label: "Tools",    value: "Figma · FigJam"     },
  { label: "Context",  value: "Infosys Internship" },
];

/* ─────────────────────────────────────────────────────────────────────
   HERO PHONE MOCKUP
───────────────────────────────────────────────────────────────────── */
function PhoneFrame({ src, alt, w, h, tilt, style = {} }: {
  src: string; alt: string; w: number; h: number; tilt: string; style?: React.CSSProperties;
}) {
  const islandW = Math.round(w * 0.42);
  const btnH    = Math.round(h * 0.14);
  const volH    = Math.round(h * 0.1);
  return (
    <div style={{
      position:"relative", width:w, height:h,
      background:"#161616", borderRadius:42,
      boxShadow:"0 0 0 1.5px rgba(255,255,255,0.07), 0 0 0 3px #222, 0 32px 64px rgba(0,0,0,0.5)",
      transform:`rotate(${tilt})`,
      flexShrink:0,
      ...style,
    }}>
      <div style={{
        position:"absolute", top:14, left:"50%", transform:"translateX(-50%)",
        width:islandW, height:26, background:"#0A0A0A", borderRadius:20, zIndex:10,
      }} />
      <div style={{ position:"absolute", inset:0, borderRadius:42, overflow:"hidden" }}>
        <Image src={src} alt={alt} width={w * 2} height={h * 2}
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
          borderRadius:42, pointerEvents:"none",
        }} />
      </div>
      <div style={{ position:"absolute", right:-4, top:Math.round(h*0.24), width:4, height:btnH, background:"#2A2A2A", borderRadius:"0 3px 3px 0" }} />
      <div style={{ position:"absolute", left:-4, top:Math.round(h*0.2),  width:4, height:volH, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
      <div style={{ position:"absolute", left:-4, top:Math.round(h*0.32), width:4, height:volH, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
    </div>
  );
}

function PhoneMockupScene() {
  return (
    <div style={{
      position:"relative", width:"100%", height:500,
      display:"flex", alignItems:"center", justifyContent:"center",
    }}>
      <div style={{
        position:"absolute", width:320, height:320, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(200,112,58,0.18) 0%, transparent 70%)",
        animation:"bibloGlowPulse 5s ease-in-out infinite",
        pointerEvents:"none",
      }} />
      <div style={{ position:"absolute", left:"4%", top:"50%", transform:"translateY(-40%)", zIndex:1, opacity:0.88 }}>
        <PhoneFrame src="/Image/Biblofi/hero1.png" alt="BibloFi screen" w={148} h={320} tilt="-6deg" />
      </div>
      <div className="biblo-phone-wrap" style={{ zIndex:3 }}>
        <div style={{
          position:"absolute", top:14, left:"50%", transform:"translateX(-50%)",
          width:88, height:26, background:"#0A0A0A", borderRadius:20, zIndex:10,
        }} />
        <div style={{ position:"absolute", inset:0, borderRadius:42, overflow:"hidden" }}>
          <Image src="/Image/Biblofi/smart-book.png" alt="BibloFi — Smart Book Discovery"
            width={420} height={908}
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
            borderRadius:42, pointerEvents:"none",
          }} />
        </div>
        <div style={{ position:"absolute", right:-4, top:110, width:4, height:64, background:"#2A2A2A", borderRadius:"0 3px 3px 0" }} />
        <div style={{ position:"absolute", left:-4, top:88,  width:4, height:44, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
        <div style={{ position:"absolute", left:-4, top:142, width:4, height:44, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
      </div>
      <div style={{ position:"absolute", right:"4%", top:"50%", transform:"translateY(-55%)", zIndex:2, opacity:0.88 }}>
        <PhoneFrame src="/Image/Biblofi/hero2.png" alt="BibloFi screen" w={148} h={320} tilt="5deg" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function BibloHero() {
  return (
    <div className="csl-hero">
      <div className="csl-hero-grid" />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Infosys Internship · iOS App</div>
          <h1 className="csl-hero-title">
            BibloFi —<br />
            <em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.65)" }}>the library hadn&apos;t</em>
            <br />changed. The students had.
          </h1>
          <p className="csl-hero-desc">
            Infosys brought me in to design a library app from scratch. What I found wasn&apos;t a missing app — it was a system that assumed students had time, patience, and willingness to just show up and hope for the best.
          </p>
          <div className="csl-hero-chips">
            {bibloMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>{item.label}: {item.value}</span>
            ))}
          </div>
        </div>
        <div className="csl-hero-right">
          <PhoneMockupScene />
        </div>
      </div>

      <div className="csl-hero-stats">
        {[
          { val:"20",   label:"Usability test users"  },
          { val:"90%",  label:"Task completion rate"  },
          { val:"7",    label:"User flows designed"   },
          { val:"1 mo", label:"Project duration"      },
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
      <CsSectionHeader
        label="Project Overview"
        title={<>A library built for 1995, <em style={{ fontStyle:"italic" }}>used by students in 2024.</em></>}
      />

      <div className="csl-card-2col csl-reveal">
        <div>
          <p className="csl-text">
            Before BibloFi, students had no digital interface with the library at all. Checking book availability meant physically visiting. Reserving a study seat was first-come, first-served. Due dates were tracked by memory or handwritten slips — and forgotten ones meant fines. The system was entirely manual, managed by librarians over the counter.
          </p>
          <p className="csl-text">
            Infosys identified this as a real student pain point and brought me in as the lead designer for a 4-week internship sprint. I was given a blank canvas, a team of 10 iOS developers, and a clear mandate: design the complete member experience from scratch.
          </p>
          <div className="csl-tags csl-reveal rd1">
            {bibloRoleChips.map((chip) => (
              <span className="csl-tag" key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="csl-card csl-reveal rd1" style={{ marginBottom:14 }}>
            <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:"#9CA3AF", marginBottom:14 }}>My team</p>
            {bibloTeam.map((item) => (
              <div key={item.dot} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:A2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:700, color:A, flexShrink:0, overflow:"hidden" }}>
                  {item.dot === "NT"
                    ? <Image src="/Image/Biblofi/me.png" alt="Nikunj" width={28} height={28} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    : item.dot}
                </div>
                <div>
                  <div style={{ fontSize:"0.76rem", fontWeight:600, color:"#111827" }}>{item.title}</div>
                  <div style={{ fontSize:"0.68rem", color:"#9CA3AF" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="csl-callout" style={{ margin:0 }}>
            <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Project Goal</p>
            <p style={{ fontSize:"0.78rem", color:"#374151", lineHeight:1.65 }}>
              &quot;Create a seamless, feature-rich library app that empowers members to discover, reserve, and borrow books efficiently while reducing friction.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Ownership declaration */}
      <div className="csl-card csl-reveal rd1" style={{ marginTop:20, padding:"20px 24px" }}>
        <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:"#9CA3AF", marginBottom:16 }}>What I owned vs. what I didn&apos;t</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          <div>
            <p style={{ fontSize:"0.68rem", fontWeight:700, color:"#10B981", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10 }}>✓  I owned</p>
            {[
              "End-to-end UX + UI design",
              "Research planning & execution",
              "Information architecture",
              "Design system + component library",
              "Usability test planning & analysis",
            ].map((item) => (
              <p key={item} style={{ fontSize:"0.76rem", color:"#374151", marginBottom:6, lineHeight:1.5 }}>· {item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontSize:"0.68rem", fontWeight:700, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10 }}>–  Not mine</p>
            {[
              "iOS engineering & implementation",
              "Product scope & business requirements",
              "Sprint timeline & planning",
              "Post-internship QA & release",
            ].map((item) => (
              <p key={item} style={{ fontSize:"0.76rem", color:"#9CA3AF", marginBottom:6, lineHeight:1.5 }}>· {item}</p>
            ))}
          </div>
        </div>
        <p style={{ fontSize:"0.72rem", color:"#9CA3AF", marginTop:16, fontStyle:"italic", borderTop:"1px solid #F3F4F6", paddingTop:12 }}>
          Delivered as final Figma specs + annotated design system to the iOS engineering team at internship end.
        </p>
      </div>

      <div className="csl-reveal rd2" style={{ marginTop:28, borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/team-infosys.png"
          alt="Internship team at Infosys"
          width={1200} height={560}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  DESIGN PROCESS
───────────────────────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <CsSection id="process">
      <CsSectionHeader
        label="Design Process"
        title={<>The Double Diamond <em style={{ fontStyle:"italic" }}>framework in practice.</em></>}
      />

      <div className="csl-process-grid csl-reveal">
        {diamondSteps.map((step) => (
          <div key={step.name} className="csl-process-step" style={step.active ? { borderTopColor:A } : {}}>
            <div style={{ fontSize:"1.2rem", marginBottom:10 }}>{step.icon}</div>
            <div className="csl-process-num">{step.phase}</div>
            <div className="csl-process-title">{step.name}</div>
            <p className="csl-process-text">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ marginTop:28, borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/design-process.png"
          alt="Double Diamond design process diagram"
          width={1200} height={560}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  RESEARCH
───────────────────────────────────────────────────────────────────── */
function ResearchSection() {
  return (
    <CsSection id="research">
      <CsSectionHeader
        label="Discover — Research"
        title={<>Understanding how students <em style={{ fontStyle:"italic" }}>actually use libraries.</em></>}
      />

      <p className="csl-text csl-reveal">
        I surveyed 38 students and conducted 8 in-depth interviews across two campuses. Three observation sessions inside the library — watching how students navigated the space in real time — revealed behaviours that surveys alone would have missed. I also spent time with 2 librarians to understand the other side of every pain point students described.
      </p>
      <p className="csl-text csl-reveal rd1">
        Key finding: the friction wasn&apos;t in the library itself — it was in the invisible overhead. Not knowing if a book was available before visiting. Not being able to reserve a seat. No reminders for due dates. Digital tools existed everywhere else in students&apos; lives, but the library expected them to operate on its terms.
      </p>

      {/* What surprised us — pivot insight */}
      <div className="csl-callout csl-reveal rd1" style={{ marginBottom:28 }}>
        <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What surprised us</p>
        <p style={{ fontSize:"0.96rem", color:"#374151", lineHeight:1.75 }}>
          We expected the main problem to be the book catalogue — students not finding titles they wanted. It wasn&apos;t. The catalogue was fine. The problem was <strong>uncertainty before arriving</strong>: students couldn&apos;t know if a book was available or a seat was free without physically going there first. The failed visit — not the failed search — was the core pain.
        </p>
      </div>

      <div className="csl-reveal rd2" style={{ marginBottom:28 }}>
        <CsImg label="Research methodology — surveys, interviews & observation" height={340} icon="🔍" sub="Place /Image/Biblofi/method.png here" />
      </div>

      {/* User voice */}
      <div className="csl-reveal rd2" style={{
        background:"#fff", borderRadius:16, padding:"24px",
        boxShadow:"0 4px 14px rgba(0,0,0,0.04)", marginBottom:28,
        borderLeft:`3px solid ${A}`,
      }}>
        <p style={{ fontSize:"0.68rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:A, marginBottom:12 }}>From the interviews</p>
        <p style={{ fontSize:"1rem", color:"#374151", lineHeight:1.8, fontStyle:"italic" }}>
          &quot;I walked 20 minutes to the library last month, and the book wasn&apos;t there. I&apos;d already planned to sit in my usual spot — but of course you can&apos;t actually reserve one. I just went home. I haven&apos;t been back since.&quot;
        </p>
        <p style={{ fontSize:"0.68rem", color:"#9CA3AF", marginTop:10 }}>— B.Tech student, 3rd year · Interview participant</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14 }} className="csl-reveal rd2">
        {researchStats.map((stat) => (
          <div key={stat.label} style={{ background:"#fff", borderRadius:16, padding:"22px 16px", textAlign:"center", boxShadow:"0 4px 14px rgba(0,0,0,0.04)" }}>
            <p style={{ fontSize:"2rem", fontWeight:800, color:A, lineHeight:1, marginBottom:6 }}>{stat.value}</p>
            <p style={{ fontSize:"0.7rem", color:"#6B7280", textTransform:"uppercase", letterSpacing:"0.06em" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  PERSONAS
───────────────────────────────────────────────────────────────────── */
function InsightsSection() {
  return (
    <CsSection id="insights">
      <CsSectionHeader
        label="Define — Personas"
        title={<>Two students, two stories, <em style={{ fontStyle:"italic" }}>one shared frustration.</em></>}
        sub="Based on real research insights, I created two fictional personas representing the core user archetypes."
      />

      <div className="csl-callout csl-reveal" style={{ marginBottom:32 }}>
        &quot;Despite living in a digital-first world, library visits remain stuck in the past — long queues, no way to check book availability, and zero flexibility in planning. The result? A frustrating, disconnected experience that fails modern users.&quot;
        <p style={{ fontSize:"0.68rem", color:"#9CA3AF", marginTop:10, fontStyle:"normal" }}>— Composite insight from 8 student interviews</p>
      </div>

      <div className="csl-persona-grid csl-reveal rd1">
        {personas.map((persona) => (
          <div className="csl-persona-card" key={persona.name}>
            <div className="csl-persona-img" style={{ background:A2 }}>
              <span className="csl-persona-img-icon">{persona.avatar}</span>
              <span className="csl-persona-img-label">Persona photo placeholder</span>
            </div>
            <div className="csl-persona-body">
              <p className="csl-persona-name">{persona.name}</p>
              <p className="csl-persona-tag">{persona.meta}</p>
              <p style={{ fontSize:"0.68rem", fontWeight:700, color:A, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8, marginTop:12 }}>Goals</p>
              {persona.goals.map((goal) => (
                <div key={goal} style={{ display:"flex", gap:8, marginBottom:5, fontSize:"0.76rem", color:"#374151" }}>
                  <span style={{ color:"#10B981" }}>✓</span>{goal}
                </div>
              ))}
              <p style={{ fontSize:"0.68rem", fontWeight:700, color:"#EF4444", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8, marginTop:12 }}>Pain Points</p>
              {persona.pains.map((pain) => (
                <div key={pain} style={{ display:"flex", gap:8, marginBottom:5, fontSize:"0.76rem", color:"#374151" }}>
                  <span style={{ color:"#EF4444" }}>✕</span>{pain}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  ROUGH SKETCHES
───────────────────────────────────────────────────────────────────── */
function WireframesSection() {
  return (
    <CsSection id="wireframes">
      <CsSectionHeader
        label="Develop — Wireframes"
        title={<>From rough sketches <em style={{ fontStyle:"italic" }}>to structured flows.</em></>}
        sub="The brainstorming started in WhatsApp chats and rough sketches — raw ideas translated into structured lo-fi wireframes in FigJam."
      />

      <div className="csl-reveal" style={{ borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/rough.png"
          alt="Rough sketches and lo-fi wireframes"
          width={1400} height={900}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>

      <p className="csl-text csl-reveal rd2" style={{ marginTop:20, fontStyle:"italic", color:"#9CA3AF" }}>
        7 complete user flows designed: Onboarding · Sign In · Browse by Genre · Search by Author · Scan &amp; Search · Notifications &amp; Profile · Seat Booking
      </p>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05b  LO-FI WIREFRAMES
───────────────────────────────────────────────────────────────────── */
function LoFiWireframesSection() {
  return (
    <CsSection id="lofi">
      <CsSectionHeader
        label="Develop — Lo-Fi Wireframes"
        title={<>Rough ideas turned into <em style={{ fontStyle:"italic" }}>structured screens.</em></>}
        sub="Each flow was mapped out screen by screen — laying the foundation before moving into high-fidelity design."
      />

      <div className="csl-reveal" style={{ borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/wireframe.png"
          alt="Lo-fi wireframes"
          width={1400} height={900}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>

      {/* Bridge: what the lo-fi round revealed */}
      <div className="csl-callout csl-reveal rd1" style={{ marginTop:24 }}>
        <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What the lo-fi round revealed</p>
        <p style={{ fontSize:"0.96rem", color:"#374151", lineHeight:1.75 }}>
          Two structural problems surfaced immediately. The bottom tab bar had five items — one too many for comfortable one-handed use on a standard iPhone. The &apos;Issue Book&apos; action was buried three taps deep inside a book detail screen, which test observers flagged in the first five minutes. Both were fixed before opening Figma in hi-fi: the tab bar dropped to four primary items, and issuing a book became a single persistent action from the catalogue view.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  CONSTRAINTS & TRADEOFFS  (new section)
───────────────────────────────────────────────────────────────────── */
function ConstraintsSection() {
  const constraints = [
    {
      icon:  "⏱",
      title: "4-week hard deadline",
      desc:  "Infosys internship sprint with no extension. 7 core user flows were locked in week 1. Anything beyond that was explicitly deferred to a Phase 2 doc.",
    },
    {
      icon:  "📱",
      title: "iOS 18 HIG compliance",
      desc:  "No custom navigation patterns. Native components only — which eliminated several interaction ideas that would have required bespoke animation work from the dev team.",
    },
    {
      icon:  "⚙️",
      title: "No real-time push backend",
      desc:  "Push notification infrastructure wasn't available in this sprint. The 'notify me when a seat opens' waitlist idea was cut; a booking-only model became the viable path.",
    },
    {
      icon:  "✂️",
      title: "Three features deliberately cut",
      desc:  "Audiobook streaming, a librarian-facing admin panel, and in-app fine payment were de-scoped in week 3 to protect the quality of the 7 core flows. All three became Phase 2 recommendations.",
    },
  ];

  return (
    <CsSection id="constraints">
      <CsSectionHeader
        label="Develop — Constraints & Tradeoffs"
        title={<>What we worked within — <em style={{ fontStyle:"italic" }}>and what we chose to cut.</em></>}
        sub="Real projects have real limits. These constraints shaped every major decision in the design — and naming them is part of the work."
      />

      <div className="csl-card-grid csl-reveal">
        {constraints.map((c) => (
          <div key={c.title} style={{ background:"#fff", borderRadius:18, padding:"22px 20px", boxShadow:"0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize:"1.5rem", marginBottom:12 }}>{c.icon}</div>
            <h3 style={{ fontSize:"0.92rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{c.title}</h3>
            <p style={{ fontSize:"0.76rem", color:"#6B7280", lineHeight:1.6 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      {/* The hardest tradeoff moment */}
      <div className="csl-callout csl-reveal rd1" style={{ marginTop:20 }}>
        <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>The hardest tradeoff</p>
        <p style={{ fontSize:"0.96rem", color:"#374151", lineHeight:1.75 }}>
          The seat waitlist feature — where students could queue and get notified when a spot opens — tested better than the booking-only model in concept testing. Users understood and wanted it. But the push notification backend would have taken the dev team two weeks to build, leaving no time to test the core flows. I made the call to cut it: a well-tested booking flow at handoff is worth more than a partially-built waitlist. The waitlist went into the Phase 2 doc with full specs.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  KEY FEATURES
───────────────────────────────────────────────────────────────────── */
function ScreensSection() {
  return (
    <CsSection id="screens">
      <CsSectionHeader
        label="Deliver — Key Features"
        title={<>Three features that make <em style={{ fontStyle:"italic" }}>library visits optional.</em></>}
      />

      {/* Visual system explainer */}
      <div className="csl-reveal" style={{
        background:A5, borderRadius:16, padding:"20px 24px", marginBottom:28,
        display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16,
      }}>
        <div>
          <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:6 }}>Colour</p>
          <p style={{ fontSize:"0.76rem", color:ADrk, lineHeight:1.6 }}>Warm orange-brown (#C8703A) — chosen to feel approachable rather than institutional. Libraries should feel inviting, not cold.</p>
        </div>
        <div>
          <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:6 }}>Typography</p>
          <p style={{ fontSize:"0.76rem", color:ADrk, lineHeight:1.6 }}>iOS 18 system font (SF Pro) throughout — required by HIG and native to every iPhone user. Hierarchy through weight and size, no decorative typefaces.</p>
        </div>
        <div>
          <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:6 }}>Components</p>
          <p style={{ fontSize:"0.76rem", color:ADrk, lineHeight:1.6 }}>Built on iOS 18 UI Kit (Figma Community). Native sheets, tabs, and cards — so the engineering team had direct SwiftUI analogues with no bespoke component work.</p>
        </div>
      </div>

      {bibloFeatures.map((feature) => (
        <div key={feature.title} className="csl-reveal" style={{
          background:"#fff", borderRadius:20, padding:"28px 24px",
          boxShadow:"0 4px 20px rgba(0,0,0,0.05)", marginBottom:20,
          display:"grid", gridTemplateColumns:"1.8fr 1fr", gap:32, alignItems:"start",
        }}>
          <div style={{ order: feature.reverse ? 2 : 1 }}>
            <p style={{ fontSize:"0.62rem", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", marginBottom:6 }}>{feature.num}</p>
            <p style={{ fontSize:"0.68rem", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:AMut, marginBottom:10 }}>{feature.tag}</p>
            <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:12 }}>{feature.title}</h3>
            {feature.desc.map((line) => (
              <p key={line} className="csl-text">{line}</p>
            ))}

            {/* Why this approach */}
            <div style={{ background:A5, borderRadius:10, padding:"12px 16px", marginTop:14, marginBottom:10 }}>
              <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:AMed, marginBottom:5 }}>Why this approach</p>
              <p style={{ fontSize:"0.76rem", color:ADrk, lineHeight:1.65 }}>{feature.rationale}</p>
            </div>

            {/* Rejected alternative */}
            <div style={{ borderRadius:10, padding:"12px 16px", border:"1px solid #F3F4F6", marginBottom:12 }}>
              <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:"#9CA3AF", marginBottom:5 }}>Alternative we rejected</p>
              <p style={{ fontSize:"0.76rem", color:"#6B7280", lineHeight:1.65 }}>{feature.rejected}</p>
            </div>

            <span style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:"0.68rem", fontWeight:600, color:A, background:A5, padding:"4px 13px", borderRadius:100 }}>
              {feature.impact}
            </span>
          </div>
          <div style={{ order: feature.reverse ? 1 : 2, display:"flex", justifyContent:"center" }}>
            <Image
              src={feature.img}
              alt={feature.title}
              width={240} height={427}
              style={{ width:"100%", maxWidth:220, height:"auto", display:"block", borderRadius:20, boxShadow:"0 8px 32px rgba(0,0,0,0.12)" }}
            />
          </div>
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  FINAL SCREENS
───────────────────────────────────────────────────────────────────── */
function FinalScreensSection() {
  const rows = [
    [
      { src:"/Image/Biblofi/final1.png", label:"Onboarding"   },
      { src:"/Image/Biblofi/final2.png", label:"Home"         },
      { src:"/Image/Biblofi/final3.png", label:"Browse"       },
    ],
    [
      { src:"/Image/Biblofi/final4.png", label:"Book Detail"  },
      { src:"/Image/Biblofi/final5.png", label:"Search"       },
      { src:"/Image/Biblofi/final6.png", label:"Scan"         },
    ],
    [
      { src:"/Image/Biblofi/final7.png", label:"Seat Booking" },
      { src:"/Image/Biblofi/final8.png", label:"My Books"     },
      { src:"/Image/Biblofi/final9.png", label:"Profile"      },
    ],
  ];

  return (
    <CsSection id="final">
      <CsSectionHeader
        label="Deliver — Final Designs"
        title={<>The finished product — <em style={{ fontStyle:"italic" }}>every screen, polished.</em></>}
        sub="From onboarding to book discovery, seat booking to fine tracking — final high-fidelity screens delivered to the Infosys engineering team."
      />

      {rows.map((row, ri) => (
        <div key={ri} className={`csl-reveal${ri > 0 ? ` rd${ri}` : ""}`}
          style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginBottom:16 }}>
          {row.map(({ src, label }) => (
            <div key={src} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
              <div style={{ width:"100%", borderRadius:20, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.12)" }}>
                <CsImg label={label} aspect="9/16" icon="📱" sub="Upload final screen here" />
              </div>
              <p style={{ fontSize:"0.72rem", color:"#9CA3AF", textAlign:"center" }}>{label}</p>
            </div>
          ))}
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  EDGE STATES  (new section)
───────────────────────────────────────────────────────────────────── */
function EdgeStatesSection() {
  const edgeStates = [
    {
      icon:  "🔍",
      label: "No search results",
      sub:   "Search: 'Microeconomics 4th Ed.' · 0 results found",
      desc:  "Friendly empty state with suggested alternative searches and a 'Request this book' CTA — so a dead end becomes a next step.",
    },
    {
      icon:  "📚",
      label: "Book currently unavailable",
      sub:   "All 3 copies issued · Due back in 4 days",
      desc:  "Shows due date, copy count, and a 'Reserve when available' option. The user leaves with a plan, not a rejection.",
    },
    {
      icon:  "🪑",
      label: "Study hall full",
      sub:   "All 48 seats booked · Peak: 10 am – 2 pm",
      desc:  "Seat map greyed out with a capacity note and a 'Try tomorrow' shortcut pre-filled with the next available slot.",
    },
    {
      icon:  "⚠️",
      label: "Overdue books warning",
      sub:   "1 book overdue · Fine accumulating: ₹2 / day",
      desc:  "Persistent warning banner on the home screen showing the overdue title, fine amount, and a 'Return by scanning' CTA.",
    },
    {
      icon:  "🔔",
      label: "Empty notifications",
      sub:   "You're all caught up",
      desc:  "Oreo the mascot appears here — a moment of warmth in an otherwise empty screen, with a nudge to enable due-date reminders.",
    },
  ];

  return (
    <CsSection id="edgestates">
      <CsSectionHeader
        label="Deliver — Edge States"
        title={<>Designed for what happens <em style={{ fontStyle:"italic" }}>when things go wrong.</em></>}
        sub="Most screens only show the happy path. These are the states that decide whether an app feels reliable or fragile."
      />

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:16 }} className="csl-reveal">
        {edgeStates.map((state) => (
          <div key={state.label} style={{ background:"#fff", borderRadius:18, overflow:"hidden", boxShadow:"0 4px 14px rgba(0,0,0,0.04)" }}>
            <CsImg label={state.label} aspect="9/16" icon={state.icon} sub={state.sub} />
            <div style={{ padding:"16px 18px" }}>
              <p style={{ fontSize:"0.76rem", fontWeight:600, color:"#111827", marginBottom:5 }}>{state.label}</p>
              <p style={{ fontSize:"0.72rem", color:"#6B7280", lineHeight:1.6 }}>{state.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="csl-text csl-reveal rd1" style={{ marginTop:20, color:"#9CA3AF", fontStyle:"italic" }}>
        Edge states were designed alongside happy-path screens — not added at the end. Each state has a corresponding Figma component with all variants in the handoff library.
      </p>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  ACCESSIBILITY
───────────────────────────────────────────────────────────────────── */
function AccessibilitySection() {
  return (
    <CsSection id="accessibility">
      <CsSectionHeader
        label="Accessibility & Inclusivity"
        title={<>Designed for <em style={{ fontStyle:"italic" }}>everyone to use.</em></>}
        sub="BibloFi was designed to be inclusive and accessible for all users — from day one, not as an afterthought."
      />

      <div className="csl-card-grid csl-reveal">
        {accessibilityCards.map((card) => (
          <div key={card.title} style={{ background:"#fff", borderRadius:18, padding:"22px 20px", boxShadow:"0 4px 14px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize:"1.5rem", marginBottom:12 }}>{card.icon}</div>
            <h3 style={{ fontSize:"0.92rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{card.title}</h3>
            <p style={{ fontSize:"0.76rem", color:"#6B7280", lineHeight:1.6, marginBottom:12 }}>{card.desc}</p>
            <span style={{ fontSize:"0.68rem", fontWeight:600, background:A5, color:A, padding:"4px 13px", borderRadius:100 }}>{card.badge}</span>
          </div>
        ))}
      </div>

      <p className="csl-text csl-reveal rd1" style={{ marginTop:20, color:"#9CA3AF", fontStyle:"italic" }}>
        Design system built on iOS 18 UI Kit (Figma Community) and Apple&apos;s Human Interface Guidelines — ensuring the app felt native and familiar to iOS users.
      </p>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §11  USABILITY TESTING
───────────────────────────────────────────────────────────────────── */
function TestingSection() {
  return (
    <CsSection id="testing">
      <CsSectionHeader
        label="Usability Testing"
        title={<>20 real users. <em style={{ fontStyle:"italic" }}>Three core tasks.</em></>}
        sub="I conducted usability testing with 20 participants to validate the design before final delivery. Each participant attempted three core tasks without any guidance."
      />

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }} className="csl-reveal">
        {testResults.map((result) => (
          <div key={result.task} style={{ background:"#fff", borderRadius:18, padding:"22px 18px", boxShadow:"0 4px 14px rgba(0,0,0,0.04)", textAlign:"center" }}>
            <p style={{ fontSize:"0.72rem", color:"#6B7280", marginBottom:14, lineHeight:1.5 }}>{result.task}</p>
            <p style={{ fontSize:"2rem", fontWeight:800, color:A, lineHeight:1 }}>{result.fraction}</p>
            <p style={{ fontSize:"0.7rem", fontWeight:600, color:"#111827", marginTop:4 }}>{result.label}</p>
            <p style={{ fontSize:"0.68rem", color:"#9CA3AF", marginTop:6, lineHeight:1.5 }}>{result.note}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ marginTop:20, background:A5, borderRadius:16, padding:"20px 24px", textAlign:"center" }}>
        <p style={{ fontSize:"2.5rem", fontWeight:800, color:A, lineHeight:1 }}>90%</p>
        <p style={{ fontSize:"0.8rem", color:AMed, marginTop:6 }}>
          Overall task completion rate across all 3 tasks · 20 participants
        </p>
        <p style={{ fontSize:"0.72rem", color:AMut, marginTop:6 }}>
          Nielsen Norman Group benchmarks average task completion for well-designed consumer apps at 78% — BibloFi tested 12 points above that on a first prototype.
        </p>
      </div>

      <p className="csl-text csl-reveal rd2" style={{ marginTop:20 }}>
        Key improvement from testing: secondary navigation was unclear in early iterations. We restructured the tab bar and improved labelling — confirmed positively in final feedback sessions.
      </p>

      {/* Post-delivery honest caveat */}
      <div className="csl-callout csl-reveal rd2" style={{ marginTop:20 }}>
        <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Post-delivery context</p>
        <p style={{ fontSize:"0.96rem", color:"#374151", lineHeight:1.75 }}>
          The Figma specs and design system were handed off to the iOS engineering team at internship end. Post-launch adoption data wasn&apos;t accessible to me after the internship concluded. These testing results represent the final pre-handoff validation — not production metrics. Instrumenting for post-launch measurement is something I&apos;d build into the brief from day one next time.
        </p>
      </div>

      {/* Oreo mascot */}
      <div className="csl-reveal rd2" style={{
        marginTop:28, background:"#fff", borderRadius:20, padding:"24px",
        boxShadow:"0 4px 20px rgba(0,0,0,0.05)", display:"flex", gap:20, alignItems:"center",
      }}>
        <div style={{ fontSize:"2.5rem", flexShrink:0 }}>🐾</div>
        <div>
          <h3 style={{ fontSize:"0.92rem", fontWeight:700, color:"#111827", marginBottom:8 }}>Meet Oreo — A mascot with personality</h3>
          <p style={{ fontSize:"0.78rem", color:"#6B7280", lineHeight:1.65 }}>
            Every great app has a soul. Oreo is the character we created to give BibloFi a unique theme and warmth — a small detail that made the experience feel human. Good UX isn&apos;t just about flows and components. It&apos;s about the moments that make users smile.
          </p>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §12  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="What I Learned"
        title={<>Growing as a designer <em style={{ fontStyle:"italic" }}>and a leader.</em></>}
      />

      {/* What this didn't fully solve */}
      <div className="csl-callout csl-reveal" style={{ marginBottom:28 }}>
        <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What this didn&apos;t fully solve</p>
        <p style={{ fontSize:"0.96rem", color:"#374151", lineHeight:1.75 }}>
          BibloFi solves the student&apos;s experience. It doesn&apos;t solve the librarian&apos;s. Every booking, every fine, every availability update still requires manual work on the librarian&apos;s side. The admin panel was de-scoped in week 3 — it&apos;s the most important thing missing from what was delivered, and it&apos;s what I&apos;d prioritise in Phase 2.
        </p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {learnings.map((learning) => (
          <div key={learning.num} className="csl-reveal" style={{
            display:"flex", gap:20,
            background: learning.num === "05" ? A5 : "#fff",
            border:     learning.num === "05" ? `1.5px solid ${A2}` : "none",
            borderRadius:18, padding:"22px", boxShadow:"0 4px 14px rgba(0,0,0,0.04)",
          }}>
            <p style={{ fontSize:"0.6rem", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", flexShrink:0, marginTop:2 }}>{learning.num}</p>
            <div>
              <h3 style={{ fontSize:"0.92rem", fontWeight:700, color:"#111827", marginBottom:6 }}>{learning.title}</h3>
              <p style={{ fontSize:"0.78rem", color:"#6B7280", lineHeight:1.7 }}>{learning.text}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="/projects/ecotrack" className="csl-next csl-reveal" style={{ marginTop:56 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">EcoTrack — Carbon Footprint Tracking</p>
        </div>
        <span className="csl-next-arrow">→</span>
      </a>
    </CsSection>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════════════════ */
export function BiblofiCaseStudy() {
  return (
    <CaseStudyPage
      theme="biblo"
      title="BibloFi"
      tag="iOS App · Library"
      tocItems={TOC_ITEMS}
      metaRows={META_ROWS}
      hero={<BibloHero />}
    >
      <OverviewSection />
      <ProcessSection />
      <ResearchSection />
      <InsightsSection />
      <WireframesSection />
      <LoFiWireframesSection />
      <ConstraintsSection />
      <ScreensSection />
      <FinalScreensSection />
      <EdgeStatesSection />
      <AccessibilitySection />
      <TestingSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
