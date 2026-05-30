"use client";

import { useEffect, useRef, useState } from "react";
import { CaseStudyPage, CsSection, CsSectionHeader } from "./CaseStudyLayout";

/* ─────────────────────────────────────────────────────────────────────
   COUNT-UP HOOK
───────────────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setValue(Math.round(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { value, ref };
}

/* ─────────────────────────────────────────────────────────────────────
   TOC
───────────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: "overview",    label: "Overview"     },
  { id: "foundations", label: "Foundations"  },
  { id: "components",  label: "Components"   },
  { id: "in-wild",     label: "In the Wild"  },
  { id: "impact",      label: "Impact"       },
];

const ACCENT = "#1076BC";
const font = "Lato, sans-serif";

/* ─────────────────────────────────────────────────────────────────────
   FIGMA EMBED
───────────────────────────────────────────────────────────────────── */
const FIGMA_BASE =
  "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/iwqDFTjLmGMWGnM79LOMUB/Design-System-nik%3Fnode-id%3D";

function FigmaEmbed({ nodeId, title, height = 480 }: { nodeId: string; title: string; height?: number }) {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(16,118,188,0.12)", background: "#f8fafc" }}>
      <iframe
        src={`${FIGMA_BASE}${nodeId}&hide-ui=1`}
        title={title}
        width="100%"
        height={height}
        style={{ display: "block", border: "none" }}
        allowFullScreen
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CATEGORY PILL (like Infinify's "Foundations" label)
───────────────────────────────────────────────────────────────────── */
function CategoryPill({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
      <span style={{
        display: "inline-block",
        padding: "6px 18px",
        borderRadius: 999,
        border: "1.5px solid rgba(0,0,0,0.12)",
        fontFamily: font,
        fontSize: 13,
        fontWeight: 600,
        color: "#374151",
        letterSpacing: "0.03em",
      }}>
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function DSHero() {
  return (
    <div className="csl-hero csl-hero--light ds-hero-override" style={{ position: "relative", overflow: "visible" }}>
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(16,118,188,0.16) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        maskImage: "linear-gradient(to right, black 0%, black 35%, transparent 60%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, black 35%, transparent 60%)",
      }} />

      {/* floating token cards — bottom left */}
      <div style={{
        position: "absolute", bottom: -24, left: "6vw", zIndex: 3,
        display: "flex", flexDirection: "column", gap: 0, pointerEvents: "none",
      }}>
        {[
          { bg: "#1076BC", label: "Brand/600", hex: "#1076BC", deg: -8 },
          { bg: "#EF4444", label: "Error/600",  hex: "#EF4444", deg: 4 },
          { bg: "#22C55E", label: "Success/600", hex: "#22C55E", deg: -3 },
        ].map((c, i) => (
          <div key={c.label} style={{
            width: 140, height: 88,
            background: c.bg,
            borderRadius: 14,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            transform: `rotate(${c.deg}deg) translateY(${i * -22}px)`,
            padding: "12px 14px",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}>
            <p style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>{c.label}</p>
            <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "rgba(255,255,255,0.9)" }}>{c.hex}</p>
          </div>
        ))}
      </div>

      <div className="csl-hero-inner" style={{ position: "relative", zIndex: 2, alignItems: "center" }}>
        {/* LEFT */}
        <div className="csl-hero-left">
          <div className="csl-hero-eyebrow">Design System · AirIQ</div>
          <h1 className="csl-hero-title">
            One system.<br />
            <em style={{ fontStyle: "italic" }}>Four products.</em>
          </h1>
          <p className="csl-hero-desc">
            A token-first design system built from scratch alongside shipping product. No dedicated systems team — just ruthless prioritisation, a shared Figma library, and the discipline to treat consistency as a feature.
          </p>
          <div className="csl-hero-chips">
            <span className="csl-hero-chip">Lead Designer</span>
            <span className="csl-hero-chip">Nov 2025 – Jan 2026</span>
            <span className="csl-hero-chip">Tokens · Components</span>
            <span className="csl-hero-chip">0 → 1</span>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
            <a href="https://www.figma.com/design/iwqDFTjLmGMWGnM79LOMUB/Design-System-nik"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ACCENT, color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: font }}>
              View in Figma ↗
            </a>
            <a href="#overview"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: ACCENT, border: "1px solid rgba(16,118,188,0.35)", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: font }}>
              Read case study ↓
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="csl-hero-right ds-hero-img-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/Airiq/design-system.png" alt="Design System overview"
            style={{ width: "128%", height: "auto", display: "block", marginLeft: "-14%",
              filter: "drop-shadow(0 28px 56px rgba(16,118,188,0.18))" }} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   OPENING STATEMENT (full-width centred moment)
───────────────────────────────────────────────────────────────────── */
function OpeningStatement() {
  return (
    <div className="csl-reveal" style={{
      textAlign: "center",
      padding: "72px 0 64px",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
      marginBottom: 0,
    }}>
      <p style={{
        fontFamily: "'Rethink Sans', 'Syne', sans-serif",
        fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
        fontWeight: 700,
        color: "#111827",
        lineHeight: 1.45,
        maxWidth: 640,
        margin: "0 auto 0",
      }}>
        Design systems start with{" "}
        <span style={{ color: "#9CA3AF" }}>strong foundations.</span>
        <br />
        They define how components look, behave, and scale across the entire product.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   WHAT'S INSIDE GRID
───────────────────────────────────────────────────────────────────── */
function WhatInsideGrid() {
  const items = [
    {
      title: "Color System",
      desc: "Semantic tokens and palettes for scalable themes and clear visual hierarchy.",
      preview: (
        <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
          {["#EFF8FF","#7EC6FF","#1076BC","#0A5A8F","#022847"].map(c => (
            <div key={c} style={{ flex: 1, height: 28, borderRadius: 4, background: c }} />
          ))}
        </div>
      ),
    },
    {
      title: "Typography",
      desc: "A flexible type system with predefined roles and scales for readable interfaces.",
      preview: (
        <div style={{ marginBottom: 12 }}>
          <p style={{ fontFamily: font, fontSize: 22, fontWeight: 700, color: "#111827", lineHeight: 1, marginBottom: 2 }}>Inter</p>
          <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.05em" }}>Bold · Semi Bold · Regular</p>
        </div>
      ),
    },
    {
      title: "Spacing & Radius",
      desc: "Structured spacing, sizing, and corner rules that keep layouts balanced.",
      preview: (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 36, marginBottom: 12 }}>
          {[6,8,10,14,18,24,32,40].map((h, i) => (
            <div key={i} style={{ width: 14, height: h, borderRadius: 2, background: `rgba(16,118,188,${0.25 + i * 0.09})` }} />
          ))}
        </div>
      ),
    },
    {
      title: "Icons",
      desc: "A unified icon set at a single stroke weight. Every icon at 20×20 dp.",
      preview: (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/Design System/icons.png" alt="Icon set preview"
          style={{ width: "100%", height: 36, objectFit: "cover", objectPosition: "left top", borderRadius: 4, marginBottom: 12 }} />
      ),
    },
    {
      title: "Grid System",
      desc: "Responsive grids for consistent layouts across screen sizes and breakpoints.",
      preview: (
        <div style={{ display: "flex", gap: 3, marginBottom: 12, alignItems: "stretch", height: 34 }}>
          {[1,2,1,2,1,2,1,2,1,2,1,2].map((w, i) => (
            <div key={i} style={{ flex: w, background: i % 2 === 0 ? "rgba(16,118,188,0.12)" : "rgba(16,118,188,0.05)", borderRadius: 2 }} />
          ))}
        </div>
      ),
    },
    {
      title: "Shadows & Blurs",
      desc: "Depth and elevation styles that add clarity, focus, and visual rhythm.",
      preview: (
        <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}>
          {[
            { s: "0 1px 3px rgba(0,0,0,0.1)", label: "sm" },
            { s: "0 4px 12px rgba(0,0,0,0.1)", label: "md" },
            { s: "0 10px 28px rgba(0,0,0,0.14)", label: "lg" },
          ].map(sh => (
            <div key={sh.label} style={{ width: 36, height: 28, background: "#fff", borderRadius: 6, boxShadow: sh.s, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontFamily: font, fontSize: 9, color: "#9CA3AF", fontWeight: 600 }}>{sh.label}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="csl-reveal" style={{ padding: "64px 0 56px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <p style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", textAlign: "center", marginBottom: 20 }}>
        What&rsquo;s inside
      </p>
      <p style={{
        fontFamily: "'Rethink Sans', 'Syne', sans-serif",
        fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
        fontWeight: 700, color: "#111827", lineHeight: 1.4,
        textAlign: "center", maxWidth: 520, margin: "0 auto 48px",
      }}>
        A unified system of reusable foundations and components that brings clarity, consistency, and structure to every interface.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        {items.map(item => (
          <div key={item.title} style={{
            background: "#f9fafb",
            borderRadius: 16,
            padding: "20px 20px 16px",
            border: "1px solid rgba(0,0,0,0.06)",
          }}>
            {item.preview}
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{item.title}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ATOMIC DESIGN PRINCIPLES
───────────────────────────────────────────────────────────────────── */
function AtomicDesignSection() {
  const principles = [
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="10" fill="#1076BC" opacity="0.15"/>
          <circle cx="22" cy="22" r="5" fill="#1076BC" opacity="0.5"/>
          <circle cx="22" cy="22" r="2" fill="#1076BC"/>
        </svg>
      ),
      title: "Design Tokens",
      desc: "Core variables that define colours, typography, spacing.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="16" cy="22" r="8" fill="#1076BC" opacity="0.15" stroke="#1076BC" strokeWidth="1.5"/>
          <circle cx="28" cy="22" r="5" fill="#1076BC" opacity="0.3" stroke="#1076BC" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Atoms",
      desc: "The smallest UI parts: icons, buttons, and input fields.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="14" cy="22" r="5" fill="#1076BC" opacity="0.4"/>
          <circle cx="22" cy="16" r="4" fill="#1076BC" opacity="0.3"/>
          <circle cx="30" cy="22" r="5" fill="#1076BC" opacity="0.4"/>
          <circle cx="22" cy="28" r="4" fill="#1076BC" opacity="0.3"/>
          <line x1="14" y1="22" x2="22" y2="16" stroke="#1076BC" strokeWidth="1" opacity="0.4"/>
          <line x1="22" y1="16" x2="30" y2="22" stroke="#1076BC" strokeWidth="1" opacity="0.4"/>
          <line x1="30" y1="22" x2="22" y2="28" stroke="#1076BC" strokeWidth="1" opacity="0.4"/>
        </svg>
      ),
      title: "Molecules",
      desc: "Groups of atoms forming simple components.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="10" width="14" height="10" rx="3" fill="#1076BC" opacity="0.3"/>
          <rect x="24" y="10" width="14" height="10" rx="3" fill="#1076BC" opacity="0.2"/>
          <rect x="6" y="24" width="14" height="10" rx="3" fill="#1076BC" opacity="0.2"/>
          <rect x="24" y="24" width="14" height="10" rx="3" fill="#1076BC" opacity="0.3"/>
          <circle cx="22" cy="22" r="3" fill="#1076BC"/>
        </svg>
      ),
      title: "Organisms",
      desc: "Larger components made of molecules and atoms.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="6" width="32" height="32" rx="4" stroke="#1076BC" strokeWidth="1.5" fill="none" opacity="0.4"/>
          <rect x="10" y="10" width="24" height="6" rx="2" fill="#1076BC" opacity="0.2"/>
          <rect x="10" y="20" width="14" height="14" rx="2" fill="#1076BC" opacity="0.3"/>
          <rect x="27" y="20" width="7" height="14" rx="2" fill="#1076BC" opacity="0.15"/>
        </svg>
      ),
      title: "Templates",
      desc: "Layouts showing how components connect within a structure.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="6" width="32" height="32" rx="4" fill="#1076BC" opacity="0.08" stroke="#1076BC" strokeWidth="1.5" strokeOpacity="0.4"/>
          <rect x="10" y="10" width="24" height="6" rx="2" fill="#1076BC" opacity="0.35"/>
          <rect x="10" y="20" width="10" height="14" rx="2" fill="#1076BC" opacity="0.25"/>
          <rect x="23" y="20" width="11" height="6" rx="2" fill="#1076BC" opacity="0.18"/>
          <rect x="23" y="28" width="11" height="6" rx="2" fill="#1076BC" opacity="0.18"/>
        </svg>
      ),
      title: "Screens",
      desc: "Final screens assembled from components with real content.",
    },
  ];

  return (
    <div className="csl-reveal" style={{ padding: "64px 0 56px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <CategoryPill label="Atomic Design" />
      <h2 style={{
        fontFamily: "'Rethink Sans', 'Syne', sans-serif",
        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
        fontWeight: 700, color: "#111827",
        textAlign: "center", lineHeight: 1.15, marginBottom: 10,
      }}>
        Atomic Design Principles
      </h2>
      <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.65 }}>
        A modular approach that breaks interfaces into reusable pieces, making their structure clear and connected.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        {principles.map(p => (
          <div key={p.title} style={{
            background: "#f9fafb",
            borderRadius: 16,
            padding: "24px 20px 20px",
            border: "1px solid rgba(0,0,0,0.06)",
          }}>
            <div style={{ marginBottom: 14 }}>{p.icon}</div>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{p.title}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</p>
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
  const c1 = useCountUp(4);
  const c2 = useCountUp(7);
  const c3 = useCountUp(3);

  return (
    <CsSection id="overview">
      <CsSectionHeader
        num="01"
        title="Why the system had to exist"
        sub="Every product team was solving the same visual problem from scratch. Buttons with five different border radii. Three interpretations of the same status badge. Design inconsistency was slowing shipping velocity and eroding user trust."
      />

      {/* stats */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 40 }}>
        {[
          { ref: c1.ref, val: c1.value, suffix: "", label: "Products sharing one Figma library" },
          { ref: c2.ref, val: c2.value, suffix: "", label: "Core components, all states documented" },
          { ref: c3.ref, val: c3.value, suffix: " wks", label: "From zero to v1, while shipping product" },
        ].map((s) => (
          <div key={s.label} style={{
            background: "#F8FAFC", border: "1px solid rgba(16,118,188,0.10)",
            borderRadius: 14, padding: "28px 20px", textAlign: "center",
          }}>
            <p style={{ fontFamily: font, fontSize: 44, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1 }}>
              <span ref={s.ref}>{s.val}</span>{s.suffix}
            </p>
            <p style={{ fontFamily: font, fontSize: 14, color: "#6B7280", marginTop: 10, lineHeight: 1.5 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* italic callout */}
      <div className="csl-reveal" style={{ borderLeft: "3px solid #1076BC", paddingLeft: 20, margin: "32px 0" }}>
        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", fontStyle: "italic", color: "#374151", lineHeight: 1.7, margin: 0 }}>
          The constraint was the brief: no dedicated systems team, no runway to pause product work. The system had to be designed in the gaps, documented enough to survive handoff, opinionated enough to actually reduce decisions.
        </p>
      </div>

      {/* approach grid */}
      <div className="csl-reveal" style={{ marginTop: 32 }}>
        <p style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>Approach</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
          {[
            { num: "01", title: "Token-first", body: "Every colour, spacing step and shadow is a named token, not a hardcoded value. Swap the token, update every instance." },
            { num: "02", title: "Component contracts", body: "Each component ships with defined props, states and usage rules. No ambiguity in handoff." },
            { num: "03", title: "Built while shipping", body: "Tokens and components were introduced incrementally alongside real features — not in a silo." },
            { num: "04", title: "Documentation as design", body: "The Figma file is the doc. Annotations live inside the frames, not in a separate Notion page nobody reads." },
          ].map((step) => (
            <div key={step.num} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 12, padding: "18px 20px" }}>
              <p style={{ fontFamily: font, fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.10em", marginBottom: 6 }}>{step.num}</p>
              <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{step.title}</p>
              <p style={{ fontFamily: font, fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <OpeningStatement />
      <WhatInsideGrid />
      <AtomicDesignSection />
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   LIVE COLOR PALETTE
───────────────────────────────────────────────────────────────────── */
function LiveColorPalette() {
  const palettes = [
    {
      name: "Neutral",
      sub: "Backgrounds, text, surfaces, and separators.",
      swatches: [
        { hex: "#F9FAFB", label: "50" },
        { hex: "#F3F4F6", label: "100" },
        { hex: "#E5E7EB", label: "200" },
        { hex: "#9CA3AF", label: "400" },
        { hex: "#6B7280", label: "500" },
        { hex: "#374151", label: "700" },
        { hex: "#1F2937", label: "800" },
        { hex: "#111827", label: "900" },
      ],
    },
    {
      name: "Brand",
      sub: "Primary interactive elements: CTAs, links, active states.",
      swatches: [
        { hex: "#EFF8FF", label: "50" },
        { hex: "#BFDFFF", label: "100" },
        { hex: "#7EC6FF", label: "200" },
        { hex: "#3DA8FF", label: "300" },
        { hex: "#1076BC", label: "600" },
        { hex: "#0A5A8F", label: "700" },
        { hex: "#064272", label: "800" },
        { hex: "#022847", label: "900" },
      ],
    },
    {
      name: "Error",
      sub: "Negative states, destructive actions, validation errors.",
      swatches: [
        { hex: "#FEF2F2", label: "50" },
        { hex: "#FEE2E2", label: "100" },
        { hex: "#FECACA", label: "200" },
        { hex: "#FCA5A5", label: "300" },
        { hex: "#EF4444", label: "500" },
        { hex: "#DC2626", label: "600" },
        { hex: "#991B1B", label: "800" },
        { hex: "#7F1D1D", label: "900" },
      ],
    },
    {
      name: "Success",
      sub: "Positive confirmation, completed states, available status.",
      swatches: [
        { hex: "#F0FDF4", label: "50" },
        { hex: "#DCFCE7", label: "100" },
        { hex: "#BBF7D0", label: "200" },
        { hex: "#86EFAC", label: "300" },
        { hex: "#22C55E", label: "500" },
        { hex: "#16A34A", label: "600" },
        { hex: "#166534", label: "800" },
        { hex: "#14532D", label: "900" },
      ],
    },
    {
      name: "Warning",
      sub: "Cautionary states, pending actions, time-sensitive alerts.",
      swatches: [
        { hex: "#FFFBEB", label: "50" },
        { hex: "#FEF3C7", label: "100" },
        { hex: "#FDE68A", label: "200" },
        { hex: "#FCD34D", label: "300" },
        { hex: "#F59E0B", label: "500" },
        { hex: "#D97706", label: "600" },
        { hex: "#92400E", label: "800" },
        { hex: "#78350F", label: "900" },
      ],
    },
  ];

  return (
    <div className="csl-reveal" style={{ marginBottom: 48 }}>
      {palettes.map(p => (
        <div key={p.name} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#111827" }}>{p.name}</p>
            <p style={{ fontFamily: font, fontSize: 12, color: "#9CA3AF" }}>{p.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 4 }}>
            {p.swatches.map(s => (
              <div key={s.hex} style={{ borderRadius: 8, overflow: "hidden" }}>
                <div style={{ height: 52, background: s.hex }} />
                <div style={{ padding: "6px 2px" }}>
                  <p style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: "#374151" }}>{s.label}</p>
                  <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: "#9CA3AF" }}>{s.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   LIVE TYPE SCALE
───────────────────────────────────────────────────────────────────── */
function LiveTypeScale() {
  const scale = [
    { name: "H1 Desktop", size: 48, weight: 700, lh: "56px", ls: "-2%" },
    { name: "H2 Desktop", size: 36, weight: 700, lh: "44px", ls: "-2%" },
    { name: "H3 Desktop", size: 28, weight: 600, lh: "36px", ls: "-1%" },
    { name: "H4",         size: 22, weight: 600, lh: "30px", ls: "-0.5%" },
    { name: "Body Large", size: 18, weight: 400, lh: "28px", ls: "0" },
    { name: "Body",       size: 16, weight: 400, lh: "26px", ls: "0" },
    { name: "Caption",    size: 14, weight: 400, lh: "22px", ls: "0" },
    { name: "Label",      size: 12, weight: 500, lh: "18px", ls: "0.08em" },
  ];

  return (
    <div className="csl-reveal" style={{ marginBottom: 48 }}>
      {scale.map((s, i) => (
        <div key={s.name} style={{
          display: "flex", alignItems: "baseline", gap: 20,
          padding: "14px 0", borderBottom: i < scale.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}>
          <div style={{ minWidth: 100, flexShrink: 0 }}>
            <p style={{ fontFamily: font, fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>{s.name}</p>
            <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, color: "#D1D5DB" }}>
              {s.size}px · {s.weight === 700 ? "Bold" : s.weight === 600 ? "SemiBold" : s.weight === 500 ? "Medium" : "Regular"}
            </p>
          </div>
          <p style={{
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: s.size,
            fontWeight: s.weight,
            color: "#111827",
            lineHeight: s.lh,
            letterSpacing: s.ls,
            margin: 0,
            flex: 1,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SPACING SCALE BAR CHART
───────────────────────────────────────────────────────────────────── */
function SpacingScale() {
  const steps = [
    { token: "spacing-2",  val: 2  },
    { token: "spacing-4",  val: 4  },
    { token: "spacing-6",  val: 6  },
    { token: "spacing-8",  val: 8  },
    { token: "spacing-12", val: 12 },
    { token: "spacing-16", val: 16 },
    { token: "spacing-20", val: 20 },
    { token: "spacing-24", val: 24 },
    { token: "spacing-32", val: 32 },
    { token: "spacing-40", val: 40 },
    { token: "spacing-48", val: 48 },
    { token: "spacing-64", val: 64 },
  ];

  const max = 64;

  return (
    <div className="csl-reveal" style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 160, marginBottom: 16 }}>
        {steps.map((s, i) => {
          const h = (s.val / max) * 140;
          return (
            <div key={s.token} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 4 }}>
              <p style={{ fontFamily: font, fontSize: 9, color: "#9CA3AF", fontWeight: 600 }}>{s.val}px</p>
              <div style={{ width: "100%", height: h, background: `rgba(16,118,188,${0.2 + i * 0.065})`, borderRadius: 4 }} />
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#f9fafb", borderRadius: 10, border: "1px solid rgba(0,0,0,0.06)" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: ACCENT, fontWeight: 700, background: "rgba(16,118,188,0.08)", padding: "3px 8px", borderRadius: 5 }}>
          #4
        </span>
        <span style={{ color: "#9CA3AF", fontSize: 14 }}>→</span>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#374151", fontWeight: 600 }}>#spacing-4</span>
        <span style={{ color: "#9CA3AF", fontSize: 14 }}>→</span>
        <span style={{ fontFamily: font, fontSize: 13, color: "#374151" }}>4 px</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   TOKEN LAYER DEMO
───────────────────────────────────────────────────────────────────── */
function TokenLayerDemo() {
  const [active, setActive] = useState<"primitive" | "semantic" | "component">("primitive");
  const layers: { key: "primitive" | "semantic" | "component"; label: string; content: React.ReactNode }[] = [
    {
      key: "primitive", label: "Primitive",
      content: <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 20, height: 20, borderRadius: 4, background: "#1076BC" }} />
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#111827" }}>#1076BC</span>
      </div>,
    },
    {
      key: "semantic", label: "Semantic",
      content: <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: ACCENT }}>color.action.primary</span>,
    },
    {
      key: "component", label: "Component",
      content: <div style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 14px", fontFamily: font, fontSize: 13, fontWeight: 600, display: "inline-block" }}>Button.bg</div>,
    },
  ];

  return (
    <div className="csl-reveal" style={{ background: "#F8FAFC", border: "1px solid rgba(16,118,188,0.10)", borderRadius: 12, padding: "20px 22px", margin: "20px 0 32px" }}>
      <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 14 }}>
        Token flow — tap a layer to trace the chain
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {layers.map((layer, i) => (
          <div key={layer.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => setActive(layer.key)} style={{
              padding: "10px 16px", borderRadius: 10,
              border: active === layer.key ? `1.5px solid ${ACCENT}` : "1.5px solid rgba(0,0,0,0.08)",
              background: active === layer.key ? "#fff" : "transparent",
              boxShadow: active === layer.key ? "0 2px 8px rgba(16,118,188,0.12)" : "none",
              cursor: "pointer", transition: "all 0.2s ease",
              display: "flex", flexDirection: "column" as const, gap: 6, minWidth: 130,
            }}>
              <span style={{ fontFamily: font, fontSize: 10, fontWeight: 700, color: active === layer.key ? ACCENT : "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.10em", textAlign: "left" as const }}>
                {layer.label}
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>{layer.content}</span>
            </button>
            {i < layers.length - 1 && <span style={{ color: "#D1D5DB", fontSize: 18 }}>→</span>}
          </div>
        ))}
      </div>
      <p style={{ fontFamily: font, fontSize: 13, color: "#9CA3AF", marginTop: 14, lineHeight: 1.5 }}>
        {active === "primitive" && "Raw hex values live in the primitive layer. They are never used directly in components."}
        {active === "semantic" && "Semantic tokens name the intent. color.action.primary means \"the primary action colour\" regardless of what hex it resolves to."}
        {active === "component" && "Component tokens bind to semantic tokens. Button.bg references color.action.primary, so updating the brand colour cascades automatically."}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §02  FOUNDATIONS — rebuilt with live code
───────────────────────────────────────────────────────────────────── */
function FoundationsSection() {
  return (
    <CsSection id="foundations">

      {/* ── COLOR ── */}
      <div className="csl-reveal" style={{ marginBottom: 72 }}>
        <CategoryPill label="Foundations" />
        <h2 style={{
          fontFamily: "'Rethink Sans', 'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 700, color: "#111827",
          textAlign: "center", lineHeight: 1.1, marginBottom: 16,
        }}>
          Color System
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.65 }}>
          A flexible palette of semantic and functional colours that keeps interfaces consistent, clear, and expressive across the entire product.
        </p>

        <LiveColorPalette />
        <TokenLayerDemo />

        {/* "Why three tiers" */}
        <div style={{ background: "rgba(16,118,188,0.035)", border: "1px solid rgba(16,118,188,0.14)", borderRadius: 12, padding: "20px 24px" }}>
          <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Why this decision</p>
          <p style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8, lineHeight: 1.3 }}>Why three token tiers instead of two?</p>
          <p style={{ fontFamily: font, fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
            One tier scatters raw hex everywhere. Two tiers help intent but leave a gap at the component level. Three tiers mean a button's background is Button.bg, not #1076BC. When the brand updates, you update one primitive — everything else follows automatically.
          </p>
        </div>
      </div>

      {/* ── TYPOGRAPHY ── */}
      <div className="csl-reveal" style={{ marginBottom: 72 }}>
        <CategoryPill label="Foundations" />
        <div style={{ position: "relative", textAlign: "center", marginBottom: 48 }}>
          {/* ghost background text */}
          <p style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(5rem, 14vw, 11rem)",
            fontWeight: 700, color: "rgba(0,0,0,0.04)",
            letterSpacing: "-0.04em", margin: 0, whiteSpace: "nowrap",
            pointerEvents: "none", userSelect: "none",
            zIndex: 0,
          }}>
            Inter
          </p>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Rethink Sans', 'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 700, color: "#111827",
              lineHeight: 1.1, marginBottom: 12,
            }}>
              Typography
            </h2>
            <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", maxWidth: 460, margin: "0 auto", lineHeight: 1.65 }}>
              The typographic system defines text styles as design tokens and explains how titles and body text should be applied.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          {["Bold", "Semi Bold", "Regular"].map(w => (
            <div key={w} style={{ flex: 1, textAlign: "center", padding: "20px 14px", background: "#f9fafb", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)" }}>
              <p style={{
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: 28, fontWeight: w === "Bold" ? 700 : w === "Semi Bold" ? 600 : 400,
                color: "#111827", margin: "0 0 6px",
              }}>Ag</p>
              <p style={{ fontFamily: font, fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>{w}</p>
            </div>
          ))}
        </div>

        <LiveTypeScale />

        <div style={{ background: "rgba(16,118,188,0.035)", border: "1px solid rgba(16,118,188,0.14)", borderRadius: 12, padding: "20px 24px" }}>
          <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Why this decision</p>
          <p style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Why Inter?</p>
          <p style={{ fontFamily: font, fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
            Inter handles density. Long tables, dropdowns, small labels — it reads cleanly at 12px. Lato carries marketing weight in headlines. One typeface would either feel sterile in the UI or informal in the marketing layer.
          </p>
        </div>
      </div>

      {/* ── SPACING ── */}
      <div className="csl-reveal" style={{ marginBottom: 56 }}>
        <CategoryPill label="Foundations" />
        <h2 style={{
          fontFamily: "'Rethink Sans', 'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 700, color: "#111827",
          textAlign: "center", lineHeight: 1.1, marginBottom: 16,
        }}>
          Spacing & Radius
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.65 }}>
          A consistent spacing and radius scale creates visual rhythm and predictable layouts. Each value exists as a reusable token.
        </p>

        <SpacingScale />

        {/* radius row */}
        <div style={{ marginTop: 32 }}>
          <p style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>Border Radius Scale</p>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
            {[
              { label: "sm", r: 4 }, { label: "md", r: 8 }, { label: "lg", r: 12 },
              { label: "xl", r: 16 }, { label: "2xl", r: 24 }, { label: "full", r: 999 },
            ].map(({ label, r }) => (
              <div key={label} style={{ flex: 1, textAlign: "center" }}>
                <div style={{
                  width: "100%", aspectRatio: "1",
                  maxWidth: 56, margin: "0 auto 8px",
                  background: "rgba(16,118,188,0.10)",
                  border: "1.5px solid rgba(16,118,188,0.25)",
                  borderRadius: r === 999 ? "50%" : r,
                }} />
                <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, color: "#9CA3AF" }}>{label}</p>
                <p style={{ fontFamily: font, fontSize: 9, color: "#D1D5DB" }}>{r === 999 ? "999px" : `${r}px`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ICONOGRAPHY ── Figma embed ── */}
      <div className="csl-reveal" style={{ marginBottom: 56 }}>
        <p style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>Iconography</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Design System/icons.png" alt="Icon library"
          style={{ width: "100%", height: "auto", borderRadius: 16, border: "1px solid rgba(0,0,0,0.06)", display: "block", marginBottom: 12 }} />
        <p style={{ fontFamily: font, fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>
          A unified icon library at a single stroke weight. Every icon exports at 20×20 dp. Mixing icon styles is the fastest way to make a UI feel cheap.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §03  COMPONENTS
───────────────────────────────────────────────────────────────────── */
function ComponentsSection() {
  const components = [
    { nodeId: "14005-2", title: "Buttons", note: "Four variants: primary, secondary, tertiary, ghost. Every state documented. No one-off styles." },
    { nodeId: "14006-2", title: "Input Fields", note: "Seven states, three sizes. Error and helper text are baked in — not detached text layers." },
    { nodeId: "14007-2", title: "Checkbox, Radio & Toggle", note: "Indeterminate state is explicitly handled — a gap most teams discover in production." },
    { nodeId: "14008-134", title: "Dropdown & Select", note: "Multi-select, single-select, searchable. Inherits input field anatomy: same tokens, same spacing." },
    { nodeId: "14007-153", title: "Tabs & Navigation", note: "Line and pill variants. Active state uses the accent token — swap the theme and every tab updates." },
    { nodeId: "14030-2", title: "Date & Time Picker", note: "Travel-critical. Range selection, blocked-date states, time picker — the most-requested component in v1." },
  ];

  return (
    <CsSection id="components">
      <div style={{ marginBottom: 40 }}>
        <CategoryPill label="Smart Components" />
        <h2 style={{
          fontFamily: "'Rethink Sans', 'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 700, color: "#111827",
          textAlign: "center", lineHeight: 1.1, marginBottom: 16,
        }}>
          Components
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 500, margin: "0 auto", lineHeight: 1.65 }}>
          Smart components adapt automatically to states, themes, and content — reducing manual work and maintaining consistency across every screen.
        </p>
      </div>

      <div className="csl-reveal" style={{ background: "rgba(16,118,188,0.035)", border: "1px solid rgba(16,118,188,0.14)", borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
        <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Why this decision</p>
        <p style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Why document every state in Figma, not just the default?</p>
        <p style={{ fontFamily: font, fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
          Handoff gaps live in the unstated. If hover is not designed, engineering invents it. If loading is not specified, it gets cut. Documenting every state per component upfront costs hours. Fixing state inconsistencies in production costs weeks.
        </p>
      </div>

      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32 }}>
        {components.map(c => (
          <div key={c.nodeId}>
            <p style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{c.title}</p>
            <FigmaEmbed nodeId={c.nodeId} title={c.title} height={340} />
            <p style={{ fontFamily: font, fontSize: 14, color: "#6B7280", marginTop: 10, lineHeight: 1.65 }}>{c.note}</p>
          </div>
        ))}
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §04  IN THE WILD — product screenshots
───────────────────────────────────────────────────────────────────── */
function InTheWildSection() {
  const screens = [
    {
      src: "/Image/Airiq/presentation/homepage.png",
      label: "Search",
      component: "DatePicker · Autocomplete · PassengerSelector",
      desc: "Date picker, passenger selector, airport autocomplete — all system components. The booking entry point assembles in half the time it used to.",
      side: "right",
    },
    {
      src: "/Image/Airiq/presentation/search-result.png",
      label: "Results",
      component: "Badge · Dropdown · Pagination",
      desc: "Status badges (Direct / Economy / Delayed) are tokens. Grid rhythm is the layout system. Sorting controls use Dropdown. Zero custom overrides.",
      side: "left",
    },
    {
      src: "/Image/Airiq/presentation/details.png",
      label: "Booking",
      component: "Input · Dropdown · Checkbox",
      desc: "The traveller detail form is Input, Dropdown and Checkbox in sequence. One component library, one form, consistent across every device width.",
      side: "right",
    },
    {
      src: "/Image/Airiq/presentation/confirmation.png",
      label: "Confirmation",
      component: "Typography · Badge · Color tokens",
      desc: "Typography scale and colour tokens carry the hierarchy. The success state reuses the Badge component. Semantic colour, different meaning.",
      side: "left",
    },
  ];

  return (
    <CsSection id="in-wild">
      <div style={{ marginBottom: 56 }}>
        <CategoryPill label="In the Wild" />
        <h2 style={{
          fontFamily: "'Rethink Sans', 'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 700, color: "#111827",
          textAlign: "center", lineHeight: 1.1, marginBottom: 16,
        }}>
          System in Production
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
          The system only matters if it shows up in production. Here&rsquo;s how foundations and components assemble into the AirIQ booking flow.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {screens.map((s) => (
          <div key={s.label} className="csl-reveal" style={{
            display: "grid",
            gridTemplateColumns: s.side === "right" ? "1fr 1fr" : "1fr 1fr",
            gap: 32,
            alignItems: "center",
          }}>
            {/* Image — left-bleed on "right" side items */}
            <div style={{
              order: s.side === "right" ? 0 : 1,
              marginLeft: s.side === "right" ? -48 : 0,
              marginRight: s.side === "left" ? -48 : 0,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.label}
                style={{
                  width: "100%", height: "auto",
                  borderRadius: 16,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  display: "block",
                }} />
            </div>

            {/* Text */}
            <div style={{ order: s.side === "right" ? 1 : 0 }}>
              <p style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                {s.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {s.component.split(" · ").map(c => (
                  <span key={c} style={{
                    fontFamily: "ui-monospace, monospace", fontSize: 11, fontWeight: 600,
                    color: ACCENT, background: "rgba(16,118,188,0.08)",
                    borderRadius: 5, padding: "3px 8px",
                  }}>{c}</span>
                ))}
              </div>
              <p style={{ fontFamily: font, fontSize: 15, color: "#374151", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* callout */}
      <div className="csl-reveal" style={{ borderLeft: "3px solid #1076BC", paddingLeft: 20, margin: "56px 0 0" }}>
        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", fontStyle: "italic", color: "#374151", lineHeight: 1.7, margin: 0 }}>
          The question I asked for every AirIQ screen: &ldquo;Is this a component or a custom?&rdquo; If it needed to be custom, that was a signal the system had a gap. I plugged it.
        </p>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   §05  IMPACT
───────────────────────────────────────────────────────────────────── */
function ImpactSection() {
  const c1 = useCountUp(40);
  const c2 = useCountUp(3);

  const before = [
    "5+ button styles across product screens",
    "Ad hoc spacing — every designer eyeballed it",
    "Icon library split across three Figma files",
    "No documented component states",
    "Onboarding new designers took 2+ weeks",
  ];
  const after = [
    "4 button variants, every state documented",
    "8pt grid enforced via auto-layout",
    "Unified icon library, one stroke weight",
    "States and usage rules live inside components",
    "New designers contribute by day 3",
  ];

  return (
    <CsSection id="impact" last>
      <div style={{ marginBottom: 48 }}>
        <CategoryPill label="Results" />
        <h2 style={{
          fontFamily: "'Rethink Sans', 'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 700, color: "#111827",
          textAlign: "center", lineHeight: 1.1, marginBottom: 16,
        }}>
          Impact
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 440, margin: "0 auto", lineHeight: 1.65 }}>
          A design system is not a deliverable. It&rsquo;s a multiplier. These are the results after three months in production.
        </p>
      </div>

      {/* before / after */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
        <div style={{ background: "#FEF3F2", border: "1px solid rgba(242,97,110,0.18)", borderRadius: 14, padding: "24px 22px" }}>
          <p style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: "#F2616E", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>Before</p>
          {before.map(b => (
            <p key={b} style={{ fontFamily: font, fontSize: 14, color: "#374151", lineHeight: 1.65, marginBottom: 8, paddingLeft: 14, borderLeft: "2px solid rgba(242,97,110,0.30)" }}>{b}</p>
          ))}
        </div>
        <div style={{ background: "#EAF9F1", border: "1px solid rgba(5,150,105,0.18)", borderRadius: 14, padding: "24px 22px" }}>
          <p style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: "#059669", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>After</p>
          {after.map(a => (
            <p key={a} style={{ fontFamily: font, fontSize: 14, color: "#374151", lineHeight: 1.65, marginBottom: 8, paddingLeft: 14, borderLeft: "2px solid rgba(5,150,105,0.30)" }}>{a}</p>
          ))}
        </div>
      </div>

      {/* metrics */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
        {[
          { ref: c1.ref, val: c1.value, suffix: "%", label: "Faster screen assembly", sub: "for screens built entirely from library components" },
          { ref: c2.ref, val: c2.value, suffix: " wks", label: "From 0 to v1", sub: "while simultaneously shipping product" },
        ].map(s => (
          <div key={s.label} style={{ textAlign: "center", background: "#F8FAFC", border: "1px solid rgba(16,118,188,0.10)", borderRadius: 14, padding: "36px 20px" }}>
            <p style={{ fontFamily: font, fontSize: 52, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1 }}>
              <span ref={s.ref}>{s.val}</span>{s.suffix}
            </p>
            <p style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: "#374151", margin: "14px 0 6px" }}>{s.label}</p>
            <p style={{ fontFamily: font, fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* learnings */}
      <div className="csl-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
        {[
          { title: "Adoption beats perfection", body: "A system no one uses is a system that does not exist. Ship an imperfect v1 fast, iterate based on real usage — not theoretical completeness." },
          { title: "Tokens are the real leverage", body: "Components can be rebuilt. Tokens are load-bearing. Getting naming conventions right early saved weeks of migration work later." },
        ].map(l => (
          <div key={l.title} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 12, padding: "22px" }}>
            <p style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 10 }}>{l.title}</p>
            <p style={{ fontFamily: font, fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{l.body}</p>
          </div>
        ))}
      </div>

      {/* next */}
      <div className="csl-reveal" style={{ textAlign: "center", paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <p style={{ fontFamily: font, fontSize: 12, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 16 }}>Next case study</p>
        <a href="/projects/airiq" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: font, fontSize: 18, fontWeight: 700, color: "#111827", textDecoration: "none" }}>
          Air IQ: B2B Flight Booking
          <span style={{ color: ACCENT, fontSize: 22 }}>→</span>
        </a>
      </div>
    </CsSection>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────────────────────────────── */
export function DesignSystemCaseStudy() {
  return (
    <CaseStudyPage
      theme="ds"
      title="Design System"
      tag="Systems Design"
      tocItems={TOC_ITEMS}
      metaRows={[
        { label: "Role",     value: "Lead Product Designer" },
        { label: "Duration", value: "Nov 2025 – Jan 2026"   },
        { label: "Scope",    value: "0 → 1 System"          },
        { label: "Tools",    value: "Figma"                  },
      ]}
      hero={<DSHero />}
    >
      <OverviewSection />
      <FoundationsSection />
      <ComponentsSection />
      <InTheWildSection />
      <ImpactSection />
    </CaseStudyPage>
  );
}
