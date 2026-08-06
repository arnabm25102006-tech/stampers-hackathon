"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Premium Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Red Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-red-600 blur-[220px]"
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-rose-600 blur-[180px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          y: [-20, 30, -20],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-180px] bottom-0 h-[450px] w-[450px] rounded-full bg-red-500 blur-[180px]"
      />

      {/* Top Beam */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />

      {/* Bottom Beam */}
      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-1/2 h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-400 to-transparent"
      />

      {/* Static Particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
          }}
          className="absolute h-1 w-1 rounded-full bg-red-300"
          style={{
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
        />
      ))}

      {/* Dark Fade Bottom */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#050507] to-transparent" />
    </>
  );
}