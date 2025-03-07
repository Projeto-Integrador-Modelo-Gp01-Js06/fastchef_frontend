module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js', 'tailwind.config.js'], // Ignora tailwind.config.js e vite.config.js
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Certifique-se de que esse tsconfig está correto
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['vite.config.js', 'tailwind.config.js'], // Especifica arquivos que não devem ser analisados como TypeScript
      parser: 'espree',  // Usando o parser padrão para arquivos JS
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Desabilita a regra para require no vite.config.js e tailwind.config.js
      },
    },
  ],
};
