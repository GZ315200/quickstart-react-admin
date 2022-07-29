import { lazy } from 'react';
import type { RouteItem } from 'utils/types';

import { AiOutlineAreaChart, AiOutlinePayCircle, AiOutlineUser } from "react-icons/ai";

const DashboardHome = lazy(() => import('app/pages/Dashboard/DashboardHome'));
const SysAuthUser = lazy(() => import('app/pages/SysAuthUser/SysAuthUserList'));
const WeappUser = lazy(() => import('app/pages/WeAppUser/WeAppUserList'));
const Product = lazy(() => import('app/pages/Product/ProductList'));

export type RouteHub = RouteItem[];

const routes: RouteHub = [
    {
      title: '数据分析',
      icon: AiOutlineAreaChart,
      children: [
        {
          path: '/index',
          title: '系统仪表盘',
          component: DashboardHome,
        }
      ],
    },
    {
      title: '产品管理',
      icon: AiOutlinePayCircle,
      children: [
        {
          path: '/productlist',
          title: '产品列表',
          component: Product,
        },
      ],
    },
    {
        title: '用户管理',
        icon: AiOutlineUser,
        children: [
          {
            path: '/sysAuthUser',
            title: '系统用户列表',
            component: SysAuthUser,
          },
          {
            path: '/weAppUser',
            title: '小程序用户列表',
            component: WeappUser,
          },
        ],
      }
  ]
  
  export default routes;
  