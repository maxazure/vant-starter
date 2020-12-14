import request from '@/utils/request'

export function getShoppingCart() {
  return request({
    url: '/cartitems',
    method: 'get'
  })
}

export function getShoppingCartItem(id) {
  return request({
    url: '/cartitems/'+id,
    method: 'get'
  })
}

export function addShoppingCartItem(data) {
  return request({
    url: '/cartitems',
    method: 'post',
    data
  })
}

export function reviseShoppingCartItem(id,data) {
  return request({
    url: '/cartitems/'+id,
    method: 'put',
    data
  })
}

export function delShoppingCart(id) {
  return request({
    url: '/cartitems/'+id,
    method: 'delete'
  })
}