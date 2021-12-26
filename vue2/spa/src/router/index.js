import Vue from 'vue'
import Router from 'vue-router'

/**
 * 1. 引入页面组件
 */
import Home from '../pages/home.vue'
import Topic from '../pages/topic.vue'


/**
 *  2. 定义路由
 * 每个路由应该映射一个组件。 其中"component" 可以是
 * 通过 Vue.extend() 创建的组件构造器，
 * 或者，只是一个组件配置对象。
 * 我们晚点再讨论嵌套路由。
 */

const routes = [
  { path: '/', component: Home },
  { path: '/topic', component: Topic }
]

/** 
 * 3. 创建 router 实例，然后传 `routes` 配置 
 * 你还可以传别的配置参数, 不过先这么简单着吧。
 * */ 
const router = new Router({
  routes
})

// 注册全局组件
Vue.use(Router);

export default router;