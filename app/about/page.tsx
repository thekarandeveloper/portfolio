"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────
   Card data
───────────────────────────────────────── */
const CARDS = [
  {
    src: "/thumbnails/airiq.jpg",
    title: "AirIQ",
    role: "Lead Designer",
    year: "2024",
    desc: "Redesigning B2B flight booking",
  },
  {
    src: "/thumbnails/biblofi.jpg",
    title: "Biblofi",
    role: "Product Designer",
    year: "2024",
    desc: "Smart campus library system",
  },
  {
    src: "/about/portrait.jpg",
    title: "Nikunj Tyagi",
    role: "Archive",
    year: "2025",
    desc: "The person behind the work",
  },
  {
    src: "/Image/hero/Cafe.png",
    title: "Coffee & Ideas",
    role: "Personal",
    year: "2024",
    desc: "Where most ideas are born",
  },
  {
    src: "/about/work.jpg",
    title: "Deep Work",
    role: "Personal",
    year: "2024",
    desc: "Figma open, latte cooling",
  },
  {
    src: "/Image/Biblofi/hero1.png",
    title: "Biblofi iOS",
    role: "UI Design",
    year: "2024",
    desc: "Mobile-first onboarding",
  },
  {
    src: "/Image/hero/Nikunj.png",
    title: "On the Road",
    role: "Archive",
    year: "2024",
    desc: "Long highways, yellow flowers",
  },
  {
    src: "/Image/Biblofi/hero2.png",
    title: "Scan & Issue",
    role: "Feature Design",
    year: "2024",
    desc: "Zero-friction borrowing",
  },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function AboutPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const mouse    = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
  const time     = useRef(0);
  const speed    = useRef(1);
  const frame    = useRef(0);
  const hov      = useRef<number | null>(null);

  /* Mouse tracking */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  /* RAF spiral loop */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const els = Array.from(stage.querySelectorAll<HTMLElement>(".spc"));
    const N   = els.length;

    /* Helix parameters */
    const RX = 305;   // horizontal radius
    const RZ = 212;   // depth radius
    const RY = 105;   // vertical spread

    function tick() {
      frame.current++;

      /* Speed lerp – slow on hover */
      const tgt = hov.current !== null ? 0.08 : 1.0;
      speed.current += (tgt - speed.current) * 0.07;
      time.current  += 0.0036 * speed.current;

      const t = time.current;
      const m = mouse.current;
      m.cx += (m.x - m.cx) * 0.034;
      m.cy += (m.y - m.cy) * 0.034;

      /* Camera tilt from mouse */
      if (stage) stage.style.transform = `rotateX(${(m.cy * -4.2).toFixed(2)}deg) rotateY(${(m.cx * 6).toFixed(2)}deg)`;

      /* Entry fade – first ~1.5 s */
      const entry = Math.min(1, frame.current / 90);

      els.forEach((el, i) => {
        const phase = (i / N) * Math.PI * 2 + t;
        const x     = Math.cos(phase) * RX;
        const z     = Math.sin(phase) * RZ;
        const y     = Math.sin(phase * 0.5 + i * 0.38) * RY;

        /* zNorm: 0 = back, 1 = front */
        const zNorm = (z + RZ) / (RZ * 2);
        const isH   = hov.current === i;

        const sc    = isH
          ? Math.max(0.84, 0.66 + zNorm * 0.40) * 1.22
          : 0.66 + zNorm * 0.40;

        const op    = Math.min(1, (0.20 + zNorm * 0.80) * entry);
        const blur  = isH ? 0 : Math.max(0, (1 - zNorm) * 1.9);
        const rotY  = Math.sin(phase) * -9;
        const rotZ  = Math.cos(phase) * 2.4;

        el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) rotateZ(${rotZ.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
        el.style.opacity   = op.toFixed(3);
        el.style.zIndex    = String(Math.round(zNorm * 100) + (isH ? 200 : 0));
        el.style.filter    = blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : "";

        /* Glow */
        const glow = el.querySelector<HTMLElement>(".spc-glow");
        if (glow) {
          glow.style.opacity   = isH ? "1"      : "0";
          glow.style.transform = isH ? "scale(1.4)" : "scale(1)";
        }

        /* Tooltip */
        const tip = el.querySelector<HTMLElement>(".spc-tip");
        if (tip) {
          tip.style.opacity   = isH ? "1"                    : "0";
          tip.style.transform = isH ? "translateY(0) scale(1)" : "translateY(10px) scale(0.96)";
          tip.style.filter    = isH ? "blur(0)"              : "blur(4px)";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ───────────────────────────────────────
     Render
  ─────────────────────────────────────── */
  return (
    <main style={{
      width: "100vw", height: "100vh",
      overflow: "hidden", position: "relative",
      background: "#F7FAFF",
      fontFamily: "var(--font-instrument),'Instrument Sans',-apple-system,BlinkMacSystemFont,sans-serif",
    }}>

      {/* ── CSS ── */}
      <style>{`
        /* Smooth transitions for hover-only elements */
        .spc-tip {
          transition: opacity .44s ease, transform .44s cubic-bezier(.16,1,.3,1), filter .44s ease;
        }
        .spc-glow {
          transition: opacity .52s ease, transform .52s ease;
        }

        /* Mobile: stack layout */
        @media (max-width: 768px) {
          .abt-left {
            display: none !important;
          }
          .abt-spiral {
            width: 100% !important;
          }
        }
      `}</style>

      {/* ── Background atmosphere ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 80% 70% at 72% 50%, rgba(185,215,255,0.22) 0%, transparent 68%),
          radial-gradient(ellipse 42% 42% at 16% 22%, rgba(210,230,255,0.14) 0%, transparent 60%),
          radial-gradient(ellipse 50% 55% at 90% 84%, rgba(200,220,255,0.10) 0%, transparent 58%)
        `,
      }} />

      {/* ── Dot-grid texture ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(155,185,255,0.20) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
        opacity: 0.55,
      }} />

      {/* ── Nav ── */}
      <nav style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 300,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "clamp(18px,3vw,30px) clamp(24px,4vw,52px)",
        pointerEvents: "none",
      }}>
        <div style={{ pointerEvents: "all" }}>
          <Link href="/" style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#7A99BB", textDecoration: "none",
            padding: "8px 14px",
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(175,210,255,0.38)", borderRadius: "6px",
          }}>← Home</Link>
        </div>
        <span style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase",
          color: "#B0C8DA",
        }}>About · 2025</span>
      </nav>

      {/* ── Two-column layout ── */}
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center" }}>

        {/* ── Left panel — text ── */}
        <div className="abt-left" style={{
          width: "clamp(240px,30%,380px)", flexShrink: 0,
          padding: "clamp(80px,10vh,116px) clamp(22px,3.5vw,58px)",
          display: "flex", flexDirection: "column",
          justifyContent: "center", gap: "2rem",
          position: "relative", zIndex: 20,
        }}>

          {/* Label */}
          <span style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase",
            color: "#A0B8D0",
          }}>About Me</span>

          {/* Name */}
          <div style={{ lineHeight: 0.94 }}>
            <div style={{
              fontFamily: "'DM Serif Display',Georgia,serif",
              fontSize: "clamp(2.6rem,4.4vw,4rem)",
              fontWeight: 400, letterSpacing: "-0.03em", color: "#0D1826",
            }}>Nikunj</div>
            <div style={{
              fontFamily: "'DM Serif Display',Georgia,serif",
              fontSize: "clamp(2.6rem,4.4vw,4rem)",
              fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.03em", color: "#0D1826",
            }}>Tyagi.</div>
          </div>

          {/* Tagline */}
          <p style={{
            fontSize: "0.92rem", lineHeight: 1.78, color: "#4B607A",
            maxWidth: "26ch", margin: 0,
          }}>
            Designer crafting motion-led digital experiences — turning complexity into calm.
          </p>

          {/* Info rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.72rem" }}>
            {[
              { label: "Role",  val: "Product Designer"  },
              { label: "Based", val: "New Delhi, India"   },
              { label: "Open",  val: "Full-time roles"    },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: "flex", gap: "1.2rem", alignItems: "baseline" }}>
                <span style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.53rem", letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#A0B8D0", minWidth: "48px",
                }}>{label}</span>
                <span style={{ fontSize: "0.84rem", color: "#374151" }}>{val}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:nikunj.tyagi.design@gmail.com"
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#4A8ED0", textDecoration: "none",
              borderBottom: "1px solid rgba(74,142,208,0.35)",
              paddingBottom: "2px", width: "fit-content",
            }}
          >Say Hello ↗</a>
        </div>

        {/* ── Right — spiral ── */}
        <div className="abt-spiral" style={{
          flex: 1, height: "100%",
          position: "relative",
          perspective: "960px", perspectiveOrigin: "50% 48%",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>

          {/* Atmospheric bloom */}
          <div aria-hidden style={{
            position: "absolute",
            width: "700px", height: "520px",
            background: "radial-gradient(ellipse, rgba(165,210,255,0.17) 0%, rgba(195,225,255,0.07) 42%, transparent 70%)",
            pointerEvents: "none", borderRadius: "50%", filter: "blur(2px)",
          }} />

          {/* Stage */}
          <div
            ref={stageRef}
            style={{
              position: "relative", width: 0, height: 0,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="spc"
                onMouseEnter={() => { hov.current = i; }}
                onMouseLeave={() => { hov.current = null; }}
                style={{
                  position: "absolute",
                  width: "224px", height: "152px",
                  left: "-112px", top: "-76px",
                  cursor: "pointer",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* ── Glow (rendered first → behind face) ── */}
                <div className="spc-glow" style={{
                  position: "absolute",
                  top: "-40px", left: "-40px", right: "-40px", bottom: "-40px",
                  background: "radial-gradient(ellipse at 50% 50%, rgba(110,185,255,0.48) 0%, rgba(155,210,255,0.18) 38%, transparent 68%)",
                  borderRadius: "50%", pointerEvents: "none", opacity: 0,
                }} />

                {/* ── Card face ── */}
                <div style={{
                  position: "absolute", inset: 0,
                  borderRadius: "16px", overflow: "hidden",
                  background: "rgba(255,255,255,0.94)",
                  boxShadow: "0 14px 52px rgba(100,160,255,0.13), 0 4px 14px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(215,235,255,0.90)",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.src} alt={card.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                  {/* Shine */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 52%)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* ── Hover tooltip ── */}
                <div className="spc-tip" style={{
                  position: "absolute",
                  top: "164px", left: "12px",
                  width: "202px",
                  background: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(185,220,255,0.68)",
                  borderRadius: "14px",
                  padding: "13px 16px",
                  opacity: 0, filter: "blur(4px)",
                  pointerEvents: "none",
                  boxShadow: "0 8px 36px rgba(100,160,255,0.11), 0 2px 6px rgba(0,0,0,0.05)",
                }}>
                  <p style={{
                    margin: "0 0 4px",
                    fontFamily: "'DM Serif Display',Georgia,serif",
                    fontSize: "0.95rem", fontWeight: 400, color: "#0D1826", lineHeight: 1.2,
                  }}>{card.title}</p>
                  <p style={{
                    margin: "0 0 8px",
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.52rem", letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#80A8C4",
                  }}>{card.role} · {card.year}</p>
                  <p style={{
                    margin: 0, fontSize: "0.78rem", color: "#5A7080", lineHeight: 1.45,
                  }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom hint ── */}
      <div style={{
        position: "absolute", bottom: "26px", right: "34px",
        fontFamily: "'DM Mono',monospace",
        fontSize: "0.54rem", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#B8CCDE", pointerEvents: "none",
      }}>Hover to explore</div>

    </main>
  );
}
