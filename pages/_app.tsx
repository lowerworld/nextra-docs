import { AppProps } from "next/app";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "~/styles/globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
