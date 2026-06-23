import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-32" id="education">
      <div className="double-rule border-primary mb-12 pb-2">
        <h3 className="font-mono text-body-md font-bold text-primary uppercase">
          EDUCATION // ACADEMIC_RECORD
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-3">
          <span className="font-mono text-label-micro bg-primary text-white px-2 py-1">
            {education.period}
          </span>
        </div>
        <div className="md:col-span-5">
          <h4 className="font-display text-headline-lg-mobile font-bold text-primary mb-1">
            {education.org}
          </h4>
          <span className="font-mono text-data-mono text-on-tertiary-container block mb-4 uppercase">
            {education.degree}
          </span>
          <span className="font-mono text-label-micro text-on-primary-container block mb-2 uppercase tracking-widest">
            COURSEWORK
          </span>
          <p className="font-sans text-body-md text-on-surface-variant">
            {education.coursework.join(", ")}
          </p>
        </div>
        <div className="md:col-span-4">
          <span className="font-mono text-label-micro text-on-primary-container block mb-2 uppercase tracking-widest">
            CLUBS
          </span>
          <ul className="font-mono text-[11px] text-on-surface-variant space-y-2 mb-6">
            {education.clubs.map((club) => (
              <li key={club} className="flex gap-2">
                <span className="text-on-tertiary-container">&gt;&gt;</span> {club}
              </li>
            ))}
          </ul>
          <span className="font-mono text-label-micro text-on-primary-container block mb-2 uppercase tracking-widest">
            CERTIFICATIONS
          </span>
          <ul className="font-mono text-[11px] text-on-surface-variant space-y-2">
            {education.certifications.map((cert) => (
              <li key={cert.name} className="flex gap-2">
                <span className="text-on-tertiary-container">&gt;&gt;</span> {cert.name} (
                {cert.issuer}, {cert.date})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
