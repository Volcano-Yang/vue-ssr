1. 最好认真学习一下vite，因为其中的一些内置api和了解原理，可以让你的代码更优雅和帮助你解决bug。

2. 最好学习一下浏览器支持的原生module。

3. 打包时遇到类型报错

``` bash

> vue-tsc --noEmit && vite build --outDir dist/server --ssr src/entry-server.js 

node_modules/@vue/server-renderer/dist/server-renderer.d.ts:1:23 - error TS2688: Cannot find type definition file for 'node'.

1 /// <reference types="node" />
                        ~~~~

node_modules/@vue/server-renderer/dist/server-renderer.d.ts:6:26 - error TS2307: Cannot find module 'stream' or its corresponding type declarations.

6 import { Readable } from 'stream';
                           ~~~~~~~~

node_modules/@vue/server-renderer/dist/server-renderer.d.ts:10:26 - error TS2307: Cannot find module 'stream' or its corresponding type declarations.

10 import { Writable } from 'stream';
                            ~~~~~~~~

src/router/index.ts:11:16 - error TS2531: Object is possibly 'null'.

11   const name = path.match(/\.\.\/pages\/(.*)\.vue$/)[1].toLowerCase();
```

4. 使用了import.meta.glob打包时遇到报错

```bash

> vue-tsc --noEmit && vite build --outDir dist/client

src/router/index.ts:31:16 - error TS2531: Object is possibly 'null'.

31   const name = path.match(/\.\.\/pages\/(.*)\.vue$/)[1].toLowerCase();

```

5. 返回的直出html没有样式

先你需要改造render代码，让他生成环境下，用client打包出来的index.html和manifest.json

然后你需要改造你的server应用，当访问的是静态资源的时候，不能返回html生成后的直出模板，而是应该返回真正的静态资源。