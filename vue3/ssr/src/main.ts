import App from './App.vue';
import { createRouter } from './router';
import { createSSRApp } from 'vue';
import createStore from './store'

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  const store = createStore();
  app.use(router).use(store);

  return { app, router, store };
}
