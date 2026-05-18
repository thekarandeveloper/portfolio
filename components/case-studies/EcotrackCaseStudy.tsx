"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";
import {
  ecoCompetitors,
  ecoEmpathy1,
  ecoEmpathy2,
  ecoLearnings,
  ecoMeta,
  ecoProcess,
  ecoResearchStats,
  ecoTestInsights,
} from "./ecotrackData";

/* ─────────────────────────────────────────────────────────────────────
   FONT SHORTHAND
───────────────────────────────────────────────────────────────────── */
const HAND = "var(--font-caveat,'Caveat',cursive)";

/* ─────────────────────────────────────────────────────────────────────
   TOC + META
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"           },
  { id: "problem",     label: "The Problem"        },
  { id: "process",     label: "Design Process"     },
  { id: "research",    label: "User Research"      },
  { id: "personas",    label: "Audience & Personas"},
  { id: "competitive", label: "Competitive"        },
  { id: "design",      label: "Visual Design"      },
  { id: "wireframes",  label: "Wireframes"         },
  { id: "onboarding",  label: "OnBoarding"         },
  { id: "screens",     label: "App Screens"        },
  { id: "iterations",  label: "Iterations"         },
  { id: "outcomes",    label: "Outcomes"           },
  { id: "learnings",   label: "Learnings"          },
];

const META_ROWS = [
  { label: "Role",     value: "UX Designer"      },
  { label: "Duration", value: "4 Weeks"          },
  { label: "Platform", value: "iOS App"          },
  { label: "Tools",    value: "Figma"            },
  { label: "Type",     value: "Personal Project" },
];

/* ─────────────────────────────────────────────────────────────────────
   COUNT ANIMATION HOOK
───────────────────────────────────────────────────────────────────── */
function useCountAnimation(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0");
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = target / (1200 / 16);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, 16);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    root.querySelectorAll(".eco-count").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [rootRef]);
}

/* ─────────────────────────────────────────────────────────────────────
   SHARED IMAGE COMPONENT
───────────────────────────────────────────────────────────────────── */
function EcoImg({ src, alt, style = {} }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block", ...style }} />
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HAND ANNOTATION — cursive note + curved SVG arrow
───────────────────────────────────────────────────────────────────── */
type HandNoteDir = "down" | "right" | "up-right" | "left";

function HandNote({
  text,
  dir = "down",
  style = {},
}: {
  text: string;
  dir?: HandNoteDir;
  style?: React.CSSProperties;
}) {
  const label = (
    <span style={{ fontFamily: HAND, fontSize: "0.95rem", color: "#2D7D43", lineHeight: 1.25, display: "block" }}>
      {text}
    </span>
  );

  const arrowDown = (
    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" style={{ flexShrink: 0 }}>
      <path d="M8 2 Q8 11 8 18" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
      <path d="M5 15 L8 18 L11 15" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const arrowRight = (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 7 Q12 3 22 7" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M19 4 L22 7 L19 10" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const arrowUpRight = (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 14 Q6 7 14 4" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M11 2 L14 4 L12 7" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const arrowLeft = (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M26 7 Q16 3 6 7" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M9 4 L6 7 L9 10" stroke="#2D7D43" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const containerBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    pointerEvents: "none",
    ...style,
  };

  if (dir === "down") return (
    <div style={{ ...containerBase, flexDirection: "column", alignItems: "center", gap: 6 }}>
      {label}
      {arrowDown}
    </div>
  );
  if (dir === "right") return (
    <div style={containerBase}>
      {label}
      {arrowRight}
    </div>
  );
  if (dir === "up-right") return (
    <div style={{ ...containerBase, flexDirection: "column", alignItems: "flex-start" }}>
      {arrowUpRight}
      {label}
    </div>
  );
  return (
    <div style={containerBase}>
      {arrowLeft}
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SCRIPT EM — cursive accent for section titles
───────────────────────────────────────────────────────────────────── */
function Script({ children }: { children: React.ReactNode }) {
  return (
    <em style={{ fontStyle: "normal", fontFamily: HAND, color: "#2D7D43", fontSize: "1.05em" }}>
      {children}
    </em>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ECO NUM — inline number highlight
───────────────────────────────────────────────────────────────────── */
function EcoNum({ children }: { children: React.ReactNode }) {
  return (
    <strong style={{
      fontFamily: HAND,
      fontSize: "1.15em",
      color: "#2D7D43",
      fontWeight: 700,
    }}>
      {children}
    </strong>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION BRIDGE — narrative connector between sections
───────────────────────────────────────────────────────────────────── */
function SectionBridge({ text }: { text: string }) {
  return (
    <div style={{
      marginTop: 44,
      padding: "14px 24px 14px 18px",
      background: "linear-gradient(90deg, rgba(232,247,236,0.9) 0%, transparent 100%)",
      borderLeft: "2px solid rgba(45,125,67,0.45)",
      borderRadius: "0 14px 14px 0",
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}>
      <span style={{ fontSize: "0.95rem", color: "#2D7D43", flexShrink: 0, fontFamily: HAND }}>→</span>
      <p style={{ fontFamily: HAND, fontSize: "1.0rem", color: "#3B6B45", lineHeight: 1.45 }}>{text}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CALLOUT — clean Apple-finish version
───────────────────────────────────────────────────────────────────── */
function EcoCallout({ children, style = {}, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={className} style={{
      borderLeft: "3px solid #2D7D43",
      borderRadius: "0 16px 16px 0",
      background: "#fff",
      padding: "18px 22px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)",
      fontSize: "15px",
      color: "#374151",
      lineHeight: 1.75,
      marginBottom: 28,
      fontWeight: 450,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CARD — clean Apple-finish
───────────────────────────────────────────────────────────────────── */
function EcoCard({ children, style = {}, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={className} style={{
      background: "#fff",
      borderRadius: 20,
      padding: "24px 22px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)",
      fontSize: "15px",
      color: "#374151",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO COMPONENTS
───────────────────────────────────────────────────────────────────── */
function EcoCO2Ring() {
  return (
    <div style={{ position: "relative", width: 60, height: 60, margin: "0 auto 8px" }}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <defs>
          <clipPath id="eco-liquid-clip">
            <circle cx="30" cy="30" r="26" />
          </clipPath>
        </defs>
        <circle cx="30" cy="30" r="26" fill="#E8F7EC" />
        <g clipPath="url(#eco-liquid-clip)">
          <g style={{ animation: "eco-liquid-rise 1.6s cubic-bezier(0.4,0,0.2,1) 0.4s both" }}>
            <g style={{ animation: "eco-wave-scroll 2s linear infinite" }}>
              <path d="M-60,25 C-45,19 -15,31 0,25 C15,19 45,31 60,25 C75,19 105,31 120,25 L120,60 L-60,60 Z" fill="#2D7D43" />
              <path d="M-60,29 C-45,23 -15,35 0,29 C15,23 45,35 60,29 C75,23 105,35 120,29 L120,60 L-60,60 Z" fill="#48A362" opacity="0.35" />
            </g>
          </g>
        </g>
        <circle cx="30" cy="30" r="26" fill="none" stroke="#2D7D43" strokeWidth="2" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff", lineHeight: 1, textShadow: "0 1px 3px rgba(0,30,15,0.7)" }}>2.4</p>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", textShadow: "0 1px 2px rgba(0,30,15,0.5)" }}>kg CO₂</p>
      </div>
    </div>
  );
}

function EcoPhoneMockup() {
  return (
    <div style={{ width: "min(220px, 100%)", background: "#0A1F0F", borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(45,125,67,0.4)", boxShadow: "0 24px 60px rgba(45,125,67,0.25)" }}>
      <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 40, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#F2FAF3", padding: "16px 12px", minHeight: 220 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ fontSize: "15px", color: "#0D2312", fontWeight: 600}}>Good morning 🌱</p>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#D0EAD4" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px 12px", textAlign: "center", marginBottom: 10 }}>
          <EcoCO2Ring />
          <p style={{ fontSize: "15px", color: "#3B6B45" }}>Today&apos;s footprint</p>
          <p style={{ fontSize: "15px", color: "#48A362" }}>↓ 18% vs yesterday</p>
        </div>
        {[
          { icon: "🚗", w: "72%", val: "0.8" },
          { icon: "⚡", w: "45%", val: "1.1" },
          { icon: "🍽️", w: "30%", val: "0.5" },
        ].map((row) => (
          <div key={row.icon} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: "15px" }}>{row.icon}</span>
            <div style={{ flex: 1, height: 5, background: "#D0EAD4", borderRadius: 3 }}>
              <div style={{ width: row.w, height: "100%", background: "#2D7D43", borderRadius: 3 }} />
            </div>
            <span style={{ fontSize: "15px", color: "#3B6B45", width: 20 }}>{row.val}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2D7D43", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(45,125,67,0.5)" }}>
            <span style={{ color: "#fff", fontSize: "1.1rem", lineHeight: 1, fontWeight: 300 }}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcoPhoneMockupLight() {
  return (
    <div style={{
      width: "min(260px, 100%)",
      background: "#111827",
      borderRadius: 40,
      overflow: "hidden",
      border: "1px solid rgba(45,125,67,0.25)",
      boxShadow: "0 32px 80px rgba(45,125,67,0.18), 0 8px 24px rgba(0,0,0,0.12)",
    }}>
      {/* Notch */}
      <div style={{ height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "#111827" }}>
        <div style={{ width: 44, height: 5, background: "rgba(255,255,255,0.12)", borderRadius: 3 }} />
      </div>
      {/* Screen */}
      <div style={{ background: "#F2FAF3", padding: "18px 14px 14px" }}>
        {/* Greeting row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: 1 }}>Good morning 🌱</p>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#0D2312" }}>David</p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#D0EAD4", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "15px" }}>👤</span>
          </div>
        </div>
        {/* CO₂ ring card */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "16px 14px", textAlign: "center", marginBottom: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <EcoCO2Ring />
          <p style={{ fontSize: "15px", color: "#3B6B45", marginTop: 4 }}>Today&apos;s footprint</p>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#10B981", marginTop: 2 }}>↓ 18% vs yesterday</p>
        </div>
        {/* Progress bars */}
        {[
          { icon: "🚗", label: "Transport", w: "72%", val: "0.8 kg" },
          { icon: "⚡", label: "Energy",    w: "45%", val: "1.1 kg" },
          { icon: "🍽️", label: "Food",     w: "30%", val: "0.5 kg" },
        ].map((row) => (
          <div key={row.icon} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <span style={{ fontSize: "15px" }}>{row.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <p style={{ fontSize: "15px", color: "#6B7280" }}>{row.label}</p>
                <p style={{ fontSize: "15px", color: "#374151", fontWeight: 600}}>{row.val}</p>
              </div>
              <div style={{ height: 5, background: "#D0EAD4", borderRadius: 3 }}>
                <div style={{ width: row.w, height: "100%", background: "#2D7D43", borderRadius: 3 }} />
              </div>
            </div>
          </div>
        ))}
        {/* FAB */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#2D7D43", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(45,125,67,0.45)" }}>
            <span style={{ color: "#fff", fontSize: "1.3rem", lineHeight: 1, fontWeight: 300 }}>+</span>
          </div>
        </div>
      </div>
      {/* Bottom tab bar */}
      <div style={{ background: "#fff", borderTop: "1px solid #F3F4F6", padding: "10px 18px 12px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        {[
          { icon: "🏠", active: true },
          { icon: "📊", active: false },
          { icon: "📚", active: false },
          { icon: "👤", active: false },
        ].map(({ icon, active }, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, opacity: active ? 1 : 0.35 }}>
            <span style={{ fontSize: "15px" }}>{icon}</span>
            {active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2D7D43" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function EcoHero() {
  return (
    <div className="csl-hero csl-hero--light">
      {/* Green dot grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(45,125,67,0.15) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }} />
      {/* Soft green glow top-right */}
      <div style={{
        position: "absolute", top: -100, right: -60,
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(45,125,67,0.12), transparent 68%)",
        pointerEvents: "none",
      }} />
      {/* Soft green glow bottom-left */}
      <div style={{
        position: "absolute", bottom: -80, left: -60,
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(72,163,98,0.08), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="csl-hero-inner">
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2D7D43", display: "inline-block", animation: "pulse 2s infinite" }} />
            Personal Project &nbsp;·&nbsp; iOS App &nbsp;·&nbsp; Sustainability
          </div>
          <h1 className="csl-hero-title">
            EcoTrack.<br />
            <em style={{ fontStyle: "normal", fontFamily: HAND, color: "#2D7D43", fontSize: "0.85em", opacity: 0.75 }}>Making the Planet Count.</em>
          </h1>
          <p className="csl-hero-desc">
            People who genuinely care about climate change often feel paralysed by it. Not indifferent. I spent 4 weeks researching why motivated users abandon eco apps, then designed the experience I wish already existed.
          </p>
          <p style={{ fontSize: "1rem", color: "#9CA3AF", lineHeight: 1.7, maxWidth: 460, margin: "0 0 32px" }}>
            Solo. 5 interviews. 2 test rounds. One working prototype.
          </p>
          <div className="csl-hero-chips">
            {ecoMeta.map((item) => (
              <span className="csl-hero-chip" key={item.label}>
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        </div>
        <div className="csl-hero-right">
          <EcoHeroPhoneScene />
        </div>
      </div>

      <div className="csl-hero-stats">
        {[
          { val: "5",   label: "Users interviewed"   },
          { val: "3",   label: "Competitors audited"  },
          { val: "2",   label: "Iteration rounds"    },
          { val: "4wk", label: "Sprint duration"     },
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
   HERO PHONE — no overflow clipping, drop-shadow preserves PNG corners
───────────────────────────────────────────────────────────────────── */
function EcoPhone({ src, alt, w, tilt }: { src: string; alt: string; w: number; tilt: string }) {
  return (
    <div style={{
      width: w,
      flexShrink: 0,
      transform: `rotate(${tilt})`,
      filter: "drop-shadow(0 20px 44px rgba(0,0,0,0.13)) drop-shadow(0 4px 10px rgba(0,0,0,0.07))",
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

function EcoHeroPhoneScene() {
  return (
    <div style={{ position: "relative", width: "100%", height: 540, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Pulsing green glow */}
      <div className="eco-hero-scene-glow" />
      {/* Left — onboarding2.png */}
      <div className="eco-hero-phone-left">
        <EcoPhone src="/Image/Ecotrack/onboarding2.png" alt="EcoTrack onboarding step 2" w={175} tilt="-7deg" />
      </div>
      {/* Center — onboarding1.png */}
      <div className="eco-hero-phone-center">
        <EcoPhone src="/Image/Ecotrack/onboarding1.png" alt="EcoTrack splash screen" w={230} tilt="0deg" />
      </div>
      {/* Right — onboarding5.png */}
      <div className="eco-hero-phone-right">
        <EcoPhone src="/Image/Ecotrack/onboarding5.png" alt="EcoTrack welcome screen" w={175} tilt="7deg" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ITERATION PHONE MOCKUPS
───────────────────────────────────────────────────────────────────── */
function TabBarPhone() {
  return (
    <div style={{ width: "100%", maxWidth: 190, margin: "0 auto", background: "#0A1F0F", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(255,100,100,0.3)", boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}>
      <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 36, height: 3, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#F2FAF3", padding: "12px 10px 8px", minHeight: 190 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#0D2312" }}>Good morning 🌱</p>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#D0EAD4" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 10, height: 80, marginBottom: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E8F7EC", border: "2px solid #2D7D43" }} />
          <p style={{ fontSize: "15px", color: "#3B6B45" }}>Today&apos;s footprint</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 8, height: 52 }} />
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", padding: "8px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: i === 0 ? 1 : 0.4 }}>
            <div style={{ width: 14, height: 14, background: i === 0 ? "#2D7D43" : "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: i === 0 ? "#2D7D43" : "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#D1D5DB", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -10 }}>
          <span style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1 }}>+</span>
        </div>
        {[2, 3].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: 0.4 }}>
            <div style={{ width: 14, height: 14, background: "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FABPhone() {
  return (
    <div style={{ width: "100%", maxWidth: 190, margin: "0 auto", background: "#0A1F0F", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(45,125,67,0.4)", boxShadow: "0 12px 32px rgba(45,125,67,0.2)" }}>
      <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 36, height: 3, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#F2FAF3", padding: "12px 10px 8px", minHeight: 190, position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#0D2312" }}>Good morning 🌱</p>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#D0EAD4" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 10, height: 80, marginBottom: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E8F7EC", border: "2px solid #2D7D43" }} />
          <p style={{ fontSize: "15px", color: "#3B6B45" }}>Today&apos;s footprint</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 8, height: 52 }} />
        <div style={{ position: "absolute", bottom: 12, right: 10, width: 36, height: 36, borderRadius: "50%", background: "#2D7D43", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(45,125,67,0.55)" }}>
          <span style={{ color: "#fff", fontSize: "1.1rem", lineHeight: 1, fontWeight: 300 }}>+</span>
        </div>
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", padding: "8px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        {[true, false, false, false].map((active, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: active ? 1 : 0.4 }}>
            <div style={{ width: 14, height: 14, background: active ? "#2D7D43" : "#9CA3AF", borderRadius: 3 }} />
            <div style={{ width: 10, height: 2, background: active ? "#2D7D43" : "#E5E7EB", borderRadius: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalChartCard() {
  return (
    <EcoCard>
      <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 12 }}>Carbon Metrics: Today</p>
      {[
        { label: "Transport CO₂e", val: "0.8 kg", sub: "CH4 equiv: 0.03", pct: "35%" },
        { label: "Electricity kWh", val: "1.1 kg", sub: "Scope 2: indirect", pct: "47%" },
        { label: "Food LCA",        val: "0.5 kg", sub: "Land use: 0.2",    pct: "18%" },
      ].map((row) => (
        <div key={row.label} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <p style={{ fontSize: "15px", color: "#374151" }}>{row.label}</p>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>{row.val}</p>
          </div>
          <div style={{ height: 5, background: "#F3F4F6", borderRadius: 3, marginBottom: 2 }}>
            <div style={{ width: row.pct, height: "100%", background: "#9CA3AF", borderRadius: 3 }} />
          </div>
          <p style={{ fontSize: "15px", color: "#9CA3AF" }}>{row.sub}</p>
        </div>
      ))}
      <div style={{ marginTop: 10, padding: "6px 10px", background: "#FEF2F2", borderRadius: 8 }}>
        <p style={{ fontSize: "15px", color: "#EF4444", fontWeight: 600}}>Total: 2.4 kg CO₂e · Scope 1+2</p>
      </div>
    </EcoCard>
  );
}

function ClearChartCard() {
  return (
    <EcoCard>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>Today&apos;s impact</p>
        <span style={{ fontSize: "15px", color: "#10B981", fontWeight: 600}}>↓ 18% vs yesterday</span>
      </div>
      {[
        { icon: "🚗", label: "Transport", bar: "72%", note: "≈ 8km drive"   },
        { icon: "⚡", label: "Energy",    bar: "45%", note: "≈ 2hrs AC"     },
        { icon: "🍽️", label: "Food",     bar: "30%", note: "≈ 1 meat meal" },
      ].map((row) => (
        <div key={row.label} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: "15px" }}>{row.icon}</span>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#374151", flex: 1 }}>{row.label}</p>
            <p style={{ fontSize: "15px", color: "#9CA3AF" }}>{row.note}</p>
          </div>
          <div style={{ height: 6, background: "#E8F7EC", borderRadius: 3 }}>
            <div style={{ width: row.bar, height: "100%", background: "#2D7D43", borderRadius: 3 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 10, padding: "6px 10px", background: "#E8F7EC", borderRadius: 8 }}>
        <p style={{ fontSize: "15px", color: "#2D7D43", fontWeight: 600}}>Good day. Below your weekly average.</p>
      </div>
    </EcoCard>
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
        title={<>End-to-end solo. Research to <Script>tested prototype.</Script></>}
        sub="Everything from screener survey to two rounds of usability testing. One designer, four weeks."
      />

      <div className="csl-reveal" style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, boxShadow: "0 20px 60px rgba(45,125,67,0.12)" }}>
        <EcoImg src="/Image/Ecotrack/ecotrack/cover.png" alt="EcoTrack app cover" />
        <div style={{ position: "absolute", bottom: 24, right: 24 }}>
          <HandNote text="4 weeks. one prototype." dir="up-right" />
        </div>
      </div>

      {/* Bento feature grid */}
      <div className="csl-reveal rd1" style={{
        display: "grid",
        gridTemplate: `"a a b" auto "c d b" auto / 1fr 1fr 1fr`,
        gap: 14,
      }}>
        <EcoCard style={{ gridArea: "a", display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: "1.6rem" }}>📊</span>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>Daily Footprint Tracking</p>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>Quick-log from home. Every extra tap was a reason to quit.</p>
        </EcoCard>

        <EcoCard style={{ gridArea: "b", background: "#0A1F0F", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 10, minHeight: 200 }}>
          <span style={{ fontSize: "1.6rem" }}>🌍</span>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>Impact Visualization</p>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>Raw CO₂ numbers reframed as plain-language comparisons.</p>
        </EcoCard>

        <EcoCard style={{ gridArea: "c", background: "#E8F7EC" }}>
          <span style={{ fontSize: "1.4rem", marginBottom: 8, display: "block" }}>💡</span>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 6 }}>Learning Hub</p>
          <p style={{ fontSize: "15px", color: "#3B6B45", lineHeight: 1.55 }}>Education as context, not a tab.</p>
        </EcoCard>

        <EcoCard style={{ gridArea: "d" }}>
          <span style={{ fontSize: "1.4rem", marginBottom: 8, display: "block" }}>📈</span>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 6 }}>Progress Profile</p>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.55 }}>Added after every tester asked &ldquo;am I getting better?&rdquo;</p>
        </EcoCard>
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
      <CsSectionHeader label="The Problem" title={<>Why motivated users <Script>still quit</Script> eco apps.</>} />

      <EcoCallout style={{ marginBottom: 28 }}>
        Motivated users abandon tracking not because they don&apos;t care. Existing apps optimise for <strong>data completeness over daily usability</strong>, making the act of tracking feel worse than not tracking at all.
      </EcoCallout>

      <div className="csl-reveal rd1" style={{ borderLeft: "3px solid #2D7D43", padding: "22px 28px", background: "#fff", borderRadius: "0 20px 20px 0", marginBottom: 36, boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)" }}>
        <p style={{ fontFamily: HAND, fontSize: "1.4rem", color: "#0D2312", lineHeight: 1.55, marginBottom: 10 }}>
          &ldquo;I opened Joro once, saw my score, felt terrible, and deleted it. I wasn&apos;t looking for a report card.&rdquo;
        </p>
        <p style={{ fontSize: "15px", color: "#3B6B45", fontWeight: 600}}>Interview participant, 26, product manager</p>
      </div>

      <p className="csl-section-eyebrow csl-reveal rd2">Project Constraints</p>
      <div className="csl-card-grid csl-reveal rd2">
        {[
          { icon: "📱", label: "iOS concept only", desc: "No backend. Carbon estimates are averaged. Approximate over complex." },
          { icon: "✂️", label: "Scope: daily habits", desc: "Offsets, social, leaderboards cut. The core loop had to work first." },
          { icon: "⏱️", label: "4-week sprint", desc: "Self-imposed deadline forced real prioritisation." },
          { icon: "🔬", label: "No longitudinal data", desc: "Insights from 45-minute sessions, not observed behaviour over time." },
        ].map((c) => (
          <EcoCard key={c.label}>
            <span style={{ fontSize: "1.3rem", display: "block", marginBottom: 10 }}>{c.icon}</span>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 6 }}>{c.label}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.55 }}>{c.desc}</p>
          </EcoCard>
        ))}
      </div>

      <SectionBridge text="Before designing anything, I needed to understand this problem through the people feeling it — not through assumptions." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  DESIGN PROCESS
───────────────────────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <CsSection id="process">
      <CsSectionHeader
        label="Design Thinking Process"
        title={<>Five phases.</>}
        sub="Double-diamond. The Define phase upended my assumptions entirely."
      />

      <p className="csl-reveal" style={{ fontFamily: HAND, fontSize: "1.6rem", color: "#2D7D43", marginBottom: 28, marginTop: -12 }}>
        only one went as planned.
      </p>

      <div className="csl-reveal rd1" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", gap: 0, position: "relative" }}>
          <div style={{ position: "absolute", top: 28, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, #2D7D43, #48A362, #2D7D43)", borderRadius: 2, zIndex: 0 }} />
          {ecoProcess.map((step) => (
            <div key={step.name} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: step.active ? "#2D7D43" : "#fff",
                border: `2px solid ${step.active ? "#2D7D43" : "#E5E7EB"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", marginBottom: 12,
                boxShadow: step.active ? "0 4px 16px rgba(45,125,67,0.3)" : "0 2px 8px rgba(0,0,0,0.05)",
              }}>
                {step.icon}
              </div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#2D7D43", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4, textAlign: "center" }}>
                {step.phase}
              </p>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", textAlign: "center" }}>{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="csl-process-grid csl-reveal rd2">
        {ecoProcess.map((step) => {
          const isDefine = step.name === "Define";
          return (
            <div
              key={step.name}
              className="csl-process-step"
              style={{
                ...(step.active ? { borderTopColor: "#2D7D43" } : {}),
                ...(isDefine ? {
                  background: "#0A1F0F",
                  borderTopColor: "#2D7D43",
                  gridColumn: "span 1",
                } : {}),
              }}
            >
              <div className="csl-process-num" style={isDefine ? { color: "rgba(72,163,98,0.85)" } : {}}>{step.phase}</div>
              <div className="csl-process-title" style={isDefine ? { color: "#fff" } : {}}>{step.name}</div>
              <p className="csl-process-text" style={isDefine ? { color: "rgba(255,255,255,0.65)" } : {}}>{step.desc}</p>
              {isDefine && (
                <span style={{
                  fontSize: "0.72rem", fontWeight: 700,
                  background: "#2D7D43", color: "#fff",
                  padding: "3px 10px", borderRadius: 100,
                  display: "inline-block", marginTop: 12,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  pivot point
                </span>
              )}
            </div>
          );
        })}
      </div>

      <SectionBridge text="The double-diamond looked tidy on paper. The Define phase is where assumptions broke down — and the real problem surfaced." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  USER RESEARCH
───────────────────────────────────────────────────────────────────── */
function ResearchSection() {
  const rootRef = useRef<HTMLElement>(null);
  useCountAnimation(rootRef as React.RefObject<HTMLElement | null>);

  return (
    <CsSection id="research">
      <CsSectionHeader
        label="User Research"
        title={<>What I expected to find. <Script>What I actually found.</Script></>}
        sub="I recruited people who described themselves as eco-conscious but inconsistent. Not existing app users."
      />

      {/* Big insight hero */}
      <div className="csl-reveal" style={{
        padding: "32px 36px",
        background: "linear-gradient(135deg, #0A1F0F 0%, #1B4022 100%)",
        borderRadius: 20,
        marginBottom: 24,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -60, right: -40, width: 240, height: 240, background: "radial-gradient(circle, rgba(45,125,67,0.28), transparent 70%)", pointerEvents: "none" }} />
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(72,163,98,0.85)", marginBottom: 12 }}>
          The finding that changed everything
        </p>
        <p style={{ fontFamily: HAND, fontSize: "2.5rem", color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
          68% felt judged,<br />not helped.
        </p>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.68)", lineHeight: 1.75, maxWidth: 520 }}>
          I expected to fix a UX problem. Research surfaced an emotional one. The brief wasn&apos;t &ldquo;make tracking easier&rdquo; — it was &ldquo;make it feel safe to be imperfect.&rdquo;
        </p>
      </div>

      {/* Supporting stats */}
      <div
        ref={rootRef as React.RefObject<HTMLDivElement>}
        className="csl-metrics csl-reveal rd1"
      >
        {ecoResearchStats.map((stat) => (
          <div key={stat.label} className="csl-metric">
            <p className="eco-count csl-metric-val" data-target={stat.value} data-suffix={stat.suffix}>
              0{stat.suffix}
            </p>
            <p className="csl-metric-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Finding → Decision chain */}
      <div style={{ marginTop: 28 }} className="csl-reveal rd2">
        <p className="csl-section-eyebrow" style={{ marginBottom: 14 }}>Finding → Design decision</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { finding: <><EcoNum>3/5</EcoNum> had quit an app within the first <EcoNum>10</EcoNum> days</>, decision: "First-time logging became the primary design problem. Not the dashboard." },
            { finding: "No one wanted to manually log food in detail", decision: "Quick-select cards replace free-form input. Speed over completeness." },
            { finding: "Every extra navigation step caused 1–2 testers to abandon the task", decision: "Log without leaving home screen. The FAB exists because of this single observation." },
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "center" }}>
              <div style={{ background: "#FEF2F2", borderRadius: 14, padding: "13px 16px" }}>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>🔍 {row.finding}</p>
              </div>
              <span style={{ fontSize: "15px", color: "#D1D5DB" }}>→</span>
              <div style={{ background: "#E8F7EC", borderRadius: 14, padding: "13px 16px" }}>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>✓ {row.decision}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionBridge text="Those findings had faces. Two archetypes turned raw data into design decisions." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05+06  AUDIENCE & PERSONAS  (merged)
───────────────────────────────────────────────────────────────────── */
function PersonasSection() {
  return (
    <CsSection id="personas">
      <CsSectionHeader
        label="Audience & Personas"
        title={<>Three segments. <Script>Two design lenses.</Script></>}
        sub="Research defined who I was designing for. Two personas made that concrete."
      />

      {/* Audience segments strip */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 32 }}>
        {[
          { icon: "🌱", label: "Eco-Curious Beginner", desc: "Cares but overwhelmed. Needs wins, not warnings." },
          { icon: "🚲", label: "Active Eco-Enthusiast", desc: "Built habits already. Wants proof they matter." },
          { icon: "🔄", label: "Lapsed Eco-App User", desc: "Burned by guilt-driven data. Trust is the entry point." },
        ].map((seg) => (
          <div key={seg.label} style={{
            padding: "18px 18px",
            background: "#fff",
            borderRadius: 14,
            borderTop: "3px solid #2D7D43",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
          }}>
            <span style={{ fontSize: "1.35rem", display: "block", marginBottom: 10 }}>{seg.icon}</span>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{seg.label}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.5 }}>{seg.desc}</p>
          </div>
        ))}
      </div>

      <p className="csl-section-eyebrow csl-reveal rd1" style={{ marginBottom: 16 }}>Two archetypes shaped every screen</p>

      <div className="csl-card-2col csl-reveal rd1">
        {[
          { photo: "user-persona.png",  name: "Priya Sharma", tag: "22 · College Student · Mumbai",      bg: "#E8F7EC", empathy: ecoEmpathy1 },
          { photo: "user-persona2.png", name: "Arjun Mehta",  tag: "28 · Product Manager · Bangalore",   bg: "#D0EAD4", empathy: ecoEmpathy2 },
        ].map((p) => (
          <div key={p.name} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.05)" }}>
            <div style={{ height: 220, overflow: "hidden", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <EcoImg src={`/Image/Ecotrack/${p.photo}`} alt={p.name} style={{ height: "100%", width: "auto", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "22px" }}>
              <p style={{ fontSize: "0.96rem", fontWeight: 700, color: "#111827", marginBottom: 2 }}>{p.name}</p>
              <p style={{ fontSize: "15px", color: "#9CA3AF", marginBottom: 16 }}>{p.tag}</p>
              {p.empathy.slice(0, 3).map((row) => (
                <div key={row.cat} style={{ borderTop: "1px solid #F3F4F6", paddingTop: 10, marginTop: 10 }}>
                  <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 3 }}>{row.cat}</p>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.5 }}>{row.insight}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SectionBridge text="With the audience defined, I audited what already existed — and studied the moment users stopped wanting to open each app." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §07  COMPETITIVE ANALYSIS
───────────────────────────────────────────────────────────────────── */
function CompetitiveSection() {
  return (
    <CsSection id="competitive">
      <CsSectionHeader
        label="Competitor Analysis"
        title={<>What each app taught me. <Script>And what changed.</Script></>}
        sub="I used each app for 2 to 3 days. I paid attention to the moment I stopped wanting to open it."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }} className="csl-reveal">
        {ecoCompetitors.map((comp) => (
          <EcoCard key={comp.name} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.4fr" }}>
              <div style={{ padding: "16px 18px", borderRight: "1px solid #F3F4F6" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 10 }}>{comp.name}</p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Pros</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.pros.map((p) => (
                    <li key={p} style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.55, marginBottom: 3, display: "flex", gap: 5 }}>
                      <span style={{ color: "#10B981", flexShrink: 0 }}>+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "16px 18px", borderRight: "1px solid #F3F4F6" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "transparent", marginBottom: 10, userSelect: "none" }}>·</p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Cons</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {comp.cons.map((c) => (
                    <li key={c} style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.55, marginBottom: 3, display: "flex", gap: 5 }}>
                      <span style={{ color: "#EF4444", flexShrink: 0 }}>–</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "16px 18px", background: "#F9FAFB" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#2D7D43", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Design decision</p>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>{comp.decision}</p>
              </div>
            </div>
          </EcoCard>
        ))}
      </div>

      <EcoCallout style={{ marginTop: 20 }}>
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>💡</span>
        No single app was bad. Each excelled at one thing. EcoTrack&apos;s brief: make daily logging so frictionless that users don&apos;t need anything else to build a habit.
      </EcoCallout>

      <SectionBridge text="The audit wasn't inspiration — it was permission to make hard, explicit rejections in every design choice that followed." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §08  VISUAL DESIGN
───────────────────────────────────────────────────────────────────── */
function DesignSection() {
  return (
    <CsSection id="design">
      <CsSectionHeader
        label="Colors & Typography"
        title={<>Every decision had an alternative <Script>I chose not to use.</Script></>}
        sub="Design choices are easier to evaluate when you know what was rejected."
      />

      <div className="csl-reveal" style={{ borderRadius: 20, overflow: "hidden", marginBottom: 32, boxShadow: "0 8px 40px rgba(45,125,67,0.08)" }}>
        <EcoImg src="/Image/Ecotrack/colors.png" alt="EcoTrack color system" />
      </div>

      <EcoCard style={{ marginBottom: 20 }} className="csl-reveal rd1">
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 12 }}>Colour decision</p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.7, marginBottom: 20 }}>
          Tested <EcoNum>3</EcoNum> green values. Lime-green was too optimistic, celebrating before the user did anything. Forest green felt preachy. <strong style={{ color: "#111827" }}>#2D7D43 sits between: calm, credible, grown-up.</strong>
        </p>
        <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
          {["#2D7D43", "#48A362", "#E8F7EC", "#0A1F0F", "#111827", "#6B7280"].map((hex) => (
            <div key={hex} style={{ flex: 1, height: 52, background: hex }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {[
            { hex: "#2D7D43", name: "Primary",   role: "Accent · CTA" },
            { hex: "#48A362", name: "Secondary",  role: "Charts" },
            { hex: "#E8F7EC", name: "Surface",    role: "Card tints" },
            { hex: "#0A1F0F", name: "Dark BG",    role: "Hero" },
            { hex: "#111827", name: "Ink",        role: "Headings" },
            { hex: "#6B7280", name: "Muted",      role: "Body copy" },
          ].map((s, i) => (
            <div key={s.hex} style={{ padding: "8px 6px", borderRight: i < 5 ? "1px solid #F3F4F6" : "none" }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 1 }}>{s.name}</p>
              <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif", marginBottom: 2 }}>{s.hex}</p>
              <p style={{ fontSize: "15px", color: "#6B7280" }}>{s.role}</p>
            </div>
          ))}
        </div>
      </EcoCard>

      <EcoCard className="csl-reveal rd2">
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 16 }}>Typeface decision</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
          {[
            { name: "DM Sans", verdict: "Rejected", reason: "Too friendly. Wrong register for a data tool.", chosen: false },
            { name: "Nunito",  verdict: "Rejected", reason: "Rounded terminals looked playful at small sizes.", chosen: false },
            { name: "Inter",   verdict: "Chosen",   reason: "Trustworthy, data-appropriate, excellent at every weight.", chosen: true },
          ].map((t) => (
            <div key={t.name} style={{ padding: "14px 16px", borderRadius: 14, background: t.chosen ? "#E8F7EC" : "#F9FAFB", border: `1.5px solid ${t.chosen ? "#2D7D43" : "transparent"}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: t.chosen ? "#2D7D43" : "#6B7280" }}>{t.name}</p>
                <span style={{ fontSize: "15px", fontWeight: 600, padding: "2px 8px", borderRadius: 100, background: t.chosen ? "#2D7D43" : "#E5E7EB", color: t.chosen ? "#fff" : "#9CA3AF" }}>{t.verdict}</span>
              </div>
              <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.5 }}>{t.reason}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { w: 700, label: "Bold",    meta: "700 · Headings" },
            { w: 500, label: "Medium",  meta: "500 · Labels"   },
            { w: 400, label: "Regular", meta: "400 · Body"     },
            { w: 300, label: "Light",   meta: "300 · Captions" },
          ].map((t) => (
            <div key={t.label}>
              <p style={{ fontSize: "1rem", fontWeight: t.w, color: "#111827", marginBottom: 4 }}>{t.label}</p>
              <p style={{ fontSize: "15px", color: "#9CA3AF", fontFamily: "Lato, sans-serif" }}>{t.meta}</p>
            </div>
          ))}
        </div>
      </EcoCard>

      <SectionBridge text="Visual language locked. Next: structure — and the first brutal cuts." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §09  WIREFRAMES
───────────────────────────────────────────────────────────────────── */
function WireframesSection() {
  const wfNotes: Record<string, string> = {
    "w1.png":  "Home Dashboard",
    "w2.png":  "Activity Log",
    "w3.png":  "Carbon Detail",
    "w4.png":  "Add Activity",
    "w5.png":  "Quick Log",
    "w6.png":  "Learning Hub",
    "w7.png":  "Learn Detail",
    "w8.png":  "Progress View",
    "w9.png":  "Weekly Chart",
    "w10.png": "Profile & Goals",
    "w11.png": "Onboarding",
    "w12.png": "Permissions",
  };

  return (
    <CsSection id="wireframes">
      <CsSectionHeader
        label="Mid-Fidelity Wireframes"
        title={<>IA first. <Script>Screens second.</Script></>}
        sub="One filter: can a first-time user complete this on day one? Everything that failed the filter was cut."
      />

      {/* 23 → 12 cut visualization */}
      <div className="csl-reveal" style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 24,
        marginBottom: 28,
        padding: "24px",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
        alignItems: "start",
      }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: HAND, fontSize: "2.6rem", color: "#9CA3AF", lineHeight: 1 }}>23</p>
          <p style={{ fontSize: "15px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>ideas</p>
          <div style={{ height: 2, background: "#F3F4F6", marginBottom: 10 }} />
          <p style={{ fontFamily: HAND, fontSize: "2.2rem", color: "#2D7D43", lineHeight: 1 }}>12</p>
          <p style={{ fontSize: "15px", color: "#2D7D43", textTransform: "uppercase", letterSpacing: "0.1em" }}>kept</p>
        </div>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Failed the day-one filter</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 20px" }}>
            {[
              "Social sharing & leaderboards",
              "Carbon offset purchases",
              "Lifecycle analysis",
              "Streak mechanics",
              "Friend comparisons",
              "Batch import from bank",
              "Detailed food calculations",
              "Export to CSV",
              "Custom notification rules",
              "In-app community",
              "Carbon offsetting marketplace",
            ].map((item) => (
              <p key={item} style={{ fontSize: "15px", color: "#C4C9D4", textDecoration: "line-through", lineHeight: 1.5 }}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="csl-reveal rd1" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
        {Object.entries(wfNotes).map(([file, label]) => (
          <div key={file} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ borderRadius: 14, overflow: "hidden", background: "#F9FAFB", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)" }}>
              <EcoImg src={`/Image/Ecotrack/${file}`} alt={label} />
            </div>
            <p style={{ fontSize: "15px", color: "#6B7280", textAlign: "center", fontWeight: 600}}>{label}</p>
          </div>
        ))}
      </div>

      <EcoCallout>
        Social sharing, streak mechanics, carbon offsets, and lifecycle analysis all failed the day-one filter. What remained: home, activity log, impact breakdown, learning, progress.
      </EcoCallout>

      <SectionBridge text="The skeleton held. The question was whether first-time users could actually navigate it." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §10  ONBOARDING SHOWCASE
───────────────────────────────────────────────────────────────────── */
function OnboardingSection() {
  const row1 = [
    { file: "onboarding1.png", label: "Splash",               sub: "EcoTrack logo" },
    { file: "onboarding2.png", label: "Track What Matters",   sub: "See your footprint in real time" },
    { file: "onboarding3.png", label: "Small Steps, Big Change", sub: "Log daily actions, get eco tips" },
    { file: "onabording6.png", label: "Join the Eco Journey", sub: "Earn badges, build habits" },
    { file: "onboarding5.png", label: "Welcome",              sub: "Sign In / Sign Up" },
    { file: "onboarding4.png", label: "Sign Up",              sub: "Name · Email · Password" },
  ];
  const row2 = [
    { file: "onboarding7.png", label: "Sign In",              sub: "\"Let's continue your journey.\"" },
    { file: "onboarding8.png", label: "Your Travel Habits",   sub: "Car · Flights · Walking · Public Transport · Bicycle" },
    { file: "onboarding9.png", label: "Your Home Energy Use", sub: "Apartment · House · Shared · Monthly kWh" },
  ];

  return (
    <CsSection id="onboarding">
      <CsSectionHeader
        label="High Fidelity: OnBoarding"
        title={<>Nine screens. <Script>One commitment at a time.</Script></>}
        sub="V1 asked for too much before showing any value. 2 testers dropped off before setup was complete. V2 earns trust first, then asks."
      />

      <div className="csl-reveal rd1" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, marginBottom: 20 }}>
        {row1.map(({ file, label, sub }) => (
          <div key={file} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(45,125,67,0.12)" }}>
              <EcoImg src={`/Image/Ecotrack/${file}`} alt={label} />
            </div>
            <p style={{ fontSize: "15px", color: "#111827", textAlign: "center", fontWeight: 600, lineHeight: 1.3 }}>{label}</p>
            <p style={{ fontSize: "15px", color: "#9CA3AF", textAlign: "center", lineHeight: 1.3 }}>{sub}</p>
          </div>
        ))}
      </div>

      <div className="csl-reveal rd2" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 28 }}>
        {row2.map(({ file, label, sub }) => (
          <div key={file} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 28px rgba(45,125,67,0.1)" }}>
              <EcoImg src={`/Image/Ecotrack/${file}`} alt={label} />
            </div>
            <p style={{ fontSize: "15px", color: "#111827", textAlign: "center", fontWeight: 600}}>{label}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", textAlign: "center", lineHeight: 1.45 }}>{sub}</p>
          </div>
        ))}
      </div>

      <div className="csl-card-2col csl-reveal rd3">
        <EcoCard style={{ background: "#E8F7EC" }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#0D2312", marginBottom: 10 }}>What changed in V2</p>
          {[
            "Value-first: 3 inspiration screens before any form",
            "Sign Up deferred until after the user sees the app",
            "Quick-select tiles replace free text for habits",
          ].map((item) => (
            <div key={item} style={{ fontSize: "15px", color: "#374151", lineHeight: 1.55, marginBottom: 6, display: "flex", gap: 7 }}>
              <span style={{ color: "#2D7D43", flexShrink: 0 }}>✓</span>{item}
            </div>
          ))}
        </EcoCard>
        <EcoCard style={{ background: "#FEF2F2" }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#7F1D1D", marginBottom: 10 }}>What V1 got wrong</p>
          {[
            "Sign Up form on screen 2, before any context",
            "Free-text fields for travel distance and energy",
            "2 testers abandoned before completing setup",
          ].map((item) => (
            <div key={item} style={{ fontSize: "15px", color: "#374151", lineHeight: 1.55, marginBottom: 6, display: "flex", gap: 7 }}>
              <span style={{ color: "#EF4444", flexShrink: 0 }}>✕</span>{item}
            </div>
          ))}
        </EcoCard>
      </div>

      <SectionBridge text="Onboarding earns entry. The core screens have to sustain it." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §11  APP SCREENS SHOWCASE
───────────────────────────────────────────────────────────────────── */
function ScreensSection() {
  return (
    <CsSection id="screens">
      <CsSectionHeader
        label="High Fidelity: Core App Screens"
        title={<>Five views. <Script>One coherent system.</Script></>}
        sub="Each screen answers one question without requiring the user to navigate away."
      />

      {/* ── Home Screen — 3-column annotated layout ── */}
      <div className="csl-reveal" style={{ marginBottom: 60 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 28, textAlign: "center" }}>Home Screen</p>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 0, marginBottom: 24 }}>

          {/* Left annotation column — right-aligned so arrows point toward phone */}
          <div style={{ width: 200, position: "relative", minHeight: 520, flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 32, right: 8, textAlign: "right" }}>
              <HandNote text="personalised greeting" dir="right" />
            </div>
            <div style={{ position: "absolute", top: 195, right: 8, textAlign: "right" }}>
              <HandNote text="emission breakdown" dir="right" />
            </div>
            <div style={{ position: "absolute", top: 360, right: 8, textAlign: "right" }}>
              <HandNote text="inline education" dir="right" />
            </div>
          </div>

          {/* Phone centered */}
          <div style={{
            width: 200,
            height: 520,
            overflow: "hidden",
            borderRadius: 28,
            boxShadow: "0 28px 72px rgba(45,125,67,0.22)",
            border: "1.5px solid rgba(45,125,67,0.18)",
            flexShrink: 0,
          }}>
            <EcoImg src="/Image/Ecotrack/home-screen.png" alt="EcoTrack home screen" />
          </div>

          {/* Right annotation column — left-aligned so arrows point toward phone */}
          <div style={{ width: 200, position: "relative", minHeight: 520, flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 100, left: 8 }}>
              <HandNote text="65% below avg" dir="left" />
            </div>
            <div style={{ position: "absolute", top: 270, left: 8 }}>
              <HandNote text="one tip, one action" dir="left" />
            </div>
            <div style={{ position: "absolute", top: 455, left: 8 }}>
              <HandNote text="log in one tap" dir="left" />
            </div>
          </div>
        </div>

        <EcoCallout style={{ marginBottom: 0 }}>
          The greeting leads with your name, then positive framing: <strong>&ldquo;You&apos;re <EcoNum>15%</EcoNum> below average.&rdquo;</strong> Good news before data. The ring frames the number as progress, not accusation.
        </EcoCallout>
      </div>

      {/* ── Impact Screen ── */}
      <div className="csl-reveal rd1" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Impact Screen</p>
        <p style={{ fontFamily: HAND, fontSize: "1.35rem", color: "#111827", marginBottom: 10 }}>Badges · Emission Graph · Carbon Sources</p>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.75, marginBottom: 22 }}>
          Answers &ldquo;am I getting better?&rdquo; through <EcoNum>3</EcoNum> lenses. Badges celebrate milestones. The emission graph shows actual CO₂ reduction over time. Carbon Sources shows the donut of where emissions come from, so users can identify which category to work on next.
        </p>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(45,125,67,0.1)" }}>
          <EcoImg src="/Image/Ecotrack/impact%20screen.png" alt="EcoTrack impact screen" />
          <div style={{ position: "absolute", bottom: 28, right: 28 }}>
            <HandNote text="progress, not punishment." dir="up-right" />
          </div>
        </div>
      </div>

      {/* ── Learn Screen ── */}
      <div className="csl-reveal rd2" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Learn Screen</p>
        <p style={{ fontFamily: HAND, fontSize: "1.35rem", color: "#111827", marginBottom: 10 }}>Eco Quiz · Knowledge Bites · Watch & Learn</p>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.75, marginBottom: 22 }}>
          A standalone &ldquo;Learn&rdquo; tab doesn&apos;t get opened. So this screen mixes formats: an Eco Quiz for engagement, Knowledge Bites for quick reads, Watch &amp; Learn for video. The tracking panel on the same screen proves that learn and log belong together.
        </p>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(45,125,67,0.1)" }}>
          <EcoImg src="/Image/Ecotrack/learn-screen.png" alt="EcoTrack learn screen" />
          <div style={{ position: "absolute", top: 28, right: 28 }}>
            <HandNote text="learn while you log." dir="down" />
          </div>
        </div>
      </div>

      {/* ── Profile Screen ── */}
      <div className="csl-reveal rd3">
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2D7D43", marginBottom: 14 }}>Profile Screen</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.1)" }}>
              <EcoImg src="/Image/Ecotrack/profile-screen.png" alt="EcoTrack profile screen" />
            </div>
            <div style={{ position: "absolute", bottom: -20, right: -60 }}>
              <HandNote text="35.8 kg saved. quietly." dir="left" />
            </div>
          </div>
          <div>
            <p style={{ fontFamily: HAND, fontSize: "1.4rem", color: "#111827", marginBottom: 14, lineHeight: 1.3 }}>
              David · <EcoNum>35.8 kg</EcoNum> CO₂ Saved · Member since February 2024
            </p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.75, marginBottom: 20 }}>
              <EcoNum>3</EcoNum> stats directly below the avatar: CO₂ Saved, Member Since, and <EcoNum>+5%</EcoNum> Weekly Trend. Answers &ldquo;am I getting better?&rdquo; with no leaderboard, no streak counter. Personal progress only.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Edit Profile", "Preference", "Support", "Log out"].map((item) => (
                <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", background: "#F9FAFB", borderRadius: 12 }}>
                  <p style={{ fontSize: "15px", color: "#374151", fontWeight: 600}}>{item}</p>
                  <span style={{ fontSize: "15px", color: "#C4C9D4" }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionBridge text="The screens looked right in Figma. Then real users sat down with them." />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §12  USER TESTING + ITERATIONS
───────────────────────────────────────────────────────────────────── */
function IterationsSection() {
  return (
    <CsSection id="iterations">
      <CsSectionHeader
        label="User Testing & Before After"
        title={<>Two hypotheses that failed. <Script>And what replaced them.</Script></>}
        sub="Documented as hypothesis-test-update cycles. The original decisions had reasoning. And that reasoning was wrong."
      />

      <EcoCard style={{ marginBottom: 28 }} className="csl-reveal">
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 14 }}>Round 1 Task Completion (n=<EcoNum>5</EcoNum>)</p>
        {[
          { task: "Log a commute",    score: "3/5", pct: "60%" },
          { task: "Compare weeks",     score: "5/5", pct: "100%" },
          { task: "Find a tip",        score: "4/5", pct: "80%" },
          { task: "Add a weekly goal", score: "2/5", pct: "40%" },
        ].map((row) => (
          <div key={row.task} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <p style={{ fontSize: "15px", color: "#374151" }}>{row.task}</p>
              <p style={{ fontSize: "15px", fontWeight: 600, color: parseFloat(row.pct) < 70 ? "#EF4444" : "#2D7D43" }}>{row.score}</p>
            </div>
            <div style={{ height: 6, background: "#F3F4F6", borderRadius: 3 }}>
              <div style={{ width: row.pct, height: "100%", background: parseFloat(row.pct) < 70 ? "#FCA5A5" : "#48A362", borderRadius: 3 }} />
            </div>
          </div>
        ))}
        <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.6, marginTop: 14 }}>Tasks 1 and 4 failed due to navigation, not content. The fix was structural.</p>
      </EcoCard>

      <EcoCard style={{ marginBottom: 36 }} className="csl-reveal rd1">
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2D7D43", marginBottom: 14 }}>What I Observed</p>
        {ecoTestInsights.map((insight) => (
          <div key={insight} style={{ display: "flex", gap: 10, marginBottom: 12, fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>
            <span style={{ color: "#EF4444", flexShrink: 0, marginTop: 1 }}>→</span>{insight}
          </div>
        ))}
      </EcoCard>

      {/* Iteration 01 */}
      <div className="csl-reveal" style={{ marginBottom: 44 }}>
        <span style={{ fontSize: "15px", fontWeight: 600, background: "#E8F7EC", color: "#2D7D43", padding: "4px 14px", borderRadius: 100, display: "inline-flex", marginBottom: 14 }}>Iteration 01</span>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 14 }}>The Add Button. From Hidden to Front and Centre.</h3>
        <EcoCallout style={{ marginBottom: 20, borderLeftColor: "#9CA3AF", background: "#F9FAFB" }}>
          <strong>Hypothesis:</strong> A centered tab bar add button mirrors Instagram and Spotify. Reality: <EcoNum>4/5</EcoNum> testers couldn&apos;t find it within <EcoNum>90</EcoNum> seconds.
        </EcoCallout>
        <div className="csl-ba-grid">
          <div>
            <p className="csl-ba-label before">✕ Hypothesis (V1)</p>
            <TabBarPhone />
            <p className="csl-ba-desc">Centered tab bar button. The add action is the primary action on home. It belongs on the screen, not in navigation chrome.</p>
          </div>
          <div>
            <p className="csl-ba-label after">✓ Updated Design (V2)</p>
            <FABPhone />
            <p className="csl-ba-desc">Floating action button. Round 2: all <EcoNum>5/5</EcoNum> testers found it immediately. The FAB signals primacy.</p>
          </div>
        </div>
      </div>

      {/* Iteration 02 */}
      <div className="csl-reveal rd1">
        <span style={{ fontSize: "15px", fontWeight: 600, background: "#E8F7EC", color: "#2D7D43", padding: "4px 14px", borderRadius: 100, display: "inline-flex", marginBottom: 14 }}>Iteration 02</span>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: 14 }}>Carbon Charts. From Technical to Human.</h3>
        <EcoCallout style={{ marginBottom: 20, borderLeftColor: "#9CA3AF", background: "#F9FAFB" }}>
          <strong>Hypothesis:</strong> Exact CO₂ values with breakdowns would give users the understanding they wanted. They could read the numbers. They just felt worse after.
        </EcoCallout>
        <div className="csl-ba-grid">
          <div>
            <p className="csl-ba-label before">✕ Hypothesis (V1)</p>
            <TechnicalChartCard />
            <p className="csl-ba-desc"><EcoNum>3</EcoNum> testers: &quot;meaningless&quot; or &quot;like seeing calories on a menu, just guilt.&quot; The problem wasn&apos;t the design. It was the frame.</p>
          </div>
          <div>
            <p className="csl-ba-label after">✓ Updated Design (V2)</p>
            <ClearChartCard />
            <p className="csl-ba-desc">Comparative framing (↓ <EcoNum>18%</EcoNum> vs yesterday) with plain-language equivalents. Same data, different register. After: users said &quot;motivating,&quot; not &quot;depressing.&quot;</p>
          </div>
        </div>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §13  OUTCOMES
───────────────────────────────────────────────────────────────────── */
function OutcomesSection() {
  return (
    <CsSection id="outcomes">
      <CsSectionHeader
        label="Outcomes"
        title={<>Two iterations. <Script>One word that said everything.</Script></>}
        sub="The numbers improved. But the most telling signal was the language participants used."
      />

      {/* Language shift hero */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center", marginBottom: 28 }}>
        <EcoCard style={{ background: "#FEF2F2", textAlign: "center", padding: "30px 20px" }}>
          <p style={{ fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#EF4444", marginBottom: 10 }}>Round 1 · Most said</p>
          <p style={{ fontFamily: HAND, fontSize: "2.4rem", color: "#7F1D1D", lineHeight: 1 }}>&ldquo;complicated&rdquo;</p>
          <p style={{ fontSize: "15px", color: "#6B7280", marginTop: 10, lineHeight: 1.5 }}>Every screen competed for attention</p>
        </EcoCard>
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <p style={{ fontFamily: HAND, fontSize: "2rem", color: "#2D7D43", lineHeight: 1 }}>→</p>
          <p style={{ fontSize: "15px", color: "#9CA3AF", marginTop: 6 }}>2 iterations</p>
        </div>
        <EcoCard style={{ background: "#E8F7EC", textAlign: "center", padding: "30px 20px" }}>
          <p style={{ fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D7D43", marginBottom: 10 }}>Round 2 · Most said</p>
          <p style={{ fontFamily: HAND, fontSize: "2.4rem", color: "#2D7D43", lineHeight: 1 }}>&ldquo;simple&rdquo;</p>
          <p style={{ fontSize: "15px", color: "#374151", marginTop: 10, lineHeight: 1.5 }}>Same data. Prioritised, not reduced.</p>
        </EcoCard>
      </div>

      {/* Task improvement deltas */}
      <EcoCard className="csl-reveal rd1" style={{ marginBottom: 28 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: 18 }}>
          3 of 4 tasks improved — here&apos;s what moved the needle
        </p>
        {[
          { task: "Log a morning commute", r1: "3/5", r2: "5/5", why: "FAB replaced buried tab button" },
          { task: "Find an actionable food tip", r1: "4/5", r2: "5/5", why: "Comparative framing replaced raw CO₂ numbers" },
          { task: "Add a new weekly goal", r1: "2/5", r2: "4/5", why: "Goals separated from the Profile tab" },
        ].map((row, i) => (
          <div key={row.task} style={{
            display: "grid",
            gridTemplateColumns: "1fr 52px 52px 1fr",
            gap: 12,
            alignItems: "center",
            padding: "13px 0",
            borderBottom: i < 2 ? "1px solid #F3F4F6" : "none",
          }}>
            <p style={{ fontSize: "15px", color: "#374151", fontWeight: 600 }}>{row.task}</p>
            <p style={{ fontSize: "15px", color: "#9CA3AF", textAlign: "center" }}>{row.r1}</p>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#2D7D43", textAlign: "center" }}>{row.r2}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.45, borderLeft: "1px solid #F3F4F6", paddingLeft: 12 }}>
              ↑ {row.why}
            </p>
          </div>
        ))}
      </EcoCard>

      <EcoCallout className="csl-reveal rd2">
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>📌</span>
        <strong>Honest caveat:</strong> <EcoNum>5</EcoNum> participants per round validates direction, not production readiness. The real test — <EcoNum>30</EcoNum>-day retention — requires a live product. This sprint can&apos;t generate that number, and that&apos;s the correct thing to say.
      </EcoCallout>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §14  LEARNINGS
───────────────────────────────────────────────────────────────────── */
function LearningsSection() {
  return (
    <CsSection id="learnings" last>
      <CsSectionHeader
        label="Key Learnings"
        title={<>What this project taught me. <Script>Including what I got wrong.</Script></>}
        sub="Not general principles. Specific things I didn't know before, or thought I knew and found out I didn't."
      />

      <div className="csl-card-grid csl-reveal">
        {ecoLearnings.map((l) => (
          <EcoCard key={l.title}>
            <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 12 }}>{l.icon}</span>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: 8 }}>{l.title}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>{l.desc}</p>
          </EcoCard>
        ))}
      </div>

      {/* Handwritten closing */}
      <div className="csl-reveal rd1" style={{ textAlign: "center", padding: "60px 0 32px" }}>
        <p style={{ fontFamily: HAND, fontSize: "2.4rem", color: "#2D7D43", marginBottom: 10 }}>
          thanks for reading.
        </p>
        <p style={{ fontFamily: HAND, fontSize: "1.2rem", color: "#9CA3AF" }}>
          if this project made you think, it did its job.
        </p>
        <svg width="160" height="12" viewBox="0 0 160 12" fill="none" style={{ margin: "16px auto 0", display: "block" }}>
          <path d="M4 8 Q20 2 40 8 Q60 14 80 8 Q100 2 120 8 Q140 14 156 8" stroke="#2D7D43" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      <Link href="/projects/biblofi" className="csl-next csl-reveal rd2" style={{ marginTop: 8 }}>
        <div>
          <p className="csl-next-label">Next Case Study</p>
          <p className="csl-next-title">BibloFi: Library Management System</p>
        </div>
        <span className="csl-next-arrow">→</span>
      </Link>
    </CsSection>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════════════════ */
export function EcotrackCaseStudy() {
  return (
    <CaseStudyPage
      theme="eco"
      title="EcoTrack"
      tag="iOS App · Sustainability"
      tocItems={TOC_ITEMS}
      metaRows={META_ROWS}
      hero={<EcoHero />}
    >
      <OverviewSection />
      <ProblemSection />
      <ProcessSection />
      <ResearchSection />
      <PersonasSection />
      <CompetitiveSection />
      <DesignSection />
      <WireframesSection />
      <OnboardingSection />
      <ScreensSection />
      <IterationsSection />
      <OutcomesSection />
      <LearningsSection />
    </CaseStudyPage>
  );
}
