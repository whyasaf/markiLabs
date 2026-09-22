import type { Metadata } from "next";
import MagazaPageClient from "./client";

export const metadata: Metadata = {
  title: "Mağaza — Hizmet Paketlerimiz",
  description:
    "Marki Labs web geliştirme, logo tasarımı ve kurumsal kimlik hizmet paketleri. İşletmeniz için en uygun kreatif çözümü seçin.",
  openGraph: {
    title: "Mağaza | Marki Labs",
    description:
      "Marki Labs web geliştirme, logo tasarımı ve kurumsal kimlik hizmet paketlerini keşfedin.",
    url: "https://markilabs.com/magaza",
  },
};

export default function MagazaPage() {
  return <MagazaPageClient />;
}
