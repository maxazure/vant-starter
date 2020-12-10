import request from '@/utils/request'

export function getSwipesForHome() {
  return request({
    url: '/swipes',
    method: 'get'
  })
}