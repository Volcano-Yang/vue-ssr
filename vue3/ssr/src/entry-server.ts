import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url: string) {
  const { app, router } = createApp();

  router.push(url);
  await router.isReady();

  // 拿到对应路由下的组件
  const matchedComponents = router.currentRoute.value.matched.flatMap(record =>
    Object.values(record.components)
  )
  
  console.log("router.currentRoute.value.matched", router.currentRoute.value.matched);

  console.log("matchedComponents", matchedComponents);

  // 提取其中的asyncData函数

  // 执行asyncData函数

  // 返回预拉取数据
  
  const template = await renderToString(app);

  return { template };
}
