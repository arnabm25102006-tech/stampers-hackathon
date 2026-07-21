"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  UserPlus,
  Lock,
  Code2,
  Upload,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    date: "22 July 2026",
    title: "Registration Opens",
    description:
      "Start your journey by creating your team and registering for the STAMPERS Open Innovation Hackathon.",
    icon: UserPlus,
    color: "from-yellow-300 via-yellow-500 to-orange-500",
  },
  {
    date: "15 August 2026",
    title: "Registration Closes",
    description:
      "The final deadline for all participants. No new registrations will be accepted afterward.",
    icon: Lock,
    color: "from-orange-500 to-red-500",
  },
  {
    date: "20 August 2026",
    title: "Hackathon Begins",
    description:
      "24 hours of innovation, mentorship, collaboration and problem solving officially begins.",
    icon: Code2,
    color: "from-yellow-400 to-amber-300",
  },
  {
    date: "21 August 2026",
    title: "Project Submission",
    description:
      "Upload your source code, PPT, prototype, documentation and final presentation.",
    icon: Upload,
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "21 August 2026",
    title: "Winner Announcement",
    description:
      "Top teams receive trophies, certificates, goodies and national recognition.",
    icon: Trophy,
    color: "from-yellow-300 via-yellow-500 to-orange-500",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-black py-24 lg:py-36 text-white"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center mb-16 px-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 backdrop-blur-xl">
          <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-yellow-300">
            EVENT JOURNEY
          </span>
        </div>

        <h2 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
          <span className="text-white">Hackathon</span>
          <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            {" "}
            Timeline
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          Every milestone matters. From registration to the final winner
          announcement, follow your complete journey and never miss an important
          date.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative space-y-8 lg:space-y-0">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pb-8 lg:pb-0 lg:flex lg:items-center lg:gap-8"
              >
                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_15px_60px_rgba(0,0,0,.35)] lg:w-[43%]"
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-[28px] p-[1px]">
                    <div
                      className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${item.color} opacity-30 blur-sm transition-all duration-500 group-hover:opacity-60`}
                    />
                  </div>

                  {/* Background Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${item.color} blur-3xl`}
                  />

                  {/* Bottom Glow */}
                  <motion.div
                    animate={{
                      scale: [1.1, 1, 1.1],
                      opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className={`absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-br ${item.color} blur-3xl`}
                  />

                  {/* Shine */}
                  <div className="absolute left-[-120%] top-0 h-full w-24 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[130%]" />

                  {/* Content */}
                  <div className="relative z-20 p-6 sm:p-8">
                    {/* Date */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                      <CalendarDays size={16} className="text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-300">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-black leading-tight text-white lg:text-3xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 text-[15px] leading-8 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    whileHover={{
                      opacity: 1,
                    }}
                    className={`absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r ${item.color} opacity-70`}
                  />
                </motion.div>

                {/* Timeline Icon */}
                <div className="absolute left-4 top-8 z-30 lg:static lg:flex lg:w-[14%] lg:justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 220,
                    }}
                    className="relative"
                  >
                    {/* Outer Pulse */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.25, 0, 0.25],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                    />

                    {/* Second Pulse */}
                    <motion.div
                      animate={{
                        scale: [1, 1.9, 1],
                        opacity: [0.18, 0, 0.18],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                    />

                    {/* Gold Ring */}
                    <div className="absolute -inset-2 rounded-full border border-yellow-400/30" />

                    {/* Main Circle */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className={`relative flex h-14 w-14 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_50px_rgba(250,204,21,.45)]`}
                    >
                      {/* Inner Glass */}
                      <div className="absolute inset-[3px] rounded-full bg-black/15 backdrop-blur-md" />
                      <Icon className="relative z-20 text-black" size={24} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute rounded-full bg-yellow-300/30 blur-sm"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}
