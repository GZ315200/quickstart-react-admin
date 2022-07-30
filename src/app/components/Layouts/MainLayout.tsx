import { useAppSelector } from 'app/hooks';
import React, { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Locales } from '../Header';
import { ILocalesProps } from '../Header/Locales';

export interface IMainLayoutProps {
   layout: ILocalesProps
}

export default function MainLayout(props: IMainLayoutProps) {

  const isLogin = useAppSelector(({ appState }) => appState.isLogin);
  let navigate = useNavigate();


  useEffect(() => {
    if (!isLogin) {
      navigate("/user/login");
    }
  }, [isLogin, navigate])
  
  
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