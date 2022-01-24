import { createApp } from './main';

const { app, router } = createApp();

console.log("entry-client.ts")

router.isReady().then(() => {
  console.log("app", app)

  app.mount('#app');
});
