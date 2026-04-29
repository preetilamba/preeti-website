import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Preeti Lamba",
  description:
    "PhD researcher at IIIT Hyderabad working on machine learning, diffusion models, AI safety, and alignment. Also writes about mathematics for AI/ML.",
};

const researchInterests = [
  "Diffusion Models",
  "Autoregressive Language Models",
  "Generative AI",
  "AI Safety and Alignment",
  "Machine Learning Theory",
  "Evaluation and Benchmarking",
  "Reinforcement Learning for AI Systems",
  "Representation Learning",
];

const mathTopics = [
  "Linear Algebra",
  "Probability Theory",
  "Optimization",
  "Calculus",
  "Statistics",
  "Information Theory",
  "Mathematical Thinking for ML",
];

const education = [
  {
    degree: "PhD, Computer Science",
    institution: "IIIT Hyderabad",
    detail: "Ongoing",
  },
  {
    degree: "MSc Mathematics",
    institution: "IIT Delhi",
    detail: "",
  },
  {
    degree: "BSc Mathematics Honours",
    institution: "Miranda House, University of Delhi",
    detail: "",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

      {/* ── Header ── */}
      <header className="mb-14 pb-10 border-b border-stone-200/60">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-3">About</p>
        <h1
          className="text-4xl font-bold text-stone-900 tracking-tight mb-3"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Preeti Lamba
        </h1>
        <p className="text-stone-500 text-sm tracking-wide">
          PhD Researcher · IIIT Hyderabad
        </p>
      </header>

      {/* ── 1. Introduction ── */}
      <section className="mb-14">
        <SectionHeading title="Introduction" />
        <div className="prose">
          <p>
            I am Preeti Lamba, a PhD researcher at IIIT Hyderabad. My interests lie broadly in
            machine learning, generative AI, language models, diffusion models, AI safety,
            alignment, evaluation, and the mathematical foundations of AI.
          </p>
          <p>
            I am drawn to questions about how modern generative systems work — what makes them
            capable, where they are unreliable, and what theoretical and empirical tools we need
            to understand them better. I am interested both in the technical details of how these
            systems are built and in the broader questions of how to make them safe and trustworthy.
          </p>
          <p>
            My background is in mathematics, which shapes how I approach machine learning: I care
            about understanding things precisely, tracing ideas back to their foundations, and
            being honest about what is rigorously established versus what is an open question.
          </p>
        </div>
      </section>

      {/* ── 2. Education ── */}
      <section className="mb-14">
        <SectionHeading title="Education" />
        <div className="space-y-5">
          {education.map((item) => (
            <div key={item.degree} className="flex items-start gap-4">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" />
              <div>
                <p className="text-stone-800 font-medium text-sm">{item.degree}</p>
                <p className="text-stone-500 text-sm">{item.institution}</p>
                {item.detail && (
                  <p className="text-stone-400 text-xs mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Research and Writing Interests ── */}
      <section className="mb-14">
        <SectionHeading
          title="Research and Writing Interests"
          subtitle="Topics I read, think about, and write about."
        />
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((area) => (
            <span
              key={area}
              className="text-sm px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-150 cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ── 4. Mathematics for AI/ML ── */}
      <section className="mb-14">
        <SectionHeading
          title="Mathematics for AI/ML"
          subtitle="Making the mathematical foundations of machine learning clear and accessible."
        />
        <div className="prose mb-6">
          <p>
            I also write about mathematics relevant to AI and machine learning — the topics that
            come up repeatedly in research papers, textbooks, and engineering work, but are often
            taught in ways that are too abstract or not connected clearly enough to practice.
          </p>
          <p>
            My goal is to explain these ideas precisely but accessibly, for data scientists, ML
            and AI engineers, researchers, and students who want to understand the mathematics
            behind the methods they use.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {mathTopics.map((topic) => (
            <span
              key={topic}
              className="text-sm px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-150 cursor-default"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ── 5. Why this website exists ── */}
      <section className="mb-14">
        <SectionHeading title="Why This Website Exists" />
        <div className="prose">
          <p>
            This website is a place where I share articles, research notes, paper explanations,
            mathematical foundations, and reflections from my PhD journey.
          </p>
          <p>
            Writing is how I think. Explaining something clearly is the best test of whether I
            actually understand it — and when I cannot explain it clearly, that is usually a sign
            of a gap worth filling. I find it useful to do this in public, not because I always
            have the right answers, but because the discipline of writing for an audience forces
            precision.
          </p>
          <p>
            The content here spans technical ML articles, mathematical background, paper
            walkthroughs, and notes on the process of doing research. It is aimed at anyone
            curious about machine learning, generative AI, and the mathematics that underpins them
            — whether you are a student, a researcher, or an engineer building these systems.
          </p>
        </div>
      </section>

    </div>
  );
}
