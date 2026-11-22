import { caseOg, ogLang } from "@/lib/og";
import { LOCALES } from "@/lib/i18n";

export const alt = "Plus Otoyol — Marki Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  return caseOg("plus-otoyol", await ogLang(params));
}
