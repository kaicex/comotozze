"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaEnvelopeOpenText, FaInstagram, FaPaperPlane, FaStar, FaTiktok } from "react-icons/fa";
import { useCallback } from "react";
import { trackMetrikaGoal } from "../lib/metrika";
import type { SocialPlatform } from "./social-links";

const iconMap: Record<SocialPlatform["icon"], IconType> = {
  telegram: FaPaperPlane,
  fansly: FaStar,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  email: FaEnvelopeOpenText
};

export function SocialLinkCard({
  platform
}: {
  platform: SocialPlatform;
}) {
  const accent = platform.accentColor.toUpperCase();
  const accentTint = `${accent}1f`;
  const accentGlow = `${accent}33`;
  const accentOverlay = `linear-gradient(120deg, ${accent}22 0%, ${accent}11 45%, transparent 100%)`;
  const Icon = iconMap[platform.icon];

  const cardStyle: CSSProperties = {
    borderColor: accentTint
  };

  const handleClick = useCallback(() => {
      trackMetrikaGoal(platform.goalName, {
        href: platform.url,
        text: platform.name
      });
    }, [platform.goalName, platform.name, platform.url]);

  return (
    <li>
      <a
        href={platform.url}
        target="_blank"
        rel="noreferrer noopener"
        className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border bg-white/85 px-6 py-5 text-left shadow-[0_24px_50px_-32px_rgba(61,30,58,0.28)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-34px_rgba(61,30,58,0.35)]"
        style={cardStyle}
        onClick={handleClick}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: accentOverlay }}
        />
        <span
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-white shadow-[0_18px_30px_-16px_rgba(61,30,58,0.32)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-18px_rgba(61,30,58,0.4)]"
          style={{ backgroundColor: accent }}
        >
          <Icon className="animate-float" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ boxShadow: `0 18px 34px -20px ${accentGlow}` }}
          />
        </span>
        <div className="relative z-10 flex flex-1 flex-col gap-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-display text-[1.4rem] leading-tight text-berry-ink">
              {platform.name}
            </span>
            <span className="rounded-full border border-rose-velvet/10 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.5em] text-rose-velvet/70">
              {platform.handle}
            </span>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-berry-ink/70">
            {platform.description}
          </p>
        </div>
        <span className="relative z-10 hidden text-sm font-semibold uppercase tracking-[0.32em] text-rose-velvet/70 transition-transform duration-300 group-hover:translate-x-1 sm:block">
          ↗
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: accentGlow }}
        />
      </a>
    </li>
  );
}
