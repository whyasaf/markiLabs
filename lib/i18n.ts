/**
 * Dil ayarları ve adres çevirisi. Sunucu, istemci ve proxy.ts ortak kullanır (yan etkisiz, saf fonksiyonlar).
 *
 * Adres yapısı: Türkçe kökte (/hakkimizda), İngilizce /en altında ve İngilizce kelimelerle (/en/about).
 * Klasörler app/[lang]/ altında Türkçe adlarla durur ("iç adres"); proxy.ts genel adresleri iç adrese yazar.
 */

export const LOCALES = ["tr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "tr";

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

/** İç (Türkçe) adres parçası → İngilizce adres parçası. Listede olmayanlar (proje adları gibi) aynı kalır. */
export const EN_SEGMENTS: Record<string, string> = {
  hakkimizda: "about",
  hizmetler: "services",
  iletisim: "contact",
  projeler: "projects",
  gizlilik: "privacy",
  kosullar: "terms",
};
const TR_SEGMENTS: Record<string, string> = Object.fromEntries(Object.entries(EN_SEGMENTS).map(([tr, en]) => [en, tr]));

/** İngilizce adres parçalarını iç adrese çevirir: "/about" → "/hakkimizda" */
export const enToInternal = (path: string) =>
  path
    .split("/")
    .map((s) => TR_SEGMENTS[s] ?? s)
    .join("/");

/**
 * İç adresten o dildeki genel adresi üretir. "#" ve "?" kısımları korunur.
 *   localePath("tr", "/hakkimizda")      → "/hakkimizda"
 *   localePath("en", "/projeler/lecmic") → "/en/projects/lecmic"
 *   localePath("en", "/#isler")          → "/en#isler"
 */
export function localePath(lang: Locale, internal: string): string {
  const m = internal.match(/^([^?#]*)(.*)$/)!;
  const path = m[1] || "/";
  const rest = m[2];
  if (lang === "tr") return path + rest;
  const segs = path
    .split("/")
    .filter(Boolean)
    .map((s) => EN_SEGMENTS[s] ?? s);
  return (segs.length ? `/en/${segs.join("/")}` : "/en") + rest;
}

/**
 * Hem genel adresi (/en/about, /hakkimizda) hem iç adresi (/en/hakkimizda, /tr/hakkimizda) çözer.
 * Sunucuda usePathname iç adresi, tarayıcıda genel adresi verir; ikisi de aynı sonuca çıkar.
 */
export function parsePath(pathname: string): { lang: Locale; internal: string } {
  const segs = pathname.split("/").filter(Boolean);
  if (segs[0] === "en" || segs[0] === "tr") {
    const lang = segs[0];
    const rest = "/" + segs.slice(1).join("/");
    return { lang, internal: lang === "en" ? enToInternal(rest) : rest };
  }
  return { lang: "tr", internal: "/" + segs.join("/") };
}

/** Dil seçimini hatırlayan çerez (dil düğmesi yazar, proxy ana sayfada okur) */
export const LANG_COOKIE = "lang";
