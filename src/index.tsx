import React, { Suspense, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scrollbar';
import App from './App';
import './styles/app.less';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { Spin } from 'antd';
import { HelmetProvider } from 'react-helmet-async'

const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="suspense">
            <Spin size="large" tip="页面加载中..."/>
          </div>
        }
      >
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Suspense>
    </Provider>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
