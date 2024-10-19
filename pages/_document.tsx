import { Head, Html, Main, NextScript } from "next/document";
import { inter, noto_sans_jp } from "./_app";

export default function Document() {
  return (
    <Html>
      <Head />

      <body
        className={[inter.variable, noto_sans_jp.variable, "font-sans"].join(
          " ",
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
