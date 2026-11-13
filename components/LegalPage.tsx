import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";

const DOCS = [
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/gizlilik", label: "Gizlilik Politikası" },
  { href: "/kosullar", label: "Kullanım Koşulları" },
];

/** Yasal metinler için sade okuma şablonu: solda belge listesi, sağda metin. */
export default function LegalPage({
  title,
  updated,
  current,
  children,
}: {
  title: string;
  updated: string;
  current: string;
  children: ReactNode;
}) {
  return (
    <Container className="pb-32 pt-16 md:pt-24">
      <h1 className="max-w-[900px] text-[clamp(44px,6.4vw,96px)] font-medium leading-[1] tracking-[-0.045em]">{title}</h1>
      <p className="label mt-8 text-muted">Son güncelleme: {updated}</p>

      <div className="mt-14 grid gap-12 border-t border-line pt-12 md:grid-cols-[260px_1fr] md:gap-20">
        <nav aria-label="Yasal belgeler" className="flex flex-col gap-1 md:sticky md:top-8 md:self-start">
          {DOCS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              aria-current={d.href === current ? "page" : undefined}
              className={`rounded-xl px-4 py-3 text-[15px] transition-colors ${
                d.href === current ? "bg-white font-medium text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {d.label}
            </Link>
          ))}
        </nav>
        <article className="legal max-w-[720px]">{children}</article>
      </div>
    </Container>
  );
}
