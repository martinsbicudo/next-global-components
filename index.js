const webpack = require('webpack')
  , getComponents = require('./getComponents')
  , { checkType, getFileComponents } = require('./getComponents/functions')

module.exports = (options = {}) => {
  let {
    components = 'components.json',
    dirname = './components'
  } = options

  // GETTING COMPONENTS
  components = checkType(components, 'object')
    ? components
    : getFileComponents(components)

  // SETTING COMPONENTS
  const { provides, alias, eslint } = getComponents({
    components,
    dirname
  })

  // WEBPACK
    , withGlobalComponents = (nextConfig = {}) => ({
      ...nextConfig,
      webpack(config, options) {
        config.plugins.push(
          new webpack.ProvidePlugin(provides)
        )

        config.resolve.alias = {
          ...config.resolve.alias,
          ...alias
        }

        if (checkType(nextConfig.webpack, 'function'))
          return nextConfig.webpack(config, options)

        return config
      }
    })

  return {
    withGlobalComponents,
    provides,
    alias,
    eslint
  }
}
