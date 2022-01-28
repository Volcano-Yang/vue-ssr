# vue2-ssr

## 注意点：
1. createVue和createVueRouter的时候需要注意使用工厂函数
   
2. 需要等router.ready的时候再返回vue字符串

3. server-entry打包成一个server-bundle.json, client-entry打包成一个client-bundle.mainfast。
   然后和ssr.template一起传给vue-ssr-render根据请求处理好，返回响应就可以。

4. 服务端数据的预拉取和客户端的使用

服务端通过自定义的组件asyncData函数提前请求数据，然后string化，注入到直出模板的window.__INITIAL_STATE__。

然后浏览器激活的时候在一个统一的minxin中通过

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

替换vuex的状态

