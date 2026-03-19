import type { OxlintConfig } from "oxlint";

export default {
  options: { typeAware: true, typeCheck: true },
  plugins: ["eslint", "typescript", "unicorn", "oxc", "react", "nextjs"],
  rules: {
    "eslint/eqeqeq": "warn",
    "typescript/consistent-type-imports": "warn",
    "typescript/no-unnecessary-condition": "warn",
    "unicorn/prefer-node-protocol": "warn",
    "react/button-has-type": "warn",
    "react/rules-of-hooks": "warn",
  },
} satisfies OxlintConfig;
