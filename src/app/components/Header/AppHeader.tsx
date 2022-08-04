

import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import userAvatar from 'assets/images/shop.jpeg';
import Locales, { ILocalesProps } from './Locales';
import {
  MenuFoldOutlined, MenuUnfoldOutlined,
  FullscreenOutlined, FullscreenExitOutlined, UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { setSiderState, setLoginState } from 'app/redux/appStateSlice';
import { BLACK } from 'app/styleConstants';
import Notice from './Notice';
import { Space, Avatar, Dropdown, Menu } from 'antd';
import { removeToken } from 'utils/auth';


interface AppHeaderProps {
  isSiderOpened: boolean
  isFullScreen: boolean
  switchFullscreen: () => void,
  localeInfo: ILocalesProps
}

const iconStyles: CSSProperties = {
  color: BLACK,
  fontSize: '18px'
}


export default function AppHeader({ isSiderOpened, isFullScreen, switchFullscreen, localeInfo }: AppHeaderProps) {

  const iconGroup = {
    open: MenuFoldOutlined,
    close: MenuUnfoldOutlined,
  }

  const ExpandIcon = iconGroup[isSiderOpened ? 'open' : 'close'];
  const ScreenIcon = isFullScreen ? FullscreenOutlined : FullscreenExitOutlined;
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const avatarItems = [
    { label: '个人中心', navPath: '/user/profile', key: 1 },
    { label: '退出登录', navPath: '/user/login', key: 2 }
  ]

  const routeToDest = (navPath, key) => {
    if (key === 1) {
      navigate(navPath)
    }
    if (key === 2) {
      removeToken()
      dispatch(setLoginState(false))
      navigate(navPath)
    }
  }

  const paneItem = () => (
    <Menu>
      {avatarItems.map(({ label, navPath, key }) => (
        <Menu.Item
          key={key}
          className="flex items-center py-0 cursor-pointer"
          onClick={() => routeToDest(navPath, key)}
        >
          <div className="mr-4">{label}</div>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <HeaderWapper>
      <div className="flex items-center h-full ml-auto">

        <div className="flex items-center">
          <Space size={15}>
            <ScreenIcon
              className="cursor-pointer"
              style={iconStyles}
              onClick={switchFullscreen}
            />
            <Notice iconStyle={iconStyles} />
            <Locales
              locale={localeInfo.locale}
              onChangeLocale={localeInfo.onChangeLocale}
              visible={localeInfo.visible}
              handleVisibleChange={localeInfo.handleVisibleChange}
              iconStyles={iconStyles}
            />
            <Dropdown overlay={paneItem} trigger={['click']} >
              <Avatar className="cursor-pointer" src={userAvatar} icon={<UserOutlined />} />
            </Dropdown>
          </Space>

        </div>
      </div>
    </HeaderWapper>
  )
}

// const SearchInput = styled.div`
//   display: flex;
//   align-items: center;
//   height: 38px;
//   background-color: ${APP_BG};
//   border-radius: 9999px;
//   & {
//     .ant-input-affix-wrapper,
//     .ant-input {
//       background: transparent;
//       border: none;
//       box-shadow: none;
//     }
//   }
// `

const HeaderWapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
