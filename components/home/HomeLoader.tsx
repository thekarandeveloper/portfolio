"use client";

import { useEffect, useState } from "react";

export function HomeLoader() {
  const [phase, setPhase] = useState<"draw" | "zoom" | "fade" | "gone">("draw");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const typing = window.setInterval(() => {
      index += 1;
      setTyped("Nikunj".slice(0, index));
      if (index >= 6) window.clearInterval(typing);
    }, 90);

    const zoom = window.setTimeout(() => setPhase("zoom"), 1250);
    const fade = window.setTimeout(() => setPhase("fade"), 1900);
    const gone = window.setTimeout(() => setPhase("gone"), 2500);

    return () => {
      window.clearInterval(typing);
      window.clearTimeout(zoom);
      window.clearTimeout(fade);
      window.clearTimeout(gone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`fixed inset-0 z-[9999] overflow-hidden bg-figma-dark transition-opacity duration-700 ${phase === "fade" ? "opacity-0" : "opacity-100"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className={`absolute inset-x-0 top-0 z-10 flex h-11 items-center gap-4 border-b border-white/5 bg-figma-panel px-4 transition-opacity ${phase !== "draw" ? "opacity-0" : ""}`}>
        <div className="flex gap-1.5">
          <span className="h-[11px] w-[11px] rounded-full bg-figma-red" />
          <span className="h-[11px] w-[11px] rounded-full bg-figma-yellow" />
          <span className="h-[11px] w-[11px] rounded-full bg-figma-green" />
        </div>
        <span className="rounded bg-white/10 px-3 py-1 text-[0.72rem] text-white/90">Insert</span>
        <span className="text-[0.72rem] text-white/45">Frame</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-pink text-center text-[0.6rem] font-semibold leading-6 text-white">NT</span>
          <span className="rounded bg-pink px-3 py-1 text-[0.68rem] font-medium text-white">Share</span>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 top-11 z-10 hidden w-[220px] border-r border-white/5 bg-figma-panel p-4 transition-opacity duration-500 md:block ${phase !== "draw" ? "opacity-0" : "opacity-100"}`}>
        <p className="mb-3 text-[0.65rem] uppercase tracking-[0.12em] text-white/30">Layers</p>
        {["nikunj-portfolio", "Hero", "Nikunj Tyagi", "Product Designer", "Tagline"].map((layer, index) => (
          <div key={layer} className={`flex gap-2 rounded px-2 py-1 text-[0.72rem] ${index === 2 ? "bg-pink/15 text-white" : "text-white/60"}`}>
            <span>{index > 1 ? "T" : "▣"}</span>
            <span>{layer}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative flex items-center justify-center overflow-hidden border-2 border-pink bg-bg transition-all duration-700 ${phase === "draw" ? "h-[260px] w-[min(520px,82vw)] rounded-sm" : "h-screen w-screen border-0"}`}>
          {phase === "draw" && <span className="absolute -top-6 left-0 text-[0.65rem] font-medium tracking-[0.04em] text-pink">nikunj-portfolio / Hero</span>}
          <div className="text-center">
            <div className="font-hand text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none text-ink">
              <span className="text-pink">{typed}</span> Tyagi
              <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-1 bg-pink" />
            </div>
            <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-ink4">Product Designer · UI/UX · Figma</p>
            <p className="mt-2 font-serif italic text-ink3">Turning complex into obvious.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
