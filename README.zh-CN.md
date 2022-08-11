
Language : 🇺🇸 | [🇨🇳](./README.zh-CN.md) 

<h1 align="center">QuickStart React Admin</h1>

<div align="center">

    企业级应用程序的快速启动的React模板的解决方案。
</div>

### 功能

1. 支持登录、注销、密码重置功能
2. 支持个人中心，消息提醒、多语言动态切换
3. 支持左侧菜单的切换，路由对应的页面同样切换
4. 支持权限验证是否显示页面和菜单
5. 支持全屏模式切换
6. 支持App和Browser端自适应布局

### 技术
1. 支持carco.js作为应用配置工具
2. 支持tailwind css书写样式
3. 支持typescript编写code
4. 支持styled-components定义组件
8. 支持antd UI组件
9. 支持react-router v6
10. windows系统scroll bar样式优化
11. 支持redux存储数据并支持redux-toolkit简化redux开发

---
## 目录结构
```
├── README.md
├── craco.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favico.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── app
│   │   ├── api -- 后端接口
│   │   │   ├── notice.ts
│   │   │   └── user.ts
│   │   ├── components  -- 公共组件
│   │   │   ├── Brand.tsx
│   │   │   ├── Calendar.tsx
│   │   │   ├── Content
│   │   │   │   ├── AppContent.tsx
│   │   │   │   └── index.ts
│   │   │   ├── DatePicker.tsx
│   │   │   ├── Footer
│   │   │   │   ├── AppFooter.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Header
│   │   │   │   ├── AppHeader.tsx
│   │   │   │   ├── Locales.tsx
│   │   │   │   ├── LoginTitle.tsx
│   │   │   │   ├── Notice.tsx
│   │   │   │   ├── UserProfile.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Layouts
│   │   │   │   ├── MainLayout.less
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   ├── UserLayout.less
│   │   │   │   ├── UserLayout.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── Result
│   │   │   │   ├── NotFound.tsx
│   │   │   │   └── index.ts
│   │   │   ├── SiderBar
│   │   │   │   ├── AppSider.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── TimePicker.tsx
│   │   │   ├── Welcome.tsx
│   │   │   └── index.ts
│   │   ├── hooks  -- 公共hooks
│   │   ├── pages  -- 业务系统页面
│   │   ├── redux 
│   │   │   ├── appStateSlice.ts
│   │   │   └── userLoginSlice.ts
│   │   ├── store.ts
│   │   ├── styleConstants.ts  -- 公共样式
│   │   └── types  -- 公共类型
│   │       ├── app.ts
│   │       ├── index.ts
│   │       └── user.ts
│   ├── assets  -- 资源
│   │   └── images
│   ├── globalConstants.ts  -- 公共配置
│   ├── index.tsx
│   ├── locales  -- 多语言配置
│   │   ├── en_US.json
│   │   ├── index.ts
│   │   └── zh_CN.json
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routes   -- 路由
│   │   └── index.tsx
│   ├── scrollbar.ts 
│   ├── serviceWorker.js
│   ├── styles -- 样式
│   │   ├── app.less
│   │   ├── tailwind.css
│   │   └── variables.less
│   └── utils -- 公共工具类
│       ├── api.ts
│       ├── auth.ts
│       ├── index.ts
│       ├── request.ts
│       └── types.ts
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock

```
## 启动方式

### 开发环境

```bash
$ mkdir <your-project-name>
$ cd <your-project-name>
$ yarn install
$ yarn start         # visit http://localhost:3000
```

### 生产环境

```bash
$ mkdir <your-project-name>
$ cd <your-project-name>
$ yarn build
```
在文件根目录查看前端资源输出文件夹: `/dist`


## 支持浏览器

Modern browsers.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 贡献代码

欢迎贡献代码

- Submit [issues](https://github.com/GZ315200/quickstart-react-admin/issues) to report bugs or ask questions.
- Propose [pull requests](https://github.com/GZ315200/quickstart-react-admin/pulls) to improve our code.