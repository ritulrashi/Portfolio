import { skillGroups } from "@/lib/data";

export default function About() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-32" id="about">
      <div className="double-rule border-primary mb-12 pb-2">
        <h3 className="font-mono text-body-md font-bold text-primary uppercase">
          MANIFESTO // CORE_PHILOSOPHY
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-7">
          <p className="font-display text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface leading-tight mb-8">
            Architecting systems where{" "}
            <span className="italic text-on-tertiary-container">efficiency</span> is the primary
            aesthetic.
          </p>
          <div className="font-sans text-body-md text-on-surface-variant space-y-6">
            <p>
              I&apos;m a Computer Science student at{" "}
              <span className="font-bold text-primary">Virginia Tech</span> (Class of 2026),
              currently working as a Research &amp; Backend Engineer on the{" "}
              <span className="font-bold text-primary">DBWorkout</span> platform — a
              PostgreSQL-backed grading sandbox serving 170+ users.
            </p>
            <p>
              I believe code is a form of industrial design. Whether I&apos;m building a
              concurrent HTTP server from scratch in C, designing a double-entry ledger with
              automated reconciliation across Spring Boot microservices, or writing Hardhat tests
              for Solidity contracts, I approach every line as a critical component in a larger,
              precise machine. My philosophy is rooted in the &quot;first principles&quot; of
              computer science: simplicity, locality, and performance.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 border-l border-outline-variant pl-gutter">
          <span className="font-mono text-label-micro text-on-primary-container block mb-6 uppercase tracking-widest">
            TECH_STACK // LOADED_MODULES
          </span>
          <div className="grid grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="border border-outline-variant p-4 hover:bg-primary hover:text-white transition-all"
              >
                <span className="font-mono text-label-micro text-on-tertiary-container block mb-1">
                  {group.label}
                </span>
                <span className="font-mono text-data-mono">{group.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
