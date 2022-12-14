Language : [πΊπΈ](https://ticktech.club/quickstart-react-admin/)| [π¨π³δΈ­ζζζ‘£](https://ticktech.club/quickstart-react-admin/README.zh-CN.html) 

<h1 align="center">QuickStart React Admin</h1>

<div align="center">

An quick-start solution for enterprise applications as a React templete.


Inspired by [https://github.com/Codennnn/portal](https://github.com/Codennnn/portal)

</div>


## Preview

prod: [https://quickstart-react-admin.vercel.app/](https://quickstart-react-admin.vercel.app/)



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
- :white_check_mark: **Docker**: Easy to run with Docker

## Directory Structure

```
βββ README.md
βββ craco.config.js
βββ package-lock.json
βββ package.json
βββ public
βΒ Β  βββ favico.ico
βΒ Β  βββ index.html
βΒ Β  βββ manifest.json
βΒ Β  βββ robots.txt
βββ src
βΒ Β  βββ App.tsx
βΒ Β  βββ app
βΒ Β  βΒ Β  βββ api
βΒ Β  βΒ Β  βΒ Β  βββ notice.ts
βΒ Β  βΒ Β  βΒ Β  βββ user.ts
βΒ Β  βΒ Β  βββ components
βΒ Β  βΒ Β  βΒ Β  βββ Brand.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Calendar.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Content
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ AppContent.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ index.ts
βΒ Β  βΒ Β  βΒ Β  βββ DatePicker.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Footer
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ AppFooter.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ index.ts
βΒ Β  βΒ Β  βΒ Β  βββ Header
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ AppHeader.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ Locales.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ LoginTitle.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ Notice.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ UserProfile.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ index.ts
βΒ Β  βΒ Β  βΒ Β  βββ Layouts
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ MainLayout.less
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ MainLayout.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ UserLayout.less
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ UserLayout.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ index.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Result
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ NotFound.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ index.ts
βΒ Β  βΒ Β  βΒ Β  βββ SiderBar
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ AppSider.tsx
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ index.tsx
βΒ Β  βΒ Β  βΒ Β  βββ TimePicker.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Welcome.tsx
βΒ Β  βΒ Β  βΒ Β  βββ index.ts
βΒ Β  βΒ Β  βββ hooks
βΒ Β  βΒ Β  βββ pages
βΒ Β  βΒ Β  βββ redux
βΒ Β  βΒ Β  βΒ Β  βββ appStateSlice.ts
βΒ Β  βΒ Β  βΒ Β  βββ userLoginSlice.ts
βΒ Β  βΒ Β  βββ store.ts
βΒ Β  βΒ Β  βββ styleConstants.ts
βΒ Β  βΒ Β  βββ types
βΒ Β  βΒ Β      βββ app.ts
βΒ Β  βΒ Β      βββ index.ts
βΒ Β  βΒ Β      βββ user.ts
βΒ Β  βββ assets
βΒ Β  βΒ Β  βββ images
βΒ Β  βββ globalConstants.ts
βΒ Β  βββ index.tsx
βΒ Β  βββ locales
βΒ Β  βΒ Β  βββ en_US.json
βΒ Β  βΒ Β  βββ index.ts
βΒ Β  βΒ Β  βββ zh_CN.json
βΒ Β  βββ react-app-env.d.ts
βΒ Β  βββ reportWebVitals.ts
βΒ Β  βββ routes
βΒ Β  βΒ Β  βββ index.tsx
βΒ Β  βββ scrollbar.ts
βΒ Β  βββ serviceWorker.js
βΒ Β  βββ styles
βΒ Β  βΒ Β  βββ app.less
βΒ Β  βΒ Β  βββ tailwind.css
βΒ Β  βΒ Β  βββ variables.less
βΒ Β  βββ utils
βΒ Β      βββ api.ts
βΒ Β      βββ auth.ts
βΒ Β      βββ index.ts
βΒ Β      βββ request.ts
βΒ Β      βββ types.ts
βββ tailwind.config.js
βββ tsconfig.json
βββ yarn.lock

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
