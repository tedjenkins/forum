module.exports = {
  publicPath: '/',
  devServer: {
    port: 3000
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/globals.scss";`
      }
    }
  }
};
