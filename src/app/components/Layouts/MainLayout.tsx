import './MainLayout.less';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect, useState } from 'react';
import { FullScreen, FullScreenHandle, useFullScreenHandle } from 'react-full-screen';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppHeader } from '../Header';
import { ILocalesProps } from '../Header/Locales';
import { setSiderState } from 'app/redux/appStateSlice';
import { AppSider } from '../SiderBar';
import _ from 'classnames';
import { AppFooter } from '../Footer';
import { AppContent } from '../Content';
export interface IMainLayoutProps {
  layout: ILocalesProps
}

export default function MainLayout(props: IMainLayoutProps) {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(({ appState }) => appState.isLogin);
  const isSiderOpened = useAppSelector(({ appState }) => appState.isSiderOpened);
  const routes = useAppSelector(({appState}) => appState.routes);
  const { pathname } = useLocation();

  let navigate = useNavigate();
  const handle: FullScreenHandle = useFullScreenHandle();
  const [screen, setScreen] = useState<boolean>(handle.active);

  useEffect(() => {
    if (!isLogin) {
      navigate("/user/login");
    }
    if (pathname === '/') {
      navigate('/index')
    }
  }, [isLogin, navigate, pathname])


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
        <aside className={_('app-aside', { 'menu-close': !isSiderOpened })}>
          <AppSider isSiderOpened={isSiderOpened} routes={routes} />
        </aside>
        <main className={_('app-main', { 'menu-close': !isSiderOpened })}>
          <header className={_('app-header', { 'menu-close': !isSiderOpened })}>
            <AppHeader
              isSiderOpened={isSiderOpened}
              isFullScreen={screen}
              switchFullscreen={switchFullscreen}
              localeInfo={props.layout}
            />
          </header>

        <section className="app-section">
          <AppContent routes={routes} />
        </section>

        <footer className="app-footer">
          <AppFooter />
        </footer>
      </main>
    </FullScreen>
  )
}