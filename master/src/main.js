import Vue from 'vue';
import 'normalize.css';

import { registerMicroApps, start } from 'qiankun';

import '@xiyun/element-ui/lib/index.css';
import '../public/font.css';
import '../public/main.css';
import './plugins/element';
// eslint-disable-next-line
import XyUI from '@xiyun/element-ui';
import router from './router';
import store from './store';
import { post, get } from './utils/http';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(XyUI);

// 设置 http 请求方法
Vue.prototype.$post = post;
Vue.prototype.$get = get;

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render(h) {
        return h(App);
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

render({ loading: true });

function genActiveRule(routerPrefix) {
  console.log(routerPrefix);
  return location => location.hash.startsWith(`#${routerPrefix}`);
}

registerMicroApps(
  [
    {
      name: 'slave',
      entry: 'http://localhost:8081/',
      render,
      activeRule: genActiveRule('/slave'),
    },
  ],

);

start();
