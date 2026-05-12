"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

const PASSWORD = "12345";
const LEN = PASSWORD.length;

/* Same 5-layer wave config as the hero canvas */
const WAVES = [
  { yR: 0.38, amp: 52, freq: 0.0055, spd: 0.007,  ph: 0,    r: 0,   g: 122, b: 255, a: 0.048 },
  { yR: 0.27, amp: 68, freq: 0.0040, spd: -0.005, ph: 1.05, r: 52,  g: 170, b: 220, a: 0.042 },
  { yR: 0.50, amp: 40, freq: 0.0068, spd: 0.010,  ph: 1.57, r: 90,  g: 200, b: 250, a: 0.036 },
  { yR: 0.18, amp: 76, freq: 0.0030, spd: -0.004, ph: 3.14, r: 175, g: 210, b: 255, a: 0.044 },
  { yR: 0.62, amp: 34, freq: 0.0060, spd: 0.008,  ph: 4.71, r: 0,   g: 150, b: 255, a: 0.030 },
];

export function PasswordGate({ children, slug }: { children: ReactNode; slug: string }) {
  const [digits, setDigits]   = useState<string[]>(Array(LEN).fill(""));
  const [phase, setPhase]     = useState<"idle" | "error" | "success" | "done">("idle");
  const inputRefs  = useRef<(HTMLInputElement | null)[]>([]);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const storageKey = `pw-${slug}`;

  /* Wave canvas — identical to HomeBehavior hero wave */
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

  /* Cursor glow — matching hero cursor-glow behaviour */
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
      setPhase("done");
      return;
    }
    setTimeout(() => inputRefs.current[0]?.focus(), 380);
  }, [storageKey]);

  const tryUnlock = (filled: string[]) => {
    if (filled.join("") === PASSWORD) {
      setPhase("success");
      setTimeout(() => {
        sessionStorage.setItem(storageKey, "1");
        setPhase("done");
      }, 1300);
    } else {
      setPhase("error");
      setTimeout(() => {
        setDigits(Array(LEN).fill(""));
        setPhase("idle");
        inputRefs.current[0]?.focus();
      }, 750);
    }
  };

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    if (!val) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    if (i < LEN - 1) {
      inputRefs.current[i + 1]?.focus();
    } else {
      tryUnlock(next);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (digits[i]) {
        const next = [...digits];
        next[i] = "";
        setDigits(next);
      } else if (i > 0) {
        inputRefs.current[i - 1]?.focus();
      }
    }
    if (e.key === "Enter" && digits.every(Boolean)) {
      tryUnlock(digits);
    }
  };

  if (phase === "done") return <>{children}</>;

  const isError   = phase === "error";
  const isSuccess = phase === "success";

  return (
    <div className={`pgx${isError ? " pgx-err" : ""}${isSuccess ? " pgx-ok" : ""}`}>

      {/* Wave canvas */}
      <canvas ref={canvasRef} className="pgx-canvas" aria-hidden="true" />

      {/* Cursor glow */}
      <div ref={glowRef} className="pgx-cursor-glow" aria-hidden="true" />

      {/* Back button — floating pill, matching nav style */}
      <Link href="/" className="pgx-back">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to projects
      </Link>

      {/* ── Center content ── */}
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
        <p className="pgx-eyebrow">Protected Work</p>

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
            : "This case study is shared under NDA — reach out if you need access."}
        </p>

        {/* LinkedIn entry point */}
        {!isSuccess && (
          <a
            href="https://www.linkedin.com/in/nikunj-tyagi26/"
            target="_blank"
            rel="noopener noreferrer"
            className="pgx-linkedin"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn to request access
          </a>
        )}

        {/* OTP input */}
        {!isSuccess && (
          <>
            <div className="pgx-otp">
              {Array.from({ length: LEN }).map((_, i) => (
                <label
                  key={i}
                  className={`pgx-box${digits[i] ? " pgx-box-on" : ""}${isError ? " pgx-box-err" : ""}`}
                >
                  <input
                    ref={el => { inputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digits[i]}
                    onChange={e => handleChange(i, e)}
                    onKeyDown={e => handleKeyDown(i, e)}
                    className="pgx-hidden"
                    autoComplete="off"
                    aria-label={`Digit ${i + 1}`}
                  />
                  <span
                    className={`pgx-pip${digits[i] ? " pgx-pip-on" : ""}${isError ? " pgx-pip-err" : ""}`}
                  />
                </label>
              ))}
            </div>

            {isError
              ? <p className="pgx-status pgx-status-err">Incorrect — try again</p>
              : <p className="pgx-hint">5-digit code</p>}
          </>
        )}

        {isSuccess && (
          <div className="pgx-ok-row">
            {Array.from({ length: LEN }).map((_, i) => (
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
