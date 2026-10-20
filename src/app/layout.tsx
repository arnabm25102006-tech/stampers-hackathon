
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stampers.in"),

  title: "STAMPERS | Think. Build. Compete.",

  description:
    "Discover hackathons, competitions, challenges, communities, and opportunities with STAMPERS.",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7077725283193979"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
