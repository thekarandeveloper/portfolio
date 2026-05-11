"use client";

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
const A    = "#C8703A";   // accent
const A5   = "#FEF4E8";   // lightest tint
const A2   = "#FDE8CC";   // mid tint
const AMut = "#AA7845";   // muted accent text
const ADrk = "#3D2010";   // dark text on tinted bg
const AMed = "#8B5A35";   // medium warm text

/* ─────────────────────────────────────────────────────────────────────
   TOC + META
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",      label: "Overview"          },
  { id: "process",       label: "Design Process"    },
  { id: "research",      label: "Research"          },
  { id: "insights",      label: "Personas"          },
  { id: "wireframes",    label: "Rough Sketches"    },
  { id: "lofi",          label: "Wireframes"        },
  { id: "screens",       label: "Key Features"      },
  { id: "final",         label: "Final Screens"     },
  { id: "accessibility", label: "Accessibility"     },
  { id: "testing",       label: "Usability Testing" },
  { id: "learnings",     label: "Learnings"         },
];

const META_ROWS = [
  { label: "Role",     value: "Lead UX Designer"  },
  { label: "Duration", value: "1 Month"           },
  { label: "Platform", value: "iOS App"           },
  { label: "Tools",    value: "Figma · FigJam"    },
  { label: "Context",  value: "Infosys Internship" },
];

/* ─────────────────────────────────────────────────────────────────────
   HERO PHONE MOCKUP
───────────────────────────────────────────────────────────────────── */
const HERO_SCREENS = [
  { src:"/Image/Biblofi/hero1.png",      alt:"BibloFi screen 1" },
  { src:"/Image/Biblofi/smart-book.png", alt:"BibloFi screen 2" },
  { src:"/Image/Biblofi/hero2.png",      alt:"BibloFi screen 3" },
];

function PhoneMockupScene() {
  return (
    <div style={{
      position:"relative", width:"100%", height:500,
      display:"flex", alignItems:"center", justifyContent:"center",
    }}>
      {/* Ambient glow */}
      <div style={{
        position:"absolute", width:300, height:300, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(200,112,58,0.18) 0%, transparent 70%)",
        animation:"bibloGlowPulse 5s ease-in-out infinite",
        pointerEvents:"none",
      }} />

      {/* iPhone frame — single, fixed position */}
      <div className="biblo-phone-wrap">
        {/* Dynamic island */}
        <div style={{
          position:"absolute", top:14, left:"50%", transform:"translateX(-50%)",
          width:88, height:26, background:"#0A0A0A", borderRadius:20, zIndex:10,
        }} />

        {/* Cycling screens — all stacked, fade in/out in sequence */}
        <div style={{ position:"absolute", inset:0, borderRadius:42, overflow:"hidden" }}>
          {HERO_SCREENS.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={420}
              height={908}
              style={{
                position:"absolute", inset:0,
                width:"100%", height:"100%", objectFit:"cover", display:"block",
                opacity:0,
                animation:`bibloScreenCycle ${HERO_SCREENS.length * 3}s ease-in-out infinite`,
                animationDelay:`${i * 3}s`,
              }}
            />
          ))}
          {/* Glass sheen always on top */}
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
            borderRadius:42, pointerEvents:"none", zIndex:5,
          }} />
        </div>

        {/* Side buttons */}
        <div style={{ position:"absolute", right:-4, top:110, width:4, height:64, background:"#2A2A2A", borderRadius:"0 3px 3px 0" }} />
        <div style={{ position:"absolute", left:-4,  top:88,  width:4, height:44, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
        <div style={{ position:"absolute", left:-4,  top:142, width:4, height:44, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
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
        {/* Left */}
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Infosys Internship · iOS App</div>
          <h1 className="csl-hero-title">
            BibloFi —<br />
            <em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.65)" }}>Where Convenience</em>
            <br />Meets Curiosity
          </h1>
          <p className="csl-hero-desc">
            Redesigning the library experience for digital-first students — from browsing to booking, everything just a tap away.
          </p>
          <div className="csl-hero-chips">
            {bibloMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>{item.label}: {item.value}</span>
            ))}
          </div>
        </div>
        {/* Right — phone mockup */}
        <div className="csl-hero-right">
          <PhoneMockupScene />
        </div>
      </div>

      {/* Stats strip */}
      <div className="csl-hero-stats">
        {[
          { val:"20",    label:"Usability test users" },
          { val:"90%",   label:"Task completion rate" },
          { val:"7",     label:"User flows designed"  },
          { val:"1 mo",  label:"Project duration"     },
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
        title={<>A library app built <em style={{ fontStyle:"italic" }}>for how students actually live.</em></>}
      />

      <div className="csl-card-2col csl-reveal">
        <div>
          <p className="csl-text">
            BibloFi is a mobile app designed to simplify how library members access books and services. From browsing by genre to scanning for availability, issuing books, and booking seats — everything is just a tap away.
          </p>
          <p className="csl-text">
            This project was developed in one month during my internship at Infosys. I led the design of the entire member experience, focusing on creating an interface that feels effortless, modern, and human.
          </p>
          <div className="csl-tags csl-reveal rd1">
            {bibloRoleChips.map((chip) => (
              <span className="csl-tag" key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div>
          {/* Team box */}
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
          {/* Goal box */}
          <div style={{ background:A5, borderRadius:14, padding:"16px 18px" }}>
            <p style={{ fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Project Goal</p>
            <p style={{ fontSize:"0.78rem", color:ADrk, lineHeight:1.65 }}>
              &quot;Create a seamless, feature-rich library app that empowers members to discover, reserve, and borrow books efficiently while reducing friction.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Team photo */}
      <div className="csl-reveal rd2" style={{ marginTop:28, borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/team-infosys.png"
          alt="Internship team at Infosys"
          width={1200}
          height={560}
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
          width={1200}
          height={560}
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
        I conducted surveys, contextual interviews, and observation sessions to capture real-life experiences of both library members and librarians. The goal: understand the recurring frustrations that disrupt the library experience.
      </p>
      <p className="csl-text csl-reveal rd1">
        Key finding: the friction wasn&apos;t in the library itself — it was in the invisible overhead. Not knowing if a book was available before visiting. Not being able to reserve a seat. No reminders for due dates. Digital tools existed, but none were designed with student workflows in mind.
      </p>

      <div className="csl-reveal rd2" style={{ marginBottom:28 }}>
        <CsImg label="Research methodology — surveys, interviews & observation" height={340} icon="🔍" sub="Place /Image/Biblofi/method.png here" />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14 }} className="csl-reveal rd2">
        {researchStats.map((stat) => (
          <div key={stat.label} style={{ background:"#fff", borderRadius:16, padding:"22px 16px", textAlign:"center", boxShadow:"0 4px 14px rgba(0,0,0,0.04)" }}>
            <p style={{ fontSize:"1.6rem", fontWeight:800, color:A, lineHeight:1, marginBottom:6 }}>{stat.value}</p>
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
   §05  WIREFRAMES
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
          width={1400}
          height={900}
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
          width={1400}
          height={900}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  KEY FEATURES
───────────────────────────────────────────────────────────────────── */
function ScreensSection() {
  return (
    <CsSection id="screens">
      <CsSectionHeader
        label="Deliver — Key Features"
        title={<>Five features that make <em style={{ fontStyle:"italic" }}>library visits optional.</em></>}
      />

      {bibloFeatures.map((feature) => (
        <div key={feature.title} className="csl-reveal" style={{
          background:"#fff", borderRadius:20, padding:"28px 24px",
          boxShadow:"0 4px 20px rgba(0,0,0,0.05)", marginBottom:20,
          display:"grid", gridTemplateColumns:"1.8fr 1fr", gap:32, alignItems:"center",
        }}>
          <div style={{ order: feature.reverse ? 2 : 1 }}>
            <p style={{ fontSize:"0.62rem", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", marginBottom:6 }}>{feature.num}</p>
            <p style={{ fontSize:"0.68rem", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:AMut, marginBottom:10 }}>{feature.tag}</p>
            <h3 style={{ fontSize:"1.05rem", fontWeight:800, color:"#111827", marginBottom:12 }}>{feature.title}</h3>
            {feature.desc.map((line) => (
              <p key={line} className="csl-text">{line}</p>
            ))}
            <span style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:"0.72rem", fontWeight:600, color:A, background:A5, padding:"5px 12px", borderRadius:100, marginTop:10 }}>
              {feature.impact}
            </span>
          </div>
          <div style={{ order: feature.reverse ? 1 : 2, display:"flex", justifyContent:"center" }}>
            <Image
              src={feature.img}
              alt={feature.title}
              width={240}
              height={427}
              style={{ width:"100%", maxWidth:220, height:"auto", display:"block", borderRadius:20, boxShadow:"0 8px 32px rgba(0,0,0,0.12)" }}
            />
          </div>
        </div>
      ))}
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  FINAL SCREENS
───────────────────────────────────────────────────────────────────── */
function FinalScreensSection() {
  const rows = [
    [
      { src:"/Image/Biblofi/final1.png", label:"Onboarding" },
      { src:"/Image/Biblofi/final2.png", label:"Home" },
      { src:"/Image/Biblofi/final3.png", label:"Browse" },
    ],
    [
      { src:"/Image/Biblofi/final4.png", label:"Book Detail" },
      { src:"/Image/Biblofi/final5.png", label:"Search" },
      { src:"/Image/Biblofi/final6.png", label:"Scan" },
    ],
    [
      { src:"/Image/Biblofi/final7.png", label:"Seat Booking" },
      { src:"/Image/Biblofi/final8.png", label:"My Books" },
      { src:"/Image/Biblofi/final9.png", label:"Profile" },
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
              <div style={{ width:"100%", borderRadius:20, overflow:"hidden", boxShadow:"0 8px 28px rgba(0,0,0,0.1)" }}>
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
   §08  ACCESSIBILITY
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
            <h3 style={{ fontSize:"0.86rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{card.title}</h3>
            <p style={{ fontSize:"0.76rem", color:"#6B7280", lineHeight:1.6, marginBottom:12 }}>{card.desc}</p>
            <span style={{ fontSize:"0.62rem", fontWeight:700, background:A5, color:A, padding:"3px 10px", borderRadius:100 }}>{card.badge}</span>
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
   §09  USABILITY TESTING
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
      </div>

      <p className="csl-text csl-reveal rd2" style={{ marginTop:20 }}>
        Key improvement from testing: secondary navigation was unclear in early iterations. We restructured the tab bar and improved labelling — which was reflected positively in final feedback sessions.
      </p>

      {/* Oreo mascot */}
      <div className="csl-reveal rd2" style={{
        marginTop:28, background:"#fff", borderRadius:20, padding:"24px",
        boxShadow:"0 4px 20px rgba(0,0,0,0.05)", display:"flex", gap:20, alignItems:"center",
      }}>
        <div style={{ fontSize:"2.5rem", flexShrink:0 }}>🐾</div>
        <div>
          <h3 style={{ fontSize:"0.92rem", fontWeight:700, color:"#111827", marginBottom:8 }}>Meet Oreo — A mascot with personality</h3>
          <p style={{ fontSize:"0.78rem", color:"#6B7280", lineHeight:1.65 }}>
            Every great app has a soul. Oreo is the character we created to give BibloFi a unique theme and personality — a small detail that made the experience feel warm, playful, and human. Good UX isn&apos;t just about flows and components. It&apos;s about the moments that make users smile.
          </p>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="What I Learned"
        title={<>Growing as a designer <em style={{ fontStyle:"italic" }}>and a leader.</em></>}
      />

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {learnings.map((learning) => (
          <div key={learning.num} className="csl-reveal" style={{
            display:"flex", gap:20, background:"#fff",
            borderRadius:18, padding:"22px", boxShadow:"0 4px 14px rgba(0,0,0,0.04)",
          }}>
            <p style={{ fontSize:"0.6rem", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", flexShrink:0, marginTop:2 }}>{learning.num}</p>
            <div>
              <h3 style={{ fontSize:"0.88rem", fontWeight:700, color:"#111827", marginBottom:6 }}>{learning.title}</h3>
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
      <ScreensSection />
      <FinalScreensSection />
      <AccessibilitySection />
      <TestingSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
