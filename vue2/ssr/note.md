# vue2-ssr

## 注意点：
1. createVue和createVueRouter的时候需要注意使用工厂函数
   
2. 需要等router.ready的时候再返回vue字符串

3. server-entry打包成一个server-bundle.json, client-entry打包成一个client-bundle.mainfast。然后传给vue-ssr-render根据请求处理好，返回响应就可以。

