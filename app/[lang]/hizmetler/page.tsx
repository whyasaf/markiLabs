import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import RiseWords from "@/components/Rise";
import WorkCard from "@/components/WorkCard";
import { Container, Label, Pill } from "@/components/ui";
import { PROJECTS } from "@/data/projects";
import { WORK } from "@/data/work";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/hizmetler", getDict(lang).meta.pages.services);
}

type Card = {
  href: string;
  title: string;
  tags: Record<Locale, string[]>;
  video: { src: string; poster: string };
  status?: Record<Locale, string>;
};

const fromProject = (slug: string): Card => {
  const p = PROJECTS.find((x) => x.slug === slug)!;
  return { href: `/projeler/${p.slug}`, title: p.name, tags: p.tags, video: { src: p.media.loop, poster: p.media.poster } };
};
const fromWork = (slug: string): Card => {
  const w = WORK.find((x) => x.slug === slug)!;
  return { href: `/projeler/${w.slug}`, title: w.name, tags: w.tags, video: w.video, status: w.status };
};

// Ne yaptığımızı liste yerine yayındaki işlerle anlatıyoruz. Başlık ve metinler sözlükte (services.blocks).
const BLOCKS = [
  { no: "01", key: "products", cards: [fromProject("lecmic"), fromProject("codevocab"), fromWork("plus-otoyol")] },
  {
    no: "02",
    key: "websites",
    cards: [fromWork("neon-oto-kurtarma"), fromWork("cultivated-voice-system"), fromWork("whyasaf")],
  },
  { no: "03", key: "templates", cards: [fromWork("vitren-yapi")] },
] as const;

export default async function HizmetlerPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const t = getDict(lang).services;
  return (
    <>
      <Container className="pt-16 md:pt-24">
        <h1 className="max-w-[1100px] text-[clamp(48px,7.4vw,112px)] font-medium leading-[0.98] tracking-[-0.05em]">
          <RiseWords text={t.title} delay={0.1} step={0.07} />
        </h1>
      </Container>

      {BLOCKS.map((b) => (
        <section key={b.no} className="pt-24 md:pt-36">
          <Container>
            <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_1fr] md:gap-20">
              <Reveal>
                <Label className="text-muted">{b.no}</Label>
                <h2 className="mt-4 text-[clamp(44px,5.6vw,88px)] font-medium leading-[1] tracking-[-0.05em]">{t.blocks[b.key].title}</h2>
              </Reveal>
              <Reveal delay={0.08} className="md:pt-10">
                <p className="max-w-[520px] text-[clamp(19px,1.6vw,23px)] leading-[1.5]">{t.blocks[b.key].text}</p>
              </Reveal>
            </div>
            <div className={`mt-12 grid gap-x-4 gap-y-12 ${b.cards.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
              {b.cards.map((c) => (
                <WorkCard
                  key={c.href}
                  href={localePath(lang, c.href)}
                  title={c.title}
                  tags={c.tags[lang]}
                  video={c.video}
                  status={c.status?.[lang]}
                />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="px-2 pt-32 md:px-3 md:pt-44">
        <Reveal>
          <div className="rounded-[24px] bg-white px-6 py-24 text-center md:py-32">
            <h2 className="mx-auto max-w-[900px] text-[clamp(44px,6.4vw,100px)] font-medium leading-[0.98] tracking-[-0.05em]">
              {t.closingA}
              <span className="text-blue">{t.closingB}</span>
            </h2>
            <div className="mt-12 flex justify-center">
              <Pill href={localePath(lang, "/iletisim")} tone="blue">
                {t.cta}
              </Pill>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
