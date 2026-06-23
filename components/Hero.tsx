import { profile } from "@/lib/data";
import Portrait from "@/components/Portrait";

export default function Hero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop min-h-[calc(100vh-128px)] flex flex-col md:flex-row items-center justify-between gap-12 relative mb-32">
      <div className="w-full md:w-2/3">
        <span className="font-mono text-label-micro text-on-tertiary-container block mb-4">
          IDENTITY_PROTOCOL // 001
        </span>
        <h2 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-black uppercase text-primary leading-none -tracking-[0.03em] -ml-1 mb-4">
          {profile.displayName}
        </h2>
        <span className="font-mono text-data-mono text-on-tertiary-container block mb-8">
          {profile.subtitle}
        </span>
        <div className="max-w-xl border-l-2 border-primary pl-6">
          <p className="font-sans text-body-md text-on-surface font-bold mb-2">
            {profile.heroLead}
          </p>
          <p className="font-sans text-body-md text-on-surface-variant">{profile.heroBody}</p>
        </div>
      </div>
      <Portrait />
    </section>
  );
}
