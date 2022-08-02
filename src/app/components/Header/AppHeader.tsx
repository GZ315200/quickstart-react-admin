

import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/shop.jpeg';
import Locales, { ILocalesProps } from './Locales';
import Icon, {
  MenuFoldOutlined, MenuUnfoldOutlined,
  FullscreenOutlined, FullscreenExitOutlined, SearchOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { Input } from 'antd';
import { setSiderState } from 'app/redux/appStateSlice';
import { APP_BG } from 'app/styleConstants';



interface AppHeaderProps {
  isSiderOpened: boolean
  isFullScreen: boolean
  switchFullscreen: () => void,
  localeInfo: ILocalesProps
}

const IconStyles: CSSProperties = {
  color: '#718096', 
  fontSize: '25px'
}

export default function AppHeader({ isSiderOpened, isFullScreen, switchFullscreen, localeInfo }: AppHeaderProps) {

  const iconGroup = {
    open: MenuFoldOutlined,
    close: MenuUnfoldOutlined,
  }

  const ExpandIcon = iconGroup[isSiderOpened ? 'open' : 'close'];
  const ScreenIcon = isFullScreen ? FullscreenOutlined : FullscreenExitOutlined;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


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
            style={IconStyles}
            title={isSiderOpened ? '收起' : '展开'}
            onClick={() => {
              isSiderOpened ? dispatch(setSiderState(false)) : dispatch(setSiderState(true))
            }}
          />
          <SearchInput>
            <Input
              placeholder="搜索..."
              prefix={<SearchOutlined size={16} />}
              style={{ marginRight: '4px', color: '#718096' }}
            />
          </SearchInput>
        </div>
      </HeaderRight>

      <div className="flex items-center h-full ml-auto">

        <div className="flex items-center mr-6">
          <ScreenIcon
            className="mr-4 mt-2 cursor-pointer"
            style={IconStyles}
            onClick={switchFullscreen}
          />
          <Locales
            locale={localeInfo.locale}
            onChangeLocale={localeInfo.onChangeLocale}
            visible={localeInfo.visible}
            handleVisibleChange={localeInfo.handleVisibleChange}
          />
        </div>
      </div>
    </HeaderWapper>
  )
}

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  background-color: ${APP_BG};
  border-radius: 9999px;
  & {
    .ant-input-affix-wrapper,
    .ant-input {
      background: transparent;
      border: none;
      box-shadow: none;
    }
  }
`

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