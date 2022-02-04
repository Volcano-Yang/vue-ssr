/**
 * 1. 引入页面组件
 */
import Home from "../pages/home.vue";
import Router from "vue-router";
import Topic from "../pages/topic.vue";
import Vue from "vue";

/**
 *  2. 定义路由
 * 每个路由应该映射一个组件。 其中"component" 可以是
 * 通过 Vue.extend() 创建的组件构造器，
 * 或者，只是一个组件配置对象。
 * 我们晚点再讨论嵌套路由。
 */

const routes = [
  { path: "/", component: Home },
  { path: "/topic", component: Topic },
];

// 注册全局组件
Vue.use(Router);

/**
 * 导出一个创建vue-router的工厂函数
 * 每次用户请求都需要创建router实例
 */
export default function createRouter() {
  return new Router({
    // 需要使用history模式，因为哈希模式的path是不变的
    mode: "history",
    routes,
  });
}
