module.exports = {
  'POST /api/menus': {
    code: 200,
    message: 'success',
    data: [
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
    ],
  },
  'POST /api/user-info': {
    code: 200,
    message: 'success',
    data: {
      userName: '禧云用户',
    },
  },
  'POST /api/list': {
    code: 200,
    message: 'success',
    data: [
      {
        id: '1',
        code: '98273492341',
        date: '2000-01-01',
        status: '有效',
      },
      {
        id: '2',
        code: '98273492342',
        date: '2000-01-01',
        status: '有效',
      },
      {
        id: '3',
        code: '98273492343',
        date: '2000-01-01',
        status: '有效',
      },
    ],
  },
};
