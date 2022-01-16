import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from 'vue-router';

/**
* 1. 引入页面组件
*/
import Home from "../pages/home.vue";
import Topic from "../pages/topic.vue";

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



// // @ts-ignore
// const pages = import.meta.glob('../pages/*.vue');
// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\.\/pages\/(.*)\.vue$/)[1].toLowerCase();
//   const routePath = `/${name}`;
//   if (routePath === '/home') {
//     return {
//       path: '/',
//       name,
//       component: pages[path],
//     };
//   }
//   return {
//     path: routePath,
//     name,
//     component: pages[path],
//   };
// });


export function createRouter() {
  return _createRouter({
    // @ts-ignore
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}