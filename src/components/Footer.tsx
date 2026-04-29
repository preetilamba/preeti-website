export default function Footer() {
  return (
    <footer className="border-t border-stone-200/70 mt-auto bg-white/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p
              className="text-sm font-medium text-stone-700"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Preeti Lamba
            </p>
            <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
              Writing about ML, AI safety, diffusion models, and research.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/preetilamba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=zEM2csUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150"
            >
              Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/preeti-lamba-68771016a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a
              href="mailto:preetilamba959@gmail.com"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-150"
            >
              Email
            </a>
          </div>
        </div>
        <p className="text-[11px] text-stone-300 mt-6">© 2026 Preeti Lamba</p>
      </div>
    </footer>
  );
}
