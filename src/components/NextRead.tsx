interface NextReadProps {
  slug: string;
  title: string;
}

export default function NextRead({ slug, title }: NextReadProps) {
  return (
    <div className="my-10 not-prose">
      <a
        href={`/blog/${slug}`}
        className="flex items-center justify-between gap-4 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-150 group"
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400 mb-1">
            Next read
          </p>
          <p className="text-sm font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors">
            {title}
          </p>
        </div>
        <span className="shrink-0 text-indigo-400 group-hover:text-indigo-600 transition-colors text-lg">
          →
        </span>
      </a>
    </div>
  );
}
