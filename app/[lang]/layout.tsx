import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";
import { LOCALES } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import "../globals.css";

const inter = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

// İki dil de derlemede hazırlanır; başka bir dil adresi 404 olur
export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await resolveLang(params);
  const t = getDict(lang);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: t.meta.siteTitle, template: "%s | Marki Labs" },
    twitter: { card: "summary_large_image" },
    // Ana sayfanın kanonik adresi ve dil bağlantıları; alt sayfalar kendi pageMetadata'sıyla değiştirir
    ...pageMetadata(lang, "/", { description: t.meta.siteDescription }),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const t = getDict(lang);
  return (
    <html lang={lang} className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <Header lang={lang} t={{ nav: t.nav, header: t.header, langSwitch: t.langSwitch }} />
        <main>{children}</main>
        <Footer lang={lang} t={{ nav: t.nav, footer: t.footer }} />
        <PageTransition />
      </body>
    </html>
  );
}
