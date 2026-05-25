"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/meetings", label: "meetings" },
  { href: "/resources", label: "resources" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-widest shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="text-red-light">▶</span>
          <span className="text-red">SSI</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center ml-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                "px-3 py-1 text-xs tracking-wide transition-colors",
                isActive(href)
                  ? "text-red-light border-b border-red"
                  : "text-muted hover:text-text",
              ].join(" ")}
            >
              {isActive(href) && <span className="text-red mr-1">&gt;</span>}
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop tagline */}
        <div className="ml-auto hidden sm:flex items-center gap-1 text-xs text-muted">
          <span className="text-red text-xs">■</span>
          <span>software solutions initiative</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto sm:hidden text-muted hover:text-text transition-colors p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <span className="text-red text-lg leading-none">✕</span>
          ) : (
            <span className="text-lg leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-border bg-surface">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={[
                "flex items-center gap-2 px-6 py-4 text-sm border-b border-border transition-colors",
                isActive(href)
                  ? "text-red-light"
                  : "text-muted hover:text-text hover:bg-surface-2",
              ].join(" ")}
            >
              <span className={isActive(href) ? "text-red" : "text-border"}>
                &gt;
              </span>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
