import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        exclude: [
          '*.config.{js,ts}',
          '*.d.ts',
          '*.{test,spec}.ts',
          'dist/**',
          'src/types/**',
          'src/router/**',
        ],
      },
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      reporters: ['verbose'],
    },
  }),
);
