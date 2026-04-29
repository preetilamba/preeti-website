export default function BenchmarkCycle() {
  const pipeline = [
    {
      label: "Define Task",
      note: "What capability should we measure?",
      icon: "❓",
      cls: "bg-white border-stone-200",
    },
    {
      label: "Build Dataset",
      note: "Collect labeled examples and questions",
      icon: "📦",
      cls: "bg-white border-stone-200",
    },
    {
      label: "Train Models",
      note: "Optimise on the training distribution",
      icon: "⚙️",
      cls: "bg-white border-stone-200",
    },
    {
      label: "Score on Benchmark",
      note: "Measure accuracy, F1, perplexity, etc.",
      icon: "📊",
      cls: "bg-indigo-50 border-indigo-200",
    },
  ];

  const failures = [
    { label: "Benchmark Saturation", note: "All models score >95%. The benchmark no longer distinguishes ability.", cls: "bg-amber-50 border-amber-200 text-amber-800" },
    { label: "Dataset Contamination", note: "Training data includes benchmark examples. Score reflects memorisation, not generalisation.", cls: "bg-orange-50 border-orange-200 text-orange-800" },
    { label: "Metric Misalignment", note: "High BLEU or accuracy does not always mean the model is actually better.", cls: "bg-rose-50 border-rose-200 text-rose-800" },
    { label: "Goodhart's Law", note: "\"When a measure becomes a target, it ceases to be a good measure.\"", cls: "bg-red-50 border-red-200 text-red-800", quote: true },
  ];

  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 sm:p-7">

        {/* Pipeline */}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-5">
          Standard evaluation pipeline
        </p>
        <div className="flex items-start gap-1.5 flex-wrap sm:flex-nowrap mb-8">
          {pipeline.map((step, i) => (
            <div key={i} className="flex items-start gap-1.5 flex-1 min-w-[120px]">
              <div className={`flex-1 rounded-xl border-2 p-3 text-center ${step.cls}`}>
                <span className="text-lg block mb-1">{step.icon}</span>
                <p className="text-[11px] font-semibold text-stone-800">{step.label}</p>
                <p className="text-[10px] text-stone-500 mt-1 leading-snug">{step.note}</p>
              </div>
              {i < pipeline.length - 1 && (
                <div className="flex items-center mt-6 shrink-0">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                    <path d="M2 7h12M10 3l6 4-6 4" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arrow down to failures */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center gap-1 text-[10px] text-stone-400">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M7 2v14M3 11l4 6 4-6" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Common failure modes</span>
          </div>
        </div>

        {/* Failure modes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {failures.map((f, i) => (
            <div key={i} className={`rounded-lg border px-4 py-3 ${f.cls}`}>
              <p className="text-[11px] font-semibold mb-1">{f.label}</p>
              <p className={`text-[10px] leading-relaxed ${f.quote ? "italic" : ""}`}>{f.note}</p>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-center text-[11px] text-stone-400 mt-2.5 leading-relaxed">
        The standard evaluation pipeline looks straightforward, but benchmark scores can mislead due to saturation, contamination, metric misalignment, and Goodhart&apos;s Law.
      </figcaption>
    </figure>
  );
}
