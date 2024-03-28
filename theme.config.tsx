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
  footer: {
    text: `© Paisley Microsystems ${currentDate.getFullYear()
      }`,
  },
}

export default config
