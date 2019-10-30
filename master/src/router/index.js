import Vue from 'vue';
import VueRouter from 'vue-router';
import GlobalMixin from '@/utils/global-mixin';

import layout from '../views/layout/layout.vue';
import login from '../views/login/login.vue';

import children from './children';

Vue.use(VueRouter);

// 路由配置
const routes = [
  {
    path: '*',
    component: login,
  },
  {
    name: 'login',
    path: '/login',
    component: login,
  },
  // 常规路由
  {
    path: '/',
    component: layout,
    children,
  },
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 如果项目是简单 layout 时，那么需要向父页面发送 postMessage 来调整子页面 iframe 高度。
  if (process.env.VUE_APP_MODE === 'simple') {
    const components = router.getMatchedComponents(to);
    if (components.length === 1) {
      if (!components[0].mixins) {
        components[0].mixins = [];
      }
      components[0].mixins.push(GlobalMixin);
    } else {
      if (!components[components.length - 1].mixins) {
        components[components.length - 1].mixins = [];
      }
      components[components.length - 1].mixins.push(GlobalMixin);
    }
  }
  next();
});

export default router;
