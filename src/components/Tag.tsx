interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 border border-stone-200/80 tracking-wide">
      {label}
    </span>
  );
}
