const ADD_MENU = 'ADD_MENU';
const ADD_MIC = 'ADD_MIC';
const menu = {
  state: {
    // 保存菜单数据
    menuData: [],
    mic: '',
  },
  getters: {},
  mutations: {
    // 设置菜单
    [ADD_MENU]: (state, data) => {
      state.menuData = data;
    },
    [ADD_MIC]: (state, data) => {
      state.mic = data;
    },
  },
  actions: {},
};

export default menu;
