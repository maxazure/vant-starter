import request from '@/utils/request'

export function getProductListForHome(id) {
  return request({
    url: '/categories/'+id,
    method: 'get'
  })
}

export function getProductInfo(id) {
  return request({
    url: '/products/'+id,
    method: 'get'
  })
}