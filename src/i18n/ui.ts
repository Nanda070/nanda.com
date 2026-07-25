export type Locale = 'en' | 'ru';

export const locales: Locale[] = ['en', 'ru'];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    navAria: 'Main navigation',
    navAbout: 'About',
    navProjects: 'Projects',
    navLinks: 'Contact',
    projectsCta: 'Projects',
    contactCta: 'Contact',
    aboutEyebrow: 'About',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Selected work',
    projectsLead: 'Main products — separate from raw repositories.',
    open: 'Open',
    githubEyebrow: 'GitHub',
    githubTitle: 'Repositories',
    githubLead: 'Public repos — refreshed when the site is built.',
    githubAll: 'All on GitHub',
    githubEmpty: 'Could not load repositories.',
    githubArchived: 'archived',
    githubShown: 'Showing {shown} of {total}.',
    linksEyebrow: 'Contact',
    linksTitle: 'Find me',
    linksLead: 'Email, phone, and profiles. Handles without a link copy on click.',
    groupContact: 'Direct',
    groupSocial: 'Social / community',
    groupGames: 'Games',
    copy: 'copy',
    copied: 'copied',
    langSwitchAria: 'Language',
  },
  ru: {
    navAria: 'Основная навигация',
    navAbout: 'Обо мне',
    navProjects: 'Проекты',
    navLinks: 'Связь',
    projectsCta: 'Проекты',
    contactCta: 'Связь',
    aboutEyebrow: 'Обо мне',
    projectsEyebrow: 'Проекты',
    projectsTitle: 'Что сделано',
    projectsLead: 'Основные продукты — отдельно от сырых репозиториев.',
    open: 'Открыть',
    githubEyebrow: 'GitHub',
    githubTitle: 'Репозитории',
    githubLead: 'Публичные репо — подтягиваются при сборке сайта.',
    githubAll: 'Все на GitHub',
    githubEmpty: 'Не удалось загрузить репозитории.',
    githubArchived: 'архив',
    githubShown: 'Показано {shown} из {total}.',
    linksEyebrow: 'Связь',
    linksTitle: 'Где найти',
    linksLead: 'Почта, телефон и профили. Ник без ссылки копируется.',
    groupContact: 'Контакты',
    groupSocial: 'Соцсети / коммьюнити',
    groupGames: 'Игры',
    copy: 'copy',
    copied: 'скопировано',
    langSwitchAria: 'Язык',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UiKey, vars?: Record<string, string | number>) {
  let text: string = ui[locale][key];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}

export function localePath(locale: Locale, path = '') {
  const clean = path.replace(/^\//, '');
  if (locale === defaultLocale) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

/** Absolute site path including Astro base */
export function withBase(base: string, locale: Locale, hash = '') {
  const root = base.endsWith('/') ? base : `${base}/`;
  const prefix = locale === defaultLocale ? '' : `${locale}/`;
  return `${root}${prefix}${hash}`;
}
