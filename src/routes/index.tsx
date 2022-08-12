import React from 'react';
import type { RouteItem } from 'utils/types';
import { LineChartOutlined, AccountBookOutlined, UserOutlined, 
  UnorderedListOutlined, DashboardOutlined, WechatOutlined, TeamOutlined } from '@ant-design/icons';
import { DashboardHome } from 'app/pages/Dashboard';
import { ProductList } from 'app/pages/Product';
import { SysAuthUserList } from 'app/pages/SysAuthUser';
import { WeAppUserList } from 'app/pages/WeAppUser';


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
          component: <ProductList />,
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
            component: <SysAuthUserList />,
          },
          {
            path: '/weAppUser',
            title: '小程序用户列表',
            icon: WechatOutlined,
            component: <WeAppUserList />,
          },
        ],
      }
  ]
  
  export default routes;
  