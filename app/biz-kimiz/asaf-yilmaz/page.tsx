import type { Metadata } from "next";
import AsafYilmazClient from "./client";

export const metadata: Metadata = {
  title: "Asaf Yılmaz — Kurucu & Yazılım Direktörü",
  description:
    "Marki Labs Kurucusu ve Yazılım Direktörü Asaf Yılmaz'ın uzmanlık alanları, biyografisi ve teknoloji vizyonu.",
  openGraph: {
    title: "Asaf Yılmaz | Marki Labs",
    description:
      "Marki Labs Kurucusu ve Yazılım Direktörü Asaf Yılmaz'ın profesyonel profili.",
    url: "https://markilabs.com/biz-kimiz/asaf-yilmaz",
  },
};

export default function AsafYilmazPage() {
  return <AsafYilmazClient />;
}
