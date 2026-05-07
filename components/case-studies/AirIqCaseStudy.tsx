"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import {
  airAfterList,
  airBeforeList,
  airColorSwatches,
  airComponents,
  airDecisionBlocks,
  airDesignStats,
  airEdgeCases,
  airFigmaLinks,
  airHeroAnnotations,
  airHeroDecisions,
  airHeroMetrics,
  airIcons,
  airIterationGroups,
  airJourneyBlocks,
  airOutcomeMetrics,
  airProblemCards,
  airProblemWords,
  airProcessSteps,
  airRadiusTokens,
  airReflections,
  airResearchCards,
  airSpacingTokens,
  airTypeScale,
} from "./airIqData";

export function AirIqCaseStudy() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );

    root
      .querySelectorAll(
        ".eyebrow,.s-title,.s-sub,.prob-card,.ba-strip,.rc-card,.research-insight,.ps-step,.fail-block,.ds-big-card,.ds-stats,.reveal"
      )
      .forEach((el) => observer.observe(el));

    const wordEls = Array.from(root.querySelectorAll("#probWords .word"));
    const problemSection = root.querySelector("#problem");
    let wordsLit = false;
    const wordObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && !wordsLit) {
            wordsLit = true;
            wordEls.forEach((w, i) => setTimeout(() => w.classList.add("lit"), i * 110));
          }
        }),
      { threshold: 0.3 }
    );
    if (problemSection) wordObserver.observe(problemSection);

    const cleanups = [
      makeDraggable(root.querySelector<HTMLElement>("#researchTrack")),
      makeDraggable(root.querySelector<HTMLElement>("#processTrack")),
      makeDraggable(root.querySelector<HTMLElement>("#edgeTrack")),
    ].filter(Boolean) as Array<() => void>;

    return () => {
      observer.disconnect();
      wordObserver.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <main className="airiq-case-study" ref={pageRef}>
      <HeroSection />
      <HeroScreenSection />
      <ProblemSection />
      <ResearchSection />
      <ProcessSection />
      <IterationsSection />
      <BookingJourneySection />
      <DesignSystemSection />
      <EdgeCasesSection />
      <OutcomesSection />
    </main>
  );
}

/* ─────────────────────────────────────────
   UTILITIES
───────────────────────────────────────── */
function makeDraggable(el: HTMLElement | null) {
  if (!el) return null;
  let isDown = false, startX = 0, scrollLeft = 0;
  const down = (e: MouseEvent) => { isDown = true; el.classList.add("dragging"); startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; };
  const stop = () => { isDown = false; el.classList.remove("dragging"); };
  const move = (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.5; };
  el.addEventListener("mousedown", down);
  el.addEventListener("mouseleave", stop);
  el.addEventListener("mouseup", stop);
  el.addEventListener("mousemove", move);
  return () => { el.removeEventListener("mousedown", down); el.removeEventListener("mouseleave", stop); el.removeEventListener("mouseup", stop); el.removeEventListener("mousemove", move); };
}

function SectionIntro({ label, title, copy }: { label: string; title: React.ReactNode; copy: string }) {
  return (
    <>
      <div className="eyebrow"><div className="eyebrow-line" />{label}</div>
      <h2 className="s-title">{title}</h2>
      {copy && <p className="s-sub">{copy}</p>}
    </>
  );
}

function ScrollHint({ children }: { children: React.ReactNode }) {
  return <div className="scroll-hint-row">{children} <span className="sh-arrow">→</span></div>;
}

function FigmaLink({ children, href }: { children: React.ReactNode; href?: string }) {
  return <a className="view-link" href={href ?? airFigmaLinks.desktop} target="_blank" rel="noreferrer">{children}</a>;
}

function AirImgSlot({ label, aspect = "16/10" }: { label: string; aspect?: string }) {
  return (
    <div className="air-img-slot" style={{ aspectRatio: aspect }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="air-img-slot-label">{label}</span>
    </div>
  );
}

function BrowserFrame({ children, url = "airiq.app" }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="air-browser">
      <div className="air-browser-chrome">
        <div className="air-browser-dots"><span /><span /><span /></div>
        <div className="air-browser-url">{url}</div>
      </div>
      {children}
    </div>
  );
}

function IconSizeGroup({ label, boxSize, fontSize, icons }: { label: string; boxSize: number; fontSize?: number; icons: string[] }) {
  return (
    <div className="icon-size-group">
      <div className="icon-size-label">{label}</div>
      <div className="icon-size-row">
        {icons.map((icon, i) => (
          <div className="icon-box" key={i} style={{ width: boxSize, height: boxSize, fontSize }}>{icon}</div>
        ))}
      </div>
    </div>
  );
}

function delayStyle(delay?: string): CSSProperties | undefined {
  return delay ? { transitionDelay: delay } : undefined;
}

/* ─────────────────────────────────────────
   §1 HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-live-badge">
            <div className="live-dot" />
            Live in production &nbsp;·&nbsp; B2B SaaS &nbsp;·&nbsp; Travel Agents
          </div>
          <div className="hero-title">
            <span className="air">AIR </span><span className="iq">iQ</span>
          </div>
          <div className="hero-descriptor">Simplifying Complex Booking Systems</div>
          <div className="hero-meta">UI/UX Designer &nbsp;·&nbsp; 6 Months &nbsp;·&nbsp; Figma + v0 + AI workflow</div>
          <div className="hero-metrics">
            {airHeroMetrics.map((m) => (
              <div className="h-metric" key={m.label}>
                <div className="hm-val">{m.value}<span>{m.accent}</span></div>
                <div className="hm-label">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-links">
            <a className="hero-link hl-primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
              <span>View Desktop Design</span><span className="hl-icon">↗</span>
            </a>
            <a className="hero-link hl-secondary" href={airFigmaLinks.mobile} target="_blank" rel="noreferrer">
              <span>View Mobile Design</span><span className="hl-icon">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/Image/Airiq/thumbnail.png" alt="AIR iQ — flight search interface" />
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <div className="scroll-txt">scroll</div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §2 HERO SCREEN FIRST
───────────────────────────────────────── */
function HeroScreenSection() {
  return (
    <section id="heroScreen" className="section">
      <div className="s-inner">
        <SectionIntro
          label="01 — The work, first"
          title="The hardest screen."
          copy="Where agents spend 80% of their session — 15+ filters, 20+ data points per card, 4 trip-type variants."
        />
        <div className="hs-browser-wrap">
          <BrowserFrame url="airiq.app/search">
            <AirImgSlot label="search-results.png" aspect="16/7" />
          </BrowserFrame>
        </div>
        <div className="hs-annotation-row">
          {airHeroAnnotations.map((a) => (
            <div className="hs-chip" key={a}>
              <span className="hs-chip-dot" />
              {a}
            </div>
          ))}
        </div>
        <div className="decision-strip">
          {airHeroDecisions.map((d) => (
            <div className="decision-col" key={d.label}>
              <div className="dc-label">{d.label}</div>
              <div className="dc-text">{d.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §3 PROBLEM
───────────────────────────────────────── */
function ProblemSection() {
  return (
    <section id="problem" className="section">
      <div className="problem-liquid">
        <div className="liquid-blob lb-1" /><div className="liquid-blob lb-2" /><div className="liquid-blob lb-3" />
      </div>
      <div className="s-inner" style={{ position: "relative", zIndex: 2 }}>
        <SectionIntro
          label="02 — The problem"
          title={<>Built for the system,<br />not the human.</>}
          copy="Travel agents operate under pressure. Every second counts. The platform made their job harder."
        />
        <div className="prob-word-reveal" id="probWords">
          {airProblemWords.map((line, i) => (
            <span key={i}>
              {line.map((w, j) => (
                <span className={w.tone ? `word ${w.tone}` : "word"} key={j}>{w.text} </span>
              ))}
              <br />
            </span>
          ))}
        </div>
        <div className="problem-grid">
          {airProblemCards.map((c) => (
            <div className="prob-card" key={c.title} style={delayStyle(c.delay)}>
              <div className={`pc-tag ${c.tagClass}`}>{c.tag}</div>
              <div className="pc-title">{c.title}</div>
              <div className="pc-text">{c.text}</div>
            </div>
          ))}
        </div>
        <div className="ba-strip">
          <BeforeAfterList label="Before" labelClass="bsl-red" bulletClass="bb-red" items={airBeforeList} />
          <div className="ba-center">→</div>
          <BeforeAfterList label="After" labelClass="bsl-green" bulletClass="bb-green" items={airAfterList} />
        </div>
      </div>
    </section>
  );
}

function BeforeAfterList({ label, labelClass, bulletClass, items }: { label: string; labelClass: string; bulletClass: string; items: string[] }) {
  return (
    <div>
      <div className={`ba-side-label ${labelClass}`}>{label}</div>
      {items.map((item) => (
        <div className="ba-list-item" key={item}>
          <div className={`ba-bullet ${bulletClass}`} />
          <div className="ba-text">{item}</div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   §4 RESEARCH
───────────────────────────────────────── */
function ResearchSection() {
  return (
    <section id="research" className="section">
      <div className="s-inner">
        <SectionIntro
          label="03 — Research & competitive study"
          title={<>Studied what the best<br />get wrong. Then fixed it.</>}
          copy="5 platforms before touching Figma. The gap between B2C and B2B GDS was the product opportunity."
        />
        <ScrollHint>Drag to explore all platforms</ScrollHint>
        <div className="research-track" id="researchTrack">
          <div className="research-row">
            {airResearchCards.map((c) => (
              <div className="rc-card" key={c.name}>
                <div className="rc-header">
                  <div className="rc-name">{c.name}</div>
                  <div className="rc-type">{c.type}</div>
                </div>
                <div className="rc-body">
                  <div className="rc-section-label">What works</div>
                  {c.works.map((t) => <div className="rc-tag rct-good" key={t}>✓ {t}</div>)}
                  <div className="rc-section-label" style={{ marginTop: 10 }}>What&apos;s missing</div>
                  {c.missing.map((t) => <div className="rc-tag rct-bad" key={t}>✗ {t}</div>)}
                  <div className="rc-divider" />
                  <div className="rc-insight">{c.insight}</div>
                </div>
                <div className="rc-opportunity">{c.opportunity}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="research-insight reveal">
          <div className="ri-label">The single insight that drove everything</div>
          <div className="ri-quote">&quot;Speed is survival. A travel agent compares 8 fares in 90 seconds. Every extra click is a lost booking.&quot;</div>
          <div className="ri-sub">This drove every hierarchy decision — why price is largest, why filters are persistent, why the flight card surfaces 6 data points without a click.</div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §5 PROCESS + AI
───────────────────────────────────────── */
function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="s-inner">
        <SectionIntro
          label="04 — Process & AI acceleration"
          title={<>Used AI to move faster<br />without cutting corners.</>}
          copy="v0 and ChatGPT at specific stages to compress the loop — not to replace thinking, but to validate faster."
        />
        <ScrollHint>Drag to explore the process</ScrollHint>
        <div className="process-track" id="processTrack">
          <div className="process-row">
            {airProcessSteps.map((s) => (
              <div className="ps-step" key={s.num}>
                {s.save && <div className="time-save">{s.save}</div>}
                <div className="ps-num">{s.num}</div>
                <div className="ps-title">{s.title}</div>
                <div className="ps-text">{s.text}</div>
                {s.old && <><div className="old-pill">{s.old}</div><br /></>}
                <div className="ai-pill"><div className="ai-pill-dot" />{s.ai}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="fail-block reveal">
          <div className="fail-icon">✕</div>
          <div>
            <div className="fail-label">Failed attempt — what I explored and killed</div>
            <div className="fail-title">The modal filter — looked clean, broke the flow</div>
            <div className="fail-text">First version put all 15 filters in a modal. Built a v0 prototype. One stakeholder walkthrough made it obvious: agents need results and filters visible simultaneously. Killed on day 2. Rebuilt as a persistent 274px sidebar. The prototype caught this before days were spent in Figma — that&apos;s the point.</div>
            <div className="fail-pill">✓ Persistent filter panel — agents never lose context while filtering</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §6 DESIGN VARIATIONS
───────────────────────────────────────── */
function IterationsSection() {
  return (
    <section id="iterations" className="section">
      <div className="s-inner">
        <SectionIntro
          label="05 — Design decisions & iterations"
          title={<>What I tried first.<br />What I changed.</>}
          copy=""
        />

        {airIterationGroups.map((group) => (
          <div className="iter-group" key={group.label}>
            <div className="iter-group-label">{group.label}</div>
            <div className="iter-rail">
              {group.items.map((item) => {
                const cls = item.status === "DISCARDED" ? "is-discarded" : item.status === "ITERATION" ? "is-iteration" : "is-final";
                return (
                  <div className="iter-card" key={item.title}>
                    <AirImgSlot label={item.img} aspect="16/10" />
                    <div className="iter-foot">
                      <span className={`iter-status ${cls}`}>{item.status}</span>
                      <div className="iter-title">{item.title}</div>
                      <div className="iter-reason">{item.reason}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="dblocks">
          {airDecisionBlocks.map((b, i) => (
            <div className={`dblock ${i % 2 !== 0 ? "flip" : ""}`} key={b.num}>
              <div className="dblock-copy">
                <div className="dblock-num">{b.num}</div>
                <div className="dblock-label">{b.label}</div>
                <div className="dblock-title">{b.title}</div>
                <div className="dblock-text">{b.text}</div>
                <div className="dblock-outcome">✓ {b.outcome}</div>
              </div>
              <div className="dblock-screen">
                {b.img
                  ? <AirImgSlot label={b.img} aspect="4/3" />
                  : <div className="dblock-quote-wrap"><div className="dblock-quote">&ldquo;{b.outcome}&rdquo;</div></div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §7 BOOKING JOURNEY
───────────────────────────────────────── */
function BookingJourneySection() {
  return (
    <section id="journey" className="section">
      <div className="s-inner">
        <SectionIntro
          label="06 — The full booking journey"
          title={<>From search<br />to confirmation.</>}
          copy="8 screens in sequence. Every screen, every decision."
        />
      </div>
      <div className="journey-wrap">
        {airJourneyBlocks.map((b, i) => (
          <div className={`jb ${i % 2 !== 0 ? "flip" : ""}`} key={b.step}>
            <div className="jb-copy">
              <div className="jb-step">{b.step}</div>
              <div className="jb-title">{b.title}</div>
              <div className="jb-decisions">
                {b.decisions.map((d) => (
                  <div className="jb-dec" key={d}>
                    <span className="jb-dot" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="jb-screen">
              <BrowserFrame url={b.url}>
                <AirImgSlot label={b.img} aspect="16/9" />
              </BrowserFrame>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §8 DESIGN SYSTEM
───────────────────────────────────────── */
function DesignSystemSection() {
  return (
    <section id="system" className="section">
      <div className="s-inner">
        <SectionIntro
          label="07 — Design system"
          title={<>Built from zero.<br />Designed to scale.</>}
          copy="No existing library. Every token, component, and icon built ground-up."
        />

        <div className="ds-intro">
          <div className="ds-big-card">
            <div className="ds-card-label"><div className="ds-card-label-line" />Color system</div>
            <div className="ds-card-title">Semantic tokens, not raw hex</div>
            <div className="ds-card-sub">Every color has a purpose — named and documented.</div>
            <div className="color-row">
              {airColorSwatches.map((s) => (
                <div className="c-swatch" key={s.name}>
                  <div className="c-block" style={{ background: s.value }} />
                  <div className="c-name">{s.name}</div>
                </div>
              ))}
            </div>
            <FigmaLink>View full color system ↗</FigmaLink>
          </div>

          <div className="ds-big-card" style={{ transitionDelay: "0.1s" }}>
            <div className="ds-card-label"><div className="ds-card-label-line" />Typography system</div>
            <div className="ds-card-title">Lato — one family, full scale</div>
            <div className="ds-card-sub">Chosen for legibility under data density.</div>
            <div className="type-scale">
              {airTypeScale.map((t) => (
                <div className="type-row-item" key={t.sample}>
                  <div className="type-sample" style={{ fontSize: t.size, fontWeight: t.weight, fontStyle: t.style }}>{t.sample}</div>
                  <div className="type-meta">{t.meta}</div>
                </div>
              ))}
            </div>
            <FigmaLink>View typography in Figma ↗</FigmaLink>
          </div>
        </div>

        <div className="ds-big-card span-2 reveal" style={{ marginBottom: 16 }}>
          <div className="ds-card-label"><div className="ds-card-label-line" />Spacing & grid</div>
          <div className="ds-card-title">4pt base grid — nothing placed arbitrarily</div>
          <div className="ds-card-sub">All spacing is a multiple of 4: 4, 8, 12, 16, 24, 32, 40, 48.</div>
          <div className="spacing-row">
            {airSpacingTokens.map((t) => (
              <div className="spacing-token" key={t.label}>
                <div className="sp-block" style={{ width: t.size, height: t.size }}>
                  <div className="sp-label">{t.label}</div>
                </div>
                <div className="spacing-token-label">{t.px}</div>
              </div>
            ))}
          </div>
          <div className="token-section">
            <div className="token-label">Border radius tokens</div>
            <div className="token-row">
              {airRadiusTokens.map((t) => (
                <div className="token-chip" key={t.label}>
                  <div className="token-preview" style={{ background: "var(--airq-blue-light)", borderRadius: t.radius, border: "1px solid var(--airq-blue)" }} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
          <FigmaLink>View grid & spacing in Figma ↗</FigmaLink>
        </div>

        <div className="ds-big-card span-2 reveal" style={{ marginBottom: 16 }}>
          <div className="ds-card-label"><div className="ds-card-label-line" />Components</div>
          <div className="ds-card-title">Reusable. Consistent. Token-driven.</div>
          <div className="ds-card-sub">Change a token — the entire system updates.</div>
          <div className="comp-grid">
            {airComponents.map((c) => (
              <div className="comp-item" key={c.name}>
                <div className="ci-icon">{c.icon}</div>
                <div className="ci-name">{c.name}</div>
                <div className="ci-count">{c.count}</div>
              </div>
            ))}
          </div>
          <FigmaLink>View full component library ↗</FigmaLink>
        </div>

        <div className="ds-big-card span-2 reveal">
          <div className="ds-card-label"><div className="ds-card-label-line" />Icon system</div>
          <div className="ds-card-title">Custom icons — drawn from scratch. Zero libraries.</div>
          <div className="ds-card-sub">Every icon drawn in Figma. Three sizes for every use case.</div>
          <div className="icon-sizes">
            <IconSizeGroup label="24px — primary UI" boxSize={44} icons={airIcons} />
            <IconSizeGroup label="16px — labels & inline" boxSize={32} fontSize={13} icons={airIcons} />
            <IconSizeGroup label="12px — dense data tables" boxSize={22} fontSize={10} icons={airIcons} />
          </div>
          <a className="view-link primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">View full icon system in Figma ↗</a>
        </div>

        <div className="ds-stats">
          {airDesignStats.map((s) => (
            <div className="ds-stat" key={s.label}>
              <div className="dss-val">{s.value}{s.accent && <span>{s.accent}</span>}</div>
              <div className="dss-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §9 EDGE CASES
───────────────────────────────────────── */
function EdgeCasesSection() {
  return (
    <section id="edgeCases" className="section">
      <div className="s-inner">
        <SectionIntro
          label="08 — Edge cases"
          title={<>What most designers<br />don&apos;t design.</>}
          copy="Happy path is table stakes. These are the cases that break in production."
        />
        <ScrollHint>Drag to explore</ScrollHint>
        <div className="edge-scroll" id="edgeTrack">
          <div className="edge-row">
            {airEdgeCases.map((ec) => (
              <div className="ec-card" key={ec.title}>
                <i className="ec-icon">{ec.icon}</i>
                <div className="ec-title">{ec.title}</div>
                <div className="ec-desc">{ec.desc}</div>
                <span className={`ec-badge ${ec.cls}`}>{ec.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   §10 OUTCOMES
───────────────────────────────────────── */
function OutcomesSection() {
  return (
    <section id="outcomes">
      <div className="outcomes-inner">
        <SectionIntro
          label="09 — Outcomes"
          title="What this delivered."
          copy="A live product. Real travel agents. Real numbers."
        />
        <div className="outcome-metrics">
          {airOutcomeMetrics.map((m) => (
            <div className="om-card" key={m.label}>
              <div className="om-val">{m.value}<span>{m.accent}</span></div>
              <div className="om-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="reflect-grid">
          {airReflections.map((r) => (
            <div className="reflect-card" key={r.num}>
              <div className="reflect-num">{r.num}</div>
              <div className="reflect-text">{r.text}</div>
            </div>
          ))}
        </div>
        <div className="next-bar">
          <div>
            <div className="nb-label">Next</div>
            <div className="nb-title">Hotel booking module — trusted to me after this shipped</div>
          </div>
          <a className="nb-cta" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
            View full design in Figma ↗
          </a>
        </div>
      </div>
    </section>
  );
}
