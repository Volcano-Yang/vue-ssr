// ./webpack.config.js

/** @type {import('webpack').Configuration} */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const webpack = require("webpack");

const config = {
  entry: "./src/client-entry.js",

  output: {
    //要指向express中的静态服务器目录
    publicPath: '/dist/client',
    path: path.resolve(__dirname, "./dist/client"),
    filename: "client-bundle.js",
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

  // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
  // 以便可以在之后正确注入异步 chunk。
  // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
  // webpack4中已经没有webpack.optimize.CommonsChunkPlugin，需要这样配置。
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },

  plugins: [
    new VueLoaderPlugin(),
    new VueSSRClientPlugin(),
  ],
};

module.exports = config;
