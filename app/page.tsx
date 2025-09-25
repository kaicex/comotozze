import Image from "next/image";
import { SocialLinkCard } from "./components/SocialLinkCard";
import { socialPlatforms } from "./components/social-links";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full justify-center overflow-hidden bg-gradient-to-br from-blossom via-white to-rose-petal/40 px-4 py-20 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-gradient opacity-70 blur-[150px] animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-6rem] h-[360px] w-[360px] rounded-full bg-rose-velvet/15 blur-[160px] animate-float-slow"
      />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <header className="w-full space-y-4">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-rose-velvet/30 bg-white/40 shadow-[0_22px_48px_-32px_rgba(61,30,58,0.32)]">
            <Image
              src="https://ugc.production.linktr.ee/c602e625-8b82-4bbf-953b-45f540adf6cd_Untitled-1.jpeg?io=true&size=avatar-v3_0"
              alt="Comatozze – Uma North модель"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-velvet/20 bg-white/80 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-rose-velvet/70 backdrop-blur">
            Official Links
          </span>
          <h1 className="font-display text-[3rem] leading-[1.05] text-berry-ink sm:text-[3.5rem]">
            Comatozze / Uma North
          </h1>
        </header>

        <ul className="w-full space-y-4">
          {socialPlatforms.map((platform) => (
            <SocialLinkCard key={platform.name} platform={platform} />
          ))}
        </ul>
      </section>
    </main>
  );
}
