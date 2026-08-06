"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/10 bg-black text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
              STAMPERS™
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              STAMPERS National Hackathon 2K26 is India's innovation
              platform connecting students, developers and future
              entrepreneurs to solve real-world challenges.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>
                <a href="#about" className="transition hover:text-yellow-400">
                  About
                </a>
              </li>

              <li>
                <a href="#tracks" className="transition hover:text-yellow-400">
                  Tracks
                </a>
              </li>

              <li>
                <a href="#timeline" className="transition hover:text-yellow-400">
                  Timeline
                </a>
              </li>

              <li>
                <a href="#rewards" className="transition hover:text-yellow-400">
                  Rewards
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-yellow-400">
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3 text-gray-400">

                <Mail className="text-yellow-400" size={18} />

                <span>support@stampers.in</span>

              </div>

              <div className="flex items-center gap-3 text-gray-400">

                <Phone className="text-yellow-400" size={18} />

                <span>
                  +91 97498 76106
                  <br />
                  +91 96475 31070
                </span>

              </div>

              <div className="flex items-center gap-3 text-gray-400">

                <MapPin className="text-yellow-400" size={18} />

                <span>Kolkata, West Bengal, India</span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Follow Us
            </h3>

            <p className="mt-4 text-gray-400">
              Stay connected for updates.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500/20"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/20"
              >
                <FaFacebook className="text-xl" />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-500/20"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-400/20"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white hover:bg-white/20"
              >
                <FaXTwitter className="text-xl" />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/20"
              >
                <FaYoutube className="text-xl" />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-gray-500">
            © 2026 STAMPERS™ National Hackathon. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Built with ❤️ by the STAMPERS Team
          </p>

          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg"
          >
            <ArrowUp size={20} />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}