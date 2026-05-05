import type { MetadataRoute } from "next";
import { getSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nikunj-portfolio.vercel.app";
  const staticRoutes = ["", "/projects", "/blogs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
  const projectRoutes = getSlugs("projects").map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date()
  }));
  const blogRoutes = getSlugs("blogs").map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
