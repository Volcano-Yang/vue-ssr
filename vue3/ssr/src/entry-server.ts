import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url: string) {
  const { app, router } = createApp();

  router.push(url);
  await router.isReady();

  const matchedComponents = router.currentRoute.value.matched.flatMap(record =>
    Object.values(record.components)
  )

  console.log("matchedComponents", matchedComponents);

  const template = await renderToString(app);

  return { template };
}
