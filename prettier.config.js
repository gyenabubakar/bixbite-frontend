module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  useTabs: false,
  tailwindConfig: './kit/tailwind.config.js',
  plugins: [import('prettier-plugin-svelte'), import('prettier-plugin-tailwindcss')],
  vueIndentScriptAndStyle: true,
  bracketSpacing: true,
};
