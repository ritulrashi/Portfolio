import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email"
        className="text-text hover:text-accent transition-colors"
      >
        <Mail size={18} />
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-text hover:text-accent transition-colors"
      >
        <GithubIcon size={18} />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-text hover:text-accent transition-colors"
      >
        <LinkedinIcon size={18} />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-10 px-6 md:px-16 py-4">
        <a href="#home" className="font-bold text-text">
          Ritul Rashi
        </a>
        <nav className="hidden md:flex gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-text hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
