import React, { useState } from 'react';
import './App.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import type { RadioChangeEvent } from 'antd';
import { Locales } from 'app/components/Header';
import AuthLayout from 'app/components/AuthLayout'
import { Route, Routes } from 'react-router-dom';


import AdminLogin from 'app/pages/Login/AdminLogin';


const App: React.FC = () => {
  const [locale, setLocal] = useState(zhCN);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  }

  return (
    <div className="App">
      <ConfigProvider locale={locale}>
        <Locales locale={locale} onChangeLocale={changeLocale} />
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/" element={<AuthLayout />}>
             
          </Route>
        </Routes>
      </ConfigProvider>

    </div>
  );
}

export default App;