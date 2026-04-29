import type { Metadata } from "next";
import { getAllArticles } from "@/lib/blog";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Articles — Preeti Lamba",
  description:
    "Educational articles on machine learning, diffusion models, AI safety, and research practice.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12 pb-10 border-b border-stone-200/60">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-3">Writing</p>
        <h1
          className="text-4xl font-bold text-stone-900 tracking-tight mb-3"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Articles
        </h1>
        <p className="text-stone-500 leading-relaxed max-w-lg">
          Explanations of ML concepts, paper walkthroughs, and notes on doing research.
          Written to be clear and honest about what is understood and what remains open.
        </p>
      </header>

      {articles.length === 0 ? (
        <p className="text-stone-400 text-sm">No articles yet. Check back soon.</p>
      ) : (
        <div>
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.frontmatter.title}
              date={article.frontmatter.date}
              summary={article.frontmatter.summary}
              tags={article.frontmatter.tags}
              slug={article.slug}
              readingTime={article.readingTime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
