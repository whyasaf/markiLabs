import type { Metadata } from "next";
import { SolutionsPageClient } from "@/app/cozumler/client";

export const metadata: Metadata = {
  title: "Çözümler — Yazılım & Tasarım Hizmetleri",
  description:
    "Marki Labs yazılım geliştirme ve grafik tasarım çözümleri. İşletmeniz için doğru teknolojiyi ve tasarımı seçin.",
  openGraph: {
    title: "Çözümler | Marki Labs.",
    description:
      "Yazılım geliştirme ve grafik tasarım hizmetleri. Tüm çözümlerimizi keşfedin.",
    url: "https://markilabs.com/cozumler",
  },
};

const solutions = [
  {
    iconKey: "Code2" as const,
    label: "Web Geliştirme",
    tagline: "Hızlı, modern, SEO odaklı web siteleri",
    desc: "İşletmenizin dijital kimliğini güçlendiren, yüksek performanslı, mobil uyumlu ve modern teknolojilerle geliştirilmiş özel web siteleri ve web uygulamaları.",
    href: "/cozumler/yazilim",
    color: "#1877f2",
    bg: "rgba(24,119,242,0.08)",
    image: "/images/software_concept.png",
    features: [
      "Next.js ile ultra hızlı sayfa yükleme",
      "Mobil (responsive) uyumlu tasarımlar",
      "Google & SEO dostu kod mimarisi",
      "Kullanıcı dostu yönetim paneli (CMS)",
      "Kurumsal ve E-ticaret entegrasyonları",
    ],
  },
  {
    iconKey: "Palette" as const,
    label: "Grafik & Kurumsal Tasarım",
    tagline: "Logo, kurumsal kimlik ve kreatif tasarımlar",
    desc: "Markanızın gücünü ve vizyonunu yansıtan özgün logo tasarımları, profesyonel kurumsal kimlik çalışmaları ve dijital dünyadaki kreatif grafik ihtiyaçlarınız.",
    href: "/cozumler/tasarim",
    color: "#e91e8c",
    bg: "rgba(233,30,140,0.08)",
    image: "/images/design_concept.png",
    features: [
      "Özgün logo ve amblem tasarımları",
      "Kurumsal kimlik (kartvizit, dosya, antetli)",
      "Sosyal medya grafikleri ve banner tasarımları",
      "Kullanıcı dostu web arayüz tasarımları (UI/UX)",
      "Kreatif reklam görselleri ve afiş çalışmaları",
    ],
  },
];

export default function CozumlerPage() {
  return <SolutionsPageClient solutions={solutions} />;
}
