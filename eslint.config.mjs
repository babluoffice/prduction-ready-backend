// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files:["**/*.ts"],
    extends:[
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked
    ],
    rules:{
     "no-console": "warn",
     "indent": ["error", 2],
     "no-unused-vars": ["warn"],
     "semi": ["error", "always"],
     quotes: ["error", "single",{allowTemplateLiterals: true}],
    }
  }
);