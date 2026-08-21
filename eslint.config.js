import pluginVue from 'eslint-plugin-vue';
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import unocss from '@unocss/eslint-config/flat';
import pluginPlaywright from 'eslint-plugin-playwright';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/playwright-report/**',
      '**/test-results/**',
    ],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  unocss,

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
);
