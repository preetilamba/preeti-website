export default function ForwardReverseDiffusion() {
  const forwardSteps = [
    { line1: "Clean", line2: "Text", cls: "bg-indigo-50 border-indigo-300 text-indigo-700" },
    { line1: "Lightly", line2: "Noisy", cls: "bg-stone-100 border-stone-300 text-stone-600" },
    { line1: "Noisier", line2: "", cls: "bg-stone-200 border-stone-300 text-stone-600" },
    { line1: "Very", line2: "Noisy", cls: "bg-stone-300 border-stone-400 text-stone-700" },
    { line1: "Pure", line2: "Noise", cls: "bg-stone-500 border-stone-600 text-white" },
  ];

  const reverseSteps = [
    { line1: "Pure", line2: "Noise", cls: "bg-stone-500 border-stone-600 text-white" },
    { line1: "Rough", line2: "Draft", cls: "bg-stone-300 border-stone-400 text-stone-700" },
    { line1: "Cleaner", line2: "", cls: "bg-stone-200 border-stone-300 text-stone-600" },
    { line1: "Almost", line2: "Clean", cls: "bg-stone-100 border-stone-300 text-stone-600" },
    { line1: "Clean", line2: "Text", cls: "bg-indigo-50 border-indigo-300 text-indigo-700" },
  ];

  const Row = ({ steps, label, sublabel }: { steps: typeof forwardSteps; label: string; sublabel: string }) => (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">{label}</span>
        <span className="text-[10px] text-stone-300">— {sublabel}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-1.5 flex-1 min-w-0">
            <div className={`flex-1 rounded-lg border-2 py-3 px-1 text-center text-[11px] font-semibold leading-tight ${step.cls}`}>
              <span className="block">{step.line1}</span>
              {step.line2 && <span className="block">{step.line2}</span>}
            </div>
            {i < steps.length - 1 && (
              <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0 text-stone-400" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 sm:p-7 overflow-x-auto">
        <div className="min-w-[480px]">
          <Row steps={forwardSteps} label="Forward process" sublabel="adding noise (fixed)" />
          <Row steps={reverseSteps} label="Reverse process" sublabel="removing noise (learned by model)" />
        </div>
      </div>
      <figcaption className="text-center text-[11px] text-stone-400 mt-2.5 leading-relaxed">
        The forward process gradually corrupts clean data into pure noise. The reverse process — learned by the model — iteratively denoises, enabling generation of new samples.
      </figcaption>
    </figure>
  );
}
