import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect, useState }  from 'react';
import { FullScreen, FullScreenHandle, useFullScreenHandle } from 'react-full-screen';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../Header';
import { ILocalesProps } from '../Header/Locales';
import { setSiderState } from 'app/redux/appStateSlice';
import styled from 'styled-components';
import _ from 'classnames';

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
      <HeaderContaner>
          <AppHeader 
              isFullScreen={screen}
              isSiderOpened={isSiderOpened}
              switchFullscreen={switchFullscreen}
              localeInfo={props.layout}
          />
      </HeaderContaner>
    </FullScreen>
  )
}


const HeaderContaner = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 70px;
      padding-right: 1.8rem;
      background: #fff;
`
const SiderBarWapper = styled.div`
  
`
