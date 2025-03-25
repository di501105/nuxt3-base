import type { InternalAxiosRequestConfig } from 'axios'
import instance from './config'
/**
 * @param {string} method  請求的方法：get、post、delete、put
 * @param {string} url     請求的url:
 * @param {object} data    請求的参数
 * @param {object} config  請求的配置
 * @returns {Promise}     返回一個promise對象，其實就相當於axios請求數據的返回值
 */
export interface IAxiosRequest {
  method: 'post' | 'get' | 'delete' | 'put'
  url: string
  data?: Record<string, any>
  config?: InternalAxiosRequestConfig
}

export interface IAxiosResponse<T = any> {
  code: '0000' | '9999'
  message: string
  data: T
}

function axios<T = any>({ method, url, data, config }: IAxiosRequest) {
  if (method === 'post') {
    return instance.post<IAxiosResponse<T>>(url, data, config)
  }
  else if (method === 'get') {
    return instance.get<IAxiosResponse<T>>(url, { params: data, ...config })
  }
  else if (method === 'delete') {
    return instance.delete<IAxiosResponse<T>>(url, { params: data, ...config })
  }
  else if (method === 'put') {
    return instance.put<IAxiosResponse<T>>(url, data, config)
  }
  else {
    return undefined
  }
}
export { axios }
