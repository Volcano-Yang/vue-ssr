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