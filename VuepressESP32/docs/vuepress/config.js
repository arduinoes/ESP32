const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://vuepress.vuejs.org/guide/deploy.html#github-pages
   */
  base: '/ESP32/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ESP32',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Nivel principiantes',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // 
      // 
      
      { text: 'Instalación y configuración', link: '/install/' },
      { text: 'WiFi', link: '/wifi/' },
    //  { text: 'Props', link: '/props/' },
    //  { text: 'Emit', link: '/emit/' },
      { text: 'Canal Youtube', link: 'https://youtu.be/FAtC9YKy1Rk' }
    ],
    sidebar: 'auto'
  },
  plugins: [['vuepress-plugin-code-copy', true]]
}
