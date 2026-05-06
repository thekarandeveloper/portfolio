"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import {
  airAfterList,
  airBeforeList,
  airColorSwatches,
  airComponents,
  airDesignStats,
  airFigmaLinks,
  airHeroMetrics,
  airIcons,
  airProblemCards,
  airProblemWords,
  airProcessSteps,
  airRadiusTokens,
  airResearchCards,
  airSpacingTokens,
  airStoryCards,
  airStorySummary,
  airTypeScale
} from "./airIqData";

export function AirIqCaseStudy() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealSelectors = ".eyebrow,.s-title,.s-sub,.story-card,.story-summary,.prob-card,.ba-strip,.rc-card,.research-insight,.ps-step,.fail-block,.ds-big-card,.ds-stats,.reveal";
    const revealEls = Array.from(root.querySelectorAll(revealSelectors));
    revealEls.forEach((element) => observer.observe(element));

    const wordEls = Array.from(root.querySelectorAll("#probWords .word"));
    const problemSection = root.querySelector("#problem");
    let wordsLit = false;
    const problemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !wordsLit) {
            wordsLit = true;
            wordEls.forEach((word, index) => {
              window.setTimeout(() => word.classList.add("lit"), index * 120);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (problemSection) problemObserver.observe(problemSection);

    const cleanups = [makeDraggable(root.querySelector<HTMLElement>("#researchTrack")), makeDraggable(root.querySelector<HTMLElement>("#processTrack"))].filter(Boolean) as Array<() => void>;

    return () => {
      observer.disconnect();
      problemObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <main className="airiq-case-study" ref={pageRef}>
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <ResearchSection />
      <ProcessSection />
      <DesignSystemSection />
    </main>
  );
}

function makeDraggable(el: HTMLElement | null) {
  if (!el) return null;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (event: MouseEvent) => {
    isDown = true;
    el.classList.add("dragging");
    startX = event.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  };
  const stopDragging = () => {
    isDown = false;
    el.classList.remove("dragging");
  };
  const onMouseMove = (event: MouseEvent) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  el.addEventListener("mousedown", onMouseDown);
  el.addEventListener("mouseleave", stopDragging);
  el.addEventListener("mouseup", stopDragging);
  el.addEventListener("mousemove", onMouseMove);

  return () => {
    el.removeEventListener("mousedown", onMouseDown);
    el.removeEventListener("mouseleave", stopDragging);
    el.removeEventListener("mouseup", stopDragging);
    el.removeEventListener("mousemove", onMouseMove);
  };
}

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
            <span className="air">AIR </span>
            <span className="iq">iQ</span>
          </div>

          <div className="hero-descriptor">Simplifying Complex Booking Systems</div>
          <div className="hero-meta">UI/UX Designer &nbsp;·&nbsp; 6 Months &nbsp;·&nbsp; Figma + v0 + AI workflow</div>

          <div className="hero-metrics">
            {airHeroMetrics.map((metric) => (
              <div className="h-metric" key={metric.label}>
                <div className="hm-val">
                  {metric.value}
                  <span>{metric.accent}</span>
                </div>
                <div className="hm-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-links">
            <a className="hero-link hl-primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
              <span>View Desktop Design</span>
              <span className="hl-icon">↗</span>
            </a>
            <a className="hero-link hl-secondary" href={airFigmaLinks.mobile} target="_blank" rel="noreferrer">
              <span>View Mobile Design</span>
              <span className="hl-icon">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/Image/Airiq/thumbnail.png" alt="AIR iQ product — flight search interface" />
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

function SectionIntro({ label, title, copy }: { label: string; title: React.ReactNode; copy: string }) {
  return (
    <>
      <div className="eyebrow">
        <div className="eyebrow-line" />
        {label}
      </div>
      <h2 className="s-title">{title}</h2>
      <p className="s-sub">{copy}</p>
    </>
  );
}

function StorySection() {
  return (
    <section id="story" className="section">
      <div className="s-inner">
        <SectionIntro
          label="01 — Context"
          title={
            <>
              How I approached
              <br />
              this challenge
            </>
          }
          copy="AIR iQ needed a complete product design — from zero. No existing system, no component library. I led the design end-to-end across desktop and mobile."
        />

        <div className="story-cards">
          {airStoryCards.map((card) => (
            <div className={`story-card ${card.tone}`} key={card.title} style={delayStyle(card.delay)}>
              <div className="sc-num">{card.kicker}</div>
              <div className="sc-title">{card.title}</div>
              <div className="sc-text">{card.text}</div>
            </div>
          ))}
        </div>

        <div className="story-summary">
          {airStorySummary.map((item) => (
            <div className="ss-item" key={item.label}>
              <div className="ss-val">{item.value}</div>
              <div className="ss-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="section">
      <div className="problem-liquid">
        <div className="liquid-blob lb-1" />
        <div className="liquid-blob lb-2" />
        <div className="liquid-blob lb-3" />
      </div>
      <div className="s-inner" style={{ position: "relative", zIndex: 2 }}>
        <SectionIntro
          label="02 — The Problem"
          title={
            <>
              Complex. Dense.
              <br />
              Built for the system,
              <br />
              not the human.
            </>
          }
          copy="Travel agents operate under pressure. Every second counts. The existing platform made their job harder — not easier."
        />

        <div className="prob-word-reveal" id="probWords">
          {airProblemWords.map((line, index) => (
            <LineWords key={index} words={line} />
          ))}
        </div>

        <div className="problem-grid">
          {airProblemCards.map((card) => (
            <div className="prob-card" key={card.title} style={delayStyle(card.delay)}>
              <div className={`pc-tag ${card.tagClass}`}>{card.tag}</div>
              <div className="pc-title">{card.title}</div>
              <div className="pc-text">{card.text}</div>
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

function LineWords({ words }: { words: Array<{ text: string; tone?: string }> }) {
  return (
    <>
      {words.map((word, index) => (
        <span className={word.tone ? `word ${word.tone}` : "word"} key={`${word.text}-${index}`}>
          {word.text}
        </span>
      ))}
      <br />
    </>
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

function ResearchSection() {
  return (
    <section id="research" className="section">
      <div className="s-inner">
        <SectionIntro
          label="03 — Research & Study"
          title={
            <>
              Studied what the best
              <br />
              get wrong — then fixed it
            </>
          }
          copy="Before touching Figma, I studied 5 platforms — B2C OTAs and B2B GDS tools. The gap between them was the opportunity. Consumer apps are beautiful but wrong for agents. GDS tools are functional but brutal."
        />

        <ScrollHint>Drag to explore all platforms</ScrollHint>

        <div className="research-track" id="researchTrack">
          <div className="research-row">
            {airResearchCards.map((card) => (
              <div className="rc-card" key={card.name}>
                <div className="rc-header">
                  <div className="rc-name">{card.name}</div>
                  <div className="rc-type">{card.type}</div>
                </div>
                <div className="rc-body">
                  <div className="rc-section-label">What works</div>
                  {card.works.map((tag) => (
                    <div className="rc-tag rct-good" key={tag}>
                      ✓ {tag}
                    </div>
                  ))}
                  <div className="rc-section-label" style={{ marginTop: "10px" }}>
                    What&apos;s missing
                  </div>
                  {card.missing.map((tag) => (
                    <div className="rc-tag rct-bad" key={tag}>
                      ✗ {tag}
                    </div>
                  ))}
                  <div className="rc-divider" />
                  <div className="rc-insight">{card.insight}</div>
                </div>
                <div className="rc-opportunity">{card.opportunity}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="research-insight reveal">
          <div className="ri-label">The single insight that drove everything</div>
          <div className="ri-quote">&quot;Speed is survival. A travel agent compares 8 fares in 90 seconds. Every extra click is a lost booking.&quot;</div>
          <div className="ri-sub">This drove every hierarchy decision — why price is largest, why filters are persistent, why the flight card surfaces 6 data points without requiring a click.</div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="s-inner">
        <SectionIntro
          label="04 — Process & AI Acceleration"
          title={
            <>
              Used AI to move faster
              <br />
              without cutting corners
            </>
          }
          copy="Traditional UX process: weeks of wireframing before any validation. I used v0, ChatGPT, and Figma at specific stages to compress the loop — not to replace thinking, but to validate it faster."
        />

        <ScrollHint>Drag to explore the process</ScrollHint>

        <div className="process-track" id="processTrack">
          <div className="process-row">
            {airProcessSteps.map((step) => (
              <div className="ps-step" key={step.num}>
                {step.save && <div className="time-save">{step.save}</div>}
                <div className="ps-num">{step.num}</div>
                <div className="ps-title">{step.title}</div>
                <div className="ps-text">{step.text}</div>
                {step.old && (
                  <>
                    <div className="old-pill">{step.old}</div>
                    <br />
                  </>
                )}
                <div className="ai-pill">
                  <div className="ai-pill-dot" />
                  {step.ai}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fail-block reveal">
          <div className="fail-icon">✕</div>
          <div>
            <div className="fail-label">Failed attempt — what I explored and killed</div>
            <div className="fail-title">The modal filter — looked clean, broke the flow</div>
            <div className="fail-text">
              My first version put all 15 filters inside a modal — common pattern, clean canvas. I built a v0 prototype. One stakeholder walkthrough made it obvious: agents need to see results and filters
              simultaneously. Switching to a modal broke the compare-filter-compare loop entirely. Killed the concept on day 2. Rebuilt as a persistent 274px sidebar. The v0 prototype caught this before I invested
              days in Figma — that&apos;s the point of the AI-accelerated loop.
            </div>
            <div className="fail-pill">✓ Persistent filter panel — agents never lose context while filtering</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignSystemSection() {
  return (
    <section id="system" className="section">
      <div className="s-inner">
        <SectionIntro
          label="05 — Design System"
          title={
            <>
              Built from zero.
              <br />
              Designed to scale.
            </>
          }
          copy="No existing library. Every token, component, and icon was built ground-up — so any designer joining could work without guessing, and any developer could implement without asking."
        />

        <div className="ds-intro">
          <div className="ds-big-card">
            <div className="ds-card-label">
              <div className="ds-card-label-line" />
              Color system
            </div>
            <div className="ds-card-title">Semantic tokens, not raw hex</div>
            <div className="ds-card-sub">Every color has a purpose — named and documented. Nothing was chosen arbitrarily.</div>
            <div className="color-row">
              {airColorSwatches.map((swatch) => (
                <div className="c-swatch" key={swatch.name}>
                  <div className="c-block" style={{ background: swatch.value }} />
                  <div className="c-name">{swatch.name}</div>
                </div>
              ))}
            </div>
            <FigmaLink>View full color system ↗</FigmaLink>
          </div>

          <div className="ds-big-card" style={{ transitionDelay: "0.1s" }}>
            <div className="ds-card-label">
              <div className="ds-card-label-line" />
              Typography system
            </div>
            <div className="ds-card-title">Lato — one family, full scale</div>
            <div className="ds-card-sub">Chosen for legibility under density. Every weight has a specific role — nothing is used arbitrarily.</div>
            <div className="type-scale">
              {airTypeScale.map((item) => (
                <div className="type-row-item" key={item.sample}>
                  <div className="type-sample" style={{ fontSize: item.size, fontWeight: item.weight, fontStyle: item.style }}>
                    {item.sample}
                  </div>
                  <div className="type-meta">{item.meta}</div>
                </div>
              ))}
            </div>
            <FigmaLink>View typography in Figma ↗</FigmaLink>
          </div>
        </div>

        <div className="ds-big-card span-2 reveal" style={{ marginBottom: "16px" }}>
          <div className="ds-card-label">
            <div className="ds-card-label-line" />
            Spacing, padding & grid system
          </div>
          <div className="ds-card-title">4pt base grid — nothing placed arbitrarily</div>
          <div className="ds-card-sub">All spacing derived from a 4pt base. Every layout, padding, and gap is a multiple — 4, 8, 12, 16, 24, 32, 40, 48. This ensured pixel-perfect consistency from component to page.</div>

          <div className="spacing-row">
            {airSpacingTokens.map((token) => (
              <div className="spacing-token" key={token.label}>
                <div className="sp-block" style={{ width: token.size, height: token.size }}>
                  <div className="sp-label">{token.label}</div>
                </div>
                <div className="spacing-token-label">{token.px}</div>
              </div>
            ))}
          </div>

          <div className="token-section">
            <div className="token-label">Border radius tokens</div>
            <div className="token-row">
              {airRadiusTokens.map((token) => (
                <div className="token-chip" key={token.label}>
                  <div className="token-preview" style={{ background: "var(--airq-blue-light)", borderRadius: token.radius, border: "1px solid var(--airq-blue)" }} />
                  {token.label}
                </div>
              ))}
            </div>
          </div>
          <FigmaLink>View full grid & spacing in Figma ↗</FigmaLink>
        </div>

        <div className="ds-big-card span-2 reveal" style={{ marginBottom: "16px" }}>
          <div className="ds-card-label">
            <div className="ds-card-label-line" />
            Component & token system
          </div>
          <div className="ds-card-title">Reusable. Consistent. Token-driven.</div>
          <div className="ds-card-sub">Every component is built on design tokens — so changing a token updates the entire system. Built for a team, not just for one project.</div>

          <div className="comp-grid">
            {airComponents.map((component) => (
              <div className="comp-item" key={component.name}>
                <div className="ci-icon">{component.icon}</div>
                <div className="ci-name">{component.name}</div>
                <div className="ci-count">{component.count}</div>
              </div>
            ))}
          </div>
          <FigmaLink>View full component library ↗</FigmaLink>
        </div>

        <div className="ds-big-card span-2 reveal">
          <div className="ds-card-label">
            <div className="ds-card-label-line" />
            Icon system
          </div>
          <div className="ds-card-title">Custom icons — drawn from scratch. Zero libraries used.</div>
          <div className="ds-card-sub">Every icon was drawn from scratch in Figma — not taken from Iconify, Feather, or any external library. Three sizes for every use case: 24px (primary UI), 16px (labels & tags), 12px (dense data).</div>

          <div className="icon-sizes">
            <IconSizeGroup label="24px — primary UI" boxSize={44} icons={airIcons} />
            <IconSizeGroup label="16px — labels & inline" boxSize={32} fontSize={13} icons={airIcons} />
            <IconSizeGroup label="12px — dense data tables" boxSize={22} fontSize={10} icons={airIcons} />
          </div>
          <a className="view-link primary" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
            View full icon system in Figma ↗
          </a>
        </div>

        <div className="ds-stats">
          {airDesignStats.map((stat) => (
            <div className="ds-stat" key={stat.label}>
              <div className="dss-val">
                {stat.value}
                {stat.accent && <span>{stat.accent}</span>}
              </div>
              <div className="dss-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollHint({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-hint-row">
      {children} <span className="sh-arrow">→</span>
    </div>
  );
}

function FigmaLink({ children }: { children: React.ReactNode }) {
  return (
    <a className="view-link" href={airFigmaLinks.desktop} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function IconSizeGroup({ label, boxSize, fontSize, icons }: { label: string; boxSize: number; fontSize?: number; icons: string[] }) {
  return (
    <div className="icon-size-group">
      <div className="icon-size-label">{label}</div>
      <div className="icon-size-row">
        {icons.map((icon, index) => (
          <div className="icon-box" key={`${label}-${icon}-${index}`} style={{ width: boxSize, height: boxSize, fontSize }}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function delayStyle(delay?: string): CSSProperties | undefined {
  return delay ? { transitionDelay: delay } : undefined;
}
