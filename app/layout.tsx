import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "Nextra",
    template: "%s - Nextra",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      className={clsx(inter.variable, noto_sans_jp.variable)}
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />

      <body className="font-sans">
        <Layout
          copyPageButton={false}
          footer={<Footer />}
          navbar={
            <Navbar
              logo={
                <>
                  <span className="font-extrabold">Nextra</span>

                  <span className="ms-2 font-normal text-gray-600 max-md:hidden">
                    The Next Docs Builder
                  </span>
                </>
              }
            />
          }
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
