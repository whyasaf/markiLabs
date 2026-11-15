export type Member = {
  first: string;
  last: string;
  role: string;
  /** Kısa biyografi. TASLAK: kişinin kendisi onaylamalı. */
  bio: string;
  /** Portre; yoksa yer tutucu gösterilir */
  photo?: string;
  links: { label: string; href: string }[];
  /** Uğraştığı alanlar; ekip bölümünde büyük yazıyla */
  focus: string[];
};

export const TEAM: Member[] = [
  {
    first: "Ömer Asaf",
    last: "Ak",
    role: "Yazılım & Ürün",
    bio: "Bir uygulamanın çalışması ona yetmiyor; neden çalıştığını ve büyüdüğünde de çalışıp çalışmayacağını önemsiyor. İstanbul Üniversitesi'nde Bilgisayar Programcılığı'nı bitirdi, şimdi De Montfort University Dubai'de Yazılım Mühendisliği okuyor. Grafik tasarımdan geldiği için kod yazmadan önce ürünü kullanacak kişiyi düşünüyor; bugünlerde yapay zekâ ürünleri, Next.js ve TypeScript ile uğraşıyor.",
    photo: "/work/whyasaf/avatar.webp",
    links: [
      { label: "whyasaf.com", href: "https://whyasaf.com" },
      { label: "GitHub", href: "https://github.com/whyasaf" },
    ],
    focus: ["Web uygulamaları", "Yapay zekâ", "Arayüz"],
  },
  {
    first: "Burak",
    last: "Duru",
    role: "Marka & Pazarlama",
    // TODO: Burak'ın kendi bio'su ve fotoğrafı gelecek
    bio: "Bio gelecek.",
    links: [],
    focus: ["Marka kimliği", "Dijital pazarlama", "Google ADS"],
  },
];
