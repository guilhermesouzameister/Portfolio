"use client";

import { Reveal, OrnateHeading, GoldRule, Filigree } from "./Ornaments";

const services = [
  {
    title: "The Validation Sprint",
    subtitle: "For Pre-Launch Label Testing & Design Assurance",
    items: [
      "Digital validation of label designs before committing to physical printing",
      "Full 3D bottle rendering with accurate glass refraction and shadow casting",
      "Multiple design iteration rounds with brand alignment documentation",
      "Brand Identity Guidelines for long-term visual consistency",
      "Own Asset Library delivery for future in-house use",
    ],
  },
  {
    title: "The Go-To-Market Engine",
    subtitle: "For Social Media Domination at Launch",
    items: [
      "Photorealistic static images optimized for all device ratios and screen types",
      "Short-form 3D animations for Instagram Reels, TikTok, and YouTube Shorts",
      "Complete 3D Infrastructure with 100% asset ownership",
      "Infinite digital environments for future campaign flexibility",
      "3D Performance Blueprint with creative rationale and asset roadmap",
    ],
  },
];

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="frame-ornate-full h-full p-8 md:p-10 flex flex-col">
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
        <h3 className="font-display text-2xl md:text-3xl text-gold-bright italic">
          {service.title}
        </h3>
        <div className="rule-gold-thin my-4" />
        <p className="font-cinzel tracking-luxe-sm text-[9px] md:text-[10px] uppercase text-gold">
          {service.subtitle}
        </p>
        <ul className="mt-6 space-y-4 flex-1">
          {service.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gold mt-1 leading-none" aria-hidden>
                ✦
              </span>
              <span className="font-garamond text-cream-dim text-sm md:text-base leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Commissions() {
  return (
    <section id="commissions" className="relative py-24 md:py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <OrnateHeading>Commissions &amp; Services</OrnateHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <Filigree className="w-64 h-6 mx-auto mt-6 opacity-80" />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl mx-auto text-center font-garamond italic text-cream-dim text-base md:text-lg leading-[1.85]">
            Two complementary service philosophies, each structured to address a
            distinct phase of a beverage brand's visual journey.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl mx-auto text-center font-garamond text-cream-dim text-sm md:text-base leading-[1.85]">
            From the earliest stages of label validation to the full-scale
            deployment of social media assets, every engagement is governed by
            the same unwavering commitment to photorealistic excellence and
            strategic precision.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <ServiceCard service={services[0]} delay={0.1} />
          <ServiceCard service={services[1]} delay={0.2} />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <span className="text-gold text-xl" aria-hidden>
              ✦
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
