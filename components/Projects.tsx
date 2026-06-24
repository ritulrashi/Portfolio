import { ArrowRight, Database, Link2, Network, Server } from "lucide-react";
import { profile, projects, type Project } from "@/lib/data";
import { GithubIcon } from "@/components/icons";

const ICONS: Record<string, typeof Server> = {
  "personal-server": Server,
  "midas-core": Database,
  insightops: Network,
  upicrypto: Link2,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = ICONS[project.id] ?? Server;

  return (
    <div className="bg-surface border border-border p-8 flex flex-col hover:border-accent transition-colors">
      <Icon className="text-accent mb-6" size={28} strokeWidth={1.5} />
      <h3 className="text-xl font-bold mb-4">{project.title}</h3>
      <ul className="space-y-2 text-text-muted flex-1">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-accent mt-1">▸</span>
            {point}
          </li>
        ))}
      </ul>
      {project.collabNote && <p className="text-sm text-accent mt-3">{project.collabNote}</p>}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-muted">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="text-text hover:text-accent transition-colors shrink-0 ml-3"
        >
          <GithubIcon size={20} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-24" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">/ projects</h2>
          <div className="h-px bg-border flex-1" />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent text-sm font-bold whitespace-nowrap hover:underline"
          >
            View on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
