/** @type {import("prettier").Options} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
