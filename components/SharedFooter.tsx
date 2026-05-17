"use client";

import { usePathname } from "next/navigation";
import { GlobalFooter } from "@/components/GlobalFooter";

export function SharedFooter() {
  const pathname = usePathname();

  // Homepage uses GlobalFooter directly inside HomePageReplica
  if (pathname === "/") return null;

  return <GlobalFooter />;
}
