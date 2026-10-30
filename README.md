# Cakes Muse

Проект лендинга кондитерского бутика Cakes Muse в Астане.

Сейчас подготовлены исследование, структура страницы и визуальная концепция. Приложение пока содержит стартовую страницу Next.js.

## Документация

Все исследования, рекомендации и материалы для ИИ собраны в [папке docs](docs/README.md).

- [Ассортимент и цены](docs/01-business-research.md)
- [Стратегия лендинга](docs/02-landing-strategy.md)
- [Визуальное направление](docs/03-art-direction.md)
- [Структура страницы](docs/04-page-structure.md)
- [Контент и фотографии](docs/05-content-and-assets.md)
- [Задание для ИИ](docs/06-ai-handoff.md)
- [Архитектура React и рекомендации по вёрстке Tailwind](docs/07-layout-guidelines.md)

Перед изменениями также прочитайте [AGENTS.md](AGENTS.md).

## Локальный запуск

Менеджер пакетов — Bun. Версия указана в `package.json`.

```bash
bun install
bun run dev
```

Откройте [localhost:3000](http://localhost:3000). Главная страница — `src/app/page.tsx`.

## Проверки и сборка

```bash
bun run lint
bun run build
```

Запуск production-сборки после успешной сборки:

```bash
bun run start
```
