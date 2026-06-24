import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section className="px-6 md:px-16 py-24" id="contact">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">/ contact</h2>
        <div className="h-px bg-border flex-1" />
      </div>
      <div className="max-w-2xl">
        <p className="text-lg text-text-muted mb-8">
          Want to build something or just talk shop, reach out. My inbox is always open.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 font-bold hover:bg-accent/10 transition-colors"
          >
            <Mail size={18} />
            Say hi!
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text px-6 py-3 font-bold hover:border-accent hover:text-accent transition-colors"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text px-6 py-3 font-bold hover:border-accent hover:text-accent transition-colors"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href={profile.resumeHref}
            className="inline-flex items-center gap-2 border border-border text-text px-6 py-3 font-bold hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
