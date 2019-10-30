// 菜单配置
export default [
  {
    index: '/index',
    icon: 'xy-v2-sy',
    name: '首页',
    children: [],
  },
  {
    index: '/statistic',
    icon: 'xy-v2-sjtj',
    name: '其他菜单',
    children: [
      {
        index: '/statistic/department-stats',
        name: '页面1',
        children: [],
      },
      {
        index: '/statistic/shop-stats',
        name: '页面2',
        children: [],
      },
    ],
  },
];
