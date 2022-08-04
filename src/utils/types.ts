import * as React from 'react';

/**
 * global types
 */
export interface ApiResponse<T> {
  code: number;
  errorMsg: string;
  data: T;
}

export type ValueOf<T> = T[keyof T];
export interface RouteItem {
  /** 显示在侧边栏的名称 */
  title: string
  /** 页面路由组件 */
  component?: React.ReactNode,
  /** 图标 */
  icon?: React.ReactNode
  /** 路径 */
  path?: string
  /** 子菜单路由 */
  children?: RouteItem[]
  /** 权限列表 */
  permissions?: string[]
  /** 控制是否在侧边栏中显示 */
  hidden?: boolean
  key?: string
}
