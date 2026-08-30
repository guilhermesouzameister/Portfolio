"use client";

import { motion } from "framer-motion";
import { Monogram, GoldRule } from "./Ornaments";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/guui.rafael.meister/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/guilherme-rafael-585b0026b/" },
  { name: "Behance", url: "https://www.behance.net/guilhermesouza374" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-24 pb-12 px-6 border-t border-[rgba(201,161,74,0.22)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-40 w-px bg-gradient-to-b from-[#c9a14a] to-transparent" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Monogram size={96} />
        </motion.div>

        <h2 className="mt-8 font-display text-4xl md:text-5xl">
          <span className="text-cream">Guilherme</span>{" "}
          <span className="text-gold-shine italic">Rafael</span>
        </h2>

        <p className="mt-4 font-cinzel tracking-luxe text-[10px] md:text-xs uppercase text-gold-bright">
          3D Designer &amp; Consultant for Non-Alcoholic Beverages
        </p>

        <div className="w-48 mt-6">
          <GoldRule />
        </div>

        {/* Email */}
        <motion.a
          href="mailto:guilhermerafaelmeister2019@gmail.com"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 font-garamond text-gold text-base md:text-lg italic hover:text-gold-bright transition-colors duration-300 break-all"
        >
          guilhermerafaelmeister2019@gmail.com
        </motion.a>

        {/* Socials */}
        <div className="mt-8 flex items-center gap-6 md:gap-8">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel tracking-luxe-sm text-[10px] md:text-xs uppercase text-cream-dim hover:text-gold transition-colors duration-300 relative group"
            >
              {s.name}
              <span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 inline-flex items-center gap-3 px-6 py-2.5 frame-ornate-full"
        >
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
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-cinzel tracking-luxe-sm text-[10px] md:text-xs uppercase text-cream">
            Available for Commissions
          </span>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 w-full">
          <div className="rule-gold-thin mb-6" />
          <p className="font-garamond text-cream-dim text-xs md:text-sm italic leading-relaxed">
            Glory to Jesus.
          </p>
        </div>
      </div>
    </footer>
  );
}
