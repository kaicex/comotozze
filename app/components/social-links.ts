import type { IconType } from "react-icons";
import { FaEnvelopeOpenText, FaInstagram, FaPaperPlane, FaStar, FaTiktok } from "react-icons/fa";

export type SocialPlatform = {
  name: string;
  handle: string;
  url: string;
  description: string;
  accentColor: string;
  icon: IconType;
  goalName: string;
};

export const socialPlatforms: SocialPlatform[] = [
  {
    name: "Telegram",
    handle: "@ComotozzeOfficial",
    url: "https://t.me/ComotozzeOfficial",
    description: "My only real channel. No fakes.",
    accentColor: "#0088CC",
    icon: FaPaperPlane,
    goalName: "click_telegram"
  },
  {
    name: "Fansly",
    handle: "fansly.com/comatozze",
    url: "https://fansly.com/comatozze/posts",
    description: "Full sets, PPVs, daily spicy posts.",
    accentColor: "#6D4AFF",
    icon: FaStar,
    goalName: "click_fansly"
  },
  {
    name: "Instagram",
    handle: "@umaanorth",
    url: "https://www.instagram.com/umaanorth",
    description: "Cute teasers, selfies, outfits.",
    accentColor: "#E1306C",
    icon: FaInstagram,
    goalName: "click_instagram"
  },
  {
    name: "TikTok",
    handle: "@uma.north",
    url: "https://www.tiktok.com/@uma.north",
    description: "Fun transitions & flirty clips.",
    accentColor: "#69C9D0",
    icon: FaTiktok,
    goalName: "click_tiktok"
  },
  {
    name: "Business",
    handle: "hello@comotozze.com",
    url: "mailto:hello@comotozze.com",
    description: "Brands & collabs—email me here.",
    accentColor: "#3d1e3a",
    icon: FaEnvelopeOpenText,
    goalName: "click_business_email"
  }
];
