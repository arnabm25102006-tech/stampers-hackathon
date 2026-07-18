"use client";

import { motion } from "framer-motion";

const circles = [
  {
    size: 450,
    top: "-10%",
    left: "-10%",
    color: "bg-yellow-500/15",
    duration: 18,
  },
  {
    size: 350,
    top: "15%",
    right: "-8%",
    color: "bg-orange-500/15",
    duration: 20,
  },
  {
    size: 500,
    bottom: "-20%",
    left: "20%",
    color: "bg-purple-600/15",
    duration: 22,
  },
  {
    size: 280,
    bottom: "10%",
    right: "15%",
    color: "bg-yellow-400/10",
    duration: 16,
  },
];

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-3xl ${circle.color}`}
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

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[150px]"
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px]" />

    </div>
  );
}