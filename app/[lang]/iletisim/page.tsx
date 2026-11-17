import type { Metadata } from "next";
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import RiseWords from "@/components/Rise";
import { Container, Label } from "@/components/ui";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/iletisim", getDict(lang).meta.pages.contact);
}

export default async function IletisimPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const t = getDict(lang).contact;
  return (
    <Container className="pb-32 pt-16 md:pt-24">
      <Label className="text-muted">
        <RiseWords text={t.label} step={0.05} />
      </Label>
      <Reveal delay={0.05} className="mt-10 max-w-[1200px] md:mt-14">
        <ContactForm t={t} />
      </Reveal>

      <section aria-label={t.directLabel} className="mt-28 border-t border-line pt-8 md:mt-36">
        <Label className="text-muted">{t.direct}</Label>
        <Reveal className="mt-6">
          <ContactCards t={t} />
        </Reveal>
      </section>
    </Container>
  );
}
