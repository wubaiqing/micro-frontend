
# 禧云 element-ui-template

### 简介

element-ui-template是一个基于element-ui组件库快速创建的xy框架模板

### 使用

```shell

启动项目
$ yarn start
或
$ npm run start

打包项目
$ yarn build
或
$ npm run build

代码格式检查
$ yarn lint
或
$ npm run lint

```

### 本地 mock 接口
mock 接口文件存放在 `__mock__` 目录下，使用禧云 mock 工具可以启动 mock 服务：
```
// 如果没有安装过 mock 插件，需要安装一下
$ xy add @xiyun/xy-plugin-mock
// 启动 mock 服务
$ xy mock
```

### 项目目录结构

```
├── dists                   # 打包文件目录
├── node_modules            # 第三方依赖包
├── public                  # 公共文件，主要存储样式，字体，图片等
├── src                     # 项目源码
│   ├── assets              # 公用样式
│   ├── components          # 公用组件目录
│   ├── plugins             # 按需引入组件配置目录
│   ├── router              # 路由配置目录
│   ├── store               # vuex 的 store 目录
│   │   └── modules         # store 的 modules 目录
│   ├── utils               # 工具函数目录
│   │   └── global-mixin.js # 全局混入
│   │   └── iframe.js       # 通知父页面改变高度
│   │   └── post.js         # 请求方法
│   │   └── token.js        # token处理方法
│   └── views               # 项目页面目录
```


### git commit message 规范

本项目框架默认在执行 git commit 的时候调用了 hook 来检查提交消息的规范，
意味着你在执行`git commit -am'feat: 增加新功能'`时，消息必须要写相应的前缀来标明这次提交的类型。

类型可选项有：
- feat：新增 feature
- fix: 修复 bug
- docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
- style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复 bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 回滚到上一个版本

如果你不需要这个规范，可以在 `package.json` 中删除掉以下内容：
```json
{
  "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E GIT_PARAMS"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "vue-cli-service lint --mode production",
      "git add"
    ],
    "*.vue": [
      "prettier --write",
      "vue-cli-service lint --mode production",
      "git add"
    ]
  }
}
```
