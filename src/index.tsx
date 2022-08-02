import React, { Suspense, StrictMode, CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { Spin } from 'antd';
import { HelmetProvider } from 'react-helmet-async'

const container = document.getElementById('root')!;
const root = createRoot(container);

const styles: CSSProperties = {
   lineHeight: '100px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '50px'
}

root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div style={styles}>
            <Spin tip="页面加载中..." />
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
