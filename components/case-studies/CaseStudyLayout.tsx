"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────────────
   THEME CONFIG
───────────────────────────────────────────────────────────────────── */

export type CsTheme = "air" | "biblo" | "eco" | "care" | "ds";

const THEME_VARS: Record<CsTheme, CSSProperties> = {
  air: {
    "--csl-accent":        "#1E90FF",
    "--csl-accent-dim":    "rgba(30,144,255,0.1)",
    "--csl-hero-bg":       "#ffffff",
    "--csl-tag-bg":        "#E8F2FB",
    "--csl-toc-active-bg": "#EAF3FF",
    backgroundImage: "linear-gradient(rgba(30,144,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.07) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  } as CSSProperties,
  biblo: {
    "--csl-accent":        "#C8703A",
    "--csl-accent-dim":    "rgba(200,112,58,0.1)",
    "--csl-hero-bg":       "#FFFDF8",
    "--csl-tag-bg":        "#FEF4E8",
    "--csl-toc-active-bg": "#FEF4E8",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  } as CSSProperties,
  eco: {
    "--csl-accent":        "#2D7D43",
    "--csl-accent-dim":    "rgba(45,125,67,0.1)",
    "--csl-hero-bg":       "#ffffff",
    "--csl-tag-bg":        "#E8F7EC",
    "--csl-toc-active-bg": "#E8F7EC",
    backgroundImage: "linear-gradient(rgba(45,125,67,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,67,0.07) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  } as CSSProperties,
  care: {
    "--csl-accent":        "#0077B6",
    "--csl-accent-dim":    "rgba(0,119,182,0.1)",
    "--csl-hero-bg":       "#0A2540",
    "--csl-tag-bg":        "#E0F2FE",
    "--csl-toc-active-bg": "#E0F2FE",
  } as CSSProperties,
  ds: {
    "--csl-accent":        "#1076BC",
    "--csl-accent-dim":    "rgba(16,118,188,0.1)",
    "--csl-hero-bg":       "#ffffff",
    "--csl-tag-bg":        "#E3F3FF",
    "--csl-toc-active-bg": "#E3F3FF",
    backgroundImage: "linear-gradient(rgba(16,118,188,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,118,188,0.06) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  } as CSSProperties,
};

/* ─────────────────────────────────────────────────────────────────────
   IMAGE PLACEHOLDER
───────────────────────────────────────────────────────────────────── */

export function CsImg({
  label,
  sub,
  icon = "🖼️",
  height = 360,
  aspect,
  className = "",
}: {
  label: string;
  sub?: string;
  icon?: string;
  height?: number;
  aspect?: string;
  className?: string;
}) {
  const style: CSSProperties = aspect ? { aspectRatio: aspect } : { height };
  return (
    <div className={`csl-img ${className}`} style={style}>
      <span className="csl-img-icon">{icon}</span>
      <p className="csl-img-label">{label}</p>
      {sub && <p className="csl-img-sub">{sub}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────────────────────────────────── */

export function CsSection({
  id,
  children,
  last = false,
}: {
  id: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`csl-section csl-reveal${last ? " csl-section:last-child" : ""}`}
      id={id}
      data-s={id}
    >
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────────────────────────────── */

export function CsSectionHeader({
  num,
  label,
  title,
  sub,
}: {
  num?: string;
  label?: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="csl-reveal" style={{ marginBottom: 40 }}>
      {label && <p className="csl-section-eyebrow">{label}</p>}
      {num && !label && <span className="csl-section-num">{num}</span>}
      <h2 className="csl-section-title">{title}</h2>
      {sub && <p className="csl-section-sub">{sub}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SIDEBAR NAV
───────────────────────────────────────────────────────────────────── */

function CsSidebarNav({
  items,
  active,
}: {
  items: { id: string; label: string }[];
  active: string;
}) {
  return (
    <div className="csl-toc">
      <ul className="csl-toc-list">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`csl-toc-item${active === item.id ? " active" : ""}`}
            >
              <span className="csl-toc-num">0{i + 1}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SIDEBAR META
───────────────────────────────────────────────────────────────────── */

function CsSidebarMeta({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="csl-sidebar-meta">
      {rows.map((row) => (
        <div className="csl-meta-row" key={row.label}>
          <p className="csl-meta-label">{row.label}</p>
          <p className="csl-meta-val">{row.value}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FLOATING PILL NAV (matches home page)
───────────────────────────────────────────────────────────────────── */

function CaseStudyNav() {
  useEffect(() => {
    const clockEl = document.getElementById("cs-nav-clock");
    if (!clockEl) return;
    function getIST() {
      const ist = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const h = ist.getHours(), m = ist.getMinutes();
      const ap = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      return h12 + ":" + String(m).padStart(2, "0") + " " + ap;
    }
    clockEl.textContent = getIST();
    const interval = setInterval(() => { clockEl.textContent = getIST(); }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="cs-nav">
      <div className="nav-pill">
        <div className="nav-monogram">NT</div>
        <div className="nav-clock-group">
          <span className="nav-dot" />
          <span className="nav-time" id="cs-nav-clock">--:-- --</span>
        </div>
        <div className="nav-divider" />
        <a href="/#work" className="nav-link-item">Work</a>
        <a
          href="https://docs.google.com/document/d/13FPLODLMONa5ZYwlLNAZMchZnM_s88bSBnIZICCFik8/edit?tab=t.0"
          className="nav-link-item nav-link-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span className="nav-resume-arrow">↗</span>
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   "LET'S GRAB COFFEE" FOOTER
───────────────────────────────────────────────────────────────────── */

function CsFooter() {
  const links = [
    { platform: "Email", value: "tyaginikunj26@gmail.com", href: "mailto:tyaginikunj26@gmail.com" },
    { platform: "LinkedIn", value: "nikunj-tyagi26", href: "https://www.linkedin.com/in/nikunj-tyagi26/" },
    { platform: "Instagram", value: "@nikunj", href: "https://instagram.com" },
  ];

  return (
    <footer style={{
      background: "#faf9f7",
      borderTop: "1px solid rgba(180,140,130,0.15)",
      padding: "5rem clamp(1.5rem, 8vw, 6rem)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* background glow */}
      <div style={{
        position: "absolute", top: -80, left: -80,
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(30,144,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 520, marginLeft: "auto", textAlign: "right" }}>
        {/* Heading */}
        <h2 style={{
          fontFamily: "var(--font-caveat, 'Caveat', cursive)",
          fontSize: "clamp(3rem, 7vw, 5rem)",
          fontWeight: 700,
          color: "#111111",
          lineHeight: 1.25,
          marginBottom: "1.1rem",
        }}>
          Let&rsquo;s grab<br />a{" "}
          <span style={{ color: "#1E90FF" }}>coffee</span> ☕
        </h2>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "1.05rem",
          fontStyle: "italic",
          color: "#7a7069",
          lineHeight: 1.65,
          marginBottom: "2.5rem",
          marginLeft: "auto",
          maxWidth: 380,
        }}>
          Whether it&rsquo;s a role, a collab, or just a good conversation about design, I&rsquo;m always up for it.
        </p>

        {/* Contact links */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "3rem", marginLeft: "auto" }}>
          {links.map((link, i) => (
            <a
              key={link.platform}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 0",
                borderBottom: "1px solid rgba(180,140,130,0.15)",
                borderTop: i === 0 ? "1px solid rgba(180,140,130,0.15)" : undefined,
                textDecoration: "none",
                color: "#111111",
                transition: "padding-left 0.25s",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#b0a89f",
                  minWidth: 90,
                  flexShrink: 0,
                  fontFamily: "Lato, sans-serif",
                }}>
                  {link.platform}
                </span>
                <span style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "1rem",
                  color: "#7a7069",
                }}>
                  {link.value}
                </span>
              </div>
              <span style={{ fontSize: 15, color: "#b0a89f" }}>↗</span>
            </a>
          ))}
        </div>

        {/* Footer bar */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(180,140,130,0.15)",
        }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#7a7069" }}>
            Nikunj Tyagi · Product Designer
          </span>
          <span style={{ fontFamily: "var(--font-caveat, 'Caveat', cursive)", fontSize: "0.9rem", color: "#7a7069" }}>
            made with ☕ &amp; obsession
          </span>
          <span style={{ fontSize: 13, letterSpacing: "0.06em", color: "#b0a89f" }}>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN PAGE WRAPPER — CaseStudyPage
   Provides: sticky header · progress bar · two-column body · sticky sidebar
───────────────────────────────────────────────────────────────────── */

export function CaseStudyPage({
  theme,
  title,
  tag,
  tocItems,
  metaRows = [],
  hero,
  children,
}: {
  theme: CsTheme;
  title: string;
  tag: string;
  tocItems: { id: string; label: string }[];
  metaRows?: { label: string; value: string }[];
  hero: ReactNode;
  children: ReactNode;
}) {
  const rootRef    = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(tocItems[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Disable browser scroll restoration so hero is always the first thing visible */
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.body.classList.add("csl-page-active");
    /* Fade in after scroll lands — prevents footer flash on password unlock */
    const t = setTimeout(() => setVisible(true), 60);
    return () => {
      document.body.classList.remove("csl-page-active");
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    /* Scroll-reveal */
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.06 }
    );
    root.querySelectorAll(".csl-reveal").forEach((el) => revealObs.observe(el));

    /* Fallback: reveal anything already in viewport after two frames,
       in case IntersectionObserver fires too late on initial load */
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.querySelectorAll<Element>(".csl-reveal").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
        });
      });
    });

    /* Hard fallback: reveal all after 400 ms in case RAF doesn't work */
    const fallbackTimer = setTimeout(() => {
      root.querySelectorAll(".csl-reveal").forEach((el) => el.classList.add("in"));
    }, 400);

    /* Active section tracking */
    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-s]"));
    const onScroll = () => {
      const anchor = window.innerHeight * 0.3;
      const hit = sections
        .map((s) => ({ id: s.dataset.s ?? "", top: s.getBoundingClientRect().top - anchor }))
        .filter((s) => s.top <= 0)
        .sort((a, b) => b.top - a.top)[0];
      if (hit) setActive(hit.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObs.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf1);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="csl-root" data-csl-theme={theme} ref={rootRef} style={{
      ...THEME_VARS[theme],
      opacity: visible ? 1 : 0,
      transition: "opacity 0.45s ease",
    }}>
      {hero}
      <div className="csl-body">
        <aside className="csl-sidebar">
          <CsSidebarNav items={tocItems} active={active} />
        </aside>
        <main className="csl-main">{children}</main>
      </div>
    </div>
  );
}
