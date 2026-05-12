"use client";

import { useEffect, useState } from "react";

export function HomeLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    // Skip loader on back-navigation — only show on first visit per session
    if (sessionStorage.getItem("homeVisited")) {
      setPhase("done");
      return;
    }

    document.body.classList.add("home-loading");

    let value = 0;
    const timeouts: number[] = [];
    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.ceil((100 - value) * 0.08) + 1);
      setProgress(value);

      if (value >= 100) {
        window.clearInterval(timer);
        timeouts.push(window.setTimeout(() => {
          setPhase("exit");
          timeouts.push(window.setTimeout(() => {
            setPhase("done");
            sessionStorage.setItem("homeVisited", "1");
            document.body.classList.remove("home-loading");
          }, 920));
        }, 620));
      }
    }, 58);

    return () => {
      window.clearInterval(timer);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      document.body.classList.remove("home-loading");
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`home-loader ${phase === "exit" ? "is-exit" : ""}`} aria-live="polite" aria-label="Loading portfolio">
      <div className="home-loader-num">{progress}%</div>
    </div>
  );
}
