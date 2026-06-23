import { profile } from "@/lib/data";

export default function Portrait() {
  return (
    <div className="w-full md:w-1/3 aspect-[3/4] border border-outline relative group">
      <div className="absolute inset-4 border border-outline-variant flex items-center justify-center bg-surface-container overflow-hidden">
        {/* Swap this block for <Image src="/images/headshot.jpg" .../> once a real photo is added */}
        <span className="font-display text-7xl text-on-surface-variant/40 select-none">RR</span>
        <div className="absolute inset-0 bg-primary/10" />
        <div className="scan-line" />
        <div className="absolute top-4 left-4 font-mono text-label-micro text-white bg-primary px-2 py-1">
          SUBJECT_ID: RITUL_VT
        </div>
        <div className="absolute bottom-4 right-4 flex gap-1">
          <div className="w-2 h-2 bg-on-tertiary-container" />
          <div className="w-2 h-2 bg-on-tertiary-container opacity-50" />
          <div className="w-2 h-2 bg-on-tertiary-container opacity-20" />
        </div>
      </div>
      <div className="absolute -bottom-12 -left-12 hidden lg:block bg-surface p-4 border border-outline max-w-[200px]">
        <span className="font-mono text-label-micro text-on-secondary">METADATA</span>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between font-mono text-[10px]">
            <span>COORD:</span>
            <span>{profile.coordinates}</span>
          </div>
          <div className="flex justify-between font-mono text-[10px]">
            <span>LEVEL:</span>
            <span>{profile.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
