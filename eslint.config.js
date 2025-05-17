import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      compat.config({ extends: ["next/core-web-vitals"] }),
    ],
    rules: {
      eqeqeq: "warn",
      "no-warning-comments": "warn",
      "object-shorthand": "warn",
      "import/no-anonymous-default-export": "off",
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
    },
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { extends: [prettier] },
);
