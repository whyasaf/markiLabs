/** Proje sayfalarının sırası ve "Sıradaki proje" kartı için her projenin kendi renkleri. */
export type CaseTheme = { slug: string; name: string; bg: string; fg: string; accent: string; serif?: boolean };

export const CASES: CaseTheme[] = [
  { slug: "lecmic", name: "Lecmic", bg: "#fbfaf6", fg: "#1b1f2a", accent: "#3b6cf5", serif: true },
  { slug: "codevocab", name: "CodeVocab", bg: "#000000", fg: "#fafafa", accent: "#ff3fa4" },
  { slug: "neon-oto-kurtarma", name: "Neon Oto Kurtarma", bg: "#ffffff", fg: "#0a0a0a", accent: "#00bf63" },
  { slug: "cultivated-voice-system", name: "The Cultivated Voice System", bg: "#142640", fg: "#fdfbf7", accent: "#c9a646", serif: true },
  { slug: "plus-otoyol", name: "Plus Otoyol", bg: "#0f172a", fg: "#ffffff", accent: "#16a34a" },
  { slug: "whyasaf", name: "whyasaf.com", bg: "#09090b", fg: "#f4f4f5", accent: "#22d3ee", serif: true },
  { slug: "vitren-yapi", name: "Vitren Yapı", bg: "#f4f3ef", fg: "#111111", accent: "#d4121d" },
];

export const nextCase = (slug: string) => {
  const i = CASES.findIndex((c) => c.slug === slug);
  return CASES[(i + 1) % CASES.length];
};
