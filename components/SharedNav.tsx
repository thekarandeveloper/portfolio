"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "@/components/DarkModeToggle";

export function SharedNav() {
  const pathname = usePathname();

  // Homepage uses its own HomeBehavior-coupled nav
  if (pathname === "/") return null;

  return <SharedNavInner />;
}

function SharedNavInner() {
  useEffect(() => {
    const clockEl = document.getElementById("shared-nav-clock");
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
    <nav className="cs-nav">
      <div className="nav-pill">
        <a href="/" className="nav-monogram nav-monogram-link" aria-label="Home">NT</a>
        <div className="nav-clock-group">
          <span className="nav-dot" />
          <span className="nav-time" id="shared-nav-clock">
            --:-- --
          </span>
        </div>
        <div className="nav-divider" />
        <a href="/#work" className="nav-link-item">
          Work
        </a>
        <a
          href="/Nikunj-Resume.pdf"
          className="nav-link-item nav-link-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span className="nav-resume-arrow">↗</span>
        </a>
        <div className="nav-toggle-divider" />
        <DarkModeToggle />
      </div>
    </nav>
  );
}
