import Image from "next/image";
import { ActionLink, Arrow, SectionLabel, whatsapp } from "./ui";

export function InsideSection() {
  return (
    <section className="my-10 overflow-hidden bg-[#342820] text-cream md:my-16">
      <div className="mx-auto grid max-w-[1440px] items-center lg:grid-cols-2">
        <div className="px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          <SectionLabel number="02" light>
            За пределами формы
          </SectionLabel>
          <h2 className="font-display text-[55px] leading-[1.02] tracking-[-.025em] md:text-[76px]">
            Самое интересное —<br />
            <span className="italic text-[#d4b99a]">внутри.</span>
          </h2>
          <p className="mt-7 max-w-80 text-sm leading-7 text-[#c5b4a2]">
            Шоколадная оболочка, нежный крем и яркая фруктовая начинка. В каждом
            разрезе — своё сочетание вкусов и текстур.
          </p>
          <ol className="mt-10 max-w-85 divide-y divide-[#665344]">
            {[
              ["01", "Шоколадный корпус"],
              ["02", "Манговый крем-ганаш"],
              ["03", "Начинка из манго"],
            ].map(([n, t]) => (
              <li key={n} className="flex items-center gap-5 py-4 text-xs">
                <span className="font-display text-lg italic text-[#bfa281]">
                  {n}
                </span>
                {t}
              </li>
            ))}
          </ol>
          <a
            href="#desserts"
            className="mt-9 inline-flex items-center gap-8 border-b border-[#a38b70] pb-3 text-xs"
          >
            Открыть коллекцию
            <Arrow className="h-4 w-4" />
          </a>
        </div>
        <a
          href="/images/cards/mango.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#e9e3db] p-5 md:p-8"
        >
          <Image
            src="/images/cards/mango.webp"
            alt="Полная карточка Манго Cakes Muse: слои, состав, пищевая ценность и маркировка"
            width={1179}
            height={2096}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="mx-auto h-auto max-h-[800px] w-full object-contain"
          />
          <span className="mt-4 flex items-center justify-center gap-3 text-xs text-ink">
            Открыть полную карточку <Arrow diagonal className="h-3 w-3" />
          </span>
        </a>
      </div>
    </section>
  );
}

export function GiftSection() {
  return (
    <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-[1fr_.85fr] lg:gap-24 lg:px-16 lg:py-24">
      <div className="relative">
        <div className="relative aspect-[4/4.5] max-h-[620px] overflow-hidden">
          <Image
            src="/images/mini-box.webp"
            alt="Открытый мини-бокс Cakes Muse с десятью фруктовыми арт-десертами"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <span className="absolute -bottom-6 right-4 bg-cream px-6 py-4 font-display text-3xl italic md:right-8">
          Маленький знак внимания.
        </span>
      </div>
      <div className="pt-6">
        <SectionLabel number="03">Дарить — тоже удовольствие</SectionLabel>
        <h2 className="font-display text-[52px] leading-[1.04] tracking-[-.025em] md:text-[64px]">
          Повод ваш.
          <br />
          <span className="italic">Детали — вместе.</span>
        </h2>
        <p className="mt-7 max-w-[350px] text-sm leading-7 text-muted">
          Коробка с мини-десертами, бенто с личной надписью или набор любимых
          вкусов. Подберём формат и обсудим оформление для того, кому вы хотите
          сделать приятно.
        </p>
        <div className="my-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-line py-5 text-[10px] text-muted">
          <span>Индивидуальная надпись</span>
          <span>Выбор формы</span>
          <span>Подарочные наборы</span>
        </div>
        <ActionLink
          href={whatsapp(
            "Здравствуйте! Хочу выбрать десерт в подарок и обсудить оформление.",
          )}
        >
          Обсудить подарок
        </ActionLink>
      </div>
    </section>
  );
}

export function EventsSection() {
  return (
    <section
      id="events"
      className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16 lg:py-24"
    >
      <SectionLabel number="04">Больше, чем десерт</SectionLabel>
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="font-display text-[52px] leading-[1.05] tracking-[-.025em] md:text-[64px]">
          Часть вашего
          <br className="md:hidden" /> <span className="italic">события.</span>
        </h2>
        <p className="max-w-70 text-sm leading-7 text-muted">
          От камерного праздника
          <br />
          до подарков для целой команды.
        </p>
      </div>
      <div className="grid gap-7 md:grid-cols-[1.15fr_1fr]">
        <article>
          <div className="relative aspect-[5/4] overflow-hidden bg-[#e6dfd4]">
            <Image
              src="/images/wedding.webp"
              alt="Многоярусный составной торт Cakes Muse с белыми муссовыми десертами и декором"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          <div className="mt-6 flex items-start justify-between gap-5">
            <div>
              <h3 className="font-display text-[32px]">Свадьбы и праздники</h3>
              <p className="mt-2 max-w-90 text-[13px] leading-6 text-muted">
                Составные торты, разные вкусы и оформление под стиль вашего
                события.
              </p>
            </div>
            <a
              href={whatsapp(
                "Здравствуйте! Хочу обсудить составной торт для события: дату, число гостей и оформление.",
              )}
              aria-label="Обсудить торт для свадьбы или праздника"
              className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:bg-wine hover:text-white"
            >
              <Arrow diagonal />
            </a>
          </div>
          <p className="mt-4 text-[10px] text-muted">Индивидуальный расчёт</p>
        </article>
        <article className="md:pt-20">
          <div className="relative aspect-[5/4] overflow-hidden bg-[#e6dfd4]">
            <Image
              src="/images/event.webp"
              alt="Большие составные торты Cakes Muse в синих, белых и бордовых оттенках"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-[center_55%]"
            />
          </div>
          <div className="mt-6 flex items-start justify-between gap-5">
            <div>
              <h3 className="font-display text-[32px]">Для вашей компании</h3>
              <p className="mt-2 max-w-90 text-[13px] leading-6 text-muted">
                Подарочные боксы и муссовые десерты с логотипом для клиентов,
                коллег и партнёров.
              </p>
            </div>
            <a
              href={whatsapp(
                "Здравствуйте! Интересуют корпоративные подарки. Хочу обсудить тираж, дату и оформление с логотипом.",
              )}
              aria-label="Обсудить корпоративный заказ"
              className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:bg-wine hover:text-white"
            >
              <Arrow diagonal />
            </a>
          </div>
          <p className="mt-4 text-[10px] text-muted">
            Оформление и тираж по вашему запросу
          </p>
        </article>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="border-y border-line bg-[#eee8de]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-10 lg:grid-cols-[.6fr_1.2fr_.6fr] lg:gap-16 lg:px-16 lg:py-20">
        <div>
          <SectionLabel number="05">О Cakes Muse</SectionLabel>
          <span className="font-display text-6xl italic text-wine">muse.</span>
          <p className="mt-3 text-[9px] uppercase tracking-[.18em] text-muted">
            Вдохновение в деталях
          </p>
        </div>
        <div>
          <h2 className="font-display text-[40px] leading-[1.1] md:text-[48px]">
            Нам нравится удивлять.
            <br />
            <span className="italic">И вкусом тоже.</span>
          </h2>
          <p className="mt-6 max-w-[530px] text-sm leading-7 text-muted">
            Cakes Muse — кондитерский бутик в Астане. Мы работаем с муссовыми
            тортами и корпусными десертами: соединяем разные слои, текстуры и
            формы, чтобы вы могли выбрать что-то своё.
          </p>
          <p className="mt-4 max-w-[530px] text-sm leading-7 text-muted">
            Наши работы можно рассмотреть в Instagram — от небольших подарков до
            составных тортов для больших событий.
          </p>
          <a
            href="https://www.instagram.com/cakes.muse/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-7 border-b border-ink pb-2 text-xs"
          >
            Заглянуть в @cakes.muse
            <Arrow diagonal className="h-4 w-4" />
          </a>
        </div>
        <div className="relative hidden min-h-60 lg:block">
          <Image
            src="/images/collection.webp"
            alt="Корпусные десерты и коробки Cakes Muse"
            fill
            sizes="240px"
            className="object-cover object-[left_center]"
          />
        </div>
      </div>
    </section>
  );
}
