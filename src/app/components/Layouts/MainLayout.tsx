import { useAppSelector } from 'app/hooks';
import React from 'react';
import { Locales } from '../Header';
import { ILocalesProps } from '../Header/Locales';

export interface IMainLayoutProps {
   layout: ILocalesProps
}

export default function MainLayout(props: IMainLayoutProps) {

  const isLogin = useAppSelector(({ appState }) => appState.isLogin);
  
  return (
    <div>
      <Locales 
          locale={props.layout.locale}
          onChangeLocale={props.layout.onChangeLocale}
          visible={props.layout.visible}
          handleVisibleChange={props.layout.handleVisibleChange}
       />
    </div>
  )
}