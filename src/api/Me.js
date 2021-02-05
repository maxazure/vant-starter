import request from '@/utils/request'

export function getAddresses() {
  return request({
    url: '/addresses',
    method: 'get'
  })
}

export function getDefaultAddress() {
  return request({
    url: '/userdefaultaddress',
    method: 'get'
  })
}

export function addAddresses(data) {
  return request({
    url: '/addresses',
    method: 'post',
    data
  })
}

export function getOrder() {
  return request({
    url: '/orders',
    method: 'get'
  })
}

