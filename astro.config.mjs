// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	site: 'https://abourass.github.io',
	base: '/TheModernFarm',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [
			remarkGfm
		]
	}
});
