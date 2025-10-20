 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SocialLinkCard } from "./components/SocialLinkCard";
import { socialPlatforms } from "./components/social-links";

const LANGUAGE_OPTIONS = [
  { code: "en", label: "EN", title: "English" },
  { code: "ru", label: "RU", title: "Русский" }
] as const;

type Language = (typeof LANGUAGE_OPTIONS)[number]["code"];

const COPY: Record<
  Language,
  {
    badgeLabel: string;
    tagline: string;
    intro: string[];
    navLabel: string;
    faqTitle: string;
    faqItems: Array<{ id: string; question: string; answer: string }>;
  }
> = {
  en: {
    badgeLabel: "Official Links",
    tagline: "18+ creator on Fansly",
    intro: ["All official links below."],
    navLabel: "Official social links and contact for Comatozze",
    faqTitle: "FAQ — Common Questions",
    faqItems: [
      {
        id: "telegram",
        question: "Where is my real Telegram?",
        answer: "The first card is Telegram. That’s where I post updates."
      },
      {
        id: "fansly",
        question: "Why is OnlyFans missing?",
        answer:
          "I focus on Fansly because it's more stable. The fansly.com/comatozze link above is the place to subscribe."
      },
      {
        id: "business",
        question: "Need to book an ad?",
        answer:
          "Email hello@comotozze.com with a short, direct brief. Please keep it clear and to the point."
      }
    ]
  },
  ru: {
    badgeLabel: "Официальные ссылки",
    tagline: "Модель 18+ на Fansly",
    intro: ["Все мои настоящие соцсети — ниже."],
    navLabel: "Официальные соцсети и контакты Comatozze",
    faqTitle: "FAQ — Частые вопросы",
    faqItems: [
      {
        id: "telegram",
        question: "Где мой настоящий Telegram?",
        answer: "Первый в списке — Telegram. Там я публикую всё основное."
      },
      {
        id: "fansly",
        question: "Почему нет OnlyFans?",
        answer:
          "Работаю через Fansly. Там стабильнее. Ссылка выше."
      },
      {
        id: "business",
        question: "Связь по рекламе?",
        answer:
          "Пиши на hello@comotozze.com. Кратко и по делу."
      }
    ]
  }
};

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = COPY[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="relative flex min-h-screen w-full justify-center overflow-hidden bg-gradient-to-br from-blossom via-white to-rose-petal/40 px-4 pt-4 pb-14 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-gradient opacity-70 blur-[150px] animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-6rem] h-[360px] w-[360px] rounded-full bg-rose-velvet/15 blur-[160px] animate-float-slow"
      />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-12 text-center" lang={language}>

        <div className="flex w-full justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-rose-velvet/20 bg-white/70 p-1 backdrop-blur">
            {LANGUAGE_OPTIONS.map((option) => {
              const isActive = option.code === language;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.36em] transition",
                    isActive
                      ? "bg-rose-velvet text-white shadow-[0_12px_28px_-18px_rgba(61,30,58,0.5)]"
                      : "text-rose-velvet/70 hover:text-rose-velvet"
                  ].join(" ")}
                  aria-pressed={isActive}
                  aria-label={option.title}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <header className="w-full space-y-5">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-rose-velvet/30 bg-white/40 shadow-[0_22px_48px_-32px_rgba(61,30,58,0.32)]">
            <Image
              src="https://ugc.production.linktr.ee/c602e625-8b82-4bbf-953b-45f540adf6cd_Untitled-1.jpeg?io=true&size=avatar-v3_0"
              alt="Comatozze – Uma North portrait"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-velvet/20 bg-white/80 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-rose-velvet/80 backdrop-blur">
            {copy.badgeLabel}
          </span>
          <h1 className="font-display text-[3rem] leading-[1.05] text-berry-ink sm:text-[3.5rem]">Comatozze / Uma North</h1>
          <h2 className="text-lg font-semibold uppercase tracking-[0.38em] text-rose-velvet/80 sm:text-xl">{copy.tagline}</h2>
          <div className="mx-auto max-w-2xl text-base leading-relaxed text-berry-ink/80 sm:text-lg">
            <p className="whitespace-pre-line">{copy.intro.join("\n")}</p>
          </div>
        </header>

        <nav aria-label={copy.navLabel} className="w-full" lang={language}>
          <ul className="space-y-4">
            {socialPlatforms.map((platform) => (
              <SocialLinkCard key={platform.name} platform={platform} language={language} />
            ))}
          </ul>
        </nav>

        <section
          id="faq"
          className="w-full rounded-3xl border border-white/60 bg-white/85 px-6 py-8 text-left shadow-[0_26px_60px_-38px_rgba(61,30,58,0.35)] backdrop-blur sm:px-10 sm:py-10"
        >
          <h3 className="font-display text-2xl text-berry-ink sm:text-[2.2rem]">{copy.faqTitle}</h3>
          <dl className="mt-6 space-y-6 text-base leading-relaxed text-berry-ink/80 sm:text-lg">
            {copy.faqItems.map((item) => (
              <div key={item.id}>
                <dt className="font-semibold text-berry-ink">{item.question}</dt>
                <dd className="mt-2 text-berry-ink/80">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </section>
    </main>
  );
}
