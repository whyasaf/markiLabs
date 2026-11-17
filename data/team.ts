import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

/** Ekip üyesi (kaynak, iki dilli). Biyografiler kişilerin kendi metinlerinden; site sesine uysun diye üçüncü şahıs. */
type TeamMember = {
  first: string;
  last: string;
  role: L<string>;
  bio: L<string>;
  /** Portre; yoksa yer tutucu gösterilir */
  photo?: string;
  links: { label: string; href: string }[];
  /** Uğraştığı alanlar; ekip bölümünde büyük yazıyla */
  focus: L<string[]>;
};

/** Ekip bölümünün gösterdiği tek dilli hali */
export type Member = Omit<TeamMember, "role" | "bio" | "focus"> & { role: string; bio: string; focus: string[] };

const TEAM: TeamMember[] = [
  {
    first: "Ömer Asaf",
    last: "Ak",
    role: { tr: "Yazılım & Ürün", en: "Software & Product" },
    bio: {
      tr: "Bir uygulamanın çalışması ona yetmiyor; neden çalıştığını ve büyüdüğünde de çalışıp çalışmayacağını önemsiyor. İstanbul Üniversitesi'nde Bilgisayar Programcılığı'nı bitirdi, şimdi De Montfort University Dubai'de Yazılım Mühendisliği okuyor. Grafik tasarımdan geldiği için kod yazmadan önce ürünü kullanacak kişiyi düşünüyor; bugünlerde yapay zekâ ürünleri, Next.js ve TypeScript ile uğraşıyor.",
      // Ömer'in kendi İngilizce metninden kısaltıldı
      en: "Most developers can make an app work; he cares about why it works, and whether it still works when it grows. After a Computer Programming degree at Istanbul University, he now studies Software Engineering at De Montfort University Dubai. He started out in graphic design, so he thinks about the person using the product before writing a line of code. These days it's mostly AI products, Next.js and TypeScript.",
    },
    // Yüz ortada olsun diye kırpılmış kopya (asıl dosya: whyasaf.jpeg)
    photo: "/team/omer/omer.jpg",
    links: [
      { label: "whyasaf.com", href: "https://whyasaf.com" },
      { label: "GitHub", href: "https://github.com/whyasaf" },
    ],
    focus: { tr: ["Web uygulamaları", "Yapay zekâ", "Arayüz"], en: ["Web apps", "AI", "Interface design"] },
  },
  {
    first: "Burak",
    last: "Duru",
    role: { tr: "Tasarım ve Dijital Pazarlama", en: "Design & Digital Marketing" },
    bio: {
      tr: "Markaların dijital dünyada güçlü bir kimlik kazanması için yaratıcı tasarım ve etkili pazarlama çözümleri sunuyor. Marka kimliği, görsel tasarım ve Google Ads alanlarında profesyonel yaklaşımla markaların görünürlüğünü ve değerini artırmayı hedefliyor. Estetik, strateji ve yaratıcılığı bir araya getirerek markalara özgün çözümler üretiyor.",
      en: "He helps brands build a strong identity online through creative design and effective marketing. Working across brand identity, visual design and Google Ads, he aims to raise a brand's visibility and value with a professional approach. He brings aesthetics, strategy and creativity together to create original work for each brand.",
    },
    links: [],
    focus: { tr: ["Marka kimliği", "Dijital pazarlama", "Google Ads"], en: ["Brand identity", "Digital marketing", "Google Ads"] },
  },
];

export const teamFor = (lang: Locale): Member[] =>
  TEAM.map((m) => ({ ...m, role: m.role[lang], bio: m.bio[lang], focus: m.focus[lang] }));
