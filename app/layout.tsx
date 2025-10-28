import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../public/fonts/manrope/Manrope-200.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/manrope/Manrope-300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/manrope/Manrope-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/manrope/Manrope-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/manrope/Manrope-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/manrope/Manrope-700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/manrope/Manrope-800.ttf", weight: "800", style: "normal" }
  ]
});

const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "../public/fonts/bricolage/BricolageGrotesque-200.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/bricolage/BricolageGrotesque-300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/bricolage/BricolageGrotesque-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/bricolage/BricolageGrotesque-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/bricolage/BricolageGrotesque-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/bricolage/BricolageGrotesque-700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/bricolage/BricolageGrotesque-800.ttf", weight: "800", style: "normal" }
  ]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comotozze.com"),
  title: {
    default: "Comatozze (Uma North) — Exclusive 18+ Content | Fansly Model",
    template: "%s | Comatozze Official"
  },
  description:
    "Uma North (Comatozze) — exclusive 18+ content creator. Daily posts, full sets, spicy content on Fansly. Subscribe for access.",
  keywords: [
    "Comatozze",
    "Comotozze",
    "OnlyFans модель",
    "Fansly модель",
    "контент 18+",
    "официальные ссылки Comatozze",
    "OnlyFans model",
    "Fansly model",
    "Comatozze official links",
    "Uma North",
    "Uma North официальный сайт"
  ],
  alternates: {
    canonical: "https://comotozze.com"
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ]
  },
  openGraph: {
    title: "Comatozze (Uma North) — Exclusive 18+ Content | Fansly Model",
    description:
      "Uma North (Comatozze) — exclusive 18+ content creator. Daily posts, full sets, spicy content on Fansly. Subscribe for access.",
    url: "https://comotozze.com",
    siteName: "Comatozze Official",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        alt: "Comatozze – популярная модель OnlyFans/Fansly",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Comatozze (Uma North) — Exclusive 18+ Content | Fansly Model",
    description:
      "Uma North (Comatozze) — exclusive 18+ content creator. Daily posts, full sets, spicy content on Fansly. Subscribe for access.",
    creator: "@comatozze",
    images: [{ url: "/preview.jpg", alt: "Comatozze в фотосессии" }]
  },
  other: {
    rating: "adult",
    robots: "index, follow"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

  return (
    <html lang="en" className="scroll-smooth bg-blossom">
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Comatozze",
            alternateName: "Uma North",
            url: "https://comotozze.com",
            description:
              "Uma North (Comatozze) is an exclusive 18+ content creator on Fansly, sharing daily posts, full sets, and spicy content with official links gathered on comotozze.com.",
            image: "https://comotozze.com/preview.jpg",
            sameAs: [
              "https://t.me/ComotozzeOfficial",
              "https://fansly.com/comatozze",
              "https://www.instagram.com/umaanorth",
              "https://www.tiktok.com/@uma.north"
            ]
          })}
        </Script>
        {yandexMetrikaId ? (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`
                (function (m, e, t, r, i, k, a) {
                  m[i] = m[i] || function () {(m[i].a = m[i].a || []).push(arguments)};
                  m[i].l = 1 * new Date();
                  for (var j = 0; j < document.scripts.length; j += 1) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k = e.createElement(t);
                  a = e.getElementsByTagName(t)[0];
                  k.async = 1;
                  k.src = r;
                  a.parentNode?.insertBefore(k, a);
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaId}", "ym");

                ym(${yandexMetrikaId}, "init", {
                  ssr: true,
                  webvisor: true,
                  clickmap: true,
                  ecommerce: "dataLayer",
                  accurateTrackBounce: true,
                  trackLinks: true
                });
              `}
            </Script>
            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${yandexMetrikaId}`}
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
