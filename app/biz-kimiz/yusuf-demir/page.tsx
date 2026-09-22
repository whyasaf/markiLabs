import type { Metadata } from "next";
import YusufDemirClient from "./client";

export const metadata: Metadata = {
  title: "Yusuf Demir — Kurucu & Tasarım Direktörü",
  description:
    "Marki Labs Kurucusu ve Tasarım Direktörü Yusuf Demir'in tasarım felsefesi, uzmanlık alanları ve marka kimliği yaklaşımı.",
  openGraph: {
    title: "Yusuf Demir | Marki Labs",
    description:
      "Marki Labs Kurucusu ve Tasarım Direktörü Yusuf Demir'in profesyonel profili.",
    url: "https://markilabs.com/biz-kimiz/yusuf-demir",
  },
};

export default function YusufDemirPage() {
  return <YusufDemirClient />;
}
