"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Trophy,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Registration",
    value: "OPEN",
    icon: CheckCircle2,
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Team Size",
    value: "2 - 4",
    icon: Users,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Theme",
    value: "Open Innovation",
    icon: Sparkles,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Gift",
    value: "₹Exclusive Goodies",
    icon: Trophy,
    color: "from-yellow-300 via-yellow-500 to-orange-500",
  },
];

export default function Countdown() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-36 text-white">
      {/* Hero */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mx-auto max-w-5xl text-center"
>
  {/* Live Badge */}

  <motion.div
    animate={{
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 backdrop-blur-2xl"
  >
    <div className="relative">

      <span className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-60" />

      <span className="relative block h-3 w-3 rounded-full bg-yellow-400" />

    </div>

    <span className="text-xs font-bold uppercase tracking-[0.45em] text-yellow-300">
      Registration Live
    </span>

  </motion.div>

  {/* Title */}

  <motion.h1
    initial={{ scale: .9 }}
    whileInView={{ scale: 1 }}
    transition={{
      duration: .8,
    }}
    className="mt-10 text-5xl font-black leading-tight sm:text-6xl lg:text-8xl"
  >
    <span className="text-white">
      THE
    </span>

    <br />

    <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
      WAIT IS OVER
    </span>

  </motion.h1>

  {/* Subtitle */}

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{
      delay: .3,
      duration: .8,
    }}
    className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 lg:text-xl"
  >
    Registration for the
    <span className="font-bold text-yellow-400">
      {" "}STAMPERS Open Innovation Hackathon
    </span>
    {" "}is officially open.

    Form your dream team,
    build innovative solutions,
    compete with brilliant minds,
    and showcase your talent on a national platform.
  </motion.p>

  {/* CTA Buttons */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: .4,
      duration: .7,
    }}
    className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
  >

   <motion.a
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  href="/register"
  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-8 py-4 font-bold text-black shadow-xl shadow-yellow-500/40 transition"
>
  <Rocket size={22} />

  Register Now

  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</motion.a>

    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      href="#timeline"
      className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:border-yellow-500/40 hover:bg-white/10"
    >
      View Timeline
    </motion.a>

  </motion.div>

</motion.div>
{/* Launch Cards */}

<div className="mt-24 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

  {stats.map((item, index) => {

    const Icon = item.icon;

    return (

      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.12,
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
       className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-8"
      >

        {/* Animated Border */}

        <div
          className={`absolute inset-0 rounded-[32px]
          bg-gradient-to-br
          ${item.color}
          opacity-10
          transition-all
          duration-700
          group-hover:opacity-20`}
        />

        {/* Top Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.15, .35, .15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className={`absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-gradient-to-br
          ${item.color}
          blur-3xl`}
        />

        {/* Bottom Glow */}

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [.15, .3, .15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className={`absolute
          -bottom-20
          -left-20
          h-44
          w-44
          rounded-full
          bg-gradient-to-br
          ${item.color}
          blur-3xl`}
        />

        {/* Shine */}

        <div
          className="absolute
          left-[-120%]
          top-0
          h-full
          w-24
          rotate-12
          bg-white/10
          blur-xl
          transition-all
          duration-1000
          group-hover:left-[130%]"
        />

        {/* Content */}

        <div className="relative z-20">

          {/* Icon */}

          <motion.div
            whileHover={{
              rotate: 360,
            }}
            transition={{
              duration: .8,
            }}
            className={`flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            ${item.color}
            shadow-[0_0_40px_rgba(250,204,21,.25)]`}
          >

            <div className="absolute inset-[4px] rounded-full bg-black/20 backdrop-blur-md" />

            <Icon
              className="relative z-10 text-black"
              size={34}
            />

          </motion.div>

          {/* Title */}

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">
            {item.title}
          </p>

          {/* Value */}

          <h3 className="mt-4 text-3xl font-black leading-tight text-white">

            {item.value}

          </h3>

        </div>

        {/* Bottom Accent */}

        <div
          className={`absolute
          bottom-0
          left-0
          h-1
          w-full
          bg-gradient-to-r
          ${item.color}`}
        />

      </motion.div>

    );

  })}

</div>
{/* Registration Live Banner */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: .8,
    delay: .2,
  }}
  className="relative mt-24 overflow-hidden rounded-[40px]
  border border-yellow-500/20
  bg-white/[0.05]
  backdrop-blur-3xl"
>

  {/* Background Glow */}

  <div className="absolute inset-0">

    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [.15, .35, .15],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
      }}
      className="absolute
      -right-24
      -top-24
      h-80
      w-80
      rounded-full
      bg-yellow-500/20
      blur-[140px]"
    />

    <motion.div
      animate={{
        scale: [1.1, 1, 1.1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
      }}
      className="absolute
      -bottom-32
      -left-32
      h-96
      w-96
      rounded-full
      bg-orange-500/10
      blur-[180px]"
    />

  </div>

  <div className="relative z-20 p-8 lg:p-14">

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* Left */}

      <div>

        {/* Live Badge */}

        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

          <span className="relative flex h-3 w-3">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

          </span>

          <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-300">
            LIVE NOW
          </span>

        </div>

        <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">

          Registration is

          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">

            Officially Open

          </span>

        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">

          Join India's next generation of innovators.

          Form your team, solve real-world challenges,

          build impactful solutions,

          and compete for exciting prizes and national recognition.

        </p>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-5">

        {[
          "Open Innovation",
          "National Level",
          "Certificates",
          "Goodies",
        ].map((feature) => (

          <motion.div
            key={feature}
            whileHover={{
              scale: 1.05,
            }}
            className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">

                <CheckCircle2
                  size={22}
                  className="text-black"
                />

              </div>

              <span className="font-semibold text-white">

                {feature}

              </span>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</motion.div>
{/* ========================= CTA ========================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.3,
  }}
  className="relative mt-20 overflow-hidden rounded-[40px]
  border border-yellow-500/20
  bg-gradient-to-br
  from-yellow-500/10
  via-black
  to-orange-500/10
  p-10
  text-center
  backdrop-blur-3xl
  lg:p-16"
>

  {/* Animated Glow */}

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [.15, .35, .15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute
    left-1/2
    top-1/2
    h-[500px]
    w-[500px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-yellow-500/20
    blur-[180px]"
  />

  {/* Shine */}

  <div
    className="absolute
    left-[-120%]
    top-0
    h-full
    w-28
    rotate-12
    bg-white/10
    blur-xl
    transition-all
    duration-[1500ms]
    hover:left-[130%]"
  />

  <div className="relative z-20">

    {/* Rocket */}

    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 shadow-[0_0_60px_rgba(250,204,21,.4)]"
    >
      <Rocket
        size={42}
        className="text-black"
      />
    </motion.div>

    {/* Heading */}

    <h2 className="mt-10 text-4xl font-black leading-tight lg:text-6xl">

      Ready to

      <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">

        Build Something Amazing?

      </span>

    </h2>

    {/* Description */}

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

      Bring your ideas to life.

      Meet talented developers.

      Learn from mentors.

      Compete nationally.

      Win prizes.

      This is your chance to create something extraordinary.

    </p>

    {/* Button */}

    <motion.a
  href="/register" // Change to your registration page
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  className="group mt-12 inline-flex items-center gap-4 rounded-full
  bg-gradient-to-r
  from-yellow-400
  via-yellow-500
  to-orange-500
  px-10
  py-5
  text-xl
  font-bold
  text-black
  shadow-[0_20px_60px_rgba(250,204,21,.35)]"
>
  Register Now

  <motion.div
    animate={{ x: [0, 6, 0] }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    <ArrowRight size={24} />
  </motion.div>
</motion.a>

    {/* Bottom Text */}

    <p className="mt-8 text-sm uppercase tracking-[0.35em] text-yellow-300">

      Limited Seats • National Level • Innovation Starts Here

    </p>

  </div>

</motion.div>
{/* ===================== LIVE STATS ===================== */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="mt-24"
>

  <div className="grid gap-6 md:grid-cols-3">

    {/* Participants */}

    <motion.div
      whileHover={{
        y:-8,
        scale:1.02,
      }}
      className="group relative overflow-hidden rounded-[30px]
      border border-white/10
      bg-white/[0.04]
      p-8
      backdrop-blur-3xl"
    >

      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10">

        <p className="text-xs uppercase tracking-[0.35em] text-yellow-300">
          EXPECTED
        </p>

        <h2 className="mt-4 text-6xl font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          20+
        </h2>

        <p className="mt-4 text-gray-300">
          Participants from colleges across India.
        </p>

      </div>

    </motion.div>

    {/* Teams */}

    <motion.div
      whileHover={{
        y:-8,
        scale:1.02,
      }}
      className="group relative overflow-hidden rounded-[30px]
      border border-white/10
      bg-white/[0.04]
      p-8
      backdrop-blur-3xl"
    >

      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative z-10">

        <p className="text-xs uppercase tracking-[0.35em] text-yellow-300">
          TEAMS
        </p>

        <h2 className="mt-4 text-6xl font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          20+
        </h2>

        <p className="mt-4 text-gray-300">
          Brilliant teams competing for the championship.
        </p>

      </div>

    </motion.div>

    {/* Prize */}

    <motion.div
      whileHover={{
        y:-8,
        scale:1.02,
      }}
      className="group relative overflow-hidden rounded-[30px]
      border border-white/10
      bg-white/[0.04]
      p-8
      backdrop-blur-3xl"
    >

      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative z-10">

        <p className="text-xs uppercase tracking-[0.35em] text-yellow-300">
          PRIZE 
        </p>

        <h2 className="mt-4 text-6xl font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          GOODIES
        </h2>

        <p className="mt-4 text-gray-300">
           certificates and exclusive goodies for the winners.
        </p>

      </div>

    </motion.div>

  </div>

</motion.div>
    </section>
  );
}
