import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-32" id="experience">
      <div className="double-rule border-primary mb-12 pb-2">
        <h3 className="font-mono text-body-md font-bold text-primary uppercase">
          AUDIT_TRAIL // PROFESSIONAL_LOG
        </h3>
      </div>
      <div className="space-y-px bg-outline-variant border-y border-outline-variant">
        {experience.map((entry) => (
          <div
            key={entry.id}
            className="bg-background grid grid-cols-1 md:grid-cols-12 py-8 group hover:bg-surface-container-low transition-colors"
          >
            <div className="md:col-span-3">
              <span
                className={
                  entry.current
                    ? "font-mono text-label-micro bg-primary text-white px-2 py-1"
                    : "font-mono text-label-micro border border-primary text-primary px-2 py-1"
                }
              >
                TIMESTAMP: {entry.period}
              </span>
            </div>
            <div className="md:col-span-5">
              <h4 className="font-display text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-1">
                {entry.org}
              </h4>
              <span className="font-mono text-data-mono text-on-tertiary-container block mb-4 uppercase">
                {entry.role}
              </span>
            </div>
            <div className="md:col-span-4">
              <ul className="font-mono text-[11px] text-on-surface-variant space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-on-tertiary-container">&gt;&gt;</span> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
