import { createApp } from './main';
import { store } from './store'

const { app, router } = createApp();

router.isReady().then(() => {
  console.log("客户端 app", app);
  // @ts-ignore
  console.log("window.__ASYNC_DATA__", window.__ASYNC_DATA__);
  app.use(store).mount('#app');
});
