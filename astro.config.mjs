// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://nanda070.github.io',
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
