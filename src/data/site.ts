import type { Locale } from '../i18n/ui';

export const siteMeta = {
  name: 'Nanda',
  githubUser: 'Nanda070',
  avatarUrl: 'https://avatars.githubusercontent.com/u/135698347?v=4',
  nullsec: {
    label: 'nullsec',
    logo: 'images/nullsec.png',
  },
} as const;

type LocalizedSite = {
  headline: string;
  tagline: string;
  about: string;
  facts: string[];
};

export const siteByLocale: Record<Locale, LocalizedSite> = {
  en: {
    headline: 'Sites, bots & services',
    tagline: 'Website development, Discord bots, and tools for communities.',
    about:
      'I build websites, Discord bots, and small services around communities. Among other things — Cheterin Group and related projects. Member of nullsec.',
    facts: ['Websites', 'Discord', 'GitHub'],
  },
  ru: {
    headline: 'Сайты, боты и сервисы',
    tagline: 'Разработка сайтов, Discord-боты и сервисы для сообществ.',
    about:
      'Делаю сайты, Discord-ботов и небольшие сервисы вокруг коммьюнити. Среди прочего — Cheterin Group и связанные проекты. Участник nullsec.',
    facts: ['Сайты', 'Discord', 'GitHub'],
  },
};

export type LinkItem = {
  id: string;
  label: Record<Locale, string>;
  handle: string;
  href?: string;
  copyValue?: string;
  group: 'contact' | 'social' | 'games';
};

export const links: LinkItem[] = [
  {
    id: 'email',
    label: { en: 'Email', ru: 'Почта' },
    handle: 'adnan.huseynli1@gmail.com',
    href: 'mailto:adnan.huseynli1@gmail.com',
    group: 'contact',
  },
  {
    id: 'phone',
    label: { en: 'Phone', ru: 'Телефон' },
    handle: '+41-77-259-9608',
    href: 'tel:+41772599608',
    group: 'contact',
  },
  {
    id: 'telegram',
    label: { en: 'Telegram', ru: 'Telegram' },
    handle: '@nanda070',
    href: 'https://t.me/nanda070',
    group: 'social',
  },
  {
    id: 'discord-server',
    label: { en: 'Discord', ru: 'Discord' },
    handle: 'discord.gg/cheterin',
    href: 'https://discord.gg/cheterin',
    group: 'social',
  },
  {
    id: 'discord-user',
    label: { en: 'Discord nick', ru: 'Ник Discord' },
    handle: 'nandak070',
    copyValue: 'nandak070',
    group: 'social',
  },
  {
    id: 'github',
    label: { en: 'GitHub', ru: 'GitHub' },
    handle: 'Nanda070',
    href: 'https://github.com/Nanda070',
    group: 'social',
  },
  {
    id: 'spotify',
    label: { en: 'Spotify', ru: 'Spotify' },
    handle: 'Nanda',
    href: 'https://open.spotify.com/user/31o4coim7tct3khouq2dc3o7mhhu',
    group: 'social',
  },
  {
    id: 'steam',
    label: { en: 'Steam', ru: 'Steam' },
    handle: 'nanda070',
    href: 'https://steamcommunity.com/id/nanda070',
    group: 'games',
  },
  {
    id: 'riot',
    label: { en: 'Riot Games', ru: 'Riot Games' },
    handle: 'Xaosletao#404',
    copyValue: 'Xaosletao#404',
    group: 'games',
  },
];

export type FeaturedProject = {
  name: string;
  description: Record<Locale, string>;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tags: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Cheterin',
    description: {
      en: 'Discord bot for active servers: moderation, levels, economy, events, and GTA5RP modules.',
      ru: 'Discord-бот для живых серверов: модерация, уровни, экономика, ивенты и модули под GTA5RP.',
    },
    href: 'https://cheterin.online/',
    secondaryHref: 'https://discord.gg/cheterin',
    secondaryLabel: 'Discord',
    tags: ['Discord', 'Bot'],
  },
  {
    name: 'Yan Pro',
    description: {
      en: 'YAN.PRO GRIND — merch and drops: storefront, releases, and brand at yan-pro.shop.',
      ru: 'YAN.PRO GRIND — мерч и дропы: витрина, релизы и бренд на yan-pro.shop.',
    },
    href: 'https://yan-pro.shop/',
    tags: ['Merch', 'Shop'],
  },
];

export const repoOverrides: Record<Locale, Record<string, string>> = {
  en: {
    PepegaGo: 'Web / JS project.',
    'Vencord-FakeDeafen': 'Vencord userplugin: FakeDeafen.',
    'Vencord-FakeDeafenDetector': 'Vencord userplugin: FakeDeafen detector.',
    ChetSupply: 'Supply utility for RP / Discord.',
    'RP-ARMY-BOT': 'Test bot for RP projects.',
    'ELTE-IT-2026': 'Studies / IT materials ELTE 2026.',
    'tos-404-voice': 'Voice-related page / utility (archived).',
    'docs-404': 'Project 404 docs (archived).',
  },
  ru: {
    PepegaGo: 'Веб/JS-проект.',
    'Vencord-FakeDeafen': 'Vencord userplugin: FakeDeafen.',
    'Vencord-FakeDeafenDetector': 'Vencord userplugin: детектор FakeDeafen.',
    ChetSupply: 'Утилита поставок для RP/Discord.',
    'RP-ARMY-BOT': 'Тестовая версия бота для РП-проектов.',
    'ELTE-IT-2026': 'Учёба / IT материалы ELTE 2026.',
    'tos-404-voice': 'Voice-related страница / утилита (архив).',
    'docs-404': 'Документация проекта 404 (архив).',
  },
};

export const githubDisplayLimit = 12;

export function getSite(locale: Locale) {
  return { ...siteMeta, ...siteByLocale[locale] };
}
