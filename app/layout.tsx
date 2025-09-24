import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });

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
  viewport: {
    width: "device-width",
    initialScale: 1
  },
  other: {
    rating: "adult",
    robots: "index, follow"
  }
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
