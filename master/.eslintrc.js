module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 匿名函数
    'func-names': [0],
    // 直接对属性进行操作，比如：a.b.c = 10
    'no-param-reassign': [0],
    // 方法中 return 对应
    'consistent-return': [0],

    // Ele
    'no-unused-expressions': [0],
    'no-plusplus': [0],
    'no-return-assign': [0],
    'no-undef': [0],
    'no-continue': [0],
    'linebreak-style': [0, 'error', 'windows'],
    // 逗号位置
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
