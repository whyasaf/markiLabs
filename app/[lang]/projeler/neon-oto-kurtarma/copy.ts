/** Neon Oto Kurtarma sayfasının metinleri. "*...*" arası yeşil italik serif. Bölge adları iki dilde aynı. */
const tr = {
  tags: "Web sitesi · Tasarım",
  h1: "İstanbul 7/24 nöbetçi çekici ve *oto kurtarma.*",
  intro:
    "Bakırköy merkezli 7/24 nöbetçi oto çekici ve yol yardım hizmetinin web sitesi. Ziyaretçiyi tek dokunuşla aramaya ya da konumunu göndermeye yönlendiriyor.",
  visit: "Siteyi ziyaret et ↗",
  video: "Tanıtım videosu →",
  facts: [
    ["Sektör", "Oto kurtarma ve yol yardım"],
    ["Konum", "Bakırköy, İstanbul"],
    ["Proje türü", "Kurumsal web sitesi"],
    ["Bağlantı", "neonotokurtarma.com"],
  ],
  truckAlt: "Neon Oto Kurtarma çekicisi",
  aboutLabel: "Hakkında",
  quote: "Yolda kaldığınızda hareket devam eder.",
  about:
    "Neon Oto Kurtarma; arıza ve kaza çekici, akü takviyesi ve lastik değişimi gibi hizmetleri 7/24 veren Bakırköy merkezli bir yol yardım firması.",
  servicesTitle: "Hizmet alanları",
  servicesCount: "Sitedeki 5 hizmet",
  services: [
    {
      title: "Arıza / Kaza",
      desc: "Arızalanan veya kaza yapan araçların güvenli şekilde bulunduğu noktadan alınarak ihtiyaç duyulan adrese taşınması.",
    },
    { title: "VIP Transfer", desc: "Değerli ve lüks araçların şehirler arası taşınması için özel taşıma hizmeti." },
    { title: "Akü Takviye", desc: "Aküsü biten araçlar için bulunulan noktada akü takviye desteği." },
    { title: "Lastik Değişimi", desc: "Patlayan veya hasar gören lastiklerde bulunulan noktaya ulaşarak lastik değişimi desteği." },
    {
      title: "Kayar Kasa / Ahtapot / Aparatlı",
      desc: "Sürülemeyen, hasarlı ya da erişimi zor bir yerde kalan araçlar için uygun ekipmanla çekici hizmeti.",
    },
  ],
  regionsLabel: "Hizmet bölgeleri",
  regionsTitle: "İstanbul Avrupa Yakası'nda 7/24 oto çekici ve yol yardım",
  screensTitle: "Ekranlar",
  /** Sıra, sayfadaki ekran görüntüleriyle aynı */
  screens: ["Hizmet alanları", "Hizmet bölgeleri ve konum", "Sık sorulanlar"],
};

const en: typeof tr = {
  tags: "Website · Design",
  h1: "Istanbul's 24/7 tow truck and *roadside recovery.*",
  intro:
    "Website for a Bakırköy-based, 24/7 towing and roadside assistance service. It gets visitors to call or share their location in a single tap.",
  visit: "Visit the site ↗",
  video: "Intro video →",
  facts: [
    ["Industry", "Towing and roadside assistance"],
    ["Location", "Bakırköy, Istanbul"],
    ["Project type", "Corporate website"],
    ["Link", "neonotokurtarma.com"],
  ],
  truckAlt: "Neon Oto Kurtarma tow truck",
  aboutLabel: "About",
  quote: "When you're stuck on the road, we keep you moving.",
  about:
    "Neon Oto Kurtarma is a Bakırköy-based roadside assistance company offering breakdown and accident towing, battery jump-starts and tyre changes, around the clock.",
  servicesTitle: "Services",
  servicesCount: "5 services on the site",
  services: [
    {
      title: "Breakdown / Accident",
      desc: "Safely picking up broken-down or damaged vehicles where they are and taking them wherever they need to go.",
    },
    { title: "VIP Transfer", desc: "A dedicated service for moving valuable and luxury vehicles between cities." },
    { title: "Battery Jump-Start", desc: "On-the-spot jump-starts for vehicles with a flat battery." },
    { title: "Tyre Change", desc: "Coming to wherever you are to change a burst or damaged tyre." },
    {
      title: "Flatbed / Crane / Special Equipment",
      desc: "Towing with the right equipment for vehicles that can't be driven, are badly damaged or are stuck somewhere hard to reach.",
    },
  ],
  regionsLabel: "Service area",
  regionsTitle: "24/7 towing and roadside assistance on Istanbul's European side",
  screensTitle: "Screens",
  screens: ["Services", "Service area and location", "FAQ"],
};

export const COPY = { tr, en };
