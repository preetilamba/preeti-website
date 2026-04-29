import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface ArticleFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: string;
  slug: string;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.mdx$/, "");
    const rt = readingTime(content);

    return {
      frontmatter: {
        title: data.title ?? "",
        date: data.date ?? "",
        summary: data.summary ?? "",
        tags: data.tags ?? [],
        slug: data.slug ?? slug,
      },
      content,
      readingTime: rt.text,
      slug: data.slug ?? slug,
    };
  });

  return articles.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const fileSlug = data.slug ?? filename.replace(/\.mdx$/, "");

    if (fileSlug === slug) {
      const rt = readingTime(content);
      return {
        frontmatter: {
          title: data.title ?? "",
          date: data.date ?? "",
          summary: data.summary ?? "",
          tags: data.tags ?? [],
          slug: fileSlug,
        },
        content,
        readingTime: rt.text,
        slug: fileSlug,
      };
    }
  }

  return null;
}
