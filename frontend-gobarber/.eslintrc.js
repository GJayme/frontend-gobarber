module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      sourceType: 'module',
    },
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extension: ['.js', '.jsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
