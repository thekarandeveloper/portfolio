"use client";

import { useEffect } from "react";
import { DarkModeToggle } from "@/components/DarkModeToggle";

export function HomeNav() {
  useEffect(() => {
    const clockEl = document.getElementById("nav-clock");
    if (!clockEl) return;

    function getIST() {
      const ist = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      const h = ist.getHours();
      const m = ist.getMinutes();
      const ap = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      return h12 + ":" + String(m).padStart(2, "0") + " " + ap;
    }

    clockEl.textContent = getIST();
    const interval = setInterval(() => {
      clockEl.textContent = getIST();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav id="nav">
      <div className="nav-pill">
        <a href="/" className="nav-monogram nav-monogram-link" aria-label="Home">NT</a>
        <div className="nav-clock-group">
          <span className="nav-dot"></span>
          <span className="nav-time" id="nav-clock">--:-- --</span>
        </div>
        <div className="nav-divider"></div>
        <a href="#work" className="nav-link-item">Work</a>
        <a
          href="https://docs.google.com/document/d/13FPLODLMONa5ZYwlLNAZMchZnM_s88bSBnIZICCFik8/edit?tab=t.0"
          className="nav-link-item nav-link-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span className="nav-resume-arrow">↗</span>
        </a>
        <div className="nav-toggle-divider"></div>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
