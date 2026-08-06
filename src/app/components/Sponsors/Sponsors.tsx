"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  {
    name: "Title Sponsor",
    logo: "/images/sponsors/title.png",
  },
  {
    name: "Technology Partner",
    logo: "/images/sponsors/tech.png",
  },
  {
    name: "Innovation Partner",
    logo: "/images/sponsors/innovation.png",
  },
  {
    name: "Community Partner",
    logo: "/images/sponsors/community.png",
  },
  {
    name: "Education Partner",
    logo: "/images/sponsors/education.png",
  },
  {
    name: "Media Partner",
    logo: "/images/sponsors/media.png",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[#050507] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,53,94,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold tracking-[0.35em] text-red-300">
            SPONSORS & PARTNERS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            POWERING
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
              INNOVATION
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            STAMPERS National Hackathon 2K26 is supported by
            organizations committed to empowering student innovation.
          </p>
        </motion.div>

        {/* Sponsors Grid */}

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {sponsors.map((sponsor, index) => (

            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-500/40"
            >

              <div className="flex h-40 items-center justify-center rounded-2xl bg-black/20">

                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={180}
                  height={80}
                  className="object-contain opacity-80 transition duration-300 group-hover:opacity-100"
                />

              </div>

              <h3 className="mt-8 text-center text-xl font-bold text-white">
                {sponsor.name}
              </h3>

            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-red-500/20 bg-white/[0.04] p-12 text-center backdrop-blur-xl"
        >
          <h3 className="text-4xl font-black text-white">
            Become a Sponsor
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Join us in supporting the next generation of innovators and
            showcase your brand to talented students from across India.
          </p>

          <a
            href="mailto:support@stampers.in"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-8 py-4 text-lg font-bold text-white transition hover:scale-105"
          >
            Partner With Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}