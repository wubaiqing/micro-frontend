import { http, removeToken } from '@xiyun/utils';
import { Message } from 'element-ui';
import Router from '@/router/index';

const apiUrl = process.env.VUE_APP_API;

http.config({
  baseURL: apiUrl,
  // 如果要使用 qs.stringify 格式化 post 参数，请设为 true
  isUseQs: false,
});

// 处理业务错误
http.bizErrorHandler(res => {
  // 示例
  const { code, msg } = res;
  switch (code) {
    // 成功
    case 200:
      return res;
    case 401:
      Message.error('登录过期，请重新登录');
      removeToken();
      Router.replace('/login');
      return Promise.reject(JSON.stringify({ code, msg }));
    default:
      Message.error(msg);
      return Promise.reject(JSON.stringify({ code, msg }));
  }
});

// 处理400、500等非业务错误
// http.catchErrorHandler(res => {
//   Message({
//     type: 'error',
//     message: res,
//   })
// });

function post(api, params = {}, selfHandleError = false) {
  return http.post(api, params, selfHandleError);
}

function get(api, params = {}, selfHandleError = false) {
  return http.get(api, params, selfHandleError);
}

export { post, get };
