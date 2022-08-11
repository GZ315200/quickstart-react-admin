Language : [🇺🇸](./README.md)| [🇨🇳](./README.zh-CN.md) 

<h1 align="center">QuickStart React Admin</h1>

<div align="center">

An quick-start solution for enterprise applications as a React templete.


Inspired by [https://github.com/Codennnn/portal](https://github.com/Codennnn/portal)

</div>


## Preview

prod: [https://react-admin-navy.vercel.app/](https://react-admin-navy.vercel.app/)



## Features

- :bulb: **TypeScript**: A language for application-scale JavaScript
- :scroll: **Blocks**: Build page with block template
- :gem: **Neat Design**: Follow [Ant Design specification](http://ant.design/)
- :triangular_ruler: **Common Templates**: Typical templates for enterprise applications
- :rocket: **State of The Art Development**: Newest development stack of React/Redux/Redux-Tookit/antd
- :iphone: **Responsive**: Designed for variable screen sizes
- :art: **Theming**: Customizable theme with simple config
- :globe_with_meridians: **International**: Built-in i18n solution
- :gear: **Best Practices**: Solid workflow to make your code healthy
- :1234: **Mock development**: Easy to use mock development solution
- :white_check_mark: **UI Test**: Fly safely with unit and e2e tests

## Directory Structure

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
│   │   ├── api
│   │   │   ├── notice.ts
│   │   │   └── user.ts
│   │   ├── components
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
│   │   ├── hooks
│   │   ├── pages
│   │   ├── redux
│   │   │   ├── appStateSlice.ts
│   │   │   └── userLoginSlice.ts
│   │   ├── store.ts
│   │   ├── styleConstants.ts
│   │   └── types
│   │       ├── app.ts
│   │       ├── index.ts
│   │       └── user.ts
│   ├── assets
│   │   └── images
│   ├── globalConstants.ts
│   ├── index.tsx
│   ├── locales
│   │   ├── en_US.json
│   │   ├── index.ts
│   │   └── zh_CN.json
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routes
│   │   └── index.tsx
│   ├── scrollbar.ts
│   ├── serviceWorker.js
│   ├── styles
│   │   ├── app.less
│   │   ├── tailwind.css
│   │   └── variables.less
│   └── utils
│       ├── api.ts
│       ├── auth.ts
│       ├── index.ts
│       ├── request.ts
│       └── types.ts
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock

```

## Useage

### Dev

```bash
$ mkdir <your-project-name>
$ cd <your-project-name>
$ yarn install
$ yarn start         # visit http://localhost:3000
```

### Production

```bash
$ mkdir <your-project-name>
$ cd <your-project-name>
$ yarn build
```
lookup the output path: `/dist`

## Browsers support

Modern browsers.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Contributing

Any type of contribution is welcome, here are some examples of how you may contribute to this project:

- Submit [issues](https://github.com/GZ315200/quickstart-react-admin/issues) to report bugs or ask questions.
- Propose [pull requests](https://github.com/GZ315200/quickstart-react-admin/pulls) to improve our code.
