// "use client";

// import { motion } from "framer-motion";

// const stats = [
//   {
//     number: "🎁",
//     title: "Exciting Goodies",
//     subtitle: "Winner Rewards",
//   },
//   {
//     number: "50+",
//     title: "Participants",
//     subtitle: "Expected",
//   },
//   {
//     number: "10+",
//     title: "Colleges",
//     subtitle: "Across India",
//   },
//   {
//     number: "24",
//     title: "Hours",
//     subtitle: "Innovation Sprint",
//   },
// ];

// export default function HeroStats() {
//   return (
//     <section className="relative">

//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />
//       </div>

//       <div className="grid gap-8 md:grid-cols-4">

//         {stats.map((item, index) => (
//           <motion.div
//             key={item.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: index * 0.15,
//               duration: 0.7,
//             }}
//             whileHover={{
//               y: -12,
//               scale: 1.04,
//             }}
//             className="group relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/[0.05] p-8 text-center backdrop-blur-3xl transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_50px_rgba(250,204,21,0.25)]"
//           >
//             {/* Animated Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

//             {/* Top Glow */}
//             <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-700 group-hover:bg-yellow-400/20" />

//             {/* Bottom Glow */}
//             <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-all duration-700 group-hover:bg-orange-500/20" />

//             {/* Shine */}
//             <div className="absolute left-[-120%] top-0 h-full w-20 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

//             <div className="relative z-10">

//               <motion.h2
//                 animate={{
//                   scale: [1, 1.03, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                 }}
//                 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl"
//               >
//                 {item.number}
//               </motion.h2>

//               <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

//               <h3 className="mt-6 text-xl font-bold text-white">
//                 {item.title}
//               </h3>

//               <p className="mt-2 text-sm tracking-wider text-gray-400">
//                 {item.subtitle}
//               </p>

//             </div>

//             {/* Bottom Border Animation */}
//             <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Users,
  Trophy,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Gift,
    number: "Exclusive",
    title: "Gifts & Goodies",
    subtitle: "Winner Rewards",
    color: "from-yellow-300 via-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    number: "20+",
    title: "Teams",
    subtitle: "Expected",
    color: "from-amber-300 via-yellow-500 to-orange-500",
  },
  {
    icon: Sparkles,
    number: "20+",
    title: "Participants",
    subtitle: "Across Colleges",
    color: "from-orange-400 via-yellow-500 to-yellow-300",
  },
  {
    icon: Trophy,
    number: "Winner",
    title: "Recognition",
    subtitle: "Certificates Included",
    color: "from-yellow-300 via-amber-500 to-orange-500",
  },
];

export default function HeroStats() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Aurora */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute
        left-1/2
        top-1/2
        -z-10
        h-[900px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-gradient-to-r
        from-yellow-500/15
        via-orange-500/10
        to-yellow-300/15
        blur-[180px]"
      />

      {/* Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.25, .45, .25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute
        -left-48
        top-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-yellow-500/15
        blur-[140px]"
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [.15, .35, .15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute
        -right-40
        bottom-10
        h-[500px]
        w-[500px]
        rounded-full
        bg-orange-500/15
        blur-[150px]"
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Container */}

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 backdrop-blur-2xl"
        >

          <span className="relative flex h-3 w-3">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400" />

          </span>

          <span className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-300">

            Event Highlights

          </span>

        </motion.div>

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl text-center text-5xl font-black leading-tight text-white lg:text-7xl"
        >

          Everything You Need

          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">

            To Know

          </span>

        </motion.h2>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .35 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-300"
        >

          Join the STAMPERS Open Innovation Hackathon and compete with talented innovators. Build, learn and win exclusive rewards.

        </motion.p>

        {/* Cards Start */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

  {stats.map((item, index) => {

    const Icon = item.icon;

    return (

      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.12,
          duration: 0.8,
          type: "spring",
        }}
        whileHover={{
          y: -16,
          scale: 1.03,
        }}
        className="group relative overflow-hidden rounded-[36px]
        border border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-3xl"
      >

        {/* Animated Border */}

        <motion.div
          animate={{
            opacity: [.15,.35,.15],
          }}
          transition={{
            duration:4,
            repeat:Infinity,
          }}
          className={`absolute inset-0 rounded-[36px]
          bg-gradient-to-br
          ${item.color}`}
        />

        <div className="absolute inset-[1px] rounded-[35px] bg-black/80 backdrop-blur-3xl" />

        {/* Top Glow */}

        <motion.div
          animate={{
            scale:[1,1.15,1],
            opacity:[.15,.4,.15],
          }}
          transition={{
            duration:6,
            repeat:Infinity,
          }}
          className={`absolute
          -top-20
          -right-20
          h-56
          w-56
          rounded-full
          bg-gradient-to-br
          ${item.color}
          blur-[90px]`}
        />

        {/* Bottom Glow */}

        <motion.div
          animate={{
            scale:[1.1,1,1.1],
            opacity:[.1,.25,.1],
          }}
          transition={{
            duration:8,
            repeat:Infinity,
          }}
          className={`absolute
          -bottom-20
          -left-20
          h-56
          w-56
          rounded-full
          bg-gradient-to-br
          ${item.color}
          blur-[100px]`}
        />

        {/* Shine */}

        <div
          className="absolute
          left-[-150%]
          top-0
          h-full
          w-28
          rotate-12
          bg-white/10
          blur-xl
          transition-all
          duration-[1400ms]
          group-hover:left-[140%]"
        />

        {/* Content */}

        <div className="relative z-20">

          {/* Icon */}

          <motion.div
            whileHover={{
              rotate:360,
            }}
            transition={{
              duration:.8,
            }}
            className={`flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            ${item.color}
            shadow-[0_0_60px_rgba(250,204,21,.25)]`}
          >

            <div className="absolute inset-[4px] rounded-full bg-black/25" />

            <Icon
              size={34}
              className="relative z-10 text-black"
            />

          </motion.div>

          {/* Number */}

          <motion.h3
            animate={{
              scale:[1,1.02,1],
            }}
            transition={{
              duration:4,
              repeat:Infinity,
            }}
            className="mt-10 text-5xl font-black"
          >

            <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>

              {item.number}

            </span>

          </motion.h3>

          {/* Divider */}

          <div className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r ${item.color}`} />

          {/* Title */}

          <h4 className="mt-6 text-2xl font-bold text-white">

            {item.title}

          </h4>

          {/* Subtitle */}

          <p className="mt-3 leading-7 text-gray-400">

            {item.subtitle}

          </p>

        </div>

        {/* Bottom Accent */}

        <div
          className={`absolute
          bottom-0
          left-0
          h-[3px]
          w-full
          bg-gradient-to-r
          ${item.color}`}
        />

      </motion.div>

    );

  })}

</div>
{/* ================= Floating Particles ================= */}

<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {[...Array(20)].map((_, index) => (

    <motion.div
      key={index}
      animate={{
        y: [-20, -140],
        opacity: [0, 0.8, 0],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 8 + Math.random() * 8,
        repeat: Infinity,
        delay: index * 0.4,
        ease: "linear",
      }}
      className="absolute rounded-full bg-yellow-300/30"
      style={{
        width: `${4 + Math.random() * 6}px`,
        height: `${4 + Math.random() * 6}px`,
        left: `${Math.random() * 100}%`,
        bottom: "-20px",
      }}
    />

  ))}

</div>

{/* ================= Premium Divider ================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: .3 }}
  className="relative mt-24 overflow-hidden rounded-[36px]
  border border-yellow-500/20
  bg-white/[0.04]
  backdrop-blur-3xl"
>

  {/* Glow */}

  <div className="absolute inset-0">

    <div className="absolute left-0 top-0 h-full w-64 bg-gradient-to-r from-yellow-500/10 to-transparent blur-3xl" />

    <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-orange-500/10 to-transparent blur-3xl" />

  </div>

  <div className="relative grid gap-8 px-10 py-10 md:grid-cols-4">

    {[
      "Open Innovation",
      "Industry Exposure",
      "Certificates",
      "Exclusive Goodies",
    ].map((item) => (

      <motion.div
        key={item}
        whileHover={{
          y: -5,
        }}
        className="flex items-center justify-center gap-3"
      >

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [.5, 1, .5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-3 w-3 rounded-full bg-yellow-400"
        />

        <span className="text-center font-semibold tracking-wide text-white">

          {item}

        </span>

      </motion.div>

    ))}

  </div>

</motion.div>
{/* ================= PREMIUM CTA ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.2,
  }}
  className="relative mt-28 overflow-hidden rounded-[42px]
  border border-yellow-500/20
  bg-gradient-to-br
  from-yellow-500/10
  via-black
  to-orange-500/10
  p-12
  text-center
  backdrop-blur-3xl
  lg:p-20"
>

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.15, 0.35, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute
    left-1/2
    top-1/2
    h-[550px]
    w-[550px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-yellow-500/20
    blur-[180px]"
  />

  {/* Floating Sparkles */}

  {[...Array(12)].map((_, index) => (

    <motion.div
      key={index}
      animate={{
        y: [-20, -120],
        opacity: [0, 1, 0],
        scale: [0.6, 1.2, 0.6],
      }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        delay: index * 0.4,
      }}
      className="absolute h-2 w-2 rounded-full bg-yellow-300"
      style={{
        left: `${10 + index * 7}%`,
        bottom: "10%",
      }}
    />

  ))}

  <div className="relative z-20">

    <p className="text-sm font-semibold uppercase tracking-[0.5em] text-yellow-300">

      STAMPERS 2026

    </p>

    <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

      Build.

      <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">

        Compete.

      </span>

      Win.

    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

      Join 20+ teams from different colleges, solve real-world problems,
      showcase your creativity, and compete for exclusive gifts, goodies,
      certificates, and recognition.

    </p>

    {/* CTA Button */}

    <motion.a
      href="/register"
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="group relative mt-12 inline-flex items-center gap-4 overflow-hidden rounded-full
      bg-gradient-to-r
      from-yellow-300
      via-yellow-500
      to-orange-500
      px-12
      py-5
      text-xl
      font-bold
      text-black
      shadow-[0_20px_80px_rgba(250,204,21,.45)]"
    >

      <span className="absolute left-[-120%] top-0 h-full w-28 rotate-12 bg-white/40 blur-xl transition-all duration-1000 group-hover:left-[140%]" />

      Register Now

      <motion.span
        animate={{
          x: [0, 6, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        →
      </motion.span>

    </motion.a>

  </div>

</motion.div>

{/* Bottom Fade */}

<div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-black via-black/80 to-transparent" />

      </div>
    </section>
  );
}