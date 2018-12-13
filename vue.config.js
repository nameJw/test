module.export = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://115.182.90.200:3990',
        ws: true,
        changeOrigin: true
      }
    }
  }
}