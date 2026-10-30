"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow, WhatsAppIcon, Wordmark, whatsapp } from "./ui";
const links = [
  ["Десерты", "#desserts"],
  ["О нас", "#about"],
  ["Для событий", "#events"],
  ["Как заказать", "#order"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  return (
    <header className="relative z-30 border-b border-line bg-cream">
      <div className="mx-auto flex h-23 max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10 lg:px-16">
        <a href="#" aria-label="Cakes Muse — в начало">
          <Wordmark />
        </a>
        <nav
          aria-label="Главная навигация"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs transition-colors hover:text-wine"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <span className="hidden text-[10px] uppercase tracking-[.16em] text-muted sm:block">
            Астана, Казахстан
          </span>
          <a
            href={whatsapp()}
            className="hidden items-center gap-2 text-xs sm:flex"
          >
            <WhatsAppIcon />
            Связаться
            <Arrow diagonal className="h-3 w-3" />
          </a>
          <button
            ref={menuButton}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="text-2xl">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-cream px-6 py-5 shadow-lg lg:hidden"
        >
          {links.map(([label, href]) => (
            <a
              onClick={() => setOpen(false)}
              key={href}
              href={href}
              className="border-b border-line py-4 text-sm"
            >
              {label}
            </a>
          ))}
          <a href={whatsapp()} className="py-4 text-sm">
            Написать в WhatsApp ↗
          </a>
        </nav>
      )}
    </header>
  );
}
