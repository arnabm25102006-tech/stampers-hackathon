
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const logoUrl =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export const metadata: Metadata = {
  title: "STAMPERS | Think. Build. Compete.",
  description:
    "STAMPERS is a platform for hackathons, competitions, innovation, and student opportunities.",
  icons: {
    icon: [
      {
        url: logoUrl,
        type: "image/png",
      },
    ],
    apple: logoUrl,
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
