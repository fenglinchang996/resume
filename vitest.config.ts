import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        all: true,
        exclude: [
          '*.config.{js,ts}',
          '*.d.ts',
          '.eslintrc.cjs',
          'dist/**',
          'src/types/**',
          'src/router/**',
        ],
      },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      reporters: ['verbose'],
    },
  })
);
