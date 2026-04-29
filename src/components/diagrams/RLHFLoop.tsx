export default function RLHFLoop() {
  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-6">
          RLHF — Reinforcement Learning from Human Feedback
        </p>

        {/* Main loop */}
        <div className="flex flex-col gap-0 items-stretch">

          {/* Row 1: Model → Output */}
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-xl border-2 border-indigo-200 bg-indigo-50 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-indigo-700">Language Model</p>
              <p className="text-[10px] text-indigo-400 mt-0.5">pre-trained base model</p>
            </div>

            <div className="flex flex-col items-center shrink-0">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M4 10h28M26 5l8 5-8 5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[9px] text-stone-400 mt-0.5">generates</span>
            </div>

            <div className="flex-1 rounded-xl border border-stone-200 bg-white px-4 py-3 text-center">
              <p className="text-xs font-semibold text-stone-700">Model Output</p>
              <p className="text-[10px] text-stone-400 mt-0.5">responses, text, decisions</p>
            </div>
          </div>

          {/* Connector down right */}
          <div className="flex justify-end pr-[calc(50%-20px)]">
            <div className="flex flex-col items-center">
              <div className="w-px h-5 bg-stone-200" />
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M7 0v6M3 3l4 4 4-4" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Row 2: Human rates */}
          <div className="flex justify-end">
            <div className="w-full sm:w-1/2 rounded-xl border border-stone-200 bg-amber-50 border-amber-100 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-amber-800">Human Raters</p>
              <p className="text-[10px] text-amber-600 mt-0.5">compare & rank model outputs</p>
            </div>
          </div>

          {/* Connector down right */}
          <div className="flex justify-end pr-[calc(50%-20px)]">
            <div className="flex flex-col items-center">
              <div className="w-px h-5 bg-stone-200" />
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M7 0v6M3 3l4 4 4-4" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Row 3: Reward model */}
          <div className="flex justify-end">
            <div className="w-full sm:w-1/2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-emerald-700">Reward Model</p>
              <p className="text-[10px] text-emerald-500 mt-0.5">trained to predict human preference scores</p>
            </div>
          </div>

          {/* Connector back left */}
          <div className="flex justify-end pr-[calc(50%-20px)]">
            <div className="flex flex-col items-center">
              <div className="w-px h-5 bg-stone-200" />
            </div>
          </div>

          {/* Row 4: RL Update — full width with back arrow hint */}
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-xl border border-stone-200 bg-white px-4 py-3 text-center">
              <p className="text-xs font-semibold text-stone-700">RL Fine-tuning</p>
              <p className="text-[10px] text-stone-400 mt-0.5">model optimised to maximise reward signal</p>
            </div>

            <div className="flex flex-col items-center shrink-0">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M36 10H8M14 5L6 10l8 5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[9px] text-stone-400 mt-0.5">updates</span>
            </div>

            <div className="flex-1 rounded-xl border-2 border-indigo-200 bg-indigo-50 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-indigo-700">Aligned Model</p>
              <p className="text-[10px] text-indigo-400 mt-0.5">repeat loop to refine further</p>
            </div>
          </div>

        </div>

        {/* Key insight */}
        <div className="mt-6 rounded-lg bg-stone-100 border border-stone-200 px-4 py-3">
          <p className="text-[11px] text-stone-600">
            <span className="font-semibold">Key idea:</span> Human feedback is expensive to collect at every step, so a reward model is trained to approximate human preferences — making the loop scalable.
          </p>
        </div>
      </div>
      <figcaption className="text-center text-[11px] text-stone-400 mt-2.5 leading-relaxed">
        The RLHF pipeline: human preferences train a reward model, which then guides reinforcement learning to align the language model.
      </figcaption>
    </figure>
  );
}
