"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { title: "About", href: "#about" },
  { title: "Tracks", href: "#tracks" },
  { title: "Timeline", href: "#timeline" },
  { title: "Rewards", href: "#rewards" },
  { title: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040404]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,53,94,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black text-white">
              STAMPERS<span className="text-red-500">™</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              India's next-generation innovation platform connecting
              students, creators and future entrepreneurs through
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 transition hover:text-red-400"
                >
                  {link.title}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">
                <Mail className="text-red-400" />
                <span className="text-gray-400">
                  support@stampers.in
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-red-400" />
                <span className="text-gray-400">
                  +91 97498 76106
                  <br />
                  +91 96475 31070
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-400" />
                <span className="text-gray-400">
                  Kolkata, West Bengal, India
                </span>
              </div>

            </div>

          </div>

          {/* Follow Us */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Stay Connected
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Follow all official announcements and important
              updates through our communication channels.
            </p>

            <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">

              <p className="text-sm uppercase tracking-widest text-red-400">
                Official Email
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                support@stampers.in
              </p>

            </div>

            <div className="mt-5 rounded-2xl border border-red-500/20 bg-white/5 p-5">

              <p className="text-sm uppercase tracking-widest text-red-400">
                Registration Support
              </p>

              <p className="mt-2 text-gray-300">
                +91 97498 76106
              </p>

              <p className="text-gray-300">
                +91 96475 31070
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">

          <p className="text-gray-500">
            © 2026 STAMPERS™ National Hackathon. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30"
          >
            <ArrowUp className="text-white" />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}