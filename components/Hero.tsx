import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import ParticleScatter from "@/components/ParticleScatter";

export default function Hero() {
  const [lead, name] = profile.heroLead.split("Ritul");

  return (
    <section
      id="home"
      className="px-6 md:px-16 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-32"
    >
      <div className="w-full md:w-1/2 md:ml-8 lg:ml-28 xl:ml-96">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {lead}
          <span className="text-accent">Ritul</span>
          {name}
          <span className="cursor-blink text-accent">|</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-text-muted">{profile.heroBody}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 ml-2 md:ml-10 inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 font-bold hover:bg-accent/10 transition-colors"
        >
          <Mail size={18} />
          Say hi!
        </a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:-translate-x-8 md:-translate-y-2 lg:-translate-x-20 lg:-translate-y-6 xl:-translate-x-44 xl:-translate-y-10">
        <ParticleScatter />
      </div>
    </section>
  );
}
