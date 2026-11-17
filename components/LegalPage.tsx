import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/ui";
import LegalTabs from "@/components/LegalTabs";
import RiseWords from "@/components/Rise";
import { getDict } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

/** Yasal metinler için sade okuma şablonu: solda belge listesi, sağda metin. Belge değişince başlık
 *  kelime kelime yükselir, metin hafifçe aşağıdan belirir. */
export default function LegalPage({
  lang,
  title,
  updated,
  current,
  children,
}: {
  lang: Locale;
  title: string;
  updated: string;
  current: string;
  children: ReactNode;
}) {
  return (
    <Container className="pb-32 pt-16 md:pt-24">
      <h1 className="max-w-[900px] text-[clamp(44px,6.4vw,96px)] font-medium leading-[1] tracking-[-0.045em]">
        <RiseWords text={title} step={0.05} />
      </h1>
      <p className="label fade-up mt-8 text-muted" style={{ "--d": "0.15s" } as CSSProperties}>
        {getDict(lang).legal.updated}: {updated}
      </p>

      <div className="mt-14 grid gap-12 border-t border-line pt-12 md:grid-cols-[260px_1fr] md:gap-20">
        <LegalTabs lang={lang} current={current} />
        <article id="legal-article" className="legal fade-up max-w-[720px]" style={{ "--d": "0.2s" } as CSSProperties}>
          {children}
        </article>
      </div>
    </Container>
  );
}
