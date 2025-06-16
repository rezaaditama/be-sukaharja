import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '**/dist/*',
      '**/node_modules/*',
      '**/public/*',
      'eslint.config.mjs',
      '**/tsconfig.json',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      js,
    },
    extends: ['js/recommended', ...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { project: ['./tsconfig.json'] },
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
]);
