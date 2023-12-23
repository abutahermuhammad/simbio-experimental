module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
  },
};
