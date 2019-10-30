import Vue from 'vue';
import 'normalize.css';
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

let instance = null;
export async function bootstrap() {
  console.log(123);
}
export async function mount() {
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#xy-micro-frontend');
}
export async function unmount() {
  instance.$destroy();
  instance = null;
}
