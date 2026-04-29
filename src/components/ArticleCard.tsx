import Link from "next/link";
import Tag from "./Tag";

interface ArticleCardProps {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
  readingTime: string;
}

export default function ArticleCard({
  title,
  date,
  summary,
  tags,
  slug,
  readingTime,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group py-7 border-b border-stone-200/70 last:border-b-0">
      <div className="flex items-center gap-2.5 text-[11px] text-stone-400 mb-2.5 tracking-wide uppercase">
        <time dateTime={date}>{formattedDate}</time>
        <span className="text-stone-300">·</span>
        <span>{readingTime}</span>
      </div>
      <h3
        className="text-lg font-semibold text-stone-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors duration-150"
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        <Link href={`/blog/${slug}`} className="outline-none focus-visible:underline">
          {title}
        </Link>
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-3.5">{summary}</p>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-xs text-indigo-500 hover:text-indigo-700 font-medium transition-colors duration-150 shrink-0"
        >
          Read →
        </Link>
      </div>
    </article>
  );
}
