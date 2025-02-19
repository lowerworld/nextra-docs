import { $NextraMetadata, Heading } from "nextra";
import { useMDXComponents as components } from "nextra-theme-docs";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { FC } from "react";

type Props = {
  params: Promise<{ mdxPath: string[] }>;
};

type Content = {
  default: FC;
  metadata: $NextraMetadata;
  toc: Heading[];
};

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata({
  params,
}: Props): Promise<$NextraMetadata> {
  return params
    .then(({ mdxPath }) => importPage(mdxPath))
    .then(({ metadata }: Content) => metadata);
}

export default async function Page({ params }: Props) {
  const {
    default: Content,
    metadata,
    toc,
  } = await params
    .then(({ mdxPath }) => importPage(mdxPath))
    .then((content: Content) => content);

  const Wrapper = components().wrapper;

  return (
    <Wrapper metadata={metadata} toc={toc}>
      <Content />
    </Wrapper>
  );
}
