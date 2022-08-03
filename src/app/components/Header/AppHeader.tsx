

import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import userAvatar from 'assets/images/shop.jpeg';
import logo from 'assets/images/logo48.png';
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
      <BrandBox>
        <img alt="logo" src={logo} />
        <h1>一站式商家管理Sass系统</h1>
      </BrandBox>
      <HeaderRight>
        <div className="flex items-center">
          <ExpandIcon
            className="ml-2 mr-4 cursor-pointer"
            style={iconStyles}
            title={isSiderOpened ? '收起' : '展开'}
            onClick={() => {
              isSiderOpened ? dispatch(setSiderState(false)) : dispatch(setSiderState(true))
            }}
          />
          {/* <SearchInput>
            <Input
              placeholder="搜索..."
              prefix={<SearchOutlined style={iconStyles} />}
              style={inputStyles}
            />
          </SearchInput> */}
        </div>
      </HeaderRight>

      <div className="flex items-center h-full ml-auto">

        <div className="flex items-center">
          <Space size={14}>
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
const BrandBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    transition: all 0.3s;

    img {
      width: 1.8rem;
    }

    h1 {
      max-width: 300px;
      margin: 0 0.5rem;
      font-weight: 700;
      font-size: 1.2rem;
      white-space: nowrap;
      transition: all 0.2s;
    }
`

const HeaderRight = styled.div`
     display: flex;
     flex: 1;
     align-items: center;
     height: 100%;
`