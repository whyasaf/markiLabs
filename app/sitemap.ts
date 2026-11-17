import type { MetadataRoute } from "next";
import { CASES } from "@/data/cases";
import { LOCALES, localePath } from "@/lib/i18n";
import { SITE } from "@/lib/site";

/** Her sayfa iki dilde; her kayıt diğer dildeki karşılığını da bildirir (hreflang) */
export default function sitemap(): MetadataRoute.Sitemap {
  const internal = [
    "/",
    "/hizmetler",
    "/hakkimizda",
    "/iletisim",
    ...CASES.map((c) => `/projeler/${c.slug}`),
    "/kvkk",
    "/gizlilik",
    "/kosullar",
  ];
  const abs = (p: string) => `${SITE.url}${p === "/" ? "" : p}`;
  return internal.flatMap((p) =>
    LOCALES.map((lang) => ({
      url: abs(localePath(lang, p)),
      lastModified: new Date(),
      alternates: { languages: { tr: abs(localePath("tr", p)), en: abs(localePath("en", p)) } },
    })),
  );
}
