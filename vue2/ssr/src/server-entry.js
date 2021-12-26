// entry-server.js

import createApp from "./createApp";

// context哪来的？
export default context => {
  return new Promise((resolve, reject) => {
  
    // 渲染vue实例
    const { app, router } = createApp();
    
    // 进入对应页面
    router.push(context.url)
    
    // 对应页面渲染完成返回
    router.onReady(() => {
        resolve(app);
    }, reject)
  });
};