import { profile } from "@/lib/data";
import Portrait from "@/components/Portrait";

export default function Hero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop min-h-[707px] flex flex-col md:flex-row items-end justify-between gap-12 relative mb-32">
      <div className="w-full md:w-2/3">
        <span className="font-mono text-label-micro text-on-tertiary-container block mb-4">
          IDENTITY_PROTOCOL // 001
        </span>
        <h2 className="font-display text-display-xl font-black uppercase text-primary leading-none -tracking-[0.04em] -ml-2 mb-8">
          {profile.displayName}
        </h2>
        <div className="max-w-xl border-l-2 border-primary pl-6">
          <p className="font-mono text-data-mono text-on-surface-variant mb-4">{profile.role}</p>
          <p className="font-sans text-body-md text-on-surface italic">{profile.tagline}</p>
        </div>
      </div>
      <Portrait />
    </section>
  );
}
