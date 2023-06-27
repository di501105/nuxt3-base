import 'axios'
declare module 'axios' {
  export interface AxiosResponse<T = any>{
    code: number
    response: T
    success: boolean
    data: T
  }
}