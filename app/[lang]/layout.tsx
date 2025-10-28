import type { Metadata } from "next";
import { LangProvider } from "./LangProvider";

type Props = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  const titles = {
    en: "Comatozze / Uma North - Official Links",
    ru: "Comatozze / Uma North - Официальные ссылки"
  };

  const descriptions = {
    en: "Official social links and contact for Comatozze / Uma North. Daily content, exclusive sets, and more.",
    ru: "Официальные соцсети и контакты Comatozze / Uma North. Ежедневный контент, эксклюзивные сеты и многое другое."
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ru: "/ru"
      }
    },
    openGraph: {
      locale: lang === "ru" ? "ru_RU" : "en_US",
      alternateLocale: lang === "ru" ? "en_US" : "ru_RU"
    }
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }];
}

export default async function LangLayout({ params, children }: Props) {
  const { lang } = await params;
  return <LangProvider lang={lang}>{children}</LangProvider>;
}
