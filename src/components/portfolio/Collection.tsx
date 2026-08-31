"use client";

import { Reveal, OrnateHeading, GoldRule, Filigree } from "./Ornaments";

type Work = {
  numeral: string;
  name: string;
  description: string;
  video?: string;
  image?: string;
};

// Next.js does NOT auto-prefix basePath for plain <video src="/...">.
// We read it from the env var set in next.config.ts and prefix manually.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ====================================================================
   TRABALHOS EM VÍDEO (I, II, III)
   ==================================================================== */
const bottles: Work[] = [
  {
    numeral: "I",
    name: "Henniez Study",
    description:
      "A photorealistic study of a premium swiss water rendered in Blender Cycles, capturing the delicate interplay of plastic refraction, and study of 4 different types of studio lightning (fill light, rim light, key light and background light). The label design draws upon Nordic traditions with a strong red tone, so I decided to highlight that point by contrast, using 2 area lights in blue tones.",
    video: "/videos/heritage_tonic.mp4",
  },
  {
    numeral: "II",
    name: "Awake Mate Study",
    description:
      "An exploration of a psychodelic concept, as the visual concept of the brand flows around the specific energy boost effect of the Mate, the scenario was made by a mix of textures and different scales of it, highlighting the logo of the product by the quick switch of colors, also improved by composition.",
    video: "/videos/artisan_botanical.mp4",
  },
  {
    numeral: "III",
    name: "CocoFit Study",
    description:
      "A fresh coconut and watermelon-based drink, in this concept I decided to highlight the freshness and summer context of a coconut drink, with a blue sky, fresh watermelon and iced drink. The richness of the scenario complemented directly the can, as the smooth camera movement focus in.",
    video: "/videos/noir_kombucha.mp4",
  },
];

const worksPng: Work[] = [
  {
    numeral: "IV",
    name: "Lupa's Kombucha Study",
    description:
      "A minimalist studio composition featuring sharp front lighting to accentuate the subtle typography and crisp condensation on the bottle. A soft pink backlight provides a delicate contrast, creating a balanced and cohesive visual identity aligned with Lupa's Passion Fruit Kombucha.",
    image: "/works/work-iv.png",
  },
  {
    numeral: "V",
    name: "Yes Maté Study",
    description:
      "This composition utilizes the design principle of Pattern and Anomaly to isolate and emphasize a single can within a uniform array. A strong backlight eliminates spatial gaps between the cans, while a tailored key light crafts precise surface reflections to establish focal depth.",
    image: "/works/work-v.png",
  },
  {
    numeral: "VI",
    name: "Radiate Kombucha Study",
    description:
      "Utilizing perspective distortion, the camera angle emphasizes the top of the can. A focused key light sharpens the branding and subtle details, while a soft backlight rim-lights the silhouette, cleanly separating the packaging from the surrounding green apples to build depth and contrast.",
    image: "/works/work-vi.png",
  },
];

function WorkBlock({ work, index }: { work: Work; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text column */}
        <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
          <div className="flex items-baseline gap-5">
            <span className="font-display text-5xl md:text-6xl text-gold-gradient font-semibold leading-none glow-gold-soft">
              {work.numeral}
            </span>
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-4xl text-cream italic leading-tight">
                {work.name}
              </h3>
            </div>
          </div>
          <div className="rule-gold-thin mt-5 mb-6" />
          <p className="font-garamond text-cream-dim text-base md:text-lg leading-[1.85]">
            {work.description}
          </p>
        </div>

        {/* Media column — video (16:9) or PNG image */}
        <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
          <div className="video-frame aspect-video mx-auto w-full max-w-2xl">
            {work.video ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={`${BASE}${work.video}`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <img
                className="absolute inset-0 w-full h-full object-contain"
                src={`${BASE}${work.image}`}
                alt={work.name}
                loading="lazy"
              />
            )}
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
            A curated selection of works. Each
            piece totally made digitally in Blender.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <GoldRule />
          </div>
        </Reveal>

        <div className="mt-20 space-y-28 md:space-y-36">
          {bottles.map((b, i) => (
            <WorkBlock key={b.video ?? b.name} work={b} index={i} />
          ))}
          {worksPng.map((w, i) => (
            <WorkBlock key={w.image ?? w.name} work={w} index={bottles.length + i} />
          ))}
        </div>
      </div>
    </section>
  );
}
