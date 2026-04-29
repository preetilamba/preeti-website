"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/blog" },
  { label: "Research Interests", href: "/research" },
  { label: "Reading Notes", href: "/reading-notes" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-stone-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo / name */}
        <Link
          href="/"
          className="text-stone-900 font-semibold text-sm tracking-tight hover:text-indigo-600 transition-colors duration-200"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Preeti Lamba
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors duration-150 ${
                pathname === link.href
                  ? "text-indigo-600 font-medium"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] px-3 py-1 rounded-full border border-stone-200 text-stone-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors duration-150"
          >
            CV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-stone-500 hover:text-stone-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-stone-100 bg-white/95 backdrop-blur-md px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm py-2 px-2 rounded-md transition-colors ${
                pathname === link.href
                  ? "text-indigo-600 font-medium bg-indigo-50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2 px-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
          >
            CV
          </a>
        </nav>
      )}
    </header>
  );
}
