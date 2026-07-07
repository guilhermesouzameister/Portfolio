"use client";

import { Reveal, OrnateHeading, GoldRule, Filigree } from "./Ornaments";

type Bottle = {
  numeral: string;
  name: string;
  description: string;
  video: string;
  poster?: string;
};

const bottles: Bottle[] = [
  {
    numeral: "I",
    name: "Heritage Tonic Water",
    description:
      "A photorealistic study of a premium tonic water bottle rendered in Blender Cycles, capturing the delicate interplay of glass refraction, effervescent carbonation, and the warm amber glow of studio lighting. The label design draws upon Victorian typographic traditions, with serif letterforms and ornamental borders that evoke the heritage of botanical tonics first crafted in the apothecaries of Georgian London. Every droplet of condensation on the glass surface has been individually placed and physically simulated to achieve maximum realism.",
    video: "/videos/heritage_tonic.mp4",
  },
  {
    numeral: "II",
    name: "Artisan Sparkling Botanical",
    description:
      "An exploration of organic elegance—a slender, flute-style bottle designed for a premium botanical sparkling water. This piece showcases the studio's ability to render complex transparent materials with physically accurate caustics and internal light dispersion. The bottle's form draws inspiration from the elongated glassware of the Belle Époque, while the minimalist label treatment grounds it firmly in contemporary luxury. Fine bubbles rise through the liquid in a simulation that mirrors the natural effervescence of a freshly opened bottle, captured at the precise moment of peak visual delight.",
    video: "/videos/artisan_botanical.mp4",
  },
  {
    numeral: "III",
    name: "Noir Kombucha Reserve",
    description:
      "A dark, moody rendering that pushes the boundaries of liquid simulation and volumetric lighting. This kombucha bottle is presented against a backdrop of deep shadow and gilded accents, evoking the opulent atmosphere of a nineteenth-century botanical laboratory. The rich, amber-ringed liquid within the bottle is rendered with subsurface scattering to accurately convey its natural opacity and color depth. Micro-bubbles cling to the interior glass surface, and a subtle film of culture at the liquid's surface catches the light—every detail testament to the uncompromising pursuit of visual truth that defines the atelier's practice.",
    video: "/videos/noir_kombucha.mp4",
  },
];

function BottleBlock({ bottle, index }: { bottle: Bottle; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text column */}
        <div className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
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

        {/* Video column */}
        <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
          <div className="video-frame aspect-[9/16] max-h-[640px] mx-auto w-full max-w-md">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={bottle.video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            {/* Top + bottom shadow gradients for cinematic feel */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
  
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
