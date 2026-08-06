"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507]">

      <HeroBackground />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-28 lg:flex-row">

        <HeroContent />

        <HeroCanvas />

      </div>

      <HeroStats />

    </section>
  );
}