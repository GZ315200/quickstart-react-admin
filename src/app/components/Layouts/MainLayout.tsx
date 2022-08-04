import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect, useState } from 'react';
import { FullScreen, FullScreenHandle, useFullScreenHandle } from 'react-full-screen';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../Header';
import { ILocalesProps } from '../Header/Locales';
import { setSiderState } from 'app/redux/appStateSlice';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { AppSider } from '../SiderBar';
const { Header, Content, Footer, Sider } = Layout;


export interface IMainLayoutProps {
  layout: ILocalesProps
}

export default function MainLayout(props: IMainLayoutProps) {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(({ appState }) => appState.isLogin);
  const isSiderOpened = useAppSelector(({ appState }) => appState.isSiderOpened);

  let navigate = useNavigate();
  const handle: FullScreenHandle = useFullScreenHandle()
  const [screen, setScreen] = useState<boolean>(handle.active)
  const [collapsed, setCollapsed] = useState<boolean>(false);


  useEffect(() => {
    if (!isLogin) {
      navigate("/user/login");
    }
  }, [isLogin, navigate])


  useEffect(() => {
    const handleSider = () => {
      if (window.innerWidth < 1300) {
        dispatch(setSiderState(false))
      } else {
        dispatch(setSiderState(true))
      }
    }
    window.addEventListener('resize', handleSider)
    return () => {
      window.removeEventListener('resize', handleSider)
    }
  }, [dispatch]);

  const switchFullscreen = () => {
    if (!handle.active) {
      handle.enter()
    } else {
      handle.exit()
    }
  }

  return (
    <FullScreen handle={handle} onChange={setScreen}>
      <Layout>
          <Sider>
              <AppSider isSiderOpened={isSiderOpened} />
              
          </Sider>
        <Layout>
          <AntHeaderWapper>
            <AppHeader
            isSiderOpened 
            isFullScreen 
            switchFullscreen={switchFullscreen} 
            localeInfo={props.layout}  
            />
          </AntHeaderWapper>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </FullScreen>
  )
}

const AntSiderWapper = styled(Sider).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  height: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
`;

const AntHeaderWapper = styled(Header)`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 80px;
      padding-right: 1.8rem;
      --tw-bg-opacity: 1;
      background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
`