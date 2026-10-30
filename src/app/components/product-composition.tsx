import type { ProductFacts } from "./product-facts";

export function ProductComposition({
  facts,
  source,
}: {
  facts: ProductFacts;
  source: string;
}) {
  const number = (value: number) =>
    new Intl.NumberFormat("ru-RU").format(value);
  return (
    <div className="mt-8 space-y-7 border-t border-line pt-7">
      <section aria-label="Слои десерта">
        <h3 className="text-sm font-semibold">Что внутри</h3>
        <ol className="mt-3 space-y-2">
          {facts.layers.map((layer, index) => (
            <li key={layer} className="flex gap-3 text-[13px] leading-6">
              <span aria-hidden="true" className="text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{layer}</span>
            </li>
          ))}
        </ol>
      </section>
      <section aria-label="Состав десерта">
        <h3 className="text-sm font-semibold">Состав</h3>
        <p className="mt-3 text-[13px] leading-7 text-muted">
          {facts.ingredients}
        </p>
      </section>
      <section aria-label="Пищевая ценность на 100 граммов">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold">Пищевая ценность</h3>
          <span className="text-xs text-muted">на 100 г</span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-line py-4 sm:grid-cols-4">
          {[
            ["Калорийность", facts.nutrition.kcal, "ккал"],
            ["Белки", facts.nutrition.protein, "г"],
            ["Жиры", facts.nutrition.fat, "г"],
            ["Углеводы", facts.nutrition.carbs, "г"],
          ].map(([label, value, unit]) => (
            <div key={label}>
              <dt className="text-[10px] text-muted">{label}</dt>
              <dd className="mt-2 text-lg">
                {number(Number(value))}
                <span className="ml-1 text-[11px] text-muted">{unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-label="Маркировка на оригинальной карточке">
        <h3 className="text-sm font-semibold">Маркировка производителя</h3>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {facts.labels.map((label) => (
            <li key={label} className="text-xs leading-6 text-muted">
              {label}
            </li>
          ))}
        </ul>
      </section>
      <p className="text-[11px] leading-6 text-muted">
        Данные перенесены из{" "}
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-3"
        >
          карточки Cakes Muse в Instagram
        </a>
        . КБЖУ приведены как в источнике, без перерасчёта. При пищевой аллергии
        уточните состав и возможность перекрёстного контакта перед заказом.
      </p>
    </div>
  );
}
