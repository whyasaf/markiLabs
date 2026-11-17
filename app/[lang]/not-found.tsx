"use client";

import { usePathname } from "next/navigation";
import { Container, Label, Pill } from "@/components/ui";
import { en } from "@/lib/dictionaries/en";
import { tr } from "@/lib/dictionaries/tr";
import { localePath, parsePath } from "@/lib/i18n";

/**
 * 404. not-found sayfa parametresi almaz; dil, adresten çözülür (sunucuda iç adres, tarayıcıda genel adres,
 * ikisi de aynı dile çıkar).
 */
export default function NotFound() {
  const { lang } = parsePath(usePathname());
  const t = (lang === "en" ? en : tr).notFound;
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-8 pb-20 pt-20">
      <Label className="text-muted">404</Label>
      <h1 className="text-[clamp(44px,7vw,104px)] font-medium leading-none tracking-[-0.05em]">{t.title}</h1>
      <Pill href={localePath(lang, "/")}>{t.back}</Pill>
    </Container>
  );
}
