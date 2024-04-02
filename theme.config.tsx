import { DocsThemeConfig } from 'nextra-theme-docs'

import { Logo } from './components/logo'

let currentDate = new Date()



const config: DocsThemeConfig = {
  logo: <Logo />,
  // project: {
  //   link: 'https://paisleymicrosystems.com',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/EmilianoGarciaLopez/pms-docs/blob/main/',
  feedback: {
    content: null,
  },
  head: (
    <>
      <meta property="og:title" content="PMS Docs" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:description" content="Documentation for Paisley Microsystems products, including PMC-C-CMX" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },

  footer: {
    text: `© Paisley Microsystems ${currentDate.getFullYear()
      }`,
  },
}

export default config
