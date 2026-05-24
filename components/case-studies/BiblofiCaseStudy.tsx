"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CaseStudyPage, CsSection, CsSectionHeader, CsImg } from "./CaseStudyLayout";
import {
  accessibilityCards,
  bibloFeatures,
  bibloMeta,
  bibloRoleChips,
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

const FINAL = "/Image/Biblofi/final%20screens%20-%20biblofi";

/* ─────────────────────────────────────────────────────────────────────
   TOC + META
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",      label: "Overview"            },
  { id: "process",       label: "Design Process"      },
  { id: "research",      label: "Research"            },
  { id: "insights",      label: "Personas"            },
  { id: "journey",       label: "User Journey Map"    },
  { id: "wireframes",    label: "Rough Sketches"      },
  { id: "lofi",          label: "Wireframes"          },
  { id: "constraints",   label: "Constraints"         },
  { id: "screens",       label: "Key Features"        },
  { id: "final",         label: "Final Screens"       },
  { id: "accessibility", label: "Accessibility"       },
  { id: "testing",       label: "Usability Testing"   },
  { id: "learnings",     label: "Learnings"           },
  { id: "experience",    label: "Experience"          },
];

const META_ROWS = [
  { label: "Role",     value: "Lead UX Designer"   },
  { label: "Duration", value: "1 Month"            },
  { label: "Platform", value: "iOS App"            },
  { label: "Tools",    value: "Figma · FigJam"     },
  { label: "Context",  value: "Infosys Internship" },
];

/* ─────────────────────────────────────────────────────────────────────
   INTERNSHIP PHOTO STACK
───────────────────────────────────────────────────────────────────── */
function PhotoStack() {
  const photos = [
    "/Image/Biblofi/team-infosys.png",
    "/Image/Biblofi/use-thum.png",
    "/Image/Biblofi/me.png",
  ];
  const [active, setActive] = useState(0);
  const rotations = [-4, 0, 4];
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
      <div
        style={{ position:"relative", width:260, height:180, cursor:"pointer" }}
        onClick={() => setActive((active + 1) % photos.length)}
      >
        {photos.map((photo, i) => {
          const offset = (i - active + photos.length) % photos.length;
          return (
            <div key={photo} style={{
              position:"absolute", inset:0,
              borderRadius:14, overflow:"hidden",
              boxShadow:"0 8px 24px rgba(0,0,0,0.18)",
              transform:`rotate(${rotations[offset]}deg) translateY(${offset * 10}px)`,
              zIndex: photos.length - offset,
              opacity: offset === 0 ? 1 : offset === 1 ? 0.75 : 0.5,
              transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}>
              <Image src={photo} alt="Internship" width={520} height={360}
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            </div>
          );
        })}
      </div>
      <p style={{ fontSize:"13px", color:"#9CA3AF", letterSpacing:"0.06em" }}>
        Click to browse · {active + 1}/{photos.length}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO PHONE
───────────────────────────────────────────────────────────────────── */
function BibloPhone({ src, alt, w, tilt }: { src: string; alt: string; w: number; tilt: string }) {
  return (
    <div style={{
      width: w, flexShrink: 0,
      transform: `rotate(${tilt})`,
      filter: "drop-shadow(0 20px 44px rgba(0,0,0,0.14)) drop-shadow(0 4px 10px rgba(0,0,0,0.07))",
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

function PhoneMockupScene() {
  return (
    <div style={{
      position:"relative", width:"100%",
      display:"flex", alignItems:"center", justifyContent:"center",
      gap:16, padding:"64px 32px",
      overflow:"visible",
    }}>
      {/* ambient glow */}
      <div style={{
        position:"absolute", width:320, height:320, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(200,112,58,0.18) 0%, transparent 70%)",
        animation:"bibloGlowPulse 5s ease-in-out infinite",
        pointerEvents:"none", zIndex:0,
      }} />
      <div style={{ transform:"translateY(28px)", opacity:0.88, zIndex:1 }}>
        <BibloPhone src="/Image/Biblofi/hero1.png" alt="BibloFi screen" w={148} tilt="-6deg" />
      </div>
      <div className="biblo-phone-wrap" style={{ zIndex:3 }}>
        <BibloPhone src="/Image/Biblofi/smart-book.png" alt="BibloFi: Smart Book Discovery" w={210} tilt="0deg" />
      </div>
      <div style={{ transform:"translateY(-20px)", opacity:0.88, zIndex:2 }}>
        <BibloPhone src="/Image/Biblofi/hero2.png" alt="BibloFi screen" w={148} tilt="5deg" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function BibloHero() {
  return (
    <div className="csl-hero csl-hero--light" style={{ overflow:"visible" }}>
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize:"28px 28px",
      }} />
      <div className="csl-hero-glow" />
      <div className="csl-hero-inner">
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Infosys Internship · iOS App</div>
          <h1 className="csl-hero-title">
            BibloFi<br />
            <em style={{ fontStyle:"italic", color:"rgba(200,112,58,0.7)" }}>the library hadn&apos;t changed.</em>
            <br />The students had.
          </h1>
          <p className="csl-hero-desc">
            Infosys asked me to design a library app from scratch. What I found wasn&apos;t a missing feature; it was a system that hadn&apos;t considered the student at all.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:16 }}>
            {bibloMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>{item.value}</span>
            ))}
          </div>
        </div>
        <div className="csl-hero-right">
          <PhoneMockupScene />
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
        title={<>A library built for 1995, <em style={{ fontStyle:"italic" }}>used by students in 2024.</em></>}
      />

      <div className="csl-card-2col csl-reveal">
        <div>
          <p className="csl-text">
            BibloFi was a 1-month Infosys internship project with weekly sprint deliveries. Each sprint had to ship; no room to over-iterate. We were handed an SRS document outlining every required feature, and the task was to turn those requirements into an experience that actually felt good on a real phone.
          </p>
          <p className="csl-text">
            The context was the Infosys Mysore campus library: an immersive, well-stocked physical space running entirely on manual processes. Students had to physically visit to check availability, librarians handled everything at the counter, and there was no digital layer at all.
          </p>
          <div className="csl-tags csl-reveal rd1">
            {bibloRoleChips.map((chip) => (
              <span className="csl-tag" key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        <div className="csl-callout csl-reveal rd1" style={{ margin:0, alignSelf:"start" }}>
          <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>The Brief</p>
          <p style={{ fontSize:"1rem", color:"#374151", lineHeight:1.65, marginBottom:16 }}>
            Design the complete member experience of a library app for Mysore campus: onboarding, book discovery, seat booking, and fine tracking, in 4 weeks.
          </p>
          <div style={{ borderTop:`1px solid ${A2}`, paddingTop:12 }}>
            <p style={{ fontSize:"13px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:"#9CA3AF", marginBottom:6 }}>Team</p>
            <p style={{ fontSize:"0.95rem", color:"#374151" }}>1 designer (me) · 10 iOS engineers · 1 product owner</p>
          </div>
        </div>
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

      <div className="csl-reveal" style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
        <div style={{ width:28, height:28, background:A5, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>💡</div>
        <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.6 }}>
          Inspired by the <strong style={{ color:A }}>Double Diamond theory</strong>: diverge to understand the problem fully, converge to a focused solution. Applied to a 4-week sprint model, one diamond per two weeks.
        </p>
      </div>

      <div className="csl-reveal" style={{ marginBottom:32 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:0, marginBottom:28, position:"relative" }}>
          <div style={{
            position:"absolute", top:28, left:"12.5%", right:"12.5%", height:2,
            background:`linear-gradient(90deg, ${A2}, ${A}, ${A}, ${A2})`,
            zIndex:0,
          }} />
          {[
            { icon:"🔍", week:"Week 1", phase:"Discover", color:A, tasks:["38 student surveys","8 in-depth interviews","3 library observations"] },
            { icon:"📌", week:"Week 2", phase:"Define",   color:"#6366F1", tasks:["2 user personas","Journey mapping","Problem statement"] },
            { icon:"✏️", week:"Week 3", phase:"Develop",  color:"#10B981", tasks:["Rough sketches","Lo-fi wireframes","7 user flows"] },
            { icon:"✅", week:"Week 4", phase:"Deliver",  color:A, tasks:["Hi-fi designs","Design system","Usability testing"] },
          ].map((s, i) => (
            <div key={s.phase} style={{ display:"flex", flexDirection:"column", alignItems:"center", position:"relative", zIndex:1 }}>
              <div style={{
                width:56, height:56, borderRadius:16, background:s.color,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"1.5rem", boxShadow:`0 4px 16px ${s.color}44`,
                transform: i === 1 || i === 2 ? "scale(1.1)" : "scale(1)",
              }}>
                {s.icon}
              </div>
              <p style={{ fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:"#9CA3AF", marginTop:10, marginBottom:2 }}>{s.week}</p>
              <p style={{ fontSize:"0.95rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{s.phase}</p>
              {s.tasks.map((t) => (
                <p key={t} style={{ fontSize:"12px", color:"#6B7280", textAlign:"center", lineHeight:1.5 }}>· {t}</p>
              ))}
            </div>
          ))}
        </div>

        <div style={{ background:A5, borderRadius:12, padding:"14px 20px", display:"flex", gap:12, alignItems:"center" }}>
          <span style={{ fontSize:"1.2rem" }}>⚡</span>
          <p style={{ fontSize:"0.93rem", color:ADrk, lineHeight:1.6 }}>
            <strong>Tight feedback loops:</strong> every Friday was a sprint review with the dev team. If something didn&apos;t hold up, it was cut before Monday. This pace forced early decisions and prevented over-design.
          </p>
        </div>
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
        label="Discover: Research"
        title={<>Understanding how students <em style={{ fontStyle:"italic" }}>actually use libraries.</em></>}
      />

      <p className="csl-text csl-reveal">
        I surveyed 38 students and conducted 8 in-depth interviews across two campuses. Three observation sessions inside the library revealed behaviours that surveys alone would have missed. I also spent time with 2 librarians to understand the other side of every pain point students described.
      </p>
      <p className="csl-text csl-reveal rd1">
        Key finding: the friction wasn&apos;t in the library itself, it was in the invisible overhead. Not knowing if a book was available before visiting. Not being able to reserve a seat. No reminders for due dates. The failed visit, not the failed search, was the core pain.
      </p>

      {/* 5W 1H Framework visual */}
      <div className="csl-reveal rd1" style={{ marginBottom:32 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:20 }}>Research framework: 5W 1H</p>
        <div style={{ borderRadius:16, overflow:"hidden" }}>
          <Image
            src="/Image/Biblofi/method.png"
            alt="5W1H research framework"
            width={1200} height={680}
            style={{ width:"100%", height:"auto", display:"block" }}
          />
        </div>
      </div>

      {/* What surprised us */}
      <div className="csl-callout csl-reveal rd1" style={{ marginBottom:28 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What surprised us</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          We expected the main problem to be the book catalogue. It wasn&apos;t. The catalogue was fine. The problem was <strong>uncertainty before arriving</strong>: students couldn&apos;t know if a book was available or a seat was free without physically going there first.
        </p>
      </div>

      <div className="csl-reveal rd2" style={{ marginBottom:28, borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/research.png"
          alt="Research methodology: surveys, interviews and observation"
          width={1200} height={680}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>

      {/* User voice */}
      <div className="csl-reveal rd2" style={{
        padding:"24px 0 24px 24px",
        marginBottom:28,
        borderLeft:`3px solid ${A}`,
      }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:A, marginBottom:12 }}>From the interviews</p>
        <p style={{ fontSize:"1rem", color:"#374151", lineHeight:1.8, fontStyle:"italic" }}>
          &quot;I walked 20 minutes to the library last month, and the book wasn&apos;t there. I&apos;d already planned to sit in my usual spot, but of course you can&apos;t actually reserve one. I just went home. I haven&apos;t been back since.&quot;
        </p>
        <p style={{ fontSize:"15px", color:"#9CA3AF", marginTop:10 }}>B.Tech student, 3rd year · Interview participant</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14 }} className="csl-reveal rd2">
        {researchStats.map((stat) => (
          <div key={stat.label} style={{ padding:"22px 16px", textAlign:"center" }}>
            <p style={{ fontSize:"2rem", fontWeight:800, color:A, lineHeight:1, marginBottom:6 }}>{stat.value}</p>
            <p style={{ fontSize:"15px", color:"#6B7280", textTransform:"uppercase", letterSpacing:"0.06em" }}>{stat.label}</p>
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
        label="Define: Personas"
        title={<>Two students, two stories, <em style={{ fontStyle:"italic" }}>one shared frustration.</em></>}
        sub="Based on real research insights, I created two fictional personas representing the core user archetypes."
      />

      <div className="csl-callout csl-reveal" style={{ marginBottom:32 }}>
        &quot;Despite living in a digital-first world, library visits remain stuck in the past, long queues, no way to check book availability, and zero flexibility in planning. The result? A frustrating, disconnected experience that fails modern users.&quot;
        <p style={{ fontSize:"15px", color:"#9CA3AF", marginTop:10, fontStyle:"normal" }}>Composite insight from 8 student interviews</p>
      </div>

      <div className="csl-persona-grid csl-reveal rd1">
        {personas.map((persona) => (
          <div className="csl-persona-card" key={persona.name}>
            <div className="csl-persona-img" style={{ background:"transparent", border:"none", paddingTop:8 }}>
              <span style={{ fontSize:"5rem", lineHeight:1 }}>{persona.avatar}</span>
            </div>
            <div className="csl-persona-body">
              <p className="csl-persona-name">{persona.name}</p>
              <p className="csl-persona-tag">{persona.meta}</p>
              <p style={{ fontSize:"15px", fontWeight:700, color:A, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8, marginTop:12 }}>Goals</p>
              {persona.goals.map((goal) => (
                <div key={goal} style={{ display:"flex", gap:8, marginBottom:5, fontSize:"1rem", color:"#374151" }}>
                  <span style={{ color:"#10B981" }}>✓</span>{goal}
                </div>
              ))}
              <p style={{ fontSize:"15px", fontWeight:700, color:"#EF4444", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8, marginTop:12 }}>Pain Points</p>
              {persona.pains.map((pain) => (
                <div key={pain} style={{ display:"flex", gap:8, marginBottom:5, fontSize:"1rem", color:"#374151" }}>
                  <span style={{ color:"#EF4444" }}>✕</span>{pain}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* User Journey Mapping */}
      <div id="journey" className="csl-reveal rd2" style={{ marginTop:40 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>User Journey Mapping</p>
        <h3 style={{ fontSize:"1.2rem", fontWeight:700, color:"#111827", marginBottom:20 }}>
          Mapping the full emotional arc, <em style={{ fontStyle:"italic" }}>from intent to frustration.</em>
        </h3>
        <div style={{ borderRadius:16, overflow:"hidden" }}>
          <Image
            src="/Image/Biblofi/research2.png"
            alt="User journey map showing student experience with the library"
            width={1200} height={680}
            style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
          />
        </div>
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
        label="Develop: Wireframes"
        title={<>From rough sketches <em style={{ fontStyle:"italic" }}>to structured flows.</em></>}
        sub="The brainstorming started in WhatsApp chats and rough sketches, raw ideas translated into structured lo-fi wireframes in FigJam."
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
        label="Develop: Lo-Fi Wireframes"
        title={<>Rough ideas turned into <em style={{ fontStyle:"italic" }}>structured screens.</em></>}
        sub="Each flow was mapped out screen by screen, laying the foundation before moving into high-fidelity design."
      />

      <div className="csl-reveal" style={{ borderRadius:16, overflow:"hidden" }}>
        <Image
          src="/Image/Biblofi/wireframe.png"
          alt="Lo-fi wireframes"
          width={1400} height={900}
          style={{ width:"100%", height:"auto", display:"block", borderRadius:16 }}
        />
      </div>

      <div className="csl-callout csl-reveal rd1" style={{ marginTop:24 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What the lo-fi round revealed</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          Two structural problems surfaced immediately. The bottom tab bar had five items, one too many for comfortable one-handed use. The &apos;Issue Book&apos; action was buried three taps deep, flagged in the first five minutes of testing. Both were fixed before opening Figma in hi-fi: tabs dropped to four, and issuing a book became a persistent action from the catalogue view.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §06  CONSTRAINTS & TRADEOFFS
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
      desc:  "No custom navigation patterns. Native components only, which eliminated several interaction ideas that would have required bespoke animation work from the dev team.",
    },
    {
      icon:  "⚙️",
      title: "No real-time push backend",
      desc:  "Push notification infrastructure wasn't available in this sprint. The seat waitlist idea was cut; a booking-only model became the viable path.",
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
        label="Develop: Constraints & Tradeoffs"
        title={<>What we worked within, <em style={{ fontStyle:"italic" }}>and what we chose to cut.</em></>}
        sub="Real projects have real limits. These constraints shaped every major decision in the design, and naming them is part of the work."
      />

      <div className="csl-card-grid csl-reveal">
        {constraints.map((c) => (
          <div key={c.title} style={{ padding:"22px 0" }}>
            <div style={{ fontSize:"3rem", marginBottom:16, lineHeight:1 }}>{c.icon}</div>
            <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{c.title}</h3>
            <p style={{ fontSize:"1rem", color:"#6B7280", lineHeight:1.6 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="csl-callout csl-reveal rd1" style={{ marginTop:20 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>The hardest tradeoff</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          The seat waitlist feature tested better than the booking-only model in concept testing. But the push notification backend would have taken two weeks to build, leaving no time to test the core flows. A well-tested booking flow at handoff is worth more than a partially-built waitlist. The waitlist went into the Phase 2 doc with full specs.
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
        label="Deliver: Key Features"
        title={<>Three features that make <em style={{ fontStyle:"italic" }}>library visits optional.</em></>}
      />

      {/* Visual system explainer */}
      <div className="csl-reveal" style={{
        background:A5, borderRadius:16, padding:"20px 24px", marginBottom:28,
        display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16,
      }}>
        <div>
          <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:6 }}>Colour</p>
          <p style={{ fontSize:"1rem", color:ADrk, lineHeight:1.6 }}>Warm orange-brown (#C8703A), chosen to feel approachable rather than institutional. Libraries should feel inviting, not cold.</p>
        </div>
        <div>
          <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:6 }}>Typography</p>
          <p style={{ fontSize:"1rem", color:ADrk, lineHeight:1.6 }}>iOS 18 system font (SF Pro) throughout, required by HIG and native to every iPhone user. Hierarchy through weight and size, no decorative typefaces.</p>
        </div>
        <div>
          <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:6 }}>Components</p>
          <p style={{ fontSize:"1rem", color:ADrk, lineHeight:1.6 }}>Built on iOS 18 UI Kit (Figma Community). Native sheets, tabs, and cards so the engineering team had direct SwiftUI analogues with no bespoke component work.</p>
        </div>
      </div>

      {bibloFeatures.map((feature) => (
        <div key={feature.title} className="csl-reveal" style={{
          background:"#fff", borderRadius:20, padding:"24px",
          marginBottom:20,
          display:"grid",
          gridTemplateColumns: feature.reverse ? "200px 1fr" : "1fr 200px",
          gap:28, alignItems:"center",
        }}>
          <div style={{ order: feature.reverse ? 2 : 1 }}>
            <p style={{ fontSize:"15px", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", marginBottom:4 }}>{feature.num}</p>
            <p style={{ fontSize:"13px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:AMut, marginBottom:8 }}>{feature.tag}</p>
            <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:10 }}>{feature.title}</h3>
            <p className="csl-text" style={{ marginBottom:12 }}>{feature.desc[0]}</p>

            <div style={{ background:A5, borderRadius:10, padding:"10px 14px", marginBottom:10 }}>
              <p style={{ fontSize:"13px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:AMed, marginBottom:4 }}>Why this approach</p>
              <p style={{ fontSize:"0.93rem", color:ADrk, lineHeight:1.6 }}>{feature.rationale}</p>
            </div>

            <span style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:"13px", fontWeight:600, color:A, background:A5, padding:"4px 12px", borderRadius:100 }}>
              {feature.impact}
            </span>
          </div>
          <div style={{ order: feature.reverse ? 1 : 2, display:"flex", justifyContent:"center", alignItems:"center" }}>
            <Image
              src={feature.img}
              alt={feature.title}
              width={240} height={427}
              style={{ width:"100%", maxWidth:200, height:"auto", display:"block", borderRadius:20 }}
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
  return (
    <CsSection id="final">
      <CsSectionHeader
        label="Deliver: Final Designs"
        title={<>The finished product, <em style={{ fontStyle:"italic" }}>every screen, polished.</em></>}
        sub="From onboarding to book discovery, seat booking to fine tracking, final high-fidelity screens delivered to the Infosys engineering team."
      />

      {/* ── INTRO CARD with glowing BibloFi branding ── */}
      <div className="csl-reveal" style={{
        borderRadius:20, background:"#FFFDF8",
        border:"2px dashed #D4B896",
        padding:"40px 36px", marginBottom:48,
        textAlign:"center",
      }}>
        {/* Glowing branding element */}
        <div style={{ display:"inline-block", position:"relative", marginBottom:12 }}>
          <div style={{
            position:"absolute",
            inset:"-24px -40px",
            background:"radial-gradient(ellipse, rgba(200,112,58,0.28) 0%, rgba(200,112,58,0.10) 50%, transparent 75%)",
            filter:"blur(16px)",
            borderRadius:"50%",
            pointerEvents:"none",
          }} />
          <div style={{
            position:"absolute",
            inset:"-8px -16px",
            background:"radial-gradient(ellipse, rgba(255,220,160,0.35) 0%, transparent 70%)",
            borderRadius:"50%",
            pointerEvents:"none",
          }} />
          <span style={{
            fontFamily:"var(--font-caveat), cursive",
            fontSize:"4.5rem", fontWeight:700, color:A,
            display:"block", lineHeight:1, position:"relative", zIndex:1,
            textShadow:`0 0 32px rgba(200,112,58,0.5), 0 0 64px rgba(200,112,58,0.25), 0 2px 8px rgba(200,112,58,0.2)`,
          }}>BibloFi</span>
        </div>

        <p style={{ fontSize:"1.25rem", fontWeight:700, color:"#111827", marginTop:16, letterSpacing:"-0.01em" }}>
          Complete Library Experience
        </p>
        <p style={{ fontSize:"0.95rem", color:"#6B7280", marginTop:8, maxWidth:480, margin:"8px auto 0", lineHeight:1.7 }}>
          Inspired by the word <strong style={{ color:A }}>Bibliophile</strong>, a person who loves books. Designed to feel like home for every reader on campus.
        </p>
      </div>

      {/* ── ONBOARDING SCREENS as real photos ── */}
      <div style={{ marginBottom:64 }}>
        <div className="csl-reveal rd1" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
          {["ob1.png","ob2.png","ob3.png","ob4.png"].map((img, i) => (
            <div key={img} style={{ borderRadius:20, overflow:"hidden" }}>
              <Image
                src={`${FINAL}/${img}`}
                alt={`Onboarding screen ${i + 1}`}
                width={320} height={693}
                style={{ width:"100%", height:"auto", display:"block" }}
              />
            </div>
          ))}
        </div>
        <p className="csl-reveal rd2" style={{ fontSize:"0.93rem", color:"#9CA3AF", fontStyle:"italic", marginTop:16, textAlign:"center" }}>
          4-screen onboarding flow · swipeable · skippable · no sign-up gate
        </p>
      </div>


      {/* ── FILTERS / GENRE DISCOVERY ── */}
      <div className="csl-reveal rd1" style={{ marginBottom:64 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Genre Discovery</p>
        <h3 style={{ fontSize:"1.2rem", fontWeight:700, color:"#111827", marginBottom:28 }}>
          Tell us what you love to read.
        </h3>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 260px 1fr", gap:32, alignItems:"center" }}>
          {/* Left text */}
          <div style={{ textAlign:"right" }}>
            <div style={{ marginBottom:28 }}>
              <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:6 }}>Pick your genres →</p>
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>Students choose from a rich list of categories: Fiction, Science, History, Technology and more, in a single tap flow.</p>
            </div>
            <div>
              <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:6 }}>One-time personalisation →</p>
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>Set once during onboarding and the app remembers. Genre preferences persist across sessions without any settings menu.</p>
            </div>
          </div>
          {/* Center phone */}
          <div style={{ borderRadius:28, overflow:"hidden" }}>
            <Image
              src={`${FINAL}/filters.png`}
              alt="Genre filters: Tell us what you love to read"
              width={320} height={693}
              style={{ width:"100%", height:"auto", display:"block" }}
            />
          </div>
          {/* Right text */}
          <div>
            <div style={{ marginBottom:28 }}>
              <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:6 }}>← Shapes recommendations</p>
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>The selections directly feed the Home screen&apos;s &quot;Top Picks for You&quot; section; what you choose here is exactly what surfaces there.</p>
            </div>
            <div>
              <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:6 }}>← Reduces discovery friction</p>
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>Instead of browsing a flat catalogue of hundreds of books, students land on a feed already filtered to their interests.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══ HOMEPAGE SPOTLIGHT ══ */}
      <div style={{ marginBottom:80 }}>
        <div className="csl-reveal" style={{ marginBottom:36 }}>
          <span style={{ fontFamily:"var(--font-caveat), cursive", fontSize:"3.8rem", fontWeight:700, color:A, display:"block", lineHeight:1, marginBottom:14 }}>
            HomePage
          </span>
          <p style={{ fontSize:"1rem", color:"#374151", maxWidth:400, lineHeight:1.8 }}>
            The central hub of the app where users can access trending titles, recommendations, and personalized updates.
          </p>
        </div>

        <div className="csl-reveal rd1" style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr 1fr", gap:28, alignItems:"center" }}>
          {/* Left callouts */}
          <div style={{ display:"flex", flexDirection:"column", gap:32 }}>
            {[
              { title:"Search", desc:"Quickly find books using an intelligent, multi-filter search bar." },
              { title:"Event & Promo Card", desc:"Display promotional banners for book fairs, events, or important notices." },
              { title:"Top Picks for You", desc:"Curated book recommendations based on popularity and user preferences." },
              { title:"Membership Card", desc:"Shows your active membership status, renewal info, and ID details." },
            ].map((a) => (
              <div key={a.title} style={{ textAlign:"right", paddingRight:18, borderRight:`2px solid ${A2}` }}>
                <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:4 }}>{a.title} <span style={{ color:A }}>→</span></p>
                <p style={{ fontSize:"0.93rem", color:"#6B7280", lineHeight:1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Center phone */}
          <div style={{ borderRadius:32, overflow:"hidden" }}>
            <Image src={`${FINAL}/home-biblofi.png`} alt="BibloFi home screen" width={320} height={693}
              style={{ width:"100%", height:"auto", display:"block" }} />
          </div>

          {/* Right callouts */}
          <div style={{ display:"flex", flexDirection:"column", gap:48 }}>
            {[
              { title:"Smart Notifications", desc:"Stay updated with the latest alerts, reminders, and library announcements." },
              { title:"Book Scanner Shortcut", desc:"Instantly scan a book's barcode to check its availability or borrow status." },
              { title:"Magazines & Novels", desc:"Discover trending magazines and novel collections in one place." },
            ].map((a) => (
              <div key={a.title} style={{ paddingLeft:18, borderLeft:`2px solid ${A2}` }}>
                <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:4 }}><span style={{ color:A }}>←</span> {a.title}</p>
                <p style={{ fontSize:"0.93rem", color:"#6B7280", lineHeight:1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CATEGORIES & SEARCHING ══ */}
      <div style={{ marginBottom:80 }}>
        <div className="csl-reveal" style={{
          background:"#F5A623", borderRadius:16, padding:"26px 40px", marginBottom:44, textAlign:"center",
        }}>
          <p style={{ fontSize:"1.15rem", fontWeight:700, color:"#fff", lineHeight:1.8 }}>
            With categories spanning authors, genres, and personalized searches, BiblioFi gives me countless ways to explore and find exactly what I love.
          </p>
        </div>

        <div className="csl-reveal rd2" style={{ textAlign:"right" }}>
          <span style={{ fontFamily:"var(--font-caveat), cursive", fontSize:"3.2rem", fontWeight:700, color:A }}>
            Categories &amp; Searching
          </span>
        </div>
      </div>

      {/* ══ SERVICE / SEAT BOOKING ══ */}
      <div style={{ marginBottom:80 }}>
        <div className="csl-reveal" style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:48, alignItems:"start" }}>
          <div style={{ borderRadius:20, overflow:"hidden" }}>
            <Image src={`${FINAL}/seat-booking.png`} alt="Library Services and Seat Booking screens"
              width={900} height={540} style={{ width:"100%", height:"auto", display:"block" }} />
          </div>

          {/* Chat bubbles */}
          <div style={{ display:"flex", flexDirection:"column", gap:16, paddingTop:16 }}>
            {[
              { text:"They can easily reissue books, check upcoming events, and stay updated on any library notifications or reminders.", bg:"#F5A623", fg:"#fff" },
              { text:"This centralized hub reduces friction, saves time, and ensures members never miss an important activity or opportunity within the library.", bg:"#2D2D2D", fg:"#fff" },
              { text:"By combining all essential services in one intuitive interface, the Service tab makes the library experience smooth, organized, and highly user-friendly.", bg:"#F5A623", fg:"#fff" },
            ].map((b, i) => (
              <div key={i} className={`csl-reveal rd${i+1}`}
                style={{ background:b.bg, borderRadius:20, padding:"20px 24px" }}>
                <p style={{ fontSize:"1rem", color:b.fg, lineHeight:1.8 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="csl-reveal rd2" style={{ marginTop:20, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:10 }}>
          <span style={{ fontFamily:"var(--font-caveat), cursive", fontSize:"3.2rem", fontWeight:700, color:A }}>
            Service
          </span>
          <p style={{ fontSize:"1rem", color:"#6B7280", textAlign:"right", maxWidth:560, lineHeight:1.7 }}>
            The Service tab is designed to provide members with seamless control over all their library interactions in one place. From reserving or cancelling study seats to keeping track of active bookings, users have everything at their fingertips.
          </p>
        </div>
      </div>

      {/* ══ PROFILE ══ */}
      <div className="csl-reveal rd1">
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Profile</p>
        <h3 style={{ fontSize:"1.2rem", fontWeight:700, color:"#111827", marginBottom:28 }}>
          Your library, your identity.
        </h3>
        <div style={{ borderRadius:20, overflow:"hidden" }}>
          <Image src={`${FINAL}/profile-biblofi.png`} alt="Profile, Account, and Edit Profile screens"
            width={1200} height={560} style={{ width:"100%", height:"auto", display:"block" }} />
        </div>
      </div>
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
        sub="BibloFi was designed to be inclusive and accessible for all users, from day one, not as an afterthought."
      />

      <div className="csl-card-grid csl-reveal">
        {accessibilityCards.map((card) => (
          <div key={card.title} style={{ padding:"22px 0" }}>
            <div style={{ fontSize:"1.5rem", marginBottom:12 }}>{card.icon}</div>
            <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{card.title}</h3>
            <p style={{ fontSize:"1rem", color:"#6B7280", lineHeight:1.6, marginBottom:12 }}>{card.desc}</p>
            <span style={{ fontSize:"15px", fontWeight:600, background:A5, color:A, padding:"4px 13px", borderRadius:100 }}>{card.badge}</span>
          </div>
        ))}
      </div>

      <p className="csl-text csl-reveal rd1" style={{ marginTop:20, color:"#9CA3AF", fontStyle:"italic" }}>
        Design system built on iOS 18 UI Kit (Figma Community) and Apple&apos;s Human Interface Guidelines, ensuring the app felt native and familiar to iOS users.
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
          <div key={result.task} style={{ padding:"22px 0", textAlign:"center" }}>
            <p style={{ fontSize:"0.96rem", color:"#6B7280", marginBottom:14, lineHeight:1.5 }}>{result.task}</p>
            <p style={{ fontSize:"2rem", fontWeight:800, color:A, lineHeight:1 }}>{result.fraction}</p>
            <p style={{ fontSize:"15px", fontWeight:600, color:"#111827", marginTop:4 }}>{result.label}</p>
            <p style={{ fontSize:"15px", color:"#9CA3AF", marginTop:6, lineHeight:1.5 }}>{result.note}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd1" style={{ marginTop:20, background:A5, borderRadius:16, padding:"20px 24px", textAlign:"center" }}>
        <p style={{ fontSize:"2.5rem", fontWeight:800, color:A, lineHeight:1 }}>90%</p>
        <p style={{ fontSize:"1.05rem", color:AMed, marginTop:6 }}>
          Overall task completion rate across all 3 tasks · 20 participants
        </p>
        <p style={{ fontSize:"0.96rem", color:AMut, marginTop:6 }}>
          Nielsen Norman Group benchmarks average task completion for well-designed consumer apps at 78%, BibloFi tested 12 points above that on a first prototype.
        </p>
      </div>

      <p className="csl-text csl-reveal rd2" style={{ marginTop:20 }}>
        Key improvement from testing: secondary navigation was unclear in early iterations. We restructured the tab bar and improved labelling, confirmed positively in final feedback sessions.
      </p>

      <div className="csl-callout csl-reveal rd2" style={{ marginTop:20 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Post-delivery context</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          The Figma specs and design system were handed off to the iOS engineering team at internship end. Post-launch adoption data wasn&apos;t accessible to me after the internship concluded. These testing results represent the final pre-handoff validation, not production metrics.
        </p>
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §12  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  return (
    <CsSection id="learnings">
      <CsSectionHeader
        label="What I Learned"
        title={<>Quietly growing, <em style={{ fontStyle:"italic" }}>sprint by sprint.</em></>}
      />

      <div className="csl-callout csl-reveal" style={{ marginBottom:32 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What this didn&apos;t fully solve</p>
        <p style={{ fontSize:"1.05rem", color:"#374151", lineHeight:1.75 }}>
          BibloFi solves the student&apos;s experience. It doesn&apos;t solve the librarian&apos;s. Every booking still requires manual work on the librarian&apos;s side. The admin panel was de-scoped in week 3; it&apos;s the most important thing missing, and it&apos;s what I&apos;d prioritise in Phase 2.
        </p>
      </div>

      <div style={{ display:"flex", flexDirection:"column" }}>
        {learnings.map((learning, i) => (
          <div key={learning.num} className="csl-reveal" style={{
            display:"flex", gap:20, alignItems:"baseline",
            padding:"20px 0",
            borderBottom: i < learnings.length - 1 ? "1px solid #F3F4F6" : "none",
          }}>
            <span style={{ fontSize:"13px", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", flexShrink:0 }}>{learning.num}</span>
            <div>
              <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:4, lineHeight:1.4 }}>{learning.title}</p>
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.7, fontStyle:"italic" }}>{learning.text}</p>
            </div>
          </div>
        ))}
      </div>

    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   EXPERIENCE SECTION (end of case study)
───────────────────────────────────────────────────────────────────── */
function ExperienceSection() {
  return (
    <CsSection id="experience" last>
      <CsSectionHeader
        label="Internship Experience"
        title={<>Thank you, <em style={{ fontStyle:"italic" }}>truly.</em></>}
      />
      <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"start" }}>
        {/* Handwritten note */}
        <div className="csl-reveal" style={{
          background:"#FFFEF5",
          border:"1.5px solid #E8D5A0",
          borderRadius:16,
          padding:"44px 48px 40px",
          position:"relative",
          transform:"rotate(-0.6deg)",
          maxWidth:540,
        }}>
          {/* Lined paper effect */}
          <div style={{
            position:"absolute", inset:"56px 48px 40px",
            backgroundImage:`repeating-linear-gradient(transparent, transparent 31px, rgba(200,112,58,0.12) 31px, rgba(200,112,58,0.12) 32px)`,
            pointerEvents:"none",
          }} />
          <p style={{
            fontFamily:"var(--font-caveat), cursive",
            fontSize:"1.7rem",
            color:"#3D2010",
            lineHeight:1.9,
            position:"relative", zIndex:1,
          }}>
            This was one of the most meaningful experiences of my design journey.
            <br /><br />
            I&apos;m deeply grateful to Vir sir, my mentor, Shaukat sir, the product owner, and my entire team. For the learning, the trust, and the memories.
            <br /><br />
            Thank you. ✨
          </p>
          <p style={{
            fontFamily:"var(--font-caveat), cursive",
            fontSize:"1.35rem",
            color:A,
            marginTop:20,
            textAlign:"right",
            position:"relative", zIndex:1,
          }}>
            Nikunj
          </p>
        </div>

        <div className="csl-reveal rd1">
          <PhotoStack />
        </div>
      </div>
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
      <AccessibilitySection />
      <TestingSection />
      <LearningsSection />
      <ExperienceSection />
    </CaseStudyPage>
  );
}
