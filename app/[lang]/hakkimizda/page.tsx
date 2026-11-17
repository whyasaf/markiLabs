import type { Metadata } from "next";
import { ArrowCircle } from "@/components/Arrow";
import Link from "next/link";
import Manifesto from "@/components/Manifesto";
import Reveal from "@/components/Reveal";
import ScrollLine from "@/components/ScrollLine";
import TeamScroll from "@/components/TeamScroll";
import RiseWords from "@/components/Rise";
import { teamFor } from "@/data/team";
import { Container, Label } from "@/components/ui";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";
import { localePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/hakkimizda", getDict(lang).meta.pages.about);
}

// "Konuşalım." bölümü: şerit yazının üstünden geçer, ok dairesinin çevresinde halka çizer, alttan sola çıkar
const CTA_LINE =
  "M -60 160 C 300 60 900 120 1150 200 C 1350 260 1460 330 1430 430 C 1400 560 1220 590 1160 480 C 1110 380 1250 300 1340 340 C 1440 390 1400 560 1200 640 C 900 760 400 700 -60 720";

export default async function HakkimizdaPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const t = getDict(lang);
  return (
    <>
      <Container className="pb-24 pt-16 md:pb-40 md:pt-24">
        <Label className="text-muted">
          <RiseWords text={t.about.label} />
        </Label>
        <div className="mt-10 md:mt-14">
          <Manifesto text={t.about.manifesto} />
        </div>
      </Container>

      {/* Ekip: kaydırdıkça kişi değişir */}
      <TeamScroll team={teamFor(lang)} t={t.team} />

      <ScrollLine d={CTA_LINE} view={[1440, 766]}>
      <Container className="py-32 md:py-48">
        <Reveal>
          <Link href={localePath(lang, "/iletisim")} className="group flex flex-wrap items-end justify-between gap-8">
            <span className="text-[clamp(64px,13vw,220px)] font-medium leading-[0.85] tracking-[-0.06em] transition-colors duration-500 group-hover:text-blue">
              {t.about.cta}
            </span>
            <ArrowCircle className="mb-4 h-20 w-20 bg-ink text-white transition-colors duration-500 group-hover:bg-blue md:h-28 md:w-28" />
          </Link>
        </Reveal>
      </Container>
      </ScrollLine>
    </>
  );
}
