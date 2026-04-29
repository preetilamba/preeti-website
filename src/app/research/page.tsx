import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Research Interests — Preeti Lamba",
  description:
    "Areas of machine learning and AI that I read about, think about, and write about.",
};

const areas = [
  {
    title: "Diffusion Models",
    description:
      "Diffusion models generate data by learning to reverse a noise-corruption process. This area explores score-based generative modeling, denoising diffusion probabilistic models (DDPMs), flow matching, and the application of these ideas to images, audio, and language. Open questions include scaling, inference efficiency, and the relationship between the generation trajectory and output properties.",
    openQuestions: [
      "How do diffusion language models compare to autoregressive models at scale?",
      "What inductive biases does iterative refinement introduce?",
      "Can the generation trajectory be monitored or steered in useful ways?",
    ],
  },
  {
    title: "Autoregressive Language Models",
    description:
      "Autoregressive models generate text by predicting the next token given all previous tokens. This includes transformer-based large language models (LLMs), training dynamics, in-context learning, and emergent capabilities. Understanding why these models work so well — and where they fail — is one of the central questions in ML research today.",
    openQuestions: [
      "What determines the emergence of new capabilities with scale?",
      "How do models represent and retrieve factual knowledge?",
      "What are the limits of in-context learning?",
    ],
  },
  {
    title: "AI Safety and Alignment",
    description:
      "AI safety research asks how we can build AI systems that behave reliably and in accordance with human values. Alignment covers the problem of specifying what we want AI systems to do and ensuring they do it. This area includes RLHF, Constitutional AI, interpretability research, robustness, and evaluation of safety properties.",
    openQuestions: [
      "How do we evaluate whether a model is actually aligned, not just appearing aligned?",
      "What makes safety techniques robust to distribution shift?",
      "How should safety properties be formally specified for generative models?",
    ],
  },
  {
    title: "Evaluation and Benchmarking",
    description:
      "Evaluating ML models is harder than it looks. Benchmark saturation, dataset contamination, and metric misalignment are common problems. This area studies how to design benchmarks that reliably measure capability, how to evaluate generalization, and how to interpret evaluation results honestly.",
    openQuestions: [
      "How do we know when a benchmark is saturated or contaminated?",
      "What benchmarks best predict real-world model usefulness?",
      "How do we evaluate properties like safety and alignment rigorously?",
    ],
  },
  {
    title: "Machine Learning Theory",
    description:
      "ML theory studies the mathematical foundations of learning — generalization bounds, optimization landscapes, expressivity of neural networks, and the relationship between architecture choices and learning dynamics. Recent work studies phenomena like double descent, grokking, and the implicit biases of gradient-based optimizers.",
    openQuestions: [
      "Why do overparameterized networks generalize well?",
      "What determines the implicit biases of different optimizers?",
      "How does the architecture of a model shape what it can and cannot learn?",
    ],
  },
  {
    title: "Reinforcement Learning for AI Systems",
    description:
      "RL has become an important tool for shaping the behavior of large generative models, through techniques like RLHF (Reinforcement Learning from Human Feedback) and related methods. This area studies how reward models work, what RL objectives optimize for in language models, and what failure modes arise.",
    openQuestions: [
      "What does RL actually optimize in language model fine-tuning?",
      "How robust are reward models to distributional shift?",
      "When does RL alignment degrade robustness?",
    ],
  },
  {
    title: "Representation Learning",
    description:
      "Representation learning studies how models encode information about the world in their internal representations. This includes self-supervised learning, contrastive methods, and understanding what geometry in representation space corresponds to. Rich representations are foundational to transfer learning, few-shot generalization, and interpretability.",
    openQuestions: [
      "What structure in representations is most useful for downstream tasks?",
      "How do representations change during fine-tuning?",
      "Can we use representation geometry to understand model behavior?",
    ],
  },
  {
    title: "Generative AI",
    description:
      "Generative AI is the broad field of building models that can produce high-quality, novel content — text, images, code, audio, video. Recent work studies multi-modal generation, instruction following, controllability, and the social and scientific implications of increasingly capable generative systems.",
    openQuestions: [
      "How do we control generative models precisely without retraining?",
      "What are the limits of instruction following in current systems?",
      "How should we evaluate the quality of generated content across modalities?",
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-14 pb-10 border-b border-stone-200/60">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-3">Focus</p>
        <h1
          className="text-4xl font-bold text-stone-900 tracking-tight mb-4"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Research Interests
        </h1>
        <p className="text-stone-500 leading-relaxed max-w-lg">
          I am broadly interested in machine learning, generative models, language modeling, AI
          safety, and evaluation. This page collects areas I read about, write about, and think are
          important for the future of AI research.
        </p>
      </header>

      <div className="space-y-12">
        {areas.map((area) => (
          <section key={area.title}>
            <SectionHeading title={area.title} />
            <p className="text-stone-600 leading-relaxed mb-4 text-sm">{area.description}</p>
            <div>
              <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">Open questions</p>
              <ul className="space-y-1">
                {area.openQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-stone-500 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-300 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
