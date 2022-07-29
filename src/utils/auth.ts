import Cookies from 'js-cookie'
import { StorageKeys } from 'globalConstants'

type CookiesSetFn = Parameters<typeof Cookies.set>
type Token = Extract<CookiesSetFn[1], string>
type Expires = NonNullable<CookiesSetFn[2]>['expires']

export const setToken = (token: Token, expires?: Expires) => {
  Cookies.set(StorageKeys.AuthorizationToken, token, { expires })
}

export const getToken = () => {
  return Cookies.get(StorageKeys.AuthorizationToken)
}

export const removeToken = () => {
  Cookies.remove(StorageKeys.AuthorizationToken)
}
