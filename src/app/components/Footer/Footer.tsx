"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Tracks",
    href: "#tracks",
  },
  {
    title: "Timeline",
    href: "#timeline",
  },
  {
    title: "Rewards",
    href: "#rewards",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Footer() {
  const socialLinks = {
    instagram: "https://www.instagram.com/stampersorg/",
    facebook: "https://www.facebook.com/share/18zHes6Qd5/",
    linkedin: "https://www.linkedin.com/company/stampers/",
    whatsapp:
      "https://whatsapp.com/channel/0029VbDky5U6buMMCOweM43a",
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040404]">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(234,179,8,.08),transparent_70%)]" />

      {/* Background Grid */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid gap-14 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}

          <div>

            <Link
              href="/"
              className="inline-block transition-opacity duration-300 hover:opacity-80"
            >
              <h2 className="text-4xl font-black tracking-tight text-white">
                STAMPERS
                <span className="text-yellow-400">™</span>
              </h2>

              <p className="mt-2 text-[9px] font-semibold tracking-[0.35em] text-gray-600">
                COMPETITION PLATFORM
              </p>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
              India's next-generation innovation platform connecting
              students, creators and future entrepreneurs through
              technology.
            </p>

            <div className="mt-7 h-px w-20 bg-gradient-to-r from-yellow-400 to-transparent" />

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
                >
                  {link.title}
                </Link>
              ))}

            </div>

          </div>


          {/* =========================
              CONTACT
          ========================== */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}

              <a
                href="mailto:support@stampers.in"
                className="group flex items-start gap-3"
              >

                <Mail
                  size={20}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span className="text-gray-400 transition-colors duration-300 group-hover:text-yellow-400">
                  support@stampers.in
                </span>

              </a>


              {/* Phone */}

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <div className="space-y-1">

                  <a
                    href="tel:+919749876106"
                    className="block text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                  >
                    +91 97498 76106
                  </a>

                  <a
                    href="tel:+919647531070"
                    className="block text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                  >
                    +91 96475 31070
                  </a>
                  <a
                    href="tel:+919749876106"
                    className="block text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                  >
                    +91 97498 76106
                  </a>

                </div>

              </div>


              {/* Location */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span className="text-gray-400">
                  Kolkata, West Bengal, India
                </span>

              </div>

            </div>

          </div>


          {/* =========================
              FOLLOW US
          ========================== */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Follow Us
            </h3>

            <p className="mt-6 leading-7 text-gray-400">
              Stay connected with STAMPERS for competitions,
              announcements and important updates.
            </p>


            {/* SOCIAL ICONS */}

            <div className="mt-8 flex flex-wrap gap-4">

              {/* Instagram */}

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/[0.08] hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >

                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>

              </a>


              {/* Facebook */}

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/[0.08] hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >

                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1z" />
                </svg>

              </a>


              {/* LinkedIn */}

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/[0.08] hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >

                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3ZM21 13.9c0-3.75-2-5.5-4.7-5.5-2.15 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.47v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.32V21H21v-7.1Z" />
                </svg>

              </a>


              {/* WhatsApp */}

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
                className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/[0.08] hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <MessageCircle size={25} />
              </a>

            </div>


            {/* Official Email */}

            <div className="mt-8 rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.025] p-5">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                Official Email
              </p>

              <a
                href="mailto:support@stampers.in"
                className="mt-2 block text-lg font-semibold text-white transition-colors duration-300 hover:text-yellow-400"
              >
                support@stampers.in
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM
        ========================== */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">

          <div>

            <p className="text-sm text-gray-500">
              © 2026 STAMPERS™ National Hackathon.
            </p>

            <p className="mt-1 text-xs text-gray-700">
              All Rights Reserved.
            </p>

          </div>


          {/* Back To Top */}

          <motion.button
            type="button"
            whileHover={{
              y: -5,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            aria-label="Back to top"
            className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/20"
          >
            <ArrowUp size={20} />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}