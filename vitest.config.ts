import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
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
          '*.{test,spec}.ts',
          '.eslintrc.cjs',
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
