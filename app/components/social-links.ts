export type LocalizedText = {
  en: string;
  ru: string;
};

export type SocialPlatform = {
  name: string;
  label: LocalizedText;
  handle: string;
  url: string;
  description: LocalizedText;
  accentColor: string;
  icon: "telegram" | "fansly" | "instagram" | "tiktok" | "email";
  goalName: string;
  isPrimary?: boolean;
};

export const socialPlatforms: SocialPlatform[] = [
  {
    name: "Telegram",
    label: {
      en: "Telegram",
      ru: "Telegram"
    },
    handle: "@ComotozzeOfficial",
    url: "https://t.me/ComotozzeOfficial",
    description: {
      en: "My only channel. News, previews, giveaways. Everything else is fake.",
      ru: "Мой единственный канал. Новости, превью, розыгрыши. Всё остальное — фейк."
    },
    accentColor: "#0088CC",
    icon: "telegram",
    goalName: "click_telegram",
    isPrimary: true
  },
  {
    name: "Fansly",
    label: {
      en: "Fansly",
      ru: "Fansly"
    },
    handle: "fansly.com/comatozze",
    url: "https://fansly.com/comatozze/posts",
    description: {
      en: "Full sets, PPVs, daily spicy posts.",
      ru: "Полные сеты, PPV и ежедневные горячие посты."
    },
    accentColor: "#6D4AFF",
    icon: "fansly",
    goalName: "click_fansly"
  },
  {
    name: "Instagram",
    label: {
      en: "Instagram",
      ru: "Instagram"
    },
    handle: "@umaanorth",
    url: "https://www.instagram.com/umaanorth",
    description: {
      en: "Cute teasers, selfies, outfits.",
      ru: "Милые тизеры, селфи и образы."
    },
    accentColor: "#E1306C",
    icon: "instagram",
    goalName: "click_instagram"
  },
  {
    name: "TikTok",
    label: {
      en: "TikTok",
      ru: "TikTok"
    },
    handle: "@uma.north",
    url: "https://www.tiktok.com/@uma.north",
    description: {
      en: "Fun transitions & flirty clips.",
      ru: "Весёлые переходы и кокетливые клипы."
    },
    accentColor: "#69C9D0",
    icon: "tiktok",
    goalName: "click_tiktok"
  },
  {
    name: "Business",
    label: {
      en: "Business",
      ru: "Деловая почта"
    },
    handle: "hello@comotozze.com",
    url: "mailto:hello@comotozze.com",
    description: {
      en: "Brands & collabs—email me here.",
      ru: "Бренды и коллаборации — пишите сюда."
    },
    accentColor: "#3d1e3a",
    icon: "email",
    goalName: "click_business_email"
  }
];
