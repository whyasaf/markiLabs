import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Container, Label } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Marki Labs'e WhatsApp veya e-posta ile yazın.",
};

export default function IletisimPage() {
  return (
    <Container className="pb-32 pt-16 md:pt-24">
      <Label className="text-muted">İletişim · boşlukları doldurun</Label>
      <Reveal className="mt-10 max-w-[1200px] md:mt-14">
        <ContactForm />
      </Reveal>

      <div className="mt-28 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-8 text-[17px]">
        <span className="text-muted">Ya da doğrudan:</span>
        <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:text-blue hover:underline">
          {SITE.email}
        </a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-blue hover:underline">
          WhatsApp · {SITE.whatsappLabel}
        </a>
      </div>
    </Container>
  );
}
