import Link from "next/link";
import type { ReactNode } from "react";

type CaseStudyShellProps = {
  children: ReactNode;
  theme: "air" | "biblo";
  tag: string;
};

export function CaseStudyShell({ children, theme, tag }: CaseStudyShellProps) {
  const isAir = theme === "air";

  return (
    <main className={isAir ? "min-h-screen bg-air-off font-sans text-air-gray-800" : "min-h-screen bg-biblo-bg font-sans text-biblo-ink"}>
      <div className={`fixed left-0 top-0 z-[200] h-0.5 w-full ${isAir ? "bg-air-blue-mid" : "bg-biblo-purple2"}`} />
      <nav className={`fixed inset-x-0 top-0 z-[100] flex h-14 items-center justify-between border-b px-6 backdrop-blur-xl md:px-12 ${isAir ? "border-white/10 bg-air-navy/85 text-white" : "border-[rgba(80,60,160,0.1)] bg-biblo-bg/90 text-biblo-ink"}`}>
        <Link href="/" className={`text-[0.72rem] uppercase tracking-[0.08em] ${isAir ? "text-white/65 hover:text-white" : "text-biblo-ink3 hover:text-biblo-purple"}`}>
          ← Back to portfolio
        </Link>
        <Link href="/" className={isAir ? "text-sm font-bold tracking-[0.02em] text-white" : "font-serif text-base text-biblo-ink"}>
          Nikunj Tyagi
        </Link>
        <span className={`hidden text-[0.65rem] uppercase tracking-[0.12em] md:block ${isAir ? "text-white/35" : "text-biblo-ink4"}`}>{tag}</span>
      </nav>
      {children}
    </main>
  );
}

export function SectionHeader({ label, title, subtitle, theme = "air" }: { label: string; title: ReactNode; subtitle?: string; theme?: "air" | "biblo" }) {
  const isAir = theme === "air";

  return (
    <>
      <p className={`mb-4 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] ${isAir ? "text-air-blue" : "text-biblo-purple"}`}>
        <span className={`h-0.5 w-6 rounded-full ${isAir ? "bg-air-blue" : "bg-biblo-purple"}`} />
        {label}
      </p>
      <h2 className={`mb-4 text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.05] tracking-[-0.025em] ${isAir ? "text-air-navy" : "font-serif font-light text-biblo-ink"}`}>{title}</h2>
      {subtitle && <p className={`mb-14 max-w-2xl text-[1rem] leading-8 ${isAir ? "font-light text-air-gray-600" : "text-biblo-ink3"}`}>{subtitle}</p>}
    </>
  );
}

export function PhoneMockup({ children, theme = "biblo" }: { children: ReactNode; theme?: "air" | "biblo" }) {
  return (
    <div className={`mx-auto max-w-[250px] overflow-hidden rounded-[30px] border bg-white shadow-[0_16px_48px_rgba(91,63,212,0.12)] ${theme === "air" ? "border-air-gray-200" : "border-[rgba(80,60,160,0.2)]"}`}>
      <div className={theme === "air" ? "flex h-7 items-center justify-center bg-air-navy" : "flex h-7 items-center justify-center bg-biblo-deep"}>
        <div className="h-1.5 w-12 rounded-full bg-white/15" />
      </div>
      <div className={theme === "air" ? "bg-air-off p-4" : "bg-biblo-bg p-4"}>{children}</div>
    </div>
  );
}
