import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./components/logo";

let currentDate = new Date();

const config: DocsThemeConfig = {
  logo: <Logo />,
  // project: {
  //   link: 'https://paisleymicrosystems.com',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase:
    "https://github.com/EmilianoGarciaLopez/pms-docs/blob/main/",
  feedback: {
    content: null,
  },
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:title" content="PMS Docs" />
        <meta property="og:image" content="/og-image.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:title"
          content={frontMatter.title || "Paisley Microsystems"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Documentation for Paisley Microsystems products, including PMC-C-CMX"
          }
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - PM",
      };
    }
  },
  banner: {
    key: "PMC-C-CMX Release",
    text: (
      <Link href="https://paisleymicro.com/">
        🎉 Get the <b>world's most advanced CM4/CM5 carrier board</b> for just
        $149.99 →
      </Link>
    ),
  },
  darkMode: false,
  footer: {
    text: `© Paisley Microsystems ${currentDate.getFullYear()}`,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
