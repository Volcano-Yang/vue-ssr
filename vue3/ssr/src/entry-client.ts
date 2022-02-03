import { createApp } from './main';
import { store } from './store'

const { app, router } = createApp();

router.isReady().then(() => {
  console.log("客户端 app", app);
  app.use(store).mount('#app');
});
