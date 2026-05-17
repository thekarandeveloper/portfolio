"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const portfolioLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" }
];

const defaultNavItems = [
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/about" || pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 grid h-[58px] grid-cols-[1fr_auto_1fr] items-center border-b border-transparent bg-[rgba(253,250,248,0.92)] px-5 backdrop-blur-xl md:px-10">
      <Link href="/" className="justify-self-start font-serif text-base font-normal tracking-[0.02em] text-ink no-underline">
        Nikunj Tyagi
      </Link>
      <div className="hidden rounded-full border border-[rgba(180,140,130,0.15)] bg-bg3 p-1 md:flex">
        {defaultNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.08em] text-ink3 transition hover:bg-bg4 hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="justify-self-end">
        <a
          href="/Nikunj-Resume.pdf"
          download
          className="inline-flex items-center gap-[0.4rem] rounded-full border border-[rgba(180,140,130,0.28)] px-4 py-[0.38rem] text-[0.68rem] uppercase tracking-[0.08em] text-ink3 no-underline transition hover:border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
        >
          ↓ Resume
        </a>
      </div>
    </nav>
  );
}
