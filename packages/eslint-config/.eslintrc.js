module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9
  },
  env: {
    es6: true
  },
  rules: {
    "no-undef": "error",
    "no-unused-vars": "error",
    quotes: ["error", "double"],
    "prettier/prettier": "error"
  }
};
