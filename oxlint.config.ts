import type { OxlintConfig } from "oxlint";

export default {
  options: { typeAware: true, typeCheck: true },
  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "react",
    "nextjs",
  ],
  rules: {
    "eslint/eqeqeq": "warn",
    "eslint/object-shorthand": "warn",
    "eslint/sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "typescript/consistent-indexed-object-style": "warn",
    "typescript/consistent-type-imports": "warn",
    "typescript/no-unnecessary-condition": "warn",
    "unicorn/prefer-node-protocol": "warn",
    "import/consistent-type-specifier-style": "warn",
    "react/button-has-type": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/rules-of-hooks": "warn",
  },
} satisfies OxlintConfig;
