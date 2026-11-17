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
    // Yüz ortada olsun diye kırpılmış kopya (asıl dosya: whyasaf.jpeg)
    photo: "/team/omer/omer.jpg",
    links: [
      { label: "whyasaf.com", href: "https://whyasaf.com" },
      { label: "GitHub", href: "https://github.com/whyasaf" },
    ],
    focus: ["Web uygulamaları", "Yapay zekâ", "Arayüz"],
  },
  {
    first: "Burak",
    last: "Duru",
    role: "Tasarım ve Dijital Pazarlama",
    bio: "Markaların dijital dünyada güçlü bir kimlik kazanması için yaratıcı tasarım ve etkili pazarlama çözümleri sunuyor. Marka kimliği, görsel tasarım ve Google Ads alanlarında profesyonel yaklaşımla markaların görünürlüğünü ve değerini artırmayı hedefliyor. Estetik, strateji ve yaratıcılığı bir araya getirerek markalara özgün çözümler üretiyor.",
    links: [],
    focus: ["Marka kimliği", "Dijital pazarlama", "Google Ads"],
  },
];
