import Image from "next/image";
import { ActionLink, Arrow } from "./ui";
export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-7 md:px-10 md:pb-12 md:pt-10 lg:px-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="relative py-6 lg:py-10">
          <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-muted">
            <span className="h-px w-8 bg-muted" />
            Кондитерский бутик · Астана
          </p>
          <h1 className="max-w-[650px] font-display text-[54px] leading-[.96] tracking-[-.035em] sm:text-[74px] lg:text-[88px] xl:text-[100px]">
            Искусство
            <br />
            быть <span className="italic text-wine">десертом.</span>
          </h1>
          <p className="mt-7 max-w-[330px] text-[13px] leading-[1.9] text-muted">
            Муссовые торты и арт-десерты, которые удивляют с первого взгляда. И
            раскрываются с первого кусочка.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
            <ActionLink href="#desserts">Выбрать десерт</ActionLink>
            <a
              href="#events"
              className="inline-flex items-center gap-3 text-[11px] underline decoration-line underline-offset-6"
            >
              Для особого события
              <Arrow diagonal className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-11 hidden items-center gap-4 lg:flex border-t border-line pt-5 lg:mt-16">
            <span className="font-display text-[38px] italic leading-none">
              13
            </span>
            <p className="text-[10px] leading-relaxed text-muted">
              вкусов арт-десертов.
              <br />У каждого — свой характер.
            </p>
          </div>
        </div>
        <figure className="relative">
          <div className="relative h-[440px] overflow-hidden sm:h-[540px] lg:h-[620px]">
            <Image
              src="/images/collection.webp"
              alt="Арт-десерты Cakes Muse в форме малины, голубики, клубники и орехов"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              preload
              className="object-cover object-[50%_58%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            <a
              href="#desserts"
              aria-label="Смотреть коллекцию арт-десертов"
              className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <Arrow diagonal className="h-6 w-6" />
            </a>
          </div>
          <figcaption className="mt-3 flex justify-between text-[9px] uppercase tracking-[.15em] text-muted">
            <span>Форма удивляет. Вкус остаётся.</span>
            <span>Cakes Muse / Art desserts</span>
          </figcaption>
        </figure>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-4 border-y border-line py-5 text-[10px] uppercase tracking-[.16em] text-muted">
        <span>Муссовые торты</span>
        <span aria-hidden="true">✳</span>
        <span>Реалистичные арт-десерты</span>
        <span aria-hidden="true">✳</span>
        <span>Подарочные наборы</span>
        <span aria-hidden="true" className="hidden sm:block">
          ✳
        </span>
        <span>Созданы под ваш повод</span>
      </div>
    </section>
  );
}
