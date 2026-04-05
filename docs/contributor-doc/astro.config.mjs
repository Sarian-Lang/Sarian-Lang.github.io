// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://Sarian-Lang.github.io',
  base: '/',

  integrations: [
    starlight({
      title: 'Sarian Docs',
      logo: {
        light: './src/assets/SarianLogo.webp',
        dark: './src/assets/SarianLogo.webp',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Contributing Guide', slug: 'guides/contributingguide' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});