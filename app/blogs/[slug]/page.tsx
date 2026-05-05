import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getContentItem, getSlugs } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSlugs("blogs").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = getContentItem("blogs", slug);
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: [{ url: blog.coverImage }]
      }
    };
  } catch {
    return {};
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  let blog;
  try {
    blog = getContentItem("blogs", slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg px-6 pb-24 pt-32 dark:bg-ink md:px-16">
      <Container className="px-0">
        <Link href="/blogs" className="mb-12 inline-flex text-[0.72rem] uppercase tracking-[0.08em] text-ink3 hover:text-pink dark:text-bg4">
          ← Back to writing
        </Link>
        <p className="section-label">{new Date(blog.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</p>
        <h1 className="max-w-4xl font-serif text-[clamp(3rem,7vw,5.6rem)] font-light leading-none tracking-[-0.02em] text-ink dark:text-bg">{blog.title}</h1>
        <p className="mt-8 max-w-2xl font-serif text-xl italic leading-8 text-ink3 dark:text-bg4">{blog.description}</p>
        <article className="mx-auto mt-16 max-w-3xl">
          <MDXRenderer source={blog.content} />
        </article>
      </Container>
    </main>
  );
}
