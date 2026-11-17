import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import type { Dict } from "@/lib/dictionaries/tr";
import { localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type FooterText = Pick<Dict, "nav" | "footer">;

export default function Footer({ lang, t }: { lang: Locale; t: FooterText }) {
  const cols = [
    {
      title: t.footer.menu,
      links: [
        { label: t.nav.home, href: "/" },
        { label: t.nav.services, href: "/hizmetler" },
        { label: t.nav.about, href: "/hakkimizda" },
        { label: t.nav.contact, href: "/iletisim" },
      ],
    },
    {
      title: t.footer.products,
      links: PROJECTS.map((p) => ({ label: p.name, href: `/projeler/${p.slug}` })),
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.kvkk, href: "/kvkk" },
        { label: t.footer.privacy, href: "/gizlilik" },
        { label: t.footer.terms, href: "/kosullar" },
      ],
    },
  ];

  return (
    <footer className="p-2 md:p-3">
      <div className="rounded-[24px] bg-ink px-6 pb-8 pt-16 text-white md:px-12 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-6">
            <span className="label text-white/45">{t.footer.reach}</span>
            <a href={`mailto:${SITE.email}`} className="text-[clamp(20px,2vw,28px)] font-medium tracking-[-0.02em] hover:text-blue">
              {SITE.email}
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[17px] text-white/70 hover:text-white">
              WhatsApp · {SITE.whatsappLabel}
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-2.5">
              <span className="label mb-2 text-white/45">{c.title}</span>
              {c.links.map((l) => (
                <Link key={l.href} href={localePath(lang, l.href)} className="text-white/80 transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-8">
          <Image src="/logo-white.png" alt="Marki Labs" width={484} height={76} className="h-auto w-[min(70vw,520px)]" />
          <span className="label text-white/45">©{new Date().getFullYear()} Marki Labs</span>
        </div>
      </div>
    </footer>
  );
}
