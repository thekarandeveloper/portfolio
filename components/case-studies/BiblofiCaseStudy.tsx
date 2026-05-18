"use client";

import React, { useState } from "react";
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
      boxShadow:"0 0 0 1px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.12)",
      transform:`rotate(${tilt})`,
      flexShrink:0,
      overflow:"hidden",
      ...style,
    }}>
      <div style={{
        position:"absolute", top:14, left:"50%", transform:"translateX(-50%)",
        width:islandW, height:26, background:"#0A0A0A", borderRadius:20, zIndex:10,
      }} />
      <div style={{ position:"absolute", inset:4, borderRadius:38, overflow:"hidden" }}>
        <Image src={src} alt={alt} width={w * 2} height={h * 2}
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
          borderRadius:38, pointerEvents:"none",
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
      position:"relative", width:"100%",
      display:"flex", alignItems:"center", justifyContent:"center",
      gap:12, padding:"64px 32px",
      overflow:"visible",
    }}>
      {/* ambient glow */}
      <div style={{
        position:"absolute", width:320, height:320, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(200,112,58,0.18) 0%, transparent 70%)",
        animation:"bibloGlowPulse 5s ease-in-out infinite",
        pointerEvents:"none", zIndex:0,
      }} />
      {/* left phone — flex item, shifted down for depth */}
      <div style={{ transform:"translateY(28px)", opacity:0.88, zIndex:1, flexShrink:0 }}>
        <PhoneFrame src="/Image/Biblofi/final%20screens%20-%20biblofi/home-biblofi.png" alt="BibloFi screen" w={148} h={320} tilt="-6deg" />
      </div>
      {/* center phone — flex item, floating animation */}
      <div className="biblo-phone-wrap" style={{
        zIndex:3, flexShrink:0,
        position:"relative", width:210, height:454,
        background:"#161616", borderRadius:42,
        boxShadow:"0 0 0 1px rgba(0,0,0,0.08), 0 24px 56px rgba(0,0,0,0.18)",
        overflow:"hidden",
      }}>
        <div style={{
          position:"absolute", top:14, left:"50%", transform:"translateX(-50%)",
          width:88, height:26, background:"#0A0A0A", borderRadius:20, zIndex:10,
        }} />
        <div style={{ position:"absolute", inset:4, borderRadius:38, overflow:"hidden" }}>
          <Image src="/Image/Biblofi/smart-book.png" alt="BibloFi: Smart Book Discovery"
            width={420} height={908}
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
            borderRadius:38, pointerEvents:"none",
          }} />
        </div>
        <div style={{ position:"absolute", right:-4, top:110, width:4, height:64, background:"#2A2A2A", borderRadius:"0 3px 3px 0" }} />
        <div style={{ position:"absolute", left:-4, top:88,  width:4, height:44, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
        <div style={{ position:"absolute", left:-4, top:142, width:4, height:44, background:"#2A2A2A", borderRadius:"3px 0 0 3px" }} />
      </div>
      {/* right phone — flex item, shifted up for depth */}
      <div style={{ transform:"translateY(-20px)", opacity:0.88, zIndex:2, flexShrink:0 }}>
        <PhoneFrame src="/Image/Biblofi/final%20screens%20-%20biblofi/profile-biblofi.png" alt="BibloFi screen" w={148} h={320} tilt="5deg" />
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
      {/* Dark line grid matching homepage */}
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
            <em style={{ fontStyle:"italic", color:"rgba(200,112,58,0.7)" }}>the library hadn&apos;t</em>
            <br />changed. The students had.
          </h1>
          <p className="csl-hero-desc">
            Infosys brought me in to design a library app from scratch. What I found wasn&apos;t a missing app, it was a system that assumed students had time, patience, and willingness to just show up and hope for the best.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:16 }}>
            {bibloMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>{item.label}: {item.value}</span>
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
            BibloFi started as an Infosys internship project, time-bounded to 1 month with a structured sprint delivery model. Every week had to produce one working sprint, which meant decisions had to be intentional and fast. There was no room to iterate infinitely.
          </p>
          <p className="csl-text">
            We were handed an SRS (Software Requirements Specification) document laying out every feature the app needed. This was our brief. The design challenge was to take those listed requirements and turn them into an experience that actually felt good to use on a real phone.
          </p>
          <p className="csl-text">
            The context was the Infosys Mysore campus library — one of the most immersive library environments on campus, rich with books and reading spaces, but running entirely on manual processes. No digital layer existed. Students had to show up to check availability, and the librarians handled everything by hand.
          </p>
          <div className="csl-tags csl-reveal rd1">
            {bibloRoleChips.map((chip) => (
              <span className="csl-tag" key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="csl-card csl-reveal rd1" style={{ marginBottom:14 }}>
            <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:"#9CA3AF", marginBottom:14 }}>My team</p>
            {bibloTeam.map((item) => (
              <div key={item.dot} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:A2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"15px", fontWeight:700, color:A, flexShrink:0, overflow:"hidden" }}>
                  {item.dot === "NT"
                    ? <Image src="/Image/Biblofi/me.png" alt="Nikunj" width={28} height={28} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    : item.dot}
                </div>
                <div>
                  <div style={{ fontSize:"1rem", fontWeight:600, color:"#111827" }}>{item.title}</div>
                  <div style={{ fontSize:"15px", color:"#9CA3AF" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="csl-callout" style={{ margin:0 }}>
            <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>The Brief</p>
            <p style={{ fontSize:"1rem", color:"#374151", lineHeight:1.65 }}>
              Design the complete member experience of a library app for the Mysore campus — from onboarding to book discovery, seat booking, and fine tracking — within 4 weeks.
            </p>
          </div>
        </div>
      </div>

      {/* Experience notes + photo stack */}
      <div className="csl-reveal rd2" style={{ marginTop:32, display:"grid", gridTemplateColumns:"1fr auto", gap:40, alignItems:"start" }}>
        <div>
          <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:"#9CA3AF", marginBottom:16 }}>From the internship</p>
          {[
            "The SRS was detailed but silent on the 'why' — understanding the real student frustrations required going beyond the document.",
            "Working with 10 iOS developers meant every design decision had to be defensible in SwiftUI terms. Good communication was part of the design work.",
            "The Mysore campus library had beautiful physical space. The gap wasn't the space — it was the invisible overhead students faced before ever arriving.",
            "Sprint reviews every Friday kept the team honest. If something wasn't working by Thursday, it got cut, not patched.",
          ].map((note) => (
            <div key={note} style={{ display:"flex", gap:12, marginBottom:12, alignItems:"flex-start" }}>
              <span style={{ color:A, fontWeight:700, marginTop:2, flexShrink:0 }}>·</span>
              <p style={{ fontSize:"0.97rem", color:"#374151", lineHeight:1.7 }}>{note}</p>
            </div>
          ))}
        </div>
        <PhotoStack />
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

      {/* Why Design Thinking */}
      <div className="csl-callout csl-reveal" style={{ marginBottom:28 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Why Design Thinking?</p>
        <p style={{ fontSize:"1.05rem", color:"#374151", lineHeight:1.8 }}>
          With a hard 4-week deadline and a 10-person iOS dev team waiting on specs each Friday, we needed a process that was structured enough to communicate progress to stakeholders, yet iterative enough to respond when we found something new. Design Thinking was that fit. The Discover → Define → Develop → Deliver arc mapped cleanly onto our sprint calendar, with each phase anchoring one week of delivery. It kept user needs front-and-centre even when engineering constraints pushed back, and it gave everyone — designers, developers, and the Infosys product owner — a shared vocabulary for every decision.
        </p>
      </div>

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
        I surveyed 38 students and conducted 8 in-depth interviews across two campuses. Three observation sessions inside the library, watching how students navigated the space in real time, revealed behaviours that surveys alone would have missed. I also spent time with 2 librarians to understand the other side of every pain point students described.
      </p>
      <p className="csl-text csl-reveal rd1">
        Key finding: the friction wasn&apos;t in the library itself, it was in the invisible overhead. Not knowing if a book was available before visiting. Not being able to reserve a seat. No reminders for due dates. Digital tools existed everywhere else in students&apos; lives, but the library expected them to operate on its terms.
      </p>

      {/* 5W 1H Framework */}
      <div className="csl-reveal rd1" style={{ marginBottom:32 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:20 }}>Research framework: 5W 1H</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
          {[
            { q:"Who?",   a:"B.Tech students aged 19–23 on Infosys Mysore campus — digital-first users expected modern tools everywhere except the library." },
            { q:"What?",  a:"Cannot check book availability or reserve study seats without physically visiting the library first." },
            { q:"When?",  a:"Pain peaks during exam season when seat demand spikes and specific reference books get heavily contested." },
            { q:"Where?", a:"Infosys Mysore campus library — a well-stocked, immersive physical space running entirely on manual librarian-managed processes." },
            { q:"Why?",   a:"No digital interface exists between students and the library system. Everything requires a physical counter visit." },
            { q:"How?",   a:"Students physically visit, ask librarians for status, and plan study time around uncertainty about what they'll find on arrival." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background:"#FAFAFA", border:"1px solid #F0F0F0", borderRadius:12, padding:"18px 16px" }}>
              <p style={{ fontSize:"1.15rem", fontWeight:800, color:A, marginBottom:8 }}>{q}</p>
              <p style={{ fontSize:"0.95rem", color:"#374151", lineHeight:1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What surprised us — pivot insight */}
      <div className="csl-callout csl-reveal rd1" style={{ marginBottom:28 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What surprised us</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          We expected the main problem to be the book catalogue, students not finding titles they wanted. It wasn&apos;t. The catalogue was fine. The problem was <strong>uncertainty before arriving</strong>: students couldn&apos;t know if a book was available or a seat was free without physically going there first. The failed visit, not the failed search, was the core pain.
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
        <p style={{ fontSize:"15px", color:"#9CA3AF", marginTop:10 }}> B.Tech student, 3rd year · Interview participant</p>
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
        <p style={{ fontSize:"15px", color:"#9CA3AF", marginTop:10, fontStyle:"normal" }}> Composite insight from 8 student interviews</p>
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

      {/* Bridge: what the lo-fi round revealed */}
      <div className="csl-callout csl-reveal rd1" style={{ marginTop:24 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What the lo-fi round revealed</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          Two structural problems surfaced immediately. The bottom tab bar had five items, one too many for comfortable one-handed use on a standard iPhone. The &apos;Issue Book&apos; action was buried three taps deep inside a book detail screen, which test observers flagged in the first five minutes. Both were fixed before opening Figma in hi-fi: the tab bar dropped to four primary items, and issuing a book became a single persistent action from the catalogue view.
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
      desc:  "No custom navigation patterns. Native components only, which eliminated several interaction ideas that would have required bespoke animation work from the dev team.",
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
        label="Develop: Constraints & Tradeoffs"
        title={<>What we worked within, <em style={{ fontStyle:"italic" }}>and what we chose to cut.</em></>}
        sub="Real projects have real limits. These constraints shaped every major decision in the design, and naming them is part of the work."
      />

      <div className="csl-card-grid csl-reveal">
        {constraints.map((c) => (
          <div key={c.title} style={{ padding:"22px 0" }}>
            <div style={{ fontSize:"1.5rem", marginBottom:12 }}>{c.icon}</div>
            <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:8 }}>{c.title}</h3>
            <p style={{ fontSize:"1rem", color:"#6B7280", lineHeight:1.6 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      {/* The hardest tradeoff moment */}
      <div className="csl-callout csl-reveal rd1" style={{ marginTop:20 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>The hardest tradeoff</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          The seat waitlist feature, where students could queue and get notified when a spot opens, tested better than the booking-only model in concept testing. Users understood and wanted it. But the push notification backend would have taken the dev team two weeks to build, leaving no time to test the core flows. I made the call to cut it: a well-tested booking flow at handoff is worth more than a partially-built waitlist. The waitlist went into the Phase 2 doc with full specs.
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
          <p style={{ fontSize:"1rem", color:ADrk, lineHeight:1.6 }}>Built on iOS 18 UI Kit (Figma Community). Native sheets, tabs, and cards, so the engineering team had direct SwiftUI analogues with no bespoke component work.</p>
        </div>
      </div>

      {bibloFeatures.map((feature) => (
        <div key={feature.title} className="csl-reveal" style={{
          background:"#fff", borderRadius:20, padding:"24px",
          boxShadow:"0 4px 20px rgba(0,0,0,0.05)", marginBottom:20,
          display:"grid", gridTemplateColumns:"1fr 200px", gap:28, alignItems:"center",
        }}>
          <div style={{ order: feature.reverse ? 2 : 1 }}>
            <p style={{ fontSize:"15px", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", marginBottom:4 }}>{feature.num}</p>
            <p style={{ fontSize:"13px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:AMut, marginBottom:8 }}>{feature.tag}</p>
            <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:10 }}>{feature.title}</h3>
            <p className="csl-text" style={{ marginBottom:12 }}>{feature.desc[0]}</p>

            {/* Why this approach */}
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
              style={{ width:"100%", maxWidth:200, height:"auto", display:"block", borderRadius:20, boxShadow:"0 8px 32px rgba(0,0,0,0.12)" }}
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

      {/* ── INTRO CARD (inspired by "final one.png") ── */}
      <div className="csl-reveal" style={{
        border:"2px dashed #D4B896", borderRadius:20, background:"#FFFDF8",
        padding:"36px", marginBottom:56,
        display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:40, alignItems:"center",
      }}>
        <div>
          <p style={{
            fontFamily:"var(--font-caveat), cursive",
            fontSize:"1.9rem", fontWeight:700, color:A, lineHeight:1.2, marginBottom:20,
          }}>
            BibloFi. A Complete Library Experience.
          </p>
          <p style={{ fontSize:"1.05rem", color:"#374151", lineHeight:1.8, marginBottom:16 }}>
            BibloFi is inspired by the word <strong style={{ color:A }}>Bibliophile</strong>, a person who loves books. We wanted to create an app that feels like home for every reader.
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24, flexWrap:"wrap" }}>
            <div style={{ textAlign:"center" }}>
              <span style={{ fontSize:"2.4rem", fontWeight:900, color:"#111827", letterSpacing:"-0.02em", display:"block" }}>Biblio</span>
              <span style={{ fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:"#9CA3AF" }}>love of books</span>
            </div>
            <span style={{ fontSize:"2rem", color:A, fontWeight:300, opacity:0.6 }}>+</span>
            <div style={{ textAlign:"center" }}>
              <span style={{ fontSize:"2.4rem", fontWeight:900, color:"#111827", letterSpacing:"-0.02em", display:"block" }}>Fi</span>
              <span style={{ fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:"#9CA3AF" }}>fidelity</span>
            </div>
            <span style={{ fontSize:"2rem", color:"#D1D5DB", margin:"0 4px" }}>→</span>
            <div style={{ textAlign:"center" }}>
              <span style={{ fontFamily:"var(--font-caveat), cursive", fontSize:"4rem", fontWeight:700, color:A, display:"block", lineHeight:1 }}>BibloFi</span>
              <span style={{ fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:A }}>the app</span>
            </div>
          </div>
          <p style={{ fontSize:"1rem", color:"#9CA3AF", fontStyle:"italic" }}>
            After all the hustle of research, user pain points, and design exploration, BibloFi was born.
          </p>
        </div>
        <div style={{ background:A, borderRadius:16, padding:"28px 24px" }}>
          <p style={{ fontSize:"1.08rem", fontWeight:600, color:"#fff", lineHeight:1.75 }}>
            Our onboarding screens are designed to highlight the most important features of the app in a simple and engaging flow.
          </p>
        </div>
      </div>

      {/* ── ONBOARDING SCREENS ── */}
      <div style={{ marginBottom:64 }}>
        {/* Annotations above */}
        <div className="csl-reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, marginBottom:28 }}>
          <p style={{ fontSize:"1.05rem", color:"#6B7280", lineHeight:1.75 }}>
            Each screen introduces a core feature step by step, keeping the focus on clarity and user engagement. <span style={{ color:A }}>↓</span>
          </p>
          <p style={{ fontSize:"1.05rem", color:"#6B7280", lineHeight:1.75 }}>
            <span style={{ color:A }}>↓</span> Minimal text with strong visuals ensures quick comprehension and smooth navigation.
          </p>
        </div>

        {/* 4 phones with stagger */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
          {([1,2,3,4] as const).map((n, i) => (
            <div key={n} className={`csl-reveal${i > 0 ? ` rd${i}` : ""}`} style={{
              borderRadius:28, overflow:"hidden",
              boxShadow:"0 16px 48px rgba(0,0,0,0.13)",
              transform: i % 2 === 1 ? "translateY(12px)" : "translateY(0)",
            }}>
              <Image
                src={`${FINAL}/ob${n}.png`}
                alt={`Onboarding screen ${n}`}
                width={320} height={693}
                style={{ width:"100%", height:"auto", display:"block" }}
              />
            </div>
          ))}
        </div>

        {/* Annotations below */}
        <div className="csl-reveal rd2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, marginTop:28 }}>
          <p style={{ fontSize:"1.05rem", color:"#6B7280", lineHeight:1.75 }}>
            We balanced typography, icons, and illustrations to make the journey visually appealing without overwhelming the user.
          </p>
          <p style={{ fontSize:"1.05rem", color:"#6B7280", lineHeight:1.75 }}>
            The design ensures that new users can quickly understand the value of the app and feel motivated to explore further.
          </p>
        </div>

        {/* Handwriting label */}
        <div className="csl-reveal rd3" style={{ textAlign:"right", marginTop:16 }}>
          <span style={{
            fontFamily:"var(--font-caveat), cursive",
            fontSize:"3.2rem", fontWeight:700, color:A, lineHeight:1,
          }}>
            Onboarding Screens
          </span>
        </div>
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
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>Students choose from a rich list of categories — Fiction, Science, History, Technology and more — in a single tap flow.</p>
            </div>
            <div>
              <p style={{ fontSize:"1rem", fontWeight:700, color:"#111827", marginBottom:6 }}>One-time personalisation →</p>
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>Set once during onboarding and the app remembers. Genre preferences persist across sessions without any settings menu.</p>
            </div>
          </div>
          {/* Center phone */}
          <div style={{ borderRadius:28, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.13)" }}>
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
              <p style={{ fontSize:"0.95rem", color:"#6B7280", lineHeight:1.65 }}>The selections directly feed the Home screen's &quot;Top Picks for You&quot; section — what you choose here is exactly what surfaces there.</p>
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
          <div style={{ borderRadius:32, overflow:"hidden", boxShadow:"0 24px 64px rgba(0,0,0,0.15)" }}>
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
        {/* Amber banner */}
        <div className="csl-reveal" style={{
          background:"#F5A623", borderRadius:16, padding:"26px 40px", marginBottom:44, textAlign:"center",
        }}>
          <p style={{ fontSize:"1.15rem", fontWeight:700, color:"#fff", lineHeight:1.8 }}>
            With categories spanning authors, genres, and personalized searches, BiblioFi gives me countless ways to explore and find exactly what I love.
          </p>
        </div>

        <div className="csl-reveal rd1" style={{ display:"flex", justifyContent:"center", marginBottom:28 }}>
          <div style={{ width:290, borderRadius:28, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.12)" }}>
            <Image src={`${FINAL}/categoires.png`} alt="Categories and searching" width={320} height={693}
              style={{ width:"100%", height:"auto", display:"block" }} />
          </div>
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
          {/* seat-booking.png is already a 2-phone composite */}
          <div style={{ borderRadius:20, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.10)" }}>
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
        {/* profile-biblofi.png is already a 3-phone composite */}
        <div style={{ borderRadius:20, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.10)" }}>
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

      {/* Post-delivery honest caveat */}
      <div className="csl-callout csl-reveal rd2" style={{ marginTop:20 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>Post-delivery context</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          The Figma specs and design system were handed off to the iOS engineering team at internship end. Post-launch adoption data wasn&apos;t accessible to me after the internship concluded. These testing results represent the final pre-handoff validation, not production metrics. Instrumenting for post-launch measurement is something I&apos;d build into the brief from day one next time.
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
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="What I Learned"
        title={<>Growing as a designer <em style={{ fontStyle:"italic" }}>and a leader.</em></>}
      />

      {/* What this didn't fully solve */}
      <div className="csl-callout csl-reveal" style={{ marginBottom:28 }}>
        <p style={{ fontSize:"15px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:A, marginBottom:8 }}>What this didn&apos;t fully solve</p>
        <p style={{ fontSize:"1.08rem", color:"#374151", lineHeight:1.75 }}>
          BibloFi solves the student&apos;s experience. It doesn&apos;t solve the librarian&apos;s. Every booking, every fine, every availability update still requires manual work on the librarian&apos;s side. The admin panel was de-scoped in week 3, it&apos;s the most important thing missing from what was delivered, and it&apos;s what I&apos;d prioritise in Phase 2.
        </p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {learnings.map((learning) => (
          <div key={learning.num} className="csl-reveal" style={{
            display:"flex", gap:20,
            background: learning.num === "05" ? A5 : "transparent",
            border:     learning.num === "05" ? `1.5px solid ${A2}` : "none",
            borderRadius: learning.num === "05" ? 18 : 0,
            padding:"22px 0",
          }}>
            <p style={{ fontSize:"15px", fontWeight:700, color:A, fontFamily:"ui-monospace,monospace", flexShrink:0, marginTop:2 }}>{learning.num}</p>
            <div>
              <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#111827", marginBottom:6 }}>{learning.title}</h3>
              <p style={{ fontSize:"1rem", color:"#6B7280", lineHeight:1.7 }}>{learning.text}</p>
            </div>
          </div>
        ))}
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
    </CaseStudyPage>
  );
}
