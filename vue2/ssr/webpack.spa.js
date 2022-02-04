// ./webpack.config.js

/** @type {import('webpack').Configuration} */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  entry: "./src/client-entry.js",

  output: {
    filename: "client-bundle.js",
    clean: true,
  },

  devtool: "source-map",

  module: {
    rules: [
      { test: /.vue$/, use: "vue-loader" },
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
    new HtmlWebpackPlugin({
      // 打包输出HTML标题
      title: "打包vue",
      // 根据此模版生成 HTML 文件
      template: path.join(__dirname, "./public/spa.template.html"),
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
