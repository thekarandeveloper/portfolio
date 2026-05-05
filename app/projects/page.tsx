import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagFilter } from "@/components/TagFilter";
import { getAllContent } from "@/lib/mdx";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected B2B, healthcare, and iOS product design case studies by Nikunj Tyagi.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/projects`,
    title: "Projects · Nikunj Tyagi",
    description: "Selected B2B, healthcare, and iOS product design case studies by Nikunj Tyagi.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Projects · Nikunj Tyagi" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects · Nikunj Tyagi",
    description: "Selected B2B, healthcare, and iOS product design case studies by Nikunj Tyagi.",
    images: ["/opengraph-image"]
  }
};

export default function ProjectsPage() {
  const projects = getAllContent("projects");

  return (
    <main className="min-h-screen bg-bg px-6 pb-24 pt-32 dark:bg-ink md:px-16">
      <Container className="px-0">
        <p className="section-label">Selected work</p>
        <h1 className="section-title">
          Case studies
          <br />
          <em>& shipped systems.</em>
        </h1>
        <TagFilter items={projects} type="projects" />
      </Container>
    </main>
  );
}
