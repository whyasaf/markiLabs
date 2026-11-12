import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter_Tight } from "next/font/google";
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

const plex = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${plex.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
