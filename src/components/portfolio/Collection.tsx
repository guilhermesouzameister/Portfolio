"use client";

import { Reveal, OrnateHeading, GoldRule, Filigree } from "./Ornaments";

type Bottle = {
  numeral: string;
  name: string;
  description: string;
  video: string;
};

// Next.js does NOT auto-prefix basePath for plain <video src="/...">.
// We read it from the env var set in next.config.ts and prefix manually.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const bottles: Bottle[] = [
  {
    numeral: "I",
    name: "Henniez Swiss Water Concept (unnoficial) ",
    description:
      "A photorealistic study of a premium swiss water rendered in Blender Cycles, capturing the delicate interplay of plastic refraction, and study of 4 different types of studio lightning (fill light, rim light, key light and background light). The label design draws upon Nordic traditions with a strong red tone, so I decided to highlight that point by using 2 area lights in red tones",
    video: "/videos/heritage_tonic.mp4",
  },
  {
    numeral: "II",
    name: "Awake Mate Energy Concept (unnoficial)",
    description:
      "An exploration of a psychodelic concept, as the visual concept of the brand flows around that specific effect of the Mate, the scenario was made by a mix of textures and different scales of it, highlighting the logo of the product by the quick switch of colors, also improved by composition.",
    video: "/videos/artisan_botanical.mp4",
  },
  {
    numeral: "III",
    name: "CocoFit Concept (unnoficial)",
    description:
      "A fresh coconut and watermelon-based drink, in this concept I decided to highlight the freshness and summer context of a coconut drink, with a blue sky, fresh watermelon and iced drink. The richness of the scenario complemented directly the can, as the smooth camera movement focus in",
    video: "/videos/noir_kombucha.mp4",
  },
];

function BottleBlock({ bottle, index }: { bottle: Bottle; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text column */}
        <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
          <div className="flex items-baseline gap-5">
            <span className="font-display text-5xl md:text-6xl text-gold-gradient font-semibold leading-none glow-gold-soft">
              {bottle.numeral}
            </span>
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-4xl text-cream italic leading-tight">
                {bottle.name}
              </h3>
            </div>
          </div>
          <div className="rule-gold-thin mt-5 mb-6" />
          <p className="font-garamond text-cream-dim text-base md:text-lg leading-[1.85]">
            {bottle.description}
          </p>
        </div>

        {/* Video column — landscape 16:9 for 1920x1080 MP4s */}
        <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
          <div className="video-frame aspect-video mx-auto w-full max-w-2xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={`${BASE}${bottle.video}`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            {/* Top + bottom shadow gradients for cinematic feel */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="font-cinzel tracking-luxe-sm text-[9px] uppercase text-gold/80">
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 md:py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <OrnateHeading>The Collection</OrnateHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <Filigree className="w-64 h-6 mx-auto mt-6 opacity-80" />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl mx-auto text-center font-garamond italic text-cream-dim text-base md:text-lg leading-[1.85]">
            Three exemplary works, presented as interactive 3D models. Each
            piece may be rotated, zoomed, and examined from every angle—a
            privilege once reserved for those who held the physical object.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <GoldRule />
          </div>
        </Reveal>

        <div className="mt-20 space-y-28 md:space-y-36">
          {bottles.map((b, i) => (
            <BottleBlock key={b.name} bottle={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
