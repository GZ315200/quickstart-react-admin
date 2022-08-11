import  React, { lazy } from 'react';
import type { RouteItem } from 'utils/types';
import { LineChartOutlined, AccountBookOutlined, UserOutlined, 
  UnorderedListOutlined, DashboardOutlined, WechatOutlined, TeamOutlined } from '@ant-design/icons';
const DashboardHome = lazy(() => import('app/pages/Dashboard/DashboardHome'));
const SysAuthUser = lazy(() => import('app/pages/SysAuthUser/SysAuthUserList'));
const WeappUser = lazy(() => import('app/pages/WeAppUser/WeAppUserList'));
const Product = lazy(() => import('app/pages/Product/ProductList'));

const routes: RouteItem[] = [
    {
      title: '数据分析',
      icon: LineChartOutlined,
      children: [
        {
          title: '系统仪表盘',
          path: '/index',
          icon: DashboardOutlined,
          component: <DashboardHome />
        }
      ],
    },
    {
      title: '产品管理',
      icon: AccountBookOutlined,
      children: [
        {
          path: '/productlist',
          title: '产品列表',
          icon: UnorderedListOutlined,
          component: <Product />,
        },
      ],
    },
    {
        title: '用户管理',
        icon: UserOutlined,
        children: [
          {
            path: '/sysAuthUser',
            title: '系统用户列表',
            icon: TeamOutlined,
            component: <SysAuthUser />,
          },
          {
            path: '/weAppUser',
            title: '小程序用户列表',
            icon: WechatOutlined,
            component: <WeappUser />,
          },
        ],
      }
  ]
  
  export default routes;
  