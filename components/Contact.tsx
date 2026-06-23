import { profile } from "@/lib/data";

const LINKS = [
  { label: "EMAIL", href: `mailto:${profile.email}` },
  { label: "GITHUB", href: profile.github },
  { label: "LINKEDIN", href: profile.linkedin },
  { label: "RESUME", href: profile.resumeHref },
];

export default function Contact() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-32" id="contact">
      <div className="double-rule border-primary mb-12 pb-2">
        <h3 className="font-mono text-body-md font-bold text-primary uppercase">
          CONTACT // OPEN_CHANNEL
        </h3>
      </div>
      <p className="font-display text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface leading-tight mb-10 max-w-2xl">
        Want to build something or just talk shop. Reach out.
      </p>
      <div className="flex flex-wrap gap-4">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-mono text-data-mono uppercase border border-outline px-6 py-3 hover:bg-primary hover:text-white transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
