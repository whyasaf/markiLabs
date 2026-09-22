import type { Metadata } from "next";
import TasarimPageClient from "./client";

export const metadata: Metadata = {
  title: "Tasarım Stüdyosu — Marka Kimliği, UI/UX & Grafik Tasarım",
  description:
    "Marka kimliği, logo tasarımı, UI/UX, design system ve vektörel illüstrasyon. Estetik ile işlevi birleştiren premium tasarım stüdyosu.",
  openGraph: {
    title: "Tasarım Stüdyosu | Marki Labs.",
    description:
      "Marka kimliği, UI/UX, design system ve grafik tasarım. Premium tasarım hizmetleri.",
    url: "https://markilabs.com/cozumler/tasarim",
  },
};

export default function TasarimPage() {
  return <TasarimPageClient />;
}
