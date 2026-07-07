"use client";

import Hero from "@/components/portfolio/Hero";
import WhatIDo from "@/components/portfolio/WhatIDo";
import Collection from "@/components/portfolio/Collection";
import Commissions from "@/components/portfolio/Commissions";
import Craft from "@/components/portfolio/Craft";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      {/* Persistent left rail — section index */}
      <SideRail />

      <Hero />
      <WhatIDo />
      <Collection />
      <Commissions />
      <Craft />
      <Footer />
    </main>
  );
}

function SideRail() {
  return (
    <aside
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3"
      aria-hidden
    >
      {[
        { id: "hero", label: "I" },
        { id: "what-i-do", label: "II" },
        { id: "collection", label: "III" },
        { id: "commissions", label: "IV" },
        { id: "craft", label: "V" },
      ].map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative grid place-items-center"
        >
          <span className="font-cinzel text-[10px] text-gold/40 group-hover:text-gold transition-colors duration-300">
            {s.label}
          </span>
          <span className="absolute -right-3 top-1/2 -translate-y-1/2 h-px w-0 bg-gold group-hover:w-4 transition-all duration-300" />
        </a>
      ))}
    </aside>
  );
}
