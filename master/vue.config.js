const VueRouteWebpackPlugin = require('@xiyun/vue-route-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new VueRouteWebpackPlugin()],
  },

};
