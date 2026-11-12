import Link from "next/link";
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
    dark: { box: "bg-ink text-white", dot: "bg-white text-ink" },
    light: { box: "bg-white text-ink", dot: "bg-ink text-white" },
    blue: { box: "bg-blue text-white", dot: "bg-white text-blue" },
    ghost: { box: "border border-ink/20 text-ink hover:border-ink", dot: "bg-ink text-white" },
  }[tone];

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className={`relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ${tones.dot}`}
      >
        <span className="transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-9">→</span>
        <span className="absolute -translate-x-9 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0">
          →
        </span>
      </span>
    </>
  );

  const cls = `group inline-flex min-h-12 items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-[15px] font-medium transition-colors ${tones.box}`;

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
