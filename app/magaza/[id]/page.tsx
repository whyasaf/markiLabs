import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/app/magaza/[id]/client";

const PRODUCT_META: Record<string, { title: string; desc: string }> = {
  "web-tasarim": {
    title: "Web Tasarım & Geliştirme",
    desc: "Yüksek hızlı, SEO uyumlu ve kullanıcı dostu yönetim paneline sahip profesyonel web siteleri.",
  },
  "logo-tasarimi": {
    title: "Kurumsal Logo Tasarımı",
    desc: "Markanızın karakterini ve vizyonunu yansıtan, her mecrada kullanılabilir kreatif logo tasarımları.",
  },
  "kurumsal-kimlik": {
    title: "Kurumsal Kimlik Paketi",
    desc: "Kartvizit, antetli kağıt, sunum dosyası ve zarf gibi kurumsal marka materyallerinin profesyonel tasarımları.",
  },
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const meta = PRODUCT_META[id];

  if (!meta) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: `${meta.title} — Mağaza`,
    description: meta.desc,
    openGraph: {
      title: meta.title,
      description: meta.desc,
      url: `https://markilabs.com/magaza/${id}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  
  if (!PRODUCT_META[id]) {
    notFound();
  }

  return <ProductDetailClient id={id} />;
}
