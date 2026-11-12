import Reel from "@/components/Reel";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { Container, Label, Pill } from "@/components/ui";
import { PROJECTS } from "@/data/projects";
import { WORK } from "@/data/work";

export default function Home() {
  return (
    <>
      {/* Giriş */}
      <Container className="pt-16 md:pt-24">
        <Reveal>
          <h1 className="max-w-[1100px] text-[clamp(44px,7.2vw,112px)] font-medium leading-[0.98] tracking-[-0.05em]">
            Fikirleri çalışan ürünlere dönüştürüyoruz.
          </h1>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 md:mt-14">
          <p className="max-w-[440px] text-[17px] text-muted">
            Marki Labs; web, yazılım ve marka tasarımı yapan bir teknoloji stüdyosu.
          </p>
          <Label className="text-muted">Kaydırarak keşfet</Label>
        </div>
      </Container>

      <div className="mt-6 px-2 md:px-3">
        <Reveal>
          <Reel src="/videos/reel.mp4" poster="/videos/reel-poster.jpg" />
        </Reveal>
      </div>

      {/* Tanıtım */}
      <Container className="py-28 md:py-40">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal>
            <h2 className="text-[clamp(36px,4.4vw,64px)] font-medium leading-[1.02] tracking-[-0.04em]">
              Fikirden ürüne,
              <br />
              tek ekip.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[clamp(18px,1.5vw,22px)] leading-[1.45]">
              Tasarımı, yazılımı ve yayına almayı aynı ekip yapıyor. Kendi ürünlerimizi geliştirirken kullandığımız
              yöntemleri müşteri işlerimizde de kullanıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Pill href="#yaklasim">Yaklaşımımız</Pill>
              <Pill href="#isler" tone="light">
                İşlerimiz
              </Pill>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Öne çıkan işler */}
      <section id="isler" className="scroll-mt-6">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
            <h2 className="text-[clamp(44px,6vw,96px)] font-medium leading-none tracking-[-0.045em]">Öne çıkan işler</h2>
            <p className="max-w-[360px] text-muted">
              Kendi ürünlerimiz ve müşterilerimiz için tasarlayıp geliştirdiğimiz işlerden bir seçki.
            </p>
          </div>

          <div className="mt-14 grid gap-x-4 gap-y-14 md:grid-cols-2 md:gap-y-20">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <WorkCard
                  href={`/projeler/${p.slug}`}
                  title={p.name}
                  tags={p.tags}
                  video={{ src: p.media.loop, poster: p.media.poster }}
                />
              </Reveal>
            ))}
            {WORK.map((w, i) => (
              <Reveal key={w.href} delay={(i % 2) * 0.08}>
                <WorkCard
                  href={w.slug ? `/projeler/${w.slug}` : w.href}
                  title={w.name}
                  tags={w.tags}
                  status={w.status}
                  video={w.video}
                  external={!w.slug}
                />
              </Reveal>
            ))}
            {(PROJECTS.length + WORK.length) % 2 === 1 && (
              <Reveal delay={0.08}>
                <a
                  href="/iletisim"
                  className="group flex aspect-[16/10] flex-col justify-between rounded-[20px] bg-blue p-7 text-white md:p-10"
                >
                  <span className="label text-white/70">Sıradaki proje</span>
                  <span className="flex items-end justify-between gap-6">
                    <span className="text-[clamp(32px,3.6vw,56px)] font-medium leading-[1] tracking-[-0.04em]">
                      Burada sizin
                      <br />
                      projeniz olabilir.
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-xl text-blue transition-transform duration-500 group-hover:-rotate-45"
                    >
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* Yaklaşım */}
      <section id="yaklasim" className="scroll-mt-6 py-32 md:py-44">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <Label className="text-muted">Yaklaşımımız</Label>
            <div className="flex flex-col gap-8 text-[clamp(22px,2.2vw,32px)] leading-[1.3] tracking-[-0.02em]">
              <Reveal>
                <p>
                  Her işe, ne yapılması gerektiğini birlikte netleştirerek başlıyoruz. Kapsamı, süreyi ve fiyatı yazılı
                  olarak paylaşıyor; sonra tasarıma geçiyoruz.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-muted">
                  Tasarım ve kod aynı masada ilerliyor. Ara teslimlerle çalışıyor, her adımda onayınızı alıyor ve işi
                  yayına aldıktan sonra da yanınızda kalıyoruz.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Kapanış çağrısı */}
      <section className="px-2 md:px-3">
        <Reveal>
          <div className="rounded-[24px] bg-white px-6 py-24 text-center md:py-36">
            <Label className="text-muted">Sıradaki proje</Label>
            <h2 className="mx-auto mt-8 max-w-[1100px] text-[clamp(44px,7.4vw,120px)] font-medium leading-[0.98] tracking-[-0.05em]">
              Büyük fikrin <span className="text-blue">hazır mı?</span>
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
