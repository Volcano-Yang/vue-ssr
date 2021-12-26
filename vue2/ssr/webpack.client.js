// ./webpack.config.js

/** @type {import('webpack').Configuration} */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const config = {
  entry: "./src/client-entry.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "client-bundle.js",
  },

  devtool: 'source-map',

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
    new VueLoaderPlugin(), 
    new VueSSRClientPlugin()
  ]
};

module.exports = config;
