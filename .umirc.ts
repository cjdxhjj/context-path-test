import { defineConfig } from "umi"

export default defineConfig({
  styles: ['/css/index.css'],
  base: '/cas/',
  hash: true,
  publicPath: '/cas/script/',
  npmClient: 'pnpm'
});
