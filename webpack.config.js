const path = require('path')
const { configHook } = require('comrade-builder-config')
const createOptimization = require('comrade-builder-config/webpack/create-optimization')

module.exports = (env) => {
  const config = {
    output: {
      path: path.resolve(__dirname, '../assets'),
      chunkFilename: '[name].js?ver=[contenthash]',
      clean: {
        keep(asset) {
          return (
            asset.match(/theme-?(.+)?\.(js|css)/) ||
            asset.match(/(.+)\.(jpg|png|svg|jpeg)/)
          )
        }
      }
    },
    devServer: {
      clientLogLevel: 'silent',
      contentBase: path.resolve(__dirname, '../assets'),
      compress: true,
      writeToDisk: env.SERVE === 'true',
      disableHostCheck: true,
      host: '127.0.0.1',
      port: 8080,
      hot: env.SERVE !== 'true',
      open: false,
      overlay: true,
      progress: false,
      inline: true
    },
    optimization: {}
  }
  const finalConfig = configHook({
    mode: env.NODE_ENV,
    rootPath: __dirname,
    userConfig: config,
    activePages: []
  })
  if (env.SERVE === 'true') {
    finalConfig.optimization = createOptimization('production', __dirname)
  }

  return finalConfig
}
