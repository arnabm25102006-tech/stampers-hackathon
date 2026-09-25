import type { Metadata } from "next";

import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";

import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "STAMPERS",
    template: "%s | STAMPERS",
  },

  description:
    "STAMPERS — a platform for discovering competitions, challenges, communities and opportunities.",

  keywords: [
    "STAMPERS",
    "competitions",
    "challenges",
    "gaming",
    "coding",
    "creative",
    "community",
  ],

  applicationName: "STAMPERS",
  authors: [{ name: "STAMPERS" }],
  creator: "STAMPERS",
  publisher: "STAMPERS",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}