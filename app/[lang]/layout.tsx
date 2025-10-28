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
    ru: "Comatozze / Uma North - Официальные ссылки",
    zh: "Comatozze / Uma North - 官方链接"
  };

  const descriptions = {
    en: "Official social links and contact for Comatozze / Uma North. Daily content, exclusive sets, and more.",
    ru: "Официальные соцсети и контакты Comatozze / Uma North. Ежедневный контент, эксклюзивные сеты и многое другое.",
    zh: "Comatozze / Uma North官方社交媒体和联系方式。每日更新内容、独家套图等。"
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ru: "/ru",
        zh: "/zh"
      }
    },
    openGraph: {
      locale: lang === "zh" ? "zh_CN" : lang === "ru" ? "ru_RU" : "en_US",
      alternateLocale: lang === "zh" ? ["en_US", "ru_RU"] : lang === "ru" ? ["en_US", "zh_CN"] : ["ru_RU", "zh_CN"]
    }
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "zh" }];
}

export default async function LangLayout({ params, children }: Props) {
  const { lang } = await params;
  return <LangProvider lang={lang}>{children}</LangProvider>;
}
