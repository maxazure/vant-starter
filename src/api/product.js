import request from '@/utils/request'

export function getTwoColProductList() {
  return request({
    url: '/homeproductlist',
    method: 'get'
  })
}

export function getProductListById(id) {
  return request({
    url: '/categories/' + id,
    method: 'get'
  })
}

export function getProductListWithPagination(Name,data) {
  return request({
    url: '/homeproductlist?product_type=' + Name,
    method: 'post',
    data
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
