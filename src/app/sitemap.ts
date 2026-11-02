import type { MetadataRoute } from "next";

const BASE_URL = "https://www.stampers.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = [
    { route: "", priority: 1.0, frequency: "weekly" as const },
    { route: "/explore", priority: 0.9, frequency: "weekly" as const },
    { route: "/about", priority: 0.7, frequency: "monthly" as const },
    { route: "/contact", priority: 0.6, frequency: "monthly" as const },
    { route: "/privacy-policy", priority: 0.4, frequency: "yearly" as const },
    { route: "/cookie-policy", priority: 0.4, frequency: "yearly" as const },
    { route: "/terms-and-conditions", priority: 0.4, frequency: "yearly" as const },
    { route: "/competitions/1", priority: 0.8, frequency: "monthly" as const },
    { route: "/axion-recap", priority: 0.8, frequency: "monthly" as const },
    { route: "/axion/results", priority: 0.7, frequency: "monthly" as const },
    { route: "/axion/leaderboard", priority: 0.6, frequency: "monthly" as const },
  ];

  return publicRoutes.map(({ route, priority, frequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: frequency,
    priority,
  }));
}
