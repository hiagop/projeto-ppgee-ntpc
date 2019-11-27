module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    'plugin:vue/essential',
    '@vue/prettier'
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "quotes": ["error", "double"],

    // disable dangling commas
    "comma-dangle": ["error", "never"],

    // "object-curly-newline": ["error", {
    //   "ObjectExpression": { "multiline": true, "minProperties": 3 },
    //   "ObjectPattern": { "multiline": true, "minProperties": 3 },
    //   "ImportDeclaration": { "multiline": true, "minProperties": 3 },
    //   "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    // }],

    "arrow-spacing": ["error", { "before": true, "after": true }]
  }
}