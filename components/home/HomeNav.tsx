import Link from "next/link";
import { navItems } from "./homeData";

export function HomeNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-[58px] items-center justify-between border-b border-transparent bg-[rgba(253,250,248,0.88)] px-6 backdrop-blur-xl md:px-12">
      <a href="#home" className="font-serif text-base text-ink">
        Nikunj Tyagi
      </a>
      <div className="hidden rounded-full border border-[rgba(180,140,130,0.15)] bg-bg3 p-1 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="rounded-full px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.08em] text-ink3 transition hover:bg-bg4 hover:text-ink">
            {item.label}
          </a>
        ))}
      </div>
      <Link href="/Nikunj-Resume.pdf" className="rounded-full border border-[rgba(180,140,130,0.28)] bg-white px-4 py-2 text-[0.68rem] uppercase tracking-[0.08em] text-ink3 transition hover:border-pink hover:text-pink">
        Resume
      </Link>
    </nav>
  );
}
