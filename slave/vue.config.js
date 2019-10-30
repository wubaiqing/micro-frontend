const VueRouteWebpackPlugin = require('@xiyun/vue-route-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    const packageName = "xy-slave";
    config.output.set('library', `${packageName}-[name]`)
    config.output.set('libraryTarget', 'umd')
    config.output.set('jsonpFunction', `webpackJsonp_${packageName}`)
  },
  configureWebpack: {
    plugins: [new VueRouteWebpackPlugin()],
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
