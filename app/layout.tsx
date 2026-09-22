import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marki Labs. — Yazılım & Grafik Tasarım",
    template: "%s | Marki Labs.",
  },
  description:
    "Marki Labs, premium yazılım geliştirme ve grafik tasarım hizmetleri sunan yaratıcı bir teknoloji stüdyosudur.",
  keywords: [
    "yazılım geliştirme",
    "grafik tasarım",
    "web geliştirme",
    "mobil uygulama",
    "marka kimliği",
    "UI/UX tasarım",
    "Marki Labs",
    "logo tasarım",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Marki Labs", url: "https://markilabs.com" }],
  creator: "Marki Labs",
  publisher: "Marki Labs",
  metadataBase: new URL("https://markilabs.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://markilabs.com",
    siteName: "Marki Labs.",
    title: "Marki Labs. — Yazılım & Grafik Tasarım",
    description:
      "Premium yazılım ve grafik tasarım çözümleriyle markanızı bir üst seviyeye taşıyın.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marki Labs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marki Labs. — Yazılım & Grafik Tasarım",
    description:
      "Premium yazılım ve grafik tasarım çözümleriyle markanızı bir üst seviyeye taşıyın.",
    images: ["/og-image.png"],
    creator: "@markilabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1c1e21]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

