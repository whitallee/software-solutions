"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/meetings", label: "meetings" },
  { href: "/resources", label: "resources" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-widest shrink-0"
        >
          <span className="text-red-light">▶</span>
          <span className="text-red">SSI</span>
        </Link>

        <div className="flex items-center">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "px-3 py-1 text-xs tracking-wide transition-colors",
                  isActive
                    ? "text-red-light border-b border-red"
                    : "text-muted hover:text-text",
                ].join(" ")}
              >
                {isActive && <span className="text-red mr-1">&gt;</span>}
                {label}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto hidden sm:flex items-center gap-1 text-xs text-muted">
          <span className="text-red text-xs">■</span>
          <span>software solutions initiative</span>
        </div>
      </div>
    </nav>
  );
}
