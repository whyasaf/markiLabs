import { NextResponse, type NextRequest } from "next/server";
import { EN_SEGMENTS, LANG_COOKIE, enToInternal, localePath } from "@/lib/i18n";

/**
 * Dil yönlendirmesi. Sayfalar app/[lang]/ altında Türkçe klasör adlarıyla durur; bu dosya genel adresleri
 * oraya bağlar:
 *   /hakkimizda        → (iç) /tr/hakkimizda
 *   /en/about          → (iç) /en/hakkimizda
 *   /tr/hakkimizda     → yönlendirme: /hakkimizda       (Türkçenin tek adresi öneksiz)
 *   /en/hakkimizda     → yönlendirme: /en/about         (İngilizcenin tek adresi İngilizce kelimelerle)
 *   /                  → ilk ziyarette tarayıcı dili Türkçe değilse /en (çerez yoksa, bot değilse)
 * Next'in ürettiği önizleme görseli adresleri (…/opengraph-image) iç adres olarak olduğu gibi geçer.
 */

const BOT = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|linkedin|preview|embed|lighthouse/i;

/** Accept-Language'deki ilk tercih Türkçe mi? (başlık yoksa Türkçe say) */
function prefersTurkish(header: string | null) {
  if (!header) return true;
  const first = header.split(",")[0]?.trim().toLowerCase() ?? "";
  return first === "" || first === "*" || first.startsWith("tr");
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname } = url;
  const segs = pathname.split("/").filter(Boolean);

  // Next'in iç adreslerle ürettiği önizleme görselleri
  if (segs.at(-1)?.startsWith("opengraph-image") && (segs[0] === "tr" || segs[0] === "en")) return NextResponse.next();

  if (segs[0] === "tr") {
    url.pathname = "/" + segs.slice(1).join("/");
    return NextResponse.redirect(url, 308);
  }

  if (segs[0] === "en") {
    const rest = "/" + segs.slice(1).join("/");
    // Türkçe kelimeli İngilizce adres: İngilizce karşılığına yönlendir
    if (segs.slice(1).some((s) => s in EN_SEGMENTS)) {
      url.pathname = localePath("en", rest);
      return NextResponse.redirect(url, 308);
    }
    url.pathname = "/en" + (rest === "/" ? "" : enToInternal(rest));
    return NextResponse.rewrite(url);
  }

  // Öneksiz adres: Türkçe. Ana sayfaya ilk gelişte tarayıcı dili Türkçe değilse İngilizceye yönlendir.
  if (pathname === "/") {
    const chosen = request.cookies.get(LANG_COOKIE)?.value;
    const isBot = BOT.test(request.headers.get("user-agent") ?? "");
    if (chosen === "en" || (!chosen && !isBot && !prefersTurkish(request.headers.get("accept-language")))) {
      url.pathname = "/en";
      return NextResponse.redirect(url, 307);
    }
  }
  url.pathname = "/tr" + (pathname === "/" ? "" : pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  // _next, api ve uzantılı dosyalar (görseller, videolar, robots.txt, sitemap.xml, favicon) hariç her şey
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
