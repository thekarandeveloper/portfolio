"use client";

import { useEffect, useRef } from "react";

export interface FlowScreen {
  stepNumber: number;
  totalSteps: number;
  heading: string;
  subheading: string;
  description: string;
  decisions?: [string, string];
  highlightLabel?: string;
  imageSrc: string;
  imageAlt: string;
  url?: string;
}

interface ProductFlowShowcaseProps {
  screens: FlowScreen[];
}

export function ProductFlowShowcase({ screens }: ProductFlowShowcaseProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.06 }
    );
    el.querySelectorAll(".pfs-reveal").forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pfs-bg" ref={wrapRef}>
      {screens.map((screen) => {
        const step = String(screen.stepNumber).padStart(2, "0");
        const total = String(screen.totalSteps).padStart(2, "0");
        const url = screen.url ?? "airiq.com";

        return (
          <div key={screen.stepNumber} className="pfs-row pfs-reveal">
            {/* ── browser frame ── */}
            <div className="pfs-frame">
              <div className="pfs-chrome">
                <div className="pfs-chrome-dots">
                  <span className="pfs-chrome-dot pfs-chrome-dot--r" />
                  <span className="pfs-chrome-dot pfs-chrome-dot--y" />
                  <span className="pfs-chrome-dot pfs-chrome-dot--g" />
                </div>
                <div className="pfs-url-pill">
                  <svg width="9" height="10" viewBox="0 0 10 12" fill="none" aria-hidden="true">
                    <rect x="1" y="5" width="8" height="7" rx="1.5" stroke="#8A94B8" strokeWidth="1.2" />
                    <path d="M3 5V3.5a2 2 0 014 0V5" stroke="#8A94B8" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="pfs-url-txt">{url}</span>
                </div>
              </div>
              <div className="pfs-screen">
                <img src={screen.imageSrc} alt={screen.imageAlt} loading="lazy" draggable={false} />
              </div>
            </div>

            {/* ── decision callout strip (between frame and text) ── */}
            {screen.highlightLabel && (
              <div className="pfs-callout">
                <span className="pfs-callout-eyebrow">Key decision</span>
                <span className="pfs-callout-text">{screen.highlightLabel}</span>
              </div>
            )}

            {/* ── text block ── */}
            <div className="pfs-text">
              <p className="pfs-counter">{step}&thinsp;/&thinsp;{total}</p>
              <h3 className="pfs-h">{screen.heading}</h3>

              {/* Decision chips replace paragraph */}
              {screen.decisions ? (
                <div className="pfs-chips">
                  {screen.decisions.map((d, i) => (
                    <span key={i} className={i === 0 ? "pfs-chip pfs-chip--primary" : "pfs-chip"}>
                      ✦ {d}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="pfs-desc">{screen.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
