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
  docsRepositoryBase: 'https://github.com/EmilianoGarciaLopez/pms-docs',
  feedback: {
    content: null,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PMS Docs" />
      <meta property="og:description" content="Documentation for PMS products, including PMC-C-CMX" />
    </>
  ),


  footer: {
    text: `© Paisley Microsystems ${currentDate.getFullYear()
      }`,
  },
}

export default config
