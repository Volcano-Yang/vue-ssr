import App from './App.vue';
import { createRouter } from './router';
import { createSSRApp } from 'vue';

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
