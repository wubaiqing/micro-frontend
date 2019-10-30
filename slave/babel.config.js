const path = require('path');

module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
        },
      },
    ],
  ],
};
