import axios, { AxiosRequestConfig } from 'axios';
import { BASE_API_URL } from 'globalConstants';
import { isString, isUndef } from 'utils';
import { ApiResponse } from 'utils/types'
import { setToken, getToken } from './auth'


const instance = axios.create({
    baseURL: BASE_API_URL,
    validateStatus(status) {
      return status < 400;
    },
    responseType: 'json',
    withCredentials: true,
  });
  
  instance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        if (!isUndef(config.headers)) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config;
  });
  
  instance.interceptors.response.use(response => {
    // refresh access token
    const token = response.headers.Authorization;
    if (token && isString(token)) {
      setToken(token.replace("Bearer ", ""));
    }
    return response;
  });
  
  export function request<T = any> (
    url: string | AxiosRequestConfig,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const axiosPromise = typeof url === 'string' ? instance(url, config) : instance(url);
    return axiosPromise.then(response => response.data as ApiResponse<T>);
  }
  

  export function requestWithHeader<T = any, K = any>(
    url: string | AxiosRequestConfig,
    config?: AxiosRequestConfig,
  ): Promise<[ApiResponse<T>, K]> {
    const axiosPromise = typeof url === 'string' ? instance(url, config) : instance(url);
    return axiosPromise.then(response => {
      return [response.data as ApiResponse<T>, response.headers as unknown as K];
    });
  }
  
  export const getServerDomain = () => {
    return `${window.location.protocol}//${window.location.host}`;
  };
  