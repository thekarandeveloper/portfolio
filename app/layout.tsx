import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Caveat, Cormorant_Garamond, Instrument_Sans, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ScrollToTop } from "@/components/ScrollToTop";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant"
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument"
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" }
  ],
  colorScheme: "light dark"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nikunj Tyagi · Product Designer",
    template: "%s · Nikunj Tyagi"
  },
  description:
    "Nikunj Tyagi is a Product Designer crafting B2B SaaS, healthcare, and iOS experiences. Explore UX case studies, design systems, and product work.",
  keywords: [
    "Nikunj Tyagi",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "B2B SaaS Design",
    "Healthcare UX",
    "iOS App Design",
    "Design Systems",
    "Product Design Portfolio",
    "UX Portfolio India",
    "Interaction Design",
    "Figma Designer"
  ],
  authors: [{ name: "Nikunj Tyagi", url: siteUrl }],
  creator: "Nikunj Tyagi",
  publisher: "Nikunj Tyagi",
  category: "portfolio",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Nikunj Tyagi",
    title: "Nikunj Tyagi · Product Designer",
    description:
      "Product Designer crafting B2B SaaS, healthcare, and iOS experiences. See UX case studies and design systems.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nikunj Tyagi · Product Designer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikunj Tyagi · Product Designer",
    description:
      "Product Designer crafting B2B SaaS, healthcare, and iOS experiences.",
    images: ["/opengraph-image"],
    creator: "@nikunjtyagi"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
  },
  appleWebApp: {
    capable: true,
    title: "Nikunj Tyagi",
    statusBarStyle: "default"
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },
  referrer: "origin-when-cross-origin",
  other: {
    "msapplication-TileColor": "#1a1a1a",
    "msapplication-config": "/browserconfig.xml",
    "application-name": "Nikunj Tyagi"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nikunj Tyagi",
      jobTitle: "Product Designer",
      description:
        "Product Designer specializing in B2B SaaS, healthcare UX, iOS app design, and design systems.",
      url: siteUrl,
      image: `${siteUrl}/nikunj.png`,
      sameAs: [
        "https://www.linkedin.com/in/nikunj-tyagi",
        "https://dribbble.com/nikunjtyagi",
        "https://behance.net/nikunjtyagi"
      ],
      knowsAbout: [
        "UX Design",
        "Product Design",
        "B2B SaaS",
        "Healthcare Design",
        "iOS Design",
        "Design Systems",
        "Figma"
      ],
      nationality: {
        "@type": "Country",
        name: "India"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Nikunj Tyagi · Product Designer",
      description:
        "Portfolio of Nikunj Tyagi, a Product Designer crafting B2B SaaS, healthcare, and iOS experiences.",
      publisher: { "@id": `${siteUrl}/#person` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/blogs?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSans.variable} ${caveat.variable} ${lato.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500&family=DM+Serif+Display:ital@0;1&family=Instrument+Serif:ital@0;1&family=Nico+Moji&family=Rethink+Sans:wght@400;600;700;800&family=Syne:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
