import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagFilter } from "@/components/TagFilter";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on product design, AI workflows, and design systems by Nikunj Tyagi.",
  openGraph: {
    title: "Writing · Nikunj Tyagi",
    description: "Notes on product design, AI workflows, and design systems by Nikunj Tyagi."
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
