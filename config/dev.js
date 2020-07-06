const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('analyzer').use(new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: 8000
      }), [])
    }
  },
  h5: {},
  plugins: [
    ['@tarojs/plugin-mock', {
      host: '127.0.0.1',
      port: 1234
    }]
  ]
}
