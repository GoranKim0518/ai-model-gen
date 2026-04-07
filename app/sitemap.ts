import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-model-gen-lac.vercel.app";

  // 고정된 lastModified (중요: 매 요청마다 바뀌면 안 됨)
  const LAST_MODIFIED = new Date("2026-04-06");

  const staticRoutes = ["", "/contact", "/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.5,
  }));

  const landingRoutes = landingPages.map((page) => ({
    url: `${baseUrl}/landing/${page.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...landingRoutes];
}