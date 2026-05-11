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
   BOOK ANIMATION COMPONENTS
───────────────────────────────────────────────────────────────────── */

function OpenBook() {
  const lines = [26, 40, 54, 68, 82, 96, 110, 124];
  return (
    <div style={{
      position: "relative", width: 240, height: 162,
      filter: "drop-shadow(0 22px 42px rgba(0,0,0,0.48))",
    }}>
      {/* Cover base */}
      <div style={{
        position: "absolute", bottom: -8, left: 6, right: 6, height: 16,
        background: "linear-gradient(to bottom, #4A2008, #2D1204)",
        borderRadius: "0 0 6px 6px", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", zIndex: 0,
      }} />

      {/* Left page */}
      <div style={{
        position: "absolute", left: 0, top: 0,
        width: "calc(50% - 3px)", height: "100%",
        background: "linear-gradient(120deg,#FEF8ED 0%,#F5E6C4 100%)",
        borderRadius: "6px 0 0 2px",
        transformOrigin: "right center",
        animation: "bibloPageLeft 6s ease-in-out infinite",
        boxShadow: "inset -6px 0 12px rgba(0,0,0,0.12),-2px 4px 16px rgba(0,0,0,0.2)",
        overflow: "hidden", zIndex: 1,
      }}>
        <div style={{ position:"absolute", top:10, left:8, right:8, fontSize:"4.5px", fontWeight:700, color:"rgba(100,60,20,0.5)", letterSpacing:"0.15em", textTransform:"uppercase" }}>BibloFi</div>
        {lines.map((top, i) => (
          <div key={i} style={{ position:"absolute", left:8, right: i%4===0?22:6, top, height:1.5, background:`rgba(120,70,20,${i===0?0.22:0.1})`, borderRadius:1 }} />
        ))}
      </div>

      {/* Right page */}
      <div style={{
        position: "absolute", right: 0, top: 0,
        width: "calc(50% - 3px)", height: "100%",
        background: "linear-gradient(60deg,#F5E6C4 0%,#FEF0D4 100%)",
        borderRadius: "0 6px 2px 0",
        transformOrigin: "left center",
        animation: "bibloPageRight 6s ease-in-out infinite 0.4s",
        boxShadow: "inset 6px 0 12px rgba(0,0,0,0.12),2px 4px 16px rgba(0,0,0,0.2)",
        overflow: "hidden", zIndex: 1,
      }}>
        {lines.map((top, i) => (
          <div key={i} style={{ position:"absolute", left: i%4===2?18:6, right:8, top, height:1.5, background:`rgba(120,70,20,${i===4?0.22:0.1})`, borderRadius:1 }} />
        ))}
        <div style={{ position:"absolute", bottom:14, right:10, width:24, height:24, borderRadius:"50%", border:"1.5px solid rgba(200,112,58,0.28)", background:"rgba(200,112,58,0.1)" }} />
      </div>

      {/* Spine */}
      <div style={{
        position: "absolute", left:"50%", top:0, bottom:0, width:6,
        transform: "translateX(-50%)",
        background: "linear-gradient(to right,#5C2E0A,#7A3E15,#5C2E0A)",
        zIndex: 3, boxShadow: "0 0 8px rgba(0,0,0,0.4)",
      }} />

      {/* Bookmark ribbon */}
      <div style={{
        position:"absolute", top:0, right:"32%", width:7, height:38,
        background: "linear-gradient(to bottom,#B83232,#7A1A1A)",
        zIndex:4, clipPath:"polygon(0 0,100% 0,100% 75%,50% 100%,0 75%)",
      }} />
    </div>
  );
}

function MiniBook({ color, width = 30, height = 46 }: { color: string; width?: number; height?: number }) {
  const r = parseInt(color.slice(1,3),16);
  const g = parseInt(color.slice(3,5),16);
  const b = parseInt(color.slice(5,7),16);
  const lighter = `rgb(${Math.min(r+40,255)},${Math.min(g+28,255)},${Math.min(b+18,255)})`;
  return (
    <div style={{
      width, height,
      background: `linear-gradient(135deg,${lighter} 0%,${color} 100%)`,
      borderRadius: "2px 4px 4px 2px",
      position: "relative", overflow: "hidden",
      boxShadow: "2px 4px 14px rgba(0,0,0,0.38)",
    }}>
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:5, background:"rgba(0,0,0,0.22)" }} />
      <div style={{ position:"absolute", left:8, right:4, top:"28%", height:1.5, background:"rgba(255,255,255,0.35)", borderRadius:1 }} />
      <div style={{ position:"absolute", left:8, right:10, top:"42%", height:1.5, background:"rgba(255,255,255,0.2)", borderRadius:1 }} />
    </div>
  );
}

const SHELF_BOOKS = [
  { color:"#6B3A1F", h:48, w:15 },
  { color:"#C17F3E", h:40, w:11, pop:true },
  { color:"#8B4513", h:54, w:17 },
  { color:"#D4854A", h:44, w:13 },
  { color:"#5C2E0A", h:50, w:19 },
  { color:"#A0522D", h:38, w:11 },
  { color:"#CD853F", h:52, w:15 },
  { color:"#8B6914", h:42, w:13, pop:true },
  { color:"#B85C38", h:46, w:17 },
  { color:"#7A4520", h:36, w:11 },
  { color:"#C17F3E", h:48, w:13 },
  { color:"#6B3A1F", h:44, w:16 },
];

function ShelfScene() {
  return (
    <div style={{ position:"relative", display:"flex", alignItems:"flex-end", justifyContent:"center", gap:2, width:"100%", paddingBottom:8 }}>
      {SHELF_BOOKS.map((book, i) => (
        <div key={i} style={{
          width: book.w, height: book.h,
          background: `linear-gradient(to right,rgba(0,0,0,0.18),transparent 25%,transparent 75%,rgba(0,0,0,0.08)),${book.color}`,
          borderRadius: "2px 2px 0 0", flexShrink: 0,
          animation: book.pop ? `bibloShelfPop ${4+i*0.35}s ease-in-out infinite ${i*0.4}s` : undefined,
        }} />
      ))}
      {/* Shelf plank */}
      <div style={{
        position:"absolute", bottom:0, left:"4%", right:"4%", height:7,
        background:"linear-gradient(to bottom,#5C3010,#3D1E05)",
        borderRadius:"1px 1px 3px 3px", boxShadow:"0 4px 14px rgba(0,0,0,0.45)",
      }} />
    </div>
  );
}

function LibraryScene() {
  return (
    <div style={{ position:"relative", width:"100%", height:360, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div className="biblo-scene-glow" />
      <div className="biblo-mini biblo-mini-1"><MiniBook color="#8B4513" width={34} height={50} /></div>
      <div className="biblo-mini biblo-mini-2"><MiniBook color="#C17F3E" width={26} height={42} /></div>
      <div className="biblo-mini biblo-mini-3"><MiniBook color="#A0522D" width={22} height={36} /></div>
      <div className="biblo-book-main"><OpenBook /></div>
      <span className="biblo-sparkle biblo-sp-1">✦</span>
      <span className="biblo-sparkle biblo-sp-2">✦</span>
      <span className="biblo-sparkle biblo-sp-3">✦</span>
      <span className="biblo-sparkle biblo-sp-4">✦</span>
      <div className="biblo-shelf-row"><ShelfScene /></div>
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
        {/* Right — animated library scene */}
        <div className="csl-hero-right">
          <LibraryScene />
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
          display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, alignItems:"center",
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
          <div style={{ order: feature.reverse ? 1 : 2, borderRadius:14, overflow:"hidden" }}>
            <Image
              src={feature.img}
              alt={feature.title}
              width={600}
              height={1067}
              style={{ width:"100%", height:"auto", display:"block", borderRadius:14 }}
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
  const screens = Array.from({ length:9 }, (_, i) => ({
    src: `/Image/Biblofi/final${i+1}.png`,
    label: `Final screen ${i+1}`,
  }));

  return (
    <CsSection id="final">
      <CsSectionHeader
        label="Deliver — Final Designs"
        title={<>The finished product — <em style={{ fontStyle:"italic" }}>every screen, polished.</em></>}
        sub="From onboarding to book discovery, seat booking to fine tracking — final high-fidelity screens delivered to the Infosys engineering team."
      />

      <div className="csl-img-3up csl-reveal">
        {screens.slice(0,3).map((s) => (
          <CsImg key={s.src} label={s.label} aspect="9/16" icon="📱" sub="Final hi-fi screen" />
        ))}
      </div>
      <div className="csl-img-3up csl-reveal rd1" style={{ marginTop:14 }}>
        {screens.slice(3,6).map((s) => (
          <CsImg key={s.src} label={s.label} aspect="9/16" icon="📱" sub="Final hi-fi screen" />
        ))}
      </div>
      <div className="csl-img-3up csl-reveal rd2" style={{ marginTop:14 }}>
        {screens.slice(6).map((s) => (
          <CsImg key={s.src} label={s.label} aspect="9/16" icon="📱" sub="Final hi-fi screen" />
        ))}
      </div>
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
