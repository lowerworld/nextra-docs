/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
  ],
  parserOptions: {
    project: true,
  },
  rules: {
    eqeqeq: "warn",
    "no-warning-comments": "warn",
    "object-shorthand": "warn",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@next/next/no-img-element": "off",
  },
};
