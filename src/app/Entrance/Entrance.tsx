"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Entrance({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const scanTimer = setTimeout(() => {
      setScanned(true);
    }, 2600);

    const exitTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4600);

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020202] text-white"
          >
            {/* TECH GRID */}

            <div className="absolute inset-0 stampers-grid opacity-[0.12]" />

            {/* GOLD ATMOSPHERIC GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD000]/20 blur-[150px]"
            />

            {/* OUTER RING */}

            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD000]/20"
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FFD000]/30"
            />

            {/* CORNER HUD */}

            <div className="absolute left-6 top-6 font-mono text-[8px] tracking-[0.3em] text-[#FFD000]/70 sm:left-10 sm:top-10">
              STAMPERS // SYSTEM
              <br />
              INITIALIZING...
            </div>

            <div className="absolute right-6 top-6 text-right font-mono text-[8px] tracking-[0.3em] text-[#FFD000]/70 sm:right-10 sm:top-10">
              SECURE CONNECTION
              <br />
              ONLINE
            </div>

            <div className="absolute bottom-6 left-6 font-mono text-[8px] tracking-[0.3em] text-gray-600 sm:left-10 sm:bottom-10">
              PLATFORM_VERSION 2K26
            </div>

            <div className="absolute bottom-6 right-6 font-mono text-[8px] tracking-[0.3em] text-gray-600 sm:right-10 sm:bottom-10">
              INDIA // 001
            </div>

            {/* MAIN */}

            <div className="relative z-20 flex w-full max-w-3xl flex-col items-center px-6 text-center">

              {/* SMALL LABEL */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#FFD000]" />

                <span className="text-[9px] font-black uppercase tracking-[0.45em] text-[#FFD000]">
                  NEXT GENERATION PLATFORM
                </span>

                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#FFD000]" />
              </motion.div>

              {/* LOGO / NAME */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                }}
              >
                <h1 className="text-6xl font-black tracking-[-0.07em] sm:text-8xl md:text-9xl">
                  STAMPERS
                  <span className="stampers-gold-text">
                    ™
                  </span>
                </h1>
              </motion.div>

              {/* SCANNER */}

              <div className="relative mt-12 h-16 w-full max-w-xl overflow-hidden rounded-xl border border-[#FFD000]/20 bg-white/[0.025]">

                {/* horizontal scan */}

                <motion.div
                  initial={{
                    left: "-10%",
                  }}
                  animate={{
                    left: "110%",
                  }}
                  transition={{
                    duration: 2.4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full w-[3px] bg-[#FFD000] shadow-[0_0_25px_#FFD000,0_0_60px_#FFD000]"
                />

                {/* scan glow */}

                <motion.div
                  initial={{
                    left: "-20%",
                  }}
                  animate={{
                    left: "100%",
                  }}
                  transition={{
                    duration: 2.4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-[#FFD000]/20 to-transparent blur-xl"
                />

                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="font-mono text-[9px] font-bold tracking-[0.4em] text-[#FFD000]"
                  >
                    {scanned
                      ? "SCAN COMPLETE"
                      : "SCANNING PLATFORM..."}
                  </motion.span>

                </div>

              </div>

              {/* STATUS */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                }}
                className="mt-5 flex items-center gap-3"
              >
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#FFD000] shadow-[0_0_12px_#FFD000]"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500">
                  {scanned
                    ? "IDENTITY VERIFIED"
                    : "CONNECTING TO STAMPERS"}
                </span>
              </motion.div>

              {/* WELCOME MESSAGE */}

              <AnimatePresence>

                {scanned && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="mt-12"
                  >

                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-gray-500">
                      YOU ARE WELCOME TO
                    </p>

                    <h2 className="stampers-gold-text mt-4 text-3xl font-black uppercase tracking-[-0.03em] sm:text-5xl">
                      STAMPERS™
                    </h2>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-600">
                      DISCOVER • COMPETE • CREATE
                    </p>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

            {/* BOTTOM PROGRESS */}

            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/[0.05]">

              <motion.div
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 4.5,
                  ease: "linear",
                }}
                className="h-full bg-gradient-to-r from-[#8F5D00] via-[#FFD000] to-[#FFF3A3] shadow-[0_0_15px_#FFD000]"
              />

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* WEBSITE */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: showIntro ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}