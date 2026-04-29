import Link from "next/link";
import { getAllArticles } from "@/lib/blog";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";

const readingAreas = [
  "Diffusion Models",
  "Autoregressive Language Models",
  "Generative AI",
  "AI Safety and Alignment",
  "Machine Learning Theory",
  "Evaluation and Benchmarking",
  "Reinforcement Learning for AI Systems",
  "Representation Learning",
];

const socialLinks = [
  { label: "Email", href: "mailto:preetilamba959@gmail.com" },
  { label: "GitHub", href: "https://github.com/preetilamba" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=zEM2csUAAAAJ&hl=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/preeti-lamba-68771016a/" },
];

export default function Home() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">

      {/* ── Hero ── */}
      <section className="pt-20 pb-20 border-b border-stone-200/60">
        <div className="flex flex-col gap-6">
          {/* Monogram */}
          <div
            className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 font-semibold text-lg select-none"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            aria-hidden="true"
          >
            P
          </div>

          <div>
            <h1
              className="text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Preeti Lamba
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-2">
              PhD researcher at IIIT Hyderabad, interested in machine learning, diffusion models, AI safety, alignment, and the mathematics of AI.
            </p>
            <p className="text-stone-400 leading-relaxed max-w-xl">
              I write about ML concepts, paper explanations, mathematical foundations, and lessons from reading and doing research.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-colors duration-200"
            >
              Read Articles
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center px-4 py-2 border border-stone-200 text-stone-600 text-sm font-medium rounded-full hover:border-stone-300 hover:text-stone-900 bg-white transition-colors duration-200"
            >
              Research Interests
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-stone-200 text-stone-600 text-sm font-medium rounded-full hover:border-stone-300 hover:text-stone-900 bg-white transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-14 border-b border-stone-200/60">
        <SectionHeading
          title="Areas I Think About"
          subtitle="Broad topics I read, write, and think about."
        />
        <div className="flex flex-wrap gap-2">
          {readingAreas.map((area) => (
            <span
              key={area}
              className="text-sm px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-150 cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ── Recent Articles ── */}
      {articles.length > 0 && (
        <section className="py-14 border-b border-stone-200/60">
          <div className="flex items-baseline justify-between mb-2">
            <SectionHeading title="Recent Articles" />
            <Link
              href="/blog"
              className="text-xs text-indigo-500 hover:text-indigo-700 font-medium transition-colors duration-150 mb-7"
            >
              All articles →
            </Link>
          </div>
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
        </section>
      )}

      {/* ── Contact ── */}
      <section className="py-14">
        <SectionHeading
          title="Get in Touch"
          subtitle="Open to discussions about research, ideas, and ML topics."
        />
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full border border-stone-200 text-stone-600 bg-white hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
