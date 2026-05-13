"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes liquidOrb {
          0%,100%{border-radius:50%}
          25%{border-radius:44% 56% 54% 46%/48% 42% 58% 52%}
          50%{border-radius:54% 46% 42% 58%/58% 54% 46% 42%}
          75%{border-radius:46% 54% 58% 42%/52% 58% 42% 48%}
        }
        .scroll-top-orb {
          animation: liquidOrb 5s ease-in-out infinite;
          transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.15s ease;
        }
        .scroll-top-orb.pressing {
          transform: scale(1.32);
          box-shadow: 0 8px 36px rgba(30,144,255,0.45), 0 0 0 6px rgba(30,144,255,0.14), inset 0 1px 0 rgba(255,255,255,0.9) !important;
        }
      `}</style>
      <button
        onMouseDown={() => setPressing(true)}
        onMouseUp={() => setPressing(false)}
        onMouseLeave={() => setPressing(false)}
        onTouchStart={() => setPressing(true)}
        onTouchEnd={() => setPressing(false)}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`scroll-top-orb fixed bottom-6 right-6 z-[200] flex h-11 w-11 items-center justify-center border border-[rgba(30,144,255,0.28)] text-[#1E90FF] backdrop-blur-2xl${pressing ? " pressing" : ""}`}
        style={{
          background: "rgba(220,236,255,0.52)",
          boxShadow: "0 4px 20px rgba(30,144,255,0.18), 0 1px 6px rgba(30,144,255,0.10), inset 0 1px 0 rgba(255,255,255,0.85)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
