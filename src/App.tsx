import React, { useState } from 'react';
import { DatePicker } from './app/components';
import './App.less';

import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import type { RadioChangeEvent } from 'antd';
import { Locales } from 'app/components/Header';

import Brand from 'app/components/Brand';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

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

  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }
  return (
    <div className="App">
      <ConfigProvider locale={locale}>
        <Locales locale={locale} onChangeLocale={changeLocale} />
        <Brand />
        <div>
          <DatePicker onChange={onChange} />
          <br />
          <MonthPicker onChange={onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={onChange} />
          <br />
          <WeekPicker onChange={onChange} placeholder="Select week" />
        </div>
      </ConfigProvider>

    </div>
  );
}

export default App;