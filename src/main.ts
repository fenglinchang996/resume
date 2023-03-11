// import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { routes } from './router';
import { ViteSSG } from 'vite-ssg';

import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useThemeAppearanceStore } from './stores/themeAppearance';
import {
  getPrefersColorScheme,
  getUserThemeAppearance,
} from './utils/themeUtils';
import { ThemeAppearance } from './constant/theme';

export const createApp = ViteSSG(App, { routes }, ({ app, isClient }) => {
  const pinia = createPinia();
  app.use(pinia);

  if (isClient) {
    const themeAppearanceStore = useThemeAppearanceStore();
    themeAppearanceStore.themeAppearance =
      getUserThemeAppearance() ||
      getPrefersColorScheme() ||
      ThemeAppearance.Light;
  }
});
