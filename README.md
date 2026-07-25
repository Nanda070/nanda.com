# Nanda — личный сайт

Одностраничный сайт-профиль: проекты, GitHub-репозитории и ссылки. Тёмно-алая эстетика. Сборка на Astro, хостинг — **GitHub Pages**.

## Локально

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Контент

Всё редактируется в [`src/data/site.ts`](src/data/site.ts):

- about, role, tagline
- ссылки (Telegram, Discord, Spotify, Steam, Riot…)
- featured-проекты (Cheterin, Yan Pro)
- `repoOverrides` — свои описания для репо без description на GitHub

Парсер GitHub: [`src/lib/github.ts`](src/lib/github.ts) — тянет публичные репо `Nanda070` на этапе сборки.
