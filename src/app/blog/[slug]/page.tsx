import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllArticles, getArticleBySlug } from "@/lib/blog";
import Tag from "@/components/Tag";
import {
  ForwardReverseDiffusion,
  AutoregressiveGeneration,
  DiffusionVsAR,
  RLHFLoop,
  BenchmarkCycle,
  PaperReadingPasses,
} from "@/components/diagrams";
import NextRead from "@/components/NextRead";
import MyView from "@/components/MyView";

const mdxComponents = {
  ForwardReverseDiffusion,
  AutoregressiveGeneration,
  DiffusionVsAR,
  RLHFLoop,
  BenchmarkCycle,
  PaperReadingPasses,
  NextRead,
  MyView,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.frontmatter.title} — Preeti Lamba`,
    description: article.frontmatter.summary,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.summary,
      type: "article",
      publishedTime: article.frontmatter.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">

      {/* Back link */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150 uppercase tracking-widest font-medium"
        >
          ← Articles
        </Link>
      </div>

      {/* Article header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-400 mb-5 uppercase tracking-widest">
          <time dateTime={article.frontmatter.date}>{formattedDate}</time>
          <span className="text-stone-300">·</span>
          <span>{article.readingTime}</span>
        </div>

        <h1
          className="text-4xl font-bold text-stone-900 leading-[1.2] mb-5 tracking-tight"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {article.frontmatter.title}
        </h1>

        <p
          className="text-lg text-stone-500 leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic" }}
        >
          {article.frontmatter.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {article.frontmatter.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </header>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-12">
        <div className="h-px flex-1 bg-stone-200" />
        <div className="w-1 h-1 rounded-full bg-indigo-300" />
        <div className="h-px flex-1 bg-stone-200" />
      </div>

      {/* Article body */}
      <article className="prose">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>

      {/* Footer nav */}
      <div className="mt-20 pt-8 border-t border-stone-200/70 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150 uppercase tracking-widest font-medium"
        >
          ← All Articles
        </Link>
        <a
          href="#top"
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150 uppercase tracking-widest font-medium"
        >
          Back to top ↑
        </a>
      </div>

    </div>
  );
}
