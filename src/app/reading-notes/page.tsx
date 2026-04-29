import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Reading Notes — Preeti Lamba",
  description: "Notes and summaries from papers, books, and resources I have read in ML and AI.",
};

const paperNotes = [
  {
    title: "Denoising Diffusion Probabilistic Models (Ho et al., 2020)",
    area: "Diffusion Models",
    summary:
      "The paper that brought diffusion models to wide attention in the deep learning community. Establishes the DDPM framework: forward noising process, reverse denoising network, and the simplified training objective. The connection to score matching and the importance of the noise schedule are key themes.",
    tags: ["Diffusion Models", "Generative Models"],
    link: "#",
  },
  {
    title: "Attention Is All You Need (Vaswani et al., 2017)",
    area: "Language Models",
    summary:
      "Introduced the transformer architecture. Replaced recurrence with self-attention, enabling parallelism during training and strong modeling of long-range dependencies. The foundation of modern large language models.",
    tags: ["Transformers", "Language Models", "Architecture"],
    link: "#",
  },
  {
    title: "Language Models are Few-Shot Learners (Brown et al., 2020)",
    area: "Language Models",
    summary:
      "Introduced GPT-3 and demonstrated that large autoregressive language models can perform a wide range of tasks from just a few in-context examples. Sparked the study of in-context learning, prompt engineering, and emergent capabilities.",
    tags: ["LLMs", "In-Context Learning", "Scaling"],
    link: "#",
  },
  {
    title: "Training Language Models to Follow Instructions (Ouyang et al., 2022)",
    area: "AI Safety and Alignment",
    summary:
      "Introduced InstructGPT and RLHF for language models. Key finding: models trained to follow instructions are preferred by humans despite being smaller than base models. Established RLHF as a standard alignment technique.",
    tags: ["RLHF", "Alignment", "Instruction Following"],
    link: "#",
  },
  {
    title: "Scaling Laws for Neural Language Models (Kaplan et al., 2020)",
    area: "Machine Learning Theory",
    summary:
      "Established empirical scaling laws relating model size, compute, and data to performance. Found that performance follows power laws and that compute-optimal training involves scaling model size and data together. Influenced the design of most subsequent large model training runs.",
    tags: ["Scaling Laws", "LLMs", "Theory"],
    link: "#",
  },
  {
    title: "Score-Based Generative Modeling (Song & Ermon, 2020)",
    area: "Diffusion Models",
    summary:
      "Unified diffusion-style generative modeling under the framework of score matching — learning to estimate the gradient of the data log-density. The score function perspective provides a clean theoretical view of what diffusion models are learning.",
    tags: ["Diffusion Models", "Score Matching", "Theory"],
    link: "#",
  },
];

export default function ReadingNotesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12 pb-10 border-b border-stone-200/60">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-3">Notes</p>
        <h1
          className="text-4xl font-bold text-stone-900 tracking-tight mb-4"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Reading Notes
        </h1>
        <p className="text-stone-500 leading-relaxed max-w-lg">
          Short notes and summaries from papers I have read across ML and AI. These are not
          comprehensive reviews — they are concise takes on the key ideas and why they matter.
        </p>
      </header>

      <section className="mb-12">
        <SectionHeading
          title="Paper Notes"
          subtitle="Key ideas from influential and recent papers."
        />
        <div className="space-y-6">
          {paperNotes.map((note) => (
            <div key={note.title} className="border-b border-stone-100 pb-6 last:border-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-base font-semibold text-stone-800 leading-snug">{note.title}</h3>
              </div>
              <p className="text-xs text-stone-400 mb-2">{note.area}</p>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">{note.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {note.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-stone-400">
        More notes added as I read. Links to full articles where available.
      </p>
    </div>
  );
}
