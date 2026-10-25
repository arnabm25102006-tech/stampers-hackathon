
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Entrance({
  children,
}: {
  children: ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [scanned, setScanned] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setScanned(true);
      setShowIntro(false);
      return;
    }

    const scanTimer = window.setTimeout(() => {
      setScanned(true);
    }, 2100);

    const exitTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => {
      window.clearTimeout(scanTimer);
      window.clearTimeout(exitTimer);
    };
  }, [reduceMotion]);

  return (
    <>
      {/* INTRO SCREEN */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="stampers-intro"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.025,
              transition: {
                duration: 0.65,
                ease: "easeInOut",
              },
            }}
            role="status"
            aria-label="STAMPERS introduction"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#061225] text-white"
          >
            {/* BACKGROUND GRID */}
            <div
              aria-hidden="true"
              className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.15]"
            />

            {/* BLUE ATMOSPHERIC GLOW */}
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.16, 0.32, 0.16],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,650px)] w-[min(80vw,650px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[110px]"
            />

            {/* SECONDARY BLUE GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[110px]"
            />

            {/* OUTER ORBIT */}
            <motion.div
              aria-hidden="true"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(78vw,520px)] w-[min(78vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15"
            />

            {/* ROTATING DASHED ORBIT */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,470px)] w-[min(70vw,470px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/20"
            />

            {/* CORNER SYSTEM DETAILS */}
            <div className="absolute left-5 top-5 font-mono text-[8px] leading-5 tracking-[0.2em] text-cyan-200/65 sm:left-10 sm:top-9 sm:text-[10px]">
              STAMPERS / SYSTEM
              <br />
              INITIALIZING...
            </div>

            <div className="absolute right-5 top-5 text-right font-mono text-[8px] leading-5 tracking-[0.2em] text-cyan-200/65 sm:right-10 sm:top-9 sm:text-[10px]">
              PLATFORM STATUS
              <br />
              ONLINE
            </div>

            <div className="absolute bottom-5 left-5 font-mono text-[8px] tracking-[0.15em] text-slate-500 sm:bottom-9 sm:left-10 sm:text-[9px]">
              PLATFORM_VERSION 2K26
            </div>

            <div className="absolute bottom-5 right-5 font-mono text-[8px] tracking-[0.15em] text-slate-500 sm:bottom-9 sm:right-10 sm:text-[9px]">
              DISCOVER / CREATE
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-5 text-center sm:px-8">
              {/* EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-7 flex items-center gap-3 sm:mb-9"
              >
                <span className="h-px w-7 bg-gradient-to-r from-transparent to-cyan-300 sm:w-12" />

                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-cyan-200 sm:text-[10px] sm:tracking-[0.45em]">
                  NEXT GENERATION PLATFORM
                </span>

                <span className="h-px w-7 bg-gradient-to-l from-transparent to-cyan-300 sm:w-12" />
              </motion.div>

              {/* BRAND REVEAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <h1 className="whitespace-nowrap text-[clamp(2.5rem,10vw,7.5rem)] font-black leading-none tracking-[-0.075em] text-white">
                  STAMPERS
                  <span className="align-top text-[0.25em] tracking-normal text-cyan-300">
                    ™
                  </span>
                </h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                  className="mx-auto mt-4 h-[2px] w-2/3 origin-center bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                />
              </motion.div>

              {/* SCANNER */}
              <div className="relative mt-10 h-14 w-full max-w-xl overflow-hidden rounded-xl border border-cyan-300/20 bg-white/[0.035] sm:mt-12 sm:h-16">
                {/* SCAN TRACK */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.035),transparent)]"
                />

                {/* SCANNING BEAM */}
                <motion.div
                  initial={{ x: "-10%" }}
                  animate={{ x: "110%" }}
                  transition={{
                    duration: 2.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 left-0 w-[2px] bg-cyan-300 shadow-[0_0_18px_3px_rgba(34,211,238,0.7)]"
                />

                {/* SCAN LIGHT */}
                <motion.div
                  initial={{ x: "-130%" }}
                  animate={{ x: "400%" }}
                  transition={{
                    duration: 2.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-md"
                />

                {/* SCAN LABEL */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  <motion.span
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                  />

                  <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-cyan-200 sm:text-[10px] sm:tracking-[0.4em]">
                    {scanned ? "SCAN COMPLETE" : "SCANNING PLATFORM..."}
                  </span>
                </div>
              </div>

              {/* CONNECTION STATUS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-5 flex items-center gap-2.5"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                />

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-400 sm:text-[9px] sm:tracking-[0.3em]">
                  {scanned
                    ? "WELCOME / ACCESS GRANTED"
                    : "CONNECTING TO STAMPERS"}
                </span>
              </motion.div>

              {/* WELCOME REVEAL */}
              <AnimatePresence>
                {scanned && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="mt-9 sm:mt-11"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-[10px] sm:tracking-[0.5em]">
                      WELCOME TO
                    </p>

                    <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.035em] text-white sm:text-4xl">
                      STAMPERS
                      <span className="text-cyan-300">™</span>
                    </h2>

                    <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.22em] text-cyan-200/70 sm:text-[10px] sm:tracking-[0.35em]">
                      DISCOVER · COMPETE · CREATE
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTTOM PROGRESS */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-full bg-white/[0.06]"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                }}
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-300 to-white shadow-[0_0_14px_rgba(34,211,238,0.7)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WEBSITE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        style={{
          visibility: showIntro ? "hidden" : "visible",
        }}
        aria-hidden={showIntro ? true : undefined}
      >
        {children}
      </motion.div>
    </>
  );
}
