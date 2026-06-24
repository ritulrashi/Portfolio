"use client";

import { useState } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [active, setActive] = useState(0);
  const entry = experience[active];

  return (
    <section className="px-6 md:px-16 py-24" id="experience">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">/ experience</h2>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 max-w-3xl">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experience.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`px-4 py-3 text-left text-sm font-bold whitespace-nowrap transition-colors border-b-2 md:border-b-0 md:border-l-2 -mb-px md:-mb-0 md:-ml-px ${
                  active === i
                    ? "text-accent border-accent"
                    : "text-text-muted border-transparent hover:text-text"
                }`}
              >
                {item.org}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold">
              {entry.role} @ <span className="text-accent">{entry.org}</span>
            </h3>
            <p className="text-sm text-text-muted mt-1 mb-6">{entry.period}</p>
            <ul className="space-y-3 text-text-muted">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="text-accent mt-1">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
