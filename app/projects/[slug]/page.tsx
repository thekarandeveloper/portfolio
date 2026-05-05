import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AirIqCaseStudy } from "@/components/case-studies/AirIqCaseStudy";
import { BiblofiCaseStudy } from "@/components/case-studies/BiblofiCaseStudy";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { Container } from "@/components/Container";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getContentItem, getSlugs } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = getContentItem("projects", slug);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";
    return {
      title: project.title,
      description: project.description,
      alternates: { canonical: `/projects/${slug}` },
      openGraph: {
        type: "article",
        title: project.title,
        description: project.description,
        url: `${siteUrl}/projects/${slug}`,
        authors: ["Nikunj Tyagi"],
        images: project.coverImage ? [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }] : []
      },
      twitter: {
        card: "summary_large_image",
        title: project.title,
        description: project.description,
        images: project.coverImage ? [project.coverImage] : []
      }
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "airiq") {
    return <AirIqCaseStudy />;
  }

  if (slug === "biblofi") {
    return <BiblofiCaseStudy />;
  }

  let project;
  try {
    project = getContentItem("projects", slug);
  } catch {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunjtyagi.design";
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${slug}`,
    creator: {
      "@type": "Person",
      name: "Nikunj Tyagi",
      url: siteUrl
    },
    ...(project.coverImage && { image: project.coverImage }),
    keywords: project.tags?.join(", ") ?? ""
  };

  const isAir = project.palette === "airiq";
  const isBiblo = project.palette === "biblofi";

  return (
    <main className={isAir ? "bg-air-off" : isBiblo ? "bg-biblo-bg" : "bg-bg dark:bg-ink"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <section className={`relative min-h-[88vh] overflow-hidden px-6 pb-20 pt-36 md:px-12 ${isAir ? "bg-air-navy" : isBiblo ? "bg-ink" : "bg-bg dark:bg-ink"}`}>
        {(isAir || isBiblo) && (
          <>
            <div className={`absolute inset-0 ${isAir ? "bg-[linear-gradient(rgba(16,118,188,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,118,188,0.07)_1px,transparent_1px)] [background-size:72px_72px] animate-[gridMove_24s_linear_infinite]" : "bg-[linear-gradient(rgba(91,63,212,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(91,63,212,0.07)_1px,transparent_1px)] [background-size:48px_48px]"}`} />
            <div className={`absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full blur-3xl ${isAir ? "bg-air-blue/15" : "bg-biblo-purple/20"}`} />
          </>
        )}
        <Container className="relative z-10 px-0">
          <Link href="/projects" className={`mb-14 inline-flex text-[0.72rem] uppercase tracking-[0.08em] ${isAir || isBiblo ? "text-white/50 hover:text-white" : "text-ink3 hover:text-pink dark:text-bg4"}`}>
            ← Back to projects
          </Link>
          <p className={`mb-6 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] ${isAir ? "text-air-blue-mid" : isBiblo ? "text-biblo-purple2" : "text-pink"}`}>
            <span className={`h-px w-7 ${isAir ? "bg-air-blue-mid" : isBiblo ? "bg-biblo-purple2" : "bg-pink"}`} />
            {project.tags[0] || "Case Study"}
          </p>
          <h1 className={`max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-none tracking-[-0.02em] ${isAir || isBiblo ? "text-white" : "text-ink dark:text-bg"}`}>
            {project.title}
          </h1>
          <p className={`mt-8 max-w-2xl font-serif text-xl italic leading-8 ${isAir || isBiblo ? "text-white/50" : "text-ink3 dark:text-bg4"}`}>{project.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className={`rounded-full border px-4 py-2 text-xs ${isAir || isBiblo ? "border-white/10 bg-white/5 text-white/65" : "border-[rgba(180,140,130,0.28)] bg-white text-ink3 dark:bg-ink2 dark:text-bg4"}`}>
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="case-section">
        <Container className="px-0">
          <CloudinaryImage src={project.coverImage} alt={project.title} width={1400} height={840} priority sizes="100vw" className="mb-12 w-full rounded-2xl border border-[rgba(180,140,130,0.15)] object-cover" />
          <article className="mx-auto max-w-3xl">
            <MDXRenderer source={project.content} />
          </article>
        </Container>
      </section>
    </main>
  );
}
