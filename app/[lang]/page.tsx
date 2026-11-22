import HeroSplit from "@/components/HeroSplit";
import { ArrowCircle } from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import ScrollLine from "@/components/ScrollLine";
import WorkCard from "@/components/WorkCard";
import DuotoneVideo from "@/components/DuotoneVideo";
import { ScaleIn } from "@/components/CardReveal";
import { Container, Label, Pill } from "@/components/ui";
import { PROJECTS } from "@/data/projects";
import { WORK } from "@/data/work";
import { getDict, resolveLang } from "@/lib/dictionaries";
import { localePath } from "@/lib/i18n";

// Tanıtım şeridi (ölçülerle, 1440x1312 = bölüm + üst/alt 96px): Lusion'daki gibi sol üstten girer,
// büyük bir yayla başlığın ilk satırının arkasından geçer, "tek ekip."in sağından inip kartın tepesinden içine dalar
const LINE = "M -80 40 C 260 70 520 200 590 400 C 640 540 560 600 540 760";

// Yaklaşım → Kapanış (ölçülerle, 1440x1370 = bölüm + üst/alt 96px): üstteki şeridin devamı gibi sağdan,
// paragrafların üstündeki boşluktan girer; "Yaklaşımımız" etiketinin altındaki boş alanda halka çizer;
// paragrafların altından geçip "Sıradaki proje" paneline doğru iner ve panelin arkasına girer. Yazılara değmez.
const APPROACH_LINE =
  "M 1500 150 C 1100 150 800 170 600 200 C 380 230 250 260 200 380 C 150 500 260 560 360 530 C 470 495 460 380 360 370 C 220 360 160 470 230 560 C 320 680 560 650 720 640 C 860 632 900 700 860 800";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const t = getDict(lang);
  const h = t.home;
  return (
    <>
      {/* Giriş: başlık iki yana açılır, aralarından reel büyüyüp ekranı kaplar; arkada fare şeridi */}
      <HeroSplit src={t.reel.src} poster={t.reel.poster} t={t.hero} reel={t.reel} />

      {/* Tanıtım (Lusion "Bold Ideas" düzeni): merdiven başlık, solda mavi tonlu video kartı, sağda metin.
          Şerit başlığın arkasından geçip kartın tepesinden içine dalar. */}
      <ScrollLine d={LINE} view={[1440, 1312]} end={0.85}>
        <Container className="py-28 md:py-40">
          <Reveal>
            <h2 className="text-[clamp(56px,10.4vw,172px)] font-medium leading-[0.95] tracking-[-0.055em]">
              <span className="block md:pl-[24%]">{h.introTop}</span>
              <span className="block">{h.introBottom}</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid items-start gap-10 md:mt-24 md:grid-cols-[1.15fr_1fr] md:gap-20">
            <Reveal>
              <DuotoneVideo images={["/work/vitren/hero.webp", "/work/vitren/tower.webp", "/work/vitren/horizon.webp"]} />
            </Reveal>
            <Reveal delay={0.1} className="md:pt-24">
              <p className="max-w-[560px] text-[clamp(19px,1.6vw,24px)] leading-[1.45]">
                {h.introText}
              </p>
              <div className="mt-12 flex flex-wrap gap-3">
                <Pill href="#yaklasim" tone="light">
                  {h.approachLink}
                </Pill>
                <Pill href={localePath(lang, "/hizmetler")} tone="ghost">
                  {h.servicesLink}
                </Pill>
              </div>
            </Reveal>
          </div>
        </Container>
      </ScrollLine>

      {/* Öne çıkan işler */}
      <section id="isler" className="scroll-mt-6">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
            <h2 className="text-[clamp(44px,6vw,96px)] font-medium leading-none tracking-[-0.045em]">{h.featuredTitle}</h2>
            <p className="max-w-[360px] text-muted">
              {h.featuredText}
            </p>
          </div>

          <div className="mt-14 grid gap-x-4 gap-y-14 md:grid-cols-2 md:gap-y-20">
            {PROJECTS.map((p) => (
              <WorkCard
                key={p.slug}
                href={localePath(lang, `/projeler/${p.slug}`)}
                title={p.name}
                tags={p.tags[lang]}
                video={{ src: p.media.loop, poster: p.media.poster }}
              />
            ))}
            {WORK.map((w) => (
              <WorkCard
                key={w.href}
                href={w.slug ? localePath(lang, `/projeler/${w.slug}`) : w.href}
                title={w.name}
                tags={w.tags[lang]}
                status={w.status?.[lang]}
                video={w.video[lang]}
                external={!w.slug}
              />
            ))}
            {(PROJECTS.length + WORK.length) % 2 === 1 && (
              <ScaleIn>
                <a
                  href={localePath(lang, "/iletisim")}
                  className="group flex aspect-[16/10] flex-col justify-between rounded-[20px] bg-blue p-7 text-white md:p-10"
                >
                  <span className="label text-white/70">{h.nextLabel}</span>
                  <span className="flex items-end justify-between gap-6">
                    <span className="text-[clamp(32px,3.6vw,56px)] font-medium leading-[1] tracking-[-0.04em]">
                      {h.yoursTop}
                      <br />
                      {h.yoursBottom}
                    </span>
                    <ArrowCircle className="h-14 w-14 bg-white text-blue" />
                  </span>
                </a>
              </ScaleIn>
            )}
          </div>
        </Container>
      </section>

      {/* Yaklaşım → Kapanış: üstteki şeridin devamı */}
      <ScrollLine d={APPROACH_LINE} view={[1440, 1370]} end={1}>
      <section id="yaklasim" className="scroll-mt-6 py-32 md:py-44">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <Label className="text-muted">{h.approachLabel}</Label>
            <div className="flex flex-col gap-8 text-[clamp(22px,2.2vw,32px)] leading-[1.3] tracking-[-0.02em]">
              <Reveal>
                <p>{h.approach1}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-muted">{h.approach2}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Kapanış çağrısı */}
      <section className="px-2 md:px-3">
        <Reveal>
          <div className="rounded-[24px] bg-white px-6 py-24 text-center md:py-36">
            <Label className="text-muted">{h.nextLabel}</Label>
            <h2 className="mx-auto mt-8 max-w-[1100px] text-[clamp(44px,7.4vw,120px)] font-medium leading-[0.98] tracking-[-0.05em]">
              {h.closingA}
              <span className="text-blue">{h.closingB}</span>
            </h2>
            <div className="mt-12 flex justify-center">
              <Pill href={localePath(lang, "/iletisim")} tone="blue">
                {h.cta}
              </Pill>
            </div>
          </div>
        </Reveal>
      </section>
      </ScrollLine>
    </>
  );
}
