// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://fede-peitti.github.io',
  // Math support for the `reports` section (LaTeX-heavy technical reports). The
  // mdx() integration extends this markdown config by default, so `.mdx` files
  // get the plugins too. Existing posts use no `$…$`, so this is inert for them.
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [
    mdx(),
    sitemap({
      // The `reports` section is in private launch: every report is `unlisted`
      // (noindex). Keep the whole /reports/ subtree out of the sitemap so its
      // URLs are never advertised. Search is also noindex, so keep it out too.
      filter: (page) =>
        !page.includes('/reports/') && !page.includes('/papers/') && !page.includes('/logo-options/') && !page.includes('/search/'),
      serialize(item) {
        // Nudge crawl priority: homepage highest, primary sections next.
        if (item.url === 'https://fede-peitti.github.io') {
          item.priority = 1.0;
        } else if (/\/(research|publications|talks|cv|teaching|news|photos)\/$/.test(item.url)) {
          item.priority = 0.8;
        } else {
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ]
});
