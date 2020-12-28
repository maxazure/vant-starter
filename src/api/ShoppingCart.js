import request from '@/utils/request'

export function getShoppingCartItem() {
  return request({
    url: '/currentusercart',
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