"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Countdown() {
  const targetDate = useMemo(
    () => new Date("2027-07-22T00:00:00").getTime(),
    []
  );

  const [mounted, setMounted] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const updateCountdown = () => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) /
            1000
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return null;
  }

  const items = [
    {
      label: "Days",
      value: String(timeLeft.days).padStart(2, "0"),
    },
    {
      label: "Hours",
      value: String(timeLeft.hours).padStart(2, "0"),
    },
    {
      label: "Minutes",
      value: String(timeLeft.minutes).padStart(2, "0"),
    },
    {
      label: "Seconds",
      value: String(timeLeft.seconds).padStart(2, "0"),
    },
  ];
    return (
    <section className="relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,204,0,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,140,0,0.08),transparent_60%)]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="mb-16 text-center"
      >

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-yellow-300 backdrop-blur-xl">
          Registration Opens
        </span>

        <h2 className="mt-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
          22 JULY 2027
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Registration begins in
          <span className="font-semibold text-yellow-400">
            {" "}just a few moments.
          </span>
          Prepare your team and get ready for an exciting innovation journey.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

        {items.map((item, index) => (

          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * .12,
              duration: .6,
            }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/[0.04] p-8 text-center backdrop-blur-3xl"
          >

            {/* Hover Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Golden Orb */}

            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-700 group-hover:bg-yellow-400/20" />

            {/* Bottom Orb */}

            <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl transition-all duration-700 group-hover:bg-orange-500/20" />

            <div className="relative z-10">

              <motion.h3
                key={item.value}
                initial={{ scale: .8 }}
                animate={{ scale: 1 }}
                transition={{ duration: .3 }}
                className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-6xl font-black text-transparent"
              >
                {item.value}
              </motion.h3>

              <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-gray-300">
                {item.label}
              </p>

            </div>

            {/* Shine */}

            <div className="absolute left-[-120%] top-0 h-full w-20 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

          </motion.div>

        ))}

      </div>
            {/* Bottom Status */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-14"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-2xl">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
                STAMPERS HACKATHON
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Registration Opens on <span className="text-yellow-400">22 July 2027</span>
              </h3>

              <p className="mt-2 text-gray-400">
                Build • Innovate • Collaborate • Win
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
              <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">
                Registration Coming Soon
              </span>
            </div>

          </div>

          {/* Progress Bar */}

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300"
            />
          </div>

        </div>
      </motion.div>

    </section>
  );
}