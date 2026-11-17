import Link from "next/link";
import { ArrowCircle } from "@/components/Arrow";
import { nextCase } from "@/data/cases";
import { getDict } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

/** Sıradaki projeye geçiş kartı; kart, sıradaki projenin kendi renklerini taşır. */
export default function NextCase({ lang, current, radius = 0 }: { lang: Locale; current: string; radius?: number }) {
  const n = nextCase(current);
  return (
    <section className="px-2 pt-3 md:px-3">
      <Link
        href={localePath(lang, `/projeler/${n.slug}`)}
        className="group flex min-h-[340px] flex-col justify-between p-8 md:p-14"
        style={{ background: n.bg, color: n.fg, borderRadius: radius }}
      >
        <span className="text-[16px] font-medium tracking-[-0.01em]" style={{ color: n.accent }}>
          {getDict(lang).caseStudy.next}
        </span>
        <span className="flex flex-wrap items-end justify-between gap-6">
          <span
            className="text-[clamp(40px,6vw,92px)] leading-[1] tracking-[-0.03em]"
            style={n.serif ? { fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" } : { fontWeight: 600 }}
          >
            {n.name}
          </span>
          <ArrowCircle className="h-16 w-16" style={{ background: n.accent, color: n.bg }} />
        </span>
      </Link>
    </section>
  );
}
