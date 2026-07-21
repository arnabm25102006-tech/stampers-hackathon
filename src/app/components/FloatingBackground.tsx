"use client";

import { motion } from "framer-motion";

const circles = [
  {
    size: 500,
    top: "-15%",
    left: "-10%",
    color: "bg-yellow-500/15",
    duration: 20,
  },
  {
    size: 400,
    top: "10%",
    right: "-10%",
    color: "bg-orange-500/15",
    duration: 24,
  },
  {
    size: 600,
    bottom: "-25%",
    left: "15%",
    color: "bg-yellow-400/10",
    duration: 26,
  },
  {
    size: 350,
    bottom: "10%",
    right: "10%",
    color: "bg-amber-400/10",
    duration: 18,
  },
  {
    size: 250,
    top: "45%",
    left: "40%",
    color: "bg-yellow-300/10",
    duration: 14,
  },
];

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Floating Blobs */}
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[120px] ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            right: circle.right,
            bottom: circle.bottom,
          }}
        />
      ))}

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]"
      />

      {/* Aurora Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,196,0,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,140,0,0.08),transparent_60%)]" />

      {/* Animated Gold Particles */}

{/* Animated Gold Particles */}

{Array.from({ length: 20 }, (_, i) => {
  const top = `${(i * 37) % 100}%`;
  const left = `${(i * 53) % 100}%`;
  const duration = 2 + (i % 5);
  const delay = (i % 6) * 0.5;

  return (
    <motion.span
      key={i}
      className="absolute h-1 w-1 rounded-full bg-yellow-300"
      style={{
        top,
        left,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.8, 1],
        y: [0, -25, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
})}

      {/* Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70" />

      {/* Premium Noise */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:22px_22px]" />
    </div>
  );
}