import { tickerItems } from "@/lib/data";

export default function Ticker() {
  const line = tickerItems.join(" // ");

  return (
    <div className="fixed top-[64px] w-full bg-surface-container-low border-b border-outline overflow-hidden z-40 h-8 flex items-center">
      <div className="ticker-scroll flex whitespace-nowrap gap-margin-desktop items-center">
        <span className="font-mono text-data-mono text-on-tertiary-container">{line}</span>
        <span className="font-mono text-data-mono text-on-tertiary-container">{line}</span>
      </div>
    </div>
  );
}
