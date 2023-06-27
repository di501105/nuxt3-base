// http/index.ts
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'

const { VITE_API_BASE_URL, VITE_ROOT_PATH } = import.meta.env

// 創建axios的一個實例
const instance: AxiosInstance = axios.create({
  baseURL: `${VITE_API_BASE_URL}${VITE_ROOT_PATH}`, // 接口统一域名
  timeout: 60 * 1000, // 設置超時
  headers: {
    // 'Access-Control-Allow-Origin': '*'
    // 'Content-Type': 'application/json;charset=UTF-8;'
  }
})
// 請求攔截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    if (localStorage.getItem('accessToken')) {
      const token = `Token ${localStorage.getItem('accessToken')}`
      token && (config.headers.Authorization = token)
    }
    // 若請求方式為post，則將data參數轉為JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error: AxiosError) =>
    // 對請求錯誤做些什麼
    Promise.reject(error)
)

// 響應攔截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 響應成功
    console.log('響應成功')
    return response.data
  },
  (error: AxiosError) => {
    console.log('響應錯誤', error)
    // 響應錯誤
    if (error.response && error.response.status) {
      const status = error.response.status
      switch (status) {
        case 500:
          ElMessage.error('Error !')
          break
        case 503:
          ElMessage.error('Error !')
          break
        case 404:
          ElMessage.error('Error !')
          break
        case 403:
          break
        case 400:
          break
        case 401:
          useRouter().replace({ path: '/login' })
          break
      }
      return error
    }
    return error
  }
)
export default instance
