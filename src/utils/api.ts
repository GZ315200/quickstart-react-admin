
/*
  admin API hub
*/

import { BASE_API_URL } from 'globalConstants'

/**login */
export const userLogin = `${BASE_API_URL}/login`
export const userLogout = `${BASE_API_URL}/logout`

/**user */
export const sysUserAdd = `${BASE_API_URL}/addUser`
export const sysUserMod = `${BASE_API_URL}/modifyUser`
export const sysUserDel = `${BASE_API_URL}/delUser`
export const getAllSysUser = `${BASE_API_URL}/getAllUser`
export const checkSysUser = `${BASE_API_URL}/checkUser`

