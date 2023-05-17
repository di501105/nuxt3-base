import { axios } from '@/http/axios'
/**
 * query identification code
 */
export const getUserRepo = (data: any) => {
  return axios({
    url: `/users/${data.user}/repos?per_page=${data.pageNumber}`,
    method: 'get'
  })
}
