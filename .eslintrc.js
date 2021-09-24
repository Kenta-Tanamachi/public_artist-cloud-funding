module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": 0,
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": 0,
    "no-unused-vars": 1,
    "object-shorthand": 0,
    "no-unused-expressions": "warn",
    "max-len": 0,
  }
}
