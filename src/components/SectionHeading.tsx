interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-7">
      <h2
        className="text-xl font-semibold text-stone-900 tracking-tight"
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-stone-400 text-sm">{subtitle}</p>
      )}
    </div>
  );
}
