export default function AutoregressiveGeneration() {
  const steps = [
    {
      context: ["The"],
      predicted: "cat",
      prob: 'P("cat" | "The") = 0.31',
    },
    {
      context: ["The", "cat"],
      predicted: "sat",
      prob: 'P("sat" | "The cat") = 0.42',
    },
    {
      context: ["The", "cat", "sat"],
      predicted: "on",
      prob: 'P("on" | "The cat sat") = 0.67',
    },
    {
      context: ["The", "cat", "sat", "on"],
      predicted: "the",
      prob: 'P("the" | ...) = 0.71',
    },
  ];

  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-5">
          Autoregressive generation — one token at a time
        </p>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              {/* Step number */}
              <span className="text-[10px] font-semibold text-stone-300 w-10 shrink-0">
                Step {i + 1}
              </span>

              {/* Context tokens */}
              <div className="flex items-center gap-1 flex-wrap">
                {step.context.map((token, j) => (
                  <span
                    key={j}
                    className={`px-2 py-1 rounded text-xs font-mono font-medium border ${
                      j < step.context.length - 1
                        ? "bg-white border-stone-200 text-stone-500"
                        : "bg-indigo-50 border-indigo-200 text-indigo-600"
                    }`}
                  >
                    {token}
                  </span>
                ))}
              </div>

              {/* Arrow to model */}
              <svg width="32" height="14" viewBox="0 0 32 14" className="shrink-0 text-stone-300" fill="none">
                <path d="M2 7h24M22 3l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Model box */}
              <div className="bg-white border border-stone-200 rounded-lg px-3 py-1.5 shrink-0">
                <span className="text-[11px] font-medium text-stone-500">Model</span>
              </div>

              {/* Arrow to prediction */}
              <svg width="32" height="14" viewBox="0 0 32 14" className="shrink-0 text-stone-300" fill="none">
                <path d="M2 7h24M22 3l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Predicted token */}
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0">
                &ldquo;{step.predicted}&rdquo;
              </span>

              {/* Probability note */}
              <span className="text-[10px] text-stone-400 font-mono ml-1 hidden sm:inline">{step.prob}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-stone-200 flex items-center gap-3 flex-wrap text-[10px] text-stone-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-white border border-stone-200 inline-block" />
            <span>Previous tokens (context)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-indigo-50 border border-indigo-200 inline-block" />
            <span>Most recent token</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-200 inline-block" />
            <span>Newly generated token</span>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-[11px] text-stone-400 mt-2.5 leading-relaxed">
        At each step, the model sees all previous tokens and outputs a probability distribution over the vocabulary. One token is sampled and appended. The process repeats.
      </figcaption>
    </figure>
  );
}
