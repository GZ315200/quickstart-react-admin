import React, { useState } from 'react';
import './App.less';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { ConfigProvider, MenuProps } from 'antd';
import moment from 'moment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { Locale } from 'antd/es/locale-provider';
import { MainLayout, UserLayout } from 'app/components/Layouts';
import { NotFound } from 'app/components/Result';
import { ILocalesProps } from 'app/components/Header/Locales';
import { Register } from 'app/pages/Login';


const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(zhCN);
  const [visible, setvisible] = useState<boolean>(false);

  // const isLogin = useAppSelector(({ appState }) => appState.isLogin);


  const handleVisibleChange = (flag: boolean) => {
    setvisible(flag);
  };

  const onChangeLocale: MenuProps['onClick'] = e => {
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

  const layoutInfo: ILocalesProps = {
    locale,
    onChangeLocale,
    visible,
    handleVisibleChange
  }


  return (
    <div className="app">
      <BrowserRouter>
        <ConfigProvider locale={locale}>
          <Routes>
            <Route path="/" element={<MainLayout layout={layoutInfo} />} />
            <Route path='/user/login' element={<UserLayout />} />
            <Route path='/user/register' element={ <Register/>  } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;