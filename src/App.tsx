import React, { useState } from 'react';
import { DatePicker } from './app/components';
import './App.less';

import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { ConfigProvider, Radio } from 'antd';
import moment from 'moment';
import type { RadioChangeEvent } from 'antd';

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
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
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