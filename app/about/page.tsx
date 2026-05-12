"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

function HeroLine({ children, delay = 0, active }: { children: ReactNode; delay?: number; active: boolean }) {
  return (
    <span style={{ overflow: "hidden", display: "block", lineHeight: "inherit" }}>
      <span style={{
        display: "block",
        transform: active ? "translateY(0)" : "translateY(108%)",
        transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}>
        {children}
      </span>
    </span>
  );
}

function Appear({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, vis } = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(36px)",
      transition: `opacity 1s ease ${delay}ms, transform 1s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const MARQUEE_TEXT = "Product Designer  ·  New Delhi  ·  Figma  ·  UX Research  ·  B2B SaaS  ·  Healthcare  ·  iOS Design  ·  3+ Years  ·  ";

export default function AboutPage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ background: "#fff", color: "#111", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{`
        @keyframes abt-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .abt-marq-track { display: flex; animation: abt-marq 26s linear infinite; white-space: nowrap; will-change: transform; }
        .abt-approach-row { display: grid; grid-template-columns: 56px 1fr 1fr; gap: 2rem; padding: 2.5rem 0; border-top: 1px solid rgba(0,0,0,0.08); align-items: start; }
        .abt-outside-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
        .abt-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; }
        .abt-bio-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; max-width: 860px; }
        .abt-cta-btns { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .abt-nav-back { font-family: 'DM Mono', monospace; font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: #111; text-decoration: none; padding: 8px 16px; background: rgba(255,255,255,0.92); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(0,0,0,0.08); border-radius: 6px; transition: background 0.2s ease; }
        .abt-nav-back:hover { background: rgba(245,245,245,0.98); }
        .abt-cta-btn { font-family: 'DM Mono', monospace; font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; border: 1px solid rgba(255,255,255,0.18); padding: 14px 28px; border-radius: 4px; transition: background 0.25s ease, border-color 0.25s ease; cursor: pointer; display: inline-block; }
        .abt-cta-btn-primary { color: #fff; }
        .abt-cta-btn-primary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.36); }
        .abt-cta-btn-secondary { color: rgba(255,255,255,0.45); border-color: rgba(255,255,255,0.08); }
        .abt-cta-btn-secondary:hover { background: rgba(255,255,255,0.05); }
        @media (max-width: 900px) {
          .abt-approach-row { grid-template-columns: 48px 1fr !important; }
          .abt-approach-body { grid-column: 1 / -1; padding-left: 48px; }
          .abt-outside-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .abt-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .abt-bio-cols { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .abt-hero-name { font-size: clamp(3.5rem, 18vw, 6rem) !important; }
          .abt-info-row { flex-direction: column !important; gap: 2rem !important; }
          .abt-section-pad { padding-left: clamp(20px, 5vw, 48px) !important; padding-right: clamp(20px, 5vw, 48px) !important; }
        }
      `}</style>

      {/* Curtain reveal */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#111",
        transformOrigin: "top center",
        transform: entered ? "scaleY(0)" : "scaleY(1)",
        transition: "transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)",
        pointerEvents: "none",
      }} />

      {/* Top nav */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(16px, 3vw, 28px) clamp(20px, 5vw, 56px)",
        pointerEvents: "none",
      }}>
        <div style={{ pointerEvents: "all", opacity: entered ? 1 : 0, transition: "opacity 0.7s ease 0.9s" }}>
          <Link href="/" className="abt-nav-back">← Home</Link>
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#aaa",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.7s ease 1.1s",
          pointerEvents: "none",
        }}>
          About · 2025
        </span>
      </nav>

      {/* ─── HERO ─── */}
      <section
        className="abt-section-pad"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingTop: "clamp(80px, 14vh, 160px)",
          paddingBottom: "clamp(60px, 10vh, 110px)",
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
          position: "relative",
        }}
      >
        {/* Label */}
        <div style={{
          marginBottom: "2.5rem",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 1.3s",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#bbb",
          }}>
            The person behind the pixels
          </span>
        </div>

        {/* Name */}
        <div style={{ lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
          <HeroLine delay={120} active={entered}>
            <span className="abt-hero-name" style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(4.5rem, 14vw, 13rem)",
              fontWeight: 400,
              color: "#111",
              display: "block",
            }}>
              Nikunj
            </span>
          </HeroLine>
          <HeroLine delay={280} active={entered}>
            <span className="abt-hero-name" style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(4.5rem, 14vw, 13rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#111",
              display: "block",
            }}>
              Tyagi.
            </span>
          </HeroLine>
        </div>

        {/* Info row */}
        <div
          className="abt-info-row"
          style={{
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
            opacity: entered ? 1 : 0,
            transform: entered ? "none" : "translateY(18px)",
            transition: "opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s",
          }}
        >
          {[
            { label: "Role", value: "Product Designer" },
            { label: "Based", value: "New Delhi, India" },
            { label: "Focus", value: "B2B SaaS · iOS · Healthcare" },
            { label: "Status", value: "Open to opportunities" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "0.35rem",
                margin: "0 0 0.35rem",
              }}>
                {label}
              </p>
              <p style={{
                fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#333",
                letterSpacing: "0.01em",
                margin: 0,
              }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute",
          bottom: "clamp(32px, 6vw, 64px)",
          right: "clamp(20px, 5vw, 72px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.8s ease 1.6s",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#ccc",
            writingMode: "vertical-rl",
          }}>
            Scroll
          </span>
          <div style={{ width: "1px", height: "52px", background: "linear-gradient(to bottom, #ccc, transparent)" }} />
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "16px 0",
        overflow: "hidden",
        background: "#fff",
      }}>
        <div className="abt-marq-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#999",
            }}>
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATEMENT ─── */}
      <section
        className="abt-section-pad"
        style={{
          padding: "clamp(6rem, 12vh, 12rem) clamp(20px, 5vw, 72px)",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Appear>
            <p style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 4.5vw, 4rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.22,
              color: "#111",
              maxWidth: "840px",
              marginBottom: "5rem",
              margin: "0 0 5rem",
            }}>
              "I design the way I explore — noticing what others walk past."
            </p>
          </Appear>
          <div className="abt-bio-cols">
            <Appear delay={80}>
              <p style={{
                fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.88,
                color: "#444",
                margin: 0,
              }}>
                I'm Nikunj — a product designer who turns complex workflows into calm, usable experiences. I listen closely, sketch quickly, and care about the tiny moments where a product starts feeling human.
              </p>
            </Appear>
            <Appear delay={160}>
              <p style={{
                fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.88,
                color: "#444",
                margin: 0,
              }}>
                The same attention I bring to noticing flowers no one else sees — that's what I bring to every pixel, every flow, every interaction detail. Design is never decoration. It's a conversation.
              </p>
            </Appear>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section
        className="abt-section-pad"
        style={{
          padding: "clamp(5rem, 10vh, 10rem) clamp(20px, 5vw, 72px)",
          background: "#FAFAFA",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Appear>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#bbb",
              marginBottom: "4rem",
              margin: "0 0 4rem",
            }}>
              02 / Approach
            </p>
          </Appear>
          <div>
            {[
              { num: "01", title: "Start with why", body: "I map user problems before touching Figma. Research isn't a phase — it's the foundation everything else is built on." },
              { num: "02", title: "Calm over clever", body: "Good design doesn't demand attention. It quietly solves. I resist decorative complexity at every turn." },
              { num: "03", title: "Details are the design", body: "The 4px spacing. The microcopy. The empty state. These aren't polish — they're the experience itself." },
              { num: "04", title: "Collaborate, don't present", body: "The best work happens in conversations with engineers and PMs, not in polished decks with a one-way audience." },
            ].map(({ num, title, body }, i) => (
              <Appear key={num} delay={i * 60}>
                <div className="abt-approach-row">
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "#ddd",
                    paddingTop: "4px",
                    display: "block",
                  }}>
                    {num}
                  </span>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                    fontWeight: 400,
                    color: "#111",
                    lineHeight: 1.18,
                    margin: 0,
                  }}>
                    {title}
                  </h3>
                  <p className="abt-approach-body" style={{
                    fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.78,
                    color: "#666",
                    margin: 0,
                  }}>
                    {body}
                  </p>
                </div>
              </Appear>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* ─── NUMBERS ─── */}
      <section
        className="abt-section-pad"
        style={{
          padding: "clamp(5rem, 10vh, 10rem) clamp(20px, 5vw, 72px)",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Appear>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#bbb",
              margin: "0 0 4rem",
            }}>
              03 / In numbers
            </p>
          </Appear>
          <div className="abt-stats-grid">
            {[
              { num: "3+", label: "years of design", note: "still learning" },
              { num: "50+", label: "cafes explored", note: "and counting" },
              { num: "∞", label: "km on highways", note: "no real answer" },
              { num: "01", label: "coffee to start", note: "always, no exceptions" },
            ].map(({ num, label, note }, i) => (
              <Appear key={label} delay={i * 70}>
                <div style={{ borderTop: "2px solid #111", paddingTop: "1.5rem" }}>
                  <p style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "#111",
                    margin: "0 0 0.5rem",
                  }}>
                    {num}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                    fontSize: "0.76rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#555",
                    margin: "0 0 0.3rem",
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-caveat), 'Caveat', cursive",
                    fontSize: "0.95rem",
                    color: "#bbb",
                    margin: 0,
                  }}>
                    {note}
                  </p>
                </div>
              </Appear>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTSIDE THE SCREEN ─── */}
      <section
        className="abt-section-pad"
        style={{
          padding: "clamp(5rem, 10vh, 10rem) clamp(20px, 5vw, 72px)",
          background: "#FAFAFA",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Appear>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#bbb",
              margin: "0 0 4rem",
            }}>
              04 / Outside the screen
            </p>
          </Appear>
          <div className="abt-outside-grid">
            <Appear>
              <div>
                <h3 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#111",
                  lineHeight: 1.18,
                  margin: "0 0 1.5rem",
                }}>
                  Long roads &amp;<br />yellow flowers.
                </h3>
                <p style={{
                  fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: "#555",
                  margin: 0,
                }}>
                  I stop for things most people walk past. Yellow flowers on a highway. Typography on a cafe menu. The light at 5pm. That same curiosity powers every design decision I make.
                </p>
              </div>
            </Appear>
            <Appear delay={100}>
              <div>
                <h3 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#111",
                  lineHeight: 1.18,
                  margin: "0 0 1.5rem",
                }}>
                  Cafes are my<br />second office.
                </h3>
                <p style={{
                  fontFamily: "var(--font-instrument), 'Instrument Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: "#555",
                  margin: 0,
                }}>
                  Good espresso, ambient noise, three focused hours. I've explored 50+ cafes across India and have strong opinions about which ones are for deep thinking versus client meetings.
                </p>
              </div>
            </Appear>
          </div>
        </div>
      </section>

      {/* ─── SECOND MARQUEE (reversed) ─── */}
      <div style={{
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "14px 0",
        overflow: "hidden",
        background: "#fff",
      }}>
        <style>{`@keyframes abt-marq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .abt-marq-rev { display: flex; animation: abt-marq-rev 28s linear infinite; white-space: nowrap; }`}</style>
        <div className="abt-marq-rev">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#ccc",
            }}>
              Nature's Atmosphere&nbsp;&nbsp;·&nbsp;&nbsp;Long Highways&nbsp;&nbsp;·&nbsp;&nbsp;Flowers &amp; Quiet&nbsp;&nbsp;·&nbsp;&nbsp;Cafes &amp; Coffee&nbsp;&nbsp;·&nbsp;&nbsp;Samsung A10s&nbsp;&nbsp;·&nbsp;&nbsp;New Delhi&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <section
        className="abt-section-pad"
        style={{
          padding: "clamp(6rem, 12vh, 13rem) clamp(20px, 5vw, 72px)",
          background: "#111",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Appear>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              margin: "0 0 3rem",
            }}>
              Let's build something
            </p>
          </Appear>
          <Appear delay={100}>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 4rem",
            }}>
              Worth<br />stopping for.
            </h2>
          </Appear>
          <Appear delay={200}>
            <div className="abt-cta-btns">
              <a
                href="mailto:nikunj.tyagi.design@gmail.com"
                className="abt-cta-btn abt-cta-btn-primary"
              >
                Say Hello ↗
              </a>
              <Link
                href="/"
                className="abt-cta-btn abt-cta-btn-secondary"
              >
                View Work ↗
              </Link>
            </div>
          </Appear>
          <div style={{
            marginTop: "6rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>archive by nikunj</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>camera · samsung a10s</span>
          </div>
        </div>
      </section>
    </main>
  );
}
