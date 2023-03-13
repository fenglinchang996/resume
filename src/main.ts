import { createPinia } from 'pinia';

import App from './App.vue';
import { routes } from './router';
import { ViteSSG } from 'vite-ssg';

import './assets/main.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
});
