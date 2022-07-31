
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import type { Locale } from 'antd/es/locale-provider';
import useMemoizedFn from 'app/hooks/useMemoizedFn';
import styled from 'styled-components/macro';


export interface ILocalesProps {
    locale: Locale;
    onChangeLocale: (e) => any;
    visible: boolean;
    handleVisibleChange: (flag: boolean) => void;
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
        <Wapper>
            <Dropdown overlay={menu} onVisibleChange={props.handleVisibleChange} visible={props.visible}>
                <Space>
                    选择语言
                    <DownOutlined/>
                </Space>
            </Dropdown>
        </Wapper>
    )
}

export default Locales;

const Wapper = styled.div`
    width: 80px;
    height: 20px;
    .anticon {
        margin-bottom: 6px;
    }
`;