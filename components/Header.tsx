import { TerminalSquare } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
      <div className="flex items-center gap-4">
        <TerminalSquare className="text-primary" size={20} strokeWidth={1.5} />
        <h1 className="font-mono text-data-mono uppercase tracking-tighter font-bold text-primary">
          ARCH.SYS // PORTFOLIO
        </h1>
      </div>
      <nav className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-data-mono uppercase text-on-surface-variant hover:text-on-tertiary-container transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="font-mono text-label-micro text-on-primary-container hidden sm:block">
        STATUS: ACTIVE // ENCRYPTED
      </div>
    </header>
  );
}
