import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const description =
  "Marki Labs; web, yazılım ve marka tasarımı yapan bir teknoloji stüdyosu. Lecmic ve CodeVocab bizim ürünlerimiz.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Marki Labs — Teknoloji stüdyosu", template: "%s | Marki Labs" },
  description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE.name,
    title: "Marki Labs — Teknoloji stüdyosu",
    description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
