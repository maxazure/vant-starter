import request from '@/utils/request'

export function getTwoColProductList() {
  return request({
    url: '/subproductlist',
    method: 'get'
  })
}

export function getProductInfo(id) {
  return request({
    url: '/products/'+id,
    method: 'get'
  })
}

export function Search(product_name) {
  return request({
    url: '/search/' + product_name,
    method: 'get'
  })
}

export function getCategory() {
  return request({
    url: '/categorieslist',
    method: 'get'
  })
}