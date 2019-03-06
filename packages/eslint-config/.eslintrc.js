module.exports = {
  extends: ["plugin:prettier/recommended", "eslint:recommended"],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9
  },
  env: {
    es6: true
  },
  rules: {
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    quotes: ["error", "double"],
    "no-console": "warn",
    "prettier/prettier": "error"
  }
};
