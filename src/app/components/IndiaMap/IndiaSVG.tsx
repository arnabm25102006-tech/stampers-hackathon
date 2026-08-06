"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { states } from "./StateData";

export default function IndiaSVG() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">

      <Image
        src="/images/india-map.svg"
        alt="India Map"
        width={520}
        height={720}
        priority
        className="w-full"
      />

      {states.map((state) => (
        <motion.div
          key={state.name}
          className="absolute"
          style={{
            left: `${state.x}%`,
            top: `${state.y}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="h-4 w-4 rounded-full border-2 border-white bg-red-500 shadow-[0_0_18px_rgba(255,0,80,.9)]" />

          <p className="mt-2 whitespace-nowrap text-xs font-semibold text-white">
            {state.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
}