import Image from "next/image";

/** Ekran görüntüsünü sade bir tarayıcı çerçevesine koyar; renkler projenin temasından gelir. */
export default function Browser({
  src,
  alt,
  url,
  dark = false,
  radius = 14,
  width = 1600,
  height = 1000,
}: {
  src: string;
  alt: string;
  url?: string;
  dark?: boolean;
  radius?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,.35)]"
      style={{ borderRadius: radius, background: dark ? "#111" : "#fff", border: `1px solid ${dark ? "#27272a" : "#e5e5e5"}` }}
    >
      <div
        className="flex h-9 items-center gap-1.5 px-4"
        style={{ borderBottom: `1px solid ${dark ? "#27272a" : "#eee"}`, background: dark ? "#18181b" : "#fff" }}
      >
        {[0, 1, 2].map((i) => (
          <i key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: dark ? "#3f3f46" : "#e3e3e3" }} />
        ))}
        {url && (
          <span className="ml-3 truncate text-[12px]" style={{ color: dark ? "#a1a1aa" : "#777" }}>
            {url}
          </span>
        )}
      </div>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 768px) 60vw, 100vw" className="h-auto w-full" />
    </div>
  );
}
