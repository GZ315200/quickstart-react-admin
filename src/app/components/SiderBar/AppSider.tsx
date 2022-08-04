
import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo48.png';
import { BLACK } from 'app/styleConstants';

import {
  MenuFoldOutlined, MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useAppDispatch } from 'app/hooks';
import { setSiderState } from 'app/redux/appStateSlice';

export default function AppSider({ isSiderOpened }) {

  const iconGroup = {
    open: MenuFoldOutlined,
    close: MenuUnfoldOutlined,
  }

  const iconStyles: CSSProperties = {
    color: BLACK,
    fontSize: '18px'
  }
  
  const ExpandIcon = iconGroup[isSiderOpened ? 'open' : 'close'];
  const dispatch = useAppDispatch();

  return (
    <div>
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
    </div>
  )
}

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