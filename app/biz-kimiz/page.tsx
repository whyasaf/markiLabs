import type { Metadata } from "next";
import BizKimizPageClient from "./client";

export const metadata: Metadata = {
  title: "Biz Kimiz — Vizyon, Misyon ve Felsefemiz",
  description:
    "Marki Labs ekibini, vizyonumuzu, misyonumuzu ve değerlerimizi keşfedin. Yazılım ve grafik tasarım alanında öncü bir Türk yaratıcı stüdyosu.",
  openGraph: {
    title: "Biz Kimiz | Marki Labs.",
    description:
      "Marki Labs hakkında bilgi edinin. Vizyon, misyon, ekip ve yolculuğumuz.",
    url: "https://markilabs.com/biz-kimiz",
  },
};

export default function BizKimizPage() {
  return <BizKimizPageClient />;
}
