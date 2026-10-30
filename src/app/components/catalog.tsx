"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Arrow, SectionLabel, whatsapp } from "./ui";
import { ProductComposition } from "./product-composition";
import {
  categories,
  products,
  formatPrice,
  type Category,
  type Product,
} from "./products";

export function Catalog() {
  const [category, setCategory] = useState<Category>("Арт-десерты");
  const [expanded, setExpanded] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [variant, setVariant] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const list = products[category];
  const visible =
    category === "Арт-десерты" && !expanded ? list.slice(0, 6) : list;
  const price = product?.variants?.[variant]?.price ?? product?.price;
  function open(item: Product, button: HTMLButtonElement) {
    trigger.current = button;
    setProduct(item);
    setVariant(0);
    dialog.current?.showModal();
    if (dialog.current) dialog.current.scrollTop = 0;
  }
  function close() {
    dialog.current?.close();
  }
  return (
    <section
      id="desserts"
      className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-14 md:px-10 lg:px-16 lg:py-20"
    >
      <SectionLabel number="01">Коллекция вкусов</SectionLabel>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="font-display text-5xl leading-[1.05] tracking-[-.025em] md:text-[64px]">
          Найдите <span className="italic">свой вкус.</span>
        </h2>
        <p className="max-w-65 text-xs leading-7 text-muted">
          Для себя. В подарок. Просто потому,
          <br className="hidden md:block" /> что сегодня хочется особенного.
        </p>
      </div>
      <div
        aria-label="Категории десертов"
        className="mb-8 mt-9 flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-4 md:mt-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            aria-pressed={category === cat}
            onClick={() => {
              setCategory(cat);
              setExpanded(false);
            }}
            className={`relative min-h-11 text-[12px] transition-colors ${category === cat ? "font-semibold text-wine after:absolute after:-bottom-[17px] after:left-0 after:h-[2px] after:w-full after:bg-wine" : "text-muted hover:text-ink"}`}
          >
            {cat}
            {cat === "Арт-десерты" && <sup className="ml-1 text-[8px]">13</sup>}
          </button>
        ))}
      </div>
      <div
        aria-live="polite"
        className={`grid gap-x-6 gap-y-10 ${list.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
      >
        {visible.map((item, index) => (
          <article
            key={item.id}
            className={
              list.length === 1
                ? "grid items-center gap-8 md:grid-cols-2 md:gap-14"
                : ""
            }
          >
            <button
              onClick={(e) => open(item, e.currentTarget)}
              aria-label={`Подробнее: ${item.name}`}
              className="group relative block w-full overflow-hidden bg-[#e9e3db] text-left"
            >
              <div
                className={`relative ${item.sourceCard ? "aspect-[9/16]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={item.sourceCard?.image ?? `/images/${item.image}.webp`}
                  alt={
                    item.sourceCard
                      ? `Полная карточка «${item.name}» из Instagram Cakes Muse${item.facts ? ": слои, состав, пищевая ценность и маркировка" : ""}`
                      : `${item.name} — пример оформления Cakes Muse`
                  }
                  fill
                  sizes={
                    list.length === 1
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                  }
                  className={
                    item.sourceCard
                      ? "object-contain"
                      : "object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  }
                />
              </div>
              <span className="flex min-h-12 items-center justify-between gap-4 bg-[#eee8de] px-4 py-3 text-[11px] transition-colors group-hover:bg-wine group-hover:text-white">
                {item.facts
                  ? "Слои, состав и пищевая ценность"
                  : "Подробнее о десерте"}
                <Arrow diagonal className="h-4 w-4" />
              </span>
            </button>
            <div className="pt-5">
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <h3
                  className={`${list.length === 1 ? "font-display text-4xl" : "text-lg font-medium"}`}
                >
                  {item.name}
                </h3>
                <span className="shrink-0 text-[9px] text-muted">
                  {category === "Арт-десерты"
                    ? String(index + 1).padStart(2, "0")
                    : "MUSE"}
                </span>
              </div>
              <p className="max-w-[460px] text-[13px] leading-6 text-muted">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-line pt-4">
                <span className="text-[10px] text-muted">{item.weight}</span>
                <p className="text-sm font-medium">
                  {item.price ? formatPrice(item.price) : "Цена по запросу"}{" "}
                  {item.price && (
                    <span className="text-[10px] font-normal text-muted">
                      {item.unit}
                    </span>
                  )}
                </p>
              </div>
              {list.length === 1 && (
                <button
                  onClick={(e) => open(item, e.currentTarget)}
                  className="mt-7 inline-flex min-h-12 items-center gap-10 border-b border-ink py-3 text-xs"
                >
                  Выбрать и заказать
                  <Arrow />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
      {category === "Арт-десерты" && (
        <div className="mt-10 text-center">
          <button
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            className="inline-flex min-h-12 items-center gap-8 border-b border-ink px-2 py-3 text-xs"
          >
            {expanded ? "Свернуть коллекцию" : "Посмотреть все 13 вкусов"}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
        </div>
      )}
      <p className="mt-8 text-center text-[10px] leading-5 text-muted">
        Наличие, стоимость на вашу дату и детали оформления уточняйте при
        заказе.
      </p>
      <dialog
        aria-labelledby="product-title"
        ref={dialog}
        onClose={() => trigger.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-[1100px] overflow-y-auto bg-cream p-0 text-ink sm:w-[90vw]"
      >
        {product && (
          <>
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-cream px-4 py-2">
              <span className="text-xs text-muted">
                Cakes Muse · Карточка десерта
              </span>
              <button
                onClick={close}
                aria-label="Закрыть карточку"
                className="flex h-11 w-11 items-center justify-center text-2xl"
              >
                ×
              </button>
            </div>
            <div className="relative grid md:grid-cols-[.9fr_1.1fr]">
              {product.sourceCard ? (
                <figure className="bg-[#e9e3db] p-4 md:sticky md:top-15 md:self-start md:p-6">
                  <a
                    href={product.sourceCard.original}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Открыть полную карточку «${product.name}» в новом окне`}
                    className="block"
                  >
                    <Image
                      src={product.sourceCard.image}
                      alt={`Полная карточка «${product.name}»: все подписи сохранены`}
                      width={1179}
                      height={2096}
                      sizes="(min-width: 768px) 460px, 90vw"
                      className="h-auto max-h-[calc(92dvh-160px)] w-full object-contain"
                    />
                  </a>
                  <figcaption className="mt-4 text-center text-xs leading-6">
                    <a
                      href={product.sourceCard.original}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 underline underline-offset-4"
                    >
                      Открыть оригинал в полном размере
                      <Arrow diagonal className="h-3 w-3" />
                    </a>
                  </figcaption>
                </figure>
              ) : (
                <div className="relative min-h-65 md:min-h-[580px]">
                  <Image
                    src={`/images/${product.image}.webp`}
                    alt={`Десерт ${product.name}`}
                    fill
                    sizes="(min-width: 768px) 460px, 90vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 pt-10 md:p-10 md:pt-16">
                <p className="mb-4 text-[10px] uppercase tracking-[.18em] text-muted">
                  Cakes Muse · {category}
                </p>
                <h2 className="font-display text-4xl" id="product-title">
                  {product.name}
                </h2>
                <p className="mt-5 text-sm leading-7 text-muted">
                  {product.description}
                </p>
                <p className="mt-4 text-xs text-muted">{product.weight}</p>
                {product.facts && product.sourceCard && (
                  <ProductComposition
                    facts={product.facts}
                    source={product.sourceCard.source}
                  />
                )}
                {product.variants && (
                  <fieldset className="mt-7">
                    <legend className="mb-3 text-xs">Выберите вариант</legend>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v, i) => (
                        <label
                          key={v.label}
                          className={`cursor-pointer border focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-wine px-3 py-3 text-xs ${variant === i ? "border-wine bg-wine text-white" : "border-line"}`}
                        >
                          <input
                            type="radio"
                            name="variant"
                            checked={variant === i}
                            onChange={() => setVariant(i)}
                            className="sr-only"
                          />
                          {v.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}
                <p className="mt-7 text-xl">
                  {price ? formatPrice(price) : "Уточнить стоимость"}{" "}
                  {price && (
                    <span className="text-xs text-muted">{product.unit}</span>
                  )}
                </p>
                <a
                  href={whatsapp(
                    `Здравствуйте! Интересует «${product.name}»${product.variants ? `, ${product.variants[variant].label}` : ""}. Подскажите наличие на нужную дату, стоимость и условия получения.`,
                  )}
                  className="mt-6 flex min-h-13 items-center justify-between gap-3 bg-wine px-5 py-4 text-xs text-white"
                >
                  Заказать в WhatsApp
                  <Arrow />
                </a>
                <p className="mt-4 text-[10px] leading-5 text-muted">
                  Заказ подтвердит менеджер. Если у вас есть аллергия, уточните
                  полный состав и возможность перекрёстного контакта перед
                  заказом.
                </p>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
