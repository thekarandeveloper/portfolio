"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────────────
   THEME CONFIG
───────────────────────────────────────────────────────────────────── */

export type CsTheme = "air" | "biblo" | "eco" | "care" | "ds";

const THEME_VARS: Record<CsTheme, CSSProperties> = {
  air: {
    "--csl-accent":        "#1E90FF",
    "--csl-accent-dim":    "rgba(30,144,255,0.1)",
    "--csl-hero-bg":       "#0B1E3D",
    "--csl-tag-bg":        "#E8F2FB",
    "--csl-toc-active-bg": "#EAF3FF",
  } as CSSProperties,
  biblo: {
    "--csl-accent":        "#C8703A",
    "--csl-accent-dim":    "rgba(200,112,58,0.1)",
    "--csl-hero-bg":       "#1C0F08",
    "--csl-tag-bg":        "#FEF4E8",
    "--csl-toc-active-bg": "#FEF4E8",
  } as CSSProperties,
  eco: {
    "--csl-accent":        "#2D7D43",
    "--csl-accent-dim":    "rgba(45,125,67,0.1)",
    "--csl-hero-bg":       "#0A1F0F",
    "--csl-tag-bg":        "#E8F7EC",
    "--csl-toc-active-bg": "#E8F7EC",
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
      className={`csl-section${last ? " csl-section:last-child" : ""}`}
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
      <p className="csl-toc-title">Contents</p>
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
   STICKY HEADER
───────────────────────────────────────────────────────────────────── */

function CsHeader({
  title,
  tag,
  progressRef,
}: {
  title: string;
  tag: string;
  progressRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <header className="csl-header">
      <div className="csl-header-inner">
        <Link href="/" className="csl-back">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Portfolio
        </Link>
        <span className="csl-header-brand">{title}</span>
        <span className="csl-header-tag">{tag}</span>
      </div>
      <div className="csl-progress-track">
        <div className="csl-progress-fill" ref={progressRef} />
      </div>
    </header>
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
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(tocItems[0]?.id ?? "");

  useEffect(() => {
    document.body.classList.add("csl-page-active");
    return () => document.body.classList.remove("csl-page-active");
  }, []);

  useEffect(() => {
    const root     = rootRef.current;
    const progress = progressRef.current;
    if (!root || !progress) return;

    /* Reading progress */
    const updateProgress = () => {
      const d = document.documentElement;
      progress.style.width = `${(d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100}%`;
    };

    /* Scroll-reveal */
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.06 }
    );
    root.querySelectorAll(".csl-reveal").forEach((el) => revealObs.observe(el));

    /* Active section tracking */
    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-s]"));
    const onScroll = () => {
      updateProgress();
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
      <CsHeader title={title} tag={tag} progressRef={progressRef} />
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
