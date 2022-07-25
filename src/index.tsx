import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/es/locale/zh_CN';
// import en_US from 'antd/es/locale/en_US';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
