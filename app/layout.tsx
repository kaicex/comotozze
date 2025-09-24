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
    default: "Comotozze | Links",
    template: "%s | Comotozze"
  },
  description: "Curated hub of Comotozze social and community links.",
  openGraph: {
    title: "Comotozze | Links",
    description: "Find all the official Comotozze social profiles and communities in one place.",
    url: "https://comotozze.com",
    siteName: "Comotozze",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Comotozze | Links",
    description: "Discover the latest social channels from the Comotozze collective.",
    creator: "@comotozze"
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
