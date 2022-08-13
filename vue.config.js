module.exports = {
  devServer: {
    allowedHosts: [
      'gitpod.io',
      '.gitpod.io'
    ],
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  }
}
