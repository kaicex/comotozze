export type LocalizedText = {
  en: string;
  ru: string;
  zh: string;
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
      ru: "Telegram",
      zh: "Telegram"
    },
    handle: "@ComotozzeOfficial",
    url: "https://t.me/ComotozzeOfficial",
    description: {
      en: "Free previews, exclusive giveaways, and first dibs on everything. Join the fun!",
      ru: "Бесплатные превью, эксклюзивные розыгрыши и все новости первыми. Заходи, тут своя атмосфера!",
      zh: "免费预览、独家福利抽奖，第一时间获取所有更新。快来加入吧！"
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
      ru: "Fansly",
      zh: "Fansly"
    },
    handle: "fansly.com/comatozze",
    url: "https://fansly.com/comatozze/posts",
    description: {
      en: "Daily spicy posts, full photosets, and PPVs that'll make your day better 😏",
      ru: "Полные сеты в HD, горячие посты каждый день и PPV, от которых жарко. Подписывайся — не пожалеешь 😏",
      zh: "每日更新火辣内容、高清全套写真和独家付费视频。订阅我，让你的每一天都更精彩 😏"
    },
    accentColor: "#6D4AFF",
    icon: "fansly",
    goalName: "click_fansly"
  },
  {
    name: "Instagram",
    label: {
      en: "Instagram",
      ru: "Instagram",
      zh: "Instagram"
    },
    handle: "@umaanorth",
    url: "https://www.instagram.com/umaanorth",
    description: {
      en: "SFW vibes, cute selfies, and outfit inspo. The tame side of me ✨",
      ru: "SFW-версия меня: милые селфи, образы и атмосфера. Для тех, кто любит эстетику ✨",
      zh: "日常美照、自拍和穿搭分享。温柔可爱的我 ✨"
    },
    accentColor: "#E1306C",
    icon: "instagram",
    goalName: "click_instagram"
  },
  {
    name: "TikTok",
    label: {
      en: "TikTok",
      ru: "TikTok",
      zh: "TikTok"
    },
    handle: "@uma.north",
    url: "https://www.tiktok.com/@uma.north",
    description: {
      en: "Flirty transitions, fun clips, and a reason to scroll less and subscribe more 😉",
      ru: "Кокетливые переходы, залипательные клипы и повод подписаться на большее 😉",
      zh: "撩人的转场视频、有趣的短片，给你一个订阅的理由 😉"
    },
    accentColor: "#69C9D0",
    icon: "tiktok",
    goalName: "click_tiktok"
  },
  {
    name: "Business",
    label: {
      en: "Business",
      ru: "Деловая почта",
      zh: "商务合作"
    },
    handle: "hello@comotozze.com",
    url: "mailto:hello@comotozze.com",
    description: {
      en: "Brands & collabs—email me here.",
      ru: "Сотрудничество и реклама — пиши на hello@comotozze.com. Коротко и по делу, пожалуйста.",
      zh: "品牌合作与广告投放——请发邮件联系。"
    },
    accentColor: "#3d1e3a",
    icon: "email",
    goalName: "click_business_email"
  }
];
