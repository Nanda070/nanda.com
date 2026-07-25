export const site = {
  name: 'Nanda',
  headline: 'Разработка, боты и сервисы',
  tagline: 'Discord, веб и всё, что помогает сообществам жить.',
  about:
    'Занимаюсь Discord-ботами, сервисами и небольшими продуктами вокруг коммьюнити. Среди прочего — Cheterin Group и связанные проекты. Участник nullsec.',
  githubUser: 'Nanda070',
  avatarUrl: 'https://avatars.githubusercontent.com/u/135698347?v=4',
  facts: ['GitHub', 'Discord', 'Riot'],
  nullsec: {
    label: 'nullsec',
    logo: 'images/nullsec.png',
  },
} as const;

export type LinkItem = {
  id: string;
  label: string;
  handle: string;
  href?: string;
  copyValue?: string;
  group: 'social' | 'games';
};

export const links: LinkItem[] = [
  {
    id: 'telegram',
    label: 'Telegram',
    handle: '@nanda070',
    href: 'https://t.me/nanda070',
    group: 'social',
  },
  {
    id: 'discord-server',
    label: 'Discord',
    handle: 'discord.gg/cheterin',
    href: 'https://discord.gg/cheterin',
    group: 'social',
  },
  {
    id: 'discord-user',
    label: 'Ник Discord',
    handle: 'nandak070',
    copyValue: 'nandak070',
    group: 'social',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'Nanda070',
    href: 'https://github.com/Nanda070',
    group: 'social',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    handle: 'Nanda',
    href: 'https://open.spotify.com/user/31o4coim7tct3khouq2dc3o7mhhu',
    group: 'social',
  },
  {
    id: 'steam',
    label: 'Steam',
    handle: 'nanda070',
    href: 'https://steamcommunity.com/id/nanda070',
    group: 'games',
  },
  {
    id: 'riot',
    label: 'Riot Games',
    handle: 'Xaosletao#404',
    copyValue: 'Xaosletao#404',
    group: 'games',
  },
];

export type FeaturedProject = {
  name: string;
  description: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tags: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Cheterin',
    description:
      'Discord-бот для живых серверов: модерация, уровни, экономика, ивенты и модули под GTA5RP.',
    href: 'https://cheterin.online/',
    secondaryHref: 'https://discord.gg/cheterin',
    secondaryLabel: 'Discord',
    tags: ['Discord', 'Bot'],
  },
  {
    name: 'Yan Pro',
    description:
      'YAN.PRO GRIND — мерч и дропы: витрина, релизы и бренд на yan-pro.shop.',
    href: 'https://yan-pro.shop/',
    tags: ['Merch', 'Shop'],
  },
];

/** Manual RU descriptions for repos without a GitHub description */
export const repoOverrides: Record<string, string> = {
  PepegaGo: 'Веб/JS-проект.',
  'Vencord-FakeDeafen': 'Vencord userplugin: FakeDeafen.',
  'Vencord-FakeDeafenDetector': 'Vencord userplugin: детектор FakeDeafen.',
  ChetSupply: 'Утилита поставок для RP/Discord.',
  'RP-ARMY-BOT': 'Тестовая версия бота для РП-проектов.',
  'ELTE-IT-2026': 'Учёба / IT материалы ELTE 2026.',
  'tos-404-voice': 'Voice-related страница / утилита (архив).',
  'docs-404': 'Документация проекта 404 (архив).',
};

export const githubDisplayLimit = 12;
