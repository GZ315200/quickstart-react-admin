
import React, { CSSProperties } from 'react';
import { Dropdown, Menu } from 'antd';
import type { Locale } from 'antd/es/locale-provider';
import useMemoizedFn from 'app/hooks/useMemoizedFn';
import { GlobalOutlined } from '@ant-design/icons';


export interface ILocalesProps {
    locale: Locale;
    onChangeLocale: (e) => any;
    visible: boolean;
    handleVisibleChange: (flag: boolean) => void;
    iconStyles?: CSSProperties
}

const Locales: React.FC<ILocalesProps> = (props: ILocalesProps) => {

    const { locale } = props;
    const selectKey = locale.locale === 'zh-cn' ? ['cn'] : ['en'];

    const menu = (
        <Menu
            onClick={useMemoizedFn(props.onChangeLocale)}
            selectedKeys={selectKey}
            items={[
                {
                    label: 'English',
                    key: 'en'
                },
                {
                    label: '中文',
                    key: 'cn',
                },
            ]}
        />
    );

    return (
        <Dropdown overlay={menu} onVisibleChange={props.handleVisibleChange} visible={props.visible}>
                <GlobalOutlined style={props.iconStyles} />
        </Dropdown>
    )
}

export default Locales;
