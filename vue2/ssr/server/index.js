// nodejs服务器
const express = require("express");
const fs = require("fs");
const path = require("path");

// 创建express实例
const app = express();

// 创建渲染器
const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle = require("../dist/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/vue-ssr-client-manifest.json");
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  // 宿主模板文件
  template: fs.readFileSync(
    path.join(__dirname, "../public/ssr.template.html"),
    "utf-8"
  ),
  clientManifest,
});

// 中间件处理静态文件请求
app.use(express.static("../dist/client", { index: false }));

// 路由处理交给vue
app.get("*", async (req, res) => {
  try {
    const context = {
      url: req.url,
      title: "vue2-ssr",
    };

    const html = await renderer.renderToString(context);

    console.log(html);
    res.send(html);
  } catch (error) {
    res.status(500).send("服务器内部错误");
  }
});

app.listen(3000, () => {
  console.log("渲染服务器启动成功, 监听在3000端口");
});
