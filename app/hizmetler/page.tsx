import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { Container, Label, Pill } from "@/components/ui";
import { PROJECTS } from "@/data/projects";
import { WORK } from "@/data/work";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Marki Labs ne yapar: yapay zekâ destekli ürünler, işletmeler için web siteleri ve hazır web sitesi şablonları.",
};

type Card = { href: string; title: string; tags: string[]; video: { src: string; poster: string }; status?: string };

const fromProject = (slug: string): Card => {
  const p = PROJECTS.find((x) => x.slug === slug)!;
  return { href: `/projeler/${p.slug}`, title: p.name, tags: p.tags, video: { src: p.media.loop, poster: p.media.poster } };
};
const fromWork = (slug: string): Card => {
  const w = WORK.find((x) => x.slug === slug)!;
  return { href: `/projeler/${w.slug}`, title: w.name, tags: w.tags, video: w.video, status: w.status };
};

// Ne yaptığımızı liste yerine yayındaki işlerle anlatıyoruz.
const BLOCKS = [
  {
    no: "01",
    title: "Ürün geliştiriyoruz.",
    text: "Fikirden başlayıp herkesin kullanabildiği web uygulamalarına kadar götürüyoruz. Lecmic açık kaynak, CodeVocab ücretsiz; Plus Otoyol'un geliştirmesi sürüyor.",
    cards: [fromProject("lecmic"), fromProject("codevocab"), fromWork("plus-otoyol")],
  },
  {
    no: "02",
    title: "Web siteleri kuruyoruz.",
    text: "Bir yol yardım firmasından bir eğitim sistemine, her işletmenin kendi diliyle konuşan siteler. Her biri kendi fontu, rengi ve düzeniyle.",
    cards: [fromWork("neon-oto-kurtarma"), fromWork("cultivated-voice-system"), fromWork("whyasaf")],
  },
  {
    no: "03",
    title: "Şablon hazırlıyoruz.",
    text: "Belli bir sektör için baştan sona hazırlanmış, kendi markanızla yayına alınabilecek siteler. İlki mimarlık ve yapı firmaları için Vitren Yapı.",
    cards: [fromWork("vitren-yapi")],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <Container className="pt-16 md:pt-24">
        <Reveal>
          <h1 className="max-w-[1100px] text-[clamp(48px,7.4vw,112px)] font-medium leading-[0.98] tracking-[-0.05em]">
            Ne yaptığımızı <span className="text-blue">işlerimiz anlatsın.</span>
          </h1>
        </Reveal>
      </Container>

      {BLOCKS.map((b) => (
        <section key={b.no} className="pt-24 md:pt-36">
          <Container>
            <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_1fr] md:gap-20">
              <Reveal>
                <Label className="text-muted">{b.no}</Label>
                <h2 className="mt-4 text-[clamp(44px,5.6vw,88px)] font-medium leading-[1] tracking-[-0.05em]">{b.title}</h2>
              </Reveal>
              <Reveal delay={0.08} className="md:pt-10">
                <p className="max-w-[520px] text-[clamp(19px,1.6vw,23px)] leading-[1.5]">{b.text}</p>
              </Reveal>
            </div>
            <div className={`mt-12 grid gap-x-4 gap-y-12 ${b.cards.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
              {b.cards.map((c) => (
                <WorkCard key={c.href} href={c.href} title={c.title} tags={c.tags} video={c.video} status={c.status} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="px-2 pt-32 md:px-3 md:pt-44">
        <Reveal>
          <div className="rounded-[24px] bg-white px-6 py-24 text-center md:py-32">
            <h2 className="mx-auto max-w-[900px] text-[clamp(44px,6.4vw,100px)] font-medium leading-[0.98] tracking-[-0.05em]">
              Sıradaki iş <span className="text-blue">sizinki olsun.</span>
            </h2>
            <div className="mt-12 flex justify-center">
              <Pill href="/iletisim" tone="blue">
                Birlikte çalışalım!
              </Pill>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
