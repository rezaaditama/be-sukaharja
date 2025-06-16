import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: ['**/dist/*', '**/node_modules/*', '**/public/*'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      js,
    },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { project: ['./tscofig.json'] },
      sourceType: 'script',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
  },
  ...tseslint.configs.recommended,
]);
