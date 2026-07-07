"use client";

import { motion } from "framer-motion";

/* ===== Small decorative pieces used across the portfolio ===== */

/* Ornamental section heading with diamond flanks, e.g.  ✦  WHAT I DO  ✦  */
export function OrnateHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="text-gold text-lg" aria-hidden>
        ✦
      </span>
      <h2 className="font-cinzel tracking-luxe text-gold-bright text-sm md:text-base uppercase">
        {children}
      </h2>
      <span className="text-gold text-lg" aria-hidden>
        ✦
      </span>
    </div>
  );
}

/* A centered gold hairline divider with a tiny diamond in the middle */
export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="rule-gold flex-1 max-w-[200px]" />
      <span className="diamond" />
      <div className="rule-gold flex-1 max-w-[200px]" />
    </div>
  );
}

/* Side-flank divider used inside columns */
export function GoldRuleFlat({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="diamond-sm" />
      <div className="rule-gold-thin flex-1" />
    </div>
  );
}

/* Reveal-on-scroll wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Vertical "SCROLL TO EXPLORE" indicator */
export function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 1 }}
      className="flex flex-col items-center gap-3"
    >
      <span className="font-cinzel tracking-luxe-sm text-[10px] md:text-xs text-gold uppercase">
        Scroll to Explore
      </span>
      <div className="relative h-12 w-px bg-gradient-to-b from-[#c9a14a] via-[#8a6a26] to-transparent">
        <motion.div
          className="absolute -left-[3px] top-0 h-2 w-[7px] bg-[#f5e9b6]"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

/* Circular monogram badge — GR inside a gold ring with engraved tick marks */
export function Monogram({ size = 96 }: { size?: number }) {
  return (
    <div
      className="relative grid place-items-center"
      style={{ width: size, height: size }}
    >
      {/* Outer rotating tick ring */}
      <svg
        className="absolute inset-0 spin-slow"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5e9b6" />
            <stop offset="50%" stopColor="#c9a14a" />
            <stop offset="100%" stopColor="#8a6a26" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#goldRing)"
          strokeWidth="0.6"
        />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="url(#goldRing)"
          strokeWidth="0.4"
          strokeDasharray="0.5 3"
        />
      </svg>
      {/* Inner reverse-spinning ring */}
      <svg
        className="absolute inset-2 spin-slow-reverse"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#c9a14a"
          strokeWidth="0.3"
          strokeDasharray="1 6"
          opacity="0.7"
        />
      </svg>
      {/* Monogram letters */}
      <span
        className="font-cinzel text-gold-gradient font-bold leading-none"
        style={{ fontSize: size * 0.32, letterSpacing: "0.02em" }}
      >
        GR
      </span>
    </div>
  );
}

/* A small decorative SVG flourish used between major blocks */
export function Filigree({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={`text-gold ${className}`}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path d="M0 12 H80" strokeWidth="0.6" opacity="0.55" />
      <path d="M160 12 H240" strokeWidth="0.6" opacity="0.55" />
      <path
        d="M88 12 C 96 6, 104 6, 112 12 C 104 18, 96 18, 88 12 Z"
        strokeWidth="0.8"
      />
      <path
        d="M128 12 C 136 6, 144 6, 152 12 C 144 18, 136 18, 128 12 Z"
        strokeWidth="0.8"
      />
      <circle cx="120" cy="12" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="80" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="160" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
