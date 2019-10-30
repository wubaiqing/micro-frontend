/**
 * webStorm 路径别名提示用
 * webStorm 的 webpack 配置文件指向：alias.config.js 即可
 *
 * @author ZhaoLiang
 * @date 2019-03-27
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
};
