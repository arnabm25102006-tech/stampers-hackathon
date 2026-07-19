"use client";

import { useEffect, useState } from "react";

const targetDate = Date.now() + 3 * 24 * 60 * 60 * 1000;

export default function Countdown() {
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

      if (distance <= 0) return;

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
          (distance % (1000 * 60)) / 1000
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
          >
            <div className="text-5xl font-black text-yellow-400">
              --
            </div>

            <div className="mt-4 text-sm uppercase tracking-widest text-gray-400">
              Loading
            </div>
          </div>
        ))}
      </div>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <>
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-yellow-400">
          Registration Ends In
        </p>

        <h2 className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
          Countdown to Innovation
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Don't miss your chance to participate in one of the most exciting
          innovation hackathons.
        </p>
      </div>

      {/* Countdown Cards */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={`group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/5 p-8 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_0_45px_rgba(250,204,21,0.25)] ${
              item.label === "Seconds"
                ? "animate-pulse"
                : ""
            }`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Top Right Glow */}
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-700 group-hover:bg-yellow-400/20" />

            {/* Bottom Left Glow */}
            <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-orange-500/10 blur-3xl transition-all duration-700 group-hover:bg-orange-400/20" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
                {String(item.value).padStart(2, "0")}
              </h2>

              <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                {item.label}
              </p>
            </div>

            {/* Bottom Highlight */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </>
  );
}