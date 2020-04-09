# 项目说明

1. React全家桶+AntD共享单车后台管理系统开发`react-manag-system`是基于React^16.12.0、Ant Design^3.25.2的管理系统架构。

2. 采用前后端分离`所有请求数据均使用RAP2进行模拟`，内置了许多管理系统常用功能。

## 项目环境

1. 项目基于的nodejs版本为v12.13.1

2. 编辑器推荐vscode

## 项目安装

```bash
# 将项目从GitHub clone下来
git clone https://github.com/GitHubXXue/React-AntD-.git

# 安装依赖
npm install

# 启动
npm start
```

## 项目打包

```bash
# 项目开发完成以后 进行项目打包
npm run build

# 安装依赖
npm install

# 启动
npm start
```

## 项目结构

```
├── build               // 编译目录
├── config              // 构建配置
├── docs                // 项目预览图片
├── public              // 不参与构建的静态文件
├── scripts             // 构建脚本
├── src         
│   ├── axios           // 封装了axios、jsonp等公共机制
│   ├── components      // 页面框架布局组件、通用组件
│   ├── config          // 菜单配置
│   ├── pages           // 页面组件
│   ├── store           // 模块封装，基于redux，提供各组件共享数据、共享逻辑
│   ├── style           // 全局样式 慎用
│   ├── utils           // 基础组件、工具
│   │   ├── apis.js          // 本文件用于定义接口地址
│   │   ├── index.js         // 通用工具函数
│   │   ├── loadable.js      // 定义异步加载组件
│   │   ├── privateRoute.js  // 封装私用路由组件——仅登录用户可查看
│   │   ├── request.js       // 初始化网络请求
│   │   └── storageUtils.js  // 数据存储管理的工具模块
│   ├── admin.js        // 一级页面根组件
│   ├── App.js          // 根组件common
│   ├── common.js       // 二级页面根组件
│   ├── index.js        // 项目入口文件
│   ├── router.js       // 路由入口
├── .gitignore          
├── package.json
├── README.md           // 项目说明文件
└── yarn.lock           // 项目依赖的安装包版本号的一些说明
```

## 技术说明

该项目使用 `react` 进行单页的开发，

使用 `redux` 进行数据管理，

使用 `react-router` 进行路由管理

使用 `ant-design` 做为 `ui` 库
