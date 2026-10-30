# Cakes Muse

Проект лендинга кондитерского бутика Cakes Muse в Астане.

Собрана первая адаптивная версия лендинга: каталог, карточки десертов, выбор вариантов, подарки, события, FAQ и контакты. Все фотографии получены из Instagram Cakes Muse; источники записаны в документации. Перед публикацией требуется итоговая сверка цен и условий заказа.

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
