"use client";

import { Reveal, OrnateHeading, GoldRule, Filigree } from "./Ornaments";

const stats = [
  { value: "Performance", label: "Renders", sub: "Market Focus" },
  { value: "3D", label: "Unlimited", sub: "Scenarios" },
  { value: "100%", label: "Photorealistic", sub: "Fidelity" },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-24 md:py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <OrnateHeading>What I Do</OrnateHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <Filigree className="w-64 h-6 mx-auto mt-6 opacity-80" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left column: narrative */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="space-y-7 font-garamond text-cream-dim text-base md:text-lg leading-[1.85]">
              <p className="first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-1">
                <span className="text-cream">A</span>s a 3D producer in the
                beverage industry, I create calibrated renders for Retention
                Rate by employing precise lighting and controlled environments,
                I showcase labels and packaging on digital displays.
              </p>
              <p>
                Combining advanced Blender skills with business strategy with
                3D, My range is also scaled in B2B digital catalogs and
                Investor Pitch Decks materials. That ensures cost-efficiency,
                bureaucracy-free, agility and a highly competitive market
                position comparing with Tradicional Photography.
              </p>
              <p className="text-cream">
                All work reflects{" "}
                <span className="text-gold-bright italic">
                  Christian principles of righteousness and accountability
                  before God
                </span>
                , so my scope of work is dedicated exclusively to
                non-alcoholic brands.
              </p>
            </div>
          </Reveal>

          {/* Right column: three feature boxes */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.sub} delay={0.15 + i * 0.1}>
                <div className="frame-ornate-full p-6 group hover:box-glow-gold transition-all duration-500">
                  <span
                    className="corner-tl"
                    style={{
                      top: -1,
                      left: -1,
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  />
                  <span
                    className="corner-tr"
                    style={{
                      top: -1,
                      right: -1,
                      borderLeft: "none",
                      borderBottom: "none",
                    }}
                  />
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-3xl md:text-4xl text-gold-gradient font-semibold leading-none">
                      {s.value}
                    </span>
                    <span className="diamond-sm" />
                  </div>
                  <div className="rule-gold-thin my-3" />
                  <p className="font-garamond text-cream text-base">
                    {s.label}
                  </p>
                  <p className="font-cinzel tracking-luxe-sm text-[9px] uppercase text-gold mt-1">
                    {s.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20">
            <GoldRule />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
