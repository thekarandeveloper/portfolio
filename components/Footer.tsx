"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/projects/airiq" || pathname === "/projects/biblofi") {
    return null;
  }

  return (
    <footer className="border-t border-[rgba(180,140,130,0.15)] bg-bg2 px-6 py-10 dark:bg-ink2 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-ink3 dark:text-bg4 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-base">Nikunj Tyagi · Product Designer</p>
        <div className="flex gap-5">
          <Link href="mailto:tyaginikunj26@gmail.com" className="hover:text-pink">
            Email
          </Link>
          <Link href="https://linkedin.com/in/nikunj-tyagi" className="hover:text-pink">
            LinkedIn
          </Link>
          <Link href="https://github.com/NikunjTyagi26" className="hover:text-pink">
            GitHub
          </Link>
          <Link href="/projects" className="hover:text-pink">
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
