export default function DiffusionVsAR() {
  const arSteps = [
    { label: "Generate token 1", note: '"The"', active: true },
    { label: "Generate token 2", note: '"cat"', active: true },
    { label: "Generate token 3", note: '"sat"', active: true },
    { label: "Generate token 4", note: '"on"', active: false },
    { label: "Generate token 5", note: '"the mat"', active: false },
  ];

  const diffSteps = [
    { label: "Start: pure noise", note: "all positions simultaneously", active: false, noise: true },
    { label: "Denoising step 1", note: "rough global structure", active: false, noise: false },
    { label: "Denoising step 2", note: "refining all positions", active: false, noise: false },
    { label: "Denoising step 3", note: "adding local detail", active: false, noise: false },
    { label: "Final: clean text", note: "full sequence output", active: true, noise: false },
  ];

  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 sm:p-7 overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-[480px]">

          {/* Autoregressive */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1">
              Autoregressive
            </p>
            <p className="text-[10px] text-stone-400 mb-4">Sequential, left-to-right, one token at a time</p>
            <div className="space-y-2">
              {arSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      step.active
                        ? "bg-indigo-100 border border-indigo-300 text-indigo-600"
                        : "bg-stone-100 border border-stone-200 text-stone-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className={`flex-1 rounded-lg border px-3 py-2 ${
                    step.active
                      ? "bg-white border-indigo-200"
                      : "bg-stone-100/60 border-stone-200"
                  }`}>
                    <span className="text-[11px] font-medium text-stone-700">{step.label}</span>
                    <span className="ml-1.5 text-[10px] font-mono text-indigo-500">{step.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-amber-50 border border-amber-100 px-3 py-2">
              <p className="text-[10px] text-amber-700">
                <span className="font-semibold">No revision.</span> Each token is committed before the next is generated.
              </p>
            </div>
          </div>

          {/* Diffusion */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1">
              Diffusion
            </p>
            <p className="text-[10px] text-stone-400 mb-4">Iterative, whole-sequence refinement over many steps</p>
            <div className="space-y-2">
              {diffSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      step.active
                        ? "bg-indigo-100 border border-indigo-300 text-indigo-600"
                        : step.noise
                        ? "bg-stone-300 border border-stone-400 text-stone-600"
                        : "bg-stone-100 border border-stone-200 text-stone-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className={`flex-1 rounded-lg border px-3 py-2 ${
                    step.active
                      ? "bg-white border-indigo-200"
                      : step.noise
                      ? "bg-stone-200 border-stone-300"
                      : "bg-stone-100/60 border-stone-200"
                  }`}>
                    <span className="text-[11px] font-medium text-stone-700">{step.label}</span>
                    <span className="block text-[10px] text-stone-400 mt-0.5">{step.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-indigo-50 border border-indigo-100 px-3 py-2">
              <p className="text-[10px] text-indigo-700">
                <span className="font-semibold">Global coordination.</span> All positions are updated simultaneously at each step.
              </p>
            </div>
          </div>

        </div>
      </div>
      <figcaption className="text-center text-[11px] text-stone-400 mt-2.5 leading-relaxed">
        Autoregressive models generate sequentially, committing to each token before the next. Diffusion models refine the entire sequence at every step, allowing global coordination.
      </figcaption>
    </figure>
  );
}
