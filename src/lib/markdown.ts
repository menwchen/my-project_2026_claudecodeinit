import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface PortfolioMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export function getPosts(): PostMeta[] {
  const dir = path.join(contentDirectory, "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      tags: data.tags || [],
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, "blog", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      tags: data.tags || [],
    },
    content: processed.toString(),
  };
}

export function getPortfolioItems(): PortfolioMeta[] {
  const dir = path.join(contentDirectory, "portfolio");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      tags: data.tags || [],
      link: data.link || undefined,
    };
  });
}
