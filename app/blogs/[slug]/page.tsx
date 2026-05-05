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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";
    return {
      title: blog.title,
      description: blog.description,
      alternates: { canonical: `/blogs/${slug}` },
      openGraph: {
        type: "article",
        title: blog.title,
        description: blog.description,
        url: `${siteUrl}/blogs/${slug}`,
        publishedTime: blog.date,
        authors: ["Nikunj Tyagi"],
        images: blog.coverImage ? [{ url: blog.coverImage, width: 1200, height: 630, alt: blog.title }] : []
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: blog.coverImage ? [blog.coverImage] : []
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    datePublished: blog.date,
    dateModified: blog.date,
    url: `${siteUrl}/blogs/${slug}`,
    author: {
      "@type": "Person",
      name: "Nikunj Tyagi",
      url: siteUrl
    },
    publisher: {
      "@type": "Person",
      name: "Nikunj Tyagi",
      url: siteUrl
    },
    ...(blog.coverImage && { image: blog.coverImage }),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blogs/${slug}` }
  };

  return (
    <main className="min-h-screen bg-bg px-6 pb-24 pt-32 dark:bg-ink md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
