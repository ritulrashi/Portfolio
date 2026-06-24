import { skills } from "@/lib/data";

export default function About() {
  const half = Math.ceil(skills.length / 2);
  const columns = [skills.slice(0, half), skills.slice(half)];

  return (
    <section className="px-6 md:px-16 py-24" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">/ about me</h2>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="max-w-3xl space-y-6 text-lg text-text-muted">
          <p>
            I&apos;m a Computer Science graduate from{" "}
            <span className="font-bold text-text">Virginia Tech</span> with an interest in
            backend engineering, distributed systems, and fintech. I enjoy building reliable
            software and learning how systems work beneath the surface.
          </p>
          <p className="text-text">Here are some technologies I have been working with:</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-sm text-base">
            {columns.map((column, i) => (
              <ul key={i} className="space-y-2">
                {column.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-text">
                    <span className="text-accent">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p>
            In my free time, I enjoy following financial markets, exploring new technology, and
            keeping up with fashion and design. I appreciate thoughtful details, whether it&apos;s
            in software, user experiences, or everyday life.
          </p>
        </div>
      </div>
    </section>
  );
}
