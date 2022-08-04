
import React, { CSSProperties } from 'react';
import { BLACK } from 'app/styleConstants';

import {
  MenuFoldOutlined, MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useAppDispatch } from 'app/hooks';
import { setSiderState } from 'app/redux/appStateSlice';
import { Link, useLocation } from 'react-router-dom';

export default function AppSider({ isSiderOpened, routes }) {

  const { pathname } = useLocation();

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
        
    </div>
  )
}

