import React, { useState } from 'react';
import './App.less';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { ConfigProvider, MenuProps } from 'antd';
import moment from 'moment';
import AuthLayout from 'app/components/AuthLayout';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from 'app/pages/Login/AdminLogin';
import type { Locale } from 'antd/es/locale-provider';

import { SysAuthUserList } from 'app/pages/SysAuthUser';
import { WeAppUserList } from 'app/pages/WeAppUser';
import { ProductList } from 'app/pages/Product';
import { NotFound } from 'app/components/Result';

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(zhCN);
  const [visible, setvisible] = useState<boolean>(false);

  const handleVisibleChange = (flag: boolean) => {
      setvisible(flag);
  };

  const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === 'en') {
      setLocale(enUS);
      moment.locale('en');
    }
    if (e.key === 'cn') {
      setLocale(zhCN)
      moment.locale('zh-cn');
    }
    setvisible(false);
  };

  return (
    <div className="App">
      <ConfigProvider locale={locale}>
        <Routes>
          <Route path="/" element={<AuthLayout locale={locale} visible={visible}
            handleVisibleChange={handleVisibleChange} onChangeLocale={handleMenuClick}/>} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/sysAuthUser" element={<SysAuthUserList />} />
          <Route path="/weAppUser" element={<WeAppUserList />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ConfigProvider>

    </div>
  );
}

export default App;