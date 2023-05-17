// http/index.ts
import axios from 'axios'

const { VITE_API_BASE_URL } = import.meta.env
// 創建axios的一個實例
const instance = axios.create({
  baseURL: `${VITE_API_BASE_URL}`, // 接口统一域名    timeout: 6000, // 設置超時
  timeout: 60 * 1000,
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8;'
  }
})
// 請求攔截器
instance.interceptors.request.use(
  (config: any) => {
    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    const token = ''
    token && (config.headers.Authorization = token)
    // 若請求方式為post，則將data參數轉為JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error) =>
    // 對請求錯誤做些什麼
    Promise.reject(error)
)

// 響應攔截器
instance.interceptors.response.use(
  (response) => {
    // 響應成功
    console.log('響應成功')
    return response.data
  },
  (error) => {
    console.log('響應錯誤', error)
    // 響應錯誤
    if (error.response && error.response.status) {
      const status = error.response.status
      switch (status) {
        case 500:
        case 503:
        case 404:
        case 403:
        case 400:
        case 401:
      }
      return error
    }
    return error
  }
)
export default instance
