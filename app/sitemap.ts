import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  // normalized without trailing slash to avoid duplicate slashes when joining routes
  const baseUrl = "https://ai-model-gen-lac.vercel.app";

  const staticRoutes = ["", "/contact", "/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.6,
  }));

  const landingRoutes = landingPages.map((page) => ({
    url: `${baseUrl}/landing/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...landingRoutes];
}