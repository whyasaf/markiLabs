import Image from "next/image";
import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import LazyVideo from "@/components/LazyVideo";
import { ScaleIn } from "@/components/CardReveal";

type Props = {
  href: string;
  title: string;
  tags: string[];
  status?: string;
  external?: boolean;
  video?: { src: string; poster: string };
  image?: string;
};

/** Lusion "Featured Work" kartı: yuvarlak medya, altında başlık ve mono etiketler. */
export default function WorkCard({ href, title, tags, status, external, video, image }: Props) {
  const media = (
    <ScaleIn>
    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-white">
      <div className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]">
        {video ? (
          <LazyVideo src={video.src} poster={video.poster} className="h-full w-full object-cover" />
        ) : image ? (
          <Image src={image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
        ) : null}
      </div>
      {status && (
        <span className="label absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-ink">{status}</span>
      )}
    </div>
    </ScaleIn>
  );

  const body = (
    <>
      {media}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-1 pt-4">
        <span className="flex items-center text-[22px] font-medium tracking-[-0.02em] md:text-[26px]">
          {/* Lusion gibi: üzerine gelince başlığın soluna ok kayarak girer, başlık sağa itilir */}
          <span className="inline-flex w-0 overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[1.15em]">
            <Arrow className={`h-[0.75em] w-[0.75em] shrink-0 -translate-x-full text-blue transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0 ${external ? "-rotate-45" : ""}`} />
          </span>
          {title}
        </span>
        <span className="label text-muted">{tags.join(" · ")}</span>
      </div>
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      {body}
    </a>
  ) : (
    <Link href={href} className="group block">
      {body}
    </Link>
  );
}
