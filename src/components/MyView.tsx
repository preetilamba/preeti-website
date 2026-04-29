interface MyViewProps {
  children: React.ReactNode;
}

export default function MyView({ children }: MyViewProps) {
  return (
    <div className="my-8 not-prose rounded-xl border border-indigo-100 bg-indigo-50/50 px-5 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400 mb-2">
        My view
      </p>
      <div className="text-sm text-indigo-900 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
