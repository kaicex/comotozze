"use client";

import Link from "next/link";
import { useState, use } from "react";
import { SocialLinkCard } from "../components/SocialLinkCard";
import { socialPlatforms } from "../components/social-links";

const LANGUAGE_OPTIONS = [
  { code: "en", label: "EN", title: "English" },
  { code: "ru", label: "RU", title: "Русский" },
  { code: "zh", label: "中文", title: "简体中文" }
] as const;

type Language = (typeof LANGUAGE_OPTIONS)[number]["code"];

const COPY: Record<
  Language,
  {
    tagline?: string;
    intro?: string[];
    navLabel: string;
    faqTitle: string;
    faqItems: Array<{ id: string; question: string; answer: string }>;
  }
> = {
  en: {
    tagline:
      "Hi, I'm Uma! Think cute face, wild mind.\nI post the stuff your feed is missing — daily spice, full sets, and good vibe",
    navLabel: "Official social links and contact for Comatozze",
    faqTitle: "FAQ — Common Questions",
    faqItems: [
      {
        id: "why-subscribe",
        question: "Why subscribe?",
        answer:
          "Daily fresh content, Full HD photosets, Personal replies, Exclusive PPVs, No paywalls on main feed."
      },
      {
        id: "telegram",
        question: "Where is my real Telegram?",
        answer: "The first card is Telegram. That's where I post updates."
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
    tagline: "Привет, я Ума! Милая снаружи, дикая внутри 😈\nЕжедневный контент, полные сеты и никакой скукоты....",
    navLabel: "Официальные соцсети и контакты Comatozze",
    faqTitle: "FAQ — Частые вопросы",
    faqItems: [
      {
        id: "why-subscribe",
        question: "Почему стоит подписаться?",
        answer:
          "Ежедневный свежий контент без пауз, полные сеты в высоком качестве, отвечаю лично в сообщениях, эксклюзивные PPV, которых нет в ленте, никаких пейволлов — основной контент доступен сразу."
      },
      {
        id: "telegram",
        question: "Где мой настоящий Telegram?",
        answer:
          "Первая карточка в списке — это мой главный канал. Там я публикую новости, превью и розыгрыши. Заходи!"
      },
      {
        id: "fansly",
        question: "Почему нет OnlyFans?",
        answer: "Я перешла на Fansly — там стабильнее и удобнее. Вся магия по ссылке выше, подписывайся!"
      },
      {
        id: "business",
        question: "Связь по рекламе?",
        answer:
          "Пиши на hello@comotozze.com с коротким и понятным предложением. Отвечаю быстро, если интересно!"
      }
    ]
  },
  zh: {
    tagline: "嗨，我是Uma！外表甜美，内心野性。\n每天更新你想看的内容——性感照片、完整套图，让你心动 💕",
    navLabel: "Comatozze官方社交媒体和联系方式",
    faqTitle: "常见问题解答",
    faqItems: [
      {
        id: "why-subscribe",
        question: "为什么要订阅我？",
        answer:
          "每日新鲜内容更新、全高清照片套图、我会亲自回复你的消息、独家付费视频、主页内容无需额外付费。"
      },
      {
        id: "telegram",
        question: "你的官方Telegram在哪里？",
        answer:
          "第一个卡片就是我的Telegram频道。我会在那里发布最新动态。"
      },
      {
        id: "fansly",
        question: "为什么不用OnlyFans？",
        answer: "我主要使用Fansly，因为平台更稳定。上面的 fansly.com/comatozze 就是订阅地址。"
      },
      {
        id: "business",
        question: "想投放广告？",
        answer:
          "请发送简短明确的合作提案至 hello@comotozze.com。内容请简洁清晰。"
      }
    ]
  }
};

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const language = (lang as Language) || "en";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const copy = COPY[language];

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

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 text-center" lang={language}>

        <div className="relative w-full">
          <div className="relative mx-auto h-56 w-48 overflow-hidden rounded-3xl border border-rose-velvet/30 bg-white/40 shadow-[0_22px_48px_-32px_rgba(61,30,58,0.32)]">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-[center_65%]"
              aria-label="Comatozze – Uma North portrait"
            />
          </div>

          <div className="absolute right-0 top-0 z-20">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-rose-velvet transition hover:bg-rose-velvet/5 outline-none"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {LANGUAGE_OPTIONS.find((opt) => opt.code === language)?.label}
              <svg
                className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-lg border border-rose-velvet/20 bg-white/90 shadow-lg backdrop-blur">
                {LANGUAGE_OPTIONS.map((option) => (
                  <Link
                    key={option.code}
                    href={`/${option.code}`}
                    className={[
                      "block w-full px-4 py-2 text-left text-sm font-medium transition",
                      option.code === language
                        ? "bg-rose-velvet text-white"
                        : "text-rose-velvet/70 hover:bg-rose-velvet/10 hover:text-rose-velvet"
                    ].join(" ")}
                    aria-label={option.title}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {option.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <header className="w-full space-y-4">
          <h1 className="font-display text-[3rem] leading-[1.05] text-berry-ink sm:text-[3.5rem]">Comatozze / Uma North</h1>
          {copy.tagline ? (
            <h2 className="text-sm font-medium text-berry-ink/70 sm:text-base whitespace-pre-line">{copy.tagline}</h2>
          ) : null}
          {copy.intro && copy.intro.length > 0 ? (
            <div className="mx-auto max-w-2xl text-base leading-relaxed text-berry-ink/80 sm:text-lg">
              <p className="whitespace-pre-line">{copy.intro.join("\n")}</p>
            </div>
          ) : null}
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
