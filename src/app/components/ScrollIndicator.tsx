"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-yellow-500/30">
          <motion.div
            animate={{
              y: [4, 22, 4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-yellow-400"
          />
        </div>
      </div>
    </motion.div>
  );
}