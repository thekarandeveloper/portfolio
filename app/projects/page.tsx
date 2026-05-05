import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagFilter } from "@/components/TagFilter";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected B2B, healthcare, and iOS product design case studies by Nikunj Tyagi.",
  openGraph: {
    title: "Projects · Nikunj Tyagi",
    description: "Selected B2B, healthcare, and iOS product design case studies by Nikunj Tyagi."
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
