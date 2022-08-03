import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
    }),
    paths: {
      base: dev ? '' : '',
    },
    prerender: {
      default: true,
    },
    alias: {
      $constants: path.resolve('./src/constants'),
      $components: path.resolve('./src/components'),
      $utils: path.resolve('./src/utils'),
      $types: path.resolve('./src/types'),
    },
  },
};

export default config;
