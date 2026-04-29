import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact — Preeti Lamba",
  description: "Get in touch with Preeti Lamba.",
};

const contactLinks = [
  {
    label: "Email",
    value: "preetilamba959@gmail.com",
    href: "mailto:preetilamba959@gmail.com",
    description: "Best for research inquiries and collaboration.",
  },
  {
    label: "GitHub",
    value: "github.com/preetilamba",
    href: "https://github.com/preetilamba",
    description: "Code and experiment repositories.",
  },
  {
    label: "Google Scholar",
    value: "scholar.google.com",
    href: "https://scholar.google.com/citations?user=zEM2csUAAAAJ&hl=en",
    description: "Research papers and citations.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/preeti-lamba-68771016a",
    href: "https://www.linkedin.com/in/preeti-lamba-68771016a/",
    description: "Professional network.",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12 pb-10 border-b border-stone-200/60">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-3">Say hello</p>
        <h1
          className="text-4xl font-bold text-stone-900 tracking-tight mb-4"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Contact
        </h1>
        <p className="text-stone-500 leading-relaxed max-w-md">
          I am open to discussions about research, potential collaborations, paper reading groups,
          and ideas at the intersection of ML, safety, and generative models.
        </p>
      </header>

      <section>
        <SectionHeading title="Links" />
        <div className="divide-y divide-stone-100">
          {contactLinks.map((link) => (
            <div key={link.label} className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="text-sm font-medium text-stone-700 w-32 shrink-0">{link.label}</span>
              <div>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {link.value}
                </a>
                <p className="text-xs text-stone-400 mt-0.5">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
