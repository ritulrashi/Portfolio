import { Database, Link2, Network, Server } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const ICONS: Record<string, typeof Server> = {
  "personal-server": Server,
  insightops: Network,
  "midas-core": Database,
  upicrypto: Link2,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = ICONS[project.id] ?? Server;

  return (
    <div className="border border-outline p-8 flex flex-col justify-between group hover:border-on-tertiary-container transition-colors">
      <div>
        <div className="flex justify-between items-start mb-12">
          <span className="font-mono text-label-micro text-on-primary-container border border-outline-variant px-2 py-1">
            {project.tag}
          </span>
          <Icon className="text-on-tertiary-container" size={20} strokeWidth={1.5} />
        </div>
        <h5 className="font-display text-headline-lg-mobile font-bold text-primary mb-4 leading-none">
          {project.title}
        </h5>
        <p className="font-sans text-body-md text-on-surface-variant mb-2">
          {project.description}
        </p>
        {project.collabNote && (
          <p className="font-mono text-[10px] text-on-tertiary-container uppercase mb-4">
            {project.collabNote}
          </p>
        )}
      </div>
      <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
        <div className="flex gap-4">
          {project.stack.map((tag) => (
            <span key={tag} className="font-mono text-[10px] text-on-tertiary-container">
              {tag}
            </span>
          ))}
        </div>
        <a
          className="font-mono text-data-mono uppercase underline hover:text-on-tertiary-container transition-colors"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.linkLabel}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop" id="projects">
      <div className="double-rule border-primary mb-12 pb-2">
        <h3 className="font-mono text-body-md font-bold text-primary uppercase">
          SYSTEM_ENTRIES // REPOSITORY
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
