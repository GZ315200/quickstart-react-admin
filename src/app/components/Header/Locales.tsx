
import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import type { Locale } from 'antd/es/locale-provider';


type Props = {
    locale: Locale;
    onChangeLocale: (e: RadioChangeEvent) => void
}
const Locales = (props: Props) => {
    return (
        <div>
             <Radio.Group value={props.locale} onChange={props.onChangeLocale}>
                    <Radio.Button key="en" value={enUS}>
                        English
                    </Radio.Button>
                    <Radio.Button key="cn" value={zhCN}>
                        中文
                    </Radio.Button>
                </Radio.Group>
        </div>
    )
}

export default Locales