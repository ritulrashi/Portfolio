import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="px-6 md:px-16 py-24" id="education">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">/ education</h2>
        <div className="h-px bg-border flex-1" />
      </div>
      <div className="max-w-3xl">
        <h3 className="text-2xl font-bold text-text">{education.degree}</h3>
        <p className="text-accent font-bold mt-1">Virginia Tech</p>
        <p className="text-sm text-text-muted mt-1">{education.period}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <p className="text-text font-bold mb-3">Relevant coursework</p>
            <ul className="space-y-2 text-text-muted">
              {education.coursework.map((course) => (
                <li key={course} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-text font-bold mb-3">Clubs</p>
            <ul className="space-y-2 text-text-muted mb-8">
              {education.clubs.map((club) => (
                <li key={club} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  {club}
                </li>
              ))}
            </ul>
            <p className="text-text font-bold mb-3">Certifications</p>
            <ul className="space-y-2 text-text-muted">
              {education.certifications.map((cert) => (
                <li key={cert.name} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  {cert.name}, {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
