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
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6 text-center"
          >
            <div className="text-4xl font-bold text-yellow-400">--</div>
            <div className="mt-2 text-sm text-gray-400">
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
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-xl"
        >
          <div className="text-4xl font-black text-yellow-400">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="mt-2 text-sm uppercase tracking-widest text-gray-400">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}