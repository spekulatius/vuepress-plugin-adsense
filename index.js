const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {} } = context
    const adClient = options.adClient || siteConfig.adClient
    const AD_CLIENT = adClient || false

    return { AD_CLIENT }
  },

  enhanceAppFiles: [
    path.resolve(__dirname, 'inject.js')
  ]
})
