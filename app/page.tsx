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
              alt="Comatozze – OnlyFans модель в портретной фотосессии"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-velvet/20 bg-white/80 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-rose-velvet/70 backdrop-blur">
            Comotozze
          </span>
          <h1 className="font-display text-[3rem] leading-[1.05] text-berry-ink sm:text-[3.5rem]">
            Comatozze – OnlyFans & Fansly Official Links
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-berry-ink/75 sm:text-lg">
            Добро пожаловать на официальный хаб Comatozze. Если вы искали "comotozze", значит попали по популярной опечатке – здесь находятся все проверенные ссылки модели, новости и свежие релизы 18+.
          </p>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-berry-ink/75 sm:text-lg">
            Подписывайтесь, чтобы не пропускать эксклюзивные фото, backstage-видео и прямые эфиры. Каждый канал ниже ведётся лично Comatozze – без фейков и зеркал.
          </p>
        </header>

        <ul className="w-full space-y-4">
          {socialPlatforms.map((platform) => (
            <SocialLinkCard key={platform.name} platform={platform} />
          ))}
        </ul>

        <section className="w-full space-y-4 rounded-3xl border border-rose-velvet/15 bg-white/70 p-6 text-left shadow-[0_18px_56px_-40px_rgba(61,30,58,0.48)] backdrop-blur-sm">
          <h2 className="font-display text-2xl text-berry-ink">О Comatozze</h2>
          <p className="text-base leading-relaxed text-berry-ink/80">
            Comatozze – псевдоним модели, которая ведёт OnlyFans и Fansly, делится фотосетами, сториз и приватными обновлениями для взрослых. Этот сайт создан, чтобы собрать все официальные ресурсы в одном месте и защитить поклонников от поддельных аккаунтов.
          </p>
          <p className="text-base leading-relaxed text-berry-ink/80">
            Здесь вы найдёте расписание новых постов, подборки лучших коллабораций и ссылки на фан-сообщества. Если вы пришли по запросу «comotozze», сохраните правильное написание — Comatozze, чтобы не потерять доступ к эксклюзиву.
          </p>
        </section>

        <section className="w-full space-y-3 rounded-3xl border border-rose-velvet/10 bg-rose-petal/20 p-6 text-left backdrop-blur-sm">
          <h2 className="font-display text-2xl text-berry-ink">FAQ</h2>
          <details className="group rounded-2xl border border-rose-velvet/10 bg-white/70 p-4 transition hover:border-rose-velvet/30">
            <summary className="cursor-pointer text-lg font-semibold text-berry-ink">
              Кто такая Comatozze?
            </summary>
            <p className="mt-2 text-base leading-relaxed text-berry-ink/80">
              Comatozze – авторский бренд модели 18+, которая делится премиальным контентом и общается с фанатами на платформах OnlyFans и Fansly. Она известна фотосессиями в неоновых сеттингах и дружелюбным подходом в личных сообщениях.
            </p>
          </details>
          <details className="group rounded-2xl border border-rose-velvet/10 bg-white/70 p-4 transition hover:border-rose-velvet/30">
            <summary className="cursor-pointer text-lg font-semibold text-berry-ink">
              Где найти её OnlyFans и Fansly?
            </summary>
            <p className="mt-2 text-base leading-relaxed text-berry-ink/80">
              Все официальные ссылки размещены в разделе выше. Нажмите на карточку OnlyFans или Fansly, чтобы перейти к подписке и увидеть свежие публикации без посредников.
            </p>
          </details>
          <details className="group rounded-2xl border border-rose-velvet/10 bg-white/70 p-4 transition hover:border-rose-velvet/30">
            <summary className="cursor-pointer text-lg font-semibold text-berry-ink">
              Почему домен называется comotozze.com?
            </summary>
            <p className="mt-2 text-base leading-relaxed text-berry-ink/80">
              Многие ищут Comatozze как «comotozze». Мы закрепили это написание, чтобы поклонники не попадали на фейковые сайты и всегда находили настоящие профили модели.
            </p>
          </details>
        </section>
      </section>
    </main>
  );
}
