module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-less",
    "stylelint-config-prettier",
    "stylelint-config-recess-order",
    "stylelint-order",
  ],
  customSyntax: "postcss-less",
  rules: {
    "prettier/prettier": true,
  },
};
