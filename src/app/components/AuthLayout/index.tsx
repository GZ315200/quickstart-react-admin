import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Locales, UserProfile } from '../Header'
import avatarLogo from 'assets/images/shop.jpeg'
import { Locale } from 'antd/es/locale-provider';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectLoginUser } from 'app/slices/userLoginSlice';

export interface ILayoutProps {
  locale: Locale;
  onChangeLocale: (e) => any;
  visible: boolean;
  handleVisibleChange: (flag: boolean) => void;
}

const AuthLayout = (props: ILayoutProps) => {

  const loginUser = useAppSelector(selectLoginUser);
  const { wechat, userType } = loginUser;
  const username =  userType === 0 ? 'Guest' : wechat

  return (
    <div>
        <Avatar src={avatarLogo} />
        <Locales 
        locale={props.locale} 
        onChangeLocale={props.onChangeLocale} 
        visible={props.visible} 
        handleVisibleChange={props.handleVisibleChange} 
        />
        <UserProfile username={username} />
        {/* <DatePicker /> */}
        <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/sysAuthUser">SysAuthUser Page</Link>
        </li>
        <li>
          <Link to="/weAppUser">WeAppUser Page</Link>
        </li>
        <li>
          <Link to="/product">Product Page</Link>
        </li>
        <li>
          <Link to="/notfound">notfound Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default AuthLayout;