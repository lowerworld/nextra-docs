import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

export default withNextra({
  images: {
    unoptimized: true,
  },
  output: "export",
});
