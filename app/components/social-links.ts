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
      en: "Free previews, exclusive giveaways, and first dibs on everything. Join the fun!",
      ru: "Бесплатные превью, эксклюзивные розыгрыши и все новости первыми. Заходи, тут своя атмосфера!"
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
      en: "Daily spicy posts, full photosets, and PPVs that'll make your day better 😏",
      ru: "Полные сеты в HD, горячие посты каждый день и PPV, от которых жарко. Подписывайся — не пожалеешь 😏"
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
      en: "SFW vibes, cute selfies, and outfit inspo. The tame side of me ✨",
      ru: "SFW-версия меня: милые селфи, образы и атмосфера. Для тех, кто любит эстетику ✨"
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
      en: "Flirty transitions, fun clips, and a reason to scroll less and subscribe more 😉",
      ru: "Кокетливые переходы, залипательные клипы и повод подписаться на большее 😉"
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
      ru: "Сотрудничество и реклама — пиши на hello@comotozze.com. Коротко и по делу, пожалуйста."
    },
    accentColor: "#3d1e3a",
    icon: "email",
    goalName: "click_business_email"
  }
];
