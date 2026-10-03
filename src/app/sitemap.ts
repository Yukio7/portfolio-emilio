import type { MetadataRoute } from "next";

import { site } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/realisations", "/a-propos", "/contact"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
