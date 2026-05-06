"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ecoCompetitors,
  ecoEmpathy1,
  ecoEmpathy2,
  ecoFeatures,
  ecoLearnings,
  ecoMeta,
  ecoProcess,
  ecoResearchStats,
  ecoTestHelped,
  ecoTestInsights,
} from "./ecotrackData";

export function EcotrackCaseStudy() {
  const pageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    const progress = progressRef.current;
    if (!root || !progress) return;

    const updateProgress = () => {
      const d = document.documentElement;
      const scrolled = d.scrollTop / (d.scrollHeight - d.clientHeight);
      progress.style.width = `${scrolled * 100}%`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || "0");
            const suffix = el.dataset.suffix || "";
            animateCount(el, target, suffix);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    root.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    root.querySelectorAll(".eco-count").forEach((el) => counterObserver.observe(el));

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="ecotrack-case-study" ref={pageRef}>
      <div className="eco-progress-bar" ref={progressRef} />
      <EcoHero />
      <EcoOverview />
      <EcoProblem />
      <EcoProcess />
      <EcoResearch />
      <EcoCompetitor />
      <EcoQualResearch />
      <EcoEmpathy />
      <EcoPersona />
      <EcoDesign />
      <EcoWireframes />
      <EcoTesting />
      <EcoIterations />
      <EcoLearnings />
      <EcoNext />
    </div>
  );
}

function animateCount(el: HTMLElement, target: number, suffix: string) {
  let current = 0;
  const duration = 1200;
  const step = target / (duration / 16);
  const timer = window.setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) window.clearInterval(timer);
  }, 16);
}

function ImagePlaceholder({
  label,
  height = 360,
  icon = "🖼️",
  sub,
}: {
  label: string;
  height?: number;
  icon?: string;
  sub?: string;
}) {
  return (
    <div className="eco-img" style={{ height }}>
      <span className="eco-img-icon">{icon}</span>
      <p className="eco-img-label">{label}</p>
      {sub && <p className="eco-img-sub">{sub}</p>}
    </div>
  );
}

function EcoPhoneMockup() {
  return (
    <div className="eco-phone">
      <div className="eco-phone-top">
        <div className="eco-phone-notch" />
      </div>
      <div className="eco-phone-screen">
        <div className="eco-screen-status">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div className="eco-screen-header">
          <p>Good morning 🌱</p>
          <div className="eco-screen-avatar" />
        </div>
        <div className="eco-ring-card">
          <div className="eco-ring">
            <div className="eco-ring-inner">
              <p className="eco-ring-val">2.4</p>
              <p className="eco-ring-unit">kg CO₂</p>
            </div>
          </div>
          <p className="eco-ring-label">Today&apos;s footprint</p>
          <p className="eco-ring-sub">↓ 18% vs yesterday</p>
        </div>
        <div className="eco-categories">
          <div className="eco-cat-row">
            <span>🚗</span>
            <div className="eco-cat-bar"><div style={{ width: "72%" }} /></div>
            <span>0.8</span>
          </div>
          <div className="eco-cat-row">
            <span>⚡</span>
            <div className="eco-cat-bar"><div style={{ width: "45%" }} /></div>
            <span>1.1</span>
          </div>
          <div className="eco-cat-row">
            <span>🍽️</span>
            <div className="eco-cat-bar"><div style={{ width: "30%" }} /></div>
            <span>0.5</span>
          </div>
        </div>
        <div className="eco-fab">+</div>
        <div className="eco-tabs">
          <span className="eco-tab active">🏠</span>
          <span className="eco-tab">📊</span>
          <span className="eco-tab">💡</span>
          <span className="eco-tab">👤</span>
        </div>
      </div>
    </div>
  );
}

function EcoHero() {
  return (
    <div className="eco-hero-wrap">
      <div className="eco-hero-grid" />
      <div className="eco-hero-glow" />
      <div className="eco-hero-glow2" />
      <div className="eco-hero">
        <div className="eco-hero-content">
          <span className="cs-tag">🌱 Personal Project · iOS App</span>
          <h1 className="cs-title">
            EcoTrack —<br />
            <em>Making the Planet</em>
            <br />
            Count.
          </h1>
          <p className="cs-tagline">
            A clean, intuitive app that helps users track their carbon footprint, understand their daily impact, and grow sustainable habits with ease.
          </p>
          <div className="eco-meta">
            {ecoMeta.map((item) => (
              <div className="eco-meta-item" key={item.label}>
                <p className="eco-meta-label">{item.label}</p>
                <p className="eco-meta-val">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="eco-hero-phone">
          <EcoPhoneMockup />
        </div>
      </div>
    </div>
  );
}

function EcoOverview() {
  return (
    <section className="eco-overview">
      <div className="eco-container">
        <p className="section-label reveal">Project Overview</p>
        <h2 className="section-title reveal rd1">
          Helping people understand
          <br />
          <em>their daily impact on Earth.</em>
        </h2>
        <p className="body-text reveal rd2">
          EcoTrack empowers users to measure their carbon emissions from daily activities like transport, electricity usage, food, and more — and provides actionable insights to help them live more sustainably.
        </p>
        <div className="reveal rd2" style={{ marginBottom: "2.5rem" }}>
          <ImagePlaceholder label="App Overview Screenshot" height={400} icon="📱" sub="High-fidelity screens · Figma" />
        </div>
        <div className="eco-features-grid reveal rd3">
          {ecoFeatures.map((f) => (
            <div className="eco-feature-card" key={f.title}>
              <div className="eco-feature-icon">{f.icon}</div>
              <p className="eco-feature-title">{f.title}</p>
              <p className="eco-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoProblem() {
  return (
    <section className="eco-problem">
      <div className="eco-container">
        <p className="section-label reveal">The Problem</p>
        <p className="problem-statement reveal rd1">
          People want to reduce their environmental impact but struggle to understand how daily actions affect their carbon footprint —{" "}
          <strong>most tools are too complex or unengaging, making sustainable living feel out of reach.</strong>
        </p>
        <div className="reveal rd2" style={{ marginBottom: "2.5rem" }}>
          <ImagePlaceholder label="Problem Visualization" height={320} icon="🌡️" sub="Research findings · User pain points" />
        </div>
        <p className="section-label reveal">Potential Solution</p>
        <div className="eco-callout reveal rd1">
          <span className="eco-callout-icon">💡</span>
          <p className="eco-callout-text">
            A clean, intuitive app that helps users track their carbon footprint, understand their daily impact, and grow sustainable habits with ease.
          </p>
        </div>
        <div className="reveal rd2">
          <ImagePlaceholder label="Solution Overview" height={320} icon="✅" sub="App concept · Key interactions" />
        </div>
      </div>
    </section>
  );
}

function EcoProcess() {
  return (
    <section className="eco-process">
      <div className="eco-container">
        <p className="section-label reveal">Design Thinking Process</p>
        <h2 className="section-title reveal rd1">
          Five phases, one goal —
          <br />
          <em>making sustainability approachable.</em>
        </h2>
        <div className="eco-process-steps">
          {ecoProcess.map((step, i) => (
            <div className={`eco-step reveal rd${i + 1}`} key={step.name}>
              <div className={`eco-step-circle${step.active ? " active" : ""}`}>{step.icon}</div>
              <p className="eco-step-phase">{step.phase}</p>
              <p className="eco-step-name">{step.name}</p>
              <p className="eco-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: "3rem" }}>
          <ImagePlaceholder label="Design Thinking Process Diagram" height={280} icon="🗺️" sub="Process overview · Double diamond" />
        </div>
        <div className="reveal" style={{ marginTop: "1.5rem" }}>
          <ImagePlaceholder label="Project Timeline" height={200} icon="📅" sub="4-week sprint breakdown" />
        </div>
      </div>
    </section>
  );
}

function EcoResearch() {
  return (
    <section className="eco-research">
      <div className="eco-container">
        <p className="section-label reveal">User Research</p>
        <h2 className="section-title reveal rd1">
          Understanding what users
          <br />
          <em>actually need from an eco app.</em>
        </h2>
        <div className="eco-callout reveal rd2" style={{ marginBottom: "2rem" }}>
          <span className="eco-callout-icon">🎯</span>
          <p className="eco-callout-text">
            To understand user awareness, challenges, and expectations around tracking their carbon footprint in daily life.
          </p>
        </div>
        <div className="reveal rd2" style={{ marginBottom: "2.5rem" }}>
          <ImagePlaceholder label="User Research Findings" height={320} icon="🔍" sub="Survey results · Interview insights" />
        </div>
        <div className="eco-stat-row">
          {ecoResearchStats.map((stat, i) => (
            <div className={`eco-stat reveal rd${i + 1}`} key={stat.label}>
              <p
                className="eco-stat-val eco-count"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </p>
              <p className="eco-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoCompetitor() {
  return (
    <section className="eco-competitor">
      <div className="eco-container">
        <p className="section-label reveal">Competitor Analysis</p>
        <h2 className="section-title reveal rd1">
          What the market gets right —
          <br />
          <em>and where EcoTrack fills the gap.</em>
        </h2>
        <div className="eco-comp-grid">
          {ecoCompetitors.map((comp, i) => (
            <div className={`eco-comp-card reveal rd${(i % 2) + 1}`} key={comp.name}>
              <p className="eco-comp-name">{comp.name}</p>
              <div className="eco-comp-cols">
                <div>
                  <p className="eco-comp-col-label pros">Pros</p>
                  <ul className="eco-comp-list pros">
                    {comp.pros.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="eco-comp-col-label cons">Cons</p>
                  <ul className="eco-comp-list cons">
                    {comp.cons.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="eco-callout reveal" style={{ marginTop: "2rem" }}>
          <span className="eco-callout-icon">💡</span>
          <p className="eco-callout-text">
            While these apps offer great features individually, most lack <strong>simplicity</strong>, <strong>daily usability</strong>, or <strong>engagement</strong>. EcoTrack combines the best of all — making sustainability simple, interactive, and personally rewarding.
          </p>
        </div>
      </div>
    </section>
  );
}

function EcoQualResearch() {
  return (
    <section className="eco-research" style={{ background: "var(--eco-bg3, #D0EAD4)" }}>
      <div className="eco-container">
        <p className="section-label reveal">Qualitative Research</p>
        <h2 className="section-title reveal rd1">
          Real conversations,
          <br />
          <em>real insights.</em>
        </h2>
        <p className="body-text reveal rd2">
          We conducted in-depth user interviews with individuals from our target demographic to gain a deeper understanding of their lifestyle habits, environmental concerns, and expectations from a carbon tracking app. These conversations revealed valuable emotional and behavioral insights that went beyond what quantitative data could uncover.
        </p>
        <div className="reveal rd2">
          <ImagePlaceholder label="User Interview Photos & Notes" height={360} icon="🗣️" sub="5 interviews · 2 age groups" />
        </div>
      </div>
    </section>
  );
}

function EcoEmpathy() {
  return (
    <section className="eco-empathy">
      <div className="eco-container">
        <p className="section-label reveal">User Empathy Mapping</p>
        <h2 className="section-title reveal rd1">
          Stepping into the shoes
          <br />
          <em>of our users.</em>
        </h2>
        <p className="body-text reveal rd2">
          To better understand user emotions, motivations, and frustrations, we created empathy maps based on real interview insights. These maps helped us design features that address true needs — not just actions, but how users think and feel about sustainable living.
        </p>
        <div className="reveal rd2" style={{ marginBottom: "2.5rem" }}>
          <ImagePlaceholder label="Empathy Map Overview" height={300} icon="🧠" sub="Think · See · Say · Feel · Pain · Gain" />
        </div>
        <div className="eco-empathy-grid">
          <div className="eco-empathy-card reveal rd1">
            <div className="eco-empathy-header">
              <div className="eco-empathy-avatar">👩</div>
              <div>
                <p className="eco-empathy-name">Priya, 22</p>
                <p className="eco-empathy-role">College student · Eco-curious beginner</p>
              </div>
            </div>
            <div className="eco-empathy-rows">
              {ecoEmpathy1.map((row) => (
                <div className="eco-emp-row" key={row.cat}>
                  <p className="eco-emp-cat">{row.cat}</p>
                  <p className="eco-emp-insight">{row.insight}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="eco-empathy-card reveal rd2">
            <div className="eco-empathy-header">
              <div className="eco-empathy-avatar">👨</div>
              <div>
                <p className="eco-empathy-name">Arjun, 28</p>
                <p className="eco-empathy-role">Working professional · Active eco-enthusiast</p>
              </div>
            </div>
            <div className="eco-empathy-rows">
              {ecoEmpathy2.map((row) => (
                <div className="eco-emp-row" key={row.cat}>
                  <p className="eco-emp-cat">{row.cat}</p>
                  <p className="eco-emp-insight">{row.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: "2.5rem" }}>
          <ImagePlaceholder label="Full Empathy Map Canvas" height={280} icon="🗺️" sub="Detailed empathy analysis" />
        </div>
      </div>
    </section>
  );
}

function EcoPersona() {
  return (
    <section className="eco-persona">
      <div className="eco-container">
        <p className="section-label reveal">User Personas</p>
        <h2 className="section-title reveal rd1">
          Fictional representations,
          <br />
          <em>built from real research.</em>
        </h2>
        <p className="body-text reveal rd2">
          These personas are fictional representations of our target users, created using real research insights. They help us understand needs, motivations, and pain points to design a more user-centered solution.
        </p>
        <div className="eco-persona-grid">
          <div className="eco-persona-card reveal rd1">
            <div className="eco-persona-img">
              <span className="eco-persona-img-icon">👩‍🎓</span>
              <span className="eco-persona-img-label">Persona Photo · Place image here</span>
            </div>
            <div className="eco-persona-body">
              <p className="eco-persona-name">Priya Sharma</p>
              <p className="eco-persona-tag">22 · College Student · Mumbai</p>
              <p className="eco-persona-detail">
                Eco-curious beginner who cares about the planet but doesn&apos;t know where to start. Wants a friendly, visual app that guides her through sustainable choices without overwhelming her with data.
              </p>
            </div>
          </div>
          <div className="eco-persona-card reveal rd2">
            <div className="eco-persona-img">
              <span className="eco-persona-img-icon">👨‍💼</span>
              <span className="eco-persona-img-label">Persona Photo · Place image here</span>
            </div>
            <div className="eco-persona-body">
              <p className="eco-persona-name">Arjun Mehta</p>
              <p className="eco-persona-tag">28 · Product Manager · Bangalore</p>
              <p className="eco-persona-detail">
                Active eco-enthusiast who has built green habits but wants data-driven proof of their impact. Looking for a sleek, efficient app that gives meaningful feedback without information overload.
              </p>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: "2rem" }}>
          <ImagePlaceholder label="Full Persona Documents" height={260} icon="👤" sub="Detailed persona sheets from Figma" />
        </div>
      </div>
    </section>
  );
}

function EcoDesign() {
  return (
    <section className="eco-design">
      <div className="eco-container">
        <p className="section-label reveal">Typography</p>
        <h2 className="section-title reveal rd1">
          Inter — clean, modern,
          <br />
          <em>built for readability.</em>
        </h2>
        <p className="body-text reveal rd2">
          I chose Inter for its clean, modern look and excellent readability on screens. Its versatility helped create a clear visual hierarchy — bold for emphasis, regular weights for smooth, accessible reading across the app.
        </p>
        <div className="eco-type-display reveal rd2">
          <p className="eco-type-label">Primary Typeface</p>
          <p className="eco-type-heading">Inter</p>
          <div className="eco-type-weights">
            <div className="eco-weight">
              <span className="eco-weight-sample" style={{ fontWeight: 700 }}>Bold</span>
              <span className="eco-weight-label">700 · Headings</span>
            </div>
            <div className="eco-weight">
              <span className="eco-weight-sample" style={{ fontWeight: 500 }}>Medium</span>
              <span className="eco-weight-label">500 · Labels</span>
            </div>
            <div className="eco-weight">
              <span className="eco-weight-sample" style={{ fontWeight: 400 }}>Regular</span>
              <span className="eco-weight-label">400 · Body</span>
            </div>
            <div className="eco-weight">
              <span className="eco-weight-sample" style={{ fontWeight: 300 }}>Light</span>
              <span className="eco-weight-label">300 · Captions</span>
            </div>
          </div>
          <div className="reveal rd3">
            <ImagePlaceholder label="Typography & Colour Palette Specimen" height={220} icon="🎨" sub="Full design system · Figma styles" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoWireframes() {
  return (
    <section className="eco-wireframes">
      <div className="eco-container">
        <p className="section-label reveal">Mid-Fidelity Wireframes</p>
        <h2 className="section-title reveal rd1">
          Layout, structure, and flow —
          <br />
          <em>without visual distraction.</em>
        </h2>
        <p className="body-text reveal rd2">
          I developed mid-fidelity wireframes to refine the layout, structure, and functionality of the app, focusing on user experience without visual distractions.
        </p>
        <div className="reveal rd2">
          <ImagePlaceholder label="Mid-Fidelity Wireframes" height={400} icon="📐" sub="6 key screens · Wireframe flow" />
        </div>

        <div style={{ marginTop: "5rem" }}>
          <p className="section-label reveal">High-Fidelity Wireframes</p>
          <h2 className="section-title reveal rd1">
            Bringing the app to life
            <br />
            <em>with colour, depth, and detail.</em>
          </h2>
          <p className="body-text reveal rd2">
            I designed high-fidelity wireframes to bring the app to life with detailed visuals, colors, and typography, closely representing the final user interface.
          </p>
          <div className="eco-wf-grid reveal rd2">
            <ImagePlaceholder label="Dashboard Screen" height={320} icon="🏠" sub="Home · Daily tracker" />
            <ImagePlaceholder label="Carbon Details Screen" height={320} icon="📊" sub="Impact breakdown · Charts" />
            <ImagePlaceholder label="Learning Hub Screen" height={320} icon="💡" sub="Tips · Eco habits" />
            <ImagePlaceholder label="Add Activity Screen" height={320} icon="➕" sub="Log transport · Food · Energy" />
            <ImagePlaceholder label="Progress Screen" height={320} icon="📈" sub="Weekly · Monthly charts" />
            <ImagePlaceholder label="Profile Screen" height={320} icon="👤" sub="Achievements · Goals" />
          </div>
          <div className="reveal" style={{ marginTop: "1rem" }}>
            <ImagePlaceholder label="Full App Flow — All Screens" height={280} icon="🔗" sub="Prototype connections · User flow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoTesting() {
  return (
    <section className="eco-testing">
      <div className="eco-container">
        <p className="section-label reveal">User Testing</p>
        <h2 className="section-title reveal rd1">
          Real users, real friction —
          <br />
          <em>real improvements.</em>
        </h2>
        <div className="eco-callout reveal rd2" style={{ marginBottom: "2.5rem" }}>
          <span className="eco-callout-icon">🎯</span>
          <p className="eco-callout-text">
            <strong>Test Goal:</strong> To evaluate the usability, clarity, and overall experience of the carbon tracking app with real users from the target audience.
          </p>
        </div>
        <div className="eco-insights-grid">
          <div className="eco-insight-group reveal rd1">
            <p className="eco-insight-group-label">Key Insights Gained</p>
            <ul className="eco-insight-list">
              {ecoTestInsights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          </div>
          <div className="eco-insight-group reveal rd2">
            <p className="eco-insight-group-label">How It Helped</p>
            <ul className="eco-insight-list">
              {ecoTestHelped.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoIterations() {
  return (
    <section className="eco-iterations">
      <div className="eco-container">
        <p className="section-label reveal">Before → After Iteration</p>
        <h2 className="section-title reveal rd1">
          Small changes,
          <br />
          <em>significant impact.</em>
        </h2>

        <div className="eco-iteration-block reveal rd2">
          <span className="eco-iter-label">🔄 Iteration 01</span>
          <p className="eco-iter-title">The Add Button — From Hidden to Front and Centre</p>
          <div className="eco-ba-grid">
            <div>
              <p className="eco-ba-col-label before">✕ Before</p>
              <ImagePlaceholder label="Before: Tab Bar with Hidden Add Button" height={300} icon="📱" sub="Original design · Centre tab" />
              <p className="eco-ba-desc">
                The add button was hidden in the centre of the tab bar, making it hard for users to notice and access quickly during daily logging.
              </p>
            </div>
            <div>
              <p className="eco-ba-col-label after">✓ After</p>
              <ImagePlaceholder label="After: Floating Add Button on Home Screen" height={300} icon="📱" sub="Revised design · FAB" />
              <p className="eco-ba-desc">
                Replaced with a prominent floating action button on the home screen for better visibility and quicker daily input without extra navigation.
              </p>
            </div>
          </div>
        </div>

        <div className="eco-iteration-block reveal rd2">
          <span className="eco-iter-label">🔄 Iteration 02</span>
          <p className="eco-iter-title">Carbon Charts — From Technical to Intuitive</p>
          <div className="eco-ba-grid">
            <div>
              <p className="eco-ba-col-label before">✕ Before</p>
              <ImagePlaceholder label="Before: Complex Data Visualisation" height={300} icon="📊" sub="Original charts · Data-heavy" />
              <p className="eco-ba-desc">
                Carbon data visualizations were too technical, lacked contextual language, and overwhelmed users unfamiliar with CO₂ metrics.
              </p>
            </div>
            <div>
              <p className="eco-ba-col-label after">✓ After</p>
              <ImagePlaceholder label="After: Simplified & Contextual Charts" height={300} icon="📊" sub="Revised charts · Plain language" />
              <p className="eco-ba-desc">
                Simplified visuals with plain-language labels, colour-coded context (good/bad days), and relative comparisons to yesterday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoLearnings() {
  return (
    <section className="eco-learnings">
      <div className="eco-container">
        <p className="section-label reveal" style={{ color: "rgba(72,163,98,0.8)" }}>Key Learnings</p>
        <h2 className="section-title light reveal rd1">
          Improvements &
          <br />
          <em>what I took away.</em>
        </h2>
        <p className="reveal rd2" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "580px", marginBottom: "0" }}>
          Throughout the design process, several iterations and testing phases led to meaningful improvements in both usability and user satisfaction.
        </p>
        <div className="eco-learnings-grid">
          {ecoLearnings.map((l, i) => (
            <div className={`eco-learning-card reveal rd${(i % 3) + 1}`} key={l.title}>
              <span className="eco-learning-icon">{l.icon}</span>
              <p className="eco-learning-title">{l.title}</p>
              <p className="eco-learning-desc">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoNext() {
  return (
    <section className="eco-next">
      <div className="eco-container">
        <p className="section-label reveal">Up Next</p>
        <Link href="/projects/biblofi" className="eco-next-card reveal rd1">
          <div>
            <p className="eco-next-label">Next Case Study</p>
            <p className="eco-next-title">BibloFi — Library Management System</p>
          </div>
          <span className="eco-next-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
