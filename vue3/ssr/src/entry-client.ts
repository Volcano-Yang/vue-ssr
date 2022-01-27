import { createApp } from './main';
import { store } from './store'

const { app, router } = createApp();

router.isReady().then(() => {

  app.use(store).mount('#app');
});
