import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Resources — Preeti Lamba",
  description:
    "A curated list of learning resources for machine learning, AI safety, and generative models.",
};

const sections = [
  {
    title: "Getting Started with Machine Learning",
    items: [
      {
        title: "Deep Learning (Goodfellow, Bengio, Courville)",
        description: "The standard textbook for foundations of deep learning. Dense but comprehensive.",
        link: "#",
        type: "Book",
      },
      {
        title: "CS231n: Convolutional Neural Networks for Visual Recognition",
        description: "Stanford course with excellent lecture notes on deep learning fundamentals.",
        link: "#",
        type: "Course",
      },
      {
        title: "The Annotated Transformer",
        description: "A detailed, annotated walkthrough of the original transformer paper in code.",
        link: "#",
        type: "Tutorial",
      },
    ],
  },
  {
    title: "Diffusion Models",
    items: [
      {
        title: "What are Diffusion Models? (Lilian Weng)",
        description: "Clear, well-illustrated blog post explaining diffusion models from first principles.",
        link: "#",
        type: "Blog",
      },
      {
        title: "Denoising Diffusion Probabilistic Models (Ho et al., 2020)",
        description: "The foundational DDPM paper. Essential reading for understanding modern diffusion models.",
        link: "#",
        type: "Paper",
      },
      {
        title: "Score-Based Generative Modeling through SDEs (Song et al., 2021)",
        description: "Unifying framework for diffusion models using stochastic differential equations.",
        link: "#",
        type: "Paper",
      },
    ],
  },
  {
    title: "Large Language Models",
    items: [
      {
        title: "The Illustrated Transformer (Jay Alammar)",
        description: "Visual explanation of transformer attention and architecture. Great for intuition.",
        link: "#",
        type: "Blog",
      },
      {
        title: "Andrej Karpathy — Let's build GPT from scratch",
        description: "Step-by-step video building a GPT from scratch. Highly recommended for deep understanding.",
        link: "#",
        type: "Video",
      },
      {
        title: "Language Models are Few-Shot Learners (GPT-3, Brown et al., 2020)",
        description: "Introduced in-context learning and demonstrated the breadth of LLM capabilities at scale.",
        link: "#",
        type: "Paper",
      },
    ],
  },
  {
    title: "AI Safety and Alignment",
    items: [
      {
        title: "AI Safety Fundamentals (BlueDot Impact)",
        description: "Free introductory curriculum on AI safety and alignment. Good starting point.",
        link: "#",
        type: "Course",
      },
      {
        title: "A Technical Introduction to AI Safety (Anthropic)",
        description: "Overview of technical AI safety research areas and open problems.",
        link: "#",
        type: "Blog",
      },
      {
        title: "Concrete Problems in AI Safety (Amodei et al., 2016)",
        description: "Foundational paper framing practical safety research problems. Still highly relevant.",
        link: "#",
        type: "Paper",
      },
    ],
  },
  {
    title: "Research Skills",
    items: [
      {
        title: "How to Read a Paper (Keshav, 2007)",
        description: "Classic three-pass method for reading academic papers efficiently.",
        link: "#",
        type: "Paper",
      },
      {
        title: "Writing Your Thesis (Berry)",
        description: "Practical guide to academic writing for researchers.",
        link: "#",
        type: "Book",
      },
      {
        title: "You and Your Research (Hamming)",
        description: "Hamming's famous lecture on how to do important research. Worth reading repeatedly.",
        link: "#",
        type: "Talk",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  Book: "bg-amber-50 text-amber-700 border-amber-100",
  Course: "bg-blue-50 text-blue-700 border-blue-100",
  Blog: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Paper: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Video: "bg-rose-50 text-rose-700 border-rose-100",
  Tutorial: "bg-purple-50 text-purple-700 border-purple-100",
  Talk: "bg-orange-50 text-orange-700 border-orange-100",
};

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12 pb-10 border-b border-stone-200/60">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-3">Learning</p>
        <h1
          className="text-4xl font-bold text-stone-900 tracking-tight mb-4"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Resources
        </h1>
        <p className="text-stone-500 leading-relaxed max-w-lg">
          A curated list of learning resources I have found valuable across machine learning, AI
          safety, diffusion models, and research practice. Links are placeholders — update with
          real URLs before publishing.
        </p>
      </header>

      <div className="space-y-14">
        {sections.map((section) => (
          <section key={section.title}>
            <SectionHeading title={section.title} />
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span
                    className={`shrink-0 mt-0.5 text-xs font-medium px-2 py-0.5 h-fit rounded border ${
                      typeColors[item.type] ?? "bg-stone-50 text-stone-600 border-stone-200"
                    }`}
                  >
                    {item.type}
                  </span>
                  <div>
                    <a
                      href={item.link === "#" ? undefined : item.link}
                      aria-disabled={item.link === "#"}
                      className={
                        item.link === "#"
                          ? "text-sm font-medium text-stone-700 cursor-default"
                          : "text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                      }
                    >
                      {item.title}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
