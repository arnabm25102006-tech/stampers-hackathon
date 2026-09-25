"use client";

import Image from "next/image";

const baloonLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/sponsors/ChatGPT%20Image%20Aug%2012%2C%202026%2C%2009_36_19%20PM%20%281%29.png";

const unstopLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-white py-10 text-black sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-7 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500">
            Our Sponsors
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Powering STAMPERS
          </h2>
        </div>

        {/* Sponsors */}
        <div className="flex flex-col items-center justify-center gap-7 sm:flex-row sm:gap-16">
          {/* BALOON */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Title Partner
            </p>

            <div className="flex h-16 items-center justify-center">
              <Image
                src={baloonLogo}
                alt="BALOON"
                width={180}
                height={70}
                className="max-h-16 w-auto object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-12 w-px bg-gray-200 sm:block" />

          {/* UNSTOP */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Powered by
            </p>

            <div className="flex h-16 items-center justify-center">
              <Image
                src={unstopLogo}
                alt="Unstop"
                width={180}
                height={70}
                className="max-h-16 w-auto object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}