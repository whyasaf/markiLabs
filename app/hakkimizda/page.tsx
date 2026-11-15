import type { Metadata } from "next";
import { ArrowCircle } from "@/components/Arrow";
import Link from "next/link";
import Manifesto from "@/components/Manifesto";
import Reveal from "@/components/Reveal";
import ScrollLine from "@/components/ScrollLine";
import TeamScroll from "@/components/TeamScroll";
import { TEAM } from "@/data/team";
import { Container, Label } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Marki Labs: 2022'den beri ürün ve web sitesi geliştiren bir teknoloji stüdyosu.",
};

// *kelime* = mavi vurgu
const TEXT = `Marki Labs bir teknoloji stüdyosu. Kendi ürünlerimizi yapıyoruz: *Lecmic* derste konuşulanı yazıya döküp çeviriyor, *CodeVocab* İngilizceni düzeltiyor. İşletmeler için siteler kuruyoruz; bir çekici firması da bir eğitim sistemi de kendi fontu, kendi rengiyle konuşuyor. Bir fikri alıp yayında olan bir şeye dönüştürüyoruz. *2022'den* *beri.*`;

// "Konuşalım." bölümü: şerit yazının üstünden geçer, ok dairesinin çevresinde halka çizer, alttan sola çıkar
const CTA_LINE =
  "M -60 160 C 300 60 900 120 1150 200 C 1350 260 1460 330 1430 430 C 1400 560 1220 590 1160 480 C 1110 380 1250 300 1340 340 C 1440 390 1400 560 1200 640 C 900 760 400 700 -60 720";

export default function HakkimizdaPage() {
  return (
    <>
      <Container className="pb-24 pt-16 md:pb-40 md:pt-24">
        <Label className="text-muted">Hakkımızda</Label>
        <div className="mt-10 md:mt-14">
          <Manifesto text={TEXT} />
        </div>
      </Container>

      {/* Ekip: kaydırdıkça kişi değişir */}
      <TeamScroll team={TEAM} />

      <ScrollLine d={CTA_LINE} view={[1440, 766]}>
      <Container className="py-32 md:py-48">
        <Reveal>
          <Link href="/iletisim" className="group flex flex-wrap items-end justify-between gap-8">
            <span className="text-[clamp(64px,13vw,220px)] font-medium leading-[0.85] tracking-[-0.06em] transition-colors duration-500 group-hover:text-blue">
              Konuşalım.
            </span>
            <ArrowCircle className="mb-4 h-20 w-20 bg-ink text-white transition-colors duration-500 group-hover:bg-blue md:h-28 md:w-28" />
          </Link>
        </Reveal>
      </Container>
      </ScrollLine>
    </>
  );
}
