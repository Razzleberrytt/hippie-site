import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://www.thehippiescientist.net',
  base: '/',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()]
});