import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "projects" | "blogs";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
  palette?: "portfolio" | "airiq" | "biblofi";
};

export type ContentItem = Frontmatter & {
  slug: string;
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

function contentDir(type: ContentType) {
  return path.join(contentRoot, type);
}

export function getSlugs(type: ContentType) {
  return fs
    .readdirSync(contentDir(type))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentItem(type: ContentType, slug: string): ContentItem {
  const filePath = path.join(contentDir(type), `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    coverImage: data.coverImage,
    featured: Boolean(data.featured),
    palette: data.palette || "portfolio",
    content
  };
}

export function getAllContent(type: ContentType) {
  return getSlugs(type)
    .map((slug) => getContentItem(type, slug))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getAllTags(type: ContentType) {
  return Array.from(new Set(getAllContent(type).flatMap((item) => item.tags))).sort();
}
