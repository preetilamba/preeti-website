export default function PaperReadingPasses() {
  const passes = [
    {
      number: "1",
      title: "Quick Scan",
      time: "5–10 min",
      reads: ["Title & abstract", "Introduction (first + last ¶)", "Section headings", "Conclusion"],
      goal: "Is this paper relevant and worth reading?",
      cls: "border-stone-200 bg-white",
      numCls: "bg-stone-100 text-stone-500 border-stone-200",
    },
    {
      number: "2",
      title: "Method Understanding",
      time: "30–60 min",
      reads: ["Introduction in full", "Method section carefully", "All figures & tables", "Related work (positioning)"],
      goal: "What is the model/method actually doing?",
      cls: "border-indigo-100 bg-indigo-50/50",
      numCls: "bg-indigo-100 text-indigo-600 border-indigo-200",
    },
    {
      number: "3",
      title: "Evidence Check",
      time: "30–60 min",
      reads: ["Experiments in full", "Baselines & metrics", "Ablation studies", "Appendix details"],
      goal: "Do the results actually support the claims?",
      cls: "border-emerald-100 bg-emerald-50/50",
      numCls: "bg-emerald-100 text-emerald-600 border-emerald-200",
    },
    {
      number: "4",
      title: "Critical Read",
      time: "20–30 min",
      reads: ["Limitations section", "Discussion", "Re-read claims vs. results", "Open questions"],
      goal: "What does this paper leave unresolved?",
      cls: "border-amber-100 bg-amber-50/50",
      numCls: "bg-amber-100 text-amber-600 border-amber-200",
    },
  ];

  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-6">
          The four-pass method for reading ML papers
        </p>

        <div className="space-y-3">
          {passes.map((pass, i) => (
            <div key={i} className={`rounded-xl border-2 p-4 ${pass.cls}`}>
              <div className="flex items-start gap-3">
                {/* Number badge */}
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${pass.numCls}`}>
                  {pass.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-stone-800">{pass.title}</span>
                    <span className="text-[10px] text-stone-400 font-medium">{pass.time}</span>
                  </div>
                  <p className="text-[10px] text-stone-500 mt-0.5 mb-2 italic">&ldquo;{pass.goal}&rdquo;</p>
                  <div className="flex flex-wrap gap-1.5">
                    {pass.reads.map((r) => (
                      <span key={r} className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 border border-stone-200 text-stone-600">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < passes.length - 1 && (
                <div className="mt-3 flex justify-center">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M7 2v10M3 9l4 5 4-5" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg bg-stone-100 border border-stone-200 px-4 py-3">
          <p className="text-[11px] text-stone-600">
            <span className="font-semibold">Tip:</span> Most papers only need Pass 1. Stop early when a paper is not relevant — your time is the constraint.
          </p>
        </div>
      </div>
      <figcaption className="text-center text-[11px] text-stone-400 mt-2.5 leading-relaxed">
        Match depth of reading to how important the paper turns out to be. Start shallow and go deeper only when warranted.
      </figcaption>
    </figure>
  );
}
