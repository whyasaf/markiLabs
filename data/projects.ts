import type { Locale } from "@/lib/i18n";

/** Kendi ürünlerimiz. Kartlarda ad, etiketler ve döngü videosu görünür; ayrıntılar proje sayfalarında. */
export type Project = {
  slug: string;
  name: string;
  tags: Record<Locale, string[]>;
  site: string;
  github: string;
  media: { loop: string; full: string; poster: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "lecmic",
    name: "Lecmic",
    tags: { tr: ["Açık kaynak", "Web uygulaması", "Yapay zekâ"], en: ["Open source", "Web app", "AI"] },
    site: "https://lecmic.whyasaf.com",
    github: "https://github.com/whyasaf/lecmic",
    media: { loop: "/videos/lecmic-loop.mp4", full: "/videos/lecmic-tr-16x9.mp4", poster: "/videos/lecmic-poster.jpg" },
  },
  {
    slug: "codevocab",
    name: "CodeVocab",
    tags: { tr: ["Ücretsiz", "Web uygulaması", "Yapay zekâ"], en: ["Free", "Web app", "AI"] },
    site: "https://codevocab.whyasaf.com",
    github: "https://github.com/whyasaf/CodeVocab",
    media: { loop: "/videos/codevocab-loop.mp4", full: "/videos/CodeVocab-Tanitim.mp4", poster: "/videos/codevocab-poster.jpg" },
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
