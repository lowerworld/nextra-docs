import { $NextraMetadata, Heading } from "nextra";
import { useMDXComponents as getMDXComponents } from "nextra-theme-docs";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { FunctionComponent } from "react";

type Props = {
  params: Promise<{ mdxPath: string[] }>;
};

type MDXContentProps = {
  default: FunctionComponent<{ params: Awaited<Props["params"]> }>;
  metadata: $NextraMetadata;
  toc: Heading[];
};

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata({
  params,
}: Props): Promise<$NextraMetadata> {
  return params
    .then(({ mdxPath }) => importPage(mdxPath))
    .then(({ metadata }: MDXContentProps) => metadata);
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;

  const {
    default: MDXContent,
    metadata,
    toc,
  } = await importPage(params.mdxPath).then(
    (content: MDXContentProps) => content,
  );

  return (
    <Wrapper metadata={metadata} toc={toc}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
