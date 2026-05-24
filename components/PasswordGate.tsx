"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { validateCaseStudyPassword } from "@/lib/authActions";

/* Same 5-layer wave config as the hero canvas */
const WAVES = [
  { yR: 0.38, amp: 52, freq: 0.0055, spd: 0.007,  ph: 0,    r: 0,   g: 122, b: 255, a: 0.048 },
  { yR: 0.27, amp: 68, freq: 0.0040, spd: -0.005, ph: 1.05, r: 52,  g: 170, b: 220, a: 0.042 },
  { yR: 0.50, amp: 40, freq: 0.0068, spd: 0.010,  ph: 1.57, r: 90,  g: 200, b: 250, a: 0.036 },
  { yR: 0.18, amp: 76, freq: 0.0030, spd: -0.004, ph: 3.14, r: 175, g: 210, b: 255, a: 0.044 },
  { yR: 0.62, amp: 34, freq: 0.0060, spd: 0.008,  ph: 4.71, r: 0,   g: 150, b: 255, a: 0.030 },
];

export function PasswordGate({
  children,
  slug,
  digits = 4,
}: {
  children: ReactNode;
  slug: string;
  digits?: number;
}) {
  const [pins, setPins]   = useState<string[]>(Array(digits).fill(""));
  const [phase, setPhase] = useState<"idle" | "checking" | "error" | "success" | "done">("idle");
  const inputRefs  = useRef<(HTMLInputElement | null)[]>([]);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const storageKey = `pw-${slug}`;

  /* Wave canvas */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const waves = WAVES.map(w => ({ ...w }));

    function resize() {
      cv!.width  = window.innerWidth;
      cv!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let raf: number;
    function draw() {
      const W = cv!.width, H = cv!.height;
      ctx!.clearRect(0, 0, W, H);
      waves.forEach(w => {
        w.ph += w.spd;
        const baseY = w.yR * H;
        ctx!.beginPath();
        ctx!.moveTo(0, 0);
        for (let x = 0; x <= W + 8; x += 6) {
          ctx!.lineTo(x, baseY + Math.sin(x * w.freq + w.ph) * w.amp);
        }
        ctx!.lineTo(W, 0);
        ctx!.closePath();
        const gr = ctx!.createLinearGradient(0, 0, 0, baseY + w.amp + 20);
        gr.addColorStop(0,    `rgba(${w.r},${w.g},${w.b},${(w.a * 1.8).toFixed(3)})`);
        gr.addColorStop(0.55, `rgba(${w.r},${w.g},${w.b},${w.a.toFixed(3)})`);
        gr.addColorStop(1,    `rgba(${w.r},${w.g},${w.b},0)`);
        ctx!.fillStyle = gr;
        ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* Cursor glow */
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* Session check */
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(storageKey) === "1") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      setPhase("done");
      return;
    }
    setTimeout(() => inputRefs.current[0]?.focus(), 380);
  }, [storageKey]);

  const tryUnlock = async (filled: string[]) => {
    setPhase("checking");
    try {
      const valid = await validateCaseStudyPassword(slug, filled.join(""));
      if (valid) {
        setPhase("success");
        setTimeout(() => {
          sessionStorage.setItem(storageKey, "1");
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
          setPhase("done");
        }, 1300);
      } else {
        setPhase("error");
        setTimeout(() => {
          setPins(Array(digits).fill(""));
          setPhase("idle");
          inputRefs.current[0]?.focus();
        }, 750);
      }
    } catch {
      setPhase("error");
      setTimeout(() => {
        setPins(Array(digits).fill(""));
        setPhase("idle");
        inputRefs.current[0]?.focus();
      }, 750);
    }
  };

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (phase === "checking") return;
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    if (!val) return;
    const next = [...pins];
    next[i] = val;
    setPins(next);
    if (i < digits - 1) {
      inputRefs.current[i + 1]?.focus();
    } else {
      tryUnlock(next);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (phase === "checking") return;
    if (e.key === "Backspace") {
      if (pins[i]) {
        const next = [...pins];
        next[i] = "";
        setPins(next);
      } else if (i > 0) {
        inputRefs.current[i - 1]?.focus();
      }
    }
    if (e.key === "Enter" && pins.every(Boolean)) {
      tryUnlock(pins);
    }
  };

  if (phase === "done") return <>{children}</>;

  const isChecking = phase === "checking";
  const isError    = phase === "error";
  const isSuccess  = phase === "success";

  return (
    <div className={`pgx${isError ? " pgx-err" : ""}${isSuccess ? " pgx-ok" : ""}`}>

      {/* Wave canvas */}
      <canvas ref={canvasRef} className="pgx-canvas" aria-hidden="true" />

      {/* Cursor glow */}
      <div ref={glowRef} className="pgx-cursor-glow" aria-hidden="true" />

      {/* Back button */}
      <Link href="/" className="pgx-back">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to projects
      </Link>

      {/* LinkedIn card — top right */}
      {!isSuccess && (
        <a
          href="https://www.linkedin.com/in/nikunj-tyagi26/"
          target="_blank"
          rel="noopener noreferrer"
          className="pgx-li-card"
        >
          <span className="pgx-li-avatar" aria-hidden="true">N</span>
          <span className="pgx-li-text">
            <span className="pgx-li-ask">Don&rsquo;t have the password?</span>
            <span className="pgx-li-cta">
              Let&rsquo;s talk design
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </span>
        </a>
      )}

      {/* Center content */}
      <div className="pgx-body">

        {/* Lock badge */}
        <div className={`pgx-lock${isSuccess ? " pgx-lock-open" : ""}`}>
          {isSuccess ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )}
        </div>

        {/* Eyebrow */}
        <p className="pgx-eyebrow">Confidential Work</p>

        {/* Title */}
        <h1 className="pgx-title">
          {isSuccess
            ? <><em>Access granted</em></>
            : <><em>Enter password</em><br />to continue</>}
        </h1>

        {/* Subtitle */}
        <p className="pgx-sub">
          {isSuccess
            ? "Opening case study…"
            : "This case study is shared selectively. Reach out on LinkedIn if you’d like access."}
        </p>

        {/* OTP input */}
        {!isSuccess && (
          <>
            <div className={`pgx-otp${isChecking ? " pgx-otp-loading" : ""}`}>
              {Array.from({ length: digits }).map((_, i) => (
                <label
                  key={i}
                  className={`pgx-box${pins[i] ? " pgx-box-on" : ""}${isError ? " pgx-box-err" : ""}`}
                >
                  <input
                    ref={el => { inputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={pins[i]}
                    onChange={e => handleChange(i, e)}
                    onKeyDown={e => handleKeyDown(i, e)}
                    className="pgx-hidden"
                    autoComplete="off"
                    aria-label={`Digit ${i + 1}`}
                    disabled={isChecking}
                  />
                  <span
                    className={`pgx-pip${pins[i] ? " pgx-pip-on" : ""}${isError ? " pgx-pip-err" : ""}`}
                  />
                </label>
              ))}
            </div>

            {isError
              ? <p className="pgx-status pgx-status-err">Incorrect, try again</p>
              : isChecking
              ? <p className="pgx-hint">Verifying…</p>
              : <p className="pgx-hint">{digits}-digit code</p>}
          </>
        )}

        {isSuccess && (
          <div className="pgx-ok-row">
            {Array.from({ length: digits }).map((_, i) => (
              <span
                key={i}
                className="pgx-ok-dot"
                style={{ animationDelay: `${i * 0.07}s` } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
