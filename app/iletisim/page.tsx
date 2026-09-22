import type { Metadata } from "next";
import { Suspense } from "react";
import IletisimPageClient from "./client";

export const metadata: Metadata = {
  title: "İletişim — Projenizi Hayata Geçirelim",
  description:
    "Marki Labs ile iletişime geçin. Ücretsiz keşif görüşmesi için formu doldurun, hızlıca geri dönelim.",
  openGraph: {
    title: "İletişim | Marki Labs.",
    description:
      "Projeniz hakkında konuşalım. Yazılım geliştirme ve grafik tasarım hizmetleri için iletişime geçin.",
    url: "https://markilabs.com/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-gray-100 border-t-[#1877f2] animate-spin" />
      </div>
    }>
      <IletisimPageClient />
    </Suspense>
  );
}

