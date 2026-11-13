import type { MetadataRoute } from "next";
import { CASES } from "@/data/cases";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/hizmetler",
    "/hakkimizda",
    "/iletisim",
    ...CASES.map((c) => `/projeler/${c.slug}`),
    "/kvkk",
    "/gizlilik",
    "/kosullar",
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
