
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import type { Locale } from 'antd/es/locale-provider';

export interface ILocalesProps {
    locale: Locale;
    onChangeLocale: (e) => any;
    visible: boolean;
    handleVisibleChange: (flag: boolean) => void;
}

const Locales: React.FC<ILocalesProps> = (props: ILocalesProps) => {

    const menu = (
        <Menu
            onClick={props.onChangeLocale}
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
        <div>
            <Dropdown overlay={menu} onVisibleChange={props.handleVisibleChange} visible={props.visible}>
                <Space>
                    选择语言
                    <DownOutlined />
                </Space>
            </Dropdown>
        </div>
    )
}

export default Locales