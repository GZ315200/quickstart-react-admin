export const isObject = (value: unknown): value is Record<any, any> => value !== null && typeof value === 'object';
export const isFunction = (value: unknown): value is Function => typeof value === 'function';
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';
/**
 * 是否是浏览器
 */
export const isBrowser = !!( typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * 是否是数组
 * 
 * @param value 
 * @returns 
 */
export const isArray = (value: unknown) => {
    return Array.isArray(value);
}


/**
 * 检测是否拥有路由权限
 */
 export function hasRoutePermission(
    routePermission,
    permissions: string[] = []
  ) {
    if (permissions.includes('admin')) {
      return true
    }
  
    if (isArray(routePermission)) {
      return routePermission.every((el) => permissions.includes(el))
    }
  
    if (isFunction(routePermission)) {
      return routePermission(permissions)
    }
  
    // 默认是具有权限的，所以返回 true
    return true
  }
  