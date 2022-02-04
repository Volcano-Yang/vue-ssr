module.exports = {
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 CommonJS
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    sourceType: "module",
  },
  overrides: [
    // 处理 vue 文件
    {
      files: ["**/*.vue"], // 只处理 vue 文件
      extends: ["plugin:vue/vue3-recommended"], // 使用 vue3 的推荐规则
    },
  ],
};
