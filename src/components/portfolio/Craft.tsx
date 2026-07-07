"use client";

import { Reveal, OrnateHeading, GoldRule, Filigree } from "./Ornaments";

const steps = [
  {
    num: "01",
    title: "Reference & Brief",
    body: "Starting with a thorough understanding of the brand's visual DNA. Based on studies of the brand's digital personality and the idea of the selected product (the png file of the label or the custom bottle).",
  },
  {
    num: "02",
    title: "Geometry & Material",
    body: "Bottle geometries are constructed with meticulous attention to real-world manufacturing specifications—wall thickness, glass taper, base profile, and neck finish are all accurately represented. Materials are authored using physically-based workflows: glass with measured IOR values, liquids with accurate absorption coefficients, and label substrates with scanned texture data.",
  },
  {
    num: "03",
    title: "Lighting & Lookdev",
    body: "The lighting setup is the soul of every render. Each scene is illuminated with a carefully calibrated studio rig that replicates the qualities of professional product photography—soft key lights, precise rim highlights, and controlled fill ratios. Environment maps and area lights are tuned to produce the exact caustic patterns and specular reflections that bring glass and liquid to life.",
  },
  {
    num: "04",
    title: "Render & Delivery",
    body: "Final renders are produced in Blender Cycles at high sample counts with adaptive sampling, ensuring noise-free output even in challenging glass and liquid interfaces. Each deliverable is optimized for its intended platform: WebP for web, ProRes for video, with full EXR masters archived for future re-rendering. A complete 3D Performance Blueprint accompanies every delivery.",
  },
];

export default function Craft() {
  return (
    <section id="craft" className="relative py-24 md:py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <OrnateHeading>The Craft</OrnateHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <Filigree className="w-64 h-6 mx-auto mt-6 opacity-80" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={0.1 + i * 0.1}>
              <div className="relative h-full">
                {/* Number */}
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl md:text-6xl text-gold-gradient font-semibold leading-none glow-gold-soft">
                    {s.num}
                  </span>
                  <div className="rule-gold-thin flex-1" />
                </div>
                <h3 className="mt-5 font-display text-lg md:text-xl text-gold-bright italic leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 font-garamond text-cream-dim text-sm md:text-[15px] leading-[1.8]">
                  {s.body}
                </p>
                {/* Small flourish at bottom */}
                <div className="mt-6 flex items-center gap-2 opacity-70">
                  <span className="diamond-sm" />
                  <span className="font-cinzel tracking-luxe-sm text-[8px] uppercase text-gold">
                    Step {s.num}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
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
