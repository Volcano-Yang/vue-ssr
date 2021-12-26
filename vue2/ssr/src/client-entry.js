import createApp from "./createApp";

const { app, router } = createApp();

// 挂载、激活app
router.onReady(() => {
  app.$mount("#app");
});
