import {
  ActionLink,
  Arrow,
  SectionLabel,
  WhatsAppIcon,
  Wordmark,
  whatsapp,
} from "./ui";
const faqs = [
  [
    "Можно ли заказать десерт день в день?",
    "Уточните доступные десерты и время получения у менеджера в WhatsApp. Для индивидуального оформления и заказов к событиям дату лучше обсудить заранее.",
  ],
  [
    "Можно выбрать цвет и добавить надпись?",
    "Да, оформление можно обсудить при заказе. Отправьте пожелания или референс — менеджер подскажет доступные варианты и уточнит финальную стоимость.",
  ],
  [
    "Как получить заказ?",
    "Самовывоз — по предварительной брони: Астана, улица Илияса Жансугурова, 14/1а, 3 этаж. Возможность, время и стоимость доставки уточните при оформлении.",
  ],
  [
    "Что делать, если есть пищевая аллергия?",
    "Сообщите об аллергии до заказа. В ассортименте используются молочные продукты, орехи и другие аллергены. Полный состав и возможность перекрёстного контакта нужно уточнить для конкретного десерта.",
  ],
  [
    "Как хранить и перевозить десерт?",
    "Попросите менеджера дать рекомендации для выбранного изделия: условия хранения, перевозки и время подачи могут различаться. Не оставляйте вопрос о получении и хранении до момента вручения.",
  ],
];
export function OrderSection() {
  return (
    <section
      id="order"
      className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16 lg:py-24"
    >
      <SectionLabel number="06">От выбора до праздника</SectionLabel>
      <h2 className="font-display text-[52px] leading-tight tracking-[-.025em] md:text-[64px]">
        Начнём с <span className="italic">вашего повода.</span>
      </h2>
      <div className="mb-16 mt-10 grid gap-8 border-y border-line py-8 md:grid-cols-3 md:gap-12">
        {[
          ["01", "Выберите десерт", "Найдите свой вкус и формат в коллекции."],
          [
            "02",
            "Обсудим детали",
            "Напишите дату, количество и пожелания по оформлению.",
          ],
          [
            "03",
            "Согласуем получение",
            "Менеджер уточнит стоимость и подтвердит заказ.",
          ],
        ].map(([n, title, body]) => (
          <div key={n} className="flex gap-5">
            <span className="font-display text-[36px] italic text-[#a08d76]">
              {n}
            </span>
            <div>
              <h3 className="pt-2 text-sm font-medium">{title}</h3>
              <p className="mt-3 max-w-60 text-[13px] leading-6 text-muted">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <h3 className="font-display text-[40px] leading-tight">
            Несколько
            <br />
            <span className="italic">важных деталей.</span>
          </h3>
          <p className="mt-5 max-w-60 text-sm leading-7 text-muted">
            Не нашли ответ? Напишите нам — поможем разобраться.
          </p>
          <a
            href={whatsapp()}
            className="mt-5 inline-flex items-center gap-4 text-xs text-wine"
          >
            Задать вопрос
            <Arrow diagonal className="h-4 w-4" />
          </a>
        </div>
        <div className="border-t border-line">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-b border-line">
              <summary className="flex min-h-18 list-none items-center justify-between gap-5 py-5 text-[13px] font-medium">
                <span>{q}</span>
                <span
                  aria-hidden="true"
                  className="text-xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[620px] pb-6 pr-8 text-sm leading-7 text-muted">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="bg-[#342820] text-cream">
      <div className="mx-auto max-w-[1440px] px-5 pb-7 pt-16 md:px-10 lg:px-16 lg:pt-20">
        <div className="flex flex-col justify-between gap-8 border-b border-[#665344] pb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[.18em] text-[#c5b4a2]">
              Есть повод. Найдётся десерт.
            </p>
            <h2 className="font-display text-[54px] leading-[1.02] tracking-[-.02em] md:text-[76px]">
              Что будем
              <br />
              <span className="italic text-[#d4b99a]">праздновать?</span>
            </h2>
          </div>
          <div>
            <ActionLink href={whatsapp()} light>
              Написать в WhatsApp
            </ActionLink>
            <p className="mt-4 text-[10px] text-[#c5b4a2]">
              Поможем выбрать вкус и оформление.
            </p>
          </div>
        </div>
        <div className="grid gap-9 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#" aria-label="Cakes Muse — в начало">
              <Wordmark className="text-[44px]" />
            </a>
            <p className="mt-5 text-[11px] leading-6 text-[#c5b4a2]">
              Муссовые торты и арт-десерты.
              <br />
              Астана, Казахстан.
            </p>
          </div>
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[.18em] text-[#c5b4a2]">
              Заказы и вопросы
            </p>
            <a href="tel:+77070370720" className="block text-sm">
              +7 707 037 07 20
            </a>
            <a
              href="https://www.instagram.com/cakes.muse/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-5 text-xs"
            >
              Instagram @cakes.muse
              <Arrow diagonal className="h-3 w-3" />
            </a>
            <a
              href={whatsapp()}
              className="mt-4 flex items-center gap-2 text-xs"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[.18em] text-[#c5b4a2]">
              Самовывоз по брони
            </p>
            <p className="text-sm leading-7">
              ул. Илияса Жансугурова, 14/1а
              <br />3 этаж, Астана
            </p>
            <a
              href="https://2gis.kz/astana/firm/70000001059729693"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-5 border-b border-[#81715f] pb-2 text-xs"
            >
              Построить маршрут
              <Arrow diagonal className="h-3 w-3" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-[#665344] pt-6 text-[9px] text-[#c5b4a2]">
          <span>© Cakes Muse</span>
          <span>С любовью к форме и вкусу.</span>
        </div>
      </div>
    </footer>
  );
}
