
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {  useAppSelector } from 'app/hooks';
import { Link, useLocation } from 'react-router-dom';
import { RouteItem } from 'utils/types';
import { hasRoutePermission } from 'utils';
import { Menu } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar'



const subMenuKey = (children) => {
  return children.map(({ path }) => path).join('')
}

type RenderMenuItemProps = Pick<
  RouteItem,
  'path' | 'title' | 'icon' | 'hidden' | 'permissions'
>

/**
 * 生成单个菜单项
 */
 const renderMenuItem = (
  {
    path,
    title,
    icon: MenuIcon,
    hidden = false,
    permissions: routePermission,
  }: RenderMenuItemProps,
  permissions
) =>  {
  return hidden || !hasRoutePermission(routePermission, permissions) ? null : (
    <Menu.Item
      key={path}
      icon={
        MenuIcon && <MenuIcon className="anticon"/>
      }
    >
      <Link to={path!}>
        <span>{title}</span>
      </Link>
    </Menu.Item>
  )
}

type RenderSubMenuProps = Pick<RouteItem, 'title' | 'children' | 'icon'>


/**
 * 生成嵌套子菜单
 */
 const renderSubMenu = (
  { title, children, icon: MenuIcon }: RenderSubMenuProps,
  permissions
) => {
  return (
    <Menu.SubMenu
      key={subMenuKey(children)}
      icon={
        MenuIcon && <MenuIcon className="anticon" styles strokeWidth={3.6} />
      }
      title={title}
    >
      {children &&
        children.length > 0 &&
        children.map((item) =>
          item.children && item.children.length > 0
            ? renderSubMenu(item, permissions)
            : renderMenuItem(item, permissions)
        )}
    </Menu.SubMenu>
  )
}


interface AppSiderProps {
  routes: Array<RouteItem>
  isSiderOpened: boolean
}


export default function AppSider({ isSiderOpened, routes }: AppSiderProps) {

  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const permissions = useAppSelector(({ userLogin }) => userLogin.info?.permissions)

  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  const onOpenChange = (keys) => {
    setOpenKeys(keys)
  }

   // 初始时设置打开的嵌套菜单，避免页面刷新时嵌套菜单关闭
   useLayoutEffect(
    () => {
      if (isSiderOpened) {
        const findOpenKeys = (theRoutes) => {
          const keys = []
          const justFind = (r) =>
            r.some(({ path, children }) => {
              let hasFoundPath = path === pathname

              if (children?.length > 0) {
                hasFoundPath = children.some(
                  ({ path: routePath, children: childRoutes }) => {
                    if (childRoutes?.length > 0) {
                      const isFound = justFind(childRoutes)
                      if (isFound) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        keys.push(subMenuKey(childRoutes))
                      }
                      return isFound
                    }
                    return routePath === pathname
                  }
                )
                if (hasFoundPath) {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  keys.push(subMenuKey(children))
                }
              }

              return hasFoundPath
            })
          justFind(theRoutes)
          return keys
        }
        setOpenKeys(findOpenKeys(routes))
      }
    },
    /* eslint-disable-next-line */
    [isSiderOpened]
  )



  return (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <Menu
        inlineCollapsed={!isSiderOpened}
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
      >
        {routes.length > 0 &&
          (routes as RouteItem[]).map((item) => {
            if (item.children && item.children.length > 0) {
              return renderSubMenu(item, permissions)
            }
            return renderMenuItem(item, permissions)
          })}
      </Menu>
    </PerfectScrollbar>
  )
}

