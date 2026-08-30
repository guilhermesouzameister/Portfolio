"use client";

import { motion } from "framer-motion";
import { Monogram, ScrollHint, GoldRule } from "./Ornaments";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 bg-noise opacity-50" />

      {/* Soft gold reflex blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#c9a14a] opacity-[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#e6c66c] opacity-[0.05] blur-[140px]" />

      {/* Top bar — minimal nav */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 text-gold"
      >
        <span className="font-cinzel tracking-luxe-sm text-[10px] md:text-xs uppercase">
          Freelancer
        </span>
        <span className="font-cinzel tracking-luxe-sm text-[10px] md:text-xs uppercase hidden sm:block">
          
        </span>
      </motion.header>

      {/* Centerpiece */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Monogram size={128} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 font-cinzel tracking-luxe text-[10px] md:text-xs uppercase text-gold"
        >
          Est. MMXXVI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
        >
          <span className="block text-cream font-light">Guilherme</span>
          <span className="flex items-center justify-center gap-4 md:gap-6">
            <span className="diamond" />
            <span className="text-gold-shine font-semibold italic glow-gold-soft">
              Rafael
            </span>
            <span className="diamond" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 font-cinzel tracking-luxe text-[10px] md:text-xs uppercase text-gold-bright"
        >
          3D Designer &amp; Consultant for Beverages
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="w-40 mt-6"
        >
          <GoldRule />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-8 max-w-xl font-garamond text-base md:text-lg text-cream-dim italic leading-relaxed"
        >
          Crafting photorealistic visual identities for non-alcoholic beverage
          brands through precision 3D rendering and strategic design
          consultation.
        </motion.p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ScrollHint />
      </div>
    </section>
  );
}
