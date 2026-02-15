import type { Metadata } from "next";
import { useMDXComponents } from "nextra-theme-docs";
import { generateStaticParamsFor, importPage } from "nextra/pages";

const segmentKey = "mdxPath";

type Props = {
  params: Promise<{ [segmentKey]: string[] }>;
};

function Wrapper(
  ...props: Parameters<ReturnType<typeof useMDXComponents>["wrapper"]>
) {
  return useMDXComponents().wrapper(...props);
}

export const generateStaticParams = generateStaticParamsFor(segmentKey);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return params
    .then(({ mdxPath }) => importPage(mdxPath))
    .then(({ metadata }) => metadata);
}

export default async function Page(props: Props) {
  const params = await props.params;

  const {
    default: MDXContent,
    metadata,
    sourceCode,
    toc,
  } = await importPage(params.mdxPath);

  return (
    <Wrapper metadata={metadata} sourceCode={sourceCode} toc={toc}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
