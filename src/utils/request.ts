import axios, { AxiosRequestConfig } from 'axios';
import { BASE_API_URL } from 'globalConstants';
import { ApiResponse } from 'types'
import { setToken, getToken } from './auth'


const instance = axios.create({
    baseURL: BASE_API_URL,
    validateStatus(status) {
      return status < 400;
    },
  });
  
  instance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        if (typeof config.headers !== 'undefined') {
            config.headers.Authorization = token 
        }
    }
    return config;
  });
  
  instance.interceptors.response.use(response => {
    // refresh access token
    const token = response.headers.authorization;
    if (token) {
      setToken(token);
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
    const axiosPromise =
      typeof url === 'string' ? instance(url, config) : instance(url);
    return axiosPromise.then(response => {
      return [response.data as ApiResponse<T>, response.headers as unknown as K];
    });
  }
  
  export const getServerDomain = () => {
    return `${window.location.protocol}//${window.location.host}`;
  };
  