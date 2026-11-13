import Image from "next/image";

/**
 * Lusion tarzı mavi duotone kart. Fotoğraflar gri tonlanıp lila zeminle "multiply" karışır (açık yerler lila olur),
 * üstteki mavi katman "screen" ile koyu yerleri maviye çeker. Fotoğraflar yavaşça yakınlaşarak birbirine geçer.
 */
export default function DuotoneVideo({ images }: { images: string[] }) {
  const n = images.length;
  const cycle = n * 5; // her fotoğraf 5 sn
  return (
    <div data-duotone className="relative isolate aspect-[16/10] overflow-hidden rounded-[24px] bg-[#bcc4ff]">
      {images.map((src, i) => (
        <div
          key={src}
          className="duo-slide absolute inset-0 mix-blend-multiply"
          style={{ animationDuration: `${cycle}s`, animationDelay: `${i * 5 - cycle}s` }}
        >
          <Image src={src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover grayscale contrast-[1.1] brightness-110" />
        </div>
      ))}
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-blue mix-blend-screen opacity-70" />
    </div>
  );
}
