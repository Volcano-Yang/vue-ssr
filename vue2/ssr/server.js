// nodejs服务器
const express = require("express");
const fs = require("fs");
const path = require("path");

// 创建express实例
const app = express();

// 创建渲染器
const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle = require("./dist/server/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/client/vue-ssr-client-manifest.json");
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  // 宿主模板文件
  template: fs.readFileSync(
    path.join(__dirname, "./public/ssr.template.html"),
    "utf-8"
  ),
  clientManifest,
});

// 中间件处理静态文件请求
app.use("/dist", express.static("dist"));

// 路由处理交给vue
app.get("*", async (req, res) => {
  try {
    const context = {
      url: req.url,
      title: "vue2-ssr",
    };

    let html = await renderer.renderToString(context);
    console.log("请求url", req.url);

    // console.log("直出html", html);

    html = html.replace(
      "// window.__INITIAL_STATE__",
      `window.__INITIAL_STATE__ = {
      count: 1,
      replaceState: true,
    }`
    );

    // console.log("添加state后的html", html);

    res.send(html);
  } catch (error) {
    console.log("服务器内部错误", error);
    res.status(500).send("服务器内部错误");
  }
});

app.listen(3000, () => {
  console.log("渲染服务器启动成功, 监听在3000端口");
});
