import { skills } from "@/lib/data";

export default function About() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-32" id="about">
      <div className="double-rule border-primary mb-12 pb-2">
        <h3 className="font-mono text-body-md font-bold text-primary uppercase">
          ABOUT_ME // PERSONAL_LOG
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-7 font-sans text-body-md text-on-surface-variant space-y-6">
          <p>
            I&apos;m a Computer Science graduate from{" "}
            <span className="font-bold text-primary">Virginia Tech</span> with an interest in
            backend engineering, distributed systems, and fintech. I enjoy building software that
            is reliable, scalable, and designed with purpose.
          </p>
          <p>
            I&apos;m naturally curious, so I like understanding not just{" "}
            <span className="italic">how</span> something works, but{" "}
            <span className="italic">why</span> it was built that way. I enjoy looking beneath the
            abstractions, breaking problems down, and building a strong foundation before moving
            forward. That curiosity often takes me beyond the original problem and helps me become
            a better engineer.
          </p>
          <p>
            Outside of engineering, I enjoy following financial markets, learning about fintech,
            and keeping up with emerging technology. I also have an appreciation for fashion and
            thoughtful design. I believe attention to detail matters, whether I&apos;m writing
            code, designing an interface, or putting together an idea.
          </p>
        </div>
        <div className="md:col-span-5 border-l border-outline-variant pl-gutter">
          <span className="font-mono text-label-micro text-on-primary-container block mb-6 uppercase tracking-widest">
            TECH_STACK // LOADED_MODULES
          </span>
          <p className="font-sans text-body-md text-on-surface-variant mb-4">
            Technologies I&apos;ve been working with
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-data-mono border border-outline-variant px-3 py-2 hover:bg-primary hover:text-white transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
