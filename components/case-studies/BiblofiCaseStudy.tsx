"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { accessibilityCards, bibloFeatures, bibloMeta, bibloRoleChips, bibloTeam, diamondSteps, learnings, personas, researchStats, testResults } from "./biblofiData";

type FeaturePhoneType = (typeof bibloFeatures)[number]["phone"];

export function BiblofiCaseStudy() {
  const pageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    const progress = progressRef.current;
    if (!root || !progress) return;

    const updateProgress = () => {
      const d = document.documentElement;
      progress.style.width = `${(d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100}%`;
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

    window.addEventListener("scroll", updateProgress, { passive: true });
    root.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="biblofi-case-study" ref={pageRef}>
      <div className="progress-bar" ref={progressRef} />
      <Hero />
      <Overview />
      <DoubleDiamond />
      <Research />
      <Personas />
      <Wireframes />
      <Features />
      <FinalScreens />
      <Accessibility />
      <Testing />
      <Oreo />
      <Learnings />
      <NextProject />
    </div>
  );
}

function Hero() {
  return (
    <div className="cs-hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-phone">
        <HeroPhone />
      </div>
      <div className="hero-content">
        <p className="cs-company">Infosys Internship · iOS App</p>
        <h1 className="cs-title">
          BibloFi —<br />
          <em>Where Convenience</em>
          <br />
          Meets Curiosity
        </h1>
        <p className="cs-tagline">Redesigning the library experience for digital-first students — from browsing to booking, everything just a tap away.</p>
        <div className="cs-meta">
          {bibloMeta.map((item) => (
            <div key={item.label}>
              <p className="cs-meta-label">{item.label}</p>
              <p className="cs-meta-val">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroPhone() {
  return (
    <div className="phone-shell">
      <div className="phone-bar">
        <div className="phone-notch" />
      </div>
      <div className="phone-screen">
        <div className="mini-head">
          <div className="mini-brand">BibloFi</div>
          <div className="mini-badge">📚 Library</div>
        </div>
        <div className="mini-card">
          <div className="mini-muted">Search books</div>
          <div className="mini-search">🔍 Title, author, genre...</div>
        </div>
        <div className="mini-card">
          <div className="mini-section">Available now</div>
          <div className="mini-books">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="mini-cta">Book a Study Seat →</div>
        <MiniTabs />
      </div>
    </div>
  );
}

function MiniTabs() {
  return (
    <div className="fp-tabs">
      <div className="fp-tab active">🏠 Home</div>
      <div className="fp-tab">🔍 Search</div>
      <div className="fp-tab">📖 My Books</div>
      <div className="fp-tab">👤 Profile</div>
    </div>
  );
}

function Overview() {
  return (
    <section className="overview">
      <div className="container">
        <div className="ov-grid">
          <div>
            <p className="section-label reveal">Project Overview</p>
            <h2 className="section-title reveal rd1">
              A library app built
              <br />
              <em>for how students actually live.</em>
            </h2>
            <p className="body-text reveal rd2">BibloFi is a mobile app designed to simplify how library members access books and services. From browsing by genre to scanning for availability, issuing books, and booking seats — everything is just a tap away.</p>
            <p className="body-text reveal rd3">This project was developed in one month during my internship at Infosys. I led the design of the entire member experience, focusing on creating an interface that feels effortless, modern, and human.</p>
            <div className="role-chips reveal rd3">
              {bibloRoleChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal rd2">
            <div className="team-box">
              <p className="team-label">My team</p>
              <div className="team-items">
                {bibloTeam.map((item) => (
                  <div className="team-item" key={item.dot}>
                    {item.dot === "NT" ? (
                      <div className="team-dot" style={{ padding: 0, overflow: "hidden" }}>
                        <Image src="/Image/Biblofi/me.png" alt="Nikunj Tyagi" width={28} height={28} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ) : (
                      <div className="team-dot">{item.dot}</div>
                    )}
                    <div>
                      <div className="team-title">{item.title}</div>
                      <div className="team-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="goal-box">
              <p className="team-label">Project goal</p>
              <p>&quot;Create a seamless, feature-rich library app that empowers members to discover, reserve, and borrow books efficiently while reducing friction.&quot;</p>
            </div>
            <div className="team-photo-wrap">
              <Image src="/Image/Biblofi/team.png" alt="Biblofi team at Infosys" width={600} height={320} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoubleDiamond() {
  return (
    <section className="diamond-section">
      <div className="container">
        <p className="section-label reveal">Design Process</p>
        <h2 className="section-title reveal rd1">
          The Double Diamond
          <br />
          <em>framework in practice.</em>
        </h2>
        <div className="diamond-flow reveal rd2">
          {diamondSteps.map((step) => (
            <div className={step.active ? "diamond-step active" : "diamond-step"} key={step.name}>
              <div className="diamond-icon">{step.icon}</div>
              <p className="diamond-phase">{step.phase}</p>
              <p className="diamond-name">{step.name}</p>
              <p className="diamond-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="research-section">
      <div className="container">
        <p className="section-label reveal">Discover — Research</p>
        <h2 className="section-title reveal rd1">
          Understanding how students
          <br />
          <em>actually use libraries.</em>
        </h2>
        <p className="body-text reveal rd2">I conducted surveys, contextual interviews, and observation sessions to capture real-life experiences of both library members and librarians. The goal: understand the recurring frustrations that disrupt the library experience.</p>
        <p className="body-text reveal rd3">Key finding: the friction wasn&apos;t in the library itself — it was in the invisible overhead. Not knowing if a book was available before visiting. Not being able to reserve a seat. No reminders for due dates. Digital tools existed, but none were designed with student workflows in mind.</p>
        <div className="method-img-wrap reveal rd3">
          <Image src="/Image/Biblofi/method.png" alt="Research methodology" width={900} height={480} style={{ width: "100%", height: "auto", borderRadius: "14px" }} />
        </div>
        <div className="stat-row reveal rd2">
          {researchStats.map((stat) => (
            <div className="stat-pill" key={stat.label}>
              <p className="stat-num">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Personas() {
  return (
    <section className="persona-section">
      <div className="container">
        <p className="section-label reveal">Define — Personas</p>
        <h2 className="section-title reveal rd1">
          Two students, two stories,
          <br />
          <em>one shared frustration.</em>
        </h2>
        <p className="body-text reveal rd2">Based on real research insights, I created two fictional personas representing the core user archetypes. These guided every design decision from information architecture to feature prioritisation.</p>
        <div className="problem-box reveal rd2">
          <p className="pb-text">&quot;Despite living in a digital-first world, library visits remain stuck in the past — long queues, no way to check book availability, and zero flexibility in planning. The result? A frustrating, disconnected experience that fails modern users.&quot;</p>
        </div>
        <div className="persona-grid">
          {personas.map((persona, index) => (
            <div className={index === 0 ? "persona-card reveal" : "persona-card reveal rd1"} key={persona.name}>
              <div className="persona-avatar">{persona.avatar}</div>
              <h3 className="persona-name">{persona.name}</h3>
              <p className="persona-meta">{persona.meta}</p>
              <p className="persona-section-title">Goals</p>
              {persona.goals.map((goal) => (
                <div className="persona-goal" key={goal}>
                  <span className="goal-check">✓</span>
                  {goal}
                </div>
              ))}
              <p className="persona-section-title">Pain Points</p>
              {persona.pains.map((pain) => (
                <div className="persona-pain" key={pain}>
                  <span className="pain-x">✗</span>
                  {pain}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wireframes() {
  return (
    <section className="wireframe-section">
      <div className="container">
        <p className="section-label reveal">Develop — Wireframes</p>
        <h2 className="section-title reveal rd1">
          From rough sketches
          <br />
          <em>to structured flows.</em>
        </h2>
        <p className="body-text reveal rd2">The brainstorming started in WhatsApp chats and rough sketches — raw ideas that I then translated into structured lo-fi wireframes in FigJam. From there, I built out 7 complete user flows covering every core feature.</p>
        <div className="wf-img-grid reveal rd2">
          {[
            { src: "/Image/Biblofi/wireframe1.png", label: "Onboarding" },
            { src: "/Image/Biblofi/wireframe2.png", label: "Browse by Genre" },
            { src: "/Image/Biblofi/wireframe3.png", label: "Scan & Search" },
            { src: "/Image/Biblofi/wireframe4.png", label: "Seat Booking" },
          ].map(({ src, label }) => (
            <div className="wf-img-card" key={label}>
              <Image src={src} alt={`${label} wireframe`} width={300} height={540} style={{ width: "100%", height: "auto", display: "block" }} />
              <div className="wf-img-label">{label}</div>
            </div>
          ))}
        </div>
        <p className="body-text reveal rd3 wf-note">7 complete user flows designed: Onboarding · Sign In · Browse by Genre · Search by Author · Scan & Search · Notifications & Profile · Seat Booking</p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="container-wide">
        <p className="section-label reveal">Deliver — Key Features</p>
        <h2 className="section-title reveal rd1">
          Five features that make
          <br />
          <em>library visits optional.</em>
        </h2>
        {bibloFeatures.map((feature) => (
          <div className={feature.reverse ? "feature-block reverse reveal" : "feature-block reveal"} key={feature.title}>
            <div>
              <p className="feature-num">{feature.num}</p>
              <p className="feature-tag">{feature.tag}</p>
              <h3 className="feature-title">{feature.title}</h3>
              {feature.desc.map((line) => (
                <p className="feature-desc" key={line}>
                  {line}
                </p>
              ))}
              <span className="feature-impact">{feature.impact}</span>
            </div>
            <div>
              <FeaturePhone type={feature.phone} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturePhone({ type }: { type: FeaturePhoneType }) {
  return (
    <div className="feature-phone">
      <div className="fp-topbar">
        <div className="fp-notch" />
      </div>
      <div className="fp-screen">
        {type === "discover" && <DiscoverScreen />}
        {type === "seat" && <SeatScreen />}
        {type === "books" && <BooksScreen />}
        {type === "scan" && <ScanScreen />}
      </div>
    </div>
  );
}

function DiscoverScreen() {
  return (
    <>
      <div className="fp-header">
        <div className="fp-title">Discover</div>
        <div className="fp-bell">🔔</div>
      </div>
      <div className="fp-search">🔍 Search title, author, ISBN...</div>
      <div className="fp-label">Browse by Genre</div>
      <div className="genre-grid">
        {["📚 Fiction", "🔬 Science", "💻 Technology", "🏛 History"].map((item, index) => (
          <div className={index === 0 ? "genre-card active" : "genre-card"} key={item}>
            <div>{item.split(" ")[0]}</div>
            <span>{item.split(" ")[1]}</span>
          </div>
        ))}
      </div>
      <div className="book-result">
        <div className="book-cover" />
        <div>
          <div className="book-title">Atomic Habits</div>
          <div className="book-author">James Clear</div>
          <div className="available-pill">Available</div>
        </div>
      </div>
    </>
  );
}

function SeatScreen() {
  return (
    <>
      <div className="fp-header">
        <div className="fp-title">Book a Seat</div>
        <div className="fp-time">Today · 3 PM</div>
      </div>
      <div className="fp-label">Study Hall — Floor 2</div>
      <div className="seat-grid">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className={index === 1 ? "seat selected" : index === 3 || index === 4 || index === 7 ? "seat taken" : "seat"} key={index} />
        ))}
      </div>
      <div className="seat-legend">
        <span><i />Free</span>
        <span className="selected"><i />Selected</span>
        <span className="taken"><i />Taken</span>
      </div>
      <div className="fp-primary">Confirm Seat B2 →</div>
    </>
  );
}

function BooksScreen() {
  return (
    <>
      <div className="fp-header">
        <div className="fp-title">My Books</div>
        <div className="fp-link">History</div>
      </div>
      <div className="issued-card">
        <div className="fp-label">Currently issued</div>
        <div className="issued-row">
          <div className="book-cover small" />
          <div className="issued-copy">
            <div className="book-title">The Psychology of Money</div>
            <div className="book-author">Due: 28 May 2025</div>
          </div>
          <div className="days-pill">3 days</div>
        </div>
        <div className="loan-bar"><span /></div>
        <div className="loan-note">75% of loan period used</div>
      </div>
      <div className="fine-card">
        <div className="fp-label">Fine status</div>
        <div className="fine-row">
          <span>₹0</span>
          <i>All clear ✓</i>
        </div>
      </div>
    </>
  );
}

function ScanScreen() {
  return (
    <>
      <div className="fp-header">
        <div className="fp-title">Scan Book</div>
      </div>
      <div className="scan-box">
        <div className="scan-frame">
          <i />
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="scan-help">Point at barcode or ISBN</div>
      </div>
      <div className="scan-result">
        <div className="fp-label">Last scan result</div>
        <div className="book-title">Design of Everyday Things</div>
        <div className="book-author">Shelf B4 · Row 3 · Available</div>
      </div>
    </>
  );
}

function FinalScreens() {
  const screens = [
    "/Image/Biblofi/final1.png",
    "/Image/Biblofi/final2.png",
    "/Image/Biblofi/final3.png",
    "/Image/Biblofi/final4.png",
    "/Image/Biblofi/final5.png",
    "/Image/Biblofi/final6.png",
    "/Image/Biblofi/final7.png",
    "/Image/Biblofi/final8.png",
    "/Image/Biblofi/final9.png",
  ];
  return (
    <section className="final-screens-section">
      <div className="container">
        <p className="section-label reveal">Deliver — Final Designs</p>
        <h2 className="section-title reveal rd1">
          The finished product —
          <br />
          <em>every screen, polished.</em>
        </h2>
        <p className="body-text reveal rd2">From onboarding to book discovery, seat booking to fine tracking — here are the final high-fidelity screens delivered to the Infosys engineering team.</p>
        <div className="final-screens-grid reveal rd2">
          {screens.map((src, i) => (
            <div className="final-screen-item" key={i}>
              <Image src={src} alt={`BibloFi final screen ${i + 1}`} width={320} height={640} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Accessibility() {
  return (
    <section className="a11y-section">
      <div className="container">
        <p className="section-label reveal">Accessibility & Inclusivity</p>
        <h2 className="section-title reveal rd1">
          Designed for
          <br />
          <em>everyone to use.</em>
        </h2>
        <p className="body-text reveal rd2">BibloFi was designed to be inclusive and accessible for all users — from day one, not as an afterthought.</p>
        <div className="a11y-grid reveal rd2">
          {accessibilityCards.map((card) => (
            <div className="a11y-card" key={card.title}>
              <div className="a11y-icon">{card.icon}</div>
              <h3 className="a11y-title">{card.title}</h3>
              <p className="a11y-desc">{card.desc}</p>
              <span className="wcag-badge">{card.badge}</span>
            </div>
          ))}
        </div>
        <p className="body-text reveal rd3 a11y-note">Design system built on iOS 18 UI Kit (Figma Community) and Apple&apos;s Human Interface Guidelines — ensuring the app felt native and familiar to iOS users.</p>
      </div>
    </section>
  );
}

function Testing() {
  return (
    <section className="testing">
      <div className="container">
        <p className="section-label reveal">Usability Testing</p>
        <h2 className="section-title reveal rd1">
          20 real users.
          <br />
          <em>Three core tasks.</em>
        </h2>
        <p className="body-text reveal rd2">I conducted usability testing with 20 participants to validate the design before final delivery. Each participant attempted three core tasks without any guidance — mimicking real-world use.</p>
        <div className="test-results reveal rd2">
          {testResults.map((result) => (
            <div className="test-card" key={result.task}>
              <p className="test-task">{result.task}</p>
              <p className="test-fraction">{result.fraction}</p>
              <p className="test-label">{result.label}</p>
              <p className="test-note">{result.note}</p>
            </div>
          ))}
        </div>
        <div className="test-overall reveal rd3">
          <p className="test-overall-num">90%</p>
          <p className="test-overall-label">Overall task completion rate across all 3 tasks · 20 participants</p>
        </div>
        <p className="body-text reveal rd3 testing-note">Key improvement from testing: secondary navigation was unclear in early iterations. We restructured the tab bar and improved labelling — which was reflected positively in final feedback sessions.</p>
      </div>
    </section>
  );
}

function Oreo() {
  return (
    <section className="oreo-section">
      <div className="container">
        <p className="section-label reveal">The Details</p>
        <h2 className="section-title reveal rd1">
          Meet Oreo — the character
          <br />
          <em>that made BibloFi, BibloFi.</em>
        </h2>
        <div className="oreo-card reveal rd2">
          <div className="oreo-icon">🐾</div>
          <div className="oreo-content">
            <h3 className="oreo-title">A mascot with personality</h3>
            <p className="oreo-desc">Every great app has a soul. Oreo is the character we created to give BibloFi a unique theme and personality — a small detail that made the experience feel warm, playful, and human. Good UX isn&apos;t just about flows and components. It&apos;s about the moments that make users smile.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Learnings() {
  return (
    <section className="learnings">
      <div className="container">
        <p className="section-label reveal">What I Learned</p>
        <h2 className="section-title reveal rd1">
          Growing as a designer
          <br />
          <em>and a leader.</em>
        </h2>
        <div className="learning-list">
          {learnings.map((learning) => (
            <div className={learning.delay ? `learning-item reveal ${learning.delay}` : "learning-item reveal"} key={learning.num}>
              <p className="learning-num">{learning.num}</p>
              <div>
                <h3 className="learning-title">{learning.title}</h3>
                <p className="learning-text">{learning.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextProject() {
  return (
    <div className="next-project">
      <p className="np-label">Next case study</p>
      <h2 className="np-title">
        EcoTrack —
        <br />
        <em>Carbon footprint tracking.</em>
      </h2>
      <a href="ecotrack-case-study.html" className="np-btn">
        View case study →
      </a>
    </div>
  );
}
