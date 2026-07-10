// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 本番ドメインが決まったらここを差し替えてください（canonical / OGP の絶対URLに使います）
  site: 'https://rider-house-tora.pages.dev',
  image: {
    responsiveStyles: false,
  },
});
