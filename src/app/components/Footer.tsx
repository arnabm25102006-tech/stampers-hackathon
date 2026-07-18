"use client";

import {
  
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

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
              STAMPERS
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              STAMPERS Open Innovation Hackathon 2026 brings together
              students, developers, designers, and innovators to solve
              real-world challenges through creativity and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#timeline" className="hover:text-yellow-400 transition">
                  Timeline
                </a>
              </li>

              <li>
                <a href="#tracks" className="hover:text-yellow-400 transition">
                  Tracks
                </a>
              </li>

              <li>
                <a href="#prizes" className="hover:text-yellow-400 transition">
                  Prizes
                </a>
              </li>

              <li>
                <a
                  href="#event-details"
                  className="hover:text-yellow-400 transition"
                >
                  Event Details
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
                <span>contact@stampers.in</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="text-yellow-400" size={18} />
                <span>+91 9749876106
                      +91 9647531070
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-yellow-400" size={18} />
                <span>India</span>
              </div>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Follow Us
            </h3>

            <p className="mt-6 text-gray-400">
              Follow STAMPERS for updates, announcements, and future hackathons.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 transition hover:border-yellow-400 hover:bg-yellow-500/10"
              >
                
              </a>

              <a
                href="#"
                className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 transition hover:border-yellow-400 hover:bg-yellow-500/10"
              >
              
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-center text-gray-500 md:flex-row">

          <p>
            © 2026 STAMPERS. All Rights Reserved.
          </p>

          <p>
            Built with ❤️ by the STAMPERS Team
          </p>

        </div>

      </div>

    </footer>
  );
}