import App from "./App.vue";
// 创建vue实例
import Vue from "vue";
import createRouter from "./router/createRouter";
import store from "./store";

export default function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router, store };
}
