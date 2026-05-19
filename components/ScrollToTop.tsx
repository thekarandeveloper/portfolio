"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes sttFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sttFadeDown {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(10px); }
        }
        .stt-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(0,0,0,0.09);
          box-shadow: 0 2px 14px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05);
          cursor: pointer;
          color: #111;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition:
            box-shadow 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease,
            transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
          animation: sttFadeUp 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .stt-btn.hidden {
          animation: sttFadeDown 0.25s ease forwards;
        }
        .stt-btn:hover {
          box-shadow: 0 6px 28px rgba(30,144,255,0.18), 0 1px 6px rgba(30,144,255,0.10);
          border-color: rgba(30,144,255,0.3);
          background: rgba(240,248,255,0.96);
          transform: translateY(-3px);
          color: #1E90FF;
        }
        .stt-btn:active {
          transform: scale(0.93) translateY(0);
          box-shadow: 0 2px 10px rgba(30,144,255,0.12);
        }
        .stt-btn svg {
          transition: transform 0.2s ease;
        }
        .stt-btn:hover svg {
          transform: translateY(-1px);
        }
      `}</style>
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="stt-btn"
          aria-label="Back to top"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
