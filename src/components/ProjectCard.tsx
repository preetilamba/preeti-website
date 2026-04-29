import Tag from "./Tag";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
  links?: ProjectLink[];
}

export default function ProjectCard({
  title,
  description,
  tags,
  status,
  links = [],
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-xl p-5 hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between gap-4 mb-2.5">
        <h3
          className="text-base font-semibold text-stone-900 leading-snug"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {title}
        </h3>
        <span className="shrink-0 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-500 border border-indigo-100 tracking-wide">
          {status}
        </span>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed mb-3.5">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3.5">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-3 border-t border-stone-100">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href === "#" ? undefined : link.href}
              aria-disabled={link.href === "#"}
              className={
                link.href === "#"
                  ? "text-xs text-stone-300 cursor-not-allowed"
                  : "text-xs font-medium text-indigo-500 hover:text-indigo-700 transition-colors duration-150"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
