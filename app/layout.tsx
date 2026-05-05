import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat, Cormorant_Garamond, DM_Sans, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans"
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nikunj-portfolio.vercel.app"),
  title: {
    default: "Nikunj Tyagi · Product Designer",
    template: "%s · Nikunj Tyagi"
  },
  description: "Portfolio for Nikunj Tyagi, a product designer focused on B2B booking workflows, healthcare products, iOS UX, and design systems.",
  openGraph: {
    title: "Nikunj Tyagi · Product Designer",
    description: "Selected UX, product design, B2B, healthcare, and iOS product work.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable} ${lato.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
