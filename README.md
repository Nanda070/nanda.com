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

## Деплой на GitHub Pages

1. Создай репозиторий (например `nanda.com`) и запушь код в ветку `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) соберёт сайт на каждый push в `main` и по cron раз в сутки (обновление списка репо).

URL проекта: `https://nanda070.github.io/<имя-репо>/`  
`base` в Astro выставляется автоматически из `GITHUB_REPOSITORY` в CI; локально `base` = `/`.

### Кастомный домен

1. Добавь файл `public/CNAME` с одной строкой — твоим доменом (например `nanda.example`).
2. В DNS у регистратора: CNAME на `nanda070.github.io` (или A-записи GitHub Pages).
3. Settings → Pages → Custom domain → укажи домен и включи HTTPS.
4. Если сайт на корне домена, в CI `base` всё равно корректно будет `'/nanda.com/'` для project site — для user/custom domain на корне лучше переименовать репо в `Nanda070.github.io` или задать `base: '/'` в `astro.config.mjs`.

## Стек

Astro · TypeScript · Tailwind CSS v4 · GitHub Actions
