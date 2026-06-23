import { profile } from "@/lib/data";

const LINKS = [
  { label: "EMAIL", href: `mailto:${profile.email}` },
  { label: "GITHUB", href: profile.github },
  { label: "LINKEDIN", href: profile.linkedin },
  { label: "RESUME", href: profile.resumeHref },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t-2 border-double border-outline w-full py-8 px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="font-mono text-label-micro text-on-tertiary-container uppercase">
          ©2026 RITUL RASHI // ALL_RIGHTS_RESERVED
        </div>
        <div className="flex gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-label-micro uppercase text-on-surface-variant hover:text-primary underline transition-opacity opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-on-surface-variant">
            CONNECTION: STABLE
          </span>
        </div>
      </div>
    </footer>
  );
}
