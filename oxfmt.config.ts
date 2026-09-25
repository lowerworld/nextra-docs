import type { OxfmtConfig } from "oxfmt";

export default {
  printWidth: 80,
  sortImports: {
    newlinesBetween: false,
    sortSideEffects: true,
  },
  sortTailwindcss: {
    stylesheet: "app/globals.css",
    functions: ["clsx"],
  },
  overrides: [
    {
      files: ["pnpm-workspace.yaml"],
      options: { singleQuote: true },
    },
  ],
} satisfies OxfmtConfig;
