const ADD_MENU = 'ADD_MENU';
const menu = {
  state: {
    // 保存菜单数据
    menuData: [],
  },
  getters: {},
  mutations: {
    // 设置菜单
    [ADD_MENU]: (state, data) => {
      state.menuData = data;
    },
  },
  actions: {},
};

export default menu;
