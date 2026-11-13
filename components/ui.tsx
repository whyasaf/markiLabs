import Link from "next/link";
import { ArrowCircle, FillBubble } from "@/components/Arrow";
import type { ReactNode } from "react";

const isExternal = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

/** Lusion tarzı hap buton: metin + sağda yuvarlak ok; üzerine gelince ok kayar. */
export function Pill({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light" | "blue" | "ghost";
}) {
  const tones = {
    // bubble: oktaki dairenin rengi; üzerine gelince bütün butonu kaplar. hover: kaplayınca yazının rengi
    dark: { box: "bg-ink text-white", bubble: "bg-white", arrow: "text-ink", hover: "group-hover:text-ink" },
    light: { box: "bg-white text-ink", bubble: "bg-ink", arrow: "text-white", hover: "group-hover:text-white" },
    blue: { box: "bg-blue text-white", bubble: "bg-white", arrow: "text-blue", hover: "group-hover:text-blue" },
    ghost: { box: "border border-ink/20 text-ink", bubble: "bg-ink", arrow: "text-white", hover: "group-hover:text-white" },
  }[tone];

  const inner = (
    <>
      <FillBubble className={`right-1.5 h-9 w-9 ${tones.bubble}`} />
      <span className={`transition-colors duration-500 ${tones.hover}`}>{children}</span>
      <ArrowCircle className={`h-9 w-9 ${tones.arrow}`} />
    </>
  );

  const cls = `group relative isolate inline-flex min-h-12 items-center gap-4 overflow-hidden rounded-full py-1.5 pl-6 pr-1.5 text-[15px] font-medium ${tones.box}`;

  return isExternal(href) ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-4 md:px-8 ${className}`}>{children}</div>;
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`label ${className}`}>{children}</span>;
}
