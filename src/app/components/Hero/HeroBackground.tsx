"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* =====================================================
          BASE
      ===================================================== */}

      <div className="absolute inset-0 bg-[#020202]" />


      {/* =====================================================
          PREMIUM GRID
      ===================================================== */}

      <div
        className="
          absolute inset-0
          opacity-[0.10]
          bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />


      {/* =====================================================
          CENTRAL GOLDEN AURA
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.28, 0.16],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-360px]
          h-[950px]
          w-[950px]
          -translate-x-1/2
          rounded-full
          bg-[#FFD000]
          blur-[230px]
        "
      />


      {/* =====================================================
          INNER GOLD CORE
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.14, 0.07],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-150px]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-[#FFF3A3]
          blur-[150px]
        "
      />


      {/* =====================================================
          LEFT GOLDEN GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [-40, 35, -40],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-260px]
          top-[30%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#EAB900]
          blur-[200px]
        "
      />


      {/* =====================================================
          RIGHT GOLDEN GLOW
      ===================================================== */}

      <motion.div
        animate={{
          y: [-30, 35, -30],
          opacity: [0.05, 0.14, 0.05],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-240px]
          bottom-[-100px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#FFC400]
          blur-[200px]
        "
      />


      {/* =====================================================
          HORIZONTAL GOLD LIGHT BEAM
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.18, 0.5, 0.18],
          scaleX: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[80px]
          h-[2px]
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#FFD000]
          to-transparent
          shadow-[0_0_25px_rgba(255,208,0,0.65)]
        "
      />


      {/* =====================================================
          SECOND LIGHT BEAM
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.05, 0.18, 0.05],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[82px]
          h-px
          w-[45%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#FFF3A3]
          to-transparent
        "
      />


      {/* =====================================================
          BOTTOM GOLD BEAM
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.06, 0.18, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[110px]
          left-1/2
          h-[2px]
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#DFAF00]
          to-transparent
          shadow-[0_0_20px_rgba(255,208,0,0.35)]
        "
      />


      {/* =====================================================
          GOLD PARTICLES
      ===================================================== */}

      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.15, 0.75, 0.15],
            scale: [0.7, 1.15, 0.7],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
          className="
            pointer-events-none
            absolute
            h-[2px]
            w-[2px]
            rounded-full
            bg-[#FFD000]
            shadow-[0_0_10px_rgba(255,208,0,0.8)]
          "
          style={{
            left: `${(i * 17 + 3) % 100}%`,
            top: `${(i * 23 + 5) % 100}%`,
          }}
        />
      ))}


      {/* =====================================================
          MICRO GOLD DUST
      ===================================================== */}

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          animate={{
            opacity: [0.05, 0.35, 0.05],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
          className="
            pointer-events-none
            absolute
            h-1
            w-1
            rounded-full
            bg-[#FFF3A3]
            shadow-[0_0_8px_rgba(255,243,163,0.7)]
          "
          style={{
            left: `${(i * 29 + 7) % 100}%`,
            top: `${(i * 31 + 11) % 100}%`,
          }}
        />
      ))}


      {/* =====================================================
          GOLDEN RADIAL ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,208,0,0.13),transparent_45%)]
        "
      />


      {/* =====================================================
          CINEMATIC VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.65)_100%)]
        "
      />


      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-64
          w-full
          bg-gradient-to-t
          from-[#020202]
          via-[#020202]/75
          to-transparent
        "
      />


      {/* =====================================================
          TOP DARK FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-32
          w-full
          bg-gradient-to-b
          from-black/60
          to-transparent
        "
      />
    </>
  );
}