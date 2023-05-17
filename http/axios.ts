import instance from './index'
/**
 * @param {String} method  請求的方法：get、post、delete、put
 * @param {String} url     請求的url:
 * @param {Object} data    請求的参数
 * @param {Object} config  請求的配置
 * @returns {Promise}     返回一個promise對象，其實就相當於axios請求數據的返回值
 */
const axios = ({ method, url, data, config }: any) => {
  method = method.toLowerCase()
  if (method === 'post') {
    return instance.post(url, data, { ...config })
  } else if (method === 'get') {
    return instance.get(url, {
      params: data,
      ...config
    })
  } else if (method === 'delete') {
    return instance.delete(url, {
      params: data,
      ...config
    })
  } else if (method === 'put') {
    return instance.put(url, data, { ...config })
  } else {
    return false
  }
}
export { axios }
