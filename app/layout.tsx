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
    default: "Comatozze – OnlyFans & Fansly модель",
    template: "%s | Comatozze"
  },
  description:
    "Comatozze (иногда ищут как comotozze) – модель OnlyFans и Fansly с эксклюзивными фото, видео 18+ и официальными ссылками на соцсети.",
  keywords: [
    "Comatozze",
    "Comotozze",
    "OnlyFans модель",
    "Fansly модель",
    "контент 18+",
    "официальные ссылки Comatozze"
  ],
  alternates: {
    canonical: "https://comotozze.com"
  },
  openGraph: {
    title: "Comatozze – OnlyFans & Fansly модель",
    description:
      "Официальные ссылки, фото и видео 18+ популярной модели Comatozze (часто ищут как comotozze).",
    url: "https://comotozze.com",
    siteName: "Comatozze Official",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://comotozze.com/preview.jpg",
        alt: "Comatozze – популярная модель OnlyFans/Fansly",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Comatozze – OnlyFans & Fansly",
    description: "Официальные ссылки и эксклюзивный контент 18+ модели Comatozze.",
    creator: "@comatozze",
    images: [{ url: "https://comotozze.com/preview.jpg", alt: "Comatozze в фотосессии" }]
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
