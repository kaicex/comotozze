import type { Metadata } from "next";
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
  return (
    <html lang="en" className="scroll-smooth bg-blossom">
      <body className={`${sans.variable} ${display.variable} font-sans`}>{children}</body>
    </html>
  );
}
