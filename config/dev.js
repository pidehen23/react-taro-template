module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {},
  plugins: [
    ['@tarojs/plugin-mock', {
      host: '127.0.0.1',
      port: 4321
    }]
  ]
}
