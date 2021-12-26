import Vue from "vue";
import App from "./app.vue";
import router from "./router";


// 创建客户端vue应用，把app.vue当成组件加进去。

const clientVueApp = new Vue({
  router,
  // 根实例简单的渲染应用程序组件。
  render: (h) => h(App),
}).$mount("#app");