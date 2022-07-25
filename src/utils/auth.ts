
import { StorageKeys } from 'globalConstants';

export const setToken = (token: string) => {
    localStorage.setItem(StorageKeys.AuthorizationToken, token)
}

export const getToken = () => {
    return localStorage.getItem(StorageKeys.AuthorizationToken)
}