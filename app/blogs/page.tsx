import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagFilter } from "@/components/TagFilter";
import { getAllContent } from "@/lib/mdx";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on product design, AI workflows, and design systems by Nikunj Tyagi.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blogs`,
    title: "Writing · Nikunj Tyagi",
    description: "Notes on product design, AI workflows, and design systems by Nikunj Tyagi.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Writing · Nikunj Tyagi" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing · Nikunj Tyagi",
    description: "Notes on product design, AI workflows, and design systems by Nikunj Tyagi.",
    images: ["/opengraph-image"]
  }
};

export default function BlogsPage() {
  const blogs = getAllContent("blogs");

  return (
    <main className="min-h-screen bg-bg px-6 pb-24 pt-32 dark:bg-ink md:px-16">
      <Container className="px-0">
        <p className="section-label">Writing</p>
        <h1 className="section-title">
          Notes from
          <br />
          <em>the design desk.</em>
        </h1>
        <TagFilter items={blogs} type="blogs" />
      </Container>
    </main>
  );
}
