// ./webpack.config.js

/** @type {import('webpack').Configuration} */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");


const config = {
  // 这允许 webpack 以 Node 适用方式处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: "node",

  // 对 bundle renderer 提供 source map 支持
  devtool: "source-map",

  entry: "./src/server-entry.js",

  output: {
    path: path.resolve(__dirname, "./dist/server"),
    filename: "[name].bundle.js",
    // 此处告知 server bundle 使用 Node 风格导出模块
    libraryTarget: "commonjs2",
  },

  module: {
    rules: [
      {
        test: /.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(), 
    new VueSSRServerPlugin(),
  ],
};

module.exports = config;
