import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

export default {
  head: function Head() {
    const config = useConfig();

    return (
      <>
        <title>{`${config.title} - Nextra`}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </>
    );
  },
} satisfies DocsThemeConfig;
