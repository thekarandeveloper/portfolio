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
    "--csl-hero-bg":       "#071E35",
    "--csl-tag-bg":        "#E3F3FF",
    "--csl-toc-active-bg": "#E3F3FF",
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
          href="/Nikunj-Resume.pdf"
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

  useEffect(() => {
    document.body.classList.add("csl-page-active");
    return () => document.body.classList.remove("csl-page-active");
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
    };
  }, []);

  return (
    <div className="csl-root" ref={rootRef} style={THEME_VARS[theme]}>
      <CaseStudyNav />
      {hero}
      <div className="csl-body">
        <aside className="csl-sidebar">
          <CsSidebarNav items={tocItems} active={active} />
        </aside>
        <main className="csl-main">{children}</main>
      </div>
      <footer style={{
        borderTop: "1px solid rgba(180,140,130,0.15)",
        padding: "2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        background: "var(--bg2, #faf9f7)",
      }}>
        <span style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "var(--ink3, #7a7069)" }}>
          Nikunj Tyagi · Product Designer
        </span>
        <span style={{ fontFamily: "var(--font-caveat, cursive)", fontSize: "0.95rem", color: "var(--ink3, #7a7069)" }}>
          made with ☕ &amp; obsession
        </span>
        <span style={{ fontSize: 15, letterSpacing: "0.06em", color: "var(--ink4, #b0a89f)" }}>
          © 2026
        </span>
      </footer>
    </div>
  );
}
