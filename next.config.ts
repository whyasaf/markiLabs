import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev server açıkken ayrı klasöre build almak için: NEXT_DIST_DIR=.next-build.nosync npx next build
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Üst klasörde başka bir package-lock.json var; kökü bu projeye sabitle.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
