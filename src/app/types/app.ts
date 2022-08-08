import { RouteItem } from "utils/types";

export interface AppState {
    /** 侧边栏是否为展开状态 */
    isSiderOpened: boolean;
    /** 顶部导航栏是否固定在顶部 */
    isHeaderFixed: boolean;
    /** 用户是否已登录 */
    isLogin: boolean;
    /** 权限路由 */
    routes: Array<RouteItem>;
    /**语言 */
    lang: string
}
  