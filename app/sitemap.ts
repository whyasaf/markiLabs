import type { MetadataRoute } from "next";
import { CASES } from "@/data/cases";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...CASES.map((c) => `/projeler/${c.slug}`)];
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
