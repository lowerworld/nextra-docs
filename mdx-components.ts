import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { MDXComponents } from "nextra/mdx-components";

export function useMDXComponents(components?: Readonly<MDXComponents>) {
  return {
    ...getDocsMDXComponents(),
    ...components,
  };
}
