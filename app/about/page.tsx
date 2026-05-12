"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  { src: "/thumbnails/airiq.jpg",    title: "AirIQ",         role: "Lead Designer",    year: "2024", desc: "Redesigning B2B flight booking"   },
  { src: "/thumbnails/biblofi.jpg",  title: "Biblofi",        role: "Product Designer", year: "2024", desc: "Smart campus library system"       },
  { src: "/about/portrait.jpg",      title: "Nikunj Tyagi",   role: "Archive",          year: "2025", desc: "The person behind the work"        },
  { src: "/Image/hero/Cafe.png",     title: "Coffee & Ideas", role: "Personal",         year: "2024", desc: "Where most ideas are born"         },
  { src: "/about/work.jpg",          title: "Deep Work",      role: "Personal",         year: "2024", desc: "Figma open, latte cooling"         },
  { src: "/Image/Biblofi/hero1.png", title: "Biblofi iOS",    role: "UI Design",        year: "2024", desc: "Mobile-first onboarding"           },
  { src: "/Image/hero/Nikunj.png",   title: "On the Road",    role: "Archive",          year: "2024", desc: "Long highways, yellow flowers"     },
  { src: "/Image/Biblofi/hero2.png", title: "Scan & Issue",   role: "Feature Design",   year: "2024", desc: "Zero-friction borrowing"           },
];

export default function AboutPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const mouse    = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
  const time     = useRef(0);
  const speed    = useRef(1);
  const frame    = useRef(0);
  const hov      = useRef<number | null>(null);

  /* mouse */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  /* RAF */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const els = Array.from(stage.querySelectorAll<HTMLElement>(".spc"));
    const N   = els.length;
    const RX  = 358, RZ = 218, RY = 114;

    function tick() {
      frame.current++;
      const tgt = hov.current !== null ? 0.08 : 1.0;
      speed.current += (tgt - speed.current) * 0.07;
      time.current  += 0.0036 * speed.current;

      const t = time.current;
      const m = mouse.current;
      m.cx += (m.x - m.cx) * 0.034;
      m.cy += (m.y - m.cy) * 0.034;

      /* gentle vertical camera drift */
      const drift = Math.sin(t * 0.17) * 2.4;
      if (stage) stage.style.transform =
        `rotateX(${(m.cy * -4 + drift).toFixed(2)}deg) rotateY(${(m.cx * 5.5).toFixed(2)}deg)`;

      const entry   = Math.min(1, frame.current / 90);
      const breathe = 1 + Math.sin(t * 0.24) * 0.032;

      els.forEach((el, i) => {
        const phase = (i / N) * Math.PI * 2 + t;
        const x     = Math.cos(phase) * RX * breathe;
        const z     = Math.sin(phase) * RZ * breathe;
        const y     = Math.sin(phase * 0.5 + i * 0.38) * RY;
        const zN    = (z + RZ) / (RZ * 2);           /* 0=back, 1=front */

        const isH = hov.current === i;
        const sc  = isH ? Math.max(0.85, 0.64 + zN * 0.42) * 1.22 : 0.64 + zN * 0.42;
        const op  = Math.min(1, (0.16 + zN * 0.84) * entry);
        const blur= isH ? 0 : Math.max(0, (1 - zN) * 2.4);
        const rotY= Math.sin(phase) * -9;
        const rotZ= Math.cos(phase) * 2.5;

        el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) rotateZ(${rotZ.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
        el.style.opacity   = op.toFixed(3);
        el.style.zIndex    = String(Math.round(zN * 100) + (isH ? 200 : 0));
        el.style.filter    = blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : "";

        const glow = el.querySelector<HTMLElement>(".spc-glow");
        if (glow) {
          glow.style.opacity   = isH ? "1" : "0";
          glow.style.transform = isH ? "scale(1.55)" : "scale(1)";
        }

        const tip = el.querySelector<HTMLElement>(".spc-tip");
        if (tip) {
          tip.style.opacity   = isH ? "1" : "0";
          tip.style.transform = isH ? "translateY(0) scale(1)" : "translateY(10px) scale(0.96)";
          tip.style.filter    = isH ? "blur(0)" : "blur(4px)";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ─────────────── render ─────────────── */
  return (
    <main style={{
      width: "100vw", height: "100vh",
      overflow: "hidden", position: "relative",
      background: "#F6F9FF",
      fontFamily: "var(--font-instrument),'Instrument Sans',-apple-system,BlinkMacSystemFont,sans-serif",
    }}>

      {/* ── CSS ── */}
      <style>{`
        :root{--pink:#1E90FF;--sans:var(--font-instrument),'Instrument Sans',-apple-system,sans-serif;}

        /* ── floating pill nav (same as home) ── */
        .abt-nav{
          position:fixed;top:28px;left:50%;transform:translateX(-50%);
          z-index:9999;display:flex;align-items:center;gap:3px;
          padding:6px 8px;background:#fff;
          backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
          border:1px solid rgba(0,0,0,0.06);border-radius:99px;
          box-shadow:0 2px 18px rgba(0,0,0,0.07),0 1px 3px rgba(0,0,0,0.04),
            inset 0 1.5px 0 #fff,inset 0 -1px 0 rgba(255,255,255,0.5);
          white-space:nowrap;
        }
        .abt-nav-link{
          position:relative;z-index:1;
          display:inline-flex;align-items:center;gap:6px;
          font-size:0.76rem;letter-spacing:0.02em;
          color:rgba(30,30,40,0.60);text-decoration:none;
          padding:0.55rem 1.1rem;border-radius:99px;
          transition:color 0.18s,background 0.18s;
          font-family:var(--sans);font-weight:500;
        }
        .abt-nav-link svg{flex-shrink:0;opacity:0.55;transition:opacity 0.18s;}
        .abt-nav-link:hover{background:rgba(0,0,0,0.06);color:#111;}
        .abt-nav-link:hover svg{opacity:0.85;}
        .abt-nav-link.active{color:#fff;background:var(--pink);}
        .abt-nav-link.active svg{opacity:1;}
        .abt-nav-div{width:1px;height:16px;background:rgba(0,0,0,0.09);flex-shrink:0;margin:0 2px;}
        .abt-nav-res{
          display:inline-flex;align-items:center;gap:6px;
          font-size:0.76rem;letter-spacing:0.02em;
          color:rgba(30,30,40,0.60);text-decoration:none;
          padding:0.55rem 1.1rem;border-radius:99px;
          transition:background 0.18s,color 0.18s;
          font-family:var(--sans);font-weight:500;
        }
        .abt-nav-res svg{flex-shrink:0;opacity:0.55;transition:opacity 0.18s;}
        .abt-nav-res:hover{background:rgba(0,0,0,0.06);color:#111;}
        .abt-nav-res:hover svg{opacity:0.85;}

        /* ── card transitions ── */
        .spc-tip{transition:opacity .44s ease,transform .44s cubic-bezier(.16,1,.3,1),filter .44s ease;}
        .spc-glow{transition:opacity .55s ease,transform .55s ease;}

        /* ── text panel entrance ── */
        @keyframes abt-rise{
          from{opacity:0;transform:translateY(20px);}
          to  {opacity:1;transform:translateY(0);}
        }
        .abt-rise{opacity:0;animation:abt-rise 0.9s ease forwards;}

        /* ── email hover ── */
        .abt-email:hover{color:#1E90FF!important;border-color:rgba(30,144,255,0.5)!important;}
      `}</style>

      {/* ── background atmosphere ── */}
      <div aria-hidden style={{
        position:"absolute",inset:0,pointerEvents:"none",
        background:`
          radial-gradient(ellipse 85% 75% at 68% 52%, rgba(180,215,255,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 44% 44% at 14% 20%, rgba(210,232,255,0.13) 0%, transparent 58%),
          radial-gradient(ellipse 52% 52% at 92% 88%, rgba(200,222,255,0.10) 0%, transparent 55%)
        `,
      }}/>

      {/* ── dot grid ── */}
      <div aria-hidden style={{
        position:"absolute",inset:0,pointerEvents:"none",
        backgroundImage:"radial-gradient(circle,rgba(148,185,255,0.20) 1px,transparent 1px)",
        backgroundSize:"38px 38px",opacity:0.52,
      }}/>

      {/* ── faint ABOUT watermark ── */}
      <div aria-hidden style={{
        position:"absolute",
        top:"50%",left:"56%",
        transform:"translate(-50%,-50%)",
        fontFamily:"'DM Serif Display',Georgia,serif",
        fontSize:"clamp(11rem,20vw,22rem)",
        fontWeight:400,fontStyle:"italic",
        color:"rgba(175,210,255,0.055)",
        letterSpacing:"0.05em",
        pointerEvents:"none",userSelect:"none",
        lineHeight:1,whiteSpace:"nowrap",
        zIndex:0,
      }}>About</div>

      {/* ── floating pill nav ── */}
      <nav className="abt-nav">
        <a href="/#work" className="abt-nav-link">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          Work
        </a>
        <div className="abt-nav-div"/>
        <a href="/about" className="abt-nav-link active">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
          About
        </a>
        <div className="abt-nav-div"/>
        <a href="/Nikunj-Resume.pdf" target="_blank" className="abt-nav-res">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Resume
        </a>
      </nav>

      {/* ── editorial text panel ── */}
      <div style={{
        position:"absolute",
        left:"clamp(36px,5vw,72px)",
        top:"50%",
        transform:"translateY(-50%)",
        zIndex:20,
        display:"flex",flexDirection:"column",gap:"1.6rem",
        maxWidth:"clamp(200px,24vw,340px)",
      }}>
        {/* tag */}
        <span className="abt-rise" style={{
          animationDelay:"0.15s",
          fontFamily:"'DM Mono',monospace",
          fontSize:"0.56rem",letterSpacing:"0.3em",textTransform:"uppercase",
          color:"#9BB4CC",
        }}>About Me</span>

        {/* name */}
        <div style={{lineHeight:0.92}}>
          <div className="abt-rise" style={{
            animationDelay:"0.28s",
            fontFamily:"'DM Serif Display',Georgia,serif",
            fontSize:"clamp(2.5rem,4.2vw,3.8rem)",
            fontWeight:400,letterSpacing:"-0.03em",color:"#0C1826",
          }}>Nikunj</div>
          <div className="abt-rise" style={{
            animationDelay:"0.38s",
            fontFamily:"'DM Serif Display',Georgia,serif",
            fontSize:"clamp(2.5rem,4.2vw,3.8rem)",
            fontWeight:400,fontStyle:"italic",letterSpacing:"-0.03em",color:"#0C1826",
          }}>Tyagi.</div>
        </div>

        {/* thin rule */}
        <div className="abt-rise" style={{
          animationDelay:"0.48s",
          width:"40px",height:"1px",
          background:"rgba(140,180,220,0.45)",
        }}/>

        {/* tagline */}
        <p className="abt-rise" style={{
          animationDelay:"0.56s",
          fontSize:"0.91rem",lineHeight:1.78,
          color:"#4A607A",maxWidth:"24ch",margin:0,
        }}>
          Designer crafting motion-led digital experiences — turning complexity into calm.
        </p>

        {/* info */}
        <div className="abt-rise" style={{
          animationDelay:"0.68s",
          display:"flex",flexDirection:"column",gap:"0.62rem",
        }}>
          {[
            {label:"Role", val:"Product Designer"},
            {label:"Based",val:"New Delhi, India"},
            {label:"Open", val:"Full-time roles"},
          ].map(({label,val})=>(
            <div key={label} style={{display:"flex",gap:"1rem",alignItems:"baseline"}}>
              <span style={{
                fontFamily:"'DM Mono',monospace",
                fontSize:"0.52rem",letterSpacing:"0.18em",textTransform:"uppercase",
                color:"#9BB4CC",minWidth:"44px",
              }}>{label}</span>
              <span style={{fontSize:"0.82rem",color:"#374151"}}>{val}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a className="abt-rise abt-email" href="mailto:nikunj.tyagi.design@gmail.com" style={{
          animationDelay:"0.80s",
          fontFamily:"'DM Mono',monospace",
          fontSize:"0.6rem",letterSpacing:"0.18em",textTransform:"uppercase",
          color:"#6A9FC0",textDecoration:"none",
          borderBottom:"1px solid rgba(106,159,192,0.3)",
          paddingBottom:"2px",width:"fit-content",
          transition:"color 0.2s,border-color 0.2s",
        }}>Say Hello ↗</a>
      </div>

      {/* ── perspective container (full viewport) ── */}
      <div style={{
        position:"absolute",inset:0,
        perspective:"960px",perspectiveOrigin:"58% 48%",
        pointerEvents:"none",
      }}>
        {/* atmospheric bloom */}
        <div aria-hidden style={{
          position:"absolute",
          left:"50%",top:"50%",
          transform:"translate(-50%,-50%)",
          width:"720px",height:"540px",
          background:"radial-gradient(ellipse,rgba(160,210,255,0.16) 0%,rgba(190,225,255,0.06) 42%,transparent 70%)",
          borderRadius:"50%",filter:"blur(2px)",
          pointerEvents:"none",
        }}/>

        {/* stage — anchored at 58% / 50% */}
        <div
          ref={stageRef}
          style={{
            position:"absolute",
            left:"58%",top:"50%",
            width:0,height:0,
            transformStyle:"preserve-3d",
            willChange:"transform",
            pointerEvents:"all",
          }}
        >
          {CARDS.map((card,i)=>(
            <div
              key={i}
              className="spc"
              onMouseEnter={()=>{ hov.current=i; }}
              onMouseLeave={()=>{ hov.current=null; }}
              style={{
                position:"absolute",
                width:"228px",height:"154px",
                left:"-114px",top:"-77px",
                cursor:"pointer",
                willChange:"transform",
                backfaceVisibility:"hidden",
              }}
            >
              {/* glow first → behind face */}
              <div className="spc-glow" style={{
                position:"absolute",
                top:"-42px",left:"-42px",right:"-42px",bottom:"-42px",
                background:"radial-gradient(ellipse at 50% 50%,rgba(105,185,255,0.50) 0%,rgba(155,210,255,0.18) 36%,transparent 66%)",
                borderRadius:"50%",pointerEvents:"none",opacity:0,
              }}/>

              {/* card face */}
              <div style={{
                position:"absolute",inset:0,
                borderRadius:"18px",overflow:"hidden",
                background:"rgba(255,255,255,0.94)",
                boxShadow:"0 14px 52px rgba(100,165,255,0.14),0 4px 14px rgba(0,0,0,0.06)",
                border:"1px solid rgba(210,235,255,0.88)",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.src} alt={card.title}
                  style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
                  loading="lazy"
                />
                {/* glass shine */}
                <div style={{
                  position:"absolute",inset:0,
                  background:"linear-gradient(135deg,rgba(255,255,255,0.17) 0%,transparent 52%)",
                  pointerEvents:"none",
                }}/>
              </div>

              {/* hover tooltip */}
              <div className="spc-tip" style={{
                position:"absolute",
                top:"166px",left:"14px",
                width:"200px",
                background:"rgba(255,255,255,0.80)",
                backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",
                border:"1px solid rgba(185,220,255,0.65)",
                borderRadius:"14px",padding:"13px 16px",
                opacity:0,filter:"blur(4px)",
                pointerEvents:"none",
                boxShadow:"0 8px 36px rgba(100,165,255,0.11),0 2px 6px rgba(0,0,0,0.05)",
              }}>
                <p style={{margin:"0 0 4px",fontFamily:"'DM Serif Display',serif",fontSize:"0.94rem",fontWeight:400,color:"#0C1826",lineHeight:1.2}}>{card.title}</p>
                <p style={{margin:"0 0 8px",fontFamily:"'DM Mono',monospace",fontSize:"0.52rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"#7AACC4"}}>{card.role} · {card.year}</p>
                <p style={{margin:0,fontSize:"0.78rem",color:"#58717E",lineHeight:1.45}}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
