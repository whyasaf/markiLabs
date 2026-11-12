import Image from "next/image";
import Link from "next/link";
import LazyVideo from "@/components/LazyVideo";

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
  );

  const body = (
    <>
      {media}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-1 pt-4">
        <span className="text-[22px] font-medium tracking-[-0.02em] md:text-[26px]">
          {title}
          {external && <span className="ml-1.5 text-muted transition-colors group-hover:text-blue">↗</span>}
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
