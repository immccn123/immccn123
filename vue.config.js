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
          //#408882
          modifyVars: {
            'primary-color': '#408882',
            'link-color': '#408882',
            'border-radius-base': '5px',
          }
        }
      }
    }
  }
}
