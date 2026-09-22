import type { Metadata } from "next";
import YazilimPageClient from "./client";

export const metadata: Metadata = {
  title: "Yazılım Geliştirme — Web, Mobil & AI Entegrasyon",
  description:
    "Next.js, React Native, Node.js ve Python ile modern web ve mobil uygulamalar. Yapay zeka entegrasyonu ile akıllı yazılım çözümleri.",
  openGraph: {
    title: "Yazılım Geliştirme | Marki Labs.",
    description:
      "Next.js, React Native, Node.js ile full-stack yazılım çözümleri. AI entegrasyon uzmanlığı.",
    url: "https://markilabs.com/cozumler/yazilim",
  },
};

export default function YazilimPage() {
  return <YazilimPageClient />;
}
