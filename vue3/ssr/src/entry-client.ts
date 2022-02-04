import { createApp } from './main';

const { app, router, store } = createApp();

// @ts-ignore
if (window.__ASYNC_DATA__) {
  // @ts-ignore
  store.replaceState(window.__ASYNC_DATA__);
  console.log("store.replaceState(window.__ASYNC_DATA__)", store);
}

router.isReady().then(() => {
  console.log("客户端 app", app);
  // @ts-ignore
  console.log("window.__ASYNC_DATA__", window.__ASYNC_DATA__);
  app.mount('#app');
});
