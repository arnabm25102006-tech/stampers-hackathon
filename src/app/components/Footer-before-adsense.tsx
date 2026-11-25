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
    <footer className="relative overflow-hidden border-t-2 border-[#D39A24] bg-[#0B1F3A] text-white">

      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#D39A24 1px, transparent 1px), linear-gradient(90deg, #D39A24 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8">

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <Link
              href="/"
              className="inline-block transition-opacity duration-300 hover:opacity-80"
            >
              <div className="inline-flex items-center justify-center border border-[#D39A24] bg-white px-3 py-2">
                <img
                  src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png"
                  alt="STAMPERS"
                  className="h-7 w-auto object-contain"
                />
              </div>

              <p className="mt-1.5 text-[8px] font-semibold tracking-[0.35em] text-[#D39A24]">
                COMPETITION PLATFORM
              </p>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-5 text-white/60">
              India's next-generation innovation platform connecting
              students, creators and future entrepreneurs through
              technology.
            </p>

            <div className="mt-3 h-[2px] w-12 bg-[#D39A24]" />

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
              Quick Links
            </h3>

            <div className="mt-3 space-y-1.5">

              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-[#D39A24]"
                >
                  {link.title}
                </Link>
              ))}

            </div>

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
              Contact
            </h3>

            <div className="mt-3 space-y-2">

              {/* Email */}

              <a
                href="mailto:stampersbusiness@gmail.com"
                className="group flex items-start gap-2.5"
              >

                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D39A24]"
                />

                <span className="text-xs text-white/60 transition-colors duration-300 group-hover:text-[#D39A24]">
                  stampersbusiness@gmail.com
                </span>

              </a>

              {/* Phone */}

              <div className="flex items-start gap-2.5">

                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D39A24]"
                />

                <div className="space-y-0.5">

                  <a
                    href="tel:+919749876106"
                    className="block text-xs text-white/60 transition-colors duration-300 hover:text-[#D39A24]"
                  >
                    +91 97498 76106
                  </a>

                  <a
                    href="tel:+919647531070"
                    className="block text-xs text-white/60 transition-colors duration-300 hover:text-[#D39A24]"
                  >
                    +91 96475 31070
                  </a>

                  <a
                    href="tel:+919800031906"
                    className="block text-xs text-white/60 transition-colors duration-300 hover:text-[#D39A24]"
                  >
                    +91 98000 31906
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="flex items-start gap-2.5">

                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D39A24]"
                />

                <span className="text-xs text-white/60">
                  Kolkata, West Bengal, India
                </span>

              </div>

            </div>

          </div>

          {/* =================================================
              FOLLOW US
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#D39A24]">
              Follow Us
            </h3>

            <p className="mt-3 text-xs leading-5 text-white/60">
              Stay connected with STAMPERS for competitions,
              announcements and important updates.
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-3 flex flex-wrap gap-2">

              {/* Instagram */}

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="relative z-20 flex h-9 w-9 cursor-pointer items-center justify-center border border-[#D39A24]/40 bg-[#0B1F3A] text-white transition-all duration-300 hover:border-[#D39A24] hover:bg-[#D39A24] hover:text-[#0B1F3A]"
              >
                <svg
                  width="17"
                  height="17"
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
                className="relative z-20 flex h-9 w-9 cursor-pointer items-center justify-center border border-[#D39A24]/40 bg-[#0B1F3A] text-white transition-all duration-300 hover:border-[#D39A24] hover:bg-[#D39A24] hover:text-[#0B1F3A]"
              >
                <svg
                  width="17"
                  height="17"
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
                className="relative z-20 flex h-9 w-9 cursor-pointer items-center justify-center border border-[#D39A24]/40 bg-[#0B1F3A] text-white transition-all duration-300 hover:border-[#D39A24] hover:bg-[#D39A24] hover:text-[#0B1F3A]"
              >
                <svg
                  width="17"
                  height="17"
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
                className="relative z-20 flex h-9 w-9 cursor-pointer items-center justify-center border border-[#D39A24]/40 bg-[#0B1F3A] text-white transition-all duration-300 hover:border-[#D39A24] hover:bg-[#D39A24] hover:text-[#0B1F3A]"
              >
                <MessageCircle size={17} />
              </a>

            </div>

            {/* Official Email */}

            <div className="mt-3 border border-[#D39A24]/40 bg-white/[0.04] p-2.5">

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
                Official Email
              </p>

              <a
                href="mailto:support@stampers.in"
                className="mt-1 block text-xs font-semibold text-white transition-colors duration-300 hover:text-[#D39A24]"
              >
                support@stampers.in
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mt-6 flex items-center justify-between border-t border-[#D39A24]/25 pt-4">

          <p className="text-[11px] font-medium text-white/40">
            © 2026 STAMPERS™
          </p>

          {/* Back To Top */}

          <motion.button
            type="button"
            whileHover={{
              y: -3,
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
            className="relative z-20 flex h-8 w-8 items-center justify-center border border-[#D39A24] bg-[#D39A24] text-[#0B1F3A] transition hover:bg-white"
          >
            <ArrowUp size={15} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}